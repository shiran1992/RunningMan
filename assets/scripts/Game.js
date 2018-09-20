cc.Class({
    extends: cc.Component,

    properties: {
        hero: cc.Node,
        btnDown : cc.Node,
    },

    onLoad() {
        this.heroAnims = this.hero.getComponent(cc.Animation);
        this.heroAnims.play('run');
        this.btnDown.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.btnDown.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.btnDown.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
    },

    touchStart() {
        //获取当前动画的名称
        if(this.heroAnims.currentClip.name == 'roll') {
            return;
        }
        this.heroAnims.play('down');
    },

    touchEnd() {
        if(this.heroAnims.currentClip.name == 'roll') {
            return;
        }
        this.hero.y += 10;
        this.heroAnims.play('run');
    },

    //跳跃
    onJump() {
        //获取当前动画的名称
        if(this.heroAnims.currentClip.name == 'down') {
            return;
        }
        this.heroAnims.play('roll');
        let upAction = cc.moveBy(0.8, 0, 60);
        let downAction = cc.moveBy(0.8, 0, -60);
        let call_back = cc.callFunc(this.callBack, this);
        let seq = cc.sequence(upAction, downAction, call_back);
        this.hero.runAction(seq);
    },

    //落地之后变为奔跑状态
    callBack() {
        this.heroAnims.play('run');
    }
});
