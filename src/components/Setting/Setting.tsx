import React from 'react';
import '../../App.css';
import './Setting.css';
import { useTheme } from '../../ThemeContext';
import useModal from '../../hooks/useModal';
import SettingMenu from './SettingMenu';
import { AiOutlineSetting } from 'react-icons/ai';

const Setting: React.FC = () =>
{
    const { theme } = useTheme();
    const { modalVisible, show } = useModal();
    
    return (
        <div>
            <button
                className="setting-button"
                onClick={show}
            >
                <AiOutlineSetting
                    size='100%'
                    color={theme === 'dark' ? '#fff' : '#000'}
                />
            </button>
        
            <SettingMenu
                settingVisible={modalVisible}
                hide={show}
            />
        </div>
    );
};

export default Setting;
