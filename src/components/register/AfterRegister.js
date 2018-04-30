import React from 'react';
import {Button} from 'reactstrap';
import { Link } from 'react-router-dom';

const AfterRegister = () => 
  <div>
    <Link to="/register/shop"><Button>새로운 샵을 등록합니다.</Button></Link><br />
    새로운 샵 등록 설명 <br />
    <Button>기존 샵에 직원으로 등록합니다.</Button><br />
    기존 샵 등록 설명
  </div>


export default AfterRegister;