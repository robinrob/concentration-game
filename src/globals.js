var mrrobinsmith = {}

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
    button_outer_png: "assets/buttons/button-outer.png",

    button_n_inner_png: "assets/buttons/button_n-inner.png",
    button_s_inner_png: "assets/buttons/button_s-inner.png",

    start_n_text_png: "assets/buttons/start_n-text.png",
    start_s_text_png: "assets/buttons/start_s-text.png",

    restart_n_text_png: "assets/buttons/restart_n-text.png",
    restart_s_text_png: "assets/buttons/restart_s-text.png",

    tile_bg: "assets/tiles/tile_bg.png",
    tile_cover: "assets/tiles/tile_cover.png",
    tile0: "assets/tiles/tile_0.png",
    tile1: "assets/tiles/tile_1.png",
    tile2: "assets/tiles/tile_2.png",
    tile3: "assets/tiles/tile_3.png",
    tile4: "assets/tiles/tile_4.png",
    tile5: "assets/tiles/tile_5.png",
    tile6: "assets/tiles/tile_6.png",
    tile7: "assets/tiles/tile_7.png"
};

mrrobinsmith.g = g

mrrobinsmith.tileColors = tileColors

mrrobinsmith.res = res

mrrobinsmith.resources = [];
for (var i in mrrobinsmith.res) {
    mrrobinsmith.resources.push(mrrobinsmith.res[i]);
}