import React, { useState, useEffect } from 'react';
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Api from "../../Requests/Api";
import { toast } from 'react-toastify';

const History = () => {
    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch investments when component mounts
    useEffect(() => {
        const fetchInvestments = async () => {
            try {
                // Get the JWT token from localStorage or sessionStorage
                const token = localStorage.getItem("authToken"); // Assuming the token is stored in localStorage

                if (!token) {
                    throw new Error("No token found, please login again.");
                }

                // Make the API request with the Authorization header
                const response = await Api.get("/investments", {
                    headers: {
                        Authorization: `Bearer ${token}` // Add the actual token here
                    }
                });

                // Check the response and set the data
                if (response.data.success) {
                    setInvestments(response.data.investments);
                }

                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error(error);
                toast.error("Error fetching investments!");
            }
        };

        fetchInvestments();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div class=" ">
            <uni-app class="">

                <uni-page data-page="pages/user/withdrawalRecords"> <uni-page-wrapper><uni-page-body><uni-view data-v-b0a5c882="" class="page"><uni-view data-v-b0a5c882="" class="ellipse"></uni-view><uni-view data-v-b0a5c882="" class="top-box"><uni-view data-v-636c600c="" data-v-b0a5c882="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}><uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <Link to="/RechargeFunds">
                        <uni-view data-v-53c5f33f="" class="back"><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px', marginTop: '5px' }} /></uni-view>

                    </Link>
                </uni-view>
                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-b0a5c882="" class="page-title">Deposit Records</uni-view></uni-view>

                    <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view><uni-view data-v-b0a5c882="" class="top-group"><uni-view data-v-b0a5c882="" class="top-btn selected">USDT</uni-view><uni-view data-v-b0a5c882="" class="top-btn">Fiat Currency</uni-view></uni-view>
                    {loading ? (
                        <p>Loading...</p>
                    ) : investments.length === 0 ? (
                        <p>No investments found</p>
                    ) : (
                        <uni-view data-v-b0a5c882="" class="content">

                            {investments.map((investment, index) => (

                                <uni-view data-v-b0a5c882="" class="item">
                                    <uni-view data-v-b0a5c882="" class="first">
                                        <uni-view data-v-b0a5c882="" class="left">WD1HwGup4aqkULZD</uni-view>
                                        <uni-view
                                            data-v-b0a5c882=""
                                            style={{
                                                color: investment.status === 'Decline' ? 'red' :
                                                    (investment.status === 'Active' ? 'green' : 'orange'),
                                            }}
                                        >
                                            {investment.status}
                                        </uni-view>

                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="h-line"></uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Create Time</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{new Date(investment.created_at).toLocaleDateString()}</uni-view>
                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Amount</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">{investment.amount} USDT</uni-view>
                                    </uni-view>
                                    <uni-view data-v-b0a5c882="" class="layout">
                                        <uni-view data-v-b0a5c882="" class="title">Type</uni-view>
                                        <uni-view data-v-b0a5c882="" class="value">TRC20</uni-view>
                                    </uni-view>
                                </uni-view>
                            ))}

                        </uni-view>

                    )}
                    <uni-view data-v-b0a5c882="" class="content" style={{ display: 'none' }}><uni-view data-v-b0a5c882="" class="nodata"><img data-v-b0a5c882="" src="/static/img/nodata.png" alt="" />No Data</uni-view></uni-view>

                </uni-view></uni-page-body></uni-page-wrapper></uni-page>
            </uni-app>
        </div>
    );
};

export default History;



// <div>
//   <h2>Investment History</h2>
//   <ul>
//     {investments.map((investment, index) => (
//       <li key={index}>
//         <p>Amount: </p>
//         <p>Status: {investment.status}</p>
//         <p>Created At: </p>
//       </li>
//   </ul>
// </div>
