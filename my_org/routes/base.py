from flask import Response, jsonify, request
from marshmallow import ValidationError

from my_org.controllers.base import Controller
from my_org.models.base import BaseModelSchema


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


def update(schema: BaseModelSchema, controller: Controller, model_id: str) -> Response:
    j = request.get_json()
    current = controller.get(model_id)
    if not current:
        return jsonify({"error": "Not found"}, 404)

    merged = {**current, **j}
    try:
        _ = schema.load(merged, partial=True)
    except ValidationError as e:
        return jsonify({"error": e.messages}, 400)

    o = controller.update(model_id, j, schema)
    return jsonify(o, 200)
