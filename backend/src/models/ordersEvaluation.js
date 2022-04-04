class ordersEvaluation {

    _maxBonus; //maximal possible Bonus, 100%
    _nameOfProduct;
    _client;

    /**
     * on a scale from 1 to 5
     * bad, satisfying, good, very good, excellent
     */
    _clientRanking;
    _items;
    _bonus;


    constructor(nameOfProduct, client, clientRanking, items) {
        this._nameOfProduct = nameOfProduct;
        this._client = client;
        this._clientRanking = clientRanking;
        this._items = items;
    }


    get maxBonus() {
        return this._maxBonus;
    }

    set maxBonus(value) {
        this._maxBonus = value;
    }

    get nameOfProduct() {
        return this._nameOfProduct;
    }

    set nameOfProduct(value) {
        this._nameOfProduct = value;
    }

    get client() {
        return this._client;
    }

    set client(value) {
        this._client = value;
    }

    get clientRanking() {
        return this._clientRanking;
    }

    set clientRanking(value) {
        this._clientRanking = value;
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
    }

    get bonus() {
        return this._bonus;
    }

    /**
     * ToDo:
     * bonus will be calculated by an algorithm based on the
     * social performance values
     * @param value
     */
    set bonus(value) {
        this._bonus = value;
    }
}

module.exports = ordersEvaluation;
