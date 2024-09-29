from flask import Blueprint

root_blueprint = Blueprint("root", __name__)


@root_blueprint.route("/")
def index():
    return "Hello, World!"
