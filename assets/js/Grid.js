/**
 * Created by user on 8/25/16.
 */

function Grid(Xcells ,Ycells ) {
    var _Xcells = Xcells;
    var _Ycells = Ycells;
    var _GameArray = [];

    this.getXcells = function () {
        return _Xcells;
    };
    this.getYcells = function () {
        return _Ycells;
    };
    this.getGameArray = function () {
        return _GameArray;
    };
    this.setGameArray = function (value) {
        _GameArray.push(value);
    };
}

Grid.prototype.CreateArray = function () {
    var x = this.getXcells();
    var y = this.getYcells();

    for (var i = 0; i < x; i++) {
        for (var j = 0; j < y; j++) {
            this.setGameArray([i][y]);
        }
    }
};

Grid.prototype.CreateHTML = function () {
    var divcontainer = '<div id="container"></div>';
    $('body').append(divcontainer);

    for (var i = 0  ; i < this.getGameArray().length ; i++ ) {
        var z = i % this.getXcells();
        var m = Math.floor(i / this.getYcells());
        $('#container').append('<div id='+m+''+z+'><img src="assets/img/water_drop_icon_by_danighost-d8yuaxa.gif" style="width:100%"></div>');
    }
};

Grid.prototype.CreateScoreBoard = function () {
    var section = '<section id="scoreboard"></section>';
    $('body').append(section);
    var span = '<span id="name">Battleships</span>';
    var span1 = '<span id="shots">Shots:20</span>';
    var span2 = '<span id="sunkship">Sunk ships:0</span>';
    $('section').append(span);
    $('section').append(span1);
    $('section').append(span2);

};

Grid.prototype.CreateFinalResult = function (greet,location) {
    var section = '<section id="final"></section>';
    $('body').append(section);
    var span = '<span id="finalresult">'+greet+'</span>';
    $('#final').append(span);
    var button = '<button id="reload" onclick ="location.reload(true)">'+"Retry"+'</button>';
    $('#final').append(button);

};

var ShipName = 1;

Grid.prototype.AddShip = function () {
    var position = Math.floor(Math.random() * this.getXcells()).toString() +
        Math.floor(Math.random() * this.getYcells()).toString();
    var firstNumOfPosition = parseInt(position[0]);
    position = parseInt(position);
    var addToArr = this.getGameArray();
    if (addToArr[position] == undefined && firstNumOfPosition + 2 <= this.getXcells() - 1) {
        addToArr[position] = 'Ship'+ShipName;
        position += this.getXcells();
        if (addToArr[position] == undefined) {
            addToArr[position] = 'Ship'+ShipName;
        }else {
            addToArr[position - this.getXcells()] == undefined;
            this.AddShip();
        }
        position += this.getXcells();
        if (addToArr[position] == undefined) {
            addToArr[position] = 'Ship'+ShipName;
        }else {
            addToArr[position - this.getXcells()] == undefined;
            addToArr[position - (2 * this.getXcells())] == undefined;
            this.AddShip();
        }
        ShipName++;
    }else {
        this.AddShip();
    }
};