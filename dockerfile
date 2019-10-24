FROM node as react-build
WORKDIR /app

RUN echo "Before $(ls)" >> ../log.txt
RUN  rm -rf /app/*
RUN echo "Now $(ls)" >> ../log.txt

COPY package*.json ./
RUN echo "After $(ls)" >> ../log.txt
RUN npm install


COPY . ./
RUN npm run build
RUN echo "grep $(grep -rio '???EatIt???' ./)" >> ../log.txt
ENTRYPOINT tail -f /dev/null & wait
# ENTRYPOINT ["/bin/bash"]