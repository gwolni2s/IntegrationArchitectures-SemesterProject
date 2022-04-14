class ordersEvaluation {

    _nameOfProduct;
    _client;
    _clientRanking;
    _productValue = 100; //Assuming there is only one product sold for 1000 dollars
    _commission = 0.3; //commission is set to 30 percent of every sold item
    _items;
    _bonus;


    constructor(nameOfProduct, client, clientRanking, items) {
        this._nameOfProduct = nameOfProduct;
        this._client = client;
        this._clientRanking = clientRanking;
        this._items = items;
        this._bonus = this.getCalculateBonusOrderEvaluation();
    }


    getProductValue() {
        return this._productValue;
    }

    setProductValue(value) {
        this._productValue = value;
    }

    getCommission() {
        return this._commission;
    }

    setCommission(value) {
        this._commission = value;
    }

    getBonus() {
        return this._bonus;
    }

    setBonus(value) {
        this._bonus = value;
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

    /**
     * The bonus for one order is calculated by
     * commission * items * the value of the product
     *
     * Example:
     * 0.3 * 20 * 1000 = 6000
     */
    getCalculateBonusOrderEvaluation() {
        return this.getCommission() * parseInt(this.getItems()) * this.getProductValue();
    }
}

module.exports = ordersEvaluation;
