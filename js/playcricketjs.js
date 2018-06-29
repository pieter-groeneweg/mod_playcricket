jQuery( document ).ready(function( $ ) {
function loadCSSIfNotAlreadyLoadedForSomeReason() {var ss = document.styleSheets;for (var i = 0, max = ss.length; i < max; i++){if (ss[i].href == " ../modules/mod_playcricket/css/live_scorer.css")return;}var link = document.createElement("link");link.rel = "stylesheet";link.href = " ../modules/mod_playcricket/css/live_scorer.css";document.getElementsByTagName("head")[0].appendChild(link);}loadCSSIfNotAlreadyLoadedForSomeReason();!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=" ../modules/mod_playcricket/js/live_scorer.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","lsw-wjs");
});

