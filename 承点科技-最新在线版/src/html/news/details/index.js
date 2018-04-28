require('cssDir/news/index.css')
require('cssDir/news/details/index.css')
require('fontsDir/iconfont.css')

const log = console.log.bind(console)

const url = location.href
const id = url.split('=')[1]
const data = require('./new_' + id + '.json')

if(data[0].type === "0"){
    var tab = "-承点新闻"
}else if(data[0].type === "1"){
    var tab = "-行业资讯"
}else if(data[0].type === "2"){
    var tab = "-干货分享"
}

$("#title").html(data[0].title)
$("#newsDetails").html(data[0].content)
$("#A_up").html(data[0].A_up)
$("#A_down").html(data[0].A_down)
$("title").html(data[0].title + tab + '-承点新闻')

$("#newsDetails img").each(function() {
    const img_urls = [];
    img_urls.push($(this).attr("src"));
    $(this).attr("src",require('imgsDir/' + img_urls))
})
