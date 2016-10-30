export class Util {
    constructor() { }

    Coin(coin) {
        return /^(?:^\s*\d{1,3}(?:\.\d{3})*,\d{2}$|)$/.test(coin._value);
    }
}