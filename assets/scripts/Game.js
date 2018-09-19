cc.Class({
    extends: cc.Component,

    properties: {
        hero: cc.Node,
    },

    onLoad() {

    },

    start() {

    },

    update(dt) {

    },

    //切换动作
    onChangeAction(event, index) {
        let heroAnims = this.hero.getComponent(cc.Animation);
        if(index == 0){
            heroAnims.play('jump');
        } else if(index == 1){
            heroAnims.play('roll');
        }
    },
});
