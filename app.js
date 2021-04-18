var ersteZiffer = parseFloat(prompt('Com sua gentileza, digite no campo abaixo o primeiro valor desejado'))
var zweitZiffer = parseFloat(prompt('Com sua gentileza novamente, digite no campo abaixo o  segundo valor desejado para começar a operação'))
var operation = prompt('Por ultimo, e com sua gentileza, digite no campo abaixo 1 para (X), 2 para (/), 3 para (+) ou 4 para (-) ')

if (operation == 1) {
  var ergebnis = ersteZiffer * zweitZiffer
  var gebrochenesErgebnis = ergebnis.toFixed(2)
  document.write("<h2>" + ersteZiffer + " X " + zweitZiffer + " = " + gebrochenesErgebnis + "</h2>")
}

else if (operation == 2) {
  var ergebnis = ersteZiffer / zweitZiffer
  var gebrochenesErgebnis = ergebnis.toFixed(2)
  document.write("<h2>" + ersteZiffer + " / " + zweitZiffer + " = " + gebrochenesErgebnis + "</h2>")
   }
  
else if (operation == 3) {
  var ergebnis = ersteZiffer + zweitZiffer
  var gebrochenesErgebnis = ergebnis.toFixed(2)
  document.write("<h2>" + ersteZiffer + " + " + zweitZiffer + " = " + gebrochenesErgebnis + "</h2>")
  }

else if (operation == 4) {
  var ergebnis = ersteZiffer - zweitZiffer
  var gebrochenesErgebnis = ergebnis.toFixed(2)
  document.write("<h2>" + ersteZiffer + " - " + zweitZiffer + " = " + gebrochenesErgebnis + "</h2>") 
}

else {
  document.write("<h2>ERROR 404</h2>")
}
