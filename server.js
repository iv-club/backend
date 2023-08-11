const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
        'id' : 1,
        'image' : 'https://placeimg.com/64/64/1',
        'name' : '김진우',
        'birthday' : '950521',
        'gender' : 'man',
        'job' : 'programmer'
      },
      {
        'id' : 2,
        'image' : 'https://placeimg.com/64/64/2',
        'name' : '홍길동',
        'birthday' : '950717',
        'gender' : 'man',
        'job' : 'programmer'
      },
      {
        'id' : 3,
        'image' : 'https://placeimg.com/64/64/3',
        'name' : '이순신',
        'birthday' : '021205',
        'gender' : 'man',
        'job' : '디자이너'
      }
    ])
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})