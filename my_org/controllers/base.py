from typing import Generic, TypeVar
from bson.objectid import ObjectId
from my_org.models.base import BaseModel, BaseModelSchema
from my_org.infrastructure.db.mongodb import mongodb

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

    def update(self, model_id: str, model: Model, schema: BaseModelSchema) -> Model:
        model_dict = schema.dump(model)
        fltr = {"_id": ObjectId(model_id)}
        new_values = {"$set": model_dict}
        _ = self._get_col().update_one(fltr, new_values)
        return self.get(model_id)

    def create(self, model: Model, schema: BaseModelSchema) -> Model:
        model_dict = schema.dump(model)

        result = self._get_col().insert_one(model_dict)
        if not result.inserted_id:
            raise Exception("Insert failed.")  # pylint: disable=W0719

        model_dict["_id"] = str(model_dict["_id"])
        return model_dict
