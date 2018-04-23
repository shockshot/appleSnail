import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

class SalesList extends Component {

    constructor(props){
        super(props);
        // this.handleSearch = this.handleSearch.bind(this);
        console.log('dataList:', props.dataList);
    }

    handleSearch = () => {

        this.props.onAction.search({
            searchFrom: this.searchFrom.value,
            searchTo: this.searchTo.value
        });
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

        return(
            <div>
                <input type="text" name="searchFrom" value={this.props.searchCondition.searchFrom} ref={c => this.searchFrom = c}/>~
                <input type="text" name="searchTo" value={this.props.searchCondition.searchTo} ref={c => this.searchTo = c}/>
                <Button onClick={this.handleSearch}>검색</Button>
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