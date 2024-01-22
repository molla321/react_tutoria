
            {/*Props by React*/}
            {/*Props by React*/}











// const Props = () => {
//     const [Toggle, setToggle] = useState(false);
//     const [count, setCount] = useState(0);
//     useEffect(()=>{
//         document.title =`Chat ${count}`

//         setTimeout(()=> {
//             setCount( count + 1)
//         }, 1000)
//     })
//     return (
//         <div>
//             <button className="btn btn-primary " onClick={()=>{setToggle(!Toggle)}}>

//                 {Toggle ? "Close" : "Show"}
//             </button>

//            {Toggle &&
//             <p>
//             Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat explicabo id illum dolorem velit, ipsum consequuntur? Velit ipsum officiis odit saepe amet facere ex praesentium repellat? Delectus tempora quis excepturi.
//             </p>
//            }

//            <p>Time {count}</p>
//         </div>
//     );
// };

// export default Props;









// import { useEffect, useState } from "react";


// const Props = () => {

//     const Return = useState()
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Props;









import { Component } from 'react'

export class BINDING_EVENT_HANDLER extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        this.handleCounting = this.handleCounting.bind(this)
    }
    


    handleCounting () {
        this.setState({
            count : this.state.count + 1
        })
    }


    // handleCounting  = () =>{
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }




    render() {
        return (
            <div>

                {/* <button onClick={this.handleCounting.bind(this)}>Increment</button> */} 
               
                <button onClick={this.handleCounting}>Increment</button>
                {this.state.count}
            </div>
        )
    }
}

export default BINDING_EVENT_HANDLER
