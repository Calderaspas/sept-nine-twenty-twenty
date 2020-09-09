! function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
  }(this, (function(e) {
      ! function() {
          "use strict";
  
          function t(t, o) {
              if (this.el = t, this.$el = e(t), this.s = e.extend({}, s, o), this.s.dynamic && "undefined" !== this.s.dynamicEl && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
              return this.modules = {}, 
              this.lGalleryOn = !1, 
              this.lgBusy = !1, 
              this.hideBartimeout = !1, 
              this.isTouch = "ontouchstart" in document.documentElement, 
              this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1), this.s.dynamic ? this.$items = this.s.dynamicEl : "this" === this.s.selector ? this.$items = this.$el : "" !== this.s.selector ? this.s.selectWithin ? this.$items = e(this.s.selectWithin).find(this.s.selector) : this.$items = this.$el.find(e(this.s.selector)) : this.$items = this.$el.children(), 
              this.$slide = "", 
              this.$outer = "", 
              this.init(), 
              this
          }
          var s = {
              mode: "lg-slide",
              cssEasing: "ease",
              easing: "linear",
              speed: 600,
              height: "100%",
              width: "100%",
              addClass: "",
              startClass: "lg-fade-out",
              backdropDuration: 150,
              hideBarsDelay: 3800,
              useLeft: !1,
              closable: !1,
              loop: !0,
              actualSize: !1,
              escKey: !1,
              keyPress: !0,
              controls: !0,
              zoom: !0,
              scale: 1,
              slideEndAnimatoin: !1,
              hideControlOnEnd: !1,
              mousewheel: !0,
              getCaptionFromTitleOrAlt: !1,
              appendSubHtmlTo: "",
              subHtmlSelectorRelative: !1,
              preload: 1,
              showAfterLoad: !0,
              selector: "",
              fullScreen: !1,
              selectWithin: "",
              nextHtml: "",
              prevHtml: "",
              index: !1,
              iframeMaxWidth: "100%",
              download: !1,
              autoplayControls: !1,
              counter: !0,
              appendCounterTo: ".lg-toogle-thumb",
              swipeThreshold: 50,
              enableSwipe: !0,
              enableDrag: !0,
              dynamic: !0,
              dynamicEl: [{
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-01.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-01.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-02.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-02.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-03.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-03.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-04.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-04.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-05.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-05.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-06.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-06.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-07.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-07.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-08.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-08.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-09.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-09.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-10.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-10.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-11.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-11.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-12.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-12.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-13.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-13.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-14.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-14.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-15.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-15.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-16.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-16.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-17.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-17.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-18.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-18.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-19.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-19.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-20.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-20.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-21.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-21.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-22.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-22.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-23.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-23.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-24.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-24.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-25.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-25.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-26.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-26.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-27.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-27.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-28.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-28.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-29.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-29.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-30.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-30.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-31.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-31.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-32.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-32.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-33.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-33.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-34.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-34.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-35.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-35.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-36.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-36.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-37.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-37.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-38.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-38.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-39.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-39.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-40.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-40.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-41.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-41.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-42.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-42.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-43.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-43.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-44.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-44.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-45.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-45.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-46.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-46.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-47.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-47.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-48.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-48.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-49.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-49.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-50.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-50.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-51.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-51.svg"
              }, {
                  thumb: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/app/image-assets/thumbnails/thumb-52.jpg",
                  src: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile//app/image-assets/svg/page-52.svg"
              }],
              hash: !0,
              galleryId: 1,
              pager: !1,
              toggleThumb: !1,
              animateThumb: !0,
              enableThumbSwipe: !0,
              showThumbByDefault: !1
          };
          t.prototype.init = function() {
              var t = this;
              t.s.preload > t.$items.length && (t.s.preload = t.$items.length);
              var s = window.location.hash;
              s.indexOf("lg=" + this.s.galleryId) > 0 && (t.index = parseInt(s.split("&slide=")[1], 10), e("body").addClass("lg-from-hash"), e("body").hasClass("lg-on") || (setTimeout((function() {
                  t.build(t.index)
              })), e("body").addClass("lg-on"))), t.s.dynamic ? (t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || 0, e("body").hasClass("lg-on") || setTimeout((function() {
                  t.build(t.index), e("body").addClass("lg-on")
              }))) : t.$items.on("click.lgcustom", (function(s) {
                  try {
                      s.preventDefault(), s.preventDefault()
                  } catch (e) {
                      s.returnValue = !1
                  }
                  t.$el.trigger("onBeforeOpen.lg"), t.index = t.s.index || t.$items.index(this), e("body").hasClass("lg-on") || (t.build(t.index), e("body").addClass("lg-on"))
              }))
          }, t.prototype.build = function(t) {
              var s = this;
              s.structure(), e.each(e.fn.lightGallery.modules, (function(t) {
                  s.modules[t] = new e.fn.lightGallery.modules[t](s.el)
              })), s.slide(t, !1, !1, !1), s.s.keyPress && s.keyPress(), s.$items.length > 1 ? (s.arrow(), setTimeout((function() {
                  s.enableDrag(), s.enableSwipe()
              }), 50), s.s.mousewheel && s.mousewheel()) : s.$slide.on("click.lg", (function() {
                  s.$el.trigger("onSlideClick.lg")
              })), s.counter(), s.closeGallery(), s.$el.trigger("onAfterOpen.lg"), s.$outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                  s.$outer.removeClass("lg-hide-items"), clearTimeout(s.hideBartimeout), s.hideBartimeout = setTimeout((function() {
                      s.$outer.addClass("lg-hide-items")
                  }), s.s.hideBarsDelay)
              })), s.$outer.trigger("mousemove.lg")
          }, t.prototype.structure = function() {
              var t, s = "",
                  o = "",
                  i = 0,
                  a = "",
                  l = this;
              for (e("body").append('<div class="lg-backdrop"></div>'), e(".lg-backdrop").css("transition-duration", this.s.backdropDuration + "ms"), i = 0; i < this.$items.length; i++) s += '<div class="lg-item"></div>';
              if (this.s.controls && this.$items.length > 1 && (o = '<div class="lg-actions"><button class="lg-prev lg-icon">' + this.s.prevHtml + '</button><button class="lg-next lg-icon">' + this.s.nextHtml + "</button></div>"), ".lg-sub-html" === this.s.appendSubHtmlTo && (a = '<div class="lg-sub-html"></div>'), t = '<div class="lg-outer ' + this.s.addClass + " " + this.s.startClass + '"><div class="lg" style="width:' + this.s.width + "; height:" + this.s.height + '"><div class="lg-inner">' + s + '</div><a class="caldera-link"><span class="lg-icon" id="lg-link-home"></span></a><div class="lg-toolbar lg-group"><span href="" class="lg-icon pdf" id="getBrochure"></span></div>' + o + a + "</div></div>", e("body").append(t), this.$outer = e(".lg-outer"), this.$slide = this.$outer.find(".lg-item"), this.s.useLeft ? (this.$outer.addClass("lg-use-left"), this.s.mode = "lg-slide") : this.$outer.addClass("lg-use-css3"), l.setTop(), e(window).on("resize.lg orientationchange.lg", (function() {
                      setTimeout((function() {
                          l.setTop()
                      }), 100)
                  })), this.$slide.eq(this.index).addClass("lg-current"), this.doCss() ? this.$outer.addClass("lg-css3") : (this.$outer.addClass("lg-css"), this.s.speed = 0), this.$outer.addClass(this.s.mode), this.s.enableDrag && this.$items.length > 1 && this.$outer.addClass("lg-grab"), this.s.showAfterLoad && this.$outer.addClass("lg-show-after-load"), this.doCss()) {
                  var r = this.$outer.find(".lg-inner");
                  r.css("transition-timing-function", this.s.cssEasing), r.css("transition-duration", this.s.speed + "ms")
              }
              setTimeout((function() {
                  e(".caldera-link").attr({
                      href: "https://calderaspas.com",
                      target: "_blank",
                      title: "Link to CalderaSpas.com",
                      alt: "Link to CalderaSpas.com"
                  })
              })), setTimeout((function() {
                  e("#getBrochure").attr("type", "button"), e("#getBrochure").on("click tap", (function() {
                      axios({
                          url: "./wp-content/themes/prelude-child/assets/2020-brochure-mobile/caldera-spas-2020-brochure.pdf",
                          method: "GET",
                          responseType: "blob"
                      }).then((function(response) {
                          var FxiOS = navigator.userAgent.match("FxiOS"),
                              CriOS = navigator.userAgent.match("CriOS"),
                              OpiOS = navigator.userAgent.match("OpiOS"),
                              EdgiOS = navigator.userAgent.match("EdgiOS");
                          if (FxiOS == !0) {
                              window.open("./wp-content/themes/prelude-child/assets/2020-brochure-mobile/caldera-spas-2020-brochure.pdf"), 100
                              } else if (CriOS == !0) {
                                  window.open("./wp-content/themes/prelude-child/assets/2020-brochure-mobile/caldera-spas-2020-brochure.pdf")
                               }  else if (OpiOS == !0) {
                                   window.open("./wp-content/themes/prelude-child/assets/2020-brochure-mobile/caldera-spas-2020-brochure.pdf");
                               } else if (EdgiOS == !0) {
                                   window.open("./wp-content/themes/prelude-child/assets/2020-brochure-mobile/caldera-spas-2020-brochure.pdf");
                              } else {
                              var url = window.URL.createObjectURL(new Blob([response.data], {
                                      type: "application/pdf"
                                  })),
                                  link = document.createElement("a");
                              link.href = url, link.target = "_blank", link.setAttribute("download", "Caldera Spas Brochure 2020"), document.body.appendChild(link), link.click(), link.tap(), setTimeout((function() {
                                  document.body.removeChild(link), window.URL.revokeObjectURL(URL)
                              }), 100)
                          }
                      }), (function(error) {
                          var date = new Date(2018, 11, 24, 10, 33);
                          console.log(error + date)
                      }))
                  }))
              })), setTimeout((function() {
                  e(".lg-backdrop").addClass("in")
              })), setTimeout((function() {
                  l.$outer.addClass("lg-visible")
              }), this.s.backdropDuration), this.s.download && this.$outer.find(".lg-toolbar").append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'), this.prevScrollTop = e(window).scrollTop()
          }, t.prototype.setTop = function() {
              if ("100%" !== this.s.height) {
                  var t = e(window).height(),
                      s = (t - parseInt(this.s.height, 10)) / 2,
                      o = this.$outer.find(".lg");
                  t >= parseInt(this.s.height, 10) ? o.css("top", s + "px") : o.css("top", "0px")
              }
          }, t.prototype.doCss = function() {
              return !! function() {
                  var e = ["transition", "MozTransition", "WebkitTransition", "OTransition", "msTransition", "KhtmlTransition"],
                      t = document.documentElement,
                      s = 0;
                  for (s = 0; s < e.length; s++)
                      if (e[s] in t.style) return !0
              }()
          }, t.prototype.isVideo = function(e, t) {
              var s;
              if (s = this.s.dynamic ? this.s.dynamicEl[t].html : this.$items.eq(t).attr("data-html"), !e) return s ? {
                  html5: !0
              } : (console.error("lightGallery :- data-src is not provided on slide item " + (t + 1) + ". Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html"), !1);
              var o = e.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                  i = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                  a = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                  l = e.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);
              return o ? {
                  youtube: o
              } : i ? {
                  vimeo: i
              } : a ? {
                  dailymotion: a
              } : l ? {
                  vk: l
              } : void 0
          }, t.prototype.counter = function() {
              this.s.counter && e(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + "</span></div>")
          }, t.prototype.addHtml = function(t) {
              var s, o, i = null;
              if (this.s.dynamic ? this.s.dynamicEl[t].subHtmlUrl ? s = this.s.dynamicEl[t].subHtmlUrl : i = this.s.dynamicEl[t].subHtml : (o = this.$items.eq(t)).attr("data-sub-html-url") ? s = o.attr("data-sub-html-url") : (i = o.attr("data-sub-html"), this.s.getCaptionFromTitleOrAlt && !i && (i = o.attr("title") || o.find("img").first().attr("alt"))), !s)
                  if (null != i) {
                      var a = i.substring(0, 1);
                      "." !== a && "#" !== a || (i = this.s.subHtmlSelectorRelative && !this.s.dynamic ? o.find(i).html() : e(i).html())
                  } else i = "";
              ".lg-sub-html" === this.s.appendSubHtmlTo ? s ? this.$outer.find(this.s.appendSubHtmlTo).load(s) : this.$outer.find(this.s.appendSubHtmlTo).html(i) : s ? this.$slide.eq(t).load(s) : this.$slide.eq(t).append(i), null != i && ("" === i ? this.$outer.find(this.s.appendSubHtmlTo).addClass("lg-empty-html") : this.$outer.find(this.s.appendSubHtmlTo).removeClass("lg-empty-html")), this.$el.trigger("onAfterAppendSubHtml.lg", [t])
          }, t.prototype.preload = function(e) {
              var t = 1,
                  s = 1;
              for (t = 1; t <= this.s.preload && !(t >= this.$items.length - e); t++) this.loadContent(e + t, !1, 0);
              for (s = 1; s <= this.s.preload && !(e - s < 0); s++) this.loadContent(e - s, !1, 0)
          }, t.prototype.loadContent = function(t, s, o) {
              var i, a, l, r, n, d, c = this,
                  u = !1,
                  g = function(t) {
                      for (var s = [], o = [], i = 0; i < t.length; i++) {
                          var l = t[i].split(" ");
                          "" === l[0] && l.splice(0, 1), o.push(l[0]), s.push(l[1])
                      }
                      for (var r = e(window).width(), n = 0; n < s.length; n++)
                          if (parseInt(s[n], 10) > r) {
                              a = o[n];
                              break
                          }
                  };
              c.s.dynamic ? (c.s.dynamicEl[t].poster && (u = !0, l = c.s.dynamicEl[t].poster), d = c.s.dynamicEl[t].html, a = c.s.dynamicEl[t].src, c.s.dynamicEl[t].responsive && g(c.s.dynamicEl[t].responsive.split(",")), r = c.s.dynamicEl[t].srcset, n = c.s.dynamicEl[t].sizes) : (c.$items.eq(t).attr("data-poster") && (u = !0, l = c.$items.eq(t).attr("data-poster")), d = c.$items.eq(t).attr("data-html"), a = c.$items.eq(t).attr("href") || c.$items.eq(t).attr("data-src"), c.$items.eq(t).attr("data-responsive") && g(c.$items.eq(t).attr("data-responsive").split(",")), r = c.$items.eq(t).attr("data-srcset"), n = c.$items.eq(t).attr("data-sizes"));
              var h = !1;
              c.s.dynamic ? c.s.dynamicEl[t].iframe && (h = !0) : "true" === c.$items.eq(t).attr("data-iframe") && (h = !0);
              var m = c.isVideo(a, t);
              if (!c.$slide.eq(t).hasClass("lg-loaded")) {
                  if (h) c.$slide.eq(t).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + c.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + a + '"  allowfullscreen="true"></iframe></div></div>');
                  else if (u) {
                      var p = "";
                      p = m && m.youtube ? "lg-has-youtube" : m && m.vimeo ? "lg-has-vimeo" : "lg-has-html5", c.$slide.eq(t).prepend('<div class="lg-video-cont ' + p + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + l + '" /></div></div>')
                  } else m ? (c.$slide.eq(t).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>'), c.$el.trigger("hasVideo.lg", [t, a, d])) : c.$slide.eq(t).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + a + '" /></div>');
                  if (c.$el.trigger("onAferAppendSlide.lg", [t]), i = c.$slide.eq(t).find(".lg-object"), n && i.attr("sizes", n), r) {
                      i.attr("srcset", r);
                      try {
                          picturefill({
                              elements: [i[0]]
                          })
                      } catch (e) {
                          console.warn("lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.")
                      }
                  }
                  ".lg-sub-html" !== this.s.appendSubHtmlTo && c.addHtml(t), c.$slide.eq(t).addClass("lg-loaded")
              }
              c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", (function() {
                  var s = 0;
                  o && !e("body").hasClass("lg-from-hash") && (s = o), setTimeout((function() {
                      c.$slide.eq(t).addClass("lg-complete"), c.$el.trigger("onSlideItemLoad.lg", [t, o || 0])
                  }), s)
              })), m && m.html5 && !u && c.$slide.eq(t).addClass("lg-complete"), !0 === s && (c.$slide.eq(t).hasClass("lg-complete") ? c.preload(t) : c.$slide.eq(t).find(".lg-object").on("load.lg error.lg", (function() {
                  c.preload(t)
              })))
          }, t.prototype.slide = function(t, s, o, i) {
              var a = this.$outer.find(".lg-current").index(),
                  l = this;
              if (!l.lGalleryOn || a !== t) {
                  var r, n, d, c = this.$slide.length,
                      u = l.lGalleryOn ? this.s.speed : 0;
                  l.lgBusy || (this.s.download && ((r = l.s.dynamic ? !1 !== l.s.dynamicEl[t].downloadUrl && (l.s.dynamicEl[t].downloadUrl || l.s.dynamicEl[t].src) : "false" !== l.$items.eq(t).attr("data-download-url") && (l.$items.eq(t).attr("data-download-url") || l.$items.eq(t).attr("href") || l.$items.eq(t).attr("data-src"))) ? (e("#lg-download").attr("href", r), l.$outer.removeClass("lg-hide-download")) : l.$outer.addClass("lg-hide-download")), this.$el.trigger("onBeforeSlide.lg", [a, t, s, o]), l.lgBusy = !0, clearTimeout(l.hideBartimeout), ".lg-sub-html" === this.s.appendSubHtmlTo && setTimeout((function() {
                      l.addHtml(t)
                  }), u), this.arrowDisable(t), i || (t < a ? i = "prev" : t > a && (i = "next")), s ? (this.$slide.removeClass("lg-prev-slide lg-current lg-next-slide"), c > 2 ? (n = t - 1, d = t + 1, 0 === t && a === c - 1 ? (d = 0, n = c - 1) : t === c - 1 && 0 === a && (d = 0, n = c - 1)) : (n = 0, d = 1), "prev" === i ? l.$slide.eq(d).addClass("lg-next-slide") : l.$slide.eq(n).addClass("lg-prev-slide"), l.$slide.eq(t).addClass("lg-current")) : (l.$outer.addClass("lg-no-trans"), this.$slide.removeClass("lg-prev-slide lg-next-slide"), "prev" === i ? (this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(a).addClass("lg-next-slide")) : (this.$slide.eq(t).addClass("lg-next-slide"), this.$slide.eq(a).addClass("lg-prev-slide")), setTimeout((function() {
                      l.$slide.removeClass("lg-current"), l.$slide.eq(t).addClass("lg-current"), l.$outer.removeClass("lg-no-trans")
                  }), 50)), l.lGalleryOn ? (setTimeout((function() {
                      l.loadContent(t, !0, 0)
                  }), this.s.speed + 50), setTimeout((function() {
                      l.lgBusy = !1, l.$el.trigger("onAfterSlide.lg", [a, t, s, o])
                  }), this.s.speed)) : (l.loadContent(t, !0, l.s.backdropDuration), l.lgBusy = !1, l.$el.trigger("onAfterSlide.lg", [a, t, s, o])), l.lGalleryOn = !0, this.s.counter && e("#lg-counter-current").text(t + 1)), l.index = t
              }
          }, t.prototype.goToNextSlide = function(e) {
              var t = this,
                  s = t.s.loop;
              e && t.$slide.length < 3 && (s = !1), t.lgBusy || (t.index + 1 < t.$slide.length ? (t.index++, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : s ? (t.index = 0, t.$el.trigger("onBeforeNextSlide.lg", [t.index]), t.slide(t.index, e, !1, "next")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-right-end"), setTimeout((function() {
                  t.$outer.removeClass("lg-right-end")
              }), 400)))
          }, t.prototype.goToPrevSlide = function(e) {
              var t = this,
                  s = t.s.loop;
              e && t.$slide.length < 3 && (s = !1), t.lgBusy || (t.index > 0 ? (t.index--, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : s ? (t.index = t.$items.length - 1, t.$el.trigger("onBeforePrevSlide.lg", [t.index, e]), t.slide(t.index, e, !1, "prev")) : t.s.slideEndAnimatoin && !e && (t.$outer.addClass("lg-left-end"), setTimeout((function() {
                  t.$outer.removeClass("lg-left-end")
              }), 400)))
          }, t.prototype.keyPress = function() {
              var t = this;
              this.$items.length > 1 && e(window).on("keyup.lg", (function(e) {
                  t.$items.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
              })), e(window).on("keydown.lg", (function(e) {
                  !0 === t.s.escKey && 27 === e.keyCode && (e.preventDefault(), t.$outer.hasClass("lg-thumb-open") ? t.$outer.removeClass("lg-thumb-open") : t.destroy())
              }))
          }, t.prototype.arrow = function() {
              var e = this;
              this.$outer.find(".lg-prev").on("click.lg", (function() {
                  e.goToPrevSlide()
              })), this.$outer.find(".lg-next").on("click.lg", (function() {
                  e.goToNextSlide()
              }))
          }, t.prototype.arrowDisable = function(e) {
              !this.s.loop && this.s.hideControlOnEnd && (e + 1 < this.$slide.length ? this.$outer.find(".lg-next").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-next").attr("disabled", "disabled").addClass("disabled"), e > 0 ? this.$outer.find(".lg-prev").removeAttr("disabled").removeClass("disabled") : this.$outer.find(".lg-prev").attr("disabled", "disabled").addClass("disabled"))
          }, t.prototype.setTranslate = function(e, t, s) {
              this.s.useLeft ? e.css("left", t) : e.css({
                  transform: "translate3d(" + t + "px, " + s + "px, 0px)"
              })
          }, t.prototype.touchMove = function(t, s) {
              var o = s - t;
              Math.abs(o) > 15 && (this.$outer.addClass("lg-dragging"), this.setTranslate(this.$slide.eq(this.index), o, 0), this.setTranslate(e(".lg-prev-slide"), -this.$slide.eq(this.index).width() + o, 0), this.setTranslate(e(".lg-next-slide"), this.$slide.eq(this.index).width() + o, 0))
          }, t.prototype.touchEnd = function(e) {
              var t = this;
              "lg-slide" !== t.s.mode && t.$outer.addClass("lg-slide"), this.$slide.not(".lg-current, .lg-prev-slide, .lg-next-slide").css("opacity", "0"), setTimeout((function() {
                  t.$outer.removeClass("lg-dragging"), e < 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToNextSlide(!0) : e > 0 && Math.abs(e) > t.s.swipeThreshold ? t.goToPrevSlide(!0) : Math.abs(e) < 5 && t.$el.trigger("onSlideClick.lg"), t.$slide.removeAttr("style")
              })), setTimeout((function() {
                  t.$outer.hasClass("lg-dragging") || "lg-slide" === t.s.mode || t.$outer.removeClass("lg-slide")
              }), t.s.speed + 100)
          }, t.prototype.enableSwipe = function() {
              var e = this,
                  t = 0,
                  s = 0,
                  o = !1;
              e.s.enableSwipe && e.doCss() && (e.$slide.on("touchstart.lg", (function(s) {
                  e.$outer.hasClass("lg-zoomed") || e.lgBusy || (s.preventDefault(), e.manageSwipeClass(), t = s.originalEvent.targetTouches[0].pageX)
              })), e.$slide.on("touchmove.lg", (function(i) {
                  e.$outer.hasClass("lg-zoomed") || (i.preventDefault(), s = i.originalEvent.targetTouches[0].pageX, e.touchMove(t, s), o = !0)
              })), e.$slide.on("touchend.lg", (function() {
                  e.$outer.hasClass("lg-zoomed") || (o ? (o = !1, e.touchEnd(s - t)) : e.$el.trigger("onSlideClick.lg"))
              })))
          }, t.prototype.enableDrag = function() {
              var t = this,
                  s = 0,
                  o = 0,
                  i = !1,
                  a = !1;
              t.s.enableDrag && t.doCss() && (t.$slide.on("mousedown.lg", (function(o) {
                  t.$outer.hasClass("lg-zoomed") || t.lgBusy || e(o.target).text().trim() || (o.preventDefault(), t.manageSwipeClass(), s = o.pageX, i = !0, t.$outer.scrollLeft += 1, t.$outer.scrollLeft -= 1, t.$outer.removeClass("lg-grab").addClass("lg-grabbing"), t.$el.trigger("onDragstart.lg"))
              })), e(window).on("mousemove.lg", (function(e) {
                  i && (a = !0, o = e.pageX, t.touchMove(s, o), t.$el.trigger("onDragmove.lg"))
              })), e(window).on("mouseup.lg", (function(l) {
                  a ? (a = !1, t.touchEnd(o - s), t.$el.trigger("onDragend.lg")) : (e(l.target).hasClass("lg-object") || e(l.target).hasClass("lg-video-play")) && t.$el.trigger("onSlideClick.lg"), i && (i = !1, t.$outer.removeClass("lg-grabbing").addClass("lg-grab"))
              })))
          }, t.prototype.manageSwipeClass = function() {
              var e = this.index + 1,
                  t = this.index - 1;
              this.s.loop && this.$slide.length > 2 && (0 === this.index ? t = this.$slide.length - 1 : this.index === this.$slide.length - 1 && (e = 0)), this.$slide.removeClass("lg-next-slide lg-prev-slide"), t > -1 && this.$slide.eq(t).addClass("lg-prev-slide"), this.$slide.eq(e).addClass("lg-next-slide")
          }, t.prototype.mousewheel = function() {
              var e = this;
              e.$outer.on("mousewheel.lg", (function(t) {
                  t.deltaY && (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(), t.preventDefault())
              }))
          }, t.prototype.closeGallery = function() {
              var t = this,
                  s = !1;
              this.$outer.find(".lg-close").on("click.lg", (function() {
                  t.destroy()
              })), t.s.closable && (t.$outer.on("mousedown.lg", (function(t) {
                  s = !!(e(t.target).is(".lg-outer") || e(t.target).is(".lg-item ") || e(t.target).is(".lg-img-wrap"))
              })), t.$outer.on("mousemove.lg", (function() {
                  s = !1
              })), t.$outer.on("mouseup.lg", (function(o) {
                  (e(o.target).is(".lg-outer") || e(o.target).is(".lg-item ") || e(o.target).is(".lg-img-wrap") && s) && (t.$outer.hasClass("lg-dragging") || t.destroy())
              })))
          }, t.prototype.destroy = function(t) {
              var s = this;
              t || (s.$el.trigger("onBeforeClose.lg"), e(window).scrollTop(s.prevScrollTop)), t && (s.s.dynamic || this.$items.off("click.lg click.lgcustom"), e.removeData(s.el, "lightGallery")), this.$el.off(".lg.tm"), e.each(e.fn.lightGallery.modules, (function(e) {
                  s.modules[e] && s.modules[e].destroy()
              })), this.lGalleryOn = !1, clearTimeout(s.hideBartimeout), this.hideBartimeout = !1, e(window).off(".lg"), e("body").removeClass("lg-on lg-from-hash"), s.$outer && s.$outer.removeClass("lg-visible"), e(".lg-backdrop").removeClass("in"), setTimeout((function() {
                  s.$outer && s.$outer.remove(), e(".lg-backdrop").remove(), t || s.$el.trigger("onCloseAfter.lg")
              }), s.s.backdropDuration + 50)
          }, e.fn.lightGallery = function(s) {
              return this.each((function() {
                  if (e.data(this, "lightGallery")) try {
                      e(this).data("lightGallery").init()
                  } catch (e) {
                      console.error("lightGallery has not initiated properly")
                  } else e.data(this, "lightGallery", new t(this, s))
              }))
          }, e.fn.lightGallery.modules = {}
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(0, (function(e) {
      ! function() {
          "use strict";
          var t = {
                  autoplay: !1,
                  pause: 5e3,
                  progressBar: !0,
                  fourceAutoplay: !1,
                  autoplayControls: !0,
                  appendAutoplayControlsTo: ".lg-toolbar"
              },
              s = function(s) {
                  return this.core = e(s).data("lightGallery"), this.$el = e(s), !(this.core.$items.length < 2) && (this.core.s = e.extend({}, t, this.core.s), this.interval = !1, this.fromAuto = !0, this.canceledOnTouch = !1, this.fourceAutoplayTemp = this.core.s.fourceAutoplay, this.core.doCss() || (this.core.s.progressBar = !1), this.init(), this)
              };
          s.prototype.init = function() {
              var e = this;
              e.core.s.autoplayControls && e.controls(), e.core.s.progressBar && e.core.$outer.find(".lg").append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>'), e.progress(), e.core.s.autoplay && e.$el.one("onSlideItemLoad.lg.tm", (function() {
                  e.startlAuto()
              })), e.$el.on("onDragstart.lg.tm touchstart.lg.tm", (function() {
                  e.interval && (e.cancelAuto(), e.canceledOnTouch = !0)
              })), e.$el.on("onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm", (function() {
                  !e.interval && e.canceledOnTouch && (e.startlAuto(), e.canceledOnTouch = !1)
              }))
          }, s.prototype.progress = function() {
              var e, t, s = this;
              s.$el.on("onBeforeSlide.lg.tm", (function() {
                  s.core.s.progressBar && s.fromAuto && (e = s.core.$outer.find(".lg-progress-bar"), t = s.core.$outer.find(".lg-progress"), s.interval && (t.removeAttr("style"), e.removeClass("lg-start"), setTimeout((function() {
                      t.css("transition", "width " + (s.core.s.speed + s.core.s.pause) + "ms ease 0s"), e.addClass("lg-start")
                  }), 20))), s.fromAuto || s.core.s.fourceAutoplay || s.cancelAuto(), s.fromAuto = !1
              }))
          }, s.prototype.controls = function() {
              var t = this;
              e(this.core.s.appendAutoplayControlsTo).append('<span class="lg-autoplay-button lg-icon"></span>'), t.core.$outer.find(".lg-autoplay-button").on("click.lg", (function() {
                  e(t.core.$outer).hasClass("lg-show-autoplay") ? (t.cancelAuto(), t.core.s.fourceAutoplay = !1) : t.interval || (t.startlAuto(), t.core.s.fourceAutoplay = t.fourceAutoplayTemp)
              }))
          }, s.prototype.startlAuto = function() {
              var e = this;
              e.core.$outer.find(".lg-progress").css("transition", "width " + (e.core.s.speed + e.core.s.pause) + "ms ease 0s"), e.core.$outer.addClass("lg-show-autoplay"), e.core.$outer.find(".lg-progress-bar").addClass("lg-start"), e.interval = setInterval((function() {
                  e.core.index + 1 < e.core.$items.length ? e.core.index++ : e.core.index = 0, e.fromAuto = !0, e.core.slide(e.core.index, !1, !1, "next")
              }), e.core.s.speed + e.core.s.pause)
          }, s.prototype.cancelAuto = function() {
              clearInterval(this.interval), this.interval = !1, this.core.$outer.find(".lg-progress").removeAttr("style"), this.core.$outer.removeClass("lg-show-autoplay"), this.core.$outer.find(".lg-progress-bar").removeClass("lg-start")
          }, s.prototype.destroy = function() {
              this.cancelAuto(), this.core.$outer.find(".lg-progress-bar").remove()
          }, e.fn.lightGallery.modules.autoplay = s
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
  }(this, (function(e) {
      ! function() {
          "use strict";
  
          function t() {
              return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
          }
          var s = {
                  fullScreen: !0
              },
              o = function(t) {
                  return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, s, this.core.s), this.init(), this
              };
          o.prototype.init = function() {
              var e = "";
              if (this.core.s.fullScreen) {
                  if (!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) return;
                  e = '<span class="lg-fullscreen lg-icon" ></span>', this.core.$outer.find(".lg-toolbar").append(e), this.fullScreen()
              }
          }, o.prototype.requestFullscreen = function() {
              var e = document.documentElement;
              e.requestFullscreen ? e.requestFullscreen() : e.msRequestFullscreen ? e.msRequestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen()
          }, o.prototype.exitFullscreen = function() {
              document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
          }, o.prototype.fullScreen = function() {
              var s = this;
              e(document).on("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg", (function() {
                  s.core.$outer.toggleClass("lg-fullscreen-on")
              })), this.core.$outer.find(".lg-fullscreen").on("click.lg", (function() {
                  t() ? s.exitFullscreen() : s.requestFullscreen()
              }))
          }, o.prototype.destroy = function() {
              t() && this.exitFullscreen(), e(document).off("fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg")
          }, e.fn.lightGallery.modules.fullscreen = o
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(0, (function(e) {
      ! function() {
          "use strict";
          var t = {
                  pager: !1
              },
              s = function(s) {
                  return this.core = e(s).data("lightGallery"), this.$el = e(s), this.core.s = e.extend({}, t, this.core.s), this.core.s.pager && this.core.$items.length > 1 && this.init(), this
              };
          s.prototype.init = function() {
              var t, s, o, i = this,
                  a = "";
              if (i.core.$outer.find(".lg").append('<div class="lg-pager-outer"></div>'), i.core.s.dynamic)
                  for (var l = 0; l < i.core.s.dynamicEl.length; l++) a += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + i.core.s.dynamicEl[l].thumb + '" /></div></span>';
              else i.core.$items.each((function() {
                  i.core.s.exThumbImage ? a += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).attr(i.core.s.exThumbImage) + '" /></div></span>' : a += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + e(this).find("img").attr("src") + '" /></div></span>'
              }));
              (s = i.core.$outer.find(".lg-pager-outer")).html(a), (t = i.core.$outer.find(".lg-pager-cont")).on("click.lg touchend.lg", (function() {
                  var t = e(this);
                  i.core.index = t.index(), i.core.slide(i.core.index, !1, !0, !1)
              })), s.on("mouseover.lg", (function() {
                  clearTimeout(o), s.addClass("lg-pager-hover")
              })), s.on("mouseout.lg", (function() {
                  o = setTimeout((function() {
                      s.removeClass("lg-pager-hover")
                  }))
              })), i.core.$el.on("onBeforeSlide.lg.tm", (function(e, s, o) {
                  t.removeClass("lg-pager-active"), t.eq(o).addClass("lg-pager-active")
              }))
          }, s.prototype.destroy = function() {}, e.fn.lightGallery.modules.pager = s
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(0, (function(e) {
      ! function() {
          "use strict";
          var t = {
                  thumbnail: !0,
                  animateThumb: !0,
                  currentPagerPosition: "middle",
                  thumbWidth: 67,
                  thumbHeight: "80px",
                  thumbContHeight: 100,
                  thumbMargin: 5,
                  exThumbImage: !1,
                  showThumbByDefault: !0,
                  toogleThumb: !0,
                  pullCaptionUp: !0,
                  enableThumbDrag: !0,
                  enableThumbSwipe: !0,
                  swipeThreshold: 50,
                  loadYoutubeThumbnail: !0,
                  youtubeThumbSize: 1,
                  loadVimeoThumbnail: !0,
                  vimeoThumbSize: "thumbnail_small",
                  loadDailymotionThumbnail: !0
              },
              s = function(s) {
                  return this.core = e(s).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.$el = e(s), this.$thumbOuter = null, this.thumbOuterWidth = 0, this.thumbTotalWidth = this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin), this.thumbIndex = this.core.index, this.core.s.animateThumb && (this.core.s.thumbHeight = "100%"), this.left = 0, this.init(), this
              };
          s.prototype.init = function() {
              var e = this;
              this.core.s.thumbnail && this.core.$items.length > 1 && (this.core.s.showThumbByDefault && setTimeout((function() {
                  e.core.$outer.addClass("lg-thumb-open")
              }), 700), this.core.s.pullCaptionUp && this.core.$outer.addClass("lg-pull-caption-up"), this.build(), this.core.s.animateThumb && this.core.doCss() ? (this.core.s.enableThumbDrag && this.enableThumbDrag(), this.core.s.enableThumbSwipe && this.enableThumbSwipe(), this.thumbClickable = !1) : this.thumbClickable = !0, this.toogle(), this.thumbkeyPress())
          }, s.prototype.build = function() {
              function t(e, t, s) {
                  var l, r = o.core.isVideo(e, s) || {},
                      n = "";
                  r.youtube || r.vimeo || r.dailymotion ? r.youtube ? l = o.core.s.loadYoutubeThumbnail ? "//img.youtube.com/vi/" + r.youtube[1] + "/" + o.core.s.youtubeThumbSize + ".jpg" : t : r.vimeo ? o.core.s.loadVimeoThumbnail ? (l = "//i.vimeocdn.com/video/error_" + a + ".jpg", n = r.vimeo[1]) : l = t : r.dailymotion && (l = o.core.s.loadDailymotionThumbnail ? "//www.dailymotion.com/thumbnail/video/" + r.dailymotion[1] : t) : l = t, i += '<div data-vimeo-id="' + n + '" class="lg-thumb-item" style="width:' + o.core.s.thumbWidth + "px; height: " + o.core.s.thumbHeight + "; margin-right: " + o.core.s.thumbMargin + 'px"><img src="' + l + '" /></div>', n = ""
              }
              var s, o = this,
                  i = "",
                  a = "",
                  l = '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>';
              switch (this.core.s.vimeoThumbSize) {
                  case "thumbnail_large":
                      a = "640";
                      break;
                  case "thumbnail_medium":
                      a = "200x150";
                      break;
                  case "thumbnail_small":
                      a = "100x75"
              }
              if (o.core.$outer.addClass("lg-has-thumb"), o.core.$outer.find(".lg").append(l), o.$thumbOuter = o.core.$outer.find(".lg-thumb-outer"), o.thumbOuterWidth = o.$thumbOuter.width(), o.core.s.animateThumb && o.core.$outer.find(".lg-thumb").css({
                      width: o.thumbTotalWidth + "px",
                      position: "relative"
                  }), this.core.s.animateThumb && o.$thumbOuter.css("height", o.core.s.thumbContHeight + "px"), o.core.s.dynamic)
                  for (var r = 0; r < o.core.s.dynamicEl.length; r++) t(o.core.s.dynamicEl[r].src, o.core.s.dynamicEl[r].thumb, r);
              else o.core.$items.each((function(s) {
                  o.core.s.exThumbImage ? t(e(this).attr("href") || e(this).attr("data-src"), e(this).attr(o.core.s.exThumbImage), s) : t(e(this).attr("href") || e(this).attr("data-src"), e(this).find("img").attr("src"), s)
              }));
              o.core.$outer.find(".lg-thumb").html(i), (s = o.core.$outer.find(".lg-thumb-item")).each((function() {
                  var t = e(this),
                      s = t.attr("data-vimeo-id");
                  s && e.getJSON("//www.vimeo.com/api/v2/video/" + s + ".json?callback=?", {
                      format: "json"
                  }, (function(e) {
                      t.find("img").attr("src", e[0][o.core.s.vimeoThumbSize])
                  }))
              })), s.eq(o.core.index).addClass("active"), o.core.$el.on("onBeforeSlide.lg.tm", (function() {
                  s.removeClass("active"), s.eq(o.core.index).addClass("active")
              })), s.on("click.lg touchend.lg", (function() {
                  var t = e(this);
                  setTimeout((function() {
                      (o.thumbClickable && !o.core.lgBusy || !o.core.doCss()) && (o.core.index = t.index(), o.core.slide(o.core.index, !1, !0, !1))
                  }), 50)
              })), o.core.$el.on("onBeforeSlide.lg.tm", (function() {
                  o.animateThumb(o.core.index)
              })), e(window).on("resize.lg.thumb orientationchange.lg.thumb", (function() {
                  setTimeout((function() {
                      o.animateThumb(o.core.index), o.thumbOuterWidth = o.$thumbOuter.width()
                  }), 200)
              }))
          }, s.prototype.setTranslate = function(e) {
              this.core.$outer.find(".lg-thumb").css({
                  transform: "translate3d(-" + e + "px, 0px, 0px)"
              })
          }, s.prototype.animateThumb = function(e) {
              var t = this.core.$outer.find(".lg-thumb");
              if (this.core.s.animateThumb) {
                  var s;
                  switch (this.core.s.currentPagerPosition) {
                      case "left":
                          s = 0;
                          break;
                      case "middle":
                          s = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2;
                          break;
                      case "right":
                          s = this.thumbOuterWidth - this.core.s.thumbWidth
                  }
                  this.left = (this.core.s.thumbWidth + this.core.s.thumbMargin) * e - 1 - s, this.left > this.thumbTotalWidth - this.thumbOuterWidth && (this.left = this.thumbTotalWidth - this.thumbOuterWidth), this.left < 0 && (this.left = 0), this.core.lGalleryOn ? (t.hasClass("on") || this.core.$outer.find(".lg-thumb").css("transition-duration", this.core.s.speed + "ms"), this.core.doCss() || t.animate({
                      left: -this.left + "px"
                  }, this.core.s.speed)) : this.core.doCss() || t.css("left", -this.left + "px"), this.setTranslate(this.left)
              }
          }, s.prototype.enableThumbDrag = function() {
              var t = this,
                  s = 0,
                  o = 0,
                  i = !1,
                  a = !1,
                  l = 0;
              t.$thumbOuter.addClass("lg-grab"), t.core.$outer.find(".lg-thumb").on("mousedown.lg.thumb", (function(e) {
                  t.thumbTotalWidth > t.thumbOuterWidth && (e.preventDefault(), s = e.pageX, i = !0, t.core.$outer.scrollLeft += 1, t.core.$outer.scrollLeft -= 1, t.thumbClickable = !1, t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))
              })), e(window).on("mousemove.lg.thumb", (function(e) {
                  i && (l = t.left, a = !0, o = e.pageX, t.$thumbOuter.addClass("lg-dragging"), (l -= o - s) > t.thumbTotalWidth - t.thumbOuterWidth && (l = t.thumbTotalWidth - t.thumbOuterWidth), l < 0 && (l = 0), t.setTranslate(l))
              })), e(window).on("mouseup.lg.thumb", (function() {
                  a ? (a = !1, t.$thumbOuter.removeClass("lg-dragging"), t.left = l, Math.abs(o - s) < t.core.s.swipeThreshold && (t.thumbClickable = !0)) : t.thumbClickable = !0, i && (i = !1, t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab"))
              }))
          }, s.prototype.enableThumbSwipe = function() {
              var e = this,
                  t = 0,
                  s = 0,
                  o = !1,
                  i = 0;
              e.core.$outer.find(".lg-thumb").on("touchstart.lg", (function(s) {
                  e.thumbTotalWidth > e.thumbOuterWidth && (s.preventDefault(), t = s.originalEvent.targetTouches[0].pageX, e.thumbClickable = !1)
              })), e.core.$outer.find(".lg-thumb").on("touchmove.lg", (function(a) {
                  e.thumbTotalWidth > e.thumbOuterWidth && (a.preventDefault(), s = a.originalEvent.targetTouches[0].pageX, o = !0, e.$thumbOuter.addClass("lg-dragging"), i = e.left, (i -= s - t) > e.thumbTotalWidth - e.thumbOuterWidth && (i = e.thumbTotalWidth - e.thumbOuterWidth), i < 0 && (i = 0), e.setTranslate(i))
              })), e.core.$outer.find(".lg-thumb").on("touchend.lg", (function() {
                  e.thumbTotalWidth > e.thumbOuterWidth && o ? (o = !1, e.$thumbOuter.removeClass("lg-dragging"), Math.abs(s - t) < e.core.s.swipeThreshold && (e.thumbClickable = !0), e.left = i) : e.thumbClickable = !0
              }))
          }, s.prototype.toogle = function() {
              var e = this;
              e.core.s.toogleThumb && (e.core.$outer.addClass("lg-can-toggle"), e.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>'), e.core.$outer.find(".lg-toogle-thumb").on("click.lg", (function() {
                  e.core.$outer.toggleClass("lg-thumb-open")
              })))
          }, s.prototype.thumbkeyPress = function() {
              var t = this;
              e(window).on("keydown.lg.thumb", (function(e) {
                  38 === e.keyCode ? (e.preventDefault(), t.core.$outer.addClass("lg-thumb-open")) : 40 === e.keyCode && (e.preventDefault(), t.core.$outer.removeClass("lg-thumb-open"))
              }))
          }, s.prototype.destroy = function() {
              this.core.s.thumbnail && this.core.$items.length > 1 && (e(window).off("resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb"), this.$thumbOuter.remove(), this.core.$outer.removeClass("lg-has-thumb"))
          }, e.fn.lightGallery.modules.Thumbnail = s
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(e.jQuery)
  }(this, (function(e) {
      ! function() {
          "use strict";
  
          function t(e, t, s, o) {
              var i = this;
              if (i.core.$slide.eq(t).find(".lg-video").append(i.loadVideo(s, "lg-object", !0, t, o)), o)
                  if (i.core.s.videojs) try {
                      videojs(i.core.$slide.eq(t).find(".lg-html5").get(0), i.core.s.videojsOptions, (function() {
                          !i.videoLoaded && i.core.s.autoplayFirstVideo && this.play()
                      }))
                  } catch (e) {
                      console.error("Make sure you have included videojs")
                  } else !i.videoLoaded && i.core.s.autoplayFirstVideo && i.core.$slide.eq(t).find(".lg-html5").get(0).play()
          }
  
          function s(e, t) {
              var s = this.core.$slide.eq(t).find(".lg-video-cont");
              s.hasClass("lg-has-iframe") || (s.css("max-width", this.core.s.videoMaxWidth), this.videoLoaded = !0)
          }
  
          function o(t, s, o) {
              var i, a = this,
                  l = a.core.$slide.eq(s),
                  r = l.find(".lg-youtube").get(0),
                  n = l.find(".lg-vimeo").get(0),
                  d = l.find(".lg-dailymotion").get(0),
                  c = l.find(".lg-vk").get(0),
                  u = l.find(".lg-html5").get(0);
              if (r) r.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
              else if (n) try {
                      $f(n).api("pause")
                  } catch (e) {
                      console.error("Make sure you have included froogaloop2 js")
                  } else if (d) d.contentWindow.postMessage("pause", "*");
                  else if (u)
                  if (a.core.s.videojs) try {
                      videojs(u).pause()
                  } catch (e) {
                      console.error("Make sure you have included videojs")
                  } else u.pause();
              c && e(c).attr("src", e(c).attr("src").replace("&autoplay", "&noplay")), i = a.core.s.dynamic ? a.core.s.dynamicEl[o].src : a.core.$items.eq(o).attr("href") || a.core.$items.eq(o).attr("data-src");
              var g = a.core.isVideo(i, o) || {};
              (g.youtube || g.vimeo || g.dailymotion || g.vk) && a.core.$outer.addClass("lg-hide-download")
          }
          var i = {
                  videoMaxWidth: "855px",
                  autoplayFirstVideo: !0,
                  youtubePlayerParams: !1,
                  vimeoPlayerParams: !1,
                  dailymotionPlayerParams: !1,
                  vkPlayerParams: !1,
                  videojs: !1,
                  videojsOptions: {}
              },
              a = function(t) {
                  return this.core = e(t).data("lightGallery"), this.$el = e(t), this.core.s = e.extend({}, i, this.core.s), this.videoLoaded = !1, this.init(), this
              };
          a.prototype.init = function() {
              var i = this;
              i.core.$el.on("hasVideo.lg.tm", t.bind(this)), i.core.$el.on("onAferAppendSlide.lg.tm", s.bind(this)), i.core.doCss() && i.core.$items.length > 1 && (i.core.s.enableSwipe || i.core.s.enableDrag) ? i.core.$el.on("onSlideClick.lg.tm", (function() {
                  var e = i.core.$slide.eq(i.core.index);
                  i.loadVideoOnclick(e)
              })) : i.core.$slide.on("click.lg", (function() {
                  i.loadVideoOnclick(e(this))
              })), i.core.$el.on("onBeforeSlide.lg.tm", o.bind(this)), i.core.$el.on("onAfterSlide.lg.tm", (function(e, t) {
                  i.core.$slide.eq(t).removeClass("lg-video-playing")
              })), i.core.s.autoplayFirstVideo && i.core.$el.on("onAferAppendSlide.lg.tm", (function(e, t) {
                  if (!i.core.lGalleryOn) {
                      var s = i.core.$slide.eq(t);
                      setTimeout((function() {
                          i.loadVideoOnclick(s)
                      }), 100)
                  }
              }))
          }, a.prototype.loadVideo = function(t, s, o, i, a) {
              var l = "",
                  r = 1,
                  n = "",
                  d = this.core.isVideo(t, i) || {};
              if (o && (r = this.videoLoaded ? 0 : this.core.s.autoplayFirstVideo ? 1 : 0), d.youtube) n = "?wmode=opaque&autoplay=" + r + "&enablejsapi=1", this.core.s.youtubePlayerParams && (n = n + "&" + e.param(this.core.s.youtubePlayerParams)), l = '<iframe class="lg-video-object lg-youtube ' + s + '" width="560" height="315" src="//www.youtube.com/embed/' + d.youtube[1] + n + '" frameborder="0" allowfullscreen></iframe>';
              else if (d.vimeo) n = "?autoplay=" + r + "&api=1", this.core.s.vimeoPlayerParams && (n = n + "&" + e.param(this.core.s.vimeoPlayerParams)), l = '<iframe class="lg-video-object lg-vimeo ' + s + '" width="560" height="315"  src="//player.vimeo.com/video/' + d.vimeo[1] + n + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
              else if (d.dailymotion) n = "?wmode=opaque&autoplay=" + r + "&api=postMessage", this.core.s.dailymotionPlayerParams && (n = n + "&" + e.param(this.core.s.dailymotionPlayerParams)), l = '<iframe class="lg-video-object lg-dailymotion ' + s + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + d.dailymotion[1] + n + '" frameborder="0" allowfullscreen></iframe>';
              else if (d.html5) {
                  var c = a.substring(0, 1);
                  "." !== c && "#" !== c || (a = e(a).html()), l = a
              } else d.vk && (n = "&autoplay=" + r, this.core.s.vkPlayerParams && (n = n + "&" + e.param(this.core.s.vkPlayerParams)), l = '<iframe class="lg-video-object lg-vk ' + s + '" width="560" height="315" src="//vk.com/video_ext.php?' + d.vk[1] + n + '" frameborder="0" allowfullscreen></iframe>');
              return l
          }, a.prototype.loadVideoOnclick = function(e) {
              var t = this;
              if (e.find(".lg-object").hasClass("lg-has-poster") && e.find(".lg-object").is(":visible"))
                  if (e.hasClass("lg-has-video")) {
                      var s = e.find(".lg-youtube").get(0),
                          o = e.find(".lg-vimeo").get(0),
                          i = e.find(".lg-dailymotion").get(0),
                          a = e.find(".lg-html5").get(0);
                      if (s) s.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                      else if (o) try {
                              $f(o).api("play")
                          } catch (e) {
                              console.error("Make sure you have included froogaloop2 js")
                          } else if (i) i.contentWindow.postMessage("play", "*");
                          else if (a)
                          if (t.core.s.videojs) try {
                              videojs(a).play()
                          } catch (e) {
                              console.error("Make sure you have included videojs")
                          } else a.play();
                      e.addClass("lg-video-playing")
                  } else {
                      e.addClass("lg-video-playing lg-has-video");
                      var l = function(s, o) {
                          if (e.find(".lg-video").append(t.loadVideo(s, "", !1, t.core.index, o)), o)
                              if (t.core.s.videojs) try {
                                  videojs(t.core.$slide.eq(t.core.index).find(".lg-html5").get(0), t.core.s.videojsOptions, (function() {
                                      this.play()
                                  }))
                              } catch (e) {
                                  console.error("Make sure you have included videojs")
                              } else t.core.$slide.eq(t.core.index).find(".lg-html5").get(0).play()
                      };
                      t.core.s.dynamic ? l(t.core.s.dynamicEl[t.core.index].src, t.core.s.dynamicEl[t.core.index].html) : l(t.core.$items.eq(t.core.index).attr("href") || t.core.$items.eq(t.core.index).attr("data-src"), t.core.$items.eq(t.core.index).attr("data-html"));
                      var r = e.find(".lg-object");
                      e.find(".lg-video").append(r), e.find(".lg-video-object").hasClass("lg-html5") || (e.removeClass("lg-complete"), e.find(".lg-video-object").on("load.lg error.lg", (function() {
                          e.addClass("lg-complete")
                      })))
                  }
          }, a.prototype.destroy = function() {
              this.videoLoaded = !1
          }, e.fn.lightGallery.modules.video = a
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(0, (function(e) {
      ! function() {
          "use strict";
          var t = {
                  scale: 1,
                  zoom: !0,
                  actualSize: !0,
                  enableZoomAfter: 300,
                  useLeftForZoom: function() {
                      var e = !1,
                          t = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
                      return t && parseInt(t[2], 10) < 54 && (e = !0), e
                  }()
              },
              s = function(s) {
                  return this.core = e(s).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.zoom && this.core.doCss() && (this.init(), this.zoomabletimeout = !1, this.pageX = e(window).width() / 2, this.pageY = e(window).height() / 2 + e(window).scrollTop()), this
              };
          s.prototype.init = function() {
              var t = this,
                  s = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';
              t.core.s.actualSize && (s += '<span id="lg-actual-size" class="lg-icon"></span>'), t.core.s.useLeftForZoom ? t.core.$outer.addClass("lg-use-left-for-zoom") : t.core.$outer.addClass("lg-use-transition-for-zoom"), this.core.$outer.find(".lg-toolbar").append(s), t.core.$el.on("onSlideItemLoad.lg.tm.zoom", (function(s, o, i) {
                  var a = t.core.s.enableZoomAfter + i;
                  e("body").hasClass("lg-from-hash") && i ? a = 0 : e("body").removeClass("lg-from-hash"), t.zoomabletimeout = setTimeout((function() {
                      t.core.$slide.eq(o).addClass("lg-zoomable")
                  }), a + 30)
              }));
              var o = 1,
                  i = function(s) {
                      var o = t.core.$outer.find(".lg-current .lg-image"),
                          i = (e(window).width() - o.prop("offsetWidth")) / 2,
                          a = (e(window).height() - o.prop("offsetHeight")) / 2 + e(window).scrollTop(),
                          l = (s - 1) * (t.pageX - i),
                          r = (s - 1) * (t.pageY - a);
                      o.css("transform", "scale3d(" + s + ", " + s + ", 1)").attr("data-scale", s), t.core.s.useLeftForZoom ? o.parent().css({
                          left: -l + "px",
                          top: -r + "px"
                      }).attr("data-x", l).attr("data-y", r) : o.parent().css("transform", "translate3d(-" + l + "px, -" + r + "px, 0)").attr("data-x", l).attr("data-y", r)
                  },
                  a = function() {
                      o > 1 ? t.core.$outer.addClass("lg-zoomed") : t.resetZoom(), o < 1 && (o = 1), i(o)
                  },
                  l = function(s, i, l, r) {
                      var n, d = i.prop("offsetWidth");
                      n = t.core.s.dynamic ? t.core.s.dynamicEl[l].width || i[0].naturalWidth || d : t.core.$items.eq(l).attr("data-width") || i[0].naturalWidth || d, t.core.$outer.hasClass("lg-zoomed") ? o = 1 : n > d && (o = n / d || 2), r ? (t.pageX = e(window).width() / 2, t.pageY = e(window).height() / 2 + e(window).scrollTop()) : (t.pageX = s.pageX || s.originalEvent.targetTouches[0].pageX, t.pageY = s.pageY || s.originalEvent.targetTouches[0].pageY), a(), setTimeout((function() {
                          t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
                      }), 10)
                  },
                  r = !1;
              t.core.$el.on("onAferAppendSlide.lg.tm.zoom", (function(e, s) {
                  var o = t.core.$slide.eq(s).find(".lg-image");
                  o.on("dblclick", (function(e) {
                      l(e, o, s)
                  })), o.on("touchstart", (function(e) {
                      r ? (clearTimeout(r), r = null, l(e, o, s)) : r = setTimeout((function() {
                          r = null
                      }), 300), e.preventDefault()
                  }))
              })), e(window).on("resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom", (function() {
                  t.pageX = e(window).width() / 2, t.pageY = e(window).height() / 2 + e(window).scrollTop(), i(o)
              })), e("#lg-zoom-out").on("click.lg", (function() {
                  t.core.$outer.find(".lg-current .lg-image").length && (o -= t.core.s.scale, a())
              })), e("#lg-zoom-in").on("click.lg", (function() {
                  t.core.$outer.find(".lg-current .lg-image").length && (o += t.core.s.scale, a())
              })), e("#lg-actual-size").on("click.lg", (function(e) {
                  l(e, t.core.$slide.eq(t.core.index).find(".lg-image"), t.core.index, !0)
              })), t.core.$el.on("onBeforeSlide.lg.tm", (function() {
                  o = 1, t.resetZoom()
              })), t.zoomDrag(), t.zoomSwipe()
          }, s.prototype.resetZoom = function() {
              this.core.$outer.removeClass("lg-zoomed"), this.core.$slide.find(".lg-img-wrap").removeAttr("style data-x data-y"), this.core.$slide.find(".lg-image").removeAttr("style data-scale"), this.pageX = e(window).width() / 2, this.pageY = e(window).height() / 2 + e(window).scrollTop()
          }, s.prototype.zoomSwipe = function() {
              var e = this,
                  t = {},
                  s = {},
                  o = !1,
                  i = !1,
                  a = !1;
              e.core.$slide.on("touchstart.lg", (function(s) {
                  if (e.core.$outer.hasClass("lg-zoomed")) {
                      var o = e.core.$slide.eq(e.core.index).find(".lg-object");
                      a = o.prop("offsetHeight") * o.attr("data-scale") > e.core.$outer.find(".lg").height(), ((i = o.prop("offsetWidth") * o.attr("data-scale") > e.core.$outer.find(".lg").width()) || a) && (s.preventDefault(), t = {
                          x: s.originalEvent.targetTouches[0].pageX,
                          y: s.originalEvent.targetTouches[0].pageY
                      })
                  }
              })), e.core.$slide.on("touchmove.lg", (function(l) {
                  if (e.core.$outer.hasClass("lg-zoomed")) {
                      var r, n, d = e.core.$slide.eq(e.core.index).find(".lg-img-wrap");
                      l.preventDefault(), o = !0, s = {
                          x: l.originalEvent.targetTouches[0].pageX,
                          y: l.originalEvent.targetTouches[0].pageY
                      }, e.core.$outer.addClass("lg-zoom-dragging"), n = a ? -Math.abs(d.attr("data-y")) + (s.y - t.y) : -Math.abs(d.attr("data-y")), r = i ? -Math.abs(d.attr("data-x")) + (s.x - t.x) : -Math.abs(d.attr("data-x")), (Math.abs(s.x - t.x) > 15 || Math.abs(s.y - t.y) > 15) && (e.core.s.useLeftForZoom ? d.css({
                          left: r + "px",
                          top: n + "px"
                      }) : d.css("transform", "translate3d(" + r + "px, " + n + "px, 0)"))
                  }
              })), e.core.$slide.on("touchend.lg", (function() {
                  e.core.$outer.hasClass("lg-zoomed") && o && (o = !1, e.core.$outer.removeClass("lg-zoom-dragging"), e.touchendZoom(t, s, i, a))
              }))
          }, s.prototype.zoomDrag = function() {
              var t = this,
                  s = {},
                  o = {},
                  i = !1,
                  a = !1,
                  l = !1,
                  r = !1;
              t.core.$slide.on("mousedown.lg.zoom", (function(o) {
                  var a = t.core.$slide.eq(t.core.index).find(".lg-object");
                  r = a.prop("offsetHeight") * a.attr("data-scale") > t.core.$outer.find(".lg").height(), l = a.prop("offsetWidth") * a.attr("data-scale") > t.core.$outer.find(".lg").width(), t.core.$outer.hasClass("lg-zoomed") && e(o.target).hasClass("lg-object") && (l || r) && (o.preventDefault(), s = {
                      x: o.pageX,
                      y: o.pageY
                  }, i = !0, t.core.$outer.scrollLeft += 1, t.core.$outer.scrollLeft -= 1, t.core.$outer.removeClass("lg-grab").addClass("lg-grabbing"))
              })), e(window).on("mousemove.lg.zoom", (function(e) {
                  if (i) {
                      var n, d, c = t.core.$slide.eq(t.core.index).find(".lg-img-wrap");
                      a = !0, o = {
                          x: e.pageX,
                          y: e.pageY
                      }, t.core.$outer.addClass("lg-zoom-dragging"), d = r ? -Math.abs(c.attr("data-y")) + (o.y - s.y) : -Math.abs(c.attr("data-y")), n = l ? -Math.abs(c.attr("data-x")) + (o.x - s.x) : -Math.abs(c.attr("data-x")), t.core.s.useLeftForZoom ? c.css({
                          left: n + "px",
                          top: d + "px"
                      }) : c.css("transform", "translate3d(" + n + "px, " + d + "px, 0)")
                  }
              })), e(window).on("mouseup.lg.zoom", (function(e) {
                  i && (i = !1, t.core.$outer.removeClass("lg-zoom-dragging"), !a || s.x === o.x && s.y === o.y || (o = {
                      x: e.pageX,
                      y: e.pageY
                  }, t.touchendZoom(s, o, l, r)), a = !1), t.core.$outer.removeClass("lg-grabbing").addClass("lg-grab")
              }))
          }, s.prototype.touchendZoom = function(e, t, s, o) {
              var i = this,
                  a = i.core.$slide.eq(i.core.index).find(".lg-img-wrap"),
                  l = i.core.$slide.eq(i.core.index).find(".lg-object"),
                  r = -Math.abs(a.attr("data-x")) + (t.x - e.x),
                  n = -Math.abs(a.attr("data-y")) + (t.y - e.y),
                  d = (i.core.$outer.find(".lg").height() - l.prop("offsetHeight")) / 2,
                  c = Math.abs(l.prop("offsetHeight") * Math.abs(l.attr("data-scale")) - i.core.$outer.find(".lg").height() + d),
                  u = (i.core.$outer.find(".lg").width() - l.prop("offsetWidth")) / 2,
                  g = Math.abs(l.prop("offsetWidth") * Math.abs(l.attr("data-scale")) - i.core.$outer.find(".lg").width() + u);
              (Math.abs(t.x - e.x) > 15 || Math.abs(t.y - e.y) > 15) && (o && (n <= -c ? n = -c : n >= -d && (n = -d)), s && (r <= -g ? r = -g : r >= -u && (r = -u)), o ? a.attr("data-y", Math.abs(n)) : n = -Math.abs(a.attr("data-y")), s ? a.attr("data-x", Math.abs(r)) : r = -Math.abs(a.attr("data-x")), i.core.s.useLeftForZoom ? a.css({
                  left: r + "px",
                  top: n + "px"
              }) : a.css("transform", "translate3d(" + r + "px, " + n + "px, 0)"))
          }, s.prototype.destroy = function() {
              var t = this;
              t.core.$el.off(".lg.zoom"), e(window).off(".lg.zoom"), t.core.$slide.off(".lg.zoom"), t.core.$el.off(".lg.tm.zoom"), t.resetZoom(), clearTimeout(t.zoomabletimeout), t.zoomabletimeout = !1
          }, e.fn.lightGallery.modules.zoom = s
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(0, (function(e) {
      ! function() {
          "use strict";
          var t = {
                  hash: !0
              },
              s = function(s) {
                  return this.core = e(s).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.hash && (this.oldHash = window.location.hash, this.init()), this
              };
          s.prototype.init = function() {
              var t, s = this;
              s.core.$el.on("onAfterSlide.lg.tm", (function(e, t, o) {
                  history.replaceState ? history.replaceState(null, null, window.location.pathname + window.location.search + "#lg=" + s.core.s.galleryId + "&slide=" + o) : window.location.hash = "lg=" + s.core.s.galleryId + "&slide=" + o
              })), e(window).on("hashchange.lg.hash", (function() {
                  t = window.location.hash;
                  var e = parseInt(t.split("&slide=")[1], 10);
                  t.indexOf("lg=" + s.core.s.galleryId) > -1 ? s.core.slide(e, !1, !1) : s.core.lGalleryOn && s.core.destroy()
              }))
          }, s.prototype.destroy = function() {
              this.core.s.hash && (this.oldHash && this.oldHash.indexOf("lg=" + this.core.s.galleryId) < 0 ? history.replaceState ? history.replaceState(null, null, this.oldHash) : window.location.hash = this.oldHash : history.replaceState ? history.replaceState(null, document.title, window.location.pathname + window.location.search) : window.location.hash = "", this.core.$el.off(".lg.hash"))
          }, e.fn.lightGallery.modules.hash = s
      }()
  })),
  function(e, t) {
      "function" == typeof define && define.amd ? define(["jquery"], (function(e) {
          return t(e)
      })) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
  }(0, (function(e) {
      ! function() {
          "use strict";
          var t = {
                  share: !0,
                  menuLinkOne: !0,
                  menuLinkOneText: "The Caldera Difference",
                  menuLinkTwo: !0,
                  menuLinkTwoText: "Discover Your Perfect Fit",
                  menuLinkThree: !0,
                  menuLinkThreeText: "Series Comparison",
                  menuLinkFour: !0,
                  menuLinkFourText: "Essentials & Accessories",
                  menuLinkFive: !0,
                  menuLinkFiveText: "Detailed Specifications",
                  menuLinkSix: !0,
                  menuLinkSixText: "Warranty"
              },
              s = function(s) {
                  return this.core = e(s).data("lightGallery"), this.core.s = e.extend({}, t, this.core.s), this.core.s.share && this.init(), this
              };
          s.prototype.init = function() {
              var t = this,
                  s = '<span id="lg-share" class="lg-icon"><ul class="lg-dropdown" style="position: absolute;">';
              s += t.core.s.menuLinkOne ? '<li><a id="menu-link-one" alt="' + this.core.s.menuLinkOneText + '" title="' + this.core.s.menuLinkOneText + '"><span class="lg-dropdown-text">' + this.core.s.menuLinkOneText + "</span></a></li>" : "", 
              s += t.core.s.menuLinkTwo ? '<li><a id="menu-link-two" alt="' + this.core.s.menuLinkTwoText + '" title="' + this.core.s.menuLinkTwoText + '"><span class="lg-dropdown-text">' + this.core.s.menuLinkTwoText + "</span></a></li>" : "", 
              s += t.core.s.menuLinkThree ? '<li><a id="menu-link-three" alt="' + this.core.s.menuLinkThreeText + '" title="' + this.core.s.menuLinkThreeText + '"><span class="lg-dropdown-text">' + this.core.s.menuLinkThreeText + "</span></a></li>" : "", 
              s += t.core.s.menuLinkFour ? '<li><a id="menu-link-four" alt="' + this.core.s.menuLinkFourText + '" title="' + this.core.s.menuLinkFourText + '"><span class="lg-dropdown-text">' + this.core.s.menuLinkFourText + "</span></a></li>" : "", 
              s += t.core.s.menuLinkFive ? '<li><a id="menu-link-five" alt="' + this.core.s.menuLinkFiveText + '" title="' + this.core.s.menuLinkFiveText + '"><span class="lg-dropdown-text">' + this.core.s.menuLinkFiveText + "</span></a></li>" : "", 
              s += t.core.s.menuLinkSix ? '<li><a id="menu-link-six" alt="' + this.core.s.menuLinkSixText + '" title="' + this.core.s.menuLinkSixText + '"><span class="lg-dropdown-text">' + this.core.s.menuLinkSixText + "</span></a></li>" : "", 
              s += "</ul></span>", this.core.$outer.find(".lg-toolbar").prepend(s), this.core.$outer.find(".lg").append('<div id="lg-dropdown-overlay"></div>'), e("#lg-share").on("click.lg", (function() {
                  t.core.$outer.toggleClass("lg-dropdown-active")
              })), e("#lg-dropdown-overlay").on("click.lg", (function() {
                  t.core.$outer.removeClass("lg-dropdown-active")
              })), t.core.$el.on("onAfterSlide.lg.tm", (function(t, s, o) {
                  setTimeout((function() {
                      e("#menu-link-one").attr({
                          href: "#lg=1&slide=5"
                      }), e("#menu-link-two").attr({
                          href: "#lg=1&slide=21"
                      }), e("#menu-link-three").attr({
                          href: "#lg=1&slide=35"
                      }), e("#menu-link-four").attr({
                          href: "#lg=1&slide=37"
                      }), e("#menu-link-five").attr({
                          href: "#lg=1&slide=41"
                      }), e("#menu-link-six").attr({
                          href: "#lg=1&slide=49"
                      })
                  }), 300)
              }))
          }, s.prototype.getSahreProps = function(e, t) {
              var s = "";
              if (this.core.s.dynamic) s = this.core.s.dynamicEl[e][t];
              else {
                  var o = this.core.$items.eq(e).attr("href"),
                      i = this.core.$items.eq(e).data(t);
                  s = "src" === t && o || i
              }
              return s
          }, s.prototype.destroy = function() {}, e.fn.lightGallery.modules.share = s
      }()
  }));