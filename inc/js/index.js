$("document").ready(function(){

})

$.fn.nextOrFirst = function(selector){
    var next = this.next(selector);
    return (next.length) ? next : this.siblings().first();
}

$.fn.prevOrLast = function(selector){
    var prev = this.prev(selector);
    return (prev.length) ? prev : this.siblings().last();
}

function escape(target) {
	return target.replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/@])/g,'\\$1');      
}

function export_string(s){
	var link = document.createElement('a');
	link.setAttribute('href', 'data:text/plain,' + JSON.stringify(s));
	link.setAttribute('download', 'export.txt');
	document.getElementsByTagName("body")[0].appendChild(link).click().remove();
}