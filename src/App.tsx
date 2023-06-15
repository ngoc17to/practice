import React from 'react';
import useModal from './hooks/useModal';
import useToast from './hooks/useToast';
import Modal from './components/Modal/Modal';
import Toast from './components/Toast/Toast';
import LanguageSwitcher from './translate/LanguageSwitcher';
import AdvanceSelect from './components/AdvanceSelect/AdvanceSelect';
import UploadImage from './components/UploadImage/UploadImage';
import './App.css';
import { useTheme } from './ThemeContext';
import { useLanguage } from './translate/LanguageTheme';
import { BsFillBrightnessLowFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { AdvanceSelectOption } from './components/AdvanceSelect/type';

const App: React.FC = () =>
{
    const { theme, toggleTheme } = useTheme();
    const { t } = useLanguage();
    const { modalVisible, show } = useModal();

    const { addToastHandler, deleteToastHandler, toastList } = useToast();

    const text: {title: string, message: string} = {
        title: 'Tiêu đề',
        message: 'Tin nhắn',
    };
    const toastText: {message: string, type: string, id:string}[] = [
        { message: 'Đây là toast thành công', type: 'success', id: '' },
        { message: 'Đây là toast cảnh báo', type: 'warning', id: '' },
        { message: 'Đây là toast lỗi', type: 'error', id: '' },

    ];
    const options: AdvanceSelectOption[] = [
        { id: '1', label: 'Lựa chọn 1' },
        { id: '2', label: 'Lựa chọn 2' },
        { id: '3', label: 'Lựa chọn 3' },
        { id: '4', label: 'Lựa chọn 4' },
        { id: '5', label: 'huhuhuhuhuh' },
        { id: '6', label: 'hihihihihihhhihi' },
        { id: '7', label: 'hehehe' },
    ];
    const languages: {lang: string, id: string}[] = [
        { lang: 'Tiếng Việt', id: 'vi' },
        { lang: 'English', id: 'en' },
        { lang: 'Français', id: 'fr' },
        { lang: '日本', id: 'jp' },
    ];

    return (
        <div className="App">
            <button
                className="button-default"
                onClick={show}
            >
                <p>{t('Xác nhận')}</p>
            </button>
            <Modal
                modalVisible={modalVisible}
                hide={show}
                text={text}
            />
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
            <button
                className="mode_btn"
                onClick={toggleTheme}
            >
                {
                    theme === 'light'
                        ? (
                            <BsFillBrightnessLowFill
                                size="100%"
                                color='rgb(15, 23, 42)'
                            />
                        )
                        : (
                            <BsFillMoonStarsFill
                                size="60%"
                                color='rgb(241, 245, 249)'
                            />
                        )
                }
            </button>
            <UploadImage src={''} />
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <LanguageSwitcher languages={languages} />
        </div>
    );
};

export default App;
