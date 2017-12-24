import React, { Component } from 'react';
import importUtils from './importUtils';

const asyncLoader = ({ jsFiles, cssFiles }) => WrappedComponent =>
  class extends Component {
    constructor(props, context) {
      super(props, context);

      this.state = {
        loadState: false,
      };

      // 标记js以及css文件是否加载成功
      this.constant = {
        isScriptLoadSucceed: !jsFiles,
        isCssLoadSucceed: !cssFiles,
      };

      this.importUtils = new importUtils();
    }

    componentWillMount() {
      if (jsFiles) {
        this.importUtils.importJs(jsFiles, () => {
          this.constant.isScriptLoadSucceed = true;
          this.handleComponent();
        });
      }

      if (cssFiles) {
        this.importUtils.importCss(cssFiles, () => {
          this.constant.isCssLoadSucceed = true;
          this.handleComponent();
        });
      }
    }

    handleComponent() {
      const { isScriptLoadSucceed, isCssLoadSucceed } = this.constant;

      if (isScriptLoadSucceed && isCssLoadSucceed) {
        this.setState({
          loadState: true,
        });
      }
    }

    render() {
      const { loadState } = this.state;
      return <WrappedComponent {...this.props} loadState={loadState} />;
    }
  };

export default asyncLoader;
