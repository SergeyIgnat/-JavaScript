let game = {
    run() {
        while (true) {
            const direciton = mover.getDirection();
            if (direciton === null) {
                console.log('Игра окончена');
                return;
            }
            const nextPoint = mover.getNextPoint(direciton);
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
        }
    },

    init() {
        console.log("Ваше положение на поле в виде о");
        renderer.render()
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();
