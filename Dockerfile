# Use an official Node.js runtime as a base image
FROM node:20.10.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .


# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "run","dev"]

