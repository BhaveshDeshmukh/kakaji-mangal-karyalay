import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Patil",
      event: "Wedding",
      review:
        "Beautiful venue with excellent arrangements. Everything was managed perfectly.",
    },
    {
      name: "Lakshay Agrawal",
      event: "Reception",
      review:
        "Spacious hall, elegant decoration and excellent hospitality. Highly recommended.",
    },
    {
      name: "Om Sharma",
      event: "Haldi Function",
      review:
        "Amazing experience. Decoration and management exceeded our expectations.",
    },
  ];

  return (
    <section className="bg-[#FFF8EE] py-32 px-6">

      <div className="max-w-4xl mx-auto text-center">

        <p className="uppercase tracking-[6px] text-[#B8860B] mb-4">
          Testimonials
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-[#3B1F1F] mb-12">
          What Our Clients Say
        </h2>

        <div className="rounded-[60px] overflow-hidden">

          <Swiper
            modules={[
              Autoplay,
              Pagination,
              Navigation,
            ]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            loop={true}
            speed={800}
          >

            {testimonials.map((testimonial, index) => (

              <SwiperSlide key={index}>

                <div className="bg-white border border-[#E7D2A6] rounded-[60px] p-12 md:p-16 min-h-[420px] flex flex-col justify-center transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">

                  <div className="text-4xl mb-8">
                    ⭐⭐⭐⭐⭐
                  </div>

                  <p className="text-[#4A2C2A] text-xl md:text-2xl leading-10 mb-10 max-w-3xl mx-auto">
                    "{testimonial.review}"
                  </p>

                  <h3 className="text-4xl font-bold text-[#3B1F1F] mb-3">
                    {testimonial.name}
                  </h3>

                  <p className="text-[#B8860B] text-xl">
                    {testimonial.event}
                  </p>

                </div>

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;