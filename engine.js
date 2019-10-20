var ctx;
var keys = {};
var images = {};
var bitmapFont = {};
var audioContext;
var audioSource = {};

window.addEventListener('load', () => {
    ctx = document.getElementById('canvas').getContext('2d');
    for (let i = 0; i < 256; i++) {
        images[i] = new Image();
        images[i].src = 'tiles/' + i + '.png';
    }

    bitmapFont[0] = new Image();
    bitmapFont[0].src = 'pico8_font_0.png';

    bitmapFont[5] = new Image();
    bitmapFont[5].src = 'pico8_font_5.png';

    bitmapFont[6] = new Image();
    bitmapFont[6].src = 'pico8_font_6.png';

    bitmapFont[7] = new Image();
    bitmapFont[7].src = 'pico8_font_7.png';

    bitmapFont[9] = new Image();
    bitmapFont[9].src = 'pico8_font_9.png';

    bitmapFont[10] = new Image();
    bitmapFont[10].src = 'pico8_font_10.png';

    audioContext = new AudioContext();

    _init();
    setInterval(() => {
        _update60();
    }, 1000 / 60);
    setInterval(() => {
        _draw();
    }, 1000 / 60);
});

window.addEventListener('keyup', event => {
    keys[event.code] = true;
});

function getColor(color) {
    switch (color) {
        case 0: return 'rgb(0, 0, 0)';
        case 1: return 'rgb(29, 43, 83)';
        case 2: return 'rgb(126, 37, 83)';
        case 3: return 'rgb(0, 135, 81)';
        case 4: return 'rgb(171, 82, 54)';
        case 5: return 'rgb(95, 87, 79)';
        case 6: return 'rgb(194, 195, 199)';
        case 7: return 'rgb(255, 241, 232)';
        case 8: return 'rgb(255, 0, 77)';
        case 9: return 'rgb(255, 163, 0)';
        case 10: return 'rgb(255, 236, 39)';
        case 11: return 'rgb(0, 228, 54)';
        case 12: return 'rgb(41, 173, 255)';
        case 13: return 'rgb(131, 118, 156)';
        case 14: return 'rgb(255, 119, 168)';
        case 15: return 'rgb(255, 204, 170)';
    }
}
