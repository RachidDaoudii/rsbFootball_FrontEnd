# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to start the application
CMD ["npm", "run","dev"]

# FROM node:alpine as development 
# # Set the working directory
# WORKDIR /usr/src/app
# # Copy package files and install dependencies
# COPY package.json ./
# COPY tsconfig.json tsconfig.json
# COPY nest-cli.json nest-cli.json
# RUN npm install 

# # Copy only necessary source files
# COPY apps/blog apps/blog
# COPY libs libs


# # Build the application
# RUN npm run build blog
# # Second stage: Setting up the production environment
# FROM node:alpine as production 
# # Set environment variable
# ARG NODE_ENV=production
# ENV NODE_ENV=${NODE_ENV}
# # Set the working directory
# WORKDIR /usr/src/app
# # Copy package files
# COPY package.json ./
# # Install only production dependencies
# # This step is more efficient because it avoids installing devDependencies
# # ci is faster than npm for production
# RUN npm ci --only=production
# # Copy the built application from the development stage
# COPY --from=development /usr/src/app/dist ./dist
# # Command to run the application
# CMD ["node","dist/apps/blog/main"]