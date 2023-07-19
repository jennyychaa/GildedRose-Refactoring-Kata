const { Shop, Item } = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("update a shop item that is within the sell by date", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("update a shop item that has past sell by date", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", -1, 20)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(18);
  });

  it("update a shop item and verify that its quality does not fall below 0", function() {
    const gildedRose = new Shop([
      new Item("Elixir of the Mongoose", 5, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Elixir of the Mongoose");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(0);
  });

  it("update Aged Brie", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 2, 0)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it("update Aged Brie and verify that its quality does not exceed 50", function() {
    const gildedRose = new Shop([
      new Item("Aged Brie", 0, 50)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(50);
  });

  it("update Backstage Passes when there are 5 days or less of the sellIn date", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 40)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(43);
  });

  it("update Backstage Passes when there are 10 days or less of the sellIn date", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 40)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(42);
  });

  it("update Backstage Passes and the sellIn date has passed", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", -1, 10)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it("update Backstage Passes and verify that its quality does not exceed 50", function() {
    const gildedRose = new Shop([
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 48)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(50);
  });

  it("update Conjured item", function() {
    const gildedRose = new Shop([
      new Item("Conjured Mana Cake", 3, 6)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake");
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
  });

  it("update Conjured item and verify that its quality does not fall below 0", function() {
    const gildedRose = new Shop([
      new Item("Conjured Mana Cake", -1, 1)
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(0);
  });

  it("update Sulfuras", function() {
    const gildedRose = new Shop([
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
    ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(80);
  });
});
