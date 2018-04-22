import React from 'react';


const SalesList = () =>
<table className="table">
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
        <tr>
            <th scope="row">1</th>
            <td>4.18</td>
            <td>기본</td>
            <td>현금(8,000)</td>
            <td>실매출액</td>
            <td>홍길동</td>
            <td>수정/삭제</td>
            <td>시술상세내역</td>
        </tr>
    </tbody>
</table>

export default SalesList;