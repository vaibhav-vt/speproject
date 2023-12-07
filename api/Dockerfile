FROM node:17-alpine3.12

WORKDIR '/app'
ADD . /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8800

CMD ["npm","run", "start"]