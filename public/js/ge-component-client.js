var host="https://unifiedsearch.geapps.io/";
var currentscroll = 0;
var customHeaderHeight = 0;

var GESearchComponent = document.getElementById("ge-search-component-init");	
var componentPlaceholder = document.createElement('div');
componentPlaceholder.setAttribute("id", "ge-search-component");

document.body.insertBefore(componentPlaceholder,document.body.firstChild);

function ShowComponentOverlay(){     
    var searchComponent = document.getElementById('ge-search-component');
	var elems = document.querySelectorAll("main");	
	if (searchComponent.classList.contains("active")) {
    searchComponent.classList.remove("active");
	document.body.classList.remove("enable-scrolling");
    elems[0].classList.remove("hide-element");	
	for(var i = 0; i < elems.length; i++) {
	elems[i].removeAttribute('style');
	}       
    }
	else{
		searchComponent.classList.add("active");
		if (searchComponent.children[0].style.height){
        var searchenable = document.getElementsByClassName('enable-scrolling');
        if (searchenable.length <= 0) {
            currentscroll = window.pageYOffset;
            window.scrollTo(0,0);
        }
        document.body.classList.add("enable-scrolling");
        elems[0].classList.add("hide-element");
        elems[0].style.height= searchComponent.children[0].style.height;
    }
	}
}


window.addEventListener('load', (click) => {

	console.log("script loaded")
});


window.addEventListener("load", function(){

	var customHeader = document.getElementsByClassName('block--covid19banner');
	if (customHeader.length > 0) {
		customHeaderHeight = customHeader[0].offsetHeight;
	}
	
	var componentXinit = document.createElement('script');
	componentXinit.setAttribute("src", host + "embedunifiedsearch.js");
	componentXinit.setAttribute("type", "text/javascript");
	componentXinit.setAttribute("async", "false");
	document.body.appendChild(componentXinit);
	
}, false);