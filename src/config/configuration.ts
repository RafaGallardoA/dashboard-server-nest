export default () => ({
  kafkaBrokers: parseKafkaBrokers(process.env.KAFKA_BROKERS),
});

const parseKafkaBrokers = (brokerString: string) => {
  return brokerString.split(',');
};
