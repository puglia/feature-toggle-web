### Image for building
FROM node:10-alpine as builder-node

# Copia código
COPY . /var/www/html
WORKDIR /var/www/html

RUN npm config -g set strict-ssl false

#Resolve node dependencies
RUN npm install

#Install angular CLI
RUN npm install -g @angular/cli@8.3.16
#build angular
RUN ng build --configuration=${BUILD_CONFIG}

### Image for execution ###
FROM nginx:1.15.7-alpine

# Copia o war do build
COPY --from=builder-node /var/www/html/dist/feature-toggle-web /usr/share/nginx/html

ARG BUILD_CONFIG=prod

RUN echo $'server {\n\
\tlisten 80;\n\
\t\tclient_max_body_size 32M;\n\
\tlocation / {\n\
\t\troot /usr/share/nginx/html;\n\
\t\tindex index.html index.htm;\n\
\t\ttry_files $uri $uri/ /index.html =404;\n\
\t}\n\
\tlocation /rest/ {\n\
\t\tproxy_pass http://backend-prod:8080/;\n\
\t\tproxy_http_version 1.1;\n\
\t\tproxy_set_header Upgrade $http_upgrade;\n\
\t\tproxy_set_header Connection $http_connection;\n\
\t\tproxy_set_header Host $host;\n\
\t\tproxy_cache_bypass $http_upgrade;\n\
\t}\n\
}' > /etc/nginx/conf.d/default.conf; 
