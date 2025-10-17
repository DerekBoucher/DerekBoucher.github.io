import { useState } from "react";

import LeftArrow from "@/assets/left_arrow.svg";
import RightArrow from "@/assets/right_arrow.svg";

export type ImageCarouselProps = {
    Images: string[];
};

export function ImageCarousel(props: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? props.Images.length - 1 : prevIndex - 1,
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === props.Images.length - 1 ? 0 : prevIndex + 1,
        );
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-row h-[600px]">
                <img
                    src={props.Images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                />
            </div>
            <div className="flex flex-row justify-end w-[100%] pr-5">
                <button
                    className={
                        "mr-5 " +
                        (currentIndex === 0
                            ? "opacity-50 duration-300 transition-opacity"
                            : "opacity-100 duration-300 transition-opacity")
                    }
                    onClick={prevImage}
                    disabled={currentIndex === 0}
                >
                    <img src={LeftArrow} />
                </button>
                <button
                    className={
                        currentIndex === props.Images.length - 1
                            ? "opacity-50 duration-300 transition-opacity"
                            : "opacity-100 duration-300 transition-opacity"
                    }
                    onClick={nextImage}
                    disabled={currentIndex === props.Images.length - 1}
                >
                    <img src={RightArrow} />
                </button>
            </div>
        </div>
    );
}

export default ImageCarousel;
