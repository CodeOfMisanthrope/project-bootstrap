FROM node:22.11

EXPOSE 3030

WORKDIR app

COPY packages/client/ ./packages/client/
COPY packages/server/ ./packages/server/
COPY packages/common/ ./packages/common/

COPY package.json .yarnrc.yml yarn.lock entrypoint.sh ./
COPY .yarn ./.yarn

RUN chmod +x ./entrypoint.sh
RUN corepack enable
RUN yarn

ENTRYPOINT ["./entrypoint.sh"]

# docker build -t server .   (все ок)
# docker run -d --name server server
# docker run --name server -it server /bin/bash
