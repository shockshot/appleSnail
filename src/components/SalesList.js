import React, { Component } from 'react';
import DatePicker from './DatePicker';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlus, faSpinner, faSearch } from '@fortawesome/fontawesome-free-solid';
import { Button, Table, FormGroup, Label, Form /*, Input, Breadcrumb, BreadcrumbItem*/ } from 'reactstrap';
import { Link } from 'react-router-dom';

class SalesList extends Component {

    constructor(props){
        super(props);

        this.state = {
            searchFrom: props.searchCondition.searchFrom,
            searchTo: props.searchCondition.searchTo
        };
        // this.handleSearch = this.handleSearch.bind(this);
        console.log('dataList:', props.dataList);
    }

    handleSearch = () => {
        console.log('props:', this.props);
        this.props.onActions.search({
            searchFrom: this.state.searchFrom,
            searchTo: this.state.searchTo
        });
    }

    handleDatePickerChange = (e) => {
        let change = {...this.state}
        change[e.name] = e.selectedDate;
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
                        <DatePicker name="searchFrom" selected={this.state.searchFrom} onChange={this.handleDatePickerChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="searchTo" hidden>검색종료일</Label>
                        <DatePicker name="searchTo" selected={this.state.searchTo} onChange={this.handleDatePickerChange} />
                    </FormGroup>
                    <Button onClick={this.handleSearch}>
                        {spinner}검색
                    </Button>
                    
                    <Link to='/sales/add'>
                        <Button>
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Link>
                    
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