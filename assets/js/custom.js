jQuery(function($) {

  gsap.registerPlugin(ScrollTrigger);
  
  
        const cursor = document.querySelector('#cursor');
  let mouse = { x: 300, y: 300 };
  let pos = { x: 0, y: 0 };
  const speed = 0.1; // between 0 and 1
  
  const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;
    cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
  };
  
  const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }
  
  window.addEventListener('mousemove', updateCoordinates);
  
  function loop() {
    updatePosition();
    requestAnimationFrame(loop);
  }
  
  requestAnimationFrame(loop);
    
      
      
      function splitt(){
              if(document.getElementById("blending")){
          splitterText(  
            {
            id: "blending",
            containerclass: "mask",
            class: "splitterLetter",
            escape: "*",
            from: {
              x: "-180%",
              stagger: {
                from: "left",
                amount: 0.5,
              },
            },
            to: {
              duration: 1,
              x: "0px",
              stagger: {
                from: "left",
                amount: 0.5,
              },
            },
          });  
          }
      }
      
        const pageContainer = document.querySelector(".smooth-scroll");
            pageContainer.setAttribute("data-scroll-container", "");
            const scroller = new LocomotiveScroll({
                         el: pageContainer,
                         smooth: true,
                         /*lerp: 0.09, // Linear Interpolation, 0 > 1 // Try 0.01
              multiplier: 1.4, // Effect Multiplier*/
              reloadOnContextChange: true,
              /*touchMultiplier: 2,*/
              smoothMobile: true,
              smartphone: {
                  smooth: true,
                  breakpoint: 767
              },
              tablet: {
                  smooth: true,
                  breakpoint: 1024
              },
                         getDirection: true
                     });
          
             
         
          
                     scroller.on("scroll", function (t) {
                         document.documentElement.setAttribute("data-direction", t.direction);
                         console.log("data-direction" + t.direction);
                     });
          
                     scroller.on("scroll", ScrollTrigger.update);
          
                     ScrollTrigger.scrollerProxy(pageContainer, {
                         scrollTop(value) {
                             return arguments.length
                                 ? scroller.scrollTo(value, 0, 0)
                                 : scroller.scroll.instance.scroll.y;
                         },
                         getBoundingClientRect() {
                             return {
                                 left: 0,
                                 top: 0,
                                 width: window.innerWidth,
                                 height: window.innerHeight
                             };
                         },
                         pinType: pageContainer.style.transform ? "transform" : "fixed"
                     });
       ScrollTrigger.addEventListener("refresh", () => scroller.update());
      
 
          
           
          
          if( document.readyState !== 'loading' ) {
    
          console.log( 'document is already ready, just execute code here' );
           function ScrollUpdateDelay() {
                  console.log($(".smooth-scroll").height()+"I am height");
                          setTimeout(function(){ scroller.update(); 
                  console.log($(".smooth-scroll").height());}, 500);
                     
                      }
                  
                      ScrollUpdateDelay();
      } else {
          document.addEventListener('DOMContentLoaded', function () {
              console.log( 'document was not ready, place code here' );
  
               function ScrollUpdateDelay() {
                  console.log($(".smooth-scroll").height()+"I am height");
                          setTimeout(function(){ scroller.update(); 
                  console.log($(".smooth-scroll").height());}, 500);
                     
                      }
                  
                      ScrollUpdateDelay();
          });
      }
      
      
          
          
      
      
          var templateUrl = object_name.templateUrl;
            var jours = {
                container: document.getElementById('lottieload'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                path: templateUrl +'/data.json'
              }
          
          anim = bodymovin.loadAnimation(jours);
          anim.setSpeed(0.6);
            anim.addEventListener("DOMLoaded", function(e) {
             console.log("lottie is loaded");
          setTimeout(function() {
             
           $("body").removeClass("loading"); 
            $("body").addClass("loaded"); 
          
        
          anim.destroy();
          
          }, 4000);
          
          
          
          
            });
          
          
          
  
          
          
          
          
          
           $(".nav-trigger").click(function(){
          
          
            $(this).find("span:nth-child(1)").toggleClass('top-nav-bar');
              $(this).find("span:nth-child(2)").toggleClass('fade');
            $(this).find("span:nth-child(3)").toggleClass('bottom-nav-bar');
          
            //$('.container-tab').toggleClass('shrink');
          //$(".main-fluid").toggleClass("open");
          //$("#site-logo").toggleClass("open");
          
          
          
          if($("#main-nav").hasClass("open")){
          
          $("#main-nav").css('transform', "translateX(-100%)");
          $(".nav-trigger").css('transform', 'translateX(0)');
          $("#main-nav").removeClass("open");
          
          
          
          
          
          
          //$('#site-logo').css('transform', 'translateX(' + $('#main-nav').width() + //'px)' );
          
          //$(".main-fluid").css('transform', 'translateX(' + $('#main-nav').width() + 'px)' );
          
          //console.log($('#main-nav').width());
          }
          else{
          
          $("#main-nav").css('transform', "translateX(0)");
          $(".nav-trigger").css('transform', 'translateX(' + 320 + 'px)' );
          
          $("#main-nav").addClass("open");
          
          
          //$('#site-logo').css('transform', 'translateX(0)');
          
          //$(".main-fluid").css('transform', 'translateX(0)');
          }
          });
          
          
          
          
          if(document.getElementById("countdown")) {
          
           const second = 1000,
                  minute = second * 60,
                  hour = minute * 60,
                  day = hour * 24;
          
            //I'm adding this section so I don't have to keep updating this pen every year :-)
            //remove this if you don't need it
            let today = new Date(),
                dd = String(today.getDate()).padStart(2, "0"),
                mm = String(today.getMonth() + 1).padStart(2, "0"),
                yyyy = today.getFullYear(),
                nextYear = yyyy + 1,
                dayMonth = "03/15/",
                birthday = dayMonth + yyyy;
            
            today = mm + "/" + dd + "/" + yyyy;
            if (today > birthday) {
              birthday = dayMonth + nextYear;
            }
            //end
            
            const countDown = new Date(birthday).getTime(),
                x = setInterval(function() {    
          
                  const now = new Date().getTime(),
                        distance = countDown - now;
          
                  document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          
                  //do something later when date is reached
                  if (distance < 0) {
                    document.getElementById("headline").innerText = "Shop Now";
                    document.getElementById("countdown").style.display = "none";
                    document.getElementById("end-content").style.display = "block";
                    clearInterval(x);
                  }
                  //seconds
                }, 0)
          
          }
          
         
          
          function leaveAnimation(e) {
            return new Promise(async resolve => {
              const elements = e.querySelectorAll("img, h3, h4, p");
              await bl
                .to(elements, {
                  duration: 1,
                  y: 100,
                  opacity: 0,
                  ease: "power2.inOut",
                  stagger: 0.3
                })
                .then();
              resolve()
            });
          }
          
          function enterAnimation(e) {
            return new Promise(resolve => {
              const elements = e.querySelectorAll("img, h3, h4, p");
              bl
                .from(elements, {
                  duration: 1,
                  y: 100,
                  opacity: 0,
                  ease: "power2.inOut",
                  stagger: 0.3
                })
                .then(resolve());
          
            });
          }
          
          //barba.init({
           // debug: true,
          //  transitions: [
            //  {
              //  sync: false,
              //  leave: ({ current }) =>
               //   leaveAnimation(current.container.querySelector("main")),
               // once: ({ next }) => enterAnimation(next.container.querySelector("main")),
              //  enter: ({ next }) => enterAnimation(next.container.querySelector("main"))
             // }
            //]
          //});
          
          
          
          function initScrollTriggers() {
          console.log("initScrollTriggers");
            const uncover = gsap.timeline({ paused:true })
       var scrollUp = document.querySelector('.site-header');    
  if ($(window).width() < 575) {
     console.log('Less than 575');
  ScrollTrigger.create({
      trigger:".smooth-scroll",
     scroller: "[data-scroll-container]",
   start:"top 0px",
   end: "bottom 0",
  
   onEnter() {
      scrollUp.classList.add('aos-animate');
      console.log("I entered");
        },
        
        onEnterBack() {
          scrollUp.classList.remove('aos-animate');
          console.log("I left");
        }
   //onUpdate: ({direction}) => {
       
   //  if (direction == -1) {
   //    scrollUp.classList.add('aos-animate');
  
  
  
    // } else {
    //   scrollUp.classList.add('aos-animate');
      
    // }
   //}
  });
  
  }
  
  
            ScrollTrigger.create({  
              trigger: '.smooth-scroll',
              // markers: true,
              start: 'bottom bottom',
              end: '+=95%',
              animation: uncover,
              scrub: true,  
            })
            // uncover.restart();
  
  
          }
          initScrollTriggers();
          
  
  function contact(){
  
  console.log("I am contact");
   var fieldlabels= document.querySelectorAll(".wpforms-field-label");
   var fieldwrappers= document.querySelectorAll(".wpforms-field, .wpforms-field-row-block");
          var fields = document.querySelectorAll(".wpforms-form input, .wpforms-form select, .wpforms-form textarea");
  
  fieldwrappers.forEach(function(field){
        field.classList.add("form-outline");
  
  
  
  
  
      });
  
  
  fieldlabels.forEach(function(field){
        field.classList.add("form-label");
      });
      fields.forEach(function(field){
        field.classList.add("form-control");
      });
  
  document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).init();
  });
  }
  
  function imsingle(){
  
   if(document.getElementById("product-image")){
          $(".woocommerce-product-gallery__image").click(function(){
  $(".woocommerce-product-gallery__image").css("order", "2");
  
  $(".woocommerce-product-gallery__image").removeClass("onfocus");
  $(".woocommerce-product-gallery__image").addClass("notonfocus");
  $(this).css("order", "1");
  
  
  
  $(this).removeClass("notonfocus");
  $(this).addClass("onfocus");
  });
  $(this).css("opacity", "1");
  
  console.log("I am a single product");
  }
  }
  
  function home(){
  
   
  
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".beginning",
      scroller:".smooth-scroll",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=130%",
      pinSpacing: false
   
    }
  });
  
  
  tl
  .from(".spoon", {
      
      duration:3,
    
    css: { opacity:0, translateX:250, translateY:100, rotation:0 },
     ease: "power1.easeIn"
    }, "-=1.5")
    .from(".jar", {
        
       duration:3,
       
      css: { translateY:160+'%', rotation:10 },
       ease: "power3.easeIn"
      }, "-=1")
  .to(".title-main", {
  css: { opacity:0},
  duration:1,
  ease: "power4.easeOut"
  },"-=1")
  .to(".wp-block-video", {
  
  opacity:0,
  
  duration:2,
  ease: "power4.easeOut"
  }, "+=1");
  
  
  ScrollTrigger.create({
      trigger: '#jar',
      endTrigger: '#sectionPin',
      scroller:".smooth-scroll",
      start: 'center center',
      
      pin: true,
      pinSpacing: false
  });
              
  
  
  
  
  
  
  
  
  const videos = gsap.utils.toArray('video');
  
  videos.forEach(function(video, i) {
      
      ScrollTrigger.create({
        trigger: video,
        scroller: ".smooth-scroll",
        start: 'top center',
        end: 'bottom center',
       
        onEnter: () => video.play(),
        onEnterBack: () => video.play(),
        onLeave: () => video.pause(),
        onLeaveBack: () => video.pause()
  
      });
      
    })
  
    const tt = gsap.timeline({
    scrollTrigger: {
      trigger: ".theproduct",
      scroller:".smooth-scroll",
      pin: true,
      scrub: true,
      start: "top top",
      end: "bottom top",
      toggleActions: "play none reverse none",
   
    }
  });
  
  
  tt.from(".bg", {
  
  opacity:0,
  
  
  ease: "power4.easeOut"
  })
  .to(".jar", {
  
  css: {rotation:-24 },
  ease: "power3.easeOut"
  }, "+=1")
  .from(".spoon", {
  
    css: {translateX:200, translateY:0, rotation:90 },
  ease: "power3.easeIn"
  }, "-=1");
  
  
  
    const ti = gsap.timeline({
    scrollTrigger: {
      trigger: ".ingredients",
      scroller:".smooth-scroll",
      pin: true,
      scrub: true,
    
      start: "top top",
      end: "bottom top"
    }
  });
  
  ti
  
  .from(".bg", {
    duration:2,
    css: { opacity:0},
    ease: "power3.easeIn"
  }, "+=1")
  
  
  .to(".spoon", {
  
    css: {rotation:0, translateY:200, translateX:-200},
    ease: "power3.easeIn"
  }, "-=2")
  
  
  
  .from(".deco-main", {
    duration:2,
    css: { opacity:0, scaleX:0, scaleY:0 },
    ease: "power3.easeIn"
  }, "-=1");
  
  
  
  
  
    


  
  
  // panelFive timeline
  
  
  
  
  
      var tp = gsap.timeline({
    scrollTrigger: {
      trigger: ".process",
      scroller:".smooth-scroll",
      pin: true,
      scrub: 1,
      start: "top top",
      end: "+=200%",
  
      pinSpacing:false
   
    }
  })
  
  tp
  .from(".bg1", {
    duration:2,
    opacity:0,
    ease: "power3.inOut"
  });
  
  
  
  
    /* COLOR CHANGER */
  
    const scrollColorElems = document.querySelectorAll("[data-bgcolor]");
    scrollColorElems.forEach((colorSection, i) => {
      const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
      const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;
  
      ScrollTrigger.create({
        trigger: colorSection,
        scroller: ".smooth-scroll",
  
        start: "top 50%",
        onEnter: () =>
          gsap.to(colorSection, {
            backgroundColor: colorSection.dataset.bgcolor,
            color: colorSection.dataset.textcolor,
            overwrite: "auto"
          }),
        onLeaveBack: () =>
          gsap.to(colorSection, {
            backgroundColor: prevBg,
            color: prevText,
            overwrite: "auto"
          })
      });
    });
  
    ScrollTrigger.addEventListener("refresh", () => scroller.update());
  
    ScrollTrigger.refresh();
  
  }
  
          function benefits(){
          console.log("I am benefits");
          $('.benefit-title').on('click', function() {
            const toActive = $(this).attr("data-active"); 
          
            $(".benefit-title").css("opacity", "0.5");
            $(this).css("opacity", "1");
            gsap.to(".active", {backgroundColor: 'transparent', color: "#000000", scale: .3}) 
            $(".benefit.active").removeClass("active");
            
            gsap.to(toActive, {backgroundColor: '#7A121C', color: '#fff', scale: 1, stagger: .1}) 
            $(toActive).addClass("active");
          });
          
          
          
          }
           function story(){
          console.log("I am story");
         
          
          
          
          }
          
          function enterCheckout(){
              console.log("I am checkout");
          document.querySelectorAll('.form-outline').forEach((formOutline) => {
            new mdb.Input(formOutline).init();
          });
          
          }
          
          function enterBenefits(e) {
            return new Promise(resolve => {
              const elements = e.querySelectorAll(".benefit");
              gsap
                .from(elements, {
                  duration: 1,
                  y: 100,
                  opacity: 0,
                  ease: "power2.inOut",
                  stagger: 0.3
                })
                .then(resolve());
          
            });
          }
          
      
      
      const bl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      
      function leaveAnimation(e) {
        return new Promise(async (resolve) => {
            await bl
           
      
       .to("#site-logo", {
                duration: 1.5,
                y: -20,
                opacity: 0,
              },"=-2")
      
       .to(".nav-trigger", {
      
      duration:1,
        x:0
      },"=-3")
      
       .to("#main-nav", {
      duration:1,
        x:-600
      },"=-3")
              // add any animation you like here
              .then();
            resolve();
      
      //scroller.destroy();
      
      
      
      
       setTimeout(function () {
              e.style.opacity = "0";
      $(".nav-trigger span:nth-child(1)").toggleClass('top-nav-bar');
            $(".nav-trigger span:nth-child(2)").toggleClass('fade');
          $(".nav-trigger span:nth-child(3)").toggleClass('bottom-nav-bar');
      jQuery("#main-nav").removeClass('open');
      
            }, 4000);
          });
        }
      
      
      
      
        
        function enterAnimation(e) {
      
          return new Promise(async (resolve) => {
            await bl
       .to("#site-logo", {
                duration: 1.5,
                y: 20,
                opacity: 1,
              },"=-1")
      
              // add any animation you like here
              .then();
            resolve();
      
        
           
        
          });
        
        }
      
      
      
      
      
          
          barba.init({
          
          views: [
  {
                  namespace: 'contact',
                  beforeEnter({ data }) {
          contact();
            
          
         }
          
                  }, 
  
  {
                  namespace: 'checkout',
                  beforeEnter({ data }) {
           enterCheckout();
                  // load your script
                // let script = document.createElement('script');
               // script.src = '<script src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.11.0/mdb.min.js"></script>'; 
          
               //  data.container.appendChild(script);
          
         }
          
                  }, 
          {
           namespace: 'benefits',
                  beforeEnter({ data }) {
          
          benefits();
           
                  }
         
              },
      
        {
           namespace: 'home',
                  beforeEnter({ data }) {
  splitt();
          home();
          console.log("I am home");
           
                  }
         
              },
  
  {
           namespace: 'post',
                  beforeEnter({ data }) {
       imsingle();
          console.log("I am single");
           
                  }
         
              },
  
  {
           namespace: 'tab-product',
                  beforeEnter({ data }) {
         if(document.getElementById("product-image")){
  
  $(this).fadeIn();
  }
          console.log("I am product");
           
                  }
         
              },
  {
           namespace: 'recipes',
                  beforeEnter({ data }) {
         
          console.log("I am recipes");
           
                  }
         
              },
  {
           namespace: 'journal',
                  beforeEnter({ data }) {
         
          console.log("I am journal");
           
                  }
         
              },
      
      {
           namespace: 'default',
                  beforeEnter({ data }) {
        
          console.log("I am default");
           
                  }
         
              },
  {
           namespace: 'story',
                  beforeEnter({ data }) {
       
          console.log("I am story");
           
                  }
         
              },
  {
           namespace: 'craft',
                  beforeEnter({ data }) {
          postparallax();
          console.log("I am craft");
           
                  }
         
              },
      ],
          
              transitions: [{
                  name: 'default-transition',
                  leave(data) {leaveAnimation(data.current.container)
                      return gsap.to(data.current.container, {
                          duration: 0.5,
                          y: 200,
                          opacity: 0,
                      });
                  },
       enter: (data) => enterAnimation(data.next.container),
                  after(data) {
                      return gsap.from(data.next.container, {
                          duration: 0.5,
                          y: 200,
                          opacity: 0,
                          onComplete: function() {
                            initScrollTriggers();
                          }
                      });
                  }
              }]
          });
          
          barba.hooks.afterLeave((data) => {
                //  let triggers = ScrollTrigger.getAll();
                 // triggers.forEach( trigger => { 
                  //    trigger.kill();
                //  });
         // scroller.destroy();
  
  
    
  $("xoo-wsc-modal").removeClass("xoo-wsc-cart-active");
      
  
  
      
  
  
          });
          
          barba.hooks.enter((data) => {
            //window.scrollTo(0, 0);
  
           //scroller.init();
      
      
      
          });
          
          barba.hooks.afterEnter((data) => {
            // console.log(data.next.namespace);
            // var x = data.next.namespace;
           //reInitialized();
         //ScrollTrigger.refresh();
        //  scroller.init();
  
      console.log($(".smooth-scroll").height()+"I am height");
  
  
  
  
                          setTimeout(function(){ 
      
     
  
           
     scroller.update(); 
  ScrollTrigger.refresh();
   scroller.scrollTo('top');
  
  
  
                  console.log("New Height " + $(".smooth-scroll").height());}, 500);
                     
                      
          });
          
          });