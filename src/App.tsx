import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ModalComponent from './page/ModalComponent';
import ToastComponent from './page/ToastComponent';
import UploadImageComponent from './page/UploadImageComponent';
import AdvanceSelectComponent from './page/AdvanceSelectComponent';
import ComponentMenu from './components/ComponentMenu/ComponentMenu';

const App: React.FC = () =>
{
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    console.log(menuVisible);
    return (
        <div className="App">
            <ComponentMenu
                menuVisible={menuVisible}
                setMenuVisible={setMenuVisible}
            />
            <div
                className={`app-right ${menuVisible && 'menu-responsive'}`}
                onClick={() => setMenuVisible(menuVisible && false)}
            >

                <Routes>
                    <Route
                        path='/modal'
                        element={<ModalComponent />}
                    />
                    <Route
                        path='/toast'
                        element={<ToastComponent />}
                    />
                    <Route
                        path='/uploadimage'
                        element={<UploadImageComponent />}
                    />
                    <Route
                        path='/advanceselect'
                        element={<AdvanceSelectComponent />}
                    />
                </Routes>

            </div>
        </div>
    );
};

export default App;
