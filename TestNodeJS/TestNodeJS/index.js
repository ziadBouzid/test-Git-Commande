/*const express = require("express");
/*const app = express();
app.listen(5000,() => {
    console.log("Runing on 5000")
});*/


/*const express = require("express");
const app = express();
app.get("/", (req, res) => {
    const nom = req.query.nom
    res.send("Bonjour Tout le Monde :" +nom);
});
const express = require('express');
const app = express();
app.get("/:id", (req, res) => {
    const nom = req.query.nom;
    const id = req.params.id;
    res.send("Bonjour Tout le Monde :" +nom +" id:" + id);
});

app.get("/create" , (req, res) => {
    req.send(`
        <form methode='post' action' / create-nom'><input type='texte' name='nom'/>
        `);
});

app.post("/create-nom", (req, res)=>{
    const item = req.body;
    console.log(item);
    res.redirect("/");
})

*/
/*
app.get('/about',(req,res)=>{
    res.write('<h1>About page</h1>');
    res.write("<p>This is About page</p>")
})
app.get('/contact',(req,res)=>{
    res.json({"name":"Hello World"})
})

*/

/*
const express = require('express');
const bodyParser = require("body-parser");

const app = express();  // Correction : parenthèse fermante

// Configuration de body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// Route pour afficher le formulaire
app.get("/create", (req, res) => {
    res.send(`  // Correction : 'res.send' au lieu de 'req.send'
        <form method='post' action='/create-nom'>  // Corrections multiples
            <input type='text' name='nom'/>  // Correction : 'text' au lieu de 'texte'
            <button type='submit'>Envoyer</button>
        </form>
    `);
});

// Route pour traiter le formulaire
app.post("/create-nom", (req, res) => {
    const item = req.body;
    console.log(item);
    res.redirect("/");
});

// Route d'accueil
app.get("/", (req, res) => {
    const nom = req.query.nom;
    res.send("Bonjour Tout le Monde :" + nom);
});

app.listen(5000, () => {
    console.log("Running on 5000");  // Correction : "Running"
});

*/
/*const express=require('express')
const bodyParser = require('body-parser');

const app=express();
app.use(express.json());

app.get('/',(req,res)=>{

  const nom = req.query.nom;
  const id = req.params.id;
    res.send("Bonjour tout le monde : " + nom + " id : " + id);
    
});

app.use(bodyParser.urlencoded());
app.get('/create',(req,res)=>{
  res.send(`
    <form method='post' action='/create-nom'><input type='text' name='nom'/>
    <input type='submit' value='valider'/></form>
    `);
});

app.post('/create-nom',(req,res)=>{
  const item = req.body;
  console.log(item);
  res.redirect("/");

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
*/





/* const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Tableau pour stocker les utilisateurs (en mémoire)
let users = [];

app.get('/', (req, res) => {
  const nom = req.query.nom;
  const id = req.query.id;
  
  // Affiche la liste des utilisateurs
  let userList = '';
  users.forEach(user => {
    userList += `<li>${user.nom} (ID: ${user.id})</li>`;
  });
  
  res.send(`
    <h1>Bonjour tout le monde</h1>
    <p>Nom: ${nom || 'Hafid'}</p>
    <p>ID: ${id || '123'}</p>
    
    <h2>Liste des utilisateurs:</h2>
    <ul>${userList || '<li>Belkorchi</li>'}</ul>
    
    <a href="/create">HB</a>
  `);
});

app.get('/create', (req, res) => {
  res.send(`
    <h1>Ajouter un utilisateur</h1>
    <form method='post' action='/create-nom'>
      <input type='text' name='nom' placeholder='Nom' required/>
      <input type='text' name='id' placeholder='ID' required/>
      <input type='submit' value='Valider'/>
    </form>
    <a href="/">Voir la liste</a>
  `);
});

app.post('/create-nom', (req, res) => {
  const { nom, id } = req.body;
  
  // Ajouter l'utilisateur au tableau
  users.push({ nom, id });
  
  console.log('Utilisateurs actuels:', users);
  
  // Rediriger vers la page d'accueil
  res.redirect("/");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

*/
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
    response+=<li>${user.nom}</li>;
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