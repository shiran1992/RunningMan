const Bg1MoveTime = 40;//后面背景移动时间
const Bg2MoveTime = 60;//树木、小船背景移动时间
const Bg3MoveTime = 20;//海浪移动的时间
const Bg4MoveTime = 40;//墙壁移动时间
const Bg5MoveTime = 20;//第二层海浪的时间
cc.Class({
    extends: cc.Component,

    properties: {
        bgs1: [cc.Node],//后面的背景
        bgs2: [cc.Node],//树木、小船
        bgs3: [cc.Node],//海浪
        bgs4: [cc.Node],//墙壁
        bgs5: [cc.Node],//墙壁
    },

    onLoad() {
        //背景
        this.bgs1.forEach((element, i) => {
            this.bgMove(element, Bg1MoveTime, i);
        });
        //树木
        this.bgs2.forEach((element, i) => {
            this.bgMove(element, Bg2MoveTime, i);
        });
        //海浪
        this.bgs3.forEach((element, i) => {
            this.bgMove(element, Bg3MoveTime, i);
        });
        //墙壁
        this.bgs4.forEach((element, i) => {
            this.bgMove(element, Bg4MoveTime, i);
        });
        //第二层海浪
        this.bgs5.forEach((element, i) => {
            this.bgMove(element, Bg5MoveTime, i);
        });
    },

    //背景bg的移动
    bgMove(node, time, jump) {
        let width = node.width;
        if(jump){
            this.onMove(node, time);
            return;
        }
        let moveAction = cc.moveTo(time / 2, -width, node.y);
        let callBack = cc.callFunc(() => {
            node.x = width - 10;
            this.onMove(node, time);
        });
        let seq = cc.sequence([moveAction, callBack]);
        node.runAction(seq);
    },

    //移动
    onMove(node, time) {
        if (!node){
            return;
        }
        let moveAction = cc.moveTo(time, -node.width, node.y);
        let callBack = cc.callFunc(() => {
            node.x = node.width - 10;
            this.onMove(node, time);
        });
        let seq = cc.sequence([moveAction, callBack]);
        node.runAction(seq);
    },
});
