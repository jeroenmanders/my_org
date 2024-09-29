from flask import Response, jsonify, request
from marshmallow import ValidationError

from controllers.base import Controller
from models.base import BaseModelSchema


def get(controller: Controller, model_id: str) -> Response:
    o = controller.get(model_id)
    return jsonify(o, 200)


def create(schema: BaseModelSchema, controller: Controller) -> Response:
    j = request.get_json()
    try:
        org = schema.load(j)
    except ValidationError as e:
        return jsonify({"error": e.messages}, 400)

    o = controller.create(org, schema)
    return jsonify(o, 200)
