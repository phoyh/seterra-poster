Google Chrome extension that posts results of a [Seterra quiz](https://online.seterra.com) to pre-defined endpoint (by default: `192.168.178.44:1232/notifyOfSeterra`). The content of the HTTP Post is a JSON object consisting of these string properties:
* sDomain: domain id (last part of url)
    * for a given domain id `DOMID`, the corresponding image file is `https://online.seterra.com/mapimage/LG/DOMID.png`
* sDomainText: title shown on the page
* sLanguage: selected language within Seterra - might influence the names of the quiz entities
* sFlag: id of the flag shown in the Seterra overview page - mostly flag of the country or region the quiz is about
    * for a given flag id `FLAGID`, the corresponding image file is `https://online.seterra.com/images/system/flags/gamelistflags/FLAGID.png`
* sMode: game modes like `pin` or `type`

After recent changes to the Seterra website, this extension is probably defunct. But it might still act as a template for similar endeavors.
