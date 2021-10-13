class Datasource {
    constructor() {
        this.source = 'https://static.ngnrs.io/test/prices';
    }
    getPrices() {
        let promise = new Promise((resolve, reject) => {
            let rawData = fetch(this.source)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject('HTTP error! status: ${response.status}');
                    return;
                }
            }).then(json => {
                let responseArr = [];
                json.data.prices.forEach(item => {
                    responseArr.push(new PriceObj(item.pair, item.buy, item.sell));
                });
                resolve('');
                return responseArr;
            }).catch( e => {
                console.log("Failed: ${e}");
            });
        });
        return promise;
    }
}

class PriceObj {
    constructor(pair, buy, sell) {
        this.pair = pair;
        this.buy = buy;
        this.sell = sell;
    }
    mid() {
        return (this.buy + this.sell) / 2;
    }
    quote() {
        return this.pair.slice(-3);
    }
}