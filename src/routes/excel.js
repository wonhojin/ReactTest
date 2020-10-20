import React from 'react'
import Table from 'react-bootstrap/Table';

export const Customers = ({customers}) => {


    const CustomerRow = (customer,index) => {

        return(
              <tr key = {index} className='even'>
                  <td> {index + 1} </td>
                  <td>{customer.도서명}</td>
                  <td>{customer.작가}</td>
                  <td>{customer.번역가}</td>
                  <td>{customer.출판사}</td>
                  <td>{customer.쇼핑몰이름}</td>
                  <td>{customer.가격}</td>
                  <td>{customer.url}</td>
              </tr>
          )
      }

      const CustomerTable = customers.map((cust,index) => CustomerRow(cust,index))
 
      const tableHeader = <thead className='bgvi'>
                            <tr>
                                <th>#</th>
                                <th>도서명</th>
                                <th>작가</th>
                                <th>번역가</th> 
                                <th>출판사</th>
                                <th>쇼핑몰이름</th>
                                <th>가격</th>
                                <th>url</th>
                            </tr>
                        </thead>
    
    return (
        <Table striped bordered hover>
            {tableHeader}
            <tbody>
                {CustomerTable}
            </tbody>
        </Table>
    )
} 