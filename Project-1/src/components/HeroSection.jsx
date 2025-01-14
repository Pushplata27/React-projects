function HeroSection() {
  return (
    <>
      <main className="flex hero max-w-screen-xl m-auto items-center justify-between h-[calc(100vh-72px)]">
        <div className="hero-content flex gap-x-9 flex-col">
          <h1 className="font-extrabold text-8xl leading-[6rem]">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="font-semibold text-gray-700 max-w-md mb-2">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="flex hero-btn gap-10 text-2xl mb-2">
            <button className="py-2.1 px-4 text-white  bg-rose-600 font-small">
              Shop Now
            </button>
            <button className="py-2.1 px-4 text-gray-700  bg-transparent font-small border-solid border-4 border-gray-600">
              Category
            </button>
          </div>

          <div className="shopping my-5">
            <p className="text-sm">Also Available On</p>
          </div>

          <div className="flex brand-icons gap-4">
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/shoe_image.png" />
        </div>
      </main>
    </>
  );
}

export default HeroSection;
