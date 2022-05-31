export default () => ({
  kafkaBrokers: parseKafkaBrokers(process.env.KAFKA_BROKERS),
  mongoDB: process.env.MONGO_DB,
});

const parseKafkaBrokers = (brokerString: string) => {
  return brokerString.split(',');
};
