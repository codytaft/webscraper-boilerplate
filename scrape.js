var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true }); // this opens a browser. Normally we don't want that to happen, as it slows things down

let urls = [];

for (let i = 0; i <= 26; i++) {
  let letter = String.fromCharCode(97 + i);
  console.log(letter);
  urls.push(`http://www.dreammoods.com/dreamdictionary/${letter}_all.htm`);
}

// nightmare
//   .goto('http://www.dreammoods.com/dreamdictionary/a_all.htm')
//   .wait('div.views-field.views-field-field-picture')
//   .evaluate(function () {
//     var nameNodes = document.querySelectorAll('h3.thin.field-content')
//     var list = [].slice.call(nameNodes); // Why did I have to do this?
//     return list.map(function(node){
//       return node.innerText
//     });
//   })
//   .end()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.error('Search failed:', error);
//   });
