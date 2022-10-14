
FROM node:latest

WORKDIR /usr/app

COPY package.json ./

RUN curl -v https://registry.npmjs.com/

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "run", "start:dev"]