import React from 'react';
import './excel.css';
import { Customers } from './routes/excel'
import { Header } from './routes/Header'
import { ExportCSV } from './routes/ExportCSV'
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


 const customer = ({title, writer, translator, puvlisher, price, url}) => {
    const history = useHistory();

  customers = () => {
    let cuts = []
    for(let i =0; i<= 1; i++){
    custs.push({도서명: `${customer,title}`, 작가: `${customer,writer}`,
    번역가: `${customer,translator}`, 출판사:  `${customer,puvlisher}`, 쇼핑몰이름: `${customer,i}`
  ,가격:`${customer,price}`, URL:`${customer,url}`});
  }
  return custs;
  };

  state = {
    customers: this.customers(),
    fileName: '도서견적서'
  }
  
    return (
      <div className="App">
        <Header />
        <div className="row">
            <div className="col-md-8">
                <h2>Customers</h2>
            </div>
            <div className="col-md-4 center">
                <Button onClick={(e) => addButton()}>add</Button>
                <Button onClick={(e) => removeButton()}>remove</Button>
                <ExportCSV csvData={this.state.customers} fileName={this.state.fileName} />
            </div>
        </div>
        <Customers customers={this.customers()}/>
      </div>
    );
 }


export default App;