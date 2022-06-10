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
res.render('list', {listTitle: day, newItems: items});

});
let items= [];
let workItems= [];

app.post('/', (req, res) => {
    let item = req.body.newItem;
    if(req.body.list === 'Work'){
        workItems.push(item);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
res.render('list', {listTitle: 'Work List', newItems: workItems});

});

app.post('/work', (req, res) => {
    let item = req.body.newItem;

    workItems.push(item);

    res.redirect('/work');



});


app.listen(3000, () => {
    console.log('listening on port 3000');

});