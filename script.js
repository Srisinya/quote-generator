var quote = document.getElementById('quote');
var author = document.getElementById('author');
var button = document.getElementById('button');
var random = 0;
var i = 0;
var data = [];


var data = [{
    quote: 'A writer who waits for ideal conditions under which to work will die without putting a word on paper.',
    author: 'E.B. White'
},
{
    quote: 'Exercise the writing muscle every day, even if it is only a letter, notes, a title list, a character sketch, a journal entry. Writers are like dancers, like athletes. Without that exercise, the muscles seize up.',
    author: ' Jane Yolen'
},
{
    quote: 'Imagination is like a muscle. I found out that the more I wrote, the bigger it got.',
    author: ' Philip José Farmer'

}, {
    quote: 'You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it. That’s why I say one of the most valuable traits is persistence.',
    author: ' Octavia E. Butler'
}, {
    quote: 'I’m writing a first draft and reminding myself that I’m simply shoveling sand into a box so that later I can build castles.',
    author: ' Shannon Hale'
}, {
    quote: 'I think new writers are too worried that it has all been said before. Sure it has, but not by you.',
    author: '  Asha Dornfest'
}];
var quote_function =() =>{
    console.log('button clicked', data);
    random = Math.floor(Math.random() * data.length);
    quote.innerHTML = data[random].quote;
    author.innerHTML = data[random].author;

}


button.addEventListener('click', quote_function);
quote_function();

