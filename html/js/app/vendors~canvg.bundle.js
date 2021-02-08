(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~canvg"],{

/***/ "./node_modules/canvg/dist/browser/canvg.min.js":
/*!******************************************************!*\
  !*** ./node_modules/canvg/dist/browser/canvg.min.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e(__webpack_require__(/*! rgbcolor */ "./node_modules/rgbcolor/index.js"), __webpack_require__(/*! stackblur-canvas */ "./node_modules/stackblur-canvas/dist/stackblur-es.js")) : undefined;
}(this, function (y, v) {
  "use strict";

  var t;
  return y = y && y.hasOwnProperty("default") ? y.default : y, v = v && v.hasOwnProperty("default") ? v.default : v, function (t) {
    var l;
    t.exports;
    (l = window).DOMParser = window.DOMParser;
    var c = l.document;

    function d(t, e) {
      var i;
      return (i = c.createElement("canvas")).width = t, i.height = e, i;
    }

    var f,
        p = function (t, e, i) {
      if (null != t || null != e || null != i) {
        var n = m(i || {});
        "string" == typeof t && (t = c.getElementById(t)), null != t.svg && t.svg.stop(), t.childNodes && 1 == t.childNodes.length && "OBJECT" == t.childNodes[0].nodeName || (t.svg = n);
        var s = t.getContext("2d");
        void 0 !== e.documentElement ? n.loadXmlDoc(s, e) : "<" == e.substr(0, 1) ? n.loadXml(s, e) : n.load(s, e);
      } else for (var a = c.querySelectorAll("svg"), r = 0; r < a.length; r++) {
        var o = a[r],
            h = c.createElement("canvas");
        if (void 0 !== o.clientWidth && void 0 !== o.clientHeight) h.width = o.clientWidth, h.height = o.clientHeight;else {
          var l = o.getBoundingClientRect();
          h.width = l.width, h.height = l.height;
        }
        o.parentNode.insertBefore(h, o), o.parentNode.removeChild(o);
        var u = c.createElement("div");
        u.appendChild(o), p(h, u.innerHTML);
      }
    };

    "undefined" == typeof Element || (void 0 !== Element.prototype.matches ? f = function (t, e) {
      return t.matches(e);
    } : void 0 !== Element.prototype.webkitMatchesSelector ? f = function (t, e) {
      return t.webkitMatchesSelector(e);
    } : void 0 !== Element.prototype.mozMatchesSelector ? f = function (t, e) {
      return t.mozMatchesSelector(e);
    } : void 0 !== Element.prototype.msMatchesSelector ? f = function (t, e) {
      return t.msMatchesSelector(e);
    } : void 0 !== Element.prototype.oMatchesSelector ? f = function (t, e) {
      return t.oMatchesSelector(e);
    } : ("function" != typeof jQuery && "function" != typeof Zepto || (f = function (t, e) {
      return $(t).is(e);
    }), void 0 === f && "undefined" != typeof Sizzle && (f = Sizzle.matchesSelector)));
    var e = /(\[[^\]]+\])/g,
        i = /(#[^\s\+>~\.\[:]+)/g,
        a = /(\.[^\s\+>~\.\[:]+)/g,
        r = /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi,
        o = /(:[\w-]+\([^\)]*\))/gi,
        h = /(:[^\s\+>~\.\[:]+)/g,
        u = /([^\s\+>~\.\[:]+)/g;

    function P(n) {
      var s = [0, 0, 0],
          t = function (t, e) {
        var i = n.match(t);
        null != i && (s[e] += i.length, n = n.replace(t, " "));
      };

      return n = (n = n.replace(/:not\(([^\)]*)\)/g, "     $1 ")).replace(/{[\s\S]*/gm, " "), t(e, 1), t(i, 0), t(a, 1), t(r, 2), t(o, 1), t(h, 1), n = (n = n.replace(/[\*\s\+>~]/g, " ")).replace(/[#\.]/g, " "), t(u, 2), s.join("");
    }

    function m(s) {
      var D = {
        opts: s,
        FRAMERATE: 30,
        MAX_VIRTUAL_PIXELS: 3e4,
        rootEmSize: 12,
        emSize: 12,
        log: function () {}
      };
      1 == D.opts.log && "undefined" != typeof console && (D.log = function (t) {
        console.log(t);
      }), D.init = function (t) {
        var e = 0;
        D.UniqueId = function () {
          return "canvg" + ++e;
        }, D.Definitions = {}, D.Styles = {}, D.StylesSpecificity = {}, D.Animations = [], D.Images = [], D.ctx = t, D.ViewPort = new function () {
          this.viewPorts = [], this.Clear = function () {
            this.viewPorts = [];
          }, this.SetCurrent = function (t, e) {
            this.viewPorts.push({
              width: t,
              height: e
            });
          }, this.RemoveCurrent = function () {
            this.viewPorts.pop();
          }, this.Current = function () {
            return this.viewPorts[this.viewPorts.length - 1];
          }, this.width = function () {
            return this.Current().width;
          }, this.height = function () {
            return this.Current().height;
          }, this.ComputeSize = function (t) {
            return null != t && "number" == typeof t ? t : "x" == t ? this.width() : "y" == t ? this.height() : Math.sqrt(Math.pow(this.width(), 2) + Math.pow(this.height(), 2)) / Math.sqrt(2);
          };
        }();
      }, D.init(), D.ImagesLoaded = function () {
        for (var t = 0; t < D.Images.length; t++) if (!D.Images[t].loaded) return !1;

        return !0;
      }, D.trim = function (t) {
        return t.replace(/^\s+|\s+$/g, "");
      }, D.compressSpaces = function (t) {
        return t.replace(/(?!\u3000)\s+/gm, " ");
      }, D.ajax = function (t) {
        var e;
        return (e = l.XMLHttpRequest ? new l.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")) ? (e.open("GET", t, !1), e.send(null), e.responseText) : null;
      }, D.parseXml = function (e) {
        if ("undefined" != typeof Windows && void 0 !== Windows.Data && void 0 !== Windows.Data.Xml) {
          var t = new Windows.Data.Xml.Dom.XmlDocument(),
              i = new Windows.Data.Xml.Dom.XmlLoadSettings();
          return i.prohibitDtd = !1, t.loadXml(e, i), t;
        }

        if (!l.DOMParser) return e = e.replace(/<!DOCTYPE svg[^>]*>/, ""), (t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e), t;

        try {
          var n = s.xmldom ? new l.DOMParser(s.xmldom) : new l.DOMParser();
          return n.parseFromString(e, "image/svg+xml");
        } catch (t) {
          return (n = s.xmldom ? new l.DOMParser(s.xmldom) : new l.DOMParser()).parseFromString(e, "text/xml");
        }
      }, D.Property = function (t, e) {
        this.name = t, this.value = e;
      }, D.Property.prototype.getValue = function () {
        return this.value;
      }, D.Property.prototype.hasValue = function () {
        return null != this.value && "" !== this.value;
      }, D.Property.prototype.numValue = function () {
        if (!this.hasValue()) return 0;
        var t = parseFloat(this.value);
        return (this.value + "").match(/%$/) && (t /= 100), t;
      }, D.Property.prototype.valueOrDefault = function (t) {
        return this.hasValue() ? this.value : t;
      }, D.Property.prototype.numValueOrDefault = function (t) {
        return this.hasValue() ? this.numValue() : parseFloat(t);
      }, D.Property.prototype.addOpacity = function (t) {
        var e = this.value;

        if (null != t.value && "" != t.value && "string" == typeof this.value) {
          var i = new y(this.value);
          i.ok && (e = "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + t.numValue() + ")");
        }

        return new D.Property(this.name, e);
      }, D.Property.prototype.getDefinition = function () {
        var t = this.value.match(/#([^\)'"]+)/);
        return t && (t = t[1]), t || (t = this.value), D.Definitions[t];
      }, D.Property.prototype.isUrlDefinition = function () {
        return 0 == this.value.indexOf("url(");
      }, D.Property.prototype.getFillStyleDefinition = function (t, e) {
        var i = this.getDefinition();
        if (null != i && i.createGradient) return i.createGradient(D.ctx, t, e);

        if (null != i && i.createPattern) {
          if (i.getHrefAttribute().hasValue()) {
            var n = i.attribute("patternTransform");
            i = i.getHrefAttribute().getDefinition(), n.hasValue() && (i.attribute("patternTransform", !0).value = n.value);
          }

          return i.createPattern(D.ctx, t, e);
        }

        return null;
      }, D.Property.prototype.getDPI = function () {
        return 96;
      }, D.Property.prototype.getREM = function () {
        return D.rootEmSize;
      }, D.Property.prototype.getEM = function () {
        return D.emSize;
      }, D.Property.prototype.getUnits = function () {
        return (this.value + "").replace(/[0-9\.\-]/g, "");
      }, D.Property.prototype.isPixels = function () {
        if (!this.hasValue()) return !1;
        var t = this.value + "";
        return !!t.match(/px$/) || !!t.match(/^[0-9]+$/);
      }, D.Property.prototype.toPixels = function (t, e) {
        if (!this.hasValue()) return 0;
        var i = this.value + "";
        if (i.match(/rem$/)) return this.numValue() * this.getREM(t);
        if (i.match(/em$/)) return this.numValue() * this.getEM(t);
        if (i.match(/ex$/)) return this.numValue() * this.getEM(t) / 2;
        if (i.match(/px$/)) return this.numValue();
        if (i.match(/pt$/)) return this.numValue() * this.getDPI(t) * (1 / 72);
        if (i.match(/pc$/)) return 15 * this.numValue();
        if (i.match(/cm$/)) return this.numValue() * this.getDPI(t) / 2.54;
        if (i.match(/mm$/)) return this.numValue() * this.getDPI(t) / 25.4;
        if (i.match(/in$/)) return this.numValue() * this.getDPI(t);
        if (i.match(/%$/)) return this.numValue() * D.ViewPort.ComputeSize(t);
        var n = this.numValue();
        return e && n < 1 ? n * D.ViewPort.ComputeSize(t) : n;
      }, D.Property.prototype.toMilliseconds = function () {
        return this.hasValue() ? (this.value + "").match(/ms$/) ? this.numValue() : 1e3 * this.numValue() : 0;
      }, D.Property.prototype.toRadians = function () {
        if (!this.hasValue()) return 0;
        var t = this.value + "";
        return t.match(/deg$/) ? this.numValue() * (Math.PI / 180) : t.match(/grad$/) ? this.numValue() * (Math.PI / 200) : t.match(/rad$/) ? this.numValue() : this.numValue() * (Math.PI / 180);
      };
      var t = {
        baseline: "alphabetic",
        "before-edge": "top",
        "text-before-edge": "top",
        middle: "middle",
        central: "middle",
        "after-edge": "bottom",
        "text-after-edge": "bottom",
        ideographic: "ideographic",
        alphabetic: "alphabetic",
        hanging: "hanging",
        mathematical: "alphabetic"
      };
      return D.Property.prototype.toTextBaseline = function () {
        return this.hasValue() ? t[this.value] : null;
      }, D.Font = new function () {
        this.Styles = "normal|italic|oblique|inherit", this.Variants = "normal|small-caps|inherit", this.Weights = "normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900|inherit", this.CreateFont = function (t, e, i, n, s, a) {
          var r = null != a ? this.Parse(a) : this.CreateFont("", "", "", "", "", D.ctx.font);
          return {
            fontFamily: s = s || r.fontFamily,
            fontSize: n || r.fontSize,
            fontStyle: t || r.fontStyle,
            fontWeight: i || r.fontWeight,
            fontVariant: e || r.fontVariant,
            toString: function () {
              return [this.fontStyle, this.fontVariant, this.fontWeight, this.fontSize, this.fontFamily].join(" ");
            }
          };
        };
        var r = this;

        this.Parse = function (t) {
          for (var e = {}, i = D.trim(D.compressSpaces(t || "")).split(" "), n = {
            fontSize: !1,
            fontStyle: !1,
            fontWeight: !1,
            fontVariant: !1
          }, s = "", a = 0; a < i.length; a++) n.fontStyle || -1 == r.Styles.indexOf(i[a]) ? n.fontVariant || -1 == r.Variants.indexOf(i[a]) ? n.fontWeight || -1 == r.Weights.indexOf(i[a]) ? n.fontSize ? "inherit" != i[a] && (s += i[a]) : ("inherit" != i[a] && (e.fontSize = i[a].split("/")[0]), n.fontStyle = n.fontVariant = n.fontWeight = n.fontSize = !0) : ("inherit" != i[a] && (e.fontWeight = i[a]), n.fontStyle = n.fontVariant = n.fontWeight = !0) : ("inherit" != i[a] && (e.fontVariant = i[a]), n.fontStyle = n.fontVariant = !0) : ("inherit" != i[a] && (e.fontStyle = i[a]), n.fontStyle = !0);

          return "" != s && (e.fontFamily = s), e;
        };
      }(), D.ToNumberArray = function (t) {
        for (var e = (t || "").match(/-?(\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\.\d+)(?=\D|$)/gm) || [], i = 0; i < e.length; i++) e[i] = parseFloat(e[i]);

        return e;
      }, D.Point = function (t, e) {
        this.x = t, this.y = e;
      }, D.Point.prototype.angleTo = function (t) {
        return Math.atan2(t.y - this.y, t.x - this.x);
      }, D.Point.prototype.applyTransform = function (t) {
        var e = this.x * t[0] + this.y * t[2] + t[4],
            i = this.x * t[1] + this.y * t[3] + t[5];
        this.x = e, this.y = i;
      }, D.CreatePoint = function (t) {
        var e = D.ToNumberArray(t);
        return new D.Point(e[0], e[1]);
      }, D.CreatePath = function (t) {
        for (var e = D.ToNumberArray(t), i = [], n = 0; n < e.length; n += 2) i.push(new D.Point(e[n], e[n + 1]));

        return i;
      }, D.BoundingBox = function (t, e, i, n) {
        this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN, this.x = function () {
          return this.x1;
        }, this.y = function () {
          return this.y1;
        }, this.width = function () {
          return this.x2 - this.x1;
        }, this.height = function () {
          return this.y2 - this.y1;
        }, this.addPoint = function (t, e) {
          null != t && ((isNaN(this.x1) || isNaN(this.x2)) && (this.x1 = t, this.x2 = t), t < this.x1 && (this.x1 = t), t > this.x2 && (this.x2 = t)), null != e && ((isNaN(this.y1) || isNaN(this.y2)) && (this.y1 = e, this.y2 = e), e < this.y1 && (this.y1 = e), e > this.y2 && (this.y2 = e));
        }, this.addX = function (t) {
          this.addPoint(t, null);
        }, this.addY = function (t) {
          this.addPoint(null, t);
        }, this.addBoundingBox = function (t) {
          this.addPoint(t.x1, t.y1), this.addPoint(t.x2, t.y2);
        }, this.addQuadraticCurve = function (t, e, i, n, s, a) {
          var r = t + 2 / 3 * (i - t),
              o = e + 2 / 3 * (n - e),
              h = r + 1 / 3 * (s - t),
              l = o + 1 / 3 * (a - e);
          this.addBezierCurve(t, e, r, h, o, l, s, a);
        }, this.addBezierCurve = function (t, e, i, n, s, a, r, o) {
          var h = [t, e],
              l = [i, n],
              u = [s, a],
              c = [r, o];
          this.addPoint(h[0], h[1]), this.addPoint(c[0], c[1]);

          for (var f = 0; f <= 1; f++) {
            var p = function (t) {
              return Math.pow(1 - t, 3) * h[f] + 3 * Math.pow(1 - t, 2) * t * l[f] + 3 * (1 - t) * Math.pow(t, 2) * u[f] + Math.pow(t, 3) * c[f];
            },
                d = 6 * h[f] - 12 * l[f] + 6 * u[f],
                m = -3 * h[f] + 9 * l[f] - 9 * u[f] + 3 * c[f],
                y = 3 * l[f] - 3 * h[f];

            if (0 != m) {
              var v = Math.pow(d, 2) - 4 * y * m;

              if (!(v < 0)) {
                var g = (-d + Math.sqrt(v)) / (2 * m);
                0 < g && g < 1 && (0 == f && this.addX(p(g)), 1 == f && this.addY(p(g)));
                var x = (-d - Math.sqrt(v)) / (2 * m);
                0 < x && x < 1 && (0 == f && this.addX(p(x)), 1 == f && this.addY(p(x)));
              }
            } else {
              if (0 == d) continue;
              var b = -y / d;
              0 < b && b < 1 && (0 == f && this.addX(p(b)), 1 == f && this.addY(p(b)));
            }
          }
        }, this.isPointInBox = function (t, e) {
          return this.x1 <= t && t <= this.x2 && this.y1 <= e && e <= this.y2;
        }, this.addPoint(t, e), this.addPoint(i, n);
      }, D.Transform = function (t) {
        var e = this;
        this.Type = {}, this.Type.translate = function (t) {
          this.p = D.CreatePoint(t), this.apply = function (t) {
            t.translate(this.p.x || 0, this.p.y || 0);
          }, this.unapply = function (t) {
            t.translate(-1 * this.p.x || 0, -1 * this.p.y || 0);
          }, this.applyToPoint = function (t) {
            t.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]);
          };
        }, this.Type.rotate = function (t) {
          var e = D.ToNumberArray(t);
          this.angle = new D.Property("angle", e[0]), this.cx = e[1] || 0, this.cy = e[2] || 0, this.apply = function (t) {
            t.translate(this.cx, this.cy), t.rotate(this.angle.toRadians()), t.translate(-this.cx, -this.cy);
          }, this.unapply = function (t) {
            t.translate(this.cx, this.cy), t.rotate(-1 * this.angle.toRadians()), t.translate(-this.cx, -this.cy);
          }, this.applyToPoint = function (t) {
            var e = this.angle.toRadians();
            t.applyTransform([1, 0, 0, 1, this.p.x || 0, this.p.y || 0]), t.applyTransform([Math.cos(e), Math.sin(e), -Math.sin(e), Math.cos(e), 0, 0]), t.applyTransform([1, 0, 0, 1, -this.p.x || 0, -this.p.y || 0]);
          };
        }, this.Type.scale = function (t) {
          this.p = D.CreatePoint(t), this.apply = function (t) {
            t.scale(this.p.x || 1, this.p.y || this.p.x || 1);
          }, this.unapply = function (t) {
            t.scale(1 / this.p.x || 1, 1 / this.p.y || this.p.x || 1);
          }, this.applyToPoint = function (t) {
            t.applyTransform([this.p.x || 0, 0, 0, this.p.y || 0, 0, 0]);
          };
        }, this.Type.matrix = function (t) {
          this.m = D.ToNumberArray(t), this.apply = function (t) {
            t.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
          }, this.unapply = function (t) {
            var e = this.m[0],
                i = this.m[2],
                n = this.m[4],
                s = this.m[1],
                a = this.m[3],
                r = this.m[5],
                o = 1 / (e * (1 * a - 0 * r) - i * (1 * s - 0 * r) + n * (0 * s - 0 * a));
            t.transform(o * (1 * a - 0 * r), o * (0 * r - 1 * s), o * (0 * n - 1 * i), o * (1 * e - 0 * n), o * (i * r - n * a), o * (n * s - e * r));
          }, this.applyToPoint = function (t) {
            t.applyTransform(this.m);
          };
        }, this.Type.SkewBase = function (t) {
          this.base = e.Type.matrix, this.base(t), this.angle = new D.Property("angle", t);
        }, this.Type.SkewBase.prototype = new this.Type.matrix(), this.Type.skewX = function (t) {
          this.base = e.Type.SkewBase, this.base(t), this.m = [1, 0, Math.tan(this.angle.toRadians()), 1, 0, 0];
        }, this.Type.skewX.prototype = new this.Type.SkewBase(), this.Type.skewY = function (t) {
          this.base = e.Type.SkewBase, this.base(t), this.m = [1, Math.tan(this.angle.toRadians()), 0, 1, 0, 0];
        }, this.Type.skewY.prototype = new this.Type.SkewBase(), this.transforms = [], this.apply = function (t) {
          for (var e = 0; e < this.transforms.length; e++) this.transforms[e].apply(t);
        }, this.unapply = function (t) {
          for (var e = this.transforms.length - 1; 0 <= e; e--) this.transforms[e].unapply(t);
        }, this.applyToPoint = function (t) {
          for (var e = 0; e < this.transforms.length; e++) this.transforms[e].applyToPoint(t);
        };

        for (var i = D.trim(D.compressSpaces(t)).replace(/\)([a-zA-Z])/g, ") $1").replace(/\)(\s?,\s?)/g, ") ").split(/\s(?=[a-z])/), n = 0; n < i.length; n++) if ("none" !== i[n]) {
          var s = D.trim(i[n].split("(")[0]),
              a = i[n].split("(")[1].replace(")", ""),
              r = this.Type[s];

          if (void 0 !== r) {
            var o = new r(a);
            o.type = s, this.transforms.push(o);
          }
        }
      }, D.AspectRatio = function (t, e, i, n, s, a, r, o, h, l) {
        var u = (e = (e = D.compressSpaces(e)).replace(/^defer\s/, "")).split(" ")[0] || "xMidYMid",
            c = e.split(" ")[1] || "meet",
            f = i / n,
            p = s / a,
            d = Math.min(f, p),
            m = Math.max(f, p);
        "meet" == c && (n *= d, a *= d), "slice" == c && (n *= m, a *= m), h = new D.Property("refX", h), l = new D.Property("refY", l), h.hasValue() && l.hasValue() ? t.translate(-d * h.toPixels("x"), -d * l.toPixels("y")) : (u.match(/^xMid/) && ("meet" == c && d == p || "slice" == c && m == p) && t.translate(i / 2 - n / 2, 0), u.match(/YMid$/) && ("meet" == c && d == f || "slice" == c && m == f) && t.translate(0, s / 2 - a / 2), u.match(/^xMax/) && ("meet" == c && d == p || "slice" == c && m == p) && t.translate(i - n, 0), u.match(/YMax$/) && ("meet" == c && d == f || "slice" == c && m == f) && t.translate(0, s - a)), "none" == u ? t.scale(f, p) : "meet" == c ? t.scale(d, d) : "slice" == c && t.scale(m, m), t.translate(null == r ? 0 : -r, null == o ? 0 : -o);
      }, D.Element = {}, D.EmptyProperty = new D.Property("EMPTY", ""), D.Element.ElementBase = function (a) {
        this.attributes = {}, this.styles = {}, this.stylesSpecificity = {}, this.children = [], this.attribute = function (t, e) {
          var i = this.attributes[t];
          return null != i ? i : (1 == e && (i = new D.Property(t, ""), this.attributes[t] = i), i || D.EmptyProperty);
        }, this.getHrefAttribute = function () {
          for (var t in this.attributes) if ("href" == t || t.match(/:href$/)) return this.attributes[t];

          return D.EmptyProperty;
        }, this.style = function (t, e, i) {
          var n = this.styles[t];
          if (null != n) return n;
          var s = this.attribute(t);
          if (null != s && s.hasValue()) return this.styles[t] = s;

          if (1 != i) {
            var a = this.parent;

            if (null != a) {
              var r = a.style(t);
              if (null != r && r.hasValue()) return r;
            }
          }

          return 1 == e && (n = new D.Property(t, ""), this.styles[t] = n), n || D.EmptyProperty;
        }, this.render = function (t) {
          if ("none" != this.style("display").value && "hidden" != this.style("visibility").value) {
            if (t.save(), this.style("mask").hasValue()) {
              var e = this.style("mask").getDefinition();
              null != e && e.apply(t, this);
            } else if (this.style("filter").hasValue()) {
              var i = this.style("filter").getDefinition();
              null != i && i.apply(t, this);
            } else this.setContext(t), this.renderChildren(t), this.clearContext(t);

            t.restore();
          }
        }, this.setContext = function () {}, this.clearContext = function () {}, this.renderChildren = function (t) {
          for (var e = 0; e < this.children.length; e++) this.children[e].render(t);
        }, this.addChild = function (t, e) {
          var i = t;
          e && (i = D.CreateElement(t)), i.parent = this, "title" != i.type && this.children.push(i);
        }, this.addStylesFromStyleDefinition = function () {
          for (var t in D.Styles) if ("@" != t[0] && f(a, t)) {
            var e = D.Styles[t],
                i = D.StylesSpecificity[t];
            if (null != e) for (var n in e) {
              var s = this.stylesSpecificity[n];
              void 0 === s && (s = "000"), s <= i && (this.styles[n] = e[n], this.stylesSpecificity[n] = i);
            }
          }
        };
        var t,
            e = new RegExp("^[A-Z-]+$");

        if (null != a && 1 == a.nodeType) {
          for (var i = 0; i < a.attributes.length; i++) {
            var n = a.attributes[i],
                s = (t = n.nodeName, e.test(t) ? t.toLowerCase() : t);
            this.attributes[s] = new D.Property(s, n.value);
          }

          if (this.addStylesFromStyleDefinition(), this.attribute("style").hasValue()) {
            var r = this.attribute("style").value.split(";");

            for (i = 0; i < r.length; i++) if ("" != D.trim(r[i])) {
              var o = r[i].split(":"),
                  h = D.trim(o[0]),
                  l = D.trim(o[1]);
              this.styles[h] = new D.Property(h, l);
            }
          }

          this.attribute("id").hasValue() && null == D.Definitions[this.attribute("id").value] && (D.Definitions[this.attribute("id").value] = this);

          for (i = 0; i < a.childNodes.length; i++) {
            var u = a.childNodes[i];

            if (1 == u.nodeType && this.addChild(u, !0), this.captureTextNodes && (3 == u.nodeType || 4 == u.nodeType)) {
              var c = u.value || u.text || u.textContent || "";
              "" != D.compressSpaces(c) && this.addChild(new D.Element.tspan(u), !1);
            }
          }
        }
      }, D.Element.RenderedElementBase = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.calculateOpacity = function () {
          for (var t = 1, e = this; null != e;) {
            var i = e.style("opacity", !1, !0);
            i.hasValue() && (t *= i.numValue()), e = e.parent;
          }

          return t;
        }, this.setContext = function (t, e) {
          if (!e) {
            var i;
            if (this.style("fill").isUrlDefinition()) null != (i = this.style("fill").getFillStyleDefinition(this, this.style("fill-opacity"))) && (t.fillStyle = i);else if (this.style("fill").hasValue()) {
              var n;
              "currentColor" == (n = this.style("fill")).value && (n.value = this.style("color").value), "inherit" != n.value && (t.fillStyle = "none" == n.value ? "rgba(0,0,0,0)" : n.value);
            }
            if (this.style("fill-opacity").hasValue()) n = (n = new D.Property("fill", t.fillStyle)).addOpacity(this.style("fill-opacity")), t.fillStyle = n.value;
            if (this.style("stroke").isUrlDefinition()) null != (i = this.style("stroke").getFillStyleDefinition(this, this.style("stroke-opacity"))) && (t.strokeStyle = i);else if (this.style("stroke").hasValue()) {
              var s;
              "currentColor" == (s = this.style("stroke")).value && (s.value = this.style("color").value), "inherit" != s.value && (t.strokeStyle = "none" == s.value ? "rgba(0,0,0,0)" : s.value);
            }
            if (this.style("stroke-opacity").hasValue()) s = (s = new D.Property("stroke", t.strokeStyle)).addOpacity(this.style("stroke-opacity")), t.strokeStyle = s.value;

            if (this.style("stroke-width").hasValue()) {
              var a = this.style("stroke-width").toPixels();
              t.lineWidth = 0 == a ? .001 : a;
            }

            if (this.style("stroke-linecap").hasValue() && (t.lineCap = this.style("stroke-linecap").value), this.style("stroke-linejoin").hasValue() && (t.lineJoin = this.style("stroke-linejoin").value), this.style("stroke-miterlimit").hasValue() && (t.miterLimit = this.style("stroke-miterlimit").value), this.style("paint-order").hasValue() && (t.paintOrder = this.style("paint-order").value), this.style("stroke-dasharray").hasValue() && "none" != this.style("stroke-dasharray").value) {
              var r = D.ToNumberArray(this.style("stroke-dasharray").value);
              void 0 !== t.setLineDash ? t.setLineDash(r) : void 0 !== t.webkitLineDash ? t.webkitLineDash = r : void 0 === t.mozDash || 1 == r.length && 0 == r[0] || (t.mozDash = r);
              var o = this.style("stroke-dashoffset").toPixels();
              void 0 !== t.lineDashOffset ? t.lineDashOffset = o : void 0 !== t.webkitLineDashOffset ? t.webkitLineDashOffset = o : void 0 !== t.mozDashOffset && (t.mozDashOffset = o);
            }
          }

          if (void 0 !== t.font) if (this.style("font").hasValue()) t.font = this.style("font").value;else {
            t.font = D.Font.CreateFont(this.style("font-style").value, this.style("font-variant").value, this.style("font-weight").value, this.style("font-size").hasValue() ? this.style("font-size").toPixels() + "px" : "", this.style("font-family").value).toString();
            var h = this.style("font-size", !1, !1);
            h.isPixels() && (D.emSize = h.toPixels());
          }
          this.style("transform", !1, !0).hasValue() && new D.Transform(this.style("transform", !1, !0).value).apply(t);

          if (this.style("clip-path", !1, !0).hasValue()) {
            var l = this.style("clip-path", !1, !0).getDefinition();
            null != l && l.apply(t);
          }

          t.globalAlpha = this.calculateOpacity();
        };
      }, D.Element.RenderedElementBase.prototype = new D.Element.ElementBase(), D.Element.PathElementBase = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t), this.path = function (t) {
          return null != t && t.beginPath(), new D.BoundingBox();
        }, this.renderChildren = function (t) {
          this.path(t), D.Mouse.checkPath(this, t), "" != t.fillStyle && ("inherit" != this.style("fill-rule").valueOrDefault("inherit") ? t.fill(this.style("fill-rule").value) : t.fill()), "" != t.strokeStyle && t.stroke();
          var e = this.getMarkers();

          if (null != e) {
            if (this.style("marker-start").isUrlDefinition()) (i = this.style("marker-start").getDefinition()).render(t, e[0][0], e[0][1]);
            if (this.style("marker-mid").isUrlDefinition()) for (var i = this.style("marker-mid").getDefinition(), n = 1; n < e.length - 1; n++) i.render(t, e[n][0], e[n][1]);
            if (this.style("marker-end").isUrlDefinition()) (i = this.style("marker-end").getDefinition()).render(t, e[e.length - 1][0], e[e.length - 1][1]);
          }
        }, this.getBoundingBox = function () {
          return this.path();
        }, this.getMarkers = function () {
          return null;
        };
      }, D.Element.PathElementBase.prototype = new D.Element.RenderedElementBase(), D.SetDefaults = function (t) {
        t.strokeStyle = "rgba(0,0,0,0)", t.lineCap = "butt", t.lineJoin = "miter", t.miterLimit = 4;
      }, D.Element.svg = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t), this.baseClearContext = this.clearContext, this.clearContext = function (t) {
          this.baseClearContext(t), D.ViewPort.RemoveCurrent();
        }, this.baseSetContext = this.setContext, this.setContext = function (t) {
          if (D.SetDefaults(t), t.canvas.style && void 0 !== t.font && void 0 !== l.getComputedStyle) {
            t.font = l.getComputedStyle(t.canvas).getPropertyValue("font");
            var e = new D.Property("fontSize", D.Font.Parse(t.font).fontSize);
            e.hasValue() && (D.rootEmSize = D.emSize = e.toPixels("y"));
          }

          this.baseSetContext(t), this.attribute("x").hasValue() || (this.attribute("x", !0).value = 0), this.attribute("y").hasValue() || (this.attribute("y", !0).value = 0), t.translate(this.attribute("x").toPixels("x"), this.attribute("y").toPixels("y"));
          var i = D.ViewPort.width(),
              n = D.ViewPort.height();

          if (this.attribute("width").hasValue() || (this.attribute("width", !0).value = "100%"), this.attribute("height").hasValue() || (this.attribute("height", !0).value = "100%"), void 0 === this.root) {
            i = this.attribute("width").toPixels("x"), n = this.attribute("height").toPixels("y");
            var s = 0,
                a = 0;
            this.attribute("refX").hasValue() && this.attribute("refY").hasValue() && (s = -this.attribute("refX").toPixels("x"), a = -this.attribute("refY").toPixels("y")), "visible" != this.attribute("overflow").valueOrDefault("hidden") && (t.beginPath(), t.moveTo(s, a), t.lineTo(i, a), t.lineTo(i, n), t.lineTo(s, n), t.closePath(), t.clip());
          }

          if (D.ViewPort.SetCurrent(i, n), this.attribute("viewBox").hasValue()) {
            var r = D.ToNumberArray(this.attribute("viewBox").value),
                o = r[0],
                h = r[1];
            i = r[2], n = r[3], D.AspectRatio(t, this.attribute("preserveAspectRatio").value, D.ViewPort.width(), i, D.ViewPort.height(), n, o, h, this.attribute("refX").value, this.attribute("refY").value), D.ViewPort.RemoveCurrent(), D.ViewPort.SetCurrent(r[2], r[3]);
          }
        };
      }, D.Element.svg.prototype = new D.Element.RenderedElementBase(), D.Element.rect = function (t) {
        this.base = D.Element.PathElementBase, this.base(t), this.path = function (t) {
          var e = this.attribute("x").toPixels("x"),
              i = this.attribute("y").toPixels("y"),
              n = this.attribute("width").toPixels("x"),
              s = this.attribute("height").toPixels("y"),
              a = this.attribute("rx").toPixels("x"),
              r = this.attribute("ry").toPixels("y");

          if (this.attribute("rx").hasValue() && !this.attribute("ry").hasValue() && (r = a), this.attribute("ry").hasValue() && !this.attribute("rx").hasValue() && (a = r), a = Math.min(a, n / 2), r = Math.min(r, s / 2), null != t) {
            var o = (Math.sqrt(2) - 1) / 3 * 4;
            t.beginPath(), 0 < s && 0 < n && (t.moveTo(e + a, i), t.lineTo(e + n - a, i), t.bezierCurveTo(e + n - a + o * a, i, e + n, i + r - o * r, e + n, i + r), t.lineTo(e + n, i + s - r), t.bezierCurveTo(e + n, i + s - r + o * r, e + n - a + o * a, i + s, e + n - a, i + s), t.lineTo(e + a, i + s), t.bezierCurveTo(e + a - o * a, i + s, e, i + s - r + o * r, e, i + s - r), t.lineTo(e, i + r), t.bezierCurveTo(e, i + r - o * r, e + a - o * a, i, e + a, i), t.closePath());
          }

          return new D.BoundingBox(e, i, e + n, i + s);
        };
      }, D.Element.rect.prototype = new D.Element.PathElementBase(), D.Element.circle = function (t) {
        this.base = D.Element.PathElementBase, this.base(t), this.path = function (t) {
          var e = this.attribute("cx").toPixels("x"),
              i = this.attribute("cy").toPixels("y"),
              n = this.attribute("r").toPixels();
          return null != t && 0 < n && (t.beginPath(), t.arc(e, i, n, 0, 2 * Math.PI, !1), t.closePath()), new D.BoundingBox(e - n, i - n, e + n, i + n);
        };
      }, D.Element.circle.prototype = new D.Element.PathElementBase(), D.Element.ellipse = function (t) {
        this.base = D.Element.PathElementBase, this.base(t), this.path = function (t) {
          var e = (Math.sqrt(2) - 1) / 3 * 4,
              i = this.attribute("rx").toPixels("x"),
              n = this.attribute("ry").toPixels("y"),
              s = this.attribute("cx").toPixels("x"),
              a = this.attribute("cy").toPixels("y");
          return null != t && (t.beginPath(), t.moveTo(s + i, a), t.bezierCurveTo(s + i, a + e * n, s + e * i, a + n, s, a + n), t.bezierCurveTo(s - e * i, a + n, s - i, a + e * n, s - i, a), t.bezierCurveTo(s - i, a - e * n, s - e * i, a - n, s, a - n), t.bezierCurveTo(s + e * i, a - n, s + i, a - e * n, s + i, a), t.closePath()), new D.BoundingBox(s - i, a - n, s + i, a + n);
        };
      }, D.Element.ellipse.prototype = new D.Element.PathElementBase(), D.Element.line = function (t) {
        this.base = D.Element.PathElementBase, this.base(t), this.getPoints = function () {
          return [new D.Point(this.attribute("x1").toPixels("x"), this.attribute("y1").toPixels("y")), new D.Point(this.attribute("x2").toPixels("x"), this.attribute("y2").toPixels("y"))];
        }, this.path = function (t) {
          var e = this.getPoints();
          return null != t && (t.beginPath(), t.moveTo(e[0].x, e[0].y), t.lineTo(e[1].x, e[1].y)), new D.BoundingBox(e[0].x, e[0].y, e[1].x, e[1].y);
        }, this.getMarkers = function () {
          var t = this.getPoints(),
              e = t[0].angleTo(t[1]);
          return [[t[0], e], [t[1], e]];
        };
      }, D.Element.line.prototype = new D.Element.PathElementBase(), D.Element.polyline = function (t) {
        this.base = D.Element.PathElementBase, this.base(t), this.points = D.CreatePath(this.attribute("points").value), this.path = function (t) {
          var e = new D.BoundingBox(this.points[0].x, this.points[0].y);
          null != t && (t.beginPath(), t.moveTo(this.points[0].x, this.points[0].y));

          for (var i = 1; i < this.points.length; i++) e.addPoint(this.points[i].x, this.points[i].y), null != t && t.lineTo(this.points[i].x, this.points[i].y);

          return e;
        }, this.getMarkers = function () {
          for (var t = [], e = 0; e < this.points.length - 1; e++) t.push([this.points[e], this.points[e].angleTo(this.points[e + 1])]);

          return 0 < t.length && t.push([this.points[this.points.length - 1], t[t.length - 1][1]]), t;
        };
      }, D.Element.polyline.prototype = new D.Element.PathElementBase(), D.Element.polygon = function (t) {
        this.base = D.Element.polyline, this.base(t), this.basePath = this.path, this.path = function (t) {
          var e = this.basePath(t);
          return null != t && (t.lineTo(this.points[0].x, this.points[0].y), t.closePath()), e;
        };
      }, D.Element.polygon.prototype = new D.Element.polyline(), D.Element.path = function (t) {
        this.base = D.Element.PathElementBase, this.base(t);
        var e = this.attribute("d").value;
        e = e.replace(/,/gm, " ");

        for (var i = 0; i < 2; i++) e = e.replace(/([MmZzLlHhVvCcSsQqTtAa])([^\s])/gm, "$1 $2");

        e = (e = e.replace(/([^\s])([MmZzLlHhVvCcSsQqTtAa])/gm, "$1 $2")).replace(/([0-9])([+\-])/gm, "$1 $2");

        for (i = 0; i < 2; i++) e = e.replace(/(\.[0-9]*)(\.)/gm, "$1 $2");

        e = e.replace(/([Aa](\s+[0-9]+){3})\s+([01])\s*([01])/gm, "$1 $3 $4 "), e = D.compressSpaces(e), e = D.trim(e), this.PathParser = new function (t) {
          this.tokens = t.split(" "), this.reset = function () {
            this.i = -1, this.command = "", this.previousCommand = "", this.start = new D.Point(0, 0), this.control = new D.Point(0, 0), this.current = new D.Point(0, 0), this.points = [], this.angles = [];
          }, this.isEnd = function () {
            return this.i >= this.tokens.length - 1;
          }, this.isCommandOrEnd = function () {
            return !!this.isEnd() || null != this.tokens[this.i + 1].match(/^[A-Za-z]$/);
          }, this.isRelativeCommand = function () {
            switch (this.command) {
              case "m":
              case "l":
              case "h":
              case "v":
              case "c":
              case "s":
              case "q":
              case "t":
              case "a":
              case "z":
                return !0;
            }

            return !1;
          }, this.getToken = function () {
            return this.i++, this.tokens[this.i];
          }, this.getScalar = function () {
            return parseFloat(this.getToken());
          }, this.nextCommand = function () {
            this.previousCommand = this.command, this.command = this.getToken();
          }, this.getPoint = function () {
            var t = new D.Point(this.getScalar(), this.getScalar());
            return this.makeAbsolute(t);
          }, this.getAsControlPoint = function () {
            var t = this.getPoint();
            return this.control = t;
          }, this.getAsCurrentPoint = function () {
            var t = this.getPoint();
            return this.current = t;
          }, this.getReflectedControlPoint = function () {
            return "c" != this.previousCommand.toLowerCase() && "s" != this.previousCommand.toLowerCase() && "q" != this.previousCommand.toLowerCase() && "t" != this.previousCommand.toLowerCase() ? this.current : new D.Point(2 * this.current.x - this.control.x, 2 * this.current.y - this.control.y);
          }, this.makeAbsolute = function (t) {
            return this.isRelativeCommand() && (t.x += this.current.x, t.y += this.current.y), t;
          }, this.addMarker = function (t, e, i) {
            null != i && 0 < this.angles.length && null == this.angles[this.angles.length - 1] && (this.angles[this.angles.length - 1] = this.points[this.points.length - 1].angleTo(i)), this.addMarkerAngle(t, null == e ? null : e.angleTo(t));
          }, this.addMarkerAngle = function (t, e) {
            this.points.push(t), this.angles.push(e);
          }, this.getMarkerPoints = function () {
            return this.points;
          }, this.getMarkerAngles = function () {
            for (var t = 0; t < this.angles.length; t++) if (null == this.angles[t]) for (var e = t + 1; e < this.angles.length; e++) if (null != this.angles[e]) {
              this.angles[t] = this.angles[e];
              break;
            }

            return this.angles;
          };
        }(e), this.path = function (t) {
          var e = this.PathParser;
          e.reset();
          var i = new D.BoundingBox();

          for (null != t && t.beginPath(); !e.isEnd();) switch (e.nextCommand(), e.command) {
            case "M":
            case "m":
              var n = e.getAsCurrentPoint();

              for (e.addMarker(n), i.addPoint(n.x, n.y), null != t && t.moveTo(n.x, n.y), e.start = e.current; !e.isCommandOrEnd();) {
                n = e.getAsCurrentPoint();
                e.addMarker(n, e.start), i.addPoint(n.x, n.y), null != t && t.lineTo(n.x, n.y);
              }

              break;

            case "L":
            case "l":
              for (; !e.isCommandOrEnd();) {
                var s = e.current;
                n = e.getAsCurrentPoint();
                e.addMarker(n, s), i.addPoint(n.x, n.y), null != t && t.lineTo(n.x, n.y);
              }

              break;

            case "H":
            case "h":
              for (; !e.isCommandOrEnd();) {
                var a = new D.Point((e.isRelativeCommand() ? e.current.x : 0) + e.getScalar(), e.current.y);
                e.addMarker(a, e.current), e.current = a, i.addPoint(e.current.x, e.current.y), null != t && t.lineTo(e.current.x, e.current.y);
              }

              break;

            case "V":
            case "v":
              for (; !e.isCommandOrEnd();) {
                a = new D.Point(e.current.x, (e.isRelativeCommand() ? e.current.y : 0) + e.getScalar());
                e.addMarker(a, e.current), e.current = a, i.addPoint(e.current.x, e.current.y), null != t && t.lineTo(e.current.x, e.current.y);
              }

              break;

            case "C":
            case "c":
              for (; !e.isCommandOrEnd();) {
                var r = e.current,
                    o = e.getPoint(),
                    h = e.getAsControlPoint(),
                    l = e.getAsCurrentPoint();
                e.addMarker(l, h, o), i.addBezierCurve(r.x, r.y, o.x, o.y, h.x, h.y, l.x, l.y), null != t && t.bezierCurveTo(o.x, o.y, h.x, h.y, l.x, l.y);
              }

              break;

            case "S":
            case "s":
              for (; !e.isCommandOrEnd();) {
                r = e.current, o = e.getReflectedControlPoint(), h = e.getAsControlPoint(), l = e.getAsCurrentPoint();
                e.addMarker(l, h, o), i.addBezierCurve(r.x, r.y, o.x, o.y, h.x, h.y, l.x, l.y), null != t && t.bezierCurveTo(o.x, o.y, h.x, h.y, l.x, l.y);
              }

              break;

            case "Q":
            case "q":
              for (; !e.isCommandOrEnd();) {
                r = e.current, h = e.getAsControlPoint(), l = e.getAsCurrentPoint();
                e.addMarker(l, h, h), i.addQuadraticCurve(r.x, r.y, h.x, h.y, l.x, l.y), null != t && t.quadraticCurveTo(h.x, h.y, l.x, l.y);
              }

              break;

            case "T":
            case "t":
              for (; !e.isCommandOrEnd();) {
                r = e.current, h = e.getReflectedControlPoint();
                e.control = h;
                l = e.getAsCurrentPoint();
                e.addMarker(l, h, h), i.addQuadraticCurve(r.x, r.y, h.x, h.y, l.x, l.y), null != t && t.quadraticCurveTo(h.x, h.y, l.x, l.y);
              }

              break;

            case "A":
            case "a":
              for (; !e.isCommandOrEnd();) {
                r = e.current;
                var u = e.getScalar(),
                    c = e.getScalar(),
                    f = e.getScalar() * (Math.PI / 180),
                    p = e.getScalar(),
                    d = e.getScalar(),
                    m = (l = e.getAsCurrentPoint(), new D.Point(Math.cos(f) * (r.x - l.x) / 2 + Math.sin(f) * (r.y - l.y) / 2, -Math.sin(f) * (r.x - l.x) / 2 + Math.cos(f) * (r.y - l.y) / 2)),
                    y = Math.pow(m.x, 2) / Math.pow(u, 2) + Math.pow(m.y, 2) / Math.pow(c, 2);
                1 < y && (u *= Math.sqrt(y), c *= Math.sqrt(y));
                var v = (p == d ? -1 : 1) * Math.sqrt((Math.pow(u, 2) * Math.pow(c, 2) - Math.pow(u, 2) * Math.pow(m.y, 2) - Math.pow(c, 2) * Math.pow(m.x, 2)) / (Math.pow(u, 2) * Math.pow(m.y, 2) + Math.pow(c, 2) * Math.pow(m.x, 2)));
                isNaN(v) && (v = 0);

                var g = new D.Point(v * u * m.y / c, v * -c * m.x / u),
                    x = new D.Point((r.x + l.x) / 2 + Math.cos(f) * g.x - Math.sin(f) * g.y, (r.y + l.y) / 2 + Math.sin(f) * g.x + Math.cos(f) * g.y),
                    b = function (t) {
                  return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
                },
                    P = function (t, e) {
                  return (t[0] * e[0] + t[1] * e[1]) / (b(t) * b(e));
                },
                    E = function (t, e) {
                  return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(P(t, e));
                },
                    w = E([1, 0], [(m.x - g.x) / u, (m.y - g.y) / c]),
                    C = [(m.x - g.x) / u, (m.y - g.y) / c],
                    B = [(-m.x - g.x) / u, (-m.y - g.y) / c],
                    M = E(C, B);

                P(C, B) <= -1 && (M = Math.PI), 1 <= P(C, B) && (M = 0);
                var T = 1 - d ? 1 : -1,
                    S = w + T * (M / 2),
                    V = new D.Point(x.x + u * Math.cos(S), x.y + c * Math.sin(S));

                if (e.addMarkerAngle(V, S - T * Math.PI / 2), e.addMarkerAngle(l, S - T * Math.PI), i.addPoint(l.x, l.y), null != t && !isNaN(w) && !isNaN(M)) {
                  P = c < u ? u : c;
                  var k = c < u ? 1 : u / c,
                      A = c < u ? c / u : 1;
                  t.translate(x.x, x.y), t.rotate(f), t.scale(k, A), t.arc(0, 0, P, w, w + M, 1 - d), t.scale(1 / k, 1 / A), t.rotate(-f), t.translate(-x.x, -x.y);
                }
              }

              break;

            case "Z":
            case "z":
              null != t && i.x1 !== i.x2 && i.y1 !== i.y2 && t.closePath(), e.current = e.start;
          }

          return i;
        }, this.getMarkers = function () {
          for (var t = this.PathParser.getMarkerPoints(), e = this.PathParser.getMarkerAngles(), i = [], n = 0; n < t.length; n++) i.push([t[n], e[n]]);

          return i;
        };
      }, D.Element.path.prototype = new D.Element.PathElementBase(), D.Element.pattern = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.createPattern = function (t, e, i) {
          var n = this.attribute("width").toPixels("x", !0),
              s = this.attribute("height").toPixels("y", !0),
              a = new D.Element.svg();
          a.attributes.viewBox = new D.Property("viewBox", this.attribute("viewBox").value), a.attributes.width = new D.Property("width", n + "px"), a.attributes.height = new D.Property("height", s + "px"), a.attributes.transform = new D.Property("transform", this.attribute("patternTransform").value), a.children = this.children;
          var r = d(n, s),
              o = r.getContext("2d");
          this.attribute("x").hasValue() && this.attribute("y").hasValue() && o.translate(this.attribute("x").toPixels("x", !0), this.attribute("y").toPixels("y", !0)), i.hasValue() ? this.styles["fill-opacity"] = i : delete this.styles["fill-opacity"];

          for (var h = -1; h <= 1; h++) for (var l = -1; l <= 1; l++) o.save(), a.attributes.x = new D.Property("x", h * r.width), a.attributes.y = new D.Property("y", l * r.height), a.render(o), o.restore();

          return t.createPattern(r, "repeat");
        };
      }, D.Element.pattern.prototype = new D.Element.ElementBase(), D.Element.marker = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.baseRender = this.render, this.render = function (t, e, i) {
          if (e) {
            t.translate(e.x, e.y), "auto" == this.attribute("orient").valueOrDefault("auto") && t.rotate(i), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && t.scale(t.lineWidth, t.lineWidth), t.save();
            var n = new D.Element.svg();
            n.attributes.viewBox = new D.Property("viewBox", this.attribute("viewBox").value), n.attributes.refX = new D.Property("refX", this.attribute("refX").value), n.attributes.refY = new D.Property("refY", this.attribute("refY").value), n.attributes.width = new D.Property("width", this.attribute("markerWidth").value), n.attributes.height = new D.Property("height", this.attribute("markerHeight").value), n.attributes.fill = new D.Property("fill", this.attribute("fill").valueOrDefault("black")), n.attributes.stroke = new D.Property("stroke", this.attribute("stroke").valueOrDefault("none")), n.children = this.children, n.render(t), t.restore(), "strokeWidth" == this.attribute("markerUnits").valueOrDefault("strokeWidth") && t.scale(1 / t.lineWidth, 1 / t.lineWidth), "auto" == this.attribute("orient").valueOrDefault("auto") && t.rotate(-i), t.translate(-e.x, -e.y);
          }
        };
      }, D.Element.marker.prototype = new D.Element.ElementBase(), D.Element.defs = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.render = function () {};
      }, D.Element.defs.prototype = new D.Element.ElementBase(), D.Element.GradientBase = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.stops = [];

        for (var e = 0; e < this.children.length; e++) {
          var i = this.children[e];
          "stop" == i.type && this.stops.push(i);
        }

        this.getGradient = function () {}, this.gradientUnits = function () {
          return this.attribute("gradientUnits").valueOrDefault("objectBoundingBox");
        }, this.attributesToInherit = ["gradientUnits"], this.inheritStopContainer = function (t) {
          for (var e = 0; e < this.attributesToInherit.length; e++) {
            var i = this.attributesToInherit[e];
            !this.attribute(i).hasValue() && t.attribute(i).hasValue() && (this.attribute(i, !0).value = t.attribute(i).value);
          }
        }, this.createGradient = function (t, e, i) {
          var n = this;
          this.getHrefAttribute().hasValue() && (n = this.getHrefAttribute().getDefinition(), this.inheritStopContainer(n));

          var s = function (t) {
            return i.hasValue() ? new D.Property("color", t).addOpacity(i).value : t;
          },
              a = this.getGradient(t, e);

          if (null == a) return s(n.stops[n.stops.length - 1].color);

          for (var r = 0; r < n.stops.length; r++) a.addColorStop(n.stops[r].offset, s(n.stops[r].color));

          if (this.attribute("gradientTransform").hasValue()) {
            var o = D.ViewPort.viewPorts[0],
                h = new D.Element.rect();
            h.attributes.x = new D.Property("x", -D.MAX_VIRTUAL_PIXELS / 3), h.attributes.y = new D.Property("y", -D.MAX_VIRTUAL_PIXELS / 3), h.attributes.width = new D.Property("width", D.MAX_VIRTUAL_PIXELS), h.attributes.height = new D.Property("height", D.MAX_VIRTUAL_PIXELS);
            var l = new D.Element.g();
            l.attributes.transform = new D.Property("transform", this.attribute("gradientTransform").value), l.children = [h];
            var u = new D.Element.svg();
            u.attributes.x = new D.Property("x", 0), u.attributes.y = new D.Property("y", 0), u.attributes.width = new D.Property("width", o.width), u.attributes.height = new D.Property("height", o.height), u.children = [l];
            var c = d(o.width, o.height),
                f = c.getContext("2d");
            return f.fillStyle = a, u.render(f), f.createPattern(c, "no-repeat");
          }

          return a;
        };
      }, D.Element.GradientBase.prototype = new D.Element.ElementBase(), D.Element.linearGradient = function (t) {
        this.base = D.Element.GradientBase, this.base(t), this.attributesToInherit.push("x1"), this.attributesToInherit.push("y1"), this.attributesToInherit.push("x2"), this.attributesToInherit.push("y2"), this.getGradient = function (t, e) {
          var i = "objectBoundingBox" == this.gradientUnits() ? e.getBoundingBox(t) : null;
          this.attribute("x1").hasValue() || this.attribute("y1").hasValue() || this.attribute("x2").hasValue() || this.attribute("y2").hasValue() || (this.attribute("x1", !0).value = 0, this.attribute("y1", !0).value = 0, this.attribute("x2", !0).value = 1, this.attribute("y2", !0).value = 0);
          var n = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("x1").numValue() : this.attribute("x1").toPixels("x"),
              s = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("y1").numValue() : this.attribute("y1").toPixels("y"),
              a = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("x2").numValue() : this.attribute("x2").toPixels("x"),
              r = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("y2").numValue() : this.attribute("y2").toPixels("y");
          return n == a && s == r ? null : t.createLinearGradient(n, s, a, r);
        };
      }, D.Element.linearGradient.prototype = new D.Element.GradientBase(), D.Element.radialGradient = function (t) {
        this.base = D.Element.GradientBase, this.base(t), this.attributesToInherit.push("cx"), this.attributesToInherit.push("cy"), this.attributesToInherit.push("r"), this.attributesToInherit.push("fx"), this.attributesToInherit.push("fy"), this.attributesToInherit.push("fr"), this.getGradient = function (t, e) {
          var i = e.getBoundingBox(t);
          this.attribute("cx").hasValue() || (this.attribute("cx", !0).value = "50%"), this.attribute("cy").hasValue() || (this.attribute("cy", !0).value = "50%"), this.attribute("r").hasValue() || (this.attribute("r", !0).value = "50%");
          var n = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("cx").numValue() : this.attribute("cx").toPixels("x"),
              s = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("cy").numValue() : this.attribute("cy").toPixels("y"),
              a = n,
              r = s;
          this.attribute("fx").hasValue() && (a = "objectBoundingBox" == this.gradientUnits() ? i.x() + i.width() * this.attribute("fx").numValue() : this.attribute("fx").toPixels("x")), this.attribute("fy").hasValue() && (r = "objectBoundingBox" == this.gradientUnits() ? i.y() + i.height() * this.attribute("fy").numValue() : this.attribute("fy").toPixels("y"));
          var o = "objectBoundingBox" == this.gradientUnits() ? (i.width() + i.height()) / 2 * this.attribute("r").numValue() : this.attribute("r").toPixels(),
              h = this.attribute("fr").toPixels();
          return t.createRadialGradient(a, r, h, n, s, o);
        };
      }, D.Element.radialGradient.prototype = new D.Element.GradientBase(), D.Element.stop = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.offset = this.attribute("offset").numValue(), this.offset < 0 && (this.offset = 0), 1 < this.offset && (this.offset = 1);
        var e = this.style("stop-color", !0);
        "" === e.value && (e.value = "#000"), this.style("stop-opacity").hasValue() && (e = e.addOpacity(this.style("stop-opacity"))), this.color = e.value;
      }, D.Element.stop.prototype = new D.Element.ElementBase(), D.Element.AnimateBase = function (t) {
        this.base = D.Element.ElementBase, this.base(t), D.Animations.push(this), this.duration = 0, this.begin = this.attribute("begin").toMilliseconds(), this.maxDuration = this.begin + this.attribute("dur").toMilliseconds(), this.getProperty = function () {
          var t = this.attribute("attributeType").value,
              e = this.attribute("attributeName").value;
          return "CSS" == t ? this.parent.style(e, !0) : this.parent.attribute(e, !0);
        }, this.initialValue = null, this.initialUnits = "", this.removed = !1, this.calcValue = function () {
          return "";
        }, this.update = function (t) {
          if (null == this.initialValue && (this.initialValue = this.getProperty().value, this.initialUnits = this.getProperty().getUnits()), this.duration > this.maxDuration) {
            if ("indefinite" == this.attribute("repeatCount").value || "indefinite" == this.attribute("repeatDur").value) this.duration = 0;else if ("freeze" != this.attribute("fill").valueOrDefault("remove") || this.frozen) {
              if ("remove" == this.attribute("fill").valueOrDefault("remove") && !this.removed) return this.removed = !0, this.getProperty().value = this.parent.animationFrozen ? this.parent.animationFrozenValue : this.initialValue, !0;
            } else this.frozen = !0, this.parent.animationFrozen = !0, this.parent.animationFrozenValue = this.getProperty().value;
            return !1;
          }

          this.duration = this.duration + t;
          var e = !1;

          if (this.begin < this.duration) {
            var i = this.calcValue();
            if (this.attribute("type").hasValue()) i = this.attribute("type").value + "(" + i + ")";
            this.getProperty().value = i, e = !0;
          }

          return e;
        }, this.from = this.attribute("from"), this.to = this.attribute("to"), this.values = this.attribute("values"), this.values.hasValue() && (this.values.value = this.values.value.split(";")), this.progress = function () {
          var t = {
            progress: (this.duration - this.begin) / (this.maxDuration - this.begin)
          };

          if (this.values.hasValue()) {
            var e = t.progress * (this.values.value.length - 1),
                i = Math.floor(e),
                n = Math.ceil(e);
            t.from = new D.Property("from", parseFloat(this.values.value[i])), t.to = new D.Property("to", parseFloat(this.values.value[n])), t.progress = (e - i) / (n - i);
          } else t.from = this.from, t.to = this.to;

          return t;
        };
      }, D.Element.AnimateBase.prototype = new D.Element.ElementBase(), D.Element.animate = function (t) {
        this.base = D.Element.AnimateBase, this.base(t), this.calcValue = function () {
          var t = this.progress(),
              e = t.from.numValue() + (t.to.numValue() - t.from.numValue()) * t.progress;
          return "%" === this.initialUnits && (e *= 100), e + this.initialUnits;
        };
      }, D.Element.animate.prototype = new D.Element.AnimateBase(), D.Element.animateColor = function (t) {
        this.base = D.Element.AnimateBase, this.base(t), this.calcValue = function () {
          var t = this.progress(),
              e = new y(t.from.value),
              i = new y(t.to.value);

          if (e.ok && i.ok) {
            var n = e.r + (i.r - e.r) * t.progress,
                s = e.g + (i.g - e.g) * t.progress,
                a = e.b + (i.b - e.b) * t.progress;
            return "rgb(" + parseInt(n, 10) + "," + parseInt(s, 10) + "," + parseInt(a, 10) + ")";
          }

          return this.attribute("from").value;
        };
      }, D.Element.animateColor.prototype = new D.Element.AnimateBase(), D.Element.animateTransform = function (t) {
        this.base = D.Element.AnimateBase, this.base(t), this.calcValue = function () {
          for (var t = this.progress(), e = D.ToNumberArray(t.from.value), i = D.ToNumberArray(t.to.value), n = "", s = 0; s < e.length; s++) n += e[s] + (i[s] - e[s]) * t.progress + " ";

          return n;
        };
      }, D.Element.animateTransform.prototype = new D.Element.animate(), D.Element.font = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.isRTL = !1, this.isArabic = !1, this.fontFace = null, this.missingGlyph = null, this.glyphs = [];

        for (var e = 0; e < this.children.length; e++) {
          var i = this.children[e];
          "font-face" == i.type ? (this.fontFace = i).style("font-family").hasValue() && (D.Definitions[i.style("font-family").value] = this) : "missing-glyph" == i.type ? this.missingGlyph = i : "glyph" == i.type && ("" != i.arabicForm ? (this.isRTL = !0, this.isArabic = !0, void 0 === this.glyphs[i.unicode] && (this.glyphs[i.unicode] = []), this.glyphs[i.unicode][i.arabicForm] = i) : this.glyphs[i.unicode] = i);
        }

        this.render = function () {};
      }, D.Element.font.prototype = new D.Element.ElementBase(), D.Element.fontface = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.ascent = this.attribute("ascent").value, this.descent = this.attribute("descent").value, this.unitsPerEm = this.attribute("units-per-em").numValue();
      }, D.Element.fontface.prototype = new D.Element.ElementBase(), D.Element.missingglyph = function (t) {
        this.base = D.Element.path, this.base(t), this.horizAdvX = 0;
      }, D.Element.missingglyph.prototype = new D.Element.path(), D.Element.glyph = function (t) {
        this.base = D.Element.path, this.base(t), this.horizAdvX = this.attribute("horiz-adv-x").numValue(), this.unicode = this.attribute("unicode").value, this.arabicForm = this.attribute("arabic-form").value;
      }, D.Element.glyph.prototype = new D.Element.path(), D.Element.text = function (t) {
        this.captureTextNodes = !0, this.base = D.Element.RenderedElementBase, this.base(t), this.baseSetContext = this.setContext, this.setContext = function (t) {
          this.baseSetContext(t);
          var e = this.style("dominant-baseline").toTextBaseline();
          null == e && (e = this.style("alignment-baseline").toTextBaseline()), null != e && (t.textBaseline = e);
        }, this.initializeCoordinates = function (t) {
          this.x = this.attribute("x").toPixels("x"), this.y = this.attribute("y").toPixels("y"), this.attribute("dx").hasValue() && (this.x += this.attribute("dx").toPixels("x")), this.attribute("dy").hasValue() && (this.y += this.attribute("dy").toPixels("y")), this.x += this.getAnchorDelta(t, this, 0);
        }, this.getBoundingBox = function (t) {
          this.initializeCoordinates(t);

          for (var e = null, i = 0; i < this.children.length; i++) {
            var n = this.getChildBoundingBox(t, this, this, i);
            null == e ? e = n : e.addBoundingBox(n);
          }

          return e;
        }, this.renderChildren = function (t) {
          this.initializeCoordinates(t);

          for (var e = 0; e < this.children.length; e++) this.renderChild(t, this, this, e);

          D.Mouse.checkBoundingBox(this, this.getBoundingBox(t));
        }, this.getAnchorDelta = function (t, e, i) {
          var n = this.style("text-anchor").valueOrDefault("start");
          if ("start" == n) return 0;

          for (var s = 0, a = i; a < e.children.length; a++) {
            var r = e.children[a];
            if (i < a && r.attribute("x").hasValue()) break;
            s += r.measureTextRecursive(t);
          }

          return -1 * ("end" == n ? s : s / 2);
        }, this.adjustChildCoordinates = function (t, e, i, n) {
          var s = i.children[n];
          if ("function" != typeof s.measureText) return s;

          if (s.attribute("x").hasValue()) {
            s.x = s.attribute("x").toPixels("x") + e.getAnchorDelta(t, i, n);
            var a = s.attribute("text-anchor").valueOrDefault("start");

            if ("start" !== a) {
              var r = s.measureTextRecursive(t);
              s.x += -1 * ("end" == a ? r : r / 2);
            }

            s.attribute("dx").hasValue() && (s.x += s.attribute("dx").toPixels("x"));
          } else s.attribute("dx").hasValue() && (e.x += s.attribute("dx").toPixels("x")), s.x = e.x;

          return e.x = s.x + s.measureText(t), s.attribute("y").hasValue() ? (s.y = s.attribute("y").toPixels("y"), s.attribute("dy").hasValue() && (s.y += s.attribute("dy").toPixels("y"))) : (s.attribute("dy").hasValue() && (e.y += s.attribute("dy").toPixels("y")), s.y = e.y), e.y = s.y, s;
        }, this.getChildBoundingBox = function (t, e, i, n) {
          var s = this.adjustChildCoordinates(t, e, i, n),
              a = s.getBoundingBox(t);

          for (n = 0; n < s.children.length; n++) {
            var r = e.getChildBoundingBox(t, e, s, n);
            a.addBoundingBox(r);
          }

          return a;
        }, this.renderChild = function (t, e, i, n) {
          var s = this.adjustChildCoordinates(t, e, i, n);
          s.render(t);

          for (n = 0; n < s.children.length; n++) e.renderChild(t, e, s, n);
        };
      }, D.Element.text.prototype = new D.Element.RenderedElementBase(), D.Element.TextElementBase = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t), this.getGlyph = function (t, e, i) {
          var n = e[i],
              s = null;

          if (t.isArabic) {
            var a = "isolated";
            (0 == i || " " == e[i - 1]) && i < e.length - 2 && " " != e[i + 1] && (a = "terminal"), 0 < i && " " != e[i - 1] && i < e.length - 2 && " " != e[i + 1] && (a = "medial"), 0 < i && " " != e[i - 1] && (i == e.length - 1 || " " == e[i + 1]) && (a = "initial"), void 0 !== t.glyphs[n] && null == (s = t.glyphs[n][a]) && "glyph" == t.glyphs[n].type && (s = t.glyphs[n]);
          } else s = t.glyphs[n];

          return null == s && (s = t.missingGlyph), s;
        }, this.renderChildren = function (t) {
          var e = this.parent.style("font-family").getDefinition();
          if (null == e) "stroke" == t.paintOrder ? ("" != t.strokeStyle && t.strokeText(D.compressSpaces(this.getText()), this.x, this.y), "" != t.fillStyle && t.fillText(D.compressSpaces(this.getText()), this.x, this.y)) : ("" != t.fillStyle && t.fillText(D.compressSpaces(this.getText()), this.x, this.y), "" != t.strokeStyle && t.strokeText(D.compressSpaces(this.getText()), this.x, this.y));else {
            var i = this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize),
                n = this.parent.style("font-style").valueOrDefault(D.Font.Parse(D.ctx.font).fontStyle),
                s = this.getText();
            e.isRTL && (s = s.split("").reverse().join(""));

            for (var a = D.ToNumberArray(this.parent.attribute("dx").value), r = 0; r < s.length; r++) {
              var o = this.getGlyph(e, s, r),
                  h = i / e.fontFace.unitsPerEm;
              t.translate(this.x, this.y), t.scale(h, -h);
              var l = t.lineWidth;
              t.lineWidth = t.lineWidth * e.fontFace.unitsPerEm / i, "italic" == n && t.transform(1, 0, .4, 1, 0, 0), o.render(t), "italic" == n && t.transform(1, 0, -.4, 1, 0, 0), t.lineWidth = l, t.scale(1 / h, -1 / h), t.translate(-this.x, -this.y), this.x += i * (o.horizAdvX || e.horizAdvX) / e.fontFace.unitsPerEm, void 0 === a[r] || isNaN(a[r]) || (this.x += a[r]);
            }
          }
        }, this.getText = function () {}, this.measureTextRecursive = function (t) {
          for (var e = this.measureText(t), i = 0; i < this.children.length; i++) e += this.children[i].measureTextRecursive(t);

          return e;
        }, this.measureText = function (t) {
          var e = this.parent.style("font-family").getDefinition();

          if (null != e) {
            var i = this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize),
                n = 0,
                s = this.getText();
            e.isRTL && (s = s.split("").reverse().join(""));

            for (var a = D.ToNumberArray(this.parent.attribute("dx").value), r = 0; r < s.length; r++) {
              n += (this.getGlyph(e, s, r).horizAdvX || e.horizAdvX) * i / e.fontFace.unitsPerEm, void 0 === a[r] || isNaN(a[r]) || (n += a[r]);
            }

            return n;
          }

          var o = D.compressSpaces(this.getText());
          if (!t.measureText) return 10 * o.length;
          t.save(), this.setContext(t, !0);
          var h = t.measureText(o).width;
          return t.restore(), h;
        }, this.getBoundingBox = function (t) {
          var e = this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize);
          return new D.BoundingBox(this.x, this.y - e, this.x + this.measureText(t), this.y);
        };
      }, D.Element.TextElementBase.prototype = new D.Element.RenderedElementBase(), D.Element.tspan = function (t) {
        this.captureTextNodes = !0, this.base = D.Element.TextElementBase, this.base(t), this.text = D.compressSpaces(t.value || t.text || t.textContent || ""), this.getText = function () {
          return 0 < this.children.length ? "" : this.text;
        };
      }, D.Element.tspan.prototype = new D.Element.TextElementBase(), D.Element.tref = function (t) {
        this.base = D.Element.TextElementBase, this.base(t), this.getText = function () {
          var t = this.getHrefAttribute().getDefinition();
          if (null != t) return t.children[0].getText();
        };
      }, D.Element.tref.prototype = new D.Element.TextElementBase(), D.Element.a = function (t) {
        this.base = D.Element.TextElementBase, this.base(t), this.hasText = 0 < t.childNodes.length;

        for (var e = 0; e < t.childNodes.length; e++) 3 != t.childNodes[e].nodeType && (this.hasText = !1);

        this.text = this.hasText ? t.childNodes[0].value || t.childNodes[0].data : "", this.getText = function () {
          return this.text;
        }, this.baseRenderChildren = this.renderChildren, this.renderChildren = function (t) {
          if (this.hasText) {
            this.baseRenderChildren(t);
            var e = new D.Property("fontSize", D.Font.Parse(D.ctx.font).fontSize);
            D.Mouse.checkBoundingBox(this, new D.BoundingBox(this.x, this.y - e.toPixels("y"), this.x + this.measureText(t), this.y));
          } else if (0 < this.children.length) {
            var i = new D.Element.g();
            i.children = this.children, i.parent = this, i.render(t);
          }
        }, this.onclick = function () {
          l.open(this.getHrefAttribute().value);
        }, this.onmousemove = function () {
          D.ctx.canvas.style.cursor = "pointer";
        };
      }, D.Element.a.prototype = new D.Element.TextElementBase(), D.Element.textPath = function (t) {
        this.base = D.Element.TextElementBase, this.base(t);
        var e = this.getHrefAttribute().getDefinition();
        this.text = D.compressSpaces(t.value || t.text || t.textContent || ""), this.renderChildren = function (t) {
          this.setTextData(t), t.save();
          var e = this.parent.style("text-decoration").value,
              i = this.fontSize(),
              n = this.glyphInfo,
              s = t.fillStyle;
          "underline" === e && t.beginPath();

          for (var a = 0; a < n.length; a++) {
            var r = n[a].p0,
                o = n[a].p1,
                h = n[a].text;
            t.save(), t.translate(r.x, r.y), t.rotate(n[a].rotation), "" != t.fillStyle && t.fillText(D.compressSpaces(h), 0, 0), "" != t.strokeStyle && t.strokeText(D.compressSpaces(h), 0, 0), t.restore(), "underline" === e && (0 === a && t.moveTo(r.x, r.y + i / 8), t.lineTo(o.x, o.y + i / 5));
          }

          "underline" === e && (t.lineWidth = i / 20, t.strokeStyle = s, t.stroke(), t.closePath()), t.restore();
        }, this.path = function (t) {
          var e = this.dataArray;
          null != t && t.beginPath();

          for (var i = 0; i < e.length; i++) {
            var n = e[i].command,
                s = e[i].points;

            switch (n) {
              case "L":
                null != t && t.lineTo(s[0], s[1]);
                break;

              case "M":
                null != t && t.moveTo(s[0], s[1]);
                break;

              case "C":
                null != t && t.bezierCurveTo(s[0], s[1], s[2], s[3], s[4], s[5]);
                break;

              case "Q":
                null != t && t.quadraticCurveTo(s[0], s[1], s[2], s[3]);
                break;

              case "A":
                var a = s[0],
                    r = s[1],
                    o = s[2],
                    h = s[3],
                    l = s[4],
                    u = s[5],
                    c = s[6],
                    f = s[7],
                    p = h < o ? o : h,
                    d = h < o ? 1 : o / h,
                    m = h < o ? h / o : 1;
                null != t && (t.translate(a, r), t.rotate(c), t.scale(d, m), t.arc(0, 0, p, l, l + u, 1 - f), t.scale(1 / d, 1 / m), t.rotate(-c), t.translate(-a, -r));
                break;

              case "z":
                null != t && t.closePath();
            }
          }
        }, this.getText = function () {
          return this.text;
        }, this.fontSize = function () {
          return this.parent.style("font-size").numValueOrDefault(D.Font.Parse(D.ctx.font).fontSize);
        }, this.measureText = function (t, e) {
          var i = this.parent.style("font-family").getDefinition();

          if (e = e || this.getText(), null != i) {
            var n = this.fontSize(),
                s = 0;
            i.isRTL && (e = e.split("").reverse().join(""));

            for (var a = D.ToNumberArray(this.parent.attribute("dx").value), r = 0; r < e.length; r++) {
              s += (this.getGlyph(i, e, r).horizAdvX || i.horizAdvX) * n / i.fontFace.unitsPerEm, void 0 === a[r] || isNaN(a[r]) || (s += a[r]);
            }

            return s;
          }

          var o = D.compressSpaces(e);
          if (!t.measureText) return 10 * o.length;
          t.save(), this.setContext(t);
          var h = t.measureText(o).width;
          return t.restore(), h;
        }, this.setTextData = function (r) {
          if (!this.hasOwnProperty("glyphInfo")) {
            var o = this,
                t = this.getText().split(""),
                h = this.getText().split(" ").length - 1,
                e = D.ToNumberArray(this.parent.attribute("dx").valueOrDefault("0")),
                i = 0,
                l = this.parent.style("text-anchor").valueOrDefault("start"),
                n = this.style("letter-spacing"),
                s = this.parent.style("letter-spacing");
            n.hasValue() && "inherit" !== n.getValue() ? n.hasValue() && "initial" !== n.getValue() && "unset" !== n.getValue() && (i = n.toPixels()) : i = s.toPixels(), this.letterSpacingCache = [];

            for (var a = 0; a < this.getText().length; a++) this.letterSpacingCache.push(void 0 !== e[a] ? e[a] : i);

            var u = this.letterSpacingCache.reduce(function (t, e) {
              return t + e || 0;
            }, 0);
            this.textWidth = this.measureText(r), this.textHeight = this.fontSize();
            var c = Math.max(this.textWidth + u, 0);
            this.glyphInfo = [];
            var f = this.getPathLength(),
                p = this.style("startOffset").numValueOrDefault(0) * f,
                d = 0;
            "middle" !== l && "center" !== l || (d = -c / 2), "end" !== l && "right" !== l || (d = -c), d += p;

            var m = function (t, e) {
              var i,
                  n = o.measureText(r, t);
              " " === t && "justify" === l && c < f && (n += (f - c) / h), -1 < e && (d += (i = (i = e) || 0, o.letterSpacingCache[i] || 0));
              var s = o.textHeight / 20,
                  a = {
                p0: o.getEquidistantPointOnPath(d, s),
                p1: o.getEquidistantPointOnPath(d + n, s)
              };
              return d += n, a;
            };

            for (a = 0; a < t.length; a++) {
              var y = m(t[a], a);

              if (void 0 !== y.p0 && void 0 !== y.p1) {
                var v = o.getLineLength(y.p0.x, y.p0.y, y.p1.x, y.p1.y),
                    g = o.getPointOnLine(0 + v / 2, y.p0.x, y.p0.y, y.p1.x, y.p1.y),
                    x = Math.atan2(y.p1.y - y.p0.y, y.p1.x - y.p0.x);
                this.glyphInfo.push({
                  transposeX: g.x,
                  transposeY: g.y,
                  text: t[a],
                  rotation: x,
                  p0: y.p0,
                  p1: y.p1
                });
              }
            }
          }
        }, this.parsePathData = function (t) {
          if (this.pathLength = void 0, !t) return [];
          var e = [],
              i = t.PathParser;

          for (i.reset(); !i.isEnd();) {
            var n = [],
                s = null,
                a = i.current ? i.current.x : 0,
                r = i.current ? i.current.y : 0;
            i.nextCommand();
            var o = i.command.toUpperCase();

            switch (i.command) {
              case "M":
              case "m":
                var h = i.getAsCurrentPoint();

                for (n.push(h.x, h.y), i.start = i.current; !i.isCommandOrEnd();) {
                  h = i.getAsCurrentPoint();
                  n.push(h.x, h.y), s = "L";
                }

                break;

              case "L":
              case "l":
                for (; !i.isCommandOrEnd();) {
                  h = i.getAsCurrentPoint();
                  n.push(h.x, h.y);
                }

                s = "L";
                break;

              case "H":
              case "h":
                for (; !i.isCommandOrEnd();) {
                  var l = new D.Point((i.isRelativeCommand() ? i.current.x : 0) + i.getScalar(), i.current.y);
                  n.push(l.x, l.y), i.current = l;
                }

                s = "L";
                break;

              case "V":
              case "v":
                for (; !i.isCommandOrEnd();) {
                  l = new D.Point(i.current.x, (i.isRelativeCommand() ? i.current.y : 0) + i.getScalar());
                  n.push(l.x, l.y), i.current = l;
                }

                s = "L";
                break;

              case "C":
              case "c":
                for (; !i.isCommandOrEnd();) {
                  var u = i.getPoint(),
                      c = i.getAsControlPoint(),
                      f = i.getAsCurrentPoint();
                  n.push(u.x, u.y, c.x, c.y, f.x, f.y);
                }

                break;

              case "S":
              case "s":
                for (; !i.isCommandOrEnd();) {
                  u = i.getReflectedControlPoint(), c = i.getAsControlPoint(), f = i.getAsCurrentPoint();
                  n.push(u.x, u.y, c.x, c.y, f.x, f.y);
                }

                s = "C";
                break;

              case "Q":
              case "q":
                for (; !i.isCommandOrEnd();) {
                  c = i.getAsControlPoint(), f = i.getAsCurrentPoint();
                  n.push(c.x, c.y, f.x, f.y);
                }

                break;

              case "T":
              case "t":
                for (; !i.isCommandOrEnd();) {
                  c = i.getReflectedControlPoint();
                  i.control = c;
                  f = i.getAsCurrentPoint();
                  n.push(c.x, c.y, f.x, f.y);
                }

                s = "Q";
                break;

              case "A":
              case "a":
                for (; !i.isCommandOrEnd();) {
                  var p = i.current,
                      d = i.getScalar(),
                      m = i.getScalar(),
                      y = i.getScalar() * (Math.PI / 180),
                      v = i.getScalar(),
                      g = i.getScalar(),
                      x = (f = i.getAsCurrentPoint(), new D.Point(Math.cos(y) * (p.x - f.x) / 2 + Math.sin(y) * (p.y - f.y) / 2, -Math.sin(y) * (p.x - f.x) / 2 + Math.cos(y) * (p.y - f.y) / 2)),
                      b = Math.pow(x.x, 2) / Math.pow(d, 2) + Math.pow(x.y, 2) / Math.pow(m, 2);
                  1 < b && (d *= Math.sqrt(b), m *= Math.sqrt(b));
                  var P = (v == g ? -1 : 1) * Math.sqrt((Math.pow(d, 2) * Math.pow(m, 2) - Math.pow(d, 2) * Math.pow(x.y, 2) - Math.pow(m, 2) * Math.pow(x.x, 2)) / (Math.pow(d, 2) * Math.pow(x.y, 2) + Math.pow(m, 2) * Math.pow(x.x, 2)));
                  isNaN(P) && (P = 0);

                  var E = new D.Point(P * d * x.y / m, P * -m * x.x / d),
                      w = new D.Point((p.x + f.x) / 2 + Math.cos(y) * E.x - Math.sin(y) * E.y, (p.y + f.y) / 2 + Math.sin(y) * E.x + Math.cos(y) * E.y),
                      C = function (t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2));
                  },
                      B = function (t, e) {
                    return (t[0] * e[0] + t[1] * e[1]) / (C(t) * C(e));
                  },
                      M = function (t, e) {
                    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(B(t, e));
                  },
                      T = M([1, 0], [(x.x - E.x) / d, (x.y - E.y) / m]),
                      S = [(x.x - E.x) / d, (x.y - E.y) / m],
                      V = [(-x.x - E.x) / d, (-x.y - E.y) / m],
                      k = M(S, V);

                  B(S, V) <= -1 && (k = Math.PI), 1 <= B(S, V) && (k = 0), 0 === g && 0 < k && (k -= 2 * Math.PI), 1 === g && k < 0 && (k += 2 * Math.PI), n = [w.x, w.y, d, m, T, k, y, g];
                }

                break;

              case "Z":
              case "z":
                i.current = i.start;
            }

            "Z" !== o ? e.push({
              command: s || o,
              points: n,
              start: {
                x: a,
                y: r
              },
              pathLength: this.calcLength(a, r, s || o, n)
            }) : e.push({
              command: "z",
              points: [],
              start: void 0,
              pathLength: 0
            });
          }

          return e;
        }, this.getPathLength = function () {
          if (void 0 === this.pathLength || null === this.pathLength || isNaN(this.pathLength)) for (var t = this.pathLength = 0; t < this.dataArray.length; t++) 0 < this.dataArray[t].pathLength && (this.pathLength += this.dataArray[t].pathLength);
          return this.pathLength;
        }, this.getPointOnPath = function (t) {
          var e = 0,
              i = this.getPathLength(),
              n = void 0;
          if (!(t < -5e-5 || i < t - 5e-5)) for (var s = 0; s < this.dataArray.length; s++) {
            var a = this.dataArray[s];

            if (!a || !(a.pathLength < 5e-5 || e + a.pathLength + 5e-5 < t)) {
              var r = t - e,
                  o = void 0;

              switch (a.command) {
                case "L":
                  n = this.getPointOnLine(r, a.start.x, a.start.y, a.points[0], a.points[1], a.start.x, a.start.y);
                  break;

                case "A":
                  var h = a.points[4],
                      l = a.points[5],
                      u = a.points[4] + l;
                  if (o = h + r / a.pathLength * l, l < 0 && o < u || 0 <= l && u < o) break;
                  n = this.getPointOnEllipticalArc(a.points[0], a.points[1], a.points[2], a.points[3], o, a.points[6]);
                  break;

                case "C":
                  1 < (o = r / a.pathLength) && (o = 1), n = this.getPointOnCubicBezier(o, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3], a.points[4], a.points[5]);
                  break;

                case "Q":
                  1 < (o = r / a.pathLength) && (o = 1), n = this.getPointOnQuadraticBezier(o, a.start.x, a.start.y, a.points[0], a.points[1], a.points[2], a.points[3]);
              }

              if (void 0 !== n && n !== {}) return n;
              break;
            }

            e += a.pathLength;
          }
        }, this.buildEquidistantCache = function (t, e) {
          var i = this.getPathLength();

          if (e = e || .25, t = t || i / 100, this.equidistantCache = this.equidistantCache || {}, !this.equidistantCache.hasOwnProperty("points") || this.equidistantCache.step != t || this.equidistantCache.precision != e) {
            this.equidistantCache = {
              step: t,
              precision: e,
              points: []
            };

            for (var n = 0, s = 0; s <= i; s += e) {
              var a = this.getPointOnPath(s),
                  r = this.getPointOnPath(s + e);
              void 0 !== a && void 0 !== r && t <= (n += this.getLineLength(a.x, a.y, r.x, r.y)) && (this.equidistantCache.points.push({
                x: a.x,
                y: a.y,
                distance: s
              }), n -= t);
            }
          }
        }, this.getEquidistantPointOnPath = function (t, e, i) {
          if (this.buildEquidistantCache(e, i), !(t < 0 || 5e-5 < t - this.getPathLength())) {
            var n = Math.round(t / this.getPathLength() * (this.equidistantCache.points.length - 1));
            return this.equidistantCache.points[n] || void 0;
          }
        }, this.getLineLength = function (t, e, i, n) {
          return Math.sqrt((i - t) * (i - t) + (n - e) * (n - e));
        }, this.getPointOnLine = function (t, e, i, n, s, a, r) {
          void 0 === a && (a = e), void 0 === r && (r = i);
          var o = (s - i) / (n - e + 1e-8),
              h = Math.sqrt(t * t / (1 + o * o));
          n < e && (h *= -1);
          var l,
              u = o * h;
          if (n === e) l = {
            x: a,
            y: r + u
          };else if ((r - i) / (a - e + 1e-8) === o) l = {
            x: a + h,
            y: r + u
          };else {
            var c,
                f,
                p = this.getLineLength(e, i, n, s);
            if (p < 1e-8) return;
            var d = (a - e) * (n - e) + (r - i) * (s - i);
            c = e + (d /= p * p) * (n - e), f = i + d * (s - i);
            var m = this.getLineLength(a, r, c, f),
                y = Math.sqrt(t * t - m * m);
            h = Math.sqrt(y * y / (1 + o * o)), n < e && (h *= -1), l = {
              x: c + h,
              y: f + (u = o * h)
            };
          }
          return l;
        }, this.getPointOnCubicBezier = function (t, e, i, n, s, a, r, o, h) {
          function l(t) {
            return t * t * t;
          }

          function u(t) {
            return 3 * t * t * (1 - t);
          }

          function c(t) {
            return 3 * t * (1 - t) * (1 - t);
          }

          function f(t) {
            return (1 - t) * (1 - t) * (1 - t);
          }

          return {
            x: o * l(t) + a * u(t) + n * c(t) + e * f(t),
            y: h * l(t) + r * u(t) + s * c(t) + i * f(t)
          };
        }, this.getPointOnQuadraticBezier = function (t, e, i, n, s, a, r) {
          function o(t) {
            return t * t;
          }

          function h(t) {
            return 2 * t * (1 - t);
          }

          function l(t) {
            return (1 - t) * (1 - t);
          }

          return {
            x: a * o(t) + n * h(t) + e * l(t),
            y: r * o(t) + s * h(t) + i * l(t)
          };
        }, this.getPointOnEllipticalArc = function (t, e, i, n, s, a) {
          var r = Math.cos(a),
              o = Math.sin(a),
              h = i * Math.cos(s),
              l = n * Math.sin(s);
          return {
            x: t + (h * r - l * o),
            y: e + (h * o + l * r)
          };
        }, this.calcLength = function (t, e, i, n) {
          var s, a, r, o;

          switch (i) {
            case "L":
              return this.getLineLength(t, e, n[0], n[1]);

            case "C":
              for (s = 0, a = this.getPointOnCubicBezier(0, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), o = .01; o <= 1; o += .01) r = this.getPointOnCubicBezier(o, t, e, n[0], n[1], n[2], n[3], n[4], n[5]), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r;

              return s;

            case "Q":
              for (s = 0, a = this.getPointOnQuadraticBezier(0, t, e, n[0], n[1], n[2], n[3]), o = .01; o <= 1; o += .01) r = this.getPointOnQuadraticBezier(o, t, e, n[0], n[1], n[2], n[3]), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r;

              return s;

            case "A":
              s = 0;
              var h = n[4],
                  l = n[5],
                  u = n[4] + l,
                  c = Math.PI / 180;
              if (Math.abs(h - u) < c && (c = Math.abs(h - u)), a = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], h, 0), l < 0) for (o = h - c; u < o; o -= c) r = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], o, 0), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r;else for (o = h + c; o < u; o += c) r = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], o, 0), s += this.getLineLength(a.x, a.y, r.x, r.y), a = r;
              return r = this.getPointOnEllipticalArc(n[0], n[1], n[2], n[3], u, 0), s += this.getLineLength(a.x, a.y, r.x, r.y);
          }

          return 0;
        }, this.dataArray = this.parsePathData(e);
      }, D.Element.textPath.prototype = new D.Element.TextElementBase(), D.Element.image = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t);
        var e = this.getHrefAttribute().value;

        if ("" != e) {
          var a = e.match(/\.svg$/);
          if (D.Images.push(this), this.loaded = !1, a) this.img = D.ajax(e), this.loaded = !0;else {
            this.img = c.createElement("img"), 1 == D.opts.useCORS && (this.img.crossOrigin = "Anonymous");
            var r = this;
            this.img.onload = function () {
              r.loaded = !0;
            }, this.img.onerror = function () {
              D.log('ERROR: image "' + e + '" not found'), r.loaded = !0;
            }, this.img.src = e;
          }
          this.renderChildren = function (t) {
            var e = this.attribute("x").toPixels("x"),
                i = this.attribute("y").toPixels("y"),
                n = this.attribute("width").toPixels("x"),
                s = this.attribute("height").toPixels("y");
            0 != n && 0 != s && (t.save(), a ? t.drawSvg(this.img, e, i, n, s) : (t.translate(e, i), D.AspectRatio(t, this.attribute("preserveAspectRatio").value, n, this.img.width, s, this.img.height, 0, 0), r.loaded && (void 0 === this.img.complete || this.img.complete) && t.drawImage(this.img, 0, 0)), t.restore());
          }, this.getBoundingBox = function () {
            var t = this.attribute("x").toPixels("x"),
                e = this.attribute("y").toPixels("y"),
                i = this.attribute("width").toPixels("x"),
                n = this.attribute("height").toPixels("y");
            return new D.BoundingBox(t, e, t + i, e + n);
          };
        }
      }, D.Element.image.prototype = new D.Element.RenderedElementBase(), D.Element.g = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t), this.getBoundingBox = function (t) {
          for (var e = new D.BoundingBox(), i = 0; i < this.children.length; i++) e.addBoundingBox(this.children[i].getBoundingBox(t));

          return e;
        };
      }, D.Element.g.prototype = new D.Element.RenderedElementBase(), D.Element.symbol = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t), this.render = function () {};
      }, D.Element.symbol.prototype = new D.Element.RenderedElementBase(), D.ParseExternalUrl = function (t) {
        var e = t.match(/url\(('([^']+)'|"([^"]+)"|([^'"\)]+))\)/) || [];
        return e[2] || e[3] || e[4];
      }, D.Element.style = function (t) {
        this.base = D.Element.ElementBase, this.base(t);

        for (var e = "", i = 0; i < t.childNodes.length; i++) e += t.childNodes[i].data;

        e = e.replace(/(\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\/)|(^[\s]*\/\/.*)/gm, "");
        var n = (e = D.compressSpaces(e)).split("}");

        for (i = 0; i < n.length; i++) if ("" != D.trim(n[i])) for (var s = n[i].split("{"), a = s[0].split(","), r = s[1].split(";"), o = 0; o < a.length; o++) {
          var h = D.trim(a[o]);

          if ("" != h) {
            for (var l = D.Styles[h] || {}, u = 0; u < r.length; u++) {
              var c = r[u].indexOf(":"),
                  f = r[u].substr(0, c),
                  p = r[u].substr(c + 1, r[u].length - c);
              null != f && null != p && (l[D.trim(f)] = new D.Property(D.trim(f), D.trim(p)));
            }

            if (D.Styles[h] = l, D.StylesSpecificity[h] = P(h), "@font-face" == h) for (var d = l["font-family"].value.replace(/"/g, ""), m = l.src.value.split(","), y = 0; y < m.length; y++) if (0 < m[y].indexOf('format("svg")')) {
              var v = D.ParseExternalUrl(m[y]);
              if (v) for (var g = D.parseXml(D.ajax(v)).getElementsByTagName("font"), x = 0; x < g.length; x++) {
                var b = D.CreateElement(g[x]);
                D.Definitions[d] = b;
              }
            }
          }
        }
      }, D.Element.style.prototype = new D.Element.ElementBase(), D.Element.use = function (t) {
        this.base = D.Element.RenderedElementBase, this.base(t), this.baseSetContext = this.setContext, this.setContext = function (t) {
          this.baseSetContext(t), this.attribute("x").hasValue() && t.translate(this.attribute("x").toPixels("x"), 0), this.attribute("y").hasValue() && t.translate(0, this.attribute("y").toPixels("y"));
        };
        var n = this.getHrefAttribute().getDefinition();
        this.path = function (t) {
          null != n && n.path(t);
        }, this.elementTransform = function () {
          if (null != n && n.style("transform", !1, !0).hasValue()) return new D.Transform(n.style("transform", !1, !0).value);
        }, this.getBoundingBox = function (t) {
          if (null != n) return n.getBoundingBox(t);
        }, this.renderChildren = function (t) {
          if (null != n) {
            var e = n;
            "symbol" == n.type && ((e = new D.Element.svg()).type = "svg", e.attributes.viewBox = new D.Property("viewBox", n.attribute("viewBox").value), e.attributes.preserveAspectRatio = new D.Property("preserveAspectRatio", n.attribute("preserveAspectRatio").value), e.attributes.overflow = new D.Property("overflow", n.attribute("overflow").value), e.children = n.children), "svg" == e.type && (this.attribute("width").hasValue() && (e.attributes.width = new D.Property("width", this.attribute("width").value)), this.attribute("height").hasValue() && (e.attributes.height = new D.Property("height", this.attribute("height").value)));
            var i = e.parent;
            e.parent = null, e.render(t), e.parent = i;
          }
        };
      }, D.Element.use.prototype = new D.Element.RenderedElementBase(), D.Element.mask = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.apply = function (t, e) {
          var i = this.attribute("x").toPixels("x"),
              n = this.attribute("y").toPixels("y"),
              s = this.attribute("width").toPixels("x"),
              a = this.attribute("height").toPixels("y");

          if (0 == s && 0 == a) {
            for (var r = new D.BoundingBox(), o = 0; o < this.children.length; o++) r.addBoundingBox(this.children[o].getBoundingBox(t));

            i = Math.floor(r.x1), n = Math.floor(r.y1), s = Math.floor(r.width()), a = Math.floor(r.height());
          }

          var h = e.style("mask").value;
          e.style("mask").value = "";
          var l = d(i + s, n + a),
              u = l.getContext("2d");
          D.SetDefaults(u), this.renderChildren(u), new D.Element.feColorMatrix({
            nodeType: 1,
            childNodes: [],
            attributes: [{
              nodeName: "type",
              value: "luminanceToAlpha"
            }, {
              nodeName: "includeOpacity",
              value: "true"
            }]
          }).apply(u, 0, 0, i + s, n + a);
          var c = d(i + s, n + a),
              f = c.getContext("2d");
          D.SetDefaults(f), e.render(f), f.globalCompositeOperation = "destination-in", f.fillStyle = u.createPattern(l, "no-repeat"), f.fillRect(0, 0, i + s, n + a), t.fillStyle = f.createPattern(c, "no-repeat"), t.fillRect(0, 0, i + s, n + a), e.style("mask").value = h;
        }, this.render = function () {};
      }, D.Element.mask.prototype = new D.Element.ElementBase(), D.Element.clipPath = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.apply = function (t) {
          var e = "undefined" != typeof CanvasRenderingContext2D,
              i = t.beginPath,
              n = t.closePath;
          e && (CanvasRenderingContext2D.prototype.beginPath = function () {}, CanvasRenderingContext2D.prototype.closePath = function () {}), i.call(t);

          for (var s = 0; s < this.children.length; s++) {
            var a = this.children[s];

            if (void 0 !== a.path) {
              var r = void 0 !== a.elementTransform && a.elementTransform();
              !r && a.style("transform", !1, !0).hasValue() && (r = new D.Transform(a.style("transform", !1, !0).value)), r && r.apply(t), a.path(t), e && (CanvasRenderingContext2D.prototype.closePath = n), r && r.unapply(t);
            }
          }

          n.call(t), t.clip(), e && (CanvasRenderingContext2D.prototype.beginPath = i, CanvasRenderingContext2D.prototype.closePath = n);
        }, this.render = function () {};
      }, D.Element.clipPath.prototype = new D.Element.ElementBase(), D.Element.filter = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.apply = function (t, e) {
          var i = e.getBoundingBox(t),
              n = Math.floor(i.x1),
              s = Math.floor(i.y1),
              a = Math.floor(i.width()),
              r = Math.floor(i.height()),
              o = e.style("filter").value;
          e.style("filter").value = "";

          for (var h = 0, l = 0, u = 0; u < this.children.length; u++) {
            var c = this.children[u].extraFilterDistance || 0;
            h = Math.max(h, c), l = Math.max(l, c);
          }

          var f = d(a + 2 * h, r + 2 * l),
              p = f.getContext("2d");
          D.SetDefaults(p), p.translate(-n + h, -s + l), e.render(p);

          for (u = 0; u < this.children.length; u++) "function" == typeof this.children[u].apply && this.children[u].apply(p, 0, 0, a + 2 * h, r + 2 * l);

          t.drawImage(f, 0, 0, a + 2 * h, r + 2 * l, n - h, s - l, a + 2 * h, r + 2 * l), e.style("filter", !0).value = o;
        }, this.render = function () {};
      }, D.Element.filter.prototype = new D.Element.ElementBase(), D.Element.feDropShadow = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.addStylesFromStyleDefinition(), this.apply = function () {};
      }, D.Element.feDropShadow.prototype = new D.Element.ElementBase(), D.Element.feMorphology = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.apply = function () {};
      }, D.Element.feMorphology.prototype = new D.Element.ElementBase(), D.Element.feComposite = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.apply = function () {};
      }, D.Element.feComposite.prototype = new D.Element.ElementBase(), D.Element.feColorMatrix = function (t) {
        this.base = D.Element.ElementBase, this.base(t);
        var n = D.ToNumberArray(this.attribute("values").value);

        switch (this.attribute("type").valueOrDefault("matrix")) {
          case "saturate":
            var e = n[0];
            n = [.213 + .787 * e, .715 - .715 * e, .072 - .072 * e, 0, 0, .213 - .213 * e, .715 + .285 * e, .072 - .072 * e, 0, 0, .213 - .213 * e, .715 - .715 * e, .072 + .928 * e, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            break;

          case "hueRotate":
            var s = n[0] * Math.PI / 180,
                i = function (t, e, i) {
              return t + Math.cos(s) * e + Math.sin(s) * i;
            };

            n = [i(.213, .787, -.213), i(.715, -.715, -.715), i(.072, -.072, .928), 0, 0, i(.213, -.213, .143), i(.715, .285, .14), i(.072, -.072, -.283), 0, 0, i(.213, -.213, -.787), i(.715, -.715, .715), i(.072, .928, .072), 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
            break;

          case "luminanceToAlpha":
            n = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, .2125, .7154, .0721, 0, 0, 0, 0, 0, 0, 1];
        }

        function d(t, e, i, n, s, a) {
          return t[i * n * 4 + 4 * e + a];
        }

        function m(t, e, i, n, s, a, r) {
          t[i * n * 4 + 4 * e + a] = r;
        }

        function y(t, e) {
          var i = n[t];
          return i * (i < 0 ? e - 255 : e);
        }

        var v = this.attribute("includeOpacity").hasValue();

        this.apply = function (t, e, i, n, s) {
          var a = t.getImageData(0, 0, n, s);

          for (i = 0; i < s; i++) for (e = 0; e < n; e++) {
            var r = d(a.data, e, i, n, 0, 0),
                o = d(a.data, e, i, n, 0, 1),
                h = d(a.data, e, i, n, 0, 2),
                l = d(a.data, e, i, n, 0, 3),
                u = y(0, r) + y(1, o) + y(2, h) + y(3, l) + y(4, 1),
                c = y(5, r) + y(6, o) + y(7, h) + y(8, l) + y(9, 1),
                f = y(10, r) + y(11, o) + y(12, h) + y(13, l) + y(14, 1),
                p = y(15, r) + y(16, o) + y(17, h) + y(18, l) + y(19, 1);
            v && (u = c = f = 0, p *= l / 255), m(a.data, e, i, n, 0, 0, u), m(a.data, e, i, n, 0, 1, c), m(a.data, e, i, n, 0, 2, f), m(a.data, e, i, n, 0, 3, p);
          }

          t.clearRect(0, 0, n, s), t.putImageData(a, 0, 0);
        };
      }, D.Element.feColorMatrix.prototype = new D.Element.ElementBase(), D.Element.feGaussianBlur = function (t) {
        this.base = D.Element.ElementBase, this.base(t), this.blurRadius = Math.floor(this.attribute("stdDeviation").numValue()), this.extraFilterDistance = this.blurRadius, this.apply = function (t, e, i, n, s) {
          v && void 0 !== v.canvasRGBA ? (t.canvas.id = D.UniqueId(), t.canvas.style.display = "none", c.body.appendChild(t.canvas), v.canvasRGBA(t.canvas, e, i, n, s, this.blurRadius), c.body.removeChild(t.canvas)) : D.log("ERROR: StackBlur.js must be included for blur to work");
        };
      }, D.Element.feGaussianBlur.prototype = new D.Element.ElementBase(), D.Element.title = function () {}, D.Element.title.prototype = new D.Element.ElementBase(), D.Element.desc = function () {}, D.Element.desc.prototype = new D.Element.ElementBase(), D.Element.MISSING = function (t) {
        D.log("ERROR: Element '" + t.nodeName + "' not yet implemented.");
      }, D.Element.MISSING.prototype = new D.Element.ElementBase(), D.CreateElement = function (t) {
        var e = t.nodeName.replace(/^[^:]+:/, "");
        e = e.replace(/\-/g, "");
        var i = null;
        return (i = void 0 !== D.Element[e] ? new D.Element[e](t) : new D.Element.MISSING(t)).type = t.nodeName, i;
      }, D.load = function (t, e) {
        D.loadXml(t, D.ajax(e));
      }, D.loadXml = function (t, e) {
        D.loadXmlDoc(t, D.parseXml(e));
      }, D.loadXmlDoc = function (a, r) {
        D.init(a);

        var i = function (t) {
          for (var e = a.canvas; e;) t.x -= e.offsetLeft, t.y -= e.offsetTop, e = e.offsetParent;

          return l.scrollX && (t.x += l.scrollX), l.scrollY && (t.y += l.scrollY), t;
        };

        1 != D.opts.ignoreMouse && (a.canvas.onclick = function (t) {
          var e = i(new D.Point(null != t ? t.clientX : event.clientX, null != t ? t.clientY : event.clientY));
          D.Mouse.onclick(e.x, e.y);
        }, a.canvas.onmousemove = function (t) {
          var e = i(new D.Point(null != t ? t.clientX : event.clientX, null != t ? t.clientY : event.clientY));
          D.Mouse.onmousemove(e.x, e.y);
        });
        var o = D.CreateElement(r.documentElement);
        o.root = !0, o.addStylesFromStyleDefinition();

        var h = !0,
            n = function () {
          D.ViewPort.Clear(), a.canvas.parentNode ? D.ViewPort.SetCurrent(a.canvas.parentNode.clientWidth, a.canvas.parentNode.clientHeight) : D.ViewPort.SetCurrent(800, 600), 1 != D.opts.ignoreDimensions && (h || null == D.opts.scaleWidth && null == D.opts.scaleHeight) && (o.style("width").hasValue() && (a.canvas.width = o.style("width").toPixels("x"), a.canvas.style && (a.canvas.style.width = a.canvas.width + "px")), o.style("height").hasValue() && (a.canvas.height = o.style("height").toPixels("y"), a.canvas.style && (a.canvas.style.height = a.canvas.height + "px")));
          var t = a.canvas.clientWidth || a.canvas.width,
              e = a.canvas.clientHeight || a.canvas.height;

          if (1 == D.opts.ignoreDimensions && o.style("width").hasValue() && o.style("height").hasValue() && (t = o.style("width").toPixels("x"), e = o.style("height").toPixels("y")), D.ViewPort.SetCurrent(t, e), null != D.opts.offsetX && (o.attribute("x", !0).value = D.opts.offsetX), null != D.opts.offsetY && (o.attribute("y", !0).value = D.opts.offsetY), null != D.opts.scaleWidth || null != D.opts.scaleHeight) {
            var i = null,
                n = null,
                s = D.ToNumberArray(o.attribute("viewBox").value);
            null != D.opts.scaleWidth && (o.attribute("width").hasValue() ? i = o.attribute("width").toPixels("x") / D.opts.scaleWidth : isNaN(s[2]) || (i = s[2] / D.opts.scaleWidth)), null != D.opts.scaleHeight && (o.attribute("height").hasValue() ? n = o.attribute("height").toPixels("y") / D.opts.scaleHeight : isNaN(s[3]) || (n = s[3] / D.opts.scaleHeight)), null == i && (i = n), null == n && (n = i), o.attribute("width", !0).value = D.opts.scaleWidth, o.attribute("height", !0).value = D.opts.scaleHeight, o.style("transform", !0, !0).value += " scale(" + 1 / i + "," + 1 / n + ")";
          }

          1 != D.opts.ignoreClear && a.clearRect(0, 0, t, e), o.render(a), h && (h = !1, "function" == typeof D.opts.renderCallback && D.opts.renderCallback(r));
        },
            s = !0;

        D.ImagesLoaded() && (s = !1, n()), D.intervalID = setInterval(function () {
          var t = !1;
          if (s && D.ImagesLoaded() && (t = !(s = !1)), 1 != D.opts.ignoreMouse && (t = t || D.Mouse.hasEvents()), 1 != D.opts.ignoreAnimation) for (var e = 0; e < D.Animations.length; e++) {
            var i = D.Animations[e].update(1e3 / D.FRAMERATE);
            t = t || i;
          }
          "function" == typeof D.opts.forceRedraw && 1 == D.opts.forceRedraw() && (t = !0), t && (n(), D.Mouse.runEvents());
        }, 1e3 / D.FRAMERATE);
      }, D.stop = function () {
        D.intervalID && clearInterval(D.intervalID);
      }, D.Mouse = new function () {
        this.events = [], this.hasEvents = function () {
          return 0 != this.events.length;
        }, this.onclick = function (t, e) {
          this.events.push({
            type: "onclick",
            x: t,
            y: e,
            run: function (t) {
              t.onclick && t.onclick();
            }
          });
        }, this.onmousemove = function (t, e) {
          this.events.push({
            type: "onmousemove",
            x: t,
            y: e,
            run: function (t) {
              t.onmousemove && t.onmousemove();
            }
          });
        }, this.eventElements = [], this.checkPath = function (t, e) {
          for (var i = 0; i < this.events.length; i++) {
            var n = this.events[i];
            e.isPointInPath && e.isPointInPath(n.x, n.y) && (this.eventElements[i] = t);
          }
        }, this.checkBoundingBox = function (t, e) {
          if (e) for (var i = 0; i < this.events.length; i++) {
            var n = this.events[i];
            e.isPointInBox(n.x, n.y) && (this.eventElements[i] = t);
          }
        }, this.runEvents = function () {
          D.ctx.canvas.style.cursor = "";

          for (var t = 0; t < this.events.length; t++) for (var e = this.events[t], i = this.eventElements[t]; i;) e.run(i), i = i.parent;

          this.events = [], this.eventElements = [];
        };
      }(), D;
    }

    "undefined" != typeof CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.drawSvg = function (t, e, i, n, s, a) {
      var r = {
        ignoreMouse: !0,
        ignoreAnimation: !0,
        ignoreDimensions: !0,
        ignoreClear: !0,
        offsetX: e,
        offsetY: i,
        scaleWidth: n,
        scaleHeight: s
      };

      for (var o in a) a.hasOwnProperty(o) && (r[o] = a[o]);

      p(this.canvas, t, r);
    }), p._build = m, t.exports = p;
  }(t = {
    exports: {}
  }, t.exports), t.exports;
});

/***/ }),

/***/ "./node_modules/rgbcolor/index.js":
/*!****************************************!*\
  !*** ./node_modules/rgbcolor/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	Based on rgbcolor.js by Stoyan Stefanov <sstoo@gmail.com>
	http://www.phpied.com/rgb-color-parser-in-javascript/
*/
module.exports = function (color_string) {
  this.ok = false;
  this.alpha = 1.0; // strip any leading #

  if (color_string.charAt(0) == '#') {
    // remove # if any
    color_string = color_string.substr(1, 6);
  }

  color_string = color_string.replace(/ /g, '');
  color_string = color_string.toLowerCase(); // before getting into regexps, try simple matches
  // and overwrite the input

  var simple_colors = {
    aliceblue: 'f0f8ff',
    antiquewhite: 'faebd7',
    aqua: '00ffff',
    aquamarine: '7fffd4',
    azure: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '000000',
    blanchedalmond: 'ffebcd',
    blue: '0000ff',
    blueviolet: '8a2be2',
    brown: 'a52a2a',
    burlywood: 'deb887',
    cadetblue: '5f9ea0',
    chartreuse: '7fff00',
    chocolate: 'd2691e',
    coral: 'ff7f50',
    cornflowerblue: '6495ed',
    cornsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: '00ffff',
    darkblue: '00008b',
    darkcyan: '008b8b',
    darkgoldenrod: 'b8860b',
    darkgray: 'a9a9a9',
    darkgreen: '006400',
    darkkhaki: 'bdb76b',
    darkmagenta: '8b008b',
    darkolivegreen: '556b2f',
    darkorange: 'ff8c00',
    darkorchid: '9932cc',
    darkred: '8b0000',
    darksalmon: 'e9967a',
    darkseagreen: '8fbc8f',
    darkslateblue: '483d8b',
    darkslategray: '2f4f4f',
    darkturquoise: '00ced1',
    darkviolet: '9400d3',
    deeppink: 'ff1493',
    deepskyblue: '00bfff',
    dimgray: '696969',
    dodgerblue: '1e90ff',
    feldspar: 'd19275',
    firebrick: 'b22222',
    floralwhite: 'fffaf0',
    forestgreen: '228b22',
    fuchsia: 'ff00ff',
    gainsboro: 'dcdcdc',
    ghostwhite: 'f8f8ff',
    gold: 'ffd700',
    goldenrod: 'daa520',
    gray: '808080',
    green: '008000',
    greenyellow: 'adff2f',
    honeydew: 'f0fff0',
    hotpink: 'ff69b4',
    indianred: 'cd5c5c',
    indigo: '4b0082',
    ivory: 'fffff0',
    khaki: 'f0e68c',
    lavender: 'e6e6fa',
    lavenderblush: 'fff0f5',
    lawngreen: '7cfc00',
    lemonchiffon: 'fffacd',
    lightblue: 'add8e6',
    lightcoral: 'f08080',
    lightcyan: 'e0ffff',
    lightgoldenrodyellow: 'fafad2',
    lightgrey: 'd3d3d3',
    lightgreen: '90ee90',
    lightpink: 'ffb6c1',
    lightsalmon: 'ffa07a',
    lightseagreen: '20b2aa',
    lightskyblue: '87cefa',
    lightslateblue: '8470ff',
    lightslategray: '778899',
    lightsteelblue: 'b0c4de',
    lightyellow: 'ffffe0',
    lime: '00ff00',
    limegreen: '32cd32',
    linen: 'faf0e6',
    magenta: 'ff00ff',
    maroon: '800000',
    mediumaquamarine: '66cdaa',
    mediumblue: '0000cd',
    mediumorchid: 'ba55d3',
    mediumpurple: '9370d8',
    mediumseagreen: '3cb371',
    mediumslateblue: '7b68ee',
    mediumspringgreen: '00fa9a',
    mediumturquoise: '48d1cc',
    mediumvioletred: 'c71585',
    midnightblue: '191970',
    mintcream: 'f5fffa',
    mistyrose: 'ffe4e1',
    moccasin: 'ffe4b5',
    navajowhite: 'ffdead',
    navy: '000080',
    oldlace: 'fdf5e6',
    olive: '808000',
    olivedrab: '6b8e23',
    orange: 'ffa500',
    orangered: 'ff4500',
    orchid: 'da70d6',
    palegoldenrod: 'eee8aa',
    palegreen: '98fb98',
    paleturquoise: 'afeeee',
    palevioletred: 'd87093',
    papayawhip: 'ffefd5',
    peachpuff: 'ffdab9',
    peru: 'cd853f',
    pink: 'ffc0cb',
    plum: 'dda0dd',
    powderblue: 'b0e0e6',
    purple: '800080',
    rebeccapurple: '663399',
    red: 'ff0000',
    rosybrown: 'bc8f8f',
    royalblue: '4169e1',
    saddlebrown: '8b4513',
    salmon: 'fa8072',
    sandybrown: 'f4a460',
    seagreen: '2e8b57',
    seashell: 'fff5ee',
    sienna: 'a0522d',
    silver: 'c0c0c0',
    skyblue: '87ceeb',
    slateblue: '6a5acd',
    slategray: '708090',
    snow: 'fffafa',
    springgreen: '00ff7f',
    steelblue: '4682b4',
    tan: 'd2b48c',
    teal: '008080',
    thistle: 'd8bfd8',
    tomato: 'ff6347',
    turquoise: '40e0d0',
    violet: 'ee82ee',
    violetred: 'd02090',
    wheat: 'f5deb3',
    white: 'ffffff',
    whitesmoke: 'f5f5f5',
    yellow: 'ffff00',
    yellowgreen: '9acd32'
  };
  color_string = simple_colors[color_string] || color_string; // emd of simple type-in colors
  // array of color definition objects

  var color_defs = [{
    re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*((?:\d?\.)?\d)\)$/,
    example: ['rgba(123, 234, 45, 0.8)', 'rgba(255,234,245,1.0)'],
    process: function (bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3]), parseFloat(bits[4])];
    }
  }, {
    re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
    example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
    process: function (bits) {
      return [parseInt(bits[1]), parseInt(bits[2]), parseInt(bits[3])];
    }
  }, {
    re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    example: ['#00ff00', '336699'],
    process: function (bits) {
      return [parseInt(bits[1], 16), parseInt(bits[2], 16), parseInt(bits[3], 16)];
    }
  }, {
    re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    example: ['#fb0', 'f0f'],
    process: function (bits) {
      return [parseInt(bits[1] + bits[1], 16), parseInt(bits[2] + bits[2], 16), parseInt(bits[3] + bits[3], 16)];
    }
  }]; // search through the definitions to find a match

  for (var i = 0; i < color_defs.length; i++) {
    var re = color_defs[i].re;
    var processor = color_defs[i].process;
    var bits = re.exec(color_string);

    if (bits) {
      var channels = processor(bits);
      this.r = channels[0];
      this.g = channels[1];
      this.b = channels[2];

      if (channels.length > 3) {
        this.alpha = channels[3];
      }

      this.ok = true;
    }
  } // validate/cleanup values


  this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r;
  this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g;
  this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b;
  this.alpha = this.alpha < 0 ? 0 : this.alpha > 1.0 || isNaN(this.alpha) ? 1.0 : this.alpha; // some getters

  this.toRGB = function () {
    return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
  };

  this.toRGBA = function () {
    return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.alpha + ')';
  };

  this.toHex = function () {
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);
    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;
    return '#' + r + g + b;
  }; // help


  this.getHelpXML = function () {
    var examples = new Array(); // add regexps

    for (var i = 0; i < color_defs.length; i++) {
      var example = color_defs[i].example;

      for (var j = 0; j < example.length; j++) {
        examples[examples.length] = example[j];
      }
    } // add type-in colors


    for (var sc in simple_colors) {
      examples[examples.length] = sc;
    }

    var xml = document.createElement('ul');
    xml.setAttribute('id', 'rgbcolor-examples');

    for (var i = 0; i < examples.length; i++) {
      try {
        var list_item = document.createElement('li');
        var list_color = new RGBColor(examples[i]);
        var example_div = document.createElement('div');
        example_div.style.cssText = 'margin: 3px; ' + 'border: 1px solid black; ' + 'background:' + list_color.toHex() + '; ' + 'color:' + list_color.toHex();
        example_div.appendChild(document.createTextNode('test'));
        var list_item_value = document.createTextNode(' ' + examples[i] + ' -> ' + list_color.toRGB() + ' -> ' + list_color.toHex());
        list_item.appendChild(example_div);
        list_item.appendChild(list_item_value);
        xml.appendChild(list_item);
      } catch (e) {}
    }

    return xml;
  };
};

/***/ }),

/***/ "./node_modules/stackblur-canvas/dist/stackblur-es.js":
/*!************************************************************!*\
  !*** ./node_modules/stackblur-canvas/dist/stackblur-es.js ***!
  \************************************************************/
/*! exports provided: BlurStack, canvasRGB, canvasRGBA, image, imageDataRGB, imageDataRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlurStack", function() { return BlurStack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRGB", function() { return processCanvasRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasRGBA", function() { return processCanvasRGBA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "image", function() { return processImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataRGB", function() { return processImageDataRGB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageDataRGBA", function() { return processImageDataRGBA; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
/* eslint-disable no-bitwise, unicorn/prefer-query-selector */

/**
* StackBlur - a fast almost Gaussian Blur For Canvas
*
* In case you find this class useful - especially in commercial projects -
* I am not totally unhappy for a small donation to my PayPal account
* mario@quasimondo.de
*
* Or support me on flattr:
* {@link https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript}.
*
* @module StackBlur
* @author Mario Klingemann
* Contact: mario@quasimondo.com
* Website: {@link http://www.quasimondo.com/StackBlurForCanvas/StackBlurDemo.html}
* Twitter: @quasimondo
*
* @copyright (c) 2010 Mario Klingemann
*
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use,
* copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the
* Software is furnished to do so, subject to the following
* conditions:
*
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
* OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
* HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
* FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
* OTHER DEALINGS IN THE SOFTWARE.
*/

/* eslint-disable max-len */


var mulTable = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
var shgTable = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];
/* eslint-enable max-len */

/**
 * @param {string|HTMLImageElement} img
 * @param {string|HTMLCanvasElement} canvas
 * @param {Float} radius
 * @param {boolean} blurAlphaChannel
 * @returns {undefined}
 */

function processImage(img, canvas, radius, blurAlphaChannel) {
  if (typeof img === 'string') {
    img = document.getElementById(img);
  }

  if (!img || !('naturalWidth' in img)) {
    return;
  }

  var w = img.naturalWidth;
  var h = img.naturalHeight;

  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || !('getContext' in canvas)) {
    return;
  }

  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  canvas.width = w;
  canvas.height = h;
  var context = canvas.getContext('2d');
  context.clearRect(0, 0, w, h);
  context.drawImage(img, 0, 0);

  if (isNaN(radius) || radius < 1) {
    return;
  }

  if (blurAlphaChannel) {
    processCanvasRGBA(canvas, 0, 0, w, h, radius);
  } else {
    processCanvasRGB(canvas, 0, 0, w, h, radius);
  }
}
/**
 * @param {string|HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @throws {Error|TypeError}
 * @returns {ImageData} See {@link https://html.spec.whatwg.org/multipage/canvas.html#imagedata}
 */


function getImageDataFromCanvas(canvas, topX, topY, width, height) {
  if (typeof canvas === 'string') {
    canvas = document.getElementById(canvas);
  }

  if (!canvas || _typeof(canvas) !== 'object' || !('getContext' in canvas)) {
    throw new TypeError('Expecting canvas with `getContext` method ' + 'in processCanvasRGB(A) calls!');
  }

  var context = canvas.getContext('2d');

  try {
    return context.getImageData(topX, topY, width, height);
  } catch (e) {
    throw new Error('unable to access image data: ' + e);
  }
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGBA(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGBA(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGBA(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, rSum, gSum, bSum, aSum, rOutSum, gOutSum, bOutSum, aOutSum, rInSum, gInSum, bInSum, aInSum, pr, pg, pb, pa, rbs;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = aInSum = rSum = gSum = bSum = aSum = 0;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    aOutSum = radiusPlus1 * (pa = pixels[yi + 3]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    aSum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      aSum += (stack.a = pa = pixels[p + 3]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      aInSum += pa;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi + 3] = pa = aSum * mulSum >> shgSum;

      if (pa !== 0) {
        pa = 255 / pa;
        pixels[yi] = (rSum * mulSum >> shgSum) * pa;
        pixels[yi + 1] = (gSum * mulSum >> shgSum) * pa;
        pixels[yi + 2] = (bSum * mulSum >> shgSum) * pa;
      } else {
        pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      aInSum += stackIn.a = pixels[p + 3];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      aSum += aInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      aOutSum += pa = stackOut.a;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      aInSum -= pa;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = aInSum = rInSum = gSum = bSum = aSum = rSum = 0;
    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    aOutSum = radiusPlus1 * (pa = pixels[yi + 3]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    aSum += sumFactor * pa;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack.a = pa;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;
      aSum += (stack.a = pa = pixels[yi + 3]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      aInSum += pa;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p + 3] = pa = aSum * mulSum >> shgSum;

      if (pa > 0) {
        pa = 255 / pa;
        pixels[p] = (rSum * mulSum >> shgSum) * pa;
        pixels[p + 1] = (gSum * mulSum >> shgSum) * pa;
        pixels[p + 2] = (bSum * mulSum >> shgSum) * pa;
      } else {
        pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
      }

      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      aSum -= aOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      aOutSum -= stackIn.a;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];
      aSum += aInSum += stackIn.a = pixels[p + 3];
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      aOutSum += pa = stackOut.a;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      aInSum -= pa;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 * @param {HTMLCanvasElement} canvas
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {undefined}
 */


function processCanvasRGB(canvas, topX, topY, width, height, radius) {
  if (isNaN(radius) || radius < 1) {
    return;
  }

  radius |= 0;
  var imageData = getImageDataFromCanvas(canvas, topX, topY, width, height);
  imageData = processImageDataRGB(imageData, topX, topY, width, height, radius);
  canvas.getContext('2d').putImageData(imageData, topX, topY);
}
/**
 * @param {ImageData} imageData
 * @param {Integer} topX
 * @param {Integer} topY
 * @param {Integer} width
 * @param {Integer} height
 * @param {Float} radius
 * @returns {ImageData}
 */


function processImageDataRGB(imageData, topX, topY, width, height, radius) {
  var pixels = imageData.data;
  var x, y, i, p, yp, yi, yw, rSum, gSum, bSum, rOutSum, gOutSum, bOutSum, rInSum, gInSum, bInSum, pr, pg, pb, rbs;
  var div = 2 * radius + 1; // const w4 = width << 2;

  var widthMinus1 = width - 1;
  var heightMinus1 = height - 1;
  var radiusPlus1 = radius + 1;
  var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
  var stackStart = new BlurStack();
  var stack = stackStart;
  var stackEnd;

  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();

    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }

  stack.next = stackStart;
  var stackIn = null;
  var stackOut = null;
  yw = yi = 0;
  var mulSum = mulTable[radius];
  var shgSum = shgTable[radius];

  for (y = 0; y < height; y++) {
    rInSum = gInSum = bInSum = rSum = gSum = bSum = 0;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    for (i = 1; i < radiusPlus1; i++) {
      p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      rSum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[p + 1]) * rbs;
      bSum += (stack.b = pb = pixels[p + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;
    }

    stackIn = stackStart;
    stackOut = stackEnd;

    for (x = 0; x < width; x++) {
      pixels[yi] = rSum * mulSum >> shgSum;
      pixels[yi + 1] = gSum * mulSum >> shgSum;
      pixels[yi + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
      rInSum += stackIn.r = pixels[p];
      gInSum += stackIn.g = pixels[p + 1];
      bInSum += stackIn.b = pixels[p + 2];
      rSum += rInSum;
      gSum += gInSum;
      bSum += bInSum;
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += 4;
    }

    yw += width;
  }

  for (x = 0; x < width; x++) {
    gInSum = bInSum = rInSum = gSum = bSum = rSum = 0;
    yi = x << 2;
    rOutSum = radiusPlus1 * (pr = pixels[yi]);
    gOutSum = radiusPlus1 * (pg = pixels[yi + 1]);
    bOutSum = radiusPlus1 * (pb = pixels[yi + 2]);
    rSum += sumFactor * pr;
    gSum += sumFactor * pg;
    bSum += sumFactor * pb;
    stack = stackStart;

    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg;
      stack.b = pb;
      stack = stack.next;
    }

    yp = width;

    for (i = 1; i <= radius; i++) {
      yi = yp + x << 2;
      rSum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
      gSum += (stack.g = pg = pixels[yi + 1]) * rbs;
      bSum += (stack.b = pb = pixels[yi + 2]) * rbs;
      rInSum += pr;
      gInSum += pg;
      bInSum += pb;
      stack = stack.next;

      if (i < heightMinus1) {
        yp += width;
      }
    }

    yi = x;
    stackIn = stackStart;
    stackOut = stackEnd;

    for (y = 0; y < height; y++) {
      p = yi << 2;
      pixels[p] = rSum * mulSum >> shgSum;
      pixels[p + 1] = gSum * mulSum >> shgSum;
      pixels[p + 2] = bSum * mulSum >> shgSum;
      rSum -= rOutSum;
      gSum -= gOutSum;
      bSum -= bOutSum;
      rOutSum -= stackIn.r;
      gOutSum -= stackIn.g;
      bOutSum -= stackIn.b;
      p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
      rSum += rInSum += stackIn.r = pixels[p];
      gSum += gInSum += stackIn.g = pixels[p + 1];
      bSum += bInSum += stackIn.b = pixels[p + 2];
      stackIn = stackIn.next;
      rOutSum += pr = stackOut.r;
      gOutSum += pg = stackOut.g;
      bOutSum += pb = stackOut.b;
      rInSum -= pr;
      gInSum -= pg;
      bInSum -= pb;
      stackOut = stackOut.next;
      yi += width;
    }
  }

  return imageData;
}
/**
 *
 */


var BlurStack =
/**
 * Set properties.
 */
function BlurStack() {
  _classCallCheck(this, BlurStack);

  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
};



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2FudmcvZGlzdC9icm93c2VyL2NhbnZnLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmdiY29sb3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0YWNrYmx1ci1jYW52YXMvZGlzdC9zdGFja2JsdXItZXMuanMiXSwibmFtZXMiOlsidCIsImUiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxdWlyZSIsInkiLCJ2IiwiaGFzT3duUHJvcGVydHkiLCJkZWZhdWx0IiwibCIsIndpbmRvdyIsIkRPTVBhcnNlciIsImMiLCJkb2N1bWVudCIsImQiLCJpIiwiY3JlYXRlRWxlbWVudCIsIndpZHRoIiwiaGVpZ2h0IiwiZiIsInAiLCJuIiwibSIsImdldEVsZW1lbnRCeUlkIiwic3ZnIiwic3RvcCIsImNoaWxkTm9kZXMiLCJsZW5ndGgiLCJub2RlTmFtZSIsInMiLCJnZXRDb250ZXh0IiwiZG9jdW1lbnRFbGVtZW50IiwibG9hZFhtbERvYyIsInN1YnN0ciIsImxvYWRYbWwiLCJsb2FkIiwiYSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyIiwibyIsImgiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJyZW1vdmVDaGlsZCIsInUiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsIkVsZW1lbnQiLCJwcm90b3R5cGUiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwialF1ZXJ5IiwiWmVwdG8iLCIkIiwiaXMiLCJTaXp6bGUiLCJtYXRjaGVzU2VsZWN0b3IiLCJQIiwibWF0Y2giLCJyZXBsYWNlIiwiam9pbiIsIkQiLCJvcHRzIiwiRlJBTUVSQVRFIiwiTUFYX1ZJUlRVQUxfUElYRUxTIiwicm9vdEVtU2l6ZSIsImVtU2l6ZSIsImxvZyIsImNvbnNvbGUiLCJpbml0IiwiVW5pcXVlSWQiLCJEZWZpbml0aW9ucyIsIlN0eWxlcyIsIlN0eWxlc1NwZWNpZmljaXR5IiwiQW5pbWF0aW9ucyIsIkltYWdlcyIsImN0eCIsIlZpZXdQb3J0Iiwidmlld1BvcnRzIiwiQ2xlYXIiLCJTZXRDdXJyZW50IiwicHVzaCIsIlJlbW92ZUN1cnJlbnQiLCJwb3AiLCJDdXJyZW50IiwiQ29tcHV0ZVNpemUiLCJNYXRoIiwic3FydCIsInBvdyIsIkltYWdlc0xvYWRlZCIsImxvYWRlZCIsInRyaW0iLCJjb21wcmVzc1NwYWNlcyIsImFqYXgiLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJvcGVuIiwic2VuZCIsInJlc3BvbnNlVGV4dCIsInBhcnNlWG1sIiwiV2luZG93cyIsIkRhdGEiLCJYbWwiLCJEb20iLCJYbWxEb2N1bWVudCIsIlhtbExvYWRTZXR0aW5ncyIsInByb2hpYml0RHRkIiwiYXN5bmMiLCJsb2FkWE1MIiwieG1sZG9tIiwicGFyc2VGcm9tU3RyaW5nIiwiUHJvcGVydHkiLCJuYW1lIiwidmFsdWUiLCJnZXRWYWx1ZSIsImhhc1ZhbHVlIiwibnVtVmFsdWUiLCJwYXJzZUZsb2F0IiwidmFsdWVPckRlZmF1bHQiLCJudW1WYWx1ZU9yRGVmYXVsdCIsImFkZE9wYWNpdHkiLCJvayIsImciLCJiIiwiZ2V0RGVmaW5pdGlvbiIsImlzVXJsRGVmaW5pdGlvbiIsImluZGV4T2YiLCJnZXRGaWxsU3R5bGVEZWZpbml0aW9uIiwiY3JlYXRlR3JhZGllbnQiLCJjcmVhdGVQYXR0ZXJuIiwiZ2V0SHJlZkF0dHJpYnV0ZSIsImF0dHJpYnV0ZSIsImdldERQSSIsImdldFJFTSIsImdldEVNIiwiZ2V0VW5pdHMiLCJpc1BpeGVscyIsInRvUGl4ZWxzIiwidG9NaWxsaXNlY29uZHMiLCJ0b1JhZGlhbnMiLCJQSSIsImJhc2VsaW5lIiwibWlkZGxlIiwiY2VudHJhbCIsImlkZW9ncmFwaGljIiwiYWxwaGFiZXRpYyIsImhhbmdpbmciLCJtYXRoZW1hdGljYWwiLCJ0b1RleHRCYXNlbGluZSIsIkZvbnQiLCJWYXJpYW50cyIsIldlaWdodHMiLCJDcmVhdGVGb250IiwiUGFyc2UiLCJmb250IiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsImZvbnRWYXJpYW50IiwidG9TdHJpbmciLCJzcGxpdCIsIlRvTnVtYmVyQXJyYXkiLCJQb2ludCIsIngiLCJhbmdsZVRvIiwiYXRhbjIiLCJhcHBseVRyYW5zZm9ybSIsIkNyZWF0ZVBvaW50IiwiQ3JlYXRlUGF0aCIsIkJvdW5kaW5nQm94IiwieDEiLCJOdW1iZXIiLCJOYU4iLCJ5MSIsIngyIiwieTIiLCJhZGRQb2ludCIsImlzTmFOIiwiYWRkWCIsImFkZFkiLCJhZGRCb3VuZGluZ0JveCIsImFkZFF1YWRyYXRpY0N1cnZlIiwiYWRkQmV6aWVyQ3VydmUiLCJpc1BvaW50SW5Cb3giLCJUcmFuc2Zvcm0iLCJUeXBlIiwidHJhbnNsYXRlIiwiYXBwbHkiLCJ1bmFwcGx5IiwiYXBwbHlUb1BvaW50Iiwicm90YXRlIiwiYW5nbGUiLCJjeCIsImN5IiwiY29zIiwic2luIiwic2NhbGUiLCJtYXRyaXgiLCJ0cmFuc2Zvcm0iLCJTa2V3QmFzZSIsImJhc2UiLCJza2V3WCIsInRhbiIsInNrZXdZIiwidHJhbnNmb3JtcyIsInR5cGUiLCJBc3BlY3RSYXRpbyIsIm1pbiIsIm1heCIsIkVtcHR5UHJvcGVydHkiLCJFbGVtZW50QmFzZSIsImF0dHJpYnV0ZXMiLCJzdHlsZXMiLCJzdHlsZXNTcGVjaWZpY2l0eSIsImNoaWxkcmVuIiwic3R5bGUiLCJwYXJlbnQiLCJyZW5kZXIiLCJzYXZlIiwic2V0Q29udGV4dCIsInJlbmRlckNoaWxkcmVuIiwiY2xlYXJDb250ZXh0IiwicmVzdG9yZSIsImFkZENoaWxkIiwiQ3JlYXRlRWxlbWVudCIsImFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24iLCJSZWdFeHAiLCJub2RlVHlwZSIsInRlc3QiLCJ0b0xvd2VyQ2FzZSIsImNhcHR1cmVUZXh0Tm9kZXMiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJ0c3BhbiIsIlJlbmRlcmVkRWxlbWVudEJhc2UiLCJjYWxjdWxhdGVPcGFjaXR5IiwiZmlsbFN0eWxlIiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJsaW5lQ2FwIiwibGluZUpvaW4iLCJtaXRlckxpbWl0IiwicGFpbnRPcmRlciIsInNldExpbmVEYXNoIiwid2Via2l0TGluZURhc2giLCJtb3pEYXNoIiwibGluZURhc2hPZmZzZXQiLCJ3ZWJraXRMaW5lRGFzaE9mZnNldCIsIm1vekRhc2hPZmZzZXQiLCJnbG9iYWxBbHBoYSIsIlBhdGhFbGVtZW50QmFzZSIsInBhdGgiLCJiZWdpblBhdGgiLCJNb3VzZSIsImNoZWNrUGF0aCIsImZpbGwiLCJzdHJva2UiLCJnZXRNYXJrZXJzIiwiZ2V0Qm91bmRpbmdCb3giLCJTZXREZWZhdWx0cyIsImJhc2VDbGVhckNvbnRleHQiLCJiYXNlU2V0Q29udGV4dCIsImNhbnZhcyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicm9vdCIsIm1vdmVUbyIsImxpbmVUbyIsImNsb3NlUGF0aCIsImNsaXAiLCJyZWN0IiwiYmV6aWVyQ3VydmVUbyIsImNpcmNsZSIsImFyYyIsImVsbGlwc2UiLCJsaW5lIiwiZ2V0UG9pbnRzIiwicG9seWxpbmUiLCJwb2ludHMiLCJwb2x5Z29uIiwiYmFzZVBhdGgiLCJQYXRoUGFyc2VyIiwidG9rZW5zIiwicmVzZXQiLCJjb21tYW5kIiwicHJldmlvdXNDb21tYW5kIiwic3RhcnQiLCJjb250cm9sIiwiY3VycmVudCIsImFuZ2xlcyIsImlzRW5kIiwiaXNDb21tYW5kT3JFbmQiLCJpc1JlbGF0aXZlQ29tbWFuZCIsImdldFRva2VuIiwiZ2V0U2NhbGFyIiwibmV4dENvbW1hbmQiLCJnZXRQb2ludCIsIm1ha2VBYnNvbHV0ZSIsImdldEFzQ29udHJvbFBvaW50IiwiZ2V0QXNDdXJyZW50UG9pbnQiLCJnZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQiLCJhZGRNYXJrZXIiLCJhZGRNYXJrZXJBbmdsZSIsImdldE1hcmtlclBvaW50cyIsImdldE1hcmtlckFuZ2xlcyIsInF1YWRyYXRpY0N1cnZlVG8iLCJFIiwiYWNvcyIsInciLCJDIiwiQiIsIk0iLCJUIiwiUyIsIlYiLCJrIiwiQSIsInBhdHRlcm4iLCJ2aWV3Qm94IiwibWFya2VyIiwiYmFzZVJlbmRlciIsInJlZlgiLCJyZWZZIiwiZGVmcyIsIkdyYWRpZW50QmFzZSIsInN0b3BzIiwiZ2V0R3JhZGllbnQiLCJncmFkaWVudFVuaXRzIiwiYXR0cmlidXRlc1RvSW5oZXJpdCIsImluaGVyaXRTdG9wQ29udGFpbmVyIiwiY29sb3IiLCJhZGRDb2xvclN0b3AiLCJvZmZzZXQiLCJsaW5lYXJHcmFkaWVudCIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwicmFkaWFsR3JhZGllbnQiLCJjcmVhdGVSYWRpYWxHcmFkaWVudCIsIkFuaW1hdGVCYXNlIiwiZHVyYXRpb24iLCJiZWdpbiIsIm1heER1cmF0aW9uIiwiZ2V0UHJvcGVydHkiLCJpbml0aWFsVmFsdWUiLCJpbml0aWFsVW5pdHMiLCJyZW1vdmVkIiwiY2FsY1ZhbHVlIiwidXBkYXRlIiwiZnJvemVuIiwiYW5pbWF0aW9uRnJvemVuIiwiYW5pbWF0aW9uRnJvemVuVmFsdWUiLCJmcm9tIiwidG8iLCJ2YWx1ZXMiLCJwcm9ncmVzcyIsImZsb29yIiwiY2VpbCIsImFuaW1hdGUiLCJhbmltYXRlQ29sb3IiLCJwYXJzZUludCIsImFuaW1hdGVUcmFuc2Zvcm0iLCJob3JpekFkdlgiLCJpc1JUTCIsImlzQXJhYmljIiwiZm9udEZhY2UiLCJtaXNzaW5nR2x5cGgiLCJnbHlwaHMiLCJhcmFiaWNGb3JtIiwidW5pY29kZSIsImZvbnRmYWNlIiwiYXNjZW50IiwiZGVzY2VudCIsInVuaXRzUGVyRW0iLCJtaXNzaW5nZ2x5cGgiLCJnbHlwaCIsInRleHRCYXNlbGluZSIsImluaXRpYWxpemVDb29yZGluYXRlcyIsImdldEFuY2hvckRlbHRhIiwiZ2V0Q2hpbGRCb3VuZGluZ0JveCIsInJlbmRlckNoaWxkIiwiY2hlY2tCb3VuZGluZ0JveCIsIm1lYXN1cmVUZXh0UmVjdXJzaXZlIiwiYWRqdXN0Q2hpbGRDb29yZGluYXRlcyIsIm1lYXN1cmVUZXh0IiwiVGV4dEVsZW1lbnRCYXNlIiwiZ2V0R2x5cGgiLCJzdHJva2VUZXh0IiwiZ2V0VGV4dCIsImZpbGxUZXh0IiwicmV2ZXJzZSIsInRyZWYiLCJoYXNUZXh0IiwiZGF0YSIsImJhc2VSZW5kZXJDaGlsZHJlbiIsIm9uY2xpY2siLCJvbm1vdXNlbW92ZSIsImN1cnNvciIsInRleHRQYXRoIiwic2V0VGV4dERhdGEiLCJnbHlwaEluZm8iLCJwMCIsInAxIiwicm90YXRpb24iLCJkYXRhQXJyYXkiLCJsZXR0ZXJTcGFjaW5nQ2FjaGUiLCJyZWR1Y2UiLCJ0ZXh0V2lkdGgiLCJ0ZXh0SGVpZ2h0IiwiZ2V0UGF0aExlbmd0aCIsImdldEVxdWlkaXN0YW50UG9pbnRPblBhdGgiLCJnZXRMaW5lTGVuZ3RoIiwiZ2V0UG9pbnRPbkxpbmUiLCJ0cmFuc3Bvc2VYIiwidHJhbnNwb3NlWSIsInBhcnNlUGF0aERhdGEiLCJwYXRoTGVuZ3RoIiwidG9VcHBlckNhc2UiLCJjYWxjTGVuZ3RoIiwiZ2V0UG9pbnRPblBhdGgiLCJnZXRQb2ludE9uRWxsaXB0aWNhbEFyYyIsImdldFBvaW50T25DdWJpY0JlemllciIsImdldFBvaW50T25RdWFkcmF0aWNCZXppZXIiLCJidWlsZEVxdWlkaXN0YW50Q2FjaGUiLCJlcXVpZGlzdGFudENhY2hlIiwic3RlcCIsInByZWNpc2lvbiIsImRpc3RhbmNlIiwicm91bmQiLCJhYnMiLCJpbWFnZSIsImltZyIsInVzZUNPUlMiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJzcmMiLCJkcmF3U3ZnIiwiY29tcGxldGUiLCJkcmF3SW1hZ2UiLCJzeW1ib2wiLCJQYXJzZUV4dGVybmFsVXJsIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ1c2UiLCJlbGVtZW50VHJhbnNmb3JtIiwicHJlc2VydmVBc3BlY3RSYXRpbyIsIm92ZXJmbG93IiwibWFzayIsImZlQ29sb3JNYXRyaXgiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJmaWxsUmVjdCIsImNsaXBQYXRoIiwiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwiY2FsbCIsImZpbHRlciIsImV4dHJhRmlsdGVyRGlzdGFuY2UiLCJmZURyb3BTaGFkb3ciLCJmZU1vcnBob2xvZ3kiLCJmZUNvbXBvc2l0ZSIsImdldEltYWdlRGF0YSIsImNsZWFyUmVjdCIsInB1dEltYWdlRGF0YSIsImZlR2F1c3NpYW5CbHVyIiwiYmx1clJhZGl1cyIsImNhbnZhc1JHQkEiLCJpZCIsImRpc3BsYXkiLCJib2R5IiwidGl0bGUiLCJkZXNjIiwiTUlTU0lORyIsIm9mZnNldExlZnQiLCJvZmZzZXRUb3AiLCJvZmZzZXRQYXJlbnQiLCJzY3JvbGxYIiwic2Nyb2xsWSIsImlnbm9yZU1vdXNlIiwiY2xpZW50WCIsImV2ZW50IiwiY2xpZW50WSIsImlnbm9yZURpbWVuc2lvbnMiLCJzY2FsZVdpZHRoIiwic2NhbGVIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImlnbm9yZUNsZWFyIiwicmVuZGVyQ2FsbGJhY2siLCJpbnRlcnZhbElEIiwic2V0SW50ZXJ2YWwiLCJoYXNFdmVudHMiLCJpZ25vcmVBbmltYXRpb24iLCJmb3JjZVJlZHJhdyIsInJ1bkV2ZW50cyIsImNsZWFySW50ZXJ2YWwiLCJldmVudHMiLCJydW4iLCJldmVudEVsZW1lbnRzIiwiaXNQb2ludEluUGF0aCIsIl9idWlsZCIsImNvbG9yX3N0cmluZyIsImFscGhhIiwiY2hhckF0Iiwic2ltcGxlX2NvbG9ycyIsImFsaWNlYmx1ZSIsImFudGlxdWV3aGl0ZSIsImFxdWEiLCJhcXVhbWFyaW5lIiwiYXp1cmUiLCJiZWlnZSIsImJpc3F1ZSIsImJsYWNrIiwiYmxhbmNoZWRhbG1vbmQiLCJibHVlIiwiYmx1ZXZpb2xldCIsImJyb3duIiwiYnVybHl3b29kIiwiY2FkZXRibHVlIiwiY2hhcnRyZXVzZSIsImNob2NvbGF0ZSIsImNvcmFsIiwiY29ybmZsb3dlcmJsdWUiLCJjb3Juc2lsayIsImNyaW1zb24iLCJjeWFuIiwiZGFya2JsdWUiLCJkYXJrY3lhbiIsImRhcmtnb2xkZW5yb2QiLCJkYXJrZ3JheSIsImRhcmtncmVlbiIsImRhcmtraGFraSIsImRhcmttYWdlbnRhIiwiZGFya29saXZlZ3JlZW4iLCJkYXJrb3JhbmdlIiwiZGFya29yY2hpZCIsImRhcmtyZWQiLCJkYXJrc2FsbW9uIiwiZGFya3NlYWdyZWVuIiwiZGFya3NsYXRlYmx1ZSIsImRhcmtzbGF0ZWdyYXkiLCJkYXJrdHVycXVvaXNlIiwiZGFya3Zpb2xldCIsImRlZXBwaW5rIiwiZGVlcHNreWJsdWUiLCJkaW1ncmF5IiwiZG9kZ2VyYmx1ZSIsImZlbGRzcGFyIiwiZmlyZWJyaWNrIiwiZmxvcmFsd2hpdGUiLCJmb3Jlc3RncmVlbiIsImZ1Y2hzaWEiLCJnYWluc2Jvcm8iLCJnaG9zdHdoaXRlIiwiZ29sZCIsImdvbGRlbnJvZCIsImdyYXkiLCJncmVlbiIsImdyZWVueWVsbG93IiwiaG9uZXlkZXciLCJob3RwaW5rIiwiaW5kaWFucmVkIiwiaW5kaWdvIiwiaXZvcnkiLCJraGFraSIsImxhdmVuZGVyIiwibGF2ZW5kZXJibHVzaCIsImxhd25ncmVlbiIsImxlbW9uY2hpZmZvbiIsImxpZ2h0Ymx1ZSIsImxpZ2h0Y29yYWwiLCJsaWdodGN5YW4iLCJsaWdodGdvbGRlbnJvZHllbGxvdyIsImxpZ2h0Z3JleSIsImxpZ2h0Z3JlZW4iLCJsaWdodHBpbmsiLCJsaWdodHNhbG1vbiIsImxpZ2h0c2VhZ3JlZW4iLCJsaWdodHNreWJsdWUiLCJsaWdodHNsYXRlYmx1ZSIsImxpZ2h0c2xhdGVncmF5IiwibGlnaHRzdGVlbGJsdWUiLCJsaWdodHllbGxvdyIsImxpbWUiLCJsaW1lZ3JlZW4iLCJsaW5lbiIsIm1hZ2VudGEiLCJtYXJvb24iLCJtZWRpdW1hcXVhbWFyaW5lIiwibWVkaXVtYmx1ZSIsIm1lZGl1bW9yY2hpZCIsIm1lZGl1bXB1cnBsZSIsIm1lZGl1bXNlYWdyZWVuIiwibWVkaXVtc2xhdGVibHVlIiwibWVkaXVtc3ByaW5nZ3JlZW4iLCJtZWRpdW10dXJxdW9pc2UiLCJtZWRpdW12aW9sZXRyZWQiLCJtaWRuaWdodGJsdWUiLCJtaW50Y3JlYW0iLCJtaXN0eXJvc2UiLCJtb2NjYXNpbiIsIm5hdmFqb3doaXRlIiwibmF2eSIsIm9sZGxhY2UiLCJvbGl2ZSIsIm9saXZlZHJhYiIsIm9yYW5nZSIsIm9yYW5nZXJlZCIsIm9yY2hpZCIsInBhbGVnb2xkZW5yb2QiLCJwYWxlZ3JlZW4iLCJwYWxldHVycXVvaXNlIiwicGFsZXZpb2xldHJlZCIsInBhcGF5YXdoaXAiLCJwZWFjaHB1ZmYiLCJwZXJ1IiwicGluayIsInBsdW0iLCJwb3dkZXJibHVlIiwicHVycGxlIiwicmViZWNjYXB1cnBsZSIsInJlZCIsInJvc3licm93biIsInJveWFsYmx1ZSIsInNhZGRsZWJyb3duIiwic2FsbW9uIiwic2FuZHlicm93biIsInNlYWdyZWVuIiwic2Vhc2hlbGwiLCJzaWVubmEiLCJzaWx2ZXIiLCJza3libHVlIiwic2xhdGVibHVlIiwic2xhdGVncmF5Iiwic25vdyIsInNwcmluZ2dyZWVuIiwic3RlZWxibHVlIiwidGVhbCIsInRoaXN0bGUiLCJ0b21hdG8iLCJ0dXJxdW9pc2UiLCJ2aW9sZXQiLCJ2aW9sZXRyZWQiLCJ3aGVhdCIsIndoaXRlIiwid2hpdGVzbW9rZSIsInllbGxvdyIsInllbGxvd2dyZWVuIiwiY29sb3JfZGVmcyIsInJlIiwiZXhhbXBsZSIsInByb2Nlc3MiLCJiaXRzIiwicHJvY2Vzc29yIiwiZXhlYyIsImNoYW5uZWxzIiwidG9SR0IiLCJ0b1JHQkEiLCJ0b0hleCIsImdldEhlbHBYTUwiLCJleGFtcGxlcyIsIkFycmF5IiwiaiIsInNjIiwieG1sIiwic2V0QXR0cmlidXRlIiwibGlzdF9pdGVtIiwibGlzdF9jb2xvciIsIlJHQkNvbG9yIiwiZXhhbXBsZV9kaXYiLCJjc3NUZXh0IiwiY3JlYXRlVGV4dE5vZGUiLCJsaXN0X2l0ZW1fdmFsdWUiLCJfdHlwZW9mIiwib2JqIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJUeXBlRXJyb3IiLCJtdWxUYWJsZSIsInNoZ1RhYmxlIiwicHJvY2Vzc0ltYWdlIiwicmFkaXVzIiwiYmx1ckFscGhhQ2hhbm5lbCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJjb250ZXh0IiwicHJvY2Vzc0NhbnZhc1JHQkEiLCJwcm9jZXNzQ2FudmFzUkdCIiwiZ2V0SW1hZ2VEYXRhRnJvbUNhbnZhcyIsInRvcFgiLCJ0b3BZIiwiRXJyb3IiLCJpbWFnZURhdGEiLCJwcm9jZXNzSW1hZ2VEYXRhUkdCQSIsInBpeGVscyIsInlwIiwieWkiLCJ5dyIsInJTdW0iLCJnU3VtIiwiYlN1bSIsImFTdW0iLCJyT3V0U3VtIiwiZ091dFN1bSIsImJPdXRTdW0iLCJhT3V0U3VtIiwickluU3VtIiwiZ0luU3VtIiwiYkluU3VtIiwiYUluU3VtIiwicHIiLCJwZyIsInBiIiwicGEiLCJyYnMiLCJkaXYiLCJ3aWR0aE1pbnVzMSIsImhlaWdodE1pbnVzMSIsInJhZGl1c1BsdXMxIiwic3VtRmFjdG9yIiwic3RhY2tTdGFydCIsIkJsdXJTdGFjayIsInN0YWNrIiwic3RhY2tFbmQiLCJuZXh0Iiwic3RhY2tJbiIsInN0YWNrT3V0IiwibXVsU3VtIiwic2hnU3VtIiwicHJvY2Vzc0ltYWdlRGF0YVJHQiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsQ0FBQyxVQUFTQSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFVBQXFEQyxNQUFNLENBQUNDLE9BQVAsR0FBZUYsQ0FBQyxDQUFDRyxtQkFBTyxDQUFDLGtEQUFELENBQVIsRUFBcUJBLG1CQUFPLENBQUMsOEVBQUQsQ0FBNUIsQ0FBckUsR0FBdUgsU0FBdkg7QUFBeU8sQ0FBdlAsQ0FBd1AsSUFBeFAsRUFBNlAsVUFBU0MsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQzs7QUFBYSxNQUFJTixDQUFKO0FBQU0sU0FBT0ssQ0FBQyxHQUFDQSxDQUFDLElBQUVBLENBQUMsQ0FBQ0UsY0FBRixDQUFpQixTQUFqQixDQUFILEdBQStCRixDQUFDLENBQUNHLE9BQWpDLEdBQXlDSCxDQUEzQyxFQUE2Q0MsQ0FBQyxHQUFDQSxDQUFDLElBQUVBLENBQUMsQ0FBQ0MsY0FBRixDQUFpQixTQUFqQixDQUFILEdBQStCRCxDQUFDLENBQUNFLE9BQWpDLEdBQXlDRixDQUF4RixFQUEwRixVQUFTTixDQUFULEVBQVc7QUFBQyxRQUFJUyxDQUFKO0FBQU1ULEtBQUMsQ0FBQ0csT0FBRjtBQUFVLEtBQUNNLENBQUMsR0FBQ0MsTUFBSCxFQUFXQyxTQUFYLEdBQXFCRCxNQUFNLENBQUNDLFNBQTVCO0FBQXNDLFFBQUlDLENBQUMsR0FBQ0gsQ0FBQyxDQUFDSSxRQUFSOztBQUFpQixhQUFTQyxDQUFULENBQVdkLENBQVgsRUFBYUMsQ0FBYixFQUFlO0FBQUMsVUFBSWMsQ0FBSjtBQUFNLGFBQU0sQ0FBQ0EsQ0FBQyxHQUFDSCxDQUFDLENBQUNJLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBSCxFQUE4QkMsS0FBOUIsR0FBb0NqQixDQUFwQyxFQUFzQ2UsQ0FBQyxDQUFDRyxNQUFGLEdBQVNqQixDQUEvQyxFQUFpRGMsQ0FBdkQ7QUFBeUQ7O0FBQUEsUUFBSUksQ0FBSjtBQUFBLFFBQU1DLENBQUMsR0FBQyxVQUFTcEIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZTtBQUFDLFVBQUcsUUFBTWYsQ0FBTixJQUFTLFFBQU1DLENBQWYsSUFBa0IsUUFBTWMsQ0FBM0IsRUFBNkI7QUFBQyxZQUFJTSxDQUFDLEdBQUNDLENBQUMsQ0FBQ1AsQ0FBQyxJQUFFLEVBQUosQ0FBUDtBQUFlLG9CQUFVLE9BQU9mLENBQWpCLEtBQXFCQSxDQUFDLEdBQUNZLENBQUMsQ0FBQ1csY0FBRixDQUFpQnZCLENBQWpCLENBQXZCLEdBQTRDLFFBQU1BLENBQUMsQ0FBQ3dCLEdBQVIsSUFBYXhCLENBQUMsQ0FBQ3dCLEdBQUYsQ0FBTUMsSUFBTixFQUF6RCxFQUFzRXpCLENBQUMsQ0FBQzBCLFVBQUYsSUFBYyxLQUFHMUIsQ0FBQyxDQUFDMEIsVUFBRixDQUFhQyxNQUE5QixJQUFzQyxZQUFVM0IsQ0FBQyxDQUFDMEIsVUFBRixDQUFhLENBQWIsRUFBZ0JFLFFBQWhFLEtBQTJFNUIsQ0FBQyxDQUFDd0IsR0FBRixHQUFNSCxDQUFqRixDQUF0RTtBQUEwSixZQUFJUSxDQUFDLEdBQUM3QixDQUFDLENBQUM4QixVQUFGLENBQWEsSUFBYixDQUFOO0FBQXlCLGFBQUssQ0FBTCxLQUFTN0IsQ0FBQyxDQUFDOEIsZUFBWCxHQUEyQlYsQ0FBQyxDQUFDVyxVQUFGLENBQWFILENBQWIsRUFBZTVCLENBQWYsQ0FBM0IsR0FBNkMsT0FBS0EsQ0FBQyxDQUFDZ0MsTUFBRixDQUFTLENBQVQsRUFBVyxDQUFYLENBQUwsR0FBbUJaLENBQUMsQ0FBQ2EsT0FBRixDQUFVTCxDQUFWLEVBQVk1QixDQUFaLENBQW5CLEdBQWtDb0IsQ0FBQyxDQUFDYyxJQUFGLENBQU9OLENBQVAsRUFBUzVCLENBQVQsQ0FBL0U7QUFBMkYsT0FBM1QsTUFBZ1UsS0FBSSxJQUFJbUMsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDeUIsZ0JBQUYsQ0FBbUIsS0FBbkIsQ0FBTixFQUFnQ0MsQ0FBQyxHQUFDLENBQXRDLEVBQXdDQSxDQUFDLEdBQUNGLENBQUMsQ0FBQ1QsTUFBNUMsRUFBbURXLENBQUMsRUFBcEQsRUFBdUQ7QUFBQyxZQUFJQyxDQUFDLEdBQUNILENBQUMsQ0FBQ0UsQ0FBRCxDQUFQO0FBQUEsWUFBV0UsQ0FBQyxHQUFDNUIsQ0FBQyxDQUFDSSxhQUFGLENBQWdCLFFBQWhCLENBQWI7QUFBdUMsWUFBRyxLQUFLLENBQUwsS0FBU3VCLENBQUMsQ0FBQ0UsV0FBWCxJQUF3QixLQUFLLENBQUwsS0FBU0YsQ0FBQyxDQUFDRyxZQUF0QyxFQUFtREYsQ0FBQyxDQUFDdkIsS0FBRixHQUFRc0IsQ0FBQyxDQUFDRSxXQUFWLEVBQXNCRCxDQUFDLENBQUN0QixNQUFGLEdBQVNxQixDQUFDLENBQUNHLFlBQWpDLENBQW5ELEtBQXFHO0FBQUMsY0FBSWpDLENBQUMsR0FBQzhCLENBQUMsQ0FBQ0kscUJBQUYsRUFBTjtBQUFnQ0gsV0FBQyxDQUFDdkIsS0FBRixHQUFRUixDQUFDLENBQUNRLEtBQVYsRUFBZ0J1QixDQUFDLENBQUN0QixNQUFGLEdBQVNULENBQUMsQ0FBQ1MsTUFBM0I7QUFBa0M7QUFBQXFCLFNBQUMsQ0FBQ0ssVUFBRixDQUFhQyxZQUFiLENBQTBCTCxDQUExQixFQUE0QkQsQ0FBNUIsR0FBK0JBLENBQUMsQ0FBQ0ssVUFBRixDQUFhRSxXQUFiLENBQXlCUCxDQUF6QixDQUEvQjtBQUEyRCxZQUFJUSxDQUFDLEdBQUNuQyxDQUFDLENBQUNJLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBTjtBQUE2QitCLFNBQUMsQ0FBQ0MsV0FBRixDQUFjVCxDQUFkLEdBQWlCbkIsQ0FBQyxDQUFDb0IsQ0FBRCxFQUFHTyxDQUFDLENBQUNFLFNBQUwsQ0FBbEI7QUFBa0M7QUFBQyxLQUExdEI7O0FBQTJ0QixtQkFBYSxPQUFPQyxPQUFwQixLQUE4QixLQUFLLENBQUwsS0FBU0EsT0FBTyxDQUFDQyxTQUFSLENBQWtCQyxPQUEzQixHQUFtQ2pDLENBQUMsR0FBQyxVQUFTbkIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUNvRCxPQUFGLENBQVVuRCxDQUFWLENBQVA7QUFBb0IsS0FBdkUsR0FBd0UsS0FBSyxDQUFMLEtBQVNpRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JFLHFCQUEzQixHQUFpRGxDLENBQUMsR0FBQyxVQUFTbkIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUNxRCxxQkFBRixDQUF3QnBELENBQXhCLENBQVA7QUFBa0MsS0FBbkcsR0FBb0csS0FBSyxDQUFMLEtBQVNpRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JHLGtCQUEzQixHQUE4Q25DLENBQUMsR0FBQyxVQUFTbkIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUNzRCxrQkFBRixDQUFxQnJELENBQXJCLENBQVA7QUFBK0IsS0FBN0YsR0FBOEYsS0FBSyxDQUFMLEtBQVNpRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JJLGlCQUEzQixHQUE2Q3BDLENBQUMsR0FBQyxVQUFTbkIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUN1RCxpQkFBRixDQUFvQnRELENBQXBCLENBQVA7QUFBOEIsS0FBM0YsR0FBNEYsS0FBSyxDQUFMLEtBQVNpRCxPQUFPLENBQUNDLFNBQVIsQ0FBa0JLLGdCQUEzQixHQUE0Q3JDLENBQUMsR0FBQyxVQUFTbkIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPRCxDQUFDLENBQUN3RCxnQkFBRixDQUFtQnZELENBQW5CLENBQVA7QUFBNkIsS0FBekYsSUFBMkYsY0FBWSxPQUFPd0QsTUFBbkIsSUFBMkIsY0FBWSxPQUFPQyxLQUE5QyxLQUFzRHZDLENBQUMsR0FBQyxVQUFTbkIsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxhQUFPMEQsQ0FBQyxDQUFDM0QsQ0FBRCxDQUFELENBQUs0RCxFQUFMLENBQVEzRCxDQUFSLENBQVA7QUFBa0IsS0FBeEYsR0FBMEYsS0FBSyxDQUFMLEtBQVNrQixDQUFULElBQVksZUFBYSxPQUFPMEMsTUFBaEMsS0FBeUMxQyxDQUFDLEdBQUMwQyxNQUFNLENBQUNDLGVBQWxELENBQXJMLENBQXBZO0FBQThuQixRQUFJN0QsQ0FBQyxHQUFDLGVBQU47QUFBQSxRQUFzQmMsQ0FBQyxHQUFDLHFCQUF4QjtBQUFBLFFBQThDcUIsQ0FBQyxHQUFDLHNCQUFoRDtBQUFBLFFBQXVFRSxDQUFDLEdBQUMsZ0VBQXpFO0FBQUEsUUFBMElDLENBQUMsR0FBQyx1QkFBNUk7QUFBQSxRQUFvS0MsQ0FBQyxHQUFDLHFCQUF0SztBQUFBLFFBQTRMTyxDQUFDLEdBQUMsb0JBQTlMOztBQUFtTixhQUFTZ0IsQ0FBVCxDQUFXMUMsQ0FBWCxFQUFhO0FBQUMsVUFBSVEsQ0FBQyxHQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLENBQU47QUFBQSxVQUFjN0IsQ0FBQyxHQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsWUFBSWMsQ0FBQyxHQUFDTSxDQUFDLENBQUMyQyxLQUFGLENBQVFoRSxDQUFSLENBQU47QUFBaUIsZ0JBQU1lLENBQU4sS0FBVWMsQ0FBQyxDQUFDNUIsQ0FBRCxDQUFELElBQU1jLENBQUMsQ0FBQ1ksTUFBUixFQUFlTixDQUFDLEdBQUNBLENBQUMsQ0FBQzRDLE9BQUYsQ0FBVWpFLENBQVYsRUFBWSxHQUFaLENBQTNCO0FBQTZDLE9BQTVGOztBQUE2RixhQUFPcUIsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQ0EsQ0FBQyxDQUFDNEMsT0FBRixDQUFVLG1CQUFWLEVBQThCLFVBQTlCLENBQUgsRUFBOENBLE9BQTlDLENBQXNELFlBQXRELEVBQW1FLEdBQW5FLENBQUYsRUFBMEVqRSxDQUFDLENBQUNDLENBQUQsRUFBRyxDQUFILENBQTNFLEVBQWlGRCxDQUFDLENBQUNlLENBQUQsRUFBRyxDQUFILENBQWxGLEVBQXdGZixDQUFDLENBQUNvQyxDQUFELEVBQUcsQ0FBSCxDQUF6RixFQUErRnBDLENBQUMsQ0FBQ3NDLENBQUQsRUFBRyxDQUFILENBQWhHLEVBQXNHdEMsQ0FBQyxDQUFDdUMsQ0FBRCxFQUFHLENBQUgsQ0FBdkcsRUFBNkd2QyxDQUFDLENBQUN3QyxDQUFELEVBQUcsQ0FBSCxDQUE5RyxFQUFvSG5CLENBQUMsR0FBQyxDQUFDQSxDQUFDLEdBQUNBLENBQUMsQ0FBQzRDLE9BQUYsQ0FBVSxhQUFWLEVBQXdCLEdBQXhCLENBQUgsRUFBaUNBLE9BQWpDLENBQXlDLFFBQXpDLEVBQWtELEdBQWxELENBQXRILEVBQTZLakUsQ0FBQyxDQUFDK0MsQ0FBRCxFQUFHLENBQUgsQ0FBOUssRUFBb0xsQixDQUFDLENBQUNxQyxJQUFGLENBQU8sRUFBUCxDQUEzTDtBQUFzTTs7QUFBQSxhQUFTNUMsQ0FBVCxDQUFXTyxDQUFYLEVBQWE7QUFBQyxVQUFJc0MsQ0FBQyxHQUFDO0FBQUNDLFlBQUksRUFBQ3ZDLENBQU47QUFBUXdDLGlCQUFTLEVBQUMsRUFBbEI7QUFBcUJDLDBCQUFrQixFQUFDLEdBQXhDO0FBQTRDQyxrQkFBVSxFQUFDLEVBQXZEO0FBQTBEQyxjQUFNLEVBQUMsRUFBakU7QUFBb0VDLFdBQUcsRUFBQyxZQUFVLENBQUU7QUFBcEYsT0FBTjtBQUE0RixXQUFHTixDQUFDLENBQUNDLElBQUYsQ0FBT0ssR0FBVixJQUFlLGVBQWEsT0FBT0MsT0FBbkMsS0FBNkNQLENBQUMsQ0FBQ00sR0FBRixHQUFNLFVBQVN6RSxDQUFULEVBQVc7QUFBQzBFLGVBQU8sQ0FBQ0QsR0FBUixDQUFZekUsQ0FBWjtBQUFlLE9BQTlFLEdBQWdGbUUsQ0FBQyxDQUFDUSxJQUFGLEdBQU8sVUFBUzNFLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxDQUFOO0FBQVFrRSxTQUFDLENBQUNTLFFBQUYsR0FBVyxZQUFVO0FBQUMsaUJBQU0sVUFBUyxFQUFFM0UsQ0FBakI7QUFBbUIsU0FBekMsRUFBMENrRSxDQUFDLENBQUNVLFdBQUYsR0FBYyxFQUF4RCxFQUEyRFYsQ0FBQyxDQUFDVyxNQUFGLEdBQVMsRUFBcEUsRUFBdUVYLENBQUMsQ0FBQ1ksaUJBQUYsR0FBb0IsRUFBM0YsRUFBOEZaLENBQUMsQ0FBQ2EsVUFBRixHQUFhLEVBQTNHLEVBQThHYixDQUFDLENBQUNjLE1BQUYsR0FBUyxFQUF2SCxFQUEwSGQsQ0FBQyxDQUFDZSxHQUFGLEdBQU1sRixDQUFoSSxFQUFrSW1FLENBQUMsQ0FBQ2dCLFFBQUYsR0FBVyxJQUFJLFlBQVU7QUFBQyxlQUFLQyxTQUFMLEdBQWUsRUFBZixFQUFrQixLQUFLQyxLQUFMLEdBQVcsWUFBVTtBQUFDLGlCQUFLRCxTQUFMLEdBQWUsRUFBZjtBQUFrQixXQUExRCxFQUEyRCxLQUFLRSxVQUFMLEdBQWdCLFVBQVN0RixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGlCQUFLbUYsU0FBTCxDQUFlRyxJQUFmLENBQW9CO0FBQUN0RSxtQkFBSyxFQUFDakIsQ0FBUDtBQUFTa0Isb0JBQU0sRUFBQ2pCO0FBQWhCLGFBQXBCO0FBQXdDLFdBQWpJLEVBQWtJLEtBQUt1RixhQUFMLEdBQW1CLFlBQVU7QUFBQyxpQkFBS0osU0FBTCxDQUFlSyxHQUFmO0FBQXFCLFdBQXJMLEVBQXNMLEtBQUtDLE9BQUwsR0FBYSxZQUFVO0FBQUMsbUJBQU8sS0FBS04sU0FBTCxDQUFlLEtBQUtBLFNBQUwsQ0FBZXpELE1BQWYsR0FBc0IsQ0FBckMsQ0FBUDtBQUErQyxXQUE3UCxFQUE4UCxLQUFLVixLQUFMLEdBQVcsWUFBVTtBQUFDLG1CQUFPLEtBQUt5RSxPQUFMLEdBQWV6RSxLQUF0QjtBQUE0QixXQUFoVCxFQUFpVCxLQUFLQyxNQUFMLEdBQVksWUFBVTtBQUFDLG1CQUFPLEtBQUt3RSxPQUFMLEdBQWV4RSxNQUF0QjtBQUE2QixXQUFyVyxFQUFzVyxLQUFLeUUsV0FBTCxHQUFpQixVQUFTM0YsQ0FBVCxFQUFXO0FBQUMsbUJBQU8sUUFBTUEsQ0FBTixJQUFTLFlBQVUsT0FBT0EsQ0FBMUIsR0FBNEJBLENBQTVCLEdBQThCLE9BQUtBLENBQUwsR0FBTyxLQUFLaUIsS0FBTCxFQUFQLEdBQW9CLE9BQUtqQixDQUFMLEdBQU8sS0FBS2tCLE1BQUwsRUFBUCxHQUFxQjBFLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLEdBQUwsQ0FBUyxLQUFLN0UsS0FBTCxFQUFULEVBQXNCLENBQXRCLElBQXlCMkUsSUFBSSxDQUFDRSxHQUFMLENBQVMsS0FBSzVFLE1BQUwsRUFBVCxFQUF1QixDQUF2QixDQUFuQyxJQUE4RDBFLElBQUksQ0FBQ0MsSUFBTCxDQUFVLENBQVYsQ0FBNUk7QUFBeUosV0FBNWhCO0FBQTZoQixTQUE1aUIsRUFBN0k7QUFBMHJCLE9BQXJ5QixFQUFzeUIxQixDQUFDLENBQUNRLElBQUYsRUFBdHlCLEVBQSt5QlIsQ0FBQyxDQUFDNEIsWUFBRixHQUFlLFlBQVU7QUFBQyxhQUFJLElBQUkvRixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNtRSxDQUFDLENBQUNjLE1BQUYsQ0FBU3RELE1BQXZCLEVBQThCM0IsQ0FBQyxFQUEvQixFQUFrQyxJQUFHLENBQUNtRSxDQUFDLENBQUNjLE1BQUYsQ0FBU2pGLENBQVQsRUFBWWdHLE1BQWhCLEVBQXVCLE9BQU0sQ0FBQyxDQUFQOztBQUFTLGVBQU0sQ0FBQyxDQUFQO0FBQVMsT0FBcDVCLEVBQXE1QjdCLENBQUMsQ0FBQzhCLElBQUYsR0FBTyxVQUFTakcsQ0FBVCxFQUFXO0FBQUMsZUFBT0EsQ0FBQyxDQUFDaUUsT0FBRixDQUFVLFlBQVYsRUFBdUIsRUFBdkIsQ0FBUDtBQUFrQyxPQUExOEIsRUFBMjhCRSxDQUFDLENBQUMrQixjQUFGLEdBQWlCLFVBQVNsRyxDQUFULEVBQVc7QUFBQyxlQUFPQSxDQUFDLENBQUNpRSxPQUFGLENBQVUsaUJBQVYsRUFBNEIsR0FBNUIsQ0FBUDtBQUF3QyxPQUFoaEMsRUFBaWhDRSxDQUFDLENBQUNnQyxJQUFGLEdBQU8sVUFBU25HLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUo7QUFBTSxlQUFNLENBQUNBLENBQUMsR0FBQ1EsQ0FBQyxDQUFDMkYsY0FBRixHQUFpQixJQUFJM0YsQ0FBQyxDQUFDMkYsY0FBTixFQUFqQixHQUFzQyxJQUFJQyxhQUFKLENBQWtCLG1CQUFsQixDQUF6QyxLQUFrRnBHLENBQUMsQ0FBQ3FHLElBQUYsQ0FBTyxLQUFQLEVBQWF0RyxDQUFiLEVBQWUsQ0FBQyxDQUFoQixHQUFtQkMsQ0FBQyxDQUFDc0csSUFBRixDQUFPLElBQVAsQ0FBbkIsRUFBZ0N0RyxDQUFDLENBQUN1RyxZQUFwSCxJQUFrSSxJQUF4STtBQUE2SSxPQUF2ckMsRUFBd3JDckMsQ0FBQyxDQUFDc0MsUUFBRixHQUFXLFVBQVN4RyxDQUFULEVBQVc7QUFBQyxZQUFHLGVBQWEsT0FBT3lHLE9BQXBCLElBQTZCLEtBQUssQ0FBTCxLQUFTQSxPQUFPLENBQUNDLElBQTlDLElBQW9ELEtBQUssQ0FBTCxLQUFTRCxPQUFPLENBQUNDLElBQVIsQ0FBYUMsR0FBN0UsRUFBaUY7QUFBQyxjQUFJNUcsQ0FBQyxHQUFDLElBQUkwRyxPQUFPLENBQUNDLElBQVIsQ0FBYUMsR0FBYixDQUFpQkMsR0FBakIsQ0FBcUJDLFdBQXpCLEVBQU47QUFBQSxjQUEyQy9GLENBQUMsR0FBQyxJQUFJMkYsT0FBTyxDQUFDQyxJQUFSLENBQWFDLEdBQWIsQ0FBaUJDLEdBQWpCLENBQXFCRSxlQUF6QixFQUE3QztBQUFzRixpQkFBT2hHLENBQUMsQ0FBQ2lHLFdBQUYsR0FBYyxDQUFDLENBQWYsRUFBaUJoSCxDQUFDLENBQUNrQyxPQUFGLENBQVVqQyxDQUFWLEVBQVljLENBQVosQ0FBakIsRUFBZ0NmLENBQXZDO0FBQXlDOztBQUFBLFlBQUcsQ0FBQ1MsQ0FBQyxDQUFDRSxTQUFOLEVBQWdCLE9BQU9WLENBQUMsR0FBQ0EsQ0FBQyxDQUFDZ0UsT0FBRixDQUFVLHFCQUFWLEVBQWdDLEVBQWhDLENBQUYsRUFBc0MsQ0FBQ2pFLENBQUMsR0FBQyxJQUFJcUcsYUFBSixDQUFrQixrQkFBbEIsQ0FBSCxFQUEwQ1ksS0FBMUMsR0FBZ0QsT0FBdEYsRUFBOEZqSCxDQUFDLENBQUNrSCxPQUFGLENBQVVqSCxDQUFWLENBQTlGLEVBQTJHRCxDQUFsSDs7QUFBb0gsWUFBRztBQUFDLGNBQUlxQixDQUFDLEdBQUNRLENBQUMsQ0FBQ3NGLE1BQUYsR0FBUyxJQUFJMUcsQ0FBQyxDQUFDRSxTQUFOLENBQWdCa0IsQ0FBQyxDQUFDc0YsTUFBbEIsQ0FBVCxHQUFtQyxJQUFJMUcsQ0FBQyxDQUFDRSxTQUFOLEVBQXpDO0FBQXlELGlCQUFPVSxDQUFDLENBQUMrRixlQUFGLENBQWtCbkgsQ0FBbEIsRUFBb0IsZUFBcEIsQ0FBUDtBQUE0QyxTQUF6RyxDQUF5RyxPQUFNRCxDQUFOLEVBQVE7QUFBQyxpQkFBTSxDQUFDcUIsQ0FBQyxHQUFDUSxDQUFDLENBQUNzRixNQUFGLEdBQVMsSUFBSTFHLENBQUMsQ0FBQ0UsU0FBTixDQUFnQmtCLENBQUMsQ0FBQ3NGLE1BQWxCLENBQVQsR0FBbUMsSUFBSTFHLENBQUMsQ0FBQ0UsU0FBTixFQUF0QyxFQUF1RHlHLGVBQXZELENBQXVFbkgsQ0FBdkUsRUFBeUUsVUFBekUsQ0FBTjtBQUEyRjtBQUFDLE9BQWx2RCxFQUFtdkRrRSxDQUFDLENBQUNrRCxRQUFGLEdBQVcsVUFBU3JILENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsYUFBS3FILElBQUwsR0FBVXRILENBQVYsRUFBWSxLQUFLdUgsS0FBTCxHQUFXdEgsQ0FBdkI7QUFBeUIsT0FBcnlELEVBQXN5RGtFLENBQUMsQ0FBQ2tELFFBQUYsQ0FBV2xFLFNBQVgsQ0FBcUJxRSxRQUFyQixHQUE4QixZQUFVO0FBQUMsZUFBTyxLQUFLRCxLQUFaO0FBQWtCLE9BQWoyRCxFQUFrMkRwRCxDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCc0UsUUFBckIsR0FBOEIsWUFBVTtBQUFDLGVBQU8sUUFBTSxLQUFLRixLQUFYLElBQWtCLE9BQUssS0FBS0EsS0FBbkM7QUFBeUMsT0FBcDdELEVBQXE3RHBELENBQUMsQ0FBQ2tELFFBQUYsQ0FBV2xFLFNBQVgsQ0FBcUJ1RSxRQUFyQixHQUE4QixZQUFVO0FBQUMsWUFBRyxDQUFDLEtBQUtELFFBQUwsRUFBSixFQUFvQixPQUFPLENBQVA7QUFBUyxZQUFJekgsQ0FBQyxHQUFDMkgsVUFBVSxDQUFDLEtBQUtKLEtBQU4sQ0FBaEI7QUFBNkIsZUFBTSxDQUFDLEtBQUtBLEtBQUwsR0FBVyxFQUFaLEVBQWdCdkQsS0FBaEIsQ0FBc0IsSUFBdEIsTUFBOEJoRSxDQUFDLElBQUUsR0FBakMsR0FBc0NBLENBQTVDO0FBQThDLE9BQXRrRSxFQUF1a0VtRSxDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCeUUsY0FBckIsR0FBb0MsVUFBUzVILENBQVQsRUFBVztBQUFDLGVBQU8sS0FBS3lILFFBQUwsS0FBZ0IsS0FBS0YsS0FBckIsR0FBMkJ2SCxDQUFsQztBQUFvQyxPQUEzcEUsRUFBNHBFbUUsQ0FBQyxDQUFDa0QsUUFBRixDQUFXbEUsU0FBWCxDQUFxQjBFLGlCQUFyQixHQUF1QyxVQUFTN0gsQ0FBVCxFQUFXO0FBQUMsZUFBTyxLQUFLeUgsUUFBTCxLQUFnQixLQUFLQyxRQUFMLEVBQWhCLEdBQWdDQyxVQUFVLENBQUMzSCxDQUFELENBQWpEO0FBQXFELE9BQXB3RSxFQUFxd0VtRSxDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCMkUsVUFBckIsR0FBZ0MsVUFBUzlILENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQyxLQUFLc0gsS0FBWDs7QUFBaUIsWUFBRyxRQUFNdkgsQ0FBQyxDQUFDdUgsS0FBUixJQUFlLE1BQUl2SCxDQUFDLENBQUN1SCxLQUFyQixJQUE0QixZQUFVLE9BQU8sS0FBS0EsS0FBckQsRUFBMkQ7QUFBQyxjQUFJeEcsQ0FBQyxHQUFDLElBQUlWLENBQUosQ0FBTSxLQUFLa0gsS0FBWCxDQUFOO0FBQXdCeEcsV0FBQyxDQUFDZ0gsRUFBRixLQUFPOUgsQ0FBQyxHQUFDLFVBQVFjLENBQUMsQ0FBQ3VCLENBQVYsR0FBWSxJQUFaLEdBQWlCdkIsQ0FBQyxDQUFDaUgsQ0FBbkIsR0FBcUIsSUFBckIsR0FBMEJqSCxDQUFDLENBQUNrSCxDQUE1QixHQUE4QixJQUE5QixHQUFtQ2pJLENBQUMsQ0FBQzBILFFBQUYsRUFBbkMsR0FBZ0QsR0FBekQ7QUFBOEQ7O0FBQUEsZUFBTyxJQUFJdkQsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLEtBQUtDLElBQXBCLEVBQXlCckgsQ0FBekIsQ0FBUDtBQUFtQyxPQUF2L0UsRUFBdy9Fa0UsQ0FBQyxDQUFDa0QsUUFBRixDQUFXbEUsU0FBWCxDQUFxQitFLGFBQXJCLEdBQW1DLFlBQVU7QUFBQyxZQUFJbEksQ0FBQyxHQUFDLEtBQUt1SCxLQUFMLENBQVd2RCxLQUFYLENBQWlCLGFBQWpCLENBQU47QUFBc0MsZUFBT2hFLENBQUMsS0FBR0EsQ0FBQyxHQUFDQSxDQUFDLENBQUMsQ0FBRCxDQUFOLENBQUQsRUFBWUEsQ0FBQyxLQUFHQSxDQUFDLEdBQUMsS0FBS3VILEtBQVYsQ0FBYixFQUE4QnBELENBQUMsQ0FBQ1UsV0FBRixDQUFjN0UsQ0FBZCxDQUFyQztBQUFzRCxPQUFsb0YsRUFBbW9GbUUsQ0FBQyxDQUFDa0QsUUFBRixDQUFXbEUsU0FBWCxDQUFxQmdGLGVBQXJCLEdBQXFDLFlBQVU7QUFBQyxlQUFPLEtBQUcsS0FBS1osS0FBTCxDQUFXYSxPQUFYLENBQW1CLE1BQW5CLENBQVY7QUFBcUMsT0FBeHRGLEVBQXl0RmpFLENBQUMsQ0FBQ2tELFFBQUYsQ0FBV2xFLFNBQVgsQ0FBcUJrRixzQkFBckIsR0FBNEMsVUFBU3JJLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsWUFBSWMsQ0FBQyxHQUFDLEtBQUttSCxhQUFMLEVBQU47QUFBMkIsWUFBRyxRQUFNbkgsQ0FBTixJQUFTQSxDQUFDLENBQUN1SCxjQUFkLEVBQTZCLE9BQU92SCxDQUFDLENBQUN1SCxjQUFGLENBQWlCbkUsQ0FBQyxDQUFDZSxHQUFuQixFQUF1QmxGLENBQXZCLEVBQXlCQyxDQUF6QixDQUFQOztBQUFtQyxZQUFHLFFBQU1jLENBQU4sSUFBU0EsQ0FBQyxDQUFDd0gsYUFBZCxFQUE0QjtBQUFDLGNBQUd4SCxDQUFDLENBQUN5SCxnQkFBRixHQUFxQmYsUUFBckIsRUFBSCxFQUFtQztBQUFDLGdCQUFJcEcsQ0FBQyxHQUFDTixDQUFDLENBQUMwSCxTQUFGLENBQVksa0JBQVosQ0FBTjtBQUFzQzFILGFBQUMsR0FBQ0EsQ0FBQyxDQUFDeUgsZ0JBQUYsR0FBcUJOLGFBQXJCLEVBQUYsRUFBdUM3RyxDQUFDLENBQUNvRyxRQUFGLE9BQWUxRyxDQUFDLENBQUMwSCxTQUFGLENBQVksa0JBQVosRUFBK0IsQ0FBQyxDQUFoQyxFQUFtQ2xCLEtBQW5DLEdBQXlDbEcsQ0FBQyxDQUFDa0csS0FBMUQsQ0FBdkM7QUFBd0c7O0FBQUEsaUJBQU94RyxDQUFDLENBQUN3SCxhQUFGLENBQWdCcEUsQ0FBQyxDQUFDZSxHQUFsQixFQUFzQmxGLENBQXRCLEVBQXdCQyxDQUF4QixDQUFQO0FBQWtDOztBQUFBLGVBQU8sSUFBUDtBQUFZLE9BQTNtRyxFQUE0bUdrRSxDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCdUYsTUFBckIsR0FBNEIsWUFBVTtBQUFDLGVBQU8sRUFBUDtBQUFVLE9BQTdwRyxFQUE4cEd2RSxDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCd0YsTUFBckIsR0FBNEIsWUFBVTtBQUFDLGVBQU94RSxDQUFDLENBQUNJLFVBQVQ7QUFBb0IsT0FBenRHLEVBQTB0R0osQ0FBQyxDQUFDa0QsUUFBRixDQUFXbEUsU0FBWCxDQUFxQnlGLEtBQXJCLEdBQTJCLFlBQVU7QUFBQyxlQUFPekUsQ0FBQyxDQUFDSyxNQUFUO0FBQWdCLE9BQWh4RyxFQUFpeEdMLENBQUMsQ0FBQ2tELFFBQUYsQ0FBV2xFLFNBQVgsQ0FBcUIwRixRQUFyQixHQUE4QixZQUFVO0FBQUMsZUFBTSxDQUFDLEtBQUt0QixLQUFMLEdBQVcsRUFBWixFQUFnQnRELE9BQWhCLENBQXdCLFlBQXhCLEVBQXFDLEVBQXJDLENBQU47QUFBK0MsT0FBejJHLEVBQTAyR0UsQ0FBQyxDQUFDa0QsUUFBRixDQUFXbEUsU0FBWCxDQUFxQjJGLFFBQXJCLEdBQThCLFlBQVU7QUFBQyxZQUFHLENBQUMsS0FBS3JCLFFBQUwsRUFBSixFQUFvQixPQUFNLENBQUMsQ0FBUDtBQUFTLFlBQUl6SCxDQUFDLEdBQUMsS0FBS3VILEtBQUwsR0FBVyxFQUFqQjtBQUFvQixlQUFNLENBQUMsQ0FBQ3ZILENBQUMsQ0FBQ2dFLEtBQUYsQ0FBUSxLQUFSLENBQUYsSUFBa0IsQ0FBQyxDQUFDaEUsQ0FBQyxDQUFDZ0UsS0FBRixDQUFRLFVBQVIsQ0FBMUI7QUFBOEMsT0FBbC9HLEVBQW0vR0csQ0FBQyxDQUFDa0QsUUFBRixDQUFXbEUsU0FBWCxDQUFxQjRGLFFBQXJCLEdBQThCLFVBQVMvSSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLFlBQUcsQ0FBQyxLQUFLd0gsUUFBTCxFQUFKLEVBQW9CLE9BQU8sQ0FBUDtBQUFTLFlBQUkxRyxDQUFDLEdBQUMsS0FBS3dHLEtBQUwsR0FBVyxFQUFqQjtBQUFvQixZQUFHeEcsQ0FBQyxDQUFDaUQsS0FBRixDQUFRLE1BQVIsQ0FBSCxFQUFtQixPQUFPLEtBQUswRCxRQUFMLEtBQWdCLEtBQUtpQixNQUFMLENBQVkzSSxDQUFaLENBQXZCO0FBQXNDLFlBQUdlLENBQUMsQ0FBQ2lELEtBQUYsQ0FBUSxLQUFSLENBQUgsRUFBa0IsT0FBTyxLQUFLMEQsUUFBTCxLQUFnQixLQUFLa0IsS0FBTCxDQUFXNUksQ0FBWCxDQUF2QjtBQUFxQyxZQUFHZSxDQUFDLENBQUNpRCxLQUFGLENBQVEsS0FBUixDQUFILEVBQWtCLE9BQU8sS0FBSzBELFFBQUwsS0FBZ0IsS0FBS2tCLEtBQUwsQ0FBVzVJLENBQVgsQ0FBaEIsR0FBOEIsQ0FBckM7QUFBdUMsWUFBR2UsQ0FBQyxDQUFDaUQsS0FBRixDQUFRLEtBQVIsQ0FBSCxFQUFrQixPQUFPLEtBQUswRCxRQUFMLEVBQVA7QUFBdUIsWUFBRzNHLENBQUMsQ0FBQ2lELEtBQUYsQ0FBUSxLQUFSLENBQUgsRUFBa0IsT0FBTyxLQUFLMEQsUUFBTCxLQUFnQixLQUFLZ0IsTUFBTCxDQUFZMUksQ0FBWixDQUFoQixJQUFnQyxJQUFFLEVBQWxDLENBQVA7QUFBNkMsWUFBR2UsQ0FBQyxDQUFDaUQsS0FBRixDQUFRLEtBQVIsQ0FBSCxFQUFrQixPQUFPLEtBQUcsS0FBSzBELFFBQUwsRUFBVjtBQUEwQixZQUFHM0csQ0FBQyxDQUFDaUQsS0FBRixDQUFRLEtBQVIsQ0FBSCxFQUFrQixPQUFPLEtBQUswRCxRQUFMLEtBQWdCLEtBQUtnQixNQUFMLENBQVkxSSxDQUFaLENBQWhCLEdBQStCLElBQXRDO0FBQTJDLFlBQUdlLENBQUMsQ0FBQ2lELEtBQUYsQ0FBUSxLQUFSLENBQUgsRUFBa0IsT0FBTyxLQUFLMEQsUUFBTCxLQUFnQixLQUFLZ0IsTUFBTCxDQUFZMUksQ0FBWixDQUFoQixHQUErQixJQUF0QztBQUEyQyxZQUFHZSxDQUFDLENBQUNpRCxLQUFGLENBQVEsS0FBUixDQUFILEVBQWtCLE9BQU8sS0FBSzBELFFBQUwsS0FBZ0IsS0FBS2dCLE1BQUwsQ0FBWTFJLENBQVosQ0FBdkI7QUFBc0MsWUFBR2UsQ0FBQyxDQUFDaUQsS0FBRixDQUFRLElBQVIsQ0FBSCxFQUFpQixPQUFPLEtBQUswRCxRQUFMLEtBQWdCdkQsQ0FBQyxDQUFDZ0IsUUFBRixDQUFXUSxXQUFYLENBQXVCM0YsQ0FBdkIsQ0FBdkI7QUFBaUQsWUFBSXFCLENBQUMsR0FBQyxLQUFLcUcsUUFBTCxFQUFOO0FBQXNCLGVBQU96SCxDQUFDLElBQUVvQixDQUFDLEdBQUMsQ0FBTCxHQUFPQSxDQUFDLEdBQUM4QyxDQUFDLENBQUNnQixRQUFGLENBQVdRLFdBQVgsQ0FBdUIzRixDQUF2QixDQUFULEdBQW1DcUIsQ0FBMUM7QUFBNEMsT0FBbnNJLEVBQW9zSThDLENBQUMsQ0FBQ2tELFFBQUYsQ0FBV2xFLFNBQVgsQ0FBcUI2RixjQUFyQixHQUFvQyxZQUFVO0FBQUMsZUFBTyxLQUFLdkIsUUFBTCxLQUFnQixDQUFDLEtBQUtGLEtBQUwsR0FBVyxFQUFaLEVBQWdCdkQsS0FBaEIsQ0FBc0IsS0FBdEIsSUFBNkIsS0FBSzBELFFBQUwsRUFBN0IsR0FBNkMsTUFBSSxLQUFLQSxRQUFMLEVBQWpFLEdBQWlGLENBQXhGO0FBQTBGLE9BQTcwSSxFQUE4MEl2RCxDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCOEYsU0FBckIsR0FBK0IsWUFBVTtBQUFDLFlBQUcsQ0FBQyxLQUFLeEIsUUFBTCxFQUFKLEVBQW9CLE9BQU8sQ0FBUDtBQUFTLFlBQUl6SCxDQUFDLEdBQUMsS0FBS3VILEtBQUwsR0FBVyxFQUFqQjtBQUFvQixlQUFPdkgsQ0FBQyxDQUFDZ0UsS0FBRixDQUFRLE1BQVIsSUFBZ0IsS0FBSzBELFFBQUwsTUFBaUI5QixJQUFJLENBQUNzRCxFQUFMLEdBQVEsR0FBekIsQ0FBaEIsR0FBOENsSixDQUFDLENBQUNnRSxLQUFGLENBQVEsT0FBUixJQUFpQixLQUFLMEQsUUFBTCxNQUFpQjlCLElBQUksQ0FBQ3NELEVBQUwsR0FBUSxHQUF6QixDQUFqQixHQUErQ2xKLENBQUMsQ0FBQ2dFLEtBQUYsQ0FBUSxNQUFSLElBQWdCLEtBQUswRCxRQUFMLEVBQWhCLEdBQWdDLEtBQUtBLFFBQUwsTUFBaUI5QixJQUFJLENBQUNzRCxFQUFMLEdBQVEsR0FBekIsQ0FBcEk7QUFBa0ssT0FBM2tKO0FBQTRrSixVQUFJbEosQ0FBQyxHQUFDO0FBQUNtSixnQkFBUSxFQUFDLFlBQVY7QUFBdUIsdUJBQWMsS0FBckM7QUFBMkMsNEJBQW1CLEtBQTlEO0FBQW9FQyxjQUFNLEVBQUMsUUFBM0U7QUFBb0ZDLGVBQU8sRUFBQyxRQUE1RjtBQUFxRyxzQkFBYSxRQUFsSDtBQUEySCwyQkFBa0IsUUFBN0k7QUFBc0pDLG1CQUFXLEVBQUMsYUFBbEs7QUFBZ0xDLGtCQUFVLEVBQUMsWUFBM0w7QUFBd01DLGVBQU8sRUFBQyxTQUFoTjtBQUEwTkMsb0JBQVksRUFBQztBQUF2TyxPQUFOO0FBQTJQLGFBQU90RixDQUFDLENBQUNrRCxRQUFGLENBQVdsRSxTQUFYLENBQXFCdUcsY0FBckIsR0FBb0MsWUFBVTtBQUFDLGVBQU8sS0FBS2pDLFFBQUwsS0FBZ0J6SCxDQUFDLENBQUMsS0FBS3VILEtBQU4sQ0FBakIsR0FBOEIsSUFBckM7QUFBMEMsT0FBekYsRUFBMEZwRCxDQUFDLENBQUN3RixJQUFGLEdBQU8sSUFBSSxZQUFVO0FBQUMsYUFBSzdFLE1BQUwsR0FBWSwrQkFBWixFQUE0QyxLQUFLOEUsUUFBTCxHQUFjLDJCQUExRCxFQUFzRixLQUFLQyxPQUFMLEdBQWEsd0VBQW5HLEVBQTRLLEtBQUtDLFVBQUwsR0FBZ0IsVUFBUzlKLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWVNLENBQWYsRUFBaUJRLENBQWpCLEVBQW1CTyxDQUFuQixFQUFxQjtBQUFDLGNBQUlFLENBQUMsR0FBQyxRQUFNRixDQUFOLEdBQVEsS0FBSzJILEtBQUwsQ0FBVzNILENBQVgsQ0FBUixHQUFzQixLQUFLMEgsVUFBTCxDQUFnQixFQUFoQixFQUFtQixFQUFuQixFQUFzQixFQUF0QixFQUF5QixFQUF6QixFQUE0QixFQUE1QixFQUErQjNGLENBQUMsQ0FBQ2UsR0FBRixDQUFNOEUsSUFBckMsQ0FBNUI7QUFBdUUsaUJBQU07QUFBQ0Msc0JBQVUsRUFBQ3BJLENBQUMsR0FBQ0EsQ0FBQyxJQUFFUyxDQUFDLENBQUMySCxVQUFuQjtBQUE4QkMsb0JBQVEsRUFBQzdJLENBQUMsSUFBRWlCLENBQUMsQ0FBQzRILFFBQTVDO0FBQXFEQyxxQkFBUyxFQUFDbkssQ0FBQyxJQUFFc0MsQ0FBQyxDQUFDNkgsU0FBcEU7QUFBOEVDLHNCQUFVLEVBQUNySixDQUFDLElBQUV1QixDQUFDLENBQUM4SCxVQUE5RjtBQUF5R0MsdUJBQVcsRUFBQ3BLLENBQUMsSUFBRXFDLENBQUMsQ0FBQytILFdBQTFIO0FBQXNJQyxvQkFBUSxFQUFDLFlBQVU7QUFBQyxxQkFBTSxDQUFDLEtBQUtILFNBQU4sRUFBZ0IsS0FBS0UsV0FBckIsRUFBaUMsS0FBS0QsVUFBdEMsRUFBaUQsS0FBS0YsUUFBdEQsRUFBK0QsS0FBS0QsVUFBcEUsRUFBZ0YvRixJQUFoRixDQUFxRixHQUFyRixDQUFOO0FBQWdHO0FBQTFQLFdBQU47QUFBa1EsU0FBM2hCO0FBQTRoQixZQUFJNUIsQ0FBQyxHQUFDLElBQU47O0FBQVcsYUFBS3lILEtBQUwsR0FBVyxVQUFTL0osQ0FBVCxFQUFXO0FBQUMsZUFBSSxJQUFJQyxDQUFDLEdBQUMsRUFBTixFQUFTYyxDQUFDLEdBQUNvRCxDQUFDLENBQUM4QixJQUFGLENBQU85QixDQUFDLENBQUMrQixjQUFGLENBQWlCbEcsQ0FBQyxJQUFFLEVBQXBCLENBQVAsRUFBZ0N1SyxLQUFoQyxDQUFzQyxHQUF0QyxDQUFYLEVBQXNEbEosQ0FBQyxHQUFDO0FBQUM2SSxvQkFBUSxFQUFDLENBQUMsQ0FBWDtBQUFhQyxxQkFBUyxFQUFDLENBQUMsQ0FBeEI7QUFBMEJDLHNCQUFVLEVBQUMsQ0FBQyxDQUF0QztBQUF3Q0MsdUJBQVcsRUFBQyxDQUFDO0FBQXJELFdBQXhELEVBQWdIeEksQ0FBQyxHQUFDLEVBQWxILEVBQXFITyxDQUFDLEdBQUMsQ0FBM0gsRUFBNkhBLENBQUMsR0FBQ3JCLENBQUMsQ0FBQ1ksTUFBakksRUFBd0lTLENBQUMsRUFBekksRUFBNElmLENBQUMsQ0FBQzhJLFNBQUYsSUFBYSxDQUFDLENBQUQsSUFBSTdILENBQUMsQ0FBQ3dDLE1BQUYsQ0FBU3NELE9BQVQsQ0FBaUJySCxDQUFDLENBQUNxQixDQUFELENBQWxCLENBQWpCLEdBQXdDZixDQUFDLENBQUNnSixXQUFGLElBQWUsQ0FBQyxDQUFELElBQUkvSCxDQUFDLENBQUNzSCxRQUFGLENBQVd4QixPQUFYLENBQW1CckgsQ0FBQyxDQUFDcUIsQ0FBRCxDQUFwQixDQUFuQixHQUE0Q2YsQ0FBQyxDQUFDK0ksVUFBRixJQUFjLENBQUMsQ0FBRCxJQUFJOUgsQ0FBQyxDQUFDdUgsT0FBRixDQUFVekIsT0FBVixDQUFrQnJILENBQUMsQ0FBQ3FCLENBQUQsQ0FBbkIsQ0FBbEIsR0FBMENmLENBQUMsQ0FBQzZJLFFBQUYsR0FBVyxhQUFXbkosQ0FBQyxDQUFDcUIsQ0FBRCxDQUFaLEtBQWtCUCxDQUFDLElBQUVkLENBQUMsQ0FBQ3FCLENBQUQsQ0FBdEIsQ0FBWCxJQUF1QyxhQUFXckIsQ0FBQyxDQUFDcUIsQ0FBRCxDQUFaLEtBQWtCbkMsQ0FBQyxDQUFDaUssUUFBRixHQUFXbkosQ0FBQyxDQUFDcUIsQ0FBRCxDQUFELENBQUttSSxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUE3QixHQUFpRGxKLENBQUMsQ0FBQzhJLFNBQUYsR0FBWTlJLENBQUMsQ0FBQ2dKLFdBQUYsR0FBY2hKLENBQUMsQ0FBQytJLFVBQUYsR0FBYS9JLENBQUMsQ0FBQzZJLFFBQUYsR0FBVyxDQUFDLENBQTNJLENBQTFDLElBQXlMLGFBQVduSixDQUFDLENBQUNxQixDQUFELENBQVosS0FBa0JuQyxDQUFDLENBQUNtSyxVQUFGLEdBQWFySixDQUFDLENBQUNxQixDQUFELENBQWhDLEdBQXFDZixDQUFDLENBQUM4SSxTQUFGLEdBQVk5SSxDQUFDLENBQUNnSixXQUFGLEdBQWNoSixDQUFDLENBQUMrSSxVQUFGLEdBQWEsQ0FBQyxDQUF0USxDQUE1QyxJQUFzVCxhQUFXckosQ0FBQyxDQUFDcUIsQ0FBRCxDQUFaLEtBQWtCbkMsQ0FBQyxDQUFDb0ssV0FBRixHQUFjdEosQ0FBQyxDQUFDcUIsQ0FBRCxDQUFqQyxHQUFzQ2YsQ0FBQyxDQUFDOEksU0FBRixHQUFZOUksQ0FBQyxDQUFDZ0osV0FBRixHQUFjLENBQUMsQ0FBdlgsQ0FBeEMsSUFBbWEsYUFBV3RKLENBQUMsQ0FBQ3FCLENBQUQsQ0FBWixLQUFrQm5DLENBQUMsQ0FBQ2tLLFNBQUYsR0FBWXBKLENBQUMsQ0FBQ3FCLENBQUQsQ0FBL0IsR0FBb0NmLENBQUMsQ0FBQzhJLFNBQUYsR0FBWSxDQUFDLENBQXBkOztBQUF1ZCxpQkFBTSxNQUFJdEksQ0FBSixLQUFRNUIsQ0FBQyxDQUFDZ0ssVUFBRixHQUFhcEksQ0FBckIsR0FBd0I1QixDQUE5QjtBQUFnQyxTQUExcEI7QUFBMnBCLE9BQWp0QyxFQUFqRyxFQUFtekNrRSxDQUFDLENBQUNxRyxhQUFGLEdBQWdCLFVBQVN4SyxDQUFULEVBQVc7QUFBQyxhQUFJLElBQUlDLENBQUMsR0FBQyxDQUFDRCxDQUFDLElBQUUsRUFBSixFQUFRZ0UsS0FBUixDQUFjLG9EQUFkLEtBQXFFLEVBQTNFLEVBQThFakQsQ0FBQyxHQUFDLENBQXBGLEVBQXNGQSxDQUFDLEdBQUNkLENBQUMsQ0FBQzBCLE1BQTFGLEVBQWlHWixDQUFDLEVBQWxHLEVBQXFHZCxDQUFDLENBQUNjLENBQUQsQ0FBRCxHQUFLNEcsVUFBVSxDQUFDMUgsQ0FBQyxDQUFDYyxDQUFELENBQUYsQ0FBZjs7QUFBc0IsZUFBT2QsQ0FBUDtBQUFTLE9BQW45QyxFQUFvOUNrRSxDQUFDLENBQUNzRyxLQUFGLEdBQVEsVUFBU3pLLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsYUFBS3lLLENBQUwsR0FBTzFLLENBQVAsRUFBUyxLQUFLSyxDQUFMLEdBQU9KLENBQWhCO0FBQWtCLE9BQTUvQyxFQUE2L0NrRSxDQUFDLENBQUNzRyxLQUFGLENBQVF0SCxTQUFSLENBQWtCd0gsT0FBbEIsR0FBMEIsVUFBUzNLLENBQVQsRUFBVztBQUFDLGVBQU80RixJQUFJLENBQUNnRixLQUFMLENBQVc1SyxDQUFDLENBQUNLLENBQUYsR0FBSSxLQUFLQSxDQUFwQixFQUFzQkwsQ0FBQyxDQUFDMEssQ0FBRixHQUFJLEtBQUtBLENBQS9CLENBQVA7QUFBeUMsT0FBNWtELEVBQTZrRHZHLENBQUMsQ0FBQ3NHLEtBQUYsQ0FBUXRILFNBQVIsQ0FBa0IwSCxjQUFsQixHQUFpQyxVQUFTN0ssQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLEtBQUt5SyxDQUFMLEdBQU8xSyxDQUFDLENBQUMsQ0FBRCxDQUFSLEdBQVksS0FBS0ssQ0FBTCxHQUFPTCxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUF3QkEsQ0FBQyxDQUFDLENBQUQsQ0FBL0I7QUFBQSxZQUFtQ2UsQ0FBQyxHQUFDLEtBQUsySixDQUFMLEdBQU8xSyxDQUFDLENBQUMsQ0FBRCxDQUFSLEdBQVksS0FBS0ssQ0FBTCxHQUFPTCxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUF3QkEsQ0FBQyxDQUFDLENBQUQsQ0FBOUQ7QUFBa0UsYUFBSzBLLENBQUwsR0FBT3pLLENBQVAsRUFBUyxLQUFLSSxDQUFMLEdBQU9VLENBQWhCO0FBQWtCLE9BQTlzRCxFQUErc0RvRCxDQUFDLENBQUMyRyxXQUFGLEdBQWMsVUFBUzlLLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQ2tFLENBQUMsQ0FBQ3FHLGFBQUYsQ0FBZ0J4SyxDQUFoQixDQUFOO0FBQXlCLGVBQU8sSUFBSW1FLENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWXhLLENBQUMsQ0FBQyxDQUFELENBQWIsRUFBaUJBLENBQUMsQ0FBQyxDQUFELENBQWxCLENBQVA7QUFBOEIsT0FBaHlELEVBQWl5RGtFLENBQUMsQ0FBQzRHLFVBQUYsR0FBYSxVQUFTL0ssQ0FBVCxFQUFXO0FBQUMsYUFBSSxJQUFJQyxDQUFDLEdBQUNrRSxDQUFDLENBQUNxRyxhQUFGLENBQWdCeEssQ0FBaEIsQ0FBTixFQUF5QmUsQ0FBQyxHQUFDLEVBQTNCLEVBQThCTSxDQUFDLEdBQUMsQ0FBcEMsRUFBc0NBLENBQUMsR0FBQ3BCLENBQUMsQ0FBQzBCLE1BQTFDLEVBQWlETixDQUFDLElBQUUsQ0FBcEQsRUFBc0ROLENBQUMsQ0FBQ3dFLElBQUYsQ0FBTyxJQUFJcEIsQ0FBQyxDQUFDc0csS0FBTixDQUFZeEssQ0FBQyxDQUFDb0IsQ0FBRCxDQUFiLEVBQWlCcEIsQ0FBQyxDQUFDb0IsQ0FBQyxHQUFDLENBQUgsQ0FBbEIsQ0FBUDs7QUFBaUMsZUFBT04sQ0FBUDtBQUFTLE9BQTE1RCxFQUEyNURvRCxDQUFDLENBQUM2RyxXQUFGLEdBQWMsVUFBU2hMLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWVNLENBQWYsRUFBaUI7QUFBQyxhQUFLNEosRUFBTCxHQUFRQyxNQUFNLENBQUNDLEdBQWYsRUFBbUIsS0FBS0MsRUFBTCxHQUFRRixNQUFNLENBQUNDLEdBQWxDLEVBQXNDLEtBQUtFLEVBQUwsR0FBUUgsTUFBTSxDQUFDQyxHQUFyRCxFQUF5RCxLQUFLRyxFQUFMLEdBQVFKLE1BQU0sQ0FBQ0MsR0FBeEUsRUFBNEUsS0FBS1QsQ0FBTCxHQUFPLFlBQVU7QUFBQyxpQkFBTyxLQUFLTyxFQUFaO0FBQWUsU0FBN0csRUFBOEcsS0FBSzVLLENBQUwsR0FBTyxZQUFVO0FBQUMsaUJBQU8sS0FBSytLLEVBQVo7QUFBZSxTQUEvSSxFQUFnSixLQUFLbkssS0FBTCxHQUFXLFlBQVU7QUFBQyxpQkFBTyxLQUFLb0ssRUFBTCxHQUFRLEtBQUtKLEVBQXBCO0FBQXVCLFNBQTdMLEVBQThMLEtBQUsvSixNQUFMLEdBQVksWUFBVTtBQUFDLGlCQUFPLEtBQUtvSyxFQUFMLEdBQVEsS0FBS0YsRUFBcEI7QUFBdUIsU0FBNU8sRUFBNk8sS0FBS0csUUFBTCxHQUFjLFVBQVN2TCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGtCQUFNRCxDQUFOLEtBQVUsQ0FBQ3dMLEtBQUssQ0FBQyxLQUFLUCxFQUFOLENBQUwsSUFBZ0JPLEtBQUssQ0FBQyxLQUFLSCxFQUFOLENBQXRCLE1BQW1DLEtBQUtKLEVBQUwsR0FBUWpMLENBQVIsRUFBVSxLQUFLcUwsRUFBTCxHQUFRckwsQ0FBckQsR0FBd0RBLENBQUMsR0FBQyxLQUFLaUwsRUFBUCxLQUFZLEtBQUtBLEVBQUwsR0FBUWpMLENBQXBCLENBQXhELEVBQStFQSxDQUFDLEdBQUMsS0FBS3FMLEVBQVAsS0FBWSxLQUFLQSxFQUFMLEdBQVFyTCxDQUFwQixDQUF6RixHQUFpSCxRQUFNQyxDQUFOLEtBQVUsQ0FBQ3VMLEtBQUssQ0FBQyxLQUFLSixFQUFOLENBQUwsSUFBZ0JJLEtBQUssQ0FBQyxLQUFLRixFQUFOLENBQXRCLE1BQW1DLEtBQUtGLEVBQUwsR0FBUW5MLENBQVIsRUFBVSxLQUFLcUwsRUFBTCxHQUFRckwsQ0FBckQsR0FBd0RBLENBQUMsR0FBQyxLQUFLbUwsRUFBUCxLQUFZLEtBQUtBLEVBQUwsR0FBUW5MLENBQXBCLENBQXhELEVBQStFQSxDQUFDLEdBQUMsS0FBS3FMLEVBQVAsS0FBWSxLQUFLQSxFQUFMLEdBQVFyTCxDQUFwQixDQUF6RixDQUFqSDtBQUFrTyxTQUEzZSxFQUE0ZSxLQUFLd0wsSUFBTCxHQUFVLFVBQVN6TCxDQUFULEVBQVc7QUFBQyxlQUFLdUwsUUFBTCxDQUFjdkwsQ0FBZCxFQUFnQixJQUFoQjtBQUFzQixTQUF4aEIsRUFBeWhCLEtBQUswTCxJQUFMLEdBQVUsVUFBUzFMLENBQVQsRUFBVztBQUFDLGVBQUt1TCxRQUFMLENBQWMsSUFBZCxFQUFtQnZMLENBQW5CO0FBQXNCLFNBQXJrQixFQUFza0IsS0FBSzJMLGNBQUwsR0FBb0IsVUFBUzNMLENBQVQsRUFBVztBQUFDLGVBQUt1TCxRQUFMLENBQWN2TCxDQUFDLENBQUNpTCxFQUFoQixFQUFtQmpMLENBQUMsQ0FBQ29MLEVBQXJCLEdBQXlCLEtBQUtHLFFBQUwsQ0FBY3ZMLENBQUMsQ0FBQ3FMLEVBQWhCLEVBQW1CckwsQ0FBQyxDQUFDc0wsRUFBckIsQ0FBekI7QUFBa0QsU0FBeHBCLEVBQXlwQixLQUFLTSxpQkFBTCxHQUF1QixVQUFTNUwsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQlEsQ0FBakIsRUFBbUJPLENBQW5CLEVBQXFCO0FBQUMsY0FBSUUsQ0FBQyxHQUFDdEMsQ0FBQyxHQUFDLElBQUUsQ0FBRixJQUFLZSxDQUFDLEdBQUNmLENBQVAsQ0FBUjtBQUFBLGNBQWtCdUMsQ0FBQyxHQUFDdEMsQ0FBQyxHQUFDLElBQUUsQ0FBRixJQUFLb0IsQ0FBQyxHQUFDcEIsQ0FBUCxDQUF0QjtBQUFBLGNBQWdDdUMsQ0FBQyxHQUFDRixDQUFDLEdBQUMsSUFBRSxDQUFGLElBQUtULENBQUMsR0FBQzdCLENBQVAsQ0FBcEM7QUFBQSxjQUE4Q1MsQ0FBQyxHQUFDOEIsQ0FBQyxHQUFDLElBQUUsQ0FBRixJQUFLSCxDQUFDLEdBQUNuQyxDQUFQLENBQWxEO0FBQTRELGVBQUs0TCxjQUFMLENBQW9CN0wsQ0FBcEIsRUFBc0JDLENBQXRCLEVBQXdCcUMsQ0FBeEIsRUFBMEJFLENBQTFCLEVBQTRCRCxDQUE1QixFQUE4QjlCLENBQTlCLEVBQWdDb0IsQ0FBaEMsRUFBa0NPLENBQWxDO0FBQXFDLFNBQXZ5QixFQUF3eUIsS0FBS3lKLGNBQUwsR0FBb0IsVUFBUzdMLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWVNLENBQWYsRUFBaUJRLENBQWpCLEVBQW1CTyxDQUFuQixFQUFxQkUsQ0FBckIsRUFBdUJDLENBQXZCLEVBQXlCO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLENBQUN4QyxDQUFELEVBQUdDLENBQUgsQ0FBTjtBQUFBLGNBQVlRLENBQUMsR0FBQyxDQUFDTSxDQUFELEVBQUdNLENBQUgsQ0FBZDtBQUFBLGNBQW9CMEIsQ0FBQyxHQUFDLENBQUNsQixDQUFELEVBQUdPLENBQUgsQ0FBdEI7QUFBQSxjQUE0QnhCLENBQUMsR0FBQyxDQUFDMEIsQ0FBRCxFQUFHQyxDQUFILENBQTlCO0FBQW9DLGVBQUtnSixRQUFMLENBQWMvSSxDQUFDLENBQUMsQ0FBRCxDQUFmLEVBQW1CQSxDQUFDLENBQUMsQ0FBRCxDQUFwQixHQUF5QixLQUFLK0ksUUFBTCxDQUFjM0ssQ0FBQyxDQUFDLENBQUQsQ0FBZixFQUFtQkEsQ0FBQyxDQUFDLENBQUQsQ0FBcEIsQ0FBekI7O0FBQWtELGVBQUksSUFBSU8sQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxJQUFFLENBQWYsRUFBaUJBLENBQUMsRUFBbEIsRUFBcUI7QUFBQyxnQkFBSUMsQ0FBQyxHQUFDLFVBQVNwQixDQUFULEVBQVc7QUFBQyxxQkFBTzRGLElBQUksQ0FBQ0UsR0FBTCxDQUFTLElBQUU5RixDQUFYLEVBQWEsQ0FBYixJQUFnQndDLENBQUMsQ0FBQ3JCLENBQUQsQ0FBakIsR0FBcUIsSUFBRXlFLElBQUksQ0FBQ0UsR0FBTCxDQUFTLElBQUU5RixDQUFYLEVBQWEsQ0FBYixDQUFGLEdBQWtCQSxDQUFsQixHQUFvQlMsQ0FBQyxDQUFDVSxDQUFELENBQTFDLEdBQThDLEtBQUcsSUFBRW5CLENBQUwsSUFBUTRGLElBQUksQ0FBQ0UsR0FBTCxDQUFTOUYsQ0FBVCxFQUFXLENBQVgsQ0FBUixHQUFzQitDLENBQUMsQ0FBQzVCLENBQUQsQ0FBckUsR0FBeUV5RSxJQUFJLENBQUNFLEdBQUwsQ0FBUzlGLENBQVQsRUFBVyxDQUFYLElBQWNZLENBQUMsQ0FBQ08sQ0FBRCxDQUEvRjtBQUFtRyxhQUFySDtBQUFBLGdCQUFzSEwsQ0FBQyxHQUFDLElBQUUwQixDQUFDLENBQUNyQixDQUFELENBQUgsR0FBTyxLQUFHVixDQUFDLENBQUNVLENBQUQsQ0FBWCxHQUFlLElBQUU0QixDQUFDLENBQUM1QixDQUFELENBQTFJO0FBQUEsZ0JBQThJRyxDQUFDLEdBQUMsQ0FBQyxDQUFELEdBQUdrQixDQUFDLENBQUNyQixDQUFELENBQUosR0FBUSxJQUFFVixDQUFDLENBQUNVLENBQUQsQ0FBWCxHQUFlLElBQUU0QixDQUFDLENBQUM1QixDQUFELENBQWxCLEdBQXNCLElBQUVQLENBQUMsQ0FBQ08sQ0FBRCxDQUF6SztBQUFBLGdCQUE2S2QsQ0FBQyxHQUFDLElBQUVJLENBQUMsQ0FBQ1UsQ0FBRCxDQUFILEdBQU8sSUFBRXFCLENBQUMsQ0FBQ3JCLENBQUQsQ0FBekw7O0FBQTZMLGdCQUFHLEtBQUdHLENBQU4sRUFBUTtBQUFDLGtCQUFJaEIsQ0FBQyxHQUFDc0YsSUFBSSxDQUFDRSxHQUFMLENBQVNoRixDQUFULEVBQVcsQ0FBWCxJQUFjLElBQUVULENBQUYsR0FBSWlCLENBQXhCOztBQUEwQixrQkFBRyxFQUFFaEIsQ0FBQyxHQUFDLENBQUosQ0FBSCxFQUFVO0FBQUMsb0JBQUkwSCxDQUFDLEdBQUMsQ0FBQyxDQUFDbEgsQ0FBRCxHQUFHOEUsSUFBSSxDQUFDQyxJQUFMLENBQVV2RixDQUFWLENBQUosS0FBbUIsSUFBRWdCLENBQXJCLENBQU47QUFBOEIsb0JBQUUwRyxDQUFGLElBQUtBLENBQUMsR0FBQyxDQUFQLEtBQVcsS0FBRzdHLENBQUgsSUFBTSxLQUFLc0ssSUFBTCxDQUFVckssQ0FBQyxDQUFDNEcsQ0FBRCxDQUFYLENBQU4sRUFBc0IsS0FBRzdHLENBQUgsSUFBTSxLQUFLdUssSUFBTCxDQUFVdEssQ0FBQyxDQUFDNEcsQ0FBRCxDQUFYLENBQXZDO0FBQXdELG9CQUFJMEMsQ0FBQyxHQUFDLENBQUMsQ0FBQzVKLENBQUQsR0FBRzhFLElBQUksQ0FBQ0MsSUFBTCxDQUFVdkYsQ0FBVixDQUFKLEtBQW1CLElBQUVnQixDQUFyQixDQUFOO0FBQThCLG9CQUFFb0osQ0FBRixJQUFLQSxDQUFDLEdBQUMsQ0FBUCxLQUFXLEtBQUd2SixDQUFILElBQU0sS0FBS3NLLElBQUwsQ0FBVXJLLENBQUMsQ0FBQ3NKLENBQUQsQ0FBWCxDQUFOLEVBQXNCLEtBQUd2SixDQUFILElBQU0sS0FBS3VLLElBQUwsQ0FBVXRLLENBQUMsQ0FBQ3NKLENBQUQsQ0FBWCxDQUF2QztBQUF3RDtBQUFDLGFBQTNOLE1BQStOO0FBQUMsa0JBQUcsS0FBRzVKLENBQU4sRUFBUTtBQUFTLGtCQUFJbUgsQ0FBQyxHQUFDLENBQUM1SCxDQUFELEdBQUdTLENBQVQ7QUFBVyxrQkFBRW1ILENBQUYsSUFBS0EsQ0FBQyxHQUFDLENBQVAsS0FBVyxLQUFHOUcsQ0FBSCxJQUFNLEtBQUtzSyxJQUFMLENBQVVySyxDQUFDLENBQUM2RyxDQUFELENBQVgsQ0FBTixFQUFzQixLQUFHOUcsQ0FBSCxJQUFNLEtBQUt1SyxJQUFMLENBQVV0SyxDQUFDLENBQUM2RyxDQUFELENBQVgsQ0FBdkM7QUFBd0Q7QUFBQztBQUFDLFNBQXI3QyxFQUFzN0MsS0FBSzZELFlBQUwsR0FBa0IsVUFBUzlMLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsaUJBQU8sS0FBS2dMLEVBQUwsSUFBU2pMLENBQVQsSUFBWUEsQ0FBQyxJQUFFLEtBQUtxTCxFQUFwQixJQUF3QixLQUFLRCxFQUFMLElBQVNuTCxDQUFqQyxJQUFvQ0EsQ0FBQyxJQUFFLEtBQUtxTCxFQUFuRDtBQUFzRCxTQUE1Z0QsRUFBNmdELEtBQUtDLFFBQUwsQ0FBY3ZMLENBQWQsRUFBZ0JDLENBQWhCLENBQTdnRCxFQUFnaUQsS0FBS3NMLFFBQUwsQ0FBY3hLLENBQWQsRUFBZ0JNLENBQWhCLENBQWhpRDtBQUFtakQsT0FBOStHLEVBQSsrRzhDLENBQUMsQ0FBQzRILFNBQUYsR0FBWSxVQUFTL0wsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDLElBQU47QUFBVyxhQUFLK0wsSUFBTCxHQUFVLEVBQVYsRUFBYSxLQUFLQSxJQUFMLENBQVVDLFNBQVYsR0FBb0IsVUFBU2pNLENBQVQsRUFBVztBQUFDLGVBQUtvQixDQUFMLEdBQU8rQyxDQUFDLENBQUMyRyxXQUFGLENBQWM5SyxDQUFkLENBQVAsRUFBd0IsS0FBS2tNLEtBQUwsR0FBVyxVQUFTbE0sQ0FBVCxFQUFXO0FBQUNBLGFBQUMsQ0FBQ2lNLFNBQUYsQ0FBWSxLQUFLN0ssQ0FBTCxDQUFPc0osQ0FBUCxJQUFVLENBQXRCLEVBQXdCLEtBQUt0SixDQUFMLENBQU9mLENBQVAsSUFBVSxDQUFsQztBQUFxQyxXQUFwRixFQUFxRixLQUFLOEwsT0FBTCxHQUFhLFVBQVNuTSxDQUFULEVBQVc7QUFBQ0EsYUFBQyxDQUFDaU0sU0FBRixDQUFZLENBQUMsQ0FBRCxHQUFHLEtBQUs3SyxDQUFMLENBQU9zSixDQUFWLElBQWEsQ0FBekIsRUFBMkIsQ0FBQyxDQUFELEdBQUcsS0FBS3RKLENBQUwsQ0FBT2YsQ0FBVixJQUFhLENBQXhDO0FBQTJDLFdBQXpKLEVBQTBKLEtBQUsrTCxZQUFMLEdBQWtCLFVBQVNwTSxDQUFULEVBQVc7QUFBQ0EsYUFBQyxDQUFDNkssY0FBRixDQUFpQixDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxLQUFLekosQ0FBTCxDQUFPc0osQ0FBUCxJQUFVLENBQW5CLEVBQXFCLEtBQUt0SixDQUFMLENBQU9mLENBQVAsSUFBVSxDQUEvQixDQUFqQjtBQUFvRCxXQUE1TztBQUE2TyxTQUExUixFQUEyUixLQUFLMkwsSUFBTCxDQUFVSyxNQUFWLEdBQWlCLFVBQVNyTSxDQUFULEVBQVc7QUFBQyxjQUFJQyxDQUFDLEdBQUNrRSxDQUFDLENBQUNxRyxhQUFGLENBQWdCeEssQ0FBaEIsQ0FBTjtBQUF5QixlQUFLc00sS0FBTCxHQUFXLElBQUluSSxDQUFDLENBQUNrRCxRQUFOLENBQWUsT0FBZixFQUF1QnBILENBQUMsQ0FBQyxDQUFELENBQXhCLENBQVgsRUFBd0MsS0FBS3NNLEVBQUwsR0FBUXRNLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTSxDQUF0RCxFQUF3RCxLQUFLdU0sRUFBTCxHQUFRdk0sQ0FBQyxDQUFDLENBQUQsQ0FBRCxJQUFNLENBQXRFLEVBQXdFLEtBQUtpTSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBVztBQUFDQSxhQUFDLENBQUNpTSxTQUFGLENBQVksS0FBS00sRUFBakIsRUFBb0IsS0FBS0MsRUFBekIsR0FBNkJ4TSxDQUFDLENBQUNxTSxNQUFGLENBQVMsS0FBS0MsS0FBTCxDQUFXckQsU0FBWCxFQUFULENBQTdCLEVBQThEakosQ0FBQyxDQUFDaU0sU0FBRixDQUFZLENBQUMsS0FBS00sRUFBbEIsRUFBcUIsQ0FBQyxLQUFLQyxFQUEzQixDQUE5RDtBQUE2RixXQUE1TCxFQUE2TCxLQUFLTCxPQUFMLEdBQWEsVUFBU25NLENBQVQsRUFBVztBQUFDQSxhQUFDLENBQUNpTSxTQUFGLENBQVksS0FBS00sRUFBakIsRUFBb0IsS0FBS0MsRUFBekIsR0FBNkJ4TSxDQUFDLENBQUNxTSxNQUFGLENBQVMsQ0FBQyxDQUFELEdBQUcsS0FBS0MsS0FBTCxDQUFXckQsU0FBWCxFQUFaLENBQTdCLEVBQWlFakosQ0FBQyxDQUFDaU0sU0FBRixDQUFZLENBQUMsS0FBS00sRUFBbEIsRUFBcUIsQ0FBQyxLQUFLQyxFQUEzQixDQUFqRTtBQUFnRyxXQUF0VCxFQUF1VCxLQUFLSixZQUFMLEdBQWtCLFVBQVNwTSxDQUFULEVBQVc7QUFBQyxnQkFBSUMsQ0FBQyxHQUFDLEtBQUtxTSxLQUFMLENBQVdyRCxTQUFYLEVBQU47QUFBNkJqSixhQUFDLENBQUM2SyxjQUFGLENBQWlCLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLEtBQUt6SixDQUFMLENBQU9zSixDQUFQLElBQVUsQ0FBbkIsRUFBcUIsS0FBS3RKLENBQUwsQ0FBT2YsQ0FBUCxJQUFVLENBQS9CLENBQWpCLEdBQW9ETCxDQUFDLENBQUM2SyxjQUFGLENBQWlCLENBQUNqRixJQUFJLENBQUM2RyxHQUFMLENBQVN4TSxDQUFULENBQUQsRUFBYTJGLElBQUksQ0FBQzhHLEdBQUwsQ0FBU3pNLENBQVQsQ0FBYixFQUF5QixDQUFDMkYsSUFBSSxDQUFDOEcsR0FBTCxDQUFTek0sQ0FBVCxDQUExQixFQUFzQzJGLElBQUksQ0FBQzZHLEdBQUwsQ0FBU3hNLENBQVQsQ0FBdEMsRUFBa0QsQ0FBbEQsRUFBb0QsQ0FBcEQsQ0FBakIsQ0FBcEQsRUFBNkhELENBQUMsQ0FBQzZLLGNBQUYsQ0FBaUIsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBQyxLQUFLekosQ0FBTCxDQUFPc0osQ0FBUixJQUFXLENBQXBCLEVBQXNCLENBQUMsS0FBS3RKLENBQUwsQ0FBT2YsQ0FBUixJQUFXLENBQWpDLENBQWpCLENBQTdIO0FBQW1MLFdBQXJpQjtBQUFzaUIsU0FBdjNCLEVBQXczQixLQUFLMkwsSUFBTCxDQUFVVyxLQUFWLEdBQWdCLFVBQVMzTSxDQUFULEVBQVc7QUFBQyxlQUFLb0IsQ0FBTCxHQUFPK0MsQ0FBQyxDQUFDMkcsV0FBRixDQUFjOUssQ0FBZCxDQUFQLEVBQXdCLEtBQUtrTSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBVztBQUFDQSxhQUFDLENBQUMyTSxLQUFGLENBQVEsS0FBS3ZMLENBQUwsQ0FBT3NKLENBQVAsSUFBVSxDQUFsQixFQUFvQixLQUFLdEosQ0FBTCxDQUFPZixDQUFQLElBQVUsS0FBS2UsQ0FBTCxDQUFPc0osQ0FBakIsSUFBb0IsQ0FBeEM7QUFBMkMsV0FBMUYsRUFBMkYsS0FBS3lCLE9BQUwsR0FBYSxVQUFTbk0sQ0FBVCxFQUFXO0FBQUNBLGFBQUMsQ0FBQzJNLEtBQUYsQ0FBUSxJQUFFLEtBQUt2TCxDQUFMLENBQU9zSixDQUFULElBQVksQ0FBcEIsRUFBc0IsSUFBRSxLQUFLdEosQ0FBTCxDQUFPZixDQUFULElBQVksS0FBS2UsQ0FBTCxDQUFPc0osQ0FBbkIsSUFBc0IsQ0FBNUM7QUFBK0MsV0FBbkssRUFBb0ssS0FBSzBCLFlBQUwsR0FBa0IsVUFBU3BNLENBQVQsRUFBVztBQUFDQSxhQUFDLENBQUM2SyxjQUFGLENBQWlCLENBQUMsS0FBS3pKLENBQUwsQ0FBT3NKLENBQVAsSUFBVSxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsS0FBS3RKLENBQUwsQ0FBT2YsQ0FBUCxJQUFVLENBQTNCLEVBQTZCLENBQTdCLEVBQStCLENBQS9CLENBQWpCO0FBQW9ELFdBQXRQO0FBQXVQLFNBQTNvQyxFQUE0b0MsS0FBSzJMLElBQUwsQ0FBVVksTUFBVixHQUFpQixVQUFTNU0sQ0FBVCxFQUFXO0FBQUMsZUFBS3NCLENBQUwsR0FBTzZDLENBQUMsQ0FBQ3FHLGFBQUYsQ0FBZ0J4SyxDQUFoQixDQUFQLEVBQTBCLEtBQUtrTSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBVztBQUFDQSxhQUFDLENBQUM2TSxTQUFGLENBQVksS0FBS3ZMLENBQUwsQ0FBTyxDQUFQLENBQVosRUFBc0IsS0FBS0EsQ0FBTCxDQUFPLENBQVAsQ0FBdEIsRUFBZ0MsS0FBS0EsQ0FBTCxDQUFPLENBQVAsQ0FBaEMsRUFBMEMsS0FBS0EsQ0FBTCxDQUFPLENBQVAsQ0FBMUMsRUFBb0QsS0FBS0EsQ0FBTCxDQUFPLENBQVAsQ0FBcEQsRUFBOEQsS0FBS0EsQ0FBTCxDQUFPLENBQVAsQ0FBOUQ7QUFBeUUsV0FBMUgsRUFBMkgsS0FBSzZLLE9BQUwsR0FBYSxVQUFTbk0sQ0FBVCxFQUFXO0FBQUMsZ0JBQUlDLENBQUMsR0FBQyxLQUFLcUIsQ0FBTCxDQUFPLENBQVAsQ0FBTjtBQUFBLGdCQUFnQlAsQ0FBQyxHQUFDLEtBQUtPLENBQUwsQ0FBTyxDQUFQLENBQWxCO0FBQUEsZ0JBQTRCRCxDQUFDLEdBQUMsS0FBS0MsQ0FBTCxDQUFPLENBQVAsQ0FBOUI7QUFBQSxnQkFBd0NPLENBQUMsR0FBQyxLQUFLUCxDQUFMLENBQU8sQ0FBUCxDQUExQztBQUFBLGdCQUFvRGMsQ0FBQyxHQUFDLEtBQUtkLENBQUwsQ0FBTyxDQUFQLENBQXREO0FBQUEsZ0JBQWdFZ0IsQ0FBQyxHQUFDLEtBQUtoQixDQUFMLENBQU8sQ0FBUCxDQUFsRTtBQUFBLGdCQUE0RWlCLENBQUMsR0FBQyxLQUFHdEMsQ0FBQyxJQUFFLElBQUVtQyxDQUFGLEdBQUksSUFBRUUsQ0FBUixDQUFELEdBQVl2QixDQUFDLElBQUUsSUFBRWMsQ0FBRixHQUFJLElBQUVTLENBQVIsQ0FBYixHQUF3QmpCLENBQUMsSUFBRSxJQUFFUSxDQUFGLEdBQUksSUFBRU8sQ0FBUixDQUE1QixDQUE5RTtBQUFzSHBDLGFBQUMsQ0FBQzZNLFNBQUYsQ0FBWXRLLENBQUMsSUFBRSxJQUFFSCxDQUFGLEdBQUksSUFBRUUsQ0FBUixDQUFiLEVBQXdCQyxDQUFDLElBQUUsSUFBRUQsQ0FBRixHQUFJLElBQUVULENBQVIsQ0FBekIsRUFBb0NVLENBQUMsSUFBRSxJQUFFbEIsQ0FBRixHQUFJLElBQUVOLENBQVIsQ0FBckMsRUFBZ0R3QixDQUFDLElBQUUsSUFBRXRDLENBQUYsR0FBSSxJQUFFb0IsQ0FBUixDQUFqRCxFQUE0RGtCLENBQUMsSUFBRXhCLENBQUMsR0FBQ3VCLENBQUYsR0FBSWpCLENBQUMsR0FBQ2UsQ0FBUixDQUE3RCxFQUF3RUcsQ0FBQyxJQUFFbEIsQ0FBQyxHQUFDUSxDQUFGLEdBQUk1QixDQUFDLEdBQUNxQyxDQUFSLENBQXpFO0FBQXFGLFdBQS9WLEVBQWdXLEtBQUs4SixZQUFMLEdBQWtCLFVBQVNwTSxDQUFULEVBQVc7QUFBQ0EsYUFBQyxDQUFDNkssY0FBRixDQUFpQixLQUFLdkosQ0FBdEI7QUFBeUIsV0FBdlo7QUFBd1osU0FBamtELEVBQWtrRCxLQUFLMEssSUFBTCxDQUFVYyxRQUFWLEdBQW1CLFVBQVM5TSxDQUFULEVBQVc7QUFBQyxlQUFLK00sSUFBTCxHQUFVOU0sQ0FBQyxDQUFDK0wsSUFBRixDQUFPWSxNQUFqQixFQUF3QixLQUFLRyxJQUFMLENBQVUvTSxDQUFWLENBQXhCLEVBQXFDLEtBQUtzTSxLQUFMLEdBQVcsSUFBSW5JLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxPQUFmLEVBQXVCckgsQ0FBdkIsQ0FBaEQ7QUFBMEUsU0FBM3FELEVBQTRxRCxLQUFLZ00sSUFBTCxDQUFVYyxRQUFWLENBQW1CM0osU0FBbkIsR0FBNkIsSUFBSSxLQUFLNkksSUFBTCxDQUFVWSxNQUFkLEVBQXpzRCxFQUE4dEQsS0FBS1osSUFBTCxDQUFVZ0IsS0FBVixHQUFnQixVQUFTaE4sQ0FBVCxFQUFXO0FBQUMsZUFBSytNLElBQUwsR0FBVTlNLENBQUMsQ0FBQytMLElBQUYsQ0FBT2MsUUFBakIsRUFBMEIsS0FBS0MsSUFBTCxDQUFVL00sQ0FBVixDQUExQixFQUF1QyxLQUFLc0IsQ0FBTCxHQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBS3NFLElBQUksQ0FBQ3FILEdBQUwsQ0FBUyxLQUFLWCxLQUFMLENBQVdyRCxTQUFYLEVBQVQsQ0FBTCxFQUFzQyxDQUF0QyxFQUF3QyxDQUF4QyxFQUEwQyxDQUExQyxDQUE5QztBQUEyRixTQUFyMUQsRUFBczFELEtBQUsrQyxJQUFMLENBQVVnQixLQUFWLENBQWdCN0osU0FBaEIsR0FBMEIsSUFBSSxLQUFLNkksSUFBTCxDQUFVYyxRQUFkLEVBQWgzRCxFQUF1NEQsS0FBS2QsSUFBTCxDQUFVa0IsS0FBVixHQUFnQixVQUFTbE4sQ0FBVCxFQUFXO0FBQUMsZUFBSytNLElBQUwsR0FBVTlNLENBQUMsQ0FBQytMLElBQUYsQ0FBT2MsUUFBakIsRUFBMEIsS0FBS0MsSUFBTCxDQUFVL00sQ0FBVixDQUExQixFQUF1QyxLQUFLc0IsQ0FBTCxHQUFPLENBQUMsQ0FBRCxFQUFHc0UsSUFBSSxDQUFDcUgsR0FBTCxDQUFTLEtBQUtYLEtBQUwsQ0FBV3JELFNBQVgsRUFBVCxDQUFILEVBQW9DLENBQXBDLEVBQXNDLENBQXRDLEVBQXdDLENBQXhDLEVBQTBDLENBQTFDLENBQTlDO0FBQTJGLFNBQTkvRCxFQUErL0QsS0FBSytDLElBQUwsQ0FBVWtCLEtBQVYsQ0FBZ0IvSixTQUFoQixHQUEwQixJQUFJLEtBQUs2SSxJQUFMLENBQVVjLFFBQWQsRUFBemhFLEVBQWdqRSxLQUFLSyxVQUFMLEdBQWdCLEVBQWhrRSxFQUFta0UsS0FBS2pCLEtBQUwsR0FBVyxVQUFTbE0sQ0FBVCxFQUFXO0FBQUMsZUFBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS2tOLFVBQUwsQ0FBZ0J4TCxNQUE5QixFQUFxQzFCLENBQUMsRUFBdEMsRUFBeUMsS0FBS2tOLFVBQUwsQ0FBZ0JsTixDQUFoQixFQUFtQmlNLEtBQW5CLENBQXlCbE0sQ0FBekI7QUFBNEIsU0FBL3BFLEVBQWdxRSxLQUFLbU0sT0FBTCxHQUFhLFVBQVNuTSxDQUFULEVBQVc7QUFBQyxlQUFJLElBQUlDLENBQUMsR0FBQyxLQUFLa04sVUFBTCxDQUFnQnhMLE1BQWhCLEdBQXVCLENBQWpDLEVBQW1DLEtBQUcxQixDQUF0QyxFQUF3Q0EsQ0FBQyxFQUF6QyxFQUE0QyxLQUFLa04sVUFBTCxDQUFnQmxOLENBQWhCLEVBQW1Ca00sT0FBbkIsQ0FBMkJuTSxDQUEzQjtBQUE4QixTQUFud0UsRUFBb3dFLEtBQUtvTSxZQUFMLEdBQWtCLFVBQVNwTSxDQUFULEVBQVc7QUFBQyxlQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLa04sVUFBTCxDQUFnQnhMLE1BQTlCLEVBQXFDMUIsQ0FBQyxFQUF0QyxFQUF5QyxLQUFLa04sVUFBTCxDQUFnQmxOLENBQWhCLEVBQW1CbU0sWUFBbkIsQ0FBZ0NwTSxDQUFoQztBQUFtQyxTQUE5MkU7O0FBQSsyRSxhQUFJLElBQUllLENBQUMsR0FBQ29ELENBQUMsQ0FBQzhCLElBQUYsQ0FBTzlCLENBQUMsQ0FBQytCLGNBQUYsQ0FBaUJsRyxDQUFqQixDQUFQLEVBQTRCaUUsT0FBNUIsQ0FBb0MsZUFBcEMsRUFBb0QsTUFBcEQsRUFBNERBLE9BQTVELENBQW9FLGNBQXBFLEVBQW1GLElBQW5GLEVBQXlGc0csS0FBekYsQ0FBK0YsYUFBL0YsQ0FBTixFQUFvSGxKLENBQUMsR0FBQyxDQUExSCxFQUE0SEEsQ0FBQyxHQUFDTixDQUFDLENBQUNZLE1BQWhJLEVBQXVJTixDQUFDLEVBQXhJLEVBQTJJLElBQUcsV0FBU04sQ0FBQyxDQUFDTSxDQUFELENBQWIsRUFBaUI7QUFBQyxjQUFJUSxDQUFDLEdBQUNzQyxDQUFDLENBQUM4QixJQUFGLENBQU9sRixDQUFDLENBQUNNLENBQUQsQ0FBRCxDQUFLa0osS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBUCxDQUFOO0FBQUEsY0FBaUNuSSxDQUFDLEdBQUNyQixDQUFDLENBQUNNLENBQUQsQ0FBRCxDQUFLa0osS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUJ0RyxPQUFuQixDQUEyQixHQUEzQixFQUErQixFQUEvQixDQUFuQztBQUFBLGNBQXNFM0IsQ0FBQyxHQUFDLEtBQUswSixJQUFMLENBQVVuSyxDQUFWLENBQXhFOztBQUFxRixjQUFHLEtBQUssQ0FBTCxLQUFTUyxDQUFaLEVBQWM7QUFBQyxnQkFBSUMsQ0FBQyxHQUFDLElBQUlELENBQUosQ0FBTUYsQ0FBTixDQUFOO0FBQWVHLGFBQUMsQ0FBQzZLLElBQUYsR0FBT3ZMLENBQVAsRUFBUyxLQUFLc0wsVUFBTCxDQUFnQjVILElBQWhCLENBQXFCaEQsQ0FBckIsQ0FBVDtBQUFpQztBQUFDO0FBQUMsT0FBcHJNLEVBQXFyTTRCLENBQUMsQ0FBQ2tKLFdBQUYsR0FBYyxVQUFTck4sQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQlEsQ0FBakIsRUFBbUJPLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QkMsQ0FBdkIsRUFBeUJDLENBQXpCLEVBQTJCL0IsQ0FBM0IsRUFBNkI7QUFBQyxZQUFJc0MsQ0FBQyxHQUFDLENBQUM5QyxDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDK0IsY0FBRixDQUFpQmpHLENBQWpCLENBQUgsRUFBd0JnRSxPQUF4QixDQUFnQyxVQUFoQyxFQUEyQyxFQUEzQyxDQUFILEVBQW1Ec0csS0FBbkQsQ0FBeUQsR0FBekQsRUFBOEQsQ0FBOUQsS0FBa0UsVUFBeEU7QUFBQSxZQUFtRjNKLENBQUMsR0FBQ1gsQ0FBQyxDQUFDc0ssS0FBRixDQUFRLEdBQVIsRUFBYSxDQUFiLEtBQWlCLE1BQXRHO0FBQUEsWUFBNkdwSixDQUFDLEdBQUNKLENBQUMsR0FBQ00sQ0FBakg7QUFBQSxZQUFtSEQsQ0FBQyxHQUFDUyxDQUFDLEdBQUNPLENBQXZIO0FBQUEsWUFBeUh0QixDQUFDLEdBQUM4RSxJQUFJLENBQUMwSCxHQUFMLENBQVNuTSxDQUFULEVBQVdDLENBQVgsQ0FBM0g7QUFBQSxZQUF5SUUsQ0FBQyxHQUFDc0UsSUFBSSxDQUFDMkgsR0FBTCxDQUFTcE0sQ0FBVCxFQUFXQyxDQUFYLENBQTNJO0FBQXlKLGtCQUFRUixDQUFSLEtBQVlTLENBQUMsSUFBRVAsQ0FBSCxFQUFLc0IsQ0FBQyxJQUFFdEIsQ0FBcEIsR0FBdUIsV0FBU0YsQ0FBVCxLQUFhUyxDQUFDLElBQUVDLENBQUgsRUFBS2MsQ0FBQyxJQUFFZCxDQUFyQixDQUF2QixFQUErQ2tCLENBQUMsR0FBQyxJQUFJMkIsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE1BQWYsRUFBc0I3RSxDQUF0QixDQUFqRCxFQUEwRS9CLENBQUMsR0FBQyxJQUFJMEQsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE1BQWYsRUFBc0I1RyxDQUF0QixDQUE1RSxFQUFxRytCLENBQUMsQ0FBQ2lGLFFBQUYsTUFBY2hILENBQUMsQ0FBQ2dILFFBQUYsRUFBZCxHQUEyQnpILENBQUMsQ0FBQ2lNLFNBQUYsQ0FBWSxDQUFDbkwsQ0FBRCxHQUFHMEIsQ0FBQyxDQUFDdUcsUUFBRixDQUFXLEdBQVgsQ0FBZixFQUErQixDQUFDakksQ0FBRCxHQUFHTCxDQUFDLENBQUNzSSxRQUFGLENBQVcsR0FBWCxDQUFsQyxDQUEzQixJQUErRWhHLENBQUMsQ0FBQ2lCLEtBQUYsQ0FBUSxPQUFSLE1BQW1CLFVBQVFwRCxDQUFSLElBQVdFLENBQUMsSUFBRU0sQ0FBZCxJQUFpQixXQUFTUixDQUFULElBQVlVLENBQUMsSUFBRUYsQ0FBbkQsS0FBdURwQixDQUFDLENBQUNpTSxTQUFGLENBQVlsTCxDQUFDLEdBQUMsQ0FBRixHQUFJTSxDQUFDLEdBQUMsQ0FBbEIsRUFBb0IsQ0FBcEIsQ0FBdkQsRUFBOEUwQixDQUFDLENBQUNpQixLQUFGLENBQVEsT0FBUixNQUFtQixVQUFRcEQsQ0FBUixJQUFXRSxDQUFDLElBQUVLLENBQWQsSUFBaUIsV0FBU1AsQ0FBVCxJQUFZVSxDQUFDLElBQUVILENBQW5ELEtBQXVEbkIsQ0FBQyxDQUFDaU0sU0FBRixDQUFZLENBQVosRUFBY3BLLENBQUMsR0FBQyxDQUFGLEdBQUlPLENBQUMsR0FBQyxDQUFwQixDQUFySSxFQUE0SlcsQ0FBQyxDQUFDaUIsS0FBRixDQUFRLE9BQVIsTUFBbUIsVUFBUXBELENBQVIsSUFBV0UsQ0FBQyxJQUFFTSxDQUFkLElBQWlCLFdBQVNSLENBQVQsSUFBWVUsQ0FBQyxJQUFFRixDQUFuRCxLQUF1RHBCLENBQUMsQ0FBQ2lNLFNBQUYsQ0FBWWxMLENBQUMsR0FBQ00sQ0FBZCxFQUFnQixDQUFoQixDQUFuTixFQUFzTzBCLENBQUMsQ0FBQ2lCLEtBQUYsQ0FBUSxPQUFSLE1BQW1CLFVBQVFwRCxDQUFSLElBQVdFLENBQUMsSUFBRUssQ0FBZCxJQUFpQixXQUFTUCxDQUFULElBQVlVLENBQUMsSUFBRUgsQ0FBbkQsS0FBdURuQixDQUFDLENBQUNpTSxTQUFGLENBQVksQ0FBWixFQUFjcEssQ0FBQyxHQUFDTyxDQUFoQixDQUE1VyxDQUFyRyxFQUFxZSxVQUFRVyxDQUFSLEdBQVUvQyxDQUFDLENBQUMyTSxLQUFGLENBQVF4TCxDQUFSLEVBQVVDLENBQVYsQ0FBVixHQUF1QixVQUFRUixDQUFSLEdBQVVaLENBQUMsQ0FBQzJNLEtBQUYsQ0FBUTdMLENBQVIsRUFBVUEsQ0FBVixDQUFWLEdBQXVCLFdBQVNGLENBQVQsSUFBWVosQ0FBQyxDQUFDMk0sS0FBRixDQUFRckwsQ0FBUixFQUFVQSxDQUFWLENBQS9oQixFQUE0aUJ0QixDQUFDLENBQUNpTSxTQUFGLENBQVksUUFBTTNKLENBQU4sR0FBUSxDQUFSLEdBQVUsQ0FBQ0EsQ0FBdkIsRUFBeUIsUUFBTUMsQ0FBTixHQUFRLENBQVIsR0FBVSxDQUFDQSxDQUFwQyxDQUE1aUI7QUFBbWxCLE9BQTc4TixFQUE4OE40QixDQUFDLENBQUNqQixPQUFGLEdBQVUsRUFBeDlOLEVBQTI5TmlCLENBQUMsQ0FBQ3FKLGFBQUYsR0FBZ0IsSUFBSXJKLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxPQUFmLEVBQXVCLEVBQXZCLENBQTMrTixFQUFzZ09sRCxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFWLEdBQXNCLFVBQVNyTCxDQUFULEVBQVc7QUFBQyxhQUFLc0wsVUFBTCxHQUFnQixFQUFoQixFQUFtQixLQUFLQyxNQUFMLEdBQVksRUFBL0IsRUFBa0MsS0FBS0MsaUJBQUwsR0FBdUIsRUFBekQsRUFBNEQsS0FBS0MsUUFBTCxHQUFjLEVBQTFFLEVBQTZFLEtBQUtwRixTQUFMLEdBQWUsVUFBU3pJLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSWMsQ0FBQyxHQUFDLEtBQUsyTSxVQUFMLENBQWdCMU4sQ0FBaEIsQ0FBTjtBQUF5QixpQkFBTyxRQUFNZSxDQUFOLEdBQVFBLENBQVIsSUFBVyxLQUFHZCxDQUFILEtBQU9jLENBQUMsR0FBQyxJQUFJb0QsQ0FBQyxDQUFDa0QsUUFBTixDQUFlckgsQ0FBZixFQUFpQixFQUFqQixDQUFGLEVBQXVCLEtBQUswTixVQUFMLENBQWdCMU4sQ0FBaEIsSUFBbUJlLENBQWpELEdBQW9EQSxDQUFDLElBQUVvRCxDQUFDLENBQUNxSixhQUFwRSxDQUFQO0FBQTBGLFNBQTdOLEVBQThOLEtBQUtoRixnQkFBTCxHQUFzQixZQUFVO0FBQUMsZUFBSSxJQUFJeEksQ0FBUixJQUFhLEtBQUswTixVQUFsQixFQUE2QixJQUFHLFVBQVExTixDQUFSLElBQVdBLENBQUMsQ0FBQ2dFLEtBQUYsQ0FBUSxRQUFSLENBQWQsRUFBZ0MsT0FBTyxLQUFLMEosVUFBTCxDQUFnQjFOLENBQWhCLENBQVA7O0FBQTBCLGlCQUFPbUUsQ0FBQyxDQUFDcUosYUFBVDtBQUF1QixTQUE3VyxFQUE4VyxLQUFLTSxLQUFMLEdBQVcsVUFBUzlOLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWU7QUFBQyxjQUFJTSxDQUFDLEdBQUMsS0FBS3NNLE1BQUwsQ0FBWTNOLENBQVosQ0FBTjtBQUFxQixjQUFHLFFBQU1xQixDQUFULEVBQVcsT0FBT0EsQ0FBUDtBQUFTLGNBQUlRLENBQUMsR0FBQyxLQUFLNEcsU0FBTCxDQUFlekksQ0FBZixDQUFOO0FBQXdCLGNBQUcsUUFBTTZCLENBQU4sSUFBU0EsQ0FBQyxDQUFDNEYsUUFBRixFQUFaLEVBQXlCLE9BQU8sS0FBS2tHLE1BQUwsQ0FBWTNOLENBQVosSUFBZTZCLENBQXRCOztBQUF3QixjQUFHLEtBQUdkLENBQU4sRUFBUTtBQUFDLGdCQUFJcUIsQ0FBQyxHQUFDLEtBQUsyTCxNQUFYOztBQUFrQixnQkFBRyxRQUFNM0wsQ0FBVCxFQUFXO0FBQUMsa0JBQUlFLENBQUMsR0FBQ0YsQ0FBQyxDQUFDMEwsS0FBRixDQUFROU4sQ0FBUixDQUFOO0FBQWlCLGtCQUFHLFFBQU1zQyxDQUFOLElBQVNBLENBQUMsQ0FBQ21GLFFBQUYsRUFBWixFQUF5QixPQUFPbkYsQ0FBUDtBQUFTO0FBQUM7O0FBQUEsaUJBQU8sS0FBR3JDLENBQUgsS0FBT29CLENBQUMsR0FBQyxJQUFJOEMsQ0FBQyxDQUFDa0QsUUFBTixDQUFlckgsQ0FBZixFQUFpQixFQUFqQixDQUFGLEVBQXVCLEtBQUsyTixNQUFMLENBQVkzTixDQUFaLElBQWVxQixDQUE3QyxHQUFnREEsQ0FBQyxJQUFFOEMsQ0FBQyxDQUFDcUosYUFBNUQ7QUFBMEUsU0FBaHFCLEVBQWlxQixLQUFLUSxNQUFMLEdBQVksVUFBU2hPLENBQVQsRUFBVztBQUFDLGNBQUcsVUFBUSxLQUFLOE4sS0FBTCxDQUFXLFNBQVgsRUFBc0J2RyxLQUE5QixJQUFxQyxZQUFVLEtBQUt1RyxLQUFMLENBQVcsWUFBWCxFQUF5QnZHLEtBQTNFLEVBQWlGO0FBQUMsZ0JBQUd2SCxDQUFDLENBQUNpTyxJQUFGLElBQVMsS0FBS0gsS0FBTCxDQUFXLE1BQVgsRUFBbUJyRyxRQUFuQixFQUFaLEVBQTBDO0FBQUMsa0JBQUl4SCxDQUFDLEdBQUMsS0FBSzZOLEtBQUwsQ0FBVyxNQUFYLEVBQW1CNUYsYUFBbkIsRUFBTjtBQUF5QyxzQkFBTWpJLENBQU4sSUFBU0EsQ0FBQyxDQUFDaU0sS0FBRixDQUFRbE0sQ0FBUixFQUFVLElBQVYsQ0FBVDtBQUF5QixhQUE3RyxNQUFrSCxJQUFHLEtBQUs4TixLQUFMLENBQVcsUUFBWCxFQUFxQnJHLFFBQXJCLEVBQUgsRUFBbUM7QUFBQyxrQkFBSTFHLENBQUMsR0FBQyxLQUFLK00sS0FBTCxDQUFXLFFBQVgsRUFBcUI1RixhQUFyQixFQUFOO0FBQTJDLHNCQUFNbkgsQ0FBTixJQUFTQSxDQUFDLENBQUNtTCxLQUFGLENBQVFsTSxDQUFSLEVBQVUsSUFBVixDQUFUO0FBQXlCLGFBQXhHLE1BQTZHLEtBQUtrTyxVQUFMLENBQWdCbE8sQ0FBaEIsR0FBbUIsS0FBS21PLGNBQUwsQ0FBb0JuTyxDQUFwQixDQUFuQixFQUEwQyxLQUFLb08sWUFBTCxDQUFrQnBPLENBQWxCLENBQTFDOztBQUErREEsYUFBQyxDQUFDcU8sT0FBRjtBQUFZO0FBQUMsU0FBdGpDLEVBQXVqQyxLQUFLSCxVQUFMLEdBQWdCLFlBQVUsQ0FBRSxDQUFubEMsRUFBb2xDLEtBQUtFLFlBQUwsR0FBa0IsWUFBVSxDQUFFLENBQWxuQyxFQUFtbkMsS0FBS0QsY0FBTCxHQUFvQixVQUFTbk8sQ0FBVCxFQUFXO0FBQUMsZUFBSSxJQUFJQyxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBSzROLFFBQUwsQ0FBY2xNLE1BQTVCLEVBQW1DMUIsQ0FBQyxFQUFwQyxFQUF1QyxLQUFLNE4sUUFBTCxDQUFjNU4sQ0FBZCxFQUFpQitOLE1BQWpCLENBQXdCaE8sQ0FBeEI7QUFBMkIsU0FBcnRDLEVBQXN0QyxLQUFLc08sUUFBTCxHQUFjLFVBQVN0TyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGNBQUljLENBQUMsR0FBQ2YsQ0FBTjtBQUFRQyxXQUFDLEtBQUdjLENBQUMsR0FBQ29ELENBQUMsQ0FBQ29LLGFBQUYsQ0FBZ0J2TyxDQUFoQixDQUFMLENBQUQsRUFBMEJlLENBQUMsQ0FBQ2dOLE1BQUYsR0FBUyxJQUFuQyxFQUF3QyxXQUFTaE4sQ0FBQyxDQUFDcU0sSUFBWCxJQUFpQixLQUFLUyxRQUFMLENBQWN0SSxJQUFkLENBQW1CeEUsQ0FBbkIsQ0FBekQ7QUFBK0UsU0FBejBDLEVBQTAwQyxLQUFLeU4sNEJBQUwsR0FBa0MsWUFBVTtBQUFDLGVBQUksSUFBSXhPLENBQVIsSUFBYW1FLENBQUMsQ0FBQ1csTUFBZixFQUFzQixJQUFHLE9BQUs5RSxDQUFDLENBQUMsQ0FBRCxDQUFOLElBQVdtQixDQUFDLENBQUNpQixDQUFELEVBQUdwQyxDQUFILENBQWYsRUFBcUI7QUFBQyxnQkFBSUMsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDVyxNQUFGLENBQVM5RSxDQUFULENBQU47QUFBQSxnQkFBa0JlLENBQUMsR0FBQ29ELENBQUMsQ0FBQ1ksaUJBQUYsQ0FBb0IvRSxDQUFwQixDQUFwQjtBQUEyQyxnQkFBRyxRQUFNQyxDQUFULEVBQVcsS0FBSSxJQUFJb0IsQ0FBUixJQUFhcEIsQ0FBYixFQUFlO0FBQUMsa0JBQUk0QixDQUFDLEdBQUMsS0FBSytMLGlCQUFMLENBQXVCdk0sQ0FBdkIsQ0FBTjtBQUFnQyxtQkFBSyxDQUFMLEtBQVNRLENBQVQsS0FBYUEsQ0FBQyxHQUFDLEtBQWYsR0FBc0JBLENBQUMsSUFBRWQsQ0FBSCxLQUFPLEtBQUs0TSxNQUFMLENBQVl0TSxDQUFaLElBQWVwQixDQUFDLENBQUNvQixDQUFELENBQWhCLEVBQW9CLEtBQUt1TSxpQkFBTCxDQUF1QnZNLENBQXZCLElBQTBCTixDQUFyRCxDQUF0QjtBQUE4RTtBQUFDO0FBQUMsU0FBemxEO0FBQTBsRCxZQUFJZixDQUFKO0FBQUEsWUFBTUMsQ0FBQyxHQUFDLElBQUl3TyxNQUFKLENBQVcsV0FBWCxDQUFSOztBQUFnQyxZQUFHLFFBQU1yTSxDQUFOLElBQVMsS0FBR0EsQ0FBQyxDQUFDc00sUUFBakIsRUFBMEI7QUFBQyxlQUFJLElBQUkzTixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNxQixDQUFDLENBQUNzTCxVQUFGLENBQWEvTCxNQUEzQixFQUFrQ1osQ0FBQyxFQUFuQyxFQUFzQztBQUFDLGdCQUFJTSxDQUFDLEdBQUNlLENBQUMsQ0FBQ3NMLFVBQUYsQ0FBYTNNLENBQWIsQ0FBTjtBQUFBLGdCQUFzQmMsQ0FBQyxJQUFFN0IsQ0FBQyxHQUFDcUIsQ0FBQyxDQUFDTyxRQUFKLEVBQWEzQixDQUFDLENBQUMwTyxJQUFGLENBQU8zTyxDQUFQLElBQVVBLENBQUMsQ0FBQzRPLFdBQUYsRUFBVixHQUEwQjVPLENBQXpDLENBQXZCO0FBQW1FLGlCQUFLME4sVUFBTCxDQUFnQjdMLENBQWhCLElBQW1CLElBQUlzQyxDQUFDLENBQUNrRCxRQUFOLENBQWV4RixDQUFmLEVBQWlCUixDQUFDLENBQUNrRyxLQUFuQixDQUFuQjtBQUE2Qzs7QUFBQSxjQUFHLEtBQUtpSCw0QkFBTCxJQUFvQyxLQUFLL0YsU0FBTCxDQUFlLE9BQWYsRUFBd0JoQixRQUF4QixFQUF2QyxFQUEwRTtBQUFDLGdCQUFJbkYsQ0FBQyxHQUFDLEtBQUttRyxTQUFMLENBQWUsT0FBZixFQUF3QmxCLEtBQXhCLENBQThCZ0QsS0FBOUIsQ0FBb0MsR0FBcEMsQ0FBTjs7QUFBK0MsaUJBQUl4SixDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUN1QixDQUFDLENBQUNYLE1BQVosRUFBbUJaLENBQUMsRUFBcEIsRUFBdUIsSUFBRyxNQUFJb0QsQ0FBQyxDQUFDOEIsSUFBRixDQUFPM0QsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFSLENBQVAsRUFBb0I7QUFBQyxrQkFBSXdCLENBQUMsR0FBQ0QsQ0FBQyxDQUFDdkIsQ0FBRCxDQUFELENBQUt3SixLQUFMLENBQVcsR0FBWCxDQUFOO0FBQUEsa0JBQXNCL0gsQ0FBQyxHQUFDMkIsQ0FBQyxDQUFDOEIsSUFBRixDQUFPMUQsQ0FBQyxDQUFDLENBQUQsQ0FBUixDQUF4QjtBQUFBLGtCQUFxQzlCLENBQUMsR0FBQzBELENBQUMsQ0FBQzhCLElBQUYsQ0FBTzFELENBQUMsQ0FBQyxDQUFELENBQVIsQ0FBdkM7QUFBb0QsbUJBQUtvTCxNQUFMLENBQVluTCxDQUFaLElBQWUsSUFBSTJCLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZTdFLENBQWYsRUFBaUIvQixDQUFqQixDQUFmO0FBQW1DO0FBQUM7O0FBQUEsZUFBS2dJLFNBQUwsQ0FBZSxJQUFmLEVBQXFCaEIsUUFBckIsTUFBaUMsUUFBTXRELENBQUMsQ0FBQ1UsV0FBRixDQUFjLEtBQUs0RCxTQUFMLENBQWUsSUFBZixFQUFxQmxCLEtBQW5DLENBQXZDLEtBQW1GcEQsQ0FBQyxDQUFDVSxXQUFGLENBQWMsS0FBSzRELFNBQUwsQ0FBZSxJQUFmLEVBQXFCbEIsS0FBbkMsSUFBMEMsSUFBN0g7O0FBQW1JLGVBQUl4RyxDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUNxQixDQUFDLENBQUNWLFVBQUYsQ0FBYUMsTUFBdkIsRUFBOEJaLENBQUMsRUFBL0IsRUFBa0M7QUFBQyxnQkFBSWdDLENBQUMsR0FBQ1gsQ0FBQyxDQUFDVixVQUFGLENBQWFYLENBQWIsQ0FBTjs7QUFBc0IsZ0JBQUcsS0FBR2dDLENBQUMsQ0FBQzJMLFFBQUwsSUFBZSxLQUFLSixRQUFMLENBQWN2TCxDQUFkLEVBQWdCLENBQUMsQ0FBakIsQ0FBZixFQUFtQyxLQUFLOEwsZ0JBQUwsS0FBd0IsS0FBRzlMLENBQUMsQ0FBQzJMLFFBQUwsSUFBZSxLQUFHM0wsQ0FBQyxDQUFDMkwsUUFBNUMsQ0FBdEMsRUFBNEY7QUFBQyxrQkFBSTlOLENBQUMsR0FBQ21DLENBQUMsQ0FBQ3dFLEtBQUYsSUFBU3hFLENBQUMsQ0FBQytMLElBQVgsSUFBaUIvTCxDQUFDLENBQUNnTSxXQUFuQixJQUFnQyxFQUF0QztBQUF5QyxvQkFBSTVLLENBQUMsQ0FBQytCLGNBQUYsQ0FBaUJ0RixDQUFqQixDQUFKLElBQXlCLEtBQUswTixRQUFMLENBQWMsSUFBSW5LLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVThMLEtBQWQsQ0FBb0JqTSxDQUFwQixDQUFkLEVBQXFDLENBQUMsQ0FBdEMsQ0FBekI7QUFBa0U7QUFBQztBQUFDO0FBQUMsT0FBejlTLEVBQTA5U29CLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStMLG1CQUFWLEdBQThCLFVBQVNqUCxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLa1AsZ0JBQUwsR0FBc0IsWUFBVTtBQUFDLGVBQUksSUFBSWxQLENBQUMsR0FBQyxDQUFOLEVBQVFDLENBQUMsR0FBQyxJQUFkLEVBQW1CLFFBQU1BLENBQXpCLEdBQTRCO0FBQUMsZ0JBQUljLENBQUMsR0FBQ2QsQ0FBQyxDQUFDNk4sS0FBRixDQUFRLFNBQVIsRUFBa0IsQ0FBQyxDQUFuQixFQUFxQixDQUFDLENBQXRCLENBQU47QUFBK0IvTSxhQUFDLENBQUMwRyxRQUFGLE9BQWV6SCxDQUFDLElBQUVlLENBQUMsQ0FBQzJHLFFBQUYsRUFBbEIsR0FBZ0N6SCxDQUFDLEdBQUNBLENBQUMsQ0FBQzhOLE1BQXBDO0FBQTJDOztBQUFBLGlCQUFPL04sQ0FBUDtBQUFTLFNBQTlMLEVBQStMLEtBQUtrTyxVQUFMLEdBQWdCLFVBQVNsTyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGNBQUcsQ0FBQ0EsQ0FBSixFQUFNO0FBQUMsZ0JBQUljLENBQUo7QUFBTSxnQkFBRyxLQUFLK00sS0FBTCxDQUFXLE1BQVgsRUFBbUIzRixlQUFuQixFQUFILEVBQXdDLFNBQU9wSCxDQUFDLEdBQUMsS0FBSytNLEtBQUwsQ0FBVyxNQUFYLEVBQW1CekYsc0JBQW5CLENBQTBDLElBQTFDLEVBQStDLEtBQUt5RixLQUFMLENBQVcsY0FBWCxDQUEvQyxDQUFULE1BQXVGOU4sQ0FBQyxDQUFDbVAsU0FBRixHQUFZcE8sQ0FBbkcsRUFBeEMsS0FBbUosSUFBRyxLQUFLK00sS0FBTCxDQUFXLE1BQVgsRUFBbUJyRyxRQUFuQixFQUFILEVBQWlDO0FBQUMsa0JBQUlwRyxDQUFKO0FBQU0sZ0NBQWdCLENBQUNBLENBQUMsR0FBQyxLQUFLeU0sS0FBTCxDQUFXLE1BQVgsQ0FBSCxFQUF1QnZHLEtBQXZDLEtBQStDbEcsQ0FBQyxDQUFDa0csS0FBRixHQUFRLEtBQUt1RyxLQUFMLENBQVcsT0FBWCxFQUFvQnZHLEtBQTNFLEdBQWtGLGFBQVdsRyxDQUFDLENBQUNrRyxLQUFiLEtBQXFCdkgsQ0FBQyxDQUFDbVAsU0FBRixHQUFZLFVBQVE5TixDQUFDLENBQUNrRyxLQUFWLEdBQWdCLGVBQWhCLEdBQWdDbEcsQ0FBQyxDQUFDa0csS0FBbkUsQ0FBbEY7QUFBNEo7QUFBQSxnQkFBRyxLQUFLdUcsS0FBTCxDQUFXLGNBQVgsRUFBMkJyRyxRQUEzQixFQUFILEVBQXlDcEcsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQyxJQUFJOEMsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE1BQWYsRUFBc0JySCxDQUFDLENBQUNtUCxTQUF4QixDQUFILEVBQXVDckgsVUFBdkMsQ0FBa0QsS0FBS2dHLEtBQUwsQ0FBVyxjQUFYLENBQWxELENBQUYsRUFBZ0Y5TixDQUFDLENBQUNtUCxTQUFGLEdBQVk5TixDQUFDLENBQUNrRyxLQUE5RjtBQUFvRyxnQkFBRyxLQUFLdUcsS0FBTCxDQUFXLFFBQVgsRUFBcUIzRixlQUFyQixFQUFILEVBQTBDLFNBQU9wSCxDQUFDLEdBQUMsS0FBSytNLEtBQUwsQ0FBVyxRQUFYLEVBQXFCekYsc0JBQXJCLENBQTRDLElBQTVDLEVBQWlELEtBQUt5RixLQUFMLENBQVcsZ0JBQVgsQ0FBakQsQ0FBVCxNQUEyRjlOLENBQUMsQ0FBQ29QLFdBQUYsR0FBY3JPLENBQXpHLEVBQTFDLEtBQTJKLElBQUcsS0FBSytNLEtBQUwsQ0FBVyxRQUFYLEVBQXFCckcsUUFBckIsRUFBSCxFQUFtQztBQUFDLGtCQUFJNUYsQ0FBSjtBQUFNLGdDQUFnQixDQUFDQSxDQUFDLEdBQUMsS0FBS2lNLEtBQUwsQ0FBVyxRQUFYLENBQUgsRUFBeUJ2RyxLQUF6QyxLQUFpRDFGLENBQUMsQ0FBQzBGLEtBQUYsR0FBUSxLQUFLdUcsS0FBTCxDQUFXLE9BQVgsRUFBb0J2RyxLQUE3RSxHQUFvRixhQUFXMUYsQ0FBQyxDQUFDMEYsS0FBYixLQUFxQnZILENBQUMsQ0FBQ29QLFdBQUYsR0FBYyxVQUFRdk4sQ0FBQyxDQUFDMEYsS0FBVixHQUFnQixlQUFoQixHQUFnQzFGLENBQUMsQ0FBQzBGLEtBQXJFLENBQXBGO0FBQWdLO0FBQUEsZ0JBQUcsS0FBS3VHLEtBQUwsQ0FBVyxnQkFBWCxFQUE2QnJHLFFBQTdCLEVBQUgsRUFBMkM1RixDQUFDLEdBQUMsQ0FBQ0EsQ0FBQyxHQUFDLElBQUlzQyxDQUFDLENBQUNrRCxRQUFOLENBQWUsUUFBZixFQUF3QnJILENBQUMsQ0FBQ29QLFdBQTFCLENBQUgsRUFBMkN0SCxVQUEzQyxDQUFzRCxLQUFLZ0csS0FBTCxDQUFXLGdCQUFYLENBQXRELENBQUYsRUFBc0Y5TixDQUFDLENBQUNvUCxXQUFGLEdBQWN2TixDQUFDLENBQUMwRixLQUF0Rzs7QUFBNEcsZ0JBQUcsS0FBS3VHLEtBQUwsQ0FBVyxjQUFYLEVBQTJCckcsUUFBM0IsRUFBSCxFQUF5QztBQUFDLGtCQUFJckYsQ0FBQyxHQUFDLEtBQUswTCxLQUFMLENBQVcsY0FBWCxFQUEyQi9FLFFBQTNCLEVBQU47QUFBNEMvSSxlQUFDLENBQUNxUCxTQUFGLEdBQVksS0FBR2pOLENBQUgsR0FBSyxJQUFMLEdBQVVBLENBQXRCO0FBQXdCOztBQUFBLGdCQUFHLEtBQUswTCxLQUFMLENBQVcsZ0JBQVgsRUFBNkJyRyxRQUE3QixPQUEwQ3pILENBQUMsQ0FBQ3NQLE9BQUYsR0FBVSxLQUFLeEIsS0FBTCxDQUFXLGdCQUFYLEVBQTZCdkcsS0FBakYsR0FBd0YsS0FBS3VHLEtBQUwsQ0FBVyxpQkFBWCxFQUE4QnJHLFFBQTlCLE9BQTJDekgsQ0FBQyxDQUFDdVAsUUFBRixHQUFXLEtBQUt6QixLQUFMLENBQVcsaUJBQVgsRUFBOEJ2RyxLQUFwRixDQUF4RixFQUFtTCxLQUFLdUcsS0FBTCxDQUFXLG1CQUFYLEVBQWdDckcsUUFBaEMsT0FBNkN6SCxDQUFDLENBQUN3UCxVQUFGLEdBQWEsS0FBSzFCLEtBQUwsQ0FBVyxtQkFBWCxFQUFnQ3ZHLEtBQTFGLENBQW5MLEVBQW9SLEtBQUt1RyxLQUFMLENBQVcsYUFBWCxFQUEwQnJHLFFBQTFCLE9BQXVDekgsQ0FBQyxDQUFDeVAsVUFBRixHQUFhLEtBQUszQixLQUFMLENBQVcsYUFBWCxFQUEwQnZHLEtBQTlFLENBQXBSLEVBQXlXLEtBQUt1RyxLQUFMLENBQVcsa0JBQVgsRUFBK0JyRyxRQUEvQixNQUEyQyxVQUFRLEtBQUtxRyxLQUFMLENBQVcsa0JBQVgsRUFBK0J2RyxLQUE5YixFQUFvYztBQUFDLGtCQUFJakYsQ0FBQyxHQUFDNkIsQ0FBQyxDQUFDcUcsYUFBRixDQUFnQixLQUFLc0QsS0FBTCxDQUFXLGtCQUFYLEVBQStCdkcsS0FBL0MsQ0FBTjtBQUE0RCxtQkFBSyxDQUFMLEtBQVN2SCxDQUFDLENBQUMwUCxXQUFYLEdBQXVCMVAsQ0FBQyxDQUFDMFAsV0FBRixDQUFjcE4sQ0FBZCxDQUF2QixHQUF3QyxLQUFLLENBQUwsS0FBU3RDLENBQUMsQ0FBQzJQLGNBQVgsR0FBMEIzUCxDQUFDLENBQUMyUCxjQUFGLEdBQWlCck4sQ0FBM0MsR0FBNkMsS0FBSyxDQUFMLEtBQVN0QyxDQUFDLENBQUM0UCxPQUFYLElBQW9CLEtBQUd0TixDQUFDLENBQUNYLE1BQUwsSUFBYSxLQUFHVyxDQUFDLENBQUMsQ0FBRCxDQUFyQyxLQUEyQ3RDLENBQUMsQ0FBQzRQLE9BQUYsR0FBVXROLENBQXJELENBQXJGO0FBQTZJLGtCQUFJQyxDQUFDLEdBQUMsS0FBS3VMLEtBQUwsQ0FBVyxtQkFBWCxFQUFnQy9FLFFBQWhDLEVBQU47QUFBaUQsbUJBQUssQ0FBTCxLQUFTL0ksQ0FBQyxDQUFDNlAsY0FBWCxHQUEwQjdQLENBQUMsQ0FBQzZQLGNBQUYsR0FBaUJ0TixDQUEzQyxHQUE2QyxLQUFLLENBQUwsS0FBU3ZDLENBQUMsQ0FBQzhQLG9CQUFYLEdBQWdDOVAsQ0FBQyxDQUFDOFAsb0JBQUYsR0FBdUJ2TixDQUF2RCxHQUF5RCxLQUFLLENBQUwsS0FBU3ZDLENBQUMsQ0FBQytQLGFBQVgsS0FBMkIvUCxDQUFDLENBQUMrUCxhQUFGLEdBQWdCeE4sQ0FBM0MsQ0FBdEc7QUFBb0o7QUFBQzs7QUFBQSxjQUFHLEtBQUssQ0FBTCxLQUFTdkMsQ0FBQyxDQUFDZ0ssSUFBZCxFQUFtQixJQUFHLEtBQUs4RCxLQUFMLENBQVcsTUFBWCxFQUFtQnJHLFFBQW5CLEVBQUgsRUFBaUN6SCxDQUFDLENBQUNnSyxJQUFGLEdBQU8sS0FBSzhELEtBQUwsQ0FBVyxNQUFYLEVBQW1CdkcsS0FBMUIsQ0FBakMsS0FBcUU7QUFBQ3ZILGFBQUMsQ0FBQ2dLLElBQUYsR0FBTzdGLENBQUMsQ0FBQ3dGLElBQUYsQ0FBT0csVUFBUCxDQUFrQixLQUFLZ0UsS0FBTCxDQUFXLFlBQVgsRUFBeUJ2RyxLQUEzQyxFQUFpRCxLQUFLdUcsS0FBTCxDQUFXLGNBQVgsRUFBMkJ2RyxLQUE1RSxFQUFrRixLQUFLdUcsS0FBTCxDQUFXLGFBQVgsRUFBMEJ2RyxLQUE1RyxFQUFrSCxLQUFLdUcsS0FBTCxDQUFXLFdBQVgsRUFBd0JyRyxRQUF4QixLQUFtQyxLQUFLcUcsS0FBTCxDQUFXLFdBQVgsRUFBd0IvRSxRQUF4QixLQUFtQyxJQUF0RSxHQUEyRSxFQUE3TCxFQUFnTSxLQUFLK0UsS0FBTCxDQUFXLGFBQVgsRUFBMEJ2RyxLQUExTixFQUFpTytDLFFBQWpPLEVBQVA7QUFBbVAsZ0JBQUk5SCxDQUFDLEdBQUMsS0FBS3NMLEtBQUwsQ0FBVyxXQUFYLEVBQXVCLENBQUMsQ0FBeEIsRUFBMEIsQ0FBQyxDQUEzQixDQUFOO0FBQW9DdEwsYUFBQyxDQUFDc0csUUFBRixPQUFlM0UsQ0FBQyxDQUFDSyxNQUFGLEdBQVNoQyxDQUFDLENBQUN1RyxRQUFGLEVBQXhCO0FBQXNDO0FBQUEsZUFBSytFLEtBQUwsQ0FBVyxXQUFYLEVBQXVCLENBQUMsQ0FBeEIsRUFBMEIsQ0FBQyxDQUEzQixFQUE4QnJHLFFBQTlCLE1BQTBDLElBQUl0RCxDQUFDLENBQUM0SCxTQUFOLENBQWdCLEtBQUsrQixLQUFMLENBQVcsV0FBWCxFQUF1QixDQUFDLENBQXhCLEVBQTBCLENBQUMsQ0FBM0IsRUFBOEJ2RyxLQUE5QyxFQUFxRDJFLEtBQXJELENBQTJEbE0sQ0FBM0QsQ0FBMUM7O0FBQXdHLGNBQUcsS0FBSzhOLEtBQUwsQ0FBVyxXQUFYLEVBQXVCLENBQUMsQ0FBeEIsRUFBMEIsQ0FBQyxDQUEzQixFQUE4QnJHLFFBQTlCLEVBQUgsRUFBNEM7QUFBQyxnQkFBSWhILENBQUMsR0FBQyxLQUFLcU4sS0FBTCxDQUFXLFdBQVgsRUFBdUIsQ0FBQyxDQUF4QixFQUEwQixDQUFDLENBQTNCLEVBQThCNUYsYUFBOUIsRUFBTjtBQUFvRCxvQkFBTXpILENBQU4sSUFBU0EsQ0FBQyxDQUFDeUwsS0FBRixDQUFRbE0sQ0FBUixDQUFUO0FBQW9COztBQUFBQSxXQUFDLENBQUNnUSxXQUFGLEdBQWMsS0FBS2QsZ0JBQUwsRUFBZDtBQUFzQyxTQUFyeUY7QUFBc3lGLE9BQTF5WSxFQUEyeVkvSyxDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBVixDQUE4QjlMLFNBQTlCLEdBQXdDLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQW4xWSxFQUE2Mll0SixDQUFDLENBQUNqQixPQUFGLENBQVUrTSxlQUFWLEdBQTBCLFVBQVNqUSxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQXBCLEVBQXdDLEtBQUtsQyxJQUFMLENBQVUvTSxDQUFWLENBQXhDLEVBQXFELEtBQUtrUSxJQUFMLEdBQVUsVUFBU2xRLENBQVQsRUFBVztBQUFDLGlCQUFPLFFBQU1BLENBQU4sSUFBU0EsQ0FBQyxDQUFDbVEsU0FBRixFQUFULEVBQXVCLElBQUloTSxDQUFDLENBQUM2RyxXQUFOLEVBQTlCO0FBQWdELFNBQTNILEVBQTRILEtBQUttRCxjQUFMLEdBQW9CLFVBQVNuTyxDQUFULEVBQVc7QUFBQyxlQUFLa1EsSUFBTCxDQUFVbFEsQ0FBVixHQUFhbUUsQ0FBQyxDQUFDaU0sS0FBRixDQUFRQyxTQUFSLENBQWtCLElBQWxCLEVBQXVCclEsQ0FBdkIsQ0FBYixFQUF1QyxNQUFJQSxDQUFDLENBQUNtUCxTQUFOLEtBQWtCLGFBQVcsS0FBS3JCLEtBQUwsQ0FBVyxXQUFYLEVBQXdCbEcsY0FBeEIsQ0FBdUMsU0FBdkMsQ0FBWCxHQUE2RDVILENBQUMsQ0FBQ3NRLElBQUYsQ0FBTyxLQUFLeEMsS0FBTCxDQUFXLFdBQVgsRUFBd0J2RyxLQUEvQixDQUE3RCxHQUFtR3ZILENBQUMsQ0FBQ3NRLElBQUYsRUFBckgsQ0FBdkMsRUFBc0ssTUFBSXRRLENBQUMsQ0FBQ29QLFdBQU4sSUFBbUJwUCxDQUFDLENBQUN1USxNQUFGLEVBQXpMO0FBQW9NLGNBQUl0USxDQUFDLEdBQUMsS0FBS3VRLFVBQUwsRUFBTjs7QUFBd0IsY0FBRyxRQUFNdlEsQ0FBVCxFQUFXO0FBQUMsZ0JBQUcsS0FBSzZOLEtBQUwsQ0FBVyxjQUFYLEVBQTJCM0YsZUFBM0IsRUFBSCxFQUFnRCxDQUFDcEgsQ0FBQyxHQUFDLEtBQUsrTSxLQUFMLENBQVcsY0FBWCxFQUEyQjVGLGFBQTNCLEVBQUgsRUFBK0M4RixNQUEvQyxDQUFzRGhPLENBQXRELEVBQXdEQyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUF4RCxFQUFnRUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBaEU7QUFBeUUsZ0JBQUcsS0FBSzZOLEtBQUwsQ0FBVyxZQUFYLEVBQXlCM0YsZUFBekIsRUFBSCxFQUE4QyxLQUFJLElBQUlwSCxDQUFDLEdBQUMsS0FBSytNLEtBQUwsQ0FBVyxZQUFYLEVBQXlCNUYsYUFBekIsRUFBTixFQUErQzdHLENBQUMsR0FBQyxDQUFyRCxFQUF1REEsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDMEIsTUFBRixHQUFTLENBQWxFLEVBQW9FTixDQUFDLEVBQXJFLEVBQXdFTixDQUFDLENBQUNpTixNQUFGLENBQVNoTyxDQUFULEVBQVdDLENBQUMsQ0FBQ29CLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBWCxFQUFtQnBCLENBQUMsQ0FBQ29CLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBbkI7QUFBNEIsZ0JBQUcsS0FBS3lNLEtBQUwsQ0FBVyxZQUFYLEVBQXlCM0YsZUFBekIsRUFBSCxFQUE4QyxDQUFDcEgsQ0FBQyxHQUFDLEtBQUsrTSxLQUFMLENBQVcsWUFBWCxFQUF5QjVGLGFBQXpCLEVBQUgsRUFBNkM4RixNQUE3QyxDQUFvRGhPLENBQXBELEVBQXNEQyxDQUFDLENBQUNBLENBQUMsQ0FBQzBCLE1BQUYsR0FBUyxDQUFWLENBQUQsQ0FBYyxDQUFkLENBQXRELEVBQXVFMUIsQ0FBQyxDQUFDQSxDQUFDLENBQUMwQixNQUFGLEdBQVMsQ0FBVixDQUFELENBQWMsQ0FBZCxDQUF2RTtBQUF5RjtBQUFDLFNBQXZ4QixFQUF3eEIsS0FBSzhPLGNBQUwsR0FBb0IsWUFBVTtBQUFDLGlCQUFPLEtBQUtQLElBQUwsRUFBUDtBQUFtQixTQUExMEIsRUFBMjBCLEtBQUtNLFVBQUwsR0FBZ0IsWUFBVTtBQUFDLGlCQUFPLElBQVA7QUFBWSxTQUFsM0I7QUFBbTNCLE9BQXR3YSxFQUF1d2FyTSxDQUFDLENBQUNqQixPQUFGLENBQVUrTSxlQUFWLENBQTBCOU0sU0FBMUIsR0FBb0MsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStMLG1CQUFkLEVBQTN5YSxFQUE2MGE5SyxDQUFDLENBQUN1TSxXQUFGLEdBQWMsVUFBUzFRLENBQVQsRUFBVztBQUFDQSxTQUFDLENBQUNvUCxXQUFGLEdBQWMsZUFBZCxFQUE4QnBQLENBQUMsQ0FBQ3NQLE9BQUYsR0FBVSxNQUF4QyxFQUErQ3RQLENBQUMsQ0FBQ3VQLFFBQUYsR0FBVyxPQUExRCxFQUFrRXZQLENBQUMsQ0FBQ3dQLFVBQUYsR0FBYSxDQUEvRTtBQUFpRixPQUF4N2EsRUFBeTdhckwsQ0FBQyxDQUFDakIsT0FBRixDQUFVMUIsR0FBVixHQUFjLFVBQVN4QixDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQXBCLEVBQXdDLEtBQUtsQyxJQUFMLENBQVUvTSxDQUFWLENBQXhDLEVBQXFELEtBQUsyUSxnQkFBTCxHQUFzQixLQUFLdkMsWUFBaEYsRUFBNkYsS0FBS0EsWUFBTCxHQUFrQixVQUFTcE8sQ0FBVCxFQUFXO0FBQUMsZUFBSzJRLGdCQUFMLENBQXNCM1EsQ0FBdEIsR0FBeUJtRSxDQUFDLENBQUNnQixRQUFGLENBQVdLLGFBQVgsRUFBekI7QUFBb0QsU0FBL0ssRUFBZ0wsS0FBS29MLGNBQUwsR0FBb0IsS0FBSzFDLFVBQXpNLEVBQW9OLEtBQUtBLFVBQUwsR0FBZ0IsVUFBU2xPLENBQVQsRUFBVztBQUFDLGNBQUdtRSxDQUFDLENBQUN1TSxXQUFGLENBQWMxUSxDQUFkLEdBQWlCQSxDQUFDLENBQUM2USxNQUFGLENBQVMvQyxLQUFULElBQWdCLEtBQUssQ0FBTCxLQUFTOU4sQ0FBQyxDQUFDZ0ssSUFBM0IsSUFBaUMsS0FBSyxDQUFMLEtBQVN2SixDQUFDLENBQUNxUSxnQkFBaEUsRUFBaUY7QUFBQzlRLGFBQUMsQ0FBQ2dLLElBQUYsR0FBT3ZKLENBQUMsQ0FBQ3FRLGdCQUFGLENBQW1COVEsQ0FBQyxDQUFDNlEsTUFBckIsRUFBNkJFLGdCQUE3QixDQUE4QyxNQUE5QyxDQUFQO0FBQTZELGdCQUFJOVEsQ0FBQyxHQUFDLElBQUlrRSxDQUFDLENBQUNrRCxRQUFOLENBQWUsVUFBZixFQUEwQmxELENBQUMsQ0FBQ3dGLElBQUYsQ0FBT0ksS0FBUCxDQUFhL0osQ0FBQyxDQUFDZ0ssSUFBZixFQUFxQkUsUUFBL0MsQ0FBTjtBQUErRGpLLGFBQUMsQ0FBQ3dILFFBQUYsT0FBZXRELENBQUMsQ0FBQ0ksVUFBRixHQUFhSixDQUFDLENBQUNLLE1BQUYsR0FBU3ZFLENBQUMsQ0FBQzhJLFFBQUYsQ0FBVyxHQUFYLENBQXJDO0FBQXNEOztBQUFBLGVBQUs2SCxjQUFMLENBQW9CNVEsQ0FBcEIsR0FBdUIsS0FBS3lJLFNBQUwsQ0FBZSxHQUFmLEVBQW9CaEIsUUFBcEIsT0FBaUMsS0FBS2dCLFNBQUwsQ0FBZSxHQUFmLEVBQW1CLENBQUMsQ0FBcEIsRUFBdUJsQixLQUF2QixHQUE2QixDQUE5RCxDQUF2QixFQUF3RixLQUFLa0IsU0FBTCxDQUFlLEdBQWYsRUFBb0JoQixRQUFwQixPQUFpQyxLQUFLZ0IsU0FBTCxDQUFlLEdBQWYsRUFBbUIsQ0FBQyxDQUFwQixFQUF1QmxCLEtBQXZCLEdBQTZCLENBQTlELENBQXhGLEVBQXlKdkgsQ0FBQyxDQUFDaU0sU0FBRixDQUFZLEtBQUt4RCxTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBWixFQUE4QyxLQUFLTixTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBOUMsQ0FBeko7QUFBME8sY0FBSWhJLENBQUMsR0FBQ29ELENBQUMsQ0FBQ2dCLFFBQUYsQ0FBV2xFLEtBQVgsRUFBTjtBQUFBLGNBQXlCSSxDQUFDLEdBQUM4QyxDQUFDLENBQUNnQixRQUFGLENBQVdqRSxNQUFYLEVBQTNCOztBQUErQyxjQUFHLEtBQUt1SCxTQUFMLENBQWUsT0FBZixFQUF3QmhCLFFBQXhCLE9BQXFDLEtBQUtnQixTQUFMLENBQWUsT0FBZixFQUF1QixDQUFDLENBQXhCLEVBQTJCbEIsS0FBM0IsR0FBaUMsTUFBdEUsR0FBOEUsS0FBS2tCLFNBQUwsQ0FBZSxRQUFmLEVBQXlCaEIsUUFBekIsT0FBc0MsS0FBS2dCLFNBQUwsQ0FBZSxRQUFmLEVBQXdCLENBQUMsQ0FBekIsRUFBNEJsQixLQUE1QixHQUFrQyxNQUF4RSxDQUE5RSxFQUE4SixLQUFLLENBQUwsS0FBUyxLQUFLeUosSUFBL0ssRUFBb0w7QUFBQ2pRLGFBQUMsR0FBQyxLQUFLMEgsU0FBTCxDQUFlLE9BQWYsRUFBd0JNLFFBQXhCLENBQWlDLEdBQWpDLENBQUYsRUFBd0MxSCxDQUFDLEdBQUMsS0FBS29ILFNBQUwsQ0FBZSxRQUFmLEVBQXlCTSxRQUF6QixDQUFrQyxHQUFsQyxDQUExQztBQUFpRixnQkFBSWxILENBQUMsR0FBQyxDQUFOO0FBQUEsZ0JBQVFPLENBQUMsR0FBQyxDQUFWO0FBQVksaUJBQUtxRyxTQUFMLENBQWUsTUFBZixFQUF1QmhCLFFBQXZCLE1BQW1DLEtBQUtnQixTQUFMLENBQWUsTUFBZixFQUF1QmhCLFFBQXZCLEVBQW5DLEtBQXVFNUYsQ0FBQyxHQUFDLENBQUMsS0FBSzRHLFNBQUwsQ0FBZSxNQUFmLEVBQXVCTSxRQUF2QixDQUFnQyxHQUFoQyxDQUFILEVBQXdDM0csQ0FBQyxHQUFDLENBQUMsS0FBS3FHLFNBQUwsQ0FBZSxNQUFmLEVBQXVCTSxRQUF2QixDQUFnQyxHQUFoQyxDQUFsSCxHQUF3SixhQUFXLEtBQUtOLFNBQUwsQ0FBZSxVQUFmLEVBQTJCYixjQUEzQixDQUEwQyxRQUExQyxDQUFYLEtBQWlFNUgsQ0FBQyxDQUFDbVEsU0FBRixJQUFjblEsQ0FBQyxDQUFDaVIsTUFBRixDQUFTcFAsQ0FBVCxFQUFXTyxDQUFYLENBQWQsRUFBNEJwQyxDQUFDLENBQUNrUixNQUFGLENBQVNuUSxDQUFULEVBQVdxQixDQUFYLENBQTVCLEVBQTBDcEMsQ0FBQyxDQUFDa1IsTUFBRixDQUFTblEsQ0FBVCxFQUFXTSxDQUFYLENBQTFDLEVBQXdEckIsQ0FBQyxDQUFDa1IsTUFBRixDQUFTclAsQ0FBVCxFQUFXUixDQUFYLENBQXhELEVBQXNFckIsQ0FBQyxDQUFDbVIsU0FBRixFQUF0RSxFQUFvRm5SLENBQUMsQ0FBQ29SLElBQUYsRUFBckosQ0FBeEo7QUFBdVQ7O0FBQUEsY0FBR2pOLENBQUMsQ0FBQ2dCLFFBQUYsQ0FBV0csVUFBWCxDQUFzQnZFLENBQXRCLEVBQXdCTSxDQUF4QixHQUEyQixLQUFLb0gsU0FBTCxDQUFlLFNBQWYsRUFBMEJoQixRQUExQixFQUE5QixFQUFtRTtBQUFDLGdCQUFJbkYsQ0FBQyxHQUFDNkIsQ0FBQyxDQUFDcUcsYUFBRixDQUFnQixLQUFLL0IsU0FBTCxDQUFlLFNBQWYsRUFBMEJsQixLQUExQyxDQUFOO0FBQUEsZ0JBQXVEaEYsQ0FBQyxHQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUExRDtBQUFBLGdCQUE4REUsQ0FBQyxHQUFDRixDQUFDLENBQUMsQ0FBRCxDQUFqRTtBQUFxRXZCLGFBQUMsR0FBQ3VCLENBQUMsQ0FBQyxDQUFELENBQUgsRUFBT2pCLENBQUMsR0FBQ2lCLENBQUMsQ0FBQyxDQUFELENBQVYsRUFBYzZCLENBQUMsQ0FBQ2tKLFdBQUYsQ0FBY3JOLENBQWQsRUFBZ0IsS0FBS3lJLFNBQUwsQ0FBZSxxQkFBZixFQUFzQ2xCLEtBQXRELEVBQTREcEQsQ0FBQyxDQUFDZ0IsUUFBRixDQUFXbEUsS0FBWCxFQUE1RCxFQUErRUYsQ0FBL0UsRUFBaUZvRCxDQUFDLENBQUNnQixRQUFGLENBQVdqRSxNQUFYLEVBQWpGLEVBQXFHRyxDQUFyRyxFQUF1R2tCLENBQXZHLEVBQXlHQyxDQUF6RyxFQUEyRyxLQUFLaUcsU0FBTCxDQUFlLE1BQWYsRUFBdUJsQixLQUFsSSxFQUF3SSxLQUFLa0IsU0FBTCxDQUFlLE1BQWYsRUFBdUJsQixLQUEvSixDQUFkLEVBQW9McEQsQ0FBQyxDQUFDZ0IsUUFBRixDQUFXSyxhQUFYLEVBQXBMLEVBQStNckIsQ0FBQyxDQUFDZ0IsUUFBRixDQUFXRyxVQUFYLENBQXNCaEQsQ0FBQyxDQUFDLENBQUQsQ0FBdkIsRUFBMkJBLENBQUMsQ0FBQyxDQUFELENBQTVCLENBQS9NO0FBQWdQO0FBQUMsU0FBaHREO0FBQWl0RCxPQUFwcWUsRUFBcXFlNkIsQ0FBQyxDQUFDakIsT0FBRixDQUFVMUIsR0FBVixDQUFjMkIsU0FBZCxHQUF3QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQWQsRUFBN3JlLEVBQSt0ZTlLLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW1PLElBQVYsR0FBZSxVQUFTclIsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStNLGVBQXBCLEVBQW9DLEtBQUtsRCxJQUFMLENBQVUvTSxDQUFWLENBQXBDLEVBQWlELEtBQUtrUSxJQUFMLEdBQVUsVUFBU2xRLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxLQUFLd0ksU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQU47QUFBQSxjQUF3Q2hJLENBQUMsR0FBQyxLQUFLMEgsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQTFDO0FBQUEsY0FBNEUxSCxDQUFDLEdBQUMsS0FBS29ILFNBQUwsQ0FBZSxPQUFmLEVBQXdCTSxRQUF4QixDQUFpQyxHQUFqQyxDQUE5RTtBQUFBLGNBQW9IbEgsQ0FBQyxHQUFDLEtBQUs0RyxTQUFMLENBQWUsUUFBZixFQUF5Qk0sUUFBekIsQ0FBa0MsR0FBbEMsQ0FBdEg7QUFBQSxjQUE2SjNHLENBQUMsR0FBQyxLQUFLcUcsU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQS9KO0FBQUEsY0FBa016RyxDQUFDLEdBQUMsS0FBS21HLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUFwTTs7QUFBdU8sY0FBRyxLQUFLTixTQUFMLENBQWUsSUFBZixFQUFxQmhCLFFBQXJCLE1BQWlDLENBQUMsS0FBS2dCLFNBQUwsQ0FBZSxJQUFmLEVBQXFCaEIsUUFBckIsRUFBbEMsS0FBb0VuRixDQUFDLEdBQUNGLENBQXRFLEdBQXlFLEtBQUtxRyxTQUFMLENBQWUsSUFBZixFQUFxQmhCLFFBQXJCLE1BQWlDLENBQUMsS0FBS2dCLFNBQUwsQ0FBZSxJQUFmLEVBQXFCaEIsUUFBckIsRUFBbEMsS0FBb0VyRixDQUFDLEdBQUNFLENBQXRFLENBQXpFLEVBQWtKRixDQUFDLEdBQUN3RCxJQUFJLENBQUMwSCxHQUFMLENBQVNsTCxDQUFULEVBQVdmLENBQUMsR0FBQyxDQUFiLENBQXBKLEVBQW9LaUIsQ0FBQyxHQUFDc0QsSUFBSSxDQUFDMEgsR0FBTCxDQUFTaEwsQ0FBVCxFQUFXVCxDQUFDLEdBQUMsQ0FBYixDQUF0SyxFQUFzTCxRQUFNN0IsQ0FBL0wsRUFBaU07QUFBQyxnQkFBSXVDLENBQUMsR0FBQyxDQUFDcUQsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBVixJQUFhLENBQWQsSUFBaUIsQ0FBakIsR0FBbUIsQ0FBekI7QUFBMkI3RixhQUFDLENBQUNtUSxTQUFGLElBQWMsSUFBRXRPLENBQUYsSUFBSyxJQUFFUixDQUFQLEtBQVdyQixDQUFDLENBQUNpUixNQUFGLENBQVNoUixDQUFDLEdBQUNtQyxDQUFYLEVBQWFyQixDQUFiLEdBQWdCZixDQUFDLENBQUNrUixNQUFGLENBQVNqUixDQUFDLEdBQUNvQixDQUFGLEdBQUllLENBQWIsRUFBZXJCLENBQWYsQ0FBaEIsRUFBa0NmLENBQUMsQ0FBQ3NSLGFBQUYsQ0FBZ0JyUixDQUFDLEdBQUNvQixDQUFGLEdBQUllLENBQUosR0FBTUcsQ0FBQyxHQUFDSCxDQUF4QixFQUEwQnJCLENBQTFCLEVBQTRCZCxDQUFDLEdBQUNvQixDQUE5QixFQUFnQ04sQ0FBQyxHQUFDdUIsQ0FBRixHQUFJQyxDQUFDLEdBQUNELENBQXRDLEVBQXdDckMsQ0FBQyxHQUFDb0IsQ0FBMUMsRUFBNENOLENBQUMsR0FBQ3VCLENBQTlDLENBQWxDLEVBQW1GdEMsQ0FBQyxDQUFDa1IsTUFBRixDQUFTalIsQ0FBQyxHQUFDb0IsQ0FBWCxFQUFhTixDQUFDLEdBQUNjLENBQUYsR0FBSVMsQ0FBakIsQ0FBbkYsRUFBdUd0QyxDQUFDLENBQUNzUixhQUFGLENBQWdCclIsQ0FBQyxHQUFDb0IsQ0FBbEIsRUFBb0JOLENBQUMsR0FBQ2MsQ0FBRixHQUFJUyxDQUFKLEdBQU1DLENBQUMsR0FBQ0QsQ0FBNUIsRUFBOEJyQyxDQUFDLEdBQUNvQixDQUFGLEdBQUllLENBQUosR0FBTUcsQ0FBQyxHQUFDSCxDQUF0QyxFQUF3Q3JCLENBQUMsR0FBQ2MsQ0FBMUMsRUFBNEM1QixDQUFDLEdBQUNvQixDQUFGLEdBQUllLENBQWhELEVBQWtEckIsQ0FBQyxHQUFDYyxDQUFwRCxDQUF2RyxFQUE4SjdCLENBQUMsQ0FBQ2tSLE1BQUYsQ0FBU2pSLENBQUMsR0FBQ21DLENBQVgsRUFBYXJCLENBQUMsR0FBQ2MsQ0FBZixDQUE5SixFQUFnTDdCLENBQUMsQ0FBQ3NSLGFBQUYsQ0FBZ0JyUixDQUFDLEdBQUNtQyxDQUFGLEdBQUlHLENBQUMsR0FBQ0gsQ0FBdEIsRUFBd0JyQixDQUFDLEdBQUNjLENBQTFCLEVBQTRCNUIsQ0FBNUIsRUFBOEJjLENBQUMsR0FBQ2MsQ0FBRixHQUFJUyxDQUFKLEdBQU1DLENBQUMsR0FBQ0QsQ0FBdEMsRUFBd0NyQyxDQUF4QyxFQUEwQ2MsQ0FBQyxHQUFDYyxDQUFGLEdBQUlTLENBQTlDLENBQWhMLEVBQWlPdEMsQ0FBQyxDQUFDa1IsTUFBRixDQUFTalIsQ0FBVCxFQUFXYyxDQUFDLEdBQUN1QixDQUFiLENBQWpPLEVBQWlQdEMsQ0FBQyxDQUFDc1IsYUFBRixDQUFnQnJSLENBQWhCLEVBQWtCYyxDQUFDLEdBQUN1QixDQUFGLEdBQUlDLENBQUMsR0FBQ0QsQ0FBeEIsRUFBMEJyQyxDQUFDLEdBQUNtQyxDQUFGLEdBQUlHLENBQUMsR0FBQ0gsQ0FBaEMsRUFBa0NyQixDQUFsQyxFQUFvQ2QsQ0FBQyxHQUFDbUMsQ0FBdEMsRUFBd0NyQixDQUF4QyxDQUFqUCxFQUE0UmYsQ0FBQyxDQUFDbVIsU0FBRixFQUF2UyxDQUFkO0FBQW9VOztBQUFBLGlCQUFPLElBQUloTixDQUFDLENBQUM2RyxXQUFOLENBQWtCL0ssQ0FBbEIsRUFBb0JjLENBQXBCLEVBQXNCZCxDQUFDLEdBQUNvQixDQUF4QixFQUEwQk4sQ0FBQyxHQUFDYyxDQUE1QixDQUFQO0FBQXNDLFNBQXIzQjtBQUFzM0IsT0FBaG5nQixFQUFpbmdCc0MsQ0FBQyxDQUFDakIsT0FBRixDQUFVbU8sSUFBVixDQUFlbE8sU0FBZixHQUF5QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVK00sZUFBZCxFQUExb2dCLEVBQXdxZ0I5TCxDQUFDLENBQUNqQixPQUFGLENBQVVxTyxNQUFWLEdBQWlCLFVBQVN2UixDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVK00sZUFBcEIsRUFBb0MsS0FBS2xELElBQUwsQ0FBVS9NLENBQVYsQ0FBcEMsRUFBaUQsS0FBS2tRLElBQUwsR0FBVSxVQUFTbFEsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLEtBQUt3SSxTQUFMLENBQWUsSUFBZixFQUFxQk0sUUFBckIsQ0FBOEIsR0FBOUIsQ0FBTjtBQUFBLGNBQXlDaEksQ0FBQyxHQUFDLEtBQUswSCxTQUFMLENBQWUsSUFBZixFQUFxQk0sUUFBckIsQ0FBOEIsR0FBOUIsQ0FBM0M7QUFBQSxjQUE4RTFILENBQUMsR0FBQyxLQUFLb0gsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLEVBQWhGO0FBQStHLGlCQUFPLFFBQU0vSSxDQUFOLElBQVMsSUFBRXFCLENBQVgsS0FBZXJCLENBQUMsQ0FBQ21RLFNBQUYsSUFBY25RLENBQUMsQ0FBQ3dSLEdBQUYsQ0FBTXZSLENBQU4sRUFBUWMsQ0FBUixFQUFVTSxDQUFWLEVBQVksQ0FBWixFQUFjLElBQUV1RSxJQUFJLENBQUNzRCxFQUFyQixFQUF3QixDQUFDLENBQXpCLENBQWQsRUFBMENsSixDQUFDLENBQUNtUixTQUFGLEVBQXpELEdBQXdFLElBQUloTixDQUFDLENBQUM2RyxXQUFOLENBQWtCL0ssQ0FBQyxHQUFDb0IsQ0FBcEIsRUFBc0JOLENBQUMsR0FBQ00sQ0FBeEIsRUFBMEJwQixDQUFDLEdBQUNvQixDQUE1QixFQUE4Qk4sQ0FBQyxHQUFDTSxDQUFoQyxDQUEvRTtBQUFrSCxTQUF4UztBQUF5UyxPQUE5K2dCLEVBQSsrZ0I4QyxDQUFDLENBQUNqQixPQUFGLENBQVVxTyxNQUFWLENBQWlCcE8sU0FBakIsR0FBMkIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStNLGVBQWQsRUFBMWdoQixFQUF3aWhCOUwsQ0FBQyxDQUFDakIsT0FBRixDQUFVdU8sT0FBVixHQUFrQixVQUFTelIsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStNLGVBQXBCLEVBQW9DLEtBQUtsRCxJQUFMLENBQVUvTSxDQUFWLENBQXBDLEVBQWlELEtBQUtrUSxJQUFMLEdBQVUsVUFBU2xRLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxDQUFDMkYsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBVixJQUFhLENBQWQsSUFBaUIsQ0FBakIsR0FBbUIsQ0FBekI7QUFBQSxjQUEyQjlFLENBQUMsR0FBQyxLQUFLMEgsU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQTdCO0FBQUEsY0FBZ0UxSCxDQUFDLEdBQUMsS0FBS29ILFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUFsRTtBQUFBLGNBQXFHbEgsQ0FBQyxHQUFDLEtBQUs0RyxTQUFMLENBQWUsSUFBZixFQUFxQk0sUUFBckIsQ0FBOEIsR0FBOUIsQ0FBdkc7QUFBQSxjQUEwSTNHLENBQUMsR0FBQyxLQUFLcUcsU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQTVJO0FBQStLLGlCQUFPLFFBQU0vSSxDQUFOLEtBQVVBLENBQUMsQ0FBQ21RLFNBQUYsSUFBY25RLENBQUMsQ0FBQ2lSLE1BQUYsQ0FBU3BQLENBQUMsR0FBQ2QsQ0FBWCxFQUFhcUIsQ0FBYixDQUFkLEVBQThCcEMsQ0FBQyxDQUFDc1IsYUFBRixDQUFnQnpQLENBQUMsR0FBQ2QsQ0FBbEIsRUFBb0JxQixDQUFDLEdBQUNuQyxDQUFDLEdBQUNvQixDQUF4QixFQUEwQlEsQ0FBQyxHQUFDNUIsQ0FBQyxHQUFDYyxDQUE5QixFQUFnQ3FCLENBQUMsR0FBQ2YsQ0FBbEMsRUFBb0NRLENBQXBDLEVBQXNDTyxDQUFDLEdBQUNmLENBQXhDLENBQTlCLEVBQXlFckIsQ0FBQyxDQUFDc1IsYUFBRixDQUFnQnpQLENBQUMsR0FBQzVCLENBQUMsR0FBQ2MsQ0FBcEIsRUFBc0JxQixDQUFDLEdBQUNmLENBQXhCLEVBQTBCUSxDQUFDLEdBQUNkLENBQTVCLEVBQThCcUIsQ0FBQyxHQUFDbkMsQ0FBQyxHQUFDb0IsQ0FBbEMsRUFBb0NRLENBQUMsR0FBQ2QsQ0FBdEMsRUFBd0NxQixDQUF4QyxDQUF6RSxFQUFvSHBDLENBQUMsQ0FBQ3NSLGFBQUYsQ0FBZ0J6UCxDQUFDLEdBQUNkLENBQWxCLEVBQW9CcUIsQ0FBQyxHQUFDbkMsQ0FBQyxHQUFDb0IsQ0FBeEIsRUFBMEJRLENBQUMsR0FBQzVCLENBQUMsR0FBQ2MsQ0FBOUIsRUFBZ0NxQixDQUFDLEdBQUNmLENBQWxDLEVBQW9DUSxDQUFwQyxFQUFzQ08sQ0FBQyxHQUFDZixDQUF4QyxDQUFwSCxFQUErSnJCLENBQUMsQ0FBQ3NSLGFBQUYsQ0FBZ0J6UCxDQUFDLEdBQUM1QixDQUFDLEdBQUNjLENBQXBCLEVBQXNCcUIsQ0FBQyxHQUFDZixDQUF4QixFQUEwQlEsQ0FBQyxHQUFDZCxDQUE1QixFQUE4QnFCLENBQUMsR0FBQ25DLENBQUMsR0FBQ29CLENBQWxDLEVBQW9DUSxDQUFDLEdBQUNkLENBQXRDLEVBQXdDcUIsQ0FBeEMsQ0FBL0osRUFBME1wQyxDQUFDLENBQUNtUixTQUFGLEVBQXBOLEdBQW1PLElBQUloTixDQUFDLENBQUM2RyxXQUFOLENBQWtCbkosQ0FBQyxHQUFDZCxDQUFwQixFQUFzQnFCLENBQUMsR0FBQ2YsQ0FBeEIsRUFBMEJRLENBQUMsR0FBQ2QsQ0FBNUIsRUFBOEJxQixDQUFDLEdBQUNmLENBQWhDLENBQTFPO0FBQTZRLFNBQW5nQjtBQUFvZ0IsT0FBMWtpQixFQUEya2lCOEMsQ0FBQyxDQUFDakIsT0FBRixDQUFVdU8sT0FBVixDQUFrQnRPLFNBQWxCLEdBQTRCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVUrTSxlQUFkLEVBQXZtaUIsRUFBcW9pQjlMLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXdPLElBQVYsR0FBZSxVQUFTMVIsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStNLGVBQXBCLEVBQW9DLEtBQUtsRCxJQUFMLENBQVUvTSxDQUFWLENBQXBDLEVBQWlELEtBQUsyUixTQUFMLEdBQWUsWUFBVTtBQUFDLGlCQUFNLENBQUMsSUFBSXhOLENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWSxLQUFLaEMsU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQVosRUFBK0MsS0FBS04sU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQS9DLENBQUQsRUFBb0YsSUFBSTVFLENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWSxLQUFLaEMsU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQVosRUFBK0MsS0FBS04sU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQS9DLENBQXBGLENBQU47QUFBOEssU0FBelAsRUFBMFAsS0FBS21ILElBQUwsR0FBVSxVQUFTbFEsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLEtBQUswUixTQUFMLEVBQU47QUFBdUIsaUJBQU8sUUFBTTNSLENBQU4sS0FBVUEsQ0FBQyxDQUFDbVEsU0FBRixJQUFjblEsQ0FBQyxDQUFDaVIsTUFBRixDQUFTaFIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLeUssQ0FBZCxFQUFnQnpLLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS0ksQ0FBckIsQ0FBZCxFQUFzQ0wsQ0FBQyxDQUFDa1IsTUFBRixDQUFTalIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLeUssQ0FBZCxFQUFnQnpLLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS0ksQ0FBckIsQ0FBaEQsR0FBeUUsSUFBSThELENBQUMsQ0FBQzZHLFdBQU4sQ0FBa0IvSyxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUt5SyxDQUF2QixFQUF5QnpLLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS0ksQ0FBOUIsRUFBZ0NKLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBS3lLLENBQXJDLEVBQXVDekssQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLSSxDQUE1QyxDQUFoRjtBQUErSCxTQUF0YSxFQUF1YSxLQUFLbVEsVUFBTCxHQUFnQixZQUFVO0FBQUMsY0FBSXhRLENBQUMsR0FBQyxLQUFLMlIsU0FBTCxFQUFOO0FBQUEsY0FBdUIxUixDQUFDLEdBQUNELENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzJLLE9BQUwsQ0FBYTNLLENBQUMsQ0FBQyxDQUFELENBQWQsQ0FBekI7QUFBNEMsaUJBQU0sQ0FBQyxDQUFDQSxDQUFDLENBQUMsQ0FBRCxDQUFGLEVBQU1DLENBQU4sQ0FBRCxFQUFVLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUYsRUFBTUMsQ0FBTixDQUFWLENBQU47QUFBMEIsU0FBeGdCO0FBQXlnQixPQUF6cWpCLEVBQTBxakJrRSxDQUFDLENBQUNqQixPQUFGLENBQVV3TyxJQUFWLENBQWV2TyxTQUFmLEdBQXlCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVUrTSxlQUFkLEVBQW5zakIsRUFBaXVqQjlMLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTBPLFFBQVYsR0FBbUIsVUFBUzVSLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVUrTSxlQUFwQixFQUFvQyxLQUFLbEQsSUFBTCxDQUFVL00sQ0FBVixDQUFwQyxFQUFpRCxLQUFLNlIsTUFBTCxHQUFZMU4sQ0FBQyxDQUFDNEcsVUFBRixDQUFhLEtBQUt0QyxTQUFMLENBQWUsUUFBZixFQUF5QmxCLEtBQXRDLENBQTdELEVBQTBHLEtBQUsySSxJQUFMLEdBQVUsVUFBU2xRLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxJQUFJa0UsQ0FBQyxDQUFDNkcsV0FBTixDQUFrQixLQUFLNkcsTUFBTCxDQUFZLENBQVosRUFBZW5ILENBQWpDLEVBQW1DLEtBQUttSCxNQUFMLENBQVksQ0FBWixFQUFleFIsQ0FBbEQsQ0FBTjtBQUEyRCxrQkFBTUwsQ0FBTixLQUFVQSxDQUFDLENBQUNtUSxTQUFGLElBQWNuUSxDQUFDLENBQUNpUixNQUFGLENBQVMsS0FBS1ksTUFBTCxDQUFZLENBQVosRUFBZW5ILENBQXhCLEVBQTBCLEtBQUttSCxNQUFMLENBQVksQ0FBWixFQUFleFIsQ0FBekMsQ0FBeEI7O0FBQXFFLGVBQUksSUFBSVUsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs4USxNQUFMLENBQVlsUSxNQUExQixFQUFpQ1osQ0FBQyxFQUFsQyxFQUFxQ2QsQ0FBQyxDQUFDc0wsUUFBRixDQUFXLEtBQUtzRyxNQUFMLENBQVk5USxDQUFaLEVBQWUySixDQUExQixFQUE0QixLQUFLbUgsTUFBTCxDQUFZOVEsQ0FBWixFQUFlVixDQUEzQyxHQUE4QyxRQUFNTCxDQUFOLElBQVNBLENBQUMsQ0FBQ2tSLE1BQUYsQ0FBUyxLQUFLVyxNQUFMLENBQVk5USxDQUFaLEVBQWUySixDQUF4QixFQUEwQixLQUFLbUgsTUFBTCxDQUFZOVEsQ0FBWixFQUFlVixDQUF6QyxDQUF2RDs7QUFBbUcsaUJBQU9KLENBQVA7QUFBUyxTQUFqWixFQUFrWixLQUFLdVEsVUFBTCxHQUFnQixZQUFVO0FBQUMsZUFBSSxJQUFJeFEsQ0FBQyxHQUFDLEVBQU4sRUFBU0MsQ0FBQyxHQUFDLENBQWYsRUFBaUJBLENBQUMsR0FBQyxLQUFLNFIsTUFBTCxDQUFZbFEsTUFBWixHQUFtQixDQUF0QyxFQUF3QzFCLENBQUMsRUFBekMsRUFBNENELENBQUMsQ0FBQ3VGLElBQUYsQ0FBTyxDQUFDLEtBQUtzTSxNQUFMLENBQVk1UixDQUFaLENBQUQsRUFBZ0IsS0FBSzRSLE1BQUwsQ0FBWTVSLENBQVosRUFBZTBLLE9BQWYsQ0FBdUIsS0FBS2tILE1BQUwsQ0FBWTVSLENBQUMsR0FBQyxDQUFkLENBQXZCLENBQWhCLENBQVA7O0FBQWtFLGlCQUFPLElBQUVELENBQUMsQ0FBQzJCLE1BQUosSUFBWTNCLENBQUMsQ0FBQ3VGLElBQUYsQ0FBTyxDQUFDLEtBQUtzTSxNQUFMLENBQVksS0FBS0EsTUFBTCxDQUFZbFEsTUFBWixHQUFtQixDQUEvQixDQUFELEVBQW1DM0IsQ0FBQyxDQUFDQSxDQUFDLENBQUMyQixNQUFGLEdBQVMsQ0FBVixDQUFELENBQWMsQ0FBZCxDQUFuQyxDQUFQLENBQVosRUFBeUUzQixDQUFoRjtBQUFrRixTQUE3bUI7QUFBOG1CLE9BQTkya0IsRUFBKzJrQm1FLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTBPLFFBQVYsQ0FBbUJ6TyxTQUFuQixHQUE2QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVK00sZUFBZCxFQUE1NGtCLEVBQTA2a0I5TCxDQUFDLENBQUNqQixPQUFGLENBQVU0TyxPQUFWLEdBQWtCLFVBQVM5UixDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVME8sUUFBcEIsRUFBNkIsS0FBSzdFLElBQUwsQ0FBVS9NLENBQVYsQ0FBN0IsRUFBMEMsS0FBSytSLFFBQUwsR0FBYyxLQUFLN0IsSUFBN0QsRUFBa0UsS0FBS0EsSUFBTCxHQUFVLFVBQVNsUSxDQUFULEVBQVc7QUFBQyxjQUFJQyxDQUFDLEdBQUMsS0FBSzhSLFFBQUwsQ0FBYy9SLENBQWQsQ0FBTjtBQUF1QixpQkFBTyxRQUFNQSxDQUFOLEtBQVVBLENBQUMsQ0FBQ2tSLE1BQUYsQ0FBUyxLQUFLVyxNQUFMLENBQVksQ0FBWixFQUFlbkgsQ0FBeEIsRUFBMEIsS0FBS21ILE1BQUwsQ0FBWSxDQUFaLEVBQWV4UixDQUF6QyxHQUE0Q0wsQ0FBQyxDQUFDbVIsU0FBRixFQUF0RCxHQUFxRWxSLENBQTVFO0FBQThFLFNBQTdMO0FBQThMLE9BQXRvbEIsRUFBdW9sQmtFLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTRPLE9BQVYsQ0FBa0IzTyxTQUFsQixHQUE0QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVME8sUUFBZCxFQUFucWxCLEVBQTBybEJ6TixDQUFDLENBQUNqQixPQUFGLENBQVVnTixJQUFWLEdBQWUsVUFBU2xRLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVUrTSxlQUFwQixFQUFvQyxLQUFLbEQsSUFBTCxDQUFVL00sQ0FBVixDQUFwQztBQUFpRCxZQUFJQyxDQUFDLEdBQUMsS0FBS3dJLFNBQUwsQ0FBZSxHQUFmLEVBQW9CbEIsS0FBMUI7QUFBZ0N0SCxTQUFDLEdBQUNBLENBQUMsQ0FBQ2dFLE9BQUYsQ0FBVSxLQUFWLEVBQWdCLEdBQWhCLENBQUY7O0FBQXVCLGFBQUksSUFBSWxELENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxDQUFkLEVBQWdCQSxDQUFDLEVBQWpCLEVBQW9CZCxDQUFDLEdBQUNBLENBQUMsQ0FBQ2dFLE9BQUYsQ0FBVSxtQ0FBVixFQUE4QyxPQUE5QyxDQUFGOztBQUF5RGhFLFNBQUMsR0FBQyxDQUFDQSxDQUFDLEdBQUNBLENBQUMsQ0FBQ2dFLE9BQUYsQ0FBVSxtQ0FBVixFQUE4QyxPQUE5QyxDQUFILEVBQTJEQSxPQUEzRCxDQUFtRSxrQkFBbkUsRUFBc0YsT0FBdEYsQ0FBRjs7QUFBaUcsYUFBSWxELENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsRUFBYixFQUFnQmQsQ0FBQyxHQUFDQSxDQUFDLENBQUNnRSxPQUFGLENBQVUsa0JBQVYsRUFBNkIsT0FBN0IsQ0FBRjs7QUFBd0NoRSxTQUFDLEdBQUNBLENBQUMsQ0FBQ2dFLE9BQUYsQ0FBVSwwQ0FBVixFQUFxRCxXQUFyRCxDQUFGLEVBQW9FaEUsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDK0IsY0FBRixDQUFpQmpHLENBQWpCLENBQXRFLEVBQTBGQSxDQUFDLEdBQUNrRSxDQUFDLENBQUM4QixJQUFGLENBQU9oRyxDQUFQLENBQTVGLEVBQXNHLEtBQUsrUixVQUFMLEdBQWdCLElBQUksVUFBU2hTLENBQVQsRUFBVztBQUFDLGVBQUtpUyxNQUFMLEdBQVlqUyxDQUFDLENBQUN1SyxLQUFGLENBQVEsR0FBUixDQUFaLEVBQXlCLEtBQUsySCxLQUFMLEdBQVcsWUFBVTtBQUFDLGlCQUFLblIsQ0FBTCxHQUFPLENBQUMsQ0FBUixFQUFVLEtBQUtvUixPQUFMLEdBQWEsRUFBdkIsRUFBMEIsS0FBS0MsZUFBTCxHQUFxQixFQUEvQyxFQUFrRCxLQUFLQyxLQUFMLEdBQVcsSUFBSWxPLENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBZCxDQUE3RCxFQUE4RSxLQUFLNkgsT0FBTCxHQUFhLElBQUluTyxDQUFDLENBQUNzRyxLQUFOLENBQVksQ0FBWixFQUFjLENBQWQsQ0FBM0YsRUFBNEcsS0FBSzhILE9BQUwsR0FBYSxJQUFJcE8sQ0FBQyxDQUFDc0csS0FBTixDQUFZLENBQVosRUFBYyxDQUFkLENBQXpILEVBQTBJLEtBQUtvSCxNQUFMLEdBQVksRUFBdEosRUFBeUosS0FBS1csTUFBTCxHQUFZLEVBQXJLO0FBQXdLLFdBQXZOLEVBQXdOLEtBQUtDLEtBQUwsR0FBVyxZQUFVO0FBQUMsbUJBQU8sS0FBSzFSLENBQUwsSUFBUSxLQUFLa1IsTUFBTCxDQUFZdFEsTUFBWixHQUFtQixDQUFsQztBQUFvQyxXQUFsUixFQUFtUixLQUFLK1EsY0FBTCxHQUFvQixZQUFVO0FBQUMsbUJBQU0sQ0FBQyxDQUFDLEtBQUtELEtBQUwsRUFBRixJQUFnQixRQUFNLEtBQUtSLE1BQUwsQ0FBWSxLQUFLbFIsQ0FBTCxHQUFPLENBQW5CLEVBQXNCaUQsS0FBdEIsQ0FBNEIsWUFBNUIsQ0FBNUI7QUFBc0UsV0FBeFgsRUFBeVgsS0FBSzJPLGlCQUFMLEdBQXVCLFlBQVU7QUFBQyxvQkFBTyxLQUFLUixPQUFaO0FBQXFCLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVEsbUJBQUksR0FBSjtBQUFRLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVEsbUJBQUksR0FBSjtBQUFRLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVEsbUJBQUksR0FBSjtBQUFRLG1CQUFJLEdBQUo7QUFBUSx1QkFBTSxDQUFDLENBQVA7QUFBckc7O0FBQThHLG1CQUFNLENBQUMsQ0FBUDtBQUFTLFdBQWxoQixFQUFtaEIsS0FBS1MsUUFBTCxHQUFjLFlBQVU7QUFBQyxtQkFBTyxLQUFLN1IsQ0FBTCxJQUFTLEtBQUtrUixNQUFMLENBQVksS0FBS2xSLENBQWpCLENBQWhCO0FBQW9DLFdBQWhsQixFQUFpbEIsS0FBSzhSLFNBQUwsR0FBZSxZQUFVO0FBQUMsbUJBQU9sTCxVQUFVLENBQUMsS0FBS2lMLFFBQUwsRUFBRCxDQUFqQjtBQUFtQyxXQUE5b0IsRUFBK29CLEtBQUtFLFdBQUwsR0FBaUIsWUFBVTtBQUFDLGlCQUFLVixlQUFMLEdBQXFCLEtBQUtELE9BQTFCLEVBQWtDLEtBQUtBLE9BQUwsR0FBYSxLQUFLUyxRQUFMLEVBQS9DO0FBQStELFdBQTF1QixFQUEydUIsS0FBS0csUUFBTCxHQUFjLFlBQVU7QUFBQyxnQkFBSS9TLENBQUMsR0FBQyxJQUFJbUUsQ0FBQyxDQUFDc0csS0FBTixDQUFZLEtBQUtvSSxTQUFMLEVBQVosRUFBNkIsS0FBS0EsU0FBTCxFQUE3QixDQUFOO0FBQXFELG1CQUFPLEtBQUtHLFlBQUwsQ0FBa0JoVCxDQUFsQixDQUFQO0FBQTRCLFdBQXIxQixFQUFzMUIsS0FBS2lULGlCQUFMLEdBQXVCLFlBQVU7QUFBQyxnQkFBSWpULENBQUMsR0FBQyxLQUFLK1MsUUFBTCxFQUFOO0FBQXNCLG1CQUFPLEtBQUtULE9BQUwsR0FBYXRTLENBQXBCO0FBQXNCLFdBQXA2QixFQUFxNkIsS0FBS2tULGlCQUFMLEdBQXVCLFlBQVU7QUFBQyxnQkFBSWxULENBQUMsR0FBQyxLQUFLK1MsUUFBTCxFQUFOO0FBQXNCLG1CQUFPLEtBQUtSLE9BQUwsR0FBYXZTLENBQXBCO0FBQXNCLFdBQW4vQixFQUFvL0IsS0FBS21ULHdCQUFMLEdBQThCLFlBQVU7QUFBQyxtQkFBTSxPQUFLLEtBQUtmLGVBQUwsQ0FBcUJ4RCxXQUFyQixFQUFMLElBQXlDLE9BQUssS0FBS3dELGVBQUwsQ0FBcUJ4RCxXQUFyQixFQUE5QyxJQUFrRixPQUFLLEtBQUt3RCxlQUFMLENBQXFCeEQsV0FBckIsRUFBdkYsSUFBMkgsT0FBSyxLQUFLd0QsZUFBTCxDQUFxQnhELFdBQXJCLEVBQWhJLEdBQW1LLEtBQUsyRCxPQUF4SyxHQUFnTCxJQUFJcE8sQ0FBQyxDQUFDc0csS0FBTixDQUFZLElBQUUsS0FBSzhILE9BQUwsQ0FBYTdILENBQWYsR0FBaUIsS0FBSzRILE9BQUwsQ0FBYTVILENBQTFDLEVBQTRDLElBQUUsS0FBSzZILE9BQUwsQ0FBYWxTLENBQWYsR0FBaUIsS0FBS2lTLE9BQUwsQ0FBYWpTLENBQTFFLENBQXRMO0FBQW1RLFdBQWh5QyxFQUFpeUMsS0FBSzJTLFlBQUwsR0FBa0IsVUFBU2hULENBQVQsRUFBVztBQUFDLG1CQUFPLEtBQUsyUyxpQkFBTCxPQUEyQjNTLENBQUMsQ0FBQzBLLENBQUYsSUFBSyxLQUFLNkgsT0FBTCxDQUFhN0gsQ0FBbEIsRUFBb0IxSyxDQUFDLENBQUNLLENBQUYsSUFBSyxLQUFLa1MsT0FBTCxDQUFhbFMsQ0FBakUsR0FBb0VMLENBQTNFO0FBQTZFLFdBQTU0QyxFQUE2NEMsS0FBS29ULFNBQUwsR0FBZSxVQUFTcFQsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZTtBQUFDLG9CQUFNQSxDQUFOLElBQVMsSUFBRSxLQUFLeVIsTUFBTCxDQUFZN1EsTUFBdkIsSUFBK0IsUUFBTSxLQUFLNlEsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWTdRLE1BQVosR0FBbUIsQ0FBL0IsQ0FBckMsS0FBeUUsS0FBSzZRLE1BQUwsQ0FBWSxLQUFLQSxNQUFMLENBQVk3USxNQUFaLEdBQW1CLENBQS9CLElBQWtDLEtBQUtrUSxNQUFMLENBQVksS0FBS0EsTUFBTCxDQUFZbFEsTUFBWixHQUFtQixDQUEvQixFQUFrQ2dKLE9BQWxDLENBQTBDNUosQ0FBMUMsQ0FBM0csR0FBeUosS0FBS3NTLGNBQUwsQ0FBb0JyVCxDQUFwQixFQUFzQixRQUFNQyxDQUFOLEdBQVEsSUFBUixHQUFhQSxDQUFDLENBQUMwSyxPQUFGLENBQVUzSyxDQUFWLENBQW5DLENBQXpKO0FBQTBNLFdBQXRuRCxFQUF1bkQsS0FBS3FULGNBQUwsR0FBb0IsVUFBU3JULENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsaUJBQUs0UixNQUFMLENBQVl0TSxJQUFaLENBQWlCdkYsQ0FBakIsR0FBb0IsS0FBS3dTLE1BQUwsQ0FBWWpOLElBQVosQ0FBaUJ0RixDQUFqQixDQUFwQjtBQUF3QyxXQUFqc0QsRUFBa3NELEtBQUtxVCxlQUFMLEdBQXFCLFlBQVU7QUFBQyxtQkFBTyxLQUFLekIsTUFBWjtBQUFtQixXQUFydkQsRUFBc3ZELEtBQUswQixlQUFMLEdBQXFCLFlBQVU7QUFBQyxpQkFBSSxJQUFJdlQsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUt3UyxNQUFMLENBQVk3USxNQUExQixFQUFpQzNCLENBQUMsRUFBbEMsRUFBcUMsSUFBRyxRQUFNLEtBQUt3UyxNQUFMLENBQVl4UyxDQUFaLENBQVQsRUFBd0IsS0FBSSxJQUFJQyxDQUFDLEdBQUNELENBQUMsR0FBQyxDQUFaLEVBQWNDLENBQUMsR0FBQyxLQUFLdVMsTUFBTCxDQUFZN1EsTUFBNUIsRUFBbUMxQixDQUFDLEVBQXBDLEVBQXVDLElBQUcsUUFBTSxLQUFLdVMsTUFBTCxDQUFZdlMsQ0FBWixDQUFULEVBQXdCO0FBQUMsbUJBQUt1UyxNQUFMLENBQVl4UyxDQUFaLElBQWUsS0FBS3dTLE1BQUwsQ0FBWXZTLENBQVosQ0FBZjtBQUE4QjtBQUFNOztBQUFBLG1CQUFPLEtBQUt1UyxNQUFaO0FBQW1CLFdBQTE4RDtBQUEyOEQsU0FBMzlELENBQTQ5RHZTLENBQTU5RCxDQUF0SCxFQUFxbEUsS0FBS2lRLElBQUwsR0FBVSxVQUFTbFEsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLEtBQUsrUixVQUFYO0FBQXNCL1IsV0FBQyxDQUFDaVMsS0FBRjtBQUFVLGNBQUluUixDQUFDLEdBQUMsSUFBSW9ELENBQUMsQ0FBQzZHLFdBQU4sRUFBTjs7QUFBd0IsZUFBSSxRQUFNaEwsQ0FBTixJQUFTQSxDQUFDLENBQUNtUSxTQUFGLEVBQWIsRUFBMkIsQ0FBQ2xRLENBQUMsQ0FBQ3dTLEtBQUYsRUFBNUIsR0FBdUMsUUFBT3hTLENBQUMsQ0FBQzZTLFdBQUYsSUFBZ0I3UyxDQUFDLENBQUNrUyxPQUF6QjtBQUFrQyxpQkFBSSxHQUFKO0FBQVEsaUJBQUksR0FBSjtBQUFRLGtCQUFJOVEsQ0FBQyxHQUFDcEIsQ0FBQyxDQUFDaVQsaUJBQUYsRUFBTjs7QUFBNEIsbUJBQUlqVCxDQUFDLENBQUNtVCxTQUFGLENBQVkvUixDQUFaLEdBQWVOLENBQUMsQ0FBQ3dLLFFBQUYsQ0FBV2xLLENBQUMsQ0FBQ3FKLENBQWIsRUFBZXJKLENBQUMsQ0FBQ2hCLENBQWpCLENBQWYsRUFBbUMsUUFBTUwsQ0FBTixJQUFTQSxDQUFDLENBQUNpUixNQUFGLENBQVM1UCxDQUFDLENBQUNxSixDQUFYLEVBQWFySixDQUFDLENBQUNoQixDQUFmLENBQTVDLEVBQThESixDQUFDLENBQUNvUyxLQUFGLEdBQVFwUyxDQUFDLENBQUNzUyxPQUE1RSxFQUFvRixDQUFDdFMsQ0FBQyxDQUFDeVMsY0FBRixFQUFyRixHQUF5RztBQUFDclIsaUJBQUMsR0FBQ3BCLENBQUMsQ0FBQ2lULGlCQUFGLEVBQUY7QUFBd0JqVCxpQkFBQyxDQUFDbVQsU0FBRixDQUFZL1IsQ0FBWixFQUFjcEIsQ0FBQyxDQUFDb1MsS0FBaEIsR0FBdUJ0UixDQUFDLENBQUN3SyxRQUFGLENBQVdsSyxDQUFDLENBQUNxSixDQUFiLEVBQWVySixDQUFDLENBQUNoQixDQUFqQixDQUF2QixFQUEyQyxRQUFNTCxDQUFOLElBQVNBLENBQUMsQ0FBQ2tSLE1BQUYsQ0FBUzdQLENBQUMsQ0FBQ3FKLENBQVgsRUFBYXJKLENBQUMsQ0FBQ2hCLENBQWYsQ0FBcEQ7QUFBc0U7O0FBQUE7O0FBQU0saUJBQUksR0FBSjtBQUFRLGlCQUFJLEdBQUo7QUFBUSxxQkFBSyxDQUFDSixDQUFDLENBQUN5UyxjQUFGLEVBQU4sR0FBMEI7QUFBQyxvQkFBSTdRLENBQUMsR0FBQzVCLENBQUMsQ0FBQ3NTLE9BQVI7QUFBZ0JsUixpQkFBQyxHQUFDcEIsQ0FBQyxDQUFDaVQsaUJBQUYsRUFBRjtBQUF3QmpULGlCQUFDLENBQUNtVCxTQUFGLENBQVkvUixDQUFaLEVBQWNRLENBQWQsR0FBaUJkLENBQUMsQ0FBQ3dLLFFBQUYsQ0FBV2xLLENBQUMsQ0FBQ3FKLENBQWIsRUFBZXJKLENBQUMsQ0FBQ2hCLENBQWpCLENBQWpCLEVBQXFDLFFBQU1MLENBQU4sSUFBU0EsQ0FBQyxDQUFDa1IsTUFBRixDQUFTN1AsQ0FBQyxDQUFDcUosQ0FBWCxFQUFhckosQ0FBQyxDQUFDaEIsQ0FBZixDQUE5QztBQUFnRTs7QUFBQTs7QUFBTSxpQkFBSSxHQUFKO0FBQVEsaUJBQUksR0FBSjtBQUFRLHFCQUFLLENBQUNKLENBQUMsQ0FBQ3lTLGNBQUYsRUFBTixHQUEwQjtBQUFDLG9CQUFJdFEsQ0FBQyxHQUFDLElBQUkrQixDQUFDLENBQUNzRyxLQUFOLENBQVksQ0FBQ3hLLENBQUMsQ0FBQzBTLGlCQUFGLEtBQXNCMVMsQ0FBQyxDQUFDc1MsT0FBRixDQUFVN0gsQ0FBaEMsR0FBa0MsQ0FBbkMsSUFBc0N6SyxDQUFDLENBQUM0UyxTQUFGLEVBQWxELEVBQWdFNVMsQ0FBQyxDQUFDc1MsT0FBRixDQUFVbFMsQ0FBMUUsQ0FBTjtBQUFtRkosaUJBQUMsQ0FBQ21ULFNBQUYsQ0FBWWhSLENBQVosRUFBY25DLENBQUMsQ0FBQ3NTLE9BQWhCLEdBQXlCdFMsQ0FBQyxDQUFDc1MsT0FBRixHQUFVblEsQ0FBbkMsRUFBcUNyQixDQUFDLENBQUN3SyxRQUFGLENBQVd0TCxDQUFDLENBQUNzUyxPQUFGLENBQVU3SCxDQUFyQixFQUF1QnpLLENBQUMsQ0FBQ3NTLE9BQUYsQ0FBVWxTLENBQWpDLENBQXJDLEVBQXlFLFFBQU1MLENBQU4sSUFBU0EsQ0FBQyxDQUFDa1IsTUFBRixDQUFTalIsQ0FBQyxDQUFDc1MsT0FBRixDQUFVN0gsQ0FBbkIsRUFBcUJ6SyxDQUFDLENBQUNzUyxPQUFGLENBQVVsUyxDQUEvQixDQUFsRjtBQUFvSDs7QUFBQTs7QUFBTSxpQkFBSSxHQUFKO0FBQVEsaUJBQUksR0FBSjtBQUFRLHFCQUFLLENBQUNKLENBQUMsQ0FBQ3lTLGNBQUYsRUFBTixHQUEwQjtBQUFDdFEsaUJBQUMsR0FBQyxJQUFJK0IsQ0FBQyxDQUFDc0csS0FBTixDQUFZeEssQ0FBQyxDQUFDc1MsT0FBRixDQUFVN0gsQ0FBdEIsRUFBd0IsQ0FBQ3pLLENBQUMsQ0FBQzBTLGlCQUFGLEtBQXNCMVMsQ0FBQyxDQUFDc1MsT0FBRixDQUFVbFMsQ0FBaEMsR0FBa0MsQ0FBbkMsSUFBc0NKLENBQUMsQ0FBQzRTLFNBQUYsRUFBOUQsQ0FBRjtBQUErRTVTLGlCQUFDLENBQUNtVCxTQUFGLENBQVloUixDQUFaLEVBQWNuQyxDQUFDLENBQUNzUyxPQUFoQixHQUF5QnRTLENBQUMsQ0FBQ3NTLE9BQUYsR0FBVW5RLENBQW5DLEVBQXFDckIsQ0FBQyxDQUFDd0ssUUFBRixDQUFXdEwsQ0FBQyxDQUFDc1MsT0FBRixDQUFVN0gsQ0FBckIsRUFBdUJ6SyxDQUFDLENBQUNzUyxPQUFGLENBQVVsUyxDQUFqQyxDQUFyQyxFQUF5RSxRQUFNTCxDQUFOLElBQVNBLENBQUMsQ0FBQ2tSLE1BQUYsQ0FBU2pSLENBQUMsQ0FBQ3NTLE9BQUYsQ0FBVTdILENBQW5CLEVBQXFCekssQ0FBQyxDQUFDc1MsT0FBRixDQUFVbFMsQ0FBL0IsQ0FBbEY7QUFBb0g7O0FBQUE7O0FBQU0saUJBQUksR0FBSjtBQUFRLGlCQUFJLEdBQUo7QUFBUSxxQkFBSyxDQUFDSixDQUFDLENBQUN5UyxjQUFGLEVBQU4sR0FBMEI7QUFBQyxvQkFBSXBRLENBQUMsR0FBQ3JDLENBQUMsQ0FBQ3NTLE9BQVI7QUFBQSxvQkFBZ0JoUSxDQUFDLEdBQUN0QyxDQUFDLENBQUM4UyxRQUFGLEVBQWxCO0FBQUEsb0JBQStCdlEsQ0FBQyxHQUFDdkMsQ0FBQyxDQUFDZ1QsaUJBQUYsRUFBakM7QUFBQSxvQkFBdUR4UyxDQUFDLEdBQUNSLENBQUMsQ0FBQ2lULGlCQUFGLEVBQXpEO0FBQStFalQsaUJBQUMsQ0FBQ21ULFNBQUYsQ0FBWTNTLENBQVosRUFBYytCLENBQWQsRUFBZ0JELENBQWhCLEdBQW1CeEIsQ0FBQyxDQUFDOEssY0FBRixDQUFpQnZKLENBQUMsQ0FBQ29JLENBQW5CLEVBQXFCcEksQ0FBQyxDQUFDakMsQ0FBdkIsRUFBeUJrQyxDQUFDLENBQUNtSSxDQUEzQixFQUE2Qm5JLENBQUMsQ0FBQ2xDLENBQS9CLEVBQWlDbUMsQ0FBQyxDQUFDa0ksQ0FBbkMsRUFBcUNsSSxDQUFDLENBQUNuQyxDQUF2QyxFQUF5Q0ksQ0FBQyxDQUFDaUssQ0FBM0MsRUFBNkNqSyxDQUFDLENBQUNKLENBQS9DLENBQW5CLEVBQXFFLFFBQU1MLENBQU4sSUFBU0EsQ0FBQyxDQUFDc1IsYUFBRixDQUFnQi9PLENBQUMsQ0FBQ21JLENBQWxCLEVBQW9CbkksQ0FBQyxDQUFDbEMsQ0FBdEIsRUFBd0JtQyxDQUFDLENBQUNrSSxDQUExQixFQUE0QmxJLENBQUMsQ0FBQ25DLENBQTlCLEVBQWdDSSxDQUFDLENBQUNpSyxDQUFsQyxFQUFvQ2pLLENBQUMsQ0FBQ0osQ0FBdEMsQ0FBOUU7QUFBdUg7O0FBQUE7O0FBQU0saUJBQUksR0FBSjtBQUFRLGlCQUFJLEdBQUo7QUFBUSxxQkFBSyxDQUFDSixDQUFDLENBQUN5UyxjQUFGLEVBQU4sR0FBMEI7QUFBQ3BRLGlCQUFDLEdBQUNyQyxDQUFDLENBQUNzUyxPQUFKLEVBQVloUSxDQUFDLEdBQUN0QyxDQUFDLENBQUNrVCx3QkFBRixFQUFkLEVBQTJDM1EsQ0FBQyxHQUFDdkMsQ0FBQyxDQUFDZ1QsaUJBQUYsRUFBN0MsRUFBbUV4UyxDQUFDLEdBQUNSLENBQUMsQ0FBQ2lULGlCQUFGLEVBQXJFO0FBQTJGalQsaUJBQUMsQ0FBQ21ULFNBQUYsQ0FBWTNTLENBQVosRUFBYytCLENBQWQsRUFBZ0JELENBQWhCLEdBQW1CeEIsQ0FBQyxDQUFDOEssY0FBRixDQUFpQnZKLENBQUMsQ0FBQ29JLENBQW5CLEVBQXFCcEksQ0FBQyxDQUFDakMsQ0FBdkIsRUFBeUJrQyxDQUFDLENBQUNtSSxDQUEzQixFQUE2Qm5JLENBQUMsQ0FBQ2xDLENBQS9CLEVBQWlDbUMsQ0FBQyxDQUFDa0ksQ0FBbkMsRUFBcUNsSSxDQUFDLENBQUNuQyxDQUF2QyxFQUF5Q0ksQ0FBQyxDQUFDaUssQ0FBM0MsRUFBNkNqSyxDQUFDLENBQUNKLENBQS9DLENBQW5CLEVBQXFFLFFBQU1MLENBQU4sSUFBU0EsQ0FBQyxDQUFDc1IsYUFBRixDQUFnQi9PLENBQUMsQ0FBQ21JLENBQWxCLEVBQW9CbkksQ0FBQyxDQUFDbEMsQ0FBdEIsRUFBd0JtQyxDQUFDLENBQUNrSSxDQUExQixFQUE0QmxJLENBQUMsQ0FBQ25DLENBQTlCLEVBQWdDSSxDQUFDLENBQUNpSyxDQUFsQyxFQUFvQ2pLLENBQUMsQ0FBQ0osQ0FBdEMsQ0FBOUU7QUFBdUg7O0FBQUE7O0FBQU0saUJBQUksR0FBSjtBQUFRLGlCQUFJLEdBQUo7QUFBUSxxQkFBSyxDQUFDSixDQUFDLENBQUN5UyxjQUFGLEVBQU4sR0FBMEI7QUFBQ3BRLGlCQUFDLEdBQUNyQyxDQUFDLENBQUNzUyxPQUFKLEVBQVkvUCxDQUFDLEdBQUN2QyxDQUFDLENBQUNnVCxpQkFBRixFQUFkLEVBQW9DeFMsQ0FBQyxHQUFDUixDQUFDLENBQUNpVCxpQkFBRixFQUF0QztBQUE0RGpULGlCQUFDLENBQUNtVCxTQUFGLENBQVkzUyxDQUFaLEVBQWMrQixDQUFkLEVBQWdCQSxDQUFoQixHQUFtQnpCLENBQUMsQ0FBQzZLLGlCQUFGLENBQW9CdEosQ0FBQyxDQUFDb0ksQ0FBdEIsRUFBd0JwSSxDQUFDLENBQUNqQyxDQUExQixFQUE0Qm1DLENBQUMsQ0FBQ2tJLENBQTlCLEVBQWdDbEksQ0FBQyxDQUFDbkMsQ0FBbEMsRUFBb0NJLENBQUMsQ0FBQ2lLLENBQXRDLEVBQXdDakssQ0FBQyxDQUFDSixDQUExQyxDQUFuQixFQUFnRSxRQUFNTCxDQUFOLElBQVNBLENBQUMsQ0FBQ3dULGdCQUFGLENBQW1CaFIsQ0FBQyxDQUFDa0ksQ0FBckIsRUFBdUJsSSxDQUFDLENBQUNuQyxDQUF6QixFQUEyQkksQ0FBQyxDQUFDaUssQ0FBN0IsRUFBK0JqSyxDQUFDLENBQUNKLENBQWpDLENBQXpFO0FBQTZHOztBQUFBOztBQUFNLGlCQUFJLEdBQUo7QUFBUSxpQkFBSSxHQUFKO0FBQVEscUJBQUssQ0FBQ0osQ0FBQyxDQUFDeVMsY0FBRixFQUFOLEdBQTBCO0FBQUNwUSxpQkFBQyxHQUFDckMsQ0FBQyxDQUFDc1MsT0FBSixFQUFZL1AsQ0FBQyxHQUFDdkMsQ0FBQyxDQUFDa1Qsd0JBQUYsRUFBZDtBQUEyQ2xULGlCQUFDLENBQUNxUyxPQUFGLEdBQVU5UCxDQUFWO0FBQVkvQixpQkFBQyxHQUFDUixDQUFDLENBQUNpVCxpQkFBRixFQUFGO0FBQXdCalQsaUJBQUMsQ0FBQ21ULFNBQUYsQ0FBWTNTLENBQVosRUFBYytCLENBQWQsRUFBZ0JBLENBQWhCLEdBQW1CekIsQ0FBQyxDQUFDNkssaUJBQUYsQ0FBb0J0SixDQUFDLENBQUNvSSxDQUF0QixFQUF3QnBJLENBQUMsQ0FBQ2pDLENBQTFCLEVBQTRCbUMsQ0FBQyxDQUFDa0ksQ0FBOUIsRUFBZ0NsSSxDQUFDLENBQUNuQyxDQUFsQyxFQUFvQ0ksQ0FBQyxDQUFDaUssQ0FBdEMsRUFBd0NqSyxDQUFDLENBQUNKLENBQTFDLENBQW5CLEVBQWdFLFFBQU1MLENBQU4sSUFBU0EsQ0FBQyxDQUFDd1QsZ0JBQUYsQ0FBbUJoUixDQUFDLENBQUNrSSxDQUFyQixFQUF1QmxJLENBQUMsQ0FBQ25DLENBQXpCLEVBQTJCSSxDQUFDLENBQUNpSyxDQUE3QixFQUErQmpLLENBQUMsQ0FBQ0osQ0FBakMsQ0FBekU7QUFBNkc7O0FBQUE7O0FBQU0saUJBQUksR0FBSjtBQUFRLGlCQUFJLEdBQUo7QUFBUSxxQkFBSyxDQUFDSixDQUFDLENBQUN5UyxjQUFGLEVBQU4sR0FBMEI7QUFBQ3BRLGlCQUFDLEdBQUNyQyxDQUFDLENBQUNzUyxPQUFKO0FBQVksb0JBQUl4UCxDQUFDLEdBQUM5QyxDQUFDLENBQUM0UyxTQUFGLEVBQU47QUFBQSxvQkFBb0JqUyxDQUFDLEdBQUNYLENBQUMsQ0FBQzRTLFNBQUYsRUFBdEI7QUFBQSxvQkFBb0MxUixDQUFDLEdBQUNsQixDQUFDLENBQUM0UyxTQUFGLE1BQWVqTixJQUFJLENBQUNzRCxFQUFMLEdBQVEsR0FBdkIsQ0FBdEM7QUFBQSxvQkFBa0U5SCxDQUFDLEdBQUNuQixDQUFDLENBQUM0UyxTQUFGLEVBQXBFO0FBQUEsb0JBQWtGL1IsQ0FBQyxHQUFDYixDQUFDLENBQUM0UyxTQUFGLEVBQXBGO0FBQUEsb0JBQWtHdlIsQ0FBQyxJQUFFYixDQUFDLEdBQUNSLENBQUMsQ0FBQ2lULGlCQUFGLEVBQUYsRUFBd0IsSUFBSS9PLENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWTdFLElBQUksQ0FBQzZHLEdBQUwsQ0FBU3RMLENBQVQsS0FBYW1CLENBQUMsQ0FBQ29JLENBQUYsR0FBSWpLLENBQUMsQ0FBQ2lLLENBQW5CLElBQXNCLENBQXRCLEdBQXdCOUUsSUFBSSxDQUFDOEcsR0FBTCxDQUFTdkwsQ0FBVCxLQUFhbUIsQ0FBQyxDQUFDakMsQ0FBRixHQUFJSSxDQUFDLENBQUNKLENBQW5CLElBQXNCLENBQTFELEVBQTRELENBQUN1RixJQUFJLENBQUM4RyxHQUFMLENBQVN2TCxDQUFULENBQUQsSUFBY21CLENBQUMsQ0FBQ29JLENBQUYsR0FBSWpLLENBQUMsQ0FBQ2lLLENBQXBCLElBQXVCLENBQXZCLEdBQXlCOUUsSUFBSSxDQUFDNkcsR0FBTCxDQUFTdEwsQ0FBVCxLQUFhbUIsQ0FBQyxDQUFDakMsQ0FBRixHQUFJSSxDQUFDLENBQUNKLENBQW5CLElBQXNCLENBQTNHLENBQTFCLENBQW5HO0FBQUEsb0JBQTRPQSxDQUFDLEdBQUN1RixJQUFJLENBQUNFLEdBQUwsQ0FBU3hFLENBQUMsQ0FBQ29KLENBQVgsRUFBYSxDQUFiLElBQWdCOUUsSUFBSSxDQUFDRSxHQUFMLENBQVMvQyxDQUFULEVBQVcsQ0FBWCxDQUFoQixHQUE4QjZDLElBQUksQ0FBQ0UsR0FBTCxDQUFTeEUsQ0FBQyxDQUFDakIsQ0FBWCxFQUFhLENBQWIsSUFBZ0J1RixJQUFJLENBQUNFLEdBQUwsQ0FBU2xGLENBQVQsRUFBVyxDQUFYLENBQTVSO0FBQTBTLG9CQUFFUCxDQUFGLEtBQU0wQyxDQUFDLElBQUU2QyxJQUFJLENBQUNDLElBQUwsQ0FBVXhGLENBQVYsQ0FBSCxFQUFnQk8sQ0FBQyxJQUFFZ0YsSUFBSSxDQUFDQyxJQUFMLENBQVV4RixDQUFWLENBQXpCO0FBQXVDLG9CQUFJQyxDQUFDLEdBQUMsQ0FBQ2MsQ0FBQyxJQUFFTixDQUFILEdBQUssQ0FBQyxDQUFOLEdBQVEsQ0FBVCxJQUFZOEUsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQ0QsSUFBSSxDQUFDRSxHQUFMLENBQVMvQyxDQUFULEVBQVcsQ0FBWCxJQUFjNkMsSUFBSSxDQUFDRSxHQUFMLENBQVNsRixDQUFULEVBQVcsQ0FBWCxDQUFkLEdBQTRCZ0YsSUFBSSxDQUFDRSxHQUFMLENBQVMvQyxDQUFULEVBQVcsQ0FBWCxJQUFjNkMsSUFBSSxDQUFDRSxHQUFMLENBQVN4RSxDQUFDLENBQUNqQixDQUFYLEVBQWEsQ0FBYixDQUExQyxHQUEwRHVGLElBQUksQ0FBQ0UsR0FBTCxDQUFTbEYsQ0FBVCxFQUFXLENBQVgsSUFBY2dGLElBQUksQ0FBQ0UsR0FBTCxDQUFTeEUsQ0FBQyxDQUFDb0osQ0FBWCxFQUFhLENBQWIsQ0FBekUsS0FBMkY5RSxJQUFJLENBQUNFLEdBQUwsQ0FBUy9DLENBQVQsRUFBVyxDQUFYLElBQWM2QyxJQUFJLENBQUNFLEdBQUwsQ0FBU3hFLENBQUMsQ0FBQ2pCLENBQVgsRUFBYSxDQUFiLENBQWQsR0FBOEJ1RixJQUFJLENBQUNFLEdBQUwsQ0FBU2xGLENBQVQsRUFBVyxDQUFYLElBQWNnRixJQUFJLENBQUNFLEdBQUwsQ0FBU3hFLENBQUMsQ0FBQ29KLENBQVgsRUFBYSxDQUFiLENBQXZJLENBQVYsQ0FBbEI7QUFBcUxjLHFCQUFLLENBQUNsTCxDQUFELENBQUwsS0FBV0EsQ0FBQyxHQUFDLENBQWI7O0FBQWdCLG9CQUFJMEgsQ0FBQyxHQUFDLElBQUk3RCxDQUFDLENBQUNzRyxLQUFOLENBQVluSyxDQUFDLEdBQUN5QyxDQUFGLEdBQUl6QixDQUFDLENBQUNqQixDQUFOLEdBQVFPLENBQXBCLEVBQXNCTixDQUFDLEdBQUMsQ0FBQ00sQ0FBSCxHQUFLVSxDQUFDLENBQUNvSixDQUFQLEdBQVMzSCxDQUEvQixDQUFOO0FBQUEsb0JBQXdDMkgsQ0FBQyxHQUFDLElBQUl2RyxDQUFDLENBQUNzRyxLQUFOLENBQVksQ0FBQ25JLENBQUMsQ0FBQ29JLENBQUYsR0FBSWpLLENBQUMsQ0FBQ2lLLENBQVAsSUFBVSxDQUFWLEdBQVk5RSxJQUFJLENBQUM2RyxHQUFMLENBQVN0TCxDQUFULElBQVk2RyxDQUFDLENBQUMwQyxDQUExQixHQUE0QjlFLElBQUksQ0FBQzhHLEdBQUwsQ0FBU3ZMLENBQVQsSUFBWTZHLENBQUMsQ0FBQzNILENBQXRELEVBQXdELENBQUNpQyxDQUFDLENBQUNqQyxDQUFGLEdBQUlJLENBQUMsQ0FBQ0osQ0FBUCxJQUFVLENBQVYsR0FBWXVGLElBQUksQ0FBQzhHLEdBQUwsQ0FBU3ZMLENBQVQsSUFBWTZHLENBQUMsQ0FBQzBDLENBQTFCLEdBQTRCOUUsSUFBSSxDQUFDNkcsR0FBTCxDQUFTdEwsQ0FBVCxJQUFZNkcsQ0FBQyxDQUFDM0gsQ0FBbEcsQ0FBMUM7QUFBQSxvQkFBK0k0SCxDQUFDLEdBQUMsVUFBU2pJLENBQVQsRUFBVztBQUFDLHlCQUFPNEYsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsR0FBTCxDQUFTOUYsQ0FBQyxDQUFDLENBQUQsQ0FBVixFQUFjLENBQWQsSUFBaUI0RixJQUFJLENBQUNFLEdBQUwsQ0FBUzlGLENBQUMsQ0FBQyxDQUFELENBQVYsRUFBYyxDQUFkLENBQTNCLENBQVA7QUFBb0QsaUJBQWpOO0FBQUEsb0JBQWtOK0QsQ0FBQyxHQUFDLFVBQVMvRCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLHlCQUFNLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0MsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtDLENBQUMsQ0FBQyxDQUFELENBQWpCLEtBQXVCZ0ksQ0FBQyxDQUFDakksQ0FBRCxDQUFELEdBQUtpSSxDQUFDLENBQUNoSSxDQUFELENBQTdCLENBQU47QUFBd0MsaUJBQTFRO0FBQUEsb0JBQTJRd1QsQ0FBQyxHQUFDLFVBQVN6VCxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLHlCQUFNLENBQUNELENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS0MsQ0FBQyxDQUFDLENBQUQsQ0FBTixHQUFVRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtDLENBQUMsQ0FBQyxDQUFELENBQWhCLEdBQW9CLENBQUMsQ0FBckIsR0FBdUIsQ0FBeEIsSUFBMkIyRixJQUFJLENBQUM4TixJQUFMLENBQVUzUCxDQUFDLENBQUMvRCxDQUFELEVBQUdDLENBQUgsQ0FBWCxDQUFqQztBQUFtRCxpQkFBOVU7QUFBQSxvQkFBK1UwVCxDQUFDLEdBQUNGLENBQUMsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBTyxDQUFDLENBQUNuUyxDQUFDLENBQUNvSixDQUFGLEdBQUkxQyxDQUFDLENBQUMwQyxDQUFQLElBQVUzSCxDQUFYLEVBQWEsQ0FBQ3pCLENBQUMsQ0FBQ2pCLENBQUYsR0FBSTJILENBQUMsQ0FBQzNILENBQVAsSUFBVU8sQ0FBdkIsQ0FBUCxDQUFsVjtBQUFBLG9CQUFvWGdULENBQUMsR0FBQyxDQUFDLENBQUN0UyxDQUFDLENBQUNvSixDQUFGLEdBQUkxQyxDQUFDLENBQUMwQyxDQUFQLElBQVUzSCxDQUFYLEVBQWEsQ0FBQ3pCLENBQUMsQ0FBQ2pCLENBQUYsR0FBSTJILENBQUMsQ0FBQzNILENBQVAsSUFBVU8sQ0FBdkIsQ0FBdFg7QUFBQSxvQkFBZ1ppVCxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUN2UyxDQUFDLENBQUNvSixDQUFILEdBQUsxQyxDQUFDLENBQUMwQyxDQUFSLElBQVczSCxDQUFaLEVBQWMsQ0FBQyxDQUFDekIsQ0FBQyxDQUFDakIsQ0FBSCxHQUFLMkgsQ0FBQyxDQUFDM0gsQ0FBUixJQUFXTyxDQUF6QixDQUFsWjtBQUFBLG9CQUE4YWtULENBQUMsR0FBQ0wsQ0FBQyxDQUFDRyxDQUFELEVBQUdDLENBQUgsQ0FBamI7O0FBQXViOVAsaUJBQUMsQ0FBQzZQLENBQUQsRUFBR0MsQ0FBSCxDQUFELElBQVEsQ0FBQyxDQUFULEtBQWFDLENBQUMsR0FBQ2xPLElBQUksQ0FBQ3NELEVBQXBCLEdBQXdCLEtBQUduRixDQUFDLENBQUM2UCxDQUFELEVBQUdDLENBQUgsQ0FBSixLQUFZQyxDQUFDLEdBQUMsQ0FBZCxDQUF4QjtBQUF5QyxvQkFBSUMsQ0FBQyxHQUFDLElBQUVqVCxDQUFGLEdBQUksQ0FBSixHQUFNLENBQUMsQ0FBYjtBQUFBLG9CQUFla1QsQ0FBQyxHQUFDTCxDQUFDLEdBQUNJLENBQUMsSUFBRUQsQ0FBQyxHQUFDLENBQUosQ0FBcEI7QUFBQSxvQkFBMkJHLENBQUMsR0FBQyxJQUFJOVAsQ0FBQyxDQUFDc0csS0FBTixDQUFZQyxDQUFDLENBQUNBLENBQUYsR0FBSTNILENBQUMsR0FBQzZDLElBQUksQ0FBQzZHLEdBQUwsQ0FBU3VILENBQVQsQ0FBbEIsRUFBOEJ0SixDQUFDLENBQUNySyxDQUFGLEdBQUlPLENBQUMsR0FBQ2dGLElBQUksQ0FBQzhHLEdBQUwsQ0FBU3NILENBQVQsQ0FBcEMsQ0FBN0I7O0FBQThFLG9CQUFHL1QsQ0FBQyxDQUFDb1QsY0FBRixDQUFpQlksQ0FBakIsRUFBbUJELENBQUMsR0FBQ0QsQ0FBQyxHQUFDbk8sSUFBSSxDQUFDc0QsRUFBUCxHQUFVLENBQS9CLEdBQWtDakosQ0FBQyxDQUFDb1QsY0FBRixDQUFpQjVTLENBQWpCLEVBQW1CdVQsQ0FBQyxHQUFDRCxDQUFDLEdBQUNuTyxJQUFJLENBQUNzRCxFQUE1QixDQUFsQyxFQUFrRW5JLENBQUMsQ0FBQ3dLLFFBQUYsQ0FBVzlLLENBQUMsQ0FBQ2lLLENBQWIsRUFBZWpLLENBQUMsQ0FBQ0osQ0FBakIsQ0FBbEUsRUFBc0YsUUFBTUwsQ0FBTixJQUFTLENBQUN3TCxLQUFLLENBQUNtSSxDQUFELENBQWYsSUFBb0IsQ0FBQ25JLEtBQUssQ0FBQ3NJLENBQUQsQ0FBbkgsRUFBdUg7QUFBQy9QLG1CQUFDLEdBQUNuRCxDQUFDLEdBQUNtQyxDQUFGLEdBQUlBLENBQUosR0FBTW5DLENBQVI7QUFBVSxzQkFBSXNULENBQUMsR0FBQ3RULENBQUMsR0FBQ21DLENBQUYsR0FBSSxDQUFKLEdBQU1BLENBQUMsR0FBQ25DLENBQWQ7QUFBQSxzQkFBZ0J1VCxDQUFDLEdBQUN2VCxDQUFDLEdBQUNtQyxDQUFGLEdBQUluQyxDQUFDLEdBQUNtQyxDQUFOLEdBQVEsQ0FBMUI7QUFBNEIvQyxtQkFBQyxDQUFDaU0sU0FBRixDQUFZdkIsQ0FBQyxDQUFDQSxDQUFkLEVBQWdCQSxDQUFDLENBQUNySyxDQUFsQixHQUFxQkwsQ0FBQyxDQUFDcU0sTUFBRixDQUFTbEwsQ0FBVCxDQUFyQixFQUFpQ25CLENBQUMsQ0FBQzJNLEtBQUYsQ0FBUXVILENBQVIsRUFBVUMsQ0FBVixDQUFqQyxFQUE4Q25VLENBQUMsQ0FBQ3dSLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixFQUFVek4sQ0FBVixFQUFZNFAsQ0FBWixFQUFjQSxDQUFDLEdBQUNHLENBQWhCLEVBQWtCLElBQUVoVCxDQUFwQixDQUE5QyxFQUFxRWQsQ0FBQyxDQUFDMk0sS0FBRixDQUFRLElBQUV1SCxDQUFWLEVBQVksSUFBRUMsQ0FBZCxDQUFyRSxFQUFzRm5VLENBQUMsQ0FBQ3FNLE1BQUYsQ0FBUyxDQUFDbEwsQ0FBVixDQUF0RixFQUFtR25CLENBQUMsQ0FBQ2lNLFNBQUYsQ0FBWSxDQUFDdkIsQ0FBQyxDQUFDQSxDQUFmLEVBQWlCLENBQUNBLENBQUMsQ0FBQ3JLLENBQXBCLENBQW5HO0FBQTBIO0FBQUM7O0FBQUE7O0FBQU0saUJBQUksR0FBSjtBQUFRLGlCQUFJLEdBQUo7QUFBUSxzQkFBTUwsQ0FBTixJQUFTZSxDQUFDLENBQUNrSyxFQUFGLEtBQU9sSyxDQUFDLENBQUNzSyxFQUFsQixJQUFzQnRLLENBQUMsQ0FBQ3FLLEVBQUYsS0FBT3JLLENBQUMsQ0FBQ3VLLEVBQS9CLElBQW1DdEwsQ0FBQyxDQUFDbVIsU0FBRixFQUFuQyxFQUFpRGxSLENBQUMsQ0FBQ3NTLE9BQUYsR0FBVXRTLENBQUMsQ0FBQ29TLEtBQTdEO0FBQTV3Rzs7QUFBKzBHLGlCQUFPdFIsQ0FBUDtBQUFTLFNBQWxpTCxFQUFtaUwsS0FBS3lQLFVBQUwsR0FBZ0IsWUFBVTtBQUFDLGVBQUksSUFBSXhRLENBQUMsR0FBQyxLQUFLZ1MsVUFBTCxDQUFnQnNCLGVBQWhCLEVBQU4sRUFBd0NyVCxDQUFDLEdBQUMsS0FBSytSLFVBQUwsQ0FBZ0J1QixlQUFoQixFQUExQyxFQUE0RXhTLENBQUMsR0FBQyxFQUE5RSxFQUFpRk0sQ0FBQyxHQUFDLENBQXZGLEVBQXlGQSxDQUFDLEdBQUNyQixDQUFDLENBQUMyQixNQUE3RixFQUFvR04sQ0FBQyxFQUFyRyxFQUF3R04sQ0FBQyxDQUFDd0UsSUFBRixDQUFPLENBQUN2RixDQUFDLENBQUNxQixDQUFELENBQUYsRUFBTXBCLENBQUMsQ0FBQ29CLENBQUQsQ0FBUCxDQUFQOztBQUFvQixpQkFBT04sQ0FBUDtBQUFTLFNBQW5zTDtBQUFvc0wsT0FBdnV4QixFQUF3dXhCb0QsQ0FBQyxDQUFDakIsT0FBRixDQUFVZ04sSUFBVixDQUFlL00sU0FBZixHQUF5QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVK00sZUFBZCxFQUFqd3hCLEVBQSt4eEI5TCxDQUFDLENBQUNqQixPQUFGLENBQVVrUixPQUFWLEdBQWtCLFVBQVNwVSxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLdUksYUFBTCxHQUFtQixVQUFTdkksQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZTtBQUFDLGNBQUlNLENBQUMsR0FBQyxLQUFLb0gsU0FBTCxDQUFlLE9BQWYsRUFBd0JNLFFBQXhCLENBQWlDLEdBQWpDLEVBQXFDLENBQUMsQ0FBdEMsQ0FBTjtBQUFBLGNBQStDbEgsQ0FBQyxHQUFDLEtBQUs0RyxTQUFMLENBQWUsUUFBZixFQUF5Qk0sUUFBekIsQ0FBa0MsR0FBbEMsRUFBc0MsQ0FBQyxDQUF2QyxDQUFqRDtBQUFBLGNBQTJGM0csQ0FBQyxHQUFDLElBQUkrQixDQUFDLENBQUNqQixPQUFGLENBQVUxQixHQUFkLEVBQTdGO0FBQStHWSxXQUFDLENBQUNzTCxVQUFGLENBQWEyRyxPQUFiLEdBQXFCLElBQUlsUSxDQUFDLENBQUNrRCxRQUFOLENBQWUsU0FBZixFQUF5QixLQUFLb0IsU0FBTCxDQUFlLFNBQWYsRUFBMEJsQixLQUFuRCxDQUFyQixFQUErRW5GLENBQUMsQ0FBQ3NMLFVBQUYsQ0FBYXpNLEtBQWIsR0FBbUIsSUFBSWtELENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxPQUFmLEVBQXVCaEcsQ0FBQyxHQUFDLElBQXpCLENBQWxHLEVBQWlJZSxDQUFDLENBQUNzTCxVQUFGLENBQWF4TSxNQUFiLEdBQW9CLElBQUlpRCxDQUFDLENBQUNrRCxRQUFOLENBQWUsUUFBZixFQUF3QnhGLENBQUMsR0FBQyxJQUExQixDQUFySixFQUFxTE8sQ0FBQyxDQUFDc0wsVUFBRixDQUFhYixTQUFiLEdBQXVCLElBQUkxSSxDQUFDLENBQUNrRCxRQUFOLENBQWUsV0FBZixFQUEyQixLQUFLb0IsU0FBTCxDQUFlLGtCQUFmLEVBQW1DbEIsS0FBOUQsQ0FBNU0sRUFBaVJuRixDQUFDLENBQUN5TCxRQUFGLEdBQVcsS0FBS0EsUUFBalM7QUFBMFMsY0FBSXZMLENBQUMsR0FBQ3hCLENBQUMsQ0FBQ08sQ0FBRCxFQUFHUSxDQUFILENBQVA7QUFBQSxjQUFhVSxDQUFDLEdBQUNELENBQUMsQ0FBQ1IsVUFBRixDQUFhLElBQWIsQ0FBZjtBQUFrQyxlQUFLMkcsU0FBTCxDQUFlLEdBQWYsRUFBb0JoQixRQUFwQixNQUFnQyxLQUFLZ0IsU0FBTCxDQUFlLEdBQWYsRUFBb0JoQixRQUFwQixFQUFoQyxJQUFnRWxGLENBQUMsQ0FBQzBKLFNBQUYsQ0FBWSxLQUFLeEQsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLEVBQWlDLENBQUMsQ0FBbEMsQ0FBWixFQUFpRCxLQUFLTixTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsRUFBaUMsQ0FBQyxDQUFsQyxDQUFqRCxDQUFoRSxFQUF1SmhJLENBQUMsQ0FBQzBHLFFBQUYsS0FBYSxLQUFLa0csTUFBTCxDQUFZLGNBQVosSUFBNEI1TSxDQUF6QyxHQUEyQyxPQUFPLEtBQUs0TSxNQUFMLENBQVksY0FBWixDQUF6TTs7QUFBcU8sZUFBSSxJQUFJbkwsQ0FBQyxHQUFDLENBQUMsQ0FBWCxFQUFhQSxDQUFDLElBQUUsQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkIsRUFBc0IsS0FBSSxJQUFJL0IsQ0FBQyxHQUFDLENBQUMsQ0FBWCxFQUFhQSxDQUFDLElBQUUsQ0FBaEIsRUFBa0JBLENBQUMsRUFBbkIsRUFBc0I4QixDQUFDLENBQUMwTCxJQUFGLElBQVM3TCxDQUFDLENBQUNzTCxVQUFGLENBQWFoRCxDQUFiLEdBQWUsSUFBSXZHLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxHQUFmLEVBQW1CN0UsQ0FBQyxHQUFDRixDQUFDLENBQUNyQixLQUF2QixDQUF4QixFQUFzRG1CLENBQUMsQ0FBQ3NMLFVBQUYsQ0FBYXJOLENBQWIsR0FBZSxJQUFJOEQsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLEdBQWYsRUFBbUI1RyxDQUFDLEdBQUM2QixDQUFDLENBQUNwQixNQUF2QixDQUFyRSxFQUFvR2tCLENBQUMsQ0FBQzRMLE1BQUYsQ0FBU3pMLENBQVQsQ0FBcEcsRUFBZ0hBLENBQUMsQ0FBQzhMLE9BQUYsRUFBaEg7O0FBQTRILGlCQUFPck8sQ0FBQyxDQUFDdUksYUFBRixDQUFnQmpHLENBQWhCLEVBQWtCLFFBQWxCLENBQVA7QUFBbUMsU0FBMzdCO0FBQTQ3QixPQUF6dnpCLEVBQTB2ekI2QixDQUFDLENBQUNqQixPQUFGLENBQVVrUixPQUFWLENBQWtCalIsU0FBbEIsR0FBNEIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBdHh6QixFQUFnenpCdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVb1IsTUFBVixHQUFpQixVQUFTdFUsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQXBCLEVBQWdDLEtBQUtWLElBQUwsQ0FBVS9NLENBQVYsQ0FBaEMsRUFBNkMsS0FBS3VVLFVBQUwsR0FBZ0IsS0FBS3ZHLE1BQWxFLEVBQXlFLEtBQUtBLE1BQUwsR0FBWSxVQUFTaE8sQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZTtBQUFDLGNBQUdkLENBQUgsRUFBSztBQUFDRCxhQUFDLENBQUNpTSxTQUFGLENBQVloTSxDQUFDLENBQUN5SyxDQUFkLEVBQWdCekssQ0FBQyxDQUFDSSxDQUFsQixHQUFxQixVQUFRLEtBQUtvSSxTQUFMLENBQWUsUUFBZixFQUF5QmIsY0FBekIsQ0FBd0MsTUFBeEMsQ0FBUixJQUF5RDVILENBQUMsQ0FBQ3FNLE1BQUYsQ0FBU3RMLENBQVQsQ0FBOUUsRUFBMEYsaUJBQWUsS0FBSzBILFNBQUwsQ0FBZSxhQUFmLEVBQThCYixjQUE5QixDQUE2QyxhQUE3QyxDQUFmLElBQTRFNUgsQ0FBQyxDQUFDMk0sS0FBRixDQUFRM00sQ0FBQyxDQUFDcVAsU0FBVixFQUFvQnJQLENBQUMsQ0FBQ3FQLFNBQXRCLENBQXRLLEVBQXVNclAsQ0FBQyxDQUFDaU8sSUFBRixFQUF2TTtBQUFnTixnQkFBSTVNLENBQUMsR0FBQyxJQUFJOEMsQ0FBQyxDQUFDakIsT0FBRixDQUFVMUIsR0FBZCxFQUFOO0FBQXdCSCxhQUFDLENBQUNxTSxVQUFGLENBQWEyRyxPQUFiLEdBQXFCLElBQUlsUSxDQUFDLENBQUNrRCxRQUFOLENBQWUsU0FBZixFQUF5QixLQUFLb0IsU0FBTCxDQUFlLFNBQWYsRUFBMEJsQixLQUFuRCxDQUFyQixFQUErRWxHLENBQUMsQ0FBQ3FNLFVBQUYsQ0FBYThHLElBQWIsR0FBa0IsSUFBSXJRLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxNQUFmLEVBQXNCLEtBQUtvQixTQUFMLENBQWUsTUFBZixFQUF1QmxCLEtBQTdDLENBQWpHLEVBQXFKbEcsQ0FBQyxDQUFDcU0sVUFBRixDQUFhK0csSUFBYixHQUFrQixJQUFJdFEsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE1BQWYsRUFBc0IsS0FBS29CLFNBQUwsQ0FBZSxNQUFmLEVBQXVCbEIsS0FBN0MsQ0FBdkssRUFBMk5sRyxDQUFDLENBQUNxTSxVQUFGLENBQWF6TSxLQUFiLEdBQW1CLElBQUlrRCxDQUFDLENBQUNrRCxRQUFOLENBQWUsT0FBZixFQUF1QixLQUFLb0IsU0FBTCxDQUFlLGFBQWYsRUFBOEJsQixLQUFyRCxDQUE5TyxFQUEwU2xHLENBQUMsQ0FBQ3FNLFVBQUYsQ0FBYXhNLE1BQWIsR0FBb0IsSUFBSWlELENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxRQUFmLEVBQXdCLEtBQUtvQixTQUFMLENBQWUsY0FBZixFQUErQmxCLEtBQXZELENBQTlULEVBQTRYbEcsQ0FBQyxDQUFDcU0sVUFBRixDQUFhNEMsSUFBYixHQUFrQixJQUFJbk0sQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE1BQWYsRUFBc0IsS0FBS29CLFNBQUwsQ0FBZSxNQUFmLEVBQXVCYixjQUF2QixDQUFzQyxPQUF0QyxDQUF0QixDQUE5WSxFQUFvZHZHLENBQUMsQ0FBQ3FNLFVBQUYsQ0FBYTZDLE1BQWIsR0FBb0IsSUFBSXBNLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxRQUFmLEVBQXdCLEtBQUtvQixTQUFMLENBQWUsUUFBZixFQUF5QmIsY0FBekIsQ0FBd0MsTUFBeEMsQ0FBeEIsQ0FBeGUsRUFBaWpCdkcsQ0FBQyxDQUFDd00sUUFBRixHQUFXLEtBQUtBLFFBQWprQixFQUEwa0J4TSxDQUFDLENBQUMyTSxNQUFGLENBQVNoTyxDQUFULENBQTFrQixFQUFzbEJBLENBQUMsQ0FBQ3FPLE9BQUYsRUFBdGxCLEVBQWttQixpQkFBZSxLQUFLNUYsU0FBTCxDQUFlLGFBQWYsRUFBOEJiLGNBQTlCLENBQTZDLGFBQTdDLENBQWYsSUFBNEU1SCxDQUFDLENBQUMyTSxLQUFGLENBQVEsSUFBRTNNLENBQUMsQ0FBQ3FQLFNBQVosRUFBc0IsSUFBRXJQLENBQUMsQ0FBQ3FQLFNBQTFCLENBQTlxQixFQUFtdEIsVUFBUSxLQUFLNUcsU0FBTCxDQUFlLFFBQWYsRUFBeUJiLGNBQXpCLENBQXdDLE1BQXhDLENBQVIsSUFBeUQ1SCxDQUFDLENBQUNxTSxNQUFGLENBQVMsQ0FBQ3RMLENBQVYsQ0FBNXdCLEVBQXl4QmYsQ0FBQyxDQUFDaU0sU0FBRixDQUFZLENBQUNoTSxDQUFDLENBQUN5SyxDQUFmLEVBQWlCLENBQUN6SyxDQUFDLENBQUNJLENBQXBCLENBQXp4QjtBQUFnekI7QUFBQyxTQUFwb0M7QUFBcW9DLE9BQWw5MUIsRUFBbTkxQjhELENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9SLE1BQVYsQ0FBaUJuUixTQUFqQixHQUEyQixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBZCxFQUE5KzFCLEVBQXdnMkJ0SixDQUFDLENBQUNqQixPQUFGLENBQVV3UixJQUFWLEdBQWUsVUFBUzFVLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFwQixFQUFnQyxLQUFLVixJQUFMLENBQVUvTSxDQUFWLENBQWhDLEVBQTZDLEtBQUtnTyxNQUFMLEdBQVksWUFBVSxDQUFFLENBQXJFO0FBQXNFLE9BQXptMkIsRUFBMG0yQjdKLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXdSLElBQVYsQ0FBZXZSLFNBQWYsR0FBeUIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBbm8yQixFQUE2cDJCdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVeVIsWUFBVixHQUF1QixVQUFTM1UsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQXBCLEVBQWdDLEtBQUtWLElBQUwsQ0FBVS9NLENBQVYsQ0FBaEMsRUFBNkMsS0FBSzRVLEtBQUwsR0FBVyxFQUF4RDs7QUFBMkQsYUFBSSxJQUFJM1UsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs0TixRQUFMLENBQWNsTSxNQUE1QixFQUFtQzFCLENBQUMsRUFBcEMsRUFBdUM7QUFBQyxjQUFJYyxDQUFDLEdBQUMsS0FBSzhNLFFBQUwsQ0FBYzVOLENBQWQsQ0FBTjtBQUF1QixvQkFBUWMsQ0FBQyxDQUFDcU0sSUFBVixJQUFnQixLQUFLd0gsS0FBTCxDQUFXclAsSUFBWCxDQUFnQnhFLENBQWhCLENBQWhCO0FBQW1DOztBQUFBLGFBQUs4VCxXQUFMLEdBQWlCLFlBQVUsQ0FBRSxDQUE3QixFQUE4QixLQUFLQyxhQUFMLEdBQW1CLFlBQVU7QUFBQyxpQkFBTyxLQUFLck0sU0FBTCxDQUFlLGVBQWYsRUFBZ0NiLGNBQWhDLENBQStDLG1CQUEvQyxDQUFQO0FBQTJFLFNBQXZJLEVBQXdJLEtBQUttTixtQkFBTCxHQUF5QixDQUFDLGVBQUQsQ0FBakssRUFBbUwsS0FBS0Msb0JBQUwsR0FBMEIsVUFBU2hWLENBQVQsRUFBVztBQUFDLGVBQUksSUFBSUMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs4VSxtQkFBTCxDQUF5QnBULE1BQXZDLEVBQThDMUIsQ0FBQyxFQUEvQyxFQUFrRDtBQUFDLGdCQUFJYyxDQUFDLEdBQUMsS0FBS2dVLG1CQUFMLENBQXlCOVUsQ0FBekIsQ0FBTjtBQUFrQyxhQUFDLEtBQUt3SSxTQUFMLENBQWUxSCxDQUFmLEVBQWtCMEcsUUFBbEIsRUFBRCxJQUErQnpILENBQUMsQ0FBQ3lJLFNBQUYsQ0FBWTFILENBQVosRUFBZTBHLFFBQWYsRUFBL0IsS0FBMkQsS0FBS2dCLFNBQUwsQ0FBZTFILENBQWYsRUFBaUIsQ0FBQyxDQUFsQixFQUFxQndHLEtBQXJCLEdBQTJCdkgsQ0FBQyxDQUFDeUksU0FBRixDQUFZMUgsQ0FBWixFQUFld0csS0FBckc7QUFBNEc7QUFBQyxTQUEzWixFQUE0WixLQUFLZSxjQUFMLEdBQW9CLFVBQVN0SSxDQUFULEVBQVdDLENBQVgsRUFBYWMsQ0FBYixFQUFlO0FBQUMsY0FBSU0sQ0FBQyxHQUFDLElBQU47QUFBVyxlQUFLbUgsZ0JBQUwsR0FBd0JmLFFBQXhCLE9BQXFDcEcsQ0FBQyxHQUFDLEtBQUttSCxnQkFBTCxHQUF3Qk4sYUFBeEIsRUFBRixFQUEwQyxLQUFLOE0sb0JBQUwsQ0FBMEIzVCxDQUExQixDQUEvRTs7QUFBNkcsY0FBSVEsQ0FBQyxHQUFDLFVBQVM3QixDQUFULEVBQVc7QUFBQyxtQkFBT2UsQ0FBQyxDQUFDMEcsUUFBRixLQUFhLElBQUl0RCxDQUFDLENBQUNrRCxRQUFOLENBQWUsT0FBZixFQUF1QnJILENBQXZCLEVBQTBCOEgsVUFBMUIsQ0FBcUMvRyxDQUFyQyxFQUF3Q3dHLEtBQXJELEdBQTJEdkgsQ0FBbEU7QUFBb0UsV0FBdEY7QUFBQSxjQUF1Rm9DLENBQUMsR0FBQyxLQUFLeVMsV0FBTCxDQUFpQjdVLENBQWpCLEVBQW1CQyxDQUFuQixDQUF6Rjs7QUFBK0csY0FBRyxRQUFNbUMsQ0FBVCxFQUFXLE9BQU9QLENBQUMsQ0FBQ1IsQ0FBQyxDQUFDdVQsS0FBRixDQUFRdlQsQ0FBQyxDQUFDdVQsS0FBRixDQUFRalQsTUFBUixHQUFlLENBQXZCLEVBQTBCc1QsS0FBM0IsQ0FBUjs7QUFBMEMsZUFBSSxJQUFJM1MsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDdVQsS0FBRixDQUFRalQsTUFBdEIsRUFBNkJXLENBQUMsRUFBOUIsRUFBaUNGLENBQUMsQ0FBQzhTLFlBQUYsQ0FBZTdULENBQUMsQ0FBQ3VULEtBQUYsQ0FBUXRTLENBQVIsRUFBVzZTLE1BQTFCLEVBQWlDdFQsQ0FBQyxDQUFDUixDQUFDLENBQUN1VCxLQUFGLENBQVF0UyxDQUFSLEVBQVcyUyxLQUFaLENBQWxDOztBQUFzRCxjQUFHLEtBQUt4TSxTQUFMLENBQWUsbUJBQWYsRUFBb0NoQixRQUFwQyxFQUFILEVBQWtEO0FBQUMsZ0JBQUlsRixDQUFDLEdBQUM0QixDQUFDLENBQUNnQixRQUFGLENBQVdDLFNBQVgsQ0FBcUIsQ0FBckIsQ0FBTjtBQUFBLGdCQUE4QjVDLENBQUMsR0FBQyxJQUFJMkIsQ0FBQyxDQUFDakIsT0FBRixDQUFVbU8sSUFBZCxFQUFoQztBQUFtRDdPLGFBQUMsQ0FBQ2tMLFVBQUYsQ0FBYWhELENBQWIsR0FBZSxJQUFJdkcsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLEdBQWYsRUFBbUIsQ0FBQ2xELENBQUMsQ0FBQ0csa0JBQUgsR0FBc0IsQ0FBekMsQ0FBZixFQUEyRDlCLENBQUMsQ0FBQ2tMLFVBQUYsQ0FBYXJOLENBQWIsR0FBZSxJQUFJOEQsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLEdBQWYsRUFBbUIsQ0FBQ2xELENBQUMsQ0FBQ0csa0JBQUgsR0FBc0IsQ0FBekMsQ0FBMUUsRUFBc0g5QixDQUFDLENBQUNrTCxVQUFGLENBQWF6TSxLQUFiLEdBQW1CLElBQUlrRCxDQUFDLENBQUNrRCxRQUFOLENBQWUsT0FBZixFQUF1QmxELENBQUMsQ0FBQ0csa0JBQXpCLENBQXpJLEVBQXNMOUIsQ0FBQyxDQUFDa0wsVUFBRixDQUFheE0sTUFBYixHQUFvQixJQUFJaUQsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLFFBQWYsRUFBd0JsRCxDQUFDLENBQUNHLGtCQUExQixDQUExTTtBQUF3UCxnQkFBSTdELENBQUMsR0FBQyxJQUFJMEQsQ0FBQyxDQUFDakIsT0FBRixDQUFVOEUsQ0FBZCxFQUFOO0FBQXNCdkgsYUFBQyxDQUFDaU4sVUFBRixDQUFhYixTQUFiLEdBQXVCLElBQUkxSSxDQUFDLENBQUNrRCxRQUFOLENBQWUsV0FBZixFQUEyQixLQUFLb0IsU0FBTCxDQUFlLG1CQUFmLEVBQW9DbEIsS0FBL0QsQ0FBdkIsRUFBNkY5RyxDQUFDLENBQUNvTixRQUFGLEdBQVcsQ0FBQ3JMLENBQUQsQ0FBeEc7QUFBNEcsZ0JBQUlPLENBQUMsR0FBQyxJQUFJb0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVMUIsR0FBZCxFQUFOO0FBQXdCdUIsYUFBQyxDQUFDMkssVUFBRixDQUFhaEQsQ0FBYixHQUFlLElBQUl2RyxDQUFDLENBQUNrRCxRQUFOLENBQWUsR0FBZixFQUFtQixDQUFuQixDQUFmLEVBQXFDdEUsQ0FBQyxDQUFDMkssVUFBRixDQUFhck4sQ0FBYixHQUFlLElBQUk4RCxDQUFDLENBQUNrRCxRQUFOLENBQWUsR0FBZixFQUFtQixDQUFuQixDQUFwRCxFQUEwRXRFLENBQUMsQ0FBQzJLLFVBQUYsQ0FBYXpNLEtBQWIsR0FBbUIsSUFBSWtELENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxPQUFmLEVBQXVCOUUsQ0FBQyxDQUFDdEIsS0FBekIsQ0FBN0YsRUFBNkg4QixDQUFDLENBQUMySyxVQUFGLENBQWF4TSxNQUFiLEdBQW9CLElBQUlpRCxDQUFDLENBQUNrRCxRQUFOLENBQWUsUUFBZixFQUF3QjlFLENBQUMsQ0FBQ3JCLE1BQTFCLENBQWpKLEVBQW1MNkIsQ0FBQyxDQUFDOEssUUFBRixHQUFXLENBQUNwTixDQUFELENBQTlMO0FBQWtNLGdCQUFJRyxDQUFDLEdBQUNFLENBQUMsQ0FBQ3lCLENBQUMsQ0FBQ3RCLEtBQUgsRUFBU3NCLENBQUMsQ0FBQ3JCLE1BQVgsQ0FBUDtBQUFBLGdCQUEwQkMsQ0FBQyxHQUFDUCxDQUFDLENBQUNrQixVQUFGLENBQWEsSUFBYixDQUE1QjtBQUErQyxtQkFBT1gsQ0FBQyxDQUFDZ08sU0FBRixHQUFZL00sQ0FBWixFQUFjVyxDQUFDLENBQUNpTCxNQUFGLENBQVM3TSxDQUFULENBQWQsRUFBMEJBLENBQUMsQ0FBQ29ILGFBQUYsQ0FBZ0IzSCxDQUFoQixFQUFrQixXQUFsQixDQUFqQztBQUFnRTs7QUFBQSxpQkFBT3dCLENBQVA7QUFBUyxTQUFybUQ7QUFBc21ELE9BQW44NUIsRUFBbzg1QitCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXlSLFlBQVYsQ0FBdUJ4UixTQUF2QixHQUFpQyxJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBZCxFQUFyKzVCLEVBQSsvNUJ0SixDQUFDLENBQUNqQixPQUFGLENBQVVrUyxjQUFWLEdBQXlCLFVBQVNwVixDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVeVIsWUFBcEIsRUFBaUMsS0FBSzVILElBQUwsQ0FBVS9NLENBQVYsQ0FBakMsRUFBOEMsS0FBSytVLG1CQUFMLENBQXlCeFAsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBOUMsRUFBa0YsS0FBS3dQLG1CQUFMLENBQXlCeFAsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBbEYsRUFBc0gsS0FBS3dQLG1CQUFMLENBQXlCeFAsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBdEgsRUFBMEosS0FBS3dQLG1CQUFMLENBQXlCeFAsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBMUosRUFBOEwsS0FBS3NQLFdBQUwsR0FBaUIsVUFBUzdVLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSWMsQ0FBQyxHQUFDLHVCQUFxQixLQUFLK1QsYUFBTCxFQUFyQixHQUEwQzdVLENBQUMsQ0FBQ3dRLGNBQUYsQ0FBaUJ6USxDQUFqQixDQUExQyxHQUE4RCxJQUFwRTtBQUF5RSxlQUFLeUksU0FBTCxDQUFlLElBQWYsRUFBcUJoQixRQUFyQixNQUFpQyxLQUFLZ0IsU0FBTCxDQUFlLElBQWYsRUFBcUJoQixRQUFyQixFQUFqQyxJQUFrRSxLQUFLZ0IsU0FBTCxDQUFlLElBQWYsRUFBcUJoQixRQUFyQixFQUFsRSxJQUFtRyxLQUFLZ0IsU0FBTCxDQUFlLElBQWYsRUFBcUJoQixRQUFyQixFQUFuRyxLQUFxSSxLQUFLZ0IsU0FBTCxDQUFlLElBQWYsRUFBb0IsQ0FBQyxDQUFyQixFQUF3QmxCLEtBQXhCLEdBQThCLENBQTlCLEVBQWdDLEtBQUtrQixTQUFMLENBQWUsSUFBZixFQUFvQixDQUFDLENBQXJCLEVBQXdCbEIsS0FBeEIsR0FBOEIsQ0FBOUQsRUFBZ0UsS0FBS2tCLFNBQUwsQ0FBZSxJQUFmLEVBQW9CLENBQUMsQ0FBckIsRUFBd0JsQixLQUF4QixHQUE4QixDQUE5RixFQUFnRyxLQUFLa0IsU0FBTCxDQUFlLElBQWYsRUFBb0IsQ0FBQyxDQUFyQixFQUF3QmxCLEtBQXhCLEdBQThCLENBQW5RO0FBQXNRLGNBQUlsRyxDQUFDLEdBQUMsdUJBQXFCLEtBQUt5VCxhQUFMLEVBQXJCLEdBQTBDL1QsQ0FBQyxDQUFDMkosQ0FBRixLQUFNM0osQ0FBQyxDQUFDRSxLQUFGLEtBQVUsS0FBS3dILFNBQUwsQ0FBZSxJQUFmLEVBQXFCZixRQUFyQixFQUExRCxHQUEwRixLQUFLZSxTQUFMLENBQWUsSUFBZixFQUFxQk0sUUFBckIsQ0FBOEIsR0FBOUIsQ0FBaEc7QUFBQSxjQUFtSWxILENBQUMsR0FBQyx1QkFBcUIsS0FBS2lULGFBQUwsRUFBckIsR0FBMEMvVCxDQUFDLENBQUNWLENBQUYsS0FBTVUsQ0FBQyxDQUFDRyxNQUFGLEtBQVcsS0FBS3VILFNBQUwsQ0FBZSxJQUFmLEVBQXFCZixRQUFyQixFQUEzRCxHQUEyRixLQUFLZSxTQUFMLENBQWUsSUFBZixFQUFxQk0sUUFBckIsQ0FBOEIsR0FBOUIsQ0FBaE87QUFBQSxjQUFtUTNHLENBQUMsR0FBQyx1QkFBcUIsS0FBSzBTLGFBQUwsRUFBckIsR0FBMEMvVCxDQUFDLENBQUMySixDQUFGLEtBQU0zSixDQUFDLENBQUNFLEtBQUYsS0FBVSxLQUFLd0gsU0FBTCxDQUFlLElBQWYsRUFBcUJmLFFBQXJCLEVBQTFELEdBQTBGLEtBQUtlLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUEvVjtBQUFBLGNBQWtZekcsQ0FBQyxHQUFDLHVCQUFxQixLQUFLd1MsYUFBTCxFQUFyQixHQUEwQy9ULENBQUMsQ0FBQ1YsQ0FBRixLQUFNVSxDQUFDLENBQUNHLE1BQUYsS0FBVyxLQUFLdUgsU0FBTCxDQUFlLElBQWYsRUFBcUJmLFFBQXJCLEVBQTNELEdBQTJGLEtBQUtlLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUEvZDtBQUFrZ0IsaUJBQU8xSCxDQUFDLElBQUVlLENBQUgsSUFBTVAsQ0FBQyxJQUFFUyxDQUFULEdBQVcsSUFBWCxHQUFnQnRDLENBQUMsQ0FBQ3FWLG9CQUFGLENBQXVCaFUsQ0FBdkIsRUFBeUJRLENBQXpCLEVBQTJCTyxDQUEzQixFQUE2QkUsQ0FBN0IsQ0FBdkI7QUFBdUQsU0FBcm1DO0FBQXNtQyxPQUExbzhCLEVBQTJvOEI2QixDQUFDLENBQUNqQixPQUFGLENBQVVrUyxjQUFWLENBQXlCalMsU0FBekIsR0FBbUMsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXlSLFlBQWQsRUFBOXE4QixFQUF5czhCeFEsQ0FBQyxDQUFDakIsT0FBRixDQUFVb1MsY0FBVixHQUF5QixVQUFTdFYsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXlSLFlBQXBCLEVBQWlDLEtBQUs1SCxJQUFMLENBQVUvTSxDQUFWLENBQWpDLEVBQThDLEtBQUsrVSxtQkFBTCxDQUF5QnhQLElBQXpCLENBQThCLElBQTlCLENBQTlDLEVBQWtGLEtBQUt3UCxtQkFBTCxDQUF5QnhQLElBQXpCLENBQThCLElBQTlCLENBQWxGLEVBQXNILEtBQUt3UCxtQkFBTCxDQUF5QnhQLElBQXpCLENBQThCLEdBQTlCLENBQXRILEVBQXlKLEtBQUt3UCxtQkFBTCxDQUF5QnhQLElBQXpCLENBQThCLElBQTlCLENBQXpKLEVBQTZMLEtBQUt3UCxtQkFBTCxDQUF5QnhQLElBQXpCLENBQThCLElBQTlCLENBQTdMLEVBQWlPLEtBQUt3UCxtQkFBTCxDQUF5QnhQLElBQXpCLENBQThCLElBQTlCLENBQWpPLEVBQXFRLEtBQUtzUCxXQUFMLEdBQWlCLFVBQVM3VSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGNBQUljLENBQUMsR0FBQ2QsQ0FBQyxDQUFDd1EsY0FBRixDQUFpQnpRLENBQWpCLENBQU47QUFBMEIsZUFBS3lJLFNBQUwsQ0FBZSxJQUFmLEVBQXFCaEIsUUFBckIsT0FBa0MsS0FBS2dCLFNBQUwsQ0FBZSxJQUFmLEVBQW9CLENBQUMsQ0FBckIsRUFBd0JsQixLQUF4QixHQUE4QixLQUFoRSxHQUF1RSxLQUFLa0IsU0FBTCxDQUFlLElBQWYsRUFBcUJoQixRQUFyQixPQUFrQyxLQUFLZ0IsU0FBTCxDQUFlLElBQWYsRUFBb0IsQ0FBQyxDQUFyQixFQUF3QmxCLEtBQXhCLEdBQThCLEtBQWhFLENBQXZFLEVBQThJLEtBQUtrQixTQUFMLENBQWUsR0FBZixFQUFvQmhCLFFBQXBCLE9BQWlDLEtBQUtnQixTQUFMLENBQWUsR0FBZixFQUFtQixDQUFDLENBQXBCLEVBQXVCbEIsS0FBdkIsR0FBNkIsS0FBOUQsQ0FBOUk7QUFBbU4sY0FBSWxHLENBQUMsR0FBQyx1QkFBcUIsS0FBS3lULGFBQUwsRUFBckIsR0FBMEMvVCxDQUFDLENBQUMySixDQUFGLEtBQU0zSixDQUFDLENBQUNFLEtBQUYsS0FBVSxLQUFLd0gsU0FBTCxDQUFlLElBQWYsRUFBcUJmLFFBQXJCLEVBQTFELEdBQTBGLEtBQUtlLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUFoRztBQUFBLGNBQW1JbEgsQ0FBQyxHQUFDLHVCQUFxQixLQUFLaVQsYUFBTCxFQUFyQixHQUEwQy9ULENBQUMsQ0FBQ1YsQ0FBRixLQUFNVSxDQUFDLENBQUNHLE1BQUYsS0FBVyxLQUFLdUgsU0FBTCxDQUFlLElBQWYsRUFBcUJmLFFBQXJCLEVBQTNELEdBQTJGLEtBQUtlLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUFoTztBQUFBLGNBQW1RM0csQ0FBQyxHQUFDZixDQUFyUTtBQUFBLGNBQXVRaUIsQ0FBQyxHQUFDVCxDQUF6UTtBQUEyUSxlQUFLNEcsU0FBTCxDQUFlLElBQWYsRUFBcUJoQixRQUFyQixPQUFrQ3JGLENBQUMsR0FBQyx1QkFBcUIsS0FBSzBTLGFBQUwsRUFBckIsR0FBMEMvVCxDQUFDLENBQUMySixDQUFGLEtBQU0zSixDQUFDLENBQUNFLEtBQUYsS0FBVSxLQUFLd0gsU0FBTCxDQUFlLElBQWYsRUFBcUJmLFFBQXJCLEVBQTFELEdBQTBGLEtBQUtlLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUE5SCxHQUFrSyxLQUFLTixTQUFMLENBQWUsSUFBZixFQUFxQmhCLFFBQXJCLE9BQWtDbkYsQ0FBQyxHQUFDLHVCQUFxQixLQUFLd1MsYUFBTCxFQUFyQixHQUEwQy9ULENBQUMsQ0FBQ1YsQ0FBRixLQUFNVSxDQUFDLENBQUNHLE1BQUYsS0FBVyxLQUFLdUgsU0FBTCxDQUFlLElBQWYsRUFBcUJmLFFBQXJCLEVBQTNELEdBQTJGLEtBQUtlLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixDQUE4QixHQUE5QixDQUEvSCxDQUFsSztBQUFxVSxjQUFJeEcsQ0FBQyxHQUFDLHVCQUFxQixLQUFLdVMsYUFBTCxFQUFyQixHQUEwQyxDQUFDL1QsQ0FBQyxDQUFDRSxLQUFGLEtBQVVGLENBQUMsQ0FBQ0csTUFBRixFQUFYLElBQXVCLENBQXZCLEdBQXlCLEtBQUt1SCxTQUFMLENBQWUsR0FBZixFQUFvQmYsUUFBcEIsRUFBbkUsR0FBa0csS0FBS2UsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLEVBQXhHO0FBQUEsY0FBdUl2RyxDQUFDLEdBQUMsS0FBS2lHLFNBQUwsQ0FBZSxJQUFmLEVBQXFCTSxRQUFyQixFQUF6STtBQUF5SyxpQkFBTy9JLENBQUMsQ0FBQ3VWLG9CQUFGLENBQXVCblQsQ0FBdkIsRUFBeUJFLENBQXpCLEVBQTJCRSxDQUEzQixFQUE2Qm5CLENBQTdCLEVBQStCUSxDQUEvQixFQUFpQ1UsQ0FBakMsQ0FBUDtBQUEyQyxTQUFyekM7QUFBc3pDLE9BQXBpL0IsRUFBcWkvQjRCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9TLGNBQVYsQ0FBeUJuUyxTQUF6QixHQUFtQyxJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVeVIsWUFBZCxFQUF4ay9CLEVBQW1tL0J4USxDQUFDLENBQUNqQixPQUFGLENBQVV6QixJQUFWLEdBQWUsVUFBU3pCLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFwQixFQUFnQyxLQUFLVixJQUFMLENBQVUvTSxDQUFWLENBQWhDLEVBQTZDLEtBQUttVixNQUFMLEdBQVksS0FBSzFNLFNBQUwsQ0FBZSxRQUFmLEVBQXlCZixRQUF6QixFQUF6RCxFQUE2RixLQUFLeU4sTUFBTCxHQUFZLENBQVosS0FBZ0IsS0FBS0EsTUFBTCxHQUFZLENBQTVCLENBQTdGLEVBQTRILElBQUUsS0FBS0EsTUFBUCxLQUFnQixLQUFLQSxNQUFMLEdBQVksQ0FBNUIsQ0FBNUg7QUFBMkosWUFBSWxWLENBQUMsR0FBQyxLQUFLNk4sS0FBTCxDQUFXLFlBQVgsRUFBd0IsQ0FBQyxDQUF6QixDQUFOO0FBQWtDLGVBQUs3TixDQUFDLENBQUNzSCxLQUFQLEtBQWV0SCxDQUFDLENBQUNzSCxLQUFGLEdBQVEsTUFBdkIsR0FBK0IsS0FBS3VHLEtBQUwsQ0FBVyxjQUFYLEVBQTJCckcsUUFBM0IsT0FBd0N4SCxDQUFDLEdBQUNBLENBQUMsQ0FBQzZILFVBQUYsQ0FBYSxLQUFLZ0csS0FBTCxDQUFXLGNBQVgsQ0FBYixDQUExQyxDQUEvQixFQUFtSCxLQUFLbUgsS0FBTCxHQUFXaFYsQ0FBQyxDQUFDc0gsS0FBaEk7QUFBc0ksT0FBajgvQixFQUFrOC9CcEQsQ0FBQyxDQUFDakIsT0FBRixDQUFVekIsSUFBVixDQUFlMEIsU0FBZixHQUF5QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBZCxFQUEzOS9CLEVBQXEvL0J0SixDQUFDLENBQUNqQixPQUFGLENBQVVzUyxXQUFWLEdBQXNCLFVBQVN4VixDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2Q21FLENBQUMsQ0FBQ2EsVUFBRixDQUFhTyxJQUFiLENBQWtCLElBQWxCLENBQTdDLEVBQXFFLEtBQUtrUSxRQUFMLEdBQWMsQ0FBbkYsRUFBcUYsS0FBS0MsS0FBTCxHQUFXLEtBQUtqTixTQUFMLENBQWUsT0FBZixFQUF3Qk8sY0FBeEIsRUFBaEcsRUFBeUksS0FBSzJNLFdBQUwsR0FBaUIsS0FBS0QsS0FBTCxHQUFXLEtBQUtqTixTQUFMLENBQWUsS0FBZixFQUFzQk8sY0FBdEIsRUFBckssRUFBNE0sS0FBSzRNLFdBQUwsR0FBaUIsWUFBVTtBQUFDLGNBQUk1VixDQUFDLEdBQUMsS0FBS3lJLFNBQUwsQ0FBZSxlQUFmLEVBQWdDbEIsS0FBdEM7QUFBQSxjQUE0Q3RILENBQUMsR0FBQyxLQUFLd0ksU0FBTCxDQUFlLGVBQWYsRUFBZ0NsQixLQUE5RTtBQUFvRixpQkFBTSxTQUFPdkgsQ0FBUCxHQUFTLEtBQUsrTixNQUFMLENBQVlELEtBQVosQ0FBa0I3TixDQUFsQixFQUFvQixDQUFDLENBQXJCLENBQVQsR0FBaUMsS0FBSzhOLE1BQUwsQ0FBWXRGLFNBQVosQ0FBc0J4SSxDQUF0QixFQUF3QixDQUFDLENBQXpCLENBQXZDO0FBQW1FLFNBQS9YLEVBQWdZLEtBQUs0VixZQUFMLEdBQWtCLElBQWxaLEVBQXVaLEtBQUtDLFlBQUwsR0FBa0IsRUFBemEsRUFBNGEsS0FBS0MsT0FBTCxHQUFhLENBQUMsQ0FBMWIsRUFBNGIsS0FBS0MsU0FBTCxHQUFlLFlBQVU7QUFBQyxpQkFBTSxFQUFOO0FBQVMsU0FBL2QsRUFBZ2UsS0FBS0MsTUFBTCxHQUFZLFVBQVNqVyxDQUFULEVBQVc7QUFBQyxjQUFHLFFBQU0sS0FBSzZWLFlBQVgsS0FBMEIsS0FBS0EsWUFBTCxHQUFrQixLQUFLRCxXQUFMLEdBQW1Cck8sS0FBckMsRUFBMkMsS0FBS3VPLFlBQUwsR0FBa0IsS0FBS0YsV0FBTCxHQUFtQi9NLFFBQW5CLEVBQXZGLEdBQXNILEtBQUs0TSxRQUFMLEdBQWMsS0FBS0UsV0FBNUksRUFBd0o7QUFBQyxnQkFBRyxnQkFBYyxLQUFLbE4sU0FBTCxDQUFlLGFBQWYsRUFBOEJsQixLQUE1QyxJQUFtRCxnQkFBYyxLQUFLa0IsU0FBTCxDQUFlLFdBQWYsRUFBNEJsQixLQUFoRyxFQUFzRyxLQUFLa08sUUFBTCxHQUFjLENBQWQsQ0FBdEcsS0FBMkgsSUFBRyxZQUFVLEtBQUtoTixTQUFMLENBQWUsTUFBZixFQUF1QmIsY0FBdkIsQ0FBc0MsUUFBdEMsQ0FBVixJQUEyRCxLQUFLc08sTUFBbkUsRUFBMEU7QUFBQyxrQkFBRyxZQUFVLEtBQUt6TixTQUFMLENBQWUsTUFBZixFQUF1QmIsY0FBdkIsQ0FBc0MsUUFBdEMsQ0FBVixJQUEyRCxDQUFDLEtBQUttTyxPQUFwRSxFQUE0RSxPQUFPLEtBQUtBLE9BQUwsR0FBYSxDQUFDLENBQWQsRUFBZ0IsS0FBS0gsV0FBTCxHQUFtQnJPLEtBQW5CLEdBQXlCLEtBQUt3RyxNQUFMLENBQVlvSSxlQUFaLEdBQTRCLEtBQUtwSSxNQUFMLENBQVlxSSxvQkFBeEMsR0FBNkQsS0FBS1AsWUFBM0csRUFBd0gsQ0FBQyxDQUFoSTtBQUFrSSxhQUF6UixNQUE4UixLQUFLSyxNQUFMLEdBQVksQ0FBQyxDQUFiLEVBQWUsS0FBS25JLE1BQUwsQ0FBWW9JLGVBQVosR0FBNEIsQ0FBQyxDQUE1QyxFQUE4QyxLQUFLcEksTUFBTCxDQUFZcUksb0JBQVosR0FBaUMsS0FBS1IsV0FBTCxHQUFtQnJPLEtBQWxHO0FBQXdHLG1CQUFNLENBQUMsQ0FBUDtBQUFTOztBQUFBLGVBQUtrTyxRQUFMLEdBQWMsS0FBS0EsUUFBTCxHQUFjelYsQ0FBNUI7QUFBOEIsY0FBSUMsQ0FBQyxHQUFDLENBQUMsQ0FBUDs7QUFBUyxjQUFHLEtBQUt5VixLQUFMLEdBQVcsS0FBS0QsUUFBbkIsRUFBNEI7QUFBQyxnQkFBSTFVLENBQUMsR0FBQyxLQUFLaVYsU0FBTCxFQUFOO0FBQXVCLGdCQUFHLEtBQUt2TixTQUFMLENBQWUsTUFBZixFQUF1QmhCLFFBQXZCLEVBQUgsRUFBcUMxRyxDQUFDLEdBQUMsS0FBSzBILFNBQUwsQ0FBZSxNQUFmLEVBQXVCbEIsS0FBdkIsR0FBNkIsR0FBN0IsR0FBaUN4RyxDQUFqQyxHQUFtQyxHQUFyQztBQUF5QyxpQkFBSzZVLFdBQUwsR0FBbUJyTyxLQUFuQixHQUF5QnhHLENBQXpCLEVBQTJCZCxDQUFDLEdBQUMsQ0FBQyxDQUE5QjtBQUFnQzs7QUFBQSxpQkFBT0EsQ0FBUDtBQUFTLFNBQTcyQyxFQUE4MkMsS0FBS29XLElBQUwsR0FBVSxLQUFLNU4sU0FBTCxDQUFlLE1BQWYsQ0FBeDNDLEVBQSs0QyxLQUFLNk4sRUFBTCxHQUFRLEtBQUs3TixTQUFMLENBQWUsSUFBZixDQUF2NUMsRUFBNDZDLEtBQUs4TixNQUFMLEdBQVksS0FBSzlOLFNBQUwsQ0FBZSxRQUFmLENBQXg3QyxFQUFpOUMsS0FBSzhOLE1BQUwsQ0FBWTlPLFFBQVosT0FBeUIsS0FBSzhPLE1BQUwsQ0FBWWhQLEtBQVosR0FBa0IsS0FBS2dQLE1BQUwsQ0FBWWhQLEtBQVosQ0FBa0JnRCxLQUFsQixDQUF3QixHQUF4QixDQUEzQyxDQUFqOUMsRUFBMGhELEtBQUtpTSxRQUFMLEdBQWMsWUFBVTtBQUFDLGNBQUl4VyxDQUFDLEdBQUM7QUFBQ3dXLG9CQUFRLEVBQUMsQ0FBQyxLQUFLZixRQUFMLEdBQWMsS0FBS0MsS0FBcEIsS0FBNEIsS0FBS0MsV0FBTCxHQUFpQixLQUFLRCxLQUFsRDtBQUFWLFdBQU47O0FBQTBFLGNBQUcsS0FBS2EsTUFBTCxDQUFZOU8sUUFBWixFQUFILEVBQTBCO0FBQUMsZ0JBQUl4SCxDQUFDLEdBQUNELENBQUMsQ0FBQ3dXLFFBQUYsSUFBWSxLQUFLRCxNQUFMLENBQVloUCxLQUFaLENBQWtCNUYsTUFBbEIsR0FBeUIsQ0FBckMsQ0FBTjtBQUFBLGdCQUE4Q1osQ0FBQyxHQUFDNkUsSUFBSSxDQUFDNlEsS0FBTCxDQUFXeFcsQ0FBWCxDQUFoRDtBQUFBLGdCQUE4RG9CLENBQUMsR0FBQ3VFLElBQUksQ0FBQzhRLElBQUwsQ0FBVXpXLENBQVYsQ0FBaEU7QUFBNkVELGFBQUMsQ0FBQ3FXLElBQUYsR0FBTyxJQUFJbFMsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE1BQWYsRUFBc0JNLFVBQVUsQ0FBQyxLQUFLNE8sTUFBTCxDQUFZaFAsS0FBWixDQUFrQnhHLENBQWxCLENBQUQsQ0FBaEMsQ0FBUCxFQUErRGYsQ0FBQyxDQUFDc1csRUFBRixHQUFLLElBQUluUyxDQUFDLENBQUNrRCxRQUFOLENBQWUsSUFBZixFQUFvQk0sVUFBVSxDQUFDLEtBQUs0TyxNQUFMLENBQVloUCxLQUFaLENBQWtCbEcsQ0FBbEIsQ0FBRCxDQUE5QixDQUFwRSxFQUEwSHJCLENBQUMsQ0FBQ3dXLFFBQUYsR0FBVyxDQUFDdlcsQ0FBQyxHQUFDYyxDQUFILEtBQU9NLENBQUMsR0FBQ04sQ0FBVCxDQUFySTtBQUFpSixXQUF6UCxNQUE4UGYsQ0FBQyxDQUFDcVcsSUFBRixHQUFPLEtBQUtBLElBQVosRUFBaUJyVyxDQUFDLENBQUNzVyxFQUFGLEdBQUssS0FBS0EsRUFBM0I7O0FBQThCLGlCQUFPdFcsQ0FBUDtBQUFTLFNBQWw2RDtBQUFtNkQsT0FBMTdqQyxFQUEyN2pDbUUsQ0FBQyxDQUFDakIsT0FBRixDQUFVc1MsV0FBVixDQUFzQnJTLFNBQXRCLEdBQWdDLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQTM5akMsRUFBcS9qQ3RKLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXlULE9BQVYsR0FBa0IsVUFBUzNXLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVVzUyxXQUFwQixFQUFnQyxLQUFLekksSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLZ1csU0FBTCxHQUFlLFlBQVU7QUFBQyxjQUFJaFcsQ0FBQyxHQUFDLEtBQUt3VyxRQUFMLEVBQU47QUFBQSxjQUFzQnZXLENBQUMsR0FBQ0QsQ0FBQyxDQUFDcVcsSUFBRixDQUFPM08sUUFBUCxLQUFrQixDQUFDMUgsQ0FBQyxDQUFDc1csRUFBRixDQUFLNU8sUUFBTCxLQUFnQjFILENBQUMsQ0FBQ3FXLElBQUYsQ0FBTzNPLFFBQVAsRUFBakIsSUFBb0MxSCxDQUFDLENBQUN3VyxRQUFoRjtBQUF5RixpQkFBTSxRQUFNLEtBQUtWLFlBQVgsS0FBMEI3VixDQUFDLElBQUUsR0FBN0IsR0FBa0NBLENBQUMsR0FBQyxLQUFLNlYsWUFBL0M7QUFBNEQsU0FBNU47QUFBNk4sT0FBaHZrQyxFQUFpdmtDM1IsQ0FBQyxDQUFDakIsT0FBRixDQUFVeVQsT0FBVixDQUFrQnhULFNBQWxCLEdBQTRCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVVzUyxXQUFkLEVBQTd3a0MsRUFBdXlrQ3JSLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTBULFlBQVYsR0FBdUIsVUFBUzVXLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVVzUyxXQUFwQixFQUFnQyxLQUFLekksSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLZ1csU0FBTCxHQUFlLFlBQVU7QUFBQyxjQUFJaFcsQ0FBQyxHQUFDLEtBQUt3VyxRQUFMLEVBQU47QUFBQSxjQUFzQnZXLENBQUMsR0FBQyxJQUFJSSxDQUFKLENBQU1MLENBQUMsQ0FBQ3FXLElBQUYsQ0FBTzlPLEtBQWIsQ0FBeEI7QUFBQSxjQUE0Q3hHLENBQUMsR0FBQyxJQUFJVixDQUFKLENBQU1MLENBQUMsQ0FBQ3NXLEVBQUYsQ0FBSy9PLEtBQVgsQ0FBOUM7O0FBQWdFLGNBQUd0SCxDQUFDLENBQUM4SCxFQUFGLElBQU1oSCxDQUFDLENBQUNnSCxFQUFYLEVBQWM7QUFBQyxnQkFBSTFHLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ3FDLENBQUYsR0FBSSxDQUFDdkIsQ0FBQyxDQUFDdUIsQ0FBRixHQUFJckMsQ0FBQyxDQUFDcUMsQ0FBUCxJQUFVdEMsQ0FBQyxDQUFDd1csUUFBdEI7QUFBQSxnQkFBK0IzVSxDQUFDLEdBQUM1QixDQUFDLENBQUMrSCxDQUFGLEdBQUksQ0FBQ2pILENBQUMsQ0FBQ2lILENBQUYsR0FBSS9ILENBQUMsQ0FBQytILENBQVAsSUFBVWhJLENBQUMsQ0FBQ3dXLFFBQWpEO0FBQUEsZ0JBQTBEcFUsQ0FBQyxHQUFDbkMsQ0FBQyxDQUFDZ0ksQ0FBRixHQUFJLENBQUNsSCxDQUFDLENBQUNrSCxDQUFGLEdBQUloSSxDQUFDLENBQUNnSSxDQUFQLElBQVVqSSxDQUFDLENBQUN3VyxRQUE1RTtBQUFxRixtQkFBTSxTQUFPSyxRQUFRLENBQUN4VixDQUFELEVBQUcsRUFBSCxDQUFmLEdBQXNCLEdBQXRCLEdBQTBCd1YsUUFBUSxDQUFDaFYsQ0FBRCxFQUFHLEVBQUgsQ0FBbEMsR0FBeUMsR0FBekMsR0FBNkNnVixRQUFRLENBQUN6VSxDQUFELEVBQUcsRUFBSCxDQUFyRCxHQUE0RCxHQUFsRTtBQUFzRTs7QUFBQSxpQkFBTyxLQUFLcUcsU0FBTCxDQUFlLE1BQWYsRUFBdUJsQixLQUE5QjtBQUFvQyxTQUFyVjtBQUFzVixPQUFocWxDLEVBQWlxbENwRCxDQUFDLENBQUNqQixPQUFGLENBQVUwVCxZQUFWLENBQXVCelQsU0FBdkIsR0FBaUMsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXNTLFdBQWQsRUFBbHNsQyxFQUE0dGxDclIsQ0FBQyxDQUFDakIsT0FBRixDQUFVNFQsZ0JBQVYsR0FBMkIsVUFBUzlXLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVVzUyxXQUFwQixFQUFnQyxLQUFLekksSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLZ1csU0FBTCxHQUFlLFlBQVU7QUFBQyxlQUFJLElBQUloVyxDQUFDLEdBQUMsS0FBS3dXLFFBQUwsRUFBTixFQUFzQnZXLENBQUMsR0FBQ2tFLENBQUMsQ0FBQ3FHLGFBQUYsQ0FBZ0J4SyxDQUFDLENBQUNxVyxJQUFGLENBQU85TyxLQUF2QixDQUF4QixFQUFzRHhHLENBQUMsR0FBQ29ELENBQUMsQ0FBQ3FHLGFBQUYsQ0FBZ0J4SyxDQUFDLENBQUNzVyxFQUFGLENBQUsvTyxLQUFyQixDQUF4RCxFQUFvRmxHLENBQUMsR0FBQyxFQUF0RixFQUF5RlEsQ0FBQyxHQUFDLENBQS9GLEVBQWlHQSxDQUFDLEdBQUM1QixDQUFDLENBQUMwQixNQUFyRyxFQUE0R0UsQ0FBQyxFQUE3RyxFQUFnSFIsQ0FBQyxJQUFFcEIsQ0FBQyxDQUFDNEIsQ0FBRCxDQUFELEdBQUssQ0FBQ2QsQ0FBQyxDQUFDYyxDQUFELENBQUQsR0FBSzVCLENBQUMsQ0FBQzRCLENBQUQsQ0FBUCxJQUFZN0IsQ0FBQyxDQUFDd1csUUFBbkIsR0FBNEIsR0FBL0I7O0FBQW1DLGlCQUFPblYsQ0FBUDtBQUFTLFNBQW5PO0FBQW9PLE9BQXYrbEMsRUFBdytsQzhDLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTRULGdCQUFWLENBQTJCM1QsU0FBM0IsR0FBcUMsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXlULE9BQWQsRUFBN2dtQyxFQUFtaW1DeFMsQ0FBQyxDQUFDakIsT0FBRixDQUFVOEcsSUFBVixHQUFlLFVBQVNoSyxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLK1csU0FBTCxHQUFlLEtBQUt0TyxTQUFMLENBQWUsYUFBZixFQUE4QmYsUUFBOUIsRUFBNUQsRUFBcUcsS0FBS3NQLEtBQUwsR0FBVyxDQUFDLENBQWpILEVBQW1ILEtBQUtDLFFBQUwsR0FBYyxDQUFDLENBQWxJLEVBQW9JLEtBQUtDLFFBQUwsR0FBYyxJQUFsSixFQUF1SixLQUFLQyxZQUFMLEdBQWtCLElBQXpLLEVBQThLLEtBQUtDLE1BQUwsR0FBWSxFQUExTDs7QUFBNkwsYUFBSSxJQUFJblgsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs0TixRQUFMLENBQWNsTSxNQUE1QixFQUFtQzFCLENBQUMsRUFBcEMsRUFBdUM7QUFBQyxjQUFJYyxDQUFDLEdBQUMsS0FBSzhNLFFBQUwsQ0FBYzVOLENBQWQsQ0FBTjtBQUF1Qix5QkFBYWMsQ0FBQyxDQUFDcU0sSUFBZixHQUFvQixDQUFDLEtBQUs4SixRQUFMLEdBQWNuVyxDQUFmLEVBQWtCK00sS0FBbEIsQ0FBd0IsYUFBeEIsRUFBdUNyRyxRQUF2QyxPQUFvRHRELENBQUMsQ0FBQ1UsV0FBRixDQUFjOUQsQ0FBQyxDQUFDK00sS0FBRixDQUFRLGFBQVIsRUFBdUJ2RyxLQUFyQyxJQUE0QyxJQUFoRyxDQUFwQixHQUEwSCxtQkFBaUJ4RyxDQUFDLENBQUNxTSxJQUFuQixHQUF3QixLQUFLK0osWUFBTCxHQUFrQnBXLENBQTFDLEdBQTRDLFdBQVNBLENBQUMsQ0FBQ3FNLElBQVgsS0FBa0IsTUFBSXJNLENBQUMsQ0FBQ3NXLFVBQU4sSUFBa0IsS0FBS0wsS0FBTCxHQUFXLENBQUMsQ0FBWixFQUFjLEtBQUtDLFFBQUwsR0FBYyxDQUFDLENBQTdCLEVBQStCLEtBQUssQ0FBTCxLQUFTLEtBQUtHLE1BQUwsQ0FBWXJXLENBQUMsQ0FBQ3VXLE9BQWQsQ0FBVCxLQUFrQyxLQUFLRixNQUFMLENBQVlyVyxDQUFDLENBQUN1VyxPQUFkLElBQXVCLEVBQXpELENBQS9CLEVBQTRGLEtBQUtGLE1BQUwsQ0FBWXJXLENBQUMsQ0FBQ3VXLE9BQWQsRUFBdUJ2VyxDQUFDLENBQUNzVyxVQUF6QixJQUFxQ3RXLENBQW5KLElBQXNKLEtBQUtxVyxNQUFMLENBQVlyVyxDQUFDLENBQUN1VyxPQUFkLElBQXVCdlcsQ0FBL0wsQ0FBdEs7QUFBd1c7O0FBQUEsYUFBS2lOLE1BQUwsR0FBWSxZQUFVLENBQUUsQ0FBeEI7QUFBeUIsT0FBM3JuQyxFQUE0cm5DN0osQ0FBQyxDQUFDakIsT0FBRixDQUFVOEcsSUFBVixDQUFlN0csU0FBZixHQUF5QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBZCxFQUFydG5DLEVBQSt1bkN0SixDQUFDLENBQUNqQixPQUFGLENBQVVxVSxRQUFWLEdBQW1CLFVBQVN2WCxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLd1gsTUFBTCxHQUFZLEtBQUsvTyxTQUFMLENBQWUsUUFBZixFQUF5QmxCLEtBQWxGLEVBQXdGLEtBQUtrUSxPQUFMLEdBQWEsS0FBS2hQLFNBQUwsQ0FBZSxTQUFmLEVBQTBCbEIsS0FBL0gsRUFBcUksS0FBS21RLFVBQUwsR0FBZ0IsS0FBS2pQLFNBQUwsQ0FBZSxjQUFmLEVBQStCZixRQUEvQixFQUFySjtBQUErTCxPQUE3OG5DLEVBQTg4bkN2RCxDQUFDLENBQUNqQixPQUFGLENBQVVxVSxRQUFWLENBQW1CcFUsU0FBbkIsR0FBNkIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBMytuQyxFQUFxZ29DdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVeVUsWUFBVixHQUF1QixVQUFTM1gsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVWdOLElBQXBCLEVBQXlCLEtBQUtuRCxJQUFMLENBQVUvTSxDQUFWLENBQXpCLEVBQXNDLEtBQUsrVyxTQUFMLEdBQWUsQ0FBckQ7QUFBdUQsT0FBL2xvQyxFQUFnbW9DNVMsQ0FBQyxDQUFDakIsT0FBRixDQUFVeVUsWUFBVixDQUF1QnhVLFNBQXZCLEdBQWlDLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVVnTixJQUFkLEVBQWpvb0MsRUFBb3BvQy9MLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTBVLEtBQVYsR0FBZ0IsVUFBUzVYLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVVnTixJQUFwQixFQUF5QixLQUFLbkQsSUFBTCxDQUFVL00sQ0FBVixDQUF6QixFQUFzQyxLQUFLK1csU0FBTCxHQUFlLEtBQUt0TyxTQUFMLENBQWUsYUFBZixFQUE4QmYsUUFBOUIsRUFBckQsRUFBOEYsS0FBSzRQLE9BQUwsR0FBYSxLQUFLN08sU0FBTCxDQUFlLFNBQWYsRUFBMEJsQixLQUFySSxFQUEySSxLQUFLOFAsVUFBTCxHQUFnQixLQUFLNU8sU0FBTCxDQUFlLGFBQWYsRUFBOEJsQixLQUF6TDtBQUErTCxPQUEvMm9DLEVBQWczb0NwRCxDQUFDLENBQUNqQixPQUFGLENBQVUwVSxLQUFWLENBQWdCelUsU0FBaEIsR0FBMEIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVWdOLElBQWQsRUFBMTRvQyxFQUE2NW9DL0wsQ0FBQyxDQUFDakIsT0FBRixDQUFVNEwsSUFBVixHQUFlLFVBQVM5TyxDQUFULEVBQVc7QUFBQyxhQUFLNk8sZ0JBQUwsR0FBc0IsQ0FBQyxDQUF2QixFQUF5QixLQUFLOUIsSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQTdDLEVBQWlFLEtBQUtsQyxJQUFMLENBQVUvTSxDQUFWLENBQWpFLEVBQThFLEtBQUs0USxjQUFMLEdBQW9CLEtBQUsxQyxVQUF2RyxFQUFrSCxLQUFLQSxVQUFMLEdBQWdCLFVBQVNsTyxDQUFULEVBQVc7QUFBQyxlQUFLNFEsY0FBTCxDQUFvQjVRLENBQXBCO0FBQXVCLGNBQUlDLENBQUMsR0FBQyxLQUFLNk4sS0FBTCxDQUFXLG1CQUFYLEVBQWdDcEUsY0FBaEMsRUFBTjtBQUF1RCxrQkFBTXpKLENBQU4sS0FBVUEsQ0FBQyxHQUFDLEtBQUs2TixLQUFMLENBQVcsb0JBQVgsRUFBaUNwRSxjQUFqQyxFQUFaLEdBQStELFFBQU16SixDQUFOLEtBQVVELENBQUMsQ0FBQzZYLFlBQUYsR0FBZTVYLENBQXpCLENBQS9EO0FBQTJGLFNBQXZULEVBQXdULEtBQUs2WCxxQkFBTCxHQUEyQixVQUFTOVgsQ0FBVCxFQUFXO0FBQUMsZUFBSzBLLENBQUwsR0FBTyxLQUFLakMsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQVAsRUFBeUMsS0FBSzFJLENBQUwsR0FBTyxLQUFLb0ksU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQWhELEVBQWtGLEtBQUtOLFNBQUwsQ0FBZSxJQUFmLEVBQXFCaEIsUUFBckIsT0FBa0MsS0FBS2lELENBQUwsSUFBUSxLQUFLakMsU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQTFDLENBQWxGLEVBQWdLLEtBQUtOLFNBQUwsQ0FBZSxJQUFmLEVBQXFCaEIsUUFBckIsT0FBa0MsS0FBS3BILENBQUwsSUFBUSxLQUFLb0ksU0FBTCxDQUFlLElBQWYsRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLENBQTFDLENBQWhLLEVBQThPLEtBQUsyQixDQUFMLElBQVEsS0FBS3FOLGNBQUwsQ0FBb0IvWCxDQUFwQixFQUFzQixJQUF0QixFQUEyQixDQUEzQixDQUF0UDtBQUFvUixTQUFubkIsRUFBb25CLEtBQUt5USxjQUFMLEdBQW9CLFVBQVN6USxDQUFULEVBQVc7QUFBQyxlQUFLOFgscUJBQUwsQ0FBMkI5WCxDQUEzQjs7QUFBOEIsZUFBSSxJQUFJQyxDQUFDLEdBQUMsSUFBTixFQUFXYyxDQUFDLEdBQUMsQ0FBakIsRUFBbUJBLENBQUMsR0FBQyxLQUFLOE0sUUFBTCxDQUFjbE0sTUFBbkMsRUFBMENaLENBQUMsRUFBM0MsRUFBOEM7QUFBQyxnQkFBSU0sQ0FBQyxHQUFDLEtBQUsyVyxtQkFBTCxDQUF5QmhZLENBQXpCLEVBQTJCLElBQTNCLEVBQWdDLElBQWhDLEVBQXFDZSxDQUFyQyxDQUFOO0FBQThDLG9CQUFNZCxDQUFOLEdBQVFBLENBQUMsR0FBQ29CLENBQVYsR0FBWXBCLENBQUMsQ0FBQzBMLGNBQUYsQ0FBaUJ0SyxDQUFqQixDQUFaO0FBQWdDOztBQUFBLGlCQUFPcEIsQ0FBUDtBQUFTLFNBQXh6QixFQUF5ekIsS0FBS2tPLGNBQUwsR0FBb0IsVUFBU25PLENBQVQsRUFBVztBQUFDLGVBQUs4WCxxQkFBTCxDQUEyQjlYLENBQTNCOztBQUE4QixlQUFJLElBQUlDLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLNE4sUUFBTCxDQUFjbE0sTUFBNUIsRUFBbUMxQixDQUFDLEVBQXBDLEVBQXVDLEtBQUtnWSxXQUFMLENBQWlCalksQ0FBakIsRUFBbUIsSUFBbkIsRUFBd0IsSUFBeEIsRUFBNkJDLENBQTdCOztBQUFnQ2tFLFdBQUMsQ0FBQ2lNLEtBQUYsQ0FBUThILGdCQUFSLENBQXlCLElBQXpCLEVBQThCLEtBQUt6SCxjQUFMLENBQW9CelEsQ0FBcEIsQ0FBOUI7QUFBc0QsU0FBcC9CLEVBQXEvQixLQUFLK1gsY0FBTCxHQUFvQixVQUFTL1gsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZTtBQUFDLGNBQUlNLENBQUMsR0FBQyxLQUFLeU0sS0FBTCxDQUFXLGFBQVgsRUFBMEJsRyxjQUExQixDQUF5QyxPQUF6QyxDQUFOO0FBQXdELGNBQUcsV0FBU3ZHLENBQVosRUFBYyxPQUFPLENBQVA7O0FBQVMsZUFBSSxJQUFJUSxDQUFDLEdBQUMsQ0FBTixFQUFRTyxDQUFDLEdBQUNyQixDQUFkLEVBQWdCcUIsQ0FBQyxHQUFDbkMsQ0FBQyxDQUFDNE4sUUFBRixDQUFXbE0sTUFBN0IsRUFBb0NTLENBQUMsRUFBckMsRUFBd0M7QUFBQyxnQkFBSUUsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDNE4sUUFBRixDQUFXekwsQ0FBWCxDQUFOO0FBQW9CLGdCQUFHckIsQ0FBQyxHQUFDcUIsQ0FBRixJQUFLRSxDQUFDLENBQUNtRyxTQUFGLENBQVksR0FBWixFQUFpQmhCLFFBQWpCLEVBQVIsRUFBb0M7QUFBTTVGLGFBQUMsSUFBRVMsQ0FBQyxDQUFDNlYsb0JBQUYsQ0FBdUJuWSxDQUF2QixDQUFIO0FBQTZCOztBQUFBLGlCQUFNLENBQUMsQ0FBRCxJQUFJLFNBQU9xQixDQUFQLEdBQVNRLENBQVQsR0FBV0EsQ0FBQyxHQUFDLENBQWpCLENBQU47QUFBMEIsU0FBdHdDLEVBQXV3QyxLQUFLdVcsc0JBQUwsR0FBNEIsVUFBU3BZLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWVNLENBQWYsRUFBaUI7QUFBQyxjQUFJUSxDQUFDLEdBQUNkLENBQUMsQ0FBQzhNLFFBQUYsQ0FBV3hNLENBQVgsQ0FBTjtBQUFvQixjQUFHLGNBQVksT0FBT1EsQ0FBQyxDQUFDd1csV0FBeEIsRUFBb0MsT0FBT3hXLENBQVA7O0FBQVMsY0FBR0EsQ0FBQyxDQUFDNEcsU0FBRixDQUFZLEdBQVosRUFBaUJoQixRQUFqQixFQUFILEVBQStCO0FBQUM1RixhQUFDLENBQUM2SSxDQUFGLEdBQUk3SSxDQUFDLENBQUM0RyxTQUFGLENBQVksR0FBWixFQUFpQk0sUUFBakIsQ0FBMEIsR0FBMUIsSUFBK0I5SSxDQUFDLENBQUM4WCxjQUFGLENBQWlCL1gsQ0FBakIsRUFBbUJlLENBQW5CLEVBQXFCTSxDQUFyQixDQUFuQztBQUEyRCxnQkFBSWUsQ0FBQyxHQUFDUCxDQUFDLENBQUM0RyxTQUFGLENBQVksYUFBWixFQUEyQmIsY0FBM0IsQ0FBMEMsT0FBMUMsQ0FBTjs7QUFBeUQsZ0JBQUcsWUFBVXhGLENBQWIsRUFBZTtBQUFDLGtCQUFJRSxDQUFDLEdBQUNULENBQUMsQ0FBQ3NXLG9CQUFGLENBQXVCblksQ0FBdkIsQ0FBTjtBQUFnQzZCLGVBQUMsQ0FBQzZJLENBQUYsSUFBSyxDQUFDLENBQUQsSUFBSSxTQUFPdEksQ0FBUCxHQUFTRSxDQUFULEdBQVdBLENBQUMsR0FBQyxDQUFqQixDQUFMO0FBQXlCOztBQUFBVCxhQUFDLENBQUM0RyxTQUFGLENBQVksSUFBWixFQUFrQmhCLFFBQWxCLE9BQStCNUYsQ0FBQyxDQUFDNkksQ0FBRixJQUFLN0ksQ0FBQyxDQUFDNEcsU0FBRixDQUFZLElBQVosRUFBa0JNLFFBQWxCLENBQTJCLEdBQTNCLENBQXBDO0FBQXFFLFdBQWxTLE1BQXVTbEgsQ0FBQyxDQUFDNEcsU0FBRixDQUFZLElBQVosRUFBa0JoQixRQUFsQixPQUErQnhILENBQUMsQ0FBQ3lLLENBQUYsSUFBSzdJLENBQUMsQ0FBQzRHLFNBQUYsQ0FBWSxJQUFaLEVBQWtCTSxRQUFsQixDQUEyQixHQUEzQixDQUFwQyxHQUFxRWxILENBQUMsQ0FBQzZJLENBQUYsR0FBSXpLLENBQUMsQ0FBQ3lLLENBQTNFOztBQUE2RSxpQkFBT3pLLENBQUMsQ0FBQ3lLLENBQUYsR0FBSTdJLENBQUMsQ0FBQzZJLENBQUYsR0FBSTdJLENBQUMsQ0FBQ3dXLFdBQUYsQ0FBY3JZLENBQWQsQ0FBUixFQUF5QjZCLENBQUMsQ0FBQzRHLFNBQUYsQ0FBWSxHQUFaLEVBQWlCaEIsUUFBakIsTUFBNkI1RixDQUFDLENBQUN4QixDQUFGLEdBQUl3QixDQUFDLENBQUM0RyxTQUFGLENBQVksR0FBWixFQUFpQk0sUUFBakIsQ0FBMEIsR0FBMUIsQ0FBSixFQUFtQ2xILENBQUMsQ0FBQzRHLFNBQUYsQ0FBWSxJQUFaLEVBQWtCaEIsUUFBbEIsT0FBK0I1RixDQUFDLENBQUN4QixDQUFGLElBQUt3QixDQUFDLENBQUM0RyxTQUFGLENBQVksSUFBWixFQUFrQk0sUUFBbEIsQ0FBMkIsR0FBM0IsQ0FBcEMsQ0FBaEUsS0FBdUlsSCxDQUFDLENBQUM0RyxTQUFGLENBQVksSUFBWixFQUFrQmhCLFFBQWxCLE9BQStCeEgsQ0FBQyxDQUFDSSxDQUFGLElBQUt3QixDQUFDLENBQUM0RyxTQUFGLENBQVksSUFBWixFQUFrQk0sUUFBbEIsQ0FBMkIsR0FBM0IsQ0FBcEMsR0FBcUVsSCxDQUFDLENBQUN4QixDQUFGLEdBQUlKLENBQUMsQ0FBQ0ksQ0FBbE4sQ0FBekIsRUFBOE9KLENBQUMsQ0FBQ0ksQ0FBRixHQUFJd0IsQ0FBQyxDQUFDeEIsQ0FBcFAsRUFBc1B3QixDQUE3UDtBQUErUCxTQUF6K0QsRUFBMCtELEtBQUttVyxtQkFBTCxHQUF5QixVQUFTaFksQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQjtBQUFDLGNBQUlRLENBQUMsR0FBQyxLQUFLdVcsc0JBQUwsQ0FBNEJwWSxDQUE1QixFQUE4QkMsQ0FBOUIsRUFBZ0NjLENBQWhDLEVBQWtDTSxDQUFsQyxDQUFOO0FBQUEsY0FBMkNlLENBQUMsR0FBQ1AsQ0FBQyxDQUFDNE8sY0FBRixDQUFpQnpRLENBQWpCLENBQTdDOztBQUFpRSxlQUFJcUIsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDUSxDQUFDLENBQUNnTSxRQUFGLENBQVdsTSxNQUFyQixFQUE0Qk4sQ0FBQyxFQUE3QixFQUFnQztBQUFDLGdCQUFJaUIsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDK1gsbUJBQUYsQ0FBc0JoWSxDQUF0QixFQUF3QkMsQ0FBeEIsRUFBMEI0QixDQUExQixFQUE0QlIsQ0FBNUIsQ0FBTjtBQUFxQ2UsYUFBQyxDQUFDdUosY0FBRixDQUFpQnJKLENBQWpCO0FBQW9COztBQUFBLGlCQUFPRixDQUFQO0FBQVMsU0FBenJFLEVBQTByRSxLQUFLNlYsV0FBTCxHQUFpQixVQUFTalksQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQjtBQUFDLGNBQUlRLENBQUMsR0FBQyxLQUFLdVcsc0JBQUwsQ0FBNEJwWSxDQUE1QixFQUE4QkMsQ0FBOUIsRUFBZ0NjLENBQWhDLEVBQWtDTSxDQUFsQyxDQUFOO0FBQTJDUSxXQUFDLENBQUNtTSxNQUFGLENBQVNoTyxDQUFUOztBQUFZLGVBQUlxQixDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUNRLENBQUMsQ0FBQ2dNLFFBQUYsQ0FBV2xNLE1BQXJCLEVBQTRCTixDQUFDLEVBQTdCLEVBQWdDcEIsQ0FBQyxDQUFDZ1ksV0FBRixDQUFjalksQ0FBZCxFQUFnQkMsQ0FBaEIsRUFBa0I0QixDQUFsQixFQUFvQlIsQ0FBcEI7QUFBdUIsU0FBMzBFO0FBQTQwRSxPQUFwd3RDLEVBQXF3dEM4QyxDQUFDLENBQUNqQixPQUFGLENBQVU0TCxJQUFWLENBQWUzTCxTQUFmLEdBQXlCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBZCxFQUE5eHRDLEVBQWcwdEM5SyxDQUFDLENBQUNqQixPQUFGLENBQVVvVixlQUFWLEdBQTBCLFVBQVN0WSxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQXBCLEVBQXdDLEtBQUtsQyxJQUFMLENBQVUvTSxDQUFWLENBQXhDLEVBQXFELEtBQUt1WSxRQUFMLEdBQWMsVUFBU3ZZLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWU7QUFBQyxjQUFJTSxDQUFDLEdBQUNwQixDQUFDLENBQUNjLENBQUQsQ0FBUDtBQUFBLGNBQVdjLENBQUMsR0FBQyxJQUFiOztBQUFrQixjQUFHN0IsQ0FBQyxDQUFDaVgsUUFBTCxFQUFjO0FBQUMsZ0JBQUk3VSxDQUFDLEdBQUMsVUFBTjtBQUFpQixhQUFDLEtBQUdyQixDQUFILElBQU0sT0FBS2QsQ0FBQyxDQUFDYyxDQUFDLEdBQUMsQ0FBSCxDQUFiLEtBQXFCQSxDQUFDLEdBQUNkLENBQUMsQ0FBQzBCLE1BQUYsR0FBUyxDQUFoQyxJQUFtQyxPQUFLMUIsQ0FBQyxDQUFDYyxDQUFDLEdBQUMsQ0FBSCxDQUF6QyxLQUFpRHFCLENBQUMsR0FBQyxVQUFuRCxHQUErRCxJQUFFckIsQ0FBRixJQUFLLE9BQUtkLENBQUMsQ0FBQ2MsQ0FBQyxHQUFDLENBQUgsQ0FBWCxJQUFrQkEsQ0FBQyxHQUFDZCxDQUFDLENBQUMwQixNQUFGLEdBQVMsQ0FBN0IsSUFBZ0MsT0FBSzFCLENBQUMsQ0FBQ2MsQ0FBQyxHQUFDLENBQUgsQ0FBdEMsS0FBOENxQixDQUFDLEdBQUMsUUFBaEQsQ0FBL0QsRUFBeUgsSUFBRXJCLENBQUYsSUFBSyxPQUFLZCxDQUFDLENBQUNjLENBQUMsR0FBQyxDQUFILENBQVgsS0FBbUJBLENBQUMsSUFBRWQsQ0FBQyxDQUFDMEIsTUFBRixHQUFTLENBQVosSUFBZSxPQUFLMUIsQ0FBQyxDQUFDYyxDQUFDLEdBQUMsQ0FBSCxDQUF4QyxNQUFpRHFCLENBQUMsR0FBQyxTQUFuRCxDQUF6SCxFQUF1TCxLQUFLLENBQUwsS0FBU3BDLENBQUMsQ0FBQ29YLE1BQUYsQ0FBUy9WLENBQVQsQ0FBVCxJQUFzQixTQUFPUSxDQUFDLEdBQUM3QixDQUFDLENBQUNvWCxNQUFGLENBQVMvVixDQUFULEVBQVllLENBQVosQ0FBVCxDQUF0QixJQUFnRCxXQUFTcEMsQ0FBQyxDQUFDb1gsTUFBRixDQUFTL1YsQ0FBVCxFQUFZK0wsSUFBckUsS0FBNEV2TCxDQUFDLEdBQUM3QixDQUFDLENBQUNvWCxNQUFGLENBQVMvVixDQUFULENBQTlFLENBQXZMO0FBQWtSLFdBQWxULE1BQXVUUSxDQUFDLEdBQUM3QixDQUFDLENBQUNvWCxNQUFGLENBQVMvVixDQUFULENBQUY7O0FBQWMsaUJBQU8sUUFBTVEsQ0FBTixLQUFVQSxDQUFDLEdBQUM3QixDQUFDLENBQUNtWCxZQUFkLEdBQTRCdFYsQ0FBbkM7QUFBcUMsU0FBL2MsRUFBZ2QsS0FBS3NNLGNBQUwsR0FBb0IsVUFBU25PLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxLQUFLOE4sTUFBTCxDQUFZRCxLQUFaLENBQWtCLGFBQWxCLEVBQWlDNUYsYUFBakMsRUFBTjtBQUF1RCxjQUFHLFFBQU1qSSxDQUFULEVBQVcsWUFBVUQsQ0FBQyxDQUFDeVAsVUFBWixJQUF3QixNQUFJelAsQ0FBQyxDQUFDb1AsV0FBTixJQUFtQnBQLENBQUMsQ0FBQ3dZLFVBQUYsQ0FBYXJVLENBQUMsQ0FBQytCLGNBQUYsQ0FBaUIsS0FBS3VTLE9BQUwsRUFBakIsQ0FBYixFQUE4QyxLQUFLL04sQ0FBbkQsRUFBcUQsS0FBS3JLLENBQTFELENBQW5CLEVBQWdGLE1BQUlMLENBQUMsQ0FBQ21QLFNBQU4sSUFBaUJuUCxDQUFDLENBQUMwWSxRQUFGLENBQVd2VSxDQUFDLENBQUMrQixjQUFGLENBQWlCLEtBQUt1UyxPQUFMLEVBQWpCLENBQVgsRUFBNEMsS0FBSy9OLENBQWpELEVBQW1ELEtBQUtySyxDQUF4RCxDQUF6SCxLQUFzTCxNQUFJTCxDQUFDLENBQUNtUCxTQUFOLElBQWlCblAsQ0FBQyxDQUFDMFksUUFBRixDQUFXdlUsQ0FBQyxDQUFDK0IsY0FBRixDQUFpQixLQUFLdVMsT0FBTCxFQUFqQixDQUFYLEVBQTRDLEtBQUsvTixDQUFqRCxFQUFtRCxLQUFLckssQ0FBeEQsQ0FBakIsRUFBNEUsTUFBSUwsQ0FBQyxDQUFDb1AsV0FBTixJQUFtQnBQLENBQUMsQ0FBQ3dZLFVBQUYsQ0FBYXJVLENBQUMsQ0FBQytCLGNBQUYsQ0FBaUIsS0FBS3VTLE9BQUwsRUFBakIsQ0FBYixFQUE4QyxLQUFLL04sQ0FBbkQsRUFBcUQsS0FBS3JLLENBQTFELENBQXJSLEVBQVgsS0FBa1c7QUFBQyxnQkFBSVUsQ0FBQyxHQUFDLEtBQUtnTixNQUFMLENBQVlELEtBQVosQ0FBa0IsV0FBbEIsRUFBK0JqRyxpQkFBL0IsQ0FBaUQxRCxDQUFDLENBQUN3RixJQUFGLENBQU9JLEtBQVAsQ0FBYTVGLENBQUMsQ0FBQ2UsR0FBRixDQUFNOEUsSUFBbkIsRUFBeUJFLFFBQTFFLENBQU47QUFBQSxnQkFBMEY3SSxDQUFDLEdBQUMsS0FBSzBNLE1BQUwsQ0FBWUQsS0FBWixDQUFrQixZQUFsQixFQUFnQ2xHLGNBQWhDLENBQStDekQsQ0FBQyxDQUFDd0YsSUFBRixDQUFPSSxLQUFQLENBQWE1RixDQUFDLENBQUNlLEdBQUYsQ0FBTThFLElBQW5CLEVBQXlCRyxTQUF4RSxDQUE1RjtBQUFBLGdCQUErS3RJLENBQUMsR0FBQyxLQUFLNFcsT0FBTCxFQUFqTDtBQUFnTXhZLGFBQUMsQ0FBQytXLEtBQUYsS0FBVW5WLENBQUMsR0FBQ0EsQ0FBQyxDQUFDMEksS0FBRixDQUFRLEVBQVIsRUFBWW9PLE9BQVosR0FBc0J6VSxJQUF0QixDQUEyQixFQUEzQixDQUFaOztBQUE0QyxpQkFBSSxJQUFJOUIsQ0FBQyxHQUFDK0IsQ0FBQyxDQUFDcUcsYUFBRixDQUFnQixLQUFLdUQsTUFBTCxDQUFZdEYsU0FBWixDQUFzQixJQUF0QixFQUE0QmxCLEtBQTVDLENBQU4sRUFBeURqRixDQUFDLEdBQUMsQ0FBL0QsRUFBaUVBLENBQUMsR0FBQ1QsQ0FBQyxDQUFDRixNQUFyRSxFQUE0RVcsQ0FBQyxFQUE3RSxFQUFnRjtBQUFDLGtCQUFJQyxDQUFDLEdBQUMsS0FBS2dXLFFBQUwsQ0FBY3RZLENBQWQsRUFBZ0I0QixDQUFoQixFQUFrQlMsQ0FBbEIsQ0FBTjtBQUFBLGtCQUEyQkUsQ0FBQyxHQUFDekIsQ0FBQyxHQUFDZCxDQUFDLENBQUNpWCxRQUFGLENBQVdRLFVBQTFDO0FBQXFEMVgsZUFBQyxDQUFDaU0sU0FBRixDQUFZLEtBQUt2QixDQUFqQixFQUFtQixLQUFLckssQ0FBeEIsR0FBMkJMLENBQUMsQ0FBQzJNLEtBQUYsQ0FBUW5LLENBQVIsRUFBVSxDQUFDQSxDQUFYLENBQTNCO0FBQXlDLGtCQUFJL0IsQ0FBQyxHQUFDVCxDQUFDLENBQUNxUCxTQUFSO0FBQWtCclAsZUFBQyxDQUFDcVAsU0FBRixHQUFZclAsQ0FBQyxDQUFDcVAsU0FBRixHQUFZcFAsQ0FBQyxDQUFDaVgsUUFBRixDQUFXUSxVQUF2QixHQUFrQzNXLENBQTlDLEVBQWdELFlBQVVNLENBQVYsSUFBYXJCLENBQUMsQ0FBQzZNLFNBQUYsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixFQUFoQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixDQUE3RCxFQUF1RnRLLENBQUMsQ0FBQ3lMLE1BQUYsQ0FBU2hPLENBQVQsQ0FBdkYsRUFBbUcsWUFBVXFCLENBQVYsSUFBYXJCLENBQUMsQ0FBQzZNLFNBQUYsQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFDLEVBQWpCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLENBQXhCLENBQWhILEVBQTJJN00sQ0FBQyxDQUFDcVAsU0FBRixHQUFZNU8sQ0FBdkosRUFBeUpULENBQUMsQ0FBQzJNLEtBQUYsQ0FBUSxJQUFFbkssQ0FBVixFQUFZLENBQUMsQ0FBRCxHQUFHQSxDQUFmLENBQXpKLEVBQTJLeEMsQ0FBQyxDQUFDaU0sU0FBRixDQUFZLENBQUMsS0FBS3ZCLENBQWxCLEVBQW9CLENBQUMsS0FBS3JLLENBQTFCLENBQTNLLEVBQXdNLEtBQUtxSyxDQUFMLElBQVEzSixDQUFDLElBQUV3QixDQUFDLENBQUN3VSxTQUFGLElBQWE5VyxDQUFDLENBQUM4VyxTQUFqQixDQUFELEdBQTZCOVcsQ0FBQyxDQUFDaVgsUUFBRixDQUFXUSxVQUF4UCxFQUFtUSxLQUFLLENBQUwsS0FBU3RWLENBQUMsQ0FBQ0UsQ0FBRCxDQUFWLElBQWVrSixLQUFLLENBQUNwSixDQUFDLENBQUNFLENBQUQsQ0FBRixDQUFwQixLQUE2QixLQUFLb0ksQ0FBTCxJQUFRdEksQ0FBQyxDQUFDRSxDQUFELENBQXRDLENBQW5RO0FBQThTO0FBQUM7QUFBQyxTQUF2bUQsRUFBd21ELEtBQUttVyxPQUFMLEdBQWEsWUFBVSxDQUFFLENBQWpvRCxFQUFrb0QsS0FBS04sb0JBQUwsR0FBMEIsVUFBU25ZLENBQVQsRUFBVztBQUFDLGVBQUksSUFBSUMsQ0FBQyxHQUFDLEtBQUtvWSxXQUFMLENBQWlCclksQ0FBakIsQ0FBTixFQUEwQmUsQ0FBQyxHQUFDLENBQWhDLEVBQWtDQSxDQUFDLEdBQUMsS0FBSzhNLFFBQUwsQ0FBY2xNLE1BQWxELEVBQXlEWixDQUFDLEVBQTFELEVBQTZEZCxDQUFDLElBQUUsS0FBSzROLFFBQUwsQ0FBYzlNLENBQWQsRUFBaUJvWCxvQkFBakIsQ0FBc0NuWSxDQUF0QyxDQUFIOztBQUE0QyxpQkFBT0MsQ0FBUDtBQUFTLFNBQTF4RCxFQUEyeEQsS0FBS29ZLFdBQUwsR0FBaUIsVUFBU3JZLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxLQUFLOE4sTUFBTCxDQUFZRCxLQUFaLENBQWtCLGFBQWxCLEVBQWlDNUYsYUFBakMsRUFBTjs7QUFBdUQsY0FBRyxRQUFNakksQ0FBVCxFQUFXO0FBQUMsZ0JBQUljLENBQUMsR0FBQyxLQUFLZ04sTUFBTCxDQUFZRCxLQUFaLENBQWtCLFdBQWxCLEVBQStCakcsaUJBQS9CLENBQWlEMUQsQ0FBQyxDQUFDd0YsSUFBRixDQUFPSSxLQUFQLENBQWE1RixDQUFDLENBQUNlLEdBQUYsQ0FBTThFLElBQW5CLEVBQXlCRSxRQUExRSxDQUFOO0FBQUEsZ0JBQTBGN0ksQ0FBQyxHQUFDLENBQTVGO0FBQUEsZ0JBQThGUSxDQUFDLEdBQUMsS0FBSzRXLE9BQUwsRUFBaEc7QUFBK0d4WSxhQUFDLENBQUMrVyxLQUFGLEtBQVVuVixDQUFDLEdBQUNBLENBQUMsQ0FBQzBJLEtBQUYsQ0FBUSxFQUFSLEVBQVlvTyxPQUFaLEdBQXNCelUsSUFBdEIsQ0FBMkIsRUFBM0IsQ0FBWjs7QUFBNEMsaUJBQUksSUFBSTlCLENBQUMsR0FBQytCLENBQUMsQ0FBQ3FHLGFBQUYsQ0FBZ0IsS0FBS3VELE1BQUwsQ0FBWXRGLFNBQVosQ0FBc0IsSUFBdEIsRUFBNEJsQixLQUE1QyxDQUFOLEVBQXlEakYsQ0FBQyxHQUFDLENBQS9ELEVBQWlFQSxDQUFDLEdBQUNULENBQUMsQ0FBQ0YsTUFBckUsRUFBNEVXLENBQUMsRUFBN0UsRUFBZ0Y7QUFBQ2pCLGVBQUMsSUFBRSxDQUFDLEtBQUtrWCxRQUFMLENBQWN0WSxDQUFkLEVBQWdCNEIsQ0FBaEIsRUFBa0JTLENBQWxCLEVBQXFCeVUsU0FBckIsSUFBZ0M5VyxDQUFDLENBQUM4VyxTQUFuQyxJQUE4Q2hXLENBQTlDLEdBQWdEZCxDQUFDLENBQUNpWCxRQUFGLENBQVdRLFVBQTlELEVBQXlFLEtBQUssQ0FBTCxLQUFTdFYsQ0FBQyxDQUFDRSxDQUFELENBQVYsSUFBZWtKLEtBQUssQ0FBQ3BKLENBQUMsQ0FBQ0UsQ0FBRCxDQUFGLENBQXBCLEtBQTZCakIsQ0FBQyxJQUFFZSxDQUFDLENBQUNFLENBQUQsQ0FBakMsQ0FBekU7QUFBK0c7O0FBQUEsbUJBQU9qQixDQUFQO0FBQVM7O0FBQUEsY0FBSWtCLENBQUMsR0FBQzRCLENBQUMsQ0FBQytCLGNBQUYsQ0FBaUIsS0FBS3VTLE9BQUwsRUFBakIsQ0FBTjtBQUF1QyxjQUFHLENBQUN6WSxDQUFDLENBQUNxWSxXQUFOLEVBQWtCLE9BQU8sS0FBRzlWLENBQUMsQ0FBQ1osTUFBWjtBQUFtQjNCLFdBQUMsQ0FBQ2lPLElBQUYsSUFBUyxLQUFLQyxVQUFMLENBQWdCbE8sQ0FBaEIsRUFBa0IsQ0FBQyxDQUFuQixDQUFUO0FBQStCLGNBQUl3QyxDQUFDLEdBQUN4QyxDQUFDLENBQUNxWSxXQUFGLENBQWM5VixDQUFkLEVBQWlCdEIsS0FBdkI7QUFBNkIsaUJBQU9qQixDQUFDLENBQUNxTyxPQUFGLElBQVk3TCxDQUFuQjtBQUFxQixTQUE1M0UsRUFBNjNFLEtBQUtpTyxjQUFMLEdBQW9CLFVBQVN6USxDQUFULEVBQVc7QUFBQyxjQUFJQyxDQUFDLEdBQUMsS0FBSzhOLE1BQUwsQ0FBWUQsS0FBWixDQUFrQixXQUFsQixFQUErQmpHLGlCQUEvQixDQUFpRDFELENBQUMsQ0FBQ3dGLElBQUYsQ0FBT0ksS0FBUCxDQUFhNUYsQ0FBQyxDQUFDZSxHQUFGLENBQU04RSxJQUFuQixFQUF5QkUsUUFBMUUsQ0FBTjtBQUEwRixpQkFBTyxJQUFJL0YsQ0FBQyxDQUFDNkcsV0FBTixDQUFrQixLQUFLTixDQUF2QixFQUF5QixLQUFLckssQ0FBTCxHQUFPSixDQUFoQyxFQUFrQyxLQUFLeUssQ0FBTCxHQUFPLEtBQUsyTixXQUFMLENBQWlCclksQ0FBakIsQ0FBekMsRUFBNkQsS0FBS0ssQ0FBbEUsQ0FBUDtBQUE0RSxTQUFua0Y7QUFBb2tGLE9BQTE2eUMsRUFBMjZ5QzhELENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9WLGVBQVYsQ0FBMEJuVixTQUExQixHQUFvQyxJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQWQsRUFBLzh5QyxFQUFpL3lDOUssQ0FBQyxDQUFDakIsT0FBRixDQUFVOEwsS0FBVixHQUFnQixVQUFTaFAsQ0FBVCxFQUFXO0FBQUMsYUFBSzZPLGdCQUFMLEdBQXNCLENBQUMsQ0FBdkIsRUFBeUIsS0FBSzlCLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9WLGVBQTdDLEVBQTZELEtBQUt2TCxJQUFMLENBQVUvTSxDQUFWLENBQTdELEVBQTBFLEtBQUs4TyxJQUFMLEdBQVUzSyxDQUFDLENBQUMrQixjQUFGLENBQWlCbEcsQ0FBQyxDQUFDdUgsS0FBRixJQUFTdkgsQ0FBQyxDQUFDOE8sSUFBWCxJQUFpQjlPLENBQUMsQ0FBQytPLFdBQW5CLElBQWdDLEVBQWpELENBQXBGLEVBQXlJLEtBQUswSixPQUFMLEdBQWEsWUFBVTtBQUFDLGlCQUFPLElBQUUsS0FBSzVLLFFBQUwsQ0FBY2xNLE1BQWhCLEdBQXVCLEVBQXZCLEdBQTBCLEtBQUttTixJQUF0QztBQUEyQyxTQUE1TTtBQUE2TSxPQUExdHpDLEVBQTJ0ekMzSyxDQUFDLENBQUNqQixPQUFGLENBQVU4TCxLQUFWLENBQWdCN0wsU0FBaEIsR0FBMEIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9WLGVBQWQsRUFBcnZ6QyxFQUFteHpDblUsQ0FBQyxDQUFDakIsT0FBRixDQUFVMFYsSUFBVixHQUFlLFVBQVM1WSxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVb1YsZUFBcEIsRUFBb0MsS0FBS3ZMLElBQUwsQ0FBVS9NLENBQVYsQ0FBcEMsRUFBaUQsS0FBS3lZLE9BQUwsR0FBYSxZQUFVO0FBQUMsY0FBSXpZLENBQUMsR0FBQyxLQUFLd0ksZ0JBQUwsR0FBd0JOLGFBQXhCLEVBQU47QUFBOEMsY0FBRyxRQUFNbEksQ0FBVCxFQUFXLE9BQU9BLENBQUMsQ0FBQzZOLFFBQUYsQ0FBVyxDQUFYLEVBQWM0SyxPQUFkLEVBQVA7QUFBK0IsU0FBaks7QUFBa0ssT0FBaDl6QyxFQUFpOXpDdFUsQ0FBQyxDQUFDakIsT0FBRixDQUFVMFYsSUFBVixDQUFlelYsU0FBZixHQUF5QixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVb1YsZUFBZCxFQUExK3pDLEVBQXdnMENuVSxDQUFDLENBQUNqQixPQUFGLENBQVVkLENBQVYsR0FBWSxVQUFTcEMsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9WLGVBQXBCLEVBQW9DLEtBQUt2TCxJQUFMLENBQVUvTSxDQUFWLENBQXBDLEVBQWlELEtBQUs2WSxPQUFMLEdBQWEsSUFBRTdZLENBQUMsQ0FBQzBCLFVBQUYsQ0FBYUMsTUFBN0U7O0FBQW9GLGFBQUksSUFBSTFCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQ0QsQ0FBQyxDQUFDMEIsVUFBRixDQUFhQyxNQUEzQixFQUFrQzFCLENBQUMsRUFBbkMsRUFBc0MsS0FBR0QsQ0FBQyxDQUFDMEIsVUFBRixDQUFhekIsQ0FBYixFQUFnQnlPLFFBQW5CLEtBQThCLEtBQUttSyxPQUFMLEdBQWEsQ0FBQyxDQUE1Qzs7QUFBK0MsYUFBSy9KLElBQUwsR0FBVSxLQUFLK0osT0FBTCxHQUFhN1ksQ0FBQyxDQUFDMEIsVUFBRixDQUFhLENBQWIsRUFBZ0I2RixLQUFoQixJQUF1QnZILENBQUMsQ0FBQzBCLFVBQUYsQ0FBYSxDQUFiLEVBQWdCb1gsSUFBcEQsR0FBeUQsRUFBbkUsRUFBc0UsS0FBS0wsT0FBTCxHQUFhLFlBQVU7QUFBQyxpQkFBTyxLQUFLM0osSUFBWjtBQUFpQixTQUEvRyxFQUFnSCxLQUFLaUssa0JBQUwsR0FBd0IsS0FBSzVLLGNBQTdJLEVBQTRKLEtBQUtBLGNBQUwsR0FBb0IsVUFBU25PLENBQVQsRUFBVztBQUFDLGNBQUcsS0FBSzZZLE9BQVIsRUFBZ0I7QUFBQyxpQkFBS0Usa0JBQUwsQ0FBd0IvWSxDQUF4QjtBQUEyQixnQkFBSUMsQ0FBQyxHQUFDLElBQUlrRSxDQUFDLENBQUNrRCxRQUFOLENBQWUsVUFBZixFQUEwQmxELENBQUMsQ0FBQ3dGLElBQUYsQ0FBT0ksS0FBUCxDQUFhNUYsQ0FBQyxDQUFDZSxHQUFGLENBQU04RSxJQUFuQixFQUF5QkUsUUFBbkQsQ0FBTjtBQUFtRS9GLGFBQUMsQ0FBQ2lNLEtBQUYsQ0FBUThILGdCQUFSLENBQXlCLElBQXpCLEVBQThCLElBQUkvVCxDQUFDLENBQUM2RyxXQUFOLENBQWtCLEtBQUtOLENBQXZCLEVBQXlCLEtBQUtySyxDQUFMLEdBQU9KLENBQUMsQ0FBQzhJLFFBQUYsQ0FBVyxHQUFYLENBQWhDLEVBQWdELEtBQUsyQixDQUFMLEdBQU8sS0FBSzJOLFdBQUwsQ0FBaUJyWSxDQUFqQixDQUF2RCxFQUEyRSxLQUFLSyxDQUFoRixDQUE5QjtBQUFrSCxXQUFqTyxNQUFzTyxJQUFHLElBQUUsS0FBS3dOLFFBQUwsQ0FBY2xNLE1BQW5CLEVBQTBCO0FBQUMsZ0JBQUlaLENBQUMsR0FBQyxJQUFJb0QsQ0FBQyxDQUFDakIsT0FBRixDQUFVOEUsQ0FBZCxFQUFOO0FBQXNCakgsYUFBQyxDQUFDOE0sUUFBRixHQUFXLEtBQUtBLFFBQWhCLEVBQXlCOU0sQ0FBQyxDQUFDZ04sTUFBRixHQUFTLElBQWxDLEVBQXVDaE4sQ0FBQyxDQUFDaU4sTUFBRixDQUFTaE8sQ0FBVCxDQUF2QztBQUFtRDtBQUFDLFNBQXZnQixFQUF3Z0IsS0FBS2daLE9BQUwsR0FBYSxZQUFVO0FBQUN2WSxXQUFDLENBQUM2RixJQUFGLENBQU8sS0FBS2tDLGdCQUFMLEdBQXdCakIsS0FBL0I7QUFBc0MsU0FBdGtCLEVBQXVrQixLQUFLMFIsV0FBTCxHQUFpQixZQUFVO0FBQUM5VSxXQUFDLENBQUNlLEdBQUYsQ0FBTTJMLE1BQU4sQ0FBYS9DLEtBQWIsQ0FBbUJvTCxNQUFuQixHQUEwQixTQUExQjtBQUFvQyxTQUF2b0I7QUFBd29CLE9BQWoxMUMsRUFBazExQy9VLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVWQsQ0FBVixDQUFZZSxTQUFaLEdBQXNCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVVvVixlQUFkLEVBQXgyMUMsRUFBczQxQ25VLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVWlXLFFBQVYsR0FBbUIsVUFBU25aLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVVvVixlQUFwQixFQUFvQyxLQUFLdkwsSUFBTCxDQUFVL00sQ0FBVixDQUFwQztBQUFpRCxZQUFJQyxDQUFDLEdBQUMsS0FBS3VJLGdCQUFMLEdBQXdCTixhQUF4QixFQUFOO0FBQThDLGFBQUs0RyxJQUFMLEdBQVUzSyxDQUFDLENBQUMrQixjQUFGLENBQWlCbEcsQ0FBQyxDQUFDdUgsS0FBRixJQUFTdkgsQ0FBQyxDQUFDOE8sSUFBWCxJQUFpQjlPLENBQUMsQ0FBQytPLFdBQW5CLElBQWdDLEVBQWpELENBQVYsRUFBK0QsS0FBS1osY0FBTCxHQUFvQixVQUFTbk8sQ0FBVCxFQUFXO0FBQUMsZUFBS29aLFdBQUwsQ0FBaUJwWixDQUFqQixHQUFvQkEsQ0FBQyxDQUFDaU8sSUFBRixFQUFwQjtBQUE2QixjQUFJaE8sQ0FBQyxHQUFDLEtBQUs4TixNQUFMLENBQVlELEtBQVosQ0FBa0IsaUJBQWxCLEVBQXFDdkcsS0FBM0M7QUFBQSxjQUFpRHhHLENBQUMsR0FBQyxLQUFLbUosUUFBTCxFQUFuRDtBQUFBLGNBQW1FN0ksQ0FBQyxHQUFDLEtBQUtnWSxTQUExRTtBQUFBLGNBQW9GeFgsQ0FBQyxHQUFDN0IsQ0FBQyxDQUFDbVAsU0FBeEY7QUFBa0csMEJBQWNsUCxDQUFkLElBQWlCRCxDQUFDLENBQUNtUSxTQUFGLEVBQWpCOztBQUErQixlQUFJLElBQUkvTixDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNmLENBQUMsQ0FBQ00sTUFBaEIsRUFBdUJTLENBQUMsRUFBeEIsRUFBMkI7QUFBQyxnQkFBSUUsQ0FBQyxHQUFDakIsQ0FBQyxDQUFDZSxDQUFELENBQUQsQ0FBS2tYLEVBQVg7QUFBQSxnQkFBYy9XLENBQUMsR0FBQ2xCLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUttWCxFQUFyQjtBQUFBLGdCQUF3Qi9XLENBQUMsR0FBQ25CLENBQUMsQ0FBQ2UsQ0FBRCxDQUFELENBQUswTSxJQUEvQjtBQUFvQzlPLGFBQUMsQ0FBQ2lPLElBQUYsSUFBU2pPLENBQUMsQ0FBQ2lNLFNBQUYsQ0FBWTNKLENBQUMsQ0FBQ29JLENBQWQsRUFBZ0JwSSxDQUFDLENBQUNqQyxDQUFsQixDQUFULEVBQThCTCxDQUFDLENBQUNxTSxNQUFGLENBQVNoTCxDQUFDLENBQUNlLENBQUQsQ0FBRCxDQUFLb1gsUUFBZCxDQUE5QixFQUFzRCxNQUFJeFosQ0FBQyxDQUFDbVAsU0FBTixJQUFpQm5QLENBQUMsQ0FBQzBZLFFBQUYsQ0FBV3ZVLENBQUMsQ0FBQytCLGNBQUYsQ0FBaUIxRCxDQUFqQixDQUFYLEVBQStCLENBQS9CLEVBQWlDLENBQWpDLENBQXZFLEVBQTJHLE1BQUl4QyxDQUFDLENBQUNvUCxXQUFOLElBQW1CcFAsQ0FBQyxDQUFDd1ksVUFBRixDQUFhclUsQ0FBQyxDQUFDK0IsY0FBRixDQUFpQjFELENBQWpCLENBQWIsRUFBaUMsQ0FBakMsRUFBbUMsQ0FBbkMsQ0FBOUgsRUFBb0t4QyxDQUFDLENBQUNxTyxPQUFGLEVBQXBLLEVBQWdMLGdCQUFjcE8sQ0FBZCxLQUFrQixNQUFJbUMsQ0FBSixJQUFPcEMsQ0FBQyxDQUFDaVIsTUFBRixDQUFTM08sQ0FBQyxDQUFDb0ksQ0FBWCxFQUFhcEksQ0FBQyxDQUFDakMsQ0FBRixHQUFJVSxDQUFDLEdBQUMsQ0FBbkIsQ0FBUCxFQUE2QmYsQ0FBQyxDQUFDa1IsTUFBRixDQUFTM08sQ0FBQyxDQUFDbUksQ0FBWCxFQUFhbkksQ0FBQyxDQUFDbEMsQ0FBRixHQUFJVSxDQUFDLEdBQUMsQ0FBbkIsQ0FBL0MsQ0FBaEw7QUFBc1A7O0FBQUEsMEJBQWNkLENBQWQsS0FBa0JELENBQUMsQ0FBQ3FQLFNBQUYsR0FBWXRPLENBQUMsR0FBQyxFQUFkLEVBQWlCZixDQUFDLENBQUNvUCxXQUFGLEdBQWN2TixDQUEvQixFQUFpQzdCLENBQUMsQ0FBQ3VRLE1BQUYsRUFBakMsRUFBNEN2USxDQUFDLENBQUNtUixTQUFGLEVBQTlELEdBQTZFblIsQ0FBQyxDQUFDcU8sT0FBRixFQUE3RTtBQUF5RixTQUE1b0IsRUFBNm9CLEtBQUs2QixJQUFMLEdBQVUsVUFBU2xRLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxLQUFLd1osU0FBWDtBQUFxQixrQkFBTXpaLENBQU4sSUFBU0EsQ0FBQyxDQUFDbVEsU0FBRixFQUFUOztBQUF1QixlQUFJLElBQUlwUCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUNkLENBQUMsQ0FBQzBCLE1BQWhCLEVBQXVCWixDQUFDLEVBQXhCLEVBQTJCO0FBQUMsZ0JBQUlNLENBQUMsR0FBQ3BCLENBQUMsQ0FBQ2MsQ0FBRCxDQUFELENBQUtvUixPQUFYO0FBQUEsZ0JBQW1CdFEsQ0FBQyxHQUFDNUIsQ0FBQyxDQUFDYyxDQUFELENBQUQsQ0FBSzhRLE1BQTFCOztBQUFpQyxvQkFBT3hRLENBQVA7QUFBVSxtQkFBSSxHQUFKO0FBQVEsd0JBQU1yQixDQUFOLElBQVNBLENBQUMsQ0FBQ2tSLE1BQUYsQ0FBU3JQLENBQUMsQ0FBQyxDQUFELENBQVYsRUFBY0EsQ0FBQyxDQUFDLENBQUQsQ0FBZixDQUFUO0FBQTZCOztBQUFNLG1CQUFJLEdBQUo7QUFBUSx3QkFBTTdCLENBQU4sSUFBU0EsQ0FBQyxDQUFDaVIsTUFBRixDQUFTcFAsQ0FBQyxDQUFDLENBQUQsQ0FBVixFQUFjQSxDQUFDLENBQUMsQ0FBRCxDQUFmLENBQVQ7QUFBNkI7O0FBQU0sbUJBQUksR0FBSjtBQUFRLHdCQUFNN0IsQ0FBTixJQUFTQSxDQUFDLENBQUNzUixhQUFGLENBQWdCelAsQ0FBQyxDQUFDLENBQUQsQ0FBakIsRUFBcUJBLENBQUMsQ0FBQyxDQUFELENBQXRCLEVBQTBCQSxDQUFDLENBQUMsQ0FBRCxDQUEzQixFQUErQkEsQ0FBQyxDQUFDLENBQUQsQ0FBaEMsRUFBb0NBLENBQUMsQ0FBQyxDQUFELENBQXJDLEVBQXlDQSxDQUFDLENBQUMsQ0FBRCxDQUExQyxDQUFUO0FBQXdEOztBQUFNLG1CQUFJLEdBQUo7QUFBUSx3QkFBTTdCLENBQU4sSUFBU0EsQ0FBQyxDQUFDd1QsZ0JBQUYsQ0FBbUIzUixDQUFDLENBQUMsQ0FBRCxDQUFwQixFQUF3QkEsQ0FBQyxDQUFDLENBQUQsQ0FBekIsRUFBNkJBLENBQUMsQ0FBQyxDQUFELENBQTlCLEVBQWtDQSxDQUFDLENBQUMsQ0FBRCxDQUFuQyxDQUFUO0FBQWlEOztBQUFNLG1CQUFJLEdBQUo7QUFBUSxvQkFBSU8sQ0FBQyxHQUFDUCxDQUFDLENBQUMsQ0FBRCxDQUFQO0FBQUEsb0JBQVdTLENBQUMsR0FBQ1QsQ0FBQyxDQUFDLENBQUQsQ0FBZDtBQUFBLG9CQUFrQlUsQ0FBQyxHQUFDVixDQUFDLENBQUMsQ0FBRCxDQUFyQjtBQUFBLG9CQUF5QlcsQ0FBQyxHQUFDWCxDQUFDLENBQUMsQ0FBRCxDQUE1QjtBQUFBLG9CQUFnQ3BCLENBQUMsR0FBQ29CLENBQUMsQ0FBQyxDQUFELENBQW5DO0FBQUEsb0JBQXVDa0IsQ0FBQyxHQUFDbEIsQ0FBQyxDQUFDLENBQUQsQ0FBMUM7QUFBQSxvQkFBOENqQixDQUFDLEdBQUNpQixDQUFDLENBQUMsQ0FBRCxDQUFqRDtBQUFBLG9CQUFxRFYsQ0FBQyxHQUFDVSxDQUFDLENBQUMsQ0FBRCxDQUF4RDtBQUFBLG9CQUE0RFQsQ0FBQyxHQUFDb0IsQ0FBQyxHQUFDRCxDQUFGLEdBQUlBLENBQUosR0FBTUMsQ0FBcEU7QUFBQSxvQkFBc0UxQixDQUFDLEdBQUMwQixDQUFDLEdBQUNELENBQUYsR0FBSSxDQUFKLEdBQU1BLENBQUMsR0FBQ0MsQ0FBaEY7QUFBQSxvQkFBa0ZsQixDQUFDLEdBQUNrQixDQUFDLEdBQUNELENBQUYsR0FBSUMsQ0FBQyxHQUFDRCxDQUFOLEdBQVEsQ0FBNUY7QUFBOEYsd0JBQU12QyxDQUFOLEtBQVVBLENBQUMsQ0FBQ2lNLFNBQUYsQ0FBWTdKLENBQVosRUFBY0UsQ0FBZCxHQUFpQnRDLENBQUMsQ0FBQ3FNLE1BQUYsQ0FBU3pMLENBQVQsQ0FBakIsRUFBNkJaLENBQUMsQ0FBQzJNLEtBQUYsQ0FBUTdMLENBQVIsRUFBVVEsQ0FBVixDQUE3QixFQUEwQ3RCLENBQUMsQ0FBQ3dSLEdBQUYsQ0FBTSxDQUFOLEVBQVEsQ0FBUixFQUFVcFEsQ0FBVixFQUFZWCxDQUFaLEVBQWNBLENBQUMsR0FBQ3NDLENBQWhCLEVBQWtCLElBQUU1QixDQUFwQixDQUExQyxFQUFpRW5CLENBQUMsQ0FBQzJNLEtBQUYsQ0FBUSxJQUFFN0wsQ0FBVixFQUFZLElBQUVRLENBQWQsQ0FBakUsRUFBa0Z0QixDQUFDLENBQUNxTSxNQUFGLENBQVMsQ0FBQ3pMLENBQVYsQ0FBbEYsRUFBK0ZaLENBQUMsQ0FBQ2lNLFNBQUYsQ0FBWSxDQUFDN0osQ0FBYixFQUFlLENBQUNFLENBQWhCLENBQXpHO0FBQTZIOztBQUFNLG1CQUFJLEdBQUo7QUFBUSx3QkFBTXRDLENBQU4sSUFBU0EsQ0FBQyxDQUFDbVIsU0FBRixFQUFUO0FBQXRkO0FBQThlO0FBQUMsU0FBM3ZDLEVBQTR2QyxLQUFLc0gsT0FBTCxHQUFhLFlBQVU7QUFBQyxpQkFBTyxLQUFLM0osSUFBWjtBQUFpQixTQUFyeUMsRUFBc3lDLEtBQUs1RSxRQUFMLEdBQWMsWUFBVTtBQUFDLGlCQUFPLEtBQUs2RCxNQUFMLENBQVlELEtBQVosQ0FBa0IsV0FBbEIsRUFBK0JqRyxpQkFBL0IsQ0FBaUQxRCxDQUFDLENBQUN3RixJQUFGLENBQU9JLEtBQVAsQ0FBYTVGLENBQUMsQ0FBQ2UsR0FBRixDQUFNOEUsSUFBbkIsRUFBeUJFLFFBQTFFLENBQVA7QUFBMkYsU0FBMTVDLEVBQTI1QyxLQUFLbU8sV0FBTCxHQUFpQixVQUFTclksQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxjQUFJYyxDQUFDLEdBQUMsS0FBS2dOLE1BQUwsQ0FBWUQsS0FBWixDQUFrQixhQUFsQixFQUFpQzVGLGFBQWpDLEVBQU47O0FBQXVELGNBQUdqSSxDQUFDLEdBQUNBLENBQUMsSUFBRSxLQUFLd1ksT0FBTCxFQUFMLEVBQW9CLFFBQU0xWCxDQUE3QixFQUErQjtBQUFDLGdCQUFJTSxDQUFDLEdBQUMsS0FBSzZJLFFBQUwsRUFBTjtBQUFBLGdCQUFzQnJJLENBQUMsR0FBQyxDQUF4QjtBQUEwQmQsYUFBQyxDQUFDaVcsS0FBRixLQUFVL1csQ0FBQyxHQUFDQSxDQUFDLENBQUNzSyxLQUFGLENBQVEsRUFBUixFQUFZb08sT0FBWixHQUFzQnpVLElBQXRCLENBQTJCLEVBQTNCLENBQVo7O0FBQTRDLGlCQUFJLElBQUk5QixDQUFDLEdBQUMrQixDQUFDLENBQUNxRyxhQUFGLENBQWdCLEtBQUt1RCxNQUFMLENBQVl0RixTQUFaLENBQXNCLElBQXRCLEVBQTRCbEIsS0FBNUMsQ0FBTixFQUF5RGpGLENBQUMsR0FBQyxDQUEvRCxFQUFpRUEsQ0FBQyxHQUFDckMsQ0FBQyxDQUFDMEIsTUFBckUsRUFBNEVXLENBQUMsRUFBN0UsRUFBZ0Y7QUFBQ1QsZUFBQyxJQUFFLENBQUMsS0FBSzBXLFFBQUwsQ0FBY3hYLENBQWQsRUFBZ0JkLENBQWhCLEVBQWtCcUMsQ0FBbEIsRUFBcUJ5VSxTQUFyQixJQUFnQ2hXLENBQUMsQ0FBQ2dXLFNBQW5DLElBQThDMVYsQ0FBOUMsR0FBZ0ROLENBQUMsQ0FBQ21XLFFBQUYsQ0FBV1EsVUFBOUQsRUFBeUUsS0FBSyxDQUFMLEtBQVN0VixDQUFDLENBQUNFLENBQUQsQ0FBVixJQUFla0osS0FBSyxDQUFDcEosQ0FBQyxDQUFDRSxDQUFELENBQUYsQ0FBcEIsS0FBNkJULENBQUMsSUFBRU8sQ0FBQyxDQUFDRSxDQUFELENBQWpDLENBQXpFO0FBQStHOztBQUFBLG1CQUFPVCxDQUFQO0FBQVM7O0FBQUEsY0FBSVUsQ0FBQyxHQUFDNEIsQ0FBQyxDQUFDK0IsY0FBRixDQUFpQmpHLENBQWpCLENBQU47QUFBMEIsY0FBRyxDQUFDRCxDQUFDLENBQUNxWSxXQUFOLEVBQWtCLE9BQU8sS0FBRzlWLENBQUMsQ0FBQ1osTUFBWjtBQUFtQjNCLFdBQUMsQ0FBQ2lPLElBQUYsSUFBUyxLQUFLQyxVQUFMLENBQWdCbE8sQ0FBaEIsQ0FBVDtBQUE0QixjQUFJd0MsQ0FBQyxHQUFDeEMsQ0FBQyxDQUFDcVksV0FBRixDQUFjOVYsQ0FBZCxFQUFpQnRCLEtBQXZCO0FBQTZCLGlCQUFPakIsQ0FBQyxDQUFDcU8sT0FBRixJQUFZN0wsQ0FBbkI7QUFBcUIsU0FBNzZELEVBQTg2RCxLQUFLNFcsV0FBTCxHQUFpQixVQUFTOVcsQ0FBVCxFQUFXO0FBQUMsY0FBRyxDQUFDLEtBQUsvQixjQUFMLENBQW9CLFdBQXBCLENBQUosRUFBcUM7QUFBQyxnQkFBSWdDLENBQUMsR0FBQyxJQUFOO0FBQUEsZ0JBQVd2QyxDQUFDLEdBQUMsS0FBS3lZLE9BQUwsR0FBZWxPLEtBQWYsQ0FBcUIsRUFBckIsQ0FBYjtBQUFBLGdCQUFzQy9ILENBQUMsR0FBQyxLQUFLaVcsT0FBTCxHQUFlbE8sS0FBZixDQUFxQixHQUFyQixFQUEwQjVJLE1BQTFCLEdBQWlDLENBQXpFO0FBQUEsZ0JBQTJFMUIsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDcUcsYUFBRixDQUFnQixLQUFLdUQsTUFBTCxDQUFZdEYsU0FBWixDQUFzQixJQUF0QixFQUE0QmIsY0FBNUIsQ0FBMkMsR0FBM0MsQ0FBaEIsQ0FBN0U7QUFBQSxnQkFBOEk3RyxDQUFDLEdBQUMsQ0FBaEo7QUFBQSxnQkFBa0pOLENBQUMsR0FBQyxLQUFLc04sTUFBTCxDQUFZRCxLQUFaLENBQWtCLGFBQWxCLEVBQWlDbEcsY0FBakMsQ0FBZ0QsT0FBaEQsQ0FBcEo7QUFBQSxnQkFBNk12RyxDQUFDLEdBQUMsS0FBS3lNLEtBQUwsQ0FBVyxnQkFBWCxDQUEvTTtBQUFBLGdCQUE0T2pNLENBQUMsR0FBQyxLQUFLa00sTUFBTCxDQUFZRCxLQUFaLENBQWtCLGdCQUFsQixDQUE5TztBQUFrUnpNLGFBQUMsQ0FBQ29HLFFBQUYsTUFBYyxjQUFZcEcsQ0FBQyxDQUFDbUcsUUFBRixFQUExQixHQUF1Q25HLENBQUMsQ0FBQ29HLFFBQUYsTUFBYyxjQUFZcEcsQ0FBQyxDQUFDbUcsUUFBRixFQUExQixJQUF3QyxZQUFVbkcsQ0FBQyxDQUFDbUcsUUFBRixFQUFsRCxLQUFpRXpHLENBQUMsR0FBQ00sQ0FBQyxDQUFDMEgsUUFBRixFQUFuRSxDQUF2QyxHQUF3SGhJLENBQUMsR0FBQ2MsQ0FBQyxDQUFDa0gsUUFBRixFQUExSCxFQUF1SSxLQUFLMlEsa0JBQUwsR0FBd0IsRUFBL0o7O0FBQWtLLGlCQUFJLElBQUl0WCxDQUFDLEdBQUMsQ0FBVixFQUFZQSxDQUFDLEdBQUMsS0FBS3FXLE9BQUwsR0FBZTlXLE1BQTdCLEVBQW9DUyxDQUFDLEVBQXJDLEVBQXdDLEtBQUtzWCxrQkFBTCxDQUF3Qm5VLElBQXhCLENBQTZCLEtBQUssQ0FBTCxLQUFTdEYsQ0FBQyxDQUFDbUMsQ0FBRCxDQUFWLEdBQWNuQyxDQUFDLENBQUNtQyxDQUFELENBQWYsR0FBbUJyQixDQUFoRDs7QUFBbUQsZ0JBQUlnQyxDQUFDLEdBQUMsS0FBSzJXLGtCQUFMLENBQXdCQyxNQUF4QixDQUErQixVQUFTM1osQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxxQkFBT0QsQ0FBQyxHQUFDQyxDQUFGLElBQUssQ0FBWjtBQUFjLGFBQTNELEVBQTRELENBQTVELENBQU47QUFBcUUsaUJBQUsyWixTQUFMLEdBQWUsS0FBS3ZCLFdBQUwsQ0FBaUIvVixDQUFqQixDQUFmLEVBQW1DLEtBQUt1WCxVQUFMLEdBQWdCLEtBQUszUCxRQUFMLEVBQW5EO0FBQW1FLGdCQUFJdEosQ0FBQyxHQUFDZ0YsSUFBSSxDQUFDMkgsR0FBTCxDQUFTLEtBQUtxTSxTQUFMLEdBQWU3VyxDQUF4QixFQUEwQixDQUExQixDQUFOO0FBQW1DLGlCQUFLc1csU0FBTCxHQUFlLEVBQWY7QUFBa0IsZ0JBQUlsWSxDQUFDLEdBQUMsS0FBSzJZLGFBQUwsRUFBTjtBQUFBLGdCQUEyQjFZLENBQUMsR0FBQyxLQUFLME0sS0FBTCxDQUFXLGFBQVgsRUFBMEJqRyxpQkFBMUIsQ0FBNEMsQ0FBNUMsSUFBK0MxRyxDQUE1RTtBQUFBLGdCQUE4RUwsQ0FBQyxHQUFDLENBQWhGO0FBQWtGLHlCQUFXTCxDQUFYLElBQWMsYUFBV0EsQ0FBekIsS0FBNkJLLENBQUMsR0FBQyxDQUFDRixDQUFELEdBQUcsQ0FBbEMsR0FBcUMsVUFBUUgsQ0FBUixJQUFXLFlBQVVBLENBQXJCLEtBQXlCSyxDQUFDLEdBQUMsQ0FBQ0YsQ0FBNUIsQ0FBckMsRUFBb0VFLENBQUMsSUFBRU0sQ0FBdkU7O0FBQXlFLGdCQUFJRSxDQUFDLEdBQUMsVUFBU3RCLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsa0JBQUljLENBQUo7QUFBQSxrQkFBTU0sQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDOFYsV0FBRixDQUFjL1YsQ0FBZCxFQUFnQnRDLENBQWhCLENBQVI7QUFBMkIsc0JBQU1BLENBQU4sSUFBUyxjQUFZUyxDQUFyQixJQUF3QkcsQ0FBQyxHQUFDTyxDQUExQixLQUE4QkUsQ0FBQyxJQUFFLENBQUNGLENBQUMsR0FBQ1AsQ0FBSCxJQUFNNEIsQ0FBdkMsR0FBMEMsQ0FBQyxDQUFELEdBQUd2QyxDQUFILEtBQU9hLENBQUMsS0FBR0MsQ0FBQyxHQUFDLENBQUNBLENBQUMsR0FBQ2QsQ0FBSCxLQUFPLENBQVQsRUFBV3NDLENBQUMsQ0FBQ21YLGtCQUFGLENBQXFCM1ksQ0FBckIsS0FBeUIsQ0FBdkMsQ0FBUixDQUExQztBQUE2RixrQkFBSWMsQ0FBQyxHQUFDVSxDQUFDLENBQUNzWCxVQUFGLEdBQWEsRUFBbkI7QUFBQSxrQkFBc0J6WCxDQUFDLEdBQUM7QUFBQ2tYLGtCQUFFLEVBQUMvVyxDQUFDLENBQUN3WCx5QkFBRixDQUE0QmpaLENBQTVCLEVBQThCZSxDQUE5QixDQUFKO0FBQXFDMFgsa0JBQUUsRUFBQ2hYLENBQUMsQ0FBQ3dYLHlCQUFGLENBQTRCalosQ0FBQyxHQUFDTyxDQUE5QixFQUFnQ1EsQ0FBaEM7QUFBeEMsZUFBeEI7QUFBb0cscUJBQU9mLENBQUMsSUFBRU8sQ0FBSCxFQUFLZSxDQUFaO0FBQWMsYUFBOVA7O0FBQStQLGlCQUFJQSxDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUNwQyxDQUFDLENBQUMyQixNQUFaLEVBQW1CUyxDQUFDLEVBQXBCLEVBQXVCO0FBQUMsa0JBQUkvQixDQUFDLEdBQUNpQixDQUFDLENBQUN0QixDQUFDLENBQUNvQyxDQUFELENBQUYsRUFBTUEsQ0FBTixDQUFQOztBQUFnQixrQkFBRyxLQUFLLENBQUwsS0FBUy9CLENBQUMsQ0FBQ2laLEVBQVgsSUFBZSxLQUFLLENBQUwsS0FBU2paLENBQUMsQ0FBQ2taLEVBQTdCLEVBQWdDO0FBQUMsb0JBQUlqWixDQUFDLEdBQUNpQyxDQUFDLENBQUN5WCxhQUFGLENBQWdCM1osQ0FBQyxDQUFDaVosRUFBRixDQUFLNU8sQ0FBckIsRUFBdUJySyxDQUFDLENBQUNpWixFQUFGLENBQUtqWixDQUE1QixFQUE4QkEsQ0FBQyxDQUFDa1osRUFBRixDQUFLN08sQ0FBbkMsRUFBcUNySyxDQUFDLENBQUNrWixFQUFGLENBQUtsWixDQUExQyxDQUFOO0FBQUEsb0JBQW1EMkgsQ0FBQyxHQUFDekYsQ0FBQyxDQUFDMFgsY0FBRixDQUFpQixJQUFFM1osQ0FBQyxHQUFDLENBQXJCLEVBQXVCRCxDQUFDLENBQUNpWixFQUFGLENBQUs1TyxDQUE1QixFQUE4QnJLLENBQUMsQ0FBQ2laLEVBQUYsQ0FBS2paLENBQW5DLEVBQXFDQSxDQUFDLENBQUNrWixFQUFGLENBQUs3TyxDQUExQyxFQUE0Q3JLLENBQUMsQ0FBQ2taLEVBQUYsQ0FBS2xaLENBQWpELENBQXJEO0FBQUEsb0JBQXlHcUssQ0FBQyxHQUFDOUUsSUFBSSxDQUFDZ0YsS0FBTCxDQUFXdkssQ0FBQyxDQUFDa1osRUFBRixDQUFLbFosQ0FBTCxHQUFPQSxDQUFDLENBQUNpWixFQUFGLENBQUtqWixDQUF2QixFQUF5QkEsQ0FBQyxDQUFDa1osRUFBRixDQUFLN08sQ0FBTCxHQUFPckssQ0FBQyxDQUFDaVosRUFBRixDQUFLNU8sQ0FBckMsQ0FBM0c7QUFBbUoscUJBQUsyTyxTQUFMLENBQWU5VCxJQUFmLENBQW9CO0FBQUMyVSw0QkFBVSxFQUFDbFMsQ0FBQyxDQUFDMEMsQ0FBZDtBQUFnQnlQLDRCQUFVLEVBQUNuUyxDQUFDLENBQUMzSCxDQUE3QjtBQUErQnlPLHNCQUFJLEVBQUM5TyxDQUFDLENBQUNvQyxDQUFELENBQXJDO0FBQXlDb1gsMEJBQVEsRUFBQzlPLENBQWxEO0FBQW9ENE8sb0JBQUUsRUFBQ2paLENBQUMsQ0FBQ2laLEVBQXpEO0FBQTREQyxvQkFBRSxFQUFDbFosQ0FBQyxDQUFDa1o7QUFBakUsaUJBQXBCO0FBQTBGO0FBQUM7QUFBQztBQUFDLFNBQWg1RyxFQUFpNUcsS0FBS2EsYUFBTCxHQUFtQixVQUFTcGEsQ0FBVCxFQUFXO0FBQUMsY0FBRyxLQUFLcWEsVUFBTCxHQUFnQixLQUFLLENBQXJCLEVBQXVCLENBQUNyYSxDQUEzQixFQUE2QixPQUFNLEVBQU47QUFBUyxjQUFJQyxDQUFDLEdBQUMsRUFBTjtBQUFBLGNBQVNjLENBQUMsR0FBQ2YsQ0FBQyxDQUFDZ1MsVUFBYjs7QUFBd0IsZUFBSWpSLENBQUMsQ0FBQ21SLEtBQUYsRUFBSixFQUFjLENBQUNuUixDQUFDLENBQUMwUixLQUFGLEVBQWYsR0FBMEI7QUFBQyxnQkFBSXBSLENBQUMsR0FBQyxFQUFOO0FBQUEsZ0JBQVNRLENBQUMsR0FBQyxJQUFYO0FBQUEsZ0JBQWdCTyxDQUFDLEdBQUNyQixDQUFDLENBQUN3UixPQUFGLEdBQVV4UixDQUFDLENBQUN3UixPQUFGLENBQVU3SCxDQUFwQixHQUFzQixDQUF4QztBQUFBLGdCQUEwQ3BJLENBQUMsR0FBQ3ZCLENBQUMsQ0FBQ3dSLE9BQUYsR0FBVXhSLENBQUMsQ0FBQ3dSLE9BQUYsQ0FBVWxTLENBQXBCLEdBQXNCLENBQWxFO0FBQW9FVSxhQUFDLENBQUMrUixXQUFGO0FBQWdCLGdCQUFJdlEsQ0FBQyxHQUFDeEIsQ0FBQyxDQUFDb1IsT0FBRixDQUFVbUksV0FBVixFQUFOOztBQUE4QixvQkFBT3ZaLENBQUMsQ0FBQ29SLE9BQVQ7QUFBa0IsbUJBQUksR0FBSjtBQUFRLG1CQUFJLEdBQUo7QUFBUSxvQkFBSTNQLENBQUMsR0FBQ3pCLENBQUMsQ0FBQ21TLGlCQUFGLEVBQU47O0FBQTRCLHFCQUFJN1IsQ0FBQyxDQUFDa0UsSUFBRixDQUFPL0MsQ0FBQyxDQUFDa0ksQ0FBVCxFQUFXbEksQ0FBQyxDQUFDbkMsQ0FBYixHQUFnQlUsQ0FBQyxDQUFDc1IsS0FBRixHQUFRdFIsQ0FBQyxDQUFDd1IsT0FBOUIsRUFBc0MsQ0FBQ3hSLENBQUMsQ0FBQzJSLGNBQUYsRUFBdkMsR0FBMkQ7QUFBQ2xRLG1CQUFDLEdBQUN6QixDQUFDLENBQUNtUyxpQkFBRixFQUFGO0FBQXdCN1IsbUJBQUMsQ0FBQ2tFLElBQUYsQ0FBTy9DLENBQUMsQ0FBQ2tJLENBQVQsRUFBV2xJLENBQUMsQ0FBQ25DLENBQWIsR0FBZ0J3QixDQUFDLEdBQUMsR0FBbEI7QUFBc0I7O0FBQUE7O0FBQU0sbUJBQUksR0FBSjtBQUFRLG1CQUFJLEdBQUo7QUFBUSx1QkFBSyxDQUFDZCxDQUFDLENBQUMyUixjQUFGLEVBQU4sR0FBMEI7QUFBQ2xRLG1CQUFDLEdBQUN6QixDQUFDLENBQUNtUyxpQkFBRixFQUFGO0FBQXdCN1IsbUJBQUMsQ0FBQ2tFLElBQUYsQ0FBTy9DLENBQUMsQ0FBQ2tJLENBQVQsRUFBV2xJLENBQUMsQ0FBQ25DLENBQWI7QUFBZ0I7O0FBQUF3QixpQkFBQyxHQUFDLEdBQUY7QUFBTTs7QUFBTSxtQkFBSSxHQUFKO0FBQVEsbUJBQUksR0FBSjtBQUFRLHVCQUFLLENBQUNkLENBQUMsQ0FBQzJSLGNBQUYsRUFBTixHQUEwQjtBQUFDLHNCQUFJalMsQ0FBQyxHQUFDLElBQUkwRCxDQUFDLENBQUNzRyxLQUFOLENBQVksQ0FBQzFKLENBQUMsQ0FBQzRSLGlCQUFGLEtBQXNCNVIsQ0FBQyxDQUFDd1IsT0FBRixDQUFVN0gsQ0FBaEMsR0FBa0MsQ0FBbkMsSUFBc0MzSixDQUFDLENBQUM4UixTQUFGLEVBQWxELEVBQWdFOVIsQ0FBQyxDQUFDd1IsT0FBRixDQUFVbFMsQ0FBMUUsQ0FBTjtBQUFtRmdCLG1CQUFDLENBQUNrRSxJQUFGLENBQU85RSxDQUFDLENBQUNpSyxDQUFULEVBQVdqSyxDQUFDLENBQUNKLENBQWIsR0FBZ0JVLENBQUMsQ0FBQ3dSLE9BQUYsR0FBVTlSLENBQTFCO0FBQTRCOztBQUFBb0IsaUJBQUMsR0FBQyxHQUFGO0FBQU07O0FBQU0sbUJBQUksR0FBSjtBQUFRLG1CQUFJLEdBQUo7QUFBUSx1QkFBSyxDQUFDZCxDQUFDLENBQUMyUixjQUFGLEVBQU4sR0FBMEI7QUFBQ2pTLG1CQUFDLEdBQUMsSUFBSTBELENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWTFKLENBQUMsQ0FBQ3dSLE9BQUYsQ0FBVTdILENBQXRCLEVBQXdCLENBQUMzSixDQUFDLENBQUM0UixpQkFBRixLQUFzQjVSLENBQUMsQ0FBQ3dSLE9BQUYsQ0FBVWxTLENBQWhDLEdBQWtDLENBQW5DLElBQXNDVSxDQUFDLENBQUM4UixTQUFGLEVBQTlELENBQUY7QUFBK0V4UixtQkFBQyxDQUFDa0UsSUFBRixDQUFPOUUsQ0FBQyxDQUFDaUssQ0FBVCxFQUFXakssQ0FBQyxDQUFDSixDQUFiLEdBQWdCVSxDQUFDLENBQUN3UixPQUFGLEdBQVU5UixDQUExQjtBQUE0Qjs7QUFBQW9CLGlCQUFDLEdBQUMsR0FBRjtBQUFNOztBQUFNLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVEsdUJBQUssQ0FBQ2QsQ0FBQyxDQUFDMlIsY0FBRixFQUFOLEdBQTBCO0FBQUMsc0JBQUkzUCxDQUFDLEdBQUNoQyxDQUFDLENBQUNnUyxRQUFGLEVBQU47QUFBQSxzQkFBbUJuUyxDQUFDLEdBQUNHLENBQUMsQ0FBQ2tTLGlCQUFGLEVBQXJCO0FBQUEsc0JBQTJDOVIsQ0FBQyxHQUFDSixDQUFDLENBQUNtUyxpQkFBRixFQUE3QztBQUFtRTdSLG1CQUFDLENBQUNrRSxJQUFGLENBQU94QyxDQUFDLENBQUMySCxDQUFULEVBQVczSCxDQUFDLENBQUMxQyxDQUFiLEVBQWVPLENBQUMsQ0FBQzhKLENBQWpCLEVBQW1COUosQ0FBQyxDQUFDUCxDQUFyQixFQUF1QmMsQ0FBQyxDQUFDdUosQ0FBekIsRUFBMkJ2SixDQUFDLENBQUNkLENBQTdCO0FBQWdDOztBQUFBOztBQUFNLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVEsdUJBQUssQ0FBQ1UsQ0FBQyxDQUFDMlIsY0FBRixFQUFOLEdBQTBCO0FBQUMzUCxtQkFBQyxHQUFDaEMsQ0FBQyxDQUFDb1Msd0JBQUYsRUFBRixFQUErQnZTLENBQUMsR0FBQ0csQ0FBQyxDQUFDa1MsaUJBQUYsRUFBakMsRUFBdUQ5UixDQUFDLEdBQUNKLENBQUMsQ0FBQ21TLGlCQUFGLEVBQXpEO0FBQStFN1IsbUJBQUMsQ0FBQ2tFLElBQUYsQ0FBT3hDLENBQUMsQ0FBQzJILENBQVQsRUFBVzNILENBQUMsQ0FBQzFDLENBQWIsRUFBZU8sQ0FBQyxDQUFDOEosQ0FBakIsRUFBbUI5SixDQUFDLENBQUNQLENBQXJCLEVBQXVCYyxDQUFDLENBQUN1SixDQUF6QixFQUEyQnZKLENBQUMsQ0FBQ2QsQ0FBN0I7QUFBZ0M7O0FBQUF3QixpQkFBQyxHQUFDLEdBQUY7QUFBTTs7QUFBTSxtQkFBSSxHQUFKO0FBQVEsbUJBQUksR0FBSjtBQUFRLHVCQUFLLENBQUNkLENBQUMsQ0FBQzJSLGNBQUYsRUFBTixHQUEwQjtBQUFDOVIsbUJBQUMsR0FBQ0csQ0FBQyxDQUFDa1MsaUJBQUYsRUFBRixFQUF3QjlSLENBQUMsR0FBQ0osQ0FBQyxDQUFDbVMsaUJBQUYsRUFBMUI7QUFBZ0Q3UixtQkFBQyxDQUFDa0UsSUFBRixDQUFPM0UsQ0FBQyxDQUFDOEosQ0FBVCxFQUFXOUosQ0FBQyxDQUFDUCxDQUFiLEVBQWVjLENBQUMsQ0FBQ3VKLENBQWpCLEVBQW1CdkosQ0FBQyxDQUFDZCxDQUFyQjtBQUF3Qjs7QUFBQTs7QUFBTSxtQkFBSSxHQUFKO0FBQVEsbUJBQUksR0FBSjtBQUFRLHVCQUFLLENBQUNVLENBQUMsQ0FBQzJSLGNBQUYsRUFBTixHQUEwQjtBQUFDOVIsbUJBQUMsR0FBQ0csQ0FBQyxDQUFDb1Msd0JBQUYsRUFBRjtBQUErQnBTLG1CQUFDLENBQUN1UixPQUFGLEdBQVUxUixDQUFWO0FBQVlPLG1CQUFDLEdBQUNKLENBQUMsQ0FBQ21TLGlCQUFGLEVBQUY7QUFBd0I3UixtQkFBQyxDQUFDa0UsSUFBRixDQUFPM0UsQ0FBQyxDQUFDOEosQ0FBVCxFQUFXOUosQ0FBQyxDQUFDUCxDQUFiLEVBQWVjLENBQUMsQ0FBQ3VKLENBQWpCLEVBQW1CdkosQ0FBQyxDQUFDZCxDQUFyQjtBQUF3Qjs7QUFBQXdCLGlCQUFDLEdBQUMsR0FBRjtBQUFNOztBQUFNLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVEsdUJBQUssQ0FBQ2QsQ0FBQyxDQUFDMlIsY0FBRixFQUFOLEdBQTBCO0FBQUMsc0JBQUl0UixDQUFDLEdBQUNMLENBQUMsQ0FBQ3dSLE9BQVI7QUFBQSxzQkFBZ0J6UixDQUFDLEdBQUNDLENBQUMsQ0FBQzhSLFNBQUYsRUFBbEI7QUFBQSxzQkFBZ0N2UixDQUFDLEdBQUNQLENBQUMsQ0FBQzhSLFNBQUYsRUFBbEM7QUFBQSxzQkFBZ0R4UyxDQUFDLEdBQUNVLENBQUMsQ0FBQzhSLFNBQUYsTUFBZWpOLElBQUksQ0FBQ3NELEVBQUwsR0FBUSxHQUF2QixDQUFsRDtBQUFBLHNCQUE4RTVJLENBQUMsR0FBQ1MsQ0FBQyxDQUFDOFIsU0FBRixFQUFoRjtBQUFBLHNCQUE4RjdLLENBQUMsR0FBQ2pILENBQUMsQ0FBQzhSLFNBQUYsRUFBaEc7QUFBQSxzQkFBOEduSSxDQUFDLElBQUV2SixDQUFDLEdBQUNKLENBQUMsQ0FBQ21TLGlCQUFGLEVBQUYsRUFBd0IsSUFBSS9PLENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWTdFLElBQUksQ0FBQzZHLEdBQUwsQ0FBU3BNLENBQVQsS0FBYWUsQ0FBQyxDQUFDc0osQ0FBRixHQUFJdkosQ0FBQyxDQUFDdUosQ0FBbkIsSUFBc0IsQ0FBdEIsR0FBd0I5RSxJQUFJLENBQUM4RyxHQUFMLENBQVNyTSxDQUFULEtBQWFlLENBQUMsQ0FBQ2YsQ0FBRixHQUFJYyxDQUFDLENBQUNkLENBQW5CLElBQXNCLENBQTFELEVBQTRELENBQUN1RixJQUFJLENBQUM4RyxHQUFMLENBQVNyTSxDQUFULENBQUQsSUFBY2UsQ0FBQyxDQUFDc0osQ0FBRixHQUFJdkosQ0FBQyxDQUFDdUosQ0FBcEIsSUFBdUIsQ0FBdkIsR0FBeUI5RSxJQUFJLENBQUM2RyxHQUFMLENBQVNwTSxDQUFULEtBQWFlLENBQUMsQ0FBQ2YsQ0FBRixHQUFJYyxDQUFDLENBQUNkLENBQW5CLElBQXNCLENBQTNHLENBQTFCLENBQS9HO0FBQUEsc0JBQXdQNEgsQ0FBQyxHQUFDckMsSUFBSSxDQUFDRSxHQUFMLENBQVM0RSxDQUFDLENBQUNBLENBQVgsRUFBYSxDQUFiLElBQWdCOUUsSUFBSSxDQUFDRSxHQUFMLENBQVNoRixDQUFULEVBQVcsQ0FBWCxDQUFoQixHQUE4QjhFLElBQUksQ0FBQ0UsR0FBTCxDQUFTNEUsQ0FBQyxDQUFDckssQ0FBWCxFQUFhLENBQWIsSUFBZ0J1RixJQUFJLENBQUNFLEdBQUwsQ0FBU3hFLENBQVQsRUFBVyxDQUFYLENBQXhTO0FBQXNULHNCQUFFMkcsQ0FBRixLQUFNbkgsQ0FBQyxJQUFFOEUsSUFBSSxDQUFDQyxJQUFMLENBQVVvQyxDQUFWLENBQUgsRUFBZ0IzRyxDQUFDLElBQUVzRSxJQUFJLENBQUNDLElBQUwsQ0FBVW9DLENBQVYsQ0FBekI7QUFBdUMsc0JBQUlsRSxDQUFDLEdBQUMsQ0FBQ3pELENBQUMsSUFBRTBILENBQUgsR0FBSyxDQUFDLENBQU4sR0FBUSxDQUFULElBQVlwQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxDQUFDRCxJQUFJLENBQUNFLEdBQUwsQ0FBU2hGLENBQVQsRUFBVyxDQUFYLElBQWM4RSxJQUFJLENBQUNFLEdBQUwsQ0FBU3hFLENBQVQsRUFBVyxDQUFYLENBQWQsR0FBNEJzRSxJQUFJLENBQUNFLEdBQUwsQ0FBU2hGLENBQVQsRUFBVyxDQUFYLElBQWM4RSxJQUFJLENBQUNFLEdBQUwsQ0FBUzRFLENBQUMsQ0FBQ3JLLENBQVgsRUFBYSxDQUFiLENBQTFDLEdBQTBEdUYsSUFBSSxDQUFDRSxHQUFMLENBQVN4RSxDQUFULEVBQVcsQ0FBWCxJQUFjc0UsSUFBSSxDQUFDRSxHQUFMLENBQVM0RSxDQUFDLENBQUNBLENBQVgsRUFBYSxDQUFiLENBQXpFLEtBQTJGOUUsSUFBSSxDQUFDRSxHQUFMLENBQVNoRixDQUFULEVBQVcsQ0FBWCxJQUFjOEUsSUFBSSxDQUFDRSxHQUFMLENBQVM0RSxDQUFDLENBQUNySyxDQUFYLEVBQWEsQ0FBYixDQUFkLEdBQThCdUYsSUFBSSxDQUFDRSxHQUFMLENBQVN4RSxDQUFULEVBQVcsQ0FBWCxJQUFjc0UsSUFBSSxDQUFDRSxHQUFMLENBQVM0RSxDQUFDLENBQUNBLENBQVgsRUFBYSxDQUFiLENBQXZJLENBQVYsQ0FBbEI7QUFBcUxjLHVCQUFLLENBQUN6SCxDQUFELENBQUwsS0FBV0EsQ0FBQyxHQUFDLENBQWI7O0FBQWdCLHNCQUFJMFAsQ0FBQyxHQUFDLElBQUl0UCxDQUFDLENBQUNzRyxLQUFOLENBQVkxRyxDQUFDLEdBQUNqRCxDQUFGLEdBQUk0SixDQUFDLENBQUNySyxDQUFOLEdBQVFpQixDQUFwQixFQUFzQnlDLENBQUMsR0FBQyxDQUFDekMsQ0FBSCxHQUFLb0osQ0FBQyxDQUFDQSxDQUFQLEdBQVM1SixDQUEvQixDQUFOO0FBQUEsc0JBQXdDNlMsQ0FBQyxHQUFDLElBQUl4UCxDQUFDLENBQUNzRyxLQUFOLENBQVksQ0FBQ3JKLENBQUMsQ0FBQ3NKLENBQUYsR0FBSXZKLENBQUMsQ0FBQ3VKLENBQVAsSUFBVSxDQUFWLEdBQVk5RSxJQUFJLENBQUM2RyxHQUFMLENBQVNwTSxDQUFULElBQVlvVCxDQUFDLENBQUMvSSxDQUExQixHQUE0QjlFLElBQUksQ0FBQzhHLEdBQUwsQ0FBU3JNLENBQVQsSUFBWW9ULENBQUMsQ0FBQ3BULENBQXRELEVBQXdELENBQUNlLENBQUMsQ0FBQ2YsQ0FBRixHQUFJYyxDQUFDLENBQUNkLENBQVAsSUFBVSxDQUFWLEdBQVl1RixJQUFJLENBQUM4RyxHQUFMLENBQVNyTSxDQUFULElBQVlvVCxDQUFDLENBQUMvSSxDQUExQixHQUE0QjlFLElBQUksQ0FBQzZHLEdBQUwsQ0FBU3BNLENBQVQsSUFBWW9ULENBQUMsQ0FBQ3BULENBQWxHLENBQTFDO0FBQUEsc0JBQStJdVQsQ0FBQyxHQUFDLFVBQVM1VCxDQUFULEVBQVc7QUFBQywyQkFBTzRGLElBQUksQ0FBQ0MsSUFBTCxDQUFVRCxJQUFJLENBQUNFLEdBQUwsQ0FBUzlGLENBQUMsQ0FBQyxDQUFELENBQVYsRUFBYyxDQUFkLElBQWlCNEYsSUFBSSxDQUFDRSxHQUFMLENBQVM5RixDQUFDLENBQUMsQ0FBRCxDQUFWLEVBQWMsQ0FBZCxDQUEzQixDQUFQO0FBQW9ELG1CQUFqTjtBQUFBLHNCQUFrTjZULENBQUMsR0FBQyxVQUFTN1QsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQywyQkFBTSxDQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtDLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQyxDQUFDLENBQUMsQ0FBRCxDQUFqQixLQUF1QjJULENBQUMsQ0FBQzVULENBQUQsQ0FBRCxHQUFLNFQsQ0FBQyxDQUFDM1QsQ0FBRCxDQUE3QixDQUFOO0FBQXdDLG1CQUExUTtBQUFBLHNCQUEyUTZULENBQUMsR0FBQyxVQUFTOVQsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQywyQkFBTSxDQUFDRCxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtDLENBQUMsQ0FBQyxDQUFELENBQU4sR0FBVUQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLQyxDQUFDLENBQUMsQ0FBRCxDQUFoQixHQUFvQixDQUFDLENBQXJCLEdBQXVCLENBQXhCLElBQTJCMkYsSUFBSSxDQUFDOE4sSUFBTCxDQUFVRyxDQUFDLENBQUM3VCxDQUFELEVBQUdDLENBQUgsQ0FBWCxDQUFqQztBQUFtRCxtQkFBOVU7QUFBQSxzQkFBK1U4VCxDQUFDLEdBQUNELENBQUMsQ0FBQyxDQUFDLENBQUQsRUFBRyxDQUFILENBQUQsRUFBTyxDQUFDLENBQUNwSixDQUFDLENBQUNBLENBQUYsR0FBSStJLENBQUMsQ0FBQy9JLENBQVAsSUFBVTVKLENBQVgsRUFBYSxDQUFDNEosQ0FBQyxDQUFDckssQ0FBRixHQUFJb1QsQ0FBQyxDQUFDcFQsQ0FBUCxJQUFVaUIsQ0FBdkIsQ0FBUCxDQUFsVjtBQUFBLHNCQUFvWDBTLENBQUMsR0FBQyxDQUFDLENBQUN0SixDQUFDLENBQUNBLENBQUYsR0FBSStJLENBQUMsQ0FBQy9JLENBQVAsSUFBVTVKLENBQVgsRUFBYSxDQUFDNEosQ0FBQyxDQUFDckssQ0FBRixHQUFJb1QsQ0FBQyxDQUFDcFQsQ0FBUCxJQUFVaUIsQ0FBdkIsQ0FBdFg7QUFBQSxzQkFBZ1oyUyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUN2SixDQUFDLENBQUNBLENBQUgsR0FBSytJLENBQUMsQ0FBQy9JLENBQVIsSUFBVzVKLENBQVosRUFBYyxDQUFDLENBQUM0SixDQUFDLENBQUNySyxDQUFILEdBQUtvVCxDQUFDLENBQUNwVCxDQUFSLElBQVdpQixDQUF6QixDQUFsWjtBQUFBLHNCQUE4YTRTLENBQUMsR0FBQ0osQ0FBQyxDQUFDRSxDQUFELEVBQUdDLENBQUgsQ0FBamI7O0FBQXViSixtQkFBQyxDQUFDRyxDQUFELEVBQUdDLENBQUgsQ0FBRCxJQUFRLENBQUMsQ0FBVCxLQUFhQyxDQUFDLEdBQUN0TyxJQUFJLENBQUNzRCxFQUFwQixHQUF3QixLQUFHMkssQ0FBQyxDQUFDRyxDQUFELEVBQUdDLENBQUgsQ0FBSixLQUFZQyxDQUFDLEdBQUMsQ0FBZCxDQUF4QixFQUF5QyxNQUFJbE0sQ0FBSixJQUFPLElBQUVrTSxDQUFULEtBQWFBLENBQUMsSUFBRSxJQUFFdE8sSUFBSSxDQUFDc0QsRUFBdkIsQ0FBekMsRUFBb0UsTUFBSWxCLENBQUosSUFBT2tNLENBQUMsR0FBQyxDQUFULEtBQWFBLENBQUMsSUFBRSxJQUFFdE8sSUFBSSxDQUFDc0QsRUFBdkIsQ0FBcEUsRUFBK0Y3SCxDQUFDLEdBQUMsQ0FBQ3NTLENBQUMsQ0FBQ2pKLENBQUgsRUFBS2lKLENBQUMsQ0FBQ3RULENBQVAsRUFBU1MsQ0FBVCxFQUFXUSxDQUFYLEVBQWF5UyxDQUFiLEVBQWVHLENBQWYsRUFBaUI3VCxDQUFqQixFQUFtQjJILENBQW5CLENBQWpHO0FBQXVIOztBQUFBOztBQUFNLG1CQUFJLEdBQUo7QUFBUSxtQkFBSSxHQUFKO0FBQVFqSCxpQkFBQyxDQUFDd1IsT0FBRixHQUFVeFIsQ0FBQyxDQUFDc1IsS0FBWjtBQUEzeUU7O0FBQTZ6RSxvQkFBTTlQLENBQU4sR0FBUXRDLENBQUMsQ0FBQ3NGLElBQUYsQ0FBTztBQUFDNE0scUJBQU8sRUFBQ3RRLENBQUMsSUFBRVUsQ0FBWjtBQUFjc1Asb0JBQU0sRUFBQ3hRLENBQXJCO0FBQXVCZ1IsbUJBQUssRUFBQztBQUFDM0gsaUJBQUMsRUFBQ3RJLENBQUg7QUFBSy9CLGlCQUFDLEVBQUNpQztBQUFQLGVBQTdCO0FBQXVDK1gsd0JBQVUsRUFBQyxLQUFLRSxVQUFMLENBQWdCblksQ0FBaEIsRUFBa0JFLENBQWxCLEVBQW9CVCxDQUFDLElBQUVVLENBQXZCLEVBQXlCbEIsQ0FBekI7QUFBbEQsYUFBUCxDQUFSLEdBQStGcEIsQ0FBQyxDQUFDc0YsSUFBRixDQUFPO0FBQUM0TSxxQkFBTyxFQUFDLEdBQVQ7QUFBYU4sb0JBQU0sRUFBQyxFQUFwQjtBQUF1QlEsbUJBQUssRUFBQyxLQUFLLENBQWxDO0FBQW9DZ0ksd0JBQVUsRUFBQztBQUEvQyxhQUFQLENBQS9GO0FBQXlKOztBQUFBLGlCQUFPcGEsQ0FBUDtBQUFTLFNBQTFsTSxFQUEybE0sS0FBSzZaLGFBQUwsR0FBbUIsWUFBVTtBQUFDLGNBQUcsS0FBSyxDQUFMLEtBQVMsS0FBS08sVUFBZCxJQUEwQixTQUFPLEtBQUtBLFVBQXRDLElBQWtEN08sS0FBSyxDQUFDLEtBQUs2TyxVQUFOLENBQTFELEVBQTRFLEtBQUksSUFBSXJhLENBQUMsR0FBQyxLQUFLcWEsVUFBTCxHQUFnQixDQUExQixFQUE0QnJhLENBQUMsR0FBQyxLQUFLeVosU0FBTCxDQUFlOVgsTUFBN0MsRUFBb0QzQixDQUFDLEVBQXJELEVBQXdELElBQUUsS0FBS3laLFNBQUwsQ0FBZXpaLENBQWYsRUFBa0JxYSxVQUFwQixLQUFpQyxLQUFLQSxVQUFMLElBQWlCLEtBQUtaLFNBQUwsQ0FBZXpaLENBQWYsRUFBa0JxYSxVQUFwRTtBQUFnRixpQkFBTyxLQUFLQSxVQUFaO0FBQXVCLFNBQXAyTSxFQUFxMk0sS0FBS0csY0FBTCxHQUFvQixVQUFTeGEsQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDLENBQU47QUFBQSxjQUFRYyxDQUFDLEdBQUMsS0FBSytZLGFBQUwsRUFBVjtBQUFBLGNBQStCelksQ0FBQyxHQUFDLEtBQUssQ0FBdEM7QUFBd0MsY0FBRyxFQUFFckIsQ0FBQyxHQUFDLENBQUMsSUFBSCxJQUFTZSxDQUFDLEdBQUNmLENBQUMsR0FBQyxJQUFmLENBQUgsRUFBd0IsS0FBSSxJQUFJNkIsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUs0WCxTQUFMLENBQWU5WCxNQUE3QixFQUFvQ0UsQ0FBQyxFQUFyQyxFQUF3QztBQUFDLGdCQUFJTyxDQUFDLEdBQUMsS0FBS3FYLFNBQUwsQ0FBZTVYLENBQWYsQ0FBTjs7QUFBd0IsZ0JBQUcsQ0FBQ08sQ0FBRCxJQUFJLEVBQUVBLENBQUMsQ0FBQ2lZLFVBQUYsR0FBYSxJQUFiLElBQW1CcGEsQ0FBQyxHQUFDbUMsQ0FBQyxDQUFDaVksVUFBSixHQUFlLElBQWYsR0FBb0JyYSxDQUF6QyxDQUFQLEVBQW1EO0FBQUMsa0JBQUlzQyxDQUFDLEdBQUN0QyxDQUFDLEdBQUNDLENBQVI7QUFBQSxrQkFBVXNDLENBQUMsR0FBQyxLQUFLLENBQWpCOztBQUFtQixzQkFBT0gsQ0FBQyxDQUFDK1AsT0FBVDtBQUFrQixxQkFBSSxHQUFKO0FBQVE5USxtQkFBQyxHQUFDLEtBQUs0WSxjQUFMLENBQW9CM1gsQ0FBcEIsRUFBc0JGLENBQUMsQ0FBQ2lRLEtBQUYsQ0FBUTNILENBQTlCLEVBQWdDdEksQ0FBQyxDQUFDaVEsS0FBRixDQUFRaFMsQ0FBeEMsRUFBMEMrQixDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxDQUExQyxFQUFzRHpQLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQXRELEVBQWtFelAsQ0FBQyxDQUFDaVEsS0FBRixDQUFRM0gsQ0FBMUUsRUFBNEV0SSxDQUFDLENBQUNpUSxLQUFGLENBQVFoUyxDQUFwRixDQUFGO0FBQXlGOztBQUFNLHFCQUFJLEdBQUo7QUFBUSxzQkFBSW1DLENBQUMsR0FBQ0osQ0FBQyxDQUFDeVAsTUFBRixDQUFTLENBQVQsQ0FBTjtBQUFBLHNCQUFrQnBSLENBQUMsR0FBQzJCLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQXBCO0FBQUEsc0JBQWdDOU8sQ0FBQyxHQUFDWCxDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxJQUFZcFIsQ0FBOUM7QUFBZ0Qsc0JBQUc4QixDQUFDLEdBQUNDLENBQUMsR0FBQ0YsQ0FBQyxHQUFDRixDQUFDLENBQUNpWSxVQUFKLEdBQWU1WixDQUFuQixFQUFxQkEsQ0FBQyxHQUFDLENBQUYsSUFBSzhCLENBQUMsR0FBQ1EsQ0FBUCxJQUFVLEtBQUd0QyxDQUFILElBQU1zQyxDQUFDLEdBQUNSLENBQTFDLEVBQTRDO0FBQU1sQixtQkFBQyxHQUFDLEtBQUtvWix1QkFBTCxDQUE2QnJZLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQTdCLEVBQXlDelAsQ0FBQyxDQUFDeVAsTUFBRixDQUFTLENBQVQsQ0FBekMsRUFBcUR6UCxDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxDQUFyRCxFQUFpRXpQLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQWpFLEVBQTZFdFAsQ0FBN0UsRUFBK0VILENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQS9FLENBQUY7QUFBOEY7O0FBQU0scUJBQUksR0FBSjtBQUFRLHVCQUFHdFAsQ0FBQyxHQUFDRCxDQUFDLEdBQUNGLENBQUMsQ0FBQ2lZLFVBQVQsTUFBdUI5WCxDQUFDLEdBQUMsQ0FBekIsR0FBNEJsQixDQUFDLEdBQUMsS0FBS3FaLHFCQUFMLENBQTJCblksQ0FBM0IsRUFBNkJILENBQUMsQ0FBQ2lRLEtBQUYsQ0FBUTNILENBQXJDLEVBQXVDdEksQ0FBQyxDQUFDaVEsS0FBRixDQUFRaFMsQ0FBL0MsRUFBaUQrQixDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxDQUFqRCxFQUE2RHpQLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQTdELEVBQXlFelAsQ0FBQyxDQUFDeVAsTUFBRixDQUFTLENBQVQsQ0FBekUsRUFBcUZ6UCxDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxDQUFyRixFQUFpR3pQLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQWpHLEVBQTZHelAsQ0FBQyxDQUFDeVAsTUFBRixDQUFTLENBQVQsQ0FBN0csQ0FBOUI7QUFBd0o7O0FBQU0scUJBQUksR0FBSjtBQUFRLHVCQUFHdFAsQ0FBQyxHQUFDRCxDQUFDLEdBQUNGLENBQUMsQ0FBQ2lZLFVBQVQsTUFBdUI5WCxDQUFDLEdBQUMsQ0FBekIsR0FBNEJsQixDQUFDLEdBQUMsS0FBS3NaLHlCQUFMLENBQStCcFksQ0FBL0IsRUFBaUNILENBQUMsQ0FBQ2lRLEtBQUYsQ0FBUTNILENBQXpDLEVBQTJDdEksQ0FBQyxDQUFDaVEsS0FBRixDQUFRaFMsQ0FBbkQsRUFBcUQrQixDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxDQUFyRCxFQUFpRXpQLENBQUMsQ0FBQ3lQLE1BQUYsQ0FBUyxDQUFULENBQWpFLEVBQTZFelAsQ0FBQyxDQUFDeVAsTUFBRixDQUFTLENBQVQsQ0FBN0UsRUFBeUZ6UCxDQUFDLENBQUN5UCxNQUFGLENBQVMsQ0FBVCxDQUF6RixDQUE5QjtBQUFyZjs7QUFBeW5CLGtCQUFHLEtBQUssQ0FBTCxLQUFTeFEsQ0FBVCxJQUFZQSxDQUFDLEtBQUcsRUFBbkIsRUFBc0IsT0FBT0EsQ0FBUDtBQUFTO0FBQU07O0FBQUFwQixhQUFDLElBQUVtQyxDQUFDLENBQUNpWSxVQUFMO0FBQWdCO0FBQUMsU0FBNXZPLEVBQTZ2TyxLQUFLTyxxQkFBTCxHQUEyQixVQUFTNWEsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyxjQUFJYyxDQUFDLEdBQUMsS0FBSytZLGFBQUwsRUFBTjs7QUFBMkIsY0FBRzdaLENBQUMsR0FBQ0EsQ0FBQyxJQUFFLEdBQUwsRUFBU0QsQ0FBQyxHQUFDQSxDQUFDLElBQUVlLENBQUMsR0FBQyxHQUFoQixFQUFvQixLQUFLOFosZ0JBQUwsR0FBc0IsS0FBS0EsZ0JBQUwsSUFBdUIsRUFBakUsRUFBb0UsQ0FBQyxLQUFLQSxnQkFBTCxDQUFzQnRhLGNBQXRCLENBQXFDLFFBQXJDLENBQUQsSUFBaUQsS0FBS3NhLGdCQUFMLENBQXNCQyxJQUF0QixJQUE0QjlhLENBQTdFLElBQWdGLEtBQUs2YSxnQkFBTCxDQUFzQkUsU0FBdEIsSUFBaUM5YSxDQUF4TCxFQUEwTDtBQUFDLGlCQUFLNGEsZ0JBQUwsR0FBc0I7QUFBQ0Msa0JBQUksRUFBQzlhLENBQU47QUFBUSthLHVCQUFTLEVBQUM5YSxDQUFsQjtBQUFvQjRSLG9CQUFNLEVBQUM7QUFBM0IsYUFBdEI7O0FBQXFELGlCQUFJLElBQUl4USxDQUFDLEdBQUMsQ0FBTixFQUFRUSxDQUFDLEdBQUMsQ0FBZCxFQUFnQkEsQ0FBQyxJQUFFZCxDQUFuQixFQUFxQmMsQ0FBQyxJQUFFNUIsQ0FBeEIsRUFBMEI7QUFBQyxrQkFBSW1DLENBQUMsR0FBQyxLQUFLb1ksY0FBTCxDQUFvQjNZLENBQXBCLENBQU47QUFBQSxrQkFBNkJTLENBQUMsR0FBQyxLQUFLa1ksY0FBTCxDQUFvQjNZLENBQUMsR0FBQzVCLENBQXRCLENBQS9CO0FBQXdELG1CQUFLLENBQUwsS0FBU21DLENBQVQsSUFBWSxLQUFLLENBQUwsS0FBU0UsQ0FBckIsSUFBeUJ0QyxDQUFDLEtBQUdxQixDQUFDLElBQUUsS0FBSzJZLGFBQUwsQ0FBbUI1WCxDQUFDLENBQUNzSSxDQUFyQixFQUF1QnRJLENBQUMsQ0FBQy9CLENBQXpCLEVBQTJCaUMsQ0FBQyxDQUFDb0ksQ0FBN0IsRUFBK0JwSSxDQUFDLENBQUNqQyxDQUFqQyxDQUFOLENBQUQsS0FBOEMsS0FBS3dhLGdCQUFMLENBQXNCaEosTUFBdEIsQ0FBNkJ0TSxJQUE3QixDQUFrQztBQUFDbUYsaUJBQUMsRUFBQ3RJLENBQUMsQ0FBQ3NJLENBQUw7QUFBT3JLLGlCQUFDLEVBQUMrQixDQUFDLENBQUMvQixDQUFYO0FBQWEyYSx3QkFBUSxFQUFDblo7QUFBdEIsZUFBbEMsR0FBNERSLENBQUMsSUFBRXJCLENBQTdHLENBQXpCO0FBQTBJO0FBQUM7QUFBQyxTQUFoeFAsRUFBaXhQLEtBQUsrWix5QkFBTCxHQUErQixVQUFTL1osQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZTtBQUFDLGNBQUcsS0FBSzZaLHFCQUFMLENBQTJCM2EsQ0FBM0IsRUFBNkJjLENBQTdCLEdBQWdDLEVBQUVmLENBQUMsR0FBQyxDQUFGLElBQUssT0FBS0EsQ0FBQyxHQUFDLEtBQUs4WixhQUFMLEVBQWQsQ0FBbkMsRUFBdUU7QUFBQyxnQkFBSXpZLENBQUMsR0FBQ3VFLElBQUksQ0FBQ3FWLEtBQUwsQ0FBV2piLENBQUMsR0FBQyxLQUFLOFosYUFBTCxFQUFGLElBQXdCLEtBQUtlLGdCQUFMLENBQXNCaEosTUFBdEIsQ0FBNkJsUSxNQUE3QixHQUFvQyxDQUE1RCxDQUFYLENBQU47QUFBaUYsbUJBQU8sS0FBS2taLGdCQUFMLENBQXNCaEosTUFBdEIsQ0FBNkJ4USxDQUE3QixLQUFpQyxLQUFLLENBQTdDO0FBQStDO0FBQUMsU0FBemdRLEVBQTBnUSxLQUFLMlksYUFBTCxHQUFtQixVQUFTaGEsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQjtBQUFDLGlCQUFPdUUsSUFBSSxDQUFDQyxJQUFMLENBQVUsQ0FBQzlFLENBQUMsR0FBQ2YsQ0FBSCxLQUFPZSxDQUFDLEdBQUNmLENBQVQsSUFBWSxDQUFDcUIsQ0FBQyxHQUFDcEIsQ0FBSCxLQUFPb0IsQ0FBQyxHQUFDcEIsQ0FBVCxDQUF0QixDQUFQO0FBQTBDLFNBQXpsUSxFQUEwbFEsS0FBS2dhLGNBQUwsR0FBb0IsVUFBU2phLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWVNLENBQWYsRUFBaUJRLENBQWpCLEVBQW1CTyxDQUFuQixFQUFxQkUsQ0FBckIsRUFBdUI7QUFBQyxlQUFLLENBQUwsS0FBU0YsQ0FBVCxLQUFhQSxDQUFDLEdBQUNuQyxDQUFmLEdBQWtCLEtBQUssQ0FBTCxLQUFTcUMsQ0FBVCxLQUFhQSxDQUFDLEdBQUN2QixDQUFmLENBQWxCO0FBQW9DLGNBQUl3QixDQUFDLEdBQUMsQ0FBQ1YsQ0FBQyxHQUFDZCxDQUFILEtBQU9NLENBQUMsR0FBQ3BCLENBQUYsR0FBSSxJQUFYLENBQU47QUFBQSxjQUF1QnVDLENBQUMsR0FBQ29ELElBQUksQ0FBQ0MsSUFBTCxDQUFVN0YsQ0FBQyxHQUFDQSxDQUFGLElBQUssSUFBRXVDLENBQUMsR0FBQ0EsQ0FBVCxDQUFWLENBQXpCO0FBQWdEbEIsV0FBQyxHQUFDcEIsQ0FBRixLQUFNdUMsQ0FBQyxJQUFFLENBQUMsQ0FBVjtBQUFhLGNBQUkvQixDQUFKO0FBQUEsY0FBTXNDLENBQUMsR0FBQ1IsQ0FBQyxHQUFDQyxDQUFWO0FBQVksY0FBR25CLENBQUMsS0FBR3BCLENBQVAsRUFBU1EsQ0FBQyxHQUFDO0FBQUNpSyxhQUFDLEVBQUN0SSxDQUFIO0FBQUsvQixhQUFDLEVBQUNpQyxDQUFDLEdBQUNTO0FBQVQsV0FBRixDQUFULEtBQTRCLElBQUcsQ0FBQ1QsQ0FBQyxHQUFDdkIsQ0FBSCxLQUFPcUIsQ0FBQyxHQUFDbkMsQ0FBRixHQUFJLElBQVgsTUFBbUJzQyxDQUF0QixFQUF3QjlCLENBQUMsR0FBQztBQUFDaUssYUFBQyxFQUFDdEksQ0FBQyxHQUFDSSxDQUFMO0FBQU9uQyxhQUFDLEVBQUNpQyxDQUFDLEdBQUNTO0FBQVgsV0FBRixDQUF4QixLQUE0QztBQUFDLGdCQUFJbkMsQ0FBSjtBQUFBLGdCQUFNTyxDQUFOO0FBQUEsZ0JBQVFDLENBQUMsR0FBQyxLQUFLNFksYUFBTCxDQUFtQi9aLENBQW5CLEVBQXFCYyxDQUFyQixFQUF1Qk0sQ0FBdkIsRUFBeUJRLENBQXpCLENBQVY7QUFBc0MsZ0JBQUdULENBQUMsR0FBQyxJQUFMLEVBQVU7QUFBTyxnQkFBSU4sQ0FBQyxHQUFDLENBQUNzQixDQUFDLEdBQUNuQyxDQUFILEtBQU9vQixDQUFDLEdBQUNwQixDQUFULElBQVksQ0FBQ3FDLENBQUMsR0FBQ3ZCLENBQUgsS0FBT2MsQ0FBQyxHQUFDZCxDQUFULENBQWxCO0FBQThCSCxhQUFDLEdBQUNYLENBQUMsR0FBQyxDQUFDYSxDQUFDLElBQUVNLENBQUMsR0FBQ0EsQ0FBTixLQUFVQyxDQUFDLEdBQUNwQixDQUFaLENBQUosRUFBbUJrQixDQUFDLEdBQUNKLENBQUMsR0FBQ0QsQ0FBQyxJQUFFZSxDQUFDLEdBQUNkLENBQUosQ0FBeEI7QUFBK0IsZ0JBQUlPLENBQUMsR0FBQyxLQUFLMFksYUFBTCxDQUFtQjVYLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QjFCLENBQXZCLEVBQXlCTyxDQUF6QixDQUFOO0FBQUEsZ0JBQWtDZCxDQUFDLEdBQUN1RixJQUFJLENBQUNDLElBQUwsQ0FBVTdGLENBQUMsR0FBQ0EsQ0FBRixHQUFJc0IsQ0FBQyxHQUFDQSxDQUFoQixDQUFwQztBQUF1RGtCLGFBQUMsR0FBQ29ELElBQUksQ0FBQ0MsSUFBTCxDQUFVeEYsQ0FBQyxHQUFDQSxDQUFGLElBQUssSUFBRWtDLENBQUMsR0FBQ0EsQ0FBVCxDQUFWLENBQUYsRUFBeUJsQixDQUFDLEdBQUNwQixDQUFGLEtBQU11QyxDQUFDLElBQUUsQ0FBQyxDQUFWLENBQXpCLEVBQXNDL0IsQ0FBQyxHQUFDO0FBQUNpSyxlQUFDLEVBQUM5SixDQUFDLEdBQUM0QixDQUFMO0FBQU9uQyxlQUFDLEVBQUNjLENBQUMsSUFBRTRCLENBQUMsR0FBQ1IsQ0FBQyxHQUFDQyxDQUFOO0FBQVYsYUFBeEM7QUFBNEQ7QUFBQSxpQkFBTy9CLENBQVA7QUFBUyxTQUE1aVIsRUFBNmlSLEtBQUtpYSxxQkFBTCxHQUEyQixVQUFTMWEsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQlEsQ0FBakIsRUFBbUJPLENBQW5CLEVBQXFCRSxDQUFyQixFQUF1QkMsQ0FBdkIsRUFBeUJDLENBQXpCLEVBQTJCO0FBQUMsbUJBQVMvQixDQUFULENBQVdULENBQVgsRUFBYTtBQUFDLG1CQUFPQSxDQUFDLEdBQUNBLENBQUYsR0FBSUEsQ0FBWDtBQUFhOztBQUFBLG1CQUFTK0MsQ0FBVCxDQUFXL0MsQ0FBWCxFQUFhO0FBQUMsbUJBQU8sSUFBRUEsQ0FBRixHQUFJQSxDQUFKLElBQU8sSUFBRUEsQ0FBVCxDQUFQO0FBQW1COztBQUFBLG1CQUFTWSxDQUFULENBQVdaLENBQVgsRUFBYTtBQUFDLG1CQUFPLElBQUVBLENBQUYsSUFBSyxJQUFFQSxDQUFQLEtBQVcsSUFBRUEsQ0FBYixDQUFQO0FBQXVCOztBQUFBLG1CQUFTbUIsQ0FBVCxDQUFXbkIsQ0FBWCxFQUFhO0FBQUMsbUJBQU0sQ0FBQyxJQUFFQSxDQUFILEtBQU8sSUFBRUEsQ0FBVCxLQUFhLElBQUVBLENBQWYsQ0FBTjtBQUF3Qjs7QUFBQSxpQkFBTTtBQUFDMEssYUFBQyxFQUFDbkksQ0FBQyxHQUFDOUIsQ0FBQyxDQUFDVCxDQUFELENBQUgsR0FBT29DLENBQUMsR0FBQ1csQ0FBQyxDQUFDL0MsQ0FBRCxDQUFWLEdBQWNxQixDQUFDLEdBQUNULENBQUMsQ0FBQ1osQ0FBRCxDQUFqQixHQUFxQkMsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDbkIsQ0FBRCxDQUEzQjtBQUErQkssYUFBQyxFQUFDbUMsQ0FBQyxHQUFDL0IsQ0FBQyxDQUFDVCxDQUFELENBQUgsR0FBT3NDLENBQUMsR0FBQ1MsQ0FBQyxDQUFDL0MsQ0FBRCxDQUFWLEdBQWM2QixDQUFDLEdBQUNqQixDQUFDLENBQUNaLENBQUQsQ0FBakIsR0FBcUJlLENBQUMsR0FBQ0ksQ0FBQyxDQUFDbkIsQ0FBRDtBQUF6RCxXQUFOO0FBQW9FLFNBQS95UixFQUFnelIsS0FBSzJhLHlCQUFMLEdBQStCLFVBQVMzYSxDQUFULEVBQVdDLENBQVgsRUFBYWMsQ0FBYixFQUFlTSxDQUFmLEVBQWlCUSxDQUFqQixFQUFtQk8sQ0FBbkIsRUFBcUJFLENBQXJCLEVBQXVCO0FBQUMsbUJBQVNDLENBQVQsQ0FBV3ZDLENBQVgsRUFBYTtBQUFDLG1CQUFPQSxDQUFDLEdBQUNBLENBQVQ7QUFBVzs7QUFBQSxtQkFBU3dDLENBQVQsQ0FBV3hDLENBQVgsRUFBYTtBQUFDLG1CQUFPLElBQUVBLENBQUYsSUFBSyxJQUFFQSxDQUFQLENBQVA7QUFBaUI7O0FBQUEsbUJBQVNTLENBQVQsQ0FBV1QsQ0FBWCxFQUFhO0FBQUMsbUJBQU0sQ0FBQyxJQUFFQSxDQUFILEtBQU8sSUFBRUEsQ0FBVCxDQUFOO0FBQWtCOztBQUFBLGlCQUFNO0FBQUMwSyxhQUFDLEVBQUN0SSxDQUFDLEdBQUNHLENBQUMsQ0FBQ3ZDLENBQUQsQ0FBSCxHQUFPcUIsQ0FBQyxHQUFDbUIsQ0FBQyxDQUFDeEMsQ0FBRCxDQUFWLEdBQWNDLENBQUMsR0FBQ1EsQ0FBQyxDQUFDVCxDQUFELENBQXBCO0FBQXdCSyxhQUFDLEVBQUNpQyxDQUFDLEdBQUNDLENBQUMsQ0FBQ3ZDLENBQUQsQ0FBSCxHQUFPNkIsQ0FBQyxHQUFDVyxDQUFDLENBQUN4QyxDQUFELENBQVYsR0FBY2UsQ0FBQyxHQUFDTixDQUFDLENBQUNULENBQUQ7QUFBM0MsV0FBTjtBQUFzRCxTQUFyL1IsRUFBcy9SLEtBQUt5YSx1QkFBTCxHQUE2QixVQUFTemEsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQlEsQ0FBakIsRUFBbUJPLENBQW5CLEVBQXFCO0FBQUMsY0FBSUUsQ0FBQyxHQUFDc0QsSUFBSSxDQUFDNkcsR0FBTCxDQUFTckssQ0FBVCxDQUFOO0FBQUEsY0FBa0JHLENBQUMsR0FBQ3FELElBQUksQ0FBQzhHLEdBQUwsQ0FBU3RLLENBQVQsQ0FBcEI7QUFBQSxjQUFnQ0ksQ0FBQyxHQUFDekIsQ0FBQyxHQUFDNkUsSUFBSSxDQUFDNkcsR0FBTCxDQUFTNUssQ0FBVCxDQUFwQztBQUFBLGNBQWdEcEIsQ0FBQyxHQUFDWSxDQUFDLEdBQUN1RSxJQUFJLENBQUM4RyxHQUFMLENBQVM3SyxDQUFULENBQXBEO0FBQWdFLGlCQUFNO0FBQUM2SSxhQUFDLEVBQUMxSyxDQUFDLElBQUV3QyxDQUFDLEdBQUNGLENBQUYsR0FBSTdCLENBQUMsR0FBQzhCLENBQVIsQ0FBSjtBQUFlbEMsYUFBQyxFQUFDSixDQUFDLElBQUV1QyxDQUFDLEdBQUNELENBQUYsR0FBSTlCLENBQUMsR0FBQzZCLENBQVI7QUFBbEIsV0FBTjtBQUFvQyxTQUE3b1MsRUFBOG9TLEtBQUtpWSxVQUFMLEdBQWdCLFVBQVN2YSxDQUFULEVBQVdDLENBQVgsRUFBYWMsQ0FBYixFQUFlTSxDQUFmLEVBQWlCO0FBQUMsY0FBSVEsQ0FBSixFQUFNTyxDQUFOLEVBQVFFLENBQVIsRUFBVUMsQ0FBVjs7QUFBWSxrQkFBT3hCLENBQVA7QUFBVSxpQkFBSSxHQUFKO0FBQVEscUJBQU8sS0FBS2laLGFBQUwsQ0FBbUJoYSxDQUFuQixFQUFxQkMsQ0FBckIsRUFBdUJvQixDQUFDLENBQUMsQ0FBRCxDQUF4QixFQUE0QkEsQ0FBQyxDQUFDLENBQUQsQ0FBN0IsQ0FBUDs7QUFBeUMsaUJBQUksR0FBSjtBQUFRLG1CQUFJUSxDQUFDLEdBQUMsQ0FBRixFQUFJTyxDQUFDLEdBQUMsS0FBS3NZLHFCQUFMLENBQTJCLENBQTNCLEVBQTZCMWEsQ0FBN0IsRUFBK0JDLENBQS9CLEVBQWlDb0IsQ0FBQyxDQUFDLENBQUQsQ0FBbEMsRUFBc0NBLENBQUMsQ0FBQyxDQUFELENBQXZDLEVBQTJDQSxDQUFDLENBQUMsQ0FBRCxDQUE1QyxFQUFnREEsQ0FBQyxDQUFDLENBQUQsQ0FBakQsRUFBcURBLENBQUMsQ0FBQyxDQUFELENBQXRELEVBQTBEQSxDQUFDLENBQUMsQ0FBRCxDQUEzRCxDQUFOLEVBQXNFa0IsQ0FBQyxHQUFDLEdBQTVFLEVBQWdGQSxDQUFDLElBQUUsQ0FBbkYsRUFBcUZBLENBQUMsSUFBRSxHQUF4RixFQUE0RkQsQ0FBQyxHQUFDLEtBQUtvWSxxQkFBTCxDQUEyQm5ZLENBQTNCLEVBQTZCdkMsQ0FBN0IsRUFBK0JDLENBQS9CLEVBQWlDb0IsQ0FBQyxDQUFDLENBQUQsQ0FBbEMsRUFBc0NBLENBQUMsQ0FBQyxDQUFELENBQXZDLEVBQTJDQSxDQUFDLENBQUMsQ0FBRCxDQUE1QyxFQUFnREEsQ0FBQyxDQUFDLENBQUQsQ0FBakQsRUFBcURBLENBQUMsQ0FBQyxDQUFELENBQXRELEVBQTBEQSxDQUFDLENBQUMsQ0FBRCxDQUEzRCxDQUFGLEVBQWtFUSxDQUFDLElBQUUsS0FBS21ZLGFBQUwsQ0FBbUI1WCxDQUFDLENBQUNzSSxDQUFyQixFQUF1QnRJLENBQUMsQ0FBQy9CLENBQXpCLEVBQTJCaUMsQ0FBQyxDQUFDb0ksQ0FBN0IsRUFBK0JwSSxDQUFDLENBQUNqQyxDQUFqQyxDQUFyRSxFQUF5RytCLENBQUMsR0FBQ0UsQ0FBM0c7O0FBQTZHLHFCQUFPVCxDQUFQOztBQUFTLGlCQUFJLEdBQUo7QUFBUSxtQkFBSUEsQ0FBQyxHQUFDLENBQUYsRUFBSU8sQ0FBQyxHQUFDLEtBQUt1WSx5QkFBTCxDQUErQixDQUEvQixFQUFpQzNhLENBQWpDLEVBQW1DQyxDQUFuQyxFQUFxQ29CLENBQUMsQ0FBQyxDQUFELENBQXRDLEVBQTBDQSxDQUFDLENBQUMsQ0FBRCxDQUEzQyxFQUErQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBaEQsRUFBb0RBLENBQUMsQ0FBQyxDQUFELENBQXJELENBQU4sRUFBZ0VrQixDQUFDLEdBQUMsR0FBdEUsRUFBMEVBLENBQUMsSUFBRSxDQUE3RSxFQUErRUEsQ0FBQyxJQUFFLEdBQWxGLEVBQXNGRCxDQUFDLEdBQUMsS0FBS3FZLHlCQUFMLENBQStCcFksQ0FBL0IsRUFBaUN2QyxDQUFqQyxFQUFtQ0MsQ0FBbkMsRUFBcUNvQixDQUFDLENBQUMsQ0FBRCxDQUF0QyxFQUEwQ0EsQ0FBQyxDQUFDLENBQUQsQ0FBM0MsRUFBK0NBLENBQUMsQ0FBQyxDQUFELENBQWhELEVBQW9EQSxDQUFDLENBQUMsQ0FBRCxDQUFyRCxDQUFGLEVBQTREUSxDQUFDLElBQUUsS0FBS21ZLGFBQUwsQ0FBbUI1WCxDQUFDLENBQUNzSSxDQUFyQixFQUF1QnRJLENBQUMsQ0FBQy9CLENBQXpCLEVBQTJCaUMsQ0FBQyxDQUFDb0ksQ0FBN0IsRUFBK0JwSSxDQUFDLENBQUNqQyxDQUFqQyxDQUEvRCxFQUFtRytCLENBQUMsR0FBQ0UsQ0FBckc7O0FBQXVHLHFCQUFPVCxDQUFQOztBQUFTLGlCQUFJLEdBQUo7QUFBUUEsZUFBQyxHQUFDLENBQUY7QUFBSSxrQkFBSVcsQ0FBQyxHQUFDbkIsQ0FBQyxDQUFDLENBQUQsQ0FBUDtBQUFBLGtCQUFXWixDQUFDLEdBQUNZLENBQUMsQ0FBQyxDQUFELENBQWQ7QUFBQSxrQkFBa0IwQixDQUFDLEdBQUMxQixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQUtaLENBQXpCO0FBQUEsa0JBQTJCRyxDQUFDLEdBQUNnRixJQUFJLENBQUNzRCxFQUFMLEdBQVEsR0FBckM7QUFBeUMsa0JBQUd0RCxJQUFJLENBQUNzVixHQUFMLENBQVMxWSxDQUFDLEdBQUNPLENBQVgsSUFBY25DLENBQWQsS0FBa0JBLENBQUMsR0FBQ2dGLElBQUksQ0FBQ3NWLEdBQUwsQ0FBUzFZLENBQUMsR0FBQ08sQ0FBWCxDQUFwQixHQUFtQ1gsQ0FBQyxHQUFDLEtBQUtxWSx1QkFBTCxDQUE2QnBaLENBQUMsQ0FBQyxDQUFELENBQTlCLEVBQWtDQSxDQUFDLENBQUMsQ0FBRCxDQUFuQyxFQUF1Q0EsQ0FBQyxDQUFDLENBQUQsQ0FBeEMsRUFBNENBLENBQUMsQ0FBQyxDQUFELENBQTdDLEVBQWlEbUIsQ0FBakQsRUFBbUQsQ0FBbkQsQ0FBckMsRUFBMkYvQixDQUFDLEdBQUMsQ0FBaEcsRUFBa0csS0FBSThCLENBQUMsR0FBQ0MsQ0FBQyxHQUFDNUIsQ0FBUixFQUFVbUMsQ0FBQyxHQUFDUixDQUFaLEVBQWNBLENBQUMsSUFBRTNCLENBQWpCLEVBQW1CMEIsQ0FBQyxHQUFDLEtBQUttWSx1QkFBTCxDQUE2QnBaLENBQUMsQ0FBQyxDQUFELENBQTlCLEVBQWtDQSxDQUFDLENBQUMsQ0FBRCxDQUFuQyxFQUF1Q0EsQ0FBQyxDQUFDLENBQUQsQ0FBeEMsRUFBNENBLENBQUMsQ0FBQyxDQUFELENBQTdDLEVBQWlEa0IsQ0FBakQsRUFBbUQsQ0FBbkQsQ0FBRixFQUF3RFYsQ0FBQyxJQUFFLEtBQUttWSxhQUFMLENBQW1CNVgsQ0FBQyxDQUFDc0ksQ0FBckIsRUFBdUJ0SSxDQUFDLENBQUMvQixDQUF6QixFQUEyQmlDLENBQUMsQ0FBQ29JLENBQTdCLEVBQStCcEksQ0FBQyxDQUFDakMsQ0FBakMsQ0FBM0QsRUFBK0YrQixDQUFDLEdBQUNFLENBQWpHLENBQXJILEtBQTZOLEtBQUlDLENBQUMsR0FBQ0MsQ0FBQyxHQUFDNUIsQ0FBUixFQUFVMkIsQ0FBQyxHQUFDUSxDQUFaLEVBQWNSLENBQUMsSUFBRTNCLENBQWpCLEVBQW1CMEIsQ0FBQyxHQUFDLEtBQUttWSx1QkFBTCxDQUE2QnBaLENBQUMsQ0FBQyxDQUFELENBQTlCLEVBQWtDQSxDQUFDLENBQUMsQ0FBRCxDQUFuQyxFQUF1Q0EsQ0FBQyxDQUFDLENBQUQsQ0FBeEMsRUFBNENBLENBQUMsQ0FBQyxDQUFELENBQTdDLEVBQWlEa0IsQ0FBakQsRUFBbUQsQ0FBbkQsQ0FBRixFQUF3RFYsQ0FBQyxJQUFFLEtBQUttWSxhQUFMLENBQW1CNVgsQ0FBQyxDQUFDc0ksQ0FBckIsRUFBdUJ0SSxDQUFDLENBQUMvQixDQUF6QixFQUEyQmlDLENBQUMsQ0FBQ29JLENBQTdCLEVBQStCcEksQ0FBQyxDQUFDakMsQ0FBakMsQ0FBM0QsRUFBK0YrQixDQUFDLEdBQUNFLENBQWpHO0FBQW1HLHFCQUFPQSxDQUFDLEdBQUMsS0FBS21ZLHVCQUFMLENBQTZCcFosQ0FBQyxDQUFDLENBQUQsQ0FBOUIsRUFBa0NBLENBQUMsQ0FBQyxDQUFELENBQW5DLEVBQXVDQSxDQUFDLENBQUMsQ0FBRCxDQUF4QyxFQUE0Q0EsQ0FBQyxDQUFDLENBQUQsQ0FBN0MsRUFBaUQwQixDQUFqRCxFQUFtRCxDQUFuRCxDQUFGLEVBQXdEbEIsQ0FBQyxJQUFFLEtBQUttWSxhQUFMLENBQW1CNVgsQ0FBQyxDQUFDc0ksQ0FBckIsRUFBdUJ0SSxDQUFDLENBQUMvQixDQUF6QixFQUEyQmlDLENBQUMsQ0FBQ29JLENBQTdCLEVBQStCcEksQ0FBQyxDQUFDakMsQ0FBakMsQ0FBbEU7QUFBMzJCOztBQUFpOUIsaUJBQU8sQ0FBUDtBQUFTLFNBQXRwVSxFQUF1cFUsS0FBS29aLFNBQUwsR0FBZSxLQUFLVyxhQUFMLENBQW1CbmEsQ0FBbkIsQ0FBdHFVO0FBQTRyVSxPQUFoc3FELEVBQWlzcURrRSxDQUFDLENBQUNqQixPQUFGLENBQVVpVyxRQUFWLENBQW1CaFcsU0FBbkIsR0FBNkIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW9WLGVBQWQsRUFBOXRxRCxFQUE0dnFEblUsQ0FBQyxDQUFDakIsT0FBRixDQUFVaVksS0FBVixHQUFnQixVQUFTbmIsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStMLG1CQUFwQixFQUF3QyxLQUFLbEMsSUFBTCxDQUFVL00sQ0FBVixDQUF4QztBQUFxRCxZQUFJQyxDQUFDLEdBQUMsS0FBS3VJLGdCQUFMLEdBQXdCakIsS0FBOUI7O0FBQW9DLFlBQUcsTUFBSXRILENBQVAsRUFBUztBQUFDLGNBQUltQyxDQUFDLEdBQUNuQyxDQUFDLENBQUMrRCxLQUFGLENBQVEsUUFBUixDQUFOO0FBQXdCLGNBQUdHLENBQUMsQ0FBQ2MsTUFBRixDQUFTTSxJQUFULENBQWMsSUFBZCxHQUFvQixLQUFLUyxNQUFMLEdBQVksQ0FBQyxDQUFqQyxFQUFtQzVELENBQXRDLEVBQXdDLEtBQUtnWixHQUFMLEdBQVNqWCxDQUFDLENBQUNnQyxJQUFGLENBQU9sRyxDQUFQLENBQVQsRUFBbUIsS0FBSytGLE1BQUwsR0FBWSxDQUFDLENBQWhDLENBQXhDLEtBQThFO0FBQUMsaUJBQUtvVixHQUFMLEdBQVN4YSxDQUFDLENBQUNJLGFBQUYsQ0FBZ0IsS0FBaEIsQ0FBVCxFQUFnQyxLQUFHbUQsQ0FBQyxDQUFDQyxJQUFGLENBQU9pWCxPQUFWLEtBQW9CLEtBQUtELEdBQUwsQ0FBU0UsV0FBVCxHQUFxQixXQUF6QyxDQUFoQztBQUFzRixnQkFBSWhaLENBQUMsR0FBQyxJQUFOO0FBQVcsaUJBQUs4WSxHQUFMLENBQVNHLE1BQVQsR0FBZ0IsWUFBVTtBQUFDalosZUFBQyxDQUFDMEQsTUFBRixHQUFTLENBQUMsQ0FBVjtBQUFZLGFBQXZDLEVBQXdDLEtBQUtvVixHQUFMLENBQVNJLE9BQVQsR0FBaUIsWUFBVTtBQUFDclgsZUFBQyxDQUFDTSxHQUFGLENBQU0sbUJBQWlCeEUsQ0FBakIsR0FBbUIsYUFBekIsR0FBd0NxQyxDQUFDLENBQUMwRCxNQUFGLEdBQVMsQ0FBQyxDQUFsRDtBQUFvRCxhQUF4SCxFQUF5SCxLQUFLb1YsR0FBTCxDQUFTSyxHQUFULEdBQWF4YixDQUF0STtBQUF3STtBQUFBLGVBQUtrTyxjQUFMLEdBQW9CLFVBQVNuTyxDQUFULEVBQVc7QUFBQyxnQkFBSUMsQ0FBQyxHQUFDLEtBQUt3SSxTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBTjtBQUFBLGdCQUF3Q2hJLENBQUMsR0FBQyxLQUFLMEgsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQTFDO0FBQUEsZ0JBQTRFMUgsQ0FBQyxHQUFDLEtBQUtvSCxTQUFMLENBQWUsT0FBZixFQUF3Qk0sUUFBeEIsQ0FBaUMsR0FBakMsQ0FBOUU7QUFBQSxnQkFBb0hsSCxDQUFDLEdBQUMsS0FBSzRHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCTSxRQUF6QixDQUFrQyxHQUFsQyxDQUF0SDtBQUE2SixpQkFBRzFILENBQUgsSUFBTSxLQUFHUSxDQUFULEtBQWE3QixDQUFDLENBQUNpTyxJQUFGLElBQVM3TCxDQUFDLEdBQUNwQyxDQUFDLENBQUMwYixPQUFGLENBQVUsS0FBS04sR0FBZixFQUFtQm5iLENBQW5CLEVBQXFCYyxDQUFyQixFQUF1Qk0sQ0FBdkIsRUFBeUJRLENBQXpCLENBQUQsSUFBOEI3QixDQUFDLENBQUNpTSxTQUFGLENBQVloTSxDQUFaLEVBQWNjLENBQWQsR0FBaUJvRCxDQUFDLENBQUNrSixXQUFGLENBQWNyTixDQUFkLEVBQWdCLEtBQUt5SSxTQUFMLENBQWUscUJBQWYsRUFBc0NsQixLQUF0RCxFQUE0RGxHLENBQTVELEVBQThELEtBQUsrWixHQUFMLENBQVNuYSxLQUF2RSxFQUE2RVksQ0FBN0UsRUFBK0UsS0FBS3VaLEdBQUwsQ0FBU2xhLE1BQXhGLEVBQStGLENBQS9GLEVBQWlHLENBQWpHLENBQWpCLEVBQXFIb0IsQ0FBQyxDQUFDMEQsTUFBRixLQUFXLEtBQUssQ0FBTCxLQUFTLEtBQUtvVixHQUFMLENBQVNPLFFBQWxCLElBQTRCLEtBQUtQLEdBQUwsQ0FBU08sUUFBaEQsS0FBMkQzYixDQUFDLENBQUM0YixTQUFGLENBQVksS0FBS1IsR0FBakIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsQ0FBOU0sQ0FBVixFQUFtUHBiLENBQUMsQ0FBQ3FPLE9BQUYsRUFBaFE7QUFBNlEsV0FBMWMsRUFBMmMsS0FBS29DLGNBQUwsR0FBb0IsWUFBVTtBQUFDLGdCQUFJelEsQ0FBQyxHQUFDLEtBQUt5SSxTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBTjtBQUFBLGdCQUF3QzlJLENBQUMsR0FBQyxLQUFLd0ksU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQTFDO0FBQUEsZ0JBQTRFaEksQ0FBQyxHQUFDLEtBQUswSCxTQUFMLENBQWUsT0FBZixFQUF3Qk0sUUFBeEIsQ0FBaUMsR0FBakMsQ0FBOUU7QUFBQSxnQkFBb0gxSCxDQUFDLEdBQUMsS0FBS29ILFNBQUwsQ0FBZSxRQUFmLEVBQXlCTSxRQUF6QixDQUFrQyxHQUFsQyxDQUF0SDtBQUE2SixtQkFBTyxJQUFJNUUsQ0FBQyxDQUFDNkcsV0FBTixDQUFrQmhMLENBQWxCLEVBQW9CQyxDQUFwQixFQUFzQkQsQ0FBQyxHQUFDZSxDQUF4QixFQUEwQmQsQ0FBQyxHQUFDb0IsQ0FBNUIsQ0FBUDtBQUFzQyxXQUE3cUI7QUFBOHFCO0FBQUMsT0FBMTNzRCxFQUEyM3NEOEMsQ0FBQyxDQUFDakIsT0FBRixDQUFVaVksS0FBVixDQUFnQmhZLFNBQWhCLEdBQTBCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBZCxFQUFyNXNELEVBQXU3c0Q5SyxDQUFDLENBQUNqQixPQUFGLENBQVU4RSxDQUFWLEdBQVksVUFBU2hJLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBcEIsRUFBd0MsS0FBS2xDLElBQUwsQ0FBVS9NLENBQVYsQ0FBeEMsRUFBcUQsS0FBS3lRLGNBQUwsR0FBb0IsVUFBU3pRLENBQVQsRUFBVztBQUFDLGVBQUksSUFBSUMsQ0FBQyxHQUFDLElBQUlrRSxDQUFDLENBQUM2RyxXQUFOLEVBQU4sRUFBd0JqSyxDQUFDLEdBQUMsQ0FBOUIsRUFBZ0NBLENBQUMsR0FBQyxLQUFLOE0sUUFBTCxDQUFjbE0sTUFBaEQsRUFBdURaLENBQUMsRUFBeEQsRUFBMkRkLENBQUMsQ0FBQzBMLGNBQUYsQ0FBaUIsS0FBS2tDLFFBQUwsQ0FBYzlNLENBQWQsRUFBaUIwUCxjQUFqQixDQUFnQ3pRLENBQWhDLENBQWpCOztBQUFxRCxpQkFBT0MsQ0FBUDtBQUFTLFNBQTlNO0FBQStNLE9BQTlwdEQsRUFBK3B0RGtFLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVThFLENBQVYsQ0FBWTdFLFNBQVosR0FBc0IsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVStMLG1CQUFkLEVBQXJydEQsRUFBdXR0RDlLLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTJZLE1BQVYsR0FBaUIsVUFBUzdiLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBcEIsRUFBd0MsS0FBS2xDLElBQUwsQ0FBVS9NLENBQVYsQ0FBeEMsRUFBcUQsS0FBS2dPLE1BQUwsR0FBWSxZQUFVLENBQUUsQ0FBN0U7QUFBOEUsT0FBbDB0RCxFQUFtMHREN0osQ0FBQyxDQUFDakIsT0FBRixDQUFVMlksTUFBVixDQUFpQjFZLFNBQWpCLEdBQTJCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBZCxFQUE5MXRELEVBQWc0dEQ5SyxDQUFDLENBQUMyWCxnQkFBRixHQUFtQixVQUFTOWIsQ0FBVCxFQUFXO0FBQUMsWUFBSUMsQ0FBQyxHQUFDRCxDQUFDLENBQUNnRSxLQUFGLENBQVEseUNBQVIsS0FBb0QsRUFBMUQ7QUFBNkQsZUFBTy9ELENBQUMsQ0FBQyxDQUFELENBQUQsSUFBTUEsQ0FBQyxDQUFDLENBQUQsQ0FBUCxJQUFZQSxDQUFDLENBQUMsQ0FBRCxDQUFwQjtBQUF3QixPQUFwL3RELEVBQXEvdERrRSxDQUFDLENBQUNqQixPQUFGLENBQVU0SyxLQUFWLEdBQWdCLFVBQVM5TixDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQzs7QUFBNkMsYUFBSSxJQUFJQyxDQUFDLEdBQUMsRUFBTixFQUFTYyxDQUFDLEdBQUMsQ0FBZixFQUFpQkEsQ0FBQyxHQUFDZixDQUFDLENBQUMwQixVQUFGLENBQWFDLE1BQWhDLEVBQXVDWixDQUFDLEVBQXhDLEVBQTJDZCxDQUFDLElBQUVELENBQUMsQ0FBQzBCLFVBQUYsQ0FBYVgsQ0FBYixFQUFnQitYLElBQW5COztBQUF3QjdZLFNBQUMsR0FBQ0EsQ0FBQyxDQUFDZ0UsT0FBRixDQUFVLGlFQUFWLEVBQTRFLEVBQTVFLENBQUY7QUFBa0YsWUFBSTVDLENBQUMsR0FBQyxDQUFDcEIsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDK0IsY0FBRixDQUFpQmpHLENBQWpCLENBQUgsRUFBd0JzSyxLQUF4QixDQUE4QixHQUE5QixDQUFOOztBQUF5QyxhQUFJeEosQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDTSxDQUFDLENBQUNNLE1BQVosRUFBbUJaLENBQUMsRUFBcEIsRUFBdUIsSUFBRyxNQUFJb0QsQ0FBQyxDQUFDOEIsSUFBRixDQUFPNUUsQ0FBQyxDQUFDTixDQUFELENBQVIsQ0FBUCxFQUFvQixLQUFJLElBQUljLENBQUMsR0FBQ1IsQ0FBQyxDQUFDTixDQUFELENBQUQsQ0FBS3dKLEtBQUwsQ0FBVyxHQUFYLENBQU4sRUFBc0JuSSxDQUFDLEdBQUNQLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzBJLEtBQUwsQ0FBVyxHQUFYLENBQXhCLEVBQXdDakksQ0FBQyxHQUFDVCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUswSSxLQUFMLENBQVcsR0FBWCxDQUExQyxFQUEwRGhJLENBQUMsR0FBQyxDQUFoRSxFQUFrRUEsQ0FBQyxHQUFDSCxDQUFDLENBQUNULE1BQXRFLEVBQTZFWSxDQUFDLEVBQTlFLEVBQWlGO0FBQUMsY0FBSUMsQ0FBQyxHQUFDMkIsQ0FBQyxDQUFDOEIsSUFBRixDQUFPN0QsQ0FBQyxDQUFDRyxDQUFELENBQVIsQ0FBTjs7QUFBbUIsY0FBRyxNQUFJQyxDQUFQLEVBQVM7QUFBQyxpQkFBSSxJQUFJL0IsQ0FBQyxHQUFDMEQsQ0FBQyxDQUFDVyxNQUFGLENBQVN0QyxDQUFULEtBQWEsRUFBbkIsRUFBc0JPLENBQUMsR0FBQyxDQUE1QixFQUE4QkEsQ0FBQyxHQUFDVCxDQUFDLENBQUNYLE1BQWxDLEVBQXlDb0IsQ0FBQyxFQUExQyxFQUE2QztBQUFDLGtCQUFJbkMsQ0FBQyxHQUFDMEIsQ0FBQyxDQUFDUyxDQUFELENBQUQsQ0FBS3FGLE9BQUwsQ0FBYSxHQUFiLENBQU47QUFBQSxrQkFBd0JqSCxDQUFDLEdBQUNtQixDQUFDLENBQUNTLENBQUQsQ0FBRCxDQUFLZCxNQUFMLENBQVksQ0FBWixFQUFjckIsQ0FBZCxDQUExQjtBQUFBLGtCQUEyQ1EsQ0FBQyxHQUFDa0IsQ0FBQyxDQUFDUyxDQUFELENBQUQsQ0FBS2QsTUFBTCxDQUFZckIsQ0FBQyxHQUFDLENBQWQsRUFBZ0IwQixDQUFDLENBQUNTLENBQUQsQ0FBRCxDQUFLcEIsTUFBTCxHQUFZZixDQUE1QixDQUE3QztBQUE0RSxzQkFBTU8sQ0FBTixJQUFTLFFBQU1DLENBQWYsS0FBbUJYLENBQUMsQ0FBQzBELENBQUMsQ0FBQzhCLElBQUYsQ0FBTzlFLENBQVAsQ0FBRCxDQUFELEdBQWEsSUFBSWdELENBQUMsQ0FBQ2tELFFBQU4sQ0FBZWxELENBQUMsQ0FBQzhCLElBQUYsQ0FBTzlFLENBQVAsQ0FBZixFQUF5QmdELENBQUMsQ0FBQzhCLElBQUYsQ0FBTzdFLENBQVAsQ0FBekIsQ0FBaEM7QUFBcUU7O0FBQUEsZ0JBQUcrQyxDQUFDLENBQUNXLE1BQUYsQ0FBU3RDLENBQVQsSUFBWS9CLENBQVosRUFBYzBELENBQUMsQ0FBQ1ksaUJBQUYsQ0FBb0J2QyxDQUFwQixJQUF1QnVCLENBQUMsQ0FBQ3ZCLENBQUQsQ0FBdEMsRUFBMEMsZ0JBQWNBLENBQTNELEVBQTZELEtBQUksSUFBSTFCLENBQUMsR0FBQ0wsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQjhHLEtBQWpCLENBQXVCdEQsT0FBdkIsQ0FBK0IsSUFBL0IsRUFBb0MsRUFBcEMsQ0FBTixFQUE4QzNDLENBQUMsR0FBQ2IsQ0FBQyxDQUFDZ2IsR0FBRixDQUFNbFUsS0FBTixDQUFZZ0QsS0FBWixDQUFrQixHQUFsQixDQUFoRCxFQUF1RWxLLENBQUMsR0FBQyxDQUE3RSxFQUErRUEsQ0FBQyxHQUFDaUIsQ0FBQyxDQUFDSyxNQUFuRixFQUEwRnRCLENBQUMsRUFBM0YsRUFBOEYsSUFBRyxJQUFFaUIsQ0FBQyxDQUFDakIsQ0FBRCxDQUFELENBQUsrSCxPQUFMLENBQWEsZUFBYixDQUFMLEVBQW1DO0FBQUMsa0JBQUk5SCxDQUFDLEdBQUM2RCxDQUFDLENBQUMyWCxnQkFBRixDQUFtQnhhLENBQUMsQ0FBQ2pCLENBQUQsQ0FBcEIsQ0FBTjtBQUErQixrQkFBR0MsQ0FBSCxFQUFLLEtBQUksSUFBSTBILENBQUMsR0FBQzdELENBQUMsQ0FBQ3NDLFFBQUYsQ0FBV3RDLENBQUMsQ0FBQ2dDLElBQUYsQ0FBTzdGLENBQVAsQ0FBWCxFQUFzQnliLG9CQUF0QixDQUEyQyxNQUEzQyxDQUFOLEVBQXlEclIsQ0FBQyxHQUFDLENBQS9ELEVBQWlFQSxDQUFDLEdBQUMxQyxDQUFDLENBQUNyRyxNQUFyRSxFQUE0RStJLENBQUMsRUFBN0UsRUFBZ0Y7QUFBQyxvQkFBSXpDLENBQUMsR0FBQzlELENBQUMsQ0FBQ29LLGFBQUYsQ0FBZ0J2RyxDQUFDLENBQUMwQyxDQUFELENBQWpCLENBQU47QUFBNEJ2RyxpQkFBQyxDQUFDVSxXQUFGLENBQWMvRCxDQUFkLElBQWlCbUgsQ0FBakI7QUFBbUI7QUFBQztBQUFDO0FBQUM7QUFBQyxPQUE1N3ZELEVBQTY3dkQ5RCxDQUFDLENBQUNqQixPQUFGLENBQVU0SyxLQUFWLENBQWdCM0ssU0FBaEIsR0FBMEIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBdjl2RCxFQUFpL3ZEdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVOFksR0FBVixHQUFjLFVBQVNoYyxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVK0wsbUJBQXBCLEVBQXdDLEtBQUtsQyxJQUFMLENBQVUvTSxDQUFWLENBQXhDLEVBQXFELEtBQUs0USxjQUFMLEdBQW9CLEtBQUsxQyxVQUE5RSxFQUF5RixLQUFLQSxVQUFMLEdBQWdCLFVBQVNsTyxDQUFULEVBQVc7QUFBQyxlQUFLNFEsY0FBTCxDQUFvQjVRLENBQXBCLEdBQXVCLEtBQUt5SSxTQUFMLENBQWUsR0FBZixFQUFvQmhCLFFBQXBCLE1BQWdDekgsQ0FBQyxDQUFDaU0sU0FBRixDQUFZLEtBQUt4RCxTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBWixFQUE4QyxDQUE5QyxDQUF2RCxFQUF3RyxLQUFLTixTQUFMLENBQWUsR0FBZixFQUFvQmhCLFFBQXBCLE1BQWdDekgsQ0FBQyxDQUFDaU0sU0FBRixDQUFZLENBQVosRUFBYyxLQUFLeEQsU0FBTCxDQUFlLEdBQWYsRUFBb0JNLFFBQXBCLENBQTZCLEdBQTdCLENBQWQsQ0FBeEk7QUFBeUwsU0FBOVM7QUFBK1MsWUFBSTFILENBQUMsR0FBQyxLQUFLbUgsZ0JBQUwsR0FBd0JOLGFBQXhCLEVBQU47QUFBOEMsYUFBS2dJLElBQUwsR0FBVSxVQUFTbFEsQ0FBVCxFQUFXO0FBQUMsa0JBQU1xQixDQUFOLElBQVNBLENBQUMsQ0FBQzZPLElBQUYsQ0FBT2xRLENBQVAsQ0FBVDtBQUFtQixTQUF6QyxFQUEwQyxLQUFLaWMsZ0JBQUwsR0FBc0IsWUFBVTtBQUFDLGNBQUcsUUFBTTVhLENBQU4sSUFBU0EsQ0FBQyxDQUFDeU0sS0FBRixDQUFRLFdBQVIsRUFBb0IsQ0FBQyxDQUFyQixFQUF1QixDQUFDLENBQXhCLEVBQTJCckcsUUFBM0IsRUFBWixFQUFrRCxPQUFPLElBQUl0RCxDQUFDLENBQUM0SCxTQUFOLENBQWdCMUssQ0FBQyxDQUFDeU0sS0FBRixDQUFRLFdBQVIsRUFBb0IsQ0FBQyxDQUFyQixFQUF1QixDQUFDLENBQXhCLEVBQTJCdkcsS0FBM0MsQ0FBUDtBQUF5RCxTQUF0TCxFQUF1TCxLQUFLa0osY0FBTCxHQUFvQixVQUFTelEsQ0FBVCxFQUFXO0FBQUMsY0FBRyxRQUFNcUIsQ0FBVCxFQUFXLE9BQU9BLENBQUMsQ0FBQ29QLGNBQUYsQ0FBaUJ6USxDQUFqQixDQUFQO0FBQTJCLFNBQTdQLEVBQThQLEtBQUttTyxjQUFMLEdBQW9CLFVBQVNuTyxDQUFULEVBQVc7QUFBQyxjQUFHLFFBQU1xQixDQUFULEVBQVc7QUFBQyxnQkFBSXBCLENBQUMsR0FBQ29CLENBQU47QUFBUSx3QkFBVUEsQ0FBQyxDQUFDK0wsSUFBWixLQUFtQixDQUFDbk4sQ0FBQyxHQUFDLElBQUlrRSxDQUFDLENBQUNqQixPQUFGLENBQVUxQixHQUFkLEVBQUgsRUFBc0I0TCxJQUF0QixHQUEyQixLQUEzQixFQUFpQ25OLENBQUMsQ0FBQ3lOLFVBQUYsQ0FBYTJHLE9BQWIsR0FBcUIsSUFBSWxRLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxTQUFmLEVBQXlCaEcsQ0FBQyxDQUFDb0gsU0FBRixDQUFZLFNBQVosRUFBdUJsQixLQUFoRCxDQUF0RCxFQUE2R3RILENBQUMsQ0FBQ3lOLFVBQUYsQ0FBYXdPLG1CQUFiLEdBQWlDLElBQUkvWCxDQUFDLENBQUNrRCxRQUFOLENBQWUscUJBQWYsRUFBcUNoRyxDQUFDLENBQUNvSCxTQUFGLENBQVkscUJBQVosRUFBbUNsQixLQUF4RSxDQUE5SSxFQUE2TnRILENBQUMsQ0FBQ3lOLFVBQUYsQ0FBYXlPLFFBQWIsR0FBc0IsSUFBSWhZLENBQUMsQ0FBQ2tELFFBQU4sQ0FBZSxVQUFmLEVBQTBCaEcsQ0FBQyxDQUFDb0gsU0FBRixDQUFZLFVBQVosRUFBd0JsQixLQUFsRCxDQUFuUCxFQUE0U3RILENBQUMsQ0FBQzROLFFBQUYsR0FBV3hNLENBQUMsQ0FBQ3dNLFFBQTVVLEdBQXNWLFNBQU81TixDQUFDLENBQUNtTixJQUFULEtBQWdCLEtBQUszRSxTQUFMLENBQWUsT0FBZixFQUF3QmhCLFFBQXhCLE9BQXFDeEgsQ0FBQyxDQUFDeU4sVUFBRixDQUFhek0sS0FBYixHQUFtQixJQUFJa0QsQ0FBQyxDQUFDa0QsUUFBTixDQUFlLE9BQWYsRUFBdUIsS0FBS29CLFNBQUwsQ0FBZSxPQUFmLEVBQXdCbEIsS0FBL0MsQ0FBeEQsR0FBK0csS0FBS2tCLFNBQUwsQ0FBZSxRQUFmLEVBQXlCaEIsUUFBekIsT0FBc0N4SCxDQUFDLENBQUN5TixVQUFGLENBQWF4TSxNQUFiLEdBQW9CLElBQUlpRCxDQUFDLENBQUNrRCxRQUFOLENBQWUsUUFBZixFQUF3QixLQUFLb0IsU0FBTCxDQUFlLFFBQWYsRUFBeUJsQixLQUFqRCxDQUExRCxDQUEvSCxDQUF0VjtBQUF5a0IsZ0JBQUl4RyxDQUFDLEdBQUNkLENBQUMsQ0FBQzhOLE1BQVI7QUFBZTlOLGFBQUMsQ0FBQzhOLE1BQUYsR0FBUyxJQUFULEVBQWM5TixDQUFDLENBQUMrTixNQUFGLENBQVNoTyxDQUFULENBQWQsRUFBMEJDLENBQUMsQ0FBQzhOLE1BQUYsR0FBU2hOLENBQW5DO0FBQXFDO0FBQUMsU0FBaDdCO0FBQWk3QixPQUF6eHlELEVBQTB4eURvRCxDQUFDLENBQUNqQixPQUFGLENBQVU4WSxHQUFWLENBQWM3WSxTQUFkLEdBQXdCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVUrTCxtQkFBZCxFQUFsenlELEVBQW8xeUQ5SyxDQUFDLENBQUNqQixPQUFGLENBQVVrWixJQUFWLEdBQWUsVUFBU3BjLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFwQixFQUFnQyxLQUFLVixJQUFMLENBQVUvTSxDQUFWLENBQWhDLEVBQTZDLEtBQUtrTSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSWMsQ0FBQyxHQUFDLEtBQUswSCxTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBTjtBQUFBLGNBQXdDMUgsQ0FBQyxHQUFDLEtBQUtvSCxTQUFMLENBQWUsR0FBZixFQUFvQk0sUUFBcEIsQ0FBNkIsR0FBN0IsQ0FBMUM7QUFBQSxjQUE0RWxILENBQUMsR0FBQyxLQUFLNEcsU0FBTCxDQUFlLE9BQWYsRUFBd0JNLFFBQXhCLENBQWlDLEdBQWpDLENBQTlFO0FBQUEsY0FBb0gzRyxDQUFDLEdBQUMsS0FBS3FHLFNBQUwsQ0FBZSxRQUFmLEVBQXlCTSxRQUF6QixDQUFrQyxHQUFsQyxDQUF0SDs7QUFBNkosY0FBRyxLQUFHbEgsQ0FBSCxJQUFNLEtBQUdPLENBQVosRUFBYztBQUFDLGlCQUFJLElBQUlFLENBQUMsR0FBQyxJQUFJNkIsQ0FBQyxDQUFDNkcsV0FBTixFQUFOLEVBQXdCekksQ0FBQyxHQUFDLENBQTlCLEVBQWdDQSxDQUFDLEdBQUMsS0FBS3NMLFFBQUwsQ0FBY2xNLE1BQWhELEVBQXVEWSxDQUFDLEVBQXhELEVBQTJERCxDQUFDLENBQUNxSixjQUFGLENBQWlCLEtBQUtrQyxRQUFMLENBQWN0TCxDQUFkLEVBQWlCa08sY0FBakIsQ0FBZ0N6USxDQUFoQyxDQUFqQjs7QUFBcURlLGFBQUMsR0FBQzZFLElBQUksQ0FBQzZRLEtBQUwsQ0FBV25VLENBQUMsQ0FBQzJJLEVBQWIsQ0FBRixFQUFtQjVKLENBQUMsR0FBQ3VFLElBQUksQ0FBQzZRLEtBQUwsQ0FBV25VLENBQUMsQ0FBQzhJLEVBQWIsQ0FBckIsRUFBc0N2SixDQUFDLEdBQUMrRCxJQUFJLENBQUM2USxLQUFMLENBQVduVSxDQUFDLENBQUNyQixLQUFGLEVBQVgsQ0FBeEMsRUFBOERtQixDQUFDLEdBQUN3RCxJQUFJLENBQUM2USxLQUFMLENBQVduVSxDQUFDLENBQUNwQixNQUFGLEVBQVgsQ0FBaEU7QUFBdUY7O0FBQUEsY0FBSXNCLENBQUMsR0FBQ3ZDLENBQUMsQ0FBQzZOLEtBQUYsQ0FBUSxNQUFSLEVBQWdCdkcsS0FBdEI7QUFBNEJ0SCxXQUFDLENBQUM2TixLQUFGLENBQVEsTUFBUixFQUFnQnZHLEtBQWhCLEdBQXNCLEVBQXRCO0FBQXlCLGNBQUk5RyxDQUFDLEdBQUNLLENBQUMsQ0FBQ0MsQ0FBQyxHQUFDYyxDQUFILEVBQUtSLENBQUMsR0FBQ2UsQ0FBUCxDQUFQO0FBQUEsY0FBaUJXLENBQUMsR0FBQ3RDLENBQUMsQ0FBQ3FCLFVBQUYsQ0FBYSxJQUFiLENBQW5CO0FBQXNDcUMsV0FBQyxDQUFDdU0sV0FBRixDQUFjM04sQ0FBZCxHQUFpQixLQUFLb0wsY0FBTCxDQUFvQnBMLENBQXBCLENBQWpCLEVBQXdDLElBQUlvQixDQUFDLENBQUNqQixPQUFGLENBQVVtWixhQUFkLENBQTRCO0FBQUMzTixvQkFBUSxFQUFDLENBQVY7QUFBWWhOLHNCQUFVLEVBQUMsRUFBdkI7QUFBMEJnTSxzQkFBVSxFQUFDLENBQUM7QUFBQzlMLHNCQUFRLEVBQUMsTUFBVjtBQUFpQjJGLG1CQUFLLEVBQUM7QUFBdkIsYUFBRCxFQUE0QztBQUFDM0Ysc0JBQVEsRUFBQyxnQkFBVjtBQUEyQjJGLG1CQUFLLEVBQUM7QUFBakMsYUFBNUM7QUFBckMsV0FBNUIsRUFBeUoyRSxLQUF6SixDQUErSm5KLENBQS9KLEVBQWlLLENBQWpLLEVBQW1LLENBQW5LLEVBQXFLaEMsQ0FBQyxHQUFDYyxDQUF2SyxFQUF5S1IsQ0FBQyxHQUFDZSxDQUEzSyxDQUF4QztBQUFzTixjQUFJeEIsQ0FBQyxHQUFDRSxDQUFDLENBQUNDLENBQUMsR0FBQ2MsQ0FBSCxFQUFLUixDQUFDLEdBQUNlLENBQVAsQ0FBUDtBQUFBLGNBQWlCakIsQ0FBQyxHQUFDUCxDQUFDLENBQUNrQixVQUFGLENBQWEsSUFBYixDQUFuQjtBQUFzQ3FDLFdBQUMsQ0FBQ3VNLFdBQUYsQ0FBY3ZQLENBQWQsR0FBaUJsQixDQUFDLENBQUMrTixNQUFGLENBQVM3TSxDQUFULENBQWpCLEVBQTZCQSxDQUFDLENBQUNtYix3QkFBRixHQUEyQixnQkFBeEQsRUFBeUVuYixDQUFDLENBQUNnTyxTQUFGLEdBQVlwTSxDQUFDLENBQUN3RixhQUFGLENBQWdCOUgsQ0FBaEIsRUFBa0IsV0FBbEIsQ0FBckYsRUFBb0hVLENBQUMsQ0FBQ29iLFFBQUYsQ0FBVyxDQUFYLEVBQWEsQ0FBYixFQUFleGIsQ0FBQyxHQUFDYyxDQUFqQixFQUFtQlIsQ0FBQyxHQUFDZSxDQUFyQixDQUFwSCxFQUE0SXBDLENBQUMsQ0FBQ21QLFNBQUYsR0FBWWhPLENBQUMsQ0FBQ29ILGFBQUYsQ0FBZ0IzSCxDQUFoQixFQUFrQixXQUFsQixDQUF4SixFQUF1TFosQ0FBQyxDQUFDdWMsUUFBRixDQUFXLENBQVgsRUFBYSxDQUFiLEVBQWV4YixDQUFDLEdBQUNjLENBQWpCLEVBQW1CUixDQUFDLEdBQUNlLENBQXJCLENBQXZMLEVBQStNbkMsQ0FBQyxDQUFDNk4sS0FBRixDQUFRLE1BQVIsRUFBZ0J2RyxLQUFoQixHQUFzQi9FLENBQXJPO0FBQXVPLFNBQXYvQixFQUF3L0IsS0FBS3dMLE1BQUwsR0FBWSxZQUFVLENBQUUsQ0FBaGhDO0FBQWloQyxPQUFoNDBELEVBQWk0MEQ3SixDQUFDLENBQUNqQixPQUFGLENBQVVrWixJQUFWLENBQWVqWixTQUFmLEdBQXlCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQTE1MEQsRUFBbzcwRHRKLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXNaLFFBQVYsR0FBbUIsVUFBU3hjLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFwQixFQUFnQyxLQUFLVixJQUFMLENBQVUvTSxDQUFWLENBQWhDLEVBQTZDLEtBQUtrTSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBVztBQUFDLGNBQUlDLENBQUMsR0FBQyxlQUFhLE9BQU93Yyx3QkFBMUI7QUFBQSxjQUFtRDFiLENBQUMsR0FBQ2YsQ0FBQyxDQUFDbVEsU0FBdkQ7QUFBQSxjQUFpRTlPLENBQUMsR0FBQ3JCLENBQUMsQ0FBQ21SLFNBQXJFO0FBQStFbFIsV0FBQyxLQUFHd2Msd0JBQXdCLENBQUN0WixTQUF6QixDQUFtQ2dOLFNBQW5DLEdBQTZDLFlBQVUsQ0FBRSxDQUF6RCxFQUEwRHNNLHdCQUF3QixDQUFDdFosU0FBekIsQ0FBbUNnTyxTQUFuQyxHQUE2QyxZQUFVLENBQUUsQ0FBdEgsQ0FBRCxFQUF5SHBRLENBQUMsQ0FBQzJiLElBQUYsQ0FBTzFjLENBQVAsQ0FBekg7O0FBQW1JLGVBQUksSUFBSTZCLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLZ00sUUFBTCxDQUFjbE0sTUFBNUIsRUFBbUNFLENBQUMsRUFBcEMsRUFBdUM7QUFBQyxnQkFBSU8sQ0FBQyxHQUFDLEtBQUt5TCxRQUFMLENBQWNoTSxDQUFkLENBQU47O0FBQXVCLGdCQUFHLEtBQUssQ0FBTCxLQUFTTyxDQUFDLENBQUM4TixJQUFkLEVBQW1CO0FBQUMsa0JBQUk1TixDQUFDLEdBQUMsS0FBSyxDQUFMLEtBQVNGLENBQUMsQ0FBQzZaLGdCQUFYLElBQTZCN1osQ0FBQyxDQUFDNlosZ0JBQUYsRUFBbkM7QUFBd0QsZUFBQzNaLENBQUQsSUFBSUYsQ0FBQyxDQUFDMEwsS0FBRixDQUFRLFdBQVIsRUFBb0IsQ0FBQyxDQUFyQixFQUF1QixDQUFDLENBQXhCLEVBQTJCckcsUUFBM0IsRUFBSixLQUE0Q25GLENBQUMsR0FBQyxJQUFJNkIsQ0FBQyxDQUFDNEgsU0FBTixDQUFnQjNKLENBQUMsQ0FBQzBMLEtBQUYsQ0FBUSxXQUFSLEVBQW9CLENBQUMsQ0FBckIsRUFBdUIsQ0FBQyxDQUF4QixFQUEyQnZHLEtBQTNDLENBQTlDLEdBQWlHakYsQ0FBQyxJQUFFQSxDQUFDLENBQUM0SixLQUFGLENBQVFsTSxDQUFSLENBQXBHLEVBQStHb0MsQ0FBQyxDQUFDOE4sSUFBRixDQUFPbFEsQ0FBUCxDQUEvRyxFQUF5SEMsQ0FBQyxLQUFHd2Msd0JBQXdCLENBQUN0WixTQUF6QixDQUFtQ2dPLFNBQW5DLEdBQTZDOVAsQ0FBaEQsQ0FBMUgsRUFBNktpQixDQUFDLElBQUVBLENBQUMsQ0FBQzZKLE9BQUYsQ0FBVW5NLENBQVYsQ0FBaEw7QUFBNkw7QUFBQzs7QUFBQXFCLFdBQUMsQ0FBQ3FiLElBQUYsQ0FBTzFjLENBQVAsR0FBVUEsQ0FBQyxDQUFDb1IsSUFBRixFQUFWLEVBQW1CblIsQ0FBQyxLQUFHd2Msd0JBQXdCLENBQUN0WixTQUF6QixDQUFtQ2dOLFNBQW5DLEdBQTZDcFAsQ0FBN0MsRUFBK0MwYix3QkFBd0IsQ0FBQ3RaLFNBQXpCLENBQW1DZ08sU0FBbkMsR0FBNkM5UCxDQUEvRixDQUFwQjtBQUFzSCxTQUFydEIsRUFBc3RCLEtBQUsyTSxNQUFMLEdBQVksWUFBVSxDQUFFLENBQTl1QjtBQUErdUIsT0FBbHMyRCxFQUFtczJEN0osQ0FBQyxDQUFDakIsT0FBRixDQUFVc1osUUFBVixDQUFtQnJaLFNBQW5CLEdBQTZCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQWh1MkQsRUFBMHYyRHRKLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXlaLE1BQVYsR0FBaUIsVUFBUzNjLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFwQixFQUFnQyxLQUFLVixJQUFMLENBQVUvTSxDQUFWLENBQWhDLEVBQTZDLEtBQUtrTSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsY0FBSWMsQ0FBQyxHQUFDZCxDQUFDLENBQUN3USxjQUFGLENBQWlCelEsQ0FBakIsQ0FBTjtBQUFBLGNBQTBCcUIsQ0FBQyxHQUFDdUUsSUFBSSxDQUFDNlEsS0FBTCxDQUFXMVYsQ0FBQyxDQUFDa0ssRUFBYixDQUE1QjtBQUFBLGNBQTZDcEosQ0FBQyxHQUFDK0QsSUFBSSxDQUFDNlEsS0FBTCxDQUFXMVYsQ0FBQyxDQUFDcUssRUFBYixDQUEvQztBQUFBLGNBQWdFaEosQ0FBQyxHQUFDd0QsSUFBSSxDQUFDNlEsS0FBTCxDQUFXMVYsQ0FBQyxDQUFDRSxLQUFGLEVBQVgsQ0FBbEU7QUFBQSxjQUF3RnFCLENBQUMsR0FBQ3NELElBQUksQ0FBQzZRLEtBQUwsQ0FBVzFWLENBQUMsQ0FBQ0csTUFBRixFQUFYLENBQTFGO0FBQUEsY0FBaUhxQixDQUFDLEdBQUN0QyxDQUFDLENBQUM2TixLQUFGLENBQVEsUUFBUixFQUFrQnZHLEtBQXJJO0FBQTJJdEgsV0FBQyxDQUFDNk4sS0FBRixDQUFRLFFBQVIsRUFBa0J2RyxLQUFsQixHQUF3QixFQUF4Qjs7QUFBMkIsZUFBSSxJQUFJL0UsQ0FBQyxHQUFDLENBQU4sRUFBUS9CLENBQUMsR0FBQyxDQUFWLEVBQVlzQyxDQUFDLEdBQUMsQ0FBbEIsRUFBb0JBLENBQUMsR0FBQyxLQUFLOEssUUFBTCxDQUFjbE0sTUFBcEMsRUFBMkNvQixDQUFDLEVBQTVDLEVBQStDO0FBQUMsZ0JBQUluQyxDQUFDLEdBQUMsS0FBS2lOLFFBQUwsQ0FBYzlLLENBQWQsRUFBaUI2WixtQkFBakIsSUFBc0MsQ0FBNUM7QUFBOENwYSxhQUFDLEdBQUNvRCxJQUFJLENBQUMySCxHQUFMLENBQVMvSyxDQUFULEVBQVc1QixDQUFYLENBQUYsRUFBZ0JILENBQUMsR0FBQ21GLElBQUksQ0FBQzJILEdBQUwsQ0FBUzlNLENBQVQsRUFBV0csQ0FBWCxDQUFsQjtBQUFnQzs7QUFBQSxjQUFJTyxDQUFDLEdBQUNMLENBQUMsQ0FBQ3NCLENBQUMsR0FBQyxJQUFFSSxDQUFMLEVBQU9GLENBQUMsR0FBQyxJQUFFN0IsQ0FBWCxDQUFQO0FBQUEsY0FBcUJXLENBQUMsR0FBQ0QsQ0FBQyxDQUFDVyxVQUFGLENBQWEsSUFBYixDQUF2QjtBQUEwQ3FDLFdBQUMsQ0FBQ3VNLFdBQUYsQ0FBY3RQLENBQWQsR0FBaUJBLENBQUMsQ0FBQzZLLFNBQUYsQ0FBWSxDQUFDNUssQ0FBRCxHQUFHbUIsQ0FBZixFQUFpQixDQUFDWCxDQUFELEdBQUdwQixDQUFwQixDQUFqQixFQUF3Q1IsQ0FBQyxDQUFDK04sTUFBRixDQUFTNU0sQ0FBVCxDQUF4Qzs7QUFBb0QsZUFBSTJCLENBQUMsR0FBQyxDQUFOLEVBQVFBLENBQUMsR0FBQyxLQUFLOEssUUFBTCxDQUFjbE0sTUFBeEIsRUFBK0JvQixDQUFDLEVBQWhDLEVBQW1DLGNBQVksT0FBTyxLQUFLOEssUUFBTCxDQUFjOUssQ0FBZCxFQUFpQm1KLEtBQXBDLElBQTJDLEtBQUsyQixRQUFMLENBQWM5SyxDQUFkLEVBQWlCbUosS0FBakIsQ0FBdUI5SyxDQUF2QixFQUF5QixDQUF6QixFQUEyQixDQUEzQixFQUE2QmdCLENBQUMsR0FBQyxJQUFFSSxDQUFqQyxFQUFtQ0YsQ0FBQyxHQUFDLElBQUU3QixDQUF2QyxDQUEzQzs7QUFBcUZULFdBQUMsQ0FBQzRiLFNBQUYsQ0FBWXphLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCaUIsQ0FBQyxHQUFDLElBQUVJLENBQXRCLEVBQXdCRixDQUFDLEdBQUMsSUFBRTdCLENBQTVCLEVBQThCWSxDQUFDLEdBQUNtQixDQUFoQyxFQUFrQ1gsQ0FBQyxHQUFDcEIsQ0FBcEMsRUFBc0MyQixDQUFDLEdBQUMsSUFBRUksQ0FBMUMsRUFBNENGLENBQUMsR0FBQyxJQUFFN0IsQ0FBaEQsR0FBbURSLENBQUMsQ0FBQzZOLEtBQUYsQ0FBUSxRQUFSLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUJ2RyxLQUFyQixHQUEyQmhGLENBQTlFO0FBQWdGLFNBQWhwQixFQUFpcEIsS0FBS3lMLE1BQUwsR0FBWSxZQUFVLENBQUUsQ0FBenFCO0FBQTBxQixPQUFqODNELEVBQWs4M0Q3SixDQUFDLENBQUNqQixPQUFGLENBQVV5WixNQUFWLENBQWlCeFosU0FBakIsR0FBMkIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBNzkzRCxFQUF1LzNEdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVMlosWUFBVixHQUF1QixVQUFTN2MsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQXBCLEVBQWdDLEtBQUtWLElBQUwsQ0FBVS9NLENBQVYsQ0FBaEMsRUFBNkMsS0FBS3dPLDRCQUFMLEVBQTdDLEVBQWlGLEtBQUt0QyxLQUFMLEdBQVcsWUFBVSxDQUFFLENBQXhHO0FBQXlHLE9BQW5vNEQsRUFBb280RC9ILENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVTJaLFlBQVYsQ0FBdUIxWixTQUF2QixHQUFpQyxJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBZCxFQUFycTRELEVBQStyNER0SixDQUFDLENBQUNqQixPQUFGLENBQVU0WixZQUFWLEdBQXVCLFVBQVM5YyxDQUFULEVBQVc7QUFBQyxhQUFLK00sSUFBTCxHQUFVNUksQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBcEIsRUFBZ0MsS0FBS1YsSUFBTCxDQUFVL00sQ0FBVixDQUFoQyxFQUE2QyxLQUFLa00sS0FBTCxHQUFXLFlBQVUsQ0FBRSxDQUFwRTtBQUFxRSxPQUF2eTRELEVBQXd5NEQvSCxDQUFDLENBQUNqQixPQUFGLENBQVU0WixZQUFWLENBQXVCM1osU0FBdkIsR0FBaUMsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBejA0RCxFQUFtMjREdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVNlosV0FBVixHQUFzQixVQUFTL2MsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQXBCLEVBQWdDLEtBQUtWLElBQUwsQ0FBVS9NLENBQVYsQ0FBaEMsRUFBNkMsS0FBS2tNLEtBQUwsR0FBVyxZQUFVLENBQUUsQ0FBcEU7QUFBcUUsT0FBMTg0RCxFQUEyODREL0gsQ0FBQyxDQUFDakIsT0FBRixDQUFVNlosV0FBVixDQUFzQjVaLFNBQXRCLEdBQWdDLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQTMrNEQsRUFBcWc1RHRKLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVW1aLGFBQVYsR0FBd0IsVUFBU3JjLENBQVQsRUFBVztBQUFDLGFBQUsrTSxJQUFMLEdBQVU1SSxDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFwQixFQUFnQyxLQUFLVixJQUFMLENBQVUvTSxDQUFWLENBQWhDO0FBQTZDLFlBQUlxQixDQUFDLEdBQUM4QyxDQUFDLENBQUNxRyxhQUFGLENBQWdCLEtBQUsvQixTQUFMLENBQWUsUUFBZixFQUF5QmxCLEtBQXpDLENBQU47O0FBQXNELGdCQUFPLEtBQUtrQixTQUFMLENBQWUsTUFBZixFQUF1QmIsY0FBdkIsQ0FBc0MsUUFBdEMsQ0FBUDtBQUF3RCxlQUFJLFVBQUo7QUFBZSxnQkFBSTNILENBQUMsR0FBQ29CLENBQUMsQ0FBQyxDQUFELENBQVA7QUFBV0EsYUFBQyxHQUFDLENBQUMsT0FBSyxPQUFLcEIsQ0FBWCxFQUFhLE9BQUssT0FBS0EsQ0FBdkIsRUFBeUIsT0FBSyxPQUFLQSxDQUFuQyxFQUFxQyxDQUFyQyxFQUF1QyxDQUF2QyxFQUF5QyxPQUFLLE9BQUtBLENBQW5ELEVBQXFELE9BQUssT0FBS0EsQ0FBL0QsRUFBaUUsT0FBSyxPQUFLQSxDQUEzRSxFQUE2RSxDQUE3RSxFQUErRSxDQUEvRSxFQUFpRixPQUFLLE9BQUtBLENBQTNGLEVBQTZGLE9BQUssT0FBS0EsQ0FBdkcsRUFBeUcsT0FBSyxPQUFLQSxDQUFuSCxFQUFxSCxDQUFySCxFQUF1SCxDQUF2SCxFQUF5SCxDQUF6SCxFQUEySCxDQUEzSCxFQUE2SCxDQUE3SCxFQUErSCxDQUEvSCxFQUFpSSxDQUFqSSxFQUFtSSxDQUFuSSxFQUFxSSxDQUFySSxFQUF1SSxDQUF2SSxFQUF5SSxDQUF6SSxFQUEySSxDQUEzSSxDQUFGO0FBQWdKOztBQUFNLGVBQUksV0FBSjtBQUFnQixnQkFBSTRCLENBQUMsR0FBQ1IsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLdUUsSUFBSSxDQUFDc0QsRUFBVixHQUFhLEdBQW5CO0FBQUEsZ0JBQXVCbkksQ0FBQyxHQUFDLFVBQVNmLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWU7QUFBQyxxQkFBT2YsQ0FBQyxHQUFDNEYsSUFBSSxDQUFDNkcsR0FBTCxDQUFTNUssQ0FBVCxJQUFZNUIsQ0FBZCxHQUFnQjJGLElBQUksQ0FBQzhHLEdBQUwsQ0FBUzdLLENBQVQsSUFBWWQsQ0FBbkM7QUFBcUMsYUFBOUU7O0FBQStFTSxhQUFDLEdBQUMsQ0FBQ04sQ0FBQyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsQ0FBQyxJQUFaLENBQUYsRUFBb0JBLENBQUMsQ0FBQyxJQUFELEVBQU0sQ0FBQyxJQUFQLEVBQVksQ0FBQyxJQUFiLENBQXJCLEVBQXdDQSxDQUFDLENBQUMsSUFBRCxFQUFNLENBQUMsSUFBUCxFQUFZLElBQVosQ0FBekMsRUFBMkQsQ0FBM0QsRUFBNkQsQ0FBN0QsRUFBK0RBLENBQUMsQ0FBQyxJQUFELEVBQU0sQ0FBQyxJQUFQLEVBQVksSUFBWixDQUFoRSxFQUFrRkEsQ0FBQyxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsR0FBWCxDQUFuRixFQUFtR0EsQ0FBQyxDQUFDLElBQUQsRUFBTSxDQUFDLElBQVAsRUFBWSxDQUFDLElBQWIsQ0FBcEcsRUFBdUgsQ0FBdkgsRUFBeUgsQ0FBekgsRUFBMkhBLENBQUMsQ0FBQyxJQUFELEVBQU0sQ0FBQyxJQUFQLEVBQVksQ0FBQyxJQUFiLENBQTVILEVBQStJQSxDQUFDLENBQUMsSUFBRCxFQUFNLENBQUMsSUFBUCxFQUFZLElBQVosQ0FBaEosRUFBa0tBLENBQUMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FBbkssRUFBb0wsQ0FBcEwsRUFBc0wsQ0FBdEwsRUFBd0wsQ0FBeEwsRUFBMEwsQ0FBMUwsRUFBNEwsQ0FBNUwsRUFBOEwsQ0FBOUwsRUFBZ00sQ0FBaE0sRUFBa00sQ0FBbE0sRUFBb00sQ0FBcE0sRUFBc00sQ0FBdE0sRUFBd00sQ0FBeE0sRUFBME0sQ0FBMU0sQ0FBRjtBQUErTTs7QUFBTSxlQUFJLGtCQUFKO0FBQXVCTSxhQUFDLEdBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixFQUF5QixDQUF6QixFQUEyQixDQUEzQixFQUE2QixDQUE3QixFQUErQixLQUEvQixFQUFxQyxLQUFyQyxFQUEyQyxLQUEzQyxFQUFpRCxDQUFqRCxFQUFtRCxDQUFuRCxFQUFxRCxDQUFyRCxFQUF1RCxDQUF2RCxFQUF5RCxDQUF6RCxFQUEyRCxDQUEzRCxFQUE2RCxDQUE3RCxDQUFGO0FBQW5qQjs7QUFBcW5CLGlCQUFTUCxDQUFULENBQVdkLENBQVgsRUFBYUMsQ0FBYixFQUFlYyxDQUFmLEVBQWlCTSxDQUFqQixFQUFtQlEsQ0FBbkIsRUFBcUJPLENBQXJCLEVBQXVCO0FBQUMsaUJBQU9wQyxDQUFDLENBQUNlLENBQUMsR0FBQ00sQ0FBRixHQUFJLENBQUosR0FBTSxJQUFFcEIsQ0FBUixHQUFVbUMsQ0FBWCxDQUFSO0FBQXNCOztBQUFBLGlCQUFTZCxDQUFULENBQVd0QixDQUFYLEVBQWFDLENBQWIsRUFBZWMsQ0FBZixFQUFpQk0sQ0FBakIsRUFBbUJRLENBQW5CLEVBQXFCTyxDQUFyQixFQUF1QkUsQ0FBdkIsRUFBeUI7QUFBQ3RDLFdBQUMsQ0FBQ2UsQ0FBQyxHQUFDTSxDQUFGLEdBQUksQ0FBSixHQUFNLElBQUVwQixDQUFSLEdBQVVtQyxDQUFYLENBQUQsR0FBZUUsQ0FBZjtBQUFpQjs7QUFBQSxpQkFBU2pDLENBQVQsQ0FBV0wsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxjQUFJYyxDQUFDLEdBQUNNLENBQUMsQ0FBQ3JCLENBQUQsQ0FBUDtBQUFXLGlCQUFPZSxDQUFDLElBQUVBLENBQUMsR0FBQyxDQUFGLEdBQUlkLENBQUMsR0FBQyxHQUFOLEdBQVVBLENBQVosQ0FBUjtBQUF1Qjs7QUFBQSxZQUFJSyxDQUFDLEdBQUMsS0FBS21JLFNBQUwsQ0FBZSxnQkFBZixFQUFpQ2hCLFFBQWpDLEVBQU47O0FBQWtELGFBQUt5RSxLQUFMLEdBQVcsVUFBU2xNLENBQVQsRUFBV0MsQ0FBWCxFQUFhYyxDQUFiLEVBQWVNLENBQWYsRUFBaUJRLENBQWpCLEVBQW1CO0FBQUMsY0FBSU8sQ0FBQyxHQUFDcEMsQ0FBQyxDQUFDZ2QsWUFBRixDQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIzYixDQUFuQixFQUFxQlEsQ0FBckIsQ0FBTjs7QUFBOEIsZUFBSWQsQ0FBQyxHQUFDLENBQU4sRUFBUUEsQ0FBQyxHQUFDYyxDQUFWLEVBQVlkLENBQUMsRUFBYixFQUFnQixLQUFJZCxDQUFDLEdBQUMsQ0FBTixFQUFRQSxDQUFDLEdBQUNvQixDQUFWLEVBQVlwQixDQUFDLEVBQWIsRUFBZ0I7QUFBQyxnQkFBSXFDLENBQUMsR0FBQ3hCLENBQUMsQ0FBQ3NCLENBQUMsQ0FBQzBXLElBQUgsRUFBUTdZLENBQVIsRUFBVWMsQ0FBVixFQUFZTSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUFQO0FBQUEsZ0JBQTBCa0IsQ0FBQyxHQUFDekIsQ0FBQyxDQUFDc0IsQ0FBQyxDQUFDMFcsSUFBSCxFQUFRN1ksQ0FBUixFQUFVYyxDQUFWLEVBQVlNLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLENBQTdCO0FBQUEsZ0JBQWdEbUIsQ0FBQyxHQUFDMUIsQ0FBQyxDQUFDc0IsQ0FBQyxDQUFDMFcsSUFBSCxFQUFRN1ksQ0FBUixFQUFVYyxDQUFWLEVBQVlNLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLENBQW5EO0FBQUEsZ0JBQXNFWixDQUFDLEdBQUNLLENBQUMsQ0FBQ3NCLENBQUMsQ0FBQzBXLElBQUgsRUFBUTdZLENBQVIsRUFBVWMsQ0FBVixFQUFZTSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixDQUF6RTtBQUFBLGdCQUE0RjBCLENBQUMsR0FBQzFDLENBQUMsQ0FBQyxDQUFELEVBQUdpQyxDQUFILENBQUQsR0FBT2pDLENBQUMsQ0FBQyxDQUFELEVBQUdrQyxDQUFILENBQVIsR0FBY2xDLENBQUMsQ0FBQyxDQUFELEVBQUdtQyxDQUFILENBQWYsR0FBcUJuQyxDQUFDLENBQUMsQ0FBRCxFQUFHSSxDQUFILENBQXRCLEdBQTRCSixDQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBM0g7QUFBQSxnQkFBaUlPLENBQUMsR0FBQ1AsQ0FBQyxDQUFDLENBQUQsRUFBR2lDLENBQUgsQ0FBRCxHQUFPakMsQ0FBQyxDQUFDLENBQUQsRUFBR2tDLENBQUgsQ0FBUixHQUFjbEMsQ0FBQyxDQUFDLENBQUQsRUFBR21DLENBQUgsQ0FBZixHQUFxQm5DLENBQUMsQ0FBQyxDQUFELEVBQUdJLENBQUgsQ0FBdEIsR0FBNEJKLENBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFoSztBQUFBLGdCQUFzS2MsQ0FBQyxHQUFDZCxDQUFDLENBQUMsRUFBRCxFQUFJaUMsQ0FBSixDQUFELEdBQVFqQyxDQUFDLENBQUMsRUFBRCxFQUFJa0MsQ0FBSixDQUFULEdBQWdCbEMsQ0FBQyxDQUFDLEVBQUQsRUFBSW1DLENBQUosQ0FBakIsR0FBd0JuQyxDQUFDLENBQUMsRUFBRCxFQUFJSSxDQUFKLENBQXpCLEdBQWdDSixDQUFDLENBQUMsRUFBRCxFQUFJLENBQUosQ0FBek07QUFBQSxnQkFBZ05lLENBQUMsR0FBQ2YsQ0FBQyxDQUFDLEVBQUQsRUFBSWlDLENBQUosQ0FBRCxHQUFRakMsQ0FBQyxDQUFDLEVBQUQsRUFBSWtDLENBQUosQ0FBVCxHQUFnQmxDLENBQUMsQ0FBQyxFQUFELEVBQUltQyxDQUFKLENBQWpCLEdBQXdCbkMsQ0FBQyxDQUFDLEVBQUQsRUFBSUksQ0FBSixDQUF6QixHQUFnQ0osQ0FBQyxDQUFDLEVBQUQsRUFBSSxDQUFKLENBQW5QO0FBQTBQQyxhQUFDLEtBQUd5QyxDQUFDLEdBQUNuQyxDQUFDLEdBQUNPLENBQUMsR0FBQyxDQUFOLEVBQVFDLENBQUMsSUFBRVgsQ0FBQyxHQUFDLEdBQWhCLENBQUQsRUFBc0JhLENBQUMsQ0FBQ2MsQ0FBQyxDQUFDMFcsSUFBSCxFQUFRN1ksQ0FBUixFQUFVYyxDQUFWLEVBQVlNLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCMEIsQ0FBbEIsQ0FBdkIsRUFBNEN6QixDQUFDLENBQUNjLENBQUMsQ0FBQzBXLElBQUgsRUFBUTdZLENBQVIsRUFBVWMsQ0FBVixFQUFZTSxDQUFaLEVBQWMsQ0FBZCxFQUFnQixDQUFoQixFQUFrQlQsQ0FBbEIsQ0FBN0MsRUFBa0VVLENBQUMsQ0FBQ2MsQ0FBQyxDQUFDMFcsSUFBSCxFQUFRN1ksQ0FBUixFQUFVYyxDQUFWLEVBQVlNLENBQVosRUFBYyxDQUFkLEVBQWdCLENBQWhCLEVBQWtCRixDQUFsQixDQUFuRSxFQUF3RkcsQ0FBQyxDQUFDYyxDQUFDLENBQUMwVyxJQUFILEVBQVE3WSxDQUFSLEVBQVVjLENBQVYsRUFBWU0sQ0FBWixFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsRUFBa0JELENBQWxCLENBQXpGO0FBQThHOztBQUFBcEIsV0FBQyxDQUFDaWQsU0FBRixDQUFZLENBQVosRUFBYyxDQUFkLEVBQWdCNWIsQ0FBaEIsRUFBa0JRLENBQWxCLEdBQXFCN0IsQ0FBQyxDQUFDa2QsWUFBRixDQUFlOWEsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixDQUFyQjtBQUEyQyxTQUFqZjtBQUFrZixPQUFoNzdELEVBQWk3N0QrQixDQUFDLENBQUNqQixPQUFGLENBQVVtWixhQUFWLENBQXdCbFosU0FBeEIsR0FBa0MsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBbjk3RCxFQUE2KzdEdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVaWEsY0FBVixHQUF5QixVQUFTbmQsQ0FBVCxFQUFXO0FBQUMsYUFBSytNLElBQUwsR0FBVTVJLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQXBCLEVBQWdDLEtBQUtWLElBQUwsQ0FBVS9NLENBQVYsQ0FBaEMsRUFBNkMsS0FBS29kLFVBQUwsR0FBZ0J4WCxJQUFJLENBQUM2USxLQUFMLENBQVcsS0FBS2hPLFNBQUwsQ0FBZSxjQUFmLEVBQStCZixRQUEvQixFQUFYLENBQTdELEVBQW1ILEtBQUtrVixtQkFBTCxHQUF5QixLQUFLUSxVQUFqSixFQUE0SixLQUFLbFIsS0FBTCxHQUFXLFVBQVNsTSxDQUFULEVBQVdDLENBQVgsRUFBYWMsQ0FBYixFQUFlTSxDQUFmLEVBQWlCUSxDQUFqQixFQUFtQjtBQUFDdkIsV0FBQyxJQUFFLEtBQUssQ0FBTCxLQUFTQSxDQUFDLENBQUMrYyxVQUFkLElBQTBCcmQsQ0FBQyxDQUFDNlEsTUFBRixDQUFTeU0sRUFBVCxHQUFZblosQ0FBQyxDQUFDUyxRQUFGLEVBQVosRUFBeUI1RSxDQUFDLENBQUM2USxNQUFGLENBQVMvQyxLQUFULENBQWV5UCxPQUFmLEdBQXVCLE1BQWhELEVBQXVEM2MsQ0FBQyxDQUFDNGMsSUFBRixDQUFPeGEsV0FBUCxDQUFtQmhELENBQUMsQ0FBQzZRLE1BQXJCLENBQXZELEVBQW9GdlEsQ0FBQyxDQUFDK2MsVUFBRixDQUFhcmQsQ0FBQyxDQUFDNlEsTUFBZixFQUFzQjVRLENBQXRCLEVBQXdCYyxDQUF4QixFQUEwQk0sQ0FBMUIsRUFBNEJRLENBQTVCLEVBQThCLEtBQUt1YixVQUFuQyxDQUFwRixFQUFtSXhjLENBQUMsQ0FBQzRjLElBQUYsQ0FBTzFhLFdBQVAsQ0FBbUI5QyxDQUFDLENBQUM2USxNQUFyQixDQUE3SixJQUEyTDFNLENBQUMsQ0FBQ00sR0FBRixDQUFNLHVEQUFOLENBQTNMO0FBQTBQLFNBQXJiO0FBQXNiLE9BQXg4OEQsRUFBeTg4RE4sQ0FBQyxDQUFDakIsT0FBRixDQUFVaWEsY0FBVixDQUF5QmhhLFNBQXpCLEdBQW1DLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQTUrOEQsRUFBc2c5RHRKLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVhLEtBQVYsR0FBZ0IsWUFBVSxDQUFFLENBQWxpOUQsRUFBbWk5RHRaLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVhLEtBQVYsQ0FBZ0J0YSxTQUFoQixHQUEwQixJQUFJZ0IsQ0FBQyxDQUFDakIsT0FBRixDQUFVdUssV0FBZCxFQUE3ajlELEVBQXVsOUR0SixDQUFDLENBQUNqQixPQUFGLENBQVV3YSxJQUFWLEdBQWUsWUFBVSxDQUFFLENBQWxuOUQsRUFBbW45RHZaLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXdhLElBQVYsQ0FBZXZhLFNBQWYsR0FBeUIsSUFBSWdCLENBQUMsQ0FBQ2pCLE9BQUYsQ0FBVXVLLFdBQWQsRUFBNW85RCxFQUFzcTlEdEosQ0FBQyxDQUFDakIsT0FBRixDQUFVeWEsT0FBVixHQUFrQixVQUFTM2QsQ0FBVCxFQUFXO0FBQUNtRSxTQUFDLENBQUNNLEdBQUYsQ0FBTSxxQkFBbUJ6RSxDQUFDLENBQUM0QixRQUFyQixHQUE4Qix3QkFBcEM7QUFBOEQsT0FBbHc5RCxFQUFtdzlEdUMsQ0FBQyxDQUFDakIsT0FBRixDQUFVeWEsT0FBVixDQUFrQnhhLFNBQWxCLEdBQTRCLElBQUlnQixDQUFDLENBQUNqQixPQUFGLENBQVV1SyxXQUFkLEVBQS94OUQsRUFBeXo5RHRKLENBQUMsQ0FBQ29LLGFBQUYsR0FBZ0IsVUFBU3ZPLENBQVQsRUFBVztBQUFDLFlBQUlDLENBQUMsR0FBQ0QsQ0FBQyxDQUFDNEIsUUFBRixDQUFXcUMsT0FBWCxDQUFtQixTQUFuQixFQUE2QixFQUE3QixDQUFOO0FBQXVDaEUsU0FBQyxHQUFDQSxDQUFDLENBQUNnRSxPQUFGLENBQVUsS0FBVixFQUFnQixFQUFoQixDQUFGO0FBQXNCLFlBQUlsRCxDQUFDLEdBQUMsSUFBTjtBQUFXLGVBQU0sQ0FBQ0EsQ0FBQyxHQUFDLEtBQUssQ0FBTCxLQUFTb0QsQ0FBQyxDQUFDakIsT0FBRixDQUFVakQsQ0FBVixDQUFULEdBQXNCLElBQUlrRSxDQUFDLENBQUNqQixPQUFGLENBQVVqRCxDQUFWLENBQUosQ0FBaUJELENBQWpCLENBQXRCLEdBQTBDLElBQUltRSxDQUFDLENBQUNqQixPQUFGLENBQVV5YSxPQUFkLENBQXNCM2QsQ0FBdEIsQ0FBN0MsRUFBdUVvTixJQUF2RSxHQUE0RXBOLENBQUMsQ0FBQzRCLFFBQTlFLEVBQXVGYixDQUE3RjtBQUErRixPQUE1LzlELEVBQTYvOURvRCxDQUFDLENBQUNoQyxJQUFGLEdBQU8sVUFBU25DLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUNrRSxTQUFDLENBQUNqQyxPQUFGLENBQVVsQyxDQUFWLEVBQVltRSxDQUFDLENBQUNnQyxJQUFGLENBQU9sRyxDQUFQLENBQVo7QUFBdUIsT0FBemkrRCxFQUEwaStEa0UsQ0FBQyxDQUFDakMsT0FBRixHQUFVLFVBQVNsQyxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDa0UsU0FBQyxDQUFDbkMsVUFBRixDQUFhaEMsQ0FBYixFQUFlbUUsQ0FBQyxDQUFDc0MsUUFBRixDQUFXeEcsQ0FBWCxDQUFmO0FBQThCLE9BQWhtK0QsRUFBaW0rRGtFLENBQUMsQ0FBQ25DLFVBQUYsR0FBYSxVQUFTSSxDQUFULEVBQVdFLENBQVgsRUFBYTtBQUFDNkIsU0FBQyxDQUFDUSxJQUFGLENBQU92QyxDQUFQOztBQUFVLFlBQUlyQixDQUFDLEdBQUMsVUFBU2YsQ0FBVCxFQUFXO0FBQUMsZUFBSSxJQUFJQyxDQUFDLEdBQUNtQyxDQUFDLENBQUN5TyxNQUFaLEVBQW1CNVEsQ0FBbkIsR0FBc0JELENBQUMsQ0FBQzBLLENBQUYsSUFBS3pLLENBQUMsQ0FBQzJkLFVBQVAsRUFBa0I1ZCxDQUFDLENBQUNLLENBQUYsSUFBS0osQ0FBQyxDQUFDNGQsU0FBekIsRUFBbUM1ZCxDQUFDLEdBQUNBLENBQUMsQ0FBQzZkLFlBQXZDOztBQUFvRCxpQkFBT3JkLENBQUMsQ0FBQ3NkLE9BQUYsS0FBWS9kLENBQUMsQ0FBQzBLLENBQUYsSUFBS2pLLENBQUMsQ0FBQ3NkLE9BQW5CLEdBQTRCdGQsQ0FBQyxDQUFDdWQsT0FBRixLQUFZaGUsQ0FBQyxDQUFDSyxDQUFGLElBQUtJLENBQUMsQ0FBQ3VkLE9BQW5CLENBQTVCLEVBQXdEaGUsQ0FBL0Q7QUFBaUUsU0FBN0o7O0FBQThKLGFBQUdtRSxDQUFDLENBQUNDLElBQUYsQ0FBTzZaLFdBQVYsS0FBd0I3YixDQUFDLENBQUN5TyxNQUFGLENBQVNtSSxPQUFULEdBQWlCLFVBQVNoWixDQUFULEVBQVc7QUFBQyxjQUFJQyxDQUFDLEdBQUNjLENBQUMsQ0FBQyxJQUFJb0QsQ0FBQyxDQUFDc0csS0FBTixDQUFZLFFBQU16SyxDQUFOLEdBQVFBLENBQUMsQ0FBQ2tlLE9BQVYsR0FBa0JDLEtBQUssQ0FBQ0QsT0FBcEMsRUFBNEMsUUFBTWxlLENBQU4sR0FBUUEsQ0FBQyxDQUFDb2UsT0FBVixHQUFrQkQsS0FBSyxDQUFDQyxPQUFwRSxDQUFELENBQVA7QUFBc0ZqYSxXQUFDLENBQUNpTSxLQUFGLENBQVE0SSxPQUFSLENBQWdCL1ksQ0FBQyxDQUFDeUssQ0FBbEIsRUFBb0J6SyxDQUFDLENBQUNJLENBQXRCO0FBQXlCLFNBQTVJLEVBQTZJK0IsQ0FBQyxDQUFDeU8sTUFBRixDQUFTb0ksV0FBVCxHQUFxQixVQUFTalosQ0FBVCxFQUFXO0FBQUMsY0FBSUMsQ0FBQyxHQUFDYyxDQUFDLENBQUMsSUFBSW9ELENBQUMsQ0FBQ3NHLEtBQU4sQ0FBWSxRQUFNekssQ0FBTixHQUFRQSxDQUFDLENBQUNrZSxPQUFWLEdBQWtCQyxLQUFLLENBQUNELE9BQXBDLEVBQTRDLFFBQU1sZSxDQUFOLEdBQVFBLENBQUMsQ0FBQ29lLE9BQVYsR0FBa0JELEtBQUssQ0FBQ0MsT0FBcEUsQ0FBRCxDQUFQO0FBQXNGamEsV0FBQyxDQUFDaU0sS0FBRixDQUFRNkksV0FBUixDQUFvQmhaLENBQUMsQ0FBQ3lLLENBQXRCLEVBQXdCekssQ0FBQyxDQUFDSSxDQUExQjtBQUE2QixTQUF6VDtBQUEyVCxZQUFJa0MsQ0FBQyxHQUFDNEIsQ0FBQyxDQUFDb0ssYUFBRixDQUFnQmpNLENBQUMsQ0FBQ1AsZUFBbEIsQ0FBTjtBQUF5Q1EsU0FBQyxDQUFDeU8sSUFBRixHQUFPLENBQUMsQ0FBUixFQUFVek8sQ0FBQyxDQUFDaU0sNEJBQUYsRUFBVjs7QUFBMkMsWUFBSWhNLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBQSxZQUFTbkIsQ0FBQyxHQUFDLFlBQVU7QUFBQzhDLFdBQUMsQ0FBQ2dCLFFBQUYsQ0FBV0UsS0FBWCxJQUFtQmpELENBQUMsQ0FBQ3lPLE1BQUYsQ0FBU2pPLFVBQVQsR0FBb0J1QixDQUFDLENBQUNnQixRQUFGLENBQVdHLFVBQVgsQ0FBc0JsRCxDQUFDLENBQUN5TyxNQUFGLENBQVNqTyxVQUFULENBQW9CSCxXQUExQyxFQUFzREwsQ0FBQyxDQUFDeU8sTUFBRixDQUFTak8sVUFBVCxDQUFvQkYsWUFBMUUsQ0FBcEIsR0FBNEd5QixDQUFDLENBQUNnQixRQUFGLENBQVdHLFVBQVgsQ0FBc0IsR0FBdEIsRUFBMEIsR0FBMUIsQ0FBL0gsRUFBOEosS0FBR25CLENBQUMsQ0FBQ0MsSUFBRixDQUFPaWEsZ0JBQVYsS0FBNkI3YixDQUFDLElBQUUsUUFBTTJCLENBQUMsQ0FBQ0MsSUFBRixDQUFPa2EsVUFBYixJQUF5QixRQUFNbmEsQ0FBQyxDQUFDQyxJQUFGLENBQU9tYSxXQUF0RSxNQUFxRmhjLENBQUMsQ0FBQ3VMLEtBQUYsQ0FBUSxPQUFSLEVBQWlCckcsUUFBakIsT0FBOEJyRixDQUFDLENBQUN5TyxNQUFGLENBQVM1UCxLQUFULEdBQWVzQixDQUFDLENBQUN1TCxLQUFGLENBQVEsT0FBUixFQUFpQi9FLFFBQWpCLENBQTBCLEdBQTFCLENBQWYsRUFBOEMzRyxDQUFDLENBQUN5TyxNQUFGLENBQVMvQyxLQUFULEtBQWlCMUwsQ0FBQyxDQUFDeU8sTUFBRixDQUFTL0MsS0FBVCxDQUFlN00sS0FBZixHQUFxQm1CLENBQUMsQ0FBQ3lPLE1BQUYsQ0FBUzVQLEtBQVQsR0FBZSxJQUFyRCxDQUE1RSxHQUF3SXNCLENBQUMsQ0FBQ3VMLEtBQUYsQ0FBUSxRQUFSLEVBQWtCckcsUUFBbEIsT0FBK0JyRixDQUFDLENBQUN5TyxNQUFGLENBQVMzUCxNQUFULEdBQWdCcUIsQ0FBQyxDQUFDdUwsS0FBRixDQUFRLFFBQVIsRUFBa0IvRSxRQUFsQixDQUEyQixHQUEzQixDQUFoQixFQUFnRDNHLENBQUMsQ0FBQ3lPLE1BQUYsQ0FBUy9DLEtBQVQsS0FBaUIxTCxDQUFDLENBQUN5TyxNQUFGLENBQVMvQyxLQUFULENBQWU1TSxNQUFmLEdBQXNCa0IsQ0FBQyxDQUFDeU8sTUFBRixDQUFTM1AsTUFBVCxHQUFnQixJQUF2RCxDQUEvRSxDQUE3TixDQUE5SjtBQUF5Z0IsY0FBSWxCLENBQUMsR0FBQ29DLENBQUMsQ0FBQ3lPLE1BQUYsQ0FBU3BPLFdBQVQsSUFBc0JMLENBQUMsQ0FBQ3lPLE1BQUYsQ0FBUzVQLEtBQXJDO0FBQUEsY0FBMkNoQixDQUFDLEdBQUNtQyxDQUFDLENBQUN5TyxNQUFGLENBQVNuTyxZQUFULElBQXVCTixDQUFDLENBQUN5TyxNQUFGLENBQVMzUCxNQUE3RTs7QUFBb0YsY0FBRyxLQUFHaUQsQ0FBQyxDQUFDQyxJQUFGLENBQU9pYSxnQkFBVixJQUE0QjliLENBQUMsQ0FBQ3VMLEtBQUYsQ0FBUSxPQUFSLEVBQWlCckcsUUFBakIsRUFBNUIsSUFBeURsRixDQUFDLENBQUN1TCxLQUFGLENBQVEsUUFBUixFQUFrQnJHLFFBQWxCLEVBQXpELEtBQXdGekgsQ0FBQyxHQUFDdUMsQ0FBQyxDQUFDdUwsS0FBRixDQUFRLE9BQVIsRUFBaUIvRSxRQUFqQixDQUEwQixHQUExQixDQUFGLEVBQWlDOUksQ0FBQyxHQUFDc0MsQ0FBQyxDQUFDdUwsS0FBRixDQUFRLFFBQVIsRUFBa0IvRSxRQUFsQixDQUEyQixHQUEzQixDQUEzSCxHQUE0SjVFLENBQUMsQ0FBQ2dCLFFBQUYsQ0FBV0csVUFBWCxDQUFzQnRGLENBQXRCLEVBQXdCQyxDQUF4QixDQUE1SixFQUF1TCxRQUFNa0UsQ0FBQyxDQUFDQyxJQUFGLENBQU9vYSxPQUFiLEtBQXVCamMsQ0FBQyxDQUFDa0csU0FBRixDQUFZLEdBQVosRUFBZ0IsQ0FBQyxDQUFqQixFQUFvQmxCLEtBQXBCLEdBQTBCcEQsQ0FBQyxDQUFDQyxJQUFGLENBQU9vYSxPQUF4RCxDQUF2TCxFQUF3UCxRQUFNcmEsQ0FBQyxDQUFDQyxJQUFGLENBQU9xYSxPQUFiLEtBQXVCbGMsQ0FBQyxDQUFDa0csU0FBRixDQUFZLEdBQVosRUFBZ0IsQ0FBQyxDQUFqQixFQUFvQmxCLEtBQXBCLEdBQTBCcEQsQ0FBQyxDQUFDQyxJQUFGLENBQU9xYSxPQUF4RCxDQUF4UCxFQUF5VCxRQUFNdGEsQ0FBQyxDQUFDQyxJQUFGLENBQU9rYSxVQUFiLElBQXlCLFFBQU1uYSxDQUFDLENBQUNDLElBQUYsQ0FBT21hLFdBQWxXLEVBQThXO0FBQUMsZ0JBQUl4ZCxDQUFDLEdBQUMsSUFBTjtBQUFBLGdCQUFXTSxDQUFDLEdBQUMsSUFBYjtBQUFBLGdCQUFrQlEsQ0FBQyxHQUFDc0MsQ0FBQyxDQUFDcUcsYUFBRixDQUFnQmpJLENBQUMsQ0FBQ2tHLFNBQUYsQ0FBWSxTQUFaLEVBQXVCbEIsS0FBdkMsQ0FBcEI7QUFBa0Usb0JBQU1wRCxDQUFDLENBQUNDLElBQUYsQ0FBT2thLFVBQWIsS0FBMEIvYixDQUFDLENBQUNrRyxTQUFGLENBQVksT0FBWixFQUFxQmhCLFFBQXJCLEtBQWdDMUcsQ0FBQyxHQUFDd0IsQ0FBQyxDQUFDa0csU0FBRixDQUFZLE9BQVosRUFBcUJNLFFBQXJCLENBQThCLEdBQTlCLElBQW1DNUUsQ0FBQyxDQUFDQyxJQUFGLENBQU9rYSxVQUE1RSxHQUF1RjlTLEtBQUssQ0FBQzNKLENBQUMsQ0FBQyxDQUFELENBQUYsQ0FBTCxLQUFjZCxDQUFDLEdBQUNjLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBS3NDLENBQUMsQ0FBQ0MsSUFBRixDQUFPa2EsVUFBNUIsQ0FBakgsR0FBMEosUUFBTW5hLENBQUMsQ0FBQ0MsSUFBRixDQUFPbWEsV0FBYixLQUEyQmhjLENBQUMsQ0FBQ2tHLFNBQUYsQ0FBWSxRQUFaLEVBQXNCaEIsUUFBdEIsS0FBaUNwRyxDQUFDLEdBQUNrQixDQUFDLENBQUNrRyxTQUFGLENBQVksUUFBWixFQUFzQk0sUUFBdEIsQ0FBK0IsR0FBL0IsSUFBb0M1RSxDQUFDLENBQUNDLElBQUYsQ0FBT21hLFdBQTlFLEdBQTBGL1MsS0FBSyxDQUFDM0osQ0FBQyxDQUFDLENBQUQsQ0FBRixDQUFMLEtBQWNSLENBQUMsR0FBQ1EsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFLc0MsQ0FBQyxDQUFDQyxJQUFGLENBQU9tYSxXQUE1QixDQUFySCxDQUExSixFQUF5VCxRQUFNeGQsQ0FBTixLQUFVQSxDQUFDLEdBQUNNLENBQVosQ0FBelQsRUFBd1UsUUFBTUEsQ0FBTixLQUFVQSxDQUFDLEdBQUNOLENBQVosQ0FBeFUsRUFBdVZ3QixDQUFDLENBQUNrRyxTQUFGLENBQVksT0FBWixFQUFvQixDQUFDLENBQXJCLEVBQXdCbEIsS0FBeEIsR0FBOEJwRCxDQUFDLENBQUNDLElBQUYsQ0FBT2thLFVBQTVYLEVBQXVZL2IsQ0FBQyxDQUFDa0csU0FBRixDQUFZLFFBQVosRUFBcUIsQ0FBQyxDQUF0QixFQUF5QmxCLEtBQXpCLEdBQStCcEQsQ0FBQyxDQUFDQyxJQUFGLENBQU9tYSxXQUE3YSxFQUF5YmhjLENBQUMsQ0FBQ3VMLEtBQUYsQ0FBUSxXQUFSLEVBQW9CLENBQUMsQ0FBckIsRUFBdUIsQ0FBQyxDQUF4QixFQUEyQnZHLEtBQTNCLElBQWtDLFlBQVUsSUFBRXhHLENBQVosR0FBYyxHQUFkLEdBQWtCLElBQUVNLENBQXBCLEdBQXNCLEdBQWpmO0FBQXFmOztBQUFBLGVBQUc4QyxDQUFDLENBQUNDLElBQUYsQ0FBT3NhLFdBQVYsSUFBdUJ0YyxDQUFDLENBQUM2YSxTQUFGLENBQVksQ0FBWixFQUFjLENBQWQsRUFBZ0JqZCxDQUFoQixFQUFrQkMsQ0FBbEIsQ0FBdkIsRUFBNENzQyxDQUFDLENBQUN5TCxNQUFGLENBQVM1TCxDQUFULENBQTVDLEVBQXdESSxDQUFDLEtBQUdBLENBQUMsR0FBQyxDQUFDLENBQUgsRUFBSyxjQUFZLE9BQU8yQixDQUFDLENBQUNDLElBQUYsQ0FBT3VhLGNBQTFCLElBQTBDeGEsQ0FBQyxDQUFDQyxJQUFGLENBQU91YSxjQUFQLENBQXNCcmMsQ0FBdEIsQ0FBbEQsQ0FBekQ7QUFBcUksU0FBOXBEO0FBQUEsWUFBK3BEVCxDQUFDLEdBQUMsQ0FBQyxDQUFscUQ7O0FBQW9xRHNDLFNBQUMsQ0FBQzRCLFlBQUYsT0FBbUJsRSxDQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUtSLENBQUMsRUFBekIsR0FBNkI4QyxDQUFDLENBQUN5YSxVQUFGLEdBQWFDLFdBQVcsQ0FBQyxZQUFVO0FBQUMsY0FBSTdlLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBUyxjQUFHNkIsQ0FBQyxJQUFFc0MsQ0FBQyxDQUFDNEIsWUFBRixFQUFILEtBQXNCL0YsQ0FBQyxHQUFDLEVBQUU2QixDQUFDLEdBQUMsQ0FBQyxDQUFMLENBQXhCLEdBQWlDLEtBQUdzQyxDQUFDLENBQUNDLElBQUYsQ0FBTzZaLFdBQVYsS0FBd0JqZSxDQUFDLEdBQUNBLENBQUMsSUFBRW1FLENBQUMsQ0FBQ2lNLEtBQUYsQ0FBUTBPLFNBQVIsRUFBN0IsQ0FBakMsRUFBbUYsS0FBRzNhLENBQUMsQ0FBQ0MsSUFBRixDQUFPMmEsZUFBaEcsRUFBZ0gsS0FBSSxJQUFJOWUsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDa0UsQ0FBQyxDQUFDYSxVQUFGLENBQWFyRCxNQUEzQixFQUFrQzFCLENBQUMsRUFBbkMsRUFBc0M7QUFBQyxnQkFBSWMsQ0FBQyxHQUFDb0QsQ0FBQyxDQUFDYSxVQUFGLENBQWEvRSxDQUFiLEVBQWdCZ1csTUFBaEIsQ0FBdUIsTUFBSTlSLENBQUMsQ0FBQ0UsU0FBN0IsQ0FBTjtBQUE4Q3JFLGFBQUMsR0FBQ0EsQ0FBQyxJQUFFZSxDQUFMO0FBQU87QUFBQSx3QkFBWSxPQUFPb0QsQ0FBQyxDQUFDQyxJQUFGLENBQU80YSxXQUExQixJQUF1QyxLQUFHN2EsQ0FBQyxDQUFDQyxJQUFGLENBQU80YSxXQUFQLEVBQTFDLEtBQWlFaGYsQ0FBQyxHQUFDLENBQUMsQ0FBcEUsR0FBdUVBLENBQUMsS0FBR3FCLENBQUMsSUFBRzhDLENBQUMsQ0FBQ2lNLEtBQUYsQ0FBUTZPLFNBQVIsRUFBUCxDQUF4RTtBQUFvRyxTQUFyVSxFQUFzVSxNQUFJOWEsQ0FBQyxDQUFDRSxTQUE1VSxDQUFyRDtBQUE0WSxPQUFudWpFLEVBQW91akVGLENBQUMsQ0FBQzFDLElBQUYsR0FBTyxZQUFVO0FBQUMwQyxTQUFDLENBQUN5YSxVQUFGLElBQWNNLGFBQWEsQ0FBQy9hLENBQUMsQ0FBQ3lhLFVBQUgsQ0FBM0I7QUFBMEMsT0FBaHlqRSxFQUFpeWpFemEsQ0FBQyxDQUFDaU0sS0FBRixHQUFRLElBQUksWUFBVTtBQUFDLGFBQUsrTyxNQUFMLEdBQVksRUFBWixFQUFlLEtBQUtMLFNBQUwsR0FBZSxZQUFVO0FBQUMsaUJBQU8sS0FBRyxLQUFLSyxNQUFMLENBQVl4ZCxNQUF0QjtBQUE2QixTQUF0RSxFQUF1RSxLQUFLcVgsT0FBTCxHQUFhLFVBQVNoWixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQUtrZixNQUFMLENBQVk1WixJQUFaLENBQWlCO0FBQUM2SCxnQkFBSSxFQUFDLFNBQU47QUFBZ0IxQyxhQUFDLEVBQUMxSyxDQUFsQjtBQUFvQkssYUFBQyxFQUFDSixDQUF0QjtBQUF3Qm1mLGVBQUcsRUFBQyxVQUFTcGYsQ0FBVCxFQUFXO0FBQUNBLGVBQUMsQ0FBQ2daLE9BQUYsSUFBV2haLENBQUMsQ0FBQ2daLE9BQUYsRUFBWDtBQUF1QjtBQUEvRCxXQUFqQjtBQUFtRixTQUFyTCxFQUFzTCxLQUFLQyxXQUFMLEdBQWlCLFVBQVNqWixDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQUtrZixNQUFMLENBQVk1WixJQUFaLENBQWlCO0FBQUM2SCxnQkFBSSxFQUFDLGFBQU47QUFBb0IxQyxhQUFDLEVBQUMxSyxDQUF0QjtBQUF3QkssYUFBQyxFQUFDSixDQUExQjtBQUE0Qm1mLGVBQUcsRUFBQyxVQUFTcGYsQ0FBVCxFQUFXO0FBQUNBLGVBQUMsQ0FBQ2laLFdBQUYsSUFBZWpaLENBQUMsQ0FBQ2laLFdBQUYsRUFBZjtBQUErQjtBQUEzRSxXQUFqQjtBQUErRixTQUFwVCxFQUFxVCxLQUFLb0csYUFBTCxHQUFtQixFQUF4VSxFQUEyVSxLQUFLaFAsU0FBTCxHQUFlLFVBQVNyUSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGVBQUksSUFBSWMsQ0FBQyxHQUFDLENBQVYsRUFBWUEsQ0FBQyxHQUFDLEtBQUtvZSxNQUFMLENBQVl4ZCxNQUExQixFQUFpQ1osQ0FBQyxFQUFsQyxFQUFxQztBQUFDLGdCQUFJTSxDQUFDLEdBQUMsS0FBSzhkLE1BQUwsQ0FBWXBlLENBQVosQ0FBTjtBQUFxQmQsYUFBQyxDQUFDcWYsYUFBRixJQUFpQnJmLENBQUMsQ0FBQ3FmLGFBQUYsQ0FBZ0JqZSxDQUFDLENBQUNxSixDQUFsQixFQUFvQnJKLENBQUMsQ0FBQ2hCLENBQXRCLENBQWpCLEtBQTRDLEtBQUtnZixhQUFMLENBQW1CdGUsQ0FBbkIsSUFBc0JmLENBQWxFO0FBQXFFO0FBQUMsU0FBemUsRUFBMGUsS0FBS2tZLGdCQUFMLEdBQXNCLFVBQVNsWSxDQUFULEVBQVdDLENBQVgsRUFBYTtBQUFDLGNBQUdBLENBQUgsRUFBSyxLQUFJLElBQUljLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLb2UsTUFBTCxDQUFZeGQsTUFBMUIsRUFBaUNaLENBQUMsRUFBbEMsRUFBcUM7QUFBQyxnQkFBSU0sQ0FBQyxHQUFDLEtBQUs4ZCxNQUFMLENBQVlwZSxDQUFaLENBQU47QUFBcUJkLGFBQUMsQ0FBQzZMLFlBQUYsQ0FBZXpLLENBQUMsQ0FBQ3FKLENBQWpCLEVBQW1CckosQ0FBQyxDQUFDaEIsQ0FBckIsTUFBMEIsS0FBS2dmLGFBQUwsQ0FBbUJ0ZSxDQUFuQixJQUFzQmYsQ0FBaEQ7QUFBbUQ7QUFBQyxTQUFsb0IsRUFBbW9CLEtBQUtpZixTQUFMLEdBQWUsWUFBVTtBQUFDOWEsV0FBQyxDQUFDZSxHQUFGLENBQU0yTCxNQUFOLENBQWEvQyxLQUFiLENBQW1Cb0wsTUFBbkIsR0FBMEIsRUFBMUI7O0FBQTZCLGVBQUksSUFBSWxaLENBQUMsR0FBQyxDQUFWLEVBQVlBLENBQUMsR0FBQyxLQUFLbWYsTUFBTCxDQUFZeGQsTUFBMUIsRUFBaUMzQixDQUFDLEVBQWxDLEVBQXFDLEtBQUksSUFBSUMsQ0FBQyxHQUFDLEtBQUtrZixNQUFMLENBQVluZixDQUFaLENBQU4sRUFBcUJlLENBQUMsR0FBQyxLQUFLc2UsYUFBTCxDQUFtQnJmLENBQW5CLENBQTNCLEVBQWlEZSxDQUFqRCxHQUFvRGQsQ0FBQyxDQUFDbWYsR0FBRixDQUFNcmUsQ0FBTixHQUFTQSxDQUFDLEdBQUNBLENBQUMsQ0FBQ2dOLE1BQWI7O0FBQW9CLGVBQUtvUixNQUFMLEdBQVksRUFBWixFQUFlLEtBQUtFLGFBQUwsR0FBbUIsRUFBbEM7QUFBcUMsU0FBNTBCO0FBQTYwQixPQUE1MUIsRUFBenlqRSxFQUFzb2xFbGIsQ0FBN29sRTtBQUErb2xFOztBQUFBLG1CQUFhLE9BQU9zWSx3QkFBcEIsS0FBK0NBLHdCQUF3QixDQUFDdFosU0FBekIsQ0FBbUN1WSxPQUFuQyxHQUEyQyxVQUFTMWIsQ0FBVCxFQUFXQyxDQUFYLEVBQWFjLENBQWIsRUFBZU0sQ0FBZixFQUFpQlEsQ0FBakIsRUFBbUJPLENBQW5CLEVBQXFCO0FBQUMsVUFBSUUsQ0FBQyxHQUFDO0FBQUMyYixtQkFBVyxFQUFDLENBQUMsQ0FBZDtBQUFnQmMsdUJBQWUsRUFBQyxDQUFDLENBQWpDO0FBQW1DVix3QkFBZ0IsRUFBQyxDQUFDLENBQXJEO0FBQXVESyxtQkFBVyxFQUFDLENBQUMsQ0FBcEU7QUFBc0VGLGVBQU8sRUFBQ3ZlLENBQTlFO0FBQWdGd2UsZUFBTyxFQUFDMWQsQ0FBeEY7QUFBMEZ1ZCxrQkFBVSxFQUFDamQsQ0FBckc7QUFBdUdrZCxtQkFBVyxFQUFDMWM7QUFBbkgsT0FBTjs7QUFBNEgsV0FBSSxJQUFJVSxDQUFSLElBQWFILENBQWIsRUFBZUEsQ0FBQyxDQUFDN0IsY0FBRixDQUFpQmdDLENBQWpCLE1BQXNCRCxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFLSCxDQUFDLENBQUNHLENBQUQsQ0FBNUI7O0FBQWlDbkIsT0FBQyxDQUFDLEtBQUt5UCxNQUFOLEVBQWE3USxDQUFiLEVBQWVzQyxDQUFmLENBQUQ7QUFBbUIsS0FBL1MsR0FBaVRsQixDQUFDLENBQUNtZSxNQUFGLEdBQVNqZSxDQUExVCxFQUE0VHRCLENBQUMsQ0FBQ0csT0FBRixHQUFVaUIsQ0FBdFU7QUFBd1UsR0FBdjR6RSxDQUF3NHpFcEIsQ0FBQyxHQUFDO0FBQUNHLFdBQU8sRUFBQztBQUFULEdBQTE0ekUsRUFBdTV6RUgsQ0FBQyxDQUFDRyxPQUF6NXpFLENBQTFGLEVBQTQvekVILENBQUMsQ0FBQ0csT0FBcmcwRTtBQUE2ZzBFLENBQTN5MEUsQ0FBRCxDOzs7Ozs7Ozs7OztBQ0FBOzs7O0FBS0FELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTcWYsWUFBVCxFQUF1QjtBQUNwQyxPQUFLelgsRUFBTCxHQUFVLEtBQVY7QUFDQSxPQUFLMFgsS0FBTCxHQUFhLEdBQWIsQ0FGb0MsQ0FJcEM7O0FBQ0EsTUFBSUQsWUFBWSxDQUFDRSxNQUFiLENBQW9CLENBQXBCLEtBQTBCLEdBQTlCLEVBQW1DO0FBQUU7QUFDakNGLGdCQUFZLEdBQUdBLFlBQVksQ0FBQ3ZkLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBZjtBQUNIOztBQUVEdWQsY0FBWSxHQUFHQSxZQUFZLENBQUN2YixPQUFiLENBQXFCLElBQXJCLEVBQTBCLEVBQTFCLENBQWY7QUFDQXViLGNBQVksR0FBR0EsWUFBWSxDQUFDNVEsV0FBYixFQUFmLENBVm9DLENBWXBDO0FBQ0E7O0FBQ0EsTUFBSStRLGFBQWEsR0FBRztBQUNoQkMsYUFBUyxFQUFFLFFBREs7QUFFaEJDLGdCQUFZLEVBQUUsUUFGRTtBQUdoQkMsUUFBSSxFQUFFLFFBSFU7QUFJaEJDLGNBQVUsRUFBRSxRQUpJO0FBS2hCQyxTQUFLLEVBQUUsUUFMUztBQU1oQkMsU0FBSyxFQUFFLFFBTlM7QUFPaEJDLFVBQU0sRUFBRSxRQVBRO0FBUWhCQyxTQUFLLEVBQUUsUUFSUztBQVNoQkMsa0JBQWMsRUFBRSxRQVRBO0FBVWhCQyxRQUFJLEVBQUUsUUFWVTtBQVdoQkMsY0FBVSxFQUFFLFFBWEk7QUFZaEJDLFNBQUssRUFBRSxRQVpTO0FBYWhCQyxhQUFTLEVBQUUsUUFiSztBQWNoQkMsYUFBUyxFQUFFLFFBZEs7QUFlaEJDLGNBQVUsRUFBRSxRQWZJO0FBZ0JoQkMsYUFBUyxFQUFFLFFBaEJLO0FBaUJoQkMsU0FBSyxFQUFFLFFBakJTO0FBa0JoQkMsa0JBQWMsRUFBRSxRQWxCQTtBQW1CaEJDLFlBQVEsRUFBRSxRQW5CTTtBQW9CaEJDLFdBQU8sRUFBRSxRQXBCTztBQXFCaEJDLFFBQUksRUFBRSxRQXJCVTtBQXNCaEJDLFlBQVEsRUFBRSxRQXRCTTtBQXVCaEJDLFlBQVEsRUFBRSxRQXZCTTtBQXdCaEJDLGlCQUFhLEVBQUUsUUF4QkM7QUF5QmhCQyxZQUFRLEVBQUUsUUF6Qk07QUEwQmhCQyxhQUFTLEVBQUUsUUExQks7QUEyQmhCQyxhQUFTLEVBQUUsUUEzQks7QUE0QmhCQyxlQUFXLEVBQUUsUUE1Qkc7QUE2QmhCQyxrQkFBYyxFQUFFLFFBN0JBO0FBOEJoQkMsY0FBVSxFQUFFLFFBOUJJO0FBK0JoQkMsY0FBVSxFQUFFLFFBL0JJO0FBZ0NoQkMsV0FBTyxFQUFFLFFBaENPO0FBaUNoQkMsY0FBVSxFQUFFLFFBakNJO0FBa0NoQkMsZ0JBQVksRUFBRSxRQWxDRTtBQW1DaEJDLGlCQUFhLEVBQUUsUUFuQ0M7QUFvQ2hCQyxpQkFBYSxFQUFFLFFBcENDO0FBcUNoQkMsaUJBQWEsRUFBRSxRQXJDQztBQXNDaEJDLGNBQVUsRUFBRSxRQXRDSTtBQXVDaEJDLFlBQVEsRUFBRSxRQXZDTTtBQXdDaEJDLGVBQVcsRUFBRSxRQXhDRztBQXlDaEJDLFdBQU8sRUFBRSxRQXpDTztBQTBDaEJDLGNBQVUsRUFBRSxRQTFDSTtBQTJDaEJDLFlBQVEsRUFBRSxRQTNDTTtBQTRDaEJDLGFBQVMsRUFBRSxRQTVDSztBQTZDaEJDLGVBQVcsRUFBRSxRQTdDRztBQThDaEJDLGVBQVcsRUFBRSxRQTlDRztBQStDaEJDLFdBQU8sRUFBRSxRQS9DTztBQWdEaEJDLGFBQVMsRUFBRSxRQWhESztBQWlEaEJDLGNBQVUsRUFBRSxRQWpESTtBQWtEaEJDLFFBQUksRUFBRSxRQWxEVTtBQW1EaEJDLGFBQVMsRUFBRSxRQW5ESztBQW9EaEJDLFFBQUksRUFBRSxRQXBEVTtBQXFEaEJDLFNBQUssRUFBRSxRQXJEUztBQXNEaEJDLGVBQVcsRUFBRSxRQXRERztBQXVEaEJDLFlBQVEsRUFBRSxRQXZETTtBQXdEaEJDLFdBQU8sRUFBRSxRQXhETztBQXlEaEJDLGFBQVMsRUFBRyxRQXpESTtBQTBEaEJDLFVBQU0sRUFBRyxRQTFETztBQTJEaEJDLFNBQUssRUFBRSxRQTNEUztBQTREaEJDLFNBQUssRUFBRSxRQTVEUztBQTZEaEJDLFlBQVEsRUFBRSxRQTdETTtBQThEaEJDLGlCQUFhLEVBQUUsUUE5REM7QUErRGhCQyxhQUFTLEVBQUUsUUEvREs7QUFnRWhCQyxnQkFBWSxFQUFFLFFBaEVFO0FBaUVoQkMsYUFBUyxFQUFFLFFBakVLO0FBa0VoQkMsY0FBVSxFQUFFLFFBbEVJO0FBbUVoQkMsYUFBUyxFQUFFLFFBbkVLO0FBb0VoQkMsd0JBQW9CLEVBQUUsUUFwRU47QUFxRWhCQyxhQUFTLEVBQUUsUUFyRUs7QUFzRWhCQyxjQUFVLEVBQUUsUUF0RUk7QUF1RWhCQyxhQUFTLEVBQUUsUUF2RUs7QUF3RWhCQyxlQUFXLEVBQUUsUUF4RUc7QUF5RWhCQyxpQkFBYSxFQUFFLFFBekVDO0FBMEVoQkMsZ0JBQVksRUFBRSxRQTFFRTtBQTJFaEJDLGtCQUFjLEVBQUUsUUEzRUE7QUE0RWhCQyxrQkFBYyxFQUFFLFFBNUVBO0FBNkVoQkMsa0JBQWMsRUFBRSxRQTdFQTtBQThFaEJDLGVBQVcsRUFBRSxRQTlFRztBQStFaEJDLFFBQUksRUFBRSxRQS9FVTtBQWdGaEJDLGFBQVMsRUFBRSxRQWhGSztBQWlGaEJDLFNBQUssRUFBRSxRQWpGUztBQWtGaEJDLFdBQU8sRUFBRSxRQWxGTztBQW1GaEJDLFVBQU0sRUFBRSxRQW5GUTtBQW9GaEJDLG9CQUFnQixFQUFFLFFBcEZGO0FBcUZoQkMsY0FBVSxFQUFFLFFBckZJO0FBc0ZoQkMsZ0JBQVksRUFBRSxRQXRGRTtBQXVGaEJDLGdCQUFZLEVBQUUsUUF2RkU7QUF3RmhCQyxrQkFBYyxFQUFFLFFBeEZBO0FBeUZoQkMsbUJBQWUsRUFBRSxRQXpGRDtBQTBGaEJDLHFCQUFpQixFQUFFLFFBMUZIO0FBMkZoQkMsbUJBQWUsRUFBRSxRQTNGRDtBQTRGaEJDLG1CQUFlLEVBQUUsUUE1RkQ7QUE2RmhCQyxnQkFBWSxFQUFFLFFBN0ZFO0FBOEZoQkMsYUFBUyxFQUFFLFFBOUZLO0FBK0ZoQkMsYUFBUyxFQUFFLFFBL0ZLO0FBZ0doQkMsWUFBUSxFQUFFLFFBaEdNO0FBaUdoQkMsZUFBVyxFQUFFLFFBakdHO0FBa0doQkMsUUFBSSxFQUFFLFFBbEdVO0FBbUdoQkMsV0FBTyxFQUFFLFFBbkdPO0FBb0doQkMsU0FBSyxFQUFFLFFBcEdTO0FBcUdoQkMsYUFBUyxFQUFFLFFBckdLO0FBc0doQkMsVUFBTSxFQUFFLFFBdEdRO0FBdUdoQkMsYUFBUyxFQUFFLFFBdkdLO0FBd0doQkMsVUFBTSxFQUFFLFFBeEdRO0FBeUdoQkMsaUJBQWEsRUFBRSxRQXpHQztBQTBHaEJDLGFBQVMsRUFBRSxRQTFHSztBQTJHaEJDLGlCQUFhLEVBQUUsUUEzR0M7QUE0R2hCQyxpQkFBYSxFQUFFLFFBNUdDO0FBNkdoQkMsY0FBVSxFQUFFLFFBN0dJO0FBOEdoQkMsYUFBUyxFQUFFLFFBOUdLO0FBK0doQkMsUUFBSSxFQUFFLFFBL0dVO0FBZ0hoQkMsUUFBSSxFQUFFLFFBaEhVO0FBaUhoQkMsUUFBSSxFQUFFLFFBakhVO0FBa0hoQkMsY0FBVSxFQUFFLFFBbEhJO0FBbUhoQkMsVUFBTSxFQUFFLFFBbkhRO0FBb0hoQkMsaUJBQWEsRUFBRSxRQXBIQztBQXFIaEJDLE9BQUcsRUFBRSxRQXJIVztBQXNIaEJDLGFBQVMsRUFBRSxRQXRISztBQXVIaEJDLGFBQVMsRUFBRSxRQXZISztBQXdIaEJDLGVBQVcsRUFBRSxRQXhIRztBQXlIaEJDLFVBQU0sRUFBRSxRQXpIUTtBQTBIaEJDLGNBQVUsRUFBRSxRQTFISTtBQTJIaEJDLFlBQVEsRUFBRSxRQTNITTtBQTRIaEJDLFlBQVEsRUFBRSxRQTVITTtBQTZIaEJDLFVBQU0sRUFBRSxRQTdIUTtBQThIaEJDLFVBQU0sRUFBRSxRQTlIUTtBQStIaEJDLFdBQU8sRUFBRSxRQS9ITztBQWdJaEJDLGFBQVMsRUFBRSxRQWhJSztBQWlJaEJDLGFBQVMsRUFBRSxRQWpJSztBQWtJaEJDLFFBQUksRUFBRSxRQWxJVTtBQW1JaEJDLGVBQVcsRUFBRSxRQW5JRztBQW9JaEJDLGFBQVMsRUFBRSxRQXBJSztBQXFJaEI5YSxPQUFHLEVBQUUsUUFySVc7QUFzSWhCK2EsUUFBSSxFQUFFLFFBdElVO0FBdUloQkMsV0FBTyxFQUFFLFFBdklPO0FBd0loQkMsVUFBTSxFQUFFLFFBeElRO0FBeUloQkMsYUFBUyxFQUFFLFFBeklLO0FBMEloQkMsVUFBTSxFQUFFLFFBMUlRO0FBMkloQkMsYUFBUyxFQUFFLFFBM0lLO0FBNEloQkMsU0FBSyxFQUFFLFFBNUlTO0FBNkloQkMsU0FBSyxFQUFFLFFBN0lTO0FBOEloQkMsY0FBVSxFQUFFLFFBOUlJO0FBK0loQkMsVUFBTSxFQUFFLFFBL0lRO0FBZ0poQkMsZUFBVyxFQUFFO0FBaEpHLEdBQXBCO0FBa0pBbEosY0FBWSxHQUFHRyxhQUFhLENBQUNILFlBQUQsQ0FBYixJQUErQkEsWUFBOUMsQ0FoS29DLENBaUtwQztBQUVBOztBQUNBLE1BQUltSixVQUFVLEdBQUcsQ0FDYjtBQUNJQyxNQUFFLEVBQUUsaUVBRFI7QUFFSUMsV0FBTyxFQUFFLENBQUMseUJBQUQsRUFBNEIsdUJBQTVCLENBRmI7QUFHSUMsV0FBTyxFQUFFLFVBQVVDLElBQVYsRUFBZTtBQUNwQixhQUFPLENBQ0hsUyxRQUFRLENBQUNrUyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBREwsRUFFSGxTLFFBQVEsQ0FBQ2tTLElBQUksQ0FBQyxDQUFELENBQUwsQ0FGTCxFQUdIbFMsUUFBUSxDQUFDa1MsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUhMLEVBSUhwaEIsVUFBVSxDQUFDb2hCLElBQUksQ0FBQyxDQUFELENBQUwsQ0FKUCxDQUFQO0FBTUg7QUFWTCxHQURhLEVBYWI7QUFDSUgsTUFBRSxFQUFFLDhDQURSO0FBRUlDLFdBQU8sRUFBRSxDQUFDLG1CQUFELEVBQXNCLGtCQUF0QixDQUZiO0FBR0lDLFdBQU8sRUFBRSxVQUFVQyxJQUFWLEVBQWU7QUFDcEIsYUFBTyxDQUNIbFMsUUFBUSxDQUFDa1MsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQURMLEVBRUhsUyxRQUFRLENBQUNrUyxJQUFJLENBQUMsQ0FBRCxDQUFMLENBRkwsRUFHSGxTLFFBQVEsQ0FBQ2tTLElBQUksQ0FBQyxDQUFELENBQUwsQ0FITCxDQUFQO0FBS0g7QUFUTCxHQWJhLEVBd0JiO0FBQ0lILE1BQUUsRUFBRSxvREFEUjtBQUVJQyxXQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVksUUFBWixDQUZiO0FBR0lDLFdBQU8sRUFBRSxVQUFVQyxJQUFWLEVBQWU7QUFDcEIsYUFBTyxDQUNIbFMsUUFBUSxDQUFDa1MsSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVLEVBQVYsQ0FETCxFQUVIbFMsUUFBUSxDQUFDa1MsSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVLEVBQVYsQ0FGTCxFQUdIbFMsUUFBUSxDQUFDa1MsSUFBSSxDQUFDLENBQUQsQ0FBTCxFQUFVLEVBQVYsQ0FITCxDQUFQO0FBS0g7QUFUTCxHQXhCYSxFQW1DYjtBQUNJSCxNQUFFLEVBQUUsb0RBRFI7QUFFSUMsV0FBTyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FGYjtBQUdJQyxXQUFPLEVBQUUsVUFBVUMsSUFBVixFQUFlO0FBQ3BCLGFBQU8sQ0FDSGxTLFFBQVEsQ0FBQ2tTLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUEsSUFBSSxDQUFDLENBQUQsQ0FBZixFQUFvQixFQUFwQixDQURMLEVBRUhsUyxRQUFRLENBQUNrUyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVBLElBQUksQ0FBQyxDQUFELENBQWYsRUFBb0IsRUFBcEIsQ0FGTCxFQUdIbFMsUUFBUSxDQUFDa1MsSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFmLEVBQW9CLEVBQXBCLENBSEwsQ0FBUDtBQUtIO0FBVEwsR0FuQ2EsQ0FBakIsQ0FwS29DLENBb05wQzs7QUFDQSxPQUFLLElBQUlob0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRuQixVQUFVLENBQUNobkIsTUFBL0IsRUFBdUNaLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsUUFBSTZuQixFQUFFLEdBQUdELFVBQVUsQ0FBQzVuQixDQUFELENBQVYsQ0FBYzZuQixFQUF2QjtBQUNBLFFBQUlJLFNBQVMsR0FBR0wsVUFBVSxDQUFDNW5CLENBQUQsQ0FBVixDQUFjK25CLE9BQTlCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHSCxFQUFFLENBQUNLLElBQUgsQ0FBUXpKLFlBQVIsQ0FBWDs7QUFDQSxRQUFJdUosSUFBSixFQUFVO0FBQ04sVUFBSUcsUUFBUSxHQUFHRixTQUFTLENBQUNELElBQUQsQ0FBeEI7QUFDQSxXQUFLem1CLENBQUwsR0FBUzRtQixRQUFRLENBQUMsQ0FBRCxDQUFqQjtBQUNBLFdBQUtsaEIsQ0FBTCxHQUFTa2hCLFFBQVEsQ0FBQyxDQUFELENBQWpCO0FBQ0EsV0FBS2poQixDQUFMLEdBQVNpaEIsUUFBUSxDQUFDLENBQUQsQ0FBakI7O0FBQ0EsVUFBSUEsUUFBUSxDQUFDdm5CLE1BQVQsR0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsYUFBSzhkLEtBQUwsR0FBYXlKLFFBQVEsQ0FBQyxDQUFELENBQXJCO0FBQ0g7O0FBQ0QsV0FBS25oQixFQUFMLEdBQVUsSUFBVjtBQUNIO0FBRUosR0FwT21DLENBc09wQzs7O0FBQ0EsT0FBS3pGLENBQUwsR0FBVSxLQUFLQSxDQUFMLEdBQVMsQ0FBVCxJQUFja0osS0FBSyxDQUFDLEtBQUtsSixDQUFOLENBQXBCLEdBQWdDLENBQWhDLEdBQXNDLEtBQUtBLENBQUwsR0FBUyxHQUFWLEdBQWlCLEdBQWpCLEdBQXVCLEtBQUtBLENBQTFFO0FBQ0EsT0FBSzBGLENBQUwsR0FBVSxLQUFLQSxDQUFMLEdBQVMsQ0FBVCxJQUFjd0QsS0FBSyxDQUFDLEtBQUt4RCxDQUFOLENBQXBCLEdBQWdDLENBQWhDLEdBQXNDLEtBQUtBLENBQUwsR0FBUyxHQUFWLEdBQWlCLEdBQWpCLEdBQXVCLEtBQUtBLENBQTFFO0FBQ0EsT0FBS0MsQ0FBTCxHQUFVLEtBQUtBLENBQUwsR0FBUyxDQUFULElBQWN1RCxLQUFLLENBQUMsS0FBS3ZELENBQU4sQ0FBcEIsR0FBZ0MsQ0FBaEMsR0FBc0MsS0FBS0EsQ0FBTCxHQUFTLEdBQVYsR0FBaUIsR0FBakIsR0FBdUIsS0FBS0EsQ0FBMUU7QUFDQSxPQUFLd1gsS0FBTCxHQUFjLEtBQUtBLEtBQUwsR0FBYSxDQUFkLEdBQW1CLENBQW5CLEdBQXlCLEtBQUtBLEtBQUwsR0FBYSxHQUFiLElBQW9CalUsS0FBSyxDQUFDLEtBQUtpVSxLQUFOLENBQTFCLEdBQTBDLEdBQTFDLEdBQWdELEtBQUtBLEtBQTFGLENBMU9vQyxDQTRPcEM7O0FBQ0EsT0FBSzBKLEtBQUwsR0FBYSxZQUFZO0FBQ3JCLFdBQU8sU0FBUyxLQUFLN21CLENBQWQsR0FBa0IsSUFBbEIsR0FBeUIsS0FBSzBGLENBQTlCLEdBQWtDLElBQWxDLEdBQXlDLEtBQUtDLENBQTlDLEdBQWtELEdBQXpEO0FBQ0gsR0FGRDs7QUFHQSxPQUFLbWhCLE1BQUwsR0FBYyxZQUFZO0FBQ3RCLFdBQU8sVUFBVSxLQUFLOW1CLENBQWYsR0FBbUIsSUFBbkIsR0FBMEIsS0FBSzBGLENBQS9CLEdBQW1DLElBQW5DLEdBQTBDLEtBQUtDLENBQS9DLEdBQW1ELElBQW5ELEdBQTBELEtBQUt3WCxLQUEvRCxHQUF1RSxHQUE5RTtBQUNILEdBRkQ7O0FBR0EsT0FBSzRKLEtBQUwsR0FBYSxZQUFZO0FBQ3JCLFFBQUkvbUIsQ0FBQyxHQUFHLEtBQUtBLENBQUwsQ0FBT2dJLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBUjtBQUNBLFFBQUl0QyxDQUFDLEdBQUcsS0FBS0EsQ0FBTCxDQUFPc0MsUUFBUCxDQUFnQixFQUFoQixDQUFSO0FBQ0EsUUFBSXJDLENBQUMsR0FBRyxLQUFLQSxDQUFMLENBQU9xQyxRQUFQLENBQWdCLEVBQWhCLENBQVI7QUFDQSxRQUFJaEksQ0FBQyxDQUFDWCxNQUFGLElBQVksQ0FBaEIsRUFBbUJXLENBQUMsR0FBRyxNQUFNQSxDQUFWO0FBQ25CLFFBQUkwRixDQUFDLENBQUNyRyxNQUFGLElBQVksQ0FBaEIsRUFBbUJxRyxDQUFDLEdBQUcsTUFBTUEsQ0FBVjtBQUNuQixRQUFJQyxDQUFDLENBQUN0RyxNQUFGLElBQVksQ0FBaEIsRUFBbUJzRyxDQUFDLEdBQUcsTUFBTUEsQ0FBVjtBQUNuQixXQUFPLE1BQU0zRixDQUFOLEdBQVUwRixDQUFWLEdBQWNDLENBQXJCO0FBQ0gsR0FSRCxDQW5Qb0MsQ0E2UHBDOzs7QUFDQSxPQUFLcWhCLFVBQUwsR0FBa0IsWUFBWTtBQUUxQixRQUFJQyxRQUFRLEdBQUcsSUFBSUMsS0FBSixFQUFmLENBRjBCLENBRzFCOztBQUNBLFNBQUssSUFBSXpvQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNG5CLFVBQVUsQ0FBQ2huQixNQUEvQixFQUF1Q1osQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxVQUFJOG5CLE9BQU8sR0FBR0YsVUFBVSxDQUFDNW5CLENBQUQsQ0FBVixDQUFjOG5CLE9BQTVCOztBQUNBLFdBQUssSUFBSVksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1osT0FBTyxDQUFDbG5CLE1BQTVCLEVBQW9DOG5CLENBQUMsRUFBckMsRUFBeUM7QUFDckNGLGdCQUFRLENBQUNBLFFBQVEsQ0FBQzVuQixNQUFWLENBQVIsR0FBNEJrbkIsT0FBTyxDQUFDWSxDQUFELENBQW5DO0FBQ0g7QUFDSixLQVR5QixDQVUxQjs7O0FBQ0EsU0FBSyxJQUFJQyxFQUFULElBQWUvSixhQUFmLEVBQThCO0FBQzFCNEosY0FBUSxDQUFDQSxRQUFRLENBQUM1bkIsTUFBVixDQUFSLEdBQTRCK25CLEVBQTVCO0FBQ0g7O0FBRUQsUUFBSUMsR0FBRyxHQUFHOW9CLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUFWO0FBQ0Eyb0IsT0FBRyxDQUFDQyxZQUFKLENBQWlCLElBQWpCLEVBQXVCLG1CQUF2Qjs7QUFDQSxTQUFLLElBQUk3b0IsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3dvQixRQUFRLENBQUM1bkIsTUFBN0IsRUFBcUNaLENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsVUFBSTtBQUNBLFlBQUk4b0IsU0FBUyxHQUFHaHBCLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixJQUF2QixDQUFoQjtBQUNBLFlBQUk4b0IsVUFBVSxHQUFHLElBQUlDLFFBQUosQ0FBYVIsUUFBUSxDQUFDeG9CLENBQUQsQ0FBckIsQ0FBakI7QUFDQSxZQUFJaXBCLFdBQVcsR0FBR25wQixRQUFRLENBQUNHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBbEI7QUFDQWdwQixtQkFBVyxDQUFDbGMsS0FBWixDQUFrQm1jLE9BQWxCLEdBQ1Esa0JBQ0UsMkJBREYsR0FFRSxhQUZGLEdBRWtCSCxVQUFVLENBQUNULEtBQVgsRUFGbEIsR0FFdUMsSUFGdkMsR0FHRSxRQUhGLEdBR2FTLFVBQVUsQ0FBQ1QsS0FBWCxFQUpyQjtBQU1BVyxtQkFBVyxDQUFDaG5CLFdBQVosQ0FBd0JuQyxRQUFRLENBQUNxcEIsY0FBVCxDQUF3QixNQUF4QixDQUF4QjtBQUNBLFlBQUlDLGVBQWUsR0FBR3RwQixRQUFRLENBQUNxcEIsY0FBVCxDQUNsQixNQUFNWCxRQUFRLENBQUN4b0IsQ0FBRCxDQUFkLEdBQW9CLE1BQXBCLEdBQTZCK29CLFVBQVUsQ0FBQ1gsS0FBWCxFQUE3QixHQUFrRCxNQUFsRCxHQUEyRFcsVUFBVSxDQUFDVCxLQUFYLEVBRHpDLENBQXRCO0FBR0FRLGlCQUFTLENBQUM3bUIsV0FBVixDQUFzQmduQixXQUF0QjtBQUNBSCxpQkFBUyxDQUFDN21CLFdBQVYsQ0FBc0JtbkIsZUFBdEI7QUFDQVIsV0FBRyxDQUFDM21CLFdBQUosQ0FBZ0I2bUIsU0FBaEI7QUFFSCxPQWxCRCxDQWtCRSxPQUFNNXBCLENBQU4sRUFBUSxDQUFFO0FBQ2Y7O0FBQ0QsV0FBTzBwQixHQUFQO0FBRUgsR0F4Q0Q7QUEwQ0gsQ0F4U0QsQzs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFTUyxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNwQjs7QUFFQSxNQUFJLE9BQU9DLE1BQVAsS0FBa0IsVUFBbEIsSUFBZ0MsT0FBT0EsTUFBTSxDQUFDQyxRQUFkLEtBQTJCLFFBQS9ELEVBQXlFO0FBQ3ZFSCxXQUFPLEdBQUcsVUFBVUMsR0FBVixFQUFlO0FBQ3ZCLGFBQU8sT0FBT0EsR0FBZDtBQUNELEtBRkQ7QUFHRCxHQUpELE1BSU87QUFDTEQsV0FBTyxHQUFHLFVBQVVDLEdBQVYsRUFBZTtBQUN2QixhQUFPQSxHQUFHLElBQUksT0FBT0MsTUFBUCxLQUFrQixVQUF6QixJQUF1Q0QsR0FBRyxDQUFDRyxXQUFKLEtBQW9CRixNQUEzRCxJQUFxRUQsR0FBRyxLQUFLQyxNQUFNLENBQUNubkIsU0FBcEYsR0FBZ0csUUFBaEcsR0FBMkcsT0FBT2tuQixHQUF6SDtBQUNELEtBRkQ7QUFHRDs7QUFFRCxTQUFPRCxPQUFPLENBQUNDLEdBQUQsQ0FBZDtBQUNEOztBQUVELFNBQVNJLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DQyxXQUFuQyxFQUFnRDtBQUM5QyxNQUFJLEVBQUVELFFBQVEsWUFBWUMsV0FBdEIsQ0FBSixFQUF3QztBQUN0QyxVQUFNLElBQUlDLFNBQUosQ0FBYyxtQ0FBZCxDQUFOO0FBQ0Q7QUFDRjtBQUVEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBOzs7QUFDQSxJQUFJQyxRQUFRLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsRUFBZ0IsR0FBaEIsRUFBcUIsR0FBckIsRUFBMEIsR0FBMUIsRUFBK0IsR0FBL0IsRUFBb0MsR0FBcEMsRUFBeUMsR0FBekMsRUFBOEMsR0FBOUMsRUFBbUQsR0FBbkQsRUFBd0QsR0FBeEQsRUFBNkQsR0FBN0QsRUFBa0UsR0FBbEUsRUFBdUUsR0FBdkUsRUFBNEUsR0FBNUUsRUFBaUYsR0FBakYsRUFBc0YsR0FBdEYsRUFBMkYsR0FBM0YsRUFBZ0csR0FBaEcsRUFBcUcsR0FBckcsRUFBMEcsR0FBMUcsRUFBK0csR0FBL0csRUFBb0gsR0FBcEgsRUFBeUgsR0FBekgsRUFBOEgsR0FBOUgsRUFBbUksR0FBbkksRUFBd0ksR0FBeEksRUFBNkksR0FBN0ksRUFBa0osR0FBbEosRUFBdUosR0FBdkosRUFBNEosR0FBNUosRUFBaUssR0FBakssRUFBc0ssR0FBdEssRUFBMkssR0FBM0ssRUFBZ0wsR0FBaEwsRUFBcUwsR0FBckwsRUFBMEwsR0FBMUwsRUFBK0wsR0FBL0wsRUFBb00sR0FBcE0sRUFBeU0sR0FBek0sRUFBOE0sR0FBOU0sRUFBbU4sR0FBbk4sRUFBd04sR0FBeE4sRUFBNk4sR0FBN04sRUFBa08sR0FBbE8sRUFBdU8sR0FBdk8sRUFBNE8sR0FBNU8sRUFBaVAsR0FBalAsRUFBc1AsR0FBdFAsRUFBMlAsR0FBM1AsRUFBZ1EsR0FBaFEsRUFBcVEsR0FBclEsRUFBMFEsR0FBMVEsRUFBK1EsR0FBL1EsRUFBb1IsR0FBcFIsRUFBeVIsR0FBelIsRUFBOFIsR0FBOVIsRUFBbVMsR0FBblMsRUFBd1MsR0FBeFMsRUFBNlMsR0FBN1MsRUFBa1QsR0FBbFQsRUFBdVQsR0FBdlQsRUFBNFQsR0FBNVQsRUFBaVUsR0FBalUsRUFBc1UsR0FBdFUsRUFBMlUsR0FBM1UsRUFBZ1YsR0FBaFYsRUFBcVYsR0FBclYsRUFBMFYsR0FBMVYsRUFBK1YsR0FBL1YsRUFBb1csR0FBcFcsRUFBeVcsR0FBelcsRUFBOFcsR0FBOVcsRUFBbVgsR0FBblgsRUFBd1gsR0FBeFgsRUFBNlgsR0FBN1gsRUFBa1ksR0FBbFksRUFBdVksR0FBdlksRUFBNFksR0FBNVksRUFBaVosR0FBalosRUFBc1osR0FBdFosRUFBMlosR0FBM1osRUFBZ2EsR0FBaGEsRUFBcWEsR0FBcmEsRUFBMGEsR0FBMWEsRUFBK2EsR0FBL2EsRUFBb2IsR0FBcGIsRUFBeWIsR0FBemIsRUFBOGIsR0FBOWIsRUFBbWMsR0FBbmMsRUFBd2MsR0FBeGMsRUFBNmMsR0FBN2MsRUFBa2QsR0FBbGQsRUFBdWQsR0FBdmQsRUFBNGQsR0FBNWQsRUFBaWUsR0FBamUsRUFBc2UsR0FBdGUsRUFBMmUsR0FBM2UsRUFBZ2YsR0FBaGYsRUFBcWYsR0FBcmYsRUFBMGYsR0FBMWYsRUFBK2YsR0FBL2YsRUFBb2dCLEdBQXBnQixFQUF5Z0IsR0FBemdCLEVBQThnQixHQUE5Z0IsRUFBbWhCLEdBQW5oQixFQUF3aEIsR0FBeGhCLEVBQTZoQixHQUE3aEIsRUFBa2lCLEdBQWxpQixFQUF1aUIsR0FBdmlCLEVBQTRpQixHQUE1aUIsRUFBaWpCLEdBQWpqQixFQUFzakIsR0FBdGpCLEVBQTJqQixHQUEzakIsRUFBZ2tCLEdBQWhrQixFQUFxa0IsR0FBcmtCLEVBQTBrQixHQUExa0IsRUFBK2tCLEdBQS9rQixFQUFvbEIsR0FBcGxCLEVBQXlsQixHQUF6bEIsRUFBOGxCLEdBQTlsQixFQUFtbUIsR0FBbm1CLEVBQXdtQixHQUF4bUIsRUFBNm1CLEdBQTdtQixFQUFrbkIsR0FBbG5CLEVBQXVuQixHQUF2bkIsRUFBNG5CLEdBQTVuQixFQUFpb0IsR0FBam9CLEVBQXNvQixHQUF0b0IsRUFBMm9CLEdBQTNvQixFQUFncEIsR0FBaHBCLEVBQXFwQixHQUFycEIsRUFBMHBCLEdBQTFwQixFQUErcEIsR0FBL3BCLEVBQW9xQixHQUFwcUIsRUFBeXFCLEdBQXpxQixFQUE4cUIsR0FBOXFCLEVBQW1yQixHQUFuckIsRUFBd3JCLEdBQXhyQixFQUE2ckIsR0FBN3JCLEVBQWtzQixHQUFsc0IsRUFBdXNCLEdBQXZzQixFQUE0c0IsR0FBNXNCLEVBQWl0QixHQUFqdEIsRUFBc3RCLEdBQXR0QixFQUEydEIsR0FBM3RCLEVBQWd1QixHQUFodUIsRUFBcXVCLEdBQXJ1QixFQUEwdUIsR0FBMXVCLEVBQSt1QixHQUEvdUIsRUFBb3ZCLEdBQXB2QixFQUF5dkIsR0FBenZCLEVBQTh2QixHQUE5dkIsRUFBbXdCLEdBQW53QixFQUF3d0IsR0FBeHdCLEVBQTZ3QixHQUE3d0IsRUFBa3hCLEdBQWx4QixFQUF1eEIsR0FBdnhCLEVBQTR4QixHQUE1eEIsRUFBaXlCLEdBQWp5QixFQUFzeUIsR0FBdHlCLEVBQTJ5QixHQUEzeUIsRUFBZ3pCLEdBQWh6QixFQUFxekIsR0FBcnpCLEVBQTB6QixHQUExekIsRUFBK3pCLEdBQS96QixFQUFvMEIsR0FBcDBCLEVBQXkwQixHQUF6MEIsRUFBODBCLEdBQTkwQixFQUFtMUIsR0FBbjFCLEVBQXcxQixHQUF4MUIsRUFBNjFCLEdBQTcxQixFQUFrMkIsR0FBbDJCLEVBQXUyQixHQUF2MkIsRUFBNDJCLEdBQTUyQixFQUFpM0IsR0FBajNCLEVBQXMzQixHQUF0M0IsRUFBMjNCLEdBQTMzQixFQUFnNEIsR0FBaDRCLEVBQXE0QixHQUFyNEIsRUFBMDRCLEdBQTE0QixFQUErNEIsR0FBLzRCLEVBQW81QixHQUFwNUIsRUFBeTVCLEdBQXo1QixFQUE4NUIsR0FBOTVCLEVBQW02QixHQUFuNkIsRUFBdzZCLEdBQXg2QixFQUE2NkIsR0FBNzZCLEVBQWs3QixHQUFsN0IsRUFBdTdCLEdBQXY3QixFQUE0N0IsR0FBNTdCLEVBQWk4QixHQUFqOEIsRUFBczhCLEdBQXQ4QixFQUEyOEIsR0FBMzhCLEVBQWc5QixHQUFoOUIsRUFBcTlCLEdBQXI5QixFQUEwOUIsR0FBMTlCLEVBQSs5QixHQUEvOUIsRUFBbytCLEdBQXArQixFQUF5K0IsR0FBeitCLEVBQTgrQixHQUE5K0IsRUFBbS9CLEdBQW4vQixFQUF3L0IsR0FBeC9CLEVBQTYvQixHQUE3L0IsRUFBa2dDLEdBQWxnQyxFQUF1Z0MsR0FBdmdDLEVBQTRnQyxHQUE1Z0MsRUFBaWhDLEdBQWpoQyxFQUFzaEMsR0FBdGhDLEVBQTJoQyxHQUEzaEMsRUFBZ2lDLEdBQWhpQyxFQUFxaUMsR0FBcmlDLEVBQTBpQyxHQUExaUMsRUFBK2lDLEdBQS9pQyxFQUFvakMsR0FBcGpDLEVBQXlqQyxHQUF6akMsRUFBOGpDLEdBQTlqQyxFQUFta0MsR0FBbmtDLEVBQXdrQyxHQUF4a0MsRUFBNmtDLEdBQTdrQyxFQUFrbEMsR0FBbGxDLEVBQXVsQyxHQUF2bEMsRUFBNGxDLEdBQTVsQyxFQUFpbUMsR0FBam1DLEVBQXNtQyxHQUF0bUMsRUFBMm1DLEdBQTNtQyxFQUFnbkMsR0FBaG5DLEVBQXFuQyxHQUFybkMsRUFBMG5DLEdBQTFuQyxFQUErbkMsR0FBL25DLEVBQW9vQyxHQUFwb0MsRUFBeW9DLEdBQXpvQyxFQUE4b0MsR0FBOW9DLEVBQW1wQyxHQUFucEMsRUFBd3BDLEdBQXhwQyxFQUE2cEMsR0FBN3BDLEVBQWtxQyxHQUFscUMsRUFBdXFDLEdBQXZxQyxFQUE0cUMsR0FBNXFDLEVBQWlyQyxHQUFqckMsRUFBc3JDLEdBQXRyQyxFQUEyckMsR0FBM3JDLEVBQWdzQyxHQUFoc0MsRUFBcXNDLEdBQXJzQyxFQUEwc0MsR0FBMXNDLEVBQStzQyxHQUEvc0MsRUFBb3RDLEdBQXB0QyxFQUF5dEMsR0FBenRDLEVBQTh0QyxHQUE5dEMsRUFBbXVDLEdBQW51QyxFQUF3dUMsR0FBeHVDLEVBQTZ1QyxHQUE3dUMsRUFBa3ZDLEdBQWx2QyxFQUF1dkMsR0FBdnZDLENBQWY7QUFDQSxJQUFJQyxRQUFRLEdBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEVBQWhELEVBQW9ELEVBQXBELEVBQXdELEVBQXhELEVBQTRELEVBQTVELEVBQWdFLEVBQWhFLEVBQW9FLEVBQXBFLEVBQXdFLEVBQXhFLEVBQTRFLEVBQTVFLEVBQWdGLEVBQWhGLEVBQW9GLEVBQXBGLEVBQXdGLEVBQXhGLEVBQTRGLEVBQTVGLEVBQWdHLEVBQWhHLEVBQW9HLEVBQXBHLEVBQXdHLEVBQXhHLEVBQTRHLEVBQTVHLEVBQWdILEVBQWhILEVBQW9ILEVBQXBILEVBQXdILEVBQXhILEVBQTRILEVBQTVILEVBQWdJLEVBQWhJLEVBQW9JLEVBQXBJLEVBQXdJLEVBQXhJLEVBQTRJLEVBQTVJLEVBQWdKLEVBQWhKLEVBQW9KLEVBQXBKLEVBQXdKLEVBQXhKLEVBQTRKLEVBQTVKLEVBQWdLLEVBQWhLLEVBQW9LLEVBQXBLLEVBQXdLLEVBQXhLLEVBQTRLLEVBQTVLLEVBQWdMLEVBQWhMLEVBQW9MLEVBQXBMLEVBQXdMLEVBQXhMLEVBQTRMLEVBQTVMLEVBQWdNLEVBQWhNLEVBQW9NLEVBQXBNLEVBQXdNLEVBQXhNLEVBQTRNLEVBQTVNLEVBQWdOLEVBQWhOLEVBQW9OLEVBQXBOLEVBQXdOLEVBQXhOLEVBQTROLEVBQTVOLEVBQWdPLEVBQWhPLEVBQW9PLEVBQXBPLEVBQXdPLEVBQXhPLEVBQTRPLEVBQTVPLEVBQWdQLEVBQWhQLEVBQW9QLEVBQXBQLEVBQXdQLEVBQXhQLEVBQTRQLEVBQTVQLEVBQWdRLEVBQWhRLEVBQW9RLEVBQXBRLEVBQXdRLEVBQXhRLEVBQTRRLEVBQTVRLEVBQWdSLEVBQWhSLEVBQW9SLEVBQXBSLEVBQXdSLEVBQXhSLEVBQTRSLEVBQTVSLEVBQWdTLEVBQWhTLEVBQW9TLEVBQXBTLEVBQXdTLEVBQXhTLEVBQTRTLEVBQTVTLEVBQWdULEVBQWhULEVBQW9ULEVBQXBULEVBQXdULEVBQXhULEVBQTRULEVBQTVULEVBQWdVLEVB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R0FBWTZqQixNQUFNLENBQUN6cUIsQ0FBQyxHQUFHLENBQUwsQ0FBcEM7QUFDQStxQixVQUFJLElBQUlRLE1BQU0sSUFBSWlCLE9BQU8sQ0FBQzNsQixDQUFSLEdBQVk0akIsTUFBTSxDQUFDenFCLENBQUMsR0FBRyxDQUFMLENBQXBDO0FBQ0F3c0IsYUFBTyxHQUFHQSxPQUFPLENBQUNELElBQWxCO0FBQ0F0QixhQUFPLElBQUlRLEVBQUUsR0FBR2dCLFFBQVEsQ0FBQ3ZyQixDQUF6QjtBQUNBZ3FCLGFBQU8sSUFBSVEsRUFBRSxHQUFHZSxRQUFRLENBQUM3bEIsQ0FBekI7QUFDQXVrQixhQUFPLElBQUlRLEVBQUUsR0FBR2MsUUFBUSxDQUFDNWxCLENBQXpCO0FBQ0F3a0IsWUFBTSxJQUFJSSxFQUFWO0FBQ0FILFlBQU0sSUFBSUksRUFBVjtBQUNBSCxZQUFNLElBQUlJLEVBQVY7QUFDQWMsY0FBUSxHQUFHQSxRQUFRLENBQUNGLElBQXBCO0FBQ0E1QixRQUFFLElBQUk5cUIsS0FBTjtBQUNEO0FBQ0Y7O0FBRUQsU0FBTzBxQixTQUFQO0FBQ0Q7QUFDRDs7Ozs7QUFLQSxJQUFJNkIsU0FBUztBQUNiOzs7QUFHQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CL0MsaUJBQWUsQ0FBQyxJQUFELEVBQU8rQyxTQUFQLENBQWY7O0FBRUEsT0FBS2xyQixDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUswRixDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBSzdGLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBS3VyQixJQUFMLEdBQVksSUFBWjtBQUNELENBWkQiLCJmaWxlIjoidmVuZG9yc35jYW52Zy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKHJlcXVpcmUoXCJyZ2Jjb2xvclwiKSxyZXF1aXJlKFwic3RhY2tibHVyLWNhbnZhc1wiKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXCJyZ2Jjb2xvclwiLFwic3RhY2tibHVyLWNhbnZhc1wiXSxlKTp0LmNhbnZnPWUodC5SR0JDb2xvcix0LlN0YWNrQmx1cil9KHRoaXMsZnVuY3Rpb24oeSx2KXtcInVzZSBzdHJpY3RcIjt2YXIgdDtyZXR1cm4geT15JiZ5Lmhhc093blByb3BlcnR5KFwiZGVmYXVsdFwiKT95LmRlZmF1bHQ6eSx2PXYmJnYuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0XCIpP3YuZGVmYXVsdDp2LGZ1bmN0aW9uKHQpe3ZhciBsO3QuZXhwb3J0czsobD13aW5kb3cpLkRPTVBhcnNlcj13aW5kb3cuRE9NUGFyc2VyO3ZhciBjPWwuZG9jdW1lbnQ7ZnVuY3Rpb24gZCh0LGUpe3ZhciBpO3JldHVybihpPWMuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSkud2lkdGg9dCxpLmhlaWdodD1lLGl9dmFyIGYscD1mdW5jdGlvbih0LGUsaSl7aWYobnVsbCE9dHx8bnVsbCE9ZXx8bnVsbCE9aSl7dmFyIG49bShpfHx7fSk7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWMuZ2V0RWxlbWVudEJ5SWQodCkpLG51bGwhPXQuc3ZnJiZ0LnN2Zy5zdG9wKCksdC5jaGlsZE5vZGVzJiYxPT10LmNoaWxkTm9kZXMubGVuZ3RoJiZcIk9CSkVDVFwiPT10LmNoaWxkTm9kZXNbMF0ubm9kZU5hbWV8fCh0LnN2Zz1uKTt2YXIgcz10LmdldENvbnRleHQoXCIyZFwiKTt2b2lkIDAhPT1lLmRvY3VtZW50RWxlbWVudD9uLmxvYWRYbWxEb2MocyxlKTpcIjxcIj09ZS5zdWJzdHIoMCwxKT9uLmxvYWRYbWwocyxlKTpuLmxvYWQocyxlKX1lbHNlIGZvcih2YXIgYT1jLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdmdcIikscj0wO3I8YS5sZW5ndGg7cisrKXt2YXIgbz1hW3JdLGg9Yy5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO2lmKHZvaWQgMCE9PW8uY2xpZW50V2lkdGgmJnZvaWQgMCE9PW8uY2xpZW50SGVpZ2h0KWgud2lkdGg9by5jbGllbnRXaWR0aCxoLmhlaWdodD1vLmNsaWVudEhlaWdodDtlbHNle3ZhciBsPW8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7aC53aWR0aD1sLndpZHRoLGguaGVpZ2h0PWwuaGVpZ2h0fW8ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaCxvKSxvLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobyk7dmFyIHU9Yy5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3UuYXBwZW5kQ2hpbGQobykscChoLHUuaW5uZXJIVE1MKX19O1widW5kZWZpbmVkXCI9PXR5cGVvZiBFbGVtZW50fHwodm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcz9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubWF0Y2hlcyhlKX06dm9pZCAwIT09RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yP2Y9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdC53ZWJraXRNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubW96TWF0Y2hlc1NlbGVjdG9yKGUpfTp2b2lkIDAhPT1FbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3Rvcj9mPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQubXNNYXRjaGVzU2VsZWN0b3IoZSl9OnZvaWQgMCE9PUVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3I/Zj1mdW5jdGlvbih0LGUpe3JldHVybiB0Lm9NYXRjaGVzU2VsZWN0b3IoZSl9OihcImZ1bmN0aW9uXCIhPXR5cGVvZiBqUXVlcnkmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIFplcHRvfHwoZj1mdW5jdGlvbih0LGUpe3JldHVybiAkKHQpLmlzKGUpfSksdm9pZCAwPT09ZiYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFNpenpsZSYmKGY9U2l6emxlLm1hdGNoZXNTZWxlY3RvcikpKTt2YXIgZT0vKFxcW1teXFxdXStcXF0pL2csaT0vKCNbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLGE9LyhcXC5bXlxcc1xcKz5+XFwuXFxbOl0rKS9nLHI9Lyg6OlteXFxzXFwrPn5cXC5cXFs6XSt8OmZpcnN0LWxpbmV8OmZpcnN0LWxldHRlcnw6YmVmb3JlfDphZnRlcikvZ2ksbz0vKDpbXFx3LV0rXFwoW15cXCldKlxcKSkvZ2ksaD0vKDpbXlxcc1xcKz5+XFwuXFxbOl0rKS9nLHU9LyhbXlxcc1xcKz5+XFwuXFxbOl0rKS9nO2Z1bmN0aW9uIFAobil7dmFyIHM9WzAsMCwwXSx0PWZ1bmN0aW9uKHQsZSl7dmFyIGk9bi5tYXRjaCh0KTtudWxsIT1pJiYoc1tlXSs9aS5sZW5ndGgsbj1uLnJlcGxhY2UodCxcIiBcIikpfTtyZXR1cm4gbj0obj1uLnJlcGxhY2UoLzpub3RcXCgoW15cXCldKilcXCkvZyxcIiAgICAgJDEgXCIpKS5yZXBsYWNlKC97W1xcc1xcU10qL2dtLFwiIFwiKSx0KGUsMSksdChpLDApLHQoYSwxKSx0KHIsMiksdChvLDEpLHQoaCwxKSxuPShuPW4ucmVwbGFjZSgvW1xcKlxcc1xcKz5+XS9nLFwiIFwiKSkucmVwbGFjZSgvWyNcXC5dL2csXCIgXCIpLHQodSwyKSxzLmpvaW4oXCJcIil9ZnVuY3Rpb24gbShzKXt2YXIgRD17b3B0czpzLEZSQU1FUkFURTozMCxNQVhfVklSVFVBTF9QSVhFTFM6M2U0LHJvb3RFbVNpemU6MTIsZW1TaXplOjEyLGxvZzpmdW5jdGlvbigpe319OzE9PUQub3B0cy5sb2cmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBjb25zb2xlJiYoRC5sb2c9ZnVuY3Rpb24odCl7Y29uc29sZS5sb2codCl9KSxELmluaXQ9ZnVuY3Rpb24odCl7dmFyIGU9MDtELlVuaXF1ZUlkPWZ1bmN0aW9uKCl7cmV0dXJuXCJjYW52Z1wiKyArK2V9LEQuRGVmaW5pdGlvbnM9e30sRC5TdHlsZXM9e30sRC5TdHlsZXNTcGVjaWZpY2l0eT17fSxELkFuaW1hdGlvbnM9W10sRC5JbWFnZXM9W10sRC5jdHg9dCxELlZpZXdQb3J0PW5ldyBmdW5jdGlvbigpe3RoaXMudmlld1BvcnRzPVtdLHRoaXMuQ2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cz1bXX0sdGhpcy5TZXRDdXJyZW50PWZ1bmN0aW9uKHQsZSl7dGhpcy52aWV3UG9ydHMucHVzaCh7d2lkdGg6dCxoZWlnaHQ6ZX0pfSx0aGlzLlJlbW92ZUN1cnJlbnQ9ZnVuY3Rpb24oKXt0aGlzLnZpZXdQb3J0cy5wb3AoKX0sdGhpcy5DdXJyZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudmlld1BvcnRzW3RoaXMudmlld1BvcnRzLmxlbmd0aC0xXX0sdGhpcy53aWR0aD1mdW5jdGlvbigpe3JldHVybiB0aGlzLkN1cnJlbnQoKS53aWR0aH0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5DdXJyZW50KCkuaGVpZ2h0fSx0aGlzLkNvbXB1dGVTaXplPWZ1bmN0aW9uKHQpe3JldHVybiBudWxsIT10JiZcIm51bWJlclwiPT10eXBlb2YgdD90OlwieFwiPT10P3RoaXMud2lkdGgoKTpcInlcIj09dD90aGlzLmhlaWdodCgpOk1hdGguc3FydChNYXRoLnBvdyh0aGlzLndpZHRoKCksMikrTWF0aC5wb3codGhpcy5oZWlnaHQoKSwyKSkvTWF0aC5zcXJ0KDIpfX19LEQuaW5pdCgpLEQuSW1hZ2VzTG9hZGVkPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PTA7dDxELkltYWdlcy5sZW5ndGg7dCsrKWlmKCFELkltYWdlc1t0XS5sb2FkZWQpcmV0dXJuITE7cmV0dXJuITB9LEQudHJpbT1mdW5jdGlvbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfSxELmNvbXByZXNzU3BhY2VzPWZ1bmN0aW9uKHQpe3JldHVybiB0LnJlcGxhY2UoLyg/IVxcdTMwMDApXFxzKy9nbSxcIiBcIil9LEQuYWpheD1mdW5jdGlvbih0KXt2YXIgZTtyZXR1cm4oZT1sLlhNTEh0dHBSZXF1ZXN0P25ldyBsLlhNTEh0dHBSZXF1ZXN0Om5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpPyhlLm9wZW4oXCJHRVRcIix0LCExKSxlLnNlbmQobnVsbCksZS5yZXNwb25zZVRleHQpOm51bGx9LEQucGFyc2VYbWw9ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFdpbmRvd3MmJnZvaWQgMCE9PVdpbmRvd3MuRGF0YSYmdm9pZCAwIT09V2luZG93cy5EYXRhLlhtbCl7dmFyIHQ9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbERvY3VtZW50LGk9bmV3IFdpbmRvd3MuRGF0YS5YbWwuRG9tLlhtbExvYWRTZXR0aW5ncztyZXR1cm4gaS5wcm9oaWJpdER0ZD0hMSx0LmxvYWRYbWwoZSxpKSx0fWlmKCFsLkRPTVBhcnNlcilyZXR1cm4gZT1lLnJlcGxhY2UoLzwhRE9DVFlQRSBzdmdbXj5dKj4vLFwiXCIpLCh0PW5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTERPTVwiKSkuYXN5bmM9XCJmYWxzZVwiLHQubG9hZFhNTChlKSx0O3RyeXt2YXIgbj1zLnhtbGRvbT9uZXcgbC5ET01QYXJzZXIocy54bWxkb20pOm5ldyBsLkRPTVBhcnNlcjtyZXR1cm4gbi5wYXJzZUZyb21TdHJpbmcoZSxcImltYWdlL3N2Zyt4bWxcIil9Y2F0Y2godCl7cmV0dXJuKG49cy54bWxkb20/bmV3IGwuRE9NUGFyc2VyKHMueG1sZG9tKTpuZXcgbC5ET01QYXJzZXIpLnBhcnNlRnJvbVN0cmluZyhlLFwidGV4dC94bWxcIil9fSxELlByb3BlcnR5PWZ1bmN0aW9uKHQsZSl7dGhpcy5uYW1lPXQsdGhpcy52YWx1ZT1lfSxELlByb3BlcnR5LnByb3RvdHlwZS5nZXRWYWx1ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnZhbHVlfSxELlByb3BlcnR5LnByb3RvdHlwZS5oYXNWYWx1ZT1mdW5jdGlvbigpe3JldHVybiBudWxsIT10aGlzLnZhbHVlJiZcIlwiIT09dGhpcy52YWx1ZX0sRC5Qcm9wZXJ0eS5wcm90b3R5cGUubnVtVmFsdWU9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiAwO3ZhciB0PXBhcnNlRmxvYXQodGhpcy52YWx1ZSk7cmV0dXJuKHRoaXMudmFsdWUrXCJcIikubWF0Y2goLyUkLykmJih0Lz0xMDApLHR9LEQuUHJvcGVydHkucHJvdG90eXBlLnZhbHVlT3JEZWZhdWx0PWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmhhc1ZhbHVlKCk/dGhpcy52YWx1ZTp0fSxELlByb3BlcnR5LnByb3RvdHlwZS5udW1WYWx1ZU9yRGVmYXVsdD1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5oYXNWYWx1ZSgpP3RoaXMubnVtVmFsdWUoKTpwYXJzZUZsb2F0KHQpfSxELlByb3BlcnR5LnByb3RvdHlwZS5hZGRPcGFjaXR5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMudmFsdWU7aWYobnVsbCE9dC52YWx1ZSYmXCJcIiE9dC52YWx1ZSYmXCJzdHJpbmdcIj09dHlwZW9mIHRoaXMudmFsdWUpe3ZhciBpPW5ldyB5KHRoaXMudmFsdWUpO2kub2smJihlPVwicmdiYShcIitpLnIrXCIsIFwiK2kuZytcIiwgXCIraS5iK1wiLCBcIit0Lm51bVZhbHVlKCkrXCIpXCIpfXJldHVybiBuZXcgRC5Qcm9wZXJ0eSh0aGlzLm5hbWUsZSl9LEQuUHJvcGVydHkucHJvdG90eXBlLmdldERlZmluaXRpb249ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnZhbHVlLm1hdGNoKC8jKFteXFwpJ1wiXSspLyk7cmV0dXJuIHQmJih0PXRbMV0pLHR8fCh0PXRoaXMudmFsdWUpLEQuRGVmaW5pdGlvbnNbdF19LEQuUHJvcGVydHkucHJvdG90eXBlLmlzVXJsRGVmaW5pdGlvbj1mdW5jdGlvbigpe3JldHVybiAwPT10aGlzLnZhbHVlLmluZGV4T2YoXCJ1cmwoXCIpfSxELlByb3BlcnR5LnByb3RvdHlwZS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5nZXREZWZpbml0aW9uKCk7aWYobnVsbCE9aSYmaS5jcmVhdGVHcmFkaWVudClyZXR1cm4gaS5jcmVhdGVHcmFkaWVudChELmN0eCx0LGUpO2lmKG51bGwhPWkmJmkuY3JlYXRlUGF0dGVybil7aWYoaS5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSl7dmFyIG49aS5hdHRyaWJ1dGUoXCJwYXR0ZXJuVHJhbnNmb3JtXCIpO2k9aS5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpLG4uaGFzVmFsdWUoKSYmKGkuYXR0cmlidXRlKFwicGF0dGVyblRyYW5zZm9ybVwiLCEwKS52YWx1ZT1uLnZhbHVlKX1yZXR1cm4gaS5jcmVhdGVQYXR0ZXJuKEQuY3R4LHQsZSl9cmV0dXJuIG51bGx9LEQuUHJvcGVydHkucHJvdG90eXBlLmdldERQST1mdW5jdGlvbigpe3JldHVybiA5Nn0sRC5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0UkVNPWZ1bmN0aW9uKCl7cmV0dXJuIEQucm9vdEVtU2l6ZX0sRC5Qcm9wZXJ0eS5wcm90b3R5cGUuZ2V0RU09ZnVuY3Rpb24oKXtyZXR1cm4gRC5lbVNpemV9LEQuUHJvcGVydHkucHJvdG90eXBlLmdldFVuaXRzPWZ1bmN0aW9uKCl7cmV0dXJuKHRoaXMudmFsdWUrXCJcIikucmVwbGFjZSgvWzAtOVxcLlxcLV0vZyxcIlwiKX0sRC5Qcm9wZXJ0eS5wcm90b3R5cGUuaXNQaXhlbHM9ZnVuY3Rpb24oKXtpZighdGhpcy5oYXNWYWx1ZSgpKXJldHVybiExO3ZhciB0PXRoaXMudmFsdWUrXCJcIjtyZXR1cm4hIXQubWF0Y2goL3B4JC8pfHwhIXQubWF0Y2goL15bMC05XSskLyl9LEQuUHJvcGVydHkucHJvdG90eXBlLnRvUGl4ZWxzPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgaT10aGlzLnZhbHVlK1wiXCI7aWYoaS5tYXRjaCgvcmVtJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRSRU0odCk7aWYoaS5tYXRjaCgvZW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldEVNKHQpO2lmKGkubWF0Y2goL2V4JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXRFTSh0KS8yO2lmKGkubWF0Y2goL3B4JC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCk7aWYoaS5tYXRjaCgvcHQkLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KSooMS83Mik7aWYoaS5tYXRjaCgvcGMkLykpcmV0dXJuIDE1KnRoaXMubnVtVmFsdWUoKTtpZihpLm1hdGNoKC9jbSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKnRoaXMuZ2V0RFBJKHQpLzIuNTQ7aWYoaS5tYXRjaCgvbW0kLykpcmV0dXJuIHRoaXMubnVtVmFsdWUoKSp0aGlzLmdldERQSSh0KS8yNS40O2lmKGkubWF0Y2goL2luJC8pKXJldHVybiB0aGlzLm51bVZhbHVlKCkqdGhpcy5nZXREUEkodCk7aWYoaS5tYXRjaCgvJSQvKSlyZXR1cm4gdGhpcy5udW1WYWx1ZSgpKkQuVmlld1BvcnQuQ29tcHV0ZVNpemUodCk7dmFyIG49dGhpcy5udW1WYWx1ZSgpO3JldHVybiBlJiZuPDE/bipELlZpZXdQb3J0LkNvbXB1dGVTaXplKHQpOm59LEQuUHJvcGVydHkucHJvdG90eXBlLnRvTWlsbGlzZWNvbmRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT8odGhpcy52YWx1ZStcIlwiKS5tYXRjaCgvbXMkLyk/dGhpcy5udW1WYWx1ZSgpOjFlMyp0aGlzLm51bVZhbHVlKCk6MH0sRC5Qcm9wZXJ0eS5wcm90b3R5cGUudG9SYWRpYW5zPWZ1bmN0aW9uKCl7aWYoIXRoaXMuaGFzVmFsdWUoKSlyZXR1cm4gMDt2YXIgdD10aGlzLnZhbHVlK1wiXCI7cmV0dXJuIHQubWF0Y2goL2RlZyQvKT90aGlzLm51bVZhbHVlKCkqKE1hdGguUEkvMTgwKTp0Lm1hdGNoKC9ncmFkJC8pP3RoaXMubnVtVmFsdWUoKSooTWF0aC5QSS8yMDApOnQubWF0Y2goL3JhZCQvKT90aGlzLm51bVZhbHVlKCk6dGhpcy5udW1WYWx1ZSgpKihNYXRoLlBJLzE4MCl9O3ZhciB0PXtiYXNlbGluZTpcImFscGhhYmV0aWNcIixcImJlZm9yZS1lZGdlXCI6XCJ0b3BcIixcInRleHQtYmVmb3JlLWVkZ2VcIjpcInRvcFwiLG1pZGRsZTpcIm1pZGRsZVwiLGNlbnRyYWw6XCJtaWRkbGVcIixcImFmdGVyLWVkZ2VcIjpcImJvdHRvbVwiLFwidGV4dC1hZnRlci1lZGdlXCI6XCJib3R0b21cIixpZGVvZ3JhcGhpYzpcImlkZW9ncmFwaGljXCIsYWxwaGFiZXRpYzpcImFscGhhYmV0aWNcIixoYW5naW5nOlwiaGFuZ2luZ1wiLG1hdGhlbWF0aWNhbDpcImFscGhhYmV0aWNcIn07cmV0dXJuIEQuUHJvcGVydHkucHJvdG90eXBlLnRvVGV4dEJhc2VsaW5lPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaGFzVmFsdWUoKT90W3RoaXMudmFsdWVdOm51bGx9LEQuRm9udD1uZXcgZnVuY3Rpb24oKXt0aGlzLlN0eWxlcz1cIm5vcm1hbHxpdGFsaWN8b2JsaXF1ZXxpbmhlcml0XCIsdGhpcy5WYXJpYW50cz1cIm5vcm1hbHxzbWFsbC1jYXBzfGluaGVyaXRcIix0aGlzLldlaWdodHM9XCJub3JtYWx8Ym9sZHxib2xkZXJ8bGlnaHRlcnwxMDB8MjAwfDMwMHw0MDB8NTAwfDYwMHw3MDB8ODAwfDkwMHxpbmhlcml0XCIsdGhpcy5DcmVhdGVGb250PWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj1udWxsIT1hP3RoaXMuUGFyc2UoYSk6dGhpcy5DcmVhdGVGb250KFwiXCIsXCJcIixcIlwiLFwiXCIsXCJcIixELmN0eC5mb250KTtyZXR1cm57Zm9udEZhbWlseTpzPXN8fHIuZm9udEZhbWlseSxmb250U2l6ZTpufHxyLmZvbnRTaXplLGZvbnRTdHlsZTp0fHxyLmZvbnRTdHlsZSxmb250V2VpZ2h0Oml8fHIuZm9udFdlaWdodCxmb250VmFyaWFudDplfHxyLmZvbnRWYXJpYW50LHRvU3RyaW5nOmZ1bmN0aW9uKCl7cmV0dXJuW3RoaXMuZm9udFN0eWxlLHRoaXMuZm9udFZhcmlhbnQsdGhpcy5mb250V2VpZ2h0LHRoaXMuZm9udFNpemUsdGhpcy5mb250RmFtaWx5XS5qb2luKFwiIFwiKX19fTt2YXIgcj10aGlzO3RoaXMuUGFyc2U9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPXt9LGk9RC50cmltKEQuY29tcHJlc3NTcGFjZXModHx8XCJcIikpLnNwbGl0KFwiIFwiKSxuPXtmb250U2l6ZTohMSxmb250U3R5bGU6ITEsZm9udFdlaWdodDohMSxmb250VmFyaWFudDohMX0scz1cIlwiLGE9MDthPGkubGVuZ3RoO2ErKyluLmZvbnRTdHlsZXx8LTE9PXIuU3R5bGVzLmluZGV4T2YoaVthXSk/bi5mb250VmFyaWFudHx8LTE9PXIuVmFyaWFudHMuaW5kZXhPZihpW2FdKT9uLmZvbnRXZWlnaHR8fC0xPT1yLldlaWdodHMuaW5kZXhPZihpW2FdKT9uLmZvbnRTaXplP1wiaW5oZXJpdFwiIT1pW2FdJiYocys9aVthXSk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250U2l6ZT1pW2FdLnNwbGl0KFwiL1wiKVswXSksbi5mb250U3R5bGU9bi5mb250VmFyaWFudD1uLmZvbnRXZWlnaHQ9bi5mb250U2l6ZT0hMCk6KFwiaW5oZXJpdFwiIT1pW2FdJiYoZS5mb250V2VpZ2h0PWlbYV0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9bi5mb250V2VpZ2h0PSEwKTooXCJpbmhlcml0XCIhPWlbYV0mJihlLmZvbnRWYXJpYW50PWlbYV0pLG4uZm9udFN0eWxlPW4uZm9udFZhcmlhbnQ9ITApOihcImluaGVyaXRcIiE9aVthXSYmKGUuZm9udFN0eWxlPWlbYV0pLG4uZm9udFN0eWxlPSEwKTtyZXR1cm5cIlwiIT1zJiYoZS5mb250RmFtaWx5PXMpLGV9fSxELlRvTnVtYmVyQXJyYXk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPSh0fHxcIlwiKS5tYXRjaCgvLT8oXFxkKyg/OlxcLlxcZCooPzpbZUVdWystXT9cXGQrKT8pP3xcXC5cXGQrKSg/PVxcRHwkKS9nbSl8fFtdLGk9MDtpPGUubGVuZ3RoO2krKyllW2ldPXBhcnNlRmxvYXQoZVtpXSk7cmV0dXJuIGV9LEQuUG9pbnQ9ZnVuY3Rpb24odCxlKXt0aGlzLng9dCx0aGlzLnk9ZX0sRC5Qb2ludC5wcm90b3R5cGUuYW5nbGVUbz1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5hdGFuMih0LnktdGhpcy55LHQueC10aGlzLngpfSxELlBvaW50LnByb3RvdHlwZS5hcHBseVRyYW5zZm9ybT1mdW5jdGlvbih0KXt2YXIgZT10aGlzLngqdFswXSt0aGlzLnkqdFsyXSt0WzRdLGk9dGhpcy54KnRbMV0rdGhpcy55KnRbM10rdFs1XTt0aGlzLng9ZSx0aGlzLnk9aX0sRC5DcmVhdGVQb2ludD1mdW5jdGlvbih0KXt2YXIgZT1ELlRvTnVtYmVyQXJyYXkodCk7cmV0dXJuIG5ldyBELlBvaW50KGVbMF0sZVsxXSl9LEQuQ3JlYXRlUGF0aD1mdW5jdGlvbih0KXtmb3IodmFyIGU9RC5Ub051bWJlckFycmF5KHQpLGk9W10sbj0wO248ZS5sZW5ndGg7bis9MilpLnB1c2gobmV3IEQuUG9pbnQoZVtuXSxlW24rMV0pKTtyZXR1cm4gaX0sRC5Cb3VuZGluZ0JveD1mdW5jdGlvbih0LGUsaSxuKXt0aGlzLngxPU51bWJlci5OYU4sdGhpcy55MT1OdW1iZXIuTmFOLHRoaXMueDI9TnVtYmVyLk5hTix0aGlzLnkyPU51bWJlci5OYU4sdGhpcy54PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueDF9LHRoaXMueT1mdW5jdGlvbigpe3JldHVybiB0aGlzLnkxfSx0aGlzLndpZHRoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMueDItdGhpcy54MX0sdGhpcy5oZWlnaHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy55Mi10aGlzLnkxfSx0aGlzLmFkZFBvaW50PWZ1bmN0aW9uKHQsZSl7bnVsbCE9dCYmKChpc05hTih0aGlzLngxKXx8aXNOYU4odGhpcy54MikpJiYodGhpcy54MT10LHRoaXMueDI9dCksdDx0aGlzLngxJiYodGhpcy54MT10KSx0PnRoaXMueDImJih0aGlzLngyPXQpKSxudWxsIT1lJiYoKGlzTmFOKHRoaXMueTEpfHxpc05hTih0aGlzLnkyKSkmJih0aGlzLnkxPWUsdGhpcy55Mj1lKSxlPHRoaXMueTEmJih0aGlzLnkxPWUpLGU+dGhpcy55MiYmKHRoaXMueTI9ZSkpfSx0aGlzLmFkZFg9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludCh0LG51bGwpfSx0aGlzLmFkZFk9ZnVuY3Rpb24odCl7dGhpcy5hZGRQb2ludChudWxsLHQpfSx0aGlzLmFkZEJvdW5kaW5nQm94PWZ1bmN0aW9uKHQpe3RoaXMuYWRkUG9pbnQodC54MSx0LnkxKSx0aGlzLmFkZFBvaW50KHQueDIsdC55Mil9LHRoaXMuYWRkUXVhZHJhdGljQ3VydmU9ZnVuY3Rpb24odCxlLGksbixzLGEpe3ZhciByPXQrMi8zKihpLXQpLG89ZSsyLzMqKG4tZSksaD1yKzEvMyoocy10KSxsPW8rMS8zKihhLWUpO3RoaXMuYWRkQmV6aWVyQ3VydmUodCxlLHIsaCxvLGwscyxhKX0sdGhpcy5hZGRCZXppZXJDdXJ2ZT1mdW5jdGlvbih0LGUsaSxuLHMsYSxyLG8pe3ZhciBoPVt0LGVdLGw9W2ksbl0sdT1bcyxhXSxjPVtyLG9dO3RoaXMuYWRkUG9pbnQoaFswXSxoWzFdKSx0aGlzLmFkZFBvaW50KGNbMF0sY1sxXSk7Zm9yKHZhciBmPTA7Zjw9MTtmKyspe3ZhciBwPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLnBvdygxLXQsMykqaFtmXSszKk1hdGgucG93KDEtdCwyKSp0KmxbZl0rMyooMS10KSpNYXRoLnBvdyh0LDIpKnVbZl0rTWF0aC5wb3codCwzKSpjW2ZdfSxkPTYqaFtmXS0xMipsW2ZdKzYqdVtmXSxtPS0zKmhbZl0rOSpsW2ZdLTkqdVtmXSszKmNbZl0seT0zKmxbZl0tMypoW2ZdO2lmKDAhPW0pe3ZhciB2PU1hdGgucG93KGQsMiktNCp5Km07aWYoISh2PDApKXt2YXIgZz0oLWQrTWF0aC5zcXJ0KHYpKS8oMiptKTswPGcmJmc8MSYmKDA9PWYmJnRoaXMuYWRkWChwKGcpKSwxPT1mJiZ0aGlzLmFkZFkocChnKSkpO3ZhciB4PSgtZC1NYXRoLnNxcnQodikpLygyKm0pOzA8eCYmeDwxJiYoMD09ZiYmdGhpcy5hZGRYKHAoeCkpLDE9PWYmJnRoaXMuYWRkWShwKHgpKSl9fWVsc2V7aWYoMD09ZCljb250aW51ZTt2YXIgYj0teS9kOzA8YiYmYjwxJiYoMD09ZiYmdGhpcy5hZGRYKHAoYikpLDE9PWYmJnRoaXMuYWRkWShwKGIpKSl9fX0sdGhpcy5pc1BvaW50SW5Cb3g9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy54MTw9dCYmdDw9dGhpcy54MiYmdGhpcy55MTw9ZSYmZTw9dGhpcy55Mn0sdGhpcy5hZGRQb2ludCh0LGUpLHRoaXMuYWRkUG9pbnQoaSxuKX0sRC5UcmFuc2Zvcm09ZnVuY3Rpb24odCl7dmFyIGU9dGhpczt0aGlzLlR5cGU9e30sdGhpcy5UeXBlLnRyYW5zbGF0ZT1mdW5jdGlvbih0KXt0aGlzLnA9RC5DcmVhdGVQb2ludCh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMucC54fHwwLHRoaXMucC55fHwwKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKC0xKnRoaXMucC54fHwwLC0xKnRoaXMucC55fHwwKX0sdGhpcy5hcHBseVRvUG9pbnQ9ZnVuY3Rpb24odCl7dC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSx0aGlzLnAueHx8MCx0aGlzLnAueXx8MF0pfX0sdGhpcy5UeXBlLnJvdGF0ZT1mdW5jdGlvbih0KXt2YXIgZT1ELlRvTnVtYmVyQXJyYXkodCk7dGhpcy5hbmdsZT1uZXcgRC5Qcm9wZXJ0eShcImFuZ2xlXCIsZVswXSksdGhpcy5jeD1lWzFdfHwwLHRoaXMuY3k9ZVsyXXx8MCx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNsYXRlKHRoaXMuY3gsdGhpcy5jeSksdC5yb3RhdGUodGhpcy5hbmdsZS50b1JhZGlhbnMoKSksdC50cmFuc2xhdGUoLXRoaXMuY3gsLXRoaXMuY3kpfSx0aGlzLnVuYXBwbHk9ZnVuY3Rpb24odCl7dC50cmFuc2xhdGUodGhpcy5jeCx0aGlzLmN5KSx0LnJvdGF0ZSgtMSp0aGlzLmFuZ2xlLnRvUmFkaWFucygpKSx0LnRyYW5zbGF0ZSgtdGhpcy5jeCwtdGhpcy5jeSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYW5nbGUudG9SYWRpYW5zKCk7dC5hcHBseVRyYW5zZm9ybShbMSwwLDAsMSx0aGlzLnAueHx8MCx0aGlzLnAueXx8MF0pLHQuYXBwbHlUcmFuc2Zvcm0oW01hdGguY29zKGUpLE1hdGguc2luKGUpLC1NYXRoLnNpbihlKSxNYXRoLmNvcyhlKSwwLDBdKSx0LmFwcGx5VHJhbnNmb3JtKFsxLDAsMCwxLC10aGlzLnAueHx8MCwtdGhpcy5wLnl8fDBdKX19LHRoaXMuVHlwZS5zY2FsZT1mdW5jdGlvbih0KXt0aGlzLnA9RC5DcmVhdGVQb2ludCh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3Quc2NhbGUodGhpcy5wLnh8fDEsdGhpcy5wLnl8fHRoaXMucC54fHwxKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3Quc2NhbGUoMS90aGlzLnAueHx8MSwxL3RoaXMucC55fHx0aGlzLnAueHx8MSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0oW3RoaXMucC54fHwwLDAsMCx0aGlzLnAueXx8MCwwLDBdKX19LHRoaXMuVHlwZS5tYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5tPUQuVG9OdW1iZXJBcnJheSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3QudHJhbnNmb3JtKHRoaXMubVswXSx0aGlzLm1bMV0sdGhpcy5tWzJdLHRoaXMubVszXSx0aGlzLm1bNF0sdGhpcy5tWzVdKX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMubVswXSxpPXRoaXMubVsyXSxuPXRoaXMubVs0XSxzPXRoaXMubVsxXSxhPXRoaXMubVszXSxyPXRoaXMubVs1XSxvPTEvKGUqKDEqYS0wKnIpLWkqKDEqcy0wKnIpK24qKDAqcy0wKmEpKTt0LnRyYW5zZm9ybShvKigxKmEtMCpyKSxvKigwKnItMSpzKSxvKigwKm4tMSppKSxvKigxKmUtMCpuKSxvKihpKnItbiphKSxvKihuKnMtZSpyKSl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe3QuYXBwbHlUcmFuc2Zvcm0odGhpcy5tKX19LHRoaXMuVHlwZS5Ta2V3QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLm1hdHJpeCx0aGlzLmJhc2UodCksdGhpcy5hbmdsZT1uZXcgRC5Qcm9wZXJ0eShcImFuZ2xlXCIsdCl9LHRoaXMuVHlwZS5Ta2V3QmFzZS5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5tYXRyaXgsdGhpcy5UeXBlLnNrZXdYPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1lLlR5cGUuU2tld0Jhc2UsdGhpcy5iYXNlKHQpLHRoaXMubT1bMSwwLE1hdGgudGFuKHRoaXMuYW5nbGUudG9SYWRpYW5zKCkpLDEsMCwwXX0sdGhpcy5UeXBlLnNrZXdYLnByb3RvdHlwZT1uZXcgdGhpcy5UeXBlLlNrZXdCYXNlLHRoaXMuVHlwZS5za2V3WT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9ZS5UeXBlLlNrZXdCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLm09WzEsTWF0aC50YW4odGhpcy5hbmdsZS50b1JhZGlhbnMoKSksMCwxLDAsMF19LHRoaXMuVHlwZS5za2V3WS5wcm90b3R5cGU9bmV3IHRoaXMuVHlwZS5Ta2V3QmFzZSx0aGlzLnRyYW5zZm9ybXM9W10sdGhpcy5hcHBseT1mdW5jdGlvbih0KXtmb3IodmFyIGU9MDtlPHRoaXMudHJhbnNmb3Jtcy5sZW5ndGg7ZSsrKXRoaXMudHJhbnNmb3Jtc1tlXS5hcHBseSh0KX0sdGhpcy51bmFwcGx5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLnRyYW5zZm9ybXMubGVuZ3RoLTE7MDw9ZTtlLS0pdGhpcy50cmFuc2Zvcm1zW2VdLnVuYXBwbHkodCl9LHRoaXMuYXBwbHlUb1BvaW50PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy50cmFuc2Zvcm1zLmxlbmd0aDtlKyspdGhpcy50cmFuc2Zvcm1zW2VdLmFwcGx5VG9Qb2ludCh0KX07Zm9yKHZhciBpPUQudHJpbShELmNvbXByZXNzU3BhY2VzKHQpKS5yZXBsYWNlKC9cXCkoW2EtekEtWl0pL2csXCIpICQxXCIpLnJlcGxhY2UoL1xcKShcXHM/LFxccz8pL2csXCIpIFwiKS5zcGxpdCgvXFxzKD89W2Etel0pLyksbj0wO248aS5sZW5ndGg7bisrKWlmKFwibm9uZVwiIT09aVtuXSl7dmFyIHM9RC50cmltKGlbbl0uc3BsaXQoXCIoXCIpWzBdKSxhPWlbbl0uc3BsaXQoXCIoXCIpWzFdLnJlcGxhY2UoXCIpXCIsXCJcIikscj10aGlzLlR5cGVbc107aWYodm9pZCAwIT09cil7dmFyIG89bmV3IHIoYSk7by50eXBlPXMsdGhpcy50cmFuc2Zvcm1zLnB1c2gobyl9fX0sRC5Bc3BlY3RSYXRpbz1mdW5jdGlvbih0LGUsaSxuLHMsYSxyLG8saCxsKXt2YXIgdT0oZT0oZT1ELmNvbXByZXNzU3BhY2VzKGUpKS5yZXBsYWNlKC9eZGVmZXJcXHMvLFwiXCIpKS5zcGxpdChcIiBcIilbMF18fFwieE1pZFlNaWRcIixjPWUuc3BsaXQoXCIgXCIpWzFdfHxcIm1lZXRcIixmPWkvbixwPXMvYSxkPU1hdGgubWluKGYscCksbT1NYXRoLm1heChmLHApO1wibWVldFwiPT1jJiYobio9ZCxhKj1kKSxcInNsaWNlXCI9PWMmJihuKj1tLGEqPW0pLGg9bmV3IEQuUHJvcGVydHkoXCJyZWZYXCIsaCksbD1uZXcgRC5Qcm9wZXJ0eShcInJlZllcIixsKSxoLmhhc1ZhbHVlKCkmJmwuaGFzVmFsdWUoKT90LnRyYW5zbGF0ZSgtZCpoLnRvUGl4ZWxzKFwieFwiKSwtZCpsLnRvUGl4ZWxzKFwieVwiKSk6KHUubWF0Y2goL154TWlkLykmJihcIm1lZXRcIj09YyYmZD09cHx8XCJzbGljZVwiPT1jJiZtPT1wKSYmdC50cmFuc2xhdGUoaS8yLW4vMiwwKSx1Lm1hdGNoKC9ZTWlkJC8pJiYoXCJtZWV0XCI9PWMmJmQ9PWZ8fFwic2xpY2VcIj09YyYmbT09ZikmJnQudHJhbnNsYXRlKDAscy8yLWEvMiksdS5tYXRjaCgvXnhNYXgvKSYmKFwibWVldFwiPT1jJiZkPT1wfHxcInNsaWNlXCI9PWMmJm09PXApJiZ0LnRyYW5zbGF0ZShpLW4sMCksdS5tYXRjaCgvWU1heCQvKSYmKFwibWVldFwiPT1jJiZkPT1mfHxcInNsaWNlXCI9PWMmJm09PWYpJiZ0LnRyYW5zbGF0ZSgwLHMtYSkpLFwibm9uZVwiPT11P3Quc2NhbGUoZixwKTpcIm1lZXRcIj09Yz90LnNjYWxlKGQsZCk6XCJzbGljZVwiPT1jJiZ0LnNjYWxlKG0sbSksdC50cmFuc2xhdGUobnVsbD09cj8wOi1yLG51bGw9PW8/MDotbyl9LEQuRWxlbWVudD17fSxELkVtcHR5UHJvcGVydHk9bmV3IEQuUHJvcGVydHkoXCJFTVBUWVwiLFwiXCIpLEQuRWxlbWVudC5FbGVtZW50QmFzZT1mdW5jdGlvbihhKXt0aGlzLmF0dHJpYnV0ZXM9e30sdGhpcy5zdHlsZXM9e30sdGhpcy5zdHlsZXNTcGVjaWZpY2l0eT17fSx0aGlzLmNoaWxkcmVuPVtdLHRoaXMuYXR0cmlidXRlPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcy5hdHRyaWJ1dGVzW3RdO3JldHVybiBudWxsIT1pP2k6KDE9PWUmJihpPW5ldyBELlByb3BlcnR5KHQsXCJcIiksdGhpcy5hdHRyaWJ1dGVzW3RdPWkpLGl8fEQuRW1wdHlQcm9wZXJ0eSl9LHRoaXMuZ2V0SHJlZkF0dHJpYnV0ZT1mdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmF0dHJpYnV0ZXMpaWYoXCJocmVmXCI9PXR8fHQubWF0Y2goLzpocmVmJC8pKXJldHVybiB0aGlzLmF0dHJpYnV0ZXNbdF07cmV0dXJuIEQuRW1wdHlQcm9wZXJ0eX0sdGhpcy5zdHlsZT1mdW5jdGlvbih0LGUsaSl7dmFyIG49dGhpcy5zdHlsZXNbdF07aWYobnVsbCE9bilyZXR1cm4gbjt2YXIgcz10aGlzLmF0dHJpYnV0ZSh0KTtpZihudWxsIT1zJiZzLmhhc1ZhbHVlKCkpcmV0dXJuIHRoaXMuc3R5bGVzW3RdPXM7aWYoMSE9aSl7dmFyIGE9dGhpcy5wYXJlbnQ7aWYobnVsbCE9YSl7dmFyIHI9YS5zdHlsZSh0KTtpZihudWxsIT1yJiZyLmhhc1ZhbHVlKCkpcmV0dXJuIHJ9fXJldHVybiAxPT1lJiYobj1uZXcgRC5Qcm9wZXJ0eSh0LFwiXCIpLHRoaXMuc3R5bGVzW3RdPW4pLG58fEQuRW1wdHlQcm9wZXJ0eX0sdGhpcy5yZW5kZXI9ZnVuY3Rpb24odCl7aWYoXCJub25lXCIhPXRoaXMuc3R5bGUoXCJkaXNwbGF5XCIpLnZhbHVlJiZcImhpZGRlblwiIT10aGlzLnN0eWxlKFwidmlzaWJpbGl0eVwiKS52YWx1ZSl7aWYodC5zYXZlKCksdGhpcy5zdHlsZShcIm1hc2tcIikuaGFzVmFsdWUoKSl7dmFyIGU9dGhpcy5zdHlsZShcIm1hc2tcIikuZ2V0RGVmaW5pdGlvbigpO251bGwhPWUmJmUuYXBwbHkodCx0aGlzKX1lbHNlIGlmKHRoaXMuc3R5bGUoXCJmaWx0ZXJcIikuaGFzVmFsdWUoKSl7dmFyIGk9dGhpcy5zdHlsZShcImZpbHRlclwiKS5nZXREZWZpbml0aW9uKCk7bnVsbCE9aSYmaS5hcHBseSh0LHRoaXMpfWVsc2UgdGhpcy5zZXRDb250ZXh0KHQpLHRoaXMucmVuZGVyQ2hpbGRyZW4odCksdGhpcy5jbGVhckNvbnRleHQodCk7dC5yZXN0b3JlKCl9fSx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24oKXt9LHRoaXMuY2xlYXJDb250ZXh0PWZ1bmN0aW9uKCl7fSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMuY2hpbGRyZW5bZV0ucmVuZGVyKHQpfSx0aGlzLmFkZENoaWxkPWZ1bmN0aW9uKHQsZSl7dmFyIGk9dDtlJiYoaT1ELkNyZWF0ZUVsZW1lbnQodCkpLGkucGFyZW50PXRoaXMsXCJ0aXRsZVwiIT1pLnR5cGUmJnRoaXMuY2hpbGRyZW4ucHVzaChpKX0sdGhpcy5hZGRTdHlsZXNGcm9tU3R5bGVEZWZpbml0aW9uPWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIEQuU3R5bGVzKWlmKFwiQFwiIT10WzBdJiZmKGEsdCkpe3ZhciBlPUQuU3R5bGVzW3RdLGk9RC5TdHlsZXNTcGVjaWZpY2l0eVt0XTtpZihudWxsIT1lKWZvcih2YXIgbiBpbiBlKXt2YXIgcz10aGlzLnN0eWxlc1NwZWNpZmljaXR5W25dO3ZvaWQgMD09PXMmJihzPVwiMDAwXCIpLHM8PWkmJih0aGlzLnN0eWxlc1tuXT1lW25dLHRoaXMuc3R5bGVzU3BlY2lmaWNpdHlbbl09aSl9fX07dmFyIHQsZT1uZXcgUmVnRXhwKFwiXltBLVotXSskXCIpO2lmKG51bGwhPWEmJjE9PWEubm9kZVR5cGUpe2Zvcih2YXIgaT0wO2k8YS5hdHRyaWJ1dGVzLmxlbmd0aDtpKyspe3ZhciBuPWEuYXR0cmlidXRlc1tpXSxzPSh0PW4ubm9kZU5hbWUsZS50ZXN0KHQpP3QudG9Mb3dlckNhc2UoKTp0KTt0aGlzLmF0dHJpYnV0ZXNbc109bmV3IEQuUHJvcGVydHkocyxuLnZhbHVlKX1pZih0aGlzLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKSx0aGlzLmF0dHJpYnV0ZShcInN0eWxlXCIpLmhhc1ZhbHVlKCkpe3ZhciByPXRoaXMuYXR0cmlidXRlKFwic3R5bGVcIikudmFsdWUuc3BsaXQoXCI7XCIpO2ZvcihpPTA7aTxyLmxlbmd0aDtpKyspaWYoXCJcIiE9RC50cmltKHJbaV0pKXt2YXIgbz1yW2ldLnNwbGl0KFwiOlwiKSxoPUQudHJpbShvWzBdKSxsPUQudHJpbShvWzFdKTt0aGlzLnN0eWxlc1toXT1uZXcgRC5Qcm9wZXJ0eShoLGwpfX10aGlzLmF0dHJpYnV0ZShcImlkXCIpLmhhc1ZhbHVlKCkmJm51bGw9PUQuRGVmaW5pdGlvbnNbdGhpcy5hdHRyaWJ1dGUoXCJpZFwiKS52YWx1ZV0mJihELkRlZmluaXRpb25zW3RoaXMuYXR0cmlidXRlKFwiaWRcIikudmFsdWVdPXRoaXMpO2ZvcihpPTA7aTxhLmNoaWxkTm9kZXMubGVuZ3RoO2krKyl7dmFyIHU9YS5jaGlsZE5vZGVzW2ldO2lmKDE9PXUubm9kZVR5cGUmJnRoaXMuYWRkQ2hpbGQodSwhMCksdGhpcy5jYXB0dXJlVGV4dE5vZGVzJiYoMz09dS5ub2RlVHlwZXx8ND09dS5ub2RlVHlwZSkpe3ZhciBjPXUudmFsdWV8fHUudGV4dHx8dS50ZXh0Q29udGVudHx8XCJcIjtcIlwiIT1ELmNvbXByZXNzU3BhY2VzKGMpJiZ0aGlzLmFkZENoaWxkKG5ldyBELkVsZW1lbnQudHNwYW4odSksITEpfX19fSxELkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGN1bGF0ZU9wYWNpdHk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MSxlPXRoaXM7bnVsbCE9ZTspe3ZhciBpPWUuc3R5bGUoXCJvcGFjaXR5XCIsITEsITApO2kuaGFzVmFsdWUoKSYmKHQqPWkubnVtVmFsdWUoKSksZT1lLnBhcmVudH1yZXR1cm4gdH0sdGhpcy5zZXRDb250ZXh0PWZ1bmN0aW9uKHQsZSl7aWYoIWUpe3ZhciBpO2lmKHRoaXMuc3R5bGUoXCJmaWxsXCIpLmlzVXJsRGVmaW5pdGlvbigpKW51bGwhPShpPXRoaXMuc3R5bGUoXCJmaWxsXCIpLmdldEZpbGxTdHlsZURlZmluaXRpb24odGhpcyx0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpKSkmJih0LmZpbGxTdHlsZT1pKTtlbHNlIGlmKHRoaXMuc3R5bGUoXCJmaWxsXCIpLmhhc1ZhbHVlKCkpe3ZhciBuO1wiY3VycmVudENvbG9yXCI9PShuPXRoaXMuc3R5bGUoXCJmaWxsXCIpKS52YWx1ZSYmKG4udmFsdWU9dGhpcy5zdHlsZShcImNvbG9yXCIpLnZhbHVlKSxcImluaGVyaXRcIiE9bi52YWx1ZSYmKHQuZmlsbFN0eWxlPVwibm9uZVwiPT1uLnZhbHVlP1wicmdiYSgwLDAsMCwwKVwiOm4udmFsdWUpfWlmKHRoaXMuc3R5bGUoXCJmaWxsLW9wYWNpdHlcIikuaGFzVmFsdWUoKSluPShuPW5ldyBELlByb3BlcnR5KFwiZmlsbFwiLHQuZmlsbFN0eWxlKSkuYWRkT3BhY2l0eSh0aGlzLnN0eWxlKFwiZmlsbC1vcGFjaXR5XCIpKSx0LmZpbGxTdHlsZT1uLnZhbHVlO2lmKHRoaXMuc3R5bGUoXCJzdHJva2VcIikuaXNVcmxEZWZpbml0aW9uKCkpbnVsbCE9KGk9dGhpcy5zdHlsZShcInN0cm9rZVwiKS5nZXRGaWxsU3R5bGVEZWZpbml0aW9uKHRoaXMsdGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpKSkmJih0LnN0cm9rZVN0eWxlPWkpO2Vsc2UgaWYodGhpcy5zdHlsZShcInN0cm9rZVwiKS5oYXNWYWx1ZSgpKXt2YXIgcztcImN1cnJlbnRDb2xvclwiPT0ocz10aGlzLnN0eWxlKFwic3Ryb2tlXCIpKS52YWx1ZSYmKHMudmFsdWU9dGhpcy5zdHlsZShcImNvbG9yXCIpLnZhbHVlKSxcImluaGVyaXRcIiE9cy52YWx1ZSYmKHQuc3Ryb2tlU3R5bGU9XCJub25lXCI9PXMudmFsdWU/XCJyZ2JhKDAsMCwwLDApXCI6cy52YWx1ZSl9aWYodGhpcy5zdHlsZShcInN0cm9rZS1vcGFjaXR5XCIpLmhhc1ZhbHVlKCkpcz0ocz1uZXcgRC5Qcm9wZXJ0eShcInN0cm9rZVwiLHQuc3Ryb2tlU3R5bGUpKS5hZGRPcGFjaXR5KHRoaXMuc3R5bGUoXCJzdHJva2Utb3BhY2l0eVwiKSksdC5zdHJva2VTdHlsZT1zLnZhbHVlO2lmKHRoaXMuc3R5bGUoXCJzdHJva2Utd2lkdGhcIikuaGFzVmFsdWUoKSl7dmFyIGE9dGhpcy5zdHlsZShcInN0cm9rZS13aWR0aFwiKS50b1BpeGVscygpO3QubGluZVdpZHRoPTA9PWE/LjAwMTphfWlmKHRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWNhcFwiKS5oYXNWYWx1ZSgpJiYodC5saW5lQ2FwPXRoaXMuc3R5bGUoXCJzdHJva2UtbGluZWNhcFwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1saW5lam9pblwiKS5oYXNWYWx1ZSgpJiYodC5saW5lSm9pbj10aGlzLnN0eWxlKFwic3Ryb2tlLWxpbmVqb2luXCIpLnZhbHVlKSx0aGlzLnN0eWxlKFwic3Ryb2tlLW1pdGVybGltaXRcIikuaGFzVmFsdWUoKSYmKHQubWl0ZXJMaW1pdD10aGlzLnN0eWxlKFwic3Ryb2tlLW1pdGVybGltaXRcIikudmFsdWUpLHRoaXMuc3R5bGUoXCJwYWludC1vcmRlclwiKS5oYXNWYWx1ZSgpJiYodC5wYWludE9yZGVyPXRoaXMuc3R5bGUoXCJwYWludC1vcmRlclwiKS52YWx1ZSksdGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikuaGFzVmFsdWUoKSYmXCJub25lXCIhPXRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaGFycmF5XCIpLnZhbHVlKXt2YXIgcj1ELlRvTnVtYmVyQXJyYXkodGhpcy5zdHlsZShcInN0cm9rZS1kYXNoYXJyYXlcIikudmFsdWUpO3ZvaWQgMCE9PXQuc2V0TGluZURhc2g/dC5zZXRMaW5lRGFzaChyKTp2b2lkIDAhPT10LndlYmtpdExpbmVEYXNoP3Qud2Via2l0TGluZURhc2g9cjp2b2lkIDA9PT10Lm1vekRhc2h8fDE9PXIubGVuZ3RoJiYwPT1yWzBdfHwodC5tb3pEYXNoPXIpO3ZhciBvPXRoaXMuc3R5bGUoXCJzdHJva2UtZGFzaG9mZnNldFwiKS50b1BpeGVscygpO3ZvaWQgMCE9PXQubGluZURhc2hPZmZzZXQ/dC5saW5lRGFzaE9mZnNldD1vOnZvaWQgMCE9PXQud2Via2l0TGluZURhc2hPZmZzZXQ/dC53ZWJraXRMaW5lRGFzaE9mZnNldD1vOnZvaWQgMCE9PXQubW96RGFzaE9mZnNldCYmKHQubW96RGFzaE9mZnNldD1vKX19aWYodm9pZCAwIT09dC5mb250KWlmKHRoaXMuc3R5bGUoXCJmb250XCIpLmhhc1ZhbHVlKCkpdC5mb250PXRoaXMuc3R5bGUoXCJmb250XCIpLnZhbHVlO2Vsc2V7dC5mb250PUQuRm9udC5DcmVhdGVGb250KHRoaXMuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXZhcmlhbnRcIikudmFsdWUsdGhpcy5zdHlsZShcImZvbnQtd2VpZ2h0XCIpLnZhbHVlLHRoaXMuc3R5bGUoXCJmb250LXNpemVcIikuaGFzVmFsdWUoKT90aGlzLnN0eWxlKFwiZm9udC1zaXplXCIpLnRvUGl4ZWxzKCkrXCJweFwiOlwiXCIsdGhpcy5zdHlsZShcImZvbnQtZmFtaWx5XCIpLnZhbHVlKS50b1N0cmluZygpO3ZhciBoPXRoaXMuc3R5bGUoXCJmb250LXNpemVcIiwhMSwhMSk7aC5pc1BpeGVscygpJiYoRC5lbVNpemU9aC50b1BpeGVscygpKX10aGlzLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkmJm5ldyBELlRyYW5zZm9ybSh0aGlzLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKS5hcHBseSh0KTtpZih0aGlzLnN0eWxlKFwiY2xpcC1wYXRoXCIsITEsITApLmhhc1ZhbHVlKCkpe3ZhciBsPXRoaXMuc3R5bGUoXCJjbGlwLXBhdGhcIiwhMSwhMCkuZ2V0RGVmaW5pdGlvbigpO251bGwhPWwmJmwuYXBwbHkodCl9dC5nbG9iYWxBbHBoYT10aGlzLmNhbGN1bGF0ZU9wYWNpdHkoKX19LEQuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkVsZW1lbnRCYXNlLEQuRWxlbWVudC5QYXRoRWxlbWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7cmV0dXJuIG51bGwhPXQmJnQuYmVnaW5QYXRoKCksbmV3IEQuQm91bmRpbmdCb3h9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dGhpcy5wYXRoKHQpLEQuTW91c2UuY2hlY2tQYXRoKHRoaXMsdCksXCJcIiE9dC5maWxsU3R5bGUmJihcImluaGVyaXRcIiE9dGhpcy5zdHlsZShcImZpbGwtcnVsZVwiKS52YWx1ZU9yRGVmYXVsdChcImluaGVyaXRcIik/dC5maWxsKHRoaXMuc3R5bGUoXCJmaWxsLXJ1bGVcIikudmFsdWUpOnQuZmlsbCgpKSxcIlwiIT10LnN0cm9rZVN0eWxlJiZ0LnN0cm9rZSgpO3ZhciBlPXRoaXMuZ2V0TWFya2VycygpO2lmKG51bGwhPWUpe2lmKHRoaXMuc3R5bGUoXCJtYXJrZXItc3RhcnRcIikuaXNVcmxEZWZpbml0aW9uKCkpKGk9dGhpcy5zdHlsZShcIm1hcmtlci1zdGFydFwiKS5nZXREZWZpbml0aW9uKCkpLnJlbmRlcih0LGVbMF1bMF0sZVswXVsxXSk7aWYodGhpcy5zdHlsZShcIm1hcmtlci1taWRcIikuaXNVcmxEZWZpbml0aW9uKCkpZm9yKHZhciBpPXRoaXMuc3R5bGUoXCJtYXJrZXItbWlkXCIpLmdldERlZmluaXRpb24oKSxuPTE7bjxlLmxlbmd0aC0xO24rKylpLnJlbmRlcih0LGVbbl1bMF0sZVtuXVsxXSk7aWYodGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuaXNVcmxEZWZpbml0aW9uKCkpKGk9dGhpcy5zdHlsZShcIm1hcmtlci1lbmRcIikuZ2V0RGVmaW5pdGlvbigpKS5yZW5kZXIodCxlW2UubGVuZ3RoLTFdWzBdLGVbZS5sZW5ndGgtMV1bMV0pfX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdGgoKX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9fSxELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsRC5TZXREZWZhdWx0cz1mdW5jdGlvbih0KXt0LnN0cm9rZVN0eWxlPVwicmdiYSgwLDAsMCwwKVwiLHQubGluZUNhcD1cImJ1dHRcIix0LmxpbmVKb2luPVwibWl0ZXJcIix0Lm1pdGVyTGltaXQ9NH0sRC5FbGVtZW50LnN2Zz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZUNsZWFyQ29udGV4dD10aGlzLmNsZWFyQ29udGV4dCx0aGlzLmNsZWFyQ29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VDbGVhckNvbnRleHQodCksRC5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCl9LHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXtpZihELlNldERlZmF1bHRzKHQpLHQuY2FudmFzLnN0eWxlJiZ2b2lkIDAhPT10LmZvbnQmJnZvaWQgMCE9PWwuZ2V0Q29tcHV0ZWRTdHlsZSl7dC5mb250PWwuZ2V0Q29tcHV0ZWRTdHlsZSh0LmNhbnZhcykuZ2V0UHJvcGVydHlWYWx1ZShcImZvbnRcIik7dmFyIGU9bmV3IEQuUHJvcGVydHkoXCJmb250U2l6ZVwiLEQuRm9udC5QYXJzZSh0LmZvbnQpLmZvbnRTaXplKTtlLmhhc1ZhbHVlKCkmJihELnJvb3RFbVNpemU9RC5lbVNpemU9ZS50b1BpeGVscyhcInlcIikpfXRoaXMuYmFzZVNldENvbnRleHQodCksdGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInhcIiwhMCkudmFsdWU9MCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInlcIiwhMCkudmFsdWU9MCksdC50cmFuc2xhdGUodGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpKTt2YXIgaT1ELlZpZXdQb3J0LndpZHRoKCksbj1ELlZpZXdQb3J0LmhlaWdodCgpO2lmKHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIiwhMCkudmFsdWU9XCIxMDAlXCIpLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiLCEwKS52YWx1ZT1cIjEwMCVcIiksdm9pZCAwPT09dGhpcy5yb290KXtpPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLG49dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpO3ZhciBzPTAsYT0wO3RoaXMuYXR0cmlidXRlKFwicmVmWFwiKS5oYXNWYWx1ZSgpJiZ0aGlzLmF0dHJpYnV0ZShcInJlZllcIikuaGFzVmFsdWUoKSYmKHM9LXRoaXMuYXR0cmlidXRlKFwicmVmWFwiKS50b1BpeGVscyhcInhcIiksYT0tdGhpcy5hdHRyaWJ1dGUoXCJyZWZZXCIpLnRvUGl4ZWxzKFwieVwiKSksXCJ2aXNpYmxlXCIhPXRoaXMuYXR0cmlidXRlKFwib3ZlcmZsb3dcIikudmFsdWVPckRlZmF1bHQoXCJoaWRkZW5cIikmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHMsYSksdC5saW5lVG8oaSxhKSx0LmxpbmVUbyhpLG4pLHQubGluZVRvKHMsbiksdC5jbG9zZVBhdGgoKSx0LmNsaXAoKSl9aWYoRC5WaWV3UG9ydC5TZXRDdXJyZW50KGksbiksdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLmhhc1ZhbHVlKCkpe3ZhciByPUQuVG9OdW1iZXJBcnJheSh0aGlzLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpLG89clswXSxoPXJbMV07aT1yWzJdLG49clszXSxELkFzcGVjdFJhdGlvKHQsdGhpcy5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlLEQuVmlld1BvcnQud2lkdGgoKSxpLEQuVmlld1BvcnQuaGVpZ2h0KCksbixvLGgsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlLHRoaXMuYXR0cmlidXRlKFwicmVmWVwiKS52YWx1ZSksRC5WaWV3UG9ydC5SZW1vdmVDdXJyZW50KCksRC5WaWV3UG9ydC5TZXRDdXJyZW50KHJbMl0sclszXSl9fX0sRC5FbGVtZW50LnN2Zy5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLEQuRWxlbWVudC5yZWN0PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5hdHRyaWJ1dGUoXCJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxpPXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLnRvUGl4ZWxzKFwieFwiKSxzPXRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSxhPXRoaXMuYXR0cmlidXRlKFwicnhcIikudG9QaXhlbHMoXCJ4XCIpLHI9dGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS50b1BpeGVscyhcInlcIik7aWYodGhpcy5hdHRyaWJ1dGUoXCJyeFwiKS5oYXNWYWx1ZSgpJiYhdGhpcy5hdHRyaWJ1dGUoXCJyeVwiKS5oYXNWYWx1ZSgpJiYocj1hKSx0aGlzLmF0dHJpYnV0ZShcInJ5XCIpLmhhc1ZhbHVlKCkmJiF0aGlzLmF0dHJpYnV0ZShcInJ4XCIpLmhhc1ZhbHVlKCkmJihhPXIpLGE9TWF0aC5taW4oYSxuLzIpLHI9TWF0aC5taW4ocixzLzIpLG51bGwhPXQpe3ZhciBvPShNYXRoLnNxcnQoMiktMSkvMyo0O3QuYmVnaW5QYXRoKCksMDxzJiYwPG4mJih0Lm1vdmVUbyhlK2EsaSksdC5saW5lVG8oZStuLWEsaSksdC5iZXppZXJDdXJ2ZVRvKGUrbi1hK28qYSxpLGUrbixpK3ItbypyLGUrbixpK3IpLHQubGluZVRvKGUrbixpK3MtciksdC5iZXppZXJDdXJ2ZVRvKGUrbixpK3MtcitvKnIsZStuLWErbyphLGkrcyxlK24tYSxpK3MpLHQubGluZVRvKGUrYSxpK3MpLHQuYmV6aWVyQ3VydmVUbyhlK2EtbyphLGkrcyxlLGkrcy1yK28qcixlLGkrcy1yKSx0LmxpbmVUbyhlLGkrciksdC5iZXppZXJDdXJ2ZVRvKGUsaStyLW8qcixlK2EtbyphLGksZSthLGkpLHQuY2xvc2VQYXRoKCkpfXJldHVybiBuZXcgRC5Cb3VuZGluZ0JveChlLGksZStuLGkrcyl9fSxELkVsZW1lbnQucmVjdC5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsRC5FbGVtZW50LmNpcmNsZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJjeVwiKS50b1BpeGVscyhcInlcIiksbj10aGlzLmF0dHJpYnV0ZShcInJcIikudG9QaXhlbHMoKTtyZXR1cm4gbnVsbCE9dCYmMDxuJiYodC5iZWdpblBhdGgoKSx0LmFyYyhlLGksbiwwLDIqTWF0aC5QSSwhMSksdC5jbG9zZVBhdGgoKSksbmV3IEQuQm91bmRpbmdCb3goZS1uLGktbixlK24saStuKX19LEQuRWxlbWVudC5jaXJjbGUucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEQuRWxlbWVudC5lbGxpcHNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9KE1hdGguc3FydCgyKS0xKS8zKjQsaT10aGlzLmF0dHJpYnV0ZShcInJ4XCIpLnRvUGl4ZWxzKFwieFwiKSxuPXRoaXMuYXR0cmlidXRlKFwicnlcIikudG9QaXhlbHMoXCJ5XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS50b1BpeGVscyhcInhcIiksYT10aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbnVsbCE9dCYmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8ocytpLGEpLHQuYmV6aWVyQ3VydmVUbyhzK2ksYStlKm4scytlKmksYStuLHMsYStuKSx0LmJlemllckN1cnZlVG8ocy1lKmksYStuLHMtaSxhK2UqbixzLWksYSksdC5iZXppZXJDdXJ2ZVRvKHMtaSxhLWUqbixzLWUqaSxhLW4scyxhLW4pLHQuYmV6aWVyQ3VydmVUbyhzK2UqaSxhLW4scytpLGEtZSpuLHMraSxhKSx0LmNsb3NlUGF0aCgpKSxuZXcgRC5Cb3VuZGluZ0JveChzLWksYS1uLHMraSxhK24pfX0sRC5FbGVtZW50LmVsbGlwc2UucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEQuRWxlbWVudC5saW5lPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmdldFBvaW50cz1mdW5jdGlvbigpe3JldHVybltuZXcgRC5Qb2ludCh0aGlzLmF0dHJpYnV0ZShcIngxXCIpLnRvUGl4ZWxzKFwieFwiKSx0aGlzLmF0dHJpYnV0ZShcInkxXCIpLnRvUGl4ZWxzKFwieVwiKSksbmV3IEQuUG9pbnQodGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS50b1BpeGVscyhcInhcIiksdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS50b1BpeGVscyhcInlcIikpXX0sdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuZ2V0UG9pbnRzKCk7cmV0dXJuIG51bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKGVbMF0ueCxlWzBdLnkpLHQubGluZVRvKGVbMV0ueCxlWzFdLnkpKSxuZXcgRC5Cb3VuZGluZ0JveChlWzBdLngsZVswXS55LGVbMV0ueCxlWzFdLnkpfSx0aGlzLmdldE1hcmtlcnM9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmdldFBvaW50cygpLGU9dFswXS5hbmdsZVRvKHRbMV0pO3JldHVybltbdFswXSxlXSxbdFsxXSxlXV19fSxELkVsZW1lbnQubGluZS5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsRC5FbGVtZW50LnBvbHlsaW5lPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnBvaW50cz1ELkNyZWF0ZVBhdGgodGhpcy5hdHRyaWJ1dGUoXCJwb2ludHNcIikudmFsdWUpLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT1uZXcgRC5Cb3VuZGluZ0JveCh0aGlzLnBvaW50c1swXS54LHRoaXMucG9pbnRzWzBdLnkpO251bGwhPXQmJih0LmJlZ2luUGF0aCgpLHQubW92ZVRvKHRoaXMucG9pbnRzWzBdLngsdGhpcy5wb2ludHNbMF0ueSkpO2Zvcih2YXIgaT0xO2k8dGhpcy5wb2ludHMubGVuZ3RoO2krKyllLmFkZFBvaW50KHRoaXMucG9pbnRzW2ldLngsdGhpcy5wb2ludHNbaV0ueSksbnVsbCE9dCYmdC5saW5lVG8odGhpcy5wb2ludHNbaV0ueCx0aGlzLnBvaW50c1tpXS55KTtyZXR1cm4gZX0sdGhpcy5nZXRNYXJrZXJzPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PVtdLGU9MDtlPHRoaXMucG9pbnRzLmxlbmd0aC0xO2UrKyl0LnB1c2goW3RoaXMucG9pbnRzW2VdLHRoaXMucG9pbnRzW2VdLmFuZ2xlVG8odGhpcy5wb2ludHNbZSsxXSldKTtyZXR1cm4gMDx0Lmxlbmd0aCYmdC5wdXNoKFt0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGgtMV0sdFt0Lmxlbmd0aC0xXVsxXV0pLHR9fSxELkVsZW1lbnQucG9seWxpbmUucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuUGF0aEVsZW1lbnRCYXNlLEQuRWxlbWVudC5wb2x5Z29uPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQucG9seWxpbmUsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVBhdGg9dGhpcy5wYXRoLHRoaXMucGF0aD1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmJhc2VQYXRoKHQpO3JldHVybiBudWxsIT10JiYodC5saW5lVG8odGhpcy5wb2ludHNbMF0ueCx0aGlzLnBvaW50c1swXS55KSx0LmNsb3NlUGF0aCgpKSxlfX0sRC5FbGVtZW50LnBvbHlnb24ucHJvdG90eXBlPW5ldyBELkVsZW1lbnQucG9seWxpbmUsRC5FbGVtZW50LnBhdGg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5QYXRoRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpO3ZhciBlPXRoaXMuYXR0cmlidXRlKFwiZFwiKS52YWx1ZTtlPWUucmVwbGFjZSgvLC9nbSxcIiBcIik7Zm9yKHZhciBpPTA7aTwyO2krKyllPWUucmVwbGFjZSgvKFtNbVp6TGxIaFZ2Q2NTc1FxVHRBYV0pKFteXFxzXSkvZ20sXCIkMSAkMlwiKTtlPShlPWUucmVwbGFjZSgvKFteXFxzXSkoW01tWnpMbEhoVnZDY1NzUXFUdEFhXSkvZ20sXCIkMSAkMlwiKSkucmVwbGFjZSgvKFswLTldKShbK1xcLV0pL2dtLFwiJDEgJDJcIik7Zm9yKGk9MDtpPDI7aSsrKWU9ZS5yZXBsYWNlKC8oXFwuWzAtOV0qKShcXC4pL2dtLFwiJDEgJDJcIik7ZT1lLnJlcGxhY2UoLyhbQWFdKFxccytbMC05XSspezN9KVxccysoWzAxXSlcXHMqKFswMV0pL2dtLFwiJDEgJDMgJDQgXCIpLGU9RC5jb21wcmVzc1NwYWNlcyhlKSxlPUQudHJpbShlKSx0aGlzLlBhdGhQYXJzZXI9bmV3IGZ1bmN0aW9uKHQpe3RoaXMudG9rZW5zPXQuc3BsaXQoXCIgXCIpLHRoaXMucmVzZXQ9ZnVuY3Rpb24oKXt0aGlzLmk9LTEsdGhpcy5jb21tYW5kPVwiXCIsdGhpcy5wcmV2aW91c0NvbW1hbmQ9XCJcIix0aGlzLnN0YXJ0PW5ldyBELlBvaW50KDAsMCksdGhpcy5jb250cm9sPW5ldyBELlBvaW50KDAsMCksdGhpcy5jdXJyZW50PW5ldyBELlBvaW50KDAsMCksdGhpcy5wb2ludHM9W10sdGhpcy5hbmdsZXM9W119LHRoaXMuaXNFbmQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5pPj10aGlzLnRva2Vucy5sZW5ndGgtMX0sdGhpcy5pc0NvbW1hbmRPckVuZD1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5pc0VuZCgpfHxudWxsIT10aGlzLnRva2Vuc1t0aGlzLmkrMV0ubWF0Y2goL15bQS1aYS16XSQvKX0sdGhpcy5pc1JlbGF0aXZlQ29tbWFuZD1mdW5jdGlvbigpe3N3aXRjaCh0aGlzLmNvbW1hbmQpe2Nhc2VcIm1cIjpjYXNlXCJsXCI6Y2FzZVwiaFwiOmNhc2VcInZcIjpjYXNlXCJjXCI6Y2FzZVwic1wiOmNhc2VcInFcIjpjYXNlXCJ0XCI6Y2FzZVwiYVwiOmNhc2VcInpcIjpyZXR1cm4hMH1yZXR1cm4hMX0sdGhpcy5nZXRUb2tlbj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmkrKyx0aGlzLnRva2Vuc1t0aGlzLmldfSx0aGlzLmdldFNjYWxhcj1mdW5jdGlvbigpe3JldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0VG9rZW4oKSl9LHRoaXMubmV4dENvbW1hbmQ9ZnVuY3Rpb24oKXt0aGlzLnByZXZpb3VzQ29tbWFuZD10aGlzLmNvbW1hbmQsdGhpcy5jb21tYW5kPXRoaXMuZ2V0VG9rZW4oKX0sdGhpcy5nZXRQb2ludD1mdW5jdGlvbigpe3ZhciB0PW5ldyBELlBvaW50KHRoaXMuZ2V0U2NhbGFyKCksdGhpcy5nZXRTY2FsYXIoKSk7cmV0dXJuIHRoaXMubWFrZUFic29sdXRlKHQpfSx0aGlzLmdldEFzQ29udHJvbFBvaW50PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5nZXRQb2ludCgpO3JldHVybiB0aGlzLmNvbnRyb2w9dH0sdGhpcy5nZXRBc0N1cnJlbnRQb2ludD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0UG9pbnQoKTtyZXR1cm4gdGhpcy5jdXJyZW50PXR9LHRoaXMuZ2V0UmVmbGVjdGVkQ29udHJvbFBvaW50PWZ1bmN0aW9uKCl7cmV0dXJuXCJjXCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCkmJlwic1wiIT10aGlzLnByZXZpb3VzQ29tbWFuZC50b0xvd2VyQ2FzZSgpJiZcInFcIiE9dGhpcy5wcmV2aW91c0NvbW1hbmQudG9Mb3dlckNhc2UoKSYmXCJ0XCIhPXRoaXMucHJldmlvdXNDb21tYW5kLnRvTG93ZXJDYXNlKCk/dGhpcy5jdXJyZW50Om5ldyBELlBvaW50KDIqdGhpcy5jdXJyZW50LngtdGhpcy5jb250cm9sLngsMip0aGlzLmN1cnJlbnQueS10aGlzLmNvbnRyb2wueSl9LHRoaXMubWFrZUFic29sdXRlPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLmlzUmVsYXRpdmVDb21tYW5kKCkmJih0LngrPXRoaXMuY3VycmVudC54LHQueSs9dGhpcy5jdXJyZW50LnkpLHR9LHRoaXMuYWRkTWFya2VyPWZ1bmN0aW9uKHQsZSxpKXtudWxsIT1pJiYwPHRoaXMuYW5nbGVzLmxlbmd0aCYmbnVsbD09dGhpcy5hbmdsZXNbdGhpcy5hbmdsZXMubGVuZ3RoLTFdJiYodGhpcy5hbmdsZXNbdGhpcy5hbmdsZXMubGVuZ3RoLTFdPXRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aC0xXS5hbmdsZVRvKGkpKSx0aGlzLmFkZE1hcmtlckFuZ2xlKHQsbnVsbD09ZT9udWxsOmUuYW5nbGVUbyh0KSl9LHRoaXMuYWRkTWFya2VyQW5nbGU9ZnVuY3Rpb24odCxlKXt0aGlzLnBvaW50cy5wdXNoKHQpLHRoaXMuYW5nbGVzLnB1c2goZSl9LHRoaXMuZ2V0TWFya2VyUG9pbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9pbnRzfSx0aGlzLmdldE1hcmtlckFuZ2xlcz1mdW5jdGlvbigpe2Zvcih2YXIgdD0wO3Q8dGhpcy5hbmdsZXMubGVuZ3RoO3QrKylpZihudWxsPT10aGlzLmFuZ2xlc1t0XSlmb3IodmFyIGU9dCsxO2U8dGhpcy5hbmdsZXMubGVuZ3RoO2UrKylpZihudWxsIT10aGlzLmFuZ2xlc1tlXSl7dGhpcy5hbmdsZXNbdF09dGhpcy5hbmdsZXNbZV07YnJlYWt9cmV0dXJuIHRoaXMuYW5nbGVzfX0oZSksdGhpcy5wYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuUGF0aFBhcnNlcjtlLnJlc2V0KCk7dmFyIGk9bmV3IEQuQm91bmRpbmdCb3g7Zm9yKG51bGwhPXQmJnQuYmVnaW5QYXRoKCk7IWUuaXNFbmQoKTspc3dpdGNoKGUubmV4dENvbW1hbmQoKSxlLmNvbW1hbmQpe2Nhc2VcIk1cIjpjYXNlXCJtXCI6dmFyIG49ZS5nZXRBc0N1cnJlbnRQb2ludCgpO2ZvcihlLmFkZE1hcmtlcihuKSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubW92ZVRvKG4ueCxuLnkpLGUuc3RhcnQ9ZS5jdXJyZW50OyFlLmlzQ29tbWFuZE9yRW5kKCk7KXtuPWUuZ2V0QXNDdXJyZW50UG9pbnQoKTtlLmFkZE1hcmtlcihuLGUuc3RhcnQpLGkuYWRkUG9pbnQobi54LG4ueSksbnVsbCE9dCYmdC5saW5lVG8obi54LG4ueSl9YnJlYWs7Y2FzZVwiTFwiOmNhc2VcImxcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcz1lLmN1cnJlbnQ7bj1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIobixzKSxpLmFkZFBvaW50KG4ueCxuLnkpLG51bGwhPXQmJnQubGluZVRvKG4ueCxuLnkpfWJyZWFrO2Nhc2VcIkhcIjpjYXNlXCJoXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIGE9bmV3IEQuUG9pbnQoKGUuaXNSZWxhdGl2ZUNvbW1hbmQoKT9lLmN1cnJlbnQueDowKStlLmdldFNjYWxhcigpLGUuY3VycmVudC55KTtlLmFkZE1hcmtlcihhLGUuY3VycmVudCksZS5jdXJyZW50PWEsaS5hZGRQb2ludChlLmN1cnJlbnQueCxlLmN1cnJlbnQueSksbnVsbCE9dCYmdC5saW5lVG8oZS5jdXJyZW50LngsZS5jdXJyZW50LnkpfWJyZWFrO2Nhc2VcIlZcIjpjYXNlXCJ2XCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7YT1uZXcgRC5Qb2ludChlLmN1cnJlbnQueCwoZS5pc1JlbGF0aXZlQ29tbWFuZCgpP2UuY3VycmVudC55OjApK2UuZ2V0U2NhbGFyKCkpO2UuYWRkTWFya2VyKGEsZS5jdXJyZW50KSxlLmN1cnJlbnQ9YSxpLmFkZFBvaW50KGUuY3VycmVudC54LGUuY3VycmVudC55KSxudWxsIT10JiZ0LmxpbmVUbyhlLmN1cnJlbnQueCxlLmN1cnJlbnQueSl9YnJlYWs7Y2FzZVwiQ1wiOmNhc2VcImNcIjpmb3IoOyFlLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcj1lLmN1cnJlbnQsbz1lLmdldFBvaW50KCksaD1lLmdldEFzQ29udHJvbFBvaW50KCksbD1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIobCxoLG8pLGkuYWRkQmV6aWVyQ3VydmUoci54LHIueSxvLngsby55LGgueCxoLnksbC54LGwueSksbnVsbCE9dCYmdC5iZXppZXJDdXJ2ZVRvKG8ueCxvLnksaC54LGgueSxsLngsbC55KX1icmVhaztjYXNlXCJTXCI6Y2FzZVwic1wiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3I9ZS5jdXJyZW50LG89ZS5nZXRSZWZsZWN0ZWRDb250cm9sUG9pbnQoKSxoPWUuZ2V0QXNDb250cm9sUG9pbnQoKSxsPWUuZ2V0QXNDdXJyZW50UG9pbnQoKTtlLmFkZE1hcmtlcihsLGgsbyksaS5hZGRCZXppZXJDdXJ2ZShyLngsci55LG8ueCxvLnksaC54LGgueSxsLngsbC55KSxudWxsIT10JiZ0LmJlemllckN1cnZlVG8oby54LG8ueSxoLngsaC55LGwueCxsLnkpfWJyZWFrO2Nhc2VcIlFcIjpjYXNlXCJxXCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7cj1lLmN1cnJlbnQsaD1lLmdldEFzQ29udHJvbFBvaW50KCksbD1lLmdldEFzQ3VycmVudFBvaW50KCk7ZS5hZGRNYXJrZXIobCxoLGgpLGkuYWRkUXVhZHJhdGljQ3VydmUoci54LHIueSxoLngsaC55LGwueCxsLnkpLG51bGwhPXQmJnQucXVhZHJhdGljQ3VydmVUbyhoLngsaC55LGwueCxsLnkpfWJyZWFrO2Nhc2VcIlRcIjpjYXNlXCJ0XCI6Zm9yKDshZS5pc0NvbW1hbmRPckVuZCgpOyl7cj1lLmN1cnJlbnQsaD1lLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpO2UuY29udHJvbD1oO2w9ZS5nZXRBc0N1cnJlbnRQb2ludCgpO2UuYWRkTWFya2VyKGwsaCxoKSxpLmFkZFF1YWRyYXRpY0N1cnZlKHIueCxyLnksaC54LGgueSxsLngsbC55KSxudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8oaC54LGgueSxsLngsbC55KX1icmVhaztjYXNlXCJBXCI6Y2FzZVwiYVwiOmZvcig7IWUuaXNDb21tYW5kT3JFbmQoKTspe3I9ZS5jdXJyZW50O3ZhciB1PWUuZ2V0U2NhbGFyKCksYz1lLmdldFNjYWxhcigpLGY9ZS5nZXRTY2FsYXIoKSooTWF0aC5QSS8xODApLHA9ZS5nZXRTY2FsYXIoKSxkPWUuZ2V0U2NhbGFyKCksbT0obD1lLmdldEFzQ3VycmVudFBvaW50KCksbmV3IEQuUG9pbnQoTWF0aC5jb3MoZikqKHIueC1sLngpLzIrTWF0aC5zaW4oZikqKHIueS1sLnkpLzIsLU1hdGguc2luKGYpKihyLngtbC54KS8yK01hdGguY29zKGYpKihyLnktbC55KS8yKSkseT1NYXRoLnBvdyhtLngsMikvTWF0aC5wb3codSwyKStNYXRoLnBvdyhtLnksMikvTWF0aC5wb3coYywyKTsxPHkmJih1Kj1NYXRoLnNxcnQoeSksYyo9TWF0aC5zcXJ0KHkpKTt2YXIgdj0ocD09ZD8tMToxKSpNYXRoLnNxcnQoKE1hdGgucG93KHUsMikqTWF0aC5wb3coYywyKS1NYXRoLnBvdyh1LDIpKk1hdGgucG93KG0ueSwyKS1NYXRoLnBvdyhjLDIpKk1hdGgucG93KG0ueCwyKSkvKE1hdGgucG93KHUsMikqTWF0aC5wb3cobS55LDIpK01hdGgucG93KGMsMikqTWF0aC5wb3cobS54LDIpKSk7aXNOYU4odikmJih2PTApO3ZhciBnPW5ldyBELlBvaW50KHYqdSptLnkvYyx2Ki1jKm0ueC91KSx4PW5ldyBELlBvaW50KChyLngrbC54KS8yK01hdGguY29zKGYpKmcueC1NYXRoLnNpbihmKSpnLnksKHIueStsLnkpLzIrTWF0aC5zaW4oZikqZy54K01hdGguY29zKGYpKmcueSksYj1mdW5jdGlvbih0KXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHRbMF0sMikrTWF0aC5wb3codFsxXSwyKSl9LFA9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzBdK3RbMV0qZVsxXSkvKGIodCkqYihlKSl9LEU9ZnVuY3Rpb24odCxlKXtyZXR1cm4odFswXSplWzFdPHRbMV0qZVswXT8tMToxKSpNYXRoLmFjb3MoUCh0LGUpKX0sdz1FKFsxLDBdLFsobS54LWcueCkvdSwobS55LWcueSkvY10pLEM9WyhtLngtZy54KS91LChtLnktZy55KS9jXSxCPVsoLW0ueC1nLngpL3UsKC1tLnktZy55KS9jXSxNPUUoQyxCKTtQKEMsQik8PS0xJiYoTT1NYXRoLlBJKSwxPD1QKEMsQikmJihNPTApO3ZhciBUPTEtZD8xOi0xLFM9dytUKihNLzIpLFY9bmV3IEQuUG9pbnQoeC54K3UqTWF0aC5jb3MoUykseC55K2MqTWF0aC5zaW4oUykpO2lmKGUuYWRkTWFya2VyQW5nbGUoVixTLVQqTWF0aC5QSS8yKSxlLmFkZE1hcmtlckFuZ2xlKGwsUy1UKk1hdGguUEkpLGkuYWRkUG9pbnQobC54LGwueSksbnVsbCE9dCYmIWlzTmFOKHcpJiYhaXNOYU4oTSkpe1A9Yzx1P3U6Yzt2YXIgaz1jPHU/MTp1L2MsQT1jPHU/Yy91OjE7dC50cmFuc2xhdGUoeC54LHgueSksdC5yb3RhdGUoZiksdC5zY2FsZShrLEEpLHQuYXJjKDAsMCxQLHcsdytNLDEtZCksdC5zY2FsZSgxL2ssMS9BKSx0LnJvdGF0ZSgtZiksdC50cmFuc2xhdGUoLXgueCwteC55KX19YnJlYWs7Y2FzZVwiWlwiOmNhc2VcInpcIjpudWxsIT10JiZpLngxIT09aS54MiYmaS55MSE9PWkueTImJnQuY2xvc2VQYXRoKCksZS5jdXJyZW50PWUuc3RhcnR9cmV0dXJuIGl9LHRoaXMuZ2V0TWFya2Vycz1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyUG9pbnRzKCksZT10aGlzLlBhdGhQYXJzZXIuZ2V0TWFya2VyQW5nbGVzKCksaT1bXSxuPTA7bjx0Lmxlbmd0aDtuKyspaS5wdXNoKFt0W25dLGVbbl1dKTtyZXR1cm4gaX19LEQuRWxlbWVudC5wYXRoLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlBhdGhFbGVtZW50QmFzZSxELkVsZW1lbnQucGF0dGVybj1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNyZWF0ZVBhdHRlcm49ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIsITApLHM9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIsITApLGE9bmV3IEQuRWxlbWVudC5zdmc7YS5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEQuUHJvcGVydHkoXCJ2aWV3Qm94XCIsdGhpcy5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxhLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEQuUHJvcGVydHkoXCJ3aWR0aFwiLG4rXCJweFwiKSxhLmF0dHJpYnV0ZXMuaGVpZ2h0PW5ldyBELlByb3BlcnR5KFwiaGVpZ2h0XCIscytcInB4XCIpLGEuYXR0cmlidXRlcy50cmFuc2Zvcm09bmV3IEQuUHJvcGVydHkoXCJ0cmFuc2Zvcm1cIix0aGlzLmF0dHJpYnV0ZShcInBhdHRlcm5UcmFuc2Zvcm1cIikudmFsdWUpLGEuY2hpbGRyZW49dGhpcy5jaGlsZHJlbjt2YXIgcj1kKG4scyksbz1yLmdldENvbnRleHQoXCIyZFwiKTt0aGlzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSYmdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCkmJm8udHJhbnNsYXRlKHRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiwhMCksdGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiLCEwKSksaS5oYXNWYWx1ZSgpP3RoaXMuc3R5bGVzW1wiZmlsbC1vcGFjaXR5XCJdPWk6ZGVsZXRlIHRoaXMuc3R5bGVzW1wiZmlsbC1vcGFjaXR5XCJdO2Zvcih2YXIgaD0tMTtoPD0xO2grKylmb3IodmFyIGw9LTE7bDw9MTtsKyspby5zYXZlKCksYS5hdHRyaWJ1dGVzLng9bmV3IEQuUHJvcGVydHkoXCJ4XCIsaCpyLndpZHRoKSxhLmF0dHJpYnV0ZXMueT1uZXcgRC5Qcm9wZXJ0eShcInlcIixsKnIuaGVpZ2h0KSxhLnJlbmRlcihvKSxvLnJlc3RvcmUoKTtyZXR1cm4gdC5jcmVhdGVQYXR0ZXJuKHIsXCJyZXBlYXRcIil9fSxELkVsZW1lbnQucGF0dGVybi5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQubWFya2VyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVJlbmRlcj10aGlzLnJlbmRlcix0aGlzLnJlbmRlcj1mdW5jdGlvbih0LGUsaSl7aWYoZSl7dC50cmFuc2xhdGUoZS54LGUueSksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoaSksXCJzdHJva2VXaWR0aFwiPT10aGlzLmF0dHJpYnV0ZShcIm1hcmtlclVuaXRzXCIpLnZhbHVlT3JEZWZhdWx0KFwic3Ryb2tlV2lkdGhcIikmJnQuc2NhbGUodC5saW5lV2lkdGgsdC5saW5lV2lkdGgpLHQuc2F2ZSgpO3ZhciBuPW5ldyBELkVsZW1lbnQuc3ZnO24uYXR0cmlidXRlcy52aWV3Qm94PW5ldyBELlByb3BlcnR5KFwidmlld0JveFwiLHRoaXMuYXR0cmlidXRlKFwidmlld0JveFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLnJlZlg9bmV3IEQuUHJvcGVydHkoXCJyZWZYXCIsdGhpcy5hdHRyaWJ1dGUoXCJyZWZYXCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMucmVmWT1uZXcgRC5Qcm9wZXJ0eShcInJlZllcIix0aGlzLmF0dHJpYnV0ZShcInJlZllcIikudmFsdWUpLG4uYXR0cmlidXRlcy53aWR0aD1uZXcgRC5Qcm9wZXJ0eShcIndpZHRoXCIsdGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJXaWR0aFwiKS52YWx1ZSksbi5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgRC5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwibWFya2VySGVpZ2h0XCIpLnZhbHVlKSxuLmF0dHJpYnV0ZXMuZmlsbD1uZXcgRC5Qcm9wZXJ0eShcImZpbGxcIix0aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJibGFja1wiKSksbi5hdHRyaWJ1dGVzLnN0cm9rZT1uZXcgRC5Qcm9wZXJ0eShcInN0cm9rZVwiLHRoaXMuYXR0cmlidXRlKFwic3Ryb2tlXCIpLnZhbHVlT3JEZWZhdWx0KFwibm9uZVwiKSksbi5jaGlsZHJlbj10aGlzLmNoaWxkcmVuLG4ucmVuZGVyKHQpLHQucmVzdG9yZSgpLFwic3Ryb2tlV2lkdGhcIj09dGhpcy5hdHRyaWJ1dGUoXCJtYXJrZXJVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcInN0cm9rZVdpZHRoXCIpJiZ0LnNjYWxlKDEvdC5saW5lV2lkdGgsMS90LmxpbmVXaWR0aCksXCJhdXRvXCI9PXRoaXMuYXR0cmlidXRlKFwib3JpZW50XCIpLnZhbHVlT3JEZWZhdWx0KFwiYXV0b1wiKSYmdC5yb3RhdGUoLWkpLHQudHJhbnNsYXRlKC1lLngsLWUueSl9fX0sRC5FbGVtZW50Lm1hcmtlci5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQuZGVmcz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe319LEQuRWxlbWVudC5kZWZzLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkVsZW1lbnRCYXNlLEQuRWxlbWVudC5HcmFkaWVudEJhc2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5zdG9wcz1bXTtmb3IodmFyIGU9MDtlPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2UrKyl7dmFyIGk9dGhpcy5jaGlsZHJlbltlXTtcInN0b3BcIj09aS50eXBlJiZ0aGlzLnN0b3BzLnB1c2goaSl9dGhpcy5nZXRHcmFkaWVudD1mdW5jdGlvbigpe30sdGhpcy5ncmFkaWVudFVuaXRzPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRVbml0c1wiKS52YWx1ZU9yRGVmYXVsdChcIm9iamVjdEJvdW5kaW5nQm94XCIpfSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQ9W1wiZ3JhZGllbnRVbml0c1wiXSx0aGlzLmluaGVyaXRTdG9wQ29udGFpbmVyPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0Lmxlbmd0aDtlKyspe3ZhciBpPXRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdFtlXTshdGhpcy5hdHRyaWJ1dGUoaSkuaGFzVmFsdWUoKSYmdC5hdHRyaWJ1dGUoaSkuaGFzVmFsdWUoKSYmKHRoaXMuYXR0cmlidXRlKGksITApLnZhbHVlPXQuYXR0cmlidXRlKGkpLnZhbHVlKX19LHRoaXMuY3JlYXRlR3JhZGllbnQ9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXM7dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuaGFzVmFsdWUoKSYmKG49dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpLHRoaXMuaW5oZXJpdFN0b3BDb250YWluZXIobikpO3ZhciBzPWZ1bmN0aW9uKHQpe3JldHVybiBpLmhhc1ZhbHVlKCk/bmV3IEQuUHJvcGVydHkoXCJjb2xvclwiLHQpLmFkZE9wYWNpdHkoaSkudmFsdWU6dH0sYT10aGlzLmdldEdyYWRpZW50KHQsZSk7aWYobnVsbD09YSlyZXR1cm4gcyhuLnN0b3BzW24uc3RvcHMubGVuZ3RoLTFdLmNvbG9yKTtmb3IodmFyIHI9MDtyPG4uc3RvcHMubGVuZ3RoO3IrKylhLmFkZENvbG9yU3RvcChuLnN0b3BzW3JdLm9mZnNldCxzKG4uc3RvcHNbcl0uY29sb3IpKTtpZih0aGlzLmF0dHJpYnV0ZShcImdyYWRpZW50VHJhbnNmb3JtXCIpLmhhc1ZhbHVlKCkpe3ZhciBvPUQuVmlld1BvcnQudmlld1BvcnRzWzBdLGg9bmV3IEQuRWxlbWVudC5yZWN0O2guYXR0cmlidXRlcy54PW5ldyBELlByb3BlcnR5KFwieFwiLC1ELk1BWF9WSVJUVUFMX1BJWEVMUy8zKSxoLmF0dHJpYnV0ZXMueT1uZXcgRC5Qcm9wZXJ0eShcInlcIiwtRC5NQVhfVklSVFVBTF9QSVhFTFMvMyksaC5hdHRyaWJ1dGVzLndpZHRoPW5ldyBELlByb3BlcnR5KFwid2lkdGhcIixELk1BWF9WSVJUVUFMX1BJWEVMUyksaC5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgRC5Qcm9wZXJ0eShcImhlaWdodFwiLEQuTUFYX1ZJUlRVQUxfUElYRUxTKTt2YXIgbD1uZXcgRC5FbGVtZW50Lmc7bC5hdHRyaWJ1dGVzLnRyYW5zZm9ybT1uZXcgRC5Qcm9wZXJ0eShcInRyYW5zZm9ybVwiLHRoaXMuYXR0cmlidXRlKFwiZ3JhZGllbnRUcmFuc2Zvcm1cIikudmFsdWUpLGwuY2hpbGRyZW49W2hdO3ZhciB1PW5ldyBELkVsZW1lbnQuc3ZnO3UuYXR0cmlidXRlcy54PW5ldyBELlByb3BlcnR5KFwieFwiLDApLHUuYXR0cmlidXRlcy55PW5ldyBELlByb3BlcnR5KFwieVwiLDApLHUuYXR0cmlidXRlcy53aWR0aD1uZXcgRC5Qcm9wZXJ0eShcIndpZHRoXCIsby53aWR0aCksdS5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgRC5Qcm9wZXJ0eShcImhlaWdodFwiLG8uaGVpZ2h0KSx1LmNoaWxkcmVuPVtsXTt2YXIgYz1kKG8ud2lkdGgsby5oZWlnaHQpLGY9Yy5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIGYuZmlsbFN0eWxlPWEsdS5yZW5kZXIoZiksZi5jcmVhdGVQYXR0ZXJuKGMsXCJuby1yZXBlYXRcIil9cmV0dXJuIGF9fSxELkVsZW1lbnQuR3JhZGllbnRCYXNlLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkVsZW1lbnRCYXNlLEQuRWxlbWVudC5saW5lYXJHcmFkaWVudD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkdyYWRpZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ4MVwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcInkxXCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwieDJcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJ5MlwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9lLmdldEJvdW5kaW5nQm94KHQpOm51bGw7dGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS5oYXNWYWx1ZSgpfHx0aGlzLmF0dHJpYnV0ZShcInkxXCIpLmhhc1ZhbHVlKCl8fHRoaXMuYXR0cmlidXRlKFwieDJcIikuaGFzVmFsdWUoKXx8dGhpcy5hdHRyaWJ1dGUoXCJ5MlwiKS5oYXNWYWx1ZSgpfHwodGhpcy5hdHRyaWJ1dGUoXCJ4MVwiLCEwKS52YWx1ZT0wLHRoaXMuYXR0cmlidXRlKFwieTFcIiwhMCkudmFsdWU9MCx0aGlzLmF0dHJpYnV0ZShcIngyXCIsITApLnZhbHVlPTEsdGhpcy5hdHRyaWJ1dGUoXCJ5MlwiLCEwKS52YWx1ZT0wKTt2YXIgbj1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueCgpK2kud2lkdGgoKSp0aGlzLmF0dHJpYnV0ZShcIngxXCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJ4MVwiKS50b1BpeGVscyhcInhcIikscz1cIm9iamVjdEJvdW5kaW5nQm94XCI9PXRoaXMuZ3JhZGllbnRVbml0cygpP2kueSgpK2kuaGVpZ2h0KCkqdGhpcy5hdHRyaWJ1dGUoXCJ5MVwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieTFcIikudG9QaXhlbHMoXCJ5XCIpLGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJ4MlwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwieDJcIikudG9QaXhlbHMoXCJ4XCIpLHI9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwieTJcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcInkyXCIpLnRvUGl4ZWxzKFwieVwiKTtyZXR1cm4gbj09YSYmcz09cj9udWxsOnQuY3JlYXRlTGluZWFyR3JhZGllbnQobixzLGEscil9fSxELkVsZW1lbnQubGluZWFyR3JhZGllbnQucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuR3JhZGllbnRCYXNlLEQuRWxlbWVudC5yYWRpYWxHcmFkaWVudD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkdyYWRpZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJjeFwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImN5XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiclwiKSx0aGlzLmF0dHJpYnV0ZXNUb0luaGVyaXQucHVzaChcImZ4XCIpLHRoaXMuYXR0cmlidXRlc1RvSW5oZXJpdC5wdXNoKFwiZnlcIiksdGhpcy5hdHRyaWJ1dGVzVG9Jbmhlcml0LnB1c2goXCJmclwiKSx0aGlzLmdldEdyYWRpZW50PWZ1bmN0aW9uKHQsZSl7dmFyIGk9ZS5nZXRCb3VuZGluZ0JveCh0KTt0aGlzLmF0dHJpYnV0ZShcImN4XCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcImN4XCIsITApLnZhbHVlPVwiNTAlXCIpLHRoaXMuYXR0cmlidXRlKFwiY3lcIikuaGFzVmFsdWUoKXx8KHRoaXMuYXR0cmlidXRlKFwiY3lcIiwhMCkudmFsdWU9XCI1MCVcIiksdGhpcy5hdHRyaWJ1dGUoXCJyXCIpLmhhc1ZhbHVlKCl8fCh0aGlzLmF0dHJpYnV0ZShcInJcIiwhMCkudmFsdWU9XCI1MCVcIik7dmFyIG49XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJjeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiY3hcIikudG9QaXhlbHMoXCJ4XCIpLHM9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLnkoKStpLmhlaWdodCgpKnRoaXMuYXR0cmlidXRlKFwiY3lcIikubnVtVmFsdWUoKTp0aGlzLmF0dHJpYnV0ZShcImN5XCIpLnRvUGl4ZWxzKFwieVwiKSxhPW4scj1zO3RoaXMuYXR0cmlidXRlKFwiZnhcIikuaGFzVmFsdWUoKSYmKGE9XCJvYmplY3RCb3VuZGluZ0JveFwiPT10aGlzLmdyYWRpZW50VW5pdHMoKT9pLngoKStpLndpZHRoKCkqdGhpcy5hdHRyaWJ1dGUoXCJmeFwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiZnhcIikudG9QaXhlbHMoXCJ4XCIpKSx0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLmhhc1ZhbHVlKCkmJihyPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/aS55KCkraS5oZWlnaHQoKSp0aGlzLmF0dHJpYnV0ZShcImZ5XCIpLm51bVZhbHVlKCk6dGhpcy5hdHRyaWJ1dGUoXCJmeVwiKS50b1BpeGVscyhcInlcIikpO3ZhciBvPVwib2JqZWN0Qm91bmRpbmdCb3hcIj09dGhpcy5ncmFkaWVudFVuaXRzKCk/KGkud2lkdGgoKStpLmhlaWdodCgpKS8yKnRoaXMuYXR0cmlidXRlKFwiclwiKS5udW1WYWx1ZSgpOnRoaXMuYXR0cmlidXRlKFwiclwiKS50b1BpeGVscygpLGg9dGhpcy5hdHRyaWJ1dGUoXCJmclwiKS50b1BpeGVscygpO3JldHVybiB0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KGEscixoLG4scyxvKX19LEQuRWxlbWVudC5yYWRpYWxHcmFkaWVudC5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5HcmFkaWVudEJhc2UsRC5FbGVtZW50LnN0b3A9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5vZmZzZXQ9dGhpcy5hdHRyaWJ1dGUoXCJvZmZzZXRcIikubnVtVmFsdWUoKSx0aGlzLm9mZnNldDwwJiYodGhpcy5vZmZzZXQ9MCksMTx0aGlzLm9mZnNldCYmKHRoaXMub2Zmc2V0PTEpO3ZhciBlPXRoaXMuc3R5bGUoXCJzdG9wLWNvbG9yXCIsITApO1wiXCI9PT1lLnZhbHVlJiYoZS52YWx1ZT1cIiMwMDBcIiksdGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKS5oYXNWYWx1ZSgpJiYoZT1lLmFkZE9wYWNpdHkodGhpcy5zdHlsZShcInN0b3Atb3BhY2l0eVwiKSkpLHRoaXMuY29sb3I9ZS52YWx1ZX0sRC5FbGVtZW50LnN0b3AucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuRWxlbWVudEJhc2UsRC5FbGVtZW50LkFuaW1hdGVCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLEQuQW5pbWF0aW9ucy5wdXNoKHRoaXMpLHRoaXMuZHVyYXRpb249MCx0aGlzLmJlZ2luPXRoaXMuYXR0cmlidXRlKFwiYmVnaW5cIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLm1heER1cmF0aW9uPXRoaXMuYmVnaW4rdGhpcy5hdHRyaWJ1dGUoXCJkdXJcIikudG9NaWxsaXNlY29uZHMoKSx0aGlzLmdldFByb3BlcnR5PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVUeXBlXCIpLnZhbHVlLGU9dGhpcy5hdHRyaWJ1dGUoXCJhdHRyaWJ1dGVOYW1lXCIpLnZhbHVlO3JldHVyblwiQ1NTXCI9PXQ/dGhpcy5wYXJlbnQuc3R5bGUoZSwhMCk6dGhpcy5wYXJlbnQuYXR0cmlidXRlKGUsITApfSx0aGlzLmluaXRpYWxWYWx1ZT1udWxsLHRoaXMuaW5pdGlhbFVuaXRzPVwiXCIsdGhpcy5yZW1vdmVkPSExLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7cmV0dXJuXCJcIn0sdGhpcy51cGRhdGU9ZnVuY3Rpb24odCl7aWYobnVsbD09dGhpcy5pbml0aWFsVmFsdWUmJih0aGlzLmluaXRpYWxWYWx1ZT10aGlzLmdldFByb3BlcnR5KCkudmFsdWUsdGhpcy5pbml0aWFsVW5pdHM9dGhpcy5nZXRQcm9wZXJ0eSgpLmdldFVuaXRzKCkpLHRoaXMuZHVyYXRpb24+dGhpcy5tYXhEdXJhdGlvbil7aWYoXCJpbmRlZmluaXRlXCI9PXRoaXMuYXR0cmlidXRlKFwicmVwZWF0Q291bnRcIikudmFsdWV8fFwiaW5kZWZpbml0ZVwiPT10aGlzLmF0dHJpYnV0ZShcInJlcGVhdER1clwiKS52YWx1ZSl0aGlzLmR1cmF0aW9uPTA7ZWxzZSBpZihcImZyZWV6ZVwiIT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIil8fHRoaXMuZnJvemVuKXtpZihcInJlbW92ZVwiPT10aGlzLmF0dHJpYnV0ZShcImZpbGxcIikudmFsdWVPckRlZmF1bHQoXCJyZW1vdmVcIikmJiF0aGlzLnJlbW92ZWQpcmV0dXJuIHRoaXMucmVtb3ZlZD0hMCx0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9dGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuP3RoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlOnRoaXMuaW5pdGlhbFZhbHVlLCEwfWVsc2UgdGhpcy5mcm96ZW49ITAsdGhpcy5wYXJlbnQuYW5pbWF0aW9uRnJvemVuPSEwLHRoaXMucGFyZW50LmFuaW1hdGlvbkZyb3plblZhbHVlPXRoaXMuZ2V0UHJvcGVydHkoKS52YWx1ZTtyZXR1cm4hMX10aGlzLmR1cmF0aW9uPXRoaXMuZHVyYXRpb24rdDt2YXIgZT0hMTtpZih0aGlzLmJlZ2luPHRoaXMuZHVyYXRpb24pe3ZhciBpPXRoaXMuY2FsY1ZhbHVlKCk7aWYodGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLmhhc1ZhbHVlKCkpaT10aGlzLmF0dHJpYnV0ZShcInR5cGVcIikudmFsdWUrXCIoXCIraStcIilcIjt0aGlzLmdldFByb3BlcnR5KCkudmFsdWU9aSxlPSEwfXJldHVybiBlfSx0aGlzLmZyb209dGhpcy5hdHRyaWJ1dGUoXCJmcm9tXCIpLHRoaXMudG89dGhpcy5hdHRyaWJ1dGUoXCJ0b1wiKSx0aGlzLnZhbHVlcz10aGlzLmF0dHJpYnV0ZShcInZhbHVlc1wiKSx0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpJiYodGhpcy52YWx1ZXMudmFsdWU9dGhpcy52YWx1ZXMudmFsdWUuc3BsaXQoXCI7XCIpKSx0aGlzLnByb2dyZXNzPWZ1bmN0aW9uKCl7dmFyIHQ9e3Byb2dyZXNzOih0aGlzLmR1cmF0aW9uLXRoaXMuYmVnaW4pLyh0aGlzLm1heER1cmF0aW9uLXRoaXMuYmVnaW4pfTtpZih0aGlzLnZhbHVlcy5oYXNWYWx1ZSgpKXt2YXIgZT10LnByb2dyZXNzKih0aGlzLnZhbHVlcy52YWx1ZS5sZW5ndGgtMSksaT1NYXRoLmZsb29yKGUpLG49TWF0aC5jZWlsKGUpO3QuZnJvbT1uZXcgRC5Qcm9wZXJ0eShcImZyb21cIixwYXJzZUZsb2F0KHRoaXMudmFsdWVzLnZhbHVlW2ldKSksdC50bz1uZXcgRC5Qcm9wZXJ0eShcInRvXCIscGFyc2VGbG9hdCh0aGlzLnZhbHVlcy52YWx1ZVtuXSkpLHQucHJvZ3Jlc3M9KGUtaSkvKG4taSl9ZWxzZSB0LmZyb209dGhpcy5mcm9tLHQudG89dGhpcy50bztyZXR1cm4gdH19LEQuRWxlbWVudC5BbmltYXRlQmFzZS5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQuYW5pbWF0ZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkFuaW1hdGVCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmNhbGNWYWx1ZT1mdW5jdGlvbigpe3ZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPXQuZnJvbS5udW1WYWx1ZSgpKyh0LnRvLm51bVZhbHVlKCktdC5mcm9tLm51bVZhbHVlKCkpKnQucHJvZ3Jlc3M7cmV0dXJuXCIlXCI9PT10aGlzLmluaXRpYWxVbml0cyYmKGUqPTEwMCksZSt0aGlzLmluaXRpYWxVbml0c319LEQuRWxlbWVudC5hbmltYXRlLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkFuaW1hdGVCYXNlLEQuRWxlbWVudC5hbmltYXRlQ29sb3I9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5BbmltYXRlQmFzZSx0aGlzLmJhc2UodCksdGhpcy5jYWxjVmFsdWU9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByb2dyZXNzKCksZT1uZXcgeSh0LmZyb20udmFsdWUpLGk9bmV3IHkodC50by52YWx1ZSk7aWYoZS5vayYmaS5vayl7dmFyIG49ZS5yKyhpLnItZS5yKSp0LnByb2dyZXNzLHM9ZS5nKyhpLmctZS5nKSp0LnByb2dyZXNzLGE9ZS5iKyhpLmItZS5iKSp0LnByb2dyZXNzO3JldHVyblwicmdiKFwiK3BhcnNlSW50KG4sMTApK1wiLFwiK3BhcnNlSW50KHMsMTApK1wiLFwiK3BhcnNlSW50KGEsMTApK1wiKVwifXJldHVybiB0aGlzLmF0dHJpYnV0ZShcImZyb21cIikudmFsdWV9fSxELkVsZW1lbnQuYW5pbWF0ZUNvbG9yLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkFuaW1hdGVCYXNlLEQuRWxlbWVudC5hbmltYXRlVHJhbnNmb3JtPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuQW5pbWF0ZUJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuY2FsY1ZhbHVlPWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMucHJvZ3Jlc3MoKSxlPUQuVG9OdW1iZXJBcnJheSh0LmZyb20udmFsdWUpLGk9RC5Ub051bWJlckFycmF5KHQudG8udmFsdWUpLG49XCJcIixzPTA7czxlLmxlbmd0aDtzKyspbis9ZVtzXSsoaVtzXS1lW3NdKSp0LnByb2dyZXNzK1wiIFwiO3JldHVybiBufX0sRC5FbGVtZW50LmFuaW1hdGVUcmFuc2Zvcm0ucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuYW5pbWF0ZSxELkVsZW1lbnQuZm9udD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmhvcml6QWR2WD10aGlzLmF0dHJpYnV0ZShcImhvcml6LWFkdi14XCIpLm51bVZhbHVlKCksdGhpcy5pc1JUTD0hMSx0aGlzLmlzQXJhYmljPSExLHRoaXMuZm9udEZhY2U9bnVsbCx0aGlzLm1pc3NpbmdHbHlwaD1udWxsLHRoaXMuZ2x5cGhzPVtdO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXt2YXIgaT10aGlzLmNoaWxkcmVuW2VdO1wiZm9udC1mYWNlXCI9PWkudHlwZT8odGhpcy5mb250RmFjZT1pKS5zdHlsZShcImZvbnQtZmFtaWx5XCIpLmhhc1ZhbHVlKCkmJihELkRlZmluaXRpb25zW2kuc3R5bGUoXCJmb250LWZhbWlseVwiKS52YWx1ZV09dGhpcyk6XCJtaXNzaW5nLWdseXBoXCI9PWkudHlwZT90aGlzLm1pc3NpbmdHbHlwaD1pOlwiZ2x5cGhcIj09aS50eXBlJiYoXCJcIiE9aS5hcmFiaWNGb3JtPyh0aGlzLmlzUlRMPSEwLHRoaXMuaXNBcmFiaWM9ITAsdm9pZCAwPT09dGhpcy5nbHlwaHNbaS51bmljb2RlXSYmKHRoaXMuZ2x5cGhzW2kudW5pY29kZV09W10pLHRoaXMuZ2x5cGhzW2kudW5pY29kZV1baS5hcmFiaWNGb3JtXT1pKTp0aGlzLmdseXBoc1tpLnVuaWNvZGVdPWkpfXRoaXMucmVuZGVyPWZ1bmN0aW9uKCl7fX0sRC5FbGVtZW50LmZvbnQucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuRWxlbWVudEJhc2UsRC5FbGVtZW50LmZvbnRmYWNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXNjZW50PXRoaXMuYXR0cmlidXRlKFwiYXNjZW50XCIpLnZhbHVlLHRoaXMuZGVzY2VudD10aGlzLmF0dHJpYnV0ZShcImRlc2NlbnRcIikudmFsdWUsdGhpcy51bml0c1BlckVtPXRoaXMuYXR0cmlidXRlKFwidW5pdHMtcGVyLWVtXCIpLm51bVZhbHVlKCl9LEQuRWxlbWVudC5mb250ZmFjZS5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQubWlzc2luZ2dseXBoPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQucGF0aCx0aGlzLmJhc2UodCksdGhpcy5ob3JpekFkdlg9MH0sRC5FbGVtZW50Lm1pc3NpbmdnbHlwaC5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5wYXRoLEQuRWxlbWVudC5nbHlwaD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LnBhdGgsdGhpcy5iYXNlKHQpLHRoaXMuaG9yaXpBZHZYPXRoaXMuYXR0cmlidXRlKFwiaG9yaXotYWR2LXhcIikubnVtVmFsdWUoKSx0aGlzLnVuaWNvZGU9dGhpcy5hdHRyaWJ1dGUoXCJ1bmljb2RlXCIpLnZhbHVlLHRoaXMuYXJhYmljRm9ybT10aGlzLmF0dHJpYnV0ZShcImFyYWJpYy1mb3JtXCIpLnZhbHVlfSxELkVsZW1lbnQuZ2x5cGgucHJvdG90eXBlPW5ldyBELkVsZW1lbnQucGF0aCxELkVsZW1lbnQudGV4dD1mdW5jdGlvbih0KXt0aGlzLmNhcHR1cmVUZXh0Tm9kZXM9ITAsdGhpcy5iYXNlPUQuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmJhc2VTZXRDb250ZXh0PXRoaXMuc2V0Q29udGV4dCx0aGlzLnNldENvbnRleHQ9ZnVuY3Rpb24odCl7dGhpcy5iYXNlU2V0Q29udGV4dCh0KTt2YXIgZT10aGlzLnN0eWxlKFwiZG9taW5hbnQtYmFzZWxpbmVcIikudG9UZXh0QmFzZWxpbmUoKTtudWxsPT1lJiYoZT10aGlzLnN0eWxlKFwiYWxpZ25tZW50LWJhc2VsaW5lXCIpLnRvVGV4dEJhc2VsaW5lKCkpLG51bGwhPWUmJih0LnRleHRCYXNlbGluZT1lKX0sdGhpcy5pbml0aWFsaXplQ29vcmRpbmF0ZXM9ZnVuY3Rpb24odCl7dGhpcy54PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksdGhpcy55PXRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIiksdGhpcy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYodGhpcy54Kz10aGlzLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSksdGhpcy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYodGhpcy55Kz10aGlzLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSksdGhpcy54Kz10aGlzLmdldEFuY2hvckRlbHRhKHQsdGhpcywwKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbih0KXt0aGlzLmluaXRpYWxpemVDb29yZGluYXRlcyh0KTtmb3IodmFyIGU9bnVsbCxpPTA7aTx0aGlzLmNoaWxkcmVuLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZ2V0Q2hpbGRCb3VuZGluZ0JveCh0LHRoaXMsdGhpcyxpKTtudWxsPT1lP2U9bjplLmFkZEJvdW5kaW5nQm94KG4pfXJldHVybiBlfSx0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe3RoaXMuaW5pdGlhbGl6ZUNvb3JkaW5hdGVzKHQpO2Zvcih2YXIgZT0wO2U8dGhpcy5jaGlsZHJlbi5sZW5ndGg7ZSsrKXRoaXMucmVuZGVyQ2hpbGQodCx0aGlzLHRoaXMsZSk7RC5Nb3VzZS5jaGVja0JvdW5kaW5nQm94KHRoaXMsdGhpcy5nZXRCb3VuZGluZ0JveCh0KSl9LHRoaXMuZ2V0QW5jaG9yRGVsdGE9ZnVuY3Rpb24odCxlLGkpe3ZhciBuPXRoaXMuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiKS52YWx1ZU9yRGVmYXVsdChcInN0YXJ0XCIpO2lmKFwic3RhcnRcIj09bilyZXR1cm4gMDtmb3IodmFyIHM9MCxhPWk7YTxlLmNoaWxkcmVuLmxlbmd0aDthKyspe3ZhciByPWUuY2hpbGRyZW5bYV07aWYoaTxhJiZyLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSlicmVhaztzKz1yLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpfXJldHVybi0xKihcImVuZFwiPT1uP3M6cy8yKX0sdGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzPWZ1bmN0aW9uKHQsZSxpLG4pe3ZhciBzPWkuY2hpbGRyZW5bbl07aWYoXCJmdW5jdGlvblwiIT10eXBlb2Ygcy5tZWFzdXJlVGV4dClyZXR1cm4gcztpZihzLmF0dHJpYnV0ZShcInhcIikuaGFzVmFsdWUoKSl7cy54PXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIikrZS5nZXRBbmNob3JEZWx0YSh0LGksbik7dmFyIGE9cy5hdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiKS52YWx1ZU9yRGVmYXVsdChcInN0YXJ0XCIpO2lmKFwic3RhcnRcIiE9PWEpe3ZhciByPXMubWVhc3VyZVRleHRSZWN1cnNpdmUodCk7cy54Kz0tMSooXCJlbmRcIj09YT9yOnIvMil9cy5hdHRyaWJ1dGUoXCJkeFwiKS5oYXNWYWx1ZSgpJiYocy54Kz1zLmF0dHJpYnV0ZShcImR4XCIpLnRvUGl4ZWxzKFwieFwiKSl9ZWxzZSBzLmF0dHJpYnV0ZShcImR4XCIpLmhhc1ZhbHVlKCkmJihlLngrPXMuYXR0cmlidXRlKFwiZHhcIikudG9QaXhlbHMoXCJ4XCIpKSxzLng9ZS54O3JldHVybiBlLng9cy54K3MubWVhc3VyZVRleHQodCkscy5hdHRyaWJ1dGUoXCJ5XCIpLmhhc1ZhbHVlKCk/KHMueT1zLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHMuYXR0cmlidXRlKFwiZHlcIikuaGFzVmFsdWUoKSYmKHMueSs9cy5hdHRyaWJ1dGUoXCJkeVwiKS50b1BpeGVscyhcInlcIikpKToocy5hdHRyaWJ1dGUoXCJkeVwiKS5oYXNWYWx1ZSgpJiYoZS55Kz1zLmF0dHJpYnV0ZShcImR5XCIpLnRvUGl4ZWxzKFwieVwiKSkscy55PWUueSksZS55PXMueSxzfSx0aGlzLmdldENoaWxkQm91bmRpbmdCb3g9ZnVuY3Rpb24odCxlLGksbil7dmFyIHM9dGhpcy5hZGp1c3RDaGlsZENvb3JkaW5hdGVzKHQsZSxpLG4pLGE9cy5nZXRCb3VuZGluZ0JveCh0KTtmb3Iobj0wO248cy5jaGlsZHJlbi5sZW5ndGg7bisrKXt2YXIgcj1lLmdldENoaWxkQm91bmRpbmdCb3godCxlLHMsbik7YS5hZGRCb3VuZGluZ0JveChyKX1yZXR1cm4gYX0sdGhpcy5yZW5kZXJDaGlsZD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcz10aGlzLmFkanVzdENoaWxkQ29vcmRpbmF0ZXModCxlLGksbik7cy5yZW5kZXIodCk7Zm9yKG49MDtuPHMuY2hpbGRyZW4ubGVuZ3RoO24rKyllLnJlbmRlckNoaWxkKHQsZSxzLG4pfX0sRC5FbGVtZW50LnRleHQucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxELkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5nZXRHbHlwaD1mdW5jdGlvbih0LGUsaSl7dmFyIG49ZVtpXSxzPW51bGw7aWYodC5pc0FyYWJpYyl7dmFyIGE9XCJpc29sYXRlZFwiOygwPT1pfHxcIiBcIj09ZVtpLTFdKSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cInRlcm1pbmFsXCIpLDA8aSYmXCIgXCIhPWVbaS0xXSYmaTxlLmxlbmd0aC0yJiZcIiBcIiE9ZVtpKzFdJiYoYT1cIm1lZGlhbFwiKSwwPGkmJlwiIFwiIT1lW2ktMV0mJihpPT1lLmxlbmd0aC0xfHxcIiBcIj09ZVtpKzFdKSYmKGE9XCJpbml0aWFsXCIpLHZvaWQgMCE9PXQuZ2x5cGhzW25dJiZudWxsPT0ocz10LmdseXBoc1tuXVthXSkmJlwiZ2x5cGhcIj09dC5nbHlwaHNbbl0udHlwZSYmKHM9dC5nbHlwaHNbbl0pfWVsc2Ugcz10LmdseXBoc1tuXTtyZXR1cm4gbnVsbD09cyYmKHM9dC5taXNzaW5nR2x5cGgpLHN9LHRoaXMucmVuZGVyQ2hpbGRyZW49ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LWZhbWlseVwiKS5nZXREZWZpbml0aW9uKCk7aWYobnVsbD09ZSlcInN0cm9rZVwiPT10LnBhaW50T3JkZXI/KFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChELmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSxcIlwiIT10LmZpbGxTdHlsZSYmdC5maWxsVGV4dChELmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk6KFwiXCIhPXQuZmlsbFN0eWxlJiZ0LmZpbGxUZXh0KEQuY29tcHJlc3NTcGFjZXModGhpcy5nZXRUZXh0KCkpLHRoaXMueCx0aGlzLnkpLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChELmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKSx0aGlzLngsdGhpcy55KSk7ZWxzZXt2YXIgaT10aGlzLnBhcmVudC5zdHlsZShcImZvbnQtc2l6ZVwiKS5udW1WYWx1ZU9yRGVmYXVsdChELkZvbnQuUGFyc2UoRC5jdHguZm9udCkuZm9udFNpemUpLG49dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXN0eWxlXCIpLnZhbHVlT3JEZWZhdWx0KEQuRm9udC5QYXJzZShELmN0eC5mb250KS5mb250U3R5bGUpLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUQuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKXt2YXIgbz10aGlzLmdldEdseXBoKGUscyxyKSxoPWkvZS5mb250RmFjZS51bml0c1BlckVtO3QudHJhbnNsYXRlKHRoaXMueCx0aGlzLnkpLHQuc2NhbGUoaCwtaCk7dmFyIGw9dC5saW5lV2lkdGg7dC5saW5lV2lkdGg9dC5saW5lV2lkdGgqZS5mb250RmFjZS51bml0c1BlckVtL2ksXCJpdGFsaWNcIj09biYmdC50cmFuc2Zvcm0oMSwwLC40LDEsMCwwKSxvLnJlbmRlcih0KSxcIml0YWxpY1wiPT1uJiZ0LnRyYW5zZm9ybSgxLDAsLS40LDEsMCwwKSx0LmxpbmVXaWR0aD1sLHQuc2NhbGUoMS9oLC0xL2gpLHQudHJhbnNsYXRlKC10aGlzLngsLXRoaXMueSksdGhpcy54Kz1pKihvLmhvcml6QWR2WHx8ZS5ob3JpekFkdlgpL2UuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KHRoaXMueCs9YVtyXSl9fX0sdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7fSx0aGlzLm1lYXN1cmVUZXh0UmVjdXJzaXZlPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT10aGlzLm1lYXN1cmVUZXh0KHQpLGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllKz10aGlzLmNoaWxkcmVuW2ldLm1lYXN1cmVUZXh0UmVjdXJzaXZlKHQpO3JldHVybiBlfSx0aGlzLm1lYXN1cmVUZXh0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKG51bGwhPWUpe3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1zaXplXCIpLm51bVZhbHVlT3JEZWZhdWx0KEQuRm9udC5QYXJzZShELmN0eC5mb250KS5mb250U2l6ZSksbj0wLHM9dGhpcy5nZXRUZXh0KCk7ZS5pc1JUTCYmKHM9cy5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKSk7Zm9yKHZhciBhPUQuVG9OdW1iZXJBcnJheSh0aGlzLnBhcmVudC5hdHRyaWJ1dGUoXCJkeFwiKS52YWx1ZSkscj0wO3I8cy5sZW5ndGg7cisrKXtuKz0odGhpcy5nZXRHbHlwaChlLHMscikuaG9yaXpBZHZYfHxlLmhvcml6QWR2WCkqaS9lLmZvbnRGYWNlLnVuaXRzUGVyRW0sdm9pZCAwPT09YVtyXXx8aXNOYU4oYVtyXSl8fChuKz1hW3JdKX1yZXR1cm4gbn12YXIgbz1ELmNvbXByZXNzU3BhY2VzKHRoaXMuZ2V0VGV4dCgpKTtpZighdC5tZWFzdXJlVGV4dClyZXR1cm4gMTAqby5sZW5ndGg7dC5zYXZlKCksdGhpcy5zZXRDb250ZXh0KHQsITApO3ZhciBoPXQubWVhc3VyZVRleHQobykud2lkdGg7cmV0dXJuIHQucmVzdG9yZSgpLGh9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoRC5Gb250LlBhcnNlKEQuY3R4LmZvbnQpLmZvbnRTaXplKTtyZXR1cm4gbmV3IEQuQm91bmRpbmdCb3godGhpcy54LHRoaXMueS1lLHRoaXMueCt0aGlzLm1lYXN1cmVUZXh0KHQpLHRoaXMueSl9fSxELkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsRC5FbGVtZW50LnRzcGFuPWZ1bmN0aW9uKHQpe3RoaXMuY2FwdHVyZVRleHROb2Rlcz0hMCx0aGlzLmJhc2U9RC5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy50ZXh0PUQuY29tcHJlc3NTcGFjZXModC52YWx1ZXx8dC50ZXh0fHx0LnRleHRDb250ZW50fHxcIlwiKSx0aGlzLmdldFRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gMDx0aGlzLmNoaWxkcmVuLmxlbmd0aD9cIlwiOnRoaXMudGV4dH19LEQuRWxlbWVudC50c3Bhbi5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsRC5FbGVtZW50LnRyZWY9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5UZXh0RWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuZ2V0SHJlZkF0dHJpYnV0ZSgpLmdldERlZmluaXRpb24oKTtpZihudWxsIT10KXJldHVybiB0LmNoaWxkcmVuWzBdLmdldFRleHQoKX19LEQuRWxlbWVudC50cmVmLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxELkVsZW1lbnQuYT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5oYXNUZXh0PTA8dC5jaGlsZE5vZGVzLmxlbmd0aDtmb3IodmFyIGU9MDtlPHQuY2hpbGROb2Rlcy5sZW5ndGg7ZSsrKTMhPXQuY2hpbGROb2Rlc1tlXS5ub2RlVHlwZSYmKHRoaXMuaGFzVGV4dD0hMSk7dGhpcy50ZXh0PXRoaXMuaGFzVGV4dD90LmNoaWxkTm9kZXNbMF0udmFsdWV8fHQuY2hpbGROb2Rlc1swXS5kYXRhOlwiXCIsdGhpcy5nZXRUZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudGV4dH0sdGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW49dGhpcy5yZW5kZXJDaGlsZHJlbix0aGlzLnJlbmRlckNoaWxkcmVuPWZ1bmN0aW9uKHQpe2lmKHRoaXMuaGFzVGV4dCl7dGhpcy5iYXNlUmVuZGVyQ2hpbGRyZW4odCk7dmFyIGU9bmV3IEQuUHJvcGVydHkoXCJmb250U2l6ZVwiLEQuRm9udC5QYXJzZShELmN0eC5mb250KS5mb250U2l6ZSk7RC5Nb3VzZS5jaGVja0JvdW5kaW5nQm94KHRoaXMsbmV3IEQuQm91bmRpbmdCb3godGhpcy54LHRoaXMueS1lLnRvUGl4ZWxzKFwieVwiKSx0aGlzLngrdGhpcy5tZWFzdXJlVGV4dCh0KSx0aGlzLnkpKX1lbHNlIGlmKDA8dGhpcy5jaGlsZHJlbi5sZW5ndGgpe3ZhciBpPW5ldyBELkVsZW1lbnQuZztpLmNoaWxkcmVuPXRoaXMuY2hpbGRyZW4saS5wYXJlbnQ9dGhpcyxpLnJlbmRlcih0KX19LHRoaXMub25jbGljaz1mdW5jdGlvbigpe2wub3Blbih0aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS52YWx1ZSl9LHRoaXMub25tb3VzZW1vdmU9ZnVuY3Rpb24oKXtELmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yPVwicG9pbnRlclwifX0sRC5FbGVtZW50LmEucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuVGV4dEVsZW1lbnRCYXNlLEQuRWxlbWVudC50ZXh0UGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LlRleHRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIGU9dGhpcy5nZXRIcmVmQXR0cmlidXRlKCkuZ2V0RGVmaW5pdGlvbigpO3RoaXMudGV4dD1ELmNvbXByZXNzU3BhY2VzKHQudmFsdWV8fHQudGV4dHx8dC50ZXh0Q29udGVudHx8XCJcIiksdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt0aGlzLnNldFRleHREYXRhKHQpLHQuc2F2ZSgpO3ZhciBlPXRoaXMucGFyZW50LnN0eWxlKFwidGV4dC1kZWNvcmF0aW9uXCIpLnZhbHVlLGk9dGhpcy5mb250U2l6ZSgpLG49dGhpcy5nbHlwaEluZm8scz10LmZpbGxTdHlsZTtcInVuZGVybGluZVwiPT09ZSYmdC5iZWdpblBhdGgoKTtmb3IodmFyIGE9MDthPG4ubGVuZ3RoO2ErKyl7dmFyIHI9blthXS5wMCxvPW5bYV0ucDEsaD1uW2FdLnRleHQ7dC5zYXZlKCksdC50cmFuc2xhdGUoci54LHIueSksdC5yb3RhdGUoblthXS5yb3RhdGlvbiksXCJcIiE9dC5maWxsU3R5bGUmJnQuZmlsbFRleHQoRC5jb21wcmVzc1NwYWNlcyhoKSwwLDApLFwiXCIhPXQuc3Ryb2tlU3R5bGUmJnQuc3Ryb2tlVGV4dChELmNvbXByZXNzU3BhY2VzKGgpLDAsMCksdC5yZXN0b3JlKCksXCJ1bmRlcmxpbmVcIj09PWUmJigwPT09YSYmdC5tb3ZlVG8oci54LHIueStpLzgpLHQubGluZVRvKG8ueCxvLnkraS81KSl9XCJ1bmRlcmxpbmVcIj09PWUmJih0LmxpbmVXaWR0aD1pLzIwLHQuc3Ryb2tlU3R5bGU9cyx0LnN0cm9rZSgpLHQuY2xvc2VQYXRoKCkpLHQucmVzdG9yZSgpfSx0aGlzLnBhdGg9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5kYXRhQXJyYXk7bnVsbCE9dCYmdC5iZWdpblBhdGgoKTtmb3IodmFyIGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIG49ZVtpXS5jb21tYW5kLHM9ZVtpXS5wb2ludHM7c3dpdGNoKG4pe2Nhc2VcIkxcIjpudWxsIT10JiZ0LmxpbmVUbyhzWzBdLHNbMV0pO2JyZWFrO2Nhc2VcIk1cIjpudWxsIT10JiZ0Lm1vdmVUbyhzWzBdLHNbMV0pO2JyZWFrO2Nhc2VcIkNcIjpudWxsIT10JiZ0LmJlemllckN1cnZlVG8oc1swXSxzWzFdLHNbMl0sc1szXSxzWzRdLHNbNV0pO2JyZWFrO2Nhc2VcIlFcIjpudWxsIT10JiZ0LnF1YWRyYXRpY0N1cnZlVG8oc1swXSxzWzFdLHNbMl0sc1szXSk7YnJlYWs7Y2FzZVwiQVwiOnZhciBhPXNbMF0scj1zWzFdLG89c1syXSxoPXNbM10sbD1zWzRdLHU9c1s1XSxjPXNbNl0sZj1zWzddLHA9aDxvP286aCxkPWg8bz8xOm8vaCxtPWg8bz9oL286MTtudWxsIT10JiYodC50cmFuc2xhdGUoYSxyKSx0LnJvdGF0ZShjKSx0LnNjYWxlKGQsbSksdC5hcmMoMCwwLHAsbCxsK3UsMS1mKSx0LnNjYWxlKDEvZCwxL20pLHQucm90YXRlKC1jKSx0LnRyYW5zbGF0ZSgtYSwtcikpO2JyZWFrO2Nhc2VcInpcIjpudWxsIT10JiZ0LmNsb3NlUGF0aCgpfX19LHRoaXMuZ2V0VGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnRleHR9LHRoaXMuZm9udFNpemU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQuc3R5bGUoXCJmb250LXNpemVcIikubnVtVmFsdWVPckRlZmF1bHQoRC5Gb250LlBhcnNlKEQuY3R4LmZvbnQpLmZvbnRTaXplKX0sdGhpcy5tZWFzdXJlVGV4dD1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMucGFyZW50LnN0eWxlKFwiZm9udC1mYW1pbHlcIikuZ2V0RGVmaW5pdGlvbigpO2lmKGU9ZXx8dGhpcy5nZXRUZXh0KCksbnVsbCE9aSl7dmFyIG49dGhpcy5mb250U2l6ZSgpLHM9MDtpLmlzUlRMJiYoZT1lLnNwbGl0KFwiXCIpLnJldmVyc2UoKS5qb2luKFwiXCIpKTtmb3IodmFyIGE9RC5Ub051bWJlckFycmF5KHRoaXMucGFyZW50LmF0dHJpYnV0ZShcImR4XCIpLnZhbHVlKSxyPTA7cjxlLmxlbmd0aDtyKyspe3MrPSh0aGlzLmdldEdseXBoKGksZSxyKS5ob3JpekFkdlh8fGkuaG9yaXpBZHZYKSpuL2kuZm9udEZhY2UudW5pdHNQZXJFbSx2b2lkIDA9PT1hW3JdfHxpc05hTihhW3JdKXx8KHMrPWFbcl0pfXJldHVybiBzfXZhciBvPUQuY29tcHJlc3NTcGFjZXMoZSk7aWYoIXQubWVhc3VyZVRleHQpcmV0dXJuIDEwKm8ubGVuZ3RoO3Quc2F2ZSgpLHRoaXMuc2V0Q29udGV4dCh0KTt2YXIgaD10Lm1lYXN1cmVUZXh0KG8pLndpZHRoO3JldHVybiB0LnJlc3RvcmUoKSxofSx0aGlzLnNldFRleHREYXRhPWZ1bmN0aW9uKHIpe2lmKCF0aGlzLmhhc093blByb3BlcnR5KFwiZ2x5cGhJbmZvXCIpKXt2YXIgbz10aGlzLHQ9dGhpcy5nZXRUZXh0KCkuc3BsaXQoXCJcIiksaD10aGlzLmdldFRleHQoKS5zcGxpdChcIiBcIikubGVuZ3RoLTEsZT1ELlRvTnVtYmVyQXJyYXkodGhpcy5wYXJlbnQuYXR0cmlidXRlKFwiZHhcIikudmFsdWVPckRlZmF1bHQoXCIwXCIpKSxpPTAsbD10aGlzLnBhcmVudC5zdHlsZShcInRleHQtYW5jaG9yXCIpLnZhbHVlT3JEZWZhdWx0KFwic3RhcnRcIiksbj10aGlzLnN0eWxlKFwibGV0dGVyLXNwYWNpbmdcIikscz10aGlzLnBhcmVudC5zdHlsZShcImxldHRlci1zcGFjaW5nXCIpO24uaGFzVmFsdWUoKSYmXCJpbmhlcml0XCIhPT1uLmdldFZhbHVlKCk/bi5oYXNWYWx1ZSgpJiZcImluaXRpYWxcIiE9PW4uZ2V0VmFsdWUoKSYmXCJ1bnNldFwiIT09bi5nZXRWYWx1ZSgpJiYoaT1uLnRvUGl4ZWxzKCkpOmk9cy50b1BpeGVscygpLHRoaXMubGV0dGVyU3BhY2luZ0NhY2hlPVtdO2Zvcih2YXIgYT0wO2E8dGhpcy5nZXRUZXh0KCkubGVuZ3RoO2ErKyl0aGlzLmxldHRlclNwYWNpbmdDYWNoZS5wdXNoKHZvaWQgMCE9PWVbYV0/ZVthXTppKTt2YXIgdT10aGlzLmxldHRlclNwYWNpbmdDYWNoZS5yZWR1Y2UoZnVuY3Rpb24odCxlKXtyZXR1cm4gdCtlfHwwfSwwKTt0aGlzLnRleHRXaWR0aD10aGlzLm1lYXN1cmVUZXh0KHIpLHRoaXMudGV4dEhlaWdodD10aGlzLmZvbnRTaXplKCk7dmFyIGM9TWF0aC5tYXgodGhpcy50ZXh0V2lkdGgrdSwwKTt0aGlzLmdseXBoSW5mbz1bXTt2YXIgZj10aGlzLmdldFBhdGhMZW5ndGgoKSxwPXRoaXMuc3R5bGUoXCJzdGFydE9mZnNldFwiKS5udW1WYWx1ZU9yRGVmYXVsdCgwKSpmLGQ9MDtcIm1pZGRsZVwiIT09bCYmXCJjZW50ZXJcIiE9PWx8fChkPS1jLzIpLFwiZW5kXCIhPT1sJiZcInJpZ2h0XCIhPT1sfHwoZD0tYyksZCs9cDt2YXIgbT1mdW5jdGlvbih0LGUpe3ZhciBpLG49by5tZWFzdXJlVGV4dChyLHQpO1wiIFwiPT09dCYmXCJqdXN0aWZ5XCI9PT1sJiZjPGYmJihuKz0oZi1jKS9oKSwtMTxlJiYoZCs9KGk9KGk9ZSl8fDAsby5sZXR0ZXJTcGFjaW5nQ2FjaGVbaV18fDApKTt2YXIgcz1vLnRleHRIZWlnaHQvMjAsYT17cDA6by5nZXRFcXVpZGlzdGFudFBvaW50T25QYXRoKGQscykscDE6by5nZXRFcXVpZGlzdGFudFBvaW50T25QYXRoKGQrbixzKX07cmV0dXJuIGQrPW4sYX07Zm9yKGE9MDthPHQubGVuZ3RoO2ErKyl7dmFyIHk9bSh0W2FdLGEpO2lmKHZvaWQgMCE9PXkucDAmJnZvaWQgMCE9PXkucDEpe3ZhciB2PW8uZ2V0TGluZUxlbmd0aCh5LnAwLngseS5wMC55LHkucDEueCx5LnAxLnkpLGc9by5nZXRQb2ludE9uTGluZSgwK3YvMix5LnAwLngseS5wMC55LHkucDEueCx5LnAxLnkpLHg9TWF0aC5hdGFuMih5LnAxLnkteS5wMC55LHkucDEueC15LnAwLngpO3RoaXMuZ2x5cGhJbmZvLnB1c2goe3RyYW5zcG9zZVg6Zy54LHRyYW5zcG9zZVk6Zy55LHRleHQ6dFthXSxyb3RhdGlvbjp4LHAwOnkucDAscDE6eS5wMX0pfX19fSx0aGlzLnBhcnNlUGF0aERhdGE9ZnVuY3Rpb24odCl7aWYodGhpcy5wYXRoTGVuZ3RoPXZvaWQgMCwhdClyZXR1cm5bXTt2YXIgZT1bXSxpPXQuUGF0aFBhcnNlcjtmb3IoaS5yZXNldCgpOyFpLmlzRW5kKCk7KXt2YXIgbj1bXSxzPW51bGwsYT1pLmN1cnJlbnQ/aS5jdXJyZW50Lng6MCxyPWkuY3VycmVudD9pLmN1cnJlbnQueTowO2kubmV4dENvbW1hbmQoKTt2YXIgbz1pLmNvbW1hbmQudG9VcHBlckNhc2UoKTtzd2l0Y2goaS5jb21tYW5kKXtjYXNlXCJNXCI6Y2FzZVwibVwiOnZhciBoPWkuZ2V0QXNDdXJyZW50UG9pbnQoKTtmb3Iobi5wdXNoKGgueCxoLnkpLGkuc3RhcnQ9aS5jdXJyZW50OyFpLmlzQ29tbWFuZE9yRW5kKCk7KXtoPWkuZ2V0QXNDdXJyZW50UG9pbnQoKTtuLnB1c2goaC54LGgueSkscz1cIkxcIn1icmVhaztjYXNlXCJMXCI6Y2FzZVwibFwiOmZvcig7IWkuaXNDb21tYW5kT3JFbmQoKTspe2g9aS5nZXRBc0N1cnJlbnRQb2ludCgpO24ucHVzaChoLngsaC55KX1zPVwiTFwiO2JyZWFrO2Nhc2VcIkhcIjpjYXNlXCJoXCI6Zm9yKDshaS5pc0NvbW1hbmRPckVuZCgpOyl7dmFyIGw9bmV3IEQuUG9pbnQoKGkuaXNSZWxhdGl2ZUNvbW1hbmQoKT9pLmN1cnJlbnQueDowKStpLmdldFNjYWxhcigpLGkuY3VycmVudC55KTtuLnB1c2gobC54LGwueSksaS5jdXJyZW50PWx9cz1cIkxcIjticmVhaztjYXNlXCJWXCI6Y2FzZVwidlwiOmZvcig7IWkuaXNDb21tYW5kT3JFbmQoKTspe2w9bmV3IEQuUG9pbnQoaS5jdXJyZW50LngsKGkuaXNSZWxhdGl2ZUNvbW1hbmQoKT9pLmN1cnJlbnQueTowKStpLmdldFNjYWxhcigpKTtuLnB1c2gobC54LGwueSksaS5jdXJyZW50PWx9cz1cIkxcIjticmVhaztjYXNlXCJDXCI6Y2FzZVwiY1wiOmZvcig7IWkuaXNDb21tYW5kT3JFbmQoKTspe3ZhciB1PWkuZ2V0UG9pbnQoKSxjPWkuZ2V0QXNDb250cm9sUG9pbnQoKSxmPWkuZ2V0QXNDdXJyZW50UG9pbnQoKTtuLnB1c2godS54LHUueSxjLngsYy55LGYueCxmLnkpfWJyZWFrO2Nhc2VcIlNcIjpjYXNlXCJzXCI6Zm9yKDshaS5pc0NvbW1hbmRPckVuZCgpOyl7dT1pLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpLGM9aS5nZXRBc0NvbnRyb2xQb2ludCgpLGY9aS5nZXRBc0N1cnJlbnRQb2ludCgpO24ucHVzaCh1LngsdS55LGMueCxjLnksZi54LGYueSl9cz1cIkNcIjticmVhaztjYXNlXCJRXCI6Y2FzZVwicVwiOmZvcig7IWkuaXNDb21tYW5kT3JFbmQoKTspe2M9aS5nZXRBc0NvbnRyb2xQb2ludCgpLGY9aS5nZXRBc0N1cnJlbnRQb2ludCgpO24ucHVzaChjLngsYy55LGYueCxmLnkpfWJyZWFrO2Nhc2VcIlRcIjpjYXNlXCJ0XCI6Zm9yKDshaS5pc0NvbW1hbmRPckVuZCgpOyl7Yz1pLmdldFJlZmxlY3RlZENvbnRyb2xQb2ludCgpO2kuY29udHJvbD1jO2Y9aS5nZXRBc0N1cnJlbnRQb2ludCgpO24ucHVzaChjLngsYy55LGYueCxmLnkpfXM9XCJRXCI7YnJlYWs7Y2FzZVwiQVwiOmNhc2VcImFcIjpmb3IoOyFpLmlzQ29tbWFuZE9yRW5kKCk7KXt2YXIgcD1pLmN1cnJlbnQsZD1pLmdldFNjYWxhcigpLG09aS5nZXRTY2FsYXIoKSx5PWkuZ2V0U2NhbGFyKCkqKE1hdGguUEkvMTgwKSx2PWkuZ2V0U2NhbGFyKCksZz1pLmdldFNjYWxhcigpLHg9KGY9aS5nZXRBc0N1cnJlbnRQb2ludCgpLG5ldyBELlBvaW50KE1hdGguY29zKHkpKihwLngtZi54KS8yK01hdGguc2luKHkpKihwLnktZi55KS8yLC1NYXRoLnNpbih5KSoocC54LWYueCkvMitNYXRoLmNvcyh5KSoocC55LWYueSkvMikpLGI9TWF0aC5wb3coeC54LDIpL01hdGgucG93KGQsMikrTWF0aC5wb3coeC55LDIpL01hdGgucG93KG0sMik7MTxiJiYoZCo9TWF0aC5zcXJ0KGIpLG0qPU1hdGguc3FydChiKSk7dmFyIFA9KHY9PWc/LTE6MSkqTWF0aC5zcXJ0KChNYXRoLnBvdyhkLDIpKk1hdGgucG93KG0sMiktTWF0aC5wb3coZCwyKSpNYXRoLnBvdyh4LnksMiktTWF0aC5wb3cobSwyKSpNYXRoLnBvdyh4LngsMikpLyhNYXRoLnBvdyhkLDIpKk1hdGgucG93KHgueSwyKStNYXRoLnBvdyhtLDIpKk1hdGgucG93KHgueCwyKSkpO2lzTmFOKFApJiYoUD0wKTt2YXIgRT1uZXcgRC5Qb2ludChQKmQqeC55L20sUCotbSp4LngvZCksdz1uZXcgRC5Qb2ludCgocC54K2YueCkvMitNYXRoLmNvcyh5KSpFLngtTWF0aC5zaW4oeSkqRS55LChwLnkrZi55KS8yK01hdGguc2luKHkpKkUueCtNYXRoLmNvcyh5KSpFLnkpLEM9ZnVuY3Rpb24odCl7cmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh0WzBdLDIpK01hdGgucG93KHRbMV0sMikpfSxCPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHRbMF0qZVswXSt0WzFdKmVbMV0pLyhDKHQpKkMoZSkpfSxNPWZ1bmN0aW9uKHQsZSl7cmV0dXJuKHRbMF0qZVsxXTx0WzFdKmVbMF0/LTE6MSkqTWF0aC5hY29zKEIodCxlKSl9LFQ9TShbMSwwXSxbKHgueC1FLngpL2QsKHgueS1FLnkpL21dKSxTPVsoeC54LUUueCkvZCwoeC55LUUueSkvbV0sVj1bKC14LngtRS54KS9kLCgteC55LUUueSkvbV0saz1NKFMsVik7QihTLFYpPD0tMSYmKGs9TWF0aC5QSSksMTw9QihTLFYpJiYoaz0wKSwwPT09ZyYmMDxrJiYoay09MipNYXRoLlBJKSwxPT09ZyYmazwwJiYoays9MipNYXRoLlBJKSxuPVt3Lngsdy55LGQsbSxULGsseSxnXX1icmVhaztjYXNlXCJaXCI6Y2FzZVwielwiOmkuY3VycmVudD1pLnN0YXJ0fVwiWlwiIT09bz9lLnB1c2goe2NvbW1hbmQ6c3x8byxwb2ludHM6bixzdGFydDp7eDphLHk6cn0scGF0aExlbmd0aDp0aGlzLmNhbGNMZW5ndGgoYSxyLHN8fG8sbil9KTplLnB1c2goe2NvbW1hbmQ6XCJ6XCIscG9pbnRzOltdLHN0YXJ0OnZvaWQgMCxwYXRoTGVuZ3RoOjB9KX1yZXR1cm4gZX0sdGhpcy5nZXRQYXRoTGVuZ3RoPWZ1bmN0aW9uKCl7aWYodm9pZCAwPT09dGhpcy5wYXRoTGVuZ3RofHxudWxsPT09dGhpcy5wYXRoTGVuZ3RofHxpc05hTih0aGlzLnBhdGhMZW5ndGgpKWZvcih2YXIgdD10aGlzLnBhdGhMZW5ndGg9MDt0PHRoaXMuZGF0YUFycmF5Lmxlbmd0aDt0KyspMDx0aGlzLmRhdGFBcnJheVt0XS5wYXRoTGVuZ3RoJiYodGhpcy5wYXRoTGVuZ3RoKz10aGlzLmRhdGFBcnJheVt0XS5wYXRoTGVuZ3RoKTtyZXR1cm4gdGhpcy5wYXRoTGVuZ3RofSx0aGlzLmdldFBvaW50T25QYXRoPWZ1bmN0aW9uKHQpe3ZhciBlPTAsaT10aGlzLmdldFBhdGhMZW5ndGgoKSxuPXZvaWQgMDtpZighKHQ8LTVlLTV8fGk8dC01ZS01KSlmb3IodmFyIHM9MDtzPHRoaXMuZGF0YUFycmF5Lmxlbmd0aDtzKyspe3ZhciBhPXRoaXMuZGF0YUFycmF5W3NdO2lmKCFhfHwhKGEucGF0aExlbmd0aDw1ZS01fHxlK2EucGF0aExlbmd0aCs1ZS01PHQpKXt2YXIgcj10LWUsbz12b2lkIDA7c3dpdGNoKGEuY29tbWFuZCl7Y2FzZVwiTFwiOm49dGhpcy5nZXRQb2ludE9uTGluZShyLGEuc3RhcnQueCxhLnN0YXJ0LnksYS5wb2ludHNbMF0sYS5wb2ludHNbMV0sYS5zdGFydC54LGEuc3RhcnQueSk7YnJlYWs7Y2FzZVwiQVwiOnZhciBoPWEucG9pbnRzWzRdLGw9YS5wb2ludHNbNV0sdT1hLnBvaW50c1s0XStsO2lmKG89aCtyL2EucGF0aExlbmd0aCpsLGw8MCYmbzx1fHwwPD1sJiZ1PG8pYnJlYWs7bj10aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjKGEucG9pbnRzWzBdLGEucG9pbnRzWzFdLGEucG9pbnRzWzJdLGEucG9pbnRzWzNdLG8sYS5wb2ludHNbNl0pO2JyZWFrO2Nhc2VcIkNcIjoxPChvPXIvYS5wYXRoTGVuZ3RoKSYmKG89MSksbj10aGlzLmdldFBvaW50T25DdWJpY0JlemllcihvLGEuc3RhcnQueCxhLnN0YXJ0LnksYS5wb2ludHNbMF0sYS5wb2ludHNbMV0sYS5wb2ludHNbMl0sYS5wb2ludHNbM10sYS5wb2ludHNbNF0sYS5wb2ludHNbNV0pO2JyZWFrO2Nhc2VcIlFcIjoxPChvPXIvYS5wYXRoTGVuZ3RoKSYmKG89MSksbj10aGlzLmdldFBvaW50T25RdWFkcmF0aWNCZXppZXIobyxhLnN0YXJ0LngsYS5zdGFydC55LGEucG9pbnRzWzBdLGEucG9pbnRzWzFdLGEucG9pbnRzWzJdLGEucG9pbnRzWzNdKX1pZih2b2lkIDAhPT1uJiZuIT09e30pcmV0dXJuIG47YnJlYWt9ZSs9YS5wYXRoTGVuZ3RofX0sdGhpcy5idWlsZEVxdWlkaXN0YW50Q2FjaGU9ZnVuY3Rpb24odCxlKXt2YXIgaT10aGlzLmdldFBhdGhMZW5ndGgoKTtpZihlPWV8fC4yNSx0PXR8fGkvMTAwLHRoaXMuZXF1aWRpc3RhbnRDYWNoZT10aGlzLmVxdWlkaXN0YW50Q2FjaGV8fHt9LCF0aGlzLmVxdWlkaXN0YW50Q2FjaGUuaGFzT3duUHJvcGVydHkoXCJwb2ludHNcIil8fHRoaXMuZXF1aWRpc3RhbnRDYWNoZS5zdGVwIT10fHx0aGlzLmVxdWlkaXN0YW50Q2FjaGUucHJlY2lzaW9uIT1lKXt0aGlzLmVxdWlkaXN0YW50Q2FjaGU9e3N0ZXA6dCxwcmVjaXNpb246ZSxwb2ludHM6W119O2Zvcih2YXIgbj0wLHM9MDtzPD1pO3MrPWUpe3ZhciBhPXRoaXMuZ2V0UG9pbnRPblBhdGgocykscj10aGlzLmdldFBvaW50T25QYXRoKHMrZSk7dm9pZCAwIT09YSYmdm9pZCAwIT09ciYmKHQ8PShuKz10aGlzLmdldExpbmVMZW5ndGgoYS54LGEueSxyLngsci55KSkmJih0aGlzLmVxdWlkaXN0YW50Q2FjaGUucG9pbnRzLnB1c2goe3g6YS54LHk6YS55LGRpc3RhbmNlOnN9KSxuLT10KSl9fX0sdGhpcy5nZXRFcXVpZGlzdGFudFBvaW50T25QYXRoPWZ1bmN0aW9uKHQsZSxpKXtpZih0aGlzLmJ1aWxkRXF1aWRpc3RhbnRDYWNoZShlLGkpLCEodDwwfHw1ZS01PHQtdGhpcy5nZXRQYXRoTGVuZ3RoKCkpKXt2YXIgbj1NYXRoLnJvdW5kKHQvdGhpcy5nZXRQYXRoTGVuZ3RoKCkqKHRoaXMuZXF1aWRpc3RhbnRDYWNoZS5wb2ludHMubGVuZ3RoLTEpKTtyZXR1cm4gdGhpcy5lcXVpZGlzdGFudENhY2hlLnBvaW50c1tuXXx8dm9pZCAwfX0sdGhpcy5nZXRMaW5lTGVuZ3RoPWZ1bmN0aW9uKHQsZSxpLG4pe3JldHVybiBNYXRoLnNxcnQoKGktdCkqKGktdCkrKG4tZSkqKG4tZSkpfSx0aGlzLmdldFBvaW50T25MaW5lPWZ1bmN0aW9uKHQsZSxpLG4scyxhLHIpe3ZvaWQgMD09PWEmJihhPWUpLHZvaWQgMD09PXImJihyPWkpO3ZhciBvPShzLWkpLyhuLWUrMWUtOCksaD1NYXRoLnNxcnQodCp0LygxK28qbykpO248ZSYmKGgqPS0xKTt2YXIgbCx1PW8qaDtpZihuPT09ZSlsPXt4OmEseTpyK3V9O2Vsc2UgaWYoKHItaSkvKGEtZSsxZS04KT09PW8pbD17eDphK2gseTpyK3V9O2Vsc2V7dmFyIGMsZixwPXRoaXMuZ2V0TGluZUxlbmd0aChlLGksbixzKTtpZihwPDFlLTgpcmV0dXJuO3ZhciBkPShhLWUpKihuLWUpKyhyLWkpKihzLWkpO2M9ZSsoZC89cCpwKSoobi1lKSxmPWkrZCoocy1pKTt2YXIgbT10aGlzLmdldExpbmVMZW5ndGgoYSxyLGMsZikseT1NYXRoLnNxcnQodCp0LW0qbSk7aD1NYXRoLnNxcnQoeSp5LygxK28qbykpLG48ZSYmKGgqPS0xKSxsPXt4OmMraCx5OmYrKHU9bypoKX19cmV0dXJuIGx9LHRoaXMuZ2V0UG9pbnRPbkN1YmljQmV6aWVyPWZ1bmN0aW9uKHQsZSxpLG4scyxhLHIsbyxoKXtmdW5jdGlvbiBsKHQpe3JldHVybiB0KnQqdH1mdW5jdGlvbiB1KHQpe3JldHVybiAzKnQqdCooMS10KX1mdW5jdGlvbiBjKHQpe3JldHVybiAzKnQqKDEtdCkqKDEtdCl9ZnVuY3Rpb24gZih0KXtyZXR1cm4oMS10KSooMS10KSooMS10KX1yZXR1cm57eDpvKmwodCkrYSp1KHQpK24qYyh0KStlKmYodCkseTpoKmwodCkrcip1KHQpK3MqYyh0KStpKmYodCl9fSx0aGlzLmdldFBvaW50T25RdWFkcmF0aWNCZXppZXI9ZnVuY3Rpb24odCxlLGksbixzLGEscil7ZnVuY3Rpb24gbyh0KXtyZXR1cm4gdCp0fWZ1bmN0aW9uIGgodCl7cmV0dXJuIDIqdCooMS10KX1mdW5jdGlvbiBsKHQpe3JldHVybigxLXQpKigxLXQpfXJldHVybnt4OmEqbyh0KStuKmgodCkrZSpsKHQpLHk6cipvKHQpK3MqaCh0KStpKmwodCl9fSx0aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjPWZ1bmN0aW9uKHQsZSxpLG4scyxhKXt2YXIgcj1NYXRoLmNvcyhhKSxvPU1hdGguc2luKGEpLGg9aSpNYXRoLmNvcyhzKSxsPW4qTWF0aC5zaW4ocyk7cmV0dXJue3g6dCsoaCpyLWwqbykseTplKyhoKm8rbCpyKX19LHRoaXMuY2FsY0xlbmd0aD1mdW5jdGlvbih0LGUsaSxuKXt2YXIgcyxhLHIsbztzd2l0Y2goaSl7Y2FzZVwiTFwiOnJldHVybiB0aGlzLmdldExpbmVMZW5ndGgodCxlLG5bMF0sblsxXSk7Y2FzZVwiQ1wiOmZvcihzPTAsYT10aGlzLmdldFBvaW50T25DdWJpY0JlemllcigwLHQsZSxuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0sbls1XSksbz0uMDE7bzw9MTtvKz0uMDEpcj10aGlzLmdldFBvaW50T25DdWJpY0JlemllcihvLHQsZSxuWzBdLG5bMV0sblsyXSxuWzNdLG5bNF0sbls1XSkscys9dGhpcy5nZXRMaW5lTGVuZ3RoKGEueCxhLnksci54LHIueSksYT1yO3JldHVybiBzO2Nhc2VcIlFcIjpmb3Iocz0wLGE9dGhpcy5nZXRQb2ludE9uUXVhZHJhdGljQmV6aWVyKDAsdCxlLG5bMF0sblsxXSxuWzJdLG5bM10pLG89LjAxO288PTE7bys9LjAxKXI9dGhpcy5nZXRQb2ludE9uUXVhZHJhdGljQmV6aWVyKG8sdCxlLG5bMF0sblsxXSxuWzJdLG5bM10pLHMrPXRoaXMuZ2V0TGluZUxlbmd0aChhLngsYS55LHIueCxyLnkpLGE9cjtyZXR1cm4gcztjYXNlXCJBXCI6cz0wO3ZhciBoPW5bNF0sbD1uWzVdLHU9bls0XStsLGM9TWF0aC5QSS8xODA7aWYoTWF0aC5hYnMoaC11KTxjJiYoYz1NYXRoLmFicyhoLXUpKSxhPXRoaXMuZ2V0UG9pbnRPbkVsbGlwdGljYWxBcmMoblswXSxuWzFdLG5bMl0sblszXSxoLDApLGw8MClmb3Iobz1oLWM7dTxvO28tPWMpcj10aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjKG5bMF0sblsxXSxuWzJdLG5bM10sbywwKSxzKz10aGlzLmdldExpbmVMZW5ndGgoYS54LGEueSxyLngsci55KSxhPXI7ZWxzZSBmb3Iobz1oK2M7bzx1O28rPWMpcj10aGlzLmdldFBvaW50T25FbGxpcHRpY2FsQXJjKG5bMF0sblsxXSxuWzJdLG5bM10sbywwKSxzKz10aGlzLmdldExpbmVMZW5ndGgoYS54LGEueSxyLngsci55KSxhPXI7cmV0dXJuIHI9dGhpcy5nZXRQb2ludE9uRWxsaXB0aWNhbEFyYyhuWzBdLG5bMV0sblsyXSxuWzNdLHUsMCkscys9dGhpcy5nZXRMaW5lTGVuZ3RoKGEueCxhLnksci54LHIueSl9cmV0dXJuIDB9LHRoaXMuZGF0YUFycmF5PXRoaXMucGFyc2VQYXRoRGF0YShlKX0sRC5FbGVtZW50LnRleHRQYXRoLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlRleHRFbGVtZW50QmFzZSxELkVsZW1lbnQuaW1hZ2U9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5SZW5kZXJlZEVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTt2YXIgZT10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS52YWx1ZTtpZihcIlwiIT1lKXt2YXIgYT1lLm1hdGNoKC9cXC5zdmckLyk7aWYoRC5JbWFnZXMucHVzaCh0aGlzKSx0aGlzLmxvYWRlZD0hMSxhKXRoaXMuaW1nPUQuYWpheChlKSx0aGlzLmxvYWRlZD0hMDtlbHNle3RoaXMuaW1nPWMuY3JlYXRlRWxlbWVudChcImltZ1wiKSwxPT1ELm9wdHMudXNlQ09SUyYmKHRoaXMuaW1nLmNyb3NzT3JpZ2luPVwiQW5vbnltb3VzXCIpO3ZhciByPXRoaXM7dGhpcy5pbWcub25sb2FkPWZ1bmN0aW9uKCl7ci5sb2FkZWQ9ITB9LHRoaXMuaW1nLm9uZXJyb3I9ZnVuY3Rpb24oKXtELmxvZygnRVJST1I6IGltYWdlIFwiJytlKydcIiBub3QgZm91bmQnKSxyLmxvYWRlZD0hMH0sdGhpcy5pbWcuc3JjPWV9dGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXt2YXIgZT10aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ5XCIpLnRvUGl4ZWxzKFwieVwiKSxuPXRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpOzAhPW4mJjAhPXMmJih0LnNhdmUoKSxhP3QuZHJhd1N2Zyh0aGlzLmltZyxlLGksbixzKToodC50cmFuc2xhdGUoZSxpKSxELkFzcGVjdFJhdGlvKHQsdGhpcy5hdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIpLnZhbHVlLG4sdGhpcy5pbWcud2lkdGgscyx0aGlzLmltZy5oZWlnaHQsMCwwKSxyLmxvYWRlZCYmKHZvaWQgMD09PXRoaXMuaW1nLmNvbXBsZXRlfHx0aGlzLmltZy5jb21wbGV0ZSkmJnQuZHJhd0ltYWdlKHRoaXMuaW1nLDAsMCkpLHQucmVzdG9yZSgpKX0sdGhpcy5nZXRCb3VuZGluZ0JveD1mdW5jdGlvbigpe3ZhciB0PXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksZT10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLGk9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7cmV0dXJuIG5ldyBELkJvdW5kaW5nQm94KHQsZSx0K2ksZStuKX19fSxELkVsZW1lbnQuaW1hZ2UucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxELkVsZW1lbnQuZz1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPW5ldyBELkJvdW5kaW5nQm94LGk9MDtpPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2krKyllLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5baV0uZ2V0Qm91bmRpbmdCb3godCkpO3JldHVybiBlfX0sRC5FbGVtZW50LmcucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSxELkVsZW1lbnQuc3ltYm9sPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuUmVuZGVyZWRFbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5yZW5kZXI9ZnVuY3Rpb24oKXt9fSxELkVsZW1lbnQuc3ltYm9sLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsRC5QYXJzZUV4dGVybmFsVXJsPWZ1bmN0aW9uKHQpe3ZhciBlPXQubWF0Y2goL3VybFxcKCgnKFteJ10rKSd8XCIoW15cIl0rKVwifChbXidcIlxcKV0rKSlcXCkvKXx8W107cmV0dXJuIGVbMl18fGVbM118fGVbNF19LEQuRWxlbWVudC5zdHlsZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KTtmb3IodmFyIGU9XCJcIixpPTA7aTx0LmNoaWxkTm9kZXMubGVuZ3RoO2krKyllKz10LmNoaWxkTm9kZXNbaV0uZGF0YTtlPWUucmVwbGFjZSgvKFxcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKlxcL118W1xcclxcbl0pKSkqXFwqK1xcLyl8KF5bXFxzXSpcXC9cXC8uKikvZ20sXCJcIik7dmFyIG49KGU9RC5jb21wcmVzc1NwYWNlcyhlKSkuc3BsaXQoXCJ9XCIpO2ZvcihpPTA7aTxuLmxlbmd0aDtpKyspaWYoXCJcIiE9RC50cmltKG5baV0pKWZvcih2YXIgcz1uW2ldLnNwbGl0KFwie1wiKSxhPXNbMF0uc3BsaXQoXCIsXCIpLHI9c1sxXS5zcGxpdChcIjtcIiksbz0wO288YS5sZW5ndGg7bysrKXt2YXIgaD1ELnRyaW0oYVtvXSk7aWYoXCJcIiE9aCl7Zm9yKHZhciBsPUQuU3R5bGVzW2hdfHx7fSx1PTA7dTxyLmxlbmd0aDt1Kyspe3ZhciBjPXJbdV0uaW5kZXhPZihcIjpcIiksZj1yW3VdLnN1YnN0cigwLGMpLHA9clt1XS5zdWJzdHIoYysxLHJbdV0ubGVuZ3RoLWMpO251bGwhPWYmJm51bGwhPXAmJihsW0QudHJpbShmKV09bmV3IEQuUHJvcGVydHkoRC50cmltKGYpLEQudHJpbShwKSkpfWlmKEQuU3R5bGVzW2hdPWwsRC5TdHlsZXNTcGVjaWZpY2l0eVtoXT1QKGgpLFwiQGZvbnQtZmFjZVwiPT1oKWZvcih2YXIgZD1sW1wiZm9udC1mYW1pbHlcIl0udmFsdWUucmVwbGFjZSgvXCIvZyxcIlwiKSxtPWwuc3JjLnZhbHVlLnNwbGl0KFwiLFwiKSx5PTA7eTxtLmxlbmd0aDt5KyspaWYoMDxtW3ldLmluZGV4T2YoJ2Zvcm1hdChcInN2Z1wiKScpKXt2YXIgdj1ELlBhcnNlRXh0ZXJuYWxVcmwobVt5XSk7aWYodilmb3IodmFyIGc9RC5wYXJzZVhtbChELmFqYXgodikpLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZm9udFwiKSx4PTA7eDxnLmxlbmd0aDt4Kyspe3ZhciBiPUQuQ3JlYXRlRWxlbWVudChnW3hdKTtELkRlZmluaXRpb25zW2RdPWJ9fX19fSxELkVsZW1lbnQuc3R5bGUucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuRWxlbWVudEJhc2UsRC5FbGVtZW50LnVzZT1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYmFzZVNldENvbnRleHQ9dGhpcy5zZXRDb250ZXh0LHRoaXMuc2V0Q29udGV4dD1mdW5jdGlvbih0KXt0aGlzLmJhc2VTZXRDb250ZXh0KHQpLHRoaXMuYXR0cmlidXRlKFwieFwiKS5oYXNWYWx1ZSgpJiZ0LnRyYW5zbGF0ZSh0aGlzLmF0dHJpYnV0ZShcInhcIikudG9QaXhlbHMoXCJ4XCIpLDApLHRoaXMuYXR0cmlidXRlKFwieVwiKS5oYXNWYWx1ZSgpJiZ0LnRyYW5zbGF0ZSgwLHRoaXMuYXR0cmlidXRlKFwieVwiKS50b1BpeGVscyhcInlcIikpfTt2YXIgbj10aGlzLmdldEhyZWZBdHRyaWJ1dGUoKS5nZXREZWZpbml0aW9uKCk7dGhpcy5wYXRoPWZ1bmN0aW9uKHQpe251bGwhPW4mJm4ucGF0aCh0KX0sdGhpcy5lbGVtZW50VHJhbnNmb3JtPWZ1bmN0aW9uKCl7aWYobnVsbCE9biYmbi5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS5oYXNWYWx1ZSgpKXJldHVybiBuZXcgRC5UcmFuc2Zvcm0obi5zdHlsZShcInRyYW5zZm9ybVwiLCExLCEwKS52YWx1ZSl9LHRoaXMuZ2V0Qm91bmRpbmdCb3g9ZnVuY3Rpb24odCl7aWYobnVsbCE9bilyZXR1cm4gbi5nZXRCb3VuZGluZ0JveCh0KX0sdGhpcy5yZW5kZXJDaGlsZHJlbj1mdW5jdGlvbih0KXtpZihudWxsIT1uKXt2YXIgZT1uO1wic3ltYm9sXCI9PW4udHlwZSYmKChlPW5ldyBELkVsZW1lbnQuc3ZnKS50eXBlPVwic3ZnXCIsZS5hdHRyaWJ1dGVzLnZpZXdCb3g9bmV3IEQuUHJvcGVydHkoXCJ2aWV3Qm94XCIsbi5hdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpLnZhbHVlKSxlLmF0dHJpYnV0ZXMucHJlc2VydmVBc3BlY3RSYXRpbz1uZXcgRC5Qcm9wZXJ0eShcInByZXNlcnZlQXNwZWN0UmF0aW9cIixuLmF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIikudmFsdWUpLGUuYXR0cmlidXRlcy5vdmVyZmxvdz1uZXcgRC5Qcm9wZXJ0eShcIm92ZXJmbG93XCIsbi5hdHRyaWJ1dGUoXCJvdmVyZmxvd1wiKS52YWx1ZSksZS5jaGlsZHJlbj1uLmNoaWxkcmVuKSxcInN2Z1wiPT1lLnR5cGUmJih0aGlzLmF0dHJpYnV0ZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJihlLmF0dHJpYnV0ZXMud2lkdGg9bmV3IEQuUHJvcGVydHkoXCJ3aWR0aFwiLHRoaXMuYXR0cmlidXRlKFwid2lkdGhcIikudmFsdWUpKSx0aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYoZS5hdHRyaWJ1dGVzLmhlaWdodD1uZXcgRC5Qcm9wZXJ0eShcImhlaWdodFwiLHRoaXMuYXR0cmlidXRlKFwiaGVpZ2h0XCIpLnZhbHVlKSkpO3ZhciBpPWUucGFyZW50O2UucGFyZW50PW51bGwsZS5yZW5kZXIodCksZS5wYXJlbnQ9aX19fSxELkVsZW1lbnQudXNlLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LlJlbmRlcmVkRWxlbWVudEJhc2UsRC5FbGVtZW50Lm1hc2s9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbih0LGUpe3ZhciBpPXRoaXMuYXR0cmlidXRlKFwieFwiKS50b1BpeGVscyhcInhcIiksbj10aGlzLmF0dHJpYnV0ZShcInlcIikudG9QaXhlbHMoXCJ5XCIpLHM9dGhpcy5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksYT10aGlzLmF0dHJpYnV0ZShcImhlaWdodFwiKS50b1BpeGVscyhcInlcIik7aWYoMD09cyYmMD09YSl7Zm9yKHZhciByPW5ldyBELkJvdW5kaW5nQm94LG89MDtvPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO28rKylyLmFkZEJvdW5kaW5nQm94KHRoaXMuY2hpbGRyZW5bb10uZ2V0Qm91bmRpbmdCb3godCkpO2k9TWF0aC5mbG9vcihyLngxKSxuPU1hdGguZmxvb3Ioci55MSkscz1NYXRoLmZsb29yKHIud2lkdGgoKSksYT1NYXRoLmZsb29yKHIuaGVpZ2h0KCkpfXZhciBoPWUuc3R5bGUoXCJtYXNrXCIpLnZhbHVlO2Uuc3R5bGUoXCJtYXNrXCIpLnZhbHVlPVwiXCI7dmFyIGw9ZChpK3MsbithKSx1PWwuZ2V0Q29udGV4dChcIjJkXCIpO0QuU2V0RGVmYXVsdHModSksdGhpcy5yZW5kZXJDaGlsZHJlbih1KSxuZXcgRC5FbGVtZW50LmZlQ29sb3JNYXRyaXgoe25vZGVUeXBlOjEsY2hpbGROb2RlczpbXSxhdHRyaWJ1dGVzOlt7bm9kZU5hbWU6XCJ0eXBlXCIsdmFsdWU6XCJsdW1pbmFuY2VUb0FscGhhXCJ9LHtub2RlTmFtZTpcImluY2x1ZGVPcGFjaXR5XCIsdmFsdWU6XCJ0cnVlXCJ9XX0pLmFwcGx5KHUsMCwwLGkrcyxuK2EpO3ZhciBjPWQoaStzLG4rYSksZj1jLmdldENvbnRleHQoXCIyZFwiKTtELlNldERlZmF1bHRzKGYpLGUucmVuZGVyKGYpLGYuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPVwiZGVzdGluYXRpb24taW5cIixmLmZpbGxTdHlsZT11LmNyZWF0ZVBhdHRlcm4obCxcIm5vLXJlcGVhdFwiKSxmLmZpbGxSZWN0KDAsMCxpK3MsbithKSx0LmZpbGxTdHlsZT1mLmNyZWF0ZVBhdHRlcm4oYyxcIm5vLXJlcGVhdFwiKSx0LmZpbGxSZWN0KDAsMCxpK3MsbithKSxlLnN0eWxlKFwibWFza1wiKS52YWx1ZT1ofSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe319LEQuRWxlbWVudC5tYXNrLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkVsZW1lbnRCYXNlLEQuRWxlbWVudC5jbGlwUGF0aD1mdW5jdGlvbih0KXt0aGlzLmJhc2U9RC5FbGVtZW50LkVsZW1lbnRCYXNlLHRoaXMuYmFzZSh0KSx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQpe3ZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsaT10LmJlZ2luUGF0aCxuPXQuY2xvc2VQYXRoO2UmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aD1mdW5jdGlvbigpe30sQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5jbG9zZVBhdGg9ZnVuY3Rpb24oKXt9KSxpLmNhbGwodCk7Zm9yKHZhciBzPTA7czx0aGlzLmNoaWxkcmVuLmxlbmd0aDtzKyspe3ZhciBhPXRoaXMuY2hpbGRyZW5bc107aWYodm9pZCAwIT09YS5wYXRoKXt2YXIgcj12b2lkIDAhPT1hLmVsZW1lbnRUcmFuc2Zvcm0mJmEuZWxlbWVudFRyYW5zZm9ybSgpOyFyJiZhLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLmhhc1ZhbHVlKCkmJihyPW5ldyBELlRyYW5zZm9ybShhLnN0eWxlKFwidHJhbnNmb3JtXCIsITEsITApLnZhbHVlKSksciYmci5hcHBseSh0KSxhLnBhdGgodCksZSYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPW4pLHImJnIudW5hcHBseSh0KX19bi5jYWxsKHQpLHQuY2xpcCgpLGUmJihDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmJlZ2luUGF0aD1pLENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuY2xvc2VQYXRoPW4pfSx0aGlzLnJlbmRlcj1mdW5jdGlvbigpe319LEQuRWxlbWVudC5jbGlwUGF0aC5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQuZmlsdGVyPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24odCxlKXt2YXIgaT1lLmdldEJvdW5kaW5nQm94KHQpLG49TWF0aC5mbG9vcihpLngxKSxzPU1hdGguZmxvb3IoaS55MSksYT1NYXRoLmZsb29yKGkud2lkdGgoKSkscj1NYXRoLmZsb29yKGkuaGVpZ2h0KCkpLG89ZS5zdHlsZShcImZpbHRlclwiKS52YWx1ZTtlLnN0eWxlKFwiZmlsdGVyXCIpLnZhbHVlPVwiXCI7Zm9yKHZhciBoPTAsbD0wLHU9MDt1PHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3UrKyl7dmFyIGM9dGhpcy5jaGlsZHJlblt1XS5leHRyYUZpbHRlckRpc3RhbmNlfHwwO2g9TWF0aC5tYXgoaCxjKSxsPU1hdGgubWF4KGwsYyl9dmFyIGY9ZChhKzIqaCxyKzIqbCkscD1mLmdldENvbnRleHQoXCIyZFwiKTtELlNldERlZmF1bHRzKHApLHAudHJhbnNsYXRlKC1uK2gsLXMrbCksZS5yZW5kZXIocCk7Zm9yKHU9MDt1PHRoaXMuY2hpbGRyZW4ubGVuZ3RoO3UrKylcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLmNoaWxkcmVuW3VdLmFwcGx5JiZ0aGlzLmNoaWxkcmVuW3VdLmFwcGx5KHAsMCwwLGErMipoLHIrMipsKTt0LmRyYXdJbWFnZShmLDAsMCxhKzIqaCxyKzIqbCxuLWgscy1sLGErMipoLHIrMipsKSxlLnN0eWxlKFwiZmlsdGVyXCIsITApLnZhbHVlPW99LHRoaXMucmVuZGVyPWZ1bmN0aW9uKCl7fX0sRC5FbGVtZW50LmZpbHRlci5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQuZmVEcm9wU2hhZG93PWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYWRkU3R5bGVzRnJvbVN0eWxlRGVmaW5pdGlvbigpLHRoaXMuYXBwbHk9ZnVuY3Rpb24oKXt9fSxELkVsZW1lbnQuZmVEcm9wU2hhZG93LnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkVsZW1lbnRCYXNlLEQuRWxlbWVudC5mZU1vcnBob2xvZ3k9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5hcHBseT1mdW5jdGlvbigpe319LEQuRWxlbWVudC5mZU1vcnBob2xvZ3kucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuRWxlbWVudEJhc2UsRC5FbGVtZW50LmZlQ29tcG9zaXRlPWZ1bmN0aW9uKHQpe3RoaXMuYmFzZT1ELkVsZW1lbnQuRWxlbWVudEJhc2UsdGhpcy5iYXNlKHQpLHRoaXMuYXBwbHk9ZnVuY3Rpb24oKXt9fSxELkVsZW1lbnQuZmVDb21wb3NpdGUucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuRWxlbWVudEJhc2UsRC5FbGVtZW50LmZlQ29sb3JNYXRyaXg9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCk7dmFyIG49RC5Ub051bWJlckFycmF5KHRoaXMuYXR0cmlidXRlKFwidmFsdWVzXCIpLnZhbHVlKTtzd2l0Y2godGhpcy5hdHRyaWJ1dGUoXCJ0eXBlXCIpLnZhbHVlT3JEZWZhdWx0KFwibWF0cml4XCIpKXtjYXNlXCJzYXR1cmF0ZVwiOnZhciBlPW5bMF07bj1bLjIxMysuNzg3KmUsLjcxNS0uNzE1KmUsLjA3Mi0uMDcyKmUsMCwwLC4yMTMtLjIxMyplLC43MTUrLjI4NSplLC4wNzItLjA3MiplLDAsMCwuMjEzLS4yMTMqZSwuNzE1LS43MTUqZSwuMDcyKy45MjgqZSwwLDAsMCwwLDAsMSwwLDAsMCwwLDAsMV07YnJlYWs7Y2FzZVwiaHVlUm90YXRlXCI6dmFyIHM9blswXSpNYXRoLlBJLzE4MCxpPWZ1bmN0aW9uKHQsZSxpKXtyZXR1cm4gdCtNYXRoLmNvcyhzKSplK01hdGguc2luKHMpKml9O249W2koLjIxMywuNzg3LC0uMjEzKSxpKC43MTUsLS43MTUsLS43MTUpLGkoLjA3MiwtLjA3MiwuOTI4KSwwLDAsaSguMjEzLC0uMjEzLC4xNDMpLGkoLjcxNSwuMjg1LC4xNCksaSguMDcyLC0uMDcyLC0uMjgzKSwwLDAsaSguMjEzLC0uMjEzLC0uNzg3KSxpKC43MTUsLS43MTUsLjcxNSksaSguMDcyLC45MjgsLjA3MiksMCwwLDAsMCwwLDEsMCwwLDAsMCwwLDFdO2JyZWFrO2Nhc2VcImx1bWluYW5jZVRvQWxwaGFcIjpuPVswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwuMjEyNSwuNzE1NCwuMDcyMSwwLDAsMCwwLDAsMCwxXX1mdW5jdGlvbiBkKHQsZSxpLG4scyxhKXtyZXR1cm4gdFtpKm4qNCs0KmUrYV19ZnVuY3Rpb24gbSh0LGUsaSxuLHMsYSxyKXt0W2kqbio0KzQqZSthXT1yfWZ1bmN0aW9uIHkodCxlKXt2YXIgaT1uW3RdO3JldHVybiBpKihpPDA/ZS0yNTU6ZSl9dmFyIHY9dGhpcy5hdHRyaWJ1dGUoXCJpbmNsdWRlT3BhY2l0eVwiKS5oYXNWYWx1ZSgpO3RoaXMuYXBwbHk9ZnVuY3Rpb24odCxlLGksbixzKXt2YXIgYT10LmdldEltYWdlRGF0YSgwLDAsbixzKTtmb3IoaT0wO2k8cztpKyspZm9yKGU9MDtlPG47ZSsrKXt2YXIgcj1kKGEuZGF0YSxlLGksbiwwLDApLG89ZChhLmRhdGEsZSxpLG4sMCwxKSxoPWQoYS5kYXRhLGUsaSxuLDAsMiksbD1kKGEuZGF0YSxlLGksbiwwLDMpLHU9eSgwLHIpK3koMSxvKSt5KDIsaCkreSgzLGwpK3koNCwxKSxjPXkoNSxyKSt5KDYsbykreSg3LGgpK3koOCxsKSt5KDksMSksZj15KDEwLHIpK3koMTEsbykreSgxMixoKSt5KDEzLGwpK3koMTQsMSkscD15KDE1LHIpK3koMTYsbykreSgxNyxoKSt5KDE4LGwpK3koMTksMSk7diYmKHU9Yz1mPTAscCo9bC8yNTUpLG0oYS5kYXRhLGUsaSxuLDAsMCx1KSxtKGEuZGF0YSxlLGksbiwwLDEsYyksbShhLmRhdGEsZSxpLG4sMCwyLGYpLG0oYS5kYXRhLGUsaSxuLDAsMyxwKX10LmNsZWFyUmVjdCgwLDAsbixzKSx0LnB1dEltYWdlRGF0YShhLDAsMCl9fSxELkVsZW1lbnQuZmVDb2xvck1hdHJpeC5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQuZmVHYXVzc2lhbkJsdXI9ZnVuY3Rpb24odCl7dGhpcy5iYXNlPUQuRWxlbWVudC5FbGVtZW50QmFzZSx0aGlzLmJhc2UodCksdGhpcy5ibHVyUmFkaXVzPU1hdGguZmxvb3IodGhpcy5hdHRyaWJ1dGUoXCJzdGREZXZpYXRpb25cIikubnVtVmFsdWUoKSksdGhpcy5leHRyYUZpbHRlckRpc3RhbmNlPXRoaXMuYmx1clJhZGl1cyx0aGlzLmFwcGx5PWZ1bmN0aW9uKHQsZSxpLG4scyl7diYmdm9pZCAwIT09di5jYW52YXNSR0JBPyh0LmNhbnZhcy5pZD1ELlVuaXF1ZUlkKCksdC5jYW52YXMuc3R5bGUuZGlzcGxheT1cIm5vbmVcIixjLmJvZHkuYXBwZW5kQ2hpbGQodC5jYW52YXMpLHYuY2FudmFzUkdCQSh0LmNhbnZhcyxlLGksbixzLHRoaXMuYmx1clJhZGl1cyksYy5ib2R5LnJlbW92ZUNoaWxkKHQuY2FudmFzKSk6RC5sb2coXCJFUlJPUjogU3RhY2tCbHVyLmpzIG11c3QgYmUgaW5jbHVkZWQgZm9yIGJsdXIgdG8gd29ya1wiKX19LEQuRWxlbWVudC5mZUdhdXNzaWFuQmx1ci5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQudGl0bGU9ZnVuY3Rpb24oKXt9LEQuRWxlbWVudC50aXRsZS5wcm90b3R5cGU9bmV3IEQuRWxlbWVudC5FbGVtZW50QmFzZSxELkVsZW1lbnQuZGVzYz1mdW5jdGlvbigpe30sRC5FbGVtZW50LmRlc2MucHJvdG90eXBlPW5ldyBELkVsZW1lbnQuRWxlbWVudEJhc2UsRC5FbGVtZW50Lk1JU1NJTkc9ZnVuY3Rpb24odCl7RC5sb2coXCJFUlJPUjogRWxlbWVudCAnXCIrdC5ub2RlTmFtZStcIicgbm90IHlldCBpbXBsZW1lbnRlZC5cIil9LEQuRWxlbWVudC5NSVNTSU5HLnByb3RvdHlwZT1uZXcgRC5FbGVtZW50LkVsZW1lbnRCYXNlLEQuQ3JlYXRlRWxlbWVudD1mdW5jdGlvbih0KXt2YXIgZT10Lm5vZGVOYW1lLnJlcGxhY2UoL15bXjpdKzovLFwiXCIpO2U9ZS5yZXBsYWNlKC9cXC0vZyxcIlwiKTt2YXIgaT1udWxsO3JldHVybihpPXZvaWQgMCE9PUQuRWxlbWVudFtlXT9uZXcgRC5FbGVtZW50W2VdKHQpOm5ldyBELkVsZW1lbnQuTUlTU0lORyh0KSkudHlwZT10Lm5vZGVOYW1lLGl9LEQubG9hZD1mdW5jdGlvbih0LGUpe0QubG9hZFhtbCh0LEQuYWpheChlKSl9LEQubG9hZFhtbD1mdW5jdGlvbih0LGUpe0QubG9hZFhtbERvYyh0LEQucGFyc2VYbWwoZSkpfSxELmxvYWRYbWxEb2M9ZnVuY3Rpb24oYSxyKXtELmluaXQoYSk7dmFyIGk9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPWEuY2FudmFzO2U7KXQueC09ZS5vZmZzZXRMZWZ0LHQueS09ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudDtyZXR1cm4gbC5zY3JvbGxYJiYodC54Kz1sLnNjcm9sbFgpLGwuc2Nyb2xsWSYmKHQueSs9bC5zY3JvbGxZKSx0fTsxIT1ELm9wdHMuaWdub3JlTW91c2UmJihhLmNhbnZhcy5vbmNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBlPWkobmV3IEQuUG9pbnQobnVsbCE9dD90LmNsaWVudFg6ZXZlbnQuY2xpZW50WCxudWxsIT10P3QuY2xpZW50WTpldmVudC5jbGllbnRZKSk7RC5Nb3VzZS5vbmNsaWNrKGUueCxlLnkpfSxhLmNhbnZhcy5vbm1vdXNlbW92ZT1mdW5jdGlvbih0KXt2YXIgZT1pKG5ldyBELlBvaW50KG51bGwhPXQ/dC5jbGllbnRYOmV2ZW50LmNsaWVudFgsbnVsbCE9dD90LmNsaWVudFk6ZXZlbnQuY2xpZW50WSkpO0QuTW91c2Uub25tb3VzZW1vdmUoZS54LGUueSl9KTt2YXIgbz1ELkNyZWF0ZUVsZW1lbnQoci5kb2N1bWVudEVsZW1lbnQpO28ucm9vdD0hMCxvLmFkZFN0eWxlc0Zyb21TdHlsZURlZmluaXRpb24oKTt2YXIgaD0hMCxuPWZ1bmN0aW9uKCl7RC5WaWV3UG9ydC5DbGVhcigpLGEuY2FudmFzLnBhcmVudE5vZGU/RC5WaWV3UG9ydC5TZXRDdXJyZW50KGEuY2FudmFzLnBhcmVudE5vZGUuY2xpZW50V2lkdGgsYS5jYW52YXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQpOkQuVmlld1BvcnQuU2V0Q3VycmVudCg4MDAsNjAwKSwxIT1ELm9wdHMuaWdub3JlRGltZW5zaW9ucyYmKGh8fG51bGw9PUQub3B0cy5zY2FsZVdpZHRoJiZudWxsPT1ELm9wdHMuc2NhbGVIZWlnaHQpJiYoby5zdHlsZShcIndpZHRoXCIpLmhhc1ZhbHVlKCkmJihhLmNhbnZhcy53aWR0aD1vLnN0eWxlKFwid2lkdGhcIikudG9QaXhlbHMoXCJ4XCIpLGEuY2FudmFzLnN0eWxlJiYoYS5jYW52YXMuc3R5bGUud2lkdGg9YS5jYW52YXMud2lkdGgrXCJweFwiKSksby5zdHlsZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpJiYoYS5jYW52YXMuaGVpZ2h0PW8uc3R5bGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpLGEuY2FudmFzLnN0eWxlJiYoYS5jYW52YXMuc3R5bGUuaGVpZ2h0PWEuY2FudmFzLmhlaWdodCtcInB4XCIpKSk7dmFyIHQ9YS5jYW52YXMuY2xpZW50V2lkdGh8fGEuY2FudmFzLndpZHRoLGU9YS5jYW52YXMuY2xpZW50SGVpZ2h0fHxhLmNhbnZhcy5oZWlnaHQ7aWYoMT09RC5vcHRzLmlnbm9yZURpbWVuc2lvbnMmJm8uc3R5bGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpJiZvLnN0eWxlKFwiaGVpZ2h0XCIpLmhhc1ZhbHVlKCkmJih0PW8uc3R5bGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIiksZT1vLnN0eWxlKFwiaGVpZ2h0XCIpLnRvUGl4ZWxzKFwieVwiKSksRC5WaWV3UG9ydC5TZXRDdXJyZW50KHQsZSksbnVsbCE9RC5vcHRzLm9mZnNldFgmJihvLmF0dHJpYnV0ZShcInhcIiwhMCkudmFsdWU9RC5vcHRzLm9mZnNldFgpLG51bGwhPUQub3B0cy5vZmZzZXRZJiYoby5hdHRyaWJ1dGUoXCJ5XCIsITApLnZhbHVlPUQub3B0cy5vZmZzZXRZKSxudWxsIT1ELm9wdHMuc2NhbGVXaWR0aHx8bnVsbCE9RC5vcHRzLnNjYWxlSGVpZ2h0KXt2YXIgaT1udWxsLG49bnVsbCxzPUQuVG9OdW1iZXJBcnJheShvLmF0dHJpYnV0ZShcInZpZXdCb3hcIikudmFsdWUpO251bGwhPUQub3B0cy5zY2FsZVdpZHRoJiYoby5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS5oYXNWYWx1ZSgpP2k9by5hdHRyaWJ1dGUoXCJ3aWR0aFwiKS50b1BpeGVscyhcInhcIikvRC5vcHRzLnNjYWxlV2lkdGg6aXNOYU4oc1syXSl8fChpPXNbMl0vRC5vcHRzLnNjYWxlV2lkdGgpKSxudWxsIT1ELm9wdHMuc2NhbGVIZWlnaHQmJihvLmF0dHJpYnV0ZShcImhlaWdodFwiKS5oYXNWYWx1ZSgpP249by5hdHRyaWJ1dGUoXCJoZWlnaHRcIikudG9QaXhlbHMoXCJ5XCIpL0Qub3B0cy5zY2FsZUhlaWdodDppc05hTihzWzNdKXx8KG49c1szXS9ELm9wdHMuc2NhbGVIZWlnaHQpKSxudWxsPT1pJiYoaT1uKSxudWxsPT1uJiYobj1pKSxvLmF0dHJpYnV0ZShcIndpZHRoXCIsITApLnZhbHVlPUQub3B0cy5zY2FsZVdpZHRoLG8uYXR0cmlidXRlKFwiaGVpZ2h0XCIsITApLnZhbHVlPUQub3B0cy5zY2FsZUhlaWdodCxvLnN0eWxlKFwidHJhbnNmb3JtXCIsITAsITApLnZhbHVlKz1cIiBzY2FsZShcIisxL2krXCIsXCIrMS9uK1wiKVwifTEhPUQub3B0cy5pZ25vcmVDbGVhciYmYS5jbGVhclJlY3QoMCwwLHQsZSksby5yZW5kZXIoYSksaCYmKGg9ITEsXCJmdW5jdGlvblwiPT10eXBlb2YgRC5vcHRzLnJlbmRlckNhbGxiYWNrJiZELm9wdHMucmVuZGVyQ2FsbGJhY2socikpfSxzPSEwO0QuSW1hZ2VzTG9hZGVkKCkmJihzPSExLG4oKSksRC5pbnRlcnZhbElEPXNldEludGVydmFsKGZ1bmN0aW9uKCl7dmFyIHQ9ITE7aWYocyYmRC5JbWFnZXNMb2FkZWQoKSYmKHQ9IShzPSExKSksMSE9RC5vcHRzLmlnbm9yZU1vdXNlJiYodD10fHxELk1vdXNlLmhhc0V2ZW50cygpKSwxIT1ELm9wdHMuaWdub3JlQW5pbWF0aW9uKWZvcih2YXIgZT0wO2U8RC5BbmltYXRpb25zLmxlbmd0aDtlKyspe3ZhciBpPUQuQW5pbWF0aW9uc1tlXS51cGRhdGUoMWUzL0QuRlJBTUVSQVRFKTt0PXR8fGl9XCJmdW5jdGlvblwiPT10eXBlb2YgRC5vcHRzLmZvcmNlUmVkcmF3JiYxPT1ELm9wdHMuZm9yY2VSZWRyYXcoKSYmKHQ9ITApLHQmJihuKCksRC5Nb3VzZS5ydW5FdmVudHMoKSl9LDFlMy9ELkZSQU1FUkFURSl9LEQuc3RvcD1mdW5jdGlvbigpe0QuaW50ZXJ2YWxJRCYmY2xlYXJJbnRlcnZhbChELmludGVydmFsSUQpfSxELk1vdXNlPW5ldyBmdW5jdGlvbigpe3RoaXMuZXZlbnRzPVtdLHRoaXMuaGFzRXZlbnRzPWZ1bmN0aW9uKCl7cmV0dXJuIDAhPXRoaXMuZXZlbnRzLmxlbmd0aH0sdGhpcy5vbmNsaWNrPWZ1bmN0aW9uKHQsZSl7dGhpcy5ldmVudHMucHVzaCh7dHlwZTpcIm9uY2xpY2tcIix4OnQseTplLHJ1bjpmdW5jdGlvbih0KXt0Lm9uY2xpY2smJnQub25jbGljaygpfX0pfSx0aGlzLm9ubW91c2Vtb3ZlPWZ1bmN0aW9uKHQsZSl7dGhpcy5ldmVudHMucHVzaCh7dHlwZTpcIm9ubW91c2Vtb3ZlXCIseDp0LHk6ZSxydW46ZnVuY3Rpb24odCl7dC5vbm1vdXNlbW92ZSYmdC5vbm1vdXNlbW92ZSgpfX0pfSx0aGlzLmV2ZW50RWxlbWVudHM9W10sdGhpcy5jaGVja1BhdGg9ZnVuY3Rpb24odCxlKXtmb3IodmFyIGk9MDtpPHRoaXMuZXZlbnRzLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZXZlbnRzW2ldO2UuaXNQb2ludEluUGF0aCYmZS5pc1BvaW50SW5QYXRoKG4ueCxuLnkpJiYodGhpcy5ldmVudEVsZW1lbnRzW2ldPXQpfX0sdGhpcy5jaGVja0JvdW5kaW5nQm94PWZ1bmN0aW9uKHQsZSl7aWYoZSlmb3IodmFyIGk9MDtpPHRoaXMuZXZlbnRzLmxlbmd0aDtpKyspe3ZhciBuPXRoaXMuZXZlbnRzW2ldO2UuaXNQb2ludEluQm94KG4ueCxuLnkpJiYodGhpcy5ldmVudEVsZW1lbnRzW2ldPXQpfX0sdGhpcy5ydW5FdmVudHM9ZnVuY3Rpb24oKXtELmN0eC5jYW52YXMuc3R5bGUuY3Vyc29yPVwiXCI7Zm9yKHZhciB0PTA7dDx0aGlzLmV2ZW50cy5sZW5ndGg7dCsrKWZvcih2YXIgZT10aGlzLmV2ZW50c1t0XSxpPXRoaXMuZXZlbnRFbGVtZW50c1t0XTtpOyllLnJ1bihpKSxpPWkucGFyZW50O3RoaXMuZXZlbnRzPVtdLHRoaXMuZXZlbnRFbGVtZW50cz1bXX19LER9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCYmKENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZHJhd1N2Zz1mdW5jdGlvbih0LGUsaSxuLHMsYSl7dmFyIHI9e2lnbm9yZU1vdXNlOiEwLGlnbm9yZUFuaW1hdGlvbjohMCxpZ25vcmVEaW1lbnNpb25zOiEwLGlnbm9yZUNsZWFyOiEwLG9mZnNldFg6ZSxvZmZzZXRZOmksc2NhbGVXaWR0aDpuLHNjYWxlSGVpZ2h0OnN9O2Zvcih2YXIgbyBpbiBhKWEuaGFzT3duUHJvcGVydHkobykmJihyW29dPWFbb10pO3AodGhpcy5jYW52YXMsdCxyKX0pLHAuX2J1aWxkPW0sdC5leHBvcnRzPXB9KHQ9e2V4cG9ydHM6e319LHQuZXhwb3J0cyksdC5leHBvcnRzfSk7IiwiLypcblx0QmFzZWQgb24gcmdiY29sb3IuanMgYnkgU3RveWFuIFN0ZWZhbm92IDxzc3Rvb0BnbWFpbC5jb20+XG5cdGh0dHA6Ly93d3cucGhwaWVkLmNvbS9yZ2ItY29sb3ItcGFyc2VyLWluLWphdmFzY3JpcHQvXG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGNvbG9yX3N0cmluZykge1xuICAgIHRoaXMub2sgPSBmYWxzZTtcbiAgICB0aGlzLmFscGhhID0gMS4wO1xuXG4gICAgLy8gc3RyaXAgYW55IGxlYWRpbmcgI1xuICAgIGlmIChjb2xvcl9zdHJpbmcuY2hhckF0KDApID09ICcjJykgeyAvLyByZW1vdmUgIyBpZiBhbnlcbiAgICAgICAgY29sb3Jfc3RyaW5nID0gY29sb3Jfc3RyaW5nLnN1YnN0cigxLDYpO1xuICAgIH1cblxuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy5yZXBsYWNlKC8gL2csJycpO1xuICAgIGNvbG9yX3N0cmluZyA9IGNvbG9yX3N0cmluZy50b0xvd2VyQ2FzZSgpO1xuXG4gICAgLy8gYmVmb3JlIGdldHRpbmcgaW50byByZWdleHBzLCB0cnkgc2ltcGxlIG1hdGNoZXNcbiAgICAvLyBhbmQgb3ZlcndyaXRlIHRoZSBpbnB1dFxuICAgIHZhciBzaW1wbGVfY29sb3JzID0ge1xuICAgICAgICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICAgICAgICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICAgICAgICBhcXVhOiAnMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gICAgICAgIGF6dXJlOiAnZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICdmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICdmZmU0YzQnLFxuICAgICAgICBibGFjazogJzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJzAwMDBmZicsXG4gICAgICAgIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICAgICAgICBicm93bjogJ2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gICAgICAgIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICAgICAgICBjb3JhbDogJ2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnZGMxNDNjJyxcbiAgICAgICAgY3lhbjogJzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcwMDhiOGInLFxuICAgICAgICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICdhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICAgICAgICBkYXJra2hha2k6ICdiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgICAgICAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgICAgICAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICAgICAgICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgICAgICAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gICAgICAgIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICAgICAgICBmZWxkc3BhcjogJ2QxOTI3NScsXG4gICAgICAgIGZpcmVicmljazogJ2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICAgICAgICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gICAgICAgIGdvbGQ6ICdmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICAgICAgICBncmF5OiAnODA4MDgwJyxcbiAgICAgICAgZ3JlZW46ICcwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gICAgICAgIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJ2ZmNjliNCcsXG4gICAgICAgIGluZGlhbnJlZCA6ICdjZDVjNWMnLFxuICAgICAgICBpbmRpZ28gOiAnNGIwMDgyJyxcbiAgICAgICAgaXZvcnk6ICdmZmZmZjAnLFxuICAgICAgICBraGFraTogJ2YwZTY4YycsXG4gICAgICAgIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gICAgICAgIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gICAgICAgIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gICAgICAgIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICAgICAgICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICAgICAgICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlYmx1ZTogJzg0NzBmZicsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnNzc4ODk5JyxcbiAgICAgICAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcwMGZmMDAnLFxuICAgICAgICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICAgICAgICBsaW5lbjogJ2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICdmZjAwZmYnLFxuICAgICAgICBtYXJvb246ICc4MDAwMDAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgICAgICAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJzkzNzBkOCcsXG4gICAgICAgIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICAgICAgICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICAgICAgICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gICAgICAgIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICAgICAgICBvbGl2ZTogJzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJ2ZmYTUwMCcsXG4gICAgICAgIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJ2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICAgICAgICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJ2Q4NzA5MycsXG4gICAgICAgIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnY2Q4NTNmJyxcbiAgICAgICAgcGluazogJ2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICdkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgICAgICAgcHVycGxlOiAnODAwMDgwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJzY2MzM5OScsXG4gICAgICAgIHJlZDogJ2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJ2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJzQxNjllMScsXG4gICAgICAgIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gICAgICAgIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICdhMDUyMmQnLFxuICAgICAgICBzaWx2ZXI6ICdjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgICAgICAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgICAgICAgc25vdzogJ2ZmZmFmYScsXG4gICAgICAgIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnZDJiNDhjJyxcbiAgICAgICAgdGVhbDogJzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICdkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICdmZjYzNDcnLFxuICAgICAgICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICdlZTgyZWUnLFxuICAgICAgICB2aW9sZXRyZWQ6ICdkMDIwOTAnLFxuICAgICAgICB3aGVhdDogJ2Y1ZGViMycsXG4gICAgICAgIHdoaXRlOiAnZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJ2ZmZmYwMCcsXG4gICAgICAgIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xuICAgIH07XG4gICAgY29sb3Jfc3RyaW5nID0gc2ltcGxlX2NvbG9yc1tjb2xvcl9zdHJpbmddIHx8IGNvbG9yX3N0cmluZztcbiAgICAvLyBlbWQgb2Ygc2ltcGxlIHR5cGUtaW4gY29sb3JzXG5cbiAgICAvLyBhcnJheSBvZiBjb2xvciBkZWZpbml0aW9uIG9iamVjdHNcbiAgICB2YXIgY29sb3JfZGVmcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9ecmdiYVxcKChcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKihcXGR7MSwzfSksXFxzKigoPzpcXGQ/XFwuKT9cXGQpXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYmEoMTIzLCAyMzQsIDQ1LCAwLjgpJywgJ3JnYmEoMjU1LDIzNCwyNDUsMS4wKSddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0pLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1szXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQoYml0c1s0XSlcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICByZTogL15yZ2JcXCgoXFxkezEsM30pLFxccyooXFxkezEsM30pLFxccyooXFxkezEsM30pXFwpJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJ3JnYigxMjMsIDIzNCwgNDUpJywgJ3JnYigyNTUsMjM0LDI0NSknXSxcbiAgICAgICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChiaXRzKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1syXSksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10pXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgcmU6IC9eKFswLTlhLWZBLUZdezJ9KShbMC05YS1mQS1GXXsyfSkoWzAtOWEtZkEtRl17Mn0pJC8sXG4gICAgICAgICAgICBleGFtcGxlOiBbJyMwMGZmMDAnLCAnMzM2Njk5J10sXG4gICAgICAgICAgICBwcm9jZXNzOiBmdW5jdGlvbiAoYml0cyl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VJbnQoYml0c1sxXSwgMTYpLFxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10sIDE2KVxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlOiAvXihbMC05YS1mQS1GXXsxfSkoWzAtOWEtZkEtRl17MX0pKFswLTlhLWZBLUZdezF9KSQvLFxuICAgICAgICAgICAgZXhhbXBsZTogWycjZmIwJywgJ2YwZiddLFxuICAgICAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGJpdHMpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMV0gKyBiaXRzWzFdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbMl0gKyBiaXRzWzJdLCAxNiksXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlSW50KGJpdHNbM10gKyBiaXRzWzNdLCAxNilcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIC8vIHNlYXJjaCB0aHJvdWdoIHRoZSBkZWZpbml0aW9ucyB0byBmaW5kIGEgbWF0Y2hcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJlID0gY29sb3JfZGVmc1tpXS5yZTtcbiAgICAgICAgdmFyIHByb2Nlc3NvciA9IGNvbG9yX2RlZnNbaV0ucHJvY2VzcztcbiAgICAgICAgdmFyIGJpdHMgPSByZS5leGVjKGNvbG9yX3N0cmluZyk7XG4gICAgICAgIGlmIChiaXRzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbm5lbHMgPSBwcm9jZXNzb3IoYml0cyk7XG4gICAgICAgICAgICB0aGlzLnIgPSBjaGFubmVsc1swXTtcbiAgICAgICAgICAgIHRoaXMuZyA9IGNoYW5uZWxzWzFdO1xuICAgICAgICAgICAgdGhpcy5iID0gY2hhbm5lbHNbMl07XG4gICAgICAgICAgICBpZiAoY2hhbm5lbHMubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxwaGEgPSBjaGFubmVsc1szXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMub2sgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyB2YWxpZGF0ZS9jbGVhbnVwIHZhbHVlc1xuICAgIHRoaXMuciA9ICh0aGlzLnIgPCAwIHx8IGlzTmFOKHRoaXMucikpID8gMCA6ICgodGhpcy5yID4gMjU1KSA/IDI1NSA6IHRoaXMucik7XG4gICAgdGhpcy5nID0gKHRoaXMuZyA8IDAgfHwgaXNOYU4odGhpcy5nKSkgPyAwIDogKCh0aGlzLmcgPiAyNTUpID8gMjU1IDogdGhpcy5nKTtcbiAgICB0aGlzLmIgPSAodGhpcy5iIDwgMCB8fCBpc05hTih0aGlzLmIpKSA/IDAgOiAoKHRoaXMuYiA+IDI1NSkgPyAyNTUgOiB0aGlzLmIpO1xuICAgIHRoaXMuYWxwaGEgPSAodGhpcy5hbHBoYSA8IDApID8gMCA6ICgodGhpcy5hbHBoYSA+IDEuMCB8fCBpc05hTih0aGlzLmFscGhhKSkgPyAxLjAgOiB0aGlzLmFscGhhKTtcblxuICAgIC8vIHNvbWUgZ2V0dGVyc1xuICAgIHRoaXMudG9SR0IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiKCcgKyB0aGlzLnIgKyAnLCAnICsgdGhpcy5nICsgJywgJyArIHRoaXMuYiArICcpJztcbiAgICB9XG4gICAgdGhpcy50b1JHQkEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAncmdiYSgnICsgdGhpcy5yICsgJywgJyArIHRoaXMuZyArICcsICcgKyB0aGlzLmIgKyAnLCAnICsgdGhpcy5hbHBoYSArICcpJztcbiAgICB9XG4gICAgdGhpcy50b0hleCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHIgPSB0aGlzLnIudG9TdHJpbmcoMTYpO1xuICAgICAgICB2YXIgZyA9IHRoaXMuZy50b1N0cmluZygxNik7XG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKHIubGVuZ3RoID09IDEpIHIgPSAnMCcgKyByO1xuICAgICAgICBpZiAoZy5sZW5ndGggPT0gMSkgZyA9ICcwJyArIGc7XG4gICAgICAgIGlmIChiLmxlbmd0aCA9PSAxKSBiID0gJzAnICsgYjtcbiAgICAgICAgcmV0dXJuICcjJyArIHIgKyBnICsgYjtcbiAgICB9XG5cbiAgICAvLyBoZWxwXG4gICAgdGhpcy5nZXRIZWxwWE1MID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBleGFtcGxlcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICAvLyBhZGQgcmVnZXhwc1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbG9yX2RlZnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBleGFtcGxlID0gY29sb3JfZGVmc1tpXS5leGFtcGxlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBleGFtcGxlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZXhhbXBsZXNbZXhhbXBsZXMubGVuZ3RoXSA9IGV4YW1wbGVbal07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gYWRkIHR5cGUtaW4gY29sb3JzXG4gICAgICAgIGZvciAodmFyIHNjIGluIHNpbXBsZV9jb2xvcnMpIHtcbiAgICAgICAgICAgIGV4YW1wbGVzW2V4YW1wbGVzLmxlbmd0aF0gPSBzYztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4bWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICB4bWwuc2V0QXR0cmlidXRlKCdpZCcsICdyZ2Jjb2xvci1leGFtcGxlcycpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4YW1wbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHZhciBsaXN0X2NvbG9yID0gbmV3IFJHQkNvbG9yKGV4YW1wbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhhbXBsZV9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBleGFtcGxlX2Rpdi5zdHlsZS5jc3NUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICdtYXJnaW46IDNweDsgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgKyAnYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2JhY2tncm91bmQ6JyArIGxpc3RfY29sb3IudG9IZXgoKSArICc7ICdcbiAgICAgICAgICAgICAgICAgICAgICAgICsgJ2NvbG9yOicgKyBsaXN0X2NvbG9yLnRvSGV4KClcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgZXhhbXBsZV9kaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ3Rlc3QnKSk7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3RfaXRlbV92YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFxuICAgICAgICAgICAgICAgICAgICAnICcgKyBleGFtcGxlc1tpXSArICcgLT4gJyArIGxpc3RfY29sb3IudG9SR0IoKSArICcgLT4gJyArIGxpc3RfY29sb3IudG9IZXgoKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgbGlzdF9pdGVtLmFwcGVuZENoaWxkKGV4YW1wbGVfZGl2KTtcbiAgICAgICAgICAgICAgICBsaXN0X2l0ZW0uYXBwZW5kQ2hpbGQobGlzdF9pdGVtX3ZhbHVlKTtcbiAgICAgICAgICAgICAgICB4bWwuYXBwZW5kQ2hpbGQobGlzdF9pdGVtKTtcblxuICAgICAgICAgICAgfSBjYXRjaChlKXt9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbDtcblxuICAgIH1cblxufVxuIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSwgdW5pY29ybi9wcmVmZXItcXVlcnktc2VsZWN0b3IgKi9cblxuLyoqXG4qIFN0YWNrQmx1ciAtIGEgZmFzdCBhbG1vc3QgR2F1c3NpYW4gQmx1ciBGb3IgQ2FudmFzXG4qXG4qIEluIGNhc2UgeW91IGZpbmQgdGhpcyBjbGFzcyB1c2VmdWwgLSBlc3BlY2lhbGx5IGluIGNvbW1lcmNpYWwgcHJvamVjdHMgLVxuKiBJIGFtIG5vdCB0b3RhbGx5IHVuaGFwcHkgZm9yIGEgc21hbGwgZG9uYXRpb24gdG8gbXkgUGF5UGFsIGFjY291bnRcbiogbWFyaW9AcXVhc2ltb25kby5kZVxuKlxuKiBPciBzdXBwb3J0IG1lIG9uIGZsYXR0cjpcbioge0BsaW5rIGh0dHBzOi8vZmxhdHRyLmNvbS90aGluZy83Mjc5MS9TdGFja0JsdXItYS1mYXN0LWFsbW9zdC1HYXVzc2lhbi1CbHVyLUVmZmVjdC1mb3ItQ2FudmFzSmF2YXNjcmlwdH0uXG4qXG4qIEBtb2R1bGUgU3RhY2tCbHVyXG4qIEBhdXRob3IgTWFyaW8gS2xpbmdlbWFublxuKiBDb250YWN0OiBtYXJpb0BxdWFzaW1vbmRvLmNvbVxuKiBXZWJzaXRlOiB7QGxpbmsgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXMvU3RhY2tCbHVyRGVtby5odG1sfVxuKiBUd2l0dGVyOiBAcXVhc2ltb25kb1xuKlxuKiBAY29weXJpZ2h0IChjKSAyMDEwIE1hcmlvIEtsaW5nZW1hbm5cbipcbiogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cbiogb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cbiogZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0XG4qIHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLFxuKiBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGVcbiogU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmdcbiogY29uZGl0aW9uczpcbipcbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmVcbiogaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4qXG4qIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsXG4qIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFU1xuKiBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuKiBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVFxuKiBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSxcbiogV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HXG4qIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1JcbiogT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xudmFyIG11bFRhYmxlID0gWzUxMiwgNTEyLCA0NTYsIDUxMiwgMzI4LCA0NTYsIDMzNSwgNTEyLCA0MDUsIDMyOCwgMjcxLCA0NTYsIDM4OCwgMzM1LCAyOTIsIDUxMiwgNDU0LCA0MDUsIDM2NCwgMzI4LCAyOTgsIDI3MSwgNDk2LCA0NTYsIDQyMCwgMzg4LCAzNjAsIDMzNSwgMzEyLCAyOTIsIDI3MywgNTEyLCA0ODIsIDQ1NCwgNDI4LCA0MDUsIDM4MywgMzY0LCAzNDUsIDMyOCwgMzEyLCAyOTgsIDI4NCwgMjcxLCAyNTksIDQ5NiwgNDc1LCA0NTYsIDQzNywgNDIwLCA0MDQsIDM4OCwgMzc0LCAzNjAsIDM0NywgMzM1LCAzMjMsIDMxMiwgMzAyLCAyOTIsIDI4MiwgMjczLCAyNjUsIDUxMiwgNDk3LCA0ODIsIDQ2OCwgNDU0LCA0NDEsIDQyOCwgNDE3LCA0MDUsIDM5NCwgMzgzLCAzNzMsIDM2NCwgMzU0LCAzNDUsIDMzNywgMzI4LCAzMjAsIDMxMiwgMzA1LCAyOTgsIDI5MSwgMjg0LCAyNzgsIDI3MSwgMjY1LCAyNTksIDUwNywgNDk2LCA0ODUsIDQ3NSwgNDY1LCA0NTYsIDQ0NiwgNDM3LCA0MjgsIDQyMCwgNDEyLCA0MDQsIDM5NiwgMzg4LCAzODEsIDM3NCwgMzY3LCAzNjAsIDM1NCwgMzQ3LCAzNDEsIDMzNSwgMzI5LCAzMjMsIDMxOCwgMzEyLCAzMDcsIDMwMiwgMjk3LCAyOTIsIDI4NywgMjgyLCAyNzgsIDI3MywgMjY5LCAyNjUsIDI2MSwgNTEyLCA1MDUsIDQ5NywgNDg5LCA0ODIsIDQ3NSwgNDY4LCA0NjEsIDQ1NCwgNDQ3LCA0NDEsIDQzNSwgNDI4LCA0MjIsIDQxNywgNDExLCA0MDUsIDM5OSwgMzk0LCAzODksIDM4MywgMzc4LCAzNzMsIDM2OCwgMzY0LCAzNTksIDM1NCwgMzUwLCAzNDUsIDM0MSwgMzM3LCAzMzIsIDMyOCwgMzI0LCAzMjAsIDMxNiwgMzEyLCAzMDksIDMwNSwgMzAxLCAyOTgsIDI5NCwgMjkxLCAyODcsIDI4NCwgMjgxLCAyNzgsIDI3NCwgMjcxLCAyNjgsIDI2NSwgMjYyLCAyNTksIDI1NywgNTA3LCA1MDEsIDQ5NiwgNDkxLCA0ODUsIDQ4MCwgNDc1LCA0NzAsIDQ2NSwgNDYwLCA0NTYsIDQ1MSwgNDQ2LCA0NDIsIDQzNywgNDMzLCA0MjgsIDQyNCwgNDIwLCA0MTYsIDQxMiwgNDA4LCA0MDQsIDQwMCwgMzk2LCAzOTIsIDM4OCwgMzg1LCAzODEsIDM3NywgMzc0LCAzNzAsIDM2NywgMzYzLCAzNjAsIDM1NywgMzU0LCAzNTAsIDM0NywgMzQ0LCAzNDEsIDMzOCwgMzM1LCAzMzIsIDMyOSwgMzI2LCAzMjMsIDMyMCwgMzE4LCAzMTUsIDMxMiwgMzEwLCAzMDcsIDMwNCwgMzAyLCAyOTksIDI5NywgMjk0LCAyOTIsIDI4OSwgMjg3LCAyODUsIDI4MiwgMjgwLCAyNzgsIDI3NSwgMjczLCAyNzEsIDI2OSwgMjY3LCAyNjUsIDI2MywgMjYxLCAyNTldO1xudmFyIHNoZ1RhYmxlID0gWzksIDExLCAxMiwgMTMsIDEzLCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNiwgMTcsIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNF07XG4vKiBlc2xpbnQtZW5hYmxlIG1heC1sZW4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ3xIVE1MSW1hZ2VFbGVtZW50fSBpbWdcbiAqIEBwYXJhbSB7c3RyaW5nfEhUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAqIEBwYXJhbSB7RmxvYXR9IHJhZGl1c1xuICogQHBhcmFtIHtib29sZWFufSBibHVyQWxwaGFDaGFubmVsXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5cbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShpbWcsIGNhbnZhcywgcmFkaXVzLCBibHVyQWxwaGFDaGFubmVsKSB7XG4gIGlmICh0eXBlb2YgaW1nID09PSAnc3RyaW5nJykge1xuICAgIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltZyk7XG4gIH1cblxuICBpZiAoIWltZyB8fCAhKCduYXR1cmFsV2lkdGgnIGluIGltZykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdyA9IGltZy5uYXR1cmFsV2lkdGg7XG4gIHZhciBoID0gaW1nLm5hdHVyYWxIZWlnaHQ7XG5cbiAgaWYgKHR5cGVvZiBjYW52YXMgPT09ICdzdHJpbmcnKSB7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzKTtcbiAgfVxuXG4gIGlmICghY2FudmFzIHx8ICEoJ2dldENvbnRleHQnIGluIGNhbnZhcykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjYW52YXMuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICBjYW52YXMud2lkdGggPSB3O1xuICBjYW52YXMuaGVpZ2h0ID0gaDtcbiAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdywgaCk7XG4gIGNvbnRleHQuZHJhd0ltYWdlKGltZywgMCwgMCk7XG5cbiAgaWYgKGlzTmFOKHJhZGl1cykgfHwgcmFkaXVzIDwgMSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChibHVyQWxwaGFDaGFubmVsKSB7XG4gICAgcHJvY2Vzc0NhbnZhc1JHQkEoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3NDYW52YXNSR0IoY2FudmFzLCAwLCAwLCB3LCBoLCByYWRpdXMpO1xuICB9XG59XG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfEhUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gdG9wWFxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BZXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGhlaWdodFxuICogQHRocm93cyB7RXJyb3J8VHlwZUVycm9yfVxuICogQHJldHVybnMge0ltYWdlRGF0YX0gU2VlIHtAbGluayBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9jYW52YXMuaHRtbCNpbWFnZWRhdGF9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCkge1xuICBpZiAodHlwZW9mIGNhbnZhcyA9PT0gJ3N0cmluZycpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXMpO1xuICB9XG5cbiAgaWYgKCFjYW52YXMgfHwgX3R5cGVvZihjYW52YXMpICE9PSAnb2JqZWN0JyB8fCAhKCdnZXRDb250ZXh0JyBpbiBjYW52YXMpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0aW5nIGNhbnZhcyB3aXRoIGBnZXRDb250ZXh0YCBtZXRob2QgJyArICdpbiBwcm9jZXNzQ2FudmFzUkdCKEEpIGNhbGxzIScpO1xuICB9XG5cbiAgdmFyIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICB0cnkge1xuICAgIHJldHVybiBjb250ZXh0LmdldEltYWdlRGF0YSh0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndW5hYmxlIHRvIGFjY2VzcyBpbWFnZSBkYXRhOiAnICsgZSk7XG4gIH1cbn1cbi8qKlxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvcFhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gdG9wWVxuICogQHBhcmFtIHtJbnRlZ2VyfSB3aWR0aFxuICogQHBhcmFtIHtJbnRlZ2VyfSBoZWlnaHRcbiAqIEBwYXJhbSB7RmxvYXR9IHJhZGl1c1xuICogQHJldHVybnMge3VuZGVmaW5lZH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NDYW52YXNSR0JBKGNhbnZhcywgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG4gIGlmIChpc05hTihyYWRpdXMpIHx8IHJhZGl1cyA8IDEpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByYWRpdXMgfD0gMDtcbiAgdmFyIGltYWdlRGF0YSA9IGdldEltYWdlRGF0YUZyb21DYW52YXMoY2FudmFzLCB0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0KTtcbiAgaW1hZ2VEYXRhID0gcHJvY2Vzc0ltYWdlRGF0YVJHQkEoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZKTtcbn1cbi8qKlxuICogQHBhcmFtIHtJbWFnZURhdGF9IGltYWdlRGF0YVxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BYXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvcFlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2lkdGhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge0Zsb2F0fSByYWRpdXNcbiAqIEByZXR1cm5zIHtJbWFnZURhdGF9XG4gKi9cblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCQShpbWFnZURhdGEsIHRvcFgsIHRvcFksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xuICB2YXIgcGl4ZWxzID0gaW1hZ2VEYXRhLmRhdGE7XG4gIHZhciB4LCB5LCBpLCBwLCB5cCwgeWksIHl3LCByU3VtLCBnU3VtLCBiU3VtLCBhU3VtLCByT3V0U3VtLCBnT3V0U3VtLCBiT3V0U3VtLCBhT3V0U3VtLCBySW5TdW0sIGdJblN1bSwgYkluU3VtLCBhSW5TdW0sIHByLCBwZywgcGIsIHBhLCByYnM7XG4gIHZhciBkaXYgPSAyICogcmFkaXVzICsgMTsgLy8gY29uc3QgdzQgPSB3aWR0aCA8PCAyO1xuXG4gIHZhciB3aWR0aE1pbnVzMSA9IHdpZHRoIC0gMTtcbiAgdmFyIGhlaWdodE1pbnVzMSA9IGhlaWdodCAtIDE7XG4gIHZhciByYWRpdXNQbHVzMSA9IHJhZGl1cyArIDE7XG4gIHZhciBzdW1GYWN0b3IgPSByYWRpdXNQbHVzMSAqIChyYWRpdXNQbHVzMSArIDEpIC8gMjtcbiAgdmFyIHN0YWNrU3RhcnQgPSBuZXcgQmx1clN0YWNrKCk7XG4gIHZhciBzdGFjayA9IHN0YWNrU3RhcnQ7XG4gIHZhciBzdGFja0VuZDtcblxuICBmb3IgKGkgPSAxOyBpIDwgZGl2OyBpKyspIHtcbiAgICBzdGFjayA9IHN0YWNrLm5leHQgPSBuZXcgQmx1clN0YWNrKCk7XG5cbiAgICBpZiAoaSA9PT0gcmFkaXVzUGx1czEpIHtcbiAgICAgIHN0YWNrRW5kID0gc3RhY2s7XG4gICAgfVxuICB9XG5cbiAgc3RhY2submV4dCA9IHN0YWNrU3RhcnQ7XG4gIHZhciBzdGFja0luID0gbnVsbDtcbiAgdmFyIHN0YWNrT3V0ID0gbnVsbDtcbiAgeXcgPSB5aSA9IDA7XG4gIHZhciBtdWxTdW0gPSBtdWxUYWJsZVtyYWRpdXNdO1xuICB2YXIgc2hnU3VtID0gc2hnVGFibGVbcmFkaXVzXTtcblxuICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICBySW5TdW0gPSBnSW5TdW0gPSBiSW5TdW0gPSBhSW5TdW0gPSByU3VtID0gZ1N1bSA9IGJTdW0gPSBhU3VtID0gMDtcbiAgICByT3V0U3VtID0gcmFkaXVzUGx1czEgKiAocHIgPSBwaXhlbHNbeWldKTtcbiAgICBnT3V0U3VtID0gcmFkaXVzUGx1czEgKiAocGcgPSBwaXhlbHNbeWkgKyAxXSk7XG4gICAgYk91dFN1bSA9IHJhZGl1c1BsdXMxICogKHBiID0gcGl4ZWxzW3lpICsgMl0pO1xuICAgIGFPdXRTdW0gPSByYWRpdXNQbHVzMSAqIChwYSA9IHBpeGVsc1t5aSArIDNdKTtcbiAgICByU3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgIGdTdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgYlN1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICBhU3VtICs9IHN1bUZhY3RvciAqIHBhO1xuICAgIHN0YWNrID0gc3RhY2tTdGFydDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrKSB7XG4gICAgICBzdGFjay5yID0gcHI7XG4gICAgICBzdGFjay5nID0gcGc7XG4gICAgICBzdGFjay5iID0gcGI7XG4gICAgICBzdGFjay5hID0gcGE7XG4gICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG4gICAgfVxuXG4gICAgZm9yIChpID0gMTsgaSA8IHJhZGl1c1BsdXMxOyBpKyspIHtcbiAgICAgIHAgPSB5aSArICgod2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpKSA8PCAyKTtcbiAgICAgIHJTdW0gKz0gKHN0YWNrLnIgPSBwciA9IHBpeGVsc1twXSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgIGdTdW0gKz0gKHN0YWNrLmcgPSBwZyA9IHBpeGVsc1twICsgMV0pICogcmJzO1xuICAgICAgYlN1bSArPSAoc3RhY2suYiA9IHBiID0gcGl4ZWxzW3AgKyAyXSkgKiByYnM7XG4gICAgICBhU3VtICs9IChzdGFjay5hID0gcGEgPSBwaXhlbHNbcCArIDNdKSAqIHJicztcbiAgICAgIHJJblN1bSArPSBwcjtcbiAgICAgIGdJblN1bSArPSBwZztcbiAgICAgIGJJblN1bSArPSBwYjtcbiAgICAgIGFJblN1bSArPSBwYTtcbiAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICB9XG5cbiAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuXG4gICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcbiAgICAgIHBpeGVsc1t5aSArIDNdID0gcGEgPSBhU3VtICogbXVsU3VtID4+IHNoZ1N1bTtcblxuICAgICAgaWYgKHBhICE9PSAwKSB7XG4gICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgIHBpeGVsc1t5aV0gPSAoclN1bSAqIG11bFN1bSA+PiBzaGdTdW0pICogcGE7XG4gICAgICAgIHBpeGVsc1t5aSArIDFdID0gKGdTdW0gKiBtdWxTdW0gPj4gc2hnU3VtKSAqIHBhO1xuICAgICAgICBwaXhlbHNbeWkgKyAyXSA9IChiU3VtICogbXVsU3VtID4+IHNoZ1N1bSkgKiBwYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpeGVsc1t5aV0gPSBwaXhlbHNbeWkgKyAxXSA9IHBpeGVsc1t5aSArIDJdID0gMDtcbiAgICAgIH1cblxuICAgICAgclN1bSAtPSByT3V0U3VtO1xuICAgICAgZ1N1bSAtPSBnT3V0U3VtO1xuICAgICAgYlN1bSAtPSBiT3V0U3VtO1xuICAgICAgYVN1bSAtPSBhT3V0U3VtO1xuICAgICAgck91dFN1bSAtPSBzdGFja0luLnI7XG4gICAgICBnT3V0U3VtIC09IHN0YWNrSW4uZztcbiAgICAgIGJPdXRTdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgYU91dFN1bSAtPSBzdGFja0luLmE7XG4gICAgICBwID0geXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkgPDwgMjtcbiAgICAgIHJJblN1bSArPSBzdGFja0luLnIgPSBwaXhlbHNbcF07XG4gICAgICBnSW5TdW0gKz0gc3RhY2tJbi5nID0gcGl4ZWxzW3AgKyAxXTtcbiAgICAgIGJJblN1bSArPSBzdGFja0luLmIgPSBwaXhlbHNbcCArIDJdO1xuICAgICAgYUluU3VtICs9IHN0YWNrSW4uYSA9IHBpeGVsc1twICsgM107XG4gICAgICByU3VtICs9IHJJblN1bTtcbiAgICAgIGdTdW0gKz0gZ0luU3VtO1xuICAgICAgYlN1bSArPSBiSW5TdW07XG4gICAgICBhU3VtICs9IGFJblN1bTtcbiAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG4gICAgICByT3V0U3VtICs9IHByID0gc3RhY2tPdXQucjtcbiAgICAgIGdPdXRTdW0gKz0gcGcgPSBzdGFja091dC5nO1xuICAgICAgYk91dFN1bSArPSBwYiA9IHN0YWNrT3V0LmI7XG4gICAgICBhT3V0U3VtICs9IHBhID0gc3RhY2tPdXQuYTtcbiAgICAgIHJJblN1bSAtPSBwcjtcbiAgICAgIGdJblN1bSAtPSBwZztcbiAgICAgIGJJblN1bSAtPSBwYjtcbiAgICAgIGFJblN1bSAtPSBwYTtcbiAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcbiAgICAgIHlpICs9IDQ7XG4gICAgfVxuXG4gICAgeXcgKz0gd2lkdGg7XG4gIH1cblxuICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgIGdJblN1bSA9IGJJblN1bSA9IGFJblN1bSA9IHJJblN1bSA9IGdTdW0gPSBiU3VtID0gYVN1bSA9IHJTdW0gPSAwO1xuICAgIHlpID0geCA8PCAyO1xuICAgIHJPdXRTdW0gPSByYWRpdXNQbHVzMSAqIChwciA9IHBpeGVsc1t5aV0pO1xuICAgIGdPdXRTdW0gPSByYWRpdXNQbHVzMSAqIChwZyA9IHBpeGVsc1t5aSArIDFdKTtcbiAgICBiT3V0U3VtID0gcmFkaXVzUGx1czEgKiAocGIgPSBwaXhlbHNbeWkgKyAyXSk7XG4gICAgYU91dFN1bSA9IHJhZGl1c1BsdXMxICogKHBhID0gcGl4ZWxzW3lpICsgM10pO1xuICAgIHJTdW0gKz0gc3VtRmFjdG9yICogcHI7XG4gICAgZ1N1bSArPSBzdW1GYWN0b3IgKiBwZztcbiAgICBiU3VtICs9IHN1bUZhY3RvciAqIHBiO1xuICAgIGFTdW0gKz0gc3VtRmFjdG9yICogcGE7XG4gICAgc3RhY2sgPSBzdGFja1N0YXJ0O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHJhZGl1c1BsdXMxOyBpKyspIHtcbiAgICAgIHN0YWNrLnIgPSBwcjtcbiAgICAgIHN0YWNrLmcgPSBwZztcbiAgICAgIHN0YWNrLmIgPSBwYjtcbiAgICAgIHN0YWNrLmEgPSBwYTtcbiAgICAgIHN0YWNrID0gc3RhY2submV4dDtcbiAgICB9XG5cbiAgICB5cCA9IHdpZHRoO1xuXG4gICAgZm9yIChpID0gMTsgaSA8PSByYWRpdXM7IGkrKykge1xuICAgICAgeWkgPSB5cCArIHggPDwgMjtcbiAgICAgIHJTdW0gKz0gKHN0YWNrLnIgPSBwciA9IHBpeGVsc1t5aV0pICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICBnU3VtICs9IChzdGFjay5nID0gcGcgPSBwaXhlbHNbeWkgKyAxXSkgKiByYnM7XG4gICAgICBiU3VtICs9IChzdGFjay5iID0gcGIgPSBwaXhlbHNbeWkgKyAyXSkgKiByYnM7XG4gICAgICBhU3VtICs9IChzdGFjay5hID0gcGEgPSBwaXhlbHNbeWkgKyAzXSkgKiByYnM7XG4gICAgICBySW5TdW0gKz0gcHI7XG4gICAgICBnSW5TdW0gKz0gcGc7XG4gICAgICBiSW5TdW0gKz0gcGI7XG4gICAgICBhSW5TdW0gKz0gcGE7XG4gICAgICBzdGFjayA9IHN0YWNrLm5leHQ7XG5cbiAgICAgIGlmIChpIDwgaGVpZ2h0TWludXMxKSB7XG4gICAgICAgIHlwICs9IHdpZHRoO1xuICAgICAgfVxuICAgIH1cblxuICAgIHlpID0geDtcbiAgICBzdGFja0luID0gc3RhY2tTdGFydDtcbiAgICBzdGFja091dCA9IHN0YWNrRW5kO1xuXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XG4gICAgICBwID0geWkgPDwgMjtcbiAgICAgIHBpeGVsc1twICsgM10gPSBwYSA9IGFTdW0gKiBtdWxTdW0gPj4gc2hnU3VtO1xuXG4gICAgICBpZiAocGEgPiAwKSB7XG4gICAgICAgIHBhID0gMjU1IC8gcGE7XG4gICAgICAgIHBpeGVsc1twXSA9IChyU3VtICogbXVsU3VtID4+IHNoZ1N1bSkgKiBwYTtcbiAgICAgICAgcGl4ZWxzW3AgKyAxXSA9IChnU3VtICogbXVsU3VtID4+IHNoZ1N1bSkgKiBwYTtcbiAgICAgICAgcGl4ZWxzW3AgKyAyXSA9IChiU3VtICogbXVsU3VtID4+IHNoZ1N1bSkgKiBwYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBpeGVsc1twXSA9IHBpeGVsc1twICsgMV0gPSBwaXhlbHNbcCArIDJdID0gMDtcbiAgICAgIH1cblxuICAgICAgclN1bSAtPSByT3V0U3VtO1xuICAgICAgZ1N1bSAtPSBnT3V0U3VtO1xuICAgICAgYlN1bSAtPSBiT3V0U3VtO1xuICAgICAgYVN1bSAtPSBhT3V0U3VtO1xuICAgICAgck91dFN1bSAtPSBzdGFja0luLnI7XG4gICAgICBnT3V0U3VtIC09IHN0YWNrSW4uZztcbiAgICAgIGJPdXRTdW0gLT0gc3RhY2tJbi5iO1xuICAgICAgYU91dFN1bSAtPSBzdGFja0luLmE7XG4gICAgICBwID0geCArICgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoIDw8IDI7XG4gICAgICByU3VtICs9IHJJblN1bSArPSBzdGFja0luLnIgPSBwaXhlbHNbcF07XG4gICAgICBnU3VtICs9IGdJblN1bSArPSBzdGFja0luLmcgPSBwaXhlbHNbcCArIDFdO1xuICAgICAgYlN1bSArPSBiSW5TdW0gKz0gc3RhY2tJbi5iID0gcGl4ZWxzW3AgKyAyXTtcbiAgICAgIGFTdW0gKz0gYUluU3VtICs9IHN0YWNrSW4uYSA9IHBpeGVsc1twICsgM107XG4gICAgICBzdGFja0luID0gc3RhY2tJbi5uZXh0O1xuICAgICAgck91dFN1bSArPSBwciA9IHN0YWNrT3V0LnI7XG4gICAgICBnT3V0U3VtICs9IHBnID0gc3RhY2tPdXQuZztcbiAgICAgIGJPdXRTdW0gKz0gcGIgPSBzdGFja091dC5iO1xuICAgICAgYU91dFN1bSArPSBwYSA9IHN0YWNrT3V0LmE7XG4gICAgICBySW5TdW0gLT0gcHI7XG4gICAgICBnSW5TdW0gLT0gcGc7XG4gICAgICBiSW5TdW0gLT0gcGI7XG4gICAgICBhSW5TdW0gLT0gcGE7XG4gICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG4gICAgICB5aSArPSB3aWR0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuLyoqXG4gKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXNcbiAqIEBwYXJhbSB7SW50ZWdlcn0gdG9wWFxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BZXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHdpZHRoXG4gKiBAcGFyYW0ge0ludGVnZXJ9IGhlaWdodFxuICogQHBhcmFtIHtGbG9hdH0gcmFkaXVzXG4gKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuICovXG5cblxuZnVuY3Rpb24gcHJvY2Vzc0NhbnZhc1JHQihjYW52YXMsIHRvcFgsIHRvcFksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cykge1xuICBpZiAoaXNOYU4ocmFkaXVzKSB8fCByYWRpdXMgPCAxKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmFkaXVzIHw9IDA7XG4gIHZhciBpbWFnZURhdGEgPSBnZXRJbWFnZURhdGFGcm9tQ2FudmFzKGNhbnZhcywgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCk7XG4gIGltYWdlRGF0YSA9IHByb2Nlc3NJbWFnZURhdGFSR0IoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZLCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMpO1xuICBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKS5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCB0b3BYLCB0b3BZKTtcbn1cbi8qKlxuICogQHBhcmFtIHtJbWFnZURhdGF9IGltYWdlRGF0YVxuICogQHBhcmFtIHtJbnRlZ2VyfSB0b3BYXG4gKiBAcGFyYW0ge0ludGVnZXJ9IHRvcFlcbiAqIEBwYXJhbSB7SW50ZWdlcn0gd2lkdGhcbiAqIEBwYXJhbSB7SW50ZWdlcn0gaGVpZ2h0XG4gKiBAcGFyYW0ge0Zsb2F0fSByYWRpdXNcbiAqIEByZXR1cm5zIHtJbWFnZURhdGF9XG4gKi9cblxuXG5mdW5jdGlvbiBwcm9jZXNzSW1hZ2VEYXRhUkdCKGltYWdlRGF0YSwgdG9wWCwgdG9wWSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzKSB7XG4gIHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcbiAgdmFyIHgsIHksIGksIHAsIHlwLCB5aSwgeXcsIHJTdW0sIGdTdW0sIGJTdW0sIHJPdXRTdW0sIGdPdXRTdW0sIGJPdXRTdW0sIHJJblN1bSwgZ0luU3VtLCBiSW5TdW0sIHByLCBwZywgcGIsIHJicztcbiAgdmFyIGRpdiA9IDIgKiByYWRpdXMgKyAxOyAvLyBjb25zdCB3NCA9IHdpZHRoIDw8IDI7XG5cbiAgdmFyIHdpZHRoTWludXMxID0gd2lkdGggLSAxO1xuICB2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcbiAgdmFyIHJhZGl1c1BsdXMxID0gcmFkaXVzICsgMTtcbiAgdmFyIHN1bUZhY3RvciA9IHJhZGl1c1BsdXMxICogKHJhZGl1c1BsdXMxICsgMSkgLyAyO1xuICB2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcbiAgdmFyIHN0YWNrID0gc3RhY2tTdGFydDtcbiAgdmFyIHN0YWNrRW5kO1xuXG4gIGZvciAoaSA9IDE7IGkgPCBkaXY7IGkrKykge1xuICAgIHN0YWNrID0gc3RhY2submV4dCA9IG5ldyBCbHVyU3RhY2soKTtcblxuICAgIGlmIChpID09PSByYWRpdXNQbHVzMSkge1xuICAgICAgc3RhY2tFbmQgPSBzdGFjaztcbiAgICB9XG4gIH1cblxuICBzdGFjay5uZXh0ID0gc3RhY2tTdGFydDtcbiAgdmFyIHN0YWNrSW4gPSBudWxsO1xuICB2YXIgc3RhY2tPdXQgPSBudWxsO1xuICB5dyA9IHlpID0gMDtcbiAgdmFyIG11bFN1bSA9IG11bFRhYmxlW3JhZGl1c107XG4gIHZhciBzaGdTdW0gPSBzaGdUYWJsZVtyYWRpdXNdO1xuXG4gIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xuICAgIHJJblN1bSA9IGdJblN1bSA9IGJJblN1bSA9IHJTdW0gPSBnU3VtID0gYlN1bSA9IDA7XG4gICAgck91dFN1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgZ091dFN1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpICsgMV0pO1xuICAgIGJPdXRTdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSArIDJdKTtcbiAgICByU3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgIGdTdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgYlN1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKykge1xuICAgICAgc3RhY2suciA9IHByO1xuICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgIH1cblxuICAgIGZvciAoaSA9IDE7IGkgPCByYWRpdXNQbHVzMTsgaSsrKSB7XG4gICAgICBwID0geWkgKyAoKHdpZHRoTWludXMxIDwgaSA/IHdpZHRoTWludXMxIDogaSkgPDwgMik7XG4gICAgICByU3VtICs9IChzdGFjay5yID0gcHIgPSBwaXhlbHNbcF0pICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XG4gICAgICBnU3VtICs9IChzdGFjay5nID0gcGcgPSBwaXhlbHNbcCArIDFdKSAqIHJicztcbiAgICAgIGJTdW0gKz0gKHN0YWNrLmIgPSBwYiA9IHBpeGVsc1twICsgMl0pICogcmJzO1xuICAgICAgckluU3VtICs9IHByO1xuICAgICAgZ0luU3VtICs9IHBnO1xuICAgICAgYkluU3VtICs9IHBiO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgIH1cblxuICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG5cbiAgICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgICAgcGl4ZWxzW3lpXSA9IHJTdW0gKiBtdWxTdW0gPj4gc2hnU3VtO1xuICAgICAgcGl4ZWxzW3lpICsgMV0gPSBnU3VtICogbXVsU3VtID4+IHNoZ1N1bTtcbiAgICAgIHBpeGVsc1t5aSArIDJdID0gYlN1bSAqIG11bFN1bSA+PiBzaGdTdW07XG4gICAgICByU3VtIC09IHJPdXRTdW07XG4gICAgICBnU3VtIC09IGdPdXRTdW07XG4gICAgICBiU3VtIC09IGJPdXRTdW07XG4gICAgICByT3V0U3VtIC09IHN0YWNrSW4ucjtcbiAgICAgIGdPdXRTdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgYk91dFN1bSAtPSBzdGFja0luLmI7XG4gICAgICBwID0geXcgKyAoKHAgPSB4ICsgcmFkaXVzICsgMSkgPCB3aWR0aE1pbnVzMSA/IHAgOiB3aWR0aE1pbnVzMSkgPDwgMjtcbiAgICAgIHJJblN1bSArPSBzdGFja0luLnIgPSBwaXhlbHNbcF07XG4gICAgICBnSW5TdW0gKz0gc3RhY2tJbi5nID0gcGl4ZWxzW3AgKyAxXTtcbiAgICAgIGJJblN1bSArPSBzdGFja0luLmIgPSBwaXhlbHNbcCArIDJdO1xuICAgICAgclN1bSArPSBySW5TdW07XG4gICAgICBnU3VtICs9IGdJblN1bTtcbiAgICAgIGJTdW0gKz0gYkluU3VtO1xuICAgICAgc3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcbiAgICAgIHJPdXRTdW0gKz0gcHIgPSBzdGFja091dC5yO1xuICAgICAgZ091dFN1bSArPSBwZyA9IHN0YWNrT3V0Lmc7XG4gICAgICBiT3V0U3VtICs9IHBiID0gc3RhY2tPdXQuYjtcbiAgICAgIHJJblN1bSAtPSBwcjtcbiAgICAgIGdJblN1bSAtPSBwZztcbiAgICAgIGJJblN1bSAtPSBwYjtcbiAgICAgIHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcbiAgICAgIHlpICs9IDQ7XG4gICAgfVxuXG4gICAgeXcgKz0gd2lkdGg7XG4gIH1cblxuICBmb3IgKHggPSAwOyB4IDwgd2lkdGg7IHgrKykge1xuICAgIGdJblN1bSA9IGJJblN1bSA9IHJJblN1bSA9IGdTdW0gPSBiU3VtID0gclN1bSA9IDA7XG4gICAgeWkgPSB4IDw8IDI7XG4gICAgck91dFN1bSA9IHJhZGl1c1BsdXMxICogKHByID0gcGl4ZWxzW3lpXSk7XG4gICAgZ091dFN1bSA9IHJhZGl1c1BsdXMxICogKHBnID0gcGl4ZWxzW3lpICsgMV0pO1xuICAgIGJPdXRTdW0gPSByYWRpdXNQbHVzMSAqIChwYiA9IHBpeGVsc1t5aSArIDJdKTtcbiAgICByU3VtICs9IHN1bUZhY3RvciAqIHByO1xuICAgIGdTdW0gKz0gc3VtRmFjdG9yICogcGc7XG4gICAgYlN1bSArPSBzdW1GYWN0b3IgKiBwYjtcbiAgICBzdGFjayA9IHN0YWNrU3RhcnQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKykge1xuICAgICAgc3RhY2suciA9IHByO1xuICAgICAgc3RhY2suZyA9IHBnO1xuICAgICAgc3RhY2suYiA9IHBiO1xuICAgICAgc3RhY2sgPSBzdGFjay5uZXh0O1xuICAgIH1cblxuICAgIHlwID0gd2lkdGg7XG5cbiAgICBmb3IgKGkgPSAxOyBpIDw9IHJhZGl1czsgaSsrKSB7XG4gICAgICB5aSA9IHlwICsgeCA8PCAyO1xuICAgICAgclN1bSArPSAoc3RhY2suciA9IHByID0gcGl4ZWxzW3lpXSkgKiAocmJzID0gcmFkaXVzUGx1czEgLSBpKTtcbiAgICAgIGdTdW0gKz0gKHN0YWNrLmcgPSBwZyA9IHBpeGVsc1t5aSArIDFdKSAqIHJicztcbiAgICAgIGJTdW0gKz0gKHN0YWNrLmIgPSBwYiA9IHBpeGVsc1t5aSArIDJdKSAqIHJicztcbiAgICAgIHJJblN1bSArPSBwcjtcbiAgICAgIGdJblN1bSArPSBwZztcbiAgICAgIGJJblN1bSArPSBwYjtcbiAgICAgIHN0YWNrID0gc3RhY2submV4dDtcblxuICAgICAgaWYgKGkgPCBoZWlnaHRNaW51czEpIHtcbiAgICAgICAgeXAgKz0gd2lkdGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgeWkgPSB4O1xuICAgIHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xuICAgIHN0YWNrT3V0ID0gc3RhY2tFbmQ7XG5cbiAgICBmb3IgKHkgPSAwOyB5IDwgaGVpZ2h0OyB5KyspIHtcbiAgICAgIHAgPSB5aSA8PCAyO1xuICAgICAgcGl4ZWxzW3BdID0gclN1bSAqIG11bFN1bSA+PiBzaGdTdW07XG4gICAgICBwaXhlbHNbcCArIDFdID0gZ1N1bSAqIG11bFN1bSA+PiBzaGdTdW07XG4gICAgICBwaXhlbHNbcCArIDJdID0gYlN1bSAqIG11bFN1bSA+PiBzaGdTdW07XG4gICAgICByU3VtIC09IHJPdXRTdW07XG4gICAgICBnU3VtIC09IGdPdXRTdW07XG4gICAgICBiU3VtIC09IGJPdXRTdW07XG4gICAgICByT3V0U3VtIC09IHN0YWNrSW4ucjtcbiAgICAgIGdPdXRTdW0gLT0gc3RhY2tJbi5nO1xuICAgICAgYk91dFN1bSAtPSBzdGFja0luLmI7XG4gICAgICBwID0geCArICgocCA9IHkgKyByYWRpdXNQbHVzMSkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxKSAqIHdpZHRoIDw8IDI7XG4gICAgICByU3VtICs9IHJJblN1bSArPSBzdGFja0luLnIgPSBwaXhlbHNbcF07XG4gICAgICBnU3VtICs9IGdJblN1bSArPSBzdGFja0luLmcgPSBwaXhlbHNbcCArIDFdO1xuICAgICAgYlN1bSArPSBiSW5TdW0gKz0gc3RhY2tJbi5iID0gcGl4ZWxzW3AgKyAyXTtcbiAgICAgIHN0YWNrSW4gPSBzdGFja0luLm5leHQ7XG4gICAgICByT3V0U3VtICs9IHByID0gc3RhY2tPdXQucjtcbiAgICAgIGdPdXRTdW0gKz0gcGcgPSBzdGFja091dC5nO1xuICAgICAgYk91dFN1bSArPSBwYiA9IHN0YWNrT3V0LmI7XG4gICAgICBySW5TdW0gLT0gcHI7XG4gICAgICBnSW5TdW0gLT0gcGc7XG4gICAgICBiSW5TdW0gLT0gcGI7XG4gICAgICBzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XG4gICAgICB5aSArPSB3aWR0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW1hZ2VEYXRhO1xufVxuLyoqXG4gKlxuICovXG5cblxudmFyIEJsdXJTdGFjayA9XG4vKipcbiAqIFNldCBwcm9wZXJ0aWVzLlxuICovXG5mdW5jdGlvbiBCbHVyU3RhY2soKSB7XG4gIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCbHVyU3RhY2spO1xuXG4gIHRoaXMuciA9IDA7XG4gIHRoaXMuZyA9IDA7XG4gIHRoaXMuYiA9IDA7XG4gIHRoaXMuYSA9IDA7XG4gIHRoaXMubmV4dCA9IG51bGw7XG59O1xuXG5leHBvcnQgeyBCbHVyU3RhY2ssIHByb2Nlc3NDYW52YXNSR0IgYXMgY2FudmFzUkdCLCBwcm9jZXNzQ2FudmFzUkdCQSBhcyBjYW52YXNSR0JBLCBwcm9jZXNzSW1hZ2UgYXMgaW1hZ2UsIHByb2Nlc3NJbWFnZURhdGFSR0IgYXMgaW1hZ2VEYXRhUkdCLCBwcm9jZXNzSW1hZ2VEYXRhUkdCQSBhcyBpbWFnZURhdGFSR0JBIH07XG4iXSwic291cmNlUm9vdCI6IiJ9