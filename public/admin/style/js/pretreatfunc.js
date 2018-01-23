//处理pc-移动端映射
function mobileMap(){
    if(location.href.indexOf("mtype=pc") != -1){
        document.cookie = "mtype=pc";
    }
    if(document.cookie.indexOf('mtype=') != -1){
		var urlReg = /-(.*).html/i; 
		var vu = location.href.match(urlReg);
		try{
			if(parseInt(vu[1]) < 10000){
				return false;
			}
		}catch(e){
			return false;
		}
    }
    var ua = navigator.userAgent;
    var url = arguments[0] || "";
    var func = arguments[1];
    ua = ua ? ua.toLowerCase().replace(/-/g, "") : "";
    if(ua.match(/(Android)/i) || (ua.match(/(U;)/i) && ua.match(/(Adr)/i)) || ua.match(/(iPhone|iPod|ipad)/i) || (ua.match(/(U;)/i) && ua.match(/(iPh)/i))){
        if(!func && url){
            location.href = (url.indexOf("http://") == -1 ? "http://" + location.host + url : url);
        }else if(func){
            func(arguments);
        }
    }
}
