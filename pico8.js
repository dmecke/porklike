function sfx(track) {
    // todo
}

function poke(position) {
    // todo
}

function music(track) {
    // todo
}

function btnp(button) {
    switch (button) {
        case 0:
            return keys.ArrowLeft;

        case 1:
            return keys.ArrowRight;

        case 2:
            return keys.ArrowUp;

        case 3:
            return keys.ArrowDown;

        case 4:
            return keys.KeyZ;

        case 5:
            return keys.KeyX;
    }
}

function cls(color) {
    rectfill(0, 0, 128, 128, color);
}

function map(color) {
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tile = mget(x, y);
            if (tile !== -1) {
                spr(tile, x * 8, y * 8);
            }
        }
    }
}

function fget(tile, flag) {
    switch (flag) {
        case 0: // collision / not walkable
            if (tile >= 16 && tile <= 61) {
                return true;
            }
            return [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 77, 78, 79, 93, 94, 95, 109, 110, 111].indexOf(tile) !== -1;

        case 1: // can be interacted with
            return [6, 7, 8, 10, 12, 13, 14, 110].indexOf(tile) !== -1;

        case 2: // blocks line of sight
            if (tile >= 16 && tile <= 61) {
                return true;
            }
            return [2, 3, 5, 13, 70, 71].indexOf(tile) !== -1;
    }
    throw Error('unknown flag');
}

function spr(tile, x, y, w = 1, h = 1, flip_x = false) {
    if (tile === undefined) {
        throw new Error();
    }
    for (let _w = 0; _w < w; _w++) {
        for (let _h = 0; _h < h; _h++) {
            let tileIndex = tile + _w + _h * 16;
            ctx.drawImage(images[tileIndex], x + _w * 8, y + _h * 8, 8, 8);
        }
    }
}

function mget(x, y) {
    let index = x + y * mapScreenWidth * 16;
    return mapData[index] - 1;
}

function mset(x, y, tile) {
    let index = x + y * mapScreenWidth * 16;
    mapData[index] = tile + 1;
}

function add(array, element) {
    array.push(element);
}

function del(array, element) {
    let index = array.indexOf(element);
    if (index === -1) {
        throw new Error('could not delete "' + element + '" from array [' + array + '] - element does not exist');
    }
    array.splice(index, 1);
}

function rnd(max) {
    return Math.floor(Math.random() * max);
}

