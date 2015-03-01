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

var ui = {
    coverTile: function() {
        return new CompositeSprite(["assets/tile_bg.png", "assets/tile_cover.png"]);
    },

    tile: function(n) {
        return new CompositeSprite(["assets/tile_bg.png", "assets/tile_" + n + ".png"]).setCompColor(0, tileColors[n])
    },

    touchListener: function(callBack) {
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
    }
}