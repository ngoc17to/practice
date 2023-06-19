import React from 'react';
import AdvanceSelect from '../components/AdvanceSelect/AdvanceSelect';
import '.././App.css';
import { useLanguage } from '../translate/LanguageTheme';
import { AdvanceSelectOption } from '../components/AdvanceSelect/type';

const AdvanceSelectComponent: React.FC = () =>
{
    const { t } = useLanguage();

    const options: AdvanceSelectOption[] = [
        { id: '1', label: 'Lựa chọn 1' },
        { id: '2', label: 'Lựa chọn 2' },
        { id: '3', label: 'Lựa chọn 3' },
        { id: '4', label: 'Lựa chọn 4' },
        { id: '5', label: 'huhuhuhuhuh' },
        { id: '6', label: 'hihihihihihhhihi' },
        { id: '7', label: 'hehehe' },
    ];

    return (
        <div className="component-container">
            <h1>{t('Advance Select')}</h1>
            <p>{t('Thành phần Select được sử dụng để thu thập thông tin do người dùng cung cấp từ danh sách các tùy chọn.')}</p>
            <h3>{t('Select cơ bản')}</h3>
            <p>{t('Các menu được định vị bên dưới các phần tử phát ra của chúng, trừ khi chúng ở gần cuối khung nhìn.')}</p>
            <AdvanceSelect
                options={options}
                placeholder = {'Vui lòng chọn...'}
                isMultiple = {false}
            />
            <h3>{t('Select nhiều options')}</h3>
            <AdvanceSelect
                options={options}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select với giá trị cho trước')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                isMultiple
            />
            <h3>{t('Select không thể sửa đổi')}</h3>
            <AdvanceSelect
                options={options}
                defaultValue={['1', '2']}
                placeholder = {'Vui lòng chọn...'}
                disable
            />
        </div>
    );
};

export default AdvanceSelectComponent;
