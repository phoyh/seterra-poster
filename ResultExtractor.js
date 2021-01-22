var fnExtractResult = function() {
	var res = $("#lblFinalScore2").text();
	if (!res || res.length < 4 || res.indexOf(" ") === -1 || res.indexOf("%") === -1 || res.indexOf(":") === -1) {
		return null;
	}
	const time = res.substring(1 + res.lastIndexOf(" ")).split(":");
	return {
		fSuccessRate: .01 * res.substring(0, res.indexOf("%")),
		iTimeInSecs: parseInt(time[0]) * 60 + parseInt(time[1])
	};
};

var fnExtractDomain = function() {
	return $("#lblTitleLeft").text();
};

var fnExtractFlag = function() {
	return "https://online.seterra.com" + $("#imgFlag").attr("src");
};

var fnExtractMode = function() {
	return $("#drpGameMode").val();
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	var o = fnExtractResult();
	if (o) {
		o.sDomain = fnExtractDomain(),
		o.sFlag = fnExtractFlag(),
		o.sMode = fnExtractMode()
	};
	sendResponse(o);
	return true;
});
