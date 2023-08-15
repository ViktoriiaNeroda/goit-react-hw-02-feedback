import { NotificationMessage } from "./Notification.styled";

export function Notification({message}) {
    return (
        <NotificationMessage>{message}</NotificationMessage>
    );
}