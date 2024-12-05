import React from 'react'
import Image from "next/image";

import Card from "./Card"

function Band() {
  return (
<div className="flex flex-wrap bg-[#66A6FA] mx-auto w-[88%] py-8 rounded-[15px] justify-center gap-4">
  <Card />
  <Card />
  <Card />
</div>
  )
}

export default Band