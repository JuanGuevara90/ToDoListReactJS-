import {data} from '../service/Data';
import {useEffect,useState} from 'react';

export const useFetchData = (url) => {
    
    const [state, setState] = useState({loading:true,data:{},error:false});
    
    useEffect(() =>{
        setTimeout(() => {
            setState({loading:false,data,error:false});
        }, 1500);
    },[url]);
    
    return state;
}
