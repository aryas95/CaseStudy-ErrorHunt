//  npm install 
//  nodemon install

//part1
// 1.In package.json the main file server.js change to app.js
// 2.body parser requirement in app.js
// 3.the name homeRouters change to homeRouter
// 4.change the variable users into user in the user.js file
// 5.server listening port change into 5000 in console.log

//part2
// 7.add app.use (cors())
// 8.change images into image in  authorsroute.js


const express = require('express'); 
const path = require ('path'); 
const bodyParser = require ('body-parser');
const cors = require('cors');


const nav= [
    {
        link:"/books",
        title:"Books"
    },
    {
        link:"/authors",
        title:"Authors"
    },
    {
        link:"/addbook",
        title:"Add Book"
    },
    {
        link:"/addauthor",
        title:"Add Author"
    }
]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{});
    
});





app.listen(5000,()=>{
    console.log("Server Ready on 5000");
});