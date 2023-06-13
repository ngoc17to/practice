import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import './Toast.css';
import { useTheme } from '../../ThemeContext';
import { AiOutlineClose, AiFillCheckCircle, AiFillWarning, AiFillCloseCircle } from 'react-icons/ai';

type ToastProps = {
    toastList: {message: string, type: string, id:string}[]
    deleteToast: (id: string) => void
}
const Toast: React.FC<ToastProps> = ({ toastList, deleteToast }) =>
{
    const { theme } = useTheme();
    if (toastList !== null)
    {
        return (
            ReactDOM.createPortal(
                <div className="toast-container">
                    <div className="toast-wrapper">
                        {toastList.map(({ message, type, id }) => (
                            <div
                                key={id}
                                className={type}
                            >
                                <div className='toast-icon'>
                                    {
                                        type === 'success'
                                            ? <AiFillCheckCircle size="100%" />
                                            : (
                                                type === 'warning'
                                                    ? <AiFillWarning size="100%" />
                                                    : <AiFillCloseCircle size="100%" />
                                            )
                                    }
                                </div>
                                <p>{message}</p>
                                <button
                                    className="toast-close-button"
                                    onClick={() => deleteToast(id)}
                                >
                                    <AiOutlineClose
                                        size="100%"
                                        color={theme === 'dark' ? '#fff' : '#000'}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>, document.body,
            )
        );
    }
    else {return (<></>);}
};
export default Toast;

