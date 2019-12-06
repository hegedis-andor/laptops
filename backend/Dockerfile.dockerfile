FROM node:10.16.0

WORKDIR /api
COPY package*.json .
RUN npm i
COPY . .

CMD [ "npm", "start"]
