import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import './Modal.css';
import { useTheme } from '../../ThemeContext';
import { AiOutlineClose } from 'react-icons/ai';
import { useLanguage } from '../../translate/LanguageTheme';

type AlertProps = {
    modalVisible: boolean
    text: {title: string, message: string}

    hide: () => void
}

const Alert: React.FC<AlertProps> = ({ modalVisible, text, hide }) =>
{
    const { theme } = useTheme();
    const { t } = useLanguage();

    if (!modalVisible) {return (<></>);}
    
    return (
        ReactDOM.createPortal (
            <div className="modal-container">
                <div
                    className="modal-overlay"
                    onClick={hide}
                />
                <div className="modal-wrapper">
                    <div className="modal">
                        <div className="modal-header">
                            <p style={{ fontWeight: 'bold', backgroundColor: 'None' }}>{t(text.title)}</p>
                                
                            <button
                                className="modal-close-button"
                                onClick={hide}
                            >
                                <AiOutlineClose
                                    size="100%"
                                    color={theme === 'dark' ? '#fff' : '#000'}
                                />
                            </button>
                        </div>
                        <div className="modal-message">
                            <p>{t(text.message)}</p>
                        </div>
                    </div>
                </div>
            </div>, document.body,
        ));

};

export default Alert;
