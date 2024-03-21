import cls from "./ProductPage.module.scss";
import { MainLayout } from "@/widgets/MainLayout/ui/MainLayout";
import { Text } from "@/shared/ui/Text";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Property } from "@/shared/ui/Property";
import { Rating } from "@/shared/ui/Rating";


export const ProductPage = () => {

  const sliderSetting = {
    customPaging: function (i) {
      return (
          <button className={cls.slider_nav_button}>
            <img src={`/src/shared/assets/images/sneakers.jpg`} alt="lalal" width={70}/>
          </button>
      );
    },
    arrows: false,
    dots: true,
    dotsClass: cls.slider_dots,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <MainLayout>
      <div className="container pt-20 pb-20">
        <div className={cls.about_page}>
          <div>
            <Slider {...sliderSetting}>
              <div>
                <img src={`/src/shared/assets/images/sneakers.jpg`} className={cls.slider_img}/>
              </div>
              <div>
                <img src={`/src/shared/assets/images/sneakers.jpg`} className={cls.slider_img}/>
              </div>
              <div>
                <img src={`/src/shared/assets/images/sneakers.jpg`} className={cls.slider_img}/>
              </div>
              <div>
                <img src={`/src/shared/assets/images/sneakers.jpg`} className={cls.slider_img}/>
              </div>
            </Slider>

          </div>
          <div>
            <Text as='h1' weight='bold'>
              Puma Force 1 Shadow
            </Text>

            <Property
              label='Description'
              children="An apple mobile which is nothing like apple"
            />

            <Property label='Description'>
              <Rating value={4}/>
            </Property>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
