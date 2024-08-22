const cors = require('cors');
const express = require('express');
const { sequelize } = require('./models');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index.route');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const app = express();

app.use(cors());

app.use(express.json());

app.use(cookieParser());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Swagger UI running on http://localhost:3000/api-docs');
});
