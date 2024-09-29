from flask import Flask

from my_org.routes.root import root_blueprint
from my_org.routes.organization import org_blueprint


def register(app: Flask):
    app.register_blueprint(org_blueprint)
    app.register_blueprint(root_blueprint)
