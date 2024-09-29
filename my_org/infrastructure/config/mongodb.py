from dataclasses import dataclass
import os


@dataclass(order=False, frozen=True)
class MongoConfig:
    ORG_DB = os.environ.get("ORG_DB") or "my_org"
    ORG_COLLECTION = os.environ.get("ORG_COLLECTION") or "organizations"

