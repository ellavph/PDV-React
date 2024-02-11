import React, { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={`body ${isDarkMode ? 'dark' : ''}`}>
      <div className="fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10">
        <div className="flex-none h-full flex items-center justify-center">
          <div className="logo text-xl md:text-2xl ml-2 dark:text-white transform ease-in-out duration-500 flex-none h-full flex items-center justify-center" onClick={toggleSidebar}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-50 cursor-pointer hover:text-blue-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
        <div className="grow h-full flex items-center justify-center"></div>
        <div className="flex-none h-full text-center flex items-center justify-center">
          <div className="flex space-x-3 items-center px-3">
            <div className="hidden md:block text-sm md:text-md text-black dark:text-white">John Doe</div>
          </div>
        </div>
      </div>
      <aside className={`w-60 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-60'} fixed transition-transform ease-in-out duration-300 z-50 flex h-screen bg-[#1E293B] `}>
        <div className="max-toolbar translate-x-24 scale-x-0 w-full -right-6 transition-transform ease-in duration-300 flex items-center justify-between border-4 border-white dark:border-[#0F172A] bg-[#1E293B]  absolute top-2 rounded-full h-12">
          <div className="flex pl-4 items-center space-x-2 ">
            <div>
              <div onClick={toggleDarkMode} className={`moon text-white hover:text-blue-500 ${isDarkMode ? 'hidden' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              </div>
              <div onClick={toggleDarkMode} className={`sun hidden text-white hover:text-blue-500 ${isDarkMode ? '' : 'hidden'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6a5.8 5.8 0 000 11.2V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a9 9 0 000-17.5V3" />
                </svg>
              </div>
            </div>
            <div className="text-sm md:text-md text-black dark:text-white">John Doe</div>
          </div>
        </div>
        <nav className="mt-12">
          <ul>
            <li className="px-6 py-2 text-white hover:bg-[#0F172A] dark:hover:bg-[#2D3748]">Dashboard</li>
            <li className="px-6 py-2 text-white hover:bg-[#0F172A] dark:hover:bg-[#2D3748]">Products</li>
            <li className="px-6 py-2 text-white hover:bg-[#0F172A] dark:hover:bg-[#2D3748]">Orders</li>
            <li className="px-6 py-2 text-white hover:bg-[#0F172A] dark:hover:bg-[#2D3748]">Customers</li>
            <li className="px-6 py-2 text-white hover:bg-[#0F172A] dark:hover:bg-[#2D3748]">Settings</li>
          </ul>
        </nav>
      </aside>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}></div>
      )}
    </div>
  );
}

export default App;
