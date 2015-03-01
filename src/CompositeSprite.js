var CompositeSprite = cc.Sprite.extend({
    components: null,

    ctor: function (resources) {
        var child, childX, childY
        cc.log("Sprite.ctor ...")
        this._super(resources.shift());

        this.init(resources)
    },

    init: function(resources) {
        resources.forEach(function(res, index){
            child = new cc.Sprite(res)
            childX = this.x + this.width / 2
            childY = this.y + this.height / 2
            child.setPosition(cc.p(childX, childY))
            // Add children at successively higher z-values in order to stack them on top of each other.
            this.addChild(child, index)
        }, this)

        this.components = [this].concat(this.getChildren())
    },

    setCompColor: function (i, color) {
        this.components[i].color = color
        return this
    },

    setChildColor: function (i, color) {
        this.getChildren()[i].color = color
        return this
    }
})