var Tile = CompositeSprite.extend({
    _tag: null,
    _start_color: null,
    _isTurned: null,
    _isLocked: null,

    ctor:function(num) {
        this._super([mrrobinsmith.res.tile_bg, mrrobinsmith.res.tile_cover])

        this._tag = num
        this._start_color = this.color
        this._isTurned = false
        this._isLocked = false
    },

    fuckingTag: function() {
        return this._tag
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
            this.cover()
        }
        else {
            this.show()
        }
    },

    cover: function() {
        this.setChildren([mrrobinsmith.res.tile_cover])
        this.color = this._start_color
    },

    show: function() {
        this.setChildren([mrrobinsmith.res["tile" + this._tag]])
        this.setColor(mrrobinsmith.tileColors[this._tag])
    },

    isLocked: function() {
        return this._isLocked
    },

    lock: function() {
        this._isLocked = true
    }
});