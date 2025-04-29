import React from "react";
import { Link } from "react-router-dom";

const AddWalletAddress = () => {
    //   const [activeTab, setActiveTab] = useState();

    return (
    <div class="uni-body pages-user-addCard">
        <uni-app class="uni-app--maxwidth">
            <uni-page data-page="pages/user/addCard">
                <uni-page-wrapper>
                    <uni-page-body>
                        <uni-view data-v-b918f992="" class="page">
                            <uni-view data-v-b918f992="" class="ellipse"></uni-view>
                            <uni-view data-v-b918f992="" class="top-box">
                                <uni-view data-v-636c600c="" data-v-b918f992="" class="uni-row" style={{marginLeft: '0px', marginRight: '0px'}}>
                                    <uni-view data-v-35b9a113="" data-v-b918f992="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                        <Link to="/Add-Wallet">
                                              <uni-view data-v-53c5f33f="" class="back"><img data-v-53c5f33f="" src="/static/img/back.png" alt="" style={{width: '35px'}} /></uni-view>
                                      
                                            </Link>
                                    </uni-view>
                                    <uni-view data-v-35b9a113="" data-v-b918f992="" class="uni-col uni-col-12" style={{paddingLeft: '0px', paddingRight: '0px'}}>
                                        <uni-view data-v-b918f992="" class="page-title">Add Wallet</uni-view>
                                    </uni-view>
                                    <uni-view data-v-35b9a113="" data-v-b918f992="" class="uni-col uni-col-6" style={{paddingLeft: '0px', paddingRight: '0px'}}></uni-view>
                                </uni-view>
                            </uni-view>
                            <uni-view data-v-b918f992="" class="trc-box">
                                <uni-view data-v-b918f992="" class="input-layer">
                                    <uni-view data-v-b918f992="" class="input-title">Wallet Address(TRC20)</uni-view>
                                    <uni-view data-v-30449abe="" data-v-b918f992="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                        <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>
                                            <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingLeft: '10px'}}>
                                                <div class="uni-input-wrapper">
                                                    <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-b918f992="">Please Enter Wallet Address</div>
                                                    <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input"/>
                                                </div>
                                            </uni-input>
                                        </uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-b918f992="" class="input-layer">
                                    <uni-view data-v-b918f992="" class="input-title">Verification Code</uni-view>
                                    <uni-view data-v-30449abe="" data-v-b918f992="" class="uni-easyinput" style={{color: 'rgb(255, 255, 255)'}}>
                                        <uni-view data-v-30449abe="" class="uni-easyinput__content is-input-border " style={{borderColor: 'rgba(255, 255, 255, 0.2)', backgroundColor: 'unset'}}>
                                            <uni-input data-v-30449abe="" class="uni-easyinput__content-input" style={{paddingRight: '10px', paddingLeft: '10px'}}>
                                                <div class="uni-input-wrapper">
                                                    <div class="uni-input-placeholder uni-easyinput__placeholder-class" data-v-30449abe="" data-v-b918f992="">Please Enter Verification Code</div>
                                                    <input maxlength="140" step="" enterkeyhint="done" autocomplete="off" type="" class="uni-input-input"/>
                                                </div>
                                            </uni-input>
                                            <uni-view data-v-b918f992="" class="resend">Send</uni-view>
                                        </uni-view>
                                    </uni-view>
                                </uni-view>
                                <uni-view data-v-b918f992="" class="submit">Submit</uni-view>
                            </uni-view>
                        </uni-view>
                    </uni-page-body>
                </uni-page-wrapper>
            </uni-page>

        </uni-app>

    </div>

  );
};

export default AddWalletAddress;

