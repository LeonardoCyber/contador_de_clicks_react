import React from "react";
import '../stylesHeets/Contador.css'
function Contador({ numclicks }) {
    return(
        <div className='contador'>
            {numclicks}
        </div>
    )
}
export default Contador;