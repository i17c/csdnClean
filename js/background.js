chrome.extension.onMessage.addListener(function(detail) {
    if(detail.act == 'notifyInit'){
        webkitNotifications.createNotification(
            'icon.png',  // icon url - can be relative
            'CSDN绿色版',  // notification title
            'powered by 独行, \nfor clean world ... no pain, no ad!'  // notification body text
        ).show()
    }
});


chrome.storage.sync.get("switch", function (item) {
    if (item.switch == "off") {
        chrome.browserAction.setIcon({path:"icon_gray.png"});
    }else{
        //处理插件要做的事情,获取内容并替换掉一些东西

    }
});

chrome.storage.local.get('hasNoted', function(result){
    result.hasNoted = result.hasNoted || 1;
   if(result.hasNoted < 3){
        chrome.extension.sendMessage({
            'act': 'notifyInit'
        });
        chrome.storage.local.set({'hasNoted': ++result.hasNoted});
   }

});


