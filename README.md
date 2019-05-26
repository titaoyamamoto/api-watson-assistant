# api-watson-assistant

Is a simple API to interact with ChatBot(Watson Assistant), identify the intent, variables and flow, to do specific flow and return the result. 

Technologies: [HapiJS](https://hapijs.com) (to create the API and endpoint) - [Swagger](https://github.com/glennjones/hapi-swagger) (HapiJS's plugin to create the documentation using the input and output configurations) - [RedisDB](https://redis.io) (used to store the Watson dialog context) - [Docker](https://www.docker.com) (To up the RedisDB and API in the development environment) - [Watson assistant](https://www.ibm.com/cloud/watson-assistant) (ChatBot assistant, to define the intent, variables, etc).

## Configurations

Accessing the **application.config.js** file, you can change the file with your informations.

## Running

To run the API is possible to use the makefile or do specific code separate. 

**Using Makefile** - You can check commands in makefile 

Up the RedisDB and API
```bash
make up
```
Down the RedisDB and API
```bash
make down
```
Up just the RedisDB
```bash
make redisdb
```
To down just the RedisDB, you can use the same command previously.
```bash
make down
```

If you are running RedisDB separate, you can up the API using nodemon, or node directly
```bash
npm i
npm start (or nodemon index.js or node index.js)
```

## Endpoints

You can check and test the endpoint accessing the swagger:

[http://localhost:3000/documentation](http://localhost:3000/documentation)