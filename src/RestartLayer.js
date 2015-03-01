var RestartLayer = cc.LayerColor.extend({
    // constructor
    ctor:function () {
        cc.log("MenuLayer.ctor ...")
        this._super();
        this.init();
    },

    init:function () {
        cc.log("MenuLayer.init ...")
        this._super(cc.color(0, 0, 0, 100));
        var winSize = cc.director.getWinSize();

        var centerPos = cc.p(winSize.width / 2, winSize.height / 2);

        var menuItemPlay = new cc.MenuItemSprite(
            ui.restartButton().normal,
            ui.restartButton().selected,
            this.onRestart, this);
        var menu = new cc.Menu(menuItemPlay);
        menu.setPosition(centerPos);
        this.addChild(menu);
    },

    onRestart:function (sender) {
        cc.log("GameOver.onRestart ...")
        cc.director.runScene(new GameScene());
    }
});