var fnGetImageNameByUrl = function(sUrl) {
	if (!sUrl || sUrl.indexOf("/") === -1 || sUrl.indexOf(".png") === -1) {
		return undefined;
	}
	const fileName = sUrl.substring(sUrl.lastIndexOf("/") + 1);
	return fileName.substring(0, fileName.indexOf("."));
};

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
	return fnGetImageNameByUrl($("#imgThumb").attr("src"));
};

var fnExtractDomainText = function() {
	return $("#lblTitleLeft").text();
};

var fnExtractFlag = function() {
	return fnGetImageNameByUrl($("#imgFlag").attr("src"));
};

var fnExtractMode = function() {
	return $("#drpGameMode").val();
};

var fnExtractLanguage = function() {
	const path = document.URL.replace("https://online.seterra.com/", "");
	return path.substring(0, path.indexOf("/"));
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	var o = fnExtractResult();
	if (o) {
		o.sDomain = fnExtractDomain(),
		o.sDomainText = fnExtractDomainText(),
		o.sLanguage = fnExtractLanguage(),
		o.sFlag = fnExtractFlag(),
		o.sMode = fnExtractMode()
	};
	sendResponse(o);
	return true;
});
