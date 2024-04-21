/*
Main SpaceHey JavaScript
(c) 2020-2023 SpaceHey.com - tibush GmbH
*/
var url_base = 'https://spacehey.com'; // default/fallback


var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => { // DOM is fully loaded (https://tobiasahlin.com/blog/move-from-jquery-to-vanilla-javascript/#document-ready)
  if (document.body.getAttribute('data-base') != '') {
    url_base = document.body.getAttribute('data-base');
  }

  if (!navigator.userAgent.toLowerCase().includes('spacehey-app')) {
    console.log("%cspacehey", "color:#1D4ED8;font-family:'Arial Rounded MT Bold','Helvetica Rounded','Comic Sans MS','Comic Sans','Arial Rounded MT Bold','Helvetica Rounded','Dyuthi',sans-serif;font-weight:bold;font-size: 3.5em;");
    console.log("%ca space for friends", "color:#1D4ED8;font-family:'Arial Rounded MT Bold','Helvetica Rounded','Comic Sans MS','Comic Sans','Arial Rounded MT Bold','Helvetica Rounded','Dyuthi',sans-serif;font-weight:bold;font-size: 1.8em;");
    console.log("%c⚠️ Attention! %cBe careful when someone tells you to paste code into this console - they might try to steal your credentials and compromise your account!", "color:red;font-weight:bold;font-size:1.4em;", "font-size:1.2em;");
  }

  document.querySelectorAll('time.ago').forEach(function (element) {
    element.setAttribute('data-timestamp', element.textContent);
    updateTimestamp(element, '', 'ago');
  });
  document.querySelectorAll('time.in').forEach(function (element) {
    element.setAttribute('data-timestamp', element.textContent);
    updateTimestamp(element, 'in', '');
  });
  document.querySelectorAll('.date').forEach(function (element) {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var date = new Date();
    element.textContent = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  });
  if (getCookie('notifications_newtab') == 'yes') {
    if (document.querySelector('.notifications #newtab')) {
      document.querySelector('.notifications #newtab').checked = true;
    }
    document.querySelectorAll('.open_notification_form').forEach(function (link) {
      link.setAttribute('target', '_blank');
    });
  }
  document.querySelectorAll('form.ctrl-enter-submit textarea, form.ctrl-enter-submit input').forEach(function (element) {
    element.addEventListener('keydown', function (event) {
      if (event.ctrlKey && event.keyCode === 13) { // CTRL + ENTER is pressed
        element.parentElement.querySelector('button[type=submit]').click(); // .submit() won't work because we have a button called "submit" which breaks it
      }
    });
  });

  if (document.getElementById('brand-agree')) {
    document.getElementById('brand-agree').checked = false;
  }
  if (document.getElementById('brand-dl')) {
    document.getElementById('brand-dl').disabled = true;
  }

  document.getElementById('brand-agree')?.addEventListener('change', function () {
    if (this.checked) {
      document.getElementById('brand-dl').disabled = false;
    } else {
      document.getElementById('brand-dl').disabled = true;
    }
  });

  document.querySelectorAll('.verified-info[data-reason]').forEach(function (element) {
    element.addEventListener('click', function () {
      var reason = element.getAttribute('data-reason');
      if (reason != '') {
        alert('Verified Account — Reason: ' + reason);
      }
    });
  });

  document.querySelectorAll('.back_btn').forEach(function (element) {
    element.addEventListener('click', function () {
      history.back();
      return;
    });
  });

  // on the /notifications page
  document.querySelector('.notifications #newtab')?.addEventListener('change', function () {
    if (document.querySelector('.notifications #newtab').checked) {
      document.querySelector('.open_notification_form')?.setAttribute('target', '_blank');
      setCookie('notifications_newtab', 'yes', 120); // save preference for 120 days (4 months)
    } else {
      document.querySelector('.open_notification_form')?.removeAttribute('target');
      deleteCookie('notifications_newtab');
    }
  });

  // image fallbacks if the CDN doesn't load
  document.querySelectorAll('img.pfp-fallback').forEach(function (element) {
    element.addEventListener('error', function () {
      var pfp_fallback = url_base + '/img/default_profile_pic.png';
      if (element.getAttribute('src') != pfp_fallback) {
        element.setAttribute('src', pfp_fallback);
        element.style.aspectRatio = "1/1";
      }
    });
  });
  document.querySelectorAll('img.logo-fallback').forEach(function (element) {
    element.addEventListener('error', function () {
      var logo_fallback = url_base + '/img/logo.svg';
      if (element.getAttribute('src') != logo_fallback) {
        element.setAttribute('src', logo_fallback);
      }
    });
  });

  document.getElementById('invite-text')?.addEventListener('input', function (e) {
    var text = document.getElementById('invite-text').value;
    var link = document.getElementById('invite-link').value;
    var text_enc = encodeURIComponent(text);
    var link_enc = encodeURIComponent(link);
    document.getElementById('twitter-link').setAttribute('href', 'https://twitter.com/intent/tweet?text=' + text_enc);
    document.getElementById('facebook-link').setAttribute('href', 'https://www.facebook.com/sharer/sharer.php?u=' + link_enc + '&quote=' + text_enc);
    document.getElementById('whatsapp-link').setAttribute('href', 'https://wa.me/?text=' + text_enc);
    document.getElementById('mastodon-link').setAttribute('href', 'https://mastodonshare.com/?text=' + text_enc + '&url=' + link_enc);
    document.getElementById('threads-link').setAttribute('href', 'https://www.threads.net/intent/post?text=' + text_enc);
    document.getElementById('pinterest-link').setAttribute('href', 'https://pinterest.com/pin/create/button/?url=' + link_enc + '&media=&description=' + text_enc);
    document.getElementById('reddit-link').setAttribute('href', 'https://reddit.com/submit?url=' + link_enc + '&title=' + text_enc);
    document.getElementById('linkedin-link').setAttribute('href', 'https://www.linkedin.com/sharing/share-offsite/?url=' + link_enc);
    document.getElementById('tumblr-link').setAttribute('href', 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=' + link_enc + '&caption=' + text_enc);
    document.getElementById('email-link').setAttribute('href', 'mailto:?body=' + text_enc);
  });

  document.getElementById('invite-copy-link')?.addEventListener('click', function () {
    var copy_text = document.getElementById('invite-text').value;

    if (!navigator.clipboard) {
      document.getElementById('invite-text').select();
      document.execCommand("copy"); // fallback
    } else {
      navigator.clipboard.writeText(copy_text);
    }
    alert('Copied to Clipboard!');
  });

});

async function updateTimestamp(element, prefix_text = '', suffix_text = '') {
  if (element.jquery) { // if the passed element is a jquery object, we need to get the first index to use it as a vanilla js element
    element = element[0];
  }
  var timestamp = element.getAttribute('data-timestamp');
  var text = timeSince(timestamp);
  var prefix = '';
  if (prefix_text != '') {
    prefix = prefix_text + ' ';
  }
  var suffix = '';
  if (suffix_text != '') {
    suffix = ' ' + suffix_text;
  }
  var output = prefix + text + suffix;
  element.textContent = output;
  element.style.opacity = '1';
  window.setTimeout(function () {
    updateTimestamp(element, prefix_text, suffix_text);
  }, 6000); // run again in a minute
}

function timeSince(timeCreated) {
  var periods = {
    year: 12 * 30 * 24 * 60 * 60 * 1000,
    month: 30 * 24 * 60 * 60 * 1000,
    week: 7 * 24 * 60 * 60 * 1000,
    day: 24 * 60 * 60 * 1000,
    hour: 60 * 60 * 1000,
    minute: 60 * 1000
  };
  var future = false;
  var diff = Date.now() - (timeCreated * 1000);
  if (diff < 0) {
    diff = diff * (-1);
    future = true;
  }
  var n = 0;
  var s = '';
  if (diff > periods.year) { // it was at least a year ago
    n = Math.floor(diff / periods.year);
    if (n == 1) {
      s = "1 year";
    } else {
      s = n + " years";
    }
  } else if (diff > periods.month) {
    n = Math.floor(diff / periods.month);
    if (n == 1) {
      s = "1 month";
    } else {
      s = n + " months";
    }
    /*
    }else if(diff == periods.week){
      n = Math.round(diff / periods.week);
      if(n == 1){
        s = "1 week";
      }else{
        s = n+" weeks";
      }
    */
  } else if (diff > periods.day) {
    n = Math.round(diff / periods.day);
    if (n == 1) {
      s = "1 day";
    } else {
      if (n % 7 == 0) {
        if (n / 7 == 1) {
          s = "1 week";
        } else {
          s = (n / 7) + " weeks";
        }
      } else {
        s = n + " days";
      }
    }
  } else if (diff > periods.hour) {
    n = Math.round(diff / periods.hour);
    if (n == 1) {
      s = "1 hour";
    } else {
      s = n + " hours";
    }
  } else if (diff > periods.minute) {
    n = Math.round(diff / periods.minute);
    if (n == 1) {
      s = "1 minute";
    } else {
      s = n + " minutes";
    }
  } else {
    s = 'a few seconds';
  }
  return s;
}
function htmlencode(value) { // https://stackoverflow.com/a/18750001
  return value.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
    return '&#' + i.charCodeAt(0) + ';';
  });
}

function setCookie(name, value, days) {
  var d = new Date();
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function deleteCookie(name) {
  setCookie(name, '', -1);
}

/*
// https://stackoverflow.com/a/1533945
$('.artproject-randomize-btn').click(function() {
  $(".new-people .inner").randomize("", ".person");
});
(function($) {
  $.fn.randomize = function(tree, childElem){
    return this.each(function(){
      var $this = $(this);
      if (tree) $this = $(this).find(tree);
      var unsortedElems = $this.children(childElem);
      var elems = unsortedElems.clone();

      elems.sort(function(){
        return (Math.round(Math.random()) - 0.5);
      });

      for(var i = 0; i < elems.length; i++)
        unsortedElems.eq(i).replaceWith(elems[i]);
    });
  };
})(jQuery);
*/
