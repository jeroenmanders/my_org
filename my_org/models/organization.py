from dataclasses import dataclass
from marshmallow import fields, post_load
from my_org.models.base import BaseModel, BaseModelSchema


@dataclass
class Organization(BaseModel):
    domain: str
    email: fields.Email(required=True)

    def __init__(self, **kwargs) -> None:
        super().__init__(**kwargs)
        self.domain = kwargs.get("domain")
        self.email = kwargs.get("email")


class OrganizationSchema(BaseModelSchema):
    domain = fields.Str(required=True)
    email = fields.Email(required=True)

    @post_load
    def make_organization(self, data, **kwargs) -> Organization:
        return Organization(**data)
