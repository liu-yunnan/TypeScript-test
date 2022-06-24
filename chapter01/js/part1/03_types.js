"use strict";
var TS3;
(function (TS3) {
    let a;
    a = 10;
    let b;
    b = "male";
    b = "female";
    let c;
    c = true;
    c = "true";
    let d;
    let e;
    e = 10;
    e = "hello";
    let s;
    s = d;
    if (typeof e === "string") {
        s = e;
    }
    s = e;
    s = e;
    function fn(n) {
        if (n > 1) {
            return true;
        }
        else {
            return 123;
        }
    }
    function fn1() {
        throw new Error("error");
    }
})(TS3 || (TS3 = {}));
