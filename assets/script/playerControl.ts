import BulletControl from "./bulletControl";
const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerControl extends cc.Component {

    @property(cc.Prefab)
    bulletPre:cc.Prefab = null;
    isCollision:boolean = false;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        if(cc.director.isPaused()){
            cc.director.resume();
        }
    }  
    //生命周期：onLoad -> onEnable -> start -> update -> lateUpdate -> onDisable -> onDestroy
    start () {
        cc.director.getCollisionManager().enabled = true;
        //箭头函数和普通函数的this指向问题：
        //箭头函数的this：指向定义时所处上下文的对象,
        //普通函数的this：指向调用该函数的对象，
        //在这里如果用普通函数的话，this指向window
        //如果用箭头函数的话，this指向player节点
        //监听手指移动
         //飞机攻击
        //计时器，每0.5秒创造一个子弹
        this.schedule(()=>{
            //将子弹变成预制体
            //cc.instantiate()：创建预制节点
            let bullet = cc.instantiate(this.bulletPre);
            //设置父物体
            bullet.setParent(cc.find('Canvas/bulletContent'));
            //设置子弹位置            
            bullet.x = cc.find('Canvas/hero1').x;
            bullet.y = cc.find('Canvas/hero1').y + 60;
        },0.2)
    }
    die(index){
        //动态加载资源
            cc.loader.loadRes('image/imageAny',cc.SpriteAtlas,(err,res)=>{
                this.node.getComponent(cc.Sprite).spriteFrame = res.getSpriteFrame('hero1_die');
                setTimeout(()=>{
                    cc.find('Canvas/audioDie').getComponent(cc.AudioSource).play();
                },100);
                setTimeout(()=>{
                    cc.find('Canvas/bg').getComponent(cc.AudioSource).pause();
                    cc.find('Canvas/gameOver').active = true;
                    cc.director.pause();
                    //我方飞机销毁
                    if(this.node){
                        this.node.destroy();
                    } 
                },400)
            })
    }
    // update (dt) {}
}
