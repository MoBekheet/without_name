"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

{
  var isMobile = false;

  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }

  var MathUtils = {
    map: function map(x, a, b, c, d) {
      _newArrowCheck(this, _this);

      return (x - a) * (d - c) / (b - a) + c;
    }.bind(void 0),
    lerp: function lerp(a, b, n) {
      _newArrowCheck(this, _this);

      return (1 - n) * a + n * b;
    }.bind(void 0)
  };
  var body = document.body,
      winSize;

  var calcWinSize = function calcWinSize() {
    _newArrowCheck(this, _this);

    return winSize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }.bind(void 0);

  calcWinSize();
  var docScroll;

  var getPageYScroll = function getPageYScroll() {
    _newArrowCheck(this, _this);

    return docScroll = window.pageYOffset || document.documentElement.scrollTop;
  }.bind(void 0);

  window.addEventListener('scroll', getPageYScroll);
  window.addEventListener('scroll', function (e) {
    _newArrowCheck(this, _this);

    e.srcElement.documentElement.scrollTop > 500 ? body.querySelector("#btnSubmitYourSite_absolute").classList.add("active") : body.querySelector("#btnSubmitYourSite_absolute").classList.remove("active");
  }.bind(void 0));
  window.addEventListener('resize', calcWinSize);
  body.querySelector("main").style.paddingTop = "".concat(body.querySelector("#backdrop").offsetHeight, "px");
  body.querySelector("aside").style.top = "".concat(body.querySelector("#backdrop").offsetHeight, "px");
  (function (_) {
    var _this2 = this;

    _newArrowCheck(this, _this);

    body.querySelector("#backdrop #hamburger > button").addEventListener("click", function (_) {
      _newArrowCheck(this, _this2);

      body.querySelector("aside").classList.toggle('active');
      body.querySelector("#backdrop #hamburger > button").classList.toggle('tcon-transform');
    }.bind(this));
  }).bind(void 0)();

  var getMousePos = function getMousePos(e) {
    _newArrowCheck(this, _this);

    var posx = e.clientX;
    var posy = e.clientY;
    return {
      x: posx,
      y: posy
    };
  }.bind(void 0);

  var mousepos = {
    x: winSize.width / 2,
    y: winSize.height / 2
  };
  window.addEventListener('mousemove', function (ev) {
    _newArrowCheck(this, _this);

    return mousepos = getMousePos(ev);
  }.bind(void 0));

  var Cursor = function () {
    function Cursor() {
      var _this3 = this;

      this.DOM = {
        cursor: body.querySelector("#cursor"),
        circle: cursor.querySelector("#circle"),
        title: cursor.querySelector("#title"),
        dot: body.querySelector("#dot"),
        move: body.querySelectorAll('.move'),
        link: body.querySelectorAll('.link'),
        dislink: body.querySelectorAll('.dislink')
      };
      this.DOM.arrows = {
        right: this.DOM.circle.querySelector('.side--right'),
        left: this.DOM.circle.querySelector('.side--left')
      };
      this.boundsCircle = this.DOM.circle.getBoundingClientRect();
      this.boundsDot = this.DOM.dot.getBoundingClientRect();
      this.renderedStyles = {
        txc: {
          previous: 0,
          current: 0,
          amt: 0.4
        },
        tyc: {
          previous: 0,
          current: 0,
          amt: 0.4
        },
        txd: {
          previous: 0,
          current: 0,
          amt: 1
        },
        tyd: {
          previous: 0,
          current: 0,
          amt: 1
        },
        txt: {
          previous: 0,
          current: 0,
          amt: 0.3
        },
        tyt: {
          previous: 0,
          current: 0,
          amt: 0.3
        },
        scale: {
          previous: 1,
          current: 1,
          amt: 0.2
        },
        scaleDot: {
          previous: 1,
          current: 1,
          amt: 0.2
        },
        color: {
          value: "#2a2a2a"
        }
      };
      this.posTitle = {
        top: 0,
        left: 20,
        right: 16
      };
      requestAnimationFrame(function () {
        _newArrowCheck(this, _this3);

        return this.render();
      }.bind(this));
      this.initEvents();

      _toConsumableArray(this.DOM.move).forEach(function (el) {
        var _this4 = this;

        _newArrowCheck(this, _this3);

        el.addEventListener('mouseenter', function (_) {
          _newArrowCheck(this, _this4);

          this.showArrows();
          this.posTitle['right'] += 7;
          this.posTitle['left'] += 7;
        }.bind(this));
        el.addEventListener('mouseleave', function (_) {
          _newArrowCheck(this, _this4);

          this.hideArrows();
          this.posTitle['right'] -= 7;
          this.posTitle['left'] -= 7;
        }.bind(this));
      }.bind(this));
    }

    var _proto = Cursor.prototype;

    _proto.render = function render() {
      var _this5 = this;

      this.renderedStyles['txc'].current = mousepos.x - this.boundsCircle.width / 2;
      this.renderedStyles['tyc'].current = mousepos.y - this.boundsCircle.height / 2;
      this.renderedStyles['txd'].current = mousepos.x - this.boundsDot.width / 2;
      this.renderedStyles['tyd'].current = mousepos.y - this.boundsDot.height / 2;
      this.renderedStyles['txt'].current = mousepos.x - this.boundsDot.width / 2;
      this.renderedStyles['tyt'].current = mousepos.y - this.boundsDot.height / 2;

      for (var key in this.renderedStyles) {
        this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
      }

      this.DOM.circle.style.transform = "translate(".concat(this.renderedStyles['txc'].previous, "px, ").concat(this.renderedStyles['tyc'].previous, "px) scale(").concat(this.renderedStyles['scale'].previous, ")");
      this.DOM.dot.style.transform = "translate(".concat(this.renderedStyles['txd'].previous, "px, ").concat(this.renderedStyles['tyd'].previous, "px) scale(").concat(this.renderedStyles['scaleDot'].previous, ")");
      this.DOM.dot.style.backgroundColor = this.renderedStyles['color'].value;
      this.DOM.title.style.transform = "translate(".concat(this.renderedStyles['txt'].previous, "px, ").concat(this.renderedStyles['tyt'].previous - 10, "px)");
      requestAnimationFrame(function () {
        _newArrowCheck(this, _this5);

        return this.render();
      }.bind(this));
    };

    _proto.initEvents = function initEvents() {
      var _this6 = this;

      window.addEventListener("mousemove", function (_) {
        _newArrowCheck(this, _this6);

        var offset = Math.round(mousepos.x / body.clientWidth);

        if (offset == 1) {
          TweenMax.to(this.DOM.title, .8, {
            ease: Back.easeOut,
            left: "auto",
            right: "".concat(this.posTitle.right, "px")
          });
        } else {
          TweenMax.to(this.DOM.title, .8, {
            ease: Back.easeOut,
            left: "".concat(this.posTitle.left, "px"),
            right: "auto"
          });
        }
      }.bind(this));

      _toConsumableArray(this.DOM.link).forEach(function (link) {
        var _this7 = this;

        _newArrowCheck(this, _this6);

        link.addEventListener('mouseenter', function (e) {
          _newArrowCheck(this, _this7);

          var target = e.target.getAttribute("data-hover");
          this.DOM.title.innerHTML = target;
          this.enter();
        }.bind(this));
        link.addEventListener('mouseleave', function (_) {
          _newArrowCheck(this, _this7);

          return this.leave();
        }.bind(this));
        link.addEventListener('click', function (_) {
          _newArrowCheck(this, _this7);

          return this.click();
        }.bind(this));
      }.bind(this));

      _toConsumableArray(this.DOM.dislink).forEach(function (i) {
        var _this8 = this;

        _newArrowCheck(this, _this6);

        i.addEventListener('mouseenter', function (e) {
          _newArrowCheck(this, _this8);

          this.DOM.title.innerHTML = e.target.getAttribute("data-hover");
          TweenMax.to(this.DOM.title, .2, {
            opacity: 1,
            ease: Back.easeOut
          });
        }.bind(this));
        i.addEventListener('mouseleave', function (e) {
          _newArrowCheck(this, _this8);

          TweenMax.to(this.DOM.title, .4, {
            opacity: 0,
            ease: Back.easeOut
          });
        }.bind(this));
      }.bind(this));
    };

    _proto.enter = function enter() {
      this.renderedStyles['scaleDot'].current = 4;
      this.renderedStyles['scale'].current = 1.9;
      this.renderedStyles['color'].value = "#fff";
      this.posTitle['right'] += 10;
      this.posTitle['left'] += 10;
      this.DOM.dot.style.mixBlendMode = "difference";
      TweenMax.to(this.DOM.title, .2, {
        opacity: 1,
        ease: Back.easeOut
      });
    };

    _proto.leave = function leave() {
      this.renderedStyles['color'].value = "#2a2a2a";
      this.renderedStyles['scaleDot'].current = 1;
      this.renderedStyles['scale'].current = 1;
      this.DOM.dot.style.mixBlendMode = "normal";
      this.posTitle['right'] -= 10;
      this.posTitle['left'] -= 10;
      TweenMax.to(this.DOM.title, .4, {
        opacity: 0,
        ease: Back.easeOut
      });
    };

    _proto.click = function click() {
      this.renderedStyles['scale'].previous = 0.4;
    };

    _proto.showArrows = function showArrows() {
      var _this9 = this;

      TweenMax.to(Object.values(this.DOM.arrows), 1, {
        ease: Expo.easeOut,
        startAt: {
          x: function x(i) {
            _newArrowCheck(this, _this9);

            return i ? -10 : 10;
          }.bind(this)
        },
        opacity: 1,
        x: 0
      });
    };

    _proto.hideArrows = function hideArrows() {
      var _this10 = this;

      TweenMax.to(Object.values(this.DOM.arrows), 1, {
        x: function x(i) {
          _newArrowCheck(this, _this10);

          return i ? 10 : -10;
        }.bind(this),
        opacity: 0,
        ease: Expo.easeOut
      });
    };

    return Cursor;
  }();

  var Item = function () {
    function Item(el) {
      var _this11 = this;

      this.DOM = {
        el: el
      };
      this.DOM.image = this.DOM.el.querySelector('.item__img');
      this.renderedStyles = {
        innerTranslationY: {
          previous: 0,
          current: 0,
          ease: 0.1,
          maxValue: parseInt(40, 10),
          setValue: function setValue() {
            _newArrowCheck(this, _this11);

            var maxValue = this.renderedStyles.innerTranslationY.maxValue;
            var minValue = -1 * maxValue;
            return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winSize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue);
          }.bind(this)
        }
      };
      this.update();
      this.observer = new IntersectionObserver(function (entries) {
        var _this12 = this;

        _newArrowCheck(this, _this11);

        entries.forEach(function (entry) {
          _newArrowCheck(this, _this12);

          return this.isVisible = entry.intersectionRatio > 0;
        }.bind(this));
      }.bind(this));
      this.observer.observe(this.DOM.el);
      this.initEvents();
    }

    var _proto2 = Item.prototype;

    _proto2.update = function update() {
      this.getSize();

      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
      }

      this.layout();
    };

    _proto2.getSize = function getSize() {
      var rect = this.DOM.el.getBoundingClientRect();
      this.props = {
        height: rect.height,
        top: docScroll + rect.top
      };
    };

    _proto2.initEvents = function initEvents() {
      var _this13 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this13);

        return this.resize();
      }.bind(this));
    };

    _proto2.resize = function resize() {
      this.update();
    };

    _proto2.render = function render() {
      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
      }

      this.layout();
    };

    _proto2.layout = function layout() {
      this.DOM.image.style.transform = "scale(1.1) translate3d(0,".concat(this.renderedStyles.innerTranslationY.previous, "px,0)");
    };

    return Item;
  }();

  var SmoothScroll = function () {
    function SmoothScroll() {
      var _this14 = this;

      this.DOM = {
        main: document.querySelector('main')
      };
      this.DOM.navBar = body.querySelector("#backdrop").offsetHeight;
      this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
      this.items = [];

      _toConsumableArray(this.DOM.main.querySelectorAll('.item_scroll')).forEach(function (item) {
        _newArrowCheck(this, _this14);

        return this.items.push(new Item(item));
      }.bind(this));

      this.renderedStyles = {
        translationY: {
          previous: 0,
          current: 0,
          ease: 0.1,
          setValue: function setValue() {
            _newArrowCheck(this, _this14);

            return docScroll;
          }.bind(this)
        }
      };
      this.DOM.main.classList.add("isVisible");
      this.setSize();
      this.update();
      this.initEvents();
      requestAnimationFrame(function () {
        _newArrowCheck(this, _this14);

        return this.render();
      }.bind(this));
    }

    var _proto3 = SmoothScroll.prototype;

    _proto3.update = function update() {
      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
      }

      this.layout();
    };

    _proto3.layout = function layout() {
      this.DOM.scrollable.style.transform = "translate3d(0,".concat(-1 * this.renderedStyles.translationY.previous, "px,0) ");
    };

    _proto3.setSize = function setSize() {
      body.style.height = "".concat(this.DOM.scrollable.scrollHeight + this.DOM.navBar, "px");
    };

    _proto3.initEvents = function initEvents() {
      var _this15 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this15);

        return this.setSize();
      }.bind(this));
    };

    _proto3.render = function render() {
      var _this16 = this;

      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
      }

      this.layout();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          if (item.isVisible) {
            item.render();
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      requestAnimationFrame(function () {
        _newArrowCheck(this, _this16);

        return this.render();
      }.bind(this));
    };

    return SmoothScroll;
  }();

  var preloadImages = function preloadImages() {
    var _this17 = this;

    _newArrowCheck(this, _this);

    return new Promise(function (resolve, reject) {
      _newArrowCheck(this, _this17);

      imagesLoaded(document.querySelectorAll('.item__img'), {
        background: true
      }, resolve);
    }.bind(this));
  }.bind(void 0);

  preloadImages().then(function () {
    var _this18 = this;

    _newArrowCheck(this, _this);

    TweenMax.to(body.querySelector(".loading"), 1, {
      opacity: 0,
      ease: Expo.easeInOut
    });
    setTimeout(function (_) {
      _newArrowCheck(this, _this18);

      body.querySelector(".loading").className = 'd-none';
    }.bind(this), 1000);
    getPageYScroll();

    if (!isMobile) {
      new SmoothScroll();
      new Cursor();
    } else {
      body.querySelector("#cursor").classList = "d-none";
      body.querySelector("#dot").classList = "d-none";
    }
  }.bind(void 0));
}
//# sourceMappingURL=main.js.map