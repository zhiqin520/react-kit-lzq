import React from 'react';
import PropTypes from 'prop-types';

function pageAdapted() {
  console.log('App.js componentDidMount pageAdapted')
  var e = 100;
  var t = document.documentElement;
  var n = t.clientWidth;
  n && (t.style.fontSize = e * (n / 414) + "px");
}

const ContextType = {
  // Enables critical path CSS rendering
  // https://github.com/kriasoft/isomorphic-style-loader
  insertCss: PropTypes.func.isRequired,
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends React.PureComponent {
  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize, false);
    // pageAdapted();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize, false);
  }

  handleWindowResize = () => {
    if (window.innerWidth < 1000) {//监听window resize事件, update rem
      pageAdapted();
    }
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    // return typeof window !== 'undefined' ? React.Children.only(this.props.children) : <div></div>;

    return React.Children.only(this.props.children);
  }
}

export default App;
