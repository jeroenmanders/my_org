from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import Schema, fields


@dataclass
class CreatedUpdatedMixin:
    updated_at: datetime  # = datetime.now() - don't use defaults here because all attributes
    created_at: datetime  # = datetime.now() -   of subclasses would need to have defaults

    def __post_init__(self) -> None:
        self.sort_index = self.name
        if self.updated_at is None:
            self.updated_at = datetime.now()
        if self.created_at is None:
            self.created_at = datetime.now()


class BaseModelSchema(Schema):
    id = fields.Str(dump_only=True)
    name = fields.Str(required=True)
    tags = fields.Dict(required=False)
    created_at = fields.DateTime(dump_only=True)
    updated_at = fields.DateTime(dump_only=True)

# See https://www.dataquest.io/blog/how-to-use-python-data-classes/
# frozen = True would make that attributes cannot be updated after a class is instantiated
@dataclass(order=True, frozen=False)
class BaseModel(CreatedUpdatedMixin):
    id: str
    name: str
    tags: dict[str, str]
    sort_index: str = field(init=False, repr=False)

    def __init__(self, **kwargs):
        for arg in kwargs:
            # TODO: annotations only contains the fields of the subclass and not the fields of the superclass
            # if arg not in self.__annotations__:
            #     raise TypeError(f"__init__() got an unexpected keyword argument '{arg}'")

            self.__setattr__(arg, kwargs[arg])

    def __post_init__(self) -> None:
        self.sort_index = self.name

    # @staticmethod
    # def get(self, pk: int): # why doesn't this work? Because it's this class itself? -> BaseModel:
    #     resp = mongodb.get(pk)
    # def zzbuild_query_sort_project(filters):
    #     """
    #     Builds the `query` predicate, `sort` and `projection` attributes for a given
    #     filters dictionary.
    #     """
    #     query = {}
    #     # The field "tomatoes.viewer.numReviews" only exists in the movies we want
    #     # to display on the front page of MFlix, because they are famous or
    #     # aesthetically pleasing. When we sort on it, the movies containing this
    #     # field will be displayed at the top of the page.
    #     sort = [("tomatoes.viewer.numReviews", -1)]
    #     project = None
    #     if filters:
    #         if "text" in filters:
    #             query = {"$text": {"$search": filters["text"]}}
    #             meta_score = {"$meta": "textScore"}
    #             sort = [("score", meta_score)]
    #             project = {"score": meta_score}
    #         elif "cast" in filters:
    #             query = {"cast": {"$in": filters["cast"]}}
    #         elif "genres" in filters:
    #
    #             """
    #             Ticket: Text and Subfield Search
    #
    #             Given a genre in the "filters" object, construct a query that
    #             searches MongoDB for movies with that genre.
    #             """
    #
    #             # TODO: Text and Subfield Search
    #             # Construct a query that will search for the chosen genre.
    #             query = {}
    #
    #     return query, sort, project
