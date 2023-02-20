import React from "react";
import Image from "next/image";
import { Image as ImageType } from "@/types";

type ShowProfileInfoType = {
  img: null | ImageType;
  title: string;
  summary: string;
  rating: any;
  roundRating: number;
  pointRating: number;
};

type ShowProfilePropsType = {
  info: ShowProfileInfoType;
};

function ShowProfile({ info }: ShowProfilePropsType) {
  const img = info.img;
  const title = info.title;
  const summary = info.summary;
  const rating = info.rating;
  const roundRating = info.roundRating;
  const pointRating = info.pointRating;

  return (
    <>
      {img ? (
        <Image
          src={img.medium}
          alt={title}
          width={128}
          height={192}
          priority
          className="h-48 w-32 border-4 border-green mx-5 md:mx-0"
        />
      ) : (
        <div className="bg-green h-48 w-32 text-black p-3 px-5 md:px-0 mx-5 md:mx-0">
          No image found
        </div>
      )}
      <div className="flex flex-col">
        {rating ? (
          <div data-cy="rating" className="px-5 md:px-0">
            <span className="text-magenta text-l">
              {"*".repeat(roundRating)}
            </span>
            <span className="text-white text-l">
              {"*".repeat(5 - roundRating)}
            </span>{" "}
            {pointRating}/5
          </div>
        ) : (
          <span className="px-5 md:px-0">No rating available</span>
        )}
        <h2 data-cy="title" className="text-3xl text-cyan px-5 md:px-0">
          {title}
        </h2>
        <p className="text-lg px-5 md:px-0">{summary}</p>
      </div>
    </>
  );
}

export default ShowProfile;
