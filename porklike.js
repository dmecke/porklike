var mapData = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 14, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 17, 18, 18, 18, 18, 18, 19, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 17, 18, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 3, 3, 3, 3, 3, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 0, 0, 0, 17, 18, 18, 37, 15, 36, 18, 18, 19, 0, 0, 0, 0, 0, 0, 0, 0, 33, 3, 6, 3, 6, 3, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 14, 3, 3, 3, 3, 3, 3, 14, 3, 0, 0, 0, 33, 5, 5, 70, 69, 70, 5, 5, 35, 0, 0, 0, 0, 0, 0, 0, 0, 33, 5, 5, 5, 5, 5, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 14, 2, 2, 2, 3, 0, 0, 0, 33, 75, 2, 69, 69, 69, 2, 76, 35, 0, 0, 0, 0, 0, 0, 0, 0, 33, 2, 78, 79, 80, 2, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 3, 14, 3, 3, 3, 0, 0, 0, 33, 65, 2, 69, 7, 69, 2, 68, 35, 0, 0, 0, 0, 0, 0, 0, 0, 33, 2, 94, 95, 96, 2, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 14, 3, 3, 3, 2, 2, 2, 3, 2, 3, 2, 2, 2, 3, 0, 0, 0, 33, 73, 2, 69, 69, 69, 2, 2, 35, 0, 0, 0, 0, 0, 0, 0, 0, 33, 2, 110, 111, 112, 2, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 14, 2, 2, 2, 3, 2, 3, 2, 2, 2, 3, 0, 0, 0, 33, 8, 2, 2, 2, 2, 2, 8, 35, 0, 0, 0, 0, 0, 0, 0, 0, 33, 2, 2, 2, 2, 2, 35, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 14, 3, 3, 3, 3, 2, 2, 2, 3, 2, 3, 2, 2, 2, 3, 0, 0, 0, 33, 9, 8, 2, 2, 2, 9, 9, 35, 0, 0, 0, 0, 0, 0, 0, 0, 49, 21, 2, 2, 2, 20, 51, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 3, 14, 3, 3, 3, 2, 3, 2, 2, 2, 3, 0, 0, 0, 49, 50, 50, 21, 2, 20, 50, 50, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 2, 16, 2, 35, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 14, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 33, 16, 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 50, 50, 50, 51, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 3, 2, 3, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 49, 50, 51, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 14, 2, 2, 2, 2, 14, 2, 3, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
var mapScreenWidth = 4;

var skipai;
var _upd;
var _drw;
var buttbuff;
var talkwind;
var curwind;
var invwind;
var statwind;
var usewind;
var hintwind;
var t;
var p_t;
var thrslt;
var shake;
var dpal;
var dirx;
var diry;
var itm_name;
var itm_type;
var itm_stat1;
var itm_stat2;
var itm_minf;
var itm_maxf;
var itm_desc;
var mob_name;
var mob_ani;
var mob_atk;
var mob_hp;
var mob_los;
var mob_minf;
var mob_maxf;
var mob_spec;
var crv_sig;
var crv_msk;
var free_sig;
var free_msk;
var wall_sig;
var wall_msk;
var mobpool;
var ipool_rar;
var ipool_com;
var fipool_rar;
var fipool_com;
var itm_known;
var tani;
var logo_t;
var logo_y;
var win;
var winfloor;
var mob;
var dmob;
var p_mob;
var inv;
var eqp;
var wind;
var float;
var hpwind;
var thrdx;
var thrdy;
var st_steps;
var st_kills;
var st_meals;
var st_killer;
var flags = {};
var rooms;
var roomap;
var doors;
var distmap;
var gover_spr;
var gover_x;
var gover_w;
var fog;
var floor;
var tarr_dirt;
var tarr_farn;
var tarr_vase;
var flaglib;

function _init() {
    t = 0;
    shake = 0;

    dpal = [0, 1, 1, 2, 1, 13, 6, 4, 4, 9, 3, 13, 1, 13, 14];

    dirx = [-1, 1, 0, 0, 1, 1, -1, -1];
    diry = [0, 0, -1, 1, -1, 1, 1, -1];

    itm_name = ["butter knife", "cheese knife", "paring knife", "utility knife", "chefs knife", "meat cleaver", "paper apron", "cotton apron", "rubber apron", "leather apron", "chef's apron", "butcher's apron", "food 1", "food 2", "food 3", "food 4", "food 5", "food 6", "spork", "salad fork", "fish fork", "dinner fork"];
    itm_type = ["wep", "wep", "wep", "wep", "wep", "wep", "arm", "arm", "arm", "arm", "arm", "arm", "fud", "fud", "fud", "fud", "fud", "fud", "thr", "thr", "thr", "thr"];
    itm_stat1 = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 1, 2, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
    itm_stat2 = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    itm_minf = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4];
    itm_maxf = [3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7, 8, 8, 8, 8, 8, 8, 8, 4, 6, 7, 8];
    itm_desc = ["", "", "", "", "", "", "", "", "", "", "", "", " heals", " heals a lot", " increases hp", " stuns", " is cursed", " is blessed", "", "", "", ""];

    mob_name = ["player", "slime", "melt", "shoggoth", "mantis-man", "giant scorpion", "ghost", "golem", "drake"];
    mob_ani = [240, 192, 196, 200, 204, 208, 212, 216, 220];
    mob_atk = [1, 1, 2, 1, 2, 3, 3, 5, 5];
    mob_hp = [5, 1, 2, 3, 3, 4, 5, 14, 8];
    mob_los = [4, 4, 4, 4, 4, 4, 4, 4, 4];
    mob_minf = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    mob_maxf = [0, 3, 4, 5, 6, 7, 8, 8, 8];
    mob_spec = ["", "", "", "spawn?", "fast?", "stun", "ghost", "slow", ""];

    crv_sig = [255, 214, 124, 179, 233];
    crv_msk = [0, 9, 3, 12, 6];

    free_sig = [0, 0, 0, 0, 16, 64, 32, 128, 161, 104, 84, 146];
    free_msk = [8, 4, 2, 1, 6, 12, 9, 3, 10, 5, 10, 5];

    wall_sig = [251, 233, 253, 84, 146, 80, 16, 144, 112, 208, 241, 248, 210, 177, 225, 120, 179, 0, 124, 104, 161, 64, 240, 128, 224, 176, 242, 244, 116, 232, 178, 212, 247, 214, 254, 192, 48, 96, 32, 160, 245, 250, 243, 249, 246, 252];
    wall_msk = [0, 6, 0, 11, 13, 11, 15, 13, 3, 9, 0, 0, 9, 12, 6, 3, 12, 15, 3, 7, 14, 15, 0, 15, 6, 12, 0, 0, 3, 6, 12, 9, 0, 9, 0, 15, 15, 7, 15, 14, 0, 0, 0, 0, 0, 0];

    startgame();
}

function _update60() {
    t += 1;
    _upd();
    dofloats();
    dohpwind();
    keys = {};
}

