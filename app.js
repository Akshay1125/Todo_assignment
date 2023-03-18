const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }) );

app.set('view engine', 'ejs');
app.use(express.static("public"));

let listss1 =[];
let listss2 =[];
let listss3 =[];



app.get('/', (req, res) => {


    res.render('list1', {listss1 : listss1 , listss2 : listss2 , listss3 : listss3 });

});

app.post('/', (req, res) => {
  
    let Item1 = req.body.text1;
    let Item2 = req.body.text2;
    let Item3 = req.body.text3;

    console.log(Item1);
    console.log(Item2);
    console.log(Item3);
    
    if(Item1!==undefined) {listss1.push(Item1);}
    if(Item2!==undefined){ listss2.push(Item2);}
    if(Item3!==undefined){ listss3.push(Item3);}
    res.redirect('/');
    

});




app.listen(process.env.PORT ||3000, function() {

    console.log('Server is running on port 3000');

});


//https://github.com/Akshay1125/ToDoList1

//https://www.linkedin.com/posts/activity-7039291019539931136-e11U?utm_source=share&utm_medium=member_desktop