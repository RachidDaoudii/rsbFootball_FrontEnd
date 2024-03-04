import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";
import Header from "@/components/Header/2";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title: "Blog Page - Solid SaaS Boilerplate",
  description: "This is Blog page for Solid Pro",
  // other metadata
};


import type { NextPage } from "next";

const LigthMode: NextPage = () => {
  return (
    <>
     <Header />
    <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
    <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-video"
            href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration"
          >
            <img
              alt="Thumbnail"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/technology">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Technology
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  Architectural Engineering Wonders of the modern era for your
                  Inspiration
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
                  Reinvention often comes in spurts, after a long period of
                  silence. Just as modern architecture recently enjoyed a
                  comeback, brand architecture, a field with well-established
                  principles for decades
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/mario-sanchez">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Mario Sanchez"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
                      src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Mario Sanchez</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 21, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-video"
            href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about"
          >
            <img
              alt="Graphics"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              src="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/lifestyle">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                  Lifestyle
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  5 Effective Brain Recharging Activities No One is Talking
                  About
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/5-effective-brain-recharging-activities-no-one-is-talking-about">
                  No wonder mental health issues are at an all-time high. As my
                  friend John called it, we’re already in the third world war —
                  and the battlegrounds are our heads.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/joshua-wood">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Joshua Wood"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Joshua Wood</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 21, 2022</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/14-architectural-design-ideas-for-spacious-interior"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F12301f301772ed723724302aef7c70c5c1c0151f-4500x8000.jpg%3Frect%3D0%2C1080%2C4500%2C5330%26w%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/design">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Design
                </span>
              </a>
              <a href="/category/lifestyle">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                  Lifestyle
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  14 Architectural Design Ideas for a Spacious Interior
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/14-architectural-design-ideas-for-spacious-interior">
                  It is a cliche philosophical question, but it touches on
                  something fundamental about how humans relate to the world
                  around them.{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/mario-sanchez">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Mario Sanchez"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="https://stablo-template.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F05951a0ec1a6ffc54f615ab160649e92fea982d0-800x764.png%3Frect%3D0%2C0%2C800%2C468%26w%3D800%26auto%3Dformat&w=640&q=75"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Mario Sanchez</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 21, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/every-next-level-of-your-life-will-demand-a-different-you"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2786bf808843b56a0e0feda1c1747cf73673d989-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/lifestyle">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                  Lifestyle
                </span>
              </a>
              <a href="/category/personal-growth">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                  Personal Growth
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/every-next-level-of-your-life-will-demand-a-different-you">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  Every Next Level of Your Life Will Demand a Different You
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/every-next-level-of-your-life-will-demand-a-different-you">
                  That was so fun! I’ve got a new addiction! my athlete friend
                  exclaimed, tired but happy in the car on the way home. “Let’s
                  do it again tomorrow.”
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/mario-sanchez">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Mario Sanchez"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Mario Sanchez</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 20, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/this-bread-pudding-will-give-you-all-the-fall-feels"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fb7d2fa6d0b250bd1e0c601645319db4cde42a01e-3958x5937.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/travel">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-orange-700">
                  Travel
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/this-bread-pudding-will-give-you-all-the-fall-feels">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  This Bread Pudding Will Give You All the Fall Feels
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/this-bread-pudding-will-give-you-all-the-fall-feels">
                  I learned this when I traveled to a remote resort to deliver
                  what was supposed to be a talk for a group of tech investors.
                  It turned out to be something of a “consult” to five
                  ultra-wealthy men.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/erika-oliver">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Erika Oliver"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Erika Oliver</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 19, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/i-moved-across-the-country-and-never-looked-back"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fa5bd8977e7fd82666c00a45948583b1f9912d392-3847x5583.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/travel">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-orange-700">
                  Travel
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/i-moved-across-the-country-and-never-looked-back">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  I Moved Across the Country and Never Looked Back
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/i-moved-across-the-country-and-never-looked-back">
                  I recently went to the mountains with my friends. We were
                  celebrating 50 years of friendship. It was very special. Six
                  of us were to be together spending time in the mountains.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/joshua-wood">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Joshua Wood"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Joshua Wood</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 19, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc366d5116a51d3f1d8b23962e6b7caac7c960f81-7855x5240.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/personal-growth">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                  Personal Growth
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  3 Meaningful Ways to Practice Self-Care as an Introvert
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/3-meaningful-ways-to-practice-self-care-as-an-introvert">
                  While AI has proved superior at complex calculations &amp;
                  predictions, creativity seemed to be the domain that machines
                  can’t take over.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/mario-sanchez">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Mario Sanchez"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Mario Sanchez</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 18, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fe60f8ab265df3c22fdde5469de54d225017b7323-4000x5000.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/personal-growth">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                  Personal Growth
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  The Rise of Artificial Intelligence and the Future of Humans
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/the-rise-of-artificial-intelligence-and-the-future-of-humans">
                  While AI has proved superior at complex calculations &amp;
                  predictions, creativity seemed to be the domain that machines
                  can’t take over.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/joshua-wood">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Joshua Wood"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Joshua Wood</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 18, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F86cb3a2f0e43610371a7184483c5567bd9e6e94f-2400x1600.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/personal-growth">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-emerald-700">
                  Personal Growth
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  10 Simple Practices That Will Help You Get 1% Better Every Day
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day">
                  How do we become better every single day? We develop practices
                  that will help move us incrementally forward. Small steps,
                  taken consistently. This is the path to a good life.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/erika-oliver">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Erika Oliver"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Erika Oliver</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 04, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F279c03681911845947cd044b4ac9e91d7a3a628c-987x1481.png%3Fw%3D987%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/design">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Design
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  Every Artist has to see the Amazing Pictures on the Internet
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/every-artist-has-to-see-the-amazing-pictures-on-the-internet">
                  While AI has proved superior at complex calculations &amp;
                  predictions, creativity seemed to be the domain that machines
                  can’t take over.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/mario-sanchez">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Mario Sanchez"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4a21e3f085ed310d00fbbd294eb2392cde7f9acc-3648x3648.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Mario Sanchez</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">October 02, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/how-technology-evolved-under-the-bright-sun-of-universe"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F123fb8836aaf097b83d4c5e8fde544dd1747af0d-5064x3376.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/technology">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Technology
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/how-technology-evolved-under-the-bright-sun-of-universe">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  How Technology Evolved Under the Bright Sun of Universe
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/how-technology-evolved-under-the-bright-sun-of-universe">
                  The evolution of technology in astronomy and how it has
                  impacted our understanding of the universe. It also gives a
                  brief history of the major figures that the science through
                  their innovations{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/erika-oliver">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Erika Oliver"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Erika Oliver</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">September 30, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/lessons-of-happiness-i-learned-from-a-mountain-village"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/travel">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-orange-700">
                  Travel
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/lessons-of-happiness-i-learned-from-a-mountain-village">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  Lessons Of Happiness I learned from a Mountain Village
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/lessons-of-happiness-i-learned-from-a-mountain-village">
                  I recently went to the mountains with my friends. We were
                  celebrating 50 years of friendship. It was very special. Six
                  of us were to be together spending time in the mountains.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/joshua-wood">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Joshua Wood"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Joshua Wood</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">September 25, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/there-s-nothing-new-about-undermining-women-s-autonomy"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fc8e84acf383034b5b65181b9c4bb97069268d12e-4608x3072.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/lifestyle">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                  Lifestyle
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/there-s-nothing-new-about-undermining-women-s-autonomy">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  There’s Nothing New About Undermining Women’s Autonomy
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/there-s-nothing-new-about-undermining-women-s-autonomy">
                  In2007, the now-defunct San Antonio Independent Christian Film
                  Festival awarded Best of Festival to a documentary called The
                  Monstrous Regiment of Women a film that simultaneously.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/erika-oliver">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Erika Oliver"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Erika Oliver</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">September 23, 2022</time>
            </div>
          </div>
        </div>
      </div>
      <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
          <a
            className="relative block aspect-square"
            href="/post/escape-fantasies-of-the-tech-billionaires"
          >
            <img
              alt="Thumbnail"
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              className="object-cover transition-all"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent"
              }}
              sizes="(max-width: 768px) 30vw, 33vw"
              srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
              src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F35b405aec2066d3172a1e6ec7acb8f5c4136b6d6-2070x1380.png%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
            />
          </a>
        </div>
        <div className="">
          <div>
            <div className="flex gap-3">
              <a href="/category/technology">
                <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                  Technology
                </span>
              </a>
            </div>
            <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
              <a href="/post/escape-fantasies-of-the-tech-billionaires">
                <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                  Escape Fantasies of the Tech Billionaires
                </span>
              </a>
            </h2>
            <div className="hidden">
              <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
                <a href="/post/escape-fantasies-of-the-tech-billionaires">
                  I learned this when I traveled to a remote resort to deliver
                  what was supposed to be a talk for a group of tech investors.
                  It turned out to be something of a “consult” to five
                  ultra-wealthy men.
                </a>
              </p>
            </div>
            <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
              <a href="/author/erika-oliver">
                <div className="flex items-center gap-3">
                  <div className="relative h-5 w-5 flex-shrink-0">
                    <img
                      alt="Erika Oliver"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full object-cover"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        color: "transparent"
                      }}
                      sizes="20px"
                      srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=16&q=75 16w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=32&q=75 32w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=48&q=75 48w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=64&q=75 64w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=96&q=75 96w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=128&q=75 128w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=256&q=75 256w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=384&q=75 384w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=640&q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=750&q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=828&q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1080&q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1200&q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=1920&q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=2048&q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75 3840w"
                      src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F4e20f048a69ac41ab7a6b5f1687f0547379b7469-3648x5472.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </div>
                  <span className="truncate text-sm">Erika Oliver</span>
                </div>
              </a>
              <span className="text-xs text-gray-300 dark:text-gray-600">
                •
              </span>
              <time className="truncate text-sm">September 21, 2022</time>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-10 flex justify-center">
      <a
        className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
        href="/archive"
      >
        <span>View all Posts</span>
      </a>
    </div>
  </div>
  </>
  );
};

export default LigthMode;
