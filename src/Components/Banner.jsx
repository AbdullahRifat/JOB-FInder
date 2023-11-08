

const Banner = ({src}) => {
    return (
    <div className="hero min-h-screen" style={{backgroundImage: `url(${src})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
     <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">We Are Providing You The Top Rated Proffessional Jobs Services</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
   </div>
    );
};

export default Banner;