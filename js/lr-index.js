class Index{
    constructor(){
        this.login = document.querySelector(".dv");
        this.welcome = document.querySelector(".dv1");
        this.user = this.welcome.querySelector(".usr");
        this.exit = this.welcome.querySelector(".exit");
        
        this.getMsg();
        this.addEvent()
    }
    addEvent(){
        var that = this;
        this.exit.onclick = function(){
            that.msg[that.i].onoff = "0";
            setCookie("userMsg",JSON.stringify(that.msg));
            location.reload();
        }
    }
    getMsg(){
        this.msg = getCookie("userMsg") ? JSON.parse(getCookie("userMsg")) : [];
        
        this.i = null; 
        var type = this.msg.some((val,idx)=>{
            this.i = idx;
            return val.onoff === 1;
        })
        
        if(type){
            this.login.style.display = "none";
            this.welcome.style.display = "block";
            this.user.innerHTML = this.msg[this.i].user;
        }
    }
}

new Index;


var mySwiper = new Swiper('.swiper-container', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
})
for (var i = 0; i < mySwiper.pagination.bullets.length; i++) {
    mySwiper.pagination.bullets[i].onclick = function () {
        this().show()
    }
}
//鼠标滑过pagination控制swiper切换


// 楼层
$(".lt li").click(function () {
    // console.log($(this).index());   //jq的方法，返回值就是索引
    var i = $(this).index();
    // poistion只能获取定位的值，而offset还能获取margin的值
    //  $("div").eq(i)：找到当前对应的div
    var t = $(".dv").eq(i).offset().top; //滚动的距离
    $("html").animate({
        scrollTop: t
    })
})