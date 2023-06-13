import React from 'react';
import '../../App.css';
import './AdvanceSelect.css';
import { useState } from 'react';
import { BsCaretDown, BsCaretUp, BsCheck } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useTheme } from '../../ThemeContext';

type AdvanceSelectProps = {
    options: {id: string, label: string}[]
    defaultValue: {id: string, label: string} | null
    isMultiple: boolean
}
const AdvanceSelect: React.FC<AdvanceSelectProps> = ({ options, defaultValue, isMultiple }) =>
{
    const { theme } = useTheme();
    const [valueList, setValueList] = useState<{id: string, label: string}[]>(defaultValue ? [defaultValue] : []);
    const [DropdownMenuVisible, SetDropdownMenuVisible] = useState<boolean>(false);
    const [focusedIndex, setFocusIndex] = useState(-1);
    const ItemClickHandler = (id: string, label: string) =>
    {
        if (isMultiple)
        {
            if (valueList)
            {
                if (valueList.some(element => element.id === id))
                {
                    setValueList(currentValueList =>
                    {
                        return currentValueList.filter((currentValueList) => currentValueList.id !== id);
                    });

                }
                else
                {
                    const currentValueList: {id: string, label: string}[] = valueList;
                    currentValueList.push({ id: id, label: label });
                    setValueList(currentValueList);
                }
            }
            else
            {
                setValueList([{ id: id, label: label }]);
            }
        }
        else
        {
            setValueList([{ id: id, label: label }]);
        }
        SetDropdownMenuVisible(false);
    };
    const ClearItemHandler = () =>
    {
        setValueList([]);
        SetDropdownMenuVisible(false);
    };
    const DeselectItemHandler = (id: string) =>
    {
        setValueList(currentValueList =>
        {
            return currentValueList.filter((currentValueList) => currentValueList.id !== id);
        });
        SetDropdownMenuVisible(false);
    };
    const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) =>
    {
        const { key } = e;
        let nextIndexCount = 0;

        // move down
        if (key === 'ArrowDown')
        {
            nextIndexCount = (focusedIndex + 1) % (options.length + 1);
            setFocusIndex(nextIndexCount);
        }

        // move up
        if (key === 'ArrowUp')
        {
            nextIndexCount = (focusedIndex + options.length - 1) % (options.length);
            setFocusIndex(nextIndexCount);
        }

        if (key === 'Enter')
        {
            if (focusedIndex > 0)
            {
                const idx = focusedIndex - 1;
                ItemClickHandler(options[idx].id, options[idx].label);
                SetDropdownMenuVisible(true);

            }
            setFocusIndex(0);
        }
        if (key === 'Backspace')
        {
            if (valueList.length > 0)
            {
                DeselectItemHandler(valueList[valueList.length - 1].id);
            }
            SetDropdownMenuVisible(true);
            setFocusIndex(focusedIndex);
        }
    };
    return (
        <div onClick={() => SetDropdownMenuVisible(false)}>
            <div className='select-wrapper'>
                <div
                    tabIndex={0}
                    className='select-showValue'
                    onKeyDown={handleKeyDown}
                    onClick={() => SetDropdownMenuVisible(!DropdownMenuVisible)}
                >{valueList.length !== 0
                        ? (
                            <div>
                                {isMultiple
                                    ? (
                                        <div>
                                            {valueList.map(({ id, label }) => (
                                                <div
                                                    key={id}
                                                    className='value-list'
                                                >{label}
                                                    <button
                                                        className='deselect-btn'
                                                        onClick={() => DeselectItemHandler(id)}
                                                    > <AiOutlineClose />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                    : <div>{valueList[0].label}</div>
                                }
                            </div>
                        )
                        : <p style={{ opacity: '0.7' }}>Select an item ...</p>}
                    <div>
                        {
                            valueList
                                ? (
                                    <button
                                        className='clear-btn'
                                        onClick={ClearItemHandler}
                                    > <AiOutlineClose color={theme === 'dark' ? '#fff' : '#000'} />
                                    </button>
                                )
                                : <> </>
                        }
                        {
                            DropdownMenuVisible ? <BsCaretUp /> : <BsCaretDown />
                        }
                    </div>
                </div>
                {
                    DropdownMenuVisible
                        ? (
                            <div className='select-items'>
                                {options.map(({ id, label }) => (
                                    <div
                                        key={id}
                                        className='item'
                                        style={{ backgroundColor: parseInt(id) === focusedIndex ? 'rgba(0,0,0,0.1)' : '' }}
                                        onClick={() => ItemClickHandler(id, label)}
                                        onMouseEnter={() => setFocusIndex(parseInt(id))}
                                    >
                                        <div className='item-tick'>
                                            {
                                                valueList.some(element => element.id === id) ? <BsCheck size="100%" /> : <></>
                                            }
                                        </div>
                                        <p>{label}</p>
                                    </div>
                                ))}
                            </div>
                        )
                        : <></>
                }

            </div>
        </div>
    );
};
export default AdvanceSelect;
