import React from 'react';
import ReactDOM from 'react-dom';

import ComponentList from './ComponentList';

import '../../App.css';
import './ComponentMenu.css';

type ResponsiveMenuProps = {
    modalVisible: boolean
    hide: () => void
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ modalVisible, hide }) =>
{
    if (!modalVisible) {return (<></>);}

    return (
        ReactDOM.createPortal(
            <div className="res-menu-container">
                <div
                    className="res-menu-overlay"
                    onClick={hide}
                />
                <div className="res-menu-wrapper">
                    <ComponentList />
                </div>
            </div>, document.body,
        ));

};

export default ResponsiveMenu;
