FROM node:argon

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY package.json $APP_HOME
RUN npm install

COPY . $APP_HOME

EXPOSE 3000
CMD [ "npm", "start" ]
