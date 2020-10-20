import React from 'react';
import { useHistory } from 'react-router-dom';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import logo1 from './shop_images/1.png';
import logo2 from './shop_images/2.png';
import logo3 from './shop_images/3.png';
import logo4 from './shop_images/4.png';
import logo5 from './shop_images/5.png';

import './Book_info_table.css';

const Book_table = ({ id, price, url }) => {
  const history = useHistory();
  
  return (
    <TableRow>
      <TableCell>
        {id === 1 ? <img src={logo1} className="Aladin" /> : null}
        {id === 2 ? <img src={logo2} className ="Kyobo" /> : null}
        {id === 3 ? <img src={logo3} className ="Interpark" /> : null}
        {id === 4 ? <img src={logo4} className ="Yes" /> : null}
        {id === 5 ? <img src={logo5} className ="eleven" /> : null}
      </TableCell>
      <TableCell>
        {id === 1 ? <div>알라딘</div> : null}
        {id === 2 ? <div>교보문고</div> : null}
        {id === 3 ? <div>인터파크</div> : null}
        {id === 4 ? <div>예스24</div> : null}
        {id === 5 ? <div>11번가</div> : null}
      </TableCell>
      <TableCell>{url}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
      {id ? <button className="add">추가하기</button> : null}
      </TableCell>
    </TableRow>
    
  );
};

export default Book_table;
