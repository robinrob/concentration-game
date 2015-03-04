var mrrobinsmith = {
    buttonOuterColor: new cc.color(0, 255, 0, 0),
    buttonInnerColor: new cc.color(0, 0, 255, 0),
    buttonTextColor: new cc.color(0, 255, 0, 0)
}

var res = {
    button_outer_png: "res/buttons/button-outer.png",

    button_n_inner_png: "res/buttons/button_n-inner.png",
    button_s_inner_png: "res/buttons/button_s-inner.png",

    start_n_text_png: "res/buttons/start_n-text.png",
    start_s_text_png: "res/buttons/start_s-text.png",

    restart_n_text_png: "res/buttons/restart_n-text.png",
    restart_s_text_png: "res/buttons/restart_s-text.png"
};

mrrobinsmith.res = res

mrrobinsmith.resources = [];
for (var i in mrrobinsmith.res) {
    mrrobinsmith.resources.push(mrrobinsmith.res[i]);
}