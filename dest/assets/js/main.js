//webp対応
async function supportsWebp() {
    if (!self.createImageBitmap) return false;
    
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const blob = await fetch(webpData).then(r => r.blob());
    return createImageBitmap(blob).then(() => true, () => false);
    
  }
  
  (async () => {
    if(await supportsWebp()) {
      console.log('does support');
    }
    else {
      console.log('does not support');
    }
  })();


  const addWebpDetectionClass = () => {
    if (supportsWebp()) {
      document.body.classList.add('is-webp');

    } else {
        document.body.classList.add('is-no-webp');
    }
  };
  
  addWebpDetectionClass(); 
  


  //アコーディオン
  const accTtls = Array.from(document.querySelectorAll('.faq__accordion--ttl'));

  accTtls.forEach((item) => {
    item.addEventListener('click', function() {
      this.classList.toggle('active');
      const accCnt = this.nextElementSibling;
      if (accCnt.style.maxHeight) {
        accCnt.style.maxHeight = null;
      } else {
        accCnt.style.maxHeight = accCnt.scrollHeight + 'px';
      }
    });
  });

  //フェイドイン
  function scroll_effect() {
    var element = document.getElementsByClassName('scroll-up');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 200; // 要素を表示するタイミング
    for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {
        element[i].classList.add('showup');
      }
    }
  }
  
  function scroll_effect02() {
    var element = document.getElementsByClassName('scroll-up02');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 200; // 要素を表示するタイミング
    setTimeout(() => {
      for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {

        element[i].classList.add('showup');
      }
    }
    }, 300);
  }
  
  function scroll_effect03() {
    var element = document.getElementsByClassName('scroll-up03');
    if(!element) return;
                        
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;
    var showTiming = 200; // 要素を表示するタイミング
    setTimeout(() => {
      for(var i = 0; i < element.length; i++) { 
      var elemClientRect = element[i].getBoundingClientRect(); 
      var elemY = scrollY + elemClientRect.top; 
      if(scrollY > elemY - windowH + showTiming) {

        element[i].classList.add('showup');
      }
    }
    }, 600);
  }
  
  window.addEventListener('scroll', scroll_effect); // スクロール時に実行
  window.addEventListener('scroll', scroll_effect02); // スクロール時に実行
  window.addEventListener('scroll', scroll_effect03); // スクロール時に実行


  // window.addEventListener('scroll', setTimeout(scroll_effect02, 200)); // スクロール時に実行


  //もっと見る
  function readmore(){
    const element = document.getElementById('whatzTxt');
    const btn = document.getElementById('whatzBtn');
    let readmore_h = element.clientHeight;
    let range = 15*17*1.7;
    console.log(readmore_h + 'px' + range);
  
    if(readmore_h > range){
      element.classList.add('small');
      btn.classList.add('active');
    }

    btn.addEventListener('click', function(){
      element.classList.remove('small');
      btn.classList.remove('active');

    });
  }
  readmore();


  //loadでふわっと表示
  function load_effect() {
    var element = document.getElementsByClassName('load-active');
    if(!element) return; // 要素がない場合は終了
    
    for(var i = 0; i < element.length; i++) { 
      element[i].classList.add('is-show');
    }
  }
  setTimeout(load_effect, 200); // 600ミリ秒経過後に実行