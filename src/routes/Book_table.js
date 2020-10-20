import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useHistory } from 'react-router-dom';
import './Book_table.css'




const Book_table = ({ id, coverImg, title, url },{match}) => {
  const history = useHistory();

  // url -> ItemId 추출하기 위한 정규 표현
  const regex = /[^0-9]/g;
  const ItemId = url.replace(regex, '');
  console.log(ItemId);

  const view_page = (e) => {
    e.preventDefault();
    let path = `/View/${ItemId}`;
    history.push(path);
  };

  return (
    <TableRow onClick={view_page}>
      <TableCell>{id}</TableCell>
      <TableCell>
        <img src={coverImg} className="book_img"/>
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>작가/옮긴이/출판사</TableCell>
    </TableRow>
  );
};

export default Book_table;
