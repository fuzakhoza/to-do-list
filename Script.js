const apiUrl = "https://api.quotable.io/random";


async function getQuote(url) {
    let response = await fetch(apiUrl);
    let data = await response.json();

    
        document.querySelector('blockquote').innerHTML = data.content;
        document.querySelector('span').innerHTML = data.author;

    
}
getQuote(apiUrl);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + document.querySelector('blockquote').innerHTML  + "---BY " +  document.querySelector('span').innerHTML,'Tweet Window', 'width = 600px, height = 300')
}
tweet()

