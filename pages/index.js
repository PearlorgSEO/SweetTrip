import React, { useEffect } from "react";
import Head from "next/head";
<meta name="google-site-verification" content="fcUOmzceSLsyc6xVf1nSrjrbYtA5zj-luczBmLL9ffE" />
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { getSectionHeaderData } from "@/pages/api/common/sectionHeader";
import { getAboutUsRecordData } from "@/pages/api/common/aboutUsRecord";
import { getGoogleReviewsData } from "./api/common/googleReviews";
import { getRentalVehicleData } from "./api/common/rentalVehicle";
import { getPromoData } from "./api/common/promo";
import { getPeopleLikeData } from "./api/home/peopleLike";
import SectionHeader from "@/pages/components/common/sectionHeader/sectionHeader";
import AboutUsRecord from "@/pages/components/common/aboutUsRecord/aboutUsRecord";
import GoogleReviews from "@/pages/components/common/googleReviews/googleReviews";
import RentalVehicle from "@/pages/components/common/rentalVehicle/rentalVehicle";
import HomeContent from "./components/home/homeContent";
import Promo from "./components/common/promo/promo";
import PeopleLike from "./components/home/peopleLike/peopleLike";
import PopularRoutes from "./components/common/popularRoutes/popularRoutes";
const RentalCommunity = dynamic(
  () => import("./components/common/rentalCommunity/rentalCommunity"),
  { ssr: false }
);

export default function Home() {
  const dispatch = useDispatch();
  const getSectionHeader = useSelector((state) => state.sectionHeader);
  const getAboutUsRecord = useSelector((state) => state.aboutUsRecord);
  const getGoogleReviews = useSelector((state) => state.googleReviews);
  const getRentalVehicle = useSelector((state) => state.rentalVehicle);
  const getPromo = useSelector((state) => state.promo);
  const getPeopleLike = useSelector((state) => state.peopleLike);

  useEffect(() => {
    dispatch(getSectionHeaderData());
    dispatch(getAboutUsRecordData());
    dispatch(getGoogleReviewsData());
    dispatch(getRentalVehicleData());
    dispatch(getPromoData());
    dispatch(getPeopleLikeData());
  }, []);
  const sectionHeader =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].home
      ? getSectionHeader.sectionHeader[0].home
      : getSectionHeader.error;

  const homeData =
    getSectionHeader.status &&
    getSectionHeader.sectionHeader &&
    getSectionHeader.sectionHeader[0].home;

  const promoData =
    getPromo && getPromo.status && getPromo.promo.home
      ? getPromo.promo.home
      : getPromo?.error;

  const vehicleInfo =
    getRentalVehicle && getRentalVehicle.status
      ? getRentalVehicle.rentalVehicle?.home[0].vehicleInfo
      : getRentalVehicle?.error;

  const vehicleTitle =
    getRentalVehicle && getRentalVehicle.status
      ? getRentalVehicle.rentalVehicle?.home[0].vehicleTitle
      : getRentalVehicle?.error;
  return (
    <>
      <Head>
        <title>Top Tour Operator in Varanasi | Sweet Trip India</title>        
        <meta name="description" content="Discover Varanasi with the best tour operator in Varanasi.
        Sweet Trip offers custom tours, local guides, and unforgettable spiritual journeys. Book your trip
        today!" />
        <link rel="canonical" href="https://sweettrip.in/" />
        <meta property="og:title" content="Top Tour Operator in Varanasi | Sweet Trip India" />
        <meta property="og:description" content="Discover Varanasi with the best tour operator in
        Varanasi. Sweet Trip offers custom tours, local guides, and unforgettable spiritual journeys.
        Book your trip today!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sweettrip.in/" />
        <meta property="og:image" content="https://sweettrip.in/images/logo.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Tour Operator in Varanasi | Sweet Trip India" />
        <meta name="twitter:description" content="Discover Varanasi with the best tour operator in
        Varanasi. Sweet Trip offers custom tours, local guides, and unforgettable spiritual journeys.
        Book your trip today!" />
        <meta name="twitter:image" content="https://sweettrip.in/images/logo.svg" />
        <meta
          name="keywords"
          content="Best Cab Service in Varanasi, Varanasi local cab, Varanasi airport cab booking, one-way taxi service in Varanasi contact number, luxury bus on rental, bus booking for marriage, private bus booking, tourist bus booking, mini bus on rent, best places to stay in Varanasi, best hotel in Varanasi for family, hotels for couples in Varanasi, hotels in Ayodhya near Ram Mandir, and hotels near Ram Mandir Ayodhya."
        />
            <script
            type = "application/ld+json"
            dangerouslySetInnerHTML = {
              {
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "WebPage",
                  "name": "Top Tour Operator in Varanasi | Sweet Trip India",
                  "url": "https://sweettrip.in/",
                  "description": "Discover Varanasi with the best tour operator in Varanasi. Sweet Trip offers custom tours, local guides, and unforgettable spiritual journeys.Book your trip today!"
                }),
              }
            } />
      </Head>
      <>
        <SectionHeader
          title={sectionHeader.title}
          para={sectionHeader.para}
          homeData={homeData}
        />
        <RentalVehicle vehicleInfo={vehicleInfo} vehicleTitle={vehicleTitle} />
        <div className="container mx-auto">
          <div className="md:flex-row flex-col justify-center items-center flex">
            <div className="md:w-1/2 w-full pl-4 pr-4">
              <GoogleReviews getGoogleReviews={getGoogleReviews} />
            </div>
            <div className="md:w-1/2 w-full pl-4 pr-4">
              <AboutUsRecord getAboutUsRecord={getAboutUsRecord} />
            </div>
          </div>
        </div>
        <HomeContent />
        <Promo promoData={promoData} />
        <PeopleLike getPeopleLike={getPeopleLike} />
        <RentalCommunity />
        <PopularRoutes />
      </>
    </>
  );
}
