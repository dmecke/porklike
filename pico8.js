function sfx(track) {
    // todo
}

function cursor(x, y) {
    // todo
}

function color(color) {
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

function camera(x, y) {
    // todo
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
            let img = new Image();
            let tileIndex = tile + _w + _h * 16;
            img.src = 'tiles/' + tileIndex + '.png';
            ctx.drawImage(img, x + _w * 8, y + _h * 8, 8, 8);
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
    array.splice(array.indexOf(element));
}

function rnd(max) {
    return Math.floor(Math.random() * max);
}

function luaprint(text, x, y, color) {
    ctx.font = '8px sans serif';
    ctx.fillStyle = getColor(color);
    ctx.fillText(text, x, y);
}

function rect(x, y, width, height, color) {
    // todo
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
    // todo
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
