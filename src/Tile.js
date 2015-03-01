var Tile = CompositeSprite.extend({
    tag: null,
    _start_color: null,
    _isTurned: null,
    _isLocked: null,
    _found: null,

    ctor:function(num) {
        this._super([mrrobinsmith.res.tile_bg, mrrobinsmith.res.tile_cover])

        this.tag = num
        this._start_color = this.color
        this._isTurned = false
        this._isLocked = false
        this._found = false

        cc.eventManager.addListener(ui.touchListener(this._touchAction), this);
    },

    _touchAction: function() {
        this.turnOver()
    },

    isTurned: function() {
        return this._isTurned
    },

    toggleIsTurned: function() {
        this._isTurned = !this._isTurned
    },

    turnOver: function() {
        if (!this.isTurned()) {
            if (mrrobinsmith.counter < 2) {
                this.toggle()
            }
        }
        ++mrrobinsmith.counter
        if (mrrobinsmith.counter > 2) {
            this.getParent().checkPairs()
        }
    },

    toggle: function() {
        this.removeAllChildren()

        this.toggleIsTurned()

        if (this.isTurned()) {
            this.addChildren([mrrobinsmith.res["tile" + this.tag]])
            this.setColor(tileColors[this.tag])
        }
        else {
            this.addChildren([mrrobinsmith.res.tile_cover])
            this.color = this._start_color
        }
    },

    isLocked: function() {
        return this._isLocked
    },

    lock: function() {
        this._isLocked = true
    },

    found: function() {
        this._found = true
    }
});