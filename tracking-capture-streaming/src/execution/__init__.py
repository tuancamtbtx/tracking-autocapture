from pyflink.datastream import StreamExecutionEnvironment

class FlinkExecutionFactory:
    def __init__(self) -> None:
        pass

    def create_execution(self, execution_type: str):
        env = StreamExecutionEnvironment.get_execution_environment()
        env.set_parallelism(1)
        return env
