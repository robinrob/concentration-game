var mrrobinsmith = {
    buttonOuterColor: new cc.color(0, 255, 0, 0),
    buttonInnerColor: new cc.color(0, 0, 255, 0),
    buttonTextColor: new cc.color(0, 255, 0, 0)
}

var colors = {
    yellow: new cc.color(255, 255, 0, 255),
    green: new cc.color(0, 255, 0, 255),
    purple: new cc.color(174, 0, 255, 255),
    pink: new cc.color(255, 0, 255, 255),
    orange: new cc.color(255, 78, 0, 255),
    maroon: new cc.color(172, 6, 84, 255),
    brown: new cc.color(145, 58, 6, 255),
    blue: new cc.color(6, 87, 234, 255)
}

var tileColors = [
    colors.yellow,
    colors.green,
    colors.purple,
    colors.pink,
    colors.orange,
    colors.maroon,
    colors.brown,
    colors.blue
]

var g = {
    buttonOuterColor: colors.purple,
    buttonInnerColor: colors.pink,
    buttonTextColor: colors.purple,

    counter: 0
}

var res = {
    button_outer_png: "res/buttons/button-outer.png",

    button_n_inner_png: "res/buttons/button_n-inner.png",
    button_s_inner_png: "res/buttons/button_s-inner.png",

    start_n_text_png: "res/buttons/start_n-text.png",
    start_s_text_png: "res/buttons/start_s-text.png",

    restart_n_text_png: "res/buttons/restart_n-text.png",
    restart_s_text_png: "res/buttons/restart_s-text.png",

    tile_bg: "res/tiles/tile_bg.png",
    tile_cover: "res/tiles/tile_cover.png",
    tile0: "res/tiles/tile_0.png",
    tile1: "res/tiles/tile_1.png",
    tile2: "res/tiles/tile_2.png",
    tile3: "res/tiles/tile_3.png",
    tile4: "res/tiles/tile_4.png",
    tile5: "res/tiles/tile_5.png",
    tile6: "res/tiles/tile_6.png",
    tile7: "res/tiles/tile_7.png"
};

mrrobinsmith.g = g

mrrobinsmith.tileColors = tileColors

mrrobinsmith.res = res

mrrobinsmith.resources = [];
for (var i in mrrobinsmith.res) {
    mrrobinsmith.resources.push(mrrobinsmith.res[i]);
}