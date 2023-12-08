<template>
    <section class="flex justify-center">
        <div class="w-[1088px] py-[5rem]">
            <div class="w-full bg-[url('~/assets/img/slider-background-01.webp')] bg-cover rounded-[30px]">
                <div class="flex justify-center gap-4 relative p-8">
                    <div class="absolute bottom-0 h-[.1rem] w-full bg-gray-200"></div>
                    <div class="absolute left-0 bottom-0 h-[.2rem] w-[70%] bg-[#ec7440]"></div>
                    <button
                        class="border text-[#797777] font-medium py-2 rounded-full px-3 min-w-[160px] flex gap-1 group  items-center justify-center">
                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#ec7440]"></span>
                        <span>Buy</span>
                    </button>
                    <button
                        class="border text-[#797777] font-medium py-2 rounded-full px-3 min-w-[160px] flex gap-1 group  items-center justify-center">

                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#00a76a]"></span>
                        <span>Earn</span>
                    </button>
                    <button
                        class="border text-[#797777] font-medium py-2 rounded-full px-3 min-w-[160px] flex gap-1 group  items-center justify-center">
                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-primartext-primaryBlue"></span>

                        <span>Exchange</span>
                    </button>
                    <button
                        class="border text-[#797777] font-medium py-2 rounded-full px-3 min-w-[160px] flex gap-1 group  items-center justify-center">

                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#3a8ef6]"></span>
                        <span>Borrow</span>
                    </button>
                    <button
                        class="border text-[#797777] font-medium py-2 rounded-full px-3 min-w-[160px] flex gap-1 group  items-center justify-center">
                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#1e4dd8]"></span>
                        <span>Card</span>
                    </button>
                </div>

                <div class="min-h-[500px] p-8">
                    <div class="flex items-center justify-between">
                        <div class="space-y-4 w-[600px]">
                            <h2 class="text-[2rem] font-medium">Buy Crypto in Seconds</h2>
                            <p class="space-y-4 text-[1.25rem] text-subText">Buy 60+ digital assets in seconds with card or
                                instant bank transfer. Get up to 0.5% in
                                crypto rewards on your purchase.</p>
                            <div class="flex gap-5 items-center">
                                <button
                                    class="flex gap-2 items-center bg-[#ec7440] text-white p-3 px-5 rounded-md font-bold text-xl">
                                    <span>Get Started</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </button>

                                <button class="flex items-center gap-3 text-[18px]">
                                    <span>Learn More</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <figure>
                            <img src="~/assets/img/slider-buy-us.webp" class="" alt="">
                        </figure>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="space-y-4 w-[600px]">
                            <h2 class="text-[2rem] font-medium"> Earn Up to 16% Interest</h2>
                            <p class="space-y-4 text-[1.25rem] text-subText">
                                Earn daily interest on USDT, USDC, BTC, and other popular digital assets. Top up and start
                                growing your wealth automatically without having to do anything yourself.
                            </p>
                            <div class="flex gap-5 items-center">
                                <button
                                    class="flex gap-2 items-center bg-[#00a76a] text-white p-3 px-5 rounded-md font-bold text-xl">
                                    <span>Get Started</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </button>

                                <button class="flex items-center gap-3 text-[18px]">
                                    <span>Learn More</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <figure>
                            <img src="~/assets/img/slider-earn.webp" class="" alt="">
                        </figure>
                    </div>


                    <div class="flex items-center justify-between">
                        <div class="space-y-4 w-[600px]">
                            <h2 class="text-[2rem] font-medium">Exchange Crypto with Zero Fees</h2>
                            <p class="space-y-4 text-[1.25rem] text-subText">Buy and sell instantly or at your desired price
                                from one easy-to-use interface.</p>
                            <div class="flex gap-5 items-center">
                                <button
                                    class="flex gap-2 items-center bg-[#1e4dd8] text-white p-3 px-5 rounded-md font-bold text-xl">
                                    <span>Get Started</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </button>

                                <button class="flex items-center gap-3 text-[18px]">
                                    <span>Learn More</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <figure>
                            <img src="~/assets/img/slider-exchange.webp" class="" alt="">
                        </figure>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="space-y-4 w-[600px]">
                            <h2 class="text-[2rem] font-medium">Borrow Against Your Digital Assets</h2>
                            <p class="space-y-4 text-[1.25rem] text-subText">Get liquidity against your crypto at 0%
                                interest with our Instant Crypto Credit Lines. Receive cash or stablecoins to grow your
                                portfolio or even finance your real estate purchase.</p>
                            <div class="flex gap-5 items-center">
                                <button
                                    class="flex gap-2 items-center bg-[#3a8ef6] text-white p-3 px-5 rounded-md font-bold text-xl">
                                    <span>Get Started</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </button>

                                <button class="flex items-center gap-3 text-[18px]">
                                    <span>Learn More</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <figure>
                            <img src="~/assets/img/slider-borrow.webp" class="" alt="">
                        </figure>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="space-y-4 w-[600px]">
                            <h2 class="text-[2rem] font-medium">Get the Only Dual Mode Crypto Card</h2>
                            <p class="space-y-4 text-[1.25rem] text-subText">Buy 60+ digital assets in seconds with card or
                                instant bank transfer. Get up to 0.5% in crypto rewards on your purchase.</p>
                            <div class="flex gap-5 items-center">
                                <button
                                    class="flex gap-2 items-center bg-[#1e4dd8] text-white p-3 px-5 rounded-md font-bold text-xl">
                                    <span>Get Started</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </button>

                                <button class="flex items-center gap-3 text-[18px]">
                                    <span>Learn More</span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em"
                                            viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <figure>
                            <img src="~/assets/img/slider-card.webp" class="" alt="">
                        </figure>
                    </div>
                </div>
            </div>

            <div class="pt-[10rem] flex divide-x-2 justify-between items-center">
                <div class="space-y-2 w-full">
                    <h1 class="text-primaryBlue font-extrabold text-[2.25rem]">$130B+</h1>
                    <p class="text-subText flex flex-col leading-[1.2] text-[1.1rem]">
                        <span>Processed in</span>
                        <span>5+ years</span>
                    </p>
                </div>

                <div class="space-y-2 w-full pl-5">
                    <h1 class="text-primaryBlue font-extrabold text-[2.25rem]">6M+ </h1>
                    <p class="text-subText flex flex-col leading-[1.2] text-[1.1rem]">
                        <span>Nexo users</span>
                        <span>worldwide</span>
                    </p>
                </div>

                <div class="space-y-2 w-full pl-5">
                    <h1 class="text-primaryBlue font-extrabold text-[2.25rem]">60+</h1>
                    <p class="text-subText flex flex-col leading-[1.2] text-[1.1rem]">
                        <span>Supported</span>
                        <span>cryptocurrencies </span>
                    </p>
                </div>

                <div class="space-y-2 w-full pl-5">
                    <h1 class="text-primaryBlue font-extrabold text-[2.25rem]">$130B+</h1>
                    <p class="text-subText flex flex-col leading-[1.2] text-[1.1rem]">
                        <span>Available</span>
                        <span>jurisdictions</span>
                    </p>
                </div>

            </div>



            <div class="pt-[10rem] flex border justify-between">
                <div class="w-[530px] rounded-3xl space-y-3 p-16 pb-3 pr-3 bg-[#f4f6fd]">
                    <h2 class="text-[1.8rem] font-semibold">Refer Friends & Win Rewards</h2>
                    <p class="text-subText text-[1.2rem] leading-[1.7]">Introduce your friends to the world of crypto and receive $25 paid out in
                        Bitcoin for each successful referral.</p>
                    <button class="flex items-center gap-3 text-[18px] font-semibold">
                        <span>Learn More</span>
                        <span class="w-8 h-8 rounded-full flex items-center justify-center bg-primaryBlue text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                </path>
                            </svg>
                        </span>
                    </button>
                    <div class="w-full flex justify-end pt-0">
                        <img src="~/assets/img/visual_referral_01.webp" class="w-[60%]" alt="">
                    </div>
                </div>
                <div class="w-[530px] rounded-3xl space-y-3 p-16 pb-3 pr-3 bg-[#f4f6fd]">
                    <h2 class="text-[1.8rem] font-semibold">Grow with Your Community</h2>
                    <p class="text-subText text-[1.2rem] leading-[1.7]">Earn a revenue share by joining Nexo's Affiliate Program. Make money every time an invited user earns interest, swaps, or borrows funds.</p>
                    <a href="" class="flex items-center gap-3 text-[20px] font-semibold">
                        <span>Become an Affiliate</span>
                        <span class="w-8 h-8 rounded-full flex items-center justify-center bg-primaryBlue text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                                viewBox="0 0 448 512">
                                <path
                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                </path>
                            </svg>
                        </span>
                    </a>
                    <div class="w-full flex justify-end pt-0">
                        <img src="~/assets/img/visual_affiliate_02.webp" class="w-[60%]" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>