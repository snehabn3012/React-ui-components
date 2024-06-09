import React, { useEffect, useRef, useState } from "react";
import Notification from "../components/toaster/Notification";

function useToast() {

    const [notification, setNotification] = useState([]);

    function show(notificationProps) {
        notificationProps.id = Math.random().toString(16).slice(2);

        setNotification((notification) => {
            return [...notification, notificationProps]
        })

        setTimeout(() => {
            close(notificationProps.id);
        }, notificationProps.duration);
    }

    const close = (id) => {
        setNotification(
            (notification) => notification.filter(
                (data) => data.id !== id)
        );
    }

    const NotificationComp = notification.length > 0 ? (
        <>
            {
                notification.map((data, index) => (
                    <div key={data.id}><Notification {...data} close={close} index={data.id} /></div>
                ))
            }
        </>
    ) : null;

    return { show, close, NotificationComp };
}

export default useToast;