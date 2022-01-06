const {ccclass, property} = cc._decorator;

@ccclass
export default class Canvas extends cc.Component {

    @property(cc.Node)
    test:cc.Node=null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        //绑定事件
        this.node.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{
            //触摸点的世界坐标
            var pos = new cc.Vec2(event.getLocationX(),event.getLocationY());
            //转换为节点(局部)空间坐标系
            pos = this.node.convertToNodeSpaceAR(pos);//将一个点转换到节点 (局部) 空间坐标系，这个坐标系以锚点为原点。
            //给要移动的物体赋值
            this.test.setPosition(pos);
        });
    }

    start () {

    }

    // update (dt) {}
}
