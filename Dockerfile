# Use the official lightweight Node.js 12 image.
# https://hub.docker.com/_/node
FROM node:17-slim
EXPOSE 80
 
WORKDIR /usr/src
COPY ./ /usr/src
 
# Install dependencies and build the project.
RUN npm install
RUN npm run build

WORKDIR ../dist
 
# Run the web service on container startup.
CMD ["node", "main.ts"]