const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Simulated users array
const users = [
  { nom: "Toto", prenom: "Jean", adresse: "Agadir" },
  { nom: "Titi", prenom: "Ali", adresse: "Marrakech" }
];

// Form to add a user
app.get('/create', (req, res) => {
  res.send(`
    <form method='post' action='/create-nom'>
      <input type='text' name='nom' placeholder='Nom' required/>
      <input type='text' name='prenom' placeholder='Prénom' required/>
      <input type='text' name='adresse' placeholder='Adresse' required/>
      <input type='submit' value='Valider'/>
    </form>
    <br>
    <a href="/">Retour à la liste</a>
  `);
});

// Handle form submission
app.post('/create-nom', (req, res) => {
  const { nom, prenom, adresse } = req.body;
  users.push({ nom, prenom, adresse });
  res.redirect('/');
});

// Show table of users
app.get('/', (req, res) => {
  let table = `
    <h2>Liste des utilisateurs</h2>
    <a href="/create">Ajouter un utilisateur</a>
    <br><br>
    <table border="1" cellspacing="0" cellpadding="8">
      <tr>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Adresse</th>
        <th>Action</th>
      </tr>
  `;

  users.forEach((user, index) => {
    table += `
      <tr>
        <td>${user.nom}</td>
        <td>${user.prenom}</td>
        <td>${user.adresse}</td>
        <td>
          <a href="/edit/${index}">Edit</a> | 
          <a href="/delete/${index}">Delete</a>
        </td>
      </tr>
    `;
  });

  table += "</table>";
  res.send(table);
});

// Delete a user
app.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.redirect('/');
});

// Simple edit form (for demonstration)
app.get('/edit/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  if (!user) return res.send("Utilisateur introuvable");

  res.send(`
    <h2>Modifier l'utilisateur</h2>
    <form method='post' action='/edit/${id}'>
      <input type='text' name='nom' value='${user.nom}' required/>
      <input type='text' name='prenom' value='${user.prenom}' required/>
      <input type='text' name='adresse' value='${user.adresse}' required/>
      <input type='submit' value='Mettre à jour'/>
    </form>
    <br>
    <a href="/">Retour</a>
  `);
});

// Handle edit form submission
app.post('/edit/:id', (req, res) => {
  const id = req.params.id;
  const { nom, prenom, adresse } = req.body;
  users[id] = { nom, prenom, adresse };
  res.redirect('/');
});

// About & Contact
app.get('/about', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.write("<h1>About pagé</h1>");
  res.write("<p>This is about page</p>");
  res.end();
});

app.get('/contact', (req, res) => {
  res.json({ name: "Hello world" });
});

app.listen(5000, () => {
  console.log("Running on port 5000");
});