import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '../../store/navSlice'
import './MenuButton.css';

const MenuButton = ({ option, index }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();



    const openMenus = useSelector((state) => state.navigation.openMenus);
    const dispatch = useDispatch();


    const handleMenuToggle = (menu) => {
        dispatch(toggleMenu(menu));
      };

    const checkCurrentPath = (path, target) => {
        if (target === false) return false
        let pathArray = path.toLowerCase().split('/')
        // console.log(pathArray)
        return pathArray.includes(target.toLowerCase())
    }

    const [open, setOpen] = useState(checkCurrentPath(location.pathname, option.label));
    // console.log(currentPath)
    // console.log(checkCurrentPath(currentPath, option.label))

    const handleClick = () => {
        if (option.link) navigate(option.link)
        else setOpen(!open);
    }

    console.log(openMenus)
    return (
    <>
        <button
            key={index}
            onClick={() => handleMenuToggle(option.label)}
            className={`
            ${currentPath === option.link ? 'bg-[#203A45] text-white' : 'hover:bg-[#ececec] hover:text-black text-gray-500 bg-white'}
            w-full flex flex-row items-center text-left rounded-none px-4 gap-2 py-2 h-[43px]  transition-colors duration-200
            `}
            >
        <span className='w-[20px]'>
            <FontAwesomeIcon icon={option.icon} />
            </span>
            {option.label}
        </button>
        <div key={index} id="subMenuDiv"
        style={{
            height: `${openMenus.includes(option.label) && option.nested ? 43 * option.nested.length : 0}px`,
            transition: `height ${option.nested ? .6 + (.1 * option.nested.length) : 0}s`
          }}
        className={`subMenuDiv`}>
        {option.nested  ?
                option.nested.map((item, index) => {
                    return (
                            <button  className="w-full flex flex-row items-center text-left rounded-none
                            gap-2 h-[43px] transition-colors duration-200 hover:bg-[#ececec]
                            hover:text-black text-gray-500 bg-white"

                            >{item.label}</button>

                        );
                    }): null}
                    </div>
    </>
    )
}

export default MenuButton;