function _draw() {
    ctx.save();
    doshake();
    _drw();
    drawind();
    drawlogo();
    ctx.restore();
}

function startgame() {
    music(0, true);
    tani = 0;
    buttbuff = -1;

    logo_t = 240;
    logo_y = 35;

    skipai = false;
    win = false;
    winfloor = 9;
    mob = [];
    dmob = [];
    p_mob = addmob(1, 1, 1);

    p_t = 0;

    inv = [];
    eqp = [];
    makeipool();
    foodnames();

    wind = [];
    float = [];

    talkwind = null;

    hpwind = addwind(5, 5, 28, 13, []);

    thrdx = 0;
    thrdy = -1;

    _upd = update_game;
    _drw = draw_game;

    st_steps = 0;
    st_kills = 0;
    st_meals = 0;
    st_killer = "";

    genfloor(0);
}

//>8
//updates
function update_game() {
    if (talkwind) {
        if (getbutt() === 5) {
            sfx(53);
            talkwind.dur = 0;
            talkwind = null;
        }
    } else {
        dobuttbuff();
        dobutt(buttbuff);
        buttbuff = -1;
    }
}

function update_inv() {
    //inventory
    if (move_mnu(curwind) && curwind === invwind) {
        showhint()
    }
    if (btnp(4)) {
        sfx(53);
        if (curwind === invwind) {
            _upd = update_game;
            invwind.dur = 0;
            statwind.dur = 0;
            if (hintwind) {
                hintwind.dur = 0;
            }
        } else if (curwind === usewind) {
            usewind.dur = 0;
            curwind = invwind;
        }
    } else if (btnp(5)) {
        sfx(54);
        if (curwind === invwind && invwind.cur !== 2) {
            showuse();
        } else if (curwind === usewind) {
            // use window confirm
            triguse();
        }
    }
}

function update_throw() {
    let b = getbutt();
    if (b >= 0 && b <= 3) {
        thrdx = dirx[b];
        thrdy = diry[b];
    }
    if (b === 4) {
        _upd = update_game;
    } else if (b === 5) {
        throw_item();
    }
}

function move_mnu(wnd) {
    let moved = false;
    if (btnp(2)) {
        sfx(56);
        wnd.cur -= 1;
        moved = true
    } else if (btnp(3)) {
        sfx(56);
        wnd.cur += 1;
        moved = true;
    }
    if (wnd.cur < 0) {
        wnd.cur = wnd.txt.length - 1;
    } else if (wnd.cur >= wnd.txt.length) {
        wnd.cur = 0;
    }
    return moved
}

function update_pturn() {
    dobuttbuff();
    p_t = Math.min(p_t + 0.125, 1);

    if (p_mob.mov) {
        p_mob.mov(p_mob);
    }

    if (p_t === 1) {
        _upd = update_game;
        if (trig_step()) {
            return
        }

        if (checkend() && !skipai) {
            doai();
        }
        skipai = false;
    }
}

function update_aiturn() {
    dobuttbuff();
    p_t = Math.min(p_t + 0.125, 1);
    mob.forEach(m => {
        if (m !== p_mob && m.mov) {
            m.mov(m);
        }
    });
    if (p_t === 1) {
        _upd = update_game;
        if (checkend()) {
            if (p_mob.stun) {
                p_mob.stun = false;
                doai();
            }
        }
    }
}

function update_gover() {
    if (btnp(5)) {
        sfx(54);
        startgame();
    }
}

function dobuttbuff() {
    if (buttbuff === -1) {
        buttbuff = getbutt();
    }
}

function getbutt() {
    for (let i = 0; i <= 5; i++) {
        if (btnp(i)) {
            return i;
        }
    }
    return -1;
}

function dobutt(butt) {
    if (butt < 0) {
        return
    }
    if (logo_t > 0) {
        logo_t = 0;
    }
    if (butt < 4) {
        moveplayer(dirx[butt], diry[butt])
    } else if (butt === 5) {
        showinv();
        sfx(54);
    }
}

//>8
//draws
function draw_game() {
    cls(0);
    animap();
    map();
    dmob.forEach(m => {
        if (Math.sin(time() / 100 * 8) > 0 || m === p_mob) {
            drawmob(m);
        }
        m.dur -= 1;
        if (m.dur <= 0 && m !== p_mob) {
            del(dmob, m);
        }
    });

    for (let i = mob.length; i >= 1; i--) {
        drawmob(mob[i - 1]);
    }

    if (_upd === update_throw) {
        let thr = throwtile();
        let tx = thr.x;
        let ty = thr.y;
        let lx1 = p_mob.x * 8 + 3 + thrdx * 4;
        let ly1 = p_mob.y * 8 + 3 + thrdy * 4;
        let lx2 = mid(0, tx * 8 + 3, 127);
        let ly2 = mid(0, ty * 8 + 3, 127);
        rectfill(lx1 + thrdy, ly1 + thrdx, lx2 - thrdy, ly2 - thrdx, 0);

        let thrani = Math.floor(t / 7) % 2 === 0;
        let mb = getmob(tx, ty);
        let pattern;
        if (thrani) {
            pattern = [1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1];
        } else {
            pattern = [0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0];
        }
        line(lx1, ly1, lx2, ly2, 7, pattern);
        oprint8("+", lx2 - 1, ly2 - 2, 7, 0);

        if (mb && thrani) {
            mb.flash = 1;
        }
    }

    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            if (fog[x][y] === 1) {
                rectfill2(x * 8, y * 8, 8, 8, 0);
            }
        }
    }

    float.forEach(f => {
        oprint8(f.txt, f.x, f.y, f.c, 0);
    })
}

function drawlogo() {
    if (logo_y > -24) {
        logo_t -= 1;
        if (logo_t <= 0) {
            logo_y += logo_t / 20;
        }
        spr(144, 7, logo_y, 14, 3);
        oprint8("the quest for kielbasa", 19, logo_y + 20, 7, 0);
    }
}

function drawmob(m) {
    let col = 10;
    if (m.flash > 0) {
        m.flash -= 1;
        col = 7;
    }
    drawspr(getframe(m.ani), m.x * 8 + m.ox, m.y * 8 + m.oy, col, m.flp);
}

function draw_gover() {
    cls();
    spr(gover_spr, gover_x, 30, gover_w, 2);
    if (!win) {
        luaprint("killed by a " + st_killer, 28, 43, 6);
    }
    let y = 56;
    if (!win) {
        luaprint("floor: " + floor, 40, 56, 5);
        y += 6;
    }
    luaprint("steps: " + st_steps, 40, y, 5);
    luaprint("kills: " + st_kills, 40, y + 6, 5);
    luaprint("meals: " + st_meals, 40, y + 12, 5);

    luaprint("press ❎", 46, 90, 5 + Math.floor(Math.abs(Math.sin(time() / 100 / 3) * 2)));
}

