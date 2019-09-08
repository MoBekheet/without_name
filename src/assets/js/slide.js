{

  let body = document.body;
  // calculate the viewport size
  let winSize,
    isVisible = false;
  const calcWinSize = () => winSize = { width: window.innerWidth, height: window.innerHeight };
  // and recalculate on resize
  calcWinSize();
  class Slide {
    constructor() {
      this.DOM = {
        close: body.querySelector("#close"),
        site_of_the_day: body.querySelector("section#site_of_the_day"),
        items: site_of_the_day.querySelector("#items"),
        image: items.querySelectorAll(".item__img"),
      };

      this.items = [];
      [...this.DOM.items.querySelectorAll('.item')].forEach(item => this.items.push(item));
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => this.isVisible = entry.intersectionRatio > 0);
      });
      this.items.forEach(item => {
        this.observer.observe(item);
      });

      this.displayItem()
      this.openShow()
      this.initEvents()
      this.swiper()
    }
    initEvents() {
      window.addEventListener('resize', () => this.resize());
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
        })
      })
      // this.DOM.site_of_the_day.addEventListener("mousemove", e => this.swiper(e))
    }
    resize() {
      calcWinSize()
      if (isVisible == false) this.displayItem();
      this.openShow()
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
        boxShadow: "20px 12px 30px rgba(0, 0, 0, 0.40)",
      });

      TweenMax.to(this.items[0].querySelector(".mask_img"), 0, {
        width: winSize.width / 2,
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
        boxShadow: "20px 12px 20px rgba(0, 0, 0, 0.40)",
        delay: .5,
      });
    }
    openShow() {
      this.DOM.site_of_the_day.querySelector("a.overlay").addEventListener("click", _ => {
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
        this.DOM.noteSite.forEach((i, x) => {
          TweenMax.from(`.${i.className}`, 1.6, {
            ease: Back.easeOut,
            delay: x * .05,
            startAt: { y: '50%', opacity: 0 },
            y: '0%',
            opacity: 1
          });
        });
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
  }

  class progressBar{
    constructor(el,from,to,{animate:animate}){
      let name = new ProgressBar.Circle(el, {
        color: '#aaa',
          strokeWidth: 20,
          trailWidth: 1,
          easing: 'easeInOut',
          duration: 2400,
          text: {
            autoStyleContainer: false,
            alignToBottom: true
          },
          from: { color: from, width: 1 },
          to: { color: to, width: 7 },
        step: function (state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);

          let value = Math.round(circle.value() * 10);
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
      [el].forEach((i, x) => {
        TweenMax.to(`.${i.className.slice(8)}`, 2, {
          ease: Back.easeOut,
          delay: x * .05,
          startAt: { y: '100%', opacity: 0 },
          y: '0%',
          opacity: 1
        });
      });
    }
  }
  let design = new progressBar(body.querySelector('.box_noteSite > ul > li.design'),'#555','#dc3545',{
    animate: 0.9
  });
  let usability = new progressBar(body.querySelector('.box_noteSite > ul > li.usability'),'#555','#fd7e14',{
    animate: 0.6
  });
  let creativity = new progressBar(body.querySelector('.box_noteSite > ul > li.creativity'),'#555','#17a2b8',{
    animate: 0.7
  });
  let content = new progressBar(body.querySelector('.box_noteSite > ul > li.content'),'#555','#20c997',{
    animate: 0.90
  });
  let responsive = new progressBar(body.querySelector('.box_noteSite > ul > li.responsive'),'#555','#28a745',{
    animate: 0.80
  });

  class DraggableSlider {

    constructor(el) {
      this.DOM = {el: el}
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
  [...body.querySelectorAll('.swiper')].forEach(el =>{
    new DraggableSlider(el);
  })
}