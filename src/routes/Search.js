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

import Load from './shop_images/loading.gif';
import Searchbar from '../component/Searchbar';
import useAsync from '../useAsync';
import Book_table from './Book_table';
import { Tab } from '@material-ui/core';

async function getBooks(name, page) {
  
  const response = await axios.get(
    `http://localhost:3001/api/searchingBook/${name}/${page}`,
  );
  return response.data;
}

const Search = ({ match }) => {
  const history = useHistory();
  

  const next = (e) => {
    e.preventDefault();
    let path = `/Search/${match.params.name}/${Number(match.params.page) + 1}`;
    history.push(path);
  };

  const prev = (e) => {
    e.preventDefault();
    let path = `/Search/${match.params.name}/${Number(match.params.page) - 1}`;
    history.push(path);
  };

  const [state, refetch] = useAsync(
    () => getBooks(match.params.name, match.params.page),
    [match.params],
  );

  const { loading, data: books, error } = state; // state.data 를 books 키워드로 조회

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
  if (!books) return null;

  return (
    <div className="main">
      <div className="recommend">
        <button type="button" className="recomend_site">
          교보문고
        </button>
        <button type="button" className="recomend_site">
          Yes24
        </button>
        <button type="button" className="recomend_site">
          알라딘
        </button>
        <button type="button" className="recomend_site">
          노란책
        </button>
        <button type="button" className="recomend_site">
          Gmarket
        </button>

        <div className="recomend_book"></div>
      </div>
      <div className="main_result_space">
        <div className="Main_search_box">
          <Searchbar />
        </div>
        <div className="Mp_search_text">
          '{match.params.name}' 에 대한 검색 결과
        </div>
        <div className="book_result">
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>번호</TableCell>
                  <TableCell>표지</TableCell>
                  <TableCell>제목</TableCell>
                  <TableCell>정보</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {books ? (
                  books.map((books) => {
                    return (
                      <Book_table
                        key={books.id}
                        id={books.id}
                        coverImg={books.coverImg}
                        title={books.title}
                        url={books.url}
                      />
                    ); //map.return
                  })
                ) : (
                  <h1> Loading...</h1>
                )}
              </TableBody>
            </Table>
          </Paper>
          </div>
          <div className="table_btn">
          {match.params.page == 1 ? null : (
            <button onClick={prev} className="Back">
              <h1>{'<<'} 이전</h1>
            </button>
          )}
          {books.length !== 0 ? (
            <button onClick={next} className="Next">
              <h1>다음 {'>>'}</h1>
            </button>
          ) : null}
          </div>
      </div>
    </div>
  );
};

export default Search;
