import React, { memo } from "react";

const Notification = ({ type = "success", message, close, index }) => {
    return (
        <div className={`p-2 m-2 border-rounded w-52 font-xs toaster_${type}`} >
            {message}
            <button onClick={() => close(index)}>Close</button>
        </div >
    )
}

export default memo(Notification);