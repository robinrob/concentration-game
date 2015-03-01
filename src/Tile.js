var Tile = CompositeSprite.extend({
    tag: null,

    ctor:function(num) {
        if (num >= 0) {
            this.tag = num
            this._super(["assets/tile_bg.png", "assets/tile_" + this.tag + ".png"])

            this.setCompColor(0, tileColors[this.tag])
        }
        else {
            this.tag = -1
            this._super(["assets/tile_bg.png", "assets/tile_cover.png"])
        }
        cc.eventManager.addListener(this._listener(), this);
    },

    _listener: function() {
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var location = target.convertToNodeSpace(touch.getLocation());
                var targetSize = target.getContentSize();
                var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
                if (cc.rectContainsPoint(targetRectangle, location)) {
                    console.log("I picked a tile!!");
                }
            }
        })
        return listener
    }
});