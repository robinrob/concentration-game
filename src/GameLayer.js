var GameLayer = cc.Layer.extend({
    nTiles: null,
    tiles: null,
    pairs: null,
    turned: null,
    listener: null,

    ctor: function() {
        this._super()

        this._className = "GameLayer"

        this.tiles = []

        var that = this
        this.listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var location = target.convertToNodeSpace(touch.getLocation());
                var targetSize = target.getContentSize();
                var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
                if (cc.rectContainsPoint(targetRectangle, location)) {
                    that.checkTiles(target)
                }
            }
        })
        var gradient = cc.LayerGradient.create(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.addChild(gradient, 0);

        var winSize = cc.director.getWinSize();
        var centerPos = cc.p(winSize.width / 2, winSize.height / 6 );

        var menuItemPlay = new cc.MenuItemSprite(
            ui.restartButton().normal,
            ui.restartButton().selected,
            this.reset, this);
        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerPos);
        this.addChild(menu, 2);

        this.reset()
    },

    reset: function() {
        //this.gameArray = [0,0]
        this.gameArray = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7]
        this.nTiles = this.gameArray.length
        this.turned = []
        this.pairs = 0

        var that = this
        this.tiles.forEach(function(tile) {
            that.removeChild(tile)
        })

        this.tiles = []
        for(i = 0; i < this.nTiles; i++){
            var tile = new Tile(this.takeRandom(this.gameArray))
            cc.eventManager.addListener(this.listener.clone(), tile);
            this.tiles.push(tile)
            this.addChild(tile, 1);
            tile.setPosition(49+i%4*74,400-Math.floor(i/4)*74);
        }
    },

    checkTiles: function(tile) {
        var that = this

        if (this.turned.indexOf(tile) == -1 && this.turned.length < 2) {
            tile.show()
            this.turned.push(tile)

            if (this.turned.length == 2) {
                var pause = setTimeout(function () {
                    that.checkMatch()
                }, 1000)
            }
        }
    },

    checkMatch: function() {
        var match = true
        var tag = this.turned[0].tag

        var that = this
        this.turned.forEach(function(tile) {
            if (tile.tag != tag) {
                match = false
            }
        }, this)

        this.turned.forEach(function (tile) {
            if (match) {
                tile.lock()
            }
            else {
                tile.cover()
            }
        }, that)

        this.turned = []
    },

    isChecking: function() {
        return this._checking
    },

    setIsChecking: function(bool) {
        this._checking = bool
    },

    takeRandom: function(items) {
        var index = Math.round(Math.random() * (items.length - 1))
        var item = items[index]
        items.splice(index, 1)
        return item
    }
});