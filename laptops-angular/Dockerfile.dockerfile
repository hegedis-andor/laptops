FROM node:10.16.0

WORKDIR /client
COPY package.json .
COPY package-lock.json .
RUN npm i
COPY . .

CMD [ "npm", "start"]
