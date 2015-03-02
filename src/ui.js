var ui = {
    coverTile: function() {
        return new CompositeSprite(["assets/tile_bg.png", "assets/tile_cover.png"]);
    },

    tile: function(n) {
        return new CompositeSprite(["assets/tile_bg.png", "assets/tile_" + n + ".png"]).setCompColor(0, tileColors[n])
    },

    touchListener: function(callBack, that) {
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            swallowTouches: true,
            onTouchBegan: function (touch, event) {
                var target = event.getCurrentTarget();
                var location = target.convertToNodeSpace(touch.getLocation());
                var targetSize = target.getContentSize();
                var targetRectangle = cc.rect(0, 0, targetSize.width, targetSize.height);
                if (cc.rectContainsPoint(targetRectangle, location)) {
                    callBack(target).apply(that)
                }
            }
        })
        return listener
    },

    restartButton: function() {
        var buttons = {
            normal:(function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.restart_n_text_png])
                btn.setColor(mrrobinsmith.g.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g.buttonTextColor)
                return btn
            })(),
            selected: (function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.restart_s_text_png])
                btn.setColor(mrrobinsmith.g.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g.buttonTextColor)
                return btn
            })()
        }

        return buttons
    },

    startButton: function() {
        var buttons = {
            normal:(function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.start_n_text_png])
                btn.setColor(mrrobinsmith.g.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g.buttonTextColor)
                return btn
            })(),
            selected: (function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png, mrrobinsmith.res.button_s_inner_png, mrrobinsmith.res.start_s_text_png])
                btn.setColor(mrrobinsmith.g.buttonOuterColor)
                btn.setChildColor(0, mrrobinsmith.g.buttonInnerColor)
                btn.setChildColor(1, mrrobinsmith.g.buttonTextColor)
                return btn
            })()
        }

        return buttons
    }
}