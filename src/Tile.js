var Tile = CompositeSprite.extend({
    tag: null,
    _start_color: null,
    _isTurned: null,
    _isLocked: null,
    _found: null,

    ctor:function(num) {
        this._super(["assets/tile_bg.png", "assets/tile_cover.png"])

        this.tag = num
        this._start_color = this.color
        this._isTurned = false
        this._isLocked = false
        this._found = false

        cc.eventManager.addListener(ui.touchListener(this._touchAction), this);
    },

    _touchAction: function() {
        if (!this.isTurned()) {
            this.turnOver()
        }
    },

    isTurned: function() {
        return this._isTurned
    },

    toggleIsTurned: function() {
        this._isTurned = !this._isTurned
    },

    turnOver: function() {
        ++counter
        if (counter <= 2) {
            this.switch()
        }
        else {
            this.getParent().checkPairs()
        }
    },

    isLocked: function() {
        return this._isLocked
    },

    lock: function() {
        this._isLocked = true
    },

    switch: function() {
        if (!this.isLocked()) {
            this.removeAllChildren()

            if (this.isTurned()) {
                this.addChildren(["assets/tile_cover.png"])
                this.color = this._start_color
            }
            else {
                this.addChildren(["assets/tile_" + this.tag + ".png"])
                this.setColor(tileColors[this.tag])
            }
            this.toggleIsTurned()
        }
    },

    isTurned: function() {
        return this._isTurned
    },

    found: function() {
        this._found = true
    }
});