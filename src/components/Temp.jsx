import React from 'react'
import { useState } from 'react';
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

// export default function Temp(){
//     const handleClick = ()=>{
//         alert("Hello jii")
//     }
//     const handleSubmit = (name)=>{
//         alert(`Hello ${name} jii`)
//     }
//     return(
//         <div>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={()=>handleSubmit("Mohit")}>Submit</button>
//         </div>
//     );
// }

export default function Temp(){
    const [score,setScore] = useState(0);
    const increment = ()=>{
        setScore(score+1);
    }
    const decrement = ()=>{
        setScore(score-1);
    }
    return(
    <div>
        {score}
        <p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </p>
    </div>
    );
}