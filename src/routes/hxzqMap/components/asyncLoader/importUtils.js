String.prototype.includes = function(str) {
  if (this.indexOf(str) !== -1) {
    return true;
  }
  return false;
};

const importUtils = () => {
  const headEl = document.getElementsByTagName('head')[0];

  function importJs(jsFiles, callBack = function() {}) {
    const jsFilesLen = jsFiles.length;
    const isScriptLoadSucc = [];

    for (let i = 0; i < jsFilesLen; i++) {
      const script = document.createElement('script');

      isScriptLoadSucc[i] = false;
      script.type = 'text/javascript';
      script.async = true;
      script.src = jsFiles[i];

      script.onreadystatechange = function() {
        isScriptLoadSucc[i] = true;

        !isScriptLoadSucc.includes(false) && callBack();
      };

      script.onload = function() {
        isScriptLoadSucc[i] = true;
        !isScriptLoadSucc.includes(false) && callBack();
      };

      script.onerror = function() {
        isScriptLoadSucc[i] = true;
        !isScriptLoadSucc.includes(false) && callBack();
      };

      headEl.appendChild(script);
    }
  }

  function importCss(cssFiles, callBack = function() {}) {
    const cssFilesLen = cssFiles.length;
    const isCssLoadSucc = [];

    for (let i = 0; i < cssFilesLen; i++) {
      const link = document.createElement('link');

      isCssLoadSucc[i] = false;
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = cssFiles[i];

      link.onreadystatechange = function() {
        isCssLoadSucc[i] = true;
        !isCssLoadSucc.includes(false) && callBack(i);
      };

      link.onload = function() {
        isCssLoadSucc[i] = true;
        !isCssLoadSucc.includes(false) && callBack(i);
      };

      link.onerror = function() {
        isCssLoadSucc[i] = true;
        !isCssLoadSucc.includes(false) && callBack(i);
      };

      headEl.appendChild(link);
    }
  }

  return {
    importJs,
    importCss,
  };
};

export default importUtils;
