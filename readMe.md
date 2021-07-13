Node version: 12.14.1

Packages Used:
- Express,
- Mongoose,
- Jest,
- tslint,
- Moment,
- dotenv


POST https://fathomless-meadow-94286.herokuapp.com/api/records

BODY:
```javascript
{
    "minCount": number, //100
    "maxCount": number, //500
    "startDate": Date //"2013-05-31T07:43:27.060Z"
    "endDate": Date //"2018-05-31T07:43:27.060Z"
}
```



local run command:

build: `npm run build` <br />
start: `npm start` <br />
test: `npm test` <br />