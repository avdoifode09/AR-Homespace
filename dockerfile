FROM node:18

WORKDIR /ar-homespace/

COPY public/ /ar-homespace/public
COPY src/ /ar-homespace/src
COPY package.json /ar-homespace/

RUN npm install

CMD ["npm", "start"]

EXPOSE 3000
