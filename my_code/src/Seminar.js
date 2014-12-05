/**
 * Created by gralinsa on 2014-12-04.
 */
// freeze & seal
// map, filter, reduce
;
var VAT_RATE = 1.2;
var Seminar = {
    _price: 0,
    _name : null,
    create: function(name, price){
        return Object.create(Seminar).init(name, price);
    },
    init: function(name, price){
        this.price = price;
        this.name = name;
        return this;
    },
    get price(){
        return this._price;
    },
    set price(n){
        return this._price = n;
    },
    get name(){
        return this._name;
    },
    set name(n){
        return this._name = n;
    },

    netPrice: function(){
        return this.price;
    },
    grossPrice: function(){
        return this.price * VAT_RATE;
    }
};
