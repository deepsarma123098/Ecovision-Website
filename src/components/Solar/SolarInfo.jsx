import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import sunBackgroundImg from '../../assets/sunBackgroundImg.jpg'

function SolarInfo() {

  const solarInfo = useRef(null);

  useEffect(()=>{
 
    const info = solarInfo.current;

    gsap.to(info, {
      y:100,
      duration:2,
      delay:4,
    })

  })

  return (
    <div ref={solarInfo} className="mt-4 px-4 py-6 sm:px-8 lg:px-16 w-[90%] h-[32vw] max-w-8xl max-h-4xl mx-auto rounded-xl bg-cover bg-center " style= {{backgroundImage:`url(${sunBackgroundImg})`}}>
      {/* <h1 className=" text-start text-white">What is Solar?</h1> */}
      <h1 className="mt-4 font-bold text-medium sm:text-[20vw] md:text-2xl lg:text-3xl text-justify leading-relaxed text-white">
      SOLAR — <br /><br />
      <h2 className="text-white space-y-0">Your Power, Your Planet, Your Future.</h2> 
        
        Solar energy offsets about <strong>0.85 - 1 kg of CO₂ per kWh</strong> compared to coal-based electricity. 
        A <strong>5 kW solar system</strong> produces about <strong>6,000 - 7,000 kWh per year</strong>. 
        CO₂ reduction: <strong>5.1 - 7 metric tons per year</strong>. 
        This is equivalent to planting about <strong>200-300 trees annually</strong>.
      </h1>
    </div>
  );
}

export default SolarInfo;
