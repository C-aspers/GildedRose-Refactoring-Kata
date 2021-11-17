# Projet

Votre mission est d'ajouter une nouvelle fonctionnalité à notre système pour que nous puissions commencer à vendre un nouveau type de produit.

Mais d'abord, laissez-moi vous présenter notre système :

Tous les éléments ont une valeur sellIn qui désigne le nombre de jours restant pour vendre l'article.
Tous les articles ont une valeur quality qui dénote combien l'article est précieux.
A la fin de chaque journée, notre système diminue ces deux valeurs pour chaque produit.
Plutôt simple, non ?

Attendez, ça devient intéressant :

Une fois que la date de péremption est passée, la qualité se dégrade deux fois plus rapidement.
La qualité (quality) d'un produit ne peut jamais être négative.
"Aged Brie" augmente sa qualité (quality) plus le temps passe.
La qualité d'un produit n'est jamais de plus de 50.
"Sulfuras", étant un objet légendaire, n'a pas de date de péremption et ne perd jamais en qualité (quality)
"Backstage passes", comme le "Aged Brie", augmente sa qualité (quality) plus le temps passe (sellIn) ; La qualité augmente de 2 quand il reste 10 jours ou moins et de 3 quand il reste 5 jours ou moins, mais la qualité tombe à 0 après le concert.
Nous avons récemment signé un partenariat avec un fournisseur de produit invoqué ("Conjured").
Cela nécessite une mise à jour de notre système :

les éléments "Conjured" voient leur qualité se dégrader deux fois plus vite que les objets normaux.
"Conjured" est un préfixe au nom des éléments cela signifie que tu dois identifier quels éléments en sont (exemple: "Conjured Dark Blade", "Conjured Magic Stick")

# Les tests

Tu as pu remarquer qu'un dossier spec était disponible, à quoi peut-il bien servir ?
À l'intérieur, tu trouveras un fichier JS dans lequel il y a quelques tests qui permettront de tester si ton programme réponds aux attentes des différentes règles :

Un test pour voir qualité baisse bien de 1
Un test pour voir si la qualité augmente bien de 1 pour les items dont c'est le cas
Mais comme tu peux le constater, il y a bien d'autres règles à tester, ce sera à toi d'écrire les tests supplémentaires ! Nous avons compté 9 règles qu'il faut tester (incluant les 2 tests déjà écrits). Nous vous donnons 2 règles supplémentaires à tester, à toi de trouver les restantes :

Tester si la qualité augmente par 3 quand il reste 5 jours ou moins (Aged Brie et Backstage passes)
Tester si la qualité de Sulfuras ne se modifie pas
Essayes de reprendre le modèle des 2 tests déjà écrits en modifiant seulement les items que tu ajoutes et les valeurs du tableau expected. Il est préférable d'ajouter plusieurs items pour chaque test afin d'être plus fiable.

Pour lancer la batterie de test, fais un npm install à la racine du dossier pour installer les différentes dépendances, puis lance le script npm test.
N'hésite surtout pas à rajouter d'autres tests si l'envie t'en prend !

_________________________________________________________________________________________________________

# Gilded Rose Refactoring Kata

This Kata was originally created by Terry Hughes (http://twitter.com/TerryHughes). It is already on GitHub [here](https://github.com/NotMyself/GildedRose). See also [Bobby Johnson's description of the kata](http://iamnotmyself.com/2011/02/13/refactor-this-the-gilded-rose-kata/).

I translated the original C# into a few other languages, (with a little help from my friends!), and slightly changed the starting position. This means I've actually done a small amount of refactoring already compared with the original form of the kata, and made it easier to get going with writing tests by giving you one failing unit test to start with. I also added test fixtures for Text-Based approval testing with TextTest (see [the TextTests](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/texttests))

As Bobby Johnson points out in his article ["Why Most Solutions to Gilded Rose Miss The Bigger Picture"](http://iamnotmyself.com/2012/12/07/why-most-solutions-to-gilded-rose-miss-the-bigger-picture), it'll actually give you
better practice at handling a legacy code situation if you do this Kata in the original C#. However, I think this kata
is also really useful for practicing writing good tests using different frameworks and approaches, and the small changes I've made help with that. I think it's also interesting to compare what the refactored code and tests look like in different programming languages.

I use this kata as part of my work as a technical coach. I wrote a lot about the coaching method I use in this book [Technical Agile Coaching with the Samman method](https://leanpub.com/techagilecoach). A while back I wrote this article ["Writing Good Tests for the Gilded Rose Kata"](http://coding-is-like-cooking.info/2013/03/writing-good-tests-for-the-gilded-rose-kata/) about how you could use this kata in a [coding dojo](https://leanpub.com/codingdojohandbook).

## How to use this Kata

The simplest way is to just clone the code and start hacking away improving the design. You'll want to look at the ["Gilded Rose Requirements"](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/GildedRoseRequirements.txt) which explains what the code is for. I strongly advise you that you'll also need some tests if you want to make sure you don't break the code while you refactor.

You could write some unit tests yourself, using the requirements to identify suitable test cases. I've provided a failing unit test in a popular test framework as a starting point for most languages.

Alternatively, use the "Text-Based" tests provided in this repository. (Read more about that in the next section)

Whichever testing approach you choose, the idea of the exercise is to do some deliberate practice, and improve your skills at designing test cases and refactoring. The idea is not to re-write the code from scratch, but rather to practice designing tests, taking small steps, running the tests often, and incrementally improving the design. 

### Gilded Rose Requirements in other languages 

- [English](GildedRoseRequirements.txt)
- [Español](GildedRoseRequirements_es.md)
- [Français](GildedRoseRequirements_fr.md)
- [日本語](GildedRoseRequirements_jp.md)
- [Português](GildedRoseRequirements_pt-BR.md)
- [Русский](GildedRoseRequirements_ru.txt)
- [ไทย](GildedRoseRequirements_th.md)
- [中文](GildedRoseRequirements_zh.txt)
- [한국어](GildedRoseRequirements_kr.md)

## Text-Based Approval Testing

This code comes with comprehensive tests that use this approach. For information about how to run them, see the [texttests README](https://github.com/emilybache/GildedRose-Refactoring-Kata/tree/master/texttests)

## Translating this code

More translations are most welcome! I'm very open for pull requests that translate the starting position into additional languages. 

Please note a translation should ideally include:

- a translation of the production code for 'update_quality' and Item
- one failing unit test complaining that "fixme" != "foo"
- a TextTest fixture, ie a command-line program that runs update_quality on the sample data for the number of days specified.

Please don't write too much code in the starting position or add too many unit tests. The idea with the one failing unit test is to tempt people to work out how to fix it, discover it wasn't that hard, and now they understand what this test is doing they realize they can improve it.  

If your programming language doesn't have an easy way to add a command-line interface, then the TextTest fixture is probably not necessary.

## Better Code Hub

I analysed this repo according to the clean code standards on [Better Code Hub](https://bettercodehub.com) just to get an independent opinion of how bad the code is. Perhaps unsurprisingly, the compliance score is low!

[![BCH compliance](https://bettercodehub.com/edge/badge/emilybache/GildedRose-Refactoring-Kata?branch=master)](https://bettercodehub.com/) 
