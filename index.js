const express=require('express')
const bodyParser = require('body-parser');

const app=express();
app.use(express.json());

/*app.get('/',(req,res)=>{

  const nom = req.query.nom;
  const id = req.params.id;
    res.send("Bonjour tout le monde : " + nom + " id : " + id);
    
});*/

app.use(bodyParser.urlencoded());
app.use(express.urlencoded({ extended : false}));
app.get('/create',(req,res)=>{
  res.send(`
    <form method='post' action='/create-nom'><input type='text' name='nom'/>
    <input type='submit' value='valider'/></form>
    `);
});

const users = [{nom:"toto"},{nom:"titi"}];
app.post('/create-nom',(req,res)=>{
  const item = req.body;
  users.push({nom:item.nom});
  console.log(item);
  res.redirect("/");
});

app.get('/',(req,res)=>{  
  let response="";
  users.forEach(user=>{
    response+=`<li>${user.nom}</li>`;
  });
  res.send(response);
});

app.get('/about',(req,res)=>{
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("<h1>About pagé</h1>");
    res.write("<p> This is about page</p>");
    res.end();
});

app.get('/contact',(req,res)=>{
    res.json({"name":"Hello world"});
});


app.listen(5000,()=>{
    console.log("Runing on 5000");
});