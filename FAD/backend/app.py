from flask import Flask, jsonify, request
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)

def getDbConnection():
    try:
        connection = pymysql.connect(
            host='localhost',
            user='fadadmin',
            password='fadadmin123',
            database='fad'
        )
        return connection
    except Exception as e:
        print(f"Ocorreu um erro com o banco de dados")
        return None

@app.route('/signup', methods=['POST'])
def signup():
    formSignUp = request.get_json()
    name = formSignUp.get('name')
    password = formSignUp.get('password')

    connection = getDbConnection()
    if connection is None:
        return jsonify({"error":"Erro ao conectar com o banco de dados"}), 500
    
    cursor = connection.cursor()

    cursor.execute("SELECT * FROM user WHERE user_name = %s", (name,))
    existingUser = cursor.fetchone()

    if existingUser:
        cursor.close()
        connection.close()
        return jsonify({"error": "Nome de usuário já cadastrado, tente outro nome"}), 400
    
    cursor.execute("INSERT INTO user(user_name, user_password) VALUES (%s, %s)", (name, password))
    connection.commit()

    cursor.close()
    connection.close()
    
    return jsonify({"message": "Usuário registrado com sucesso!"}), 200


if __name__ == '__main__':
    app.run(debug=True)
    