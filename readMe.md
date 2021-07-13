# getir challenge 

```
This is a nodeJs application. It has single endpoint that fetches data from given mongoDb url
and returns result in the format mentioned.
```

Packages Used:
- Express,
- Typescript,
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

Node version: 12.14.1

### Setup to run the app locally

create a .env file with
```
MONGO_URL={mongo_url_here}
```
Command:

- `npm install`
- build: `npm run build`
- start: `npm start`
- test: `npm test`
