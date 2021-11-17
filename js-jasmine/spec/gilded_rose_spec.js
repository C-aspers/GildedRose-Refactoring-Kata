var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should decrease quality by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(9);
  });


  it("should decrease sellIn by 1", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9);
  });

  // Augmentation quantité pour 1, 2 et 3 quantités
  it("should increase quality by 1", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 15, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
  });

  it("should increase quality by 2", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 7, 10), new Item("Backstage passes", 7, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
    expect(items[1].quality).toEqual(12);
  });

  it("should increase quality by 3", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 3, 10), new Item("Backstage passes", 3, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(13);
    expect(items[1].quality).toEqual(13);
  });

// Sulfuras
  it("Sulfuras : should not loss quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 80, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

////Règle des 50 pour Aged Brie and backstage////

//quand ajout de 3 qualités
  it("Aged Brie and backstage: quality 3: should not more than 50 qualities", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 48), new Item("Backstage passes", 5, 48) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

//quand ajout de 2 qualités
  it("Aged Brie and backStage: quality 2: should not more than 50 qualities", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 49), new Item("Backstage passes", 5, 49) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

//quand ajout de 1 qualité
  it("Aged Brie and backStage: quality 1: should not more than 50 qualities", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 5, 50), new Item("Backstage passes", 5, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

////Règle backstage: la qualité se met à 0 lorsque la date de péremption est dépassée////
  it("Backstage : should have no less than 0", function() {
    const gildedRose = new Shop([ new Item("Backstage passes", 0, 5) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
});

// name   seelIn   quality