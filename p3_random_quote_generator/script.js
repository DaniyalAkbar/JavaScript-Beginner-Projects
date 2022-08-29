function generate(){
    var quotes = {
        "Antonio Brown": "I'm a good guy with a good heart, and I have good intentions.",
        "Mae West": "When I'm good, I'm very good. But when I'm bad I'm better.",
        "Edmund Burke": "The only thing necessary for the triumph of evil is for good men to do nothing.",
        "Lana Turner": "A gentleman is simply a patient wolf.",
        "Marcus Aurelius": "Waste no more time arguing about what a good man should be. Be one."
    }

    var authors = Object.keys("quotes");
    // console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)];
    // console.log(author)

    var quote = quotes[author];
    // console.log(quote);

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('author').innerHTML = author;
}