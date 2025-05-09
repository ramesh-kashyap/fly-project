import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Api from '../../Requests/Api';
 
const Transaction = () => {
    const [transactions, setTransactions] = useState([]);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [availbal, setAvailableBal] = useState();
 
    useEffect(() => {
        fetchUsers();
    }, []);
 
    const fetchUsers = async () => {
        try {
            const response = await Api.get("/getUserHistory");
 
            if (response.data && response.data.success) {
                setTransactions({
                    investment: response.data.investment || [],
                    income: response.data.income || [],
                    withdraw: response.data.withdraw || []
                });
            } else {
                setTransactions({
                    investment: [],
                    income: [],
                    withdraw: []
                });
            }
 
            console.log("Fetched:", response.data);
        } catch (err) {
            setError(err.response?.data?.error || "Error fetching history");
        }
    };
    useEffect(() => {
        withfatch();
    }, []);
 
    const withfatch = async () => {
        try {
            const response = await Api.get("/availbal");
            if (response.data?.AvailBalance !== undefined) {
                setAvailableBal(response.data.AvailBalance);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };
 
    return (
        <div class="uni-body pages-assets-assets">
            <uni-app class="uni-app--showtabbar uni-app--maxwidth">
                <uni-page
                    data-page="pages/assets/assets">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-248ca5b8=""
                                class="page">
                                <uni-view data-v-248ca5b8="" class="ellipse"></uni-view>
                                <Link to="/dashboard" >
                                <img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px' }} />
                                </Link>
                                <uni-view
                                    data-v-248ca5b8="" class="page-title" style={{marginTop:-30}}>All Transaction</uni-view>
                     
                             
                                <uni-view data-v-248ca5b8="" class="user-title"
                                    style={{ marginTop: '30px' }}>Funding Details</uni-view>
 
 
                                {['investment', 'income', 'withdraw'].map((type) =>
                                    transactions[type] && transactions[type].length > 0 ? (
                                        transactions[type]
                                            .slice() // create copy
                                            .reverse() // reverse order
                                            .map((item, index) => (
                                                <uni-view data-v-248ca5b8="" class="item" >
                                                    <uni-view data-v-248ca5b8="" class="first">
                                                        <uni-view data-v-248ca5b8="" class="left">
                                                            {new Date(item.created_at).toLocaleString()}
                                                        </uni-view>
                                                        <uni-view data-v-248ca5b8=""
                                                            class="right"
                                                            style={{ color: type === 'withdraw' ? 'rgb(53, 247, 231)' : 'rgb(255, 61, 61)' }}
                                                        >
                                                            {type === 'withdraw' ? '+ ' : '- '}{item.amount ? Number(item.amount).toFixed(4) : '0.0000'}
                                                        </uni-view>
                                                    </uni-view>
 
                                                    <uni-view data-v-248ca5b8="" class="layer">
                                                        <uni-view data-v-248ca5b8="" class="title">Fund Flow</uni-view>
                                                        <uni-view data-v-248ca5b8="" class="value">
                                                            {item.remarks || item.source || 'Quantified Order Settlement'}
                                                        </uni-view>
                                                    </uni-view>
                                                </uni-view>
                                            ))
                                    ) : null
                                )}
 
             
 
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>
 
            </uni-app>
        </div >
    );
};
 
export default Transaction;
 
 
 
 
 
 
 
 
 
 
 
 