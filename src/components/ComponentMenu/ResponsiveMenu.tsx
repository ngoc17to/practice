import React from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import './ComponentMenu.css';
import { useTheme } from '../../ThemeContext';
import { AiOutlineClose } from 'react-icons/ai';
import { useLanguage } from '../../translate/LanguageTheme';
import ComponentMenu from './ComponentMenu';
type ResponsiveMenuProps = {
    modalVisible: boolean
    hide: () => void
}
const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ modalVisible, hide }) =>
{
    const { theme } = useTheme();
    const { t } = useLanguage();
    if (modalVisible)
    {
        return (
            ReactDOM.createPortal (
                <div className="res-menu-container">
                    <div
                        className="res-menu-overlay"
                        onClick={hide}
                    />
                    <div className="res-menu-wrapper" />
                </div>, document.body,
            ));
    }
    else {return (<></>);}
};

export default ResponsiveMenu;
