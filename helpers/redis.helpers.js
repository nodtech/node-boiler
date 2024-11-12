const redis = require('redis');

const client = redis.createClient({
  url: process.env.REDIS_URL
});

client.connect().catch(console.error);

async function getRedisTime() {
  try {
    const response = await client.sendCommand(['TIME']);
    const [seconds, microseconds] = response;
    const timeInMillis = parseInt(seconds) * 1000 + parseInt(microseconds) / 1000;

    return `Redis Server Time:', ${new Date(timeInMillis).toISOString()}`;
  } catch (err) {
    console.error('Error fetching time from Redis:', err);
  }
}

module.exports = {
    client,
    getRedisTime
}
