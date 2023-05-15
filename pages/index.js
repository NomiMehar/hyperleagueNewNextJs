import Head from 'next/head'
import Banner from "@/pages/banner/Banner";
import PoweredModules from "@/pages/powered-modules/PoweredModules";
import GamePlay from "@/pages/game-play/GamePlay";
import ExploreMetaverse from "@/pages/explore-metaverse/ExploreMetaverse";
import FeaturedNFTs from "@/pages/featured-nfts/FeaturedNFTs";
import OurAuditors from "@/pages/our-auditors/OurAuditors";
import RoadMap from "@/pages/road-map/RoadMap";
import OurPartners from "@/pages/our-partners/OurPartners";
import Social from "@/pages/social/Social";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import {useEffect, useState} from "react";
import Image from "next/image";
import style from "@/pages/banner/banner.module.scss";
import poster from "@/public/assets/images/poster.jpg";

export default function Home() {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        window.addEventListener('load', (event) => {
            setLoader(false)
        });
    }, []);
  return (
    <>
      <Head>
        <title>Hyper League</title>
        <meta name="description" content="Hyper League" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        {
            loader === true && (
                <div className="loader-wrapper">
                    <video loop muted autoPlay>
                        <source src="/assets/videos/loader.mp4" type="video/mp4" />
                    </video>
                </div>
            )
        }
      <Header/>
      <Banner/>
      <PoweredModules/>
      <GamePlay/>
      <ExploreMetaverse/>
      <FeaturedNFTs/>
      <OurAuditors/>
      <RoadMap/>
      <OurPartners/>
      <Social/>
      <Footer/>
    </>
  )
}
