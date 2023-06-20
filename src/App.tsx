import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import ConfirmComponent from './page/ModalComponent/ConfirmComponent';
import AlertComponent from './page/ModalComponent/AlertComponent';
import DefaultToastComponent from './page/ToastComponent/DefaultToastComponent';
import DefaultUploadImageComponent from './page/UploadImageComponent/DefaultUploadImageComponent';
import DefaultSelectComponent from './page/AdvancedSelectComponent/DefaultSelectComponent';
import DisabledComponent from './page/AdvancedSelectComponent/DisabledComponent';
import MultipleComponent from './page/AdvancedSelectComponent/MultipleComponent';
import ComponentMenu from './components/ComponentMenu/ComponentMenu';

const App: React.FC = () =>
{
    const routes = [
        { path: '/modalConfirm', component: ConfirmComponent },
        { path: '/modalAlert', component: AlertComponent },
        { path: '/toastDefault', component: DefaultToastComponent },
        { path: '/uploadimageDefault', component: DefaultUploadImageComponent },
        { path: '/advanceselectDefault', component: DefaultSelectComponent },
        { path: '/advanceselectDisable', component: DisabledComponent },
        { path: '/advanceselectMultiple', component: MultipleComponent },
    ];

    return (
        <div className="App">
            <div className="app-left">
                <ComponentMenu />
            </div>
            <div className="app-right">
                <Routes>
                    {
                        routes.map(({ path, component }) =>
                        {
                            const Page = component;
                            return (
                                <Route
                                    key={path}
                                    path={path}
                                    element={<Page />}
                                />
                            );
                        })}
                </Routes>

            </div>
        </div>
    );
};

export default App;
