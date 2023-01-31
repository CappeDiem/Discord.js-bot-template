# https://hub.docker.com/_/node/tags?page=1&name=alpine
FROM node:alpine3.16@sha256:5e6e9c2ac7ae6d48d3eefff99989e09eb94066ed33fcfc43f3f7c13dcc9cb61f
WORKDIR /app
COPY package*.json config.json ./
# https://docs.npmjs.com/cli/v9/commands/npm-install#synopsis
RUN npm i --save-prod
COPY --chown=node:node . ./
USER node
CMD ["node", "app.js"]
