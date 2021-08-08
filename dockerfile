FROM node:current-slim

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9999

CMD [ "cd", "src" ]
CMD [ "npm", "start" ]

