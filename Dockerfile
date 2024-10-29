FROM node:23

RUN apt-get update && apt-get install -y git

WORKDIR /usr/src/app/portfolio-app

RUN git clone https://github.com/GooPoo/Portfolio.git .

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]