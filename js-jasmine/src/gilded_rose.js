class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    let conjured = 1
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name.includes("Conjured")) {
        conjured = 2
      }

      if (
        this.items[i].name == "Aged Brie" ||
        this.items[i].name == "Backstage passes"
      ) {
        if (this.items[i].sellIn >= 11) {
          this.items[i].quality = this.items[i].quality + 1;
          this.items[i].sellIn = this.items[i].sellIn - 1;
        } else if (this.items[i].sellIn >= 6) {
          this.items[i].quality = this.items[i].quality + 2;
          this.items[i].sellIn = this.items[i].sellIn - 1;
        } else if (this.items[i].sellIn >= 1) {
          this.items[i].quality = this.items[i].quality + 3;
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
        if (
          this.items[i].name == "Backstage passes" &&
          this.items[i].sellIn <= 0
        ) {
          this.items[i].quality = 0;
        }
        if (this.items[i].name == "Aged Brie" && this.items[i].sellIn <= 0) {
          this.items[i].quality = this.items[i].quality + 3;
        }
      }

      if (
        this.items[i].name != "Aged Brie" &&
        this.items[i].name != "Backstage passes"
      ) {
        if (this.items[i].sellIn >= 0) {
          this.items[i].quality = this.items[i].quality - (1 * conjured);
          this.items[i].sellIn = this.items[i].sellIn - 1;
        } else {
          this.items[i].quality = this.items[i].quality - (2 * conjured);
          this.items[i].sellIn = this.items[i].sellIn - 1;
        }
      }

      if (this.items[i].quality >= 50) {
        this.items[i].quality = 50;
      }
      if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        this.items[i].quality = 80;
        this.items[i].sellIn = 80;
      }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop,
};
