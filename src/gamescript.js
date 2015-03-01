if (typeof counter == "undefined") {
    counter = 0
}

var gameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        gameLayer = new game();
        gameLayer.init();
        this.addChild(gameLayer);
    }
});

var game = cc.Layer.extend({
    tiles: null,

    init:function () {
        this._super();

        this.tiles = []

        var gradient = cc.LayerGradient.create(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.addChild(gradient);

        var gameArray = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];

        for(i = 0; i < 16; i++){
            cc.log("tag: " + gameArray[i])
            var tile = new Tile(this.takeRandom(gameArray))
            this.tiles.push(tile)
            this.addChild(tile, 0);
            tile.setPosition(49+i%4*74,400-Math.floor(i/4)*74);
        }
    },

    takeRandom: function(items) {
        var index = Math.round(Math.random() * (items.length - 1))
        var item = items[index]
        items.splice(index, 1)
        return item
    },

    checkPairs: function() {
        var turned
        if (counter == 3) {
            counter = 0
            turned = []
            this.tiles.forEach(function(tile) {
                if (tile.isTurned() && !tile.isLocked())  {
                    turned.push(tile)
                }
            })

            var match = this.checkMatch(turned)

            turned.forEach(function(tile) {
                if (match) {
                    tile.lock()
                }
                else {
                    tile.switch()
                }
            })
        }
    },

    checkMatch: function(tiles) {
        var match = true

        tiles.forEach(function(tile) {
            if (tile.tag != tiles[0].tag) {
                match = false
            }
        }, this)

        return match
    }
});