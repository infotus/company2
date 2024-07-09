import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer class="bg-transparent shadow-md w-full">
        <section class="bg-cyan-400 shadow dark:bg-cyan-800">
            <div class="w-full mx-auto max-w-screen-xl p-1 md:flex md:items-center md:justify-center gap-2">
                <ul class="flex flex-wrap p-2 justify-center items-center text-sm font-medium text-gray-100 dark:text-gray-100 sm:mt-0">
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline me-4 md:me-6">Terms</a>
                    </li>

                </ul>
                <span class=" flex text-sm p-2 text-gray-100 justify-center items-center text-center dark:text-gray-100">
                    © 2024 
                    <a href="/" class="hover:underline px-3">
                        HiViAi™
                    </a>
                        All Rights Reserved.
                </span>

            </div>
        </section>
    </footer>
  );
}
