from flask import Blueprint
from flask.wrappers import Response
from my_org.controllers.organization import OrganizationController
from my_org.models.organization import OrganizationSchema
from my_org.routes.base import get, create, update

org_blueprint = Blueprint("organization", __name__, url_prefix="/api/v1/organization")


@org_blueprint.route("/<string:model_id>", methods=["GET"])
def get_organization(model_id: str) -> Response:
    return get(OrganizationController(), model_id)


@org_blueprint.route("/", methods=["POST"])
def create_organization() -> Response:
    return create(OrganizationSchema(), OrganizationController())


@org_blueprint.route("/<string:model_id>", methods=["PUT"])
def update_organization(model_id: str) -> Response:
    return update(OrganizationSchema(), OrganizationController(), model_id)
