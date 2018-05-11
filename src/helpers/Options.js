import React from 'react';
import uuid from 'uuid';

export const timeUnits = [
  {key:1, value:'10분'     },
  {key:2, value:'20분'     },
  {key:3, value:'30분'     },
  {key:4, value:'40분'     },
  {key:5, value:'50분'     },
  {key:6, value:'60분'     },
  {key:7, value:'1시간 10분'},
  {key:8, value:'1시간 20분'},
  {key:9, value:'1시간 30분'}
]


const lists = {
  timeUnits
}

export const spread = (list) => {
  if(list.constructor.name === 'String'){
    return spread(lists[list]);
  }else if(list.constructor.name === 'Array'){
    return list.map(item => 
      <option value={item.key} key={uuid()}>{item.value}</option>
    )
  }

}