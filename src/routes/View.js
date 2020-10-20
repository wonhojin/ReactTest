import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import './Logo.css';
import './Search.css';
import '../useAsync';
import './View.css'

import Load from './shop_images/loading.gif';
import Searchbar from '../component/Searchbar';
import useAsync from '../useAsync';
import Book_table from './Book_info_table';



async function getBook_info(ItemId) {
  const response = await axios.get(
    `http://localhost:3001/api/getResult/${ItemId}`,
  );
  return response.data;
}

const View = ({ match }) => {
  const history = useHistory();

  /*
  const next = (e) => {
    e.preventDefault();
    let path = `/Search/${match.params.name}/${Number(match.params.page) + 1}`;
    history.push(path);
  };
  
  */
  const goback=(e)=>{
    e.preventDefault();
    let path = `/Search/${match.params.name}/1`;
    history.push(path);
  }


  const [state, refetch] = useAsync(() => getBook_info(match.params.ItemId), [
    match.params,
  ]);

  const { loading, data: book_info, error } = state; // state.data 를 book_info 키워드로 조회

  if (loading) {
    return loading ? (
      <div className="async">
        <img src ={Load} className="loading" alt = "Loading..." />
        <h3>Loading</h3>
      </div>
    ) : null;
  }
  if (error)
    return error ? (
      <div className="async">
        <h1>에러가 발생했습니다</h1>
      </div>
    ) : null;
  if (!book_info) return null;

  return (
    <div className="main">
      <div className="view_result_space">
        <div className="view_search_box">
          <Searchbar />
        </div>
        <div className="book_info_view">
          <Paper>
            <Table>
              <TableHead>
                <TableRow className="head">
                  <TableCell>Logo</TableCell>
                  <TableCell>쇼핑몰</TableCell>
                  <TableCell className="url">URL</TableCell>
                  <TableCell>가격</TableCell>
                  <TableCell>추가하기</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {book_info ? (
                  Object.values(book_info).map((book_info) => {
                    return (
                      <Book_table
                        key={book_info.id}
                        id={book_info.id}
                        price={book_info.price}
                        url={book_info.url}
                      />
                    );
                  })
                ) : (
                  <h1> Loading...</h1>
                )}
              </TableBody>
            </Table>
          </Paper>
        </div>
        <div className="table_btn">
          <button onClick={goback}  className="back_prev_page">
            [ 목록 ]</button></div>
      </div>
    </div>
  );
};

export default View;
