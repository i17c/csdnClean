var switcher = chrome.storage.sync.get("switch", function (item) {
    if (item.switch == "off") {
        $("#_plugin_csdn_clean_img_").addClass("gray");
        $("#_plugin_csdn_clean_img_").attr('title','CSDN绿色版\n插件关闭中');
        chrome.browserAction.setIcon({path:"icon_gray.png"});
    }else{
        $("#_plugin_csdn_clean_img_").attr('title','CSDN绿色版\n插件开启中');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    $("#_plugin_csdn_clean_img_").click(function () {
        var t = $(this);
        var c = "gray";
        if (t.hasClass(c)) {
            t.removeClass(c);
            chrome.storage.sync.set({
                "switch": "on"
            });
            t.attr('title','CSDN绿色版\n插件开启中');
            chrome.browserAction.setIcon({path:"icon.png"});

        } else {
            chrome.storage.sync.set({
                "switch": "off"
            });
            t.addClass(c);
            t.attr('title','CSDN绿色版\n插件关闭中');
            chrome.browserAction.setIcon({path:"icon_gray.png"});

        }

        chrome.tabs.executeScript({code: "if(location.href.indexOf(\"blog.csdn.net\")>-1 || location.href.indexOf(\"bbs.csdn.net\")>-1){location.reload();}"});
    });
});
