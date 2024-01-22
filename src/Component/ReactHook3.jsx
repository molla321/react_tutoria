import { useState } from "react";


const ReactHook3 = () => {

    let [FromObj, setFromObj]=useState({fName:"",lName:"",city:"", gender:""});


    const onInput =(property,value)=> {
        setFromObj(prevObj=>({
            ...prevObj,
            [property]:value
        }))
    };

    



    const FormSubmit = (e)=>{
        e.preventDefault();
        console.log(FromObj);
    }

    return (
        <div className=" container mt-5 ">
            

            <form onSubmit={FormSubmit}>
                <input onChange={(e)=>{onInput( "fName",e.target.value)}} value={FromObj.fName} placeholder="First Name"/> <br /><br /><br />

                <input onChange={(e)=>{onInput( "lName",e.target.value)}} value={FromObj.lName} placeholder="First Name"/> <br />
                <br /><br />


                <select onChange={(e)=>{onInput( "city",e.target.value)}} value={FromObj.city}>
                    <option value="">Choose City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Shariatpur">Shariatpur</option>
                </select>
                <br /><br />


                <input  onChange={()=>{onInput("gender", "Male")}}  checked={FromObj.gender==='Male'} type="radio" name="gender"/>Male


                <input onChange={()=>{onInput("gender", "Female")}}  checked={FromObj.gender==='Female'} type="radio" name="gender"/>Female
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReactHook3;