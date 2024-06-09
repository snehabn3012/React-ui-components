import React, { memo } from "react";

import useToast from "../../hooks/useToast";

const Toaster = () => {

    const { NotificationComp, show } = useToast();

    return (
        <div className="flex-col space-x-4 m-2">

            <button onClick={() => show({
                message: "Test Success Toast",
                duration: 5000,
                type: "success"
            })}
                className="bg-green-700 p-2"
            > Success Toast
            </button>
            <button
                className="bg-red-800 p-2"
                onClick={() => show({
                    message: "Test Danger Toast",
                    duration: 5000,
                    type: "danger",
                })}
            > Danger Toast
            </button>
            <button
                className="bg-yellow-700 p-2"
                onClick={() => show({
                    message: "Test warning Toast",
                    duration: 5000,
                    type: "warning"
                })
                }> Warning Toast
            </button>
            <button
                className="bg-blue-700 p-2"
                onClick={() => show({
                    message: "Test Info Toast",
                    duration: 5000,
                    type: "info"
                })
                }> Info Toast
            </button>
            {NotificationComp}
        </div >
    )
};

export default memo(Toaster);