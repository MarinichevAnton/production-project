import React from "react";
import { useTranslation } from "react-i18next";
import ImageSlider from "shared/ui/ImageSlider/ImageSlider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./MainPage.module.scss";
import { BIG_SLIDER_PICTURES } from "enums/BigSliderPictures";
import {
  DESCRIPTION_SHORT_SLIDER,
  SHORT_SLIDER_PICTURES,
} from "enums/ShortSliderPictures";
import TitleInformation from "../components/TitleInformation/TitleInformation";
import Card from "shared/ui/Card/Card";
import OnePictureForCard from "shared/assets/PicturesForCard/generated_image_sdxl_4 (1).jpg";
import TwoPictureForCard from "shared/assets/PicturesForCard/generated_image_sdxl_1.jpg";
import ThreePictureForCard from "shared/assets/PicturesForCard/generated_image_sdxl_2 (1).jpg";

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.MainPage, {}, [])}>
      <div className={classNames(cls.Slider, {}, [])}>
        <div className={classNames(cls.SliderContainer, {}, [])}>
          <ImageSlider
            images={BIG_SLIDER_PICTURES}
            autoPlay={true}
            autoPlayInterval={3000}
          />
        </div>
        <div className={classNames(cls.SliderContainer, {}, [])}>
          <ImageSlider
            images={SHORT_SLIDER_PICTURES}
            autoPlay={true}
            autoPlayInterval={2500}
            descriptions={DESCRIPTION_SHORT_SLIDER}
          />
        </div>
      </div>

      <div className={classNames(cls.Content, {}, [])}>
        <TitleInformation />

        <div className={classNames(cls.ContentPhotos, {}, [])}>
          <Card image={OnePictureForCard} />
          <Card image={TwoPictureForCard} />
          <Card image={ThreePictureForCard} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