function animap() {
    tani += 1;
    if (tani < 15) {
        return;
    }
    tani = 0;
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tle = mget(x, y);
            if (tle === 64 || tle === 66) {
                tle += 1;
            } else if (tle === 65 || tle === 67) {
                tle -= 1;
            }
            mset(x, y, tle);
        }
    }
}

//>8
//tools

function getframe(ani) {
    return ani[Math.floor(t / 15) % ani.length];
}

function drawspr(_spr, _x, _y, _c, _flip) {
    spr(_spr, _x, _y, 1, 1, _flip);
}

function rectfill2(_x, _y, _w, _h, _c) {
    rectfill(_x, _y, _x + Math.max(_w, 0), _y + Math.max(_h, 0), _c);
}

function oprint8(_t, _x, _y, _c, _c2) {
    for (let i = 0; i <= 7; i++) {
        luaprint(_t, _x + dirx[i], _y + diry[i], _c2);
    }
    luaprint(_t, _x, _y, _c);
}

function dist(fx, fy, tx, ty) {
    let dx = fx - tx;
    let dy = fy - ty;
    return Math.sqrt(dx * dx + dy * dy);
}

function blankmap(_dflt) {
    let ret = {};
    if (_dflt === null) {
        _dflt = 0;
    }

    for (let x = 0; x <= 15; x++) {
        ret[x] = {};
        for (let y = 0; y <= 15; y++) {
            ret[x][y] = _dflt;
        }
    }
    return ret;
}

function getrnd(arr) {
    return arr[Math.floor(rnd(arr.length))];
}

function copymap(x, y) {
    let tle;
    for (let _x = 0; _x <= 15; _x++) {
        for (let _y = 0; _y <= 15; _y++) {
            tle = mget(_x + x, _y + y);
            mset(_x, _y, tle);
            if (tle === 15) {
                p_mob.x = _x;
                p_mob.y = _y;
            }
        }
    }
}

function doshake() {
    let shakex = 16 - rnd(32);
    let shakey = 16 - rnd(32);
    ctx.translate(shakex * shake, shakey * shake);
    shake *= 0.95;
    if (shake < 0.05) {
        shake = 0;
    }
}

//>8
//gameplay

function moveplayer(dx, dy) {
    let destx = p_mob.x + dx;
    let desty = p_mob.y + dy;
    let tle = mget(destx, desty);

    if (iswalkable(destx, desty, "checkmobs")) {
        sfx(63);
        mobwalk(p_mob, dx, dy);
        st_steps += 1;
        p_t = 0;
        _upd = update_pturn;
    } else {
        //!walkable
        mobbump(p_mob, dx, dy);
        p_t = 0;
        _upd = update_pturn;

        let mob = getmob(destx, desty);
        if (mob) {
            sfx(58);
            hitmob(p_mob, mob);
        } else {
            if (fget(tle, 1)) {
                trig_bump(tle, destx, desty);
            } else {
                skipai = true;
            }
        }
    }
    unfog();
}

function trig_bump(tle, destx, desty) {
    if (tle === 7 || tle === 8) {
        //vase
        sfx(59);
        mset(destx, desty, 76);
        if (rnd(3) < 1 && floor > 0) {
            if (rnd(5) < 1) {
                addmob(getrnd(mobpool), destx, desty);
                sfx(60);
            } else {
                if (freeinvslot() === 0) {
                    showmsg("inventory full", 120);
                    sfx(60);
                } else {
                    sfx(61);
                    let itm = getrnd(fipool_com);
                    takeitem(itm);
                    showmsg(itm_name[itm] + "!", 60);
                }
            }
        }
    } else if (tle === 10 || tle === 12) {
        //chest
        if (freeinvslot() === 0) {
            showmsg("inventory full", 120);
            skipai = true;
            sfx(60);
        } else {
            let itm = getrnd(fipool_com);
            if (tle === 12) {
                itm = getitm_rar();
            }
            sfx(61);
            mset(destx, desty, tle - 1);
            takeitem(itm);
            showmsg(itm_name[itm] + "!", 60);
        }
    } else if (tle === 13) {
        //door
        sfx(62);
        mset(destx, desty, 1);
    } else if (tle === 6) {
        //stone tablet
        if (floor === 0) {
            sfx(54);
            showtalk([" welcome to porklike!", "", " climb this sausage", " tower to obtain the", " ultimate power of", " the golden kielbasa", ""]);
        }
    } else if (tle === 110) {
        //kielbasa
        win = true;
    }
}

function trig_step() {
    let tle = mget(p_mob.x, p_mob.y);

    if (tle === 14) {
        sfx(55);
        p_mob.bless = 0;
        genfloor(floor + 1);
        floormsg();
        return true
    }
    return false
}

function getmob(x, y) {
    let result = false;
    mob.forEach(m => {
        if (m.x === x && m.y === y) {
            result = m;
        }
    });
    return result;
}

function iswalkable(x, y, mode) {
    mode = mode ? mode : "test";

    //sight
    if (inbounds(x, y)) {
        let tle = mget(x, y);
        if (mode === "sight") {
            return !fget(tle, 2);
        } else {
            if (!fget(tle, 0)) {
                if (mode === "checkmobs") {
                    return !getmob(x, y);
                }
                return true;
            }
        }
    }
    return false;
}

function inbounds(x, y) {
    return !(x < 0 || y < 0 || x > 15 || y > 15);
}

function hitmob(atkm, defm, rawdmg) {
    if (defm.hp <= 0) {
        return; // is already dead
    }
    let dmg = atkm ? atkm.atk : rawdmg;

    //add curse/bless
    if (defm.bless < 0) {
        dmg *= 2;
    } else if (defm.bless > 0) {
        dmg = Math.floor(dmg / 2);
    }
    defm.bless = 0;

    let def = defm.defmin + Math.floor(rnd(defm.defmax - defm.defmin + 1));
    dmg -= Math.min(def, dmg);

    defm.hp -= dmg;
    defm.flash = 10;

    addfloat("-" + dmg, defm.x * 8, defm.y * 8, 9);

    shake = defm === p_mob ? 0.08 : 0.04;

    if (defm.hp <= 0) {
        if (defm !== p_mob) {
            st_kills += 1;
        } else {
            st_killer = atkm.name;
        }

        add(dmob, defm);
        del(mob, defm);
        defm.dur = 10;
    }
}

function healmob(mb, hp) {
    hp = Math.min(mb.hpmax - mb.hp, hp);
    mb.hp += hp;
    mb.flash = 10;

    addfloat("+" + hp, mb.x * 8, mb.y * 8, 7);
    sfx(51);
}

function stunmob(mb) {
    mb.stun = true;
    mb.flash = 10;
    addfloat("stun", mb.x * 8 - 3, mb.y * 8, 7);
    sfx(51);
}

function blessmob(mb, val) {
    mb.bless = mid(-1, 1, mb.bless + val);
    mb.flash = 10;

    let txt = "bless";
    if (val < 0) {
        txt = "curse";
    }

    addfloat(txt, mb.x * 8 - 6, mb.y * 8, 7);

    if (mb.spec === "ghost" && val > 0) {
        add(dmob, mb);
        del(mob, mb);
        mb.dur = 10;
    }
    sfx(51);
}

