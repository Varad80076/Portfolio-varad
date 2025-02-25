FROM node:slim

# Set the working directory
WORKDIR /Server
# RUN mkdir testapp
# Set environment variables
ENV MONGO_DB_USERNAME=admin 
ENV MONGO_DB_PWD=qwerty 
ENV EMAIL_USER=badgujarvarad800@gmail.com
ENV EMAIL_PASS=wypwaknozszgjcrc
ENV EMAIL_HOST=smtp.gmail.com
ENV EMAIL_PORT=587
ENV MONGO_URL=mongodb://admin:qwerty@portfolio-main-mongo-1:27017
ENV IMAGE=https://drive.google.com/uc?id=1zENy62EbGP9yQso7iaJhJEgtqYV7ZP49

# COPY .env /Server/ \
# && chmod 755 /Server/ 
# RUN mkdir /Server/app/
# COPY .  /Server/testapp/

RUN mkdir /db/
COPY ./db/ /Server/db/

RUN mkdir /helper/
COPY ./helper/ /Server/helper/

RUN mkdir /models/
COPY ./models/ /Server/models/

COPY ./index.js /Server/
COPY ./.env /Server/

COPY ./mongodb.yaml /Server/
# RUN cp /Server/mongodb.yaml /Server/config/
# Copy package files and install dependencies
COPY package*.json /Server/
RUN npm install && \
    npm i mongoose dotenv cors express nodemailer nodemon

# Copy all application files
# COPY db /Server/
# COPY helper /Server/
# COPY models /Server/

# Expose port and set the entry point
EXPOSE 4000
CMD ["node", "./index.js"]