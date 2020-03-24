export function startGame(levelMap, gameState) {

}

export function getNextCommand(gameState) {
    // alert(gameState.goodsInPort[0].amount);

    if (gameState.ship.x === gameState.ports[1].x && gameState.ship.y !== gameState.ports[1].y) {
        return 'N';
    }

    else {
        'WAIT';

        if (gameState.goodsInPort.length > 0) {
            'LOAD fabric 3000';
            alert('В порту после покупки стало товаров: ' + gameState.goodsInPort[0].amount);
            alert('На корабле после покупки стало товаров: ' + gameState.ship.goods.length);
        }
    }
}
