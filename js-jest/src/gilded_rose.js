class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const { name, quality, sellIn } = this.items[i];
      const lcName = name.toLowerCase();

      if (lcName === 'aged brie') {
        // "Aged Brie" actually increases in Quality the older it gets
        this.items[i].quality = Math.min(quality + 1, 50);
        this.items[i].sellIn--;
      } else if (lcName.includes('backstage passes')) {
        if (sellIn > 5 && sellIn <= 10) {
          // Quality increases by 2 when there are 10 days or less
          this.items[i].quality = Math.min(quality + 2, 50);
        } else if (sellIn > 0 && sellIn <= 5) {
          // Quality increases by 3 when there are 5 days or less
          this.items[i].quality = Math.min(quality + 3, 50);
        } else {
          this.items[i].quality = 0;
        }
        this.items[i].sellIn--;
      } else if (lcName.includes('conjured')) {
        // "Conjured" items degrade in Quality twice as fast as normal items
        this.items[i].quality = Math.max(0, quality - 2);
        this.items[i].sellIn--;
      } else if (lcName.includes('sulfuras')) {
        // Do nothing
        // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
      } else {
        // Once the sell by date has passed, Quality degrades twice as fast
        if (sellIn >= 0) {
          this.items[i].quality = Math.max(0, quality - 1);
        } else {
          this.items[i].quality = Math.max(0, quality - 2);
        }
        this.items[i].sellIn--;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
