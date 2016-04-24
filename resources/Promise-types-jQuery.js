description("Promises - Test basic types / exceptions. jQuery-3.0.0-pre");

// Promise
debug("");
debug("Promises");
debug("");

// Promises should be of type Promise.

var aPromise = new $.Deferred(function(dfd) { dfd.resolve(1); });

debug("aPromise = new $.Deferred(...)")
shouldBeType("aPromise", "Promise");
shouldBe("String(aPromise)", "'[object Promise]'");

shouldBeDefined("aPromise.then");
shouldBeType("aPromise.then", "Function");
shouldBe("aPromise.then.length", "2");
shouldBeDefined("aPromise.catch");
shouldBeType("aPromise.catch", "Function");
shouldBe("aPromise.catch.length", "1");

debug("aPromise2 = $.Deferred(...)")
shouldThrow(`$.Deferred(function(dfd) { dfd.resolve(1); })`);

// Promise constructor
debug("");
debug("Promise constructor");
debug("");

// Need at least one parameter.
shouldBe("$.Deferred.length", "1");
shouldThrow("new $.Deferred()");
shouldThrow("$.Deferred()");

// Parameter must be a function.
shouldThrow("new $.Deferred(1)", "'TypeError: Promise constructor takes a function argument'");
shouldThrow("new $.Deferred('hello')", "'TypeError: Promise constructor takes a function argument'");
shouldThrow("new $.Deferred([])", "'TypeError: Promise constructor takes a function argument'");
shouldThrow("new $.Deferred({})", "'TypeError: Promise constructor takes a function argument'");
shouldThrow("new $.Deferred(null)", "'TypeError: Promise constructor takes a function argument'");
shouldThrow("new $.Deferred(undefined)", "'TypeError: Promise constructor takes a function argument'");

shouldThrow("$.Deferred(1)", "'TypeError: calling Promise constructor without new is invalid'");
shouldThrow("$.Deferred('hello')", "'TypeError: calling Promise constructor without new is invalid'");
shouldThrow("$.Deferred([])", "'TypeError: calling Promise constructor without new is invalid'");
shouldThrow("$.Deferred({})", "'TypeError: calling Promise constructor without new is invalid'");
shouldThrow("$.Deferred(null)", "'TypeError: calling Promise constructor without new is invalid'");
shouldThrow("$.Deferred(undefined)", "'TypeError: calling Promise constructor without new is invalid'");

// Promise statics
debug("");
debug("Promise statics");
debug("");


// Need at least one parameter.
shouldBeType("$.Deferred().resolve", "Function");
shouldBe("$.Deferred().resolve.length", "1");
shouldNotThrow("$.Deferred().resolve(1)");

shouldBeType("$.Deferred().reject", "Function");
shouldBe("$.Deferred().reject.length", "1");
shouldNotThrow("$.Deferred().reject(1)");

// Should return Promise objects.
shouldBeType("$.Deferred().resolve(1)", "Promise");
shouldBeType("$.Deferred().reject(1)", "Promise");

