/**
 * Created by user on 8/25/16.
 */

$(function() {
    var grid = new Grid(10,10);
    var player = new Player(20);
    grid.CreateArray();
    grid.CreateHTML();
    grid.CreateScoreBoard();
    grid.AddShip();
    grid.AddShip();
    grid.AddShip();
    var ship = new Ship(grid.getGameArray());
    //console.log(grid.getGameArray());

    $('div').on('click' , function (event) {
        var img = event.target;
        if ($(img).attr('src') != 'assets/img/divider-x-green.png' && $(img).attr('src') != 'assets/img/ship.png') {
            event.stopImmediatePropagation();
            var imgPosition = parseInt($(img).parent('div').attr('id'));
            var array = grid.getGameArray();
            var playerHits = player.getHits();

            if (array[imgPosition] == "Ship1" || array[imgPosition] == "Ship2" || array[imgPosition] == "Ship3")  {
                ship.HitCheck(imgPosition);
                if (ship.getShip1() == 0) {
                    player.setResult();
                    ship.EndOfShip1();
                    $('#sunkship').html('Sunk ships:'+player.getResult());
                }
                if (ship.getShip2() == 0) {
                    player.setResult();
                    ship.EndOfShip2();
                    $('#sunkship').html('Sunk ships:'+player.getResult());
                }
                if (ship.getShip3() == 0) {
                    player.setResult();
                    ship.EndOfShip3();
                    $('#sunkship').html('Sunk ships:'+player.getResult());
                }
                $(img).attr('src','assets/img/ship.png');
                $('#shots').html('Shots:'+player.getHits());
            }
            else if (!isNaN(imgPosition)) {
                player.setHits(--playerHits);
                $(img).attr('src','assets/img/divider-x-green.png');
                $('#shots').html('Shots:'+player.getHits());
            }
            var playerAccurateHits = player.getResult();
            if (playerHits <= 0 ) {
                $('#container').css('display','none');
                $('#scoreboard').css('display','none');
                grid.CreateFinalResult('YOU LOOSE!',"index.html");
            }
            if(playerAccurateHits >= 3) {
                $('#container').css('display','none');
                $('#scoreboard').css('display','none');
                grid.CreateFinalResult('YOU WIN!',"index.html");
            }
        }

    });













});
