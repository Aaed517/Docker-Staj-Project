from flask import Flask, request
from flask_restful import reqparse, Resource, Api
import math

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument('sayi')

class asal(Resource):
    def get(self):
        return {'response', 'success'}
    def post(self):
        args = parser.parse_args()
        sayi = int(args['sayi'])
        for x in range(2,int(math.sqrt(sayi))+1,1):
            if sayi % x == 0:
                return str(sayi) + ' Asal Sayi Degil'
        return str(sayi) + ' Asal Sayi'


api.add_resource(asal, '/asalsayi')