function luaprint(text, x, y, color) {
    let data = {
        ' ': { x: 0, y: 16 },
        '!': { x: 8, y: 16 },
        '"': { x: 16, y: 16 },
        '#': { x: 24, y: 16 },
        '$': { x: 32, y: 16 },
        '%': { x: 40, y: 16 },
        //'': { x: 48, y: 16 },
        //'': { x: 56, y: 16 },
        '(': { x: 64, y: 16 },
        ')': { x: 72, y: 16 },
        '*': { x: 80, y: 16 },
        '+': { x: 88, y: 16 },
        ',': { x: 96, y: 16 },
        '-': { x: 104, y: 16 },
        '.': { x: 112, y: 16 },
        '/': { x: 120, y: 16 },

        '0': { x: 0, y: 24 },
        '1': { x: 8, y: 24 },
        '2': { x: 16, y: 24 },
        '3': { x: 24, y: 24 },
        '4': { x: 32, y: 24 },
        '5': { x: 40, y: 24 },
        '6': { x: 48, y: 24 },
        '7': { x: 56, y: 24 },
        '8': { x: 64, y: 24 },
        '9': { x: 72, y: 24 },
        ':': { x: 80, y: 24 },
        ';': { x: 88, y: 24 },
        '<': { x: 96, y: 24 },
        '=': { x: 104, y: 24 },
        '>': { x: 112, y: 24 },
        '?': { x: 120, y: 24 },


        '@': { x: 0, y: 32 },
        'a': { x: 8, y: 32 },
        'b': { x: 16, y: 32 },
        'c': { x: 24, y: 32 },
        'd': { x: 32, y: 32 },
        'e': { x: 40, y: 32 },
        'f': { x: 48, y: 32 },
        'g': { x: 56, y: 32 },
        'h': { x: 64, y: 32 },
        'i': { x: 72, y: 32 },
        'j': { x: 80, y: 32 },
        'k': { x: 88, y: 32 },
        'l': { x: 96, y: 32 },
        'm': { x: 104, y: 32 },
        'n': { x: 112, y: 32 },
        'o': { x: 120, y: 32 },

        'p': { x: 0, y: 40 },
        'q': { x: 8, y: 40 },
        'r': { x: 16, y: 40 },
        's': { x: 24, y: 40 },
        't': { x: 32, y: 40 },
        'u': { x: 40, y: 40 },
        'v': { x: 48, y: 40 },
        'w': { x: 56, y: 40 },
        'x': { x: 64, y: 40 },
        'y': { x: 72, y: 40 },
        'z': { x: 80, y: 40 },
        '[': { x: 88, y: 40 },
        '\\': { x: 96, y: 40 },
        ']': { x: 104, y: 40 },
        '^': { x: 112, y: 40 },
        '_': { x: 120, y: 40 },

        '`': { x: 0, y: 48 },
        'A': { x: 8, y: 48 },
        'B': { x: 16, y: 48 },
        'C': { x: 24, y: 48 },
        'D': { x: 32, y: 48 },
        'E': { x: 40, y: 48 },
        'F': { x: 48, y: 48 },
        'G': { x: 56, y: 48 },
        'H': { x: 64, y: 48 },
        'I': { x: 72, y: 48 },
        'J': { x: 80, y: 48 },
        'K': { x: 88, y: 48 },
        'L': { x: 96, y: 48 },
        'M': { x: 104, y: 48 },
        'N': { x: 112, y: 48 },
        'O': { x: 120, y: 48 },

        'P': { x: 0, y: 56 },
        'Q': { x: 8, y: 56 },
        'R': { x: 16, y: 56 },
        'S': { x: 24, y: 56 },
        'T': { x: 32, y: 56 },
        'U': { x: 40, y: 56 },
        'V': { x: 48, y: 56 },
        'W': { x: 56, y: 56 },
        'X': { x: 64, y: 56 },
        'Y': { x: 72, y: 56 },
        'Z': { x: 80, y: 56 },
        '{': { x: 88, y: 56 },
        '|': { x: 96, y: 56 },
        '}': { x: 104, y: 56 },
        '~': { x: 112, y: 56 },
        // '': { x: 120, y: 56 },

        '█': { x: 0, y: 64 },
        '▒': { x: 8, y: 64 },
        '🐱': { x: 16, y: 64 },
        '⬇': { x: 24, y: 64 },
        '░': { x: 32, y: 64 },
        '✽': { x: 40, y: 64 },
        '●': { x: 48, y: 64 },
        '♥': { x: 56, y: 64 },
        '☉': { x: 64, y: 64 },
        '웃': { x: 72, y: 64 },
        '⌂': { x: 80, y: 64 },
        '⬅': { x: 88, y: 64 },
        '😐': { x: 96, y: 64 },
        '♪': { x: 104, y: 64 },
        '🅾': { x: 112, y: 64 },
        '◆': { x: 120, y: 64 },

        '…': { x: 0, y: 72 },
        '➡': { x: 8, y: 72 },
        '️★': { x: 16, y: 72 },
        '⧗': { x: 24, y: 72 },
        '⬆': { x: 32, y: 72 },
        '️ˇ': { x: 40, y: 72 },
        '∧': { x: 48, y: 72 },
        '❎': { x: 56, y: 72 },
        '▤': { x: 64, y: 72 },
        '▥': { x: 72, y: 72 },
    };

    let height = 6;

    for (let i = 0; i < text.length; i++) {
        let letterData = data[text[i]];
        let width = letterData.y >= 64 ? 8 : 4;
        ctx.drawImage(bitmapFont[color], letterData.x, letterData.y, width, height, x, y, width, height);
        x += width;
    }
}

function rect(x1, y1, x2, y2, color) {
    ctx.strokeStyle = getColor(color);
    ctx.strokeRect(x1, y1, x2 - x1, y2 - y1);
}

function rectfill(x1, y1, x2, y2, color) {
    ctx.fillStyle = getColor(color);
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

function line(x1, y1, x2, y2, color) {
    ctx.strokeStyle = getColor(color);
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
}

function fillp(value) {
    // todo
}

function palt(color, flag) {
    // todo
}

function pal() {
    // todo
}

function clip(x, y, width, height, color) {
    // todo
}

function time() {
    return Date.now();
}

function flip() {
    // todo
}

function mid(first, second, third) {
    return [first, second, third].sort()[1];
}

function bor(first, second) {
    return first | second;
}

function shl(num, bits) {
    return num << bits;
}
