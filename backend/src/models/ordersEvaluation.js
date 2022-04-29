class ordersEvaluation {

    _nameOfProduct = [];
    _client;
    _clientRanking;
    _items = [];
    _nameSale;
    _productDescription = [];
    _bonus;


    constructor(nameOfProduct, client, clientRanking, items,
                nameSale, productDescription) {
        this._nameOfProduct = nameOfProduct;
        this._client = client;
        this._clientRanking = clientRanking;
        this._items = items;
        this._nameSale = nameSale;
        this._productDescription = productDescription;
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
        let commission = 0.3; // 30 % Commission
        let productValue;
        let bonus = 0.0;
        for(let i in this._items) {
            if (this._nameOfProduct[i] === "HooverGo") productValue = 1500;
            if (this._nameOfProduct[i] === "HooverClean") productValue = 1000;
            bonus += this._items[i] * commission * productValue;
        }
        return bonus;
    }
}

module.exports = ordersEvaluation;
