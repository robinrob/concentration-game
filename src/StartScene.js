var StartScene = cc.Scene.extend({
    onEnter:function () {
        cc.log("MenuScene.onEnter ...")
        this._super();
        var layer = new StartLayer();
        layer.init();
        this.addChild(layer);
    }
});
