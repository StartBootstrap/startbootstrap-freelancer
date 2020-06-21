FROM node:12.18.0
RUN apk add netcat-openbsd bash
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install sequelize
RUN npm install sequelize-cli

# add app
COPY . ./


# start app
CMD ["tail", "-f", "/tmp"]
