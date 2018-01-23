function tracking(e){
	e = e ? e : window.event;
	var s = e.srcElement ? e.srcElement : e.target;
	var a = s.tagName;

    if(a == 'shape'){
        return true;
    }
    //	var u = s.href;
    var u = s.href ? s.href : s.src;
	var t = s.innerText ? s.innerText : s.textContent;
    if (a == "B"||a == "STRONG"){
        a = "A";
		u = s.parentNode.href;
    }
	if (a == "IMG"){
		t = u;
		u = s.parentNode.href;
	}
	if(a == "A" || a == "IMG"){
		try{
			new Image().src = "http://tracenews.5054399.com/trace.js?addd="+a+"&uddd="+escape(u)+"&tddd="+t;
		}catch(ex){}
	}
	return true;
}
