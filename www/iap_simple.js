// We must wait for the "deviceready" event to fire
// before we can use the store object.
function initiap() {

// Add When events
	//register只回傳id，沒有其它資料
    store.when("product").registered(function(p) {
        c2_callFunction("log", ["product registered" + p.id]);
    });
    store.when("product").loaded(function(p) {
        c2_callFunction("log", ["product loaded " + p.id]);
    });
    store.when("product").updated(function(p) {
        c2_callFunction("iap_updated", [p.id, p.title, p.introPrice]);
	    c2_callFunction("log", ["product updated"]);
    });
    store.when("product").approved(function(p) {
        c2_callFunction("log", ["product approved"]);
        c2_callFunction("log", [p.id]);
		c2_callFunction("log", [p.title]);
		c2_callFunction("log", [p.introPrice]);
        p.finish();
    });
    store.when("product").finished(function(p) {
        c2_callFunction("log", ["product finished"]);
        c2_callFunction("log", [p.id]);
		c2_callFunction("log", [p.title]);
		c2_callFunction("log", [p.introPrice]);
    });
    store.error(function(e) {
        c2_callFunction("log", ["product error"]);
        c2_callFunction("log", [e.code]);
		c2_callFunction("log", [e.message]);
    });
// product register
    store.register({
        id:    "gems.lv1.cp",
        alias: "gems.lv1.cp",
        type:  store.CONSUMABLE
    });
    store.register({
        id:    "gems.lv2.cp",
        alias: "gems.lv2.cp",
        type:  store.CONSUMABLE
    });	
    store.register({
        id:    "gems.lv3.cp",
        alias: "gems.lv3.cp",
        type:  store.CONSUMABLE
    });
    store.register({
        id:    "removeads.cp",
        alias: "removeads.cp",
        type:  store.NON_CONSUMABLE
    });
    // When every goes as expected, it's time to celebrate!
    // The "ready" event should be welcomed with music and fireworks,
    // go ask your boss about it! (just in case)
    store.ready(function() {
        c2_callFunction("log", ["store ready"]);
    });

    // After we've done our setup, we tell the store to do
    // it's first refresh. Nothing will happen if we do not call store.refresh()
    store.refresh();
}