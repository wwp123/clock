;(function(){
  function times() {
    let clockTime = new Date();
    let hour = clockTime.getHours();
    let min = clockTime.getMinutes();
    let sec = clockTime.getSeconds();
    hour = hour > 12 ? hour -12 : hour;
    document.querySelector('.pointer-s').style.cssText = 'transform:rotate('+ sec/60*360 +'deg)';
    document.querySelector('.pointer-m').style.cssText = 'transform:rotate('+ min/60*360 +'deg)';
    document.querySelector('.pointer-h').style.cssText = 'transform:rotate('+ (hour/12*360+min/60*30) +'deg)';
  }
  times();
  setInterval(times,1000);
})()