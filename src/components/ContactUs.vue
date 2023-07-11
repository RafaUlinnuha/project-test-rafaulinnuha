<template>
    <div class="mt-24 max-w-screen-sm mx-auto">
        <h1 class="text-2xl font-semibold text-gray-800 uppercase text-center mb-6">Contact Us</h1>
        <form>
            <div class="mb-2">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            </div>
            <div class="mb-2">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
            </div>
            <div class="mb-6">    
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            
            <button type="submit" class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm w-full px-5 py-2.5 text-center uppercase">Submit</button>
        </form>
    </div>
</template>