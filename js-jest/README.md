# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest.

## Assumptions

Upon reviewing the [Requirements Specifications](../README.md), here are some assumptions that were made in implementing the solution:

- When the `sellIn` value is greater or equal to 0, the items are within their sell-by date.

- There are other variations of _Sulfuras_, _Backstage passes_, and _Conjured_ item types. Hence, the rules of how quality for each of these items are applicable if the item's name contains the value.

- The rule below excludes _Aged Brie_, _Sulfuras_, _Backstage passes_, and _Conjured_ items.

  > Once the sell by date has passed, Quality degrades twice as fast

- Since _Sulfuras_ "never has to be sold", its `sellIn` value never decrements.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
