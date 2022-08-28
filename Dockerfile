# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
ADD package*.json ./


# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Start the server using the production build
##CMD [ "npm", "start" ]

