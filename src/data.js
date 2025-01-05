import p100 from "./img/famille.jpg"
import p099 from "./img/fond.jpg"
import v098 from "./video/24dec.mp4"
import p097 from "./img/sapin.jpg"
import a096 from "./sfx/dometcecile.aac"
import p095 from "./img/paddle.jpg"
import p094 from "./img/serieux.jpg"
import p093 from "./img/chef.jpg"
import v092 from "./video/twist.mp4"
import p091 from "./img/bonono.png"
import p090 from "./img/galette2025.jpg"
import p089 from "./img/slever.jpg"
import p088 from "./img/victor.jpg"
import v086 from "./video/pyves.mp4"
import p085 from "./img/isa+totof.jpg"
import p084 from "./img/charlie.jpg"
import v083 from "./video/christophe.mp4" 
import p082 from "./img/elvis.jpg"
import p081 from "./img/balaisev.jpg"
import v080 from "./video/novaflemme.mp4"

const v087 = "https://www.youtube.com/embed/HqAGmKrCFms";

var contents = [
{subtitle:"Coucou papa !",
  text:`Comme tu l'avais fait remarquer, il ne te reste plus que 100 jours avant la retraite.<br>
  Alors moi et mes p'tits potes, mois de décembre oblige, on a eu l'idée de rendre cette période un peu plus sympa à égrener : sous la forme d'un petit calendrier avec des petits mots, photos, souvenirs et d'autres surprises chaque jour !<br>
  Tu peux choisir entre afficher une seule carte à la fois, ou toutes côte à côte avec le bouton <i>Change layout</i>.<blockquote>- Clément</blockquote>`,
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
{subtitle:"En retard !",
  text:`Oups, j'ai pas été très assidu pour ce jour-là... Pas très suisse de ma part !<br>
  Tu vas finir par croire que je ne prends pas ce projet très au sérieux...? 🫣<br>
  Puisses-tu un jour me pardonner cet impair de famille !`,
  media:{type:"IMAGE", source:{url:p094}}},
{subtitle:"Ça suisse son cours",
  text:`Ah, voilà qui est un peu plus crédible !<br>
  Allez hopopop Cruchot... euh, Clément ! On complète le calendrier et plus vite que ça !<br>
  Père pas de temps !`,
  media:{type:"IMAGE", source:{url:p093}}},
{subtitle:"C'était vraiment pas twist !",
    text:"En dépit des circonspections du côté italien <s>de la Force</s> des Bauchet, rien ne décourage les twisteurs du vendredi soir !",
    media:{type:"VIDEO", source:{url:v092, type:"video/mp4"}}},
{subtitle:"Banané !",
  text:`Il est maintenant temps de dire adieu à cette année 2024 à la con qui ne manquera à personne, et de débouler dans ce deuxième quart de siècle comme Lucien chez ses parents ci-dessus !<br>
  Bon bout d'an !`,
  media:{type:"IMAGE", source:{url:p091}}},
{subtitle:"Rien à lui janvier !",
  text:`Pas de temps à perdre, c'est déjà la saison des Rois !<br>
  Pas pâtissier pour un sou, notre père hors pair jamais ne galère : rien ne saurait égaler ses galettes !`,
  media:{type:"IMAGE", source:{url:p090}}},
{subtitle:"Dernier trimestre !",
  text:`Dernier trimestre à tirer, le reste est déjà racheté !<br>
  Bon retour à la réalité post-fêtes, et bon courage pour 2025 !`,
  media:{type:"IMAGE", source:{url:p089}}},
{subtitle:"Victorieux !",
  text:`Encore un qui échappe au Club des 27... c'est pas plus mal !`,
  media:{type:"IMAGE", source:{url:p088}}},
{subtitle:"Les copains d'Arvor !",
  text:`Nous sommes en 2025 et vous regardez <s>l'ancêtre d'</s> Internet, bonsoir !`,
  media:{type:"VIDEO", source:{url:v087, type:"video/mp4"}}},
{subtitle:"Message de Pierre-Yves !",
  text:``,
  media:{type:"VIDEO", source:{url:v086, type:"video/mp4"}}},
{subtitle:"Message d'Isabelle & Totof !",
  text:`Bonjour Pascal alias le breton, Maurice.<br>
Mission impossible pour résumer notre longue amitié. L'Oustalet, Lavilliers. Coluche, le salon nautique... résument nos moments inoubliables.<br>
Alors la retraite va te permettre de peaufiner tes imitations pour nous enchanter lors de nos prochaines rencontres.<br>
Force et confiance pour cette nouvelle tranche de vie.`,
  media:{type:"IMAGE", source:{url:p085}}},
{subtitle:"Où t'es, ChPhotoarlie ?",
  text:`Il y a exactement 10 ans, l'année commençait très mal...<br>
  Alors pour la mémoire, j'ai repensé à ce fameux hors-série qui a longtemps trôné chez nous, le premier Charlie Hebdo que j'ai ouvert, et dont j'avais essayé de saisir toutes les faces de son humour du haut de mes 9 ans, à l'instar des Austin Powers que je découvrais alors !<br>
 (On l'a toujours, d'ailleurs ?...)`,
  media:{type:"IMAGE", source:{url:p084}}},
{subtitle:"Message de Christophe de la Chenelière !",
  text:``,
  media:{type:"VIDEO", source:{url:v083, type:"video/mp4"}}},
{subtitle:"Who is the King ?",
  text:`C'est aujourd'hui que ton cadeau de Noël s'active ! It's now or never !`,
  media:{type:"IMAGE", source:{url:p082}}},
{subtitle:"Pas d'malaise, Pascal !",
  text:`À l'aise sur la falaise !`,
  media:{type:"IMAGE", source:{url:p081}}},
{subtitle:"Message de... Nova ?",
  text:`La seule existence de Nova provoque une novague de flemme implacable...<br>Et on dirait bien que maman se l'est prise de plein fouet !`,
  media:{type:"VIDEO", source:{url:v080, type:"video/mp4"}}},
]

var waitContent = {
  subtitle:"En retard !", text:"Normalement il devrait y avoir quelque chose ici, mais j'ai oublié de le mettre...<br>Faut pas hésiter à venir me secouer sur Messenger !", media:{type:"IMAGE", source:{url:"https://www.museumtv.art/wp-content/uploads/2021/05/E5EA565D-7ADE-43FF-B762-844F60CFAE23-1024x778.jpeg"}}
}

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
    //Si dépassement de date : afficher ?¿?¿
    //Si dépassement de tableau : afficher retard
    if (today < date) {
    //if (false) {
      allItems.push(buildItem(num, date, lockedContent, true));
    } else if (i < contents.length) {
      allItems.push(buildItem(num, date, contents[i], false));
    } else {
      allItems.push(buildItem(num, date, waitContent, true));
    }
  }
  //console.log(allItems)
  return allItems;
}