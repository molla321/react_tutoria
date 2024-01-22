// import React, { Component } from 'react'
// import './style.css'
// import HomePage from './HomePage'
// import SignUpPage from './SignUpPage'

// class CONDITIONAL_RENDERING extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              isLoggedIn : true
//         }
//     }
   
    
//     render() {

//         const {isLoggedIn} = this.state
//         let element;

//         /** conditional rending based on if-else */
        
//             // if(isLoggedIn){
//             // return <HomePage />
//             // }else{
//             //     return <SignUpPage />
//             // }
        

//         //element variable rendering
//        /*
//             if(isLoggedIn){
//             element =  <HomePage />
//         }else{
//             element =  <SignUpPage />
//         }
//         return (
//             <div>
//                 {element}
//             </div>
//         )
//        */

//        //ternary operator
//       element =  isLoggedIn ? <HomePage /> : <SignUpPage />
//       return (
//           <React.Fragment>
//               {element}
//               {/* {isLoggedIn ? <HomePage /> : <SignUpPage />} */}
//               <h1>Hello</h1>
//               {/* short circuit method */}
//               {/* {isLoggedIn && <HomePage />} */}
//           </React.Fragment>
//       )
//     }
// }
// export default CONDITIONAL_RENDERING











// import { Component } from 'react'
// import HomePage from './HomePage'
// import SignUpPage from './SignUpPage'
 // export default class index extends Component {
//     constructor (props) {
//         super(props) 
//         this.state = {
//             isLogedIn : false
//         }
//     }
//   render() {                                  // If else diye conditional reandering
//     if(this.state.isLogedIn){
//         return <SignUpPage />
//     }
//     else {
//         return <HomePage />
//     }
    
//   }
 // }






// import { Component } from 'react'
// import HomePage from './HomePage'
// import SignUpPage from './SignUpPage'

// export default class Prent extends Component {
//     constructor (props) {
//                 super(props) 
//                 this.state = {
//                     isLogedIn : false
//                 }
//             }
    
//   render() {
//     const {isLogedIn} = this.state
//     let element;

//     if(isLogedIn){
//         element = <HomePage />
//     }
//     else {
//         element = <SignUpPage />
//     }

//     return (
//        <>
//         {element}
//        </>
//     )
    
//   }
// }








import { Component } from 'react'
// import HomePage from './HomePage'
import SignUpPage from './SignUpPage'

export default class Prent extends Component {
    constructor (props) {
                super(props) 
                this.state = {
                    isLogedIn : true
                }
            }
    
  render() {
    const {isLogedIn} = this.state
    // let element;

    // element = isLogedIn ? <HomePage /> : <SignUpPage />

    return (
       <>
        {/* {isLogedIn ? <HomePage /> : <SignUpPage />} */} 
        {isLogedIn && <SignUpPage />}
       </>
    )
    
  }
}
 