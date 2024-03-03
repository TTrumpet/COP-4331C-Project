import random

import pandas as pd
from datasets import load_dataset

from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

from flask_jsonpify import jsonify
import jwt
import datetime 

# Requirements for functionality 
#   Python with virtual environemnts
#   Up to date DB -- SEE BELOW FOR CHANGES

# Steps to run 
#   1. start venv with "python -m venv "C:/Absolute path to code genration" venv"
#   2. activate venv with "venv/scripts/activate"
#   3. Install dependencies with pip install -r requirements.txt
#       3b. Make sure DB matches -- see below  
#   4. Run server.py in venv terminal
#   5. Run MYSQL DB
#   6. ng serve on seperate terminal in user-interface directory



#key used for session tokens. To be implemented
SECRET_KEY = '#@%@super2super3secret6348@#!@'


app = Flask(__name__)
api = Api(app)

#Set Uri to equal "mysql+pymysql://"User":"pass"@127.0.0.1:3306/"dbName"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@127.0.0.1:3306/mydb'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False #can be true if pref


#for connection with ang
CORS(app, supports_credentials=True)

#init DB 
db = SQLAlchemy()

# Initialize the database within the application context
with app.app_context():
    db.init_app(app)

#matches usersettings table with some modification that are required--SEE CHANGES BELOW
class UserSettings(db.Model): #changes to db are manditory for this to work
    __tablename__ = 'usersettings' #must be same
    id = db.Column(db.Integer, primary_key=True, autoincrement=True) #change id to pk and autoincrement in db
    name = db.Column(db.String(16), unique=True, nullable=False) #name must be unique in db
    password = db.Column(db.String(16), nullable=False)
    language = db.Column(db.String(50), default='Python')

    #returns a string representation of object
    def __repr__(self):
        return f"UserSettings('{self.name}')"

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.get_json() #get data from frontend

    if len(data['password']) < 8:
        return jsonify({"message": "Password must be 8 characters minimum"}), 401
    if len(data['password']) > 16:
        return jsonify({"message": "Password must be 16 characters at most"}), 401
    if len(data['name']) > 16:
        return jsonify({"message": "Name must be 16 characters at most"}), 401
    if len(data['name']) < 8:
        return jsonify({"message": "Name must be at least 8 characters"}), 401
    
    try:
        user = UserSettings(name=data.get('name'), password=data['password'], language=data.get('language', 'Python'))
        db.session.add(user)
        db.session.commit()
        return jsonify({"message": "User created successfully."}), 201
    except IntegrityError:
        db.session.rollback() # = dont store invalid
        return jsonify({"message": "Username already exists."}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    name = data.get('name')
    password = data.get('password')

    #user and passs required
    if not name or not password:
        return jsonify({"message": "Username and password are required"}), 400

    user = UserSettings.query.filter_by(name=name, password=password).first()
    
    if user and password:
        #session token stuff. To be implemented
        token = jwt.encode({
            'user_id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        }, SECRET_KEY)

        #will display on frontend
        return jsonify({"message": "Login successful"}), 200
    else:
        #will display on frontend
        return jsonify({"message": "Invalid username or password"}), 401

if __name__ == '__main__':
    app.run()










class CodeGeneration(Resource):
    def __init__(self, language):
        self.language = language
        data = load_dataset("Fsoft-AIC/the-vault-function", split_set=["train"], languages=[language], streaming=True, trust_remote_code=True)
        self.data = data['train']
        data['train'] = data['train'].shuffle()

    @app.route('/start_game/<language>', methods=['GET'])
    def code_gen(self):
        #self.data = self.data.shuffle()
        for index, sample in enumerate(self.data):
            if not random.randint(0, index):
                return sample['original_string']
api.add_resource(CodeGeneration,'/start_game/<language>')


