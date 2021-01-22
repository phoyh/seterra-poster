var fnLoad = function() {
	chrome.storage.sync.get({name: "匿名"}, function(o) {
		if (o && o.name) {
			$("#name").val(o.name);
		}
	});
};

var fnSave = function() {
	chrome.storage.sync.set({name: $("#name").val()}, function() {
		$("#result").text("Saved");
		setTimeout(function() {
			$("#result").text("");
		}, 500);
	});
};

$(document).ready(function() {
	fnLoad();
	$("#save").click(fnSave);
});