import React,{ useEffect, useState } from 'react'
import * as signalR from "@microsoft/signalr"
import { render } from '@testing-library/react';

const Notification: React.FC = () =>{

        const hubConnection = new signalR.HubConnectionBuilder().withUrl("http://localhost:5000/notification").build();

        hubConnection.start();

        var list: string[] = [];

        interface NotificationProps {
            HubConnection: signalR.HubConnection
        }
        
        const Notifications: React.FC<NotificationProps> = (notProps) => {
            const [date, setDate] = useState<Date>();

            useEffect(() => {
                notProps.HubConnection.on("sendToReact", notification => {
                    list.push(notification);
                    setDate(new Date());
                })
            }, []);

            return <>{list.map((notification, index) => <p key={`notification${index}`}>{notification}</p>)}</>

        }
        return <Notifications HubConnection={hubConnection} />
}

export default Notification;