import { useEffect , useState} from 'react';

function useDocumentTitle() {
    
    const [count,setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    }  
    
     useEffect(() =>{
     document.title=`count ${count}`;
    }, [count]);
    
    return { count, increment};
}

export default useDocumentTitle;
