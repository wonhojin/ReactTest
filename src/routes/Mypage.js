import React, { useState } from 'react';

import './Routes';
import './Mypage.css';
import Searchbar from '../component/Searchbar';
import trash from './shop_images/container.png';


const Mypage = () => {
    const onClickFolder = ()=>{
        setList(()=>{
            return(<div id = "file_index">
            <table className="list_table">
                <thead>
                    <tr  id = "list_header">
                        <th>No</th>
                        <th>책제목</th>
                        <th>저자</th>
                        <th>출판사</th>
                        <th>추가</th>
                    </tr >
                </thead>
                <tbody className="list_tbody">
                    <tr>
                        <th>1</th> 
                        <th>코끼리는 생각하지마</th>
                        <th>조지 레이코프</th>
                        <th>삼인</th>
                        <th><button className="plus">+</button></th>

                    </tr>
                    <tr>
                        <th>2</th>
                        <th>Nudge</th>
                        <th>리처드</th>
                        <th>리더스북</th>
                        <th><button className="plus">+</button></th>
                    </tr>
                    <tr>
                        <th>3</th>
                        <th>코끼리는 생각하지마</th>
                        <th>조지 레이코프</th>
                        <th>삼인</th>
                        <th><button className="plus">+</button></th>

                    </tr>
                    <tr>
                        <th>4</th>
                        <th>Nudge</th>
                        <th>리처드</th>
                        <th>리더스북</th>
                        <th><button className="plus">+</button></th>
                    </tr>

                </tbody>
            </table>
        </div>)
        })
    }
    const clickAnother = ()=>{
        setList(()=>{
            return(<div id = "file_index"></div>)
        })
    }
    const [table, setTable] = useState(()=>{
        return(
            <table className="folder_table">
            <thead>
                <tr id="t_head">
                    <th>NO</th>
                    <th id="t_header_content">내용</th>
                    <th>책 개수</th>
                    <th>다운로드</th>
                </tr>
            </thead>
            <tbody className="folder_tbody">
                <tr onClick = {onClickFolder}>
                    <th id="number">1</th>
                    <th>찜 목록</th>
                    <th>총 5 개</th>
                    <th><button type="download">download</button></th>
                </tr>
                <tr onClick = {clickAnother}>
                    <th id="number">2</th>
                    <th>3월</th>
                    <th>총 5 개</th>
                    <th><button type="download">download</button></th>
                </tr>
            </tbody>
        </table>
        )
    });
    const checkTable = ()=>{
        changeButton();
        setTable(()=>{
            return (
                <div><button className="trash"><img src={trash} id="trash"/></button>
                    <table className="folder_table">
                        <thead>
                            <tr id="t_head">
                                <th>NO</th>
                                <th id="t_header_content">내용</th>
                                <th>책 개수</th>
                                <th>다운로드</th>
                            </tr>
                        </thead>
                        <tbody className="folder_tbody">
                            <tr>
                                <th><input type="checkbox"></input></th>
                                <th>찜 목록</th>
                                <th>총 5 개</th>
                                <th><button type="download">download</button></th>
                            </tr>
                            <tr>
                                <th><input type="checkbox"></input></th>
                                <th>3월</th>
                                <th>총 5 개</th>
                                <th><button type="download">download</button></th>
                            </tr>
                        </tbody>
                    </table>
               </div>
            )
        })
    }
    const goback_myTable = ()=>{
        resetButton();
        setTable(()=>{
            return(
                <table className="folder_table">
                    <thead>
                        <tr id="t_head">
                            <th>NO</th>
                            <th id="t_header_content">내용</th>
                            <th>책 개수</th>
                            <th>다운로드</th>
                        </tr>
                    </thead>
                    <tbody className="folder_tbody">
                        <tr onClick = {onClickFolder}>
                            <th id="number">1</th>
                            <th>찜 목록</th>
                            <th>총 5 개</th>
                            <th><button type="download">download</button></th>
                        </tr>
                        <tr onClick = {clickAnother}>
                            <th id="number">2</th>
                            <th>3월</th>
                            <th>총 5 개</th>
                            <th><button type="download">download</button></th>
                        </tr>
            
                    </tbody>
                </table>
            )
        })

    }
    const [button, setButton] = useState(()=>{
        return( <button id = "remove" onClick = {checkTable}>선택</button>)
    });
    const changeButton =()=>{
        setButton(()=>{
            return ( <button id = "remove" onClick = {goback_myTable}>돌아가기</button>)
        })
    }
    const resetButton =()=>{
        setButton(()=>{
            return( <button id = "remove" onClick = {checkTable}>선택</button>)
        })
    }

    const [list,setList] = useState(()=>{
        return(<div id = "file_index"></div>)
    });

   

    return(
        <div className="main">
            <div id="My_field">
                <div id="mypage_searchbox"><Searchbar/></div>
                    <div id = "title"><h1>마이 페이지</h1></div>
                <div id = "index_table">
                    <div id="folder_index">
                    <div id = "table_btn">
                        <button id = "create_file" >폴더 만들기</button>
                         {button}
                    </div>
                     {table}
                    </div>
                    {list}
                </div>
            </div>
        </div>
    )
}

export default Mypage;
