const express = require('express');

const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

// creating the route using http method get (first argument) and what the app should do when getting that request is the second argument in next line (callback fx with 2 parameters for request and response)
app.get('/',(req,res)=>{
    res.status(200).send(`<header><h1>Hello, World</h1><h1><a href="/magic8">Magic 8 Ball</a></h1></header>`) // status 200 for okay (part of header)
});

// --- part of the Bonus ---
// app.get('/',(req,res)=>{
//     res.status(418).send(`<img alt="teapot" src="https://http.cat/images/418.jpg"/>`)
// });

const catchPhrases = {
    "Emeril": "Bam!",
    "SteveMcGarrett": "Book 'em Danno!",
    "CoachTaylor": "Clear eyes, full hearts, can't lose",
    "HomerSimpson": "D'Oh",
    "BruceBanner": "Don't make me angry",
    "JJEvans": "Dy-no-myte!",
    "Batman": "To the Batmobile!",
    "Hannibal Smith": "I love it when a plan comes together",
    "Fraiser": "I'm listening",
    "Regis": "Is that your final answer?",
    "Borg": "Resistance is futile",
    "FoxMulder": "The truth is out there",
    "HarryCallahan": "Go ahead, make my day",
    "TravisBickle": "You talkin' to me?",
    "TonyMontana": "Say hello to my little friend",
    "Zeus": "Release the Kraken",
    "JamesBond": "The name is Bond, James Bond",
    "Dorothy": "Toto, I've got a feeling we're not in Kansas anymore",
    "RodTidwell": "Show me the money!",
    "Frankenstein": "It's alive! It's alive",
    "JimLovell": "Houston, we have a problem",
    "Rocky": "Yo, Adrian",
    "Gollum": "My precious",
    "JackDawson": "I'm king of the world!",
    "Terminator" : ["I'll be back", "Hasta la vista, baby"]
}

// error - can only send one response at a time (the first one)
app.get('/terminator', (req, res) => {
    res.send(catchPhrases.Terminator[0]);
    // res.send(catchPhrases.Terminator[1]);
})

app.get('/Jack-Dawson', (req, res) => {
    res.send(catchPhrases.JackDawson);
})

app.get('/Gollum', (req, res) => {
    res.send(catchPhrases.Gollum);
})

app.get('/Rocky', (req, res) => {
    res.send(catchPhrases.Rocky);
})

app.get('/JimLovell', (req, res) => {
    res.send(catchPhrases.JimLovell);
})

app.get('/Frankenstein', (req, res) => {
    res.send(catchPhrases.Frankenstein);
})

app.get('/RodTidwell', (req, res) => {
    res.send(catchPhrases.RodTidwell);
})

app.get('/Dorothy', (req, res) => {
    res.send(catchPhrases.Dorothy);
})

app.get('/JamesBond', (req, res) => {
    res.send(catchPhrases.JamesBond);
})

app.get('/Zeus', (req, res) => {
    res.send(catchPhrases.Zeus);
})

// ---- Magic 8-ball ----

const magic8Responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - Definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes, and signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
]

app.get('/magic8', (req, res) => {
    const magic = () => {
        const randomIndex = Math.floor(Math.random() * magic8Responses.length);
        return magic8Responses[randomIndex];
    };
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Magic 8 Ball Response</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <h1>${magic()}</h1>
    </body>
    </html>
    `);
});

// --- part of the bonus ---
// for test to run: we want app from the app.js file exported.
module.exports = app;