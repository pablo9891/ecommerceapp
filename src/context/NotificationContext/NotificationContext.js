import { createContext, useState } from "react";
import Notification from '../../components/Notification/Notification';

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const setNotification = (severity, msg) => {
        setMessage(msg);
        setSeverity(severity);

        setTimeout(() => {
            setMessage('');
        }, 2500);
    }

    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification msg={message} severity={severity}/>
            { children }
        </NotificationContext.Provider>
    );
}