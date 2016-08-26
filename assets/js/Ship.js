/**
 * Created by user on 8/25/16.
 */
function Ship(array) {
    var _array = array;
    var _ship1 = 3;
    var _ship2 = 3;
    var _ship3 = 3;


    this.getArray = function () {
        return _array;
    };
    this.getShip1 = function () {
        return _ship1;
    };
    this.getShip2 = function () {
        return _ship2;
    };
    this.getShip3 = function () {
        return _ship3;
    };
    this.setShip1 = function (value) {
         _ship1 = value;
    };
    this.setShip2 = function (value) {
        _ship2 = value;
    };
    this.setShip3 = function (value) {
        _ship3 = value;
    };
}

Ship.prototype.HitCheck = function (position) {
    var array = this.getArray();
    if (array[position] == 'Ship1') {
        var val = this.getShip1();
        this.setShip1(--val);
    }
    if (array[position] == 'Ship2') {
        var val1 = this.getShip2();
        this.setShip2(--val1);
    }
    if (array[position] == 'Ship3') {
        var val2 = this.getShip3();
        this.setShip3(--val2);
    }
};

Ship.prototype.EndOfShip1 = function () {
    this.setShip1(1);
};
Ship.prototype.EndOfShip2 = function () {
    this.setShip2(1);
};
Ship.prototype.EndOfShip3 = function () {
    this.setShip3(1);
};