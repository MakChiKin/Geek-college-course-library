/**
 * Created by maizhijian on 2017/8/1.
 */

$(document).ready(function () {
    searchArea();
    bodyEvent();
    inputSearchTag();
    ContentListHover();
})

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
        // console.log(tagText);
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
    //图片hover
    $('.lessonList ul li').hover(function () {
        $(this).find('.lessonPlay').css('opacity','1')
    },function () {
        $(this).find('.lessonPlay').css('opacity','0')
    })
    //列表高度、icon高度
    $('.lessonList ul li').hover(function () {
        $(this).find('.lessonInfo').css('height','175px')
            $(this).find('.lessonIconBox').css('bottom','-4px')
    },function () {
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

