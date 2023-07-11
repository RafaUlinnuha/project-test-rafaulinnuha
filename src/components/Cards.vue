<template>
    <div class="mt-24 max-w-screen-md xl:max-w-screen-lg mx-auto text-center">
        <h1 class="text-2xl font-semibold text-gray-900 uppercase">Our Values</h1>
        <div class="mt-8 grid md:grid-cols-3 gap-4">
            <div class="flex items-center">
                <div class="px-4 xl:px-6 py-8 xl:py-10 h-52 xl:h-64 text-slate-100 bg-red-400 border-2 border-red-500 shadow">
                    <img src="/lightbulb-o.png" class="mx-auto w-2 xl:w-4">
                    <h2 class="uppercase font-bold xl:text-xl mt-2 xl:mt-3">Innovative</h2>
                    <p class="text-xs xl:text-sm mt-4 xl:mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officia nulla dolorem asperiore ut, sit ipsam dicta!</p>
                </div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="50" viewBox="0 0 6 16"><path fill-rule="evenodd" d="M0 14l6-6l-6-6v12z" fill="#F05252"/></svg>
            </div>
            <div class="flex items-center">
                <div class="px-4 xl:px-6 py-8 xl:py-10 h-52 xl:h-64 text-slate-100 bg-green-500 border-2 border-green-600 shadow">
                    <img src="/bank.png" class="mx-auto w-4 xl:w-6">
                    <h2 class="uppercase font-bold xl:text-xl mt-2 xl:mt-3">Loyalty</h2>
                    <p class="text-xs xl:text-sm mt-4 xl:mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Proste animi tempore ad doloribus quam eos ratione itaque quaerat.</p>
                </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="50" viewBox="0 0 6 16"><path fill-rule="evenodd" d="M0 14l6-6l-6-6v12z" fill="#046C4E"/></svg>
            </div>
            <div class="px-4 xl:px-6 py-8 xl:py-10 h-52 xl:h-64 text-slate-100 bg-sky-500 border-2 border-sky-600 shadow">
                <img src="/balance-scale.png" class="mx-auto w-4 xl:w-6">
                <h2 class="uppercase font-bold xl:text-xl mt-2 xl:mt-3">Respect</h2>
                <p class="text-xs xl:text-sm mt-4 xl:mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem veritatis, vel, possimus obcaecati, eius!</p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'OcticonTriangleRight'
  }
</script>