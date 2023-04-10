import { useCallback, useEffect, useRef, useState } from 'react';
import image1 from '../../assets/image-1.jpg';
import image2 from '../../assets/image-2.jpg';
import image3 from '../../assets/image-3.jpg';

const slides = [
    {
        url: image1,
    },
    {
        url: image2,
    },
    {
        url: image3,
    },
];

const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
};

const dotStyle = (currentIndex, index) => ({
    background: 'black',
    borderRadius: '10px',
    border: '5px solid black',
    cursor: 'pointer',
    opacity: `${currentIndex !== index ? '0.5' : 1}`,
});

const slidesContainerStyles = {
    display: 'flex',
    height: '100%',
    transition: 'transform ease-out 0.3s',
};

const slidesContainerOverflowStyles = {
    overflow: 'hidden',
    height: '100%',
};

function Carousel() {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // const goToPrevious = () => {
    //     const isFirstSlide = currentIndex === 0;
    //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    //     setCurrentIndex(newIndex);
    // };

    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const getSlideStylesWithBackground = (slideIndex) => ({
        ...slideStyles,
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: 500,
    });

    const getSlidesContainerStylesWithWidth = () => ({
        ...slidesContainerStyles,
        width: 500 * slides.length,
        transform: `translateX(${-(currentIndex * 500)}px)`,
    });

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 2000);

        return () => clearTimeout(timerRef.current);
    }, [goToNext]);

    return (
        <div
            className="container"
            style={{
                padding: '0 70px',
            }}
        >
            <div
                className="wrapper"
                style={{
                    background: '#EAEAEA',
                    borderRadius: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: 382,
                    gap: '1rem',
                }}
            >
                <div
                    className="slider-container"
                    style={{
                        width: '500px',
                        height: '240px',
                        margin: '16px auto',
                    }}
                >
                    <div style={slidesContainerOverflowStyles}>
                        <div style={getSlidesContainerStylesWithWidth()}>
                            {slides.map((_, slideIndex) => (
                                <div
                                    key={slideIndex}
                                    style={getSlideStylesWithBackground(
                                        slideIndex
                                    )}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={dotsContainerStyles}>
                    {slides.map((_, index) => (
                            <div
                                key={index}
                                style={dotStyle(currentIndex, index)}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
