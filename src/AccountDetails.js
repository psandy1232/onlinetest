import React from 'react'
import { useParams } from "react-router-dom";
import data from "./data/data.json";

function AccountDetails() {

    let { id } = useParams(), isDataExist = false;
    const tableData = data.transactions.slice(0, 50);
    const resultData = tableData.filter(data => data.account === id);
    if (resultData && resultData.length > 0) {
        isDataExist = true;
        var { account, accountName, amount, currencyCode, transactionType } = resultData[0];
    }

    return (
        <div className="inner_container">
            <h2>Transaction {account}</h2>
            {
                isDataExist ?
                    <table className="acc_details" cellPadding="5" cellSpacing="5" border="0">
                        <tbody>
                            <tr>
                                <td>Account</td>
                                <td>{account}</td>
                            </tr>
                            <tr>
                                <td>Account Name</td>
                                <td>{accountName}</td>
                            </tr>
                            <tr>
                                <td>Amount</td>
                                <td>{amount}</td>
                            </tr>
                            <tr>
                                <td>Currency Code</td>
                                <td>{currencyCode}</td>
                            </tr>
                            <tr>
                                <td>Transaction Type</td>
                                <td>{transactionType}</td>
                            </tr>

                        </tbody>
                    </table>
                    :
                    "No Data Available"
            }
        </div>
    )
}

export default AccountDetails