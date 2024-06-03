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
                        ? 38 * nestedElements.length
                        : 0}px`,
                    // borderBottom: `${openMenus.includes(element.labelId) ?' 1px solid #203A45' : 'none'}`,
                    transition: `height ${nestedElements ? .6 + (.1 * nestedElements.length) : 0}s`}}>
            {nestedElements
                ? nestedElements.map((item, index) => {
                    return (
                        <button key={index} onClick={() => navigate(item.link)}>
                            {item.label}
                        </button>
                            );
                    }): null}
            </div>
    )

}

export default Submenu