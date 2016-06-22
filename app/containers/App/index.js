import React from 'react';
import {Link} from 'react-router';
class App extends React.Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-default">
              <div className="container-fluid">
                  <div>
                      <ul className="nav navbar-nav">
                          <li><Link to="/home" >首页</Link></li>
                          <li><Link to="/user" >用户管理</Link></li>
                          <li><Link to="/profile" >个人设置</Link></li>
                      </ul>
                  </div>
              </div>
          </nav>
          <div className="container">
              {this.props.children}
          </div>
      </div>
    );
  }
}

export default App;
