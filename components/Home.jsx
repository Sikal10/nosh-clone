import {FaGooglePlay, FaApple, FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
import ServicesCard from "./ServicesCard";
import Zoom from "react-reveal/Zoom";

const Home = () => {
    return (
        <section>
            <main className={"gift-cards"}>
                <div className={"mt-28 md:mt-0"}>
                   <Zoom left>
                       <div className={"md:px-20 md:py-14"}>
                           <h2 className={"text-4xl md:px-2 leading-[50px] text-center md:text-left text-nosh_blue md:leading-[55px] md:tracking-wide md:w-[414px] md:text-5xl font-bold"}>
                               Buy and Sell <br/>
                               <span className={"text-nosh_blue-dark md:w-min "}>Gift Cards Online Instantly</span>
                           </h2>
                           <div className={"md:border-b md:border-gray-100 mt-5 "}/>
                           <p className={"w-full text-center px-10 md:px-0 mt:4 md:block md:w-[410px] md:text-left md:ml-none text-lg md:my-5 text-nosh_blue-dark font-semibold"}>Easy-to-use
                               gift card trading
                               application available for android and iOS.</p>
                           <div className={"md:mt-0 flex flex-col md:block items-center mt-5"}>
                               <div className={"flex space-x-1"}>
                                   <button
                                       className={"px-6 space-x-2 bg-nosh_blue bg-opacity-20 py-3 rounded-full flex items-center"}>
                                       <FaGooglePlay className={"text-xl text-nosh_blue-dark"}/>
                                       <div className={"text-left"}>
                                           <p className={"text-[8px]"}>ANDROID APP ON</p>
                                           <p className={"font-semibold -mt-1"}>Google Play</p>
                                       </div>
                                   </button>
                                   <button
                                       className={"px-6 space-x-2 bg-nosh_blue bg-opacity-20 py-3 rounded-full flex items-center"}>
                                       <FaApple className={"text-2xl text-nosh_blue-dark"}/>
                                       <div className={"text-left"}>
                                           <p className={"text-[8px]"}>DOWNLOAD ON THE</p>
                                           <p className={"font-semibold -mt-1"}>App Store</p>
                                       </div>
                                   </button>
                               </div>
                               <p className={"font-semibold mt-4 text-center md:w-[200px] md:ml-16 md:mt-5 text-nosh_blue"}>·
                                   #TheTopNOSHExperience</p>
                           </div>
                       </div>
                   </Zoom>
                </div>
                <div className={"md:pr-10"}>
                    <img src={"/images/landing-gif.gif"} className={""} alt=""/>
                </div>
            </main>
            <main className={"home-cards"}>
                <ServicesCard title={"Exchange Gift Cards"} text={"Sell gift cards and be paid within a few minutes"} src={"/images/exchangeCard.svg"}/>
                <ServicesCard title={"Wide Varieties"} text={"Up to 100 gift card options available to be traded instantly."} src={"/images/noshsvg.svg"}/>
                <ServicesCard title={"Instant Payment"} text={"Immediate and no-fee withdrawals, at any time, on any day."} src={"/images/instant.svg"}/>
                <ServicesCard title={"Virtual Account"} text={"Instantly top up your wallet with your virtual bank account."} src={"/images/wallet.svg"}/>
                <ServicesCard title={"Data and Bills"} text={"Buy airtime, data and pay all bills on the go like a pro."} src={"/images/bills.svg"}/>
                <ServicesCard title={"24/7 Support"} text={"Readily available in-app live chat support."} src={"/images/support.svg"}/>
            </main>
            <main className={"fintech-section"}>
                <Zoom left>
                    <div className={"md:mx-5 pt-28"}>
                        <h2 className={"font-bold text-3xl leading-[40px] text-center md:text-left md:leading-[46px] text-nosh_blue"}>You
                            + NOSH <br/>
                            <span className={"text-nosh_blue-dark"}>= A Great Life</span>
                        </h2>
                        <p className={"text-nosh_blue-dark w-full text-center leading-[18px] md:text-[16px] md:text-left md:leading-[20px] md:w-[410px] font-semibold mt-5"}>
                            Nosh is a FinTech product that offers easy and quick transactions for anyone.
                            Equipped with modern and seamless means of engagement,
                            Nosh offers the easiest and most convenient
                            way for you to purchase and redeem gift cards in Nigeria,
                            with loads of other products, whatever they may be.
                        </p>
                        <div className={"border-b border-gray-100 md:my-5 my-8"}/>
                        <p className={"font-semibold text-xl text-nosh_blue text-center md:text-left"}>· Create an account
                            instantly</p>
                    </div>

                </Zoom>
                <div className={""}>
                    <img src={"/images/noshgif.gif"} alt=""/>
                </div>
            </main>
            <main className={"home-section"}>
                <div className={"hidden md:block"}>
                    <img src={"/images/mobile-gif.gif"} alt=""/>
                </div>

                <div className={"md:py-28 pt-16 md:space-y-4 mx-5"}>
                    <h2 className={"font-bold md:text-3xl md:leading-[46px] text-center md:text-left text-2xl text-nosh_blue"}>NOSH <span
                        className={"text-nosh_blue-dark"}>for Users</span></h2>
                    <p className={"text-nosh_blue-dark w-full text-center md:text-left text-[16px] md:leading-[20px] md:w-[410px] font-semibold mt-5"}>
                        {`Skip all the bells and whistles that come with using online platforms and access free,
                            easy gift card trading with Nosh.
                            We've implemented top-notch security procedures to ensure the protection of your privacy, assets
                            and your funds.`}
                    </p>
                    <p className={"text-nosh_blue-dark w-full text-center md:text-left text-[16px] md:leading-[20px] md:w-[410px] font-semibold mt-5"}>You
                        get
                        to escape the tedious process of waiting long hours before your transactions get
                        processed and at the same time, you can do whatever, wherever, whenever!
                    </p>
                    <p className={"text-nosh_blue-dark w-full text-center md:text-left text-[16px] md:leading-[20px] md:w-[410px] font-semibold mt-5"}>Life
                        is
                        hard enough, to sell gift cards for cash online doesn’t have to add to the stress.</p>
                </div>

                {/*show on mobile only*/}
                <div className={"md:hidden"}>
                    <img src={"/images/mobile-gif.gif"} alt=""/>
                </div>
            </main>
            <main className={"home-section"}>
                <div className={"mx-5 md:py-28 pt-16"}>
                    <h2 className={"font-bold md:text-3xl text-2xl text-center md:text-left leading-[46px] text-nosh_blue"}>NOSH <span
                        className={"text-nosh_blue-dark"}>for Businesses</span>
                    </h2>
                    <p className={"text-nosh_blue-dark text-center md:text-left text-[16px] leading-[20px] md:w-[410px] font-semibold mt-5"}>
                        With new online businesses springing up in recent time, half of which engage in a dropshipping
                        form of sale.
                        Nosh can be your knight in shiny armor.
                    </p>
                    <p className={"text-nosh_blue-dark text-[16px] leading-[20px] text-center md:text-left md:w-[410px] font-semibold mt-5"}>
                        Having offered a modern avenue for users who possess gift cards they do not need,
                        to exchange the gift cards for money at a discounted price,
                        we can provide your business with a cheaper payment
                        method in terms of gift cards for popular ecommerce websites.
                    </p>
                    <div className={"border-b border-gray-100 my-5 "}/>
                    <p className={"font-semibold md:text-left text-center text-xl text-nosh_blue"}>· Get started
                        Today</p>

                </div>

                <div className={""}>
                    <img src={"/images/business-gif.gif"} alt=""/>
                </div>
            </main>
            <main className={"home-section"}>
                <div className={"hidden md:block"}>
                    <img src={"/images/help-gif.gif"} alt=""/>
                </div>

                <Zoom right>
                    <div className={"mx-5 mt-4 md:py-28"}>
                        <h2 className={"font-bold text-2xl md:text-3xl text-center md:text-left leading-[46px] text-nosh_blue"}>Ready
                            available to</h2>
                        <h2 className={"font-bold md:text-3xl text-2xl md:text-left text-center text-nosh_blue-dark"}>Help</h2>
                        <p className={"text-nosh_blue-dark text-[16px] text-center md:text-left leading-[20px] md:w-[410px] font-semibold mt-5"}>
                            Effective customer service is a two-way street. Nosh is always available to answer your
                            questions.
                            You can talk to us using the in-app live chat, send us an email or call us at anytime.
                        </p>
                        <div className={"border-b border-gray-100 my-5 "}/>
                        <p className={"font-semibold text-center md:text-left text-xl text-nosh_blue"}>· Contact Us Now</p>

                    </div>
                </Zoom>

                <div className={"md:hidden"}>
                    <img src={"/images/help-gif.gif"} alt=""/>
                </div>

            </main>
            <main className={"home-section"}>
                <Zoom left>
                    <div className={"md:mx-5 mx-2 md:py-28 pt-16"}>
                        <h2 className={"font-bold text-center md:text-left w-full md:w-[300px] text-3xl leading-[46px] text-nosh_blue"}>
                            FAQs - <span className={"text-nosh_blue-dark"}>Frequently Asked Questions.</span>
                        </h2>
                        <p className={"text-nosh_blue-dark text-[16px] text-center px-10 md:px-0 md:text-left leading-[20px] md:w-[410px] font-semibold mt-5"}>
                            {`If you've got any questions or recommendations, please get in touch with us.`}
                        </p>
                        <p className={"text-nosh_blue-dark text-[16px] text-center md:text-left px-5 md:px-0 leading-[20px] md:w-[410px] font-semibold mt-5"}>
                            {`All our customer care and communication channels are open, and we're more than willing to
                                hear
                                from you.`}
                        </p>
                        <div className={"border-b border-gray-100 my-5 "}/>
                        <p className={"font-semibold text-center md:text-left text-xl text-nosh_blue"}>· Get Quick
                            Help</p>
                    </div>
                </Zoom>

                <div className={"md:-mt-14 ml-10 md:ml-0 pt-10 pb-20 md:pb-0 md:pt-0"}>
                    <img src={"/images/faq-gif.gif"} className={"md:h-[600px]"} alt=""/>
                </div>
            </main>
            {/*prefer*/}
            <main className={"prefer-section"}>
                <div className={"prefer-section__container"}>
                    <h2 className={"text-center text-4xl font-bold text-nosh_blue mb-14"}>Which would you Prefer?</h2>
                    <main className={"grid grid-cols-3"}>
                        <div className={"border-b border-nosh_blue border-opacity-10 px-3 py-2"}></div>
                        <div
                            className={"border-b border-nosh_blue border-opacity-10 px-3 py-2 mt-[30px] md:mt-0 font-bold text-white text-xl"}>
                            <span>NOSH</span></div>
                        <div
                            className={"border-b -mr-[15px] md:ml-0 border-nosh_blue border-opacity-10 md:px-3 py-2 font-bold text-white text-xl"}>
                            <span className={"mt-[15px] md:m-0 flex items-center"}>DEM OTHER PLATFORMS</span></div>
                        <p className={"border-b border-nosh_blue border-opacity-10  px-4 py-4 font-semibold text-nosh_blue"}>
                            <span>Transaction Speed</span></p>
                        <p className={"table-item"}>
                            <span>A few minutes</span></p>
                        <p className={"table-item"}>
                            <span className={"mt-[15px] md:m-0 flex items-center"}><span>600 Years</span></span></p>
                        <p className={"table-item__left"}>
                            <span className={"flex items-center"}>Withdrawal Charges</span></p>
                        <p className={"table-item"}>
                            <span className={"table-item__right"}>Free</span></p>
                        <p className={"table-item"}>
                            <span className={"table-item__right"}>Ridiculous</span></p>
                        <p className={"table-item__left"}>
                            <span>Realtime Notifications</span></p>
                        <p className={"table-item"}>
                            <span className={"table-item__right"}>Always</span></p>
                        <p className={"table-item"}>
                            <span>Not important</span></p>
                        <p className={"table-item__left"}>
                            <span>Customer Support</span></p>
                        <p className={"table-item"}>
                            <span className={"table-item__right"}>24/7</span></p>
                        <p className={"table-item"}>
                            <span>Only in the morning 😴</span></p>
                        <p className={"table-item__left"}>
                            <span>Rates</span></p>
                        <p className={"table-item"}>
                            <span>90%</span></p>
                        <p className={"table-item"}>
                            <span>60%</span></p>
                        <p className={"table-item__left"}>
                            <span>Security</span></p>
                        <p className={"table-item"}>
                            <span>100%</span></p>
                        <p className={"table-item"}>
                            <span>🤡</span></p>
                        <p className={"table-item__left"}>
                            <span className={"table-item__right"}>Uptime</span></p>
                        <p className={"table-item"}>
                            <span className={"table-item__right"}>24/7</span></p>
                        <p className={"table-item"}>
                            <span className={"table-item__right"}>Based on Mood</span></p>

                    </main>
                </div>
            </main>
            {/*app for medium and large screen devices*/}
            <main className={"hidden md:block relative max-w-6xl mx-auto rounded-md bg-nosh_blue-app grid grid-cols-2"}>
                {/*download*/}
                <div className={"px-28 py-28 ml-5"}>
                    <h3 className={"text-nosh_blue-dark text-3xl font-bold "}>Download <span
                        className={"text-nosh_blue"}>NOSH APP</span></h3>
                    <p className={"text-nosh_blue-dark text-[16px] leading-[20px] w-[400px] font-semibold mt-5"}>Get the
                        APP today to start enjoying amazing
                        deals with #TopNOSHExperience.</p>
                    <div className={"border-b border-nosh_blue border-opacity-10 my-8 w-[400px] "}/>
                    <div className={"flex space-x-1"}>
                        <button
                            className={"px-6 space-x-2 bg-white py-3 rounded-full flex items-center"}>
                            <FaGooglePlay className={"text-xl text-nosh_blue-dark"}/>
                            <div className={"text-left"}>
                                <p className={"text-[8px]"}>ANDROID APP ON</p>
                                <p className={"font-semibold -mt-1"}>Google Play</p>
                            </div>
                        </button>
                        <button
                            className={"px-6 space-x-2 bg-white py-3 rounded-full flex items-center"}>
                            <FaApple className={"text-2xl text-nosh_blue-dark"}/>
                            <div className={"text-left"}>
                                <p className={"text-[8px]"}>DOWNLOAD ON THE</p>
                                <p className={"font-semibold -mt-1"}>App Store</p>
                            </div>
                        </button>
                    </div>

                </div>
                <div className={"w-[420px] absolute bottom-24 right-40 h-[420px]"}>
                    <img src={"/images/noshPhone.png"} className={"object-center h-[115%] w-[85%]"} alt=""/>
                </div>
            </main>
            {/*app for mobile only*/}
            <main className={"md:hidden my-24 relative rounded-md bg-nosh_blue-app"}>
                <div className={"py-10 px-4"}>
                    <h3 className={"text-nosh_blue-dark text-4xl text-center font-bold"}>Download <br/><span
                        className={"text-nosh_blue"}>NOSH APP</span></h3>
                    <p className={"text-nosh_blue-dark text-[16px] text-center leading-[20px] font-medium mt-5"}>Get the
                        APP today to start enjoying amazing
                        deals with #TopNOSHExperience.</p>
                    <div className={"border-b border-nosh_blue border-opacity-20 mt-10 mb-8"}/>
                    <div className={"flex space-x-1 justify-center"}>
                        <button
                            className={"space-x-2 px-4 py-3 bg-white rounded-full flex items-center"}>
                            <FaGooglePlay className={"text-xl text-nosh_blue-dark"}/>
                            <div className={"text-left"}>
                                <p className={"text-[8px]"}>ANDROID APP ON</p>
                                <p className={"font-semibold -mt-1"}>Google Play</p>
                            </div>
                        </button>
                        <button
                            className={"px-4 py-3 space-x-2 bg-white rounded-full flex items-center"}>
                            <FaApple className={"text-2xl text-nosh_blue-dark"}/>
                            <div className={"text-left"}>
                                <p className={"text-[8px]"}>DOWNLOAD ON THE</p>
                                <p className={"font-semibold -mt-1"}>App Store</p>
                            </div>
                        </button>
                    </div>
                </div>
            </main>
            {/*social-icon*/}
            <main className={"hidden md:block max-w-6xl mx-auto my-24 px-10"}>
                <div className={"flex items-center justify-between"}>
                    <div><img src={"/images/logo.png"} alt=""/></div>
                    <div className={"space-x-2"}>
                        <span className={"text-nosh_blue-dark "}>help@nosh.ng</span>
                        <span>|</span>
                        <span className={"text-nosh_blue-dark font-semibold"}>+234 8125349466</span>
                        <span className={"text-nosh_blue"}>|</span>
                        <span className={"font-semibold text-nosh_blue"}>Terms and Policies</span>
                    </div>
                    <div className={"flex items-center space-x-4"}>
                        <span className={"icons"}><FaFacebookF
                            className={"text-2xl text-white"}/></span>
                        <span className={"icons"}><FaTwitter
                            className={"text-2xl text-white"}/></span>
                        <span className={"icons"}><FaInstagram
                            className={"text-2xl text-white"}/></span>
                        <span className={"icons"}><FaYoutube
                            className={"text-2xl text-white"}/></span>
                    </div>
                </div>
            </main>
            {/*social-icons-mobile-only*/}
            <main className={"md:hidden"}>
                <div className={"p-10"}>
                    <div className={"px-32"}><img src={"/images/logo.png"} className={"object-contain w-[40px] h-[40px]"} alt=""/></div>
                    <div className={"border-b border-nosh_blue border-opacity-20 mt-10 mb-8"}/>
                    <div className={"space-x-3 text-center mb-4"}>
                        <span className={"text-nosh_blue-dark "}>help@nosh.ng</span>
                        <span>|</span>
                        <span className={"text-nosh_blue-dark font-semibold"}>+234 8125349466</span>
                    </div>
                    <div className={"flex items-center space-x-4 px-6"}>
                        <span className={" outline-none border-blue-400 p-3 rounded-full bg-nosh_blue"}><FaFacebookF
                            className={"text-2xl text-white"}/></span>
                        <span className={" outline-none border-blue-400 p-3 rounded-full bg-nosh_blue"}><FaTwitter
                            className={"text-2xl text-white"}/></span>
                        <span className={" outline-none border-blue-400 p-3 rounded-full bg-nosh_blue"}><FaInstagram
                            className={"text-2xl text-white"}/></span>
                        <span className={" outline-none border-blue-400 p-3 rounded-full bg-nosh_blue"}><FaYoutube
                            className={"text-2xl text-white"}/></span>
                    </div>
                    <p className={"font-semibold text-nosh_blue text-center mt-5 mb-5"}>Terms and Policies</p>
                    <div className={"border-b border-nosh_blue border-opacity-20 mt-10 mb-4"}/>

                </div>
            </main>

            <div className={"hidden md:block border-b border-gray-100 px-10 max-w-6xl mx-auto mb-20"}/>
            <div className={"hidden md:block max-w-6xl mx-auto px-12 text-center text-nosh_blue-dark font-normal text-[12px]"}>Nosh is an
                independent body and has no relation to any of iTunes,
                Steam, Google Play, Nike, Apple Store, Walmart, Sephora, Nordstrom, Target, JCPenney, Best Buy, Macy’s,
                Gamestop,
                Xbox, Amazon, Vanilla, eBay, G2A, American Express (AMEX), OffGamers, Foot Locker, Visa, Play Station
                and any other product
                offered on the platform. Their respective wordmarks and trademarks belong to them alone.
            </div>

            {/*mobile only*/}
            <div className={"md:hidden px-7 text-center text-nosh_blue-dark font-normal text-[14px]"}>Nosh is an
                independent body and has no relation to any of iTunes,
                Steam, Google Play, Nike, Apple Store, Walmart, Sephora, Nordstrom, Target, JCPenney, Best Buy, Macy’s,
                Gamestop,
                Xbox, Amazon, Vanilla, eBay, G2A, American Express (AMEX), OffGamers, Foot Locker, Visa, Play Station
                and any other product
                offered on the platform. Their respective wordmarks and trademarks belong to them alone.
            </div>

            <div className={"hidden md:block max-w-6xl mx-auto px-10 my-10"}>
                <p className={"text-center font-semibold text-nosh_blue"}>Copyright © 2021 Nosh.ng. All Rights
                    Reserved.</p>
            </div>
            <div className={"md:hidden px-5 my-10"}>
                <p className={"text-center font-semibold text-[14px] text-nosh_blue"}>Copyright © 2021 Nosh.ng. All Rights
                    Reserved.</p>
            </div>

        </section>
    );
};

export default Home;