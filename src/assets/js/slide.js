{

  let body = document.body;
  // calculate the viewport size
  let winSize,
    isVisible = false;
  const calcWinSize = () => winSize = { width: window.innerWidth, height: window.innerHeight };
  // and recalculate on resize
  calcWinSize();
  let noteSite = body.querySelectorAll('.box_noteSite > ul > li');

  class Slide {
    constructor() {
      this.DOM = {
        site_of_the_day: body.querySelector("section#site_of_the_day"),
        close: site_of_the_day.querySelector("#close"),
        items: site_of_the_day.querySelector("#items"),
        image: items.querySelectorAll(".item__img"),
        overlay: site_of_the_day.querySelector("a.overlay"),
        caption: site_of_the_day.querySelector("#caption"),
        heading: caption.querySelector("#heading-large"),
        data: caption.querySelector("#data"),
        btnSubmitYourSite: caption.querySelector("#btnSubmitYourSite"),
      };
      this.items = [];
      [...this.DOM.items.querySelectorAll('.item')].forEach(item => this.items.push(item));
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
      });
      this.items.forEach(item => {
        this.observer.observe(item);
      });
      this.displayItem();
      this.swiper();
      this.showCaption();
      this.noteSiteOpen();
      this.initEvents();
    }
    initEvents() {
      window.addEventListener('resize', () => this.resize());
      if (winSize.width > 992) {
        this.DOM.close.addEventListener("click", _ => {
          this.closeShow()
          isVisible = false
          TweenMax.to(this.DOM.items, 1, {
            x: 0,
            ease: Power1.easeOut
          });
          TweenMax.to(this.DOM.image, 1, {
            left: 0,
            ease: Power1.easeOut
          });
        });
        if (!isMobile) this.DOM.overlay.addEventListener("click", _ => {
          this.openShow();
          TweenMax.to(this.DOM.overlay, 0, {
            pointerEvents: "none",
          });
        });
      }
    }
    resize() {
      calcWinSize()
      if (isVisible == false) this.displayItem();
    }
    displayItem() {
      this.items.forEach(item => {
        TweenMax.to(item, 0, {
          delay: 0,
          y: 0,
          x: winSize.width,
          ease: Expo.easeInOut
        })
      });
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
        x: - winSize.width / 3.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1].querySelector(".mask_img"), 0, {
        boxShadow: "20px 5px 30px 0px rgba(0, 0, 0, 0.4)",
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 0, {
        width: winSize.width / 2,
      });
      TweenMax.to(this.DOM.close, 0, {
        pointerEvents: "none",
        startAt: { y: '0%', opacity: 1 },
        opacity: 0,
      });
    }
    closeShow() {
      this.items.forEach(item => {
        TweenMax.to(item, 2.2, {
          delay: 0,
          y: 0,
          x: winSize.width,
          ease: Expo.easeInOut
        })
      });
      TweenMax.to(this.items[0], 2, {
        delay: 0,
        scale: 1.4,
        y: this.items[0].clientHeight / 5.5,
        x: winSize.width / 1.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 1, {
        boxShadow: "20px 12px 30px rgba(0, 0, 0, 0)",
        width: winSize.width / 2,
      });
      TweenMax.to(this.items[1], 2, {
        scale: 1.1,
        y: this.items[1].clientHeight / 2.2,
        x: - winSize.width / 3.8,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1].querySelector(".mask_img"), 1, {
        boxShadow: "20px 5px 30px 0px rgba(0, 0, 0, 0.4)",
        delay: .5,
      });
      TweenMax.to(this.DOM.close, 1, {
        ease: Back.easeIn,
        pointerEvents: "none",
        startAt: { y: '0%', opacity: 1 },
        y: '100%',
        opacity: 0
      });
      TweenMax.to(this.DOM.overlay, 0, {
        delay: 1.4,
        pointerEvents: "visible"
      });
      if (!isMobile) {
        this.showCaption();
        this.noteSiteOpen();
      }
      
    }
    openShow() {
      this.items.forEach(item => {
        TweenMax.to(item, 1.6, {
          delay: 0,
          y: 0,
          scale: 1,
          x: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(this.items[0], 1.4, {
          delay: 0,
          scale: 1,
          y: 0,
          x: 0,
          ease: Expo.easeInOut
        })
        TweenMax.to(item.querySelector(".mask_img"), 1.4, {
          boxShadow: "12px 15px 50px 0px rgba(0, 0, 0, 0.18)",
          delay: 0.55
        });
        TweenMax.to(this.items[0].querySelector(".mask_img"), 1.4, {
          width: _ => winSize.width > 992 ? "400px" : "300px",
          ease: Expo.easeInOut
        });
      });
      setTimeout(_ => {
        this.swiper();
        isVisible = true
      }, 1200);
      this.noteSiteClose();
      this.closeCaption();
      TweenMax.to(this.DOM.close, 0, {
        delay: 1.4,
        pointerEvents: "visible"
      });
      TweenMax.to(this.DOM.close, 1, {
        delay: .5,
        ease: Back.easeOut,
        startAt: { y: '100%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    }
    showCaption(){
      TweenMax.to([this.DOM.heading, this.DOM.data, this.DOM.btnSubmitYourSite], .8, {
        ease: Back.easeOut,
        pointerEvents: "visible",
        startAt: { y: '100%', opacity: 0 },
        y: '0%',
        opacity: 1
      });
    }
    closeCaption(){
      TweenMax.to([this.DOM.heading, this.DOM.data, this.DOM.btnSubmitYourSite], .8, {
        ease: Back.easeIn,
        pointerEvents: "none",
        startAt: { y: '0%', opacity: 1 },
        y: '100%',
        opacity: 0
      });
    }
    swiper() {
      this.DOM.site_of_the_day.addEventListener("mousemove", e => {
        if (isVisible) {
          let offset = e.clientX / body.clientWidth * this.DOM.items.clientWidth - (this.DOM.items.clientWidth / 3);
          let imgOffset = e.clientX / body.clientWidth * 45 - 65;
          [offset] = [-offset]

          TweenMax.to(this.DOM.image, 1, {
            left: imgOffset,
            ease: Power1.easeOut
          })
          TweenMax.to(this.DOM.items, 1, {
            x: offset,
            ease: Power1.easeOut
          })
        }
      })
    }
    noteSiteOpen() {
      noteSite.forEach((i, x) => {
        TweenMax.to(`.${i.className.slice(8)}`, 1, {
          ease: Back.easeOut,
          delay: x * .05,
          startAt: { y: '100%', opacity: 0 },
          y: '0%',
          opacity: 1,
          pointerEvents: "visible"
        });
      });
    }
    noteSiteClose() {
      noteSite.forEach((i, x) => {
        TweenMax.to(`.${i.className.slice(8)}`, .8, {
          ease: Back.easeIn,
          delay: x * .05,
          startAt: { y: '0%', opacity: 1 },
          y: '100%',
          opacity: 0,
          pointerEvents: "none"
        });
      });
    }
  }

 
  class DraggableSlider {

    constructor(el) {
      this.DOM = { el: el }
      this.container = this.DOM.el;
      this.proxy = this.DOM.el.querySelector(".proxy");
      this.slider = this.DOM.el.querySelector('.swiper__inner');
      this.sliderContent = this.DOM.el.querySelector('.swiper__content');
      this.slides = [...this.DOM.el.querySelectorAll('.slide')];
      this.slidesNumb = this.slides.length;
      this.sliderWidth = 0;
      this.draggable = null;
      this.current = 0;
      this.last = 0;
      this.initEvents();
      this.init();

    }

    setBounds() {
      this.sliderWidth = this.slides[0].offsetWidth * this.slidesNumb;
      TweenMax.set([this.slider, this.proxy], {
        width: this.sliderWidth, x: "+=0", skewType: "simple"
      });
    }
    initEvents() {
      window.addEventListener('resize', () => this.resize());
    }
    resize() {
      this.init();
    }
    createDraggable() {
      let slider = this.slider,
        tracker = ThrowPropsPlugin.track(slider, "x"),
        pressedTop;
      this.draggable = Draggable.create(this.proxy, {
        type: "x",
        edgeResistance: 0.75,
        onPress: function (e) {
          let bounds = this.target.getBoundingClientRect();
          pressedTop = (e.clientY < bounds.y + bounds.height / 2);
          this.offset = this.x - slider._gsTransform.x;
          TweenLite.killTweensOf(slider);
          TweenLite.to(slider, 0.2, { skewX: 0 });
        },
        onDrag: function () {
          TweenLite.to(slider, 0.8, {
            x: this.x - this.offset,
            // skewX: "+=1",
            modifiers: {
              skewX: function (v) {
                let skew = tracker.getVelocity("x") / 200;
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
        onRelease: function () {
          if (this.tween && Math.abs(tracker.getVelocity("x")) > 20) {
            TweenLite.to(slider, this.tween.duration(), { throwProps: { x: { end: this.endX } }, ease: Power3.easeOut });
          }
          TweenLite.to(slider, 0.5, { skewX: 0, ease: Power1.easeOut })
        },
        bounds: this.container,
        throwProps: true
      })[0];
    }

    destroy() {
      this.draggable.kill()
    }

    init() {
      this.setBounds()
      this.createDraggable()
    }
  }
  new Slide();
  [...body.querySelectorAll('.swiper')].forEach(el => {
    new DraggableSlider(el);
  })
}