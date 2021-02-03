let quotes = ['frase 1', 'frase 2', 'frase 3', 'frase 4'];



function displayQuote() {
	let index = Math.floor(Math.random() * quotes.length);

	let div = document.querySelector('#quote');

	let quote = `<div class="card up-on-load">
<i class="fas fa-quote-left"></i>
<p><i>${quotes[index]}</i></p>
<i class="reverse fas fa-quote-left"></i>
</div>`;

	div.innerHTML = quote;
}

let btn=document.querySelector('.btn');
btn.addEventListener('click', displayQuote);