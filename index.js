const cors = require('cors');
const express = require('express');
const { sequelize } = require('./models');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index.route');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const { StatusCodes } = require('http-status-codes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

//  Health check api
app.get('/health', async (_req, res) => {
  try {
    //  get current time from DB to check connectivity
    const [results] = await sequelize.query('SELECT NOW() as current_time');
    const currentTime = results[0].current_time;

    res.send({
      message: 'Application running successfully!',
      uptime: process.uptime(),
      database: currentTime,
    });
  } catch (error) {
    console.log(`Error in health check API :: ${error}`);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Swagger UI running on http://localhost:3000/api-docs');
});
