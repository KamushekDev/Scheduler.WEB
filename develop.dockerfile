FROM node:8 as react-build

RUN npm install react-scripts -g --silent
RUN npm install -g typescript

EXPOSE 3000
WORKDIR /develop/app

COPY *.json ./
RUN npm install

ENTRYPOINT ["npm", "start"]
# CMD tail -f /dev/null