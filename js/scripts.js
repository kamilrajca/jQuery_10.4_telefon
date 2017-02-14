function Telefon(marka, kolor, cena) {
  this.marka = marka; // dzięki użyciu this, włąsciwość 'marka' przyjmie wartośc argumentu marka
  this.cena = cena;
  this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
  console.log('Marka telefonu to ' + this.marka + ', kolor ' + this.kolor + ', w cenie ' + this.cena +'.' )
}

var galaxyS6 = new Telefon ('Samsung Galaxy s6', 'srebrny', 2300);
var iPhone6 = new Telefon ('iPhone 6s', 'biały', 3499);
var onePlus = new Telefon ('OnePlus One', 'czarny', 2290);
  galaxyS6.printInfo();
  iPhone6.printInfo();
  onePlus.printInfo();

