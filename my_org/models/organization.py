from dataclasses import dataclass
from datetime import datetime
from marshmallow import  fields, post_load
from my_org.models.base import BaseModel, BaseModelSchema


@dataclass
class Organization(BaseModel):
    domain: str
    email: fields.Email(required=True)

    def __init__(self, **kwargs)-> None:
        super().__init__(**kwargs)
        self.domain = kwargs.get("domain")
        self.email = kwargs.get("email")

    def create(self, name: str, tags: dict[str, str]):
        org = Organization(name=name, tags=tags, domain=self.domain, created_at=datetime.now(), updated_at=datetime.now())
            # return db.comments.insert_one(comment_doc)


class OrganizationSchema(BaseModelSchema):
    domain = fields.Str(required=True)
    email = fields.Email(required=True)

    @post_load
    def make_organization(self, data, **kwargs) -> Organization:
        return Organization(**data)
