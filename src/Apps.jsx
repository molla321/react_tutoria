
import Prent from './components/CONDITIONAL_RENDERING/Prent';
import HelloW from './components/EVENT_HANDLING_CLASS/HelloW';
import Child from './components/SATET_LIFTING/Child';



const Apps = () => {
    const data = "I am from parent (app)";

    const handleChildData = (dada) => {
        console.log(dada);
    }
    return (
        <div>


            <Child data = {data} ononChildData={handleChildData} />







            <Prent />
            <HelloW/>
        </div>
    );
};

export default Apps;