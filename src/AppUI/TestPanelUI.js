import React from 'react';
import {extendObservable} from "mobx";
import {observer} from "mobx-react";
import State from "../State.js";

import icon from "../icons/paint-bucket.svg";

export default {

  title: "Test Panel",
  icon: icon,

  Widget: observer(React.createClass({

    componentWillMount() {
      extendObservable(this, {
        testvariable: 0
      })
    },

    handleClick: function() {
      this.testvariable++;
    },

    handleWideClick: function() {
      var i = 1
      console.log(State.panels[i].size);
      State.panels[i].size += 100;
      console.log(State.panels[i].size);
    },

    render: function() {
      var style = {
        padding: 8,
        minWidth: 128,
      }
      return (
        <div style={style}>
          {/* <div onClick={this.handleClick}>testvariable: {this.testvariable}</div> */}
          <input type="button" value="Test Button!" onClick={this.handleWideClick}/>
        </div>
      )
    }
  }))
};
