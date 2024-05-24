import { useSelector } from 'react-redux';
import './MenuButtons.css';

const Submenu = ({ element}) => {
    const nestedElements = element.nested;
    const currentPath = useSelector((state) => state.navigation.currentPath);
    const openMenus = useSelector((state) => state.navigation.openMenus);
    // console.log(openMenus)
    // console.log(element.labelId)
    // console.log(openMenus.includes(element.labelId))
    console.log(nestedElements.length)
    return (
        <div id="subMenuDiv" className={`subMenuDiv`}
            style={{height: `${(openMenus.includes(element.labelId))
                        ? 43 * nestedElements.length
                        : 0}px`,
                    transition: `height ${nestedElements ? .6 + (.1 * nestedElements.length) : 0}s`}}>
            {nestedElements
                ? nestedElements.map((item, index) => {
                    return (
                        <button key={index} onClick={() => navigate(item.link)}
                        className={`${(currentPath.child === item.labelId) || (openMenus.includes(currentPath.parent))
                            ? 'bg-[#203A45] text-white'
                            : 'text-gray-500 bg-white'}
                                "w-full flex flex-row items-center text-left rounded-none gap-2 h-[43px] transition-colors
                                duration-200 hover:bg-[#ececec] hover:text-black `}>
                            {item.label}
                        </button>
                            );
                    }): null}
            </div>
    )

}

export default Submenu