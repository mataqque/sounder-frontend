FROM node:18-alpine

WORKDIR /app

RUN yarn install

COPY . .

CMD ["yarn", "dev"]

EXPOSE 3000