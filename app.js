const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));//to parse the body of the request

app.get('/', (req, res) => {
let today = new Date();

let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};
let day = today.toLocaleDateString("en-US", options);
res.render('list', {kindOfDay: day, newItems: items});

});
let items= [];

app.post('/', (req, res) => {
    let item = req.body.newItem;

    items.push(item);

    res.redirect('/');

});



app.listen(3000, () => {
    console.log('listening on port 3000');

});