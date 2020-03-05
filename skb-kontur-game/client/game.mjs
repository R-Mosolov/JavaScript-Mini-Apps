export function startGame(levelMap, gameState) {

}

export function getNextCommand(gameState) {
    if (gameState.ship.x === gameState.ports[1].x && gameState.ship.y > gameState.ports[1].y) {
        return 'N';
    }
    // if (gameState.ship.x === gameState.ports[1].x && gameState.ship.y > gameState.ports[1].y) return 'S';
    // if (gameState.ship.x > gameState.ports[1].x && gameState.ship.y === gameState.ports[1].y) return 'W';
    // if (gameState.ship.x < gameState.ports[1].x && gameState.ship.y === gameState.ports[1].y) return 'E';

    if (gameState.ship.x === gameState.ports[1].x && gameState.ship.y === gameState.ports[1].y) {
        'WAIT';

        if (gameState.goodsInPort[0]) {
            alert(gameState.goodsInPort[0].amount);
            // alert(gameState.ship.goods[0].amount);

            return 'LOAD fabric 1';
        }

        alert(gameState.goodsInPort[0].amount);
        // alert(gameState.ship.goods.length);
    }
}

function rangeAllPorts(gameState) {
    let rangedPorts = [];

    if (gameState.ports.length === 2) {
        return [{
            x: gameState.ports[1].x,
            y: gameState.ports[1].y
        }];
    }

    if (gameState.ports.length > 2) {
        for (let i = 0; i < gameState.ports.length; i++) {
            rangedPorts.push({
                x: gameState.ports[i].x,
                y: gameState.ports[i].y
            });
        }

        return rangedPorts;
    }
}
