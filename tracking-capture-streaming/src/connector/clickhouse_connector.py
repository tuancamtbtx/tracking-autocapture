from multiprocessing.connection import Client

import pandas as pd

class ClickhouseSinkConnector:
    def __init__(self, options: dict,connectionProperties,primaryKeys,partitionKeys,physicalRowDataType):
        self.options = options;
        self.connectionProperties = connectionProperties;
        self.primaryKeys = primaryKeys;
        self.partitionKeys = partitionKeys;
        self.physicalRowDataType = physicalRowDataType;
    def write(self, data: pd.DataFrame, table: str):
        self.client.write(data, table)