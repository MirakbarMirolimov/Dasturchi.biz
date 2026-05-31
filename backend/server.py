from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({'message': 'Dasturchi.biz Server is Online!'})


if __name__ == "__main__":
    app.run(debug=True, port=5000)