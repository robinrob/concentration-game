var ui = {
    coverTile: function() {
        return new CompositeSprite(["res/tile_bg.png", "res/tile_cover.png"]);
    },

    tile: function(n) {
        return new CompositeSprite(["res/tile_bg.png", "res/tile_" + n + ".png"]).setCompColor(0, tileColors[n])
    },

    restartButton: function() {
        var buttons = {
            normal:(function () {
                var btn = new CompositeSprite([mrrobinsmith.res.button_outer_png,mrrobinsmith.res.button_n_inner_png, mrrobinsmith.res.restart_n_text_png])
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