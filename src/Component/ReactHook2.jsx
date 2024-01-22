// useRef() diye className add remove kora 




// import React, { useRef } from 'react';

// const ReactHook2 = () => {

//     let DemoRef=useRef();

//     const change = ()=>{
//         DemoRef.current.classList.remove('bg-danger');
//         DemoRef.current.classList.add('bg-success');
//     }

//     return (
//         <React.Fragment>
//             <h1 ref={DemoRef} className=' bg-danger text-warning '>Hello World</h1>
//             <button onClick={change}>Click2</button>
//         </React.Fragment>
//     );
// };

// export default ReactHook2;











                          

// import React, { useRef } from 'react';


// const ReactHook2 = () => {

//     let APIData=useRef(null);
//     let myData=useRef();

//     const feachData = async ()=>{
//        const responsive= await fetch('https://dummyjson.com/products/1')
//        APIData.current=await responsive.json();
//     }
//     const ShowData = ()=>{
//        myData.current.innerText=JSON.stringify(APIData.current)
//     }

//     return (
//         <React.Fragment>
//             <div ref={myData}></div>
//             <button onClick={feachData}>Call API</button>
//             <button onClick={ShowData}>Show Data</button>
            
//         </React.Fragment>
//     );
// };

// export default ReactHook2;









               
               //  uesState() er bebohar

// import { useState } from "react";
// const ReactHook2 = () => {


//     let [number,setNumber]=useState(0);

//     let hello = ()=>{
//         setNumber(number-1)
//     }

//     return (
//         <div>
//             <h1>Numbar: {number}</h1>
//             <button onClick={hello}>Click</button>
//             <button onClick={()=>setNumber(number+1)}>Click</button>
//         </div>
//     );
// };

// export default ReactHook2;











// import { useState } from "react";
// const ReactHook2 = () => {


//     let [number,setNumber]=useState({
       
//         number1:"Value 1",
//         number2:"Value 2",
//         number3:"Value 3",
//         number4:"Value 4"
//     });

//     let hello = ()=>{
//         setNumber(
//             pervObj => ({
//             ...pervObj,
//             number1: 'new value1',
//             number2: 'new value2',
//             number3: 'new value3'
//             }));
//     }

//     return (
//         <div>
//             <h1>Numbar: {number.number1}</h1>
//             <h1>Numbar: {number.number2}</h1>
//             <h1>Numbar: {number.number3}</h1>
//             <h1>Numbar: {number.number4}</h1>
//             <button onClick={hello}>change</button>
//         </div>
//     );
// };

// export default ReactHook2;



















import { useState } from "react";
const ReactHook2 = () => {


    let [list,setList]=useState([]);
    let [item,setItem]=useState("");

    let AddList=()=>{
        list.push(item)
        setList([...list]);
    }


    let RemoveItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    }

    return (
        <div>


            <table>
                <tbody>
                    {
                        
                        list.length!==0?(
                            list.map((element,index)=>{
                                return(
                                    // eslint-disable-next-line react/jsx-key
                                    <tr>
                                        <td>{element}</td>
                                        <td><button onClick={()=>{
                                            RemoveItem(index)
                                        }}>
                                            Remove
                                            </button></td>
                                    </tr>
                                )
                            })
                        ):(<tr></tr>)
                    }
                   
                    
                </tbody>
            </table>
            
            <input onChange={(e)=>setItem(e.target.value)} className=" form-control m-5 container "/>
            <button onClick={AddList}>Add</button>
        </div>
    );
};

export default ReactHook2;
