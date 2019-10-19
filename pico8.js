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
            return keys.ArrowRight;

        case 1:
            return keys.ArrowUp;

        case 2:
            return keys.ArrowDown;

        case 3:
            return keys.ArrowLeft;

        case 4:
            return keys.KeyX;

        case 5:
            return keys.KeyZ;
    }
}

function cls(color) {
    rectfill(0, 0, 128, 128, color);
}

function map(color) {
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tile = mget(x, y);
            if (tile !== undefined) {
                spr(tile, x, y);
            }
        }
    }
}

function camera(x, y) {
    // todo
}

function fget(x, y) {
    // todo
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
    return mapContainer[x + '|' + y];
}

function mset(x, y, tile) {
    mapContainer[x + '|' + y] = tile;
}

function add(array, element) {
    array.push(element);
}

function del(array, element) {
    // todo
}

function rnd(value) {
    // todo
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

function mid(value1, value2, value3) {
    // todo
}

function bor(value1, value2) {
    // todo
}

function shl(value) {
    // todo
}
