/**
 * Created by maizhijian on 2017/8/1.
 */

$(document).ready(function () {
    searchArea();
    bodyEvent();
    inputSearchTag();
    ContentListHover();
    createPagingBtn();
    changePage();
    homePage();
    lastPage();
    backupPage();
    nextPage();
    papeChangeNumBtn();
    loadListInfo_Block(1);
    //loadListInfo_List(1);
    tileShow();
    listShow();
})
var blockOrList=true;//true:方块列表显示状态，flase：条形列表显示状态
function searchArea() {
    $('#showSearchArea').click(function (event) {
        $('.searchArea').show(500);
        event.stopPropagation();
    })
    $('.searchArea').click(function (event) {
        $('.searchArea').show(500);
        event.stopPropagation();
    })
    $('.gobackSearch').click(function (event) {
        $('.searchArea').hide(300);
        event.stopPropagation();
    })
}
function inputSearchTag() {
    $('.searchHotKey').click(function (event) {
        var tagText = $(this).text();
        $('.searchInput').attr('value',tagText);
        event.stopPropagation();
    })
}
function bodyEvent() {
    $('body').click(function () {
        $('.searchArea').hide(300);
    })
}
//列表hover
function ContentListHover() {
    if (blockOrList){
        //列表高度\icon高度\图片hover
        $('.lessonList ul li').hover(function () {
            $(this).find('.lessonPlay').css('opacity','1'),
                $(this).find('.lessonInfo').css('height','175px')
            $(this).find('.lessonIconBox').css('bottom','-4px')
        },function () {
            $(this).find('.lessonPlay').css('opacity','0'),
                $(this).find('.lessonInfo').css('height','88px')
            $(this).find('.lessonIconBox').css('bottom','6px')
        })
        //内容显示效果
        $('.lessonList ul li').hover(function () {
            $(this).find('.lessonInfo p').slideToggle(500),
                $(this).find('.LIDD_level').slideToggle(500),
                $(this).find('.studentNum').slideToggle(500)
        })
    }
    else{
        $('.lessonList ul li').hover(function () {
            $(this).find('.lessonPlay_B').css('opacity','1')
        },function () {
            $(this).find('.lessonPlay_B').css('opacity','0')
        })
    }
}

