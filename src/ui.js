var ui = {
    tileColors: [
        new cc.color(255, 255, 0, 255),
        new cc.color(0, 0, 255, 255),
        new cc.color(255, 0, 255, 255),
        new cc.color(255, 0, 198, 255),
        new cc.color(255, 78, 0, 255),
        new cc.color(172, 6, 84, 255),
        new cc.color(145, 58, 6, 255),
        new cc.color(6, 87, 234, 255)
    ],
    tileN: null,
    coverTile: function() {
        return new CompositeSprite(["assets/tile_bg.png", "assets/tile_cover.png"]);
    },

    tileN: function(n) {
        return new CompositeSprite(["assets/tile_bg.png", "assets/tile_" + n + ".png"]).setCompColor(n, tileColors[n])
    },

    tile0: function() {
        return this.tileN(0).setCompColor(0, new cc.color(255, 255, 0, 255))
    },

    tile1: function() {
        return this.tileN(1).setCompColor(0, new cc.color(0, 0, 255, 255))
    },

    tile2: function() {
        return this.tileN(2).setCompColor(0, new cc.color(255, 0, 255, 255))
    },

    tile3: function() {
        return this.tileN(2).setCompColor(0, new cc.color(255, 0, 255, 255))
    }
}