/**
 * Created by maizhijian on 2017/8/16.
 */
//为了不与jq冲突发生错误 单独写js文件实现置顶效果
window.onload = function(){
    var topbtn = document.getElementById('goTop_btn');//获取btn按钮id,当点击这个按钮时会发生事件
    var timer = null;//定时器
    var pagelookheight =  document.documentElement.clientHeight; //获取屏蔽高度
    window.onscroll = function(){
        //alert("hello");
        var backtop = document.body.scrollTop;//获取当前屏幕高度，即滚动的高度
        if (backtop >= pagelookheight) {
            //topbtn.style.display = "block";
            topbtn.style.opacity = "1";
            //alert("block")
        }
        else
        {
            topbtn.style.display = "none";
            topbtn.style.opacity = "0";
            //alert("none")
        }
    }

    topbtn.onclick = function(){
        //alert("hello")//测试
        timer = setInterval(function(){
            var backtop = document.body.scrollTop; //设置界面位置
            var speedtop = backtop/5;//改变匀速运动
            //document.body.scrollTop -= 100; //递减100 匀速动画
            document.body.scrollTop = backtop-speedtop //不匀速运动，最后会减慢直到停止
            //当滑动到顶端的时候停止
            if (backtop==0) {
                clearInterval(timer);//但滑动到顶端时候停止函数执行
            }
        },30)//设置动画效果,30毫秒设置一次
    }//设置一个监听事件
}