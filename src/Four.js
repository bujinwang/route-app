import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Four extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <div>
        <h1>I am component Four</h1>
        <ul>
          <li><Link to='/Four/123'>4.1</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Four;
