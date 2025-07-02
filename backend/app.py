from flask import Flask
from flask_cors import CORS
from models.user import db
from routes.auth import auth_bp

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///finance.db'
app.config['SECRET_KEY'] = 'your_secret_key'

db.init_app(app)
CORS(app)

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix='/api/auth')

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