function checkend() {
    if (win) {
        music(24, false);
        gover_spr = 112;
        gover_x = 15;
        gover_w = 13;
        showgover();
        return false
    } else if (p_mob.hp <= 0) {
        music(22, false);
        gover_spr = 80;
        gover_x = 28;
        gover_w = 9;
        showgover();
        return false
    }
    return true
}

function showgover() {
    wind = [];
    _upd = update_gover;
    _drw = draw_gover;
}

function los(x1, y1, x2, y2) {
    let frst = true;
    let sx, sy, dx, dy;
    if (dist(x1, y1, x2, y2) === 1) {
        return true
    }
    if (y1 > y2) {
        let tmpX = x1;
        x1 = x2;
        x2 = tmpX;
        let tmpY = y1;
        y1 = y2;
        y2 = tmpY;
    }
    sy = 1;
    dy = y2 - y1;

    if (x1 < x2) {
        sx = 1;
        dx = x2 - x1
    } else {
        sx = -1;
        dx = x1 - x2
    }

    let err = dx - dy;
    let e2;

    while (!(x1 === x2 && y1 === y2)) {
        if (!frst && iswalkable(x1, y1, "sight") === false) {
            return false
        }
        e2 = err + err;
        frst = false;
        if (e2 > -dy) {
            err -= dy;
            x1 += sx;
        }
        if (e2 < dx) {
            err += dx;
            y1 += sy;
        }
    }

    return true
}

function unfog() {
    let px = p_mob.x;
    let py = p_mob.y;
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            if (fog[x][y] === 1 && dist(px, py, x, y) <= p_mob.los && los(px, py, x, y)) {
                unfogtile(x, y)
            }
        }
    }
}

function unfogtile(x, y) {
    fog[x][y] = 0;
    if (iswalkable(x, y, "sight")) {
        for (let i = 0; i <= 3; i++) {
            let tx = x + dirx[i];
            let ty = y + diry[i];
            if (inbounds(tx, ty) && !iswalkable(tx, ty)) {
                fog[tx][ty] = 0;
            }
        }
    }
}

function calcdist(tx, ty) {
    let cand = [];
    let step = 0;
    let candnew = null;
    distmap = blankmap(-1);
    add(cand, {x: tx, y: ty});
    distmap[tx][ty] = 0;
    do {
        step += 1;
        candnew = [];
        cand.forEach(c => {
            for (let d = 0; d <= 3; d++) {
                let dx = c.x + dirx[d];
                let dy = c.y + diry[d];
                if (inbounds(dx, dy) && distmap[dx][dy] === -1) {
                    distmap[dx][dy] = step;
                    if (iswalkable(dx, dy)) {
                        add(candnew, {x: dx, y: dy});
                    }
                }
            }
        });
        cand = candnew;
    } while (cand.length > 0);
}

function updatestats() {
    let atk = 1;
    let dmin = 0;
    let dmax = 0;

    if (eqp[1]) {
        atk += itm_stat1[eqp[1]];
    }

    if (eqp[2]) {
        dmin += itm_stat1[eqp[2]];
        dmax += itm_stat2[eqp[2]];
    }

    p_mob.atk = atk;
    p_mob.defmin = dmin;
    p_mob.defmax = dmax;
}

function eat(itm, mb) {
    let effect = itm_stat1[itm];

    if (!itm_known[itm]) {
        showmsg(itm_name[itm] + itm_desc[itm], 120);
        itm_known[itm] = true;
    }

    if (mb === p_mob) {
        st_meals += 1;
    }

    if (effect === 1) {
        //heal
        healmob(mb, 1);
    } else if (effect === 2) {
        //heal a lot
        healmob(mb, 3);
    } else if (effect === 3) {
        //plus maxhp
        mb.hpmax += 1;
        healmob(mb, 1);
    } else if (effect === 4) {
        //stun
        stunmob(mb);
    } else if (effect === 5) {
        //curse
        blessmob(mb, -1);
    } else if (effect === 6) {
        //bless
        blessmob(mb, 1);
    }
}

function throw_item() {
    let itm = inv[thrslt];
    let thr = throwtile();
    let tx = thr.x;
    let ty = thr.y;
    sfx(52);
    if (inbounds(tx, ty)) {
        let mb = getmob(tx, ty);
        if (mb) {
            if (itm_type[itm] === "fud") {
                eat(itm, mb);
            } else {
                hitmob(null, mb, itm_stat1[itm]);
                sfx(58);
            }
        }
    }
    mobbump(p_mob, thrdx, thrdy);

    inv[thrslt] = null;
    p_t = 0;
    _upd = update_pturn;
}

function throwtile() {
    let tx = p_mob.x;
    let ty = p_mob.y;
    do {
        tx += thrdx;
        ty += thrdy;
    } while (iswalkable(tx, ty, "checkmobs"));

    return {x: tx, y: ty};
}

//>8
//ui

function addwind(_x, _y, _w, _h, _txt) {
    let w = {
        x: _x,
        y: _y,
        w: _w,
        h: _h,
        txt: _txt
    };
    add(wind, w);
    return w;
}

function drawind() {
    wind.forEach(w => {
        let wx = Math.floor(w.x);
        let wy = Math.floor(w.y);
        let ww = Math.floor(w.w);
        let wh = Math.floor(w.h);

        rectfill2(wx, wy, ww, wh, 0);
        rect(wx + 1, wy + 1, wx + ww - 2, wy + wh - 2, 6);
        wx += 4;
        wy += 4;
        if (w.cur !== undefined) {
            wx += 6;
        }
        for (let i = 0; i < w.txt.length; i++) {
            let txt = w.txt[i];
            let c = 6;
            if (w.col && w.col[i]) {
                c = w.col[i];
            }
            luaprint(txt, wx, wy, c);
            if (i === w.cur) {
                spr(255, wx - 5 + Math.sin(time() / 100), wy);
            }
            wy += 6;
        }

        if (w.dur !== undefined) {
            w.dur -= 1;
            if (w.dur <= 0) {
                let dif = w.h / 4;
                w.y += dif / 2;
                w.h -= dif;
                if (w.h < 3) {
                    del(wind, w);
                }
            }
        } else {
            if (w.butt) {
                oprint8("❎", wx + ww - 15, wy - 1 + Math.sin(time() / 100), 6, 0);
            }
        }
    })
}

function showmsg(txt, dur) {
    let wid = (txt.length + 2) * 4 + 7;
    let w = addwind(63 - wid / 2, 50, wid, 13, [" " + txt]);
    w.dur = dur
}

function showtalk(txt) {
    talkwind = addwind(16, 50, 94, txt.length * 6 + 7, txt);
    talkwind.butt = true;
}

function addfloat(_txt, _x, _y, _c) {
    add(float, {txt: _txt, x: _x, y: _y, c: _c, ty: _y - 10, t: 0});
}

