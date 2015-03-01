var GameLayer = cc.Layer.extend({
    nTiles: null,
    tiles: null,
    pairs: null,

    init:function () {
        this._super();

        //this.gameArray = [0,0]
        this.gameArray = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]

        this.nTiles = this.gameArray.length

        this.reset()
    },

    reset: function() {
        mrrobinsmith.counter = 0
        this.pairs = 0

        this.removeAllChildren()

        var gradient = cc.LayerGradient.create(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.addChild(gradient, 0);

        var winSize = cc.director.getWinSize();
        var centerPos = cc.p(winSize.width / 2, winSize.height / 6 );

        var menuItemPlay = new cc.MenuItemSprite(
            ui.restartButton().normal,
            ui.restartButton().selected,
            this.onRestart, this);
        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerPos);
        this.addChild(menu, 2);

        cc.log("GameOver.init ...")
        this._super(cc.color(0, 0, 0, 180));
        var winSize = cc.director.getWinSize();

        this.tiles = []

        for(i = 0; i < this.nTiles; i++){
            var tile = new Tile(this.takeRandom(this.gameArray))
            this.tiles.push(tile)
            this.addChild(tile, 1);
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
        mrrobinsmith.counter = 0
        var turned = []

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
                tile.toggle()
            }
        }, this)
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