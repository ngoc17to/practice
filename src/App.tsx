import React from 'react';
import useModal from './hooks/useModal';
import useToast from './hooks/useToast';
import Modal from './components/Modal/Modal';
import Toast from './components/Toast/Toast';
import AdvanceSelect from './components/AdvanceSelect/AdvanceSelect';
import UploadImage from './components/UploadImage/UploadImage';
import './App.css';
import { useTheme } from './ThemeContext';
import { BsFillBrightnessLowFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { AdvanceSelectOption } from './components/AdvanceSelect/type';

const App: React.FC = () =>
{
    const { theme, toggleTheme } = useTheme();
    const { modalVisible, show } = useModal();

    const { addToastHandler, deleteToastHandler, toastList } = useToast();

    const text: {title: string, message: string} = {
        title: 'Title',
        message: 'Message',
    };
    const toastText: {message: string, type: string, id:string}[] = [
        { message: 'This is success toast', type: 'success', id: '' },
        { message: 'This is warning toast', type: 'warning', id: '' },
        { message: 'This is error toast', type: 'error', id: '' },

    ];

    const options: AdvanceSelectOption[] = [
        { id: '1', label: 'option 1' },
        { id: '2', label: 'option 2' },
        { id: '3', label: 'option 3' },
        { id: '4', label: 'option 4' },
        { id: '5', label: 'huhuhuhuhuh' },
        { id: '6', label: 'hihihihihihhhihi' },
        { id: '7', label: 'hehehe' },
    ];

    return (
        <div className="App">
            <button
                className="button-default"
                onClick={show}
            >
                <p>Confirm</p>
            </button>
            <Modal
                modalVisible={modalVisible}
                hide={show}
                text={text}
            />
            <button
                className="button-default success-button"
                onClick={() => addToastHandler(toastText[0])}
            > <p>Success</p>
            </button>

            <button
                className="button-default warning-button"
                onClick={() => addToastHandler(toastText[1])}
            > <p>Warning</p>
            </button>

            <button
                className="button-default error-button"
                onClick={() => addToastHandler(toastText[2])}
            > <p>Error</p>
            </button>

            <Toast
                toastList={toastList}
                deleteToast={deleteToastHandler}
            />
            <button
                className="mode_btn"
                onClick={toggleTheme}
            >
                {
                    theme === 'light'
                        ? (
                            <BsFillBrightnessLowFill
                                size="100%"
                                color='rgb(15, 23, 42)'
                            />
                        )
                        : (
                            <BsFillMoonStarsFill
                                size="60%"
                                color='rgb(241, 245, 249)'
                            />
                        )
                }
            </button>
            <UploadImage src={''} />
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
        </div>
    );
};

export default App;
