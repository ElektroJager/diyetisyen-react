import { NavLink } from "react-router-dom";
function Header(){
    return(
        <div>
            <nav class="bg-white dark:bg-indigo-700  ">
                <div class="max-w-xl mx-auto px-8">
                    <div class="flex items-center justify-center h-16">
                        <div class=" flex items-center">
                            <div class="hidden md:block">
                                <div class="ml-10 flex items-baseline space-x-8">
                                    <NavLink to="/" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" }>MELTEM KURTTEPE</NavLink>
                                    <NavLink to="/hakkimda" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" }>Hakkımda</NavLink>
                                    <NavLink to="/online-diyet" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" }>Online Diyet</NavLink>
                                    <NavLink to="/zayiflayanlar" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" }>Zayıflayanlar</NavLink>
                                    <NavLink to="/yorumlar" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" }>Yorumlar</NavLink>
                                    <NavLink to="/kayit" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-Roboto font-medium truncate" }>Hemen Başla</NavLink>                           
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <div class="ml-4 flex items-center md:ml-6">
                            </div>
                        </div>
                        <div class="-mr-2 flex md:hidden">
                            <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" class="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-medium" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-medium" }>Home</NavLink>
                        <NavLink to="/contact" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-medium" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-medium" }>Contact</NavLink>
                        <NavLink to="/blog" className={(navData)=> navData.isActive ? "text-gray-800 dark:text-green-400 px-3 py-2 rounded-md text-md font-medium" : "text-gray-800 dark:text-white hover:text-gray-800 dark:hover:text-gray-400 px-3 py-2 rounded-md text-md font-medium" }>Blog</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Header