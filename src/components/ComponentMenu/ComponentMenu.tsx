import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import './ComponentMenu.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { BsList, BsCaretLeft } from 'react-icons/bs';
import { useTheme } from '../../ThemeContext';
import Setting from '../../components/Setting/Setting';
import ComponentList from './ComponentList';
import useModal from '../../hooks/useModal';
import ResponsiveMenu from './ResponsiveMenu';


const ComponentMenu: React.FC = () =>
{
    const { show, modalVisible } = useModal();
    const { theme } = useTheme();

    return (
        <div>
            <div className='navbar'>
                <button
                    className="menu-button"
                    onClick={show}
                >
                    <BsList
                        size='100%'
                        color={theme === 'dark' ? '#fff' : '#000'}
                    />
                </button>

                <div className='navbar-right'>
                    <img
                        src={logo}
                        alt='app-logo'
                    />
                    My Component
                    <Setting />
                </div>
            </div>

            <div className="component-menu">
                <ComponentList />
            </div>

            <ResponsiveMenu
                hide={show}
                modalVisible={modalVisible}
            />
            
        </div>
    );
};
export default ComponentMenu;
