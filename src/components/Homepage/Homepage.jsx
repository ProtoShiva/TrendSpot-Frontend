import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import ReactPlayer from "react-player"
import i1 from "../../images/Hero/1.jpg"
import WhatWeeOffer from "../WhatWeeOffer/WhatWeeOffer"
import Stats from "../Stats/Stats"
import Pricing from "../Pricing/Pricing"
import Guarantee from "../Guarantee/Guarantee"
import Faq from "../Faq/Faq"
import Reviews from "../Reviews/Reviews"

const Homepage = () => {
  const [cookies, setCookies] = useCookies()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let count = 0

  const storeData = useSelector((state) => state?.users)
  const { user, loggedInUser } = storeData

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [])

  return (
    <div className="max-w-screen overflow-hidden font-poppins bg-slate-50">
      <section className="sm:mt-6 lg:mt-8 mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex gap-3 lg:flex-justify lg:flex flex-col lg:flex-row">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
              <span className="inline sm:text-7xl text-5xl">Take a look</span>
              <br />
              <span className=" sm:text-7xl text-5xl inline">How you can</span>
              <br />
              <span className=" text-indigo-600 inline sm:text-8xl text-6xl">
                Test Faster!
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-md sm:max-w-xl pr-4 md:mt-5 lg:mx-0">
              Take advantage of our years of experience in the space of
              Ecommerce and online shop construction. We give you a complete
              package to test products in a fast and reliable way, meaning we
              will do the product research and pick out the products that are
              more likely to be winners and create high-quality images,
              creatives, persuasive descriptions, and ad copies that make the
              costumer want to buy.
            </p>

            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              {user ? (
                <div>
                  {" "}
                  <div className="rounded-md shadow">
                    <Link
                      to={"/premiumProducts"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white  bg-blue-700 hover:bg-blue-600 md:py-4 md:text-lg md:px-10"
                    >
                      Premium Products
                    </Link>
                  </div>
                </div>
              ) : (
                <>
                  {" "}
                  <div className="rounded-md shadow">
                    <Link
                      to={"/login"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to={"/productsFree"}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Free Products
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="lg:inset-y-0 lg:right-0 sm:w-[55%] mb-4 mt-6">
            <img
              className="h-56 w-full object-cover rounded-xl shadow-xl sm:h-72 md:h-96 lg:w-full lg:h-full"
              src={i1}
              alt="heroimage"
            />
          </div>
        </div>
      </section>

      {/* video hero section end */}

      {/* components below */}
      <WhatWeeOffer />
      <Stats />
      <Pricing />
      <Guarantee User={user} />
      <Faq />
      <Reviews />
      {/* 
      
      
      
       */}
    </div>
  )
}

export default Homepage
