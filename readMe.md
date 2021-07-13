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
- Tslint,
- Moment,
- Dotenv

Please send a POST request to this url </br>
https://fathomless-meadow-94286.herokuapp.com/api/records

```javascript

BODY:
{
    "minCount": number, //100
    "maxCount": number, //500
    "startDate": Date //"2014-12-12"
    "endDate": Date //"2016-12-12"
}
```

#### Working Curl:

```bash
curl --request POST 'https://fathomless-meadow-94286.herokuapp.com/api/records' \
--header 'Content-Type: application/json' \
--data-raw '{
    "minCount":100,
    "maxCount": 300,
    "startDate": "2014-12-12",
    "endDate": "2015-01-12"
}'
```

#### Node version: 12.14.1

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
