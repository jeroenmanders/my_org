# TODO

## What's next?

- Add update-method in models and controllers (like create)
- Add testing
- Use SonarLint 
- Use Kind instead of docker compose

## Documentation and tutorials

- http://mongoengine.org/
- [Python sequences: A comprehensive guide](https://realpython.com/python-sequences/)
- [What are Python Asterisk and Slash Special Parameters For?](https://realpython.com/python-asterisk-and-slash-special-parameters/#:~:text=The%20asterisk%20(%20*%20)%20and%20forward,you%20must%20pass%20by%20keyword.)
- Checkout [Flask Blueprints](https://flask.palletsprojects.com/en/1.1.x/blueprints/)
- Is [this tutorial](https://flask-docs-ja.readthedocs.io/en/latest/tutorial/) interesting?
- [WSGI](https://wsgi.readthedocs.io/en/latest/) (Web Server Gateway Interface) is a specification for web servers to forward requests to web applications or frameworks written in Python.
- [Werkzeug](https://werkzeug.palletsprojects.com/en/3.0.x/) and [Werkzeug local](https://werkzeug.palletsprojects.com/en/3.0.x/local/)

### Done
- [Use a Flask Blueprint to Architect Your Applications](https://realpython.com/flask-blueprint/)
- First part done: [Django vs. Flask: Which Is the Best Python Web Framework?](https://blog.jetbrains.com/pycharm/2023/11/django-vs-flask-which-is-the-best-python-web-framework/)


## Other

- Checkout @jwt_required() (see https://github.com/vimalloc/flask-jwt-extended/issues/418)
- Use linting and SonarQube
- What is Flask CORS?


```python
from flask_cors import CORS
CORS(app)

```


## Close database connection

This should probably go into db.py, but how do we import our app(lication):

```python
@app.teardown_appcontext
def teardown_db(exception):
    db = g.pop('db', None)

    if db is not None:
        db.close()
```