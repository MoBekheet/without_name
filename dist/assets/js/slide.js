"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

{
  var body = document.body;
  var winSize,
      isVisible = false;

  var calcWinSize = function calcWinSize() {
    _newArrowCheck(this, _this);

    return winSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }.bind(void 0);

  calcWinSize();
  var noteSite = body.querySelectorAll('.box_noteSite > ul > li');

  var Slide = function () {
    function Slide() {
      var _this2 = this;

      this.DOM = {
        site_of_the_day: body.querySelector("section#site_of_the_day"),
        close: site_of_the_day.querySelector("#close"),
        items: site_of_the_day.querySelector("#items"),
        followers: site_of_the_day.querySelector(".followers"),
        boxLeft: site_of_the_day.querySelector("#box_left"),
        image: items.querySelectorAll(".item__img"),
        overlay: site_of_the_day.querySelector("a.overlay"),
        caption: site_of_the_day.querySelector("#caption"),
        heading: caption.querySelector("#heading-large"),
        data: caption.querySelector("#data"),
        btnSubmitYourSite: caption.querySelector("#btnSubmitYourSite")
      };
      this.items = [];

      _toConsumableArray(this.DOM.items.querySelectorAll('.item')).forEach(function (item) {
        _newArrowCheck(this, _this2);

        return this.items.push(item);
      }.bind(this));

      this.observer = new IntersectionObserver(function (entries) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        entries.forEach(function (entry) {
          _newArrowCheck(this, _this3);

          return this.isVisible = entry.intersectionRatio > 0;
        }.bind(this));
      }.bind(this));
      this.items.forEach(function (item) {
        _newArrowCheck(this, _this2);

        this.observer.observe(item);
      }.bind(this));
      this.displayItem();
      this.swiper();
      this.showCaption();
      this.noteSiteOpen();
      this.initEvents();
    }

    var _proto = Slide.prototype;

    _proto.initEvents = function initEvents() {
      var _this4 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this4);

        return this.resize();
      }.bind(this));

      if (winSize.width > 992) {
        this.DOM.close.addEventListener("click", function (_) {
          _newArrowCheck(this, _this4);

          this.closeShow();
          isVisible = false;
          TweenMax.to(this.DOM.items, 1, {
            x: 0,
            ease: Power1.easeOut
          });
          TweenMax.to(this.DOM.image, 1, {
            left: 0,
            ease: Power1.easeOut
          });
        }.bind(this));
        if (!isMobile) this.DOM.overlay.addEventListener("click", function (_) {
          _newArrowCheck(this, _this4);

          this.openShow();
          TweenMax.to(this.DOM.overlay, 1.4, {
            pointerEvents: "none",
            opacity: 0,
            ease: Power1.easeOut
          });
        }.bind(this));
      }
    };

    _proto.resize = function resize() {
      calcWinSize();
      if (isVisible == false) this.displayItem();
    };

    _proto.displayItem = function displayItem() {
      var _this5 = this;

      this.items.forEach(function (item) {
        _newArrowCheck(this, _this5);

        TweenMax.to(item, 0, {
          delay: 0,
          y: 0,
          x: winSize.width,
          ease: Expo.easeInOut
        });
      }.bind(this));
      TweenMax.to(this.items[0], 0, {
        delay: 0,
        scale: 1.4,
        y: this.items[0].clientHeight / 5.5,
        x: winSize.width / 1.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1], 0, {
        scale: 1.1,
        y: this.items[1].clientHeight / 2.2,
        x: -winSize.width / 3.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1].querySelector(".mask_img"), 0, {
        boxShadow: "20px 5px 30px 0px rgba(0, 0, 0, 0.4)"
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 0, {
        width: winSize.width / 2
      });
      TweenMax.to(this.DOM.close, 0, {
        pointerEvents: "none",
        startAt: {
          y: '0%',
          opacity: 1
        },
        opacity: 0
      });
    };

    _proto.closeShow = function closeShow() {
      var _this6 = this;

      this.items.forEach(function (item) {
        _newArrowCheck(this, _this6);

        TweenMax.to(item, 2.2, {
          delay: 0,
          y: 0,
          x: winSize.width,
          ease: Expo.easeInOut
        });
      }.bind(this));
      TweenMax.to(this.items[0], 2, {
        delay: 0,
        scale: 1.4,
        y: this.items[0].clientHeight / 5.5,
        x: winSize.width / 1.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 1, {
        boxShadow: "20px 12px 30px rgba(0, 0, 0, 0)",
        width: winSize.width / 2
      });
      TweenMax.to(this.items[1], 2, {
        scale: 1.1,
        y: this.items[1].clientHeight / 2.2,
        x: -winSize.width / 3.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1].querySelector(".mask_img"), 1, {
        boxShadow: "20px 5px 30px 0px rgba(0, 0, 0, 0.4)",
        delay: .5
      });
      TweenMax.to(this.DOM.close, 1, {
        ease: Back.easeIn,
        pointerEvents: "none",
        startAt: {
          y: '0%',
          opacity: 1
        },
        y: '100%',
        opacity: 0
      });
      TweenMax.to(this.DOM.overlay, 0, {
        delay: 1.4,
        pointerEvents: "visible"
      });
      TweenMax.to(this.DOM.overlay, 1.4, {
        opacity: 1,
        ease: Power1.easeOut
      });

      if (!isMobile) {
        this.showCaption();
        this.noteSiteOpen();
      }

      TweenMax.to(this.DOM.site_of_the_day.querySelector("#split"), 1.4, {
        delay: .33,
        x: "0%",
        y: 0,
        ease: Power2.easeInOut
      });
    };

    _proto.openShow = function openShow() {
      var _this7 = this;

      this.items.forEach(function (item) {
        _newArrowCheck(this, _this7);

        TweenMax.to(item, 1.6, {
          delay: 0,
          y: 0,
          scale: 1,
          x: 0,
          ease: Expo.easeInOut
        });
        TweenMax.to(item.querySelector(".mask_img"), 1.4, {
          boxShadow: "12px 15px 50px 0px rgba(0, 0, 0, 0.18)",
          delay: 0.55
        });
      }.bind(this));
      TweenMax.to(this.items[0], 1.4, {
        delay: 0,
        scale: 1,
        y: 0,
        x: 0,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 1.4, {
        width: function width(_) {
          _newArrowCheck(this, _this7);

          return winSize.width > 992 ? "400px" : "300px";
        }.bind(this),
        ease: Expo.easeInOut
      });
      TweenMax.to(this.DOM.site_of_the_day.querySelector("#split"), 1.2, {
        x: "-100%",
        y: 0,
        ease: Power2.easeInOut
      });
      setTimeout(function (_) {
        _newArrowCheck(this, _this7);

        this.swiper();
        isVisible = true;
      }.bind(this), 1200);
      this.noteSiteClose();
      this.closeCaption();
      TweenMax.to(this.DOM.close, 0, {
        delay: 1.4,
        pointerEvents: "visible"
      });
      TweenMax.to(this.DOM.close, 1, {
        delay: .5,
        ease: Back.easeOut,
        startAt: {
          y: '100%',
          opacity: 0
        },
        y: '0%',
        opacity: 1
      });
    };

    _proto.showCaption = function showCaption() {
      var _this8 = this;

      _toConsumableArray(this.DOM.followers.querySelectorAll("li")).forEach(function (user, index) {
        _newArrowCheck(this, _this8);

        TweenMax.to(user, .8, {
          ease: Expo.easeOut,
          delay: index * .05,
          startAt: {
            y: '0%',
            opacity: 0
          },
          y: '0%',
          opacity: 1,
          pointerEvents: "visible"
        });
      }.bind(this));

      TweenMax.to([this.DOM.heading, this.DOM.data, this.DOM.btnSubmitYourSite, this.DOM.boxLeft], .8, {
        ease: Back.easeOut,
        pointerEvents: "visible",
        startAt: {
          y: '100%',
          opacity: 0
        },
        y: '0%',
        opacity: 1
      });
    };

    _proto.closeCaption = function closeCaption() {
      var _this9 = this;

      _toConsumableArray(this.DOM.followers.querySelectorAll("li")).forEach(function (user, index) {
        _newArrowCheck(this, _this9);

        TweenMax.to(user, .8, {
          ease: Expo.easeIn,
          delay: index * .05,
          startAt: {
            y: '0%',
            opacity: 1
          },
          y: '0%',
          pointerEvents: "none",
          opacity: 0
        });
      }.bind(this));

      TweenMax.to([this.DOM.heading, this.DOM.data, this.DOM.btnSubmitYourSite, this.DOM.boxLeft], .8, {
        ease: Back.easeIn,
        pointerEvents: "none",
        startAt: {
          y: '0%',
          opacity: 1
        },
        y: '100%',
        opacity: 0
      });
    };

    _proto.swiper = function swiper() {
      var _this10 = this;

      this.DOM.site_of_the_day.addEventListener("mousemove", function (e) {
        _newArrowCheck(this, _this10);

        if (isVisible) {
          var offset = e.clientX / body.clientWidth * this.DOM.items.clientWidth - this.DOM.items.clientWidth / 3;
          var imgOffset = e.clientX / body.clientWidth * 45 - 65;
          TweenMax.to(this.DOM.image, 1, {
            left: imgOffset,
            ease: Power1.easeOut
          });
          TweenMax.to(this.DOM.items, 1, {
            x: -1 * offset,
            ease: Power1.easeOut
          });
        }
      }.bind(this));
    };

    _proto.noteSiteOpen = function noteSiteOpen() {
      var _this11 = this;

      noteSite.forEach(function (i, x) {
        _newArrowCheck(this, _this11);

        TweenMax.to(".".concat(i.className.slice(8)), 1, {
          ease: Back.easeOut,
          delay: x * .05,
          startAt: {
            y: '100%',
            opacity: 0
          },
          y: '0%',
          opacity: 1,
          pointerEvents: "visible"
        });
      }.bind(this));
    };

    _proto.noteSiteClose = function noteSiteClose() {
      var _this12 = this;

      noteSite.forEach(function (i, x) {
        _newArrowCheck(this, _this12);

        TweenMax.to(".".concat(i.className.slice(8)), .8, {
          ease: Back.easeIn,
          delay: x * .05,
          startAt: {
            y: '0%',
            opacity: 1
          },
          y: '100%',
          opacity: 0,
          pointerEvents: "none"
        });
      }.bind(this));
    };

    return Slide;
  }();

  var progressBar = function progressBar(el, from, to, _ref) {
    var animate = _ref.animate;
    var name = new ProgressBar.Circle(el, {
      color: '#aaa',
      strokeWidth: 20,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 2400,
      text: {
        autoStyleContainer: false,
        alignToBottom: true
      },
      from: {
        color: from,
        width: 1
      },
      to: {
        color: to,
        width: 7
      },
      step: function step(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
        var value = Math.round(circle.value() * 10);

        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
      }
    });
    name.animate(animate);
    name.text.style.fontFamily = '"Cairo",  sans-serif';
    name.text.style.color = '#333';
  };

  var design = new progressBar(noteSite[0], '#555', '#dc3545', {
    animate: 0.9
  });
  var usability = new progressBar(noteSite[1], '#555', '#fd7e14', {
    animate: 0.6
  });
  var creativity = new progressBar(noteSite[2], '#555', '#17a2b8', {
    animate: 0.7
  });
  var content = new progressBar(noteSite[3], '#555', '#20c997', {
    animate: 0.90
  });
  var responsive = new progressBar(noteSite[4], '#555', '#28a745', {
    animate: 0.80
  });

  var DraggableSlider = function () {
    function DraggableSlider(el) {
      this.DOM = {
        el: el
      };
      this.container = this.DOM.el;
      this.proxy = this.DOM.el.querySelector(".proxy");
      this.slider = this.DOM.el.querySelector('.swiper__inner');
      this.sliderContent = this.DOM.el.querySelector('.swiper__content');
      this.slides = _toConsumableArray(this.DOM.el.querySelectorAll('.slide'));
      this.slidesNumb = this.slides.length;
      this.sliderWidth = 0;
      this.draggable = null;
      this.current = 0;
      this.last = 0;
      this.initEvents();
      this.init();
    }

    var _proto2 = DraggableSlider.prototype;

    _proto2.setBounds = function setBounds() {
      this.sliderWidth = this.slides[0].offsetWidth * this.slidesNumb;
      TweenMax.set([this.slider, this.proxy], {
        width: this.sliderWidth,
        x: "+=0",
        skewType: "simple"
      });
    };

    _proto2.initEvents = function initEvents() {
      var _this13 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this13);

        return this.resize();
      }.bind(this));
    };

    _proto2.resize = function resize() {
      this.init();
    };

    _proto2.createDraggable = function createDraggable() {
      var slider = this.slider,
          tracker = ThrowPropsPlugin.track(slider, "x"),
          pressedTop;
      this.draggable = Draggable.create(this.proxy, {
        type: "x",
        edgeResistance: 0.75,
        onPress: function onPress(e) {
          var bounds = this.target.getBoundingClientRect();
          pressedTop = e.clientY < bounds.y + bounds.height / 2;
          this.offset = this.x - slider._gsTransform.x;
          TweenLite.killTweensOf(slider);
          TweenLite.to(slider, 0.2, {
            skewX: 0
          });
        },
        onDrag: function onDrag() {
          TweenLite.to(slider, 0.8, {
            x: this.x - this.offset,
            modifiers: {
              skewX: function skewX(v) {
                var skew = tracker.getVelocity("x") / 200;

                if (skew > 10) {
                  skew = 10;
                } else if (skew < -10) {
                  skew = -10;
                }

                return pressedTop ? -skew : skew;
              }
            },
            ease: Power2.easeOut
          });
        },
        onRelease: function onRelease() {
          if (this.tween && Math.abs(tracker.getVelocity("x")) > 20) {
            TweenLite.to(slider, this.tween.duration(), {
              throwProps: {
                x: {
                  end: this.endX
                }
              },
              ease: Power3.easeOut
            });
          }

          TweenLite.to(slider, 0.5, {
            skewX: 0,
            ease: Power1.easeOut
          });
        },
        bounds: this.container,
        throwProps: true
      })[0];
    };

    _proto2.destroy = function destroy() {
      this.draggable.kill();
    };

    _proto2.init = function init() {
      this.setBounds();
      this.createDraggable();
    };

    return DraggableSlider;
  }();

  _toConsumableArray(body.querySelectorAll('.swiper')).forEach(function (el) {
    _newArrowCheck(this, _this);

    new DraggableSlider(el);
  }.bind(void 0));

  var preloadImages = function preloadImages() {
    var _this14 = this;

    _newArrowCheck(this, _this);

    return new Promise(function (resolve, reject) {
      _newArrowCheck(this, _this14);

      imagesLoaded(document.querySelectorAll('.item__img'), {
        background: true
      }, resolve);
    }.bind(this));
  }.bind(void 0);

  preloadImages().then(function () {
    _newArrowCheck(this, _this);

    new Slide();
  }.bind(void 0));
}
//# sourceMappingURL=slide.js.map