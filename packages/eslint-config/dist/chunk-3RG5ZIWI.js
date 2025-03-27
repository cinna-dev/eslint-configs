var __require = /* @__PURE__ */ function(x) {
    return typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
        get: function(a, b) {
            return (typeof require !== "undefined" ? require : a)[b];
        }
    }) : x;
}(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
});
export { __require };
