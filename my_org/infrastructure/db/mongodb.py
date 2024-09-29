from flask import current_app, g
from werkzeug.local import LocalProxy
from flask_pymongo import PyMongo


def get_mongodb():
    db = getattr(g, "_database", None)

    if db is None:
        db = g._database = PyMongo(current_app)

    return db


# Use LocalProxy to read the global db instance with just `db`
mongodb = LocalProxy(get_mongodb)
