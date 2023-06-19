import React, { useState, useRef, useEffect } from 'react';
import '../../App.css';
import './ComponentMenu.css';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { BsList, BsCaretLeft } from 'react-icons/bs';
import { useTheme } from '../../ThemeContext';
import Setting from '../../components/Setting/Setting';
type ComponentMenuProps = {
    menuVisible: boolean
    setMenuVisible: (menuVisible: boolean) => void
}
const ComponentMenu: React.FC<ComponentMenuProps> = ({ menuVisible, setMenuVisible }) =>
{
    const [selectedComponent, setSelectedComponent] = useState<string>('Modal');

    const { theme } = useTheme();

    const componentList: {id: string, component: string}[] = [
        { id: 'modal', component: 'Modal' },
        { id: 'toast', component: 'Toast' },
        { id: 'uploadimage', component: 'UploadImage' },
        { id: 'advanceselect', component: 'AdvanceSelect' },
    ];

    return (
        <div>
            <div className='navbar'>
                <button
                    className="menu-button"
                    onClick={() => setMenuVisible(true)}
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
            <div
                className={`component-menu ${menuVisible && 'show-menu'}`}
            >
                <div className='app-title'>
                    <img
                        src={logo}
                        alt='app-logo'
                    />
                    <h3>My Component</h3>
                </div>
                <div className='component-list'>
                    <p>COMPONENTS</p>
                    <ul>
                        {componentList.map(({ id, component }) => (
                            <li
                                key={id}
                                style={selectedComponent === component ? { color: 'rgb(241, 245, 249)', backgroundColor: 'rgb(0, 145, 234)', fontWeight: 'bolder' } : {}}
                                onClick={() => setSelectedComponent(component)}
                            ><Link to={`/${id}`}>{component}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};
export default ComponentMenu;
