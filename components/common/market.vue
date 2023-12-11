<script setup>
const marketText = {
    headingBold: "Market",
    headingL: "Trends",
    tab: ["Hot Spot", "Hot Derivative", "Top Looser", "New Listing", "Top Gainer"],
    thead: ["Pairs", "Last Price", "24h Change", "24h Volume"],
    tbody: [
        {
            icon: "~/assets/img/landingpage/BTC.png",
            coin_name: "BTCUSDT",
            lastPrice: "37.834",
            change24h: 2.49,
            volume24h: "390.12M USDT",
            btn: "Trade"
        },
        {
            icon: "~/assets/img/landingpage/BTC.png",
            coin_name: "BTCUSDT",
            lastPrice: "37.834",
            change24h: 2.49,
            volume24h: "390.12M USDT",
            btn: "Trade"
        },
        {
            icon: "~/assets/img/landingpage/BTC.png",
            coin_name: "BTCUSDT",
            lastPrice: "37.834",
            change24h: 2.49,
            volume24h: "390.12M USDT",
            btn: "Trade"
        }
    ]
}

const tabState = ref(1)

function handleTabs(tab) {
    tabState.value = tab;
}
</script>


<template>
    <section class="w-full pb-10 p-2 md:pt-[10rem] pt-[5rem] flex justify-center tranlate">
        <div class="bigLg:w-[1088px] w-full">
            <h1 class="bigLg:text-[2.5rem] lg:text-[2rem] text-[1.5rem] text-[#030303] "><span
                    class="font-semibold">Market </span> Trends
            </h1>

            <div class="relative">
                <!-- <div class="absolute inset-0 z-[1] animate-blur md:block hidden"></div> -->
                <div
                    class="border-0 p-2 md:border border-primary/80 relative bg-[#f4f6fd] z-[10] w-full md:p-3  mt-4 rounded-xl grid lg:grid-cols-4 divide-x divide-gray-600/30">
                    <div class="col-span-3 h-full w-full lg:pr-10">
                        <CommonUtilsMoreLink
                            class="w-full  overflow-auto border-b border-b-gray-500/20 lg:p-2 lg:pl-10  border-navColor/50 md:flex justify-between items-center">
                            <div class="space-x-4 flex w-0">
                                <button @click="handleTabs(1)" :class="tabState === 1 ? 'text-[#030303]' : 'text-[#666666]'"
                                    class="whitespace-nowrap lg:text-xl  sm:text-md text-sm font-medium leading-[3] transition-all duration-300"
                                    role="tab">
                                    {{ marketText.tab[0] }} </button>

                                <button @click="handleTabs(2)" :class="tabState === 2 ? 'text-[#030303]' : 'text-[#666666]'"
                                    class="whitespace-nowrap lg:text-xl sm:text-md text-sm font-medium leading-[3] transition-all duration-300"
                                    role="tab">{{
                                        marketText.tab[1] }}</button>

                                <button @click="handleTabs(3)" :class="tabState === 3 ? 'text-[#030303]' : 'text-[#666666]'"
                                    class="whitespace-nowrap lg:text-xl sm:text-md text-sm font-medium leading-[3] transition-all duration-300"
                                    role="tab">{{
                                        marketText.tab[2] }}</button>

                                <button @click="handleTabs(4)" :class="tabState === 4 ? 'text-[#030303]' : 'text-[#666666]'"
                                    class="whitespace-nowrap lg:text-xl sm:text-md text-sm lg:hidden inline-block font-medium leading-[3] transition-all duration-300"
                                    role="tab">{{
                                        marketText.tab[3] }}</button>

                                <button @click="handleTabs(5)" :class="tabState === 5 ? 'text-[#030303]' : 'text-[#666666]'"
                                    class="whitespace-nowrap lg:text-xl sm:text-md text-sm lg:hidden inline-block font-medium leading-[3] transition-all duration-300"
                                    role="tab">{{
                                        marketText.tab[4] }}</button>
                            </div>

                            <template #link>
                                <a href="" class="font-medium hidden md:inline-block text-[#030303]">
                                    More &rarr;
                                </a>
                            </template>
                        </CommonUtilsMoreLink>

                        <div class="lg:px-10 pb-5 md:py-0 py-5">

                            <!-- THIS IS FOR MOBILE - THIS ARE BUNCH OF REPEATED TAB MENUS - BAD PRACTICE ANYWAY HAHAHA -->
                            <a id="Hot spot" v-if="tabState === 1"
                                class="md:hidden md:p-3 p-1 odd:bg-[#eeeeee] px-2  block rounded-md my-2" href=""
                                v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key">
                                <div class="flex justify-between items-center text-[#030303]">
                                    <div class="">
                                        <div class="">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium sm:text-normal text-sm">{{ data.coin_name }}</span>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="">
                                            <span class="font-medium sm:text-normal text-sm">{{ data.lastPrice }}</span>
                                        </div>

                                        <div class="sm:text-normal text-sm">
                                            <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                                data.change24h }}%</span>
                                        </div>

                                    </div>
                                </div>
                            </a>

                            <!-- HOT DERIVATVE -->
                            <a id="Hot Derivative" v-if="tabState === 2"
                                class="md:hidden md:p-3 p-1 odd:bg-[#eeeeee] px-2  block rounded-md my-2" href=""
                                v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key">
                                <div class="flex justify-between items-center text-[#030303]">
                                    <div class="">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium sm:text-normal text-sm">{{ data.coin_name }}</span>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="">
                                            <span class="font-medium sm:text-normal text-sm">{{ data.lastPrice }}</span>
                                        </div>

                                        <div class="sm:text-normal text-sm">
                                            <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                                data.change24h }}%</span>
                                        </div>

                                    </div>
                                </div>
                            </a>

                            <!-- Top Loosers -->
                            <a id="Top Looser" v-if="tabState === 3"
                                class="md:hidden md:p-3 p-1 odd:bg-[#eeeeee] px-2  block rounded-md my-2" href=""
                                v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key">
                                <div class="flex justify-between items-center text-[#030303]">
                                    <div class="">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium sm:text-normal text-sm">{{ data.coin_name }}</span>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="">
                                            <span class="font-medium sm:text-normal text-sm">{{ data.lastPrice }}</span>
                                        </div>

                                        <div class="sm:text-normal text-sm">
                                            <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                                data.change24h }}%</span>
                                        </div>

                                    </div>
                                </div>
                            </a>


                            <!-- New Listing -->
                            <a id="New Listing" v-if="tabState === 4"
                                class="md:hidden md:p-3 p-1 odd:bg-[#eeeeee] px-2  block rounded-md my-2" href=""
                                v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key">
                                <div class="flex justify-between items-center text-[#030303]">
                                    <div class="">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium sm:text-normal text-sm">{{ data.coin_name }}</span>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="">
                                            <span class="font-medium sm:text-normal text-sm">{{ data.lastPrice }}</span>
                                        </div>

                                        <div class="sm:text-normal text-sm">
                                            <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                                data.change24h }}%</span>
                                        </div>

                                    </div>
                                </div>
                            </a>

                            <!-- Top Gainer -->
                            <a id="Hot spot" v-if="tabState === 5"
                                class="md:hidden md:p-3 p-1 odd:bg-[#eeeeee] px-2  block rounded-md my-2" href=""
                                v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key">
                                <div class="flex justify-between items-center text-[#030303]">
                                    <div class="">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium sm:text-normal text-sm">{{ data.coin_name }}</span>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="">
                                            <span class="font-medium sm:text-normal text-sm">{{ data.lastPrice }}</span>
                                        </div>

                                        <div class="sm:text-normal text-sm">
                                            <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                                data.change24h }}%</span>
                                        </div>

                                    </div>
                                </div>
                            </a>



                            <!-- WEB SIZE VERSION -->
                            <table class="w-full md:table hidden text-[#030303]" style="width: 100%;">
                                <tr class="">
                                    <th class="p-5 text-left font-light">{{ marketText.thead[0] }}</th>
                                    <th class="p-5 text-left font-light">{{ marketText.thead[1] }}</th>
                                    <th class="p-5 text-left font-light">{{ marketText.thead[2] }}</th>
                                    <th class="p-5 text-left font-light">{{ marketText.thead[3] }}</th>
                                    <th class="p-5 text-left font-light"></th>
                                </tr>

                                <tr v-if="marketText.tbody.length && tabState === 1"
                                    v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key"
                                    class="odd:bg-navColor/10 text-left my-2">
                                    <td class="p-3">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium">{{ data?.coin_name }}</span>
                                        </div>
                                    </td>
                                    <td class="p-3">
                                        <span class="font-medium">{{ data?.lastPrice }}</span>
                                    </td>

                                    <td class="p-3">
                                        <span :class="data?.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                            data?.change24h }}%</span>
                                    </td>

                                    <td class="p-3">
                                        <span class="font-medium">{{ data?.volume24h }}</span>
                                    </td>

                                    <td class="p-3">
                                        <a :href="data?.btn" role="button" class="font-medium hover:text-[#d8d8d8]">{{
                                            data?.btn
                                        }}</a>
                                    </td>
                                </tr>

                                <!-- HOT DERIVATIVE -->
                                <tr v-if="marketText.tbody.length && tabState === 2"
                                    v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key"
                                    class="odd:bg-navColor/10 text-left my-2">
                                    <td class="p-3">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium">{{ data?.coin_name }}</span>
                                        </div>
                                    </td>
                                    <td class="p-3">
                                        <span class="font-medium">{{ data?.lastPrice }}</span>
                                    </td>

                                    <td class="p-3">
                                        <span :class="data?.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                            data?.change24h }}%</span>
                                    </td>

                                    <td class="p-3">
                                        <span class="font-medium">{{ data?.volume24h }}</span>
                                    </td>

                                    <td class="p-3">
                                        <a :href="data?.btn" role="button" class="font-medium hover:text-[#d8d8d8]">{{
                                            data?.btn
                                        }}</a>
                                    </td>
                                </tr>
                                <!-- TOP LOOSER -->
                                <tr v-if="marketText.tbody.length && tabState === 3"
                                    v-for="(data, key) in marketText.tbody.slice(0, 5)" :key="key"
                                    class="odd:bg-navColor/10 text-left my-2">
                                    <td class="p-3">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium">{{ data?.coin_name }}</span>
                                        </div>
                                    </td>
                                    <td class="p-3">
                                        <span class="font-medium">{{ data?.lastPrice }}</span>
                                    </td>

                                    <td class="p-3">
                                        <span :class="data?.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                            data?.change24h }}%</span>
                                    </td>

                                    <td class="p-3">
                                        <span class="font-medium">{{ data?.volume24h }}</span>
                                    </td>

                                    <td class="p-3">
                                        <a :href="data?.btn" role="button" class="font-medium hover:text-[#d8d8d8]">{{
                                            data?.btn
                                        }}</a>
                                    </td>
                                </tr>

                                <tr v-else class="bg-navColor/10 text-left p-2">
                                </tr>
                            </table>
                        </div>



                    </div>

                    <div class="lg:grid grid-rows-2  divide-y divide-gray-600/40 hidden">
                        <div class="h-full px-5 py-1 font-medium">
                            <CommonUtilsMoreLink
                                class=" border-b py-[.4rem] border-navColor/20 flex justify-between items-center text-[#030303]">
                                <h1 class="text-xl">{{ marketText.tab[3] }}</h1>

                                <template #link>
                                    <a href="" class="hover:text-primaryHover transition-colors duration-300">
                                        More &rarr;
                                    </a>
                                </template>
                            </CommonUtilsMoreLink>

                            <table class="w-full" style="width: 100%;">
                                <tr class="">
                                    <th class="text-left"></th>
                                    <th class="text-left"></th>
                                </tr>

                                <tr v-for="(data, key) in marketText.tbody" :key="key" class="text-center text-[#030303]">
                                    <td class="p-3">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-medium">{{ data.coin_name }}</span>
                                        </div>
                                    </td>
                                    <td class="p-3">
                                        <div class="font-light">{{ data.lastPrice }}</div>

                                        <div :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                            data.change24h }}%</div>
                                    </td>
                                </tr>
                            </table>
                        </div>


                        <div class="h-full px-5 py-2 font-medium">
                            <CommonUtilsMoreLink
                                class=" border-b p-2 border-navColor/50 flex justify-between items-center text-[#030303]">
                                <h1 class="text-xl">{{ marketText.tab[4] }}</h1>

                                <template #link>
                                    <a href="" class="hover:text-primaryHover transition-colors duration-300">
                                        More &rarr;
                                    </a>
                                </template>
                            </CommonUtilsMoreLink>


                            <table class="w-full" style="width: 100%;">
                                <tr class="">
                                    <th class="text-left"></th>
                                    <th class="text-left"></th>
                                </tr>

                                <tr v-for="(data, key) in marketText.tbody" :key="key" class="text-center text-[#030303]">
                                    <td class="p-2">
                                        <div class="flex gap-3 items-center">
                                            <!-- <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt=""> -->
                                            <span class="font-regular">{{ data.coin_name }}</span>
                                        </div>
                                    </td>
                                    <td class="p-2">
                                        <div class="font-light">{{ data.lastPrice }}</div>

                                        <div :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                            data.change24h }}%</div>
                                    </td>
                                </tr>

                            </table>
                        </div>
                    </div>
                </div>
            </div>


            <div
                class="text-center md:hidden sm:text-normal text-sm text-[#030303] hover:text-primaryHover transition-colors duration-300">
                <a href="" role="" class="w-full font-regular">
                    More &rarr;
                </a>
            </div>
        </div>
    </section>
</template>
