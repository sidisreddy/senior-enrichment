import React, { Component } from 'react';
import  {ApFooter, ApFooterStyle} from 'apeman-react-footer'
 
export default class Footer extends Component {
  render () {
    return (
      <div>
        <ApFooterStyle />
        <ApFooter>
          <b> 2017 Sid Reddy </b>
        </ApFooter>
      </div>
    )
  }
}