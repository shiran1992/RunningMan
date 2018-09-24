cc.Class({
    extends: cc.Component,

    properties: {
        scrollView: cc.ScrollView,
        content: cc.Node,
        roleItem: cc.Prefab,
    },

    onLoad() {
        this.initItems();
    },

    initItems() {
        for (let i = 0; i < 10; i++) {
            let item = cc.instantiate(this.roleItem);
            this.content.addChild(item);
        }
    },

    onClickBack() {
        console.log('点击放回');
    },


});
