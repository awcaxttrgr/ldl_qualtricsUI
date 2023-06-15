Qualtrics.SurveyEngine.addOnload(function () {
    /*Place your JavaScript here to run when the page loads*/
    this.hideNextButton();

    /**This is a simple, *insecure* hash that's short, fast, and has no dependencies.
     * For algorithmic use, where security isn't needed, it's way simpler than sha1 (and all its deps)
     * or similar, and with a short, clean (base 36 alphanumeric) result.
     * Loosely based on the Java version; see https://stackoverflow.com/questions/6122571/simple-non-secure-hash-function-for-javascript
 */
    const simpleHash = t => { let e = 0; for (let r = 0; r < t.length; r++) { e = (e << 5) - e + t.charCodeAt(r), e &= e } return new Uint32Array([e])[0].toString(36) };

    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
    let d = new Date();
    const theRand = random(0, 4294967295);

    let hashsource = (d.toISOString() + theRand);
    Qualtrics.SurveyEngine.setEmbeddedData("participant", "P-" + simpleHash(hashsource.toString()).toUpperCase());

});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/
    var qobj = this;
    qobj.hideNextButton();
    var theTimeout = setTimeout(function () {
        qobj.clickNextButton();
    }, 1);
});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});