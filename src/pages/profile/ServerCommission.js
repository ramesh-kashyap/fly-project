import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";

const ServerCommission = () => {


    return (

        <div class="uni-body pages-user-serverCommission">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/serverCommission">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-cc630f0a="" class="page">
                                <uni-view data-v-cc630f0a="" class="ellipse"></uni-view>
                                <uni-view data-v-cc630f0a="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-cc630f0a="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
                                        <uni-view data-v-35b9a113="" data-v-cc630f0a="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <Link to="/NodeDetails">
                                                <uni-view data-v-cc630f0a="" class="back"><img data-v-cc630f0a="" src="/static/img/back.png" alt="" style={{ width: '35px',filter: 'brightness(0) invert(0)' }} /></uni-view>

                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-cc630f0a="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                            <uni-view data-v-cc630f0a="" class="page-title">Server Commission</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-cc630f0a="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-cc630f0a="" class="list-box">
                                    <uni-view data-v-cc630f0a="" class="item">
                                        <uni-view data-v-cc630f0a="" class="first">
                                            <uni-view data-v-cc630f0a="" class="left">2025-04-24 12:24:45</uni-view>
                                            <uni-view data-v-cc630f0a="" class="right" style={{ color: 'rgb(53, 247, 231)' }}>+1.200000</uni-view>
                                        </uni-view>
                                        <uni-view data-v-cc630f0a="" class="layer">
                                            <uni-view data-v-cc630f0a="" class="title">Fund Flows</uni-view>
                                            <uni-view data-v-cc630f0a="" class="value">Server Commissions</uni-view>
                                        </uni-view>
                                    </uni-view>
                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>

            </uni-app>

        </div>
    );
};

export default ServerCommission;












