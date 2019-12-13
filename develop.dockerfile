FROM node as react-build
EXPOSE 3000
WORKDIR /dev/app
USER root
COPY package*.json ./
RUN npm install
RUN npm install react-scripts -g --silent

COPY . ./
ENTRYPOINT ["npm", "start"]
# CMD tail -f /dev/null