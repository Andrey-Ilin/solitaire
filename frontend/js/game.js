/**
 * Created by andrey on 28.03.16.
 */

    import deck from "./deck.js";

class Game {
    constructor(options) {
        this._el = options.element;
        this._dragManager = this._dragManager.bind(this)();
    }

    _dragManager() {
        let dragObject = {};
        let nextSiblings = [];
        let dragObjectParentEl;

        function onMouseDown(e) {

            if (e.which != 1) return;

            let elem = e.target.closest('.draggable');
            if (!elem) return;

            dragObject.elem = elem;

            dragObject.downX = e.pageX;
            dragObject.downY = e.pageY;

            return false;
        }

        function onMouseMove(e) {
            if (!dragObject.elem) return;

            if (dragObject.elem.getAttribute('data-open') != "true") {
                return;
            }

            if (dragObject.elem.parentElement.getAttribute('data-top') === 'bottom') {
                dragObjectParentEl = dragObject.elem.parentElement;

                if (dragObject.elem.nextElementSibling) {
                    while (dragObject.elem.nextElementSibling) {
                        nextSiblings.push(dragObject.elem.nextElementSibling);
                        dragObject.elem.parentElement.removeChild(dragObject.elem.nextElementSibling)
                    }

                    console.log(nextSiblings);
                }
            }


            if (!dragObject.avatar) {
                let moveX = e.pageX - dragObject.downX;
                let moveY = e.pageY - dragObject.downY;

                if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                    return;
                }

                dragObject.avatar = createAvatar(e);
                if (!dragObject.avatar) {
                    dragObject = {};
                    return;
                }

                let coords = getCoords(dragObject.avatar);
                dragObject.shiftX = dragObject.downX - coords.left;
                dragObject.shiftY = dragObject.downY - coords.top + (parseInt(dragObject.elem.style.marginTop || 0));


                startDrag(e);
            }

            dragObject.avatar.style.left = e.pageX - dragObject.shiftX + 'px';
            dragObject.avatar.style.top = e.pageY - dragObject.shiftY  + 'px';


            return false;
        }

        function getCoords(elem) {
            var box = elem.getBoundingClientRect();

            return {
                top: box.top + pageYOffset,
                left: box.left + pageXOffset
            };

        }

        function onMouseUp(e) {
            if (dragObject.avatar) {
                finishDrag(e);
            }

            dragObject = {};
        }

        function finishDrag(e) {
            let dropElem = findDroppable(e);

            if (!dropElem
                || (dragObject.elem.getAttribute('data-open') != "true")) {
                onDragCancel(dragObject);
            } else {
                onDragEnd(dragObject, dropElem);
            }
        }

        function createAvatar(e) {

            let avatar = dragObject.elem;
            let old = {
                parent: avatar.parentNode,
                nextSibling: avatar.nextSibling,
                position: avatar.position || '',
                left: avatar.left || '',
                top: avatar.top || '',
                zIndex: avatar.zIndex || '',
                marginTop: avatar.marginTop
            };

            avatar.rollback = function () {
                old.parent.insertBefore(avatar, old.nextSibling);
                avatar.style.position = old.position;
                avatar.style.left = old.left;
                avatar.style.top = old.top;
                avatar.style.zIndex = old.zIndex;
                avatar.style.marginTop = old.marginTop
            };

            return avatar;
        }

        function startDrag(e) {
            let avatar = dragObject.avatar;

            document.body.appendChild(avatar);
            avatar.style.zIndex = 9999;
            avatar.style.position = 'absolute';
        }

        function findDroppable(event) {
            dragObject.avatar.hidden = true;

            let elem = document.elementFromPoint(event.clientX, event.clientY);

            dragObject.avatar.hidden = false;

            if (elem == null) {
                return null;
            }

            return elem.closest('.droppable');
        }

        document.onmousemove = onMouseMove;
        document.onmouseup = onMouseUp;
        document.onmousedown = onMouseDown;

