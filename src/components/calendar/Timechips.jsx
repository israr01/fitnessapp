/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import React, { useState, Component,useRef,useEffect } from "react";
import { Button } from 'primereact/button';
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup';

const reject = () => {
};
 const accept = (time) => {
  console.log('ee',time)
};

export class Timechips extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible:false,
    }
  } 

  confirm2 = (event,time,date)=> {
    fetch('http://localhost:8055/graphql',{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        "query": `mutation {
          create_meeting_item(data: { reserved: "`+new Date(date).toISOString().substring(0, 16)+`"}) {
            id
            reserved
          }
        }
        `,
        "variables": {},
        "operationName": null
    })})
    .then((response) => response.json())
    .then((data) => {});
    const acceptCb=()=>{accept(time)};
    const rejectCb=this.reject;
    confirmPopup({
        target: event.currentTarget,
        message: 'Do you want to delete this record?',
        icon: 'pi pi-info-circle',
        acceptClassName: 'p-button-danger',
        acceptCb,
        rejectCb
    });
  };

  render() {
    return (
      <div css={css`margin:10px`}>
        <ConfirmPopup />
        <Button label={this.props.time} id="button" className="p-button-info time-metting" onClick={(e)=>{this.confirm2(e,this.props.time,this.props.freeTimes)}} />
      </div>
    );
  }
}

export default Timechips;
