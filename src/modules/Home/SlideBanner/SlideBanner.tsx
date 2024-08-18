import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { themeColors } from "../../../themes/schemes/PureLightTheme";
import { AssetImages } from "../../../utils/images";
import "./SlideBanner.scss";

const BannerSlider = ({
  banners,
  autoplayInterval,
}: {
  banners?: any;
  autoplayInterval?: any;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, autoplayInterval);

    return () => {
      clearInterval(interval);
    };
  }, [banners.length, autoplayInterval]);

  return (
    <div className="root">
      <div
        className="sliderContainer"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners?.map(
          (
            banner: { image: string | undefined; alt: string | undefined },
            index: React.Key | null | undefined
          ) => (
            <div key={index} className="slider">
              <img
                src={banner?.image || AssetImages.NO_IMAGE}
                alt={banner?.alt || "error"}
                width="100%"
                height="100%"
                className="imageBanner"
              />
            </div>
          )
        )}
      </div>
      <div className="indexContainer">
        {banners?.map((_: any, index: React.Key | null | undefined) => (
          <Typography
            key={index}
            variant="h3"
            color={`${themeColors.white} ${
              currentIndex === index ? "red" : ""
            }`}
            className={`$"index" ${
              currentIndex === index ? "activeIndex" : ""
            }`}
          >
            &bull;
          </Typography>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
