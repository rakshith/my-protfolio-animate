import React from "react";
import Image from "next/image";

type Props = {
  containerStyles?: String;
  imgSrc: string;
};

const DevImg = ({ containerStyles, imgSrc }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt="" />
    </div>
  );
};

export default DevImg;
