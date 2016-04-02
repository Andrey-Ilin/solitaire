/**
 * Created by andrey on 30.03.16.
 */

'use strict';
let deck = (function () {
    let deck = [

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 2,
            "faceImageUrl": "img/2_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 2,
            "faceImageUrl": "img/2_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 2,
            "faceImageUrl": "img/2_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 2,
            "faceImageUrl": "img/2_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 3,
            "faceImageUrl": "img/3_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 3,
            "faceImageUrl": "img/3_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                 
                return div;
            })(),
            "value": 3,
            "faceImageUrl": "img/3_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 3,
            "faceImageUrl": "img/3_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 4,
            "faceImageUrl": "img/4_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 4,
            "faceImageUrl": "img/4_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 4,
            "faceImageUrl": "img/4_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 4,
            "faceImageUrl": "img/4_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 5,
            "faceImageUrl": "img/5_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 5,
            "faceImageUrl": "img/5_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 5,
            "faceImageUrl": "img/5_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 5,
            "faceImageUrl": "img/5_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 6,
            "faceImageUrl": "img/6_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 6,
            "faceImageUrl": "img/6_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 6,
            "faceImageUrl": "img/6_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 6,
            "faceImageUrl": "img/6_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 7,
            "faceImageUrl": "img/7_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 7,
            "faceImageUrl": "img/7_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 7,
            "faceImageUrl": "img/7_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 7,
            "faceImageUrl": "img/7_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 8,
            "faceImageUrl": "img/8_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 8,
            "faceImageUrl": "img/8_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 8,
            "faceImageUrl": "img/8_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 8,
            "faceImageUrl": "img/8_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 9,
            "faceImageUrl": "img/9_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 9,
            "faceImageUrl": "img/9_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 9,
            "faceImageUrl": "img/9_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 9,
            "faceImageUrl": "img/9_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 10,
            "faceImageUrl": "img/10_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 10,
            "faceImageUrl": "img/10_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 10,
            "faceImageUrl": "img/10_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 10,
            "faceImageUrl": "img/10_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 11,
            "faceImageUrl": "img/jack_of_clubs2.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 11,
            "faceImageUrl": "img/jack_of_diamonds2.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 11,
            "faceImageUrl": "img/jack_of_hearts2.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 11,
            "faceImageUrl": "img/jack_of_spades2.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 12,
            "faceImageUrl": "img/queen_of_clubs2.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 12,
            "faceImageUrl": "img/queen_of_diamonds2.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 12,
            "faceImageUrl": "img/queen_of_hearts2.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 12,
            "faceImageUrl": "img/queen_of_spades2.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 13,
            "faceImageUrl": "img/king_of_clubs2.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 13,
            "faceImageUrl": "img/king_of_diamonds2.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 13,
            "faceImageUrl": "img/king_of_hearts2.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 13,
            "faceImageUrl": "img/king_of_spades2.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        }),


        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 1,
            "faceImageUrl": "img/ace_of_clubs.png",
            "backImageUrl": "img/back.png",
            "suit": "club",
            "color": "black",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 1,
            "faceImageUrl": "img/ace_of_diamonds.png",
            "backImageUrl": "img/back.png",
            "suit": "diamond",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 1,
            "faceImageUrl": "img/ace_of_hearts.png",
            "backImageUrl": "img/back.png",
            "suit": "hearts",
            "color": "red",
            "close": true
        }),

        new Card({
            "element": (function () {
                let div = document.createElement('DIV');
                div.setAttribute("data-component", "card");
                div.className = 'draggable';
                return div;
            })(),
            "value": 1,
            "faceImageUrl": "img/ace_of_spades.png",
            "backImageUrl": "img/back.png",
            "suit": "spades",
            "color": "black",
            "close": true
        })
    ];


    Array.prototype.shuffle = function () {
        return this.sort(function () {
            return 0.5 - Math.random();
        });
    };

    deck = deck.shuffle();

    for (let i = 0; i < deck.length; i++) {
        document.querySelector('[data-component="deck-place"]').appendChild(deck[i]._el);
    }

    return deck;
})();


