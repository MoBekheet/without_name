"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

{
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
  var body = document.body;
  var winsize;

  var calcWinsize = function calcWinsize() {
    _newArrowCheck(this, _this);

    return winsize = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }.bind(void 0);

  calcWinsize();
  window.addEventListener('resize', calcWinsize);
  var docScroll;

  var getPageYScroll = function getPageYScroll() {
    _newArrowCheck(this, _this);

    return docScroll = window.pageYOffset || document.documentElement.scrollTop;
  }.bind(void 0);

  window.addEventListener('scroll', getPageYScroll);

  var Item = function () {
    function Item(el) {
      var _this2 = this;

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
            _newArrowCheck(this, _this2);

            var maxValue = this.renderedStyles.innerTranslationY.maxValue;
            var minValue = -1 * maxValue;
            return Math.max(Math.min(MathUtils.map(this.props.top - docScroll, winsize.height, -1 * this.props.height, minValue, maxValue), maxValue), minValue);
          }.bind(this)
        }
      };
      this.update();
      this.observer = new IntersectionObserver(function (entries) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        entries.forEach(function (entry) {
          _newArrowCheck(this, _this3);

          return this.isVisible = entry.intersectionRatio > 0;
        }.bind(this));
      }.bind(this));
      this.observer.observe(this.DOM.el);
      this.initEvents();
    }

    var _proto = Item.prototype;

    _proto.update = function update() {
      this.getSize();

      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
      }

      this.layout();
    };

    _proto.getSize = function getSize() {
      var rect = this.DOM.el.getBoundingClientRect();
      this.props = {
        height: rect.height,
        top: docScroll + rect.top
      };
    };

    _proto.initEvents = function initEvents() {
      var _this4 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this4);

        return this.resize();
      }.bind(this));
    };

    _proto.resize = function resize() {
      this.update();
    };

    _proto.render = function render() {
      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].setValue();
        this.renderedStyles[key].previous = MathUtils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].ease);
      }

      this.layout();
    };

    _proto.layout = function layout() {
      this.DOM.image.style.transform = "translate3d(0,".concat(this.renderedStyles.innerTranslationY.previous, "px,0)");
    };

    return Item;
  }();

  var SmoothScroll = function () {
    function SmoothScroll() {
      var _this5 = this;

      this.DOM = {
        main: document.querySelector('main')
      };
      this.DOM.scrollable = this.DOM.main.querySelector('div[data-scroll]');
      this.items = [];

      _toConsumableArray(this.DOM.main.querySelectorAll('.item_scroll')).forEach(function (item) {
        _newArrowCheck(this, _this5);

        return this.items.push(new Item(item));
      }.bind(this));

      this.renderedStyles = {
        translationY: {
          previous: 0,
          current: 0,
          ease: 0.1,
          setValue: function setValue() {
            _newArrowCheck(this, _this5);

            return docScroll;
          }.bind(this)
        }
      };
      this.setSize();
      this.update();
      this.initEvents();
      requestAnimationFrame(function () {
        _newArrowCheck(this, _this5);

        return this.render();
      }.bind(this));
    }

    var _proto2 = SmoothScroll.prototype;

    _proto2.update = function update() {
      for (var key in this.renderedStyles) {
        this.renderedStyles[key].current = this.renderedStyles[key].previous = this.renderedStyles[key].setValue();
      }

      this.layout();
    };

    _proto2.layout = function layout() {
      this.DOM.scrollable.style.transform = "translate3d(0,".concat(-1 * this.renderedStyles.translationY.previous, "px,0)");
    };

    _proto2.setSize = function setSize() {
      body.style.height = "".concat(this.DOM.scrollable.scrollHeight, "px");
    };

    _proto2.style = function style() {
      this.DOM.main.style.position = 'fixed';
      this.DOM.main.style.width = this.DOM.main.style.height = '100%';
      this.DOM.main.style.top = this.DOM.main.style.left = 0;
      this.DOM.main.style.overflow = 'hidden';
    };

    _proto2.initEvents = function initEvents() {
      var _this6 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this6);

        return this.setSize();
      }.bind(this));
    };

    _proto2.render = function render() {
      var _this7 = this;

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
        _newArrowCheck(this, _this7);

        return this.render();
      }.bind(this));
    };

    return SmoothScroll;
  }();

  var preloadImages = function preloadImages() {
    var _this8 = this;

    _newArrowCheck(this, _this);

    return new Promise(function (resolve, reject) {
      _newArrowCheck(this, _this8);

      imagesLoaded(document.querySelectorAll('.item__img'), {
        background: true
      }, resolve);
    }.bind(this));
  }.bind(void 0);

  preloadImages().then(function () {
    _newArrowCheck(this, _this);

    document.body.classList.remove('loading');
    getPageYScroll();
    new SmoothScroll();
  }.bind(void 0));
}
//# sourceMappingURL=smoothScroll.js.map