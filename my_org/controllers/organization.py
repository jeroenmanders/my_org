from my_org.models.organization import Organization
from my_org.infrastructure.config import Config
from .base import Controller


class OrganizationController(Controller[Organization]):

    def __init__(self):
        super().__init__(Config.mongo.ORG_DB, Config.mongo.ORG_COLLECTION)
