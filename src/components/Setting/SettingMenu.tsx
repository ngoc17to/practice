import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import './Setting.css';
import { useTheme } from '../../ThemeContext';
import { useLanguage } from '../../translate/LanguageTheme';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillBrightnessLowFill, BsFillMoonStarsFill, BsGlobe } from 'react-icons/bs';
import LanguageSwitcher from '../../translate/LanguageSwitcher';
type SettingMenuProps = {
    settingVisible: boolean
    hide: () => void
}
const SettingMenu: React.FC<SettingMenuProps> = ({ settingVisible, hide }) =>
{
    const { theme, setTheme } = useTheme();
    const { t } = useLanguage();

    const [languageMenu, setLanguageMenu] = useState<boolean>(false);

    const languages: {lang: string, id: string}[] = [
        { lang: 'Tiếng Việt', id: 'vi' },
        { lang: 'English', id: 'en' },
        { lang: 'Français', id: 'fr' },
        { lang: '日本', id: 'jp' },
    ];

    if (settingVisible)
    {
        return (
            ReactDOM.createPortal (
                <div className="setting-container">
                    <div
                        className="setting-overlay"
                        onClick={hide}
                    />
                    <div className="setting-wrapper">
                        <div className="setting">
                            <div className="setting-header">{t('Cài đặt')}
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
                            <div className='setting-content'>
                                <div className='setting-mode'>
                                    <p>{t('Chế độ')}</p>
                                    <div className='mode'>
                                        <button
                                            className="setting-btn light-mode-btn"
                                            style={theme === 'light' ? { border: '1px solid rgb(0,127,255)', backgroundColor: 'rgb(240,247,255' } : {}}
                                            onClick={() => setTheme('light')}
                                        >
                                            <BsFillBrightnessLowFill
                                                size="80%"
                                                color={theme === 'dark' ? '#fff' : '#000'}
                                            />
                                            <p style={{ width: '100%', fontSize: '16px' }}>{t('Chế độ sáng')}</p>
                                        </button>
                                        <button
                                            className="setting-btn dark-mode-btn"
                                            style={theme === 'dark' ? { border: '1px solid rgb(37,111,185)', backgroundColor: 'rgba(37,111,185,0.3)' } : {}}
                                            onClick={() => setTheme('dark')}
                                        >
                                            <BsFillMoonStarsFill
                                                size="50%"
                                                color={theme === 'dark' ? '#fff' : '#000'}
                                            />
                                            <p style={{ width: '100%', fontSize: '16px' }}>{t('Chế độ tối')}</p>
                                        </button>
                                    </div>
                                </div>
                                <div className='setting-language'>
                                    <p>{t('Ngôn ngữ')}</p>
                                    <button
                                        className='setting-btn lang-btn'
                                        onClick={() => setLanguageMenu(!languageMenu)}
                                    >
                                        <p style={{ width: '100%', fontSize: '16px' }}>{t('Thay đổi ngôn ngữ')}</p>
                                    </button>
                                    <LanguageSwitcher
                                        languages={languages}
                                        languageMenu={languageMenu}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>, document.body,
            ));
    }
    else {return (<></>);}
};

export default SettingMenu;
