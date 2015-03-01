var Tile = CompositeSprite.extend({
    tag: null,

    ctor:function(num) {
        this.tag = num

        this._super(["assets/tile_bg.png", "assets/tile_cover.png"])
        cc.eventManager.addListener(this._listener(this._touchAction), this);
    },

    _listener: function(callBack) {
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var location = target.convertToNodeSpace(touch.getLocation());
                var targetSize = target.getContentSize();
                var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
                if (cc.rectContainsPoint(targetRectangle, location)) {
                    callBack.apply(target)
                }
            }
        })
        return listener
    },

    _touchAction: function() {
        this.init(["assets/tile_bg.png", "assets/tile_" + this.tag + ".png"])
        this.setChildColor(1, tileColors[this.tag])
    }
});