from pyflink.datastream import StreamExecutionEnvironment
from pyflink.datastream.connectors import FlinkKafkaConsumer
from pyflink.common.serialization import SimpleStringSchema

class KafkaSoureConnector:
    kafka_consumer_props = {
        'bootstrap.servers': 'localhost:9092',
        'group.id': 'test-group',
    }
    kafka_consumer = FlinkKafkaConsumer(
        topics='your_topic_name',
        deserialization_schema=SimpleStringSchema(),
        properties=kafka_consumer_props
    )

class KafkaSinkConnector:
    pass