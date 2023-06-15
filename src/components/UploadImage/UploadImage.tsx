import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineCloudUpload, AiOutlineFullscreen } from 'react-icons/ai';
import '../../App.css';
import './UploadImage.css';
import UploadImg from '../../img/upload.png';
import { useTheme } from '../../ThemeContext';
import useModal from '../../hooks/useModal';
import EnlargeImage from './EnlargeImage';
import { useLanguage } from '../../translate/LanguageTheme';
type UploadImageProps = {
    src: string | null
}
const UploadImage: React.FC<UploadImageProps> = ({ src }) =>
{
    const { theme } = useTheme();
    const { t } = useLanguage();
    const { show, modalVisible } = useModal();

    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<any>();
    const [imgPreview, setImgPreview] = useState<string | undefined>(src ? src : undefined);
    useEffect(() =>
    {
        if (!selectedImage)
        {
            setImgPreview(undefined);
            return;
        }
        const imgURL = URL.createObjectURL(selectedImage);
        setImgPreview(imgURL);
        return () => URL.revokeObjectURL(imgURL);
    }, [selectedImage]);

    useEffect(() =>
    {
        if (src)
        {
            setImgPreview(src);
        }
        else {console.log('do not exist defaultImg');}
    }, []);

    const ChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) =>
    {
        if (!event.target.files || event.target.files.length === 0)
        {
            return;
        }
        setSelectedImage(event.target.files[0]);
    };


    function handleClick()
    {
        if (hiddenFileInput.current)
        {
            hiddenFileInput.current.click();
        }
    }
    function ImgEnterHandler()
    {
        document.getElementsByClassName('upload-button')[0].classList.add('upload-btn-show');
        document.getElementsByClassName('upload-button')[0].classList.remove('upload-btn-hide');
        document.getElementsByClassName('enlarge-button')[0].classList.add('enlarge-btn-show');
        document.getElementsByClassName('enlarge-button')[0].classList.remove('enlarge-btn-hide');
    }
    function ImgLeaveHandler()
    {
        document.getElementsByClassName('upload-button')[0].classList.remove('upload-btn-show');
        document.getElementsByClassName('upload-button')[0].classList.add('upload-btn-hide');
        document.getElementsByClassName('enlarge-button')[0].classList.add('enlarge-btn-hide');
        document.getElementsByClassName('enlarge-button')[0].classList.remove('enlarge-btn-show');
    }
    function UploadBtnEnterHandler()
    {
        document.getElementsByClassName('upload-button')[0].classList.add('upload-btn-show');
        document.getElementsByClassName('upload-button')[0].classList.remove('upload-btn-hide');
    }
    function UploadBtnLeaveHandler()
    {
        document.getElementsByClassName('upload-button')[0].classList.remove('upload-btn-show');
        document.getElementsByClassName('upload-button')[0].classList.add('upload-btn-hide');
    }
    return (
        <div>
            <div className='upload-container'>
                <div className='upload-wrapper'>
                    {
                        imgPreview
                            ? (
                                <div
                                    className='image-container'
                                    onMouseEnter={ImgEnterHandler}
                                    onMouseLeave={ImgLeaveHandler}
                                >
                                    <img
                                        className='image-upload'
                                        src={imgPreview}
                                        alt='img-upload'
                                    />
                                </div>
                            )
                            : (
                                <button
                                    className='image-container'
                                    onClick={handleClick}
                                >
                                    <AiOutlineCloudUpload
                                        size="50%"
                                        color={theme === 'dark' ? '#fff' : '#000'}
                                    />
                                </button>
                            )
                    }
                    <button
                        className='enlarge-button'
                        onClick={show}
                        onMouseEnter={ImgEnterHandler}
                        onMouseLeave={ImgLeaveHandler}
                    >
                        <AiOutlineFullscreen
                            size="100%"
                            color={theme === 'dark' ? '#fff' : '#000'}
                        />

                    </button>
                </div>
                <button
                    className='upload-button'
                    onMouseEnter={UploadBtnEnterHandler}
                    onMouseLeave={UploadBtnLeaveHandler}
                    onClick={handleClick}
                >
                    <img
                        src={UploadImg}
                        alt='UploadImg'
                        width={'25px'}
                    />
                    <p style={{ marginLeft: '5px' }}>{t('Tải ảnh lên')}</p>
                </button>


            </div>
            
            <input
                ref={hiddenFileInput}
                type='file'
                name='image-upload'
                accept=".jpg, .png, .jpeg"
                style={{ display: 'none' }}
                onChange={ChangeHandler}
            />
            <EnlargeImage
                hide={show}
                modalVisible={modalVisible}
                imgPreview={imgPreview}
            />
        </div>
    );
};

export default UploadImage;
