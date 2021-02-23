docker build -t ft-web .
docker run -p 4200:80 -e ENV=prod --link ftoggle-java:backend-prod --name feature-toggle-web ft-web