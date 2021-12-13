let mover = {
    getDirection() {
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];
        while (true) {
            let direciton = parseInt(prompt('Введите число 2, 4, 6, 8, куда вы хотите переместиться, "Отмена" для выхода'));
            if (isNaN(direciton)) {
                return null;
            }
            if (!availableDirections.includes(direciton)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6, 8.');
                continue;
            }
            return direciton;
        }
    },

    getNextPoint(direciton) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direciton) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;  
        }
        if (nextPosition.x > config.rowsCount) {
            nextPosition.x = config.rowsCount;
        } else if (nextPosition.x < 0) nextPosition.x = 0

        if (nextPosition.y > config.colsCount) {
            nextPosition.y = config.colsCount;
        } else if (nextPosition.y < 0) nextPosition.y = 0
        
        return nextPosition;
    }
};