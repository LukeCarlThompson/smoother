(function () {
  'use strict';

  function Smoother(){
  var arguments$1 = arguments;
  for(var t=this,a=[],n=arguments.length;n--;){ a[n]=arguments$1[n]; }this.animating=!1;var i,e=[],o=0,p=25;a.map(function(a){void 0!==a.propName?(t[a.propName]={},t[a.propName].damping=a.damping||p,t[a.propName].input=a.input||o,t[a.propName].velocityCache=[],t[a.propName].output=t[a.propName].input,e.push(t[a.propName])):t.callback=a;});var u=function(){var a;cancelAnimationFrame(i),t.animating=!0,e.forEach(function(t){!function(t){var a=t.output-t.input;t.velocityCache.unshift(a);var n=t.velocityCache.reduce(function(t,a){return a+t})/t.velocityCache.length;t.velocityCache.splice(10);var i,e,o,p,u=t.damping*(.3-(i=.02))/100+i,c=(e=t.output,o=t.input,e*(1-(p=u))+o*p);t.output=c,t.velocity=n;}(t);}),(a=t).callback.apply(a,e),e.every(function(t){return Math.abs(t.output-t.input)<.5})?t.animating=!1:(cancelAnimationFrame(i),i=requestAnimationFrame(u));};this.animate=function(){t.animating||u();};}

  var box = document.querySelector(".box");
  var boxTwo = document.querySelector(".box--two");
  var boxThree = document.querySelector(".box--three");

  var boxRoll = new Smoother(
    {
      propName: "x",
      damping: 25,
    },
    {
      propName: "y",
      damping: 25,
    },
    function(x, y) {
      box.style.transform = "translate3d(" + (x.output) + "px, " + (y.output * 0.5) + "px, " + (x.velocity + y.output * 5) + "px) \n    rotateY(" + (y.velocity * 0.2) + "deg) rotateX(" + (y.velocity * 1) + "deg) rotateZ(" + (y.velocity * 0.2) + "deg)";
      boxTwo.style.transform = "translate3d(" + (x.output) + "px, " + (y.output * 0.75) + "px, " + (x.velocity + y.output * 5) + "px) \n    rotateY(" + (y.velocity * 0.2) + "deg) rotateX(" + (y.velocity * 0.25) + "deg) rotateZ(" + (y.velocity * 0.25) + "deg)";
      boxThree.style.transform = "translate3d(" + (x.output) + "px, " + (y.output * 1) + "px, " + (x.velocity + y.output * 5) + "px) \n    rotateY(" + (y.velocity * 0.2) + "deg) rotateX(" + (y.velocity * 0.1) + "deg) rotateZ(" + (y.velocity * 0.1) + "deg)";
    }
  );

  // On scroll animate
  document.addEventListener("scroll", function (e) {
    boxRoll.y.input = window.scrollY * -1 + 200;
    boxRoll.x.input = window.scrollY * 2;
    boxRoll.animate();
  });

  // let mouseDown;

  // // On click and drag follow mouse
  // document.addEventListener('mousedown', (e) => {
  //   mouseDown = true;
  // });

  // document.addEventListener('mouseup', (e) => {
  //   mouseDown = false;
  // });

  // document.addEventListener('mousemove', (e) => {
  //   if(mouseDown) {
  //     boxRoll.x.input = e.clientX - 200;
  //     boxRoll.y.input = e.clientY - 300;
  //     boxRoll.animate();
  //   }
  // });

  console.log("Index.js file 😎");

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXMiOlsiZGlzdC9zbW9vdGhlci5lc20uanMiLCJkb2NzL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNtb290aGVyKCl7Zm9yKHZhciB0PXRoaXMsYT1bXSxuPWFyZ3VtZW50cy5sZW5ndGg7bi0tOylhW25dPWFyZ3VtZW50c1tuXTt0aGlzLmFuaW1hdGluZz0hMTt2YXIgaSxlPVtdLG89MCxwPTI1O2EubWFwKGZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucHJvcE5hbWU/KHRbYS5wcm9wTmFtZV09e30sdFthLnByb3BOYW1lXS5kYW1waW5nPWEuZGFtcGluZ3x8cCx0W2EucHJvcE5hbWVdLmlucHV0PWEuaW5wdXR8fG8sdFthLnByb3BOYW1lXS52ZWxvY2l0eUNhY2hlPVtdLHRbYS5wcm9wTmFtZV0ub3V0cHV0PXRbYS5wcm9wTmFtZV0uaW5wdXQsZS5wdXNoKHRbYS5wcm9wTmFtZV0pKTp0LmNhbGxiYWNrPWF9KTt2YXIgdT1mdW5jdGlvbigpe3ZhciBhO2NhbmNlbEFuaW1hdGlvbkZyYW1lKGkpLHQuYW5pbWF0aW5nPSEwLGUuZm9yRWFjaChmdW5jdGlvbih0KXshZnVuY3Rpb24odCl7dmFyIGE9dC5vdXRwdXQtdC5pbnB1dDt0LnZlbG9jaXR5Q2FjaGUudW5zaGlmdChhKTt2YXIgbj10LnZlbG9jaXR5Q2FjaGUucmVkdWNlKGZ1bmN0aW9uKHQsYSl7cmV0dXJuIGErdH0pL3QudmVsb2NpdHlDYWNoZS5sZW5ndGg7dC52ZWxvY2l0eUNhY2hlLnNwbGljZSgxMCk7dmFyIGksZSxvLHAsdT10LmRhbXBpbmcqKC4zLShpPS4wMikpLzEwMCtpLGM9KGU9dC5vdXRwdXQsbz10LmlucHV0LGUqKDEtKHA9dSkpK28qcCk7dC5vdXRwdXQ9Yyx0LnZlbG9jaXR5PW59KHQpfSksKGE9dCkuY2FsbGJhY2suYXBwbHkoYSxlKSxlLmV2ZXJ5KGZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmFicyh0Lm91dHB1dC10LmlucHV0KTwuNX0pP3QuYW5pbWF0aW5nPSExOihjYW5jZWxBbmltYXRpb25GcmFtZShpKSxpPXJlcXVlc3RBbmltYXRpb25GcmFtZSh1KSl9O3RoaXMuYW5pbWF0ZT1mdW5jdGlvbigpe3QuYW5pbWF0aW5nfHx1KCl9fWV4cG9ydCBkZWZhdWx0IFNtb290aGVyOyIsImltcG9ydCBTbW9vdGhlciBmcm9tIFwiLi4vLi4vZGlzdC9zbW9vdGhlci5lc20uanNcIjtcblxuY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib3hcIik7XG5jb25zdCBib3hUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveC0tdHdvXCIpO1xuY29uc3QgYm94VGhyZWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJveC0tdGhyZWVcIik7XG5cbmNvbnN0IGJveFJvbGwgPSBuZXcgU21vb3RoZXIoXG4gIHtcbiAgICBwcm9wTmFtZTogXCJ4XCIsXG4gICAgZGFtcGluZzogMjUsXG4gIH0sXG4gIHtcbiAgICBwcm9wTmFtZTogXCJ5XCIsXG4gICAgZGFtcGluZzogMjUsXG4gIH0sXG4gIGZ1bmN0aW9uKHgsIHkpIHtcbiAgICBib3guc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eC5vdXRwdXR9cHgsICR7eS5vdXRwdXQgKiAwLjV9cHgsICR7eC52ZWxvY2l0eSArIHkub3V0cHV0ICogNX1weCkgXG4gICAgcm90YXRlWSgke3kudmVsb2NpdHkgKiAwLjJ9ZGVnKSByb3RhdGVYKCR7eS52ZWxvY2l0eSAqIDF9ZGVnKSByb3RhdGVaKCR7eS52ZWxvY2l0eSAqIDAuMn1kZWcpYDtcbiAgICBib3hUd28uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7eC5vdXRwdXR9cHgsICR7eS5vdXRwdXQgKiAwLjc1fXB4LCAke3gudmVsb2NpdHkgKyB5Lm91dHB1dCAqIDV9cHgpIFxuICAgIHJvdGF0ZVkoJHt5LnZlbG9jaXR5ICogMC4yfWRlZykgcm90YXRlWCgke3kudmVsb2NpdHkgKiAwLjI1fWRlZykgcm90YXRlWigke3kudmVsb2NpdHkgKiAwLjI1fWRlZylgO1xuICAgIGJveFRocmVlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3gub3V0cHV0fXB4LCAke3kub3V0cHV0ICogMX1weCwgJHt4LnZlbG9jaXR5ICsgeS5vdXRwdXQgKiA1fXB4KSBcbiAgICByb3RhdGVZKCR7eS52ZWxvY2l0eSAqIDAuMn1kZWcpIHJvdGF0ZVgoJHt5LnZlbG9jaXR5ICogMC4xfWRlZykgcm90YXRlWigke3kudmVsb2NpdHkgKiAwLjF9ZGVnKWA7XG4gIH1cbik7XG5cbi8vIE9uIHNjcm9sbCBhbmltYXRlXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGUgPT4ge1xuICBib3hSb2xsLnkuaW5wdXQgPSB3aW5kb3cuc2Nyb2xsWSAqIC0xICsgMjAwO1xuICBib3hSb2xsLnguaW5wdXQgPSB3aW5kb3cuc2Nyb2xsWSAqIDI7XG4gIGJveFJvbGwuYW5pbWF0ZSgpO1xufSk7XG5cbi8vIGxldCBtb3VzZURvd247XG5cbi8vIC8vIE9uIGNsaWNrIGFuZCBkcmFnIGZvbGxvdyBtb3VzZVxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbi8vICAgbW91c2VEb3duID0gdHJ1ZTtcbi8vIH0pO1xuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbi8vICAgbW91c2VEb3duID0gZmFsc2U7XG4vLyB9KTtcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbi8vICAgaWYobW91c2VEb3duKSB7XG4vLyAgICAgYm94Um9sbC54LmlucHV0ID0gZS5jbGllbnRYIC0gMjAwO1xuLy8gICAgIGJveFJvbGwueS5pbnB1dCA9IGUuY2xpZW50WSAtIDMwMDtcbi8vICAgICBib3hSb2xsLmFuaW1hdGUoKTtcbi8vICAgfVxuLy8gfSk7XG5cbmNvbnNvbGUubG9nKFwiSW5kZXguanMgZmlsZSDwn5iOXCIpO1xuIl0sIm5hbWVzIjpbImFyZ3VtZW50cyIsImNvbnN0Il0sIm1hcHBpbmdzIjoiOzs7RUFBQSxTQUFTLFFBQVEsRUFBRTs7RUFBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0EsV0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMs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
