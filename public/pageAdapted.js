(function pageAdapted() {
  console.log('Html.js pageAdapted')
  var e = 100;
  var t = document.documentElement;
  var n = t.clientWidth;
  n && (t.style.fontSize = e * (n / 414) + "px");
})()
