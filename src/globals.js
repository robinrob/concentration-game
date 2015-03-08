
mrrobinsmith = {}

mrrobinsmith.colors = {
    yellow: new cc.color(255, 255, 0, 255),
    green: new cc.color(0, 255, 0, 255),
    purple: new cc.color(174, 0, 255, 255),
    pink: new cc.color(255, 0, 255, 255),
    orange: new cc.color(255, 78, 0, 255),
    maroon: new cc.color(172, 6, 84, 255),
    brown: new cc.color(145, 58, 6, 255),
    blue: new cc.color(6, 87, 234, 255)
}

mrrobinsmith.tileColors = [
    mrrobinsmith.colors.yellow,
    mrrobinsmith.colors.green,
    mrrobinsmith.colors.purple,
    mrrobinsmith.colors.pink,
    mrrobinsmith.colors.orange,
    mrrobinsmith.colors.maroon,
    mrrobinsmith.colors.brown,
    mrrobinsmith.colors.blue
]

mrrobinsmith.g = {
    buttonOuterColor: mrrobinsmith.colors.purple,
    buttonInnerColor: mrrobinsmith.colors.pink,
    buttonTextColor: mrrobinsmith.colors.purple
}

mrrobinsmith.res = {
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
    tile7: "res/tiles/tile_7.png",
    
    arial: "res/Arial.ttf"
};

mrrobinsmith.resources = [];
for (var i in mrrobinsmith.res) {
    mrrobinsmith.resources.push(mrrobinsmith.res[i]);
}