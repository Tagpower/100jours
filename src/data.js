var contents = [
  {text:"", type:"IMAGE", url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Test.svg/2560px-Test.svg.png"},
  {text:"", type:"IMAGE", url:"https://cdn.discordapp.com/attachments/788050249356017725/1007350979429154886/IMG_20220811_201113.jpg?ex=6769a835&is=676856b5&hm=f6d5550a9142afa6417aecedea8536b8e16cdf9acac5e52d90e77fb733eecfcc&"},

]

function buildItem(num, content) {
  var date= new Date("2025-04-01");
  date.setDate(date.getDate()-num);

  if (new Date() < date) {
    return {
      num: num,
      date: date,
      locked: true,
      cardTitle: "Pas encore ouvert !",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.iconarchive.com/download/i27130/ph03nyx/super-mario/Question-Block.ico"
        }
      }
    }
  } else {
    return {
      num: num,
      date: date,
      locked: false,
      cardTitle: content.title || (date.toLocaleDateString() + " - Encore " + num + " jours !") ,
      cardSubtitle: content.subtitle || "",
      cardDetailedText: content.text,
      media: {
        type: content.type,
        source: {
          url: content.url
        }
      }
    }
  }


}

export default function buildAllItems() {
  var allItems = [];
  for (var i = 100; i >= 0; i--) {
    allItems.push(buildItem(i, contents[(100-i) % 2]));
  }
  console.log("allitems", allItems)
  return allItems;
}