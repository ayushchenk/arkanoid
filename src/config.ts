const config = {
    player: {
        size: {
            height: 20,
            width: 120
        },
        startingPosition: {
            x: window.innerWidth / 2,
            y: window.innerHeight - 100,
        },
        offset: 10
    },
    ball: {
        radius: 10,
        offset: 1,
        interval: 5
    },
    arena: {
        height: window.innerHeight,
        width: window.innerWidth
    }
};

export default config;