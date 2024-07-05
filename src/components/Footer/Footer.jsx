import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Footer() {
  return (

<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
    <div class="w-full mx-auto max-w-screen-xl p-3 md:flex md:items-center md:justify-center gap-2">
    <ul class="flex flex-wrap p-2 justify-center items-center text-sm font-medium text-gray-400 dark:text-gray-400 sm:mt-0">
        {/* <li>
            <a href="#" class="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Projects</a>
        </li> */}
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" class="hover:underline me-4 md:me-6">Terms</a>
        </li>
        {/* <li>
            <a href="#" class="hover:underline">Contact</a>
        </li> */}
    </ul>
    <span class=" flex text-sm p-2 text-gray-400 justify-center items-center text-center dark:text-gray-400">
        © 2024 
        <a href="/" class="hover:underline px-3">
            HiViAi™
            </a>
            All Rights Reserved.
    </span>

    </div>
</footer>

  );
}
