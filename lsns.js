/*
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
*/

function concat(outer, items) {
  var d = $(outer);
  for (var i=0; i<items.length; i++) $(items[i]).appendTo(d);
  return d;
}
function mkName(n) { return ('<div class="name">'+n+'</div>'); }
function mkBubble(t) { return ('<div class="bubble">'+t+'</div>'); }
function mkMsg(n, c, t) { return concat('<div class="'+c+'"/>', [mkName(n), mkBubble(t)]); }
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
  return concat('<div class="column"/>', ts);
}
function mkImg(i) { return ('<img src="'+DIR+i+'.webp" height="100px" width="100px" />'); }
function mkTitle(n, f) { 
  return '<div style="display: table-cell; vertical-align: middle; height: 100px;">' +
    '<a href="#' + idFromStr(n) + '"><h4 id="' + idFromStr(n) + '">' + n + (f !== '' ? ' &ndash; '+f : '') + '</h4></a></div>';
}
function linkify(s) {
    return s.replace(/\[(https?:\/\/[^ \]]*)( [^\]]*)?\]/gim, '<a href="$1" target="_blank">$2<img src="img/link.png" height="12px" width="12px" /></a>');
}
function mkUL(items) {
  var d = $('<ul/>');
  for (var i=0; i<items.length; i++) $('<li>'+linkify(items[i])+'</li>').appendTo(d);
  return d;
}
function mkGal(items) {
  var d = $('<div class="gallery" />');
  for (var i=0; i<items.length; i++)
    if (typeof(items[i]) === 'object') {
      if (items[i][0].includes("https://www.youtube.com/")) {
          $('<a href="' + items[i][0] + '" class="mfp-iframe"><img src="' + DIR + 'thumb-' + items[i][1] + '" height="50px" width="80px" /></a>').appendTo(d);
      } else {
          $('<a href="' + DIR + items[i][0] + '"><img alt="' + items[i][1] +'" src="' + DIR + 'thumb-' + items[i][0] + '" height="50px" width="80px" /></a>').appendTo(d);
      }
    } else {
      $('<a href="' + DIR + items[i] + '"><img alt="" src="' + DIR + 'thumb-' + items[i] + '" height="50px" width="80px" /></a>').appendTo(d);
      console.log('CHYBA ALT ', items[i]);
    }
  return d;
}
function mkProfile(img, n, f, items) {
  var title = concat('<div class="title"/>', [mkImg(img), mkTitle(n, f)]),
      text = concat('<div style=""/>', items); // display: none;
  //title.click(function() { text.toggle(); });
  return addSec('#f5f5f5', [concat('<div class="profile"/>', [title, text])]);
}
function mkItm(n, items) {
  var title = '<h4><a href="#' + idFromStr(n) + '" id="' + idFromStr(n) + '">' + n + '</a></h4>',
      text = concat('<div style=""/>', items);
  return addSec('#f5f5f5', [concat('<div class="profile"/>', [title, text])]);
}
function mkTit(t) { return '<h2>'+t+'</h2>'; }
function mkP(t) { return '<p>'+linkify(t)+'</p>'; }
function addSec(bc, its, c="section") {
  concat('<div class="'+c+'" style="background-color: '+bc+'"/>', its).appendTo($('#body'));
}

function idFromStr(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f,.?!]/g, "").replace(/[^a-z0-9]/gi,'_');
}
