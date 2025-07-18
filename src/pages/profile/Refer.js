import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Api from "../../Requests/Api";
import { FaCopy } from 'react-icons/fa'; // Import the copy icon
import { toast } from "react-toastify";





const Refer = () => {


  const [inviteLink, setInviteLink] = useState(null);
  const [username, setUsername] = useState(null);
  const [serR, setServerR] = useState(null);
    const [income, setIncome] = useState([]);

  const [error, setError] = useState("");

  const fetchUsers = async () => {
    try {
      const response = await Api.get("Getinvate");

      if (response.data && response.data.data && response.data.data.username) {

        const fetchedUsername = response.data.data.username;

        setUsername(fetchedUsername);

        // Construct the invite link with the username
        const inviteLink = `${window.location.origin}=${response.data.data.username}`;
        setInviteLink(inviteLink);
      } else {
        setInviteLink(null);
      }

      console.log(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching user data");
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchRef();
  }, []);


  const copyToClipboard = (text) => {
    // Create a dummy input to copy text from
    const dummyInput = document.createElement('input');
    document.body.appendChild(dummyInput);
    dummyInput.value = text;
    dummyInput.select();
    document.execCommand('copy'); // Execute the copy command
    document.body.removeChild(dummyInput); // Remove the dummy input element
    toast.success('Invite link copied to clipboard!');
  };


  const fetchRef = async () => {
    try {
      const response = await Api.get(`/totalRef`); // Pass a refid if 
      console.log(response.data);
      if (response.data?.success) {
        setServerR(response.data.totalIncome || 0);
      }
    } catch (error) {
      console.error("Something went wrong fetching the wallet:", error);
    }
  };
  useEffect(() => {
    fetchteam();
}, []);


const fetchteam = async () => {        
    try {            
        const response =await Api.get('/team');
        if(response.data){
          setIncome(response.data);
        } 
        // console.log(response.data)
    } catch (err) {
        setError(err.response?.data?.error || "Error fetching income");
    }
};
  return (

        <div class="uni-body pages-user-invite">
            <uni-app class="uni-app--maxwidth">
                <uni-page data-page="pages/user/invite">
                    <uni-page-wrapper>
                        <uni-page-body>
                            <uni-view data-v-0f43bbff="" class="page">
                                <uni-view data-v-0f43bbff="" class="ellipse"></uni-view>
                                <uni-view data-v-0f43bbff="" class="ellipse1"></uni-view>
                                <uni-view data-v-0f43bbff="" class="top-box">
                                    <uni-view data-v-636c600c="" data-v-0f43bbff="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}>
                                        <uni-view data-v-35b9a113="" data-v-0f43bbff="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <Link to="/NodeDetails">
                                            <uni-view data-v-0f43bbff="" class="back"><img data-v-0f43bbff="" src="/static/img/back.png" alt="" style={{width: '35px',filter: 'brightness(0) invert(0)' }}/></uni-view>
                                            </Link>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-0f43bbff="" class="uni-col uni-col-12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                            <uni-view data-v-0f43bbff="" class="page-title">Invite</uni-view>
                                        </uni-view>
                                        <uni-view data-v-35b9a113="" data-v-0f43bbff="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}></uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-0f43bbff="" class="info-box">
                                    <uni-view data-v-0f43bbff="" class="qrcode-box">
                                        <uni-view data-v-cd74eaf4="" data-v-0f43bbff="" class="tki-qrcode">
                                         
                                         <uni-view data-v-0f43bbff="" class="" ><img data-v-0f43bbff=""   src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${window.location.origin}/register?inviteCode=${username}`} alt=""/></uni-view>

                                        </uni-view>
                                    </uni-view>
                                    <uni-view data-v-0f43bbff="" class="title">Invitation Registration Link</uni-view>
    <uni-view data-v-0f43bbff="" class="link" style={{color:'#000'}}>
      {inviteLink ? inviteLink : "Invite link not available"}
      <button onClick={() => copyToClipboard(inviteLink)} style={{ marginLeft: '10px', cursor: 'pointer' }}>
        <FaCopy size={20} />
      </button>
    </uni-view>


    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
    <uni-view data-v-0f43bbff="" class="title" style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
      Your Invitation Code
    </uni-view>
    <uni-view data-v-0f43bbff="" class="code" style={{ display: 'flex', alignItems: 'center', fontSize: '16px', marginBottom: '10px' }}>
      <span style={{color:'#000'}}>{username ? username : "Username not available"}</span>
      <button 
        onClick={() => copyToClipboard(username)} 
        style={{
          marginLeft: '10px',
          cursor: 'pointer',
          background: '#007BFF', // Blue background for the button
          color: '#000',
          padding: '5px 10px',
          borderRadius: '5px',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FaCopy size={16} style={{ marginRight: '5px' }} />
        Copy
      </button>
    </uni-view>
  </div>
                                </uni-view>
                                <uni-view data-v-0f43bbff="" class="two-btn">
                                    <uni-view data-v-0f43bbff="" class="btn-item">
                                        <uni-view data-v-0f43bbff="" class="imgbox"><img data-v-0f43bbff="" src="/static/img/dollar.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/></uni-view>
                                        <uni-view data-v-0f43bbff="" class="value">0.00</uni-view>
                                        <uni-view data-v-0f43bbff="" class="title">Total Referral Commission</uni-view>
                                    </uni-view>
                                    <uni-view data-v-0f43bbff="" class="btn-item">
                                        <uni-view data-v-0f43bbff="" class="imgbox"><img data-v-0f43bbff="" src="/static/img/people2.png" alt="" style={{filter: 'brightness(0) invert(0)'}}/></uni-view>
                                        <uni-view data-v-0f43bbff="" class="value">1<span data-v-0f43bbff="" style={{fontSize: '14px',fontWeight: '400', marginLeft: '3px'}}>(1Activated)</span></uni-view>
                                        <uni-view data-v-0f43bbff="" class="title">Total Referrals</uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-0f43bbff="" class="rule-box">
                                    <uni-view data-v-0f43bbff="" class="title">For the Firefly managed strategy trading, a 30% commission is charged. However, to incentivize promotional cooperation, we will return 21% of the commission as a rebate to the promoters. The specific rebate ratios are as follows:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="layout">
                                        <uni-view data-v-0f43bbff="" class="level"><img data-v-0f43bbff="" src="/static/img/lv1.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/>(members you invite)</uni-view>
                                        <uni-view data-v-0f43bbff="" class="rate">8%</uni-view>
                                    </uni-view>
                                    <uni-view data-v-0f43bbff="" class="layout">
                                        <uni-view data-v-0f43bbff="" class="level"><img data-v-0f43bbff="" src="/static/img/lv2.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/>(members invited by Lv1)</uni-view>
                                        <uni-view data-v-0f43bbff="" class="rate">6%</uni-view>
                                    </uni-view>
                                    <uni-view data-v-0f43bbff="" class="layout">
                                        <uni-view data-v-0f43bbff="" class="level"><img data-v-0f43bbff="" src="/static/img/lv3.png" alt=""  style={{filter: 'brightness(0) invert(0)'}}/>(members invited by Lv2)</uni-view>
                                        <uni-view data-v-0f43bbff="" class="rate">4%</uni-view>
                                    </uni-view>
                                    <uni-view data-v-0f43bbff="" class="layout">
                                        <uni-view data-v-0f43bbff="" class="level"><img data-v-0f43bbff="" src="/static/img/lv4.png" alt="" style={{filter: 'brightness(0) invert(0)'}}/>(members invited by Lv3)</uni-view>
                                        <uni-view data-v-0f43bbff="" class="rate">2%</uni-view>
                                    </uni-view>
                                    <uni-view data-v-0f43bbff="" class="layout">
                                        <uni-view data-v-0f43bbff="" class="level"><img data-v-0f43bbff="" src="/static/img/lv5.png" alt="" style={{filter: 'brightness(0) invert(0)'}}/>(members invited by Lv4)</uni-view>
                                        <uni-view data-v-0f43bbff="" class="rate">1%</uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-0f43bbff="" class="global-box-title">Global Partner</uni-view>
                                <uni-view data-v-0f43bbff="" class="global-box">
                                    <uni-view data-v-0f43bbff="" class="global-title">Commission Rate:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">Increase 0.5% based on the original L1-L5 commission</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-title">Team Benefits:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">Enjoy 1.5% of the net profit of unlimited agent team transactions (second-level authorization is allowed)</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-title">Quarterly Incentives:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">Exclusive quarterly performance bonus and global profit plan participation</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-title">Exclusive Benefits:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">1.Co-branding and global market development rights</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">2.Exclusive consultant team support and business co-construction</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">3.Priority for product internal testing and privileged API access</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">4.International conference co-organization &amp; global promotion material customization</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-title">Authorization Fees:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">$200,000 (Global Exclusive Agent Identity Certification)</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-title">Limited Places:</uni-view>
                                    <uni-view data-v-0f43bbff="" class="global-text">We are looking for global partners with a common vision - let us work together to create the future of smart finance</uni-view>
                                </uni-view>
                            </uni-view>
                        </uni-page-body>
                    </uni-page-wrapper>
                </uni-page>
   
            </uni-app>


    </div>
  );
};

export default Refer;









