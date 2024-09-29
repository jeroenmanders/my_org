import os
from dataclasses import dataclass

from infrastructure.config.mongodb import MongoConfig


@dataclass
class LoggingConfig:
    debug = True
    # LOGGING_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    # LOGGING_FILE = "app.log"
    # LOGGING_FILE_MODE = "a"
    # LOGGING_FILE_MAX_BYTES = 1000000
    # LOGGING_FILE_BACKUP_COUNT = 5


@dataclass(order=False, frozen=True)
class Config:
    logging = LoggingConfig()
    mongo = MongoConfig()
    SECRET_KEY = os.environ.get("SECRET_KEY") or os.urandom(16)
    MONGO_USERNAME = "root"
    MONGO_PASSWORD = "password"
    MONGO_HOST = "127.0.0.1"
    MONGO_PORT = 27017
    MONGO_URI = f"mongodb://{MONGO_USERNAME}:{MONGO_PASSWORD}@{MONGO_HOST}:{MONGO_PORT}/"
