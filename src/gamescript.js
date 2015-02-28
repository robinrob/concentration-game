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
            var resources = ["assets/tile_bg.png", "assets/tile_cover.png"]
            var tile = new CompositeSprite(resources);
            this.addChild(tile,0);
            tile.setPosition(49+i%4*74,400-Math.floor(i/4)*74);
        }
    }
});