import random
import pandas as pd
import pymysql

from datasets import load_dataset

from flask import Flask, request
from flask_cors import CORS
from flask_restful import Resource, Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.exc import IntegrityError

from flask_jsonpify import jsonify
#import jwt
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
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:yellowcat222@127.0.0.1:3306/sys'
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
    id = db.Column(db.Integer, primary_key=True, autoincrement=True, unique=True) #change id to pk and autoincrement in db
    name = db.Column(db.String(16), unique=True, nullable=False) #name must be unique in db
    password = db.Column(db.String(16, collation='utf8mb4_cs_0900_as_cs'), nullable=False)
    language = db.Column(db.String(50), nullable=False, default='Python')
    cartype = db.Column(db.String(16), default='Sports')
    cartrail = db.Column(db.String(16), default='None')
    carcolor = db.Column(db.String(9), default='00FF00')
    time = db.Column(db.Integer, default=15)
    textcolor = db.Column(db.String(9), nullable=False, default='FFFFFF')
    textsize = db.Column(db.Integer, default=25)
    chartyped = db.Column(db.Integer, default=0)
    totaltime = db.Column(db.Integer, default=0)
    charsincorrect = db.Column(db.Integer, default=0)
    totalscore = db.Column(db.Integer, default=0)

    #returns a string representation of object
    def __repr__(self):
        return f"UserSettings('{self.name}')"
with app.app_context():
    db.create_all()
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
        # token = jwt.encode({
        #     'user_id': user.id,
        #     'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)
        # }, SECRET_KEY)

        #will display on frontend

        response_data = {
            "message": "Login successful",
        }

        return jsonify(response_data), 200
    else:
        return jsonify({"message": "Invalid username or password"}), 401

# Fill out next to needs to be callable from profile
@app.route('/populate_profile', methods=['POST'])
def populate_profile():
    data = request.get_json()
    name = data.get('name')
    
    #user and passs required
    if not name:
        return jsonify({"message": "No Name. Should send back to login"}), 400

    user = UserSettings.query.filter_by(name=name).first()
    
    if user:
        response_data = {
            "message": "init successful",
            "cartype": user.cartype,
            "cartrail": user.cartrail,
            "carcolor": user.carcolor,
            "language": user.language,
            "time": user.time,
            "textcolor": user.textcolor,
            "textsize": user.textsize,
            "chartyped" : user.chartyped,
            "totaltime" : user.totaltime,
            "charsincorrect" : user.charsincorrect,
            "totalscore" : user.totalscore
        }
        return jsonify(response_data), 200
    else:
        return jsonify({"message": "NO USER??"}), 401

@app.route('/update_profile', methods=['POST'])
def update_profile():
    data = request.get_json()
    name = data.get('name')

    # Fetch user by name
    user = UserSettings.query.filter_by(name=name).first()

    if not user:
        return jsonify({"message": "User not found"}), 404

    # Update user fields with new values if provided
    user.language = data.get('language', user.language)
    user.cartype = data.get('cartype', user.cartype)
    user.cartrail = data.get('cartrail', user.cartrail)
    user.carcolor = data.get('carcolor', user.carcolor)
    user.textcolor = data.get('textcolor', user.textcolor)
    user.time = data.get('time', user.time)
    user.textsize = data.get('textsize', user.textsize)
    user.chartyped = data.get('chartyped', user.chartyped)
    user.totaltime = data.get('totaltime', user.totaltime)
    user.charsincorrect = data.get('charsincorrect', user.charsincorrect)
    user.totalscore = data.get('totalscore', user.totalscore)

    try:
        db.session.commit()
        return jsonify({"message": "Profile updated successfully"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": "An error occurred while updating the profile", "error": str(e)}), 500

@app.route('/get_num_players', methods=['POST'])
def get_num_players():
    print("in getting number of players")
    data = request.get_json()
    players = data.get('players')
    f = open('../user-interface/src/assets/numofplayers.txt', 'w')
    f.write(players)
    return jsonify({"message": "not an error error"}), 500

@app.route('/get_code', methods=['POST'])
def get_code():
    print("in code gen")
    data = request.get_json()
    language = data.get('language')
    print(language)

    data = load_dataset("Fsoft-AIC/the-vault-function", split_set=["test"], trust_remote_code=True, cache_dir='./cache')
    data = data['test']
    data = data.shuffle()
    print("data loaded")
    f = open('../user-interface/src/assets/codesnippets.txt', 'w')
    counter = 10
    for index, sample in enumerate(data):
        #print(sample)
        if counter == 0:
            return jsonify({"message": "success"}), 500
        if sample['language'] == language:
            code = sample['code'].replace('\t', '')
            code = code.replace('    ', '')
            #code = code.lstrip()
            #print(f"{code}")
            try:
                f.write(code)
            except:
                counter += 1
            print("code snippet loaded")
            counter -= 1

    return jsonify({"message": "not an error error"}), 500



if __name__ == '__main__':
    app.run()

    


#@app.route('/code_gen', methods=['GET'])
#api.add_resource(CodeGeneration,'/start_game/<language>')

# Base = declarative_base()

# # Define your table structure
# metadata = MetaData()
# test = Table(
#     'test',
#     metadata,
#     Column('id', Integer, primary_key=True, autoincrement=True),
#     Column('name', String, unique=True, nullable=False),
#     Column('password', String, nullable=False),
#     Column('cartype', String, default='Sports'),
#     Column('cartrail', String, default='None'),
#     Column('language', String, default='Python'),
#     Column('time', Integer, default=15),
#     Column('textcolor', String, default='FFFFFF', nullable=False),
#     Column('textsize', Integer, default=25),
#     Column('carcolor', String, default='00FF00')
# )

# # Create an engine to connect to your MySQL database
# engine = create_engine('mysql+pymysql://root:password@127.0.0.1:3306/mydb', echo=True)

# # Check if the table already exists
# if not engine.dialect.has_table(engine, 'test'):
#     # Create the table in the database
#     metadata.dialect.create_all(engine)
# else:
#     print("Table 'test' already exists.")
