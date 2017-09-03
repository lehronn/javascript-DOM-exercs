//zadanie 9.5
var paragraph = document.getElementsByTagName( 'p' );
var buttonsArray = document.getElementsByClassName( 'button' );

for (var i = 0; i < buttonsArray.length; i += 1 ) {
  var newElem = document.createElement('p');
  newElem.innerHTML = buttonsArray[i].innerText;
  document.body.appendChild( newElem );
}
