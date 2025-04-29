import React, { useEffect, useState } from "react";
import Api from "../../Requests/Api";

const CryptoCard = () => {
    
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    fetchLevel();
    const interval = setInterval(fetchLevel, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  const fetchLevel = async () => {
    try {
      const res = await Api.get("/levelteam");
      setTeamData(res.data.team);
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  };

  return (
    <div style={{ padding: "16px", background: "#141417", color: "#fff", borderRadius: "10px", maxWidth: "500px" }}>
      {teamData.map((user) => {
        return (
          <div key={user.id} style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "#1e1e22", padding: "12px", borderRadius: "10px", marginBottom: "10px"
          }}>
            {/* Left */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/static/img/user.png" alt={user.username} style={{
                width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px"
              }} />
              <div>
                <div style={{ fontWeight: "bold" }}>{user.phone}</div>
                <div style={{ fontSize: "12px", color: "#aaa" }}>
                {user.email}
                </div>
              </div>
            </div>

            {/* Center */}
            <div style={{ textAlign: "right", marginRight: "10px" }}>
              <div>{user.name}</div>
              <div style={{ fontSize: "12px", color: "#f44" }}>
              {user.status}
              </div>
            </div>

            {/* Right */}
            <div style={{
              backgroundColor:  "#00d0aa",
              color: "#fff",
              padding: "4px 10px",
              borderRadius: "12px",
              fontSize: "13px",
              minWidth: "60px",
              textAlign: "center"
            }}>
              {user.username}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CryptoCard;








































// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate,Link } from "react-router-dom";

// import Api from "../../Requests/Api";
// import { ArrowRight } from "lucide-react";
// import { ToastContainer, toast } from "react-toastify"; // Import toast and ToastContainer from react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for Toastify

// const Team = () => {

//     // // Function to copy text to clipboard and show toast messages
//     // const copyToClipboard = () => {
//     //     const textToCopy = document.getElementById('textToCopy').innerText;
//     //     navigator.clipboard.writeText(textToCopy).then(() => {
//     //         toast.success('Copied to clipboard!');
//     //     }).catch(err => {
//     //         toast.error('Failed to copy!');
//     //         console.error(err);
//     //     });
//     // };


//     // const [income, setIncome] = useState([]);
//     // const [error, setError] = useState("");
//     // useEffect(() => {
//     //     fetchteam();
//     // }, []);


//     // const fetchteam = async () => {
//     //     const token = localStorage.getItem("token"); // Get JWT Token
//     //     console.log("Token from LocalStorage:", token); // Debugging

//     //     if (!token) {
//     //         setError("User not authenticated!");
//     //         return;
//     //     }
//     //     try {
//     //         const data2 = { token: token };
//     //         const response = await Api.post('auth/team', data2);
//     //         setIncome(response.data);
//     //         // console.log(response.data)
//     //     } catch (err) {
//     //         setError(err.response?.data?.error || "Error fetching income");
//     //     }
//     // };

//     return (
//         <div class="uni-body pages-user-team">
//             <uni-app class="uni-app--maxwidth">
//                 <uni-page data-page="pages/user/team">
//                     <uni-page-wrapper>
//                         <uni-page-body>
//                             <uni-view data-v-1011963f="" class="page">
//                                 <uni-view data-v-1011963f="" class="ellipse"></uni-view>
//                                 <uni-view data-v-1011963f="" class="top-box">
//                                     <uni-view data-v-636c600c="" data-v-1011963f="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}>
//                                         <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-6"    style={{paddingLeft: '0px',paddingRight: '0px'}}>
//                                         <Link to="/NodeDetails"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           >

//                                             <uni-view data-v-1011963f="" class="back"><img data-v-1011963f="" src="/static/img/back.png" alt="" style={{width: '35px'}} /></uni-view>
//                                         </Link>

//                                         </uni-view>
//                                         <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-12"    style={{paddingLeft: '0px',paddingRight: '0px'}}>
//                                             <uni-view data-v-1011963f="" class="page-title">My Team</uni-view>
//                                         </uni-view>
//                                         <uni-view data-v-35b9a113="" data-v-1011963f="" class="uni-col uni-col-6"    style={{paddingLeft: '0px',paddingRight: '0px'}}></uni-view>
//                                     </uni-view>
//                                 </uni-view>
//                                 <uni-view data-v-1011963f="" class="top-group">
//                                     <uni-view data-v-1011963f="" class="top-btn selected">L1</uni-view>
//                                     <uni-view data-v-1011963f="" class="top-btn">L2</uni-view>
//                                     <uni-view data-v-1011963f="" class="top-btn">L3</uni-view>
//                                     <uni-view data-v-1011963f="" class="top-btn">L4</uni-view>
//                                     <uni-view data-v-1011963f="" class="top-btn">L5</uni-view>
//                                 </uni-view>
//                                 <uni-view data-v-1011963f="" class="four-group">
//                                     <uni-view data-v-1011963f="" class="item">
//                                         <img data-v-1011963f="" src="/static/img/team-people.png" alt="" />
//                                         <uni-view data-v-1011963f="" class="value">0<span data-v-1011963f="" style={{fontSize: '14px'}}>(0Activated)</span></uni-view>
//                                         <uni-view data-v-1011963f="" class="title">Team Members</uni-view>
//                                     </uni-view>
//                                     <uni-view data-v-1011963f="" class="item">
//                                         <img data-v-1011963f="" src="/static/img/team-money.png" alt="" />
//                                         <uni-view data-v-1011963f="" class="value">0</uni-view>
//                                         <uni-view data-v-1011963f="" class="title">Order Commission</uni-view>
//                                     </uni-view>
//                                 </uni-view>
//                                 <uni-view data-v-1011963f="" class="commission-box">
//                                     <uni-view data-v-1011963f="" class="left">
//                                         <uni-view data-v-1011963f="" class="value">0</uni-view>
//                                         <uni-view data-v-1011963f="" class="title">Can receive commission</uni-view>
//                                     </uni-view>
//                                     <uni-view data-v-1011963f="" class="receive-btn">Receive</uni-view>
//                                 </uni-view>
//                                 <uni-view data-v-1011963f="" class="user-title">All Members</uni-view>
//                                 <uni-view data-v-1011963f="" class="member-list">
//                                     <uni-view data-v-1011963f="" class="nodata"><img data-v-1011963f="" src="/static/img/noteam.png" alt="" />No Data</uni-view>
//                                 </uni-view>
//                             </uni-view>
//                         </uni-page-body>
//                     </uni-page-wrapper>
//                 </uni-page>
//             </uni-app>
//         </div>
//     );
// };

// export default Team;