# Use an official Node.js runtime as the base image
FROM node:latest
LABEL authors="Nazar Bylen"

# Set environment variables for database connection
ARG DATABASE_HOST_ARG
ARG DATABASE_PORT_ARG
ARG DATABASE_USERNAME_ARG
ARG DATABASE_PASSWORD_ARG
ARG DATABASE_NAME_ARG

ENV DATABASE_HOST=${DATABASE_HOST_ARG}
ENV DATABASE_PORT=${DATABASE_PORT_ARG}
ENV DATABASE_USERNAME=${DATABASE_USERNAME_ARG}
ENV DATABASE_PASSWORD=${DATABASE_PASSWORD_ARG}
ENV DATABASE_NAME=${DATABASE_NAME_ARG}

# Set the working directory in the container
WORKDIR /app

# Install PM2 globally inside the container
RUN npm install pm2 -g

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Nest.js application
RUN npm run build

# Expose the port your Nest.js app is listening on (e.g., 3000)
EXPOSE 3000

# Start the Nest.js app using PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
