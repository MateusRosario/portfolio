import { useState } from 'react'
import './Slider.css'
import {ReactComponent as NextIcon} from '../../../assets/icons/next.svg'


const Slider = (props) => {
    const [frontImage, setFrontImage] = useState(0)
    const [behindImage, setBehindImage] = useState(1)
    const images = props.images

    const nextImage = () => {
        const front = behindImage
        let behind = behindImage + 1;
        if(behind === props.images.length){
            behind = 0;
        }

        setFrontImage(front);
        setBehindImage(behind);
    }

    var sliderImageClass = 'slider-image full';
    if (props.images.length > 1) {
        sliderImageClass = 'slider-image'
    } 
    return (
        <div className='slider-box'>
            <img className={sliderImageClass} src={images[frontImage]} alt='display'/>
            { images.length > 1 ?
                
                <div className='slider-image-behind-box' onClick={() => nextImage()}>
                    <NextIcon className='slider-button' fill="var(--acc)" onClick={() => nextImage()}/>
                    <div className='slider-image-behind-cover'/>
                    <img className='slider-image-behind' src={images[behindImage]} alt='display'/>
                </div>
                
                : null
            }
        </div>
    )
}

export default Slider