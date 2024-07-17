# Use the official node image as the base image
FROM node:18-alpine
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies
RUN yarn install
# Copy the rest of the application code to the working directory
COPY . .
# Build the React application
RUN yarn build
# Install a simple HTTP server to serve the static files
RUN yarn global add serve
# Set the command to run the application
CMD ["serve", "-s", "build", "-l", "3001"]
# Expose port 3001 to the outside world
EXPOSE 3001
#gggggggggggggggg