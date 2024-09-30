from flask import Flask
from my_org.infrastructure.config import Config
from my_org.routes import register


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    register(app)

    return app
