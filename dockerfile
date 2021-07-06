FROM node:current-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9999

CMD [ "npm", "start" ]

