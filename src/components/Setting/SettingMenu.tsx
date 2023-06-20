import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import './Setting.css';
import { useTheme } from '../../ThemeContext';
import { useLanguage } from '../../translate/LanguageTheme';
import { AiOutlineClose } from 'react-icons/ai';
import { BsFillBrightnessLowFill, BsFillMoonStarsFill } from 'react-icons/bs';
import LanguageSwitcher from '../../translate/LanguageSwitcher';

type SettingMenuProps = {
    settingVisible: boolean
    hide: () => void
}

const modes = [
    {
        id: 'light',
        icon: BsFillBrightnessLowFill,
        label: 'Chế độ sáng',
    },
    {
        id: 'dark',
        icon: BsFillMoonStarsFill,
        label: 'Chế độ tối',
    },
];

const languages = [
    { lang: 'Tiếng Việt', id: 'vi' },
    { lang: 'English', id: 'en' },
    { lang: 'Français', id: 'fr' },
    { lang: '日本', id: 'jp' },
];

const SettingMenu: React.FC<SettingMenuProps> = ({ settingVisible, hide }) =>
{
    const { theme, setTheme } = useTheme();
    const { t } = useLanguage();

    const [languageMenu, setLanguageMenu] = useState(false);

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
                                        {
                                            modes.map(mode =>
                                            {
                                                const Icon = mode.icon;

                                                return (
                                                    <button
                                                        key={mode.id}
                                                        className={`setting-btn ${mode.id}-mode-btn`}
                                                        onClick={() => setTheme(mode.id)}
                                                    >
                                                        <Icon
                                                            size="80%"
                                                            color={theme === 'dark' ? '#fff' : '#000'}
                                                        />

                                                        <p style={{ width: '100%', fontSize: '16px' }}>{t(mode.label)}</p>
                                                    </button>
                                                );
                                            })
                                        }
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
