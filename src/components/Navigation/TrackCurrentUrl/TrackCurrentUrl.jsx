import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateCurrentPath } from '../../store/navSlice';

const TrackCurrentUrl = React.memo(() => {
    const dispatch = useDispatch();
    const location = useLocation();

  // Memoize the pathname so the component only re-renders when it changes
    let pathArray = location.pathname.split('/')
    let filteredArray = []
    for (let i = 0; i <= pathArray.length ; i++) {
        if (pathArray[i] !== '') {
            filteredArray.push(pathArray[i])
        }

    }
    let parent = filteredArray[0] || 'home'
    let child = filteredArray[1] || null


    // const currentPath = useMemo(() => location.pathname, [location.pathname]);


  // Dispatch the URL update when the pathname changes
  useEffect(() => {
    dispatch(updateCurrentPath({ parent: parent, child: child }));
  }, [dispatch, location.pathname]);

  return null; // This component doesn't render anything
});

export default TrackCurrentUrl;