//加载方块模板
function loadListInfo_Block(n) {
    //删除原有的内容
    $('.lessonListUL').remove();
    //创建新的UL
    var lessonListUL =  $('<ul>').addClass('lessonListUL').appendTo($('.lessonList'));
    $.each(lessonsData.data,function (index,value) {//动态创建新闻列表对象
        // 页码开始范围
        var startRange = (24*(parseInt(n)))-23;
        // 页码结束范围
        var endRange =24*(parseInt(n));
        if (index>=startRange && index<=endRange){
            var liBox = $('<li>').addClass('lessonListLi').appendTo(lessonListUL);
            var boxImg = $('<div>').addClass('lessonImgBox').appendTo(liBox);
            var boxImgA = $('<a>').addClass('lessonImgBoxATag').appendTo(boxImg);
            boxImgA.attr({
                'href':$(value).attr('url'),
                'target': $(value).attr('_blank')
            });
            var boxImg02 = $('<img>').addClass('lessonImgBoxImgTag').appendTo(boxImgA);
            boxImg02.attr('src',$(value).attr('img'))
            var boxImgPlay = $('<div>').addClass('lessonPlay').appendTo(boxImgA);
            $('<div>').addClass('lessonPlayIcon').appendTo(boxImgPlay);

            var boxInfo = $('<div>').addClass('lessonInfo').appendTo(liBox);
            var boxInfoTitle = $('<h2>').addClass('lessonInfoH2').appendTo(boxInfo);
            var boxInfoTitleATag = $('<a>').addClass('lessonInfoTitle').appendTo(boxInfoTitle);
            boxInfoTitleATag.attr({
                'href':$(value).attr('url'),
                'target': $(value).attr('_blank')
            });
            boxInfoTitleATag.text($(value).attr('title'));
            var boxInfoDescribe = $('<p>').addClass('lessonInfoDescribe').appendTo(boxInfo);
            boxInfoDescribe.text($(value).attr('content'))

            var boxInfotimeAndIcon = $('<div>').addClass('timeAndIcon').appendTo(boxInfo);
            var lessonInfoDetailed01 = $('<div>').addClass('lessonInfoDetailed').appendTo(boxInfotimeAndIcon);
            var lessonInfoDetailedDL = $('<dl>').addClass('lessonInfoDetailedDL').appendTo(lessonInfoDetailed01);
            var LIDD = $('<dd>').addClass('LIDD').appendTo(lessonInfoDetailedDL);
            var LIDDIcon = $('<dd>').addClass('LIDDIcon').appendTo(LIDD);
            var LIDDTime = $('<em>').appendTo(LIDD);
            LIDDTime.text($(value).attr('lessonPeriod'));
            var LIDD_level = $('<dd>').addClass('LIDD_level').appendTo(lessonInfoDetailedDL);
            var LIDD_levelIcon = $('<i>').addClass('LIDD_levelIcon').appendTo(LIDD_level);
            var LIDDlevelText = $('<em>').appendTo(LIDD_level);
            LIDDlevelText.text($(value).attr('Level'));
            var studentNum = $('<em>').addClass('studentNum').appendTo(lessonInfoDetailed01);
            studentNum.text($(value).attr('Visitors'))

            var lessonInfoDetailed02 = $('<div>').addClass('lessonInfoDetailed').appendTo(boxInfotimeAndIcon);
            var lessonIconBox = $('<div>').addClass('lessonIconBox').appendTo(lessonInfoDetailed02);
            var lessonIconBoxATag = $('<a>').addClass('lessonIconBoxATag').appendTo(lessonIconBox);
            lessonIconBoxATag.attr({
                'href':$(value).attr('url'),
                'target': $(value).attr('_blank')
            });
            var lessonIconBoxImg = $('<img>').addClass('lessonIconBoxImg').appendTo(lessonIconBoxATag);
            lessonIconBoxImg.attr('src',$(value).attr('icon'))
        }
    })
}
//加载列表模板
function loadListInfo_List(n) {
    //删除原有的内容
    $('.lessonListUL').remove();
    var lessonListUL =  $('<ul>').addClass('lessonListUL').appendTo($('.lessonList'));
    $.each(lessonsData.data,function (index,value) {//动态创建新闻列表对象
        //页码开始范围
        var startRange = (24*(parseInt(n)))-23;
        // 页码结束范围
        var endRange =24*(parseInt(n));
        if (index>=startRange && index<=endRange){
            var liBox = $('<li>').addClass('lessonListLi_B').appendTo(lessonListUL);
            var boxImg = $('<div>').addClass('lessonImgBox_B').appendTo(liBox);
            var boxImgA = $('<a>').addClass('lessonImgBoxATag_B').appendTo(boxImg);
            boxImgA.attr({
                'href':$(value).attr('url'),
                'target': $(value).attr('_blank')
            });
            var boxImg02 = $('<img>').addClass('lessonImgBoxImgTag_B').appendTo(boxImgA);
            boxImg02.attr('src',$(value).attr('img'))
            var boxImgPlay = $('<div>').addClass('lessonPlay_B').appendTo(boxImgA);
            $('<div>').addClass('lessonPlayIcon').appendTo(boxImgPlay);

            var boxInfo = $('<div>').addClass('lessonInfo_B').appendTo(liBox);
            var boxInfoTitle = $('<h2>').addClass('lessonInfoH2_B').appendTo(boxInfo);
            var boxInfoTitleATag = $('<a>').addClass('lessonInfoTitle_B').appendTo(boxInfoTitle);
            boxInfoTitleATag.attr({
                'href':$(value).attr('url'),
                'target': $(value).attr('_blank')
            });
            boxInfoTitleATag.text($(value).attr('title'));
            var boxInfoDescribe = $('<p>').addClass('lessonInfoDescribe_B').appendTo(boxInfo);
            boxInfoDescribe.text($(value).attr('content'))

            var boxInfotimeAndIcon = $('<div>').addClass('timeAndIcon').appendTo(boxInfo);
            var lessonInfoDetailed01 = $('<div>').addClass('lessonInfoDetailed').appendTo(boxInfotimeAndIcon);
            var lessonInfoDetailedDL = $('<dl>').addClass('lessonInfoDetailedDL_B').appendTo(lessonInfoDetailed01);
            var LIDD = $('<dd>').addClass('LIDD').appendTo(lessonInfoDetailedDL);
            var LIDDIcon = $('<dd>').addClass('LIDDIcon').appendTo(LIDD);
            var LIDDTime = $('<em>').appendTo(LIDD);
            LIDDTime.text($(value).attr('lessonPeriod'));
            var LIDD_level = $('<dd>').addClass('LIDD_level_B').appendTo(lessonInfoDetailedDL);
            var LIDD_levelIcon = $('<i>').addClass('LIDD_levelIcon').appendTo(LIDD_level);
            var LIDDlevelText = $('<em>').appendTo(LIDD_level);
            LIDDlevelText.text($(value).attr('Level'));
            var studentNum = $('<em>').addClass('studentNum_B').appendTo(lessonInfoDetailed01);
            studentNum.text($(value).attr('Visitors'))

            var lessonInfoDetailed02 = $('<div>').addClass('lessonInfoDetailed').appendTo(boxInfotimeAndIcon);
            var lessonIconBox = $('<div>').addClass('lessonIconBox').appendTo(lessonInfoDetailed02);
            var lessonIconBoxATag = $('<a>').addClass('lessonIconBoxATag').appendTo(lessonIconBox);
            lessonIconBoxATag.attr({
                'href':$(value).attr('url'),
                'target': $(value).attr('_blank')
            });
            var lessonIconBoxImg = $('<img>').addClass('lessonIconBoxImg').appendTo(lessonIconBoxATag);
            lessonIconBoxImg.attr('src',$(value).attr('icon'))
        }
    })
}


