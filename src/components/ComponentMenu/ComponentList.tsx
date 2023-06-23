import React, { useState, useEffect } from 'react';
import { BsFillCaretRightFill, BsFillCaretDownFill, BsBookmark } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import '../../App.css';
import './ComponentMenu.css';
import logo from '../../img/logo.png';

const ComponentList: React.FC = () =>
{
    const intialComponent = localStorage.getItem('MYAPP_COMPONENT');
    const intialChild = localStorage.getItem('MYAPP_COMPONENT_CHILD');

    const [selectedComponent, setSelectedComponent] = useState<string>(intialComponent || 'modal');
    const [selectedChild, setSelectedChild] = useState<string>(intialChild || 'Confirm');
    const [showChildren, setShowChildren] = useState(false);

    const componentList = [
        { id: 'modal', component: 'Modal', children: ['Confirm', 'Alert'] },
        { id: 'toast', component: 'Toast', children: ['Default'] },
        { id: 'uploadimage', component: 'Upload Image', children: ['Default'] },
        { id: 'advanceselect', component: 'Advance Select', children: ['Default', 'Multiple', 'Disable'] },
    ];
    
    useEffect(() =>
    {
        localStorage.setItem('MYAPP_COMPONENT', selectedComponent);
    }, [selectedComponent]);

    useEffect(() =>
    {
        localStorage.setItem('MYAPP_COMPONENT_CHILD', selectedChild);
    }, [selectedChild]);

    const handleItemClick = (id: string, selected: string) =>
    {
        setSelectedComponent(id);
        setSelectedChild(selected);
        if (id === selectedComponent) {setShowChildren(!showChildren);}
        console.log(showChildren);
    };

    return (
        <div>
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
                    {componentList.map(({ id, component, children }) => (
                        <Link
                            key={id}
                            to={`/${id}${children.length > 0 ? `${children[0]}` : ''}`}
                        >
                            <li
                                className='component-list__item'
                                style={selectedComponent === id ? { backgroundColor: 'rgb(239,249,255)' } : {}}
                                onClick={() => handleItemClick(id, children[0])}
                            >
                                {selectedComponent === id
                                    ? <BsFillCaretDownFill className='icon component-list__icon' />
                                    : <BsFillCaretRightFill className='icon component-list__icon' />}

                                {component}
                            </li>
                            {
                                selectedComponent === id && showChildren && (
                                    <ul>
                                        {children.map((element) => (
                                            <Link
                                                key={element}
                                                to={`/${id}${element}`}
                                            >
                                                <li
                                                    style={selectedChild === element ? { color: 'rgb(0,127,255)', backgroundColor: 'rgba(64, 196, 255, 0.2)' } : {}}
                                                    onClick={() => setSelectedChild(element)}
                                                >
                                                    {element}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default ComponentList;
