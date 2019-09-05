"use strict";

var _this = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

{
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }

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
  body.querySelector("main").style.paddingTop = "".concat(body.querySelector("#backdrop").offsetHeight, "px");
  body.querySelector("aside").style.top = "".concat(body.querySelector("#backdrop").offsetHeight, "px");
  body.querySelector("#backdrop #hamburger > button").addEventListener("click", function (_) {
    _newArrowCheck(this, _this);

    body.querySelector("aside").classList.toggle('active');
  }.bind(void 0));
  window.addEventListener('resize', calcWinSize);
  var mousePos = {
    x: winSize.width / 2,
    y: winSize.height / 2
  };

  var getMousePos = function getMousePos(e) {
    _newArrowCheck(this, _this);

    var posX = 0;
    var posY = 0;
    if (!e) e = window.event;

    if (e.pageX || e.pageY) {
      posX = e.pageX;
      posY = e.pageY;
    } else if (e.clientX || e.clientY) {
      posX = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posY = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posX,
      y: posY
    };
  }.bind(void 0);

  window.addEventListener('mousemove', function (e) {
    _newArrowCheck(this, _this);

    return mousePos = getMousePos(e);
  }.bind(void 0));

  var Cursor = function () {
    function Cursor() {
      var _this2 = this;

      this.DOM = {
        cursor: body.querySelector("#cursor"),
        circle: cursor.querySelector("#circle"),
        title: cursor.querySelector("#title"),
        dot: cursor.querySelector("#dot")
      };
      this.boundsCircle = this.DOM.circle.getBoundingClientRect();
      this.boundsDot = this.DOM.dot.getBoundingClientRect();
      this.renderedStyles = {
        txc: {
          previous: 0,
          current: 0,
          amt: 0.2
        },
        tyc: {
          previous: 0,
          current: 0,
          amt: 0.2
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
      this.initEvents();
      requestAnimationFrame(function () {
        _newArrowCheck(this, _this2);

        return this.render();
      }.bind(this));

      _toConsumableArray(body.querySelectorAll('.link')).forEach(function (link) {
        var _this3 = this;

        _newArrowCheck(this, _this2);

        link.addEventListener('mouseenter', function (e) {
          _newArrowCheck(this, _this3);

          var offset = Math.round(mousePos.x / body.clientWidth);
          this.DOM.title.querySelector("h4").innerHTML = e.target.getAttribute("data-hover");
          this.enter();
        }.bind(this));
        link.addEventListener('mouseleave', function (_) {
          _newArrowCheck(this, _this3);

          return this.leave();
        }.bind(this));
        link.addEventListener('click', function (_) {
          _newArrowCheck(this, _this3);

          return this.click();
        }.bind(this));
      }.bind(this));

      _toConsumableArray(body.querySelectorAll('.dislink')).forEach(function (link) {
        var _this4 = this;

        _newArrowCheck(this, _this2);

        link.addEventListener('mouseenter', function (e) {
          _newArrowCheck(this, _this4);

          this.DOM.title.querySelector("h4").innerHTML = e.target.getAttribute("data-hover");
        }.bind(this));
      }.bind(this));
    }

    var _proto = Cursor.prototype;

    _proto.initEvents = function initEvents() {
      var _this5 = this;

      window.addEventListener('resize', function () {
        _newArrowCheck(this, _this5);

        return this.resize();
      }.bind(this));
    };

    _proto.resize = function resize() {};

    _proto.lerp = function lerp(a, b, n) {
      return (1 - n) * a + n * b;
    };

    _proto.render = function render() {
      var _this6 = this;

      this.renderedStyles['txc'].current = mousePos.x - this.boundsCircle.width / 2;
      this.renderedStyles['tyc'].current = mousePos.y - this.boundsCircle.height / 2;
      this.renderedStyles['txd'].current = mousePos.x - this.boundsDot.width / 2;
      this.renderedStyles['tyd'].current = mousePos.y - this.boundsDot.height / 2;

      for (var key in this.renderedStyles) {
        this.renderedStyles[key].previous = this.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
      }

      this.DOM.circle.style.transform = "translateX(".concat(this.renderedStyles['txc'].previous, "px) translateY(").concat(this.renderedStyles['tyc'].previous, "px) scale(").concat(this.renderedStyles['scale'].previous, ")");
      this.DOM.dot.style.transform = "translateX(".concat(this.renderedStyles['txd'].previous, "px) translateY(").concat(this.renderedStyles['tyd'].previous, "px) scale(").concat(this.renderedStyles['scaleDot'].previous, ")");
      this.DOM.dot.style.backgroundColor = this.renderedStyles['color'].value;
      this.DOM.title.style.transform = "translateX(".concat(this.renderedStyles['txc'].previous, "px) translateY(").concat(this.renderedStyles['tyc'].previous, "px)");
      requestAnimationFrame(function () {
        _newArrowCheck(this, _this6);

        return this.render();
      }.bind(this));
    };

    _proto.enter = function enter() {
      this.renderedStyles['scaleDot'].current = 4;
      this.renderedStyles['scale'].current = 1.9;
      this.renderedStyles['color'].value = "#fff";
      TweenMax.to(this.DOM.title, .2, {
        opacity: 1,
        ease: Back.easeOut
      });
    };

    _proto.leave = function leave() {
      this.renderedStyles['color'].value = "#2a2a2a";
      this.renderedStyles['scaleDot'].current = 1;
      this.renderedStyles['scale'].current = 1;
      TweenMax.to(this.DOM.title, .1, {
        opacity: 0,
        ease: Back.easeOut
      });
    };

    _proto.click = function click() {
      this.renderedStyles['scale'].previous = 0.4;
    };

    return Cursor;
  }();

  new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
  new Cursor();
}
//# sourceMappingURL=main.js.map