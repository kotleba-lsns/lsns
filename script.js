function mkName(n) { return ('<div class="name">'+n+'</div>'); }
function mkBubble(t) { return ('<div class="bubble">'+t+'</div>'); }
function mkMsg(n, c, t) { return ''.concat('<div class="'+c+'">', mkName(n), mkBubble(t), '</div>'); }
function idFromStr(str) { return str.normalize('NFD').replace(/[\u0300-\u036f,.?!]/g, "").replace(/[^a-z0-9]/gi,'_'); }
function mkDial(n1, n2, c1, c2, ts) {
  for (var i=0; i<ts.length; i++) {
    if (ts[i] === "...") {
      if (i+1 < ts.length && ts[i+1] === "...") {
        ts[i] = "<span />";
      } else {
        ts[i] = "<hr />";
      }
    } else {
      ts[i] = mkMsg(i%2 ? n2 : n1, i%2 ? c2 : c1, ts[i]);
    }
  }
  return '<div class="column">' + ts.join("\n") + '</div>';
}
function mkImg(i) { return ('<img src="'+DIR+i+'.webp" height="100px" width="100px" />'); }
function mkTitle(n, f) { 
  return '<div style="display: table-cell; vertical-align: middle; height: 100px;">' +
    '<h4><a href="#' + idFromStr(n) + '" id="' + idFromStr(n) + '">' + n + (f !== '' ? ' &ndash; '+f : '') + '</a></h4></div>';
}
function linkify(s) {
    return s.replace(/\[([^ \]]*)( [^\]]*)?\]/gim, '<a href="$1" target="_blank">$2<img src="img/link.png" height="12px" width="12px" /></a>');
}
function mkTit(t) { return '<h2>'+t+'</h2>'; }
function addSec(bc, its, c="section") {
  console.log('<div class="'+c+'" style="background-color: '+bc+'">' + its + '</div>');
}

module.exports = {

mkP: (t) => { return '<p>'+linkify(t)+'</p>'; },
mkUL: (items) => {
  for (var i=0; i<items.length; i++) items[i] = '<li>'+linkify(items[i])+'</li>';
  return '<ul>' + items.join("\n") + '</ul>';
},
mkGal: (items) => {
  for (var i=0; i<items.length; i++)
    if (typeof(items[i]) === 'object') {
      if (items[i][0].includes("https://www.youtube.com/")) {
          items[i] = '<a href="' + items[i][0] + '" class="mfp-iframe"><img src="' + DIR + 'thumb-' + items[i][1] + '" height="50px" width="80px" /></a>';
      } else {
          items[i] = '<a href="' + DIR + items[i][0] + '"><img alt="' + items[i][1] +'" src="' + DIR + 'thumb-' + items[i][0] + '" height="50px" width="80px" /></a>';
      }
    } else {
      items[i] = '<a href="' + DIR + items[i] + '"><img alt="" src="' + DIR + 'thumb-' + items[i] + '" height="50px" width="80px" /></a>';
      //console.log('CHYBA ALT ', items[i]);
    }
  return '<div class="gallery">' + items.join("\n") + '</div>';
},

mkProfile: (img, n, f, items) => {
  var title = ''.concat('<div class="title">', mkImg(img), mkTitle(n, f), '</div>'),
      text = '<div style="">' + items.join("\n") + '</div>'; // display: none;
  //title.click(function() { text.toggle(); });
  addSec('#f5f5f5', ''.concat('<div class="profile">', title, text, '</div>'));
},

mkItm: (n, items) => {
  var title = '<h4><a href="#' + idFromStr(n) + '" id="' + idFromStr(n) + '">' + n + '</a></h4>',
      text = '<div style="">' + items.join("\n") + '</div>';
  addSec('#f5f5f5', ''.concat('<div class="profile">', title, text, '</div>'));
},

header: (file, title, descr) => {
console.log(`

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:fb="http://ogp.me/ns/fb#" lang="sk">
<head>
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154912636-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-154912636-1');
</script>

  <title>Výkvet ĽSNS - ` + title + `</title>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
  <meta property="og:title" content="Výkvet ĽSNS - `+title+`" />
  <meta property="og:image" content="https://kotleba-lsns.github.io/lsns/img/logo.png" />
  <meta property="og:locale" content="sk_SK" />
  <meta name="description" content="` + descr + `" />
  <meta name="thumbnail" content="https://kotleba-lsns.github.io/lsns/img/logo.png" />
  <link rel="stylesheet" href="lsns.css">
  <link rel="stylesheet" href="magnific-popup.css">
  <script async defer crossorigin="anonymous" src="https://connect.facebook.net/sk_SK/sdk.js#xfbml=1&version=v8.0" nonce="EQAkJvAR"></script>
</head>
<body>

<header id="nav">
  <div id="fb-root"></div>
  <ul>
    <li class="nav-item` + (file=="index.html" ? " active" : "") + `"><a href="index.html">Násilníci</a></li>
    <li class="nav-item` + (file=="fasisti.html" ? " active" : "") + `"><a href="fasisti.html">Fašisti</a></li>
    <li class="nav-item` + (file=="seky.html" ? " active" : "") + `"><a href="seky.html">Šeky</a></li>
    <li class="nav-item` + (file=="hlupaci.html" ? " active" : "") + `"><a href="hlupaci.html">Hlupáci</a></li>
    <li class="nav-item` + (file=="weby.html" ? " active" : "") + `"><a href="weby.html">Kotleboweby</a></li>
    <div class="fb-share-button" data-href="https://kotleba-lsns.github.io/lsns/`+file+`" data-layout="button_count" data-size="small">
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkotleba-lsns.github.io%2Flsns%2F`+file+`&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"></a>
    </div>
  </ul>
</header>

<h1> <img src="img/logo.png" height="100px" width="101px" /> <span id="title"> ` + title + ` </span> </h1>

<quote>
`+descr+`
</quote>

<div id="body">
`);
},

footer: () => {
console.log(`
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="jquery.magnific-popup.min.js"></script>
<script>
$.extend(true, $.magnificPopup.defaults, {
    iframe: {
        patterns: {
           youtube: {
              index: 'youtube.com/',
              id: function (url) {
                var [url, t] = url.split('&t=');
                return url.split('?v=')[1] + '?autoplay=1' + (t !== undefined ? '&start='+t : '')
              },
              src: 'https://www.youtube.com/embed/%id%'
          },
          vimeo: {
              index: 'vimeo.com/',
              id: '/', 
              src: 'https://www.vimeo.com/%id%?autoplay=1'
          }
        }
    }
});

$(document).ready(function() {
  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled:true
      },
      image: {
        titleSrc: function(item) { return item.img.attr('alt'); }
      }
    });
  });

  $('.nav-item').on('click',function(){
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
  });
});
</script>
</div>
</body>
</html>
`);
}    
};
