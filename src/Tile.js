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

        cc.eventManager.addListener(ui.touchListener(this.turnOver), this);
    },

    turnOver: function() {
        if (!this.isTurned()) {
            if (mrrobinsmith.counter < 2) {
                this.toggle()
                ++mrrobinsmith.counter
            }
            if (mrrobinsmith.counter >= 2 && !this.getParent().isChecking()) {
                this.getParent().checkPairs()
            }
        }
    },

    isTurned: function() {
        return this._isTurned
    },

    toggleIsTurned: function() {
        this._isTurned = !this._isTurned
    },

    toggle: function() {
        this.toggleIsTurned()

        if (this.isTurned()) {
            this.setChildren([mrrobinsmith.res["tile" + this.tag]])
            this.setColor(tileColors[this.tag])
        }
        else {
            this.setChildren([mrrobinsmith.res.tile_cover])
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