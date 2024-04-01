from datasets import load_dataset
import random
from flask import Flask, request, flash
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import sys

app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True)

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
                return sample['code'].split('\n')

#@app.route('/code_gen', methods=['GET'])

api.add_resource(CodeGeneration,'/start_game/<language>')