import React, { useEffect, useState } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import Api from "../../Requests/Api";
import { Toaster, toast } from 'react-hot-toast';
const Smartrade = () => {
   const [showOverlay, setShowOverlay] = useState(false);
  const [selectedServer, setSelectedServer] = useState('');
  const [selectedServerInfo, setSelectedServerInfo] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState('');
  const [agreeOrReject, setAgreeOrReject] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [symbol, setSymbol] = useState("");
  const [servers, setServers] = useState([]);
  const [amount, setAmount] = useState('');
  const [invest_amount, setMaxInvestAmount] = useState(0);
  const handleServerClick = (serverhash) => {
    
    const foundServer = servers.find(server => server.serverhash === serverhash);
    setSelectedServer(serverhash);
    setSelectedServerInfo(foundServer);
    setShowOverlay(false);
    const invest_amount = foundServer?.invest_amount || 10;
    setMaxInvestAmount(invest_amount);
    console.log(invest_amount);
  }; 
  
     
  useEffect(() => {
    if (location.state?.symbol) {
      setSymbol(location.state.symbol);
    }
  }, [location])
   
      const backClick = () => {        
        navigate('/dashboard/TradingChart');   
      };
      const [balance, setBalance] = useState(null);
      const handleAllClick = () => {
         setAmount(balance);
       };
      const [error, setError] = useState('');

 
   //  const token = localStorage.getItem('token');
     useEffect(()=>{
      withavail();
          fetchserv();
          },[])

    const withavail = async () => {
    try {
      const response = await Api.get("/availbal");      
      if (response.data) {
         setBalance(response.data.AvailBalance);
      } 
    } catch (error) {
      console.error(error);
      setError(error);
    }
   }

   const fetchserv = async () => {
      try {
        const response = await Api.get('/fetchservers');
        console.log(response.data);
        if (response.data?.success) {         
          setServers(response.data.server); 
        } else {
          console.error("API did not return success");
        }
      } catch (error) {
        console.error("Error fetching servers:", error);
      }
    };
    const postData = {
      symbol: symbol,
      selectedServer: selectedServer,
      amount: amount,
      period: selectedPeriod,         // either selectedPeriod or selectedPeriodEnd
      buyInsurance: agreeOrReject,  
      plan: selectedServerInfo?.plan || '',  
    };
    
    const sendtrade = async () => {
      try {
         const response = await Api.post('/sendtrade', { postData });   
         if (response.data?.success) {
           navigate('/trade');
           toast.success(response.data.message || 'Trade Buy successful!');
         } else {
           toast.error(response.data.message || 'Trade not buying!');
         }
       } catch (error) {
         console.error("Somethings Wrong Try Again:", error);
         toast.error('Something went wrong. Please try again.');
       }
    };
    
      
    return (
<div class="uni-body pages-index-symbol">
      <uni-app class="uni-app--maxwidth">
         <uni-page data-page="pages/index/SmartTrade">
            <uni-page-wrapper>
            <Toaster position="top-right" reverseOrder={false} />
               <uni-page-body>
                  <uni-view data-v-2c1047a8="" class="page">
                     <uni-view data-v-2c1047a8="" class="ellipse"></uni-view>
                     <uni-view data-v-2c1047a8="" class="balance-box">
                        <uni-view data-v-2c1047a8="" class="title">Available Balance</uni-view>
                        {/* <uni-view data-v-2c1047a8="" class="value">
      </uni-view> */}
      {error && (
        <h6 style={{ color: 'red'}}>{error}</h6>
      )}

      {balance !== null ? (
        <p style={{ fontSize: '24px', fontWeight: '600' }}>${balance}</p>
      ) : (
        !error && <p>Loading balance...</p> 
      )}
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="top-box">
                        <uni-view data-v-636c600c="" data-v-2c1047a8="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}>
                           <uni-view data-v-35b9a113="" data-v-2c1047a8="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                              <uni-view data-v-2c1047a8="" class="back" onClick={backClick}><img data-v-2c1047a8="" src="/static/img/back.png" alt="" style={{width: '35px'}}/></uni-view>
                           </uni-view>
                           <uni-view data-v-35b9a113="" data-v-2c1047a8="" class="uni-col uni-col-12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                              <uni-view data-v-2c1047a8="" class="page-title">Smart Trade</uni-view>
                           </uni-view>
                           <uni-view data-v-35b9a113="" data-v-2c1047a8="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}></uni-view>
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="trade-box">
                        <uni-view data-v-2c1047a8="" class="input-box">
                           <uni-view data-v-2c1047a8="" class="input-item">
                              <uni-view data-v-2c1047a8="" class="input-title">Trading Currency</uni-view>
                              <uni-view data-v-30449abe="" data-v-2c1047a8="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                 <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border is-disabled " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>
                                     
                                    <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                       <div class="uni-input-wrapper">
                                          <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2c1047a8="" style={{display: 'none'}}> </div>
                                          <input disabled="disabled" maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="text" value={symbol} class="uni-input-input"/> 
                                       </div>
                                    </uni-input>
                                     
                                 </uni-view>
                              </uni-view>
                           </uni-view>
                           <uni-view data-v-2c1047a8="" class="input-item">
                              <uni-view data-v-2c1047a8="" class="input-title">Server</uni-view>
                              <uni-view data-v-2c1047a8="" class="server-click" onClick={() => setShowOverlay(true)}>
                                 <uni-view data-v-2c1047a8="" class="click-layer"></uni-view>
                                 <uni-view data-v-30449abe="" data-v-2c1047a8="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                    <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>
                                        
                                       <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                          <div class="uni-input-wrapper">
                                             <input disabled="disabled" step="" type="text" value={selectedServer} class="uni-input-input" placeholder='Please select a Server'/> 
                                          </div>
                                       </uni-input>
                                    </uni-view>
                                 </uni-view>
                              </uni-view>
                           </uni-view>
                           <uni-view data-v-2c1047a8="" class="input-item">
                                 <uni-view data-v-2c1047a8="" class="input-title">Amount</uni-view>
                                 <uni-view data-v-30449abe="" data-v-2c1047a8="" class="uni-easyinput" style={{ color: 'rgb(255, 255, 255)' }}>
                                    <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{ borderColor: 'rgba(255, 255, 255, 0.2)', backgrounColor: 'unset' }}>
                                       <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{ paddingLeft: '10px' }}>
                                          <div class="uni-input-wrapper">
                                             {/* <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-2c1047a8="">500</div> */}
                                             <input type="number" className="uni-input-input" value={amount} max={invest_amount} 
                                             onChange={(e) => {
    const value = e.target.value;
    const num = Number(value);

    if (invest_amount !== null && num <= invest_amount) {
      setAmount(value);
    } else {
      setAmount(""); // Handle invalid input if necessary
    }
  }} placeholder="Enter amount"/>
                                          </div>
                                       </uni-input>
                                       <uni-view data-v-2c1047a8="" class="allin" onClick={handleAllClick}>All</uni-view>
                                    </uni-view>
                                 </uni-view>
                              </uni-view>
                              <uni-view data-v-2c1047a8="" class="input-item">
                                 <uni-view data-v-2c1047a8="" class="input-title">Period (Hour)</uni-view>
                                 {selectedServerInfo && (
                                 <uni-view data-v-2c1047a8="" class="period-box">
                                    <uni-view data-v-2c1047a8="" class="period-item" style={{ backgroundColor: selectedPeriod === selectedServerInfo.period ? '#35f7e7' : '' }} onClick={() => setSelectedPeriod(selectedServerInfo.period)}>{selectedServerInfo.period}</uni-view>
                                    <uni-view data-v-2c1047a8="" class="period-item" style={{ backgroundColor: selectedPeriod === selectedServerInfo.period_end ? '#35f7e7' : '' }} onClick={() => setSelectedPeriod(selectedServerInfo.period_end)}>{selectedServerInfo.period_end}</uni-view>
                                 </uni-view>
                                 )}
                              </uni-view>
                              <uni-view data-v-2c1047a8="" class="input-item">
                                 <uni-view data-v-2c1047a8="" class="input-title">Buy Insurance </uni-view>
                                 <uni-view data-v-2c1047a8="" class="period-box">
                                    <uni-view data-v-2c1047a8="" class="period-item" style={{ backgroundColor: agreeOrReject === 'agree' ? '#35f7e7' : '' }} onClick={() => setAgreeOrReject('agree')}>Agree</uni-view>
                                    <uni-view data-v-2c1047a8="" class="period-item" style={{ backgroundColor: agreeOrReject === 'reject' ? '#35f7e7' : '' }} onClick={() => setAgreeOrReject('reject')}>Reject</uni-view>
                                 </uni-view>
                              </uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="book-box">
                           <uni-view data-v-2c1047a8="" class="order-book">
                              <uni-view data-v-2c1047a8="" class="buy-orders">
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '7.44699%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.5000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>4.17</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '100%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.6000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>55.93</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '2.07959%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.7000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.16</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '14.3526%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1800.9000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>8.03</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '3.01874%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.0000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.69</span></uni-text>
                                 </uni-view>
                              </uni-view>
                              <uni-view data-v-2c1047a8="" class="sell-orders">
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" Smartrade></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.2000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>3.03</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '3.31623%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.3000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.85</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '19.1823%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.4000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>10.73</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '1.98448%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.5000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>1.11</span></uni-text>
                                 </uni-view>
                                 <uni-view data-v-2c1047a8="" class="order">
                                    <uni-view data-v-2c1047a8="" class="depth-bar" style={{width: '5.51775%'}}></uni-view>
                                    <uni-text data-v-2c1047a8="" class="price"><span>1801.6000</span></uni-text>
                                    <uni-text data-v-2c1047a8="" class="amount"><span>3.09</span></uni-text>
                                 </uni-view>
                              </uni-view>
                           </uni-view>
                            
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="Info-box">
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Trading Currency</uni-view>
                           <uni-view data-v-2c1047a8="" class="value">{symbol || '----'}</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Server</uni-view>
                           <uni-view data-v-2c1047a8="" class="value">{selectedServerInfo?.serverhash || '----'}</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Amount</uni-view>
                           <uni-view data-v-2c1047a8="" translate="no" class="value">{amount || '----'}</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Period (Hour)</uni-view>
                           <uni-view data-v-2c1047a8="" translate="no" class="value">{selectedPeriod || '----'}</uni-view>
                        </uni-view>
                        <uni-view data-v-2c1047a8="" class="info-item">
                           <uni-view data-v-2c1047a8="" class="title">Insurance</uni-view>
                            
                           <uni-view data-v-2c1047a8="" class="value">{agreeOrReject === 'yes' ? 'Agreed' : agreeOrReject === 'no' ? 'Rejected' : '----'}</uni-view>
                        </uni-view>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" class="check-box" style={{marginTop: '10px'}}>
                        <uni-checkbox-group data-v-2c1047a8="">
                           <uni-label data-v-2c1047a8="" class="warning-text uni-label-pointer">
                              <uni-checkbox data-v-2c1047a8="" style={{transform: 'scale(0.7)'}}>
                                 <div class="uni-checkbox-wrapper">
                                    <div class="uni-checkbox-input uni-checkbox-input-checked" style={{color: 'rgb(0, 0, 0)'}}></div>
                                 </div>
                              </uni-checkbox>
                              <uni-text data-v-2c1047a8="" class="agreement-tips"><span>I have read and agree to the following agreement:</span></uni-text>
                              <uni-text data-v-2c1047a8="" class="agreement"><span>"FIREFLY STAR LLC User Strategy Insurance Agreement"</span></uni-text>
                              ,
                              <uni-text data-v-2c1047a8="" class="agreement"><span>"Firefly Star LLC Trading Server Usage Agreement"</span></uni-text>
                           </uni-label>
                        </uni-checkbox-group>
                     </uni-view>
                     <uni-view data-v-2c1047a8="" style={{height: '60px'}}></uni-view>
                     <uni-view data-v-2c1047a8="" class="create-btn" onClick={()=>sendtrade()}>Create</uni-view>
                     {showOverlay && (
                     <uni-view data-v-2c1047a8="" class="overlay">
                        <uni-view data-v-2c1047a8="" class="pop-box">
                           <uni-view data-v-2c1047a8="" class="pop-content">
                              <uni-view data-v-2c1047a8="" class="close-box"  onClick={() => setShowOverlay(false)}
                                 >
                                 <img data-v-2c1047a8="" src="/static/img/close.png" alt=""/>
                                 </uni-view><uni-view data-v-2c1047a8="" class="server-box">
                                    <uni-view data-v-2c1047a8="" class="icon-tips">
                                       <uni-view data-v-2c1047a8="" class="tips-item">
                                          <uni-view data-v-2c1047a8="" class="busy"></uni-view>
                                          <uni-view data-v-2c1047a8="" class="text">Busy</uni-view>
                                          </uni-view>
                                          <uni-view data-v-2c1047a8="" class="tips-item">
                                             <uni-view data-v-2c1047a8="" class="idle">
                                                </uni-view>
                                                <uni-view data-v-2c1047a8="" class="text">Idle</uni-view>
                                                </uni-view>
                                                <uni-view data-v-2c1047a8="" class="tips-item">
                                                   <uni-view data-v-2c1047a8="" class="expired"></uni-view>
                                                   <uni-view data-v-2c1047a8="" class="text">Expired</uni-view></uni-view></uni-view>
                                                   {servers.map((item, index) => (
                                                   <uni-view data-v-2c1047a8="" key={index} onClick={() => handleServerClick(item.serverhash)}
                                                   style={{ cursor: 'pointer' }} class="server-item">                                                      
                                                      <img data-v-2c1047a8="" src="/static/img/S1.png" alt={item.plan}/>
                                                      <uni-view data-v-2c1047a8="" class="item-no">{item.serverhash}<uni-view data-v-2c1047a8="" class="expired-time">{new Date(item.sdate).toLocaleString()}</uni-view></uni-view>
                                                      <uni-view data-v-2c1047a8="" class="idle">
                                                         </uni-view>
                                                         </uni-view>
                                                         ))}                                                      
                                                         </uni-view>
                                                         </uni-view>
                                                         </uni-view>
                                                         </uni-view>
                                                         )}
                  </uni-view>
               </uni-page-body>
            </uni-page-wrapper>
         </uni-page>
      </uni-app></div>

   );
};

export default Smartrade;
