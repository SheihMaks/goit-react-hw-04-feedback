import Proptypes from 'prop-types';
import { NotificationMessage } from "./Notification.styled"

export const Notification=({title})=>{
    return <NotificationMessage>{title}</NotificationMessage>
}

Notification.propTypes={
    title:Proptypes.string,
}