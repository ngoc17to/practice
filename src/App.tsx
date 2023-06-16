import React, { useState } from 'react';
import './App.css';
import { useLanguage } from './translate/LanguageTheme';
import Setting from './components/Setting/Setting';
import ModalComponent from './components/Modal/ModalComponent';
import ToastComponent from './components/Toast/ToastComponent';
import UploadImageComponent from './components/UploadImage/UploadImageComponent';
import AdvanceSelectComponent from './components/AdvanceSelect/AdvanceSelectComponent';
import logo from './img/logo.png';
const App: React.FC = () =>
{
    const [selectedComponent, setSelectedComponent] = useState<string>('Modal');

    const componentList: {id: string, component: string}[] = [
        { id: 'Modal', component: 'Modal' },
        { id: 'Toast', component: 'Toast' },
        { id: 'UploadImage', component: 'UploadImage' },
        { id: 'AdvanceSelect', component: 'AdvanceSelect' },
    ];
    return (
        <div className="App">
            <div className='navbar'>
                <img
                    src={logo}
                    alt='app-logo'
                />
            My Component
                <Setting />
            </div>
            <div className='component-menu'>
                <div className='app-title'>
                    <img
                        src={logo}
                        alt='app-logo'
                    />
                    <h3>My Component</h3>
                </div>
                <div className='component-list'>
                    <p>COMPONENTS</p>
                    {componentList.map(({ id, component }) => (
                        <button
                            key={id}
                            style={selectedComponent === component ? { color: 'rgb(241, 245, 249)', backgroundColor: 'rgb(0, 145, 234)', fontWeight: 'bolder' } : {}}
                            onClick={() => setSelectedComponent(component)}
                        >{component}
                        </button>
                    ))}
                </div>
            </div>
            <div className='component-display'>
                {selectedComponent === 'Modal' && <ModalComponent />}
                {selectedComponent === 'Toast' && <ToastComponent />}
                {selectedComponent === 'UploadImage' && <UploadImageComponent />}
                {selectedComponent === 'AdvanceSelect' && <AdvanceSelectComponent />}
            </div>
        </div>
    );
};

export default App;
