# getir challenge 

```
This is a nodeJs application. It has single endpoint that fethes data from given mongoDb url and returns result in the format mentioned.  
```

Node version: 12.14.1

Packages Used:
- Express,
- Mongoose,
- Jest,
- tslint,
- Moment,
- dotenv

Please send a POST request to this url
POST https://fathomless-meadow-94286.herokuapp.com/api/records

```javascript

BODY:
{
    "minCount": number, //100
    "maxCount": number, //500
    "startDate": Date //"2014-12-12"
    "endDate": Date //"2016-12-12"
}
```

### Command to run the app locally

#### create a .env file with
MONGO_URL={mongo_url_here}


build: `npm run build` <br />
start: `npm start` <br />
test: `npm test` <br />