import { useState } from 'react';


function useOrderCount() {
    
    const [ orderCount, setOrderCount] = useState(0);

    const changeOrderCount = () =>{
        setOrderCount(orderCount+1);
    }

    return { orderCount, changeOrderCount};
}

export default useOrderCount;