//方块平铺显示
function tileShow() {
    $('#SR_Block').click(function () {
        var current = $('.pageNumInput').val();
        blockOrList=true;
        loadListInfo_Block(current);
        $('footer').css('top','0');
        $('.lessonList').css('height','1904px');

    })
}
//条形列表显示
function listShow() {
    $('#SR_List').click(function () {
        var current = $('.pageNumInput').val();
        blockOrList=false;
        loadListInfo_List(current);
        $('footer').css('top','850px');
        $('.lessonList').css('height','2750px');
    })
}

//创建分页按钮
function createPagingBtn() {
    //获取数据对象的总数
    var dateTotalNum = $(lessonsData.data).length;
    //获取页数，24是一页显示24个对象
    //console.log(dateTotalNum)
    var pageNum = Math.round(dateTotalNum/24);
    //console.log(pageNum)
    //给输入框页数设置最大值
    $('.pageNumInput').attr('max',parseInt(pageNum));
    //pageNum =18
    //由于第一个已经创建了 所以只需要创建第二个
    if (pageNum>=2){
        for (var i = 1; i <= pageNum; i++) {

            if (i >= 2 && i<8) {
                $('.pageDown').before($('<li>').addClass('pageNum').appendTo(".pages").text(i).addClass('pgbtnHover'))
            }
            if (i>=8){
                if ($('.pageAbout').length==0){
                    $('.pageDown').before($('<li>').addClass('pageAbout').appendTo(".pages").text('...'))
                    $('.pageAbout').css('display','block')
                }
            }
        }
    }
    if(pageNum ==1){
        $('.lastPage').addClass('pgLock').removeClass('pgbtnHover');
        $('.pageDown').addClass('pgLock').removeClass('pgbtnHover');
    }
    $('#pageTotal').text('共'+pageNum+'页')
}
//按钮切换核心模块
function changgePageNode(countPageNum,currentPageNum) {
    //给输入框页数赋值
    $('.pageNumInput').val((parseInt(currentPageNum)));
    //如果页数不是1，去掉“首页”，和上一页的锁定状态
    if(currentPageNum>1){
        $('.pgHome').removeClass('pgLock').addClass('pgbtnHover');
        $('.pageUp').removeClass('pgLock').addClass('pgbtnHover');
    }
    //如果页数等于1，“首页”和“上一页”添加锁定状态
    if(currentPageNum==1){
        $('.pgHome').addClass('pgLock').removeClass('pgbtnHover');
        $('.pageUp').addClass('pgLock').removeClass('pgbtnHover');
    }
    //设置点击按钮样式
    if (currentPageNum==countPageNum){
        $('.lastPage').addClass('pgLock').removeClass('pgbtnHover');
        $('.pageDown').addClass('pgLock').removeClass('pgbtnHover');
    }else {
        $('.lastPage').removeClass('pgLock').addClass('pgbtnHover');
        $('.pageDown').removeClass('pgLock').addClass('pgbtnHover');
    }
    if (countPageNum>7){
        //如果点击的页码是1-3,进行初始化
        if(currentPageNum<=3){
            //去除页数字符串
            $('.pageNum').text('')
            var initialize = [1,2,3,4,5,6,7];
            //将页码赋予页数按钮
            for (var i = 0; i <= 6; i++) {
                $('.pageNum').eq(i).text(initialize[i]);
                if (i==(parseInt(currentPageNum)-1)){
                    $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover');
                }
                else {
                    $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover');
                }
            }
            if(countPageNum>7){
                $('.pageAbout').css('display','block');
            }
        }
        // 如果总页数大于7且点击的按钮大于4发生位移
        if (currentPageNum>3){
            //获取点击按钮的页数
            //var clickPageNum = $(this).text();
            //console.log('clickPageNum:'+clickPageNum);
            //计算页数是否最后三页
            var inLastThreePage = countPageNum-2;
            //console.log('inLastThreePage:'+inLastThreePage);
            //如果不是
            if (currentPageNum<inLastThreePage){
                //第一页和最后一页
                var firstPapeNum = parseInt(currentPageNum)-3;
                var lastPageNum =parseInt(currentPageNum)+3;
                //去除页数字符串
                $('.pageNum').text('')
                //创建新的页码数组
                var firstToLast = new Array();
                for (var i = firstPapeNum; i <= lastPageNum; i++) {
                    firstToLast.push(i);
                }
                //将页码赋予页数按钮
                for (var i = 0; i <= 6; i++) {
                    $('.pageNum').eq(i).text(firstToLast[i]);
                    if (i==3){
                        $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
                    }
                    else {
                        $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
                    }
                }
                //如果省略号不存在添加省略号
                $('.pageAbout').css('display','block');
            }
        }
        //如果点击页码是最后三页的其中一页,
        if (currentPageNum>(parseInt(countPageNum)-3)){
            //去除页数字符串
            $('.pageNum').text('');
            // 去除省略号
            $('.pageAbout').css('display','none');
            //第一页和最后一页
            var firstP = parseInt(countPageNum)-6;
            var lastP = parseInt(countPageNum);
            //创建新的页码数组
            var firstToLastP = new Array();
            for (var i = firstP; i <= lastP; i++) {
                firstToLastP.push(i);
            }
            //将页码赋予页数按钮
            for (var i = 0; i <= 6; i++) {
                $('.pageNum').eq(i).text(firstToLastP[i]);
                if (firstToLastP[i]==(parseInt(currentPageNum))){
                    $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
                }
                else {
                    $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
                }
            }
        }
    }
    if (blockOrList){
        loadListInfo_Block(currentPageNum);
    }else {
        loadListInfo_List(currentPageNum);
    }


}
// 上一页下一页核心功能
function upDownPageNode(currentPageNum) {
    //去除所有激活状态
    $('.pageNum').removeClass('pageActivate').addClass('pgbtnHover');
    //获取数据对象的总数
    var dateTotalNum = $(lessonsData.data).length;
    //获取页数，24是一页显示24个对象
    var pageCount = Math.round(dateTotalNum/24);
    changgePageNode(pageCount,currentPageNum)
}
//页数按钮功能
function changePage() {
    $('.pageNum').click(function () {
        //去除所有激活状态
        $('.pageNum').removeClass('pageActivate').addClass('pgbtnHover');
        //添加激活状态到点击按钮this指向点击按钮
        $(this).addClass('pageActivate').removeClass('pgbtnHover');
        //获取this按钮的数值
        var pageNumText = $(this).text();
        //获取数据对象的总数
        var dateTotalNum = $(lessonsData.data).length;
        //获取页数，24是一页显示24个对象
        var pageCount = Math.round(dateTotalNum/24);
        changgePageNode(pageCount,pageNumText)
        // 给输入框页数赋值
        // $('.pageNumInput').val((parseInt(pageNumText)));
        // //如果页数不是1，去掉“首页”，和上一页的锁定状态
        // if(pageNumText>1){
        //     $('.pgHome').removeClass('pgLock').addClass('pgbtnHover');
        //     $('.pageUp').removeClass('pgLock').addClass('pgbtnHover');
        // }
        // //如果页数等于1，“首页”和“上一页”添加锁定状态
        // if(pageNumText==1){
        //     $('.pgHome').addClass('pgLock').removeClass('pgbtnHover');
        //     $('.pageUp').addClass('pgLock').removeClass('pgbtnHover');
        // }
        //设置点击按钮样式
        // if (pageNumText==pageCount){
        //     $('.lastPage').addClass('pgLock').removeClass('pgbtnHover');
        //     $('.pageDown').addClass('pgLock').removeClass('pgbtnHover');
        // }else {
        //     $('.lastPage').removeClass('pgLock').addClass('pgbtnHover');
        //     $('.pageDown').removeClass('pgLock').addClass('pgbtnHover');
        // }
        // if (pageCount>7){
        //     //如果点击的页码是1-3,进行初始化
        //     if(pageNumText<=3){
        //         //去除页数字符串
        //         $('.pageNum').text('')
        //         var initialize = [1,2,3,4,5,6,7];
        //         //将页码赋予页数按钮
        //         for (var i = 0; i <= 6; i++) {
        //             $('.pageNum').eq(i).text(initialize[i]);
        //             if (i==(parseInt(pageNumText)-1)){
        //                 $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover');
        //             }
        //             else {
        //                 $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover');
        //             }
        //         }
        //         if(pageCount>7){
        //             $('.pageAbout').css('display','block');
        //         }
        //     }
        //     // 如果总页数大于7且点击的按钮大于4发生位移
        //     if (pageNumText>3){
        //         //获取点击按钮的页数
        //         var clickPageNum = $(this).text();
        //         //console.log('clickPageNum:'+clickPageNum);
        //         //计算页数是否最后三页
        //         var inLastThreePage = pageCount-2;
        //         //console.log('inLastThreePage:'+inLastThreePage);
        //         //如果不是
        //         if (clickPageNum<inLastThreePage){
        //             //第一页和最后一页
        //             var firstPapeNum = parseInt(clickPageNum)-3;
        //             var lastPageNum =parseInt(clickPageNum)+3;
        //             //去除页数字符串
        //             $('.pageNum').text('')
        //             //创建新的页码数组
        //             var firstToLast = new Array();
        //             for (var i = firstPapeNum; i <= lastPageNum; i++) {
        //                 firstToLast.push(i);
        //             }
        //             //将页码赋予页数按钮
        //             for (var i = 0; i <= 6; i++) {
        //                 $('.pageNum').eq(i).text(firstToLast[i]);
        //                 if (i==3){
        //                     $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
        //                 }
        //                 else {
        //                     $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
        //                 }
        //             }
        //             //如果省略号不存在添加省略号
        //             $('.pageAbout').css('display','block');
        //         }
        //     }
        //     //如果点击页码是最后三页的其中一页,
        //     if (pageNumText>(parseInt(pageCount)-3)){
        //         //去除页数字符串
        //         $('.pageNum').text('');
        //         // 去除省略号
        //         $('.pageAbout').css('display','none');
        //         //第一页和最后一页
        //         var firstP = parseInt(pageCount)-6;
        //         var lastP = parseInt(pageCount);
        //         //创建新的页码数组
        //         var firstToLastP = new Array();
        //         for (var i = firstP; i <= lastP; i++) {
        //             firstToLastP.push(i);
        //         }
        //         //将页码赋予页数按钮
        //         for (var i = 0; i <= 6; i++) {
        //             $('.pageNum').eq(i).text(firstToLastP[i]);
        //             if (firstToLastP[i]==(parseInt(pageNumText))){
        //                 $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
        //             }
        //             else {
        //                 $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
        //             }
        //         }
        //     }
        // }
    })
}

//首页按钮
function homePage() {
    $('.pgHome').click(function () {
        if (($('.pgHome').css('color'))=='rgb(53, 181, 88)'){
            //获取数据对象的总数
            var dateTotalNum = $(lessonsData.data).length;
            //获取页数，24是一页显示24个对象
            var pageNum = Math.round(dateTotalNum/24);
            //给输入框页数赋值
            $('.pageNumInput').val('1');
            //去除页数字符串
            $('.pageNum').text('');
            //创建新的页码数组
            var firstToLast = new Array();
            for (var i = 1; i <= pageNum; i++) {
                firstToLast.push(i);
            }
            //将页码赋予页数按钮
            for (var i = 0; i < pageNum; i++) {
                $('.pageNum').eq(i).text(firstToLast[i]);
                if (i==0){
                    $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
                }
                else {
                    $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
                }
            }
            if (pageNum<7){
                $('.pageAbout').css('display','none')
            }
            else{
                $('.pageAbout').css('display','block')
            }
            $('.lastPage').removeClass('pgLock').addClass('pgbtnHover');
            $('.pageDown').removeClass('pgLock').addClass('pgbtnHover');
            $('.pgHome').addClass('pgLock').removeClass('pgbtnHover');
            $('.pageUp').addClass('pgLock').removeClass('pgbtnHover');
        }
        loadListInfo_Block(1);
    })
}
//末页按钮
function lastPage() {
    $('.lastPage').click(function () {
        if (($('.lastPage').css('color'))=='rgb(53, 181, 88)'){
            //获取数据对象的总数
            var dateTotalNum = $(lessonsData.data).length;
            //获取页数，24是一页显示24个对象
            var pageNum = Math.round(dateTotalNum/24);
            //给输入框页数赋值
            $('.pageNumInput').val((parseInt(pageNum)));
            //去除页数字符串
            $('.pageNum').text('');
            if (pageNum<=7){
                var firstToLast = new Array();
                for (var i = 1; i <= pageNum; i++) {
                    firstToLast.push(i);
                }
                //将页码赋予页数按钮
                for (var i = 0; i <= ((firstToLast.length)-1); i++) {
                    $('.pageNum').eq(i).text(firstToLast[i]);
                    if (i==((firstToLast.length)-1)){
                        $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
                    }
                    else {
                        $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
                    }
                }
            }
            else{
                var firstToLast = new Array();
                for (var i = ((parseInt(pageNum))-6); i <= pageNum; i++) {
                    firstToLast.push(i);
                }
                //将页码赋予页数按钮
                for (var i = 0; i <= 6; i++) {
                    $('.pageNum').eq(i).text(firstToLast[i]);
                    if (i==6){
                        $('.pageNum').eq(i).addClass('pageActivate').removeClass('pgbtnHover')
                    }
                    else {
                        $('.pageNum').eq(i).removeClass('pageActivate').addClass('pgbtnHover')
                    }
                }
            }
            $('.lastPage').addClass('pgLock').removeClass('pgbtnHover');
            $('.pageDown').addClass('pgLock').removeClass('pgbtnHover');
            $('.pgHome').removeClass('pgLock').addClass('pgbtnHover');
            $('.pageUp').removeClass('pgLock').addClass('pgbtnHover');
            $('.pageAbout').css('display','none');
        }
        loadListInfo_Block(pageNum);
    })
}
//上一页按钮
function backupPage() {
    $('.pageUp').click(function () {
        if (($('.pageUp').css('color'))=='rgb(53, 181, 88)'){
            //获取this按钮的数值
            var oldpageNumText = $('.pageActivate').text();
            var pageNumText = ((parseInt(oldpageNumText))-1);
            //console.log(pageNumText)
            if (pageNumText>0){
                upDownPageNode(pageNumText);
            }
        }
    })
}
//下一页按钮
function nextPage() {
    $('.pageDown').click(function () {
        if (($('.pageDown').css('color'))=='rgb(53, 181, 88)'){
            //获取this按钮的数值
            var oldpageNumText = $('.pageActivate').text();
            var pageNumText = ((parseInt(oldpageNumText))+1);
            //console.log(pageNumText)
            //获取数据对象的总数
            var dateTotalNum = $(lessonsData.data).length;
            //获取页数，24是一页显示24个对象
            var pageCount = Math.round(dateTotalNum/24);
            if (pageNumText<=pageCount) {
                upDownPageNode(pageNumText);
            }
        }
    })
}
//分页器确定按钮
function papeChangeNumBtn() {
    $('#pageConfirm').click(function () {
        var pageNumInputText = $('.pageNumInput').val();
        console.log(pageNumInputText);
        //获取数据对象的总数
        var dateTotalNum = $(lessonsData.data).length;
        //获取页数，24是一页显示24个对象
        var pageCount = Math.round(dateTotalNum/24);
        if (pageNumInputText<=pageCount) {
            upDownPageNode(pageNumInputText);
        }
    })
}