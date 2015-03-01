var gameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        gameLayer = new game();
        gameLayer.init();
        this.addChild(gameLayer);
    }
});

var game = cc.Layer.extend({
    init:function () {
        this._super();
        for(i=0;i<16;i++){
            var tile = ui.tile1()
            this.addChild(tile, 0);
            tile.setPosition(49+i%4*74,400-Math.floor(i/4)*74);
        }
    }
});