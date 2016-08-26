/**
 * Created by user on 8/25/16.
 */
function Player(bullets) {
    var _hits = bullets;
    var _result = 0;


    this.getHits = function () {
        return _hits;
    };

    this.setHits = function (hits) {
        _hits = hits;
    }
    this.getResult = function () {
        return _result;
    };

    this.setResult = function () {
        _result++;
    };


}


