/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

import { Calendar } from 'primereact/calendar';
import { Timechips } from './Timechips';
import React, { useState } from "react";


const FormatDate =(date,terminal)=>{
  const dateF = new Date(date);
  let mounth=dateF.getMonth()<10?'0'+dateF.getMonth():dateF.getMonth();
  mounth=parseInt(mounth)+1;
  const day=dateF.getDate()<10?'0'+dateF.getDate():dateF.getDate();
  const dataR=dateF.getFullYear()+'-'+mounth+'-'+day;
  return terminal=='begin'?dataR+'T00:00:00':dataR+'T23:59:59';
}

const diff_helf_hours=(dt2, dt1)=>{
  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 30);
  return Math.abs(Math.round(diff));
}


const CalendarCmp = () => {
  const [date1] = useState(null);
  const [freeHours,setfreeHours] = useState([]);
  const [freeTimes,setfreeTimes] = useState([]);
  const setDate1=(e)=>{
    fetch('http://localhost:8055/graphql',{
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body:  JSON.stringify({
        "query": `query {
          available_time(filter: {
            from: {_between: ["`+FormatDate(e,'begin')+`", "`+FormatDate(e,'end')+`"]}
            to: {_between: ["`+FormatDate(e,'begin')+`", "`+FormatDate(e,'end')+`"]}
          } ){
           from
           to
         }
        }`,
        "variables": {},
        "operationName": null
    })})
    .then((response) => response.json())
    .then((data) => {
      fetch('http://localhost:8055/graphql',{
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body:  JSON.stringify({
          "query": `query{
            meeting(filter: {reserved: {_between: ["`+FormatDate(e,'begin')+`", "`+FormatDate(e,'end')+`"]}}) {
              reserved
            }
          }
          `,
          "variables": {},
          "operationName": null
      })})
      .then((response) => response.json())
      .then((data1) => {
        let reserved=data1.data.meeting;

        let freetimes=[];
        let freeHoursArray=[];
        let freetimesSim=[];
        let meetingSim=[];
        if(data.data.available_time.length){
          let Halfhours=diff_helf_hours(new Date(data.data.available_time[0].from),new Date(data.data.available_time[0].to));
          var d = new Date();
          for (let index = 0; index < Halfhours; index++) {
            if(index==0)
            {
              freetimes[index]=new Date(data.data.available_time[0].from).setHours( new Date(data.data.available_time[0].from).getHours() + 1);
            }else
            {
              freetimes[index]=new Date(freetimes[index-1]).getTime() + 30*60000;
            }
          }
          for (let index = 0; index < freetimes.length; index++) {
            const element = freetimes[index];
            freetimesSim.push(new Date(element).toISOString());
          }
          for (let index = 0; index < reserved.length; index++) {
            const element = reserved[index];
            meetingSim.push(element.reserved+'.000Z');
          }
          var filteredArray = freetimesSim.filter(function(n) {
            return meetingSim.indexOf(n) == -1;
          });
          for (let index = 0; index < filteredArray.length; index++) {
           freeHoursArray[index]=("0" + parseInt(new Date(filteredArray[index]).getHours())-1).toString().slice(-2)+":"+("0" + new Date(filteredArray[index]).getMinutes()).slice(-2);
          }
          console.log(data)
          setfreeHours(freeHoursArray)
        }else
        {
          setfreeHours([])
        }
        setfreeTimes(freetimes);
      })
    })
      
  }

  return (
    <div css={css`margin:40px;display:flex;height:100%;`} >
        <Calendar inline id="basic" value={date1} onChange={(e) => setDate1(e.value)} />
        <div>
        {freeHours.map((item,index)=>{
         return <Timechips time={item} freeTimes={freeTimes[index]} key={index}/>
        })}
        </div>
    </div>
  );
};

export default CalendarCmp;
