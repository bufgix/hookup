from hookup.utils import PROJECT_DIR
from hookup.flask_ngrok import run_with_ngrok

from flask import Flask, render_template, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import pathlib
import jinja2

static_folder = PROJECT_DIR / 'hookup-frontend' / 'dist' 
upload_folder = PROJECT_DIR / 'uploads'

app = Flask(__name__, static_folder=static_folder, static_url_path="/")

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///42.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = "8c74a213d30f874095c630af"
app.config['UPLOAD_FOLDER'] = upload_folder
app.url_map.strict_slashes = False
CORS(app, resources={r"/api/*": {"origins": "*"}})

db = SQLAlchemy(app)
login_manager = LoginManager(app)
login_manager.login_view = "login"


## Added front end templates
template_dir = PROJECT_DIR / 'hookup-frontend' / 'dist' 
template_loader = jinja2.ChoiceLoader([
    app.jinja_loader,
    jinja2.FileSystemLoader(str(template_dir))
])

app.jinja_loader = template_loader



from hookup.views import *


def start_server():
    run_with_ngrok(app)
    app.run(debug=True)