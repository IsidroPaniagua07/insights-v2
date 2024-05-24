import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuButton = ({ option, index }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname.toLowerCase();

    const checkCurrentPath = (path, target) => {
        if (target === false) return false
        let pathArray = path.toLowerCase().split('/')
        console.log(pathArray)
        return pathArray.includes(target.toLowerCase())
    }

    const [open, setOpen] = useState(checkCurrentPath(location.pathname, option.label));
    console.log(currentPath)
    console.log(checkCurrentPath(currentPath, option.label))

    const handleClick = () => {
        if (option.link) navigate(option.link)
        else setOpen(!open);
    }

    return (
    <>
        <button
            key={index}
            onClick={handleClick}
            className={`
            ${currentPath === option.link ? 'bg-[#203A45] text-white' : 'hover:bg-[#ececec] hover:text-black text-gray-500 bg-white'}
            w-full flex flex-row items-center text-left rounded-none px-4 gap-2 py-2 font-normal h-[43px]  transition-colors duration-200
            `}
            >
        <span className='w-[20px]'>
            <FontAwesomeIcon icon={option.icon} />
            </span>
            {option.label}
        </button>
        {(option.nested && open)  ?
                option.nested.map((item, index) => {
                    return (
                        <button key={index} className="w-full flex flex-row items-center text-left rounded-none
                         px-4 gap-2 pl-14 font-normal h-[43px]  transition-colors duration-200 hover:bg-[#ececec]
                          hover:text-black text-gray-500 bg-white">{item.label}</button>

                    );
                }): null}
    </>
    )
}

export default MenuButton;