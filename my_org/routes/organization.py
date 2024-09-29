from flask import Blueprint
from flask.wrappers import Response
from controllers.organization import OrganizationController
from models.organization import OrganizationSchema
from routes.base import get, create

org_blueprint = Blueprint("organization", __name__, url_prefix="/api/v1/organization")


@org_blueprint.route("/<string:model_id>", methods=["GET"])
def get_organization(model_id: str) -> Response:
    return get(OrganizationController(), model_id)


@org_blueprint.route("/", methods=["POST"])
def create_organization() -> Response:
    return create(OrganizationSchema(), OrganizationController())
