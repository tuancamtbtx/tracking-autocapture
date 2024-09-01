from multiprocessing.connection import Client

import pandas as pd

class ClickhouseSinkConnector:
    def __init__(self, config: dict):
        self.config = config
        self.client = Client(**config)

    def write(self, data: pd.DataFrame, table: str):
        self.client.write(data, table)