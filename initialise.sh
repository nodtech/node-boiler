#!/bin/bash

echo "Running migrations..."
npm run migrate

echo "Running seeders..."
npm run seed

echo "Starting the application..."
npm start
