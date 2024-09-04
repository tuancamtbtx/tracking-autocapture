const KAFKA_HOST = process.env.KAFKA_HOST || 'localhost:9092'
const KAFKA_TOPIC = process.env.KAFKA_TOPIC || 'tracking'
const KAFKA_GROUP_ID = process.env.KAFKA_GROUP_ID || 'tracking-group'
const KAFKA_CLIENT_ID = process.env.KAFKA_CLIENT_ID || 'tracking-client'
const KAFKA_SECURITY_PROTOCOL = process.env.KAFKA_SECURITY_PROTOCOL || 'SASL_SSL'
const KAFKA_SASL_MECHANISM = process.env.KAFKA_SASL_MECHANISM || 'PLAIN'
const KAFKA_SASL_USERNAME = process.env.KAFKA_SASL_USERNAME || 'user'
const KAFKA_SASL_PASSWORD = process.env.KAFKA_SASL_PASSWORD || 'password'

export default {
  kafkaHost: KAFKA_HOST,
  kafkaTopic: KAFKA_TOPIC,
  kafkaGroupId: KAFKA_GROUP_ID,
  kafkaClientId: KAFKA_CLIENT_ID,
  kafkaSecurityProtocol: KAFKA_SECURITY_PROTOCOL,
  kafkaSaslMechanism: KAFKA_SASL_MECHANISM,
  kafkaSaslUsername: KAFKA_SASL_USERNAME,
  kafkaSaslPassword: KAFKA_SASL_PASSWORD
}
