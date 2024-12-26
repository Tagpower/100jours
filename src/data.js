import p100 from "./img/famille.jpg"
import p099 from "./img/fond.jpg"
import v098 from "./video/24dec.mp4"
import p097 from "./img/sapin.jpg"
import a096 from "./sfx/dometcecile.aac"
import p095 from "./img/paddle.jpg"

var contents = [
{subtitle:"Coucou papa !",
  text:"Comme tu l'avais fait remarquer, il ne te reste plus que 100 jours avant la retraite.<br>Alors moi et mes p'tits potes, mois de décembre oblige, on a eu l'idée de rendre cette période un peu plus sympa à égrener : sous la forme d'un petit calendrier avec des petits mots, photos, souvenirs et d'autres surprises chaque jour !<br>Tu peux choisir entre afficher une seule carte à la fois, ou toutes côte à côte avec le bouton <i>Change layout</i>.<blockquote>- Clément</blockquote>",
  media:{type:"IMAGE", source:{url:p100}}},
{subtitle:"De quoi t'as l'Erdre ?",
  text:"Une image de fond pour un même message de fond.<br>Allez, encore 99 jours et t'auras fini de ramer !", 
  media:{type:"IMAGE", source:{url:p099}}},
{subtitle:"Réveil ? Oh non, sagement chez nos parents !",
  text:"We're caught in a trap !", 
  media:{type:"VIDEO", source:{url:v098, type:"video/mp4"}}},
{subtitle:"Joyeux Noël !",
  text:"Dernier Noël avant la fin du monde (du travail) !", 
  media:{type:"IMAGE", source:{url:p097}}},
{subtitle:"Message de Dom & Cécile à domicile (à dos d'missile) !",
  media:{type:"VIDEO", source:{url:a096, type:"audio/aac"}}},
{subtitle:"Y a paddle pour ça !",
  text:"Bon, peut-être pas, mais y a une saison, quand même !<br>C'est vrai que l'été nous parait bien lointain... mais le prochain aura, je pense, une saveur particulière !",
  media:{type:"IMAGE", source:{url:p095}}},

]

var lockedContent = {
  subtitle:"Pas encore ouvert !", text:"", media:{type:"IMAGE", source:{url:"https://i.imgur.com/FDA4vAA.jpeg"}}
}

function buildItem(num, date, content, locked) {
  return {
    num: num,
    date: date,
    locked: locked,
    cardTitle: date.toLocaleString("fr-CH", {dateStyle: "full"}),
    cardSubtitle: content.subtitle || "",
    cardDetailedText: content.text,
    media: content.media
  }
}

export default function buildAllItems() {
  var allItems = [];
  var today = new Date();
  var date = new Date("2025-04-01");
  var num;
  for (var i = 0; i <= 100; i++) {
    num = 100-i;
    date = new Date("2025-04-01");
    date.setDate(date.getDate()-num);
    //Si dépassement de tableau ou de date : afficher ?¿?¿
    if (i < contents.length && today >= date ) {
      allItems.push(buildItem(num, date, contents[i], false));
    } else {
      allItems.push(buildItem(num, date, lockedContent, true));
    }
  }
  console.log(allItems)
  return allItems;
}