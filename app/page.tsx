import React from 'react';
import Focal from "../components/Focal";
import Focal1 from "../components/Focal1";
import Band from "../components/Band";
import Title from "../components/Title";
import Special from "../components/Special";
import Status from "../components/Status";
import Blue from "../components/Blue";

export default function Home() {
  return (
    <>
      <Focal />
      <Band />
      <Focal1 />
      <Title 
        mainTitle="Specialities" 
        subTitle="Whatever speciality you need a doctor for, we carry lists of doctors to help out with that" 
      />
      <Special />
      <Status />

      <Title 
        mainTitle="Frequently Ask Question" 
        subTitle="We use only the best quality materials on the market in order to provide the best products to our patients." 
      />

    <Blue/>

    </>
  );
}
