import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './MenuButtons.css';

const Submenu = ({ element}) => {
    const nestedElements = element.nested;
    const currentPath = useSelector((state) => state.navigation.currentPath);
    const openMenus = useSelector((state) => state.navigation.openMenus);
    const navigate = useNavigate();

    console.log(nestedElements.length)
    return (
        <div id="subMenuDiv" className={`subMenuDiv`}
            style={{height: `${(openMenus.includes(element.labelId))
                        ? 55 * nestedElements.length
                        : 0}px`,
                    transition: `height ${nestedElements ? .6 + (.1 * nestedElements.length) : 0}s`}}>
            {nestedElements
                ? nestedElements.map((item, index) => {
                    return (
                        <button key={index} onClick={() => navigate(item.link)}
                        className={`w-full flex text-gray-500 flex-row items-center text-left  gap-2 text-[14px] transition-colors
                                duration-200 btn`}>
                            {item.label}
                        </button>
                            );
                    }): null}
            </div>
    )

}

export default Submenu