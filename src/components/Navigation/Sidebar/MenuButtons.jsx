import React, { useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux';
import { faHouse, faUser, faClockRotateLeft, faTicket, faClone, faPeopleGroup, faDiamond, faGear, faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { toggleMenu } from '../../store/navSlice'
import './MenuButtons.css';
import Submenu from "./Submenu";

const MenuButtons = () => {
    const navigate = useNavigate();
    const openMenus = useSelector((state) => state.navigation.openMenus);
    const currentPath = useSelector((state) => state.navigation.currentPath);
    const dispatch = useDispatch();


    const handleClick = (element) => {
      const { labelId, link } = element;
        if (link) navigate(link)
        else {
      dispatch(toggleMenu(labelId))}
      };

      const options = [
        { labelId: 'home', label: 'Home', link: '/', icon: faHouse },
        { labelId: 'history', label: 'Account History', link: '/history', icon: faClockRotateLeft },
        { labelId: 'patron', label: 'Patron', link: false, icon: faUser, nested: [
          { labelId: 'profile', label: 'Profile', link: '/patron/profile' },
          { labelId: 'comp', label: 'Comp', link: '/patron/comp' },
          { labelId: 'swipelog', label: 'Kiosk Swipe Log', link: '/patron/swipelog' }
        ]},
        { labelId: 'redeem', label: 'Redeem', link: '/redeem', icon: faTicket },
        { labelId: 'reports', label: 'Reports', link: '/reports', icon: faClone },
        { labelId: 'group-manager', label: 'Group Manager', link: '/group-manager', icon: faPeopleGroup },
        { labelId: 'poker', label: 'Poker', link: '/poker', icon: faDiamond },
        { labelId: 'admin', label: 'Admin', link: false, icon: faGear, nested: [
          { labelId: 'users', label: 'Users', link: '/admin/users' },
          { labelId: 'roles', label: 'Roles', link: '/admin/roles' },
        ]}
      ];

      const renderCaret = (element) => {
        openMenus.includes(element.labelId)
        if (openMenus.includes(element.labelId) && element.nested) {
          return <FontAwesomeIcon icon={faCaretDown} />
        } else if (!openMenus.includes(element.labelId) && element.nested) {
          return <FontAwesomeIcon icon={faCaretRight} />
        }
        else return null
      }

    return (
      <>
      {options.map((element, index) => {
        // console.log(element,'element')
        return (

      <div key={index} className="flex h-full w-full flex-col min-h-[43px] sidebar-div">
        <button
            onClick={() => handleClick(element)}
            className={`${(currentPath.parent === element.labelId)
              ? 'bg-[#203A45] text-white'
              : 'hover:bg-[#ececec] hover:text-black text-gray-500 bg-white'}
              w-full flex flex-row items-center text-left px-4 gap-2 py-2 min-h-[43px]
              transition-colors duration-200 text-[20px]`}>
            <div className="icon">
                <FontAwesomeIcon icon={element.icon} />
            </div>
            <div className="flex flex-row w-full h-full justify-between items items-center ">
              {element.label}
              {renderCaret(element)}
            </div>
        </button>

        {element.nested
        ? <Submenu element={element} />
        : null}

      </div>
          )
      })}
    </>


    )
}

export default MenuButtons;