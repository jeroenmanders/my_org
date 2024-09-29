from flask import Flask
from infrastructure.config import Config
from routes import register


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    register(app)

    return app