
import React from "react";
import { ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";



const Whistory = () => {
   const navigate = useNavigate();

   const backClick = () => {
      navigate('/WithdrawReq');
   };
   return (
      <div class=" ">
         <uni-app class="">
            <uni-page data-page="pages/user/withdrawalRecords"> <uni-page-wrapper><uni-page-body><uni-view data-v-b0a5c882="" class="page"><uni-view data-v-b0a5c882="" class="ellipse"></uni-view><uni-view data-v-b0a5c882="" class="top-box"><uni-view data-v-636c600c="" data-v-b0a5c882="" class="uni-row" style={{ marginLeft: '0px', marginRight: '0px' }}>
               <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>

                  <uni-view data-v-53c5f33f="" onClick={backClick} class="back"><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{ width: '35px', marginTop: '5px' }} /></uni-view>


               </uni-view>
               <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-12" style={{ paddingLeft: '0px', paddingRight: '0px' }}><uni-view data-v-b0a5c882="" class="page-title">Withdrawal Records</uni-view></uni-view>
               <uni-view data-v-35b9a113="" data-v-b0a5c882="" class="uni-col uni-col-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}></uni-view></uni-view></uni-view><uni-view data-v-b0a5c882="" class="top-group"><uni-view data-v-b0a5c882="" class="top-btn selected">USDT</uni-view><uni-view data-v-b0a5c882="" class="top-btn">Fiat Currency</uni-view></uni-view>
               <uni-view data-v-b0a5c882="" class="content">
                  <uni-view data-v-b0a5c882="" class="item">
                     <uni-view data-v-b0a5c882="" class="first">
                        <uni-view data-v-b0a5c882="" class="left">WD1HwGup4aqkULZD</uni-view>
                        <uni-view data-v-b0a5c882="" class="success">Success</uni-view>
                     </uni-view>
                     <uni-view data-v-b0a5c882="" class="h-line"></uni-view>
                     <uni-view data-v-b0a5c882="" class="layout">
                        <uni-view data-v-b0a5c882="" class="title">Create Time</uni-view>
                        <uni-view data-v-b0a5c882="" class="value">2025-04-23 17:08:05</uni-view>
                     </uni-view>
                     <uni-view data-v-b0a5c882="" class="layout">
                        <uni-view data-v-b0a5c882="" class="title">Amount</uni-view>
                        <uni-view data-v-b0a5c882="" class="value">11.300000 USDT</uni-view>
                     </uni-view>
                     <uni-view data-v-b0a5c882="" class="layout">
                        <uni-view data-v-b0a5c882="" class="title">Type</uni-view>
                        <uni-view data-v-b0a5c882="" class="value">TRC20</uni-view>
                     </uni-view>
                  </uni-view>
               </uni-view>
            </uni-view></uni-page-body></uni-page-wrapper></uni-page>
         </uni-app>
      </div>
   );
};

export default Whistory;
