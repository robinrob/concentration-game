var gameArray = [0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];

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

        var gradient = cc.LayerGradient.create(cc.color(0,0,0,255), cc.color(0x46,0x82,0xB4,255));
        this.addChild(gradient);

        for(i=0;i<16;i++){
            var tile = new Tile(gameArray[i])
            this.addChild(tile, 0);
            tile.setPosition(49+i%4*74,400-Math.floor(i/4)*74);
        }
    }
});