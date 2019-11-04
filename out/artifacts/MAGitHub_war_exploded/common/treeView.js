!function (e) {
    "use strict";
    !function (t, n) {
        "function" == typeof e && e.amd ? e(n) : "object" == typeof exports ? module.exports = n() : t.TreeView = n()
    }(window, function () {
        return function () {
            function e(e, t, n) {
                var a, r = e.length;
                for (a = 0; r > a; a += 1) t.call(n, e[a], a)
            }

            function t(t, n) {
                var a = [].slice.call(arguments, 2);
                if (!(r.indexOf(n) > -1)) throw new Error(n + " event cannot be found on TreeView.");
                t.handlers[n] && t.handlers[n] instanceof Array && e(t.handlers[n], function (e) {
                    window.setTimeout(function () {
                        e.callback.apply(e.context, a)
                    }, 0)
                })
            }

            function n(n) {
                var a, r = document.getElementById(n.node), o = [], l = function (t) {
                    var n = document.createElement("div"), a = document.createElement("div"),
                        r = document.createElement("div"), o = document.createElement("div");
                    if (n.setAttribute("class", "tree-leaf"), a.setAttribute("class", "tree-leaf-content"), a.setAttribute("data-item", JSON.stringify(t)), r.setAttribute("class", "tree-leaf-text"), r.textContent = t.name, o.setAttribute("class", "tree-expando " + (t.expanded ? "expanded" : "")), o.textContent = t.expanded ? "-" : "+", a.appendChild(o), a.appendChild(r), n.appendChild(a), t.children.length > 0) {
                        var i = document.createElement("div");
                        i.setAttribute("class", "tree-child-leaves"), e(t.children, function (e) {
                            var t = l(e);
                            i.appendChild(t)
                        }), t.expanded || i.classList.add("hidden"), n.appendChild(i)
                    } else o.classList.add("hidden");
                    return n
                };
                e(n.data, function (e) {
                    o.push(l.call(n, e))
                }), r.innerHTML = o.map(function (e) {
                    return e.outerHTML
                }).join(""), a = function (e) {
                    var a = (e.target || e.currentTarget).parentNode, r = JSON.parse(a.getAttribute("data-item")),
                        o = a.parentNode.querySelector(".tree-child-leaves");
                    o ? o.classList.contains("hidden") ? n.expand(a, o) : n.collapse(a, o) : t(n, "select", {
                        target: e,
                        data: r
                    })
                }, e(r.querySelectorAll(".tree-leaf-text"), function (e) {
                    e.onclick = a
                }), e(r.querySelectorAll(".tree-expando"), function (e) {
                    e.onclick = a
                })
            }

            function a(e, t) {
                this.handlers = {}, this.node = t, this.data = e, n(this)
            }

            var r = ["expand", "expandAll", "collapse", "collapseAll", "select"];
            return a.prototype.expand = function (e, n, a) {
                var r = e.querySelector(".tree-expando");
                r.textContent = "-", n.classList.remove("hidden"), a || t(this, "expand", {target: e, leaves: n})
            }, a.prototype.expandAll = function () {
                var n = this, a = document.getElementById(n.node).querySelectorAll(".tree-expando");
                e(a, function (e) {
                    var t = e.parentNode, a = t.parentNode.querySelector(".tree-child-leaves");
                    t && a && t.hasAttribute("data-item") && n.expand(t, a, !0)
                }), t(this, "expandAll", {})
            }, a.prototype.collapse = function (e, n, a) {
                var r = e.querySelector(".tree-expando");
                r.textContent = "+", n.classList.add("hidden"), a || t(this, "collapse", {target: e, leaves: n})
            }, a.prototype.collapseAll = function () {
                var n = this, a = document.getElementById(n.node).querySelectorAll(".tree-expando");
                e(a, function (e) {
                    var t = e.parentNode, a = t.parentNode.querySelector(".tree-child-leaves");
                    t && a && t.hasAttribute("data-item") && n.collapse(t, a, !0)
                }), t(this, "collapseAll", {})
            }, a.prototype.on = function (e, t, n) {
                if (!(r.indexOf(e) > -1)) throw new Error(e + " is not supported by TreeView.");
                this.handlers[e] || (this.handlers[e] = []), this.handlers[e].push({callback: t, context: n})
            }, a.prototype.off = function (e, t) {
                var n, a = !1;
                this.handlers[e] instanceof Array && (this.handlers[e].forEach(function (e, r) {
                    n = r, e.callback !== t || a || (a = !0)
                }), a && this.handlers[e].splice(n, 1))
            }, a
        }()
    })
}(window.define);
