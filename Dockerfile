# Use the official Node.js 20 image as the base image
FROM node:20

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the initialise.sh script to the working directory and make it executable
COPY initialise.sh /app/initialise.sh

RUN chmod +x /app/initialise.sh

# Expose port 300
EXPOSE 3000

# Run the initialise.sh script and start the application
CMD ["/app/initialise.sh"]
