#Create our image from Node 6.9-alpine
FROM gcr.io/andela-docker/ci-builder-base:0.0.1-node6_grpc1-6-6

MAINTAINER Stephen Kanyi <stephenkanyi7@gmail.com>

#Create a new directory to run our app.
RUN mkdir -p /usr/src/app

#Set the new directory as our working directory
WORKDIR /usr/src/app

#Copy all the content to the working directory
COPY . /usr/src/app

#install node packages to node_modules
RUN npm install

#Our app runs on port 8000. Expose it!
EXPOSE 4200

#Run the application.
CMD npm start