function dofloats() {
    float.forEach(f => {
        f.y += (f.ty - f.y) / 10;
        f.t += 1;
        if (f.t > 70) {
            del(float, f);
        }
    });
}

function dohpwind() {
    hpwind.txt[0] = "♥" + p_mob.hp + "/" + p_mob.hpmax;
    let hpy = 5;
    if (p_mob.y < 8) {
        hpy = 110;
    }
    hpwind.y += (hpy - hpwind.y) / 5;
}

function showinv() {
    let txt = [];
    let col = [];
    let itm = null;
    let eqt = null;
    _upd = update_inv;
    for (let i = 0; i <= 1; i++) {
        itm = eqp[i];
        if (itm) {
            eqt = itm_name[itm];
            add(col, 6);
        } else {
            eqt = i === 1 ? "[weapon]" : "[armor]";
            add(col, 5);
        }
        add(txt, eqt);
    }
    add(txt, "……………………");
    add(col, 6);
    for (let i = 0; i <= 5; i++) {
        itm = inv[i];
        if (itm) {
            add(txt, itm_name[itm]);
            add(col, 6);
        } else {
            add(txt, "...");
            add(col, 5);
        }
    }

    invwind = addwind(5, 17, 84, 62, txt);
    invwind.cur = 2;
    invwind.col = col;

    txt = "ok    ";
    if (p_mob.bless < 0) {
        txt = "curse ";
    } else if (p_mob.bless > 0) {
        txt = "bless ";
    }

    statwind = addwind(5, 5, 84, 13, [txt + "atk:" + p_mob.atk + " def:" + p_mob.defmin + "-" + p_mob.defmax]);

    curwind = invwind;
}

function showuse() {
    let itm = invwind.cur < 2 ? eqp[invwind.cur] : inv[invwind.cur - 3];
    if (itm === null) {
        return;
    }
    let typ = itm_type[itm];
    let txt = [];

    if ((typ === "wep" || typ === "arm") && invwind.cur > 2) {
        add(txt, "equip");
    }

    if (typ === "fud") {
        add(txt, "eat");
    }

    if (typ === "thr" || typ === "fud") {
        add(txt, "throw");
    }
    add(txt, "trash");

    usewind = addwind(84, invwind.cur * 6 + 11, 36, 7 + txt.length * 6, txt);
    usewind.cur = 0;
    curwind = usewind;
}

function triguse() {
    let verb = usewind.txt[usewind.cur];
    let i = invwind.cur;
    let back = true;
    let itm = i < 3 ? eqp[i] : inv[i - 3];

    if (verb === "trash") {
        if (i < 3) {
            eqp[i] = null;
        } else {
            inv[i - 3] = null;
        }
    } else if (verb === "equip") {
        let slot = 2;
        if (itm_type[itm] === "wep") {
            slot = 1;
        }
        inv[i - 3] = eqp[slot];
        eqp[slot] = itm;
    } else if (verb === "eat") {
        eat(itm, p_mob);
        _upd = update_pturn;
        inv[i - 3] = null;
        p_mob.mov = null;
        p_t = 0;
        back = false;
    } else if (verb === "throw") {
        _upd = update_throw;
        thrslt = i - 3;
        back = false;
    }

    updatestats();
    usewind.dur = 0;

    if (back) {
        del(wind, invwind);
        del(wind, statwind);
        showinv();
        invwind.cur = i;
        showhint();
    } else {
        invwind.dur = 0;
        statwind.dur = 0;
        if (hintwind) {
            hintwind.dur = 0;
        }
    }
}

function floormsg() {
    showmsg("floor " + floor, 120);
}

function showhint() {
    if (hintwind) {
        hintwind.dur = 0;
        hintwind = null;
    }

    if (invwind.cur > 3) {
        let itm = inv[invwind.cur - 3];

        if (itm && itm_type[itm] === "fud") {
            let txt = itm_known[itm] ? itm_name[itm] + itm_desc[itm] : "???";
            hintwind = addwind(5, 78, txt.length * 4 + 7, 13, [txt]);
        }

    }

}

//>8
//mobs && items

function addmob(typ, mx, my) {
    let m = {
        x: mx,
        y: my,
        ox: 0,
        oy: 0,
        flp: false,
        ani: [],
        flash: 0,
        stun: false,
        bless: 0,
        charge: 1,
        lastmoved: false,
        spec: mob_spec[typ - 1],
        hp: mob_hp[typ - 1],
        hpmax: mob_hp[typ - 1],
        atk: mob_atk[typ - 1],
        defmin: 0,
        defmax: 0,
        los: mob_los[typ - 1],
        task: ai_wait,
        name: mob_name[typ - 1]
    };
    for (let i = 0; i <= 3; i++) {
        add(m.ani, mob_ani[typ - 1] + i);
    }
    add(mob, m);
    return m;
}

function mobwalk(mb, dx, dy) {
    mb.x += dx;
    mb.y += dy;

    mobflip(mb, dx);
    mb.sox = -dx * 8;
    mb.soy = -dy * 8;
    mb.ox = mb.sox;
    mb.oy = mb.soy;
    mb.mov = mov_walk;
}

function mobbump(mb, dx, dy) {
    mobflip(mb, dx);
    mb.sox = dx * 8;
    mb.soy = dy * 8;
    mb.ox = 0;
    mb.oy = 0;
    mb.mov = mov_bump;
}

function mobflip(mb, dx) {
    mb.flp = dx === 0 ? mb.flp : dx < 0;
}

function mov_walk(self) {
    let tme = 1 - p_t;
    self.ox = self.sox * tme;
    self.oy = self.soy * tme;
}

function mov_bump(self) {
    let tme = p_t > 0.5 ? 1 - p_t : p_t;
    self.ox = self.sox * tme;
    self.oy = self.soy * tme;
}

function doai() {
    let moving = false;
    mob.forEach((m) => {
        if (m !== p_mob) {
            m.mov = null;
            if (m.stun) {
                m.stun = false;
            } else {
                m.lastmoved = m.task(m);
                moving = m.lastmoved || moving;
            }
        }
    });
    if (moving) {
        _upd = update_aiturn;
        p_t = 0;
    } else {
        p_mob.stun = false;
    }
}

function ai_wait(m) {
    if (cansee(m, p_mob)) {
        //aggro
        m.task = ai_attac;
        m.tx = p_mob.x;
        m.ty = p_mob.y;
        addfloat("!", m.x * 8 + 2, m.y * 8, 10);
    }
    return false
}

function ai_attac(m) {
    if (dist(m.x, m.y, p_mob.x, p_mob.y) === 1) {
        //attack player
        let dx = p_mob.x - m.x;
        let dy = p_mob.y - m.y;
        mobbump(m, dx, dy);
        if (m.spec === "stun" && m.charge > 0) {
            stunmob(p_mob);
            m.charge -= 1;
        } else if (m.spec === "ghost" && m.charge > 0) {
            hitmob(m, p_mob);
            blessmob(p_mob, -1);
            m.charge -= 1;
        } else {
            hitmob(m, p_mob);
        }
        sfx(57);
        return true;
    } else {
        //move to player
        if (cansee(m, p_mob)) {
            m.tx = p_mob.x;
            m.ty = p_mob.y;
        }

        if (m.x === m.tx && m.y === m.ty) {
            //de aggro
            m.task = ai_wait;
            addfloat("?", m.x * 8 + 2, m.y * 8, 10);
        } else {
            if (m.spec === "slow" && m.lastmoved) {
                return false;
            }
            let bdst = 999;
            let cand = [];
            calcdist(m.tx, m.ty);
            for (let i = 0; i <= 3; i++) {
                let dx = dirx[i];
                let dy = diry[i];
                let tx = m.x + dx;
                let ty = m.y + dy;
                if (iswalkable(tx, ty, "checkmobs")) {
                    let dst = distmap[tx][ty];
                    if (dst < bdst) {
                        cand = [];
                        bdst = dst;
                    }
                    if (dst === bdst) {
                        add(cand, i);
                    }
                }
            }
            if (cand.length > 0) {
                let c = getrnd(cand);
                mobwalk(m, dirx[c], diry[c]);
                return true;
            }
        }
    }
    return false;
}

function cansee(m1, m2) {
    return dist(m1.x, m1.y, m2.x, m2.y) <= m1.los && los(m1.x, m1.y, m2.x, m2.y);
}

function spawnmobs() {
    mobpool = [];
    for (let i = 1; i < mob_name.length; i++) {
        if (mob_minf[i] <= floor && mob_maxf[i] >= floor) {
            add(mobpool, i + 1);
        }
    }

    if (mobpool.length === 0) {
        return;
    }

    let minmons = [3, 5, 7, 9, 10, 11, 12, 13];
    let maxmons = [6, 10, 14, 18, 20, 22, 24, 26];
    let placed = 0;
    let rpot = [];

    rooms.forEach(r => {
        add(rpot, r);
    });

    do {
        let r = getrnd(rpot);
        placed += infestroom(r);
        del(rpot, r);
    } while (rpot.length > 0 && placed <= maxmons[floor]);

    if (placed < minmons[floor]) {
        do {
            let x, y;
            do {
                x = Math.floor(rnd(16));
                y = Math.floor(rnd(16));
            } while (!iswalkable(x, y, "checkmobs") || !(mget(x, y) === 1 || mget(x, y) === 4));
            addmob(getrnd(mobpool), x, y);
            placed += 1;
        } while (placed < minmons[floor]);
    }
}

function infestroom(r) {
    if (r.nospawn) {
        return 0
    }
    let target = 2 + Math.floor(rnd((r.w * r.h) / 6 - 1));
    let x, y;
    target = Math.min(5, target);
    for (let i = 1; i <= target; i++) {
        do {
            x = r.x + Math.floor(rnd(r.w));
            y = r.y + Math.floor(rnd(r.h));
        } while (!iswalkable(x, y, "checkmobs") || !(mget(x, y) === 1 || mget(x, y) === 4));
        addmob(getrnd(mobpool), x, y);
    }

    return target;
}

////////////////////////-
// items
////////////////////////-

function takeitem(itm) {
    let i = freeinvslot();
    if (i === 0) {
        return false;
    }
    inv[i - 1] = itm;
    return true;
}

function freeinvslot() {
    for (let i = 0; i <= 5; i++) {
        if (!inv[i]) {
            return i + 1;
        }
    }
    return 0;
}

function makeipool() {
    ipool_rar = [];
    ipool_com = [];

    for (let i = 0; i < itm_name.length; i++) {
        let t = itm_type[i];
        if (t === "wep" || t === "arm") {
            add(ipool_rar, i);
        } else {
            add(ipool_com, i);
        }
    }
}

function makefipool() {
    fipool_rar = [];
    fipool_com = [];

    ipool_rar.forEach((i) => {
        if (itm_minf[i] <= floor && itm_maxf[i] >= floor) {
            add(fipool_rar, i);
        }
    });

    ipool_com.forEach((i) => {
        if (itm_minf[i] <= floor && itm_maxf[i] >= floor) {
            add(fipool_com, i);
        }
    });
}

function getitm_rar() {
    if (fipool_rar.length > 0) {
        let itm = getrnd(fipool_rar);
        del(fipool_rar, itm);
        del(ipool_rar, itm);
        return itm;
    } else {
        return getrnd(fipool_com);
    }
}

function foodnames() {
    let fud = ["jerky", "schnitzel", "steak", "gyros", "fricassee", "haggis", "mett", "kebab", "burger", "meatball", "pizza", "calzone", "pasticio", "chops", "hams", "ribs", "roast", "meatloaf", "chili", "stew", "pie", "wrap", "taco", "burrito", "rolls", "filet", "salami", "sandwich", "casserole", "spam", "souvlaki"];
    let fu = null;
    let adj = ["yellow", "green", "blue", "purple", "black", "sweet", "salty", "spicy", "strange", "old", "dry", "wet", "smooth", "soft", "crusty", "pickled", "sour", "leftover", "mom's", "steamed", "hairy", "smoked", "mini", "stuffed", "classic", "marinated", "bbq", "savory", "baked", "juicy", "sloppy", "cheesy", "hot", "cold", "zesty"];
    let ad = null;

    itm_known = [];
    for (let i = 0; i < itm_name.length; i++) {
        if (itm_type[i] === "fud") {
            fu = getrnd(fud);
            ad = getrnd(adj);
            del(fud, fu);
            del(adj, ad);
            itm_name[i] = ad + " " + fu;
            itm_known[i] = false;
        }
    }
}

//>8
//gen

function genfloor(f) {
    floor = f;
    makefipool();
    mob = [];
    add(mob, p_mob);
    fog = blankmap(0);
    if (floor === 1) {
        st_steps = 0;
        music(1, true);
    }
    if (floor === 0) {
        copymap(16, 0);
    } else if (floor === winfloor) {
        copymap(32, 0);
    } else {
        fog = blankmap(1);
        mapgen();
        unfog();
    }
}

function mapgen() {
    do {
        copymap(48, 0);
        rooms = [];
        roomap = blankmap(0);
        doors = [];
        genrooms();
        mazeworm();
        placeflags();
        carvedoors();
    } while (flaglib.length > 1);

    carvescuts();
    startend();
    fillends();
    prettywalls();

    installdoors();

    spawnchests();
    spawnmobs();
    decorooms();
}

////////////////
// rooms
////////////////

function genrooms() {
    // tweak dis
    let fmax = 5;
    let rmax = 4;
    let mw = 10;
    let mh = 10;

    do {
        let r = rndroom(mw, mh);
        if (placeroom(r)) {
            if (rooms.length === 1) {
                mw /= 2;
                mh /= 2;
            }
            rmax -= 1;
        } else {
            fmax -= 1;
            if (r.w > r.h) {
                mw = Math.max(mw - 1, 3);
            } else {
                mh = Math.max(mh - 1, 3);
            }
        }
    } while (fmax > 0 && rmax > 0);
}

function rndroom(mw, mh) {
    //clamp max area
    let _w = 3 + Math.floor(rnd(mw - 2));
    mh = mid(35 / _w, 3, mh);
    let _h = 3 + Math.floor(rnd(mh - 2));
    return {
        x: 0,
        y: 0,
        w: _w,
        h: _h
    }
}

function placeroom(r) {
    let cand = [];
    let c;

    for (let _x = 0; _x <= 16 - r.w; _x++) {
        for (let _y = 0; _y <= 16 - r.h; _y++) {
            if (doesroomfit(r, _x, _y)) {
                add(cand, {x: _x, y: _y});
            }
        }
    }

    if (cand.length === 0) {
        return false;
    }

    c = getrnd(cand);
    r.x = c.x;
    r.y = c.y;
    add(rooms, r);
    for (let _x = 0; _x <= r.w - 1; _x++) {
        for (let _y = 0; _y <= r.h - 1; _y++) {
            mset(_x + r.x, _y + r.y, 1);
            roomap[_x + r.x][_y + r.y] = rooms.length;
        }
    }
    return true;
}

function doesroomfit(r, x, y) {
    for (let _x = -1; _x <= r.w; _x++) {
        for (let _y = -1; _y <= r.h; _y++) {
            if (iswalkable(_x + x, _y + y)) {
                return false;
            }
        }
    }

    return true;
}

////////////////
// maze
////////////////

function mazeworm() {
    let cand;
    do {
        cand = [];
        for (let _x = 0; _x <= 15; _x++) {
            for (let _y = 0; _y <= 15; _y++) {
                if (cancarve(_x, _y, false) && !nexttoroom(_x, _y)) {
                    add(cand, {x: _x, y: _y});
                }
            }
        }

        if (cand.length > 0) {
            let c = getrnd(cand);
            digworm(c.x, c.y);
        }
    } while (cand.length > 0);
}

function digworm(x, y) {
    let dr = 1 + Math.floor(rnd(4));
    let stp = 0;

    do {
        mset(x, y, 1);
        if (!cancarve(x + dirx[dr], y + diry[dr], false) || (rnd() < 0.5 && stp > 2)) {
            stp = 0;
            let cand = [];
            for (let i = 0; i <= 3; i++) {
                if (cancarve(x + dirx[i], y + diry[i], false)) {
                    add(cand, i);
                }
            }
            if (cand.length === 0) {
                dr = 8;
            } else {
                dr = getrnd(cand);
            }
        }
        x += dirx[dr];
        y += diry[dr];
        stp += 1;
    } while (dr !== 8);
}

function cancarve(x, y, walk) {
    if (!inbounds(x, y)) {
        return false;
    }
    walk = walk !== null ? walk : iswalkable(x, y);

    if (iswalkable(x, y) === walk) {
        return sigarray(getsig(x, y), crv_sig, crv_msk) !== 0;
    }
    return false;
}

function bcomp(sig, match, mask) {
    mask = mask ? mask : 0;
    return bor(sig, mask) === bor(match, mask);
}

function getsig(x, y) {
    let sig = 0;
    let digit;
    for (let i = 0; i <= 7; i++) {
        let dx = x + dirx[i];
        let dy = y + diry[i];
        if (iswalkable(dx, dy)) {
            digit = 0;
        } else {
            digit = 1;
        }
        sig = bor(sig, shl(digit, 7 - i));
    }
    return sig;
}

function sigarray(sig, arr, marr) {
    for (let i = 0; i < arr.length; i++) {
        if (bcomp(sig, arr[i], marr[i])) {
            return i + 1;
        }
    }
    return 0;
}

////////////////
// doorways
////////////////

function placeflags() {
    let curf = 1;
    flags = blankmap(0);
    flaglib = [];
    for (let _x = 0; _x <= 15; _x++) {
        for (let _y = 0; _y <= 15; _y++) {
            if (iswalkable(_x, _y) && flags[_x][_y] === 0) {
                growflag(_x, _y, curf);
                add(flaglib, curf);
                curf += 1;
            }
        }
    }
}

function growflag(_x, _y, flg) {
    let cand = [{
        x: _x, y: _y
    }];
    let candnew = null;
    if (!flags[_x]) {
        flags[_x] = {};
    }
    flags[_x][_y] = flg;
    do {
        candnew = [];
        cand.forEach(c => {
            for (let d = 0; d <= 3; d++) {
                let dx = c.x + dirx[d];
                let dy = c.y + diry[d];
                if (!inbounds(dx, dy)) {
                    continue;
                }
                if (!flags[dx]) {
                    flags[dx] = {};
                }
                if (iswalkable(dx, dy) && flags[dx][dy] !== flg) {
                    flags[dx][dy] = flg;
                    add(candnew, {x: dx, y: dy});
                }
            }
        });
        cand = candnew;
    } while (cand.length > 0);
}

function carvedoors() {
    let x1 = 1;
    let y1 = 1;
    let x2 = 1;
    let y2 = 1;
    let found = null;
    let _f1 = null;
    let _f2 = null;
    let drs = null;
    do {
        drs = [];
        for (let _x = 0; _x <= 15; _x++) {
            for (let _y = 0; _y <= 15; _y++) {
                if (!iswalkable(_x, _y)) {
                    let sig = getsig(_x, _y);
                    found = false;
                    if (bcomp(sig, 0b11000000, 0b00001111)) {
                        x1 = _x;
                        y1 = _y - 1;
                        x2 = _x;
                        y2 = _y + 1;
                        found = true;
                    } else if (bcomp(sig, 0b00110000, 0b00001111)) {
                        x1 = _x + 1;
                        y1 = _y;
                        x2 = _x - 1;
                        y2 = _y;
                        found = true;
                    }
                    _f1 = flags[x1][y1];
                    _f2 = flags[x2][y2];
                    if (found && _f1 !== _f2) {
                        add(drs, {x: _x, y: _y, f1: _f1, f2: _f2});
                    }
                }
            }
        }

        if (drs.length > 0) {
            let d = getrnd(drs);
            add(doors, d);
            mset(d.x, d.y, 1);
            growflag(d.x, d.y, d.f1);
            del(flaglib, d.f2);
        }
    } while (drs.length > 0);
}

function carvescuts() {
    let x1 = 1;
    let y1 = 1;
    let x2 = 1;
    let y2 = 1;
    let cut = 0;
    let found = null;
    let drs = null;
    do {
        drs = [];
        for (let _x = 0; _x <= 15; _x++) {
            for (let _y = 0; _y <= 15; _y++) {
                if (!iswalkable(_x, _y)) {
                    let sig = getsig(_x, _y);
                    found = false;
                    if (bcomp(sig, 0b11000000, 0b00001111)) {
                        x1 = _x;
                        y1 = _y - 1;
                        x2 = _x;
                        y2 = _y + 1;
                        found = true;
                    } else if (bcomp(sig, 0b00110000, 0b00001111)) {
                        x1 = _x + 1;
                        y1 = _y;
                        x2 = _x - 1;
                        y2 = _y;
                        found = true;
                    }
                    if (found) {
                        calcdist(x1, y1);
                        if (distmap[x2][y2] > 20) {
                            add(drs, {x: _x, y: _y});
                        }
                    }
                }
            }
        }

        if (drs.length > 0) {
            let d = getrnd(drs);
            add(doors, d);
            mset(d.x, d.y, 1);
            cut += 1;
        }
    } while (drs.length > 0 && cut < 3);
}

