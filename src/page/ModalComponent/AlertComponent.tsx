import React from 'react';
import useModal from '../../hooks/useModal';
import Alert from '../../components/Modal/Alert';
import '../../App.css';
import { useLanguage } from '../../translate/LanguageTheme';
const AlertComponent: React.FC = () =>
{
    const { t } = useLanguage();
    const { modalVisible, show } = useModal();

    const text: {title: string, message: string} = {
        title: 'Tiêu đề',
        message: 'Tin nhắn',
    };

    return (
        <div className="component-container">
            <h1>{t('Modal')}</h1>
            <p>{t('Thành phần Modal cung cấp nền tảng để tạo hộp thoại, cửa sổ bật lên, hộp đèn hoặc bất kỳ thứ gì khác.')}</p>
            <h3>Alert</h3>
            <button
                className="button-default"
                onClick={show}
            >
                <p>{t('Xác nhận')}</p>
            </button>
            <Alert
                modalVisible={modalVisible}
                hide={show}
                text={text}
            />
        </div>
    );
};

export default AlertComponent;
