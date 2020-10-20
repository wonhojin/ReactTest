import React from 'react';
import './Login.css';
import './Join';
import {Link} from 'react-router-dom';

const loginpage = () => {
    return(
        <div id="main">
            <div className = "Log_space"><h1>Logo</h1>
            <input type = "text" className = "L_id_box" placeholder="아이디"/>
            <input type = "password" className = "L_password_box" placeholder="비밀번호"/>
            <button type = "submit" className = "L_Login_btn">로그인</button>
            <Link to="/Join" id="entry">회원가입</Link>
            <a href="" id="find_id">아이디 찾기</a><a href="" id="find_password">비밀번호 찾기</a>
            </div>
        </div>
    )
}

export default loginpage;
