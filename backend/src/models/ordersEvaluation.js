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


    getMaxBonus() {
        return this._maxBonus;
    }

    setMaxBonus(value) {
        this._maxBonus = value;
    }

    getNameOfProduct() {
        return this._nameOfProduct;
    }

    setNameOfProduct(value) {
        this._nameOfProduct = value;
    }

    getClient() {
        return this._client;
    }

    setClient(value) {
        this._client = value;
    }

    getClientRanking() {
        return this._clientRanking;
    }

    setClientRanking(value) {
        this._clientRanking = value;
    }

    getItems() {
        return this._items;
    }

    setItems(value) {
        this._items = value;
    }

    getBonus() {
        return this._bonus;
    }

    /**
     * ToDo:
     * bonus will be calculated by an algorithm based on the
     * social performance values
     * @param value
     */
    setBonus(value) {
        this._bonus = value;
    }
}

module.exports = ordersEvaluation;
