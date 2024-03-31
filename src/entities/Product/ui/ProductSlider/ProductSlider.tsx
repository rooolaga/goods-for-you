import cls from './ProductSlider.module.scss'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

interface ProductSliderProps {
  images: string[],
  alt: string
}

export const ProductSlider = ({
  images,
  alt
}: ProductSliderProps) => {

  const customPaging = (i) => {
    return (
      <button className={cls.slider_nav_button}>
        <img src={images[i]} alt={alt}/>
      </button>
    );
  }

  const sliderSetting = {
    customPaging,
    arrows: false,
    dots: true,
    dotsClass: cls.slider_dots,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (images.length === 1) return (
    <div className={cls.slider_img_wrapper}>
      <img src={images[0]} alt={alt}  className={cls.slider_img}/>
    </div>
  );

  return (
    <Slider {...sliderSetting}>
      {images.map((item, index) => (
        <div key={index}>
          <div className={cls.slider_img_wrapper}>
            <img src={item} alt={alt}  className={cls.slider_img}/>
          </div>
        </div>
      ))}
    </Slider>
  );
};
