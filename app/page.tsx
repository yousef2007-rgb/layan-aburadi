import Image from "next/image";
import Header from "@/components/header"
import Link from "next/link";
import Facebook from "@/icons/facebook"
import Instagram from "@/icons/instagram"
import Tiktok from "@/icons/tiktok"
import videosData from '@/data/videos.json'

export default function Home() {
  return (
<div className="py-3 flex-col">   
   <Header />
    <div id="aboutme" className="flex lg:flex-row flex-col py-4 font-medium px-6  max-w-[1200px] mx-auto w-screen">
        <article className="flex flex-col flex-1 lg:text-left text-center [&>*]:my-2 pt-10">
            <h2 className="font-bold text-4xl sm:text-5xl uppercase !mb-0w">hi there</h2>
            <h1 className="font-bold text-5xl sm:text-6xl uppercase !mt-0w">i'm <span className="text-primary !capitalize">layan</span></h1>
            <h3 className="font-bold text-2xl sm:text-3xl">Social Media Marketing Specialist </h3>
            <p className="text-xl sm:text-2xl">I craft engaging content to grow brands online.<br/> From compelling visuals to impactful storytelling. <br/>Let’s bring your brand to life! 🚀</p>
            <Link href={"#ammantv"} className="lg:mx-0 mx-auto bg-primary text-xl sm:text-2xl text-center rounded-xl font-bold w-fit px-20 border-2 border-black py-2  capitalize text-white">more</Link>
        </article>
        <div className="flex justify-center my-5 lg:my-0">
            <img src="/main.png" alt="layan aburadi" className="w-fit h-fit" />
        </div>
    </div>
    <div className="bg-secondary text-white">
        <div id="ammantv" className="flex flex-col lg:flex-row py-4 font-medium px-6 justify-between  max-w-[1200px] mx-auto w-screen">
            <article className="flex flex-col text-center lg:text-left lg:max-w-[50%] w-full [&>*]:my-2 pt-10">
                <div className="flex sm:flex-row flex-col  w-fit mx-auto lg:mx-0">
                    <h2 className="font-bold sm:text-5xl text-4xl !my-auto capitalize ">Amman TV</h2>
                    <div className="flex mt-2 sm:mt-0 sm:[&>*]:ml-3 justify-between w-full sm:w-fit max-w-[200px] mx-auto sm:mx-0">
                        <Link  href={"https://www.facebook.com/AmmanTVOfficial/?locale=ar_AR"} target="_blank"><Facebook/></Link> 
                        <Link  href={"https://www.instagram.com/ammantvofficial/?hl=en"} target="_blank"><Instagram/></Link> 
                        <Link  href={"https://www.tiktok.com/@ammantvofficial?lang=en"} target="_blank"><Tiktok/></Link> 
                    </div>
                </div>
                <h3 className="font-bold text-lg sm:text-xl">Social Media Executive May 2022 – present</h3>
                <p className="text-xl sm:text-2xl font-bold lg:max-w-screen lg:mx-0 max-w-[600px] mx-auto [&>*]:text-primary">This role focuses on creating engaging content across Facebook, TikTok, Instagram, and YouTube to boost views and awareness of TV programs. It includes managing <span>Amman TV Kitchen</span> and <span>Good Morning Jordan</span> on social media, growing followers organically, overseeing Facebook Rights Manager, and tracking insights. Staying updated on social media trends is key to optimizing campaigns.</p>
            </article>
        <div className="flex justify-center my-5 lg:my-0">
                <img src="/ammantv.png" alt="layan aburadi" className="w-fit h-fit" />
            </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse py-4 font-medium px-6 justify-between max-w-[1200px] mx-auto w-screen">
            <article className="flex flex-col text-center lg:text-left lg:max-w-[50%] w-full [&>*]:my-2 justify-center">
                <div className="flex sm:flex-row flex-col  w-fit mx-auto lg:mx-0">
                    <h2 className="font-bold sm:text-5xl text-4xl !my-auto capitalize ">ATV Kitchen</h2>
                    <div className="flex mt-2 sm:mt-0 sm:[&>*]:ml-3 justify-between w-full sm:w-fit max-w-[200px] mx-auto sm:mx-0">
                        <Link  href={"https://www.facebook.com/AmmanTVKitchen/"} target="_blank"><Facebook/></Link> 
                        <Link  href={"https://www.instagram.com/ammantvkitchen/?hl=en"} target="_blank"><Instagram/></Link> 
                        <Link  href={"https://www.tiktok.com/discover/amman-tv-kitchen"} target="_blank"><Tiktok/></Link> 
                    </div>
                </div>
                <p className="text-xl sm:text-2xl font-bold lg:max-w-screen lg:mx-0 max-w-[600px] mx-auto [&>*]:text-primary">On Instagram, followers grew from 35K to over <span>150K</span> by adopting a new video style—shorter videos without graphics and a different introduction approach. On TikTok, the account expanded from zero to <span>70K+</span> followers. Facebook saw an increase from 70K followers to <span>170K+</span>.</p>
            </article>
        <div className="flex justify-center my-5 lg:my-0">
                <img src="/ammantvkitchen.png" alt="layan aburadi" className="w-fit h-fit" />
            </div>
        </div>
    </div>

        <div id="art" className="flex flex-col lg:flex-row-reverse py-4 font-medium px-6 justify-between max-w-[1200px] mx-auto w-screen">
            <article className="flex flex-col text-center lg:text-left lg:max-w-[50%] w-full [&>*]:my-2 justify-center">
                    <h2 className="font-bold text-4xl sm:text-5xl capitalize !mb-0w">Arab Radio & TV</h2>
                <h3 className="font-bold text-lg sm:text-xl">  Social Media Specialist & Digital Content Editor</h3>
                <p className="text-xl sm:text-2xl font-bold lg:max-w-screen lg:mx-0 max-w-[600px] mx-auto [&>*]:text-primary">Tracking page growth, writing monthly reports, and publishing news articles for the ART website.
Garnered millions of views by creating compelling, interactive captions suited for the Egyptian audience. Grew organically from <span>500K</span> followers to over <span>1M</span> in less than five months, handling ART content on Facebook Rights Manager</p>
            </article>
        <div className="flex justify-center my-5 lg:my-0">
                <img src="/art.png" alt="layan aburadi" className="w-fit h-fit" />
            </div>
        </div>

    <div id="content" className="bg-secondary text-white">
       {videosData.map((section, index) => (
            <div className="flex flex-col max-w-[1200px] mx-auto px-6 py-6" key={index}>
                <h1 className="font-bold text-4xl text-center capitalize my-6">{section.title}</h1>
                <div className=" flex flex-wrap justify-evenly">
                    {section.videos.map ((video, videoIndex) => (
                        <Link href={video.link} key={videoIndex} className="hover:-translate-y-4 transition-all" target="_blank"><img className="w-fit max-w-[247px] mt-2" src={video["image-url"]} alt={`video-${videoIndex}`}/></Link>
                    ))}
                </div>
            </div>
       ))} 
    </div>
</div>
  );
}
