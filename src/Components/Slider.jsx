
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Banner from "./Banner"


const Slider = () => {
 

 
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 1000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )
  



  return (
    <>
      <div ref={sliderRef} className="keen-slider max-w-screen-xl mx-auto">
        <div className="keen-slider__slide number-slide1">
          <Banner src={"https://images2.imgbox.com/56/9a/vpPVGkmk_o.jpg"}></Banner>
        </div>
        <div className="keen-slider__slide number-slide2">
          <Banner src={"https://images2.imgbox.com/38/d2/JTcDjQfG_o.jpg"}></Banner>
          </div>
      
      </div>
    </>
  )
}

export default Slider