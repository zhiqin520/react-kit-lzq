window.onload = function () {
  setCookie('width', document.documentElement.clientWidth, 1)
  window.location.reload();
}

function setCookie(c_name, value, expiredays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + (value);
}
