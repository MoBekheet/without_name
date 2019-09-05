
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
      navBar: body.querySelector("#backdrop"),
      close: body.querySelector("#close"),
      site_of_the_day: body.querySelector("section#site_of_the_day"),
      items: site_of_the_day.querySelector("#items"),
      image: items.querySelectorAll(".item__img"),
      noteSite: [...site_of_the_day.querySelectorAll('.box_noteSite > ul > li')]
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
    this.progressBar()
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
    this.DOM.site_of_the_day.addEventListener("mousemove", _ => {
      if (isVisible) {
        let offset = mousePos.x / body.clientWidth * this.DOM.items.clientWidth - (this.DOM.items.clientWidth / 3);
        let imgOffset = mousePos.x / body.clientWidth * 45 - 65;
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
  progressBar() {
    // let noteSite = [
    //   {design: this.DOM.site_of_the_day.querySelector(".design")},
    //   {usability: this.DOM.site_of_the_day.querySelector(".usability")},
    //   {creativity: this.DOM.site_of_the_day.querySelector(".creativity")},
    //   {content: this.DOM.site_of_the_day.querySelector(".content")},
    //   {mobile: this.DOM.site_of_the_day.querySelector(".mobile")}
    // ];
    this.DOM.noteSite.forEach((i, x) => {
      TweenMax.to(`.${i.className.slice(8)}`, 1.6, {
        ease: Back.easeOut,
        delay: x * .05,
        startAt: { y: '50%', opacity: 0 },
        y: '0%',
        opacity: 1
      });

      let name = new ProgressBar.Circle(`.${i.className.slice(8)}`, {
        color: '#aaa',
        strokeWidth: 3,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false,
          alignToBottom: true
        },
        from: { color: '#aaa', width: 1 },
        to: { color: '#f00', width: 4 },
        // Set default step function for all animate calls
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
      name.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
      name.text.style.fontSize = '2rem';

      name.animate(0.90);  // Number from 0.0 to 1.0

    });
  }
}
new Slide();