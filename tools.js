;(function(window){
	function add0(m){return m<10?'0'+m:m };
	var tools = {
		version:"1.0.1",
		author:"lijian",
	};
	/*
	 *@param timeStamp   该参数为时间戳
	 *
	 */
	tools.format = function(timeStamp){
		//timeStamp是整数，否则要parseInt转换
		var timeStamp = parseInt(timeStamp);
		var time = new Date(timeStamp);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		var mm = time.getMinutes();
		var s = time.getSeconds();
		return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
	};
	if(!window.tools){
		window.tools = tools ;
	}
})(window);

