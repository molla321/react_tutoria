// useEffect() Method 
// useEffect() aro shikh te hobe agula ami kichu buji nai????????




// import { useEffect, useState } from "react";

// const ReactHook4 = () => {


//     let [data, setData] = useState();

//     useEffect(()=>{
        
//         fetch('https://dummyjson.com/products')
//         .then(res=>res.json())
//         .then(json=>setData(json))
//     }),[]

//     return (
//         <div>
//             {JSON.stringify(data)}
//         </div>
//     );
// };

// export default ReactHook4;

















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











// import { useRef } from "react";
// const ReactHook4 = () => {


//     let Photes = ["https://placehold.co/600x400", "https://placehold.co/600x400?text=Hello+World", "https://placehold.co/600x400?font=roboto"];

//     let ImgTag = useRef()

//     let Count = 0;

//     function next() {
//         Count++;

//         if (Count <= Photes.length){
//             Count = 0;
//             ImgTag.current[Count];
//         }else {
//             ImgTag.current[Count];
//         }
//     }


//     function Prev() {
//         Count++;

//         if (Count <= Photes.length){
//             Count = 0;
//             ImgTag.current[Count];
//         }else {
//             ImgTag.current[Count];
//         }
//     }

//     return (
//         <div>
//             <button onClick={Prev}>Prev</button>
//             <img ref={ImgTag} src="https://placehold.co/600x400" />
//             <button onClick={next}>Next</button>
//         </div>
//     );
// };

// export default ReactHook4;