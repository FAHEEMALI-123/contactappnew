import React from "react";

const EnterDet=()=>{
    return(
        <div>
            <form>
            <input type="text" placeholder="Name" className="input input-bordered input-info w-full max-w-xs" />
            <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
            <input type="text" placeholder="Phone" className="input input-bordered input-info w-full max-w-xs" />
            </form>
        </div>
    );
}

export default EnterDet;