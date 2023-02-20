import InfoTable from "@/components/InfoTable/InfoTable";
import StarringTable from "@/components/StarringTable/StarringTable";
import { individualShowDataType } from "@/types";
import React, { useEffect, useState } from "react";
import ShowPgHeader from "@/components/ShowPgHeader/ShowPgHeader";
import ShowProfile from "@/components/ShowProfile/ShowProfile";
import { decode } from "html-entities";

type showPagePropsType = {
  show: individualShowDataType;
};

type contextType = {
  query: {
    id: string;
  };
};

//Gets show data on page load based on id passed through url
export async function getServerSideProps(context: contextType) {
  const res = await fetch(
    `https://api.tvmaze.com/shows/${context.query.id}?embed=cast`
  );
  const data = await res.json();

  return {
    props: { show: data },
  };
}

function page({ show }: showPagePropsType) {
  const img = show.image;
  const title = show.name;
  const rating = show.rating.average;
  const [summary, setSummary] = useState("No show summary found");
  useEffect(() => {
    if (show.summary !== null) {
      const noHE = decode(show.summary);
      setSummary(noHE.replace(/(<([^>]+)>)/gi, ""));
    }
  }, []);

  const info = {
    network: show.network,
    schedule: show.schedule,
    status: show.status,
    genres: show.type,
  };
  const cast = show._embedded.cast;
  const [roundRating, setRoundRating] = useState(0);
  const [pointRating, setPointRating] = useState(0);
  const showProfileInfo = {
    img: img,
    title: title,
    summary: summary,
    rating: rating,
    roundRating: roundRating,
    pointRating: pointRating,
  };

  useEffect(() => {
    //converts rating to nuber /5 and provides round number for * display
    function convertRating() {
      if (rating !== null) {
        setRoundRating(Math.ceil(Number(rating) / 2));
        setPointRating(Number(rating) / 2);
      }
    }
    convertRating();
  });

  return (
    <div className="min-h-screen w-full">
      <ShowPgHeader />
      <div className="md:mt-neg11rem mt-neg32rem text-green sm:px-36 md:gap-5 gap-8 pb-3.5 flex flex-col flex-wrap content-center w-full ">
        <div className="md:flex md:flex-row max-w-screen-lg md:w-full w-screen gap-10 md:bg-transparent bg-black md:pb-0 pb-9 md:mb-0 mb-5">
          <ShowProfile info={showProfileInfo} />
        </div>
        <div className="md:w-full w-11/12 md:flex md:flex-row md:justify-between max-w-screen-lg md:px-0 px-5 flex flex-col gap-5 content-center md:py-0 py-8">
          <InfoTable info={info} />
          <StarringTable cast={cast} />
        </div>
      </div>
    </div>
  );
}

export default page;
