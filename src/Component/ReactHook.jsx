// import { useRef } from "react";

 



// const ReactHook = () => {


//     let myRef=useRef();
//         let myHello=useRef();{/* current option */}



//     let change=()=>{
//     myRef.current.innerHTML="<ul> <li>Hello</li> <li>Hello</li></ul>";{/* jodi current likhte hoy tobe ebabe likh te hobe */}
// }
// let Exemple=()=>{
//                        //myHello.innerHTML="<ul> <li>Exemple</li> <li>Exemple</li></ul>";   {/* ar jodi na likhi tahole ebabe likh te hobe */}

//     myHello.innerText="Hello World"; {/* useRef() bebohar kore innerHTML diye html bebohar kora hoy */}
// }


//     return (
//         <div>
//             <h1 ref={myRef}></h1>
//             <h1 ref={(ex2)=>myHello=ex2}></h1> {/* current option */}

 

//             <button onClick={change}>Click</button>
//             <button onClick={Exemple}>Click Me</button>{/* current option */}
//         </div>
//     );
//    };
   
//    export default ReactHook;


                                                     // {/* React Hook er method */}

//                                                         //note***
//                                      // useRef() bebohar hoy Ducument.quareySelector er poriborte..**
//                                    // useRef() diye innerHTML AND innnerText er bebohar
 













// import React from 'react';
// import { useRef } from 'react';

// const ReactHook = () => {

// let myImg=useRef();


// const change= () => {
//     myImg.current.src="https://placehold.co/600x400?text=Hello+World";
//     myImg.current.setAttribute('height','200px')
//     myImg.current.setAttribute('width','300px')
// }


//     return (
//         <React.Fragment>
//             <div>
//                 <img ref={myImg} src="https://placehold.co/600x400"/>



//                 <button onClick={change}>Click</button>
//             </div>
//         </React.Fragment>
//     );
// };

// export default ReactHook;



// UseRef Method












// import React, { useRef } from 'react';


// const ReactHook = () => {



//              //🐢🐢 Frist Exemple_____________________*

//     let fristName =useRef();
//     let lastName=useRef();  {/* ekhane var name evabe lekha jabe nah*/}

// const change = () => {
//     let fName = fristName.current.value;
//     let lName = lastName.current.value;

//     alert(fName +""+ lName);
// }

//     return (
//         <React.Fragment>


//             <div>
// <br />
//                 <input ref={fristName} placeholder='Frist Name' /> 
// <br /> <br />
//                 <input ref={lastName} placeholder='Frist Name'/>


// {/*  */}

//                 <button onClick={change}>Click Me</button>
//             </div>
//         </React.Fragment>
//     );
// };

// export default ReactHook;












// import React, { useRef } from 'react';


// const ReactHook = () => {



//              //🐢🐢 Seconds Exemple_____________________* multie

//     let fristName,lastName=useRef();

// const change = () => {
//     let fName = fristName.value;
//     let lName = lastName.value;

//     alert(fName +" "+ lName);
// }

//     return (
//         <React.Fragment>


//             <div>
// <br />
//                 <input ref={(a)=>fristName=a} placeholder='Frist Name' /> 
// <br /> <br />
//                 <input ref={(a)=>lastName=a} placeholder='Frist Name'/>

// <br /> <br />

//                 <button onClick={change}>Click Me</button>
//             </div>
//         </React.Fragment>
//     );
// };

// export default ReactHook;













// import React, { useRef } from 'react';

// const ReactHook = () => {
//     let DemoRef=useRef();

//     const change = ()=>{
//         DemoRef.classList.remove('')
//     }

//     return (
//         <React.Fragment>
//             <h1 ref={DemoRef} className=' bg-danger text-warning '>Hello World</h1>
//             <button onDoubleClick={change}>Click2</button>
//         </React.Fragment>
//     );
// };

// export default ReactHook;






















