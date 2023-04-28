from flask import Flask, request
import jwt

app = Flask(__name__)
app.config['SECRET_KEY'] = 'SHASasfas41242'

def authenticate(username, password):
    if username and password:
        return True
    else:
        return False

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if authenticate(username, password):
        token = jwt.encode({'username': username}, app.config['SECRET_KEY'])
        return {'token': token}
    else:
        return {'error': 'Invalid username or password'}

@app.route('/protected', methods=['GET'])
def protected():
    token = request.headers.get('Authorization').split()[1]
    try:
        payload = jwt.decode(token, app.config['SECRET_KEY'], ["HS256"])
        return {'data': 'This is protected data for user {}'.format(payload['username'])}

    except:
        return {'error': 'Invalid token'}

if __name__ == '__main__':
    app.run(debug=True)
