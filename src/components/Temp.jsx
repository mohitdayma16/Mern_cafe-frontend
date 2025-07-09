import React from 'react'

// const Temp = (flag) => {
//     if(flag){
//         return(
//             <p>flag is true</p>
//         )
//     }
//     else{
//         return(
//             <p>flag is false</p>
//         )
//     }
//   return (
//     <div>
//       Temp
//     </div>
//   )
// }

// export default function Temp({flag}){
//     return flag ? <h1>Flag is true</h1> : <h1>Flag is false</h1>
// }

// export default function Temp({flag}){
//     return {flag} && <h1>flag is true</h1>;
// }

export default function Temp(){
    const handleClick = ()=>{
        alert("Hello jii")
    }
    const handleSubmit = (name)=>{
        alert(`Hello ${name} jii`)
    }
    return(
        <div>
            <button onClick={handleClick}>Click me</button>
            <button onClick={()=>handleSubmit("Mohit")}>Submit</button>
        </div>
    );
}
