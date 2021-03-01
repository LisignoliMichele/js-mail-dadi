// Chiedi all’utente la sua email,
var userMail = prompt("enter your Email");
// Lista mail di chi può accedere
var class27 = ["b.a.benvenuti3@gmail.com", "bertotti4997@gmail.com", "tepo1986@gmail.com", "tommasoborsatti89@gmail.com", "beatrice.castagno1@gmail.com", "matia.casu@gmail.com", "gabriele.corti.lavoro@gmail.com", "nico92weyb@gmail.com", "dossena.tommaso.dt@gmail.com", "alessandro.falcone96@gmail.com", "alfredo.ficocelli@gmail.com", "gianluca.forgia@gmail.com", "bambudio1993@gmail.com", "filogarota101@gmail.com", "a.giordano89@gmail.com", "grecomatteo86@gmail.com", "andrea3aprile99@gmail.com", "danielelai86@gmail.com", "francescalai1690@gmail.com", "giuseppe.lana2772@gmail.com", "michele.boolean@gmail.com", "luca.lorenzetti0@gmail.com", "macchiettajack@gmail.com", "sergio.marretta@gmail.com", "nico.matassoli@gmail.com", "memeoluca6@gmail.com", "francescalaurapetra@gmail.com", "tommaso.plinio@gmail.com", "matpolli93@gmail.com", "mattosabbo23@gmail.com", "d.sadotti@gmail.com", "lorenaspiller@gmail.com", "luigispisto92@gmail.com", "dvergani94@gmail.com", "jacopovinanti@gmail.com", "dsnwebdev@gmail.com"];
// resultato
var result = 0
//controllo.
for ( var i = 0; i < class27.length; i++) {
  if (userMail == class27[i]){
    result = 1
  }
}
 // stampa un messaggio appropriato sull’esito del controllo
if (result == 1){
  alert("You are in the best class!!!")
}else{
  alert("You may be lucky in other things!")
}
