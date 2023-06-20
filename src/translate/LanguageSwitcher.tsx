import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from './LanguageTheme';
import { BsGlobe } from 'react-icons/bs';
import { useTheme } from '../ThemeContext';
import './LanguageSwitcher.css';

type LanguageSwitcherProps = {
    languages: {lang: string, id: string}[]
    languageMenu: boolean
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ languages, languageMenu }) =>
{
    const { language, setLanguage } = useLanguage();
    const { theme } = useTheme();

    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className='set-language-container'
        >
            {
                languageMenu && (
                    <div className='language-menu'>
                        {
                            languages.map(({ id, lang }) => (
                                <div
                                    key={id}
                                    className='language'
                                    style={{
                                        color: id === language ? (theme === 'light' ? 'rgb(48, 79, 254)' : 'rgb(140, 158, 255)') : '',
                                        border: id === languages[languages.length - 1].id ? '0' : '',
                                    }}
                                    onClick={() =>
                                    {
                                        setLanguage(id);
                                    }}
                                >
                                    <p>{lang}</p>
                                </div>
                            ))
                        }
                    </div>
                )

            }
        </div>
    );
};
export default LanguageSwitcher;
