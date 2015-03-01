var CompositeSprite = cc.Sprite.extend({
    components: null,

    ctor: function(resources) {
        cc.log("Sprite.ctor ...")
        this._super(resources.shift());

        this.addChildren(resources)
    },

    addChildren: function(resources) {
        var x = this.getPositionX() + this.width / 2
        var y = this.getPositionY() + this.height / 2
        var child

        resources.forEach(function(res, index){
            child = new cc.Sprite(res)
            child.setPosition(cc.p(this.width / 2, this.height / 2))
            // Add children at successively higher z-values in order to stack them on top of each other.
            this.addChild(child, index)
        }, this)

        this.components = [this].concat(this.getChildren())
    },

    setCompColor: function (i, color) {
        this.components[i].color = color
    },

    setChildColor: function (i, color) {
        this.getChildren()[i].setColor(color)
    }
})