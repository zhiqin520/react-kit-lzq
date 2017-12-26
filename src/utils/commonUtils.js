/**
 * rem自适应布局
 */
export const pageAdapted = () => {
  var e = 100;
  var t = document.documentElement;
  var n = t.clientWidth;
  n && (t.style.fontSize = e * (n / 414) + "px");
}

/**
 * 判断一个root节点是否包含一个dom节点
 * @param root
 * @param n
 * @returns {boolean}
 */
export const isContainDom = (root, n) => {
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

/**
 * 判断是不是mobile, 以 '1000px' 为界限
 * @returns {boolean}
 */
export const isMobile = () => {
  if (window.innerWidth < '1000') {
    return true;
  }

  return false;
}

/**
 * 判断值是否为空
 * @param {string|number|object|array} value
 * @returns {boolean}
 */
export const isEmpty = (value) => {
  if (typeof value === 'object') {
    for (let key in value) {
      return false;
    }

    return true;
  }

  if (value === '--' || value === '-') {
    return true;
  }

  return !!!value && value !== 0;
};

/**
 * 获取url地址上的参数值
 * @param {string} name 参数名, {string} url 可传可不传
 * @returns {string} 参数值
 */
export const getParamByName = (name, url) => {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * 获取浏览器类型和版本
 * @param
 * @returns {object}
 */
export const getExplorerInfo = () => {
  let explorer = window.navigator.userAgent.toLowerCase();

  if (explorer.indexOf("msie") >= 0) {
    let ver = explorer.match(/msie ([\d.]+)/)[1];
    return {type: "IE", version: ver};
  } else if (explorer.indexOf("firefox") >= 0) {
    let ver = explorer.match(/firefox\/([\d.]+)/)[1];
    return {type: "Firefox", version: ver};
  } else if (explorer.indexOf("chrome") >= 0) {
    let ver = explorer.match(/chrome\/([\d.]+)/)[1];
    return {type: "Chrome", version: ver};
  } else if (explorer.indexOf("opera") >= 0) {
    let ver = explorer.match(/opera.([\d.]+)/)[1];
    return {type: "Opera", version: ver};
  } else if (explorer.indexOf("Safari") >= 0) {
    let ver = explorer.match(/version\/([\d.]+)/)[1];
    return {type: "Safari", version: ver};
  }
}