        function onDragEnd(dragObject, dropElem) {

            if ((dropElem.childNodes.length === 0
                && dragObject.elem.getAttribute('data-value') == 1
                && dropElem.getAttribute('data-top') == "top")) {
                insertCard();

            } else {

                if ((dropElem.childNodes.length === 0
                    && dragObject.elem.getAttribute('data-value') == 13
                    && dropElem.getAttribute('data-top') == "bottom")) {
                    insertCard();
                } else {
                    if ((dropElem.childNodes.length != 0
                        && dragObject.elem.getAttribute('data-value') == dropElem.childNodes.length + 1
                        && dragObject.elem.getAttribute('data-suit') == dropElem.lastElementChild.getAttribute('data-suit')
                        && dropElem.getAttribute('data-top') == "top")) {
                        insertCard();
                        dragObject.elem.style.marginTop = 0 + 'px';
                    } else {
                        if ((dropElem.childNodes.length != 0
                            && dragObject.elem.getAttribute('data-value') == dropElem.lastElementChild.getAttribute('data-value') - 1
                            && dragObject.elem.getAttribute('data-color') !== dropElem.lastElementChild.getAttribute('data-color')
                            && dropElem.getAttribute('data-top') == "bottom")) {
                            insertCard();

                        } else {
                            onDragCancel(dragObject);
                        }
                    }
                }
            }

            function insertCard() {

                dragObject.elem.style.marginTop = dropElem.childNodes.length * 15 + 'px';
                dropElem.appendChild(dragObject.elem);
                dragObject.elem.style.position = 'relative';
                dragObject.elem.style.zIndex = null;
                dragObject.elem.style.top = 0;
                dragObject.elem.style.left = 0;
                dragObject.elem.style.position = 'absolute';

                if (nextSiblings.length) {
                    for (let i = 0; i < nextSiblings.length; i++) {
                        nextSiblings[i].style.marginTop = dropElem.childNodes.length * 15 + 'px';
                        dropElem.appendChild(nextSiblings[i]);
                    }
                }
                nextSiblings = [];
            }
        }

        function onDragCancel(dragObject) {
            dragObject.avatar.rollback();
            if (nextSiblings.length) {
                for (let i = 0; i < nextSiblings.length; i++) {

                    dragObjectParentEl.appendChild(nextSiblings[i]);
                }
            }
            nextSiblings = [];
        }
    }

    toShuffleCards() {
        let COUNTCARDSINDECK = 52;
        let randomChoise;

        let placeForClosedDeck = document.querySelector('[data-component="deck-place"]');
        placeForClosedDeck.addEventListener('click', returnCards.bind(this));

        let placeWithOneCard = document.querySelector('[data-component="placeForRandomCards_1"]');
        let placeWithTwoCard = document.querySelector('[data-component="placeForRandomCards_2"]');
        let placeWithThreeCard = document.querySelector('[data-component="placeForRandomCards_3"]');
        let placeWithFourCard = document.querySelector('[data-component="placeForRandomCards_4"]');
        let placeWithFiveCard = document.querySelector('[data-component="placeForRandomCards_5"]');
        let placeWithSixCard = document.querySelector('[data-component="placeForRandomCards_6"]');
        let placeWithSevenCard = document.querySelector('[data-component="placeForRandomCards_7"]');


        toPlaceCard(placeWithSevenCard, 7);
        toPlaceCard(placeWithSixCard, 6);
        toPlaceCard(placeWithFiveCard, 5);
        toPlaceCard(placeWithFourCard, 4);
        toPlaceCard(placeWithThreeCard, 3);
        toPlaceCard(placeWithTwoCard, 2);
        toPlaceCard(placeWithOneCard, 1);

        function toPlaceCard(place, numberOfCards) {
            for (let i = 0; i < numberOfCards; i++) {
                randomChoise = Math.floor(Math.random() * COUNTCARDSINDECK);
                if (placeForClosedDeck.children[randomChoise]) {
                    place.appendChild(placeForClosedDeck.children[randomChoise]);
                    if (i != 0) {
                        place.children[i].style.marginTop = (place.children.length - 1) * 15 + 'px';
                    }
                } else {
                    i--;
                }
            }

            for (let i = 0; i < deck.length; i++) {
                if (deck[i]._el === place.lastElementChild) {
                    deck[i].turnToFaceCard();
                }
            }
        }


        function returnCards(e) {
            let target = e.target;
            let from = document.querySelector('[data-component="for-turn-deck"]');
            let to = document.querySelector('[data-component="deck-place"]');

            if (target.tagName === ('DIV')) {
                if (!to.firstElementChild) {
                    for (let i = from.children.length - 1; i >= 0; i--) {
                        to.appendChild(from.children[i]);
                    }
                }

                for (let i = 0; i < deck.length; i++) {
                    if (deck[i]._el.parentElement === to) {
                        deck[i]._face.hidden = true;
                        deck[i]._back.hidden = false;
                        deck[i]._close = true;
                    }
                }
            }
        }
    }
}

module.exports = Game;