function fillends() {
    let filled, tle;
    do {
        filled = false;
        for (let _x = 0; _x <= 15; _x++) {
            for (let _y = 0; _y <= 15; _y++) {
                tle = mget(_x, _y);
                if (cancarve(_x, _y, true) && tle !== 14 && tle !== 15) {
                    filled = true;
                    mset(_x, _y, 2);
                }
            }
        }
    } while (filled);
}

function isdoor(x, y) {
    let sig = getsig(x, y);
    if (bcomp(sig, 0b11000000, 0b00001111) || bcomp(sig, 0b00110000, 0b00001111)) {
        return nexttoroom(x, y);
    }

    return false;
}

function nexttoroom(x, y, dirs) {
    dirs = dirs ? dirs : 4;
    for (let i = 0; i <= dirs - 1; i++) {
        if (inbounds(x + dirx[i], y + diry[i]) && roomap[x + dirx[i]][y + diry[i]] !== 0) {
            return true;
        }
    }

    return false;
}

function installdoors() {
    doors.forEach(d => {
        let dx = d.x;
        let dy = d.y;
        if ((mget(dx, dy) === 1 || mget(dx, dy) === 4) && isdoor(dx, dy) && !next2tile(dx, dy, 13)) {
            mset(dx, dy, 13);
        }
    });
}

////////////////
// decoration
////////////////

function startend() {
    let high = 0;
    let low = 9999;
    let px, py, ex, ey;
    do {
        px = Math.floor(rnd(16));
        py = Math.floor(rnd(16));
    } while (!iswalkable(px, py));
    calcdist(px, py);
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tmp = distmap[x][y];
            if (iswalkable(x, y) && tmp > high) {
                px = x;
                py = y;
                high = tmp;
            }
        }
    }
    calcdist(px, py);
    high = 0;
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tmp = distmap[x][y];
            if (tmp > high && cancarve(x, y, null)) {
                ex = x;
                ey = y;
                high = tmp;
            }
        }
    }
    mset(ex, ey, 14);

    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tmp = distmap[x][y];
            if (tmp >= 0) {
                let score = starscore(x, y);
                tmp = tmp - score;
                if (tmp < low && score >= 0) {
                    px = x;
                    py = y;
                    low = tmp;
                }
            }
        }
    }

    if (roomap[px][py] > 0) {
        rooms[roomap[px][py] - 1].nospawn = true;
    }
    mset(px, py, 15);
    p_mob.x = px;
    p_mob.y = py;
}

function starscore(x, y) {
    if (roomap[x][y] === 0) {
        if (nexttoroom(x, y, 8)) {
            return -1;
        }
        if (freestanding(x, y) > 0) {
            return 5;
        } else if (cancarve(x, y, null)) {
            return 0;
        }
    } else {
        let scr = freestanding(x, y);
        if (scr > 0) {
            return scr <= 8 ? 3 : 0;
        }
    }
    return -1
}

function next2tile(_x, _y, tle) {
    for (let i = 0; i <= 3; i++) {
        if (inbounds(_x + dirx[i], _y + diry[i]) && mget(_x + dirx[i], _y + diry[i]) === tle) {
            return true;
        }
    }
    return false;
}

function prettywalls() {
    for (let x = 0; x <= 15; x++) {
        for (let y = 0; y <= 15; y++) {
            let tle = mget(x, y);
            if (tle === 2) {
                let ntle = sigarray(getsig(x, y), wall_sig, wall_msk);
                tle = ntle === 0 ? 3 : 15 + ntle;
                mset(x, y, tle);
            } else if (tle === 1) {
                if (!iswalkable(x, y - 1)) {
                    mset(x, y, 4);
                }
            }
        }
    }
}

function decorooms() {
    tarr_dirt = [1, 74, 75, 76];
    tarr_farn = [1, 70, 70, 70, 71, 71, 71, 72, 73, 74];
    tarr_vase = [1, 1, 7, 8];
    let funcs = [
        deco_dirt,
        deco_torch,
        deco_carpet,
        deco_farn,
        deco_vase
    ];
    let func = deco_vase;
    let rpot = [];

    rooms.forEach(r => {
        add(rpot, r);
    });

    do {
        let r = getrnd(rpot);
        del(rpot, r);
        for (let x = 0; x <= r.w - 1; x++) {
            for (let y = r.h - 1; y >= 1; y--) {
                if (mget(r.x + x, r.y + y) === 1) {
                    func(r, r.x + x, r.y + y, x, y);
                }
            }
        }
        func = getrnd(funcs);
    } while (rpot.length > 0);
}

function deco_torch(r, tx, ty, x, y) {
    if (rnd(3) > 1 && y % 2 === 1 && !next2tile(tx, ty, 13)) {
        if (x === 0) {
            mset(tx, ty, 64);
        } else if (x === r.w - 1) {
            mset(tx, ty, 66);
        }
    }
}

function deco_carpet(r, tx, ty, x, y) {
    deco_torch(r, tx, ty, x, y);
    if (x > 0 && y > 0 && x < r.w - 1 && y < r.h - 1) {
        mset(tx, ty, 68);
    }
}

function deco_dirt(r, tx, ty, x, y) {
    mset(tx, ty, getrnd(tarr_dirt));
}

function deco_farn(r, tx, ty, x, y) {
    mset(tx, ty, getrnd(tarr_farn));
}

function deco_vase(r, tx, ty, x, y) {
    if (iswalkable(tx, ty, "checkmobs") && !next2tile(tx, ty, 13) && !bcomp(getsig(tx, ty), 0, 0b00001111)) {
        mset(tx, ty, getrnd(tarr_vase));
    }
}

function spawnchests() {
    let chestdice = [0, 1, 1, 1, 2, 3];
    let rpot = [];
    let rare = true;
    let place = getrnd(chestdice);

    rooms.forEach(r => {
        add(rpot, r);
    });

    while (place > 0 && rpot.length > 0) {
        let r = getrnd(rpot);
        placechest(r, rare);
        rare = false;
        place -= 1;
        del(rpot, r);
    }
}

function placechest(r, rare) {
    let x, y;
    do {
        x = r.x + Math.floor(rnd(r.w - 2)) + 1;
        y = r.y + Math.floor(rnd(r.h - 2)) + 1;
    } while (mget(x, y) !== 1);
    mset(x, y, rare ? 12 : 10);
}

function freestanding(x, y) {
    return sigarray(getsig(x, y), free_sig, free_msk);
}
