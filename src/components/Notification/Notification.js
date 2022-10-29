import './Notification.css';

const Notification = ({ msg, severity }) => {
    if(msg === '') return;
    const styleToApply = 'notification-pop-up '.concat((severity === 'success') ? 'success-color' : 'error-color');
    return (
      <div className={styleToApply}>
        <h4 className='pop-up-msg'>{msg}</h4>
      </div>
    );
};

export default Notification;