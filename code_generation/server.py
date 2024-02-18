from datasets import load_dataset
from flask import Flask, request, flash
from flask_cors import CORS, cross_origin
from flask_restful import Resource, Api
from json import dumps
from flask_jsonpify import jsonify
import sys

app = Flask(__name__)
api = Api(app)
CORS(app, supports_credentials=True)

class CodeGeneration():
    def __init__(self, language):
        self.language = language
        data = load_dataset("Fsoft-AIC/the-vault-function", split_set=["train"], languages=[language], streaming=True)
        self.data = data['train']
        data['train'] = data['train'].shuffle()

    def code_gen(self):
        self.data = self.data.shuffle()
        for sample in self.data:
            return sample['original_string']

#@app.route('/code_gen', methods=['GET'])

app.add_resource(CodeGeneration, '/start_game/<language>')
app.get_code('/start_game/<language>', 'code_gen', CodeGeneration.code_gen())