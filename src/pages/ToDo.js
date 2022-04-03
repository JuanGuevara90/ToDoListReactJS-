import Card from '../components/card/Card';
import {useFetchData} from '../hooks/useFetchData';

const ToDo = () => {
    const {loading,data,error} = useFetchData('http/api/whatever.com');
    
    if(loading) return (<>Loading...</>);
    if(error) return ( <>Error...</>);

    return ( 
        <>
            {data &&<Card data={data}/>  }
        </>
        
    );
}
export default ToDo;