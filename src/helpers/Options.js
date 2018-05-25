import React from 'react';
import uuid from 'uuid';

export const timeUnits = [
  {key:1, value:'10분'     },
  {key:2, value:'20분'     },
  {key:3, value:'30분'     },
  {key:4, value:'40분'     },
  {key:5, value:'50분'     },
  {key:6, value:'1시간'     },
  {key:7, value:'1시간 10분'},
  {key:8, value:'1시간 20분'},
  {key:9, value:'1시간 30분'}
]

export const hours = [
  {key:'00',  value:'0시'      },
  {key:'01',  value:'1시'      },
  {key:'02',  value:'2시'      },
  {key:'03',  value:'3시'      },
  {key:'04',  value:'4시'      },
  {key:'05',  value:'5시'      },
  {key:'06',  value:'6시'      },
  {key:'07',  value:'7시'      },
  {key:'08',  value:'8시'      },
  {key:'09',  value:'9시'      },
  {key:'10', value:'10시'     },
  {key:'11', value:'11시'     },
  {key:'12', value:'12시'     },
  {key:'13', value:'13시'     },
  {key:'14', value:'14시'     },
  {key:'15', value:'15시'     },
  {key:'16', value:'16시'     },
  {key:'17', value:'17시'     },
  {key:'18', value:'18시'     },
  {key:'19', value:'19시'     },
  {key:'20', value:'20시'     },
  {key:'21', value:'21시'     },
  {key:'22', value:'22시'     },
  {key:'23', value:'23시'     },
]

export const minutes = [
  {key:'00',   value:'0분'      },
  {key:'10',  value:'10분'      },
  {key:'20',  value:'20분'      },
  {key:'30',  value:'30분'      },
  {key:'40',  value:'40분'      },
  {key:'50',  value:'50분'      },
]

const lists = {
  timeUnits,
  hours,
  minutes
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