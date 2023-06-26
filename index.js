let url = 'https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=hello';

fetch(url)
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => { throw err });