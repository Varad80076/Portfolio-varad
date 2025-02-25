FROM node:slim

# Set the working directory
WORKDIR /Client
# RUN mkdir testapp
# Set environment variables

ENV FRONTEND_API_KEY=http://localhost:5173
ENV VITE_API_KEY=http://localhost:4000

# COPY .env /Server/ \
# && chmod 755 /Server/ 
# RUN mkdir /Server/app/
# COPY .  /client/testapp/

RUN mkdir /public/
COPY ./public/ /Client/public/

RUN mkdir /src/
COPY ./src/ /Client/src/

COPY ./index.html /Client/
COPY ./eslint.config.js /Client/
COPY ./postcss.config.js /Client/
COPY ./tailwind.config.js /Client/
COPY ./vite.config.js /Client/

# RUN mkdir /models/
# COPY ./models/ /Server/models/

# COPY ./index.js /Server/
# COPY ./.env /Server/

# COPY ./mongodb.yaml /Server/
# RUN cp /Server/mongodb.yaml /Server/config/
# Copy package files and install dependencies
COPY package*.json /Client/
RUN npm install && \
    npm i axios bootstrap ionicons react react-dom react-ionicons react-router-dom react-toastify reactstrap tailwindcss 

RUN npm run build
# Copy all application files
# COPY db /Server/
# COPY helper /Server/
# COPY models /Server/

# Expose port and set the entry point
EXPOSE 5173
CMD ["npm", "run","dev"]