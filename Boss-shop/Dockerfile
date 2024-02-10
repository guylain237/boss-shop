# Stage 1
# Build docker image of the React app
FROM node:18 AS build-stage

# Set working directory
WORKDIR /usr/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application
COPY . .

# Build the application
RUN npm run build

# Stage 2
# Build docker image of Nginx
FROM nginx:alpine

# Set working directory to Nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy static assets from the build stage
COPY --from=build-stage /usr/app/dist .

# Container runs Nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]