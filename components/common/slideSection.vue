<script lang="ts" setup>
let tabState: any = ref(1)
let interval: any = ref(null)
let progressBar: any = ref(0)

function handleTab(currentPos: number) {
    progressBar.value = 0;
    tabState.value = currentPos
}

const background = computed(() => {
    return tabState.value === 1 ? "bg-[url('~/assets/img/slider-background-01.webp')]" : tabState.value === 2 ? "bg-[url('~/assets/img/slider-background-02.webp')]" :
        tabState.value === 3 ? "bg-[url('~/assets/img/slider-background-03.webp')]" : tabState.value === 4 ? "bg-[url('~/assets/img/slider-background-04.webp')]" : "bg-[url('~/assets/img/slider-background-05.webp')]"
})


const progressColor = computed(() => {
    return tabState.value === 1 ? "#ec7440" : tabState.value === 2 ? "#00a76a" :
        tabState.value === 3 ? "#1e4dd8" : tabState.value === 4 ? "#3a8ef6" : "#1e4dd8"
})

function pauseDisplay() {
    sliderRemote().pause();
}

function playDisplay() {
    sliderRemote().play(
        function () {
            progressBar.value += 1;
            if (progressBar.value > 99) {
                progressBar.value = 0
                tabState.value += 1;
                if(tabState.value > 4) {
                    tabState.value = 1;
                }
            }
        }
    )
}

function sliderRemote() {
    return {
        play: (cb: () => void) => {
            interval.value = setInterval(cb, 200)
        },
        pause: () => {
            clearInterval(interval.value)
        }
    }
}



onMounted(() => {
    playDisplay()
})


</script>

<template>
    <section class="flex justify-center">
        <div class="bigLg:w-[1088px] bigLg:px-0 sm:px-5 px-3 w-full py-[5rem]">
            <div class="w-full bg-[#f2f5ff] bg-cover rounded-[30px] transition-all duration-500" :class="background">
                <div class="flex justify-center gap-4 relative p-5 flex-wrap">
                    <div class="absolute bottom-0 h-[.1rem] w-full bg-gray-200"></div>
                    <div class="absolute left-0 bottom-0 h-[.2rem] ease-linear transition-all duration-50"
                        :class="`bg-[${progressColor}]`" :style="`width: ${progressBar.toString()}%`">
                    </div>
                    <button @click="handleTab(1)"
                        class="border text-[#797777] font-medium md:py-2 py-1 rounded-full md:px-3 px-2 md:min-w-[160px] w-[120px] flex gap-1 group  items-center justify-center transition-all duration-300"
                        :class="tabState === 1 ? 'bg-white border-0' : 'bg-transparent'">
                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#ec7440]"
                            :class="tabState === 1 ? 'opacity-100' : 'opacity-0'"></span>
                        <span>Buy</span>
                    </button>
                    <button @click="handleTab(2)"
                        class="border text-[#797777] font-medium md:py-2 py-1 rounded-full md:px-3 px-2 md:min-w-[160px] w-[120px] flex gap-1 group  items-center justify-center transition-all duration-300"
                        :class="tabState === 2 ? 'bg-white border-0' : 'bg-transparent'">

                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#00a76a]"
                            :class="tabState === 2 ? 'opacity-100' : 'opacity-0'"></span>
                        <span>Earn</span>
                    </button>
                    <button @click="handleTab(3)"
                        class="border text-[#797777] font-medium md:py-2 py-1 rounded-full md:px-3 px-2 md:min-w-[160px] w-[120px] flex gap-1 group  items-center justify-center transition-all duration-300"
                        :class="tabState === 3 ? 'bg-white border-0' : 'bg-transparent'">
                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#1e4dd8]"
                            :class="tabState === 3 ? 'opacity-100' : 'opacity-0'"></span>

                        <span>Exchange</span>
                    </button>
                    <button @click="handleTab(4)"
                        class="border text-[#797777] font-medium md:py-2 py-1 rounded-full md:px-3 px-2 md:min-w-[160px] w-[120px] flex gap-1 group  items-center justify-center transition-all duration-300"
                        :class="tabState === 4 ? 'bg-white border-0' : 'bg-transparent'">

                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#3a8ef6]"
                            :class="tabState === 4 ? 'opacity-100' : 'opacity-0'"></span>
                        <span>Borrow</span>
                    </button>
                    <button @click="handleTab(5)"
                        class="border text-[#797777] font-medium md:py-2 py-1 rounded-full md:px-3 px-2 md:min-w-[160px] w-[120px] flex gap-1 group  items-center justify-center transition-all duration-300"
                        :class="tabState === 5 ? 'bg-white border-0' : 'bg-transparent'">
                        <span
                            class="opacity-0 transition-all duration-300 group-hover:opacity-100 w-3 h-3 rounded-full bg-[#1e4dd8]"
                            :class="tabState === 5 ? 'opacity-100' : 'opacity-0'"></span>
                        <span>Card</span>
                    </button>
                </div>

                <div class="min-h-[500px] p-8" @mouseover="pauseDisplay" @mouseleave="playDisplay">
                    <div class="flex items-center justify-between md:flex-row flex-col" v-if="tabState === 1">
                        <div class="flex flex-col items-start gap-3 md:w-[600px] w-full">
                            <h2 class="text-[1.65rem] font-medium">Buy Crypto in Seconds</h2>

                            <p class="text-[1.15rem] text-subText font-light">Buy 60+ digital assets in seconds with card or
                                instant bank transfer. Get up to 0.5% in
                                crypto rewards on your purchase.</p>


                            <div class="flex md:gap-5 gap-4 md:items-center md:flex-row flex-col">
                                <a href="#"
                                    class="flex gap-2 items-center  bg-[#ec7440] text-white p-3 px-4 rounded-md font-bold sm:text-lg text-sm">
                                    <span>Buy Now</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </a>

                                <a href="" class="flex items-center gap-3 text-[16.5px]">
                                    <span class="font-medium">Learn More</span>
                                    <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                                        :style="`background:${progressColor}`">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <figure class="flex justify-center">
                            <img src="~/assets/img/slider-buy-us.webp" class="md:w-[70%] w-full" alt="">
                        </figure>
                    </div>

                    <div class="flex items-center justify-between md:flex-row flex-col" v-if="tabState === 2">
                        <div class="flex flex-col items-start gap-3 md:w-[600px] w-full">
                            <h2 class="text-[1.65rem] font-medium"> Earn Up to 16% Interest</h2>
                            <p class="text-[1.15rem] text-subText font-light">
                                Earn daily interest on USDT, USDC, BTC, and other popular digital assets. Top up and start
                                growing your wealth automatically without having to do anything yourself.
                            </p>



                            <div class="flex md:gap-5 gap-4 md:items-center md:flex-row flex-col">
                                <a href="#"
                                    class="flex gap-2 items-center bg-[#00a76a] text-white p-3 px-4 rounded-md font-bold sm:text-lg text-sm">
                                    <span>Buy Now</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </a>

                                <a href="" class="flex items-center gap-3 text-[16.5px]">
                                    <span class="font-medium">Learn More</span>
                                    <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                                        :style="`background:${progressColor}`">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <figure class="flex justify-center">
                            <img src="~/assets/img/slider-earn.webp" class="md:w-[70%] w-full" alt="">
                        </figure>
                    </div>


                    <div class="flex items-center justify-between md:flex-row flex-col" v-if="tabState === 3">
                        <div class="flex flex-col items-start gap-3 md:w-[600px] w-full">
                            <h2 class="text-[1.65rem] font-medium">Exchange Crypto with Zero Fees</h2>
                            <p class="text-[1.15rem] text-subText font-light">Buy and sell instantly or at your desired
                                price
                                from one easy-to-use interface.</p>


                            <div class="flex md:gap-5 gap-4 md:items-center md:flex-row flex-col">
                                <a href="#"
                                    class="flex gap-2 items-center bg-[#1e4dd8] text-white p-3 px-4 rounded-md font-bold sm:text-lg text-sm">
                                    <span>Buy Now</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </a>

                                <a href="" class="flex items-center gap-3 text-[16.5px]">
                                    <span class="font-medium">Learn More</span>
                                    <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                                        :style="`background:${progressColor}`">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <figure class="flex justify-center">
                            <img src="~/assets/img/slider-exchange.webp" class="md:w-[70%] w-full" alt="">
                        </figure>
                    </div>
                    <div class="flex items-center justify-between md:flex-row flex-col" v-if="tabState === 4">
                        <div class="flex flex-col items-start gap-3 md:w-[600px] w-full">
                            <h2 class="text-[1.65rem] font-medium">Borrow Against Your Digital Assets</h2>
                            <p class="text-[1.15rem] text-subText font-light">Get liquidity against your crypto at 0%
                                interest with our Instant Crypto Credit Lines. Receive cash or stablecoins to grow your
                                portfolio or even finance your real estate purchase.</p>


                            <div class="flex md:gap-5 gap-4 md:items-center md:flex-row flex-col">
                                <a href="#"
                                    class="flex gap-2 items-center  bg-[#3a8ef6] text-white p-3 px-4 rounded-md font-bold sm:text-lg text-sm">
                                    <span>Buy Now</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </a>

                                <a href="" class="flex items-center gap-3 text-[16.5px]">
                                    <span class="font-medium">Learn More</span>
                                    <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                                        :style="`background:${progressColor}`">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <figure class="flex justify-center">
                            <img src="~/assets/img/slider-borrow.webp" class="md:w-[70%] w-full" alt="">
                        </figure>
                    </div>

                    <div class="flex items-center justify-between md:flex-row flex-col" v-if="tabState === 5">
                        <div class="flex flex-col items-start gap-3 md:w-[600px] w-full">
                            <h2 class="text-[1.65rem] font-medium">Get the Only Dual Mode Crypto Card</h2>
                            <p class="text-[1.15rem] text-subText font-light">Buy 60+ digital assets in seconds with card or
                                instant bank transfer. Get up to 0.5% in crypto rewards on your purchase.</p>



                            <div class="flex md:gap-5 gap-4 md:items-center md:flex-row flex-col">
                                <a href="#"
                                    class="flex gap-2 items-center  bg-[#1e4dd8] text-white p-3 px-4 rounded-md font-bold sm:text-lg text-sm">
                                    <span>Buy Now</span>
                                    <i><svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 320 512">
                                            <path
                                                d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z">
                                            </path>
                                        </svg></i>
                                </a>

                                <a href="" class="flex items-center gap-3 text-[16.5px]">
                                    <span class="font-medium">Learn More</span>
                                    <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                                        :style="`background:${progressColor}`">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                            fill="currentColor" viewBox="0 0 448 512">
                                            <path
                                                d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <figure class="flex justify-center">
                            <img src="~/assets/img/slider-card.webp" class="md:w-[70%] w-full" alt="">
                        </figure>
                    </div>
                </div>
            </div>

            <div class="md:pt-[6rem] pt-[5rem] sm:px-5 px-3 grid md:grid-cols-4 grid-cols-2 gap-5 md:divide-x-2 md:divide-gray-100">
                <div class="space-y-2 w-full">
                    <h1 class="text-primaryBlue font-extrabold bigLg:text-[2.05rem] sm:text-[1.85rem] text-[1.63rem]">$130B+</h1>
                    <p class="text-subText flex flex-col font-light leading-[1.2] text-[1rem]">
                        <span>Processed in</span>
                        <span>5+ years</span>
                    </p>
                </div>

                <div class="space-y-2 w-full md:pl-5">
                    <h1 class="text-primaryBlue font-extrabold bigLg:text-[2.05rem] sm:text-[1.85rem] text-[1.63rem]">6M+ </h1>
                    <p class="text-subText flex flex-col font-light leading-[1.2] text-[1rem]">
                        <span>Nexo users</span>
                        <span>worldwide</span>
                    </p>
                </div>

                <div class="space-y-2 w-full md:pl-5">
                    <h1 class="text-primaryBlue font-extrabold bigLg:text-[2.05rem] sm:text-[1.85rem] text-[1.63rem]">60+</h1>
                    <p class="text-subText flex flex-col font-light leading-[1.2] text-[1rem]">
                        <span>Supported</span>
                        <span>cryptocurrencies </span>
                    </p>
                </div>

                <div class="space-y-2 w-full md:pl-5">
                    <h1 class="text-primaryBlue font-extrabold bigLg:text-[2.05rem] sm:text-[1.85rem] text-[1.63rem]">$200+</h1>
                    <p class="text-subText flex flex-col font-light leading-[1.2] text-[1rem]">
                        <span>Available</span>
                        <span>jurisdictions</span>
                    </p>
                </div>

            </div>



            <div class="md:pt-[10rem] pt-[5rem] flex bigLg:justify-between md:flex-row flex-col gap-5">
                <div class="lg:w-1/2 md:w-1/2 w-full rounded-3xl md:space-y-3 space-y-1 lg:p-16 p-5 pb-3 pr-3 bg-[#f4f6fd] flex flex-col">
                    <h2 class="md:text-[1.56rem] sm:text-[1.35rem] text-[1.25rem] font-semibold leading-tight">Refer Friends & Win Rewards</h2>
                    <p class="text-subText sm:text-[1.1rem] text-[.95rem] leading-[1.7]">Introduce your friends to the world of crypto and
                        receive $25 paid out in
                        Bitcoin for each successful referral.</p>
                    <a href="" class="flex items-center gap-3 text-[16.5px] grow">
                        <span class="font-medium">Learn More</span>
                        <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                            :style="`background:${progressColor}`">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                fill="currentColor" viewBox="0 0 448 512">
                                <path
                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                </path>
                            </svg>
                        </span>
                    </a>
                    <div class="w-full flex justify-end pt-0 ">
                        <img src="~/assets/img/visual_referral_01.webp" class="md:w-[60%] w-[50%]" alt="">
                    </div>
                </div>
                <div class="lg:w-1/2 md:w-1/2 w-full rounded-3xl md:space-y-3 space-y-1 lg:p-16 p-5 pb-3 pr-3 bg-[#f4f6fd] flex flex-col">
                    <h2 class="md:text-[1.56rem] sm:text-[1.35rem] text-[1.25rem] font-semibold leading-tight">Grow with Your Community</h2>
                    <p class="text-subText sm:text-[1.1rem] text-[.95rem] leading-[1.7]">Earn a revenue share by joining Nexo's Affiliate
                        Program. Make money every time an invited user earns interest, swaps, or borrows funds.</p>
                    <a href="" class="flex items-center gap-3 text-[16.5px] grow">
                        <span class="font-medium">Become an Affiliate</span>
                        <span class="w-7 h-7 rounded-full flex items-center justify-center text-white"
                            :style="`background:${progressColor}`">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="bigLg:w-[1.2em] lg:w-[1em] w-[.75rem] bigLg:h-[1.2em] lg:h-[1em] h-[.75rem]"
                                fill="currentColor" viewBox="0 0 448 512">
                                <path
                                    d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z">
                                </path>
                            </svg>
                        </span>
                    </a>
                    <div class="w-full flex justify-end pt-0">
                        <img src="~/assets/img/visual_affiliate_02.webp" class="md:w-[60%] w-[50%]" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>