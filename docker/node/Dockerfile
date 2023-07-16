FROM node:alpine

USER root

RUN apk add --update yarn \
    && rm -rf /var/cache/apk/*
RUN apk add bash-completion