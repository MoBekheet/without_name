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

  var Slide = function () {
    function Slide() {
      var _this2 = this;

      this.DOM = {
        close: body.querySelector("#close"),
        site_of_the_day: body.querySelector("section#site_of_the_day"),
        items: site_of_the_day.querySelector("#items"),
        image: items.querySelectorAll(".item__img")
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
      this.openShow();
      this.initEvents();
      this.swiper();
    }

    var _proto = Slide.prototype;

    _proto.initEvents = function initEvents() {
      var _this4 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this4);

        return this.resize();
      }.bind(this));
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
    };

    _proto.resize = function resize() {
      calcWinSize();
      if (isVisible == false) this.displayItem();
      this.openShow();
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
        boxShadow: "20px 12px 30px rgba(0, 0, 0, 0.40)"
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 0, {
        width: winSize.width / 2
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
        boxShadow: "20px 12px 20px rgba(0, 0, 0, 0.40)",
        delay: .5
      });
    };

    _proto.openShow = function openShow() {
      var _this7 = this;

      this.DOM.site_of_the_day.querySelector("a.overlay").addEventListener("click", function (_) {
        var _this8 = this;

        _newArrowCheck(this, _this7);

        this.items.forEach(function (item) {
          var _this9 = this;

          _newArrowCheck(this, _this8);

          TweenMax.to(item, 1.6, {
            delay: 0,
            y: 0,
            scale: 1,
            x: 0,
            ease: Expo.easeInOut
          });
          TweenMax.to(this.items[0], 1.4, {
            delay: 0,
            scale: 1,
            y: 0,
            x: 0,
            ease: Expo.easeInOut
          });
          TweenMax.to(item.querySelector(".mask_img"), 1.4, {
            boxShadow: "12px 15px 50px 0px rgba(0, 0, 0, 0.18)",
            delay: 0.55
          });
          TweenMax.to(this.items[0].querySelector(".mask_img"), 1.4, {
            width: function width(_) {
              _newArrowCheck(this, _this9);

              return winSize.width > 992 ? "400px" : "300px";
            }.bind(this),
            ease: Expo.easeInOut
          });
        }.bind(this));
        setTimeout(function (_) {
          _newArrowCheck(this, _this8);

          this.swiper();
          isVisible = true;
        }.bind(this), 1200);
        this.DOM.noteSite.forEach(function (i, x) {
          _newArrowCheck(this, _this8);

          TweenMax.from(".".concat(i.className), 1.6, {
            ease: Back.easeOut,
            delay: x * .05,
            startAt: {
              y: '50%',
              opacity: 0
            },
            y: '0%',
            opacity: 1
          });
        }.bind(this));
      }.bind(this));
    };

    _proto.swiper = function swiper() {
      var _this10 = this;

      this.DOM.site_of_the_day.addEventListener("mousemove", function (e) {
        _newArrowCheck(this, _this10);

        if (isVisible) {
          var offset = e.clientX / body.clientWidth * this.DOM.items.clientWidth - this.DOM.items.clientWidth / 3;
          var imgOffset = e.clientX / body.clientWidth * 45 - 65;
          var _ref = [-offset];
          offset = _ref[0];
          TweenMax.to(this.DOM.image, 1, {
            left: imgOffset,
            ease: Power1.easeOut
          });
          TweenMax.to(this.DOM.items, 1, {
            x: offset,
            ease: Power1.easeOut
          });
        }
      }.bind(this));
    };

    return Slide;
  }();

  var progressBar = function progressBar(el, from, to, _ref2) {
    var _this11 = this;

    var animate = _ref2.animate;
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
    name.text.style.fontSize = '2rem';
    name.text.style.color = '#333';
    [el].forEach(function (i, x) {
      _newArrowCheck(this, _this11);

      TweenMax.to(".".concat(i.className.slice(8)), 2, {
        ease: Back.easeOut,
        delay: x * .05,
        startAt: {
          y: '100%',
          opacity: 0
        },
        y: '0%',
        opacity: 1
      });
    }.bind(this));
  };

  var design = new progressBar(body.querySelector('.box_noteSite > ul > li.design'), '#555', '#dc3545', {
    animate: 0.9
  });
  var usability = new progressBar(body.querySelector('.box_noteSite > ul > li.usability'), '#555', '#fd7e14', {
    animate: 0.6
  });
  var creativity = new progressBar(body.querySelector('.box_noteSite > ul > li.creativity'), '#555', '#17a2b8', {
    animate: 0.7
  });
  var content = new progressBar(body.querySelector('.box_noteSite > ul > li.content'), '#555', '#20c997', {
    animate: 0.90
  });
  var responsive = new progressBar(body.querySelector('.box_noteSite > ul > li.responsive'), '#555', '#28a745', {
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
      var _this12 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this12);

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

  new Slide();

  _toConsumableArray(body.querySelectorAll('.swiper')).forEach(function (el) {
    _newArrowCheck(this, _this);

    new DraggableSlider(el);
  }.bind(void 0));
}
//# sourceMappingURL=slide.js.map