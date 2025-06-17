import express from 'express';

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send("Bonjour je vais juste deployer mon application gratuitement et bien moi j ai pas d'argent pour paier merci!");
})

app.listen(PORT, () => console.log('listen on port' + PORT));