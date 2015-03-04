var GameLayer = cc.Layer.extend({
    _gameArray: [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7],
    gameArray: null,
    robMargin: 49,
    robGap: 10,
    robFontSize: 32,

    tiles: null,
    turned: null,
    robListener: null,
    moves: null,
    scoreLabel: null,

    ctor: function() {
        this._super()

        this.tiles = []

        this._constructListener()
        this._constructBackground()
        this._constructRestartMenu()
        this._constructStats()
        this.setMoves(0)

        this.init()
    },

    _constructListener: function() {
        var that = this
        this.robListener = cc.EventListener.create({
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
    },

    _constructRestartMenu: function() {
        var winSize = cc.director.getWinSize();
        var centerPos = cc.p(winSize.width / 2, winSize.height / 6 );

        var menuItemPlay = new cc.MenuItemSprite(
            ui.restartButton().normal,
            ui.restartButton().selected,
            this.init, this);
        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerPos);
        this.addChild(menu, 2);
    },

    _constructBackground: function() {
        var gradient = cc.LayerGradient.create(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.addChild(gradient, 0);
    },

    _constructStats: function() {
        var winSize = cc.director.getWinSize();

        var lbl = cc.LabelTTF.create("", "res/Arial.ttf", 20, cc.size(100, 24), cc.TEXT_ALIGNMENT_CENTER, cc.TEXT_ALIGNMENT_CENTER);
        this.addChild(lbl)
        lbl.setPosition(this.robFontSize + this.robMargin, winSize.height - 25)
        this.scoreLabel = lbl
    },

    init: function() {
        this._super()

        this.gameArray = this._gameArray.concat()
        this.turned = []
        this.setMoves(0)

        var that = this
        this.tiles.forEach(function(tile) {
            that.removeChild(tile)
        })

        this.tiles = []
        var nTiles = this.gameArray.length
        for(i = 0; i < nTiles; i++){
            var tile = new Tile(this.takeRandom(this.gameArray))
            cc.eventManager.addListener(this.robListener.clone(), tile);
            this.tiles.push(tile)
            this.addChild(tile, 1);

            var x = this.robMargin + ((i % 4) * (64 + this.robGap))
            var y = 400 - (Math.floor(i / 4) * (64 + this.robGap))
            tile.setPosition(x, y);
        }
    },

    setMoves: function(moves) {
        this.moves = moves
        this.scoreLabel.setString("Moves: "+moves);
    },

    incMoves: function() {
      this.setMoves(this.moves + 1)
    },

    takeRandom: function(items) {
        var index = Math.round(Math.random() * (items.length - 1))
        var item = items[index]
        items.splice(index, 1)
        return item
    },

    checkTiles: function(tile) {
        var that = this

        if (this.turned.indexOf(tile) == -1 && this.turned.length < 2) {
            tile.show()
            this.turned.push(tile)

            if (this.turned.length == 2) {
                this.incMoves()
                var pause = setTimeout(function () {
                    that.checkMatch()
                }, 1000)
            }
        }
    },

    checkMatch: function() {
        var match = true
        var tag = this.turned[0].fuckingTag()

        var that = this
        this.turned.forEach(function (tile) {
            if (tile.fuckingTag() != tag) {
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

    loadTtf: function(name) {
        if (cc.sys.os === "Android")
            return "res/" + name + ".ttf";

        return name;
    }
});