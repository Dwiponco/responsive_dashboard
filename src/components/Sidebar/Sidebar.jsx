import React from 'react'
import { Link } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext()

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  }

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware /> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type='buttton' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10'>
          {links.map((item) => (
            <div>
              <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map((link, index) => {
                return (
                  <SidebarItem key={index} link={link} />
                )
              })}
            </div>
          ))}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar