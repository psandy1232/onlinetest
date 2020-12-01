import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import data from "./data/data.json";

import Filters from "./Filters";

const Account = () => {

  const tableData = data.transactions.slice(0, 50);
  const accountFilters = [...new Set(tableData.map(item => item.accountName))];
  const transactionTypeFilters = [...new Set(tableData.map(item => item.transactionType))];

  const [listOfItems, setListOfItems] = useState(tableData);
  const [acc, setAcc] = useState({
      'accountName' : [],
      'transactionType' : [] 
  });

  const filterData = (e, item, category) => {
    category  = category === 'Account Name' ? 'accountName' : 'transactionType';
    const accdata = {
      ...acc,
      [category] : e.target && e.target.checked ? [...acc[category], item] : acc[category].filter(data => data !== item)
    }
    const query = buildFilter(accdata);
    setAcc(accdata)
    setListOfItems(doFilterData(tableData, query))
  }


  const buildFilter = (filter) => {
      let query = {};
      for (let keys in filter) {
          if (filter[keys].constructor === Array && filter[keys].length > 0) {
              query[keys] = filter[keys];
          }
      }      
      return query;
  }

  const doFilterData = (data, query) => {
      const filteredData = data.filter( (item) => {
          for (let key in query) {
              if (item[key] === undefined || !query[key].includes(item[key])) {
                  return false;
              }
          }
          return true;
      });
      return filteredData;
  };
  
  return (
    <div className="App">

      <div className="inner_container">
        <h2>My Transactions</h2>

        <div className="left_cont">
          <h3>Filters</h3>
          <Filters 
            filterName={'Account Name'} 
            data={accountFilters}
            filterData={filterData} 
          />
          <Filters 
            filterName={'Transaction Type'} 
            data={transactionTypeFilters} 
            filterData={filterData}
          />          
        </div>


        <div className="right_cont">
          <table cellPadding="5" cellSpacing="5" width="100%" >
            <thead>
              <th>ACCOUNT NO</th>
              <th>ACCOUNT NAME</th>
              <th>CURRENCY</th>
              <th>AMOUNT</th>
              <th>TRANSACTION TYPE</th>
            </thead>
            <tbody>
              {
                (listOfItems && listOfItems.length > 0) &&
                listOfItems.map((item, index) =>
                  <tr key={index}>
                    <td><Link to={`/account-details/${item.account}`}>{item.account}</Link></td>
                    <td>{item.accountName}</td>
                    <td>{item.currencyCode}</td>
                    <td>{item.amount}</td>
                    <td>{item.transactionType}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
}

export default Account;
