"use client";

import React, { FC, useState } from "react";
import { HeadingComponent } from "./utils/heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import FAQ from "./components/FAQ/FAQ";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")
  return (
    <>
      <HeadingComponent />
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={activeItem}
        setRoute={setRoute}
        route={route}
      />
      <Hero />
      <Courses />
      <Reviews />
      <FAQ />
      {/* <Footer /> */}
    </>
  );
};

export default Page;
