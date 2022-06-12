FROM "nginx:1.21.6"
EXPOSE 80
COPY ./snippets /etc/nginx/snippets
RUN rm -rf /etc/nginx/conf.d
COPY ./conf.d /etc/nginx/conf.d
