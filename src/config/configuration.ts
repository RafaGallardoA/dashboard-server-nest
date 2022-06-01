export default () => ({
  kafkaBrokers: parseKafkaBrokers(process.env.KAFKA_BROKERS),
  uriMongoDB: process.env.URI_MONGODB,
});

const parseKafkaBrokers = (brokerString: string) => {
  return brokerString.split(',');
};
