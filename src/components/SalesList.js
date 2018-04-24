import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faPlus, faSpinner, faSearch} from '@fortawesome/fontawesome-free-solid';
// import faPlus from '@fortawesome/fontawesome-free-solid/faSpinner';
import { Button, Table, FormGroup, Label, Input, Form } from 'reactstrap';

class SalesList extends Component {

    constructor(props){
        super(props);

        this.state = {
            searchFrom: moment(props.searchCondition.searchFrom, 'YYYYMMDD'),
            searchTo: moment(props.searchCondition.searchTo, 'YYYYMMDD')
        };
        // this.handleSearch = this.handleSearch.bind(this);
        console.log('dataList:', props.dataList);
    }

    handleSearch = () => {
        console.log('props:', this.props);
        this.props.onActions.search({
            searchFrom: this.state.searchFrom.format('YYYYMMDD'),
            searchTo: this.state.searchTo.format('YYYYMMDD')
        });
    }

    handleDatePickerChange1 = (e) => {
        let change = {...this.state}
        change.searchFrom = e;
        this.setState(change);
    }
    handleDatePickerChange2 = (e) => {
        let change = {...this.state}
        change.searchTo = e;
        this.setState(change);
    }

    render(){
        const list = this.props.dataList && this.props.dataList.length  ? (
            this.props.dataList.map( e => 
                <tr key={e.salesNo}>
                    <th scope="row">{e.salesNo}</th>
                    <td>4.18</td>
                    <td>기본</td>
                    <td>현금({e.salesPrice})</td>
                    <td>{e.salesPrice}</td>
                    <td>홍길동</td>
                    <td>수정/삭제</td>
                    <td>시술상세내역</td>
                </tr>
            )
        ) : (<tr><td colSpan="8">데이터가 없습니다.</td></tr>)

        const spinner = this.props.loading ? (<FontAwesomeIcon icon={faSpinner} spin/>) : ( <FontAwesomeIcon icon={faSearch}/> )

        return(
            <div>
                <Form inline innerRef={c=>this.form=c}>
                    <FormGroup>
                        <Label for="searchFrom" hidden>검색시작일</Label>
                        <DatePicker className="form-control" selected={this.state.searchFrom} onChange={this.handleDatePickerChange1} dateFormat="YYYYMMDD"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="searchTo" hidden>검색종료일</Label>
                        <DatePicker className="form-control" selected={this.state.searchTo} onChange={this.handleDatePickerChange2} dateFormat="YYYYMMDD"/>
                    </FormGroup>
                    <Button onClick={this.handleSearch}>
                        {spinner}검색
                    </Button>
                    <Button>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Form>
                
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">날짜</th>
                            <th scope="col">상품</th>
                            <th scope="col">결제수단</th>
                            <th scope="col">실매출액</th>
                            <th scope="col">고객명</th>
                            <th scope="col">수정/삭제</th>
                            <th scope="col">시술상세</th>
                        </tr>
                    </thead>
                    <tbody>
                       {list}
                    </tbody>
                </Table>
            </div>

        )
    }
}

export default SalesList;