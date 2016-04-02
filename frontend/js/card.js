/**
 * Created by andrej on 3/27/16.
 */
'use strict';

class Card {
    constructor(options) {
        //super(options);
        this._el = options.element;
        this._value = options.value;
        this._color = options.color;
        this._face = (function () {
            let img = document.createElement('IMG');
            img.src = options.faceImageUrl;
            options.element.appendChild(img);
            return img;
        })();
        this._back = (function () {
            let img = document.createElement('IMG');
            img.src = options.backImageUrl;
            options.element.appendChild(img);
            return img;
        })();

        this.turnToBackCard = this.turnToBackCard();
        this._suit = options.suit;
        this._close = options.close;
        this._el.addEventListener('click', this._openCard.bind(this));
        }

    turnToBackCard(){
        this._face.hidden = true;
        this._back.hidden = false;
        this._close = true;
    }

    turnToFaceCard() {
        this._face.hidden = false;
        this._back.hidden = true;
        this._el.setAttribute("data-open", "true");
        this._el.setAttribute("data-value", this._value);
        this._el.setAttribute("data-color", this._color);
        this._el.setAttribute("data-suit", this._suit);
        this._close = false;
    }

    _openCard(event) {
        let target = event.target;
        let card = target.closest('.draggable');
        if (!card) {
            return;
        }
        if (this._close) {
            let placeForOpenDeck = document.querySelector('[data-component="for-turn-deck"]');
            let placeForCloseDeck = document.querySelector('[data-component="deck-place"]');
            let thisElementParent = this._el.parentElement;


            if (thisElementParent === placeForCloseDeck) {
            this.turnToFaceCard();
            placeForOpenDeck.appendChild(this._el);
            } else {
                if (card === thisElementParent.lastElementChild) {
                this.turnToFaceCard();
                }
            }
        }
    }

}
