import React, { useState } from 'react';
import '../styles/carousel.css'; // Import additional styles for smooth transitions

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = React.Children.count(children);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="carousel-slides flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className={`w-full flex-shrink-0 transition-transform duration-700 ease-in-out transform scale-100 hover:scale-105`}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Left/Right Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute z-50 h-16 w-16 left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-90 text-white p-3 rounded-full hover:bg-opacity-100"
      >
        <svg width="24" height="24" className='mx-auto' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.3989 12.3342L5.93029 12.3342C5.83768 12.3342 5.81736 12.3862 5.88286 12.4517L10.3122 16.8826C10.3777 16.9481 10.3573 17 10.2647 17H9.58712C9.48537 16.9928 9.38905 16.9514 9.31382 16.8826L4.54797 12.1174C4.51922 12.0869 4.50322 12.0465 4.50322 12.0045C4.50322 11.9626 4.51922 11.9222 4.54797 11.8916L9.31382 7.11969C9.39168 7.04761 9.49243 7.00524 9.59841 7H10.276C10.3686 7 10.389 7.0542 10.3235 7.11969L5.88286 11.5483C5.81736 11.6138 5.83768 11.668 5.93029 11.668L18.9991 11.668C19.049 11.67 19.0978 11.6835 19.1417 11.7074C19.1855 11.7313 19.2233 11.7649 19.2521 11.8058L19.4779 12.1874C19.5254 12.2642 19.4779 12.3297 19.3966 12.3297" fill="currentColor"></path>
          <path d="M19.3989 12.3342L5.93029 12.3342C5.83768 12.3342 5.81736 12.3862 5.88286 12.4517L10.3122 16.8826C10.3777 16.9481 10.3573 17 10.2647 17H9.58712C9.48537 16.9928 9.38905 16.9514 9.31382 16.8826L4.54797 12.1174C4.51922 12.0869 4.50322 12.0465 4.50322 12.0045C4.50322 11.9626 4.51922 11.9222 4.54797 11.8916L9.31382 7.11969C9.39168 7.04761 9.49243 7.00524 9.59841 7H10.276C10.3686 7 10.389 7.0542 10.3235 7.11969L5.88286 11.5483C5.81736 11.6138 5.83768 11.668 5.93029 11.668L18.9991 11.668C19.049 11.67 19.0978 11.6835 19.1417 11.7074C19.1855 11.7313 19.2233 11.7649 19.2521 11.8058L19.4779 12.1874C19.5254 12.2642 19.4779 12.3297 19.3966 12.3297" stroke="currentColor" stroke-width="0.2"></path>
        </svg>
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute z-50 h-16 w-16 right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-90 text-white p-3 rounded-full hover:bg-opacity-100"
      >
        <svg width="24" className='mx-auto' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.60111 11.6658H18.0697C18.1623 11.6658 18.1826 11.6138 18.1171 11.5483L13.6878 7.11743C13.6223 7.05194 13.6427 7 13.7353 7H14.4129C14.5146 7.00717 14.611 7.04856 14.6862 7.11743L19.452 11.8826C19.4808 11.9131 19.4968 11.9535 19.4968 11.9955C19.4968 12.0374 19.4808 12.0778 19.452 12.1084L14.6862 16.8803C14.6083 16.9524 14.5076 16.9948 14.4016 17H13.724C13.6314 17 13.611 16.9458 13.6765 16.8803L18.1171 12.4517C18.1826 12.3862 18.1623 12.332 18.0697 12.332H5.0009C4.95098 12.33 4.90219 12.3165 4.85832 12.2926C4.81445 12.2687 4.77668 12.2351 4.74792 12.1942L4.52205 11.8126C4.47462 11.7358 4.52205 11.6703 4.60336 11.6703" fill="currentColor"></path>
          <path d="M4.60111 11.6658H18.0697C18.1623 11.6658 18.1826 11.6138 18.1171 11.5483L13.6878 7.11743C13.6223 7.05194 13.6427 7 13.7353 7H14.4129C14.5146 7.00717 14.611 7.04856 14.6862 7.11743L19.452 11.8826C19.4808 11.9131 19.4968 11.9535 19.4968 11.9955C19.4968 12.0374 19.4808 12.0778 19.452 12.1084L14.6862 16.8803C14.6083 16.9524 14.5076 16.9948 14.4016 17H13.724C13.6314 17 13.611 16.9458 13.6765 16.8803L18.1171 12.4517C18.1826 12.3862 18.1623 12.332 18.0697 12.332H5.0009C4.95098 12.33 4.90219 12.3165 4.85832 12.2926C4.81445 12.2687 4.77668 12.2351 4.74792 12.1942L4.52205 11.8126C4.47462 11.7358 4.52205 11.6703 4.60336 11.6703" stroke="currentColor" stroke-width="0.2"></path>
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2 z-50">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
