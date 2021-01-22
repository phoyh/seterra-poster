var fnGetName = function(fnThen) {
	chrome.storage.sync.get({name: "匿名"}, function(o) {
		fnThen(o && o.name);
	});
};

var fnSendResult = (o) => {
	$("#process").text("Sending...");
	const req = new XMLHttpRequest();
	//req.open("POST", "http://localhost:7000/notifyOfSeterra");
	req.open("POST", "http://192.168.178.44:1232/notifyOfSeterra");
	req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	req.send(JSON.stringify(o));
	req.onreadystatechange = function() {
		if (this.readyState === XMLHttpRequest.DONE) {
			$("#result").text(this.status === 200 ? "success" : "error (" + this.status + ")");
		}
	}
};

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.sendMessage(tabs[0].id, "extract", function(o) {
		if (!o) {
			$("#result").text("failed!");
			return;
		}
		fnGetName(function (name) {
			o.sName = name;
			fnSendResult(o);
		});
	});
});
