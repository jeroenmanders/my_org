from typing import Generic, TypeVar
from my_org.models.base import BaseModel, BaseModelSchema
from infrastructure.db.mongodb import mongodb
from bson.objectid import ObjectId

Model = TypeVar("Model", bound=BaseModel)


class Controller(Generic[Model]):

    def __init__(self, database_name: str, collection_name: str):
        self.model: type[Model] = type(Model)
        self.database_name = database_name
        self.collection_name = collection_name

    def _get_col(self):
        return mongodb.cx.get_database(self.database_name).get_collection(self.collection_name)

    def get(self, model_id: str) -> Model:
        result = self._get_col().find_one({"_id": ObjectId(model_id)})
        result["_id"] = str(result["_id"])
        return result

    def get_all(self) -> list[Model]:
        result = mongodb.organizations.find()
        return list(result)

    def update(self, model: Model) -> Model:
        pass

    def create(self, model: Model, schema: BaseModelSchema) -> Model:
        model_dict = schema.dump(model)

        result = self._get_col().insert_one(model_dict)
        if not result.inserted_id:
            raise Exception("Insert failed.")

        model_dict["_id"] = str(model_dict["_id"])
        return model_dict
