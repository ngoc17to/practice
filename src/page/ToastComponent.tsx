import React from 'react';
import useToast from '../hooks/useToast';
import Toast from '../components/Toast/Toast';
import '.././App.css';
import { useLanguage } from '../translate/LanguageTheme';
const ToastComponent: React.FC = () =>
{
    const { t } = useLanguage();

    const { addToastHandler, deleteToastHandler, toastList } = useToast();

    const toastText: {message: string, type: string, id:string}[] = [
        { message: 'Đây là toast thành công', type: 'success', id: '' },
        { message: 'Đây là toast cảnh báo', type: 'warning', id: '' },
        { message: 'Đây là toast lỗi', type: 'error', id: '' },

    ];

    return (
        <div className="component-container">
            <h1>{t('Toast')}</h1>
            <p>{t('Toasts là các thông báo nhẹ được thiết kế để bắt chước các thông báo đẩy đã được phổ biến bởi các hệ điều hành trên thiết bị di động và máy tính để bàn.')}</p>
            <button
                className="button-default success-button"
                onClick={() => addToastHandler(toastText[0])}
            > <p>{t('Thành công')}</p>
            </button>

            <button
                className="button-default warning-button"
                onClick={() => addToastHandler(toastText[1])}
            > <p>{t('Cảnh báo')}</p>
            </button>

            <button
                className="button-default error-button"
                onClick={() => addToastHandler(toastText[2])}
            > <p>{t('Lỗi')}</p>
            </button>

            <Toast
                toastList={toastList}
                deleteToast={deleteToastHandler}
            />
        </div>
    );
};

export default ToastComponent;
