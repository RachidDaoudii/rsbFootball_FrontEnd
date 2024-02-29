// import BlogData from "@/components/Blog/blogData";
// import BlogItem from "@/components/Blog/BlogItem";
// import { Metadata } from "next";
// import Header from "@/components/Header/2";
// export const metadata: Metadata = {
//   title: "Blog Page - Solid SaaS Boilerplate",
//   description: "This is Blog page for Solid Pro",
//   // other metadata
// };

// const BlogPage = () => {

//   return (
//     <>
//       {/* <!-- ===== Blog Grid Start ===== --> */}
//       <Header />
//       <section className="pb-20 lg:py-25 xl:py-30">
//         <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
//           <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
//             {BlogData.map((post, key) => (
//               <BlogItem key={key} blog={post} />
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* <!-- ===== Blog Grid End ===== --> */}
//     </>
//   );
// };

// export default BlogPage;

import type { NextPage } from "next";

const LigthMode: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-start justify-start text-left text-xl text-gray1-100 font-text-sm-medium">
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-[30px] px-0 gap-[50px_0px]"></div>
      <div className="w-[1440px] bg-white hidden flex-col items-center justify-start py-24 px-0 box-border text-center text-base text-primary-600">
        <div className="w-[1280px] flex flex-col items-center justify-start py-0 px-8 box-border">
          <div className="self-stretch flex flex-col items-center justify-start gap-[40px_0px]">
            <div className="w-[960px] flex flex-col items-center justify-start gap-[24px_0px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                <div className="self-stretch relative leading-[24px] font-semibold">
                  Our blog
                </div>
                <div className="self-stretch relative text-29xl tracking-[-0.02em] leading-[60px] font-semibold text-gray-900">
                  Stories and interviews
                </div>
              </div>
              <div className="w-[768px] relative text-xl leading-[30px] text-gray-500 inline-block">
                Subscribe to learn about new product features, the latest in
                technology, solutions, and updates.
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0px_16px] text-left text-sm text-gray-700">
              <div className="self-stretch w-[360px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px_0px]">
                    <div className="w-9 relative leading-[20px] font-medium hidden">
                      Email
                    </div>
                    <div className="self-stretch rounded-lg bg-white shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-start py-3 pr-3.5 pl-4 gap-[0px_8px] text-base text-gray-500 border-[1px] border-solid border-gray-300">
                      <div className="flex-1 flex flex-row items-center justify-start gap-[0px_8px]">
                        <img
                          className="w-5 relative h-5 overflow-hidden shrink-0 hidden"
                          alt=""
                          src="https://www.imf.org/-/media/Images/IMF/News/Blogs/2022/blog041922-gfsr-chp1.ashx?h=312&w=570&la=fr"
                        />
                        <div className="flex-1 relative leading-[24px]">
                          Enter your email
                        </div>
                      </div>
                      <img
                        className="w-4 relative h-4 hidden"
                        alt=""
                        src="https://www.imf.org/-/media/Images/IMF/News/Blogs/2022/blog041922-gfsr-chp1.ashx?h=312&w=570&la=fr"
                      />
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[20px] text-gray-500">
                    {`We care about your data in our `}
                    <span className="[text-decoration:underline]">
                      privacy policy
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg flex flex-row items-start justify-start text-base text-white">
                <div className="rounded-lg bg-primary-600 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-3 px-5 border-[1px] border-solid border-primary-600">
                  <div className="relative leading-[24px] font-medium">
                    Subscribe
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] bg-white overflow-hidden flex flex-col items-center justify-start text-5xl">
        <div className="self-stretch bg-white flex flex-col items-center justify-start py-[30px] px-0">
          <div className="w-[1280px] flex flex-col items-start justify-start py-0 px-8 box-border gap-[32px_0px]">
            <div className="self-stretch relative leading-[32px] font-semibold">
              Recent blog posts
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_32px] text-sm text-slateblue">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                    <div className="self-stretch relative leading-[20px] font-semibold">
                      Olivia Rhye • 1 Jan 2023
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                      <div className="flex-1 relative leading-[32px] font-semibold">
                        UX review presentations
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/arrowupright.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center">
                    <div className="flex flex-row items-start justify-start mix-blend-multiply">
                      <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <div className="relative leading-[20px] font-medium">
                          Design
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                      <div className="rounded-2xl bg-aliceblue-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <div className="relative leading-[20px] font-medium">
                          Research
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                      <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <div className="relative leading-[20px] font-medium">
                          Presentation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-center gap-[32px_0px]">
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_24px]">
                  <img
                    className="w-80 relative h-[200px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                      <div className="self-stretch relative leading-[20px] font-semibold">
                        Phoenix Baker • 1 Jan 2023
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] text-lg text-gray1-100">
                        <div className="self-stretch relative leading-[28px] font-semibold">
                          Migrating to Linear 101
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          Linear helps streamline software projects, sprints,
                          tasks, and bug tracking. Here’s how to get...
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center text-steelblue">
                      <div className="flex flex-row items-start justify-start mix-blend-multiply">
                        <div className="rounded-2xl bg-aliceblue-100 flex flex-row items-center justify-center py-0.5 px-2.5">
                          <div className="relative leading-[20px] font-medium">
                            Design
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                        <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                          <div className="relative leading-[20px] font-medium">
                            Research
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[0px_24px]">
                  <img
                    className="w-80 relative h-[200px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/image@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                      <div className="self-stretch relative leading-[20px] font-semibold">
                        Lana Steiner • 1 Jan 2023
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px] text-lg text-gray1-100">
                        <div className="self-stretch relative leading-[28px] font-semibold">
                          Building your API Stack
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          The rise of RESTful APIs has been met by a rise in
                          tools for creating, testing, and manag...
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center text-seagreen">
                      <div className="flex flex-row items-start justify-start mix-blend-multiply">
                        <div className="rounded-2xl bg-honeydew flex flex-row items-center justify-center py-0.5 px-2.5">
                          <div className="relative leading-[20px] font-medium">
                            Design
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                        <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                          <div className="relative leading-[20px] font-medium">
                            Research
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-center justify-start py-[30px] px-0 text-sm text-slateblue">
          <div className="w-[1280px] flex flex-col items-start justify-start py-0 px-8 box-border">
            <div className="self-stretch flex flex-row items-start justify-start">
              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0px_32px]">
                <img
                  className="flex-1 relative max-w-full overflow-hidden h-[246px] object-cover"
                  alt=""
                  src="/image@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                    <div className="self-stretch relative leading-[20px] font-semibold">
                      Olivia Rhye • 1 Jan 2023
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                      <div className="flex-1 relative leading-[32px] font-semibold">
                        Grid system for better Design User Interface
                      </div>
                      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/arrowupright.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                      A grid system is a design tool used to arrange content on
                      a webpage. It is a series of vertical and horizontal lines
                      that create a matrix of intersecting points, which can be
                      used to align and organize page elements. Grid systems are
                      used to create a consistent look and feel across a
                      website, and can help to make the layout more visually
                      appealing and easier to navigate.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center">
                    <div className="flex flex-row items-start justify-start mix-blend-multiply">
                      <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <div className="relative leading-[20px] font-medium">
                          Design
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                      <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                        <div className="relative leading-[20px] font-medium">
                          Interface
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-white flex flex-col items-center justify-start py-[30px] px-0">
          <div className="w-[1280px] flex flex-col items-start justify-start py-0 px-8 box-border gap-[30px_0px]">
            <div className="w-[1216px] flex flex-col items-start justify-start gap-[32px_0px]">
              <div className="self-stretch relative leading-[32px] font-semibold">
                All blog posts
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[48px_0px] text-sm text-slateblue">
                <div className="self-stretch flex flex-row items-start justify-center gap-[0px_32px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                        <div className="self-stretch relative leading-[20px] font-semibold">
                          Alec Whitten • 1 Jan 2023
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                          <div className="flex-1 relative leading-[32px] font-semibold">
                            Bill Walsh leadership lessons
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/arrowupright.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          Like to know the secrets of transforming a 2-14 team
                          into a 3x Super Bowl winning Dynasty?
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center">
                        <div className="flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Leadership
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkslateblue">
                          <div className="rounded-2xl bg-ghostwhite-100 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Management
                            </div>
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                        <div className="self-stretch relative leading-[20px] font-semibold">
                          Demi WIlkinson • 1 Jan 2023
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                          <div className="flex-1 relative leading-[32px] font-semibold">
                            PM mental models
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/arrowupright.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          Mental models are simple expressions of complex
                          processes or relationships.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center text-steelblue">
                        <div className="flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-aliceblue-100 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Product
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                          <div className="rounded-2xl bg-aliceblue-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Research
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-firebrick">
                          <div className="rounded-2xl bg-seashell flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Frameworks
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                        <div className="self-stretch relative leading-[20px] font-semibold">
                          Candice Wu • 1 Jan 2023
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                          <div className="flex-1 relative leading-[32px] font-semibold">
                            What is Wireframing?
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/arrowupright.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          Introduction to Wireframing and its Principles. Learn
                          from the best in the industry.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center">
                        <div className="flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Design
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                          <div className="rounded-2xl bg-aliceblue-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Research
                            </div>
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[0px_32px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                        <div className="self-stretch relative leading-[20px] font-semibold">
                          Natali Craig • 1 Jan 2023
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                          <div className="flex-1 relative leading-[32px] font-semibold">
                            How collaboration makes us better designers
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/arrowupright.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          Collaboration can make our teams stronger, and our
                          individual designs better.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center">
                        <div className="flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Design
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkblue">
                          <div className="rounded-2xl bg-aliceblue-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Research
                            </div>
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                        <div className="self-stretch relative leading-[20px] font-semibold">
                          Drew Cano • 1 Jan 2023
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                          <div className="flex-1 relative leading-[32px] font-semibold">
                            Our top 10 Javascript frameworks to use
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/arrowupright.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          JavaScript frameworks make development easy with
                          extensive features and functionalities.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center text-seagreen">
                        <div className="flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-honeydew flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Software Development
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Tools
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-crimson">
                          <div className="rounded-2xl bg-lavenderblush flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              SaaS
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px_0px]">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/image@2x.png"
                    />
                    <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[12px_0px]">
                        <div className="self-stretch relative leading-[20px] font-semibold">
                          Orlando Diggs • 1 Jan 2023
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-5xl text-gray1-100">
                          <div className="flex-1 relative leading-[32px] font-semibold">
                            Podcast: Creating a better CX Community
                          </div>
                          <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                            <img
                              className="w-6 relative h-6 overflow-hidden shrink-0"
                              alt=""
                              src="/arrowupright.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch relative text-base leading-[24px] text-gray-500">
                          Starting a community doesn’t need to be complicated,
                          but how do you get started?
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[0px_8px] text-center">
                        <div className="flex flex-row items-start justify-start mix-blend-multiply">
                          <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Podcasts
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start mix-blend-multiply text-darkslateblue">
                          <div className="rounded-2xl bg-ghostwhite-100 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Customer Success
                            </div>
                          </div>
                        </div>
                        <div className="hidden flex-row items-start justify-start mix-blend-multiply text-pink-700">
                          <div className="rounded-2xl bg-pink-50 flex flex-row items-center justify-center py-0.5 px-2.5">
                            <div className="relative leading-[20px] font-medium">
                              Presentation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch box-border h-[62px] flex flex-row items-center justify-between pt-5 px-0 pb-0 text-sm text-gray-500 border-t-[1px] border-solid border-whitesmoke">
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/arrowleft.svg"
                  />
                  <div className="relative leading-[20px] font-medium">
                    Previous
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[0px_2px] text-center">
                <div className="w-10 relative rounded-lg bg-ghostwhite-200 h-10 overflow-hidden shrink-0 text-primary-600">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">1</div>
                  </div>
                </div>
                <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">2</div>
                  </div>
                </div>
                <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">3</div>
                  </div>
                </div>
                <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">
                      ...
                    </div>
                  </div>
                </div>
                <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">8</div>
                  </div>
                </div>
                <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">9</div>
                  </div>
                </div>
                <div className="w-10 relative rounded-lg h-10 overflow-hidden shrink-0">
                  <div className="absolute top-[0px] left-[0px] rounded-lg w-10 h-10 flex flex-row items-center justify-center p-3 box-border">
                    <div className="relative leading-[20px] font-medium">
                      10
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="flex flex-row items-center justify-center gap-[0px_8px]">
                  <div className="relative leading-[20px] font-medium">
                    Next
                  </div>
                  <img
                    className="w-5 relative h-5 overflow-hidden shrink-0"
                    alt=""
                    src="/arrowright.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-white flex flex-col items-center justify-center py-[30px] px-0">
        <div className="w-[1216px] flex flex-row items-start justify-start gap-[0px_14px]">
          <div className="relative leading-[24px]">© 2023</div>
          <div className="flex flex-row items-start justify-start gap-[0px_14px]">
            <div className="relative leading-[24px]">{`Twitter `}</div>
            <div className="relative leading-[24px]">LinkedIn</div>
            <a
              className="relative leading-[24px] text-[inherit] [text-decoration:none]"
              href="mailto:faqihsopyan@gmail.com"
              target="_blank"
            >
              Email
            </a>
            <div className="relative leading-[24px]">RSS feed</div>
            <div className="relative leading-[24px]">Add to Feedly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LigthMode;
