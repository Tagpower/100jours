function buildItem(num, media) {
  var date= new Date("2025-04-01");
  date.setDate(date.getDate()-num);

  return {
    num: num,
    date: date,
    locked: (new Date() < date),
    cardTitle: date.toLocaleDateString() + " - Encore " + num + " jours !" ,
    media: {
      type: "IMAGE",
      source: {
        url: media
      }
    }
  }
}

export default function buildAllItems() {
  var allItems = [];
  for (var i = 100; i >= 0; i--) {
    allItems.push(buildItem(i, "https://cdn.discordapp.com/attachments/788050249356017725/1007350979429154886/IMG_20220811_201113.jpg?ex=6769a835&is=676856b5&hm=f6d5550a9142afa6417aecedea8536b8e16cdf9acac5e52d90e77fb733eecfcc&"))
  }
  console.log("allitems", allItems)
  return allItems;
}