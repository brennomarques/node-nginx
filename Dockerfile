FROM node:14

WORKDIR /usr/src/app

EXPOSE 3000

# CMD ["node", "app.js"]


# Use a imagem base do Nginx
FROM nginx:latest

COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

# Comando para iniciar o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
