import React from 'react';
import UploadImage from './UploadImage';
import '../../App.css';
import { useLanguage } from '../../translate/LanguageTheme';
const UploadImageComponent: React.FC = () =>
{
    const { t } = useLanguage();

    return (
        <div className="component-container">
            <h1>{t('Upload Image')}</h1>
            <p>{t('Thành phần Upload Image được sử dụng để tải hình, thay đổi và phóng to hình ảnh.')}</p>
            <h3>{t('Upload Image cơ bản')}</h3>
            <UploadImage src={''} />
        </div>
    );
};

export default UploadImageComponent;
