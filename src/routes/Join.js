import React from 'react';
import './join.css';
import './intro.css';

const Joinpage = () => {
    return(
        <div id="join_main">
            <div className = "Join_space"><h1>회원가입</h1>
            <input type = "text" className = "J_id_box" placeholder="아이디 입력"/>
            <input type = "password" className = "J_password_box" placeholder="비밀번호 입력"/>
            <input type = "password" className = "J_password_box" placeholder="비밀번호 확인"/>
            <button type = "submit" className = "J_Login_btn">가입하기</button></div>
        </div>
    )
}

export default Joinpage;
