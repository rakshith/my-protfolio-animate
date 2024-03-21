"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatart: "/reviews/avatar-1.png",
    name: "Richard Thompson",
    job: "Cheif Engineer",
    review: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nostrum eius beatae.`,
  },
  {
    avatart: "/reviews/avatar-2.png",
    name: "Maximillon",
    job: "Staff",
    review: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nostrum eius beatae.`,
  },
  {
    avatart: "/reviews/avatar-3.png",
    name: "Evelyn Anderson",
    job: "Senio Developer",
    review: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nostrum eius beatae.`,
  },
  {
    avatart: "/reviews/avatar-4.png",
    name: "Anderson",
    job: "Manager",
    review: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nostrum eius beatae.`,
  },
  {
    avatart: "/reviews/avatar-5.png",
    name: "Mason",
    job: "CTO",
    review: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nostrum eius beatae.`,
  },
  {
    avatart: "/reviews/avatar-6.png",
    name: "Jhon Doe",
    job: "Game Dev",
    review: `Lorem ipsum dolor sit amet consectetur, 
            adipisicing elit. Nostrum eius beatae.`,
  },
];

const Reviews = () => {
  return (
    <section className="container mx-auto mb-12 xl:mb-32">
      <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
      {/* slider */}
      <Swiper
        className="h-[350px]"
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1400: {
            slidesPerView: 3,
          },
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{ clickable: true }}
      >
        {reviewsData.map((review, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                className="bg-tertiary dark:bg-secondary/40
                p-8 min-h-[300px]
                "
              >
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    <Image src={review.avatart} alt="" width={70} height={70} />
                    <div className="flex flex-col ">
                      <CardTitle>{review.name}</CardTitle>
                      <p>{review.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {review.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Reviews;
