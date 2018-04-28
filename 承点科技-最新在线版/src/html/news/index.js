require('fontsDir/iconfont.css')
require('cssDir/news/index.css')
require('cssDir/news/pagination.min.css')

const log = console.log.bind(console)
require("jsDir/jquery.pagination.js")

const newsList = require('./newsList.json')

let html1 = ''

$.each(newsList, function(i, value) {
    html1 += "<a href='/news/details?id=" + value.id + "'>"
    html1 += "<div class='images-text'>"
    html1 += "<img src='" + require('imgsDir/'+ value.pic) + "'>"
    html1 += "<p>" + value.title + "</p>"
    html1 += "<span>" + value.summary + "</span>"
    html1 += "</div></a>"
})
$('#result_1').html(html1)


const newsSecond = require('./newsSecond.json')
let html2 = ''

$.each(newsSecond, function(i, value) {
    html2 += "<a href='/news/details?id=" + value.id + "'>"
    html2 += "<div class='images-text'>"
    html2 += "<img src='" + require('imgsDir/'+ value.pic) + "'>"
    html2 += "<p>" + value.title + "</p>"
    html2 += "<span>" + value.summary + "</span>"
    html2 += "</div></a>"
})
$('#result_2').html(html2)

const newsThirdly = require('./newsThirdly.json')
let html3 = ''

$.each(newsThirdly, function(i, value) {
    html3 += "<a href='/news/details?id=" + value.id + "'>";
    html3 += "<div class='images-text'>";
    html3 += "<img src='" + require('imgsDir/'+ value.pic) + "'>"
    html3 += "<p>" + value.title + "</p>";
    html3 += "<span>" + value.summary + "</span>";
    html3 += "</div></a>"
});
$('#result_3').html(html3);

var width = document.body.clientWidth;
if(width <= 750){
    $(function(){
        //总数目
        var length_1 = $("#result_1 a").length;
        //从表单获取分页元素参数
        $("#Pagination_1").pagination(length_1, {
            callback: Callback_1,
            items_per_page: 6,
            num_display_entries: 3,
            num_edge_entries: 2,
            prev_text: '上一页',
            next_text: '下一页'
        });
        function Callback_1(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = 6;
            var max_elem = Math.min((page_index+1) * items_per_page, length_1);
            $("#show_1").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#show_1").append($("#result_1 a:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }
        //总数目
        var length_2 = $("#result_2 a").length;
        //从表单获取分页元素参数
        $("#Pagination_2").pagination(length_2, {
            callback: Callback_2,
            items_per_page: 6,
            num_display_entries: 3,
            num_edge_entries: 2,
            prev_text: '上一页',
            next_text: '下一页'
        });
        function Callback_2(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = 6;
            var max_elem = Math.min((page_index+1) * items_per_page, length_2);
            $("#show_2").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#show_2").append($("#result_2 a:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }

        //总数目
        var length_3 = $("#result_3 a").length;
        //从表单获取分页元素参数
        $("#Pagination_3").pagination(length_3, {
            callback: Callback_3,
            items_per_page: 6,
            num_display_entries: 3,
            num_edge_entries: 2,
            prev_text: '上一页',
            next_text: '下一页'
        });
        function Callback_3(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = 6;
            var max_elem = Math.min((page_index+1) * items_per_page, length_3);
            $("#show_3").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#show_3").append($("#result_3 a:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }

    });
}else{
    $(function(){
        //总数目
        var length_1 = $("#result_1 a").length;
        //从表单获取分页元素参数
        $("#Pagination_1").pagination(length_1, {
            callback: Callback_1,
            items_per_page: 10,
            num_display_entries: 3,
            num_edge_entries: 2,
            prev_text: '上一页',
            next_text: '下一页'
        });
        function Callback_1(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = 10;
            var max_elem = Math.min((page_index+1) * items_per_page, length_1);
            $("#show_1").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#show_1").append($("#result_1 a:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }
        //总数目
        var length_2 = $("#result_2 a").length;
        //从表单获取分页元素参数
        $("#Pagination_2").pagination(length_2, {
            callback: Callback_2,
            items_per_page: 10,
            num_display_entries: 3,
            num_edge_entries: 2,
            prev_text: '上一页',
            next_text: '下一页'
        });
        function Callback_2(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = 10;
            var max_elem = Math.min((page_index+1) * items_per_page, length_2);
            $("#show_2").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#show_2").append($("#result_2 a:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }

        //总数目
        var length_3 = $("#result_3 a").length;
        //从表单获取分页元素参数
        $("#Pagination_3").pagination(length_3, {
            callback: Callback_3,
            items_per_page: 10,
            num_display_entries: 3,
            num_edge_entries: 2,
            prev_text: '上一页',
            next_text: '下一页'
        });
        function Callback_3(page_index, jq){
            // 从表单获取每页的显示的列表项数目
            var items_per_page = 10;
            var max_elem = Math.min((page_index+1) * items_per_page, length_3);
            $("#show_3").html("");
            // 获取加载元素
            for(var i=page_index*items_per_page;i<max_elem;i++){
                $("#show_3").append($("#result_3 a:eq("+i+")").clone());
            }
            //阻止单击事件
            return false;
        }

    });
}


var url = location.hash;

if (url) {
    $(url)[0].checked = true
}

location.hash = ""
