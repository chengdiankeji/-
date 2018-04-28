require('fontsDir/iconfont.css')
require('cssDir/news/index.css')
require('cssDir/serve/index.css')

import Skrollr from 'jsDir/skrollr.min.js'

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var width = document.body.clientWidth;

if (width <= 750){
    var html = "<h4>运营管理</h4>\n" +
        "    <span>Operate Administrate</span>\n" +
        "    <div id=\"yunying\" data-20=\"margin-left:800px;\" data-30=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-guihuashenpi\"></i>\n" +
        "        <div>\n" +
        "            <p>运营规划</p>\n" +
        "            <span>了解客户需求，找准商家定位，对提供产品或者服务的运营系统的计划、组织、控制和实施。</span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div data-170=\"left:-700px;\" data-180=\"left:45px;\">\n" +
        "        <div>\n" +
        "            <p>阶段目标分解</p>\n" +
        "            <span>三方无缝对接，成立四对一项目组，工作日报、月报、季度报告，及时沟通。</span>\n" +
        "        </div>\n" +
        "        <i class=\"iconfont icon-yunyingguanliicon\"></i>\n" +
        "    </div>\n" +
        "    <div data-320=\"margin-left:800px;\" data-330=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-tuiguang\"></i>\n" +
        "        <div>\n" +
        "            <p>店铺推广</p>\n" +
        "            <span>根据产品适应人群，关键词挖掘，灵活运用推广，全网高效精准推广。</span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div data-470=\"left:-700px;\" data-480=\"left:45px;\">\n" +
        "        <div>\n" +
        "        <p>引流指标分析</p>\n" +
        "        <span>根据流量入口，深度分析流量来源，研究直通车数据，以小时为单位分析流量。</span>\n" +
        "        </div>\n" +
        "        <i class=\"iconfont icon-Drainage_configuration\"></i>\n" +
        "    </div>\n" +
        "    <div class='zhuanhuan' data-520=\"margin-left:800px;\" data-530=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-zhuanhuashuai\"></i>\n" +
        "        <div>\n" +
        "        <p>转化率分析</p>\n" +
        "        <span>针对自然流量、付费推广、站内活动、站外推广等转化率深度分析具体情况以书面形式呈现。</span>\n" +
        "        </div>\n" +
        "    </div>";

    $('#server-text-img').html(html);
}else if (width === 1366){
    var html = "<h4>运营管理</h4>\n" +
        "    <span>Operate Administrate</span>\n" +
        "    <div id=\"yunying\" data-200=\"margin-left:800px;\" data-250=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-guihuashenpi\"></i>\n" +
        "        <div>\n" +
        "            <p>运营规划</p>\n" +
        "            <span>了解客户需求，找准商家定位，对提供产品或者服务的运营系统的计划、组织、控制和实施。</span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div data-450=\"left:-700px;\" data-500=\"left:55px;\">\n" +
        "        <div>\n" +
        "            <p>阶段目标分解</p>\n" +
        "            <span>三方无缝对接，成立四对一项目组，工作日报、月报、季度报告，及时沟通。</span>\n" +
        "        </div>\n" +
        "        <i class=\"iconfont icon-yunyingguanliicon\"></i>\n" +
        "    </div>\n" +
        "    <div data-700=\"margin-left:800px;\" data-750=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-tuiguang\"></i>\n" +
        "        <div>\n" +
        "            <p>店铺推广</p>\n" +
        "            <span>根据产品适应人群，关键词挖掘，灵活运用推广，全网高效精准推广。</span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div data-950=\"left:-700px;\" data-1000=\"left:55px;\">\n" +
        "        <div>\n" +
        "        <p>引流指标分析</p>\n" +
        "        <span>根据流量入口，深度分析流量来源，研究直通车数据，以小时为单位分析流量。</span>\n" +
        "        </div>\n" +
        "        <i class=\"iconfont icon-Drainage_configuration\"></i>\n" +
        "    </div>\n" +
        "    <div data-1200=\"margin-left:800px;\" data-1250=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-zhuanhuashuai\"></i>\n" +
        "        <div>\n" +
        "        <p>转化率分析</p>\n" +
        "        <span>针对自然流量转化率、付费推广转化率、站内活动转化率、站外推广转化率进行深度分析，并对具体情况进行说明，以书面形式呈现。</span>\n" +
        "        </div>\n" +
        "    </div>";

    $('#server-text-img').html(html);
    var s = Skrollr.init();

}else{
    var html = "<h4>运营管理</h4>\n" +
        "    <span>Operate Administrate</span>\n" +
        "    <div id=\"yunying\" data-500=\"margin-left:800px;\" data-550=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-guihuashenpi\"></i>\n" +
        "        <div>\n" +
        "            <p>运营规划</p>\n" +
        "            <span>了解客户需求，找准商家定位，对提供产品或者服务的运营系统的计划、组织、控制和实施。</span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div data-750=\"left:-700px;\" data-800=\"left:65px;\">\n" +
        "        <div>\n" +
        "            <p>阶段目标分解</p>\n" +
        "            <span>三方无缝对接，成立四对一项目组，工作日报、月报、季度报告，及时沟通。</span>\n" +
        "        </div>\n" +
        "        <i class=\"iconfont icon-yunyingguanliicon\"></i>\n" +
        "    </div>\n" +
        "    <div data-1000=\"margin-left:800px;\" data-1050=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-tuiguang\"></i>\n" +
        "        <div>\n" +
        "            <p>店铺推广</p>\n" +
        "            <span>根据产品适应人群，关键词挖掘，灵活运用推广，全网高效精准推广。</span>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div data-1250=\"left:-700px;\" data-1300=\"left:65px;\">\n" +
        "        <div>\n" +
        "        <p>引流指标分析</p>\n" +
        "        <span>根据流量入口，深度分析流量来源，研究直通车数据，以小时为单位分析流量。</span>\n" +
        "        </div>\n" +
        "        <i class=\"iconfont icon-Drainage_configuration\"></i>\n" +
        "    </div>\n" +
        "    <div data-1500=\"margin-left:800px;\" data-1550=\"margin-left:0;\">\n" +
        "        <i class=\"iconfont icon-zhuanhuashuai\"></i>\n" +
        "        <div>\n" +
        "        <p>转化率分析</p>\n" +
        "        <span>针对自然流量转化率、付费推广转化率、站内活动转化率、站外推广转化率进行深度分析，并对具体情况进行说明，以书面形式呈现。</span>\n" +
        "        </div>\n" +
        "    </div>";

    $('#server-text-img').html(html);
    var s = Skrollr.init();
}


$(function(){
    $(".banner").addClass("load")
})


$('.A-up').click(function(){$('html,body').animate({scrollTop: '0px'}, 800);});

