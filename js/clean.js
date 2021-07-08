(function(){
    chrome.storage.sync.get("switch", function (item) {
        if (item.switch == "on" || item.switch==undefined) {
            if(location.href.indexOf("blog.csdn.net")>-1 && location.href.indexOf("article/details")>-1){
                //处理插件要做的事情,获取内容并替换掉一些东西
                $(".blog_container_aside").remove();
                $(".recommend-right").remove();
                // $("#rightAside").remove();
                // $(".qr-code").remove();
                $("#toolBarBox").remove();
                $("#csdn-toolbar").remove();
                $("#MathJax_Message").remove();
                $("#app").remove();
                $(".login-mark").remove();
                $(".csdn-side-toolbar").remove();
                $(".operating").remove();
                $(".reward-box-new").remove();
                $(".comment-box").remove();
                $(".recommend-tit-mod").remove();
                $(".recommend-box").remove();
                $(".template-box").remove();
                $(".blog-footer-bottom").remove();
                $(".notification").remove();
                $(".mask-dark").remove();
                $("#BAIDU_DUP_fp_wrapper").remove();
                $("#google_esf").remove();
                $("#csdn-shop-window-top").remove();
                $("#csdn-shop-window").remove();
                $("#blogColumnPayAdvert").remove();
                $("iframe").remove();
                $(".main_father").removeClass("clearfix");
                $("#mainBox").removeClass("clearfix").css("width", "auto");
                $("#mainBox main").css("width", "auto").css("float","auto");
            }else if(location.href.indexOf("bbs.csdn.net/topics")>-1){
                //处理插件要做的事情,获取内容并替换掉一些东西
                $(".ccloud-tool-bar").remove();
                $(".right-box").remove();
                $(".home_wrap").css("padding-top","0");
                $(".detail-container").css("width", "auto");
                $(".detail-content-box").css("width", "auto").css("margin","0");
                $(".csdn-side-toolbar").remove();
                $(".comment-toolbar-fix").remove();
                $(".Comment").remove();
            }
        }
    });
})();