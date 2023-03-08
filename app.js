const express = require('express');
const app = express();
var Items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }) );

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get('/', (req, res) => {

    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = today.toLocaleDateString("en-US", options);
    

    res.render('list', {kindOfDay: day, newvalue : Items });

});

app.post('/', (req, res) => {
    
    let Item = req.body.item;
    if(req.body.List === "Work") {
        workItems.push(Item);
        res.redirect('/work');
    } else {
        Items.push(Item);

        res.redirect('/');}
    
});

app.get('/work', function(req, res) {
    res.render('list', {kindOfDay: "Work List", newvalue : workItems });
    
});


app.listen(process.env.PORT ||3000, function() {

    console.log('Server is running on port 3000');

});
