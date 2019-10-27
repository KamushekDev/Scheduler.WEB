FROM node as react-build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm install
RUN npm run build
ENTRYPOINT tail -f /dev/null & wait
# ENTRYPOINT ["/bin/bash"]