const config = {
    player: {
        size: {
            height: 20,
            width: 120
        },
        startingPosition: {
            x: window.innerWidth / 2,
            y: window.innerHeight - 50,
        },
        health: 5,
        offset: 10,
        velocityInterval: 10,
        halfWidth: function () {
            return this.size.width / 2;
        }
    },
    ball: {
        size: 10,
        offset: 1.7,
        interval: 2
    },
    arena: {
        height: window.innerHeight,
        width: window.innerWidth,
        gap: 10,
        rows: 5,
        columns: function () {
            return Math.floor(this.width / (this.brick.size.width + this.gap)) - 1;
        },
        brick: {
            size: {
                height: 40,
                width: 100
            }
        }
    }
};

export default config;