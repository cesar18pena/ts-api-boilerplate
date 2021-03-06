FROM node:10.16-alpine

WORKDIR '/usr/app'

COPY ./package*.json ./

RUN npm install --silent

COPY . .

CMD ["npm", "run", "start"]
