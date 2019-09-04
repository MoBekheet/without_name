


{
  let isMobile = false; //initiate as false
  // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  //   // some code..
  // }

  // device detection
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
  }



  let body = document.body;
  // calculate the viewport size
  let winSize,
    isVisible = false;
  const calcWinSize = () => winSize = { width: window.innerWidth, height: window.innerHeight };
  // and recalculate on resize
  calcWinSize();
  body.querySelector("main").style.paddingTop = `${body.querySelector("#backdrop").offsetHeight}px`;
  body.querySelector("aside").style.top = `${body.querySelector("#backdrop").offsetHeight}px`;
  body.querySelector("#backdrop #hamburger > a").addEventListener("click", _ => {
    let test = TweenMax.to(body.querySelector("aside"), .5, {
      right: 0,
      ease: Power1.easeInOut
    }).reverse()
    if (!test.isActive()) {
      test.reversed(test.reversed())
      TweenMax.to(body.querySelector("aside"), .5, {
        right: "-300px",
        ease: Power1.easeInOut
      })
    }
    
  });
  window.addEventListener('resize', calcWinSize);


  let mousePos = { x: winSize.width / 2, y: winSize.height / 2 }
  let getMousePos = e => {
    let posX = 0;
    let posY = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
      posX = e.pageX;
      posY = e.pageY;
    }
    else if (e.clientX || e.clientY) {
      posX = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
      posY = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return { x: posX, y: posY }
  };
  window.addEventListener('mousemove', e => mousePos = getMousePos(e));

  class Slide {
    constructor() {
      this.DOM = {
        navBar: body.querySelector("#backdrop"),
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
      body.querySelector("#close").addEventListener("click", _ => {
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
      TweenMax.to(this.items[0].querySelector(".mask_img"), 0, {
        width: winSize.width / 2
      })
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
        x: winSize.width - this.items[0].clientWidth,
        ease: Expo.easeInOut
      });

      TweenMax.to(this.items[1], 0, {
        scale: 1.3,
        y: this.items[1].clientHeight / 2.2,
        x: winSize.width - (this.items[1].clientWidth * 4.2),
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1].querySelector(".mask_img"), 0, {
        boxShadow: "20px 12px 30px rgba(0, 0, 0, 0.40)",
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
        x: winSize.width - this.items[0].clientWidth,
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1], 2, {
        scale: 1.3,
        y: this.items[1].clientHeight / 2.2,
        x: winSize.width - (this.items[1].clientWidth * 4.2),
        ease: Expo.easeInOut
      });
      TweenMax.to(this.items[1].querySelector(".mask_img"), 1, {
        boxShadow: "20px 12px 20px rgba(0, 0, 0, 0.40)",
        delay: .5,
      });
      TweenMax.to(this.items[0].querySelector(".mask_img"), 1, {
        boxShadow: "20px 12px 30px rgba(0, 0, 0, 0)",
        width: winSize.width / 2
      });
    }
    openShow() {
      this.DOM.site_of_the_day.querySelector("a.overlay").addEventListener("click", _ => {
        this.items.forEach(item => {
          for (let i = 0; i < 2; i++) {
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
          }
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

  // Custom cursor
  class Cursor {
    constructor() {
      this.DOM = {
        cursor: body.querySelector("#cursor"),
        circle: cursor.querySelector("#circle"),
        title: cursor.querySelector("#title"),
        dot: cursor.querySelector("#dot")
      };
      this.boundsCircle = this.DOM.circle.getBoundingClientRect();
      this.boundsDot = this.DOM.dot.getBoundingClientRect();

      this.renderedStyles = {
        txc: { previous: 0, current: 0, amt: 0.2 },
        tyc: { previous: 0, current: 0, amt: 0.2 },
        txd: { previous: 0, current: 0, amt: 1 },
        tyd: { previous: 0, current: 0, amt: 1 },
        scale: { previous: 1, current: 1, amt: 0.2 },
        scaleDot: { previous: 1, current: 1, amt: 0.2 },
        color: { value: "#2a2a2a" }
      };

      this.initEvents();
      requestAnimationFrame(() => this.render());

      [...body.querySelectorAll('a.link, button.link, .item.link')].forEach((link) => {
        link.addEventListener('mouseenter', e => {

          let offset = Math.round(mousePos.x / body.clientWidth);
          this.DOM.title.querySelector("h4").innerHTML = e.target.getAttribute("data-hover");
          this.enter();
        });
        link.addEventListener('mouseleave', _ => this.leave());
        link.addEventListener('click', _ => this.click());
      });


      [...body.querySelectorAll('.dislink')].forEach((link) => {
        link.addEventListener('mouseenter', e => {
          this.DOM.title.querySelector("h4").innerHTML = e.target.getAttribute("data-hover");
        });
      });
    }

    initEvents() {
      window.addEventListener('resize', () => this.resize());
    }

    resize() {
    }

    lerp(a, b, n) { return (1 - n) * a + n * b }
    render() {
      this.renderedStyles['txc'].current = mousePos.x - this.boundsCircle.width / 2;
      this.renderedStyles['tyc'].current = mousePos.y - this.boundsCircle.height / 2;

      this.renderedStyles['txd'].current = mousePos.x - this.boundsDot.width / 2;
      this.renderedStyles['tyd'].current = mousePos.y - this.boundsDot.height / 2;

      for (const key in this.renderedStyles) {
        this.renderedStyles[key].previous = this.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
      }

      this.DOM.circle.style.transform = `translateX(${(this.renderedStyles['txc'].previous)}px) translateY(${this.renderedStyles['tyc'].previous}px) scale(${this.renderedStyles['scale'].previous})`;
      this.DOM.dot.style.transform = `translateX(${(this.renderedStyles['txd'].previous)}px) translateY(${this.renderedStyles['tyd'].previous}px) scale(${this.renderedStyles['scaleDot'].previous})`;
      this.DOM.dot.style.backgroundColor = this.renderedStyles['color'].value;
      this.DOM.title.style.transform = `translateX(${(this.renderedStyles['txc'].previous)}px) translateY(${this.renderedStyles['tyc'].previous}px)`;

      requestAnimationFrame(() => this.render());
    }
    enter() {
      this.renderedStyles['scaleDot'].current = 4;
      this.renderedStyles['scale'].current = 1.9;
      this.renderedStyles['color'].value = "#fff";
      TweenMax.to(this.DOM.title, .2, {
        opacity: 1,
        ease: Back.easeOut
      });
    }
    leave() {
      this.renderedStyles['color'].value = "#2a2a2a";
      this.renderedStyles['scaleDot'].current = 1;
      this.renderedStyles['scale'].current = 1;
      TweenMax.to(this.DOM.title, .1, {
        opacity: 0,
        ease: Back.easeOut
      });
    }
    click() {
      this.renderedStyles['scale'].previous = 0.4;
    }

  }

  new Cursor();
  new Slide();
}

