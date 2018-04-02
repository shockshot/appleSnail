import React from 'react';

const Home = ({history}) => {
    return (
        <div>
            홈
            <button onClick={()=>{history.push('/Login')}}>
                로그인
            </button>
        </div>
    );
};

export default Home;
