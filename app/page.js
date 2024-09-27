'use client';

import Image from 'next/image';

import Carousel from './components/carousel';
import Navbar from './components/navbar';

const properties = [
  {
    image: '/images/img1.jpg',
    title: 'Luxury Villa 1',
    location: 'Kanjikuzhi, Kottayam',
    plotArea: '9',
    builtArea: '3000',
    rooms: '3',
    link: '/property/1',
  },
  {
    image: '/images/img2.jpg',
    title: 'Modern Home 2',
    location: 'Kanjikuzhi, Kottayam',
    plotArea: '8',
    builtArea: '2800',
    rooms: '4',
    link: '/property/2',
  },
  {
    image: '/images/img3.jpg',
    title: 'Classic Home 1',
    location: 'Kanjikuzhi, Kottayam',
    plotArea: '9',
    builtArea: '3800',
    rooms: '4',
    link: '/property/2',
  },
  {
    image: '/images/img4.jpg',
    title: 'Nested Home 1',
    location: 'Kanjikuzhi, Kottayam',
    plotArea: '6',
    builtArea: '3000',
    rooms: '4',
    link: '/property/2',
  },
];

export default function Home() {
  return (
    < >
      <Navbar />
      <Carousel>
        <div className="h-[700px]">
          <div className="absolute top-1/2 left-32 z-10 max-w-md">
            <h2 className="text-3xl font-bold text-white drop-shadow-md">Live at the Center of Comfort</h2>
            <div className="text-base text-gray-200 mt-2 drop-shadow-md">Redefining comfort and convenience in the heart of Kottayam.</div>
            <div className="mt-4">
              <a
                href="/project"
                target="_self"
                className="inline-block bg-white text-lg font-bold h-14 text-black py-4 px-8"
              >
                Learn More
              </a>
            </div>
          </div>
          <Image
            src="/images/img1.jpg"
            alt="Background"
            layout="fill"
            className='brightness-50'
            objectFit="cover"
            priority
          />
        </div>
        <div className="h-[700px]">
          <Image
            src="/images/img1.jpg"
            alt="Background"
            layout="fill"
            className='brightness-50'
            objectFit="cover"
            priority
          />
        </div>
        <div className="h-[700px]">
          <Image
            src="/images/img2.jpg"
            alt="Background"
            layout="fill"
            className='brightness-50'
            objectFit="cover"
            priority
          />
        </div>
        <div className="h-[700px] brightness-50">
          <Image
            src="/images/img3.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="h-[700px] brightness-50">
          <Image
            src="/images/img4.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </Carousel>
      <div >
        <section class="container mx-auto flex flex-col md:flex-row items-center justify-between p-8">

          <div class="md:w-1/2 w-full text-left">
            <h2 class="text-4xl font-bold mb-4">Building Dreams <br />in the heart of Kottayam</h2>
          </div>


          <div class="md:w-1/2 w-full space-y-6">

            <p class="text-lg leading-relaxed">
              For over a decade, we've been building the dreams of families, offering exceptional craftsmanship and thoughtful planning.
              Located in the serene heart of Kottayam, our homes offer the perfect blend of peaceful living and urban convenience.
              We take pride in creating homes that become the foundation of cherished memories for you and your family.
            </p>


            <div class="grid grid-cols-2 gap-4">

              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600" viewBox="0 0 576 512">
                  <path fill="#74C0FC" d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <span class="text-xl font-semibold">10 Homes</span>
              </div>


              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600" viewBox="0 0 512 512">
                  <path fill="#ee6f2b" d="M343.9 213.4L245.3 312l65.4 65.4c7.9 7.9 11.1 19.4 8.4 30.3s-10.8 19.6-21.5 22.9l-256 80c-11.4 3.5-23.8 .5-32.2-7.9S-2.1 481.8 1.5 470.5l80-256c3.3-10.7 12-18.9 22.9-21.5s22.4 .5 30.3 8.4L200 266.7l98.6-98.6c-14.3-14.6-14.2-38 .3-52.5l95.4-95.4c26.9-26.9 70.5-26.9 97.5 0s26.9 70.5 0 97.5l-95.4 95.4c-14.5 14.5-37.9 14.6-52.5 .3z" />
                </svg>
                <span class="text-xl font-semibold">5 Under Construction</span>
              </div>


              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className='h-10 w-10'>
                  <path fill="#63E6BE" d="M288 48c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 144 40 0 0-72c0-13.3 10.7-24 24-24s24 10.7 24 24l0 72 24 0c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-160 0-96 0c-26.5 0-48-21.5-48-48l0-416zm64 32l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm16 80c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM352 272l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm176-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM512 368l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM224 160c0 6-1 11-2 16c20 14 34 38 34 64c0 45-36 80-80 80l-16 0 0 160c0 18-15 32-32 32c-18 0-32-14-32-32l0-160-16 0c-45 0-80-35-80-80c0-26 13-50 33-64c-1-5-1-10-1-16c0-53 42-96 96-96c53 0 96 43 96 96z" />
                </svg>
                <span class="text-xl font-semibold">1 Acre Built Area</span>
              </div>


              <div class="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600" viewBox="0 0 576 512">
                  <path fill="#1893f2" d="M269.5 69.9c11.1-7.9 25.9-7.9 37 0C329 85.4 356.5 96 384 96c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 149.7 417 160 384 160c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4C42.8 92.6 61 83.5 75.3 71.6c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 85.2 165.1 96 192 96c27.5 0 55-10.6 77.5-26.1zm37 288C329 373.4 356.5 384 384 384c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 437.7 417 448 384 448c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.4 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 373.2 165.1 384 192 384c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0zm0-144C329 229.4 356.5 240 384 240c26.9 0 55.4-10.8 77.4-26.1c0 0 0 0 0 0c11.9-8.5 28.1-7.8 39.2 1.7c14.4 11.9 32.5 21 50.6 25.2c17.2 4 27.9 21.2 23.9 38.4s-21.2 27.9-38.4 23.9c-24.5-5.7-44.9-16.5-58.2-25C449.5 293.7 417 304 384 304c-31.9 0-60.6-9.9-80.4-18.9c-5.8-2.7-11.1-5.3-15.6-7.7c-4.5 2.4-9.7 5.1-15.6 7.7c-19.8 9-48.5 18.9-80.4 18.9c-33 0-65.5-10.3-94.5-25.8c-13.4 8.4-33.7 19.3-58.2 25c-17.2 4-34.4-6.7-38.4-23.9s6.7-34.4 23.9-38.4c18.1-4.2 36.2-13.3 50.6-25.2c11.1-9.5 27.3-10.1 39.2-1.7c0 0 0 0 0 0C136.7 229.2 165.1 240 192 240c27.5 0 55-10.6 77.5-26.1c11.1-7.9 25.9-7.9 37 0z" />
                </svg>
                <span class="text-xl font-semibold">Waterfront</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Image
            src="/images/location_map_banner.png"
            alt="Map"
            objectFit="cover"
            priority
            width={1920}
            height={720}
          />
        </section>
        <section>
          <div className="py-16 bg-slate-300">
            {/* Section Title */}
            <div className="text-right mb-12">
              <h2 className="text-4xl font-bold text-gray-800 me-8">Properties for Sale</h2>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-end px-4">
              {properties.map((property, index) => (
                <div
                  key={index}
                  className="bg-white  overflow-hidden"
                >
                  {/* Property Image */}
                  <img
                    src={property.image}
                    alt={`Property ${index + 1}`}
                    className="w-full h-48 object-cover rounded"
                  />
                  {/* Property Details */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{property.title}</h3>
                    </div>
                    <div className="flex items-center space-x-2 mb-6 text-gray-600">
                      {/* Rooms Icon and Text */}
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6' viewBox="0 0 640 512">
                          <path fill='#ffd43b' d="M32 32c17.7 0 32 14.3 32 32l0 256 224 0 0-160c0-17.7 14.3-32 32-32l224 0c53 0 96 43 96 96l0 224c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-224 0-32 0L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
                        </svg>
                        <span className="ml-2">{property.rooms}</span>
                      </div>
                      {/* Vertical Separator */}
                      <div className="border-l-2 border-gray-300 h-6 mx-4"></div>
                      {/* Rooms Icon and Text */}
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6' viewBox="0 0 512 512">
                          <path fill="#7364aa" d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3L32 256c-17.7 0-32 14.3-32 32s14.3 32 32 32l448 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 256 96 77.3zM32 352l0 16c0 28.4 12.4 54 32 71.6L64 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 256 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-40.4c19.6-17.6 32-43.1 32-71.6l0-16L32 352z" />
                        </svg>
                        <span className="ml-2">{property.rooms}</span>
                      </div>
                      {/* Vertical Separator */}
                      <div className="border-l-2 border-gray-300 h-6 mx-4"></div>
                      {/* Plot Area Icon and Text */}
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6' viewBox="0 0 576 512">
                          <path fill='#74C0FC' d="M384 476.1L192 421.2l0-385.3L384 90.8l0 385.3zm32-1.2l0-386.5L543.1 37.5c15.8-6.3 32.9 5.3 32.9 22.3l0 334.8c0 9.8-6 18.6-15.1 22.3L416 474.8zM15.1 95.1L160 37.2l0 386.5L32.9 474.5C17.1 480.8 0 469.2 0 452.2L0 117.4c0-9.8 6-18.6 15.1-22.3z" />
                        </svg>
                        <span className="ml-2">{property.plotArea} Cent</span>
                      </div>
                      {/* Vertical Separator */}
                      <div className="border-l-2 border-gray-300 h-6 mx-4"></div>
                      {/* Built Area Icon and Text */}
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6' viewBox="0 0 512 512">
                          <path fill='#ff3d3d' d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z" />
                        </svg>
                        <span className="ml-2">{property.builtArea} sq.ft</span>
                      </div>
                    </div>

                    {/* Button */}
                    <a
                      href={property.link}
                      className="inline-block bg-black text-white py-2 px-4 hover:bg-blue-600 transition-colors duration-300"
                    >
                      View Property
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>


      </div>
    </>
  );
}
