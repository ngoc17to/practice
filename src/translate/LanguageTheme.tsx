import { createContext, useContext, useState, useEffect, PropsWithChildren } from 'react';

type LanguageContextReturnType = {
    language: string
    setLanguage: (language: string) => void
    t: (text: string) => string
}

const LanguageContext = createContext<LanguageContextReturnType>({} as LanguageContextReturnType);

const LanguageProvider: React.FC<PropsWithChildren> = ({ children }) =>
{
    const intialLanguage = localStorage.getItem('MYAPP_LANGUAGE');
    const [language, setLanguage] = useState<string>((intialLanguage === null) ? 'vi' : intialLanguage);

    useEffect(() =>
    {
        localStorage.setItem('MYAPP_LANGUAGE', language);
    }, [language]);

    const t = (text: string) =>
    {
        if (language === 'vi') {return text;}

        const loadedLanguage: Record<string, string> = require(`./languages/${language}.json`);
        if (text in loadedLanguage)
        {
            return loadedLanguage[text];
        }
        
        return text;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
type useLanguageType = () => LanguageContextReturnType
const useLanguage: useLanguageType = () =>
{
    const context = useContext(LanguageContext);
    return context;
};

export { LanguageProvider, useLanguage };
