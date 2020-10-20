import React from 'react';
import './header.css';
import './Logo.css';
import Logo from './Logo';
import { withRouter} from "react-router-dom";




const header = ({history}) => {
  

  return(
  <div className = "header">
    <div className="nav">
    <Logo />
        <ul>
            <li><button className="nav_btn" onClick = {()=>{history.push("/Intro")}}>소개글</button></li>
             <li><button className="nav_btn" onClick = {()=>{history.push("/Preview")}}>PRIVIEW</button></li>
             <li><button className="nav_btn" onClick = {()=>{history.push("/Mypage")}}>마이페이지</button></li>
             <li><button className="nav_btn" onClick = {()=>{history.push("/Login")}} ><div id="nav_Log">로그인</div></button></li>
        </ul>
    </div>
 </div>
)
}

export default withRouter(header);

//withRouter는 Route가 사용되지 않는 컴포넌트에서 조건부로 이동할때
//보통 로그인에 성공했을 때 특정 경로로 가고 실패하면 가만히 싶을 때 사용

/*history가 홈페이지 뒤로가기하거나 뒤로 간 상태에서 앞으로 가기등을
할 수 있는 이유는 히스토리가 남아있기 때문이다
goback() 뒤로가기
goForward()를 하면 앞으로 가기
push()를 하면 정해진 url로 갈 수 있음
Link로 url을 호출했을 경우, 해당 url로 이동 시
렌더링 된 component에는 아무런 파라미터를 주지 않아도 저절로 넘겨짐
match는 파라미터를 읽어들이고, location은 쿼리스트링을 읽어들일 때 사용*/
