import style from "./featuredNFTs.module.scss";
import featuredList from "./FeaturedList.json";
import Image from "next/image";
import bigBorders from "@/public/assets/images/big-borders.svg"
import eyeIcon from "@/public/assets/images/eyeIcon.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";

export default function FeaturedNFTs() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    },[slider1,slider2]);

    const settingsMain = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.slider-nav'
    };
    const settingsThumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        swipeToSlide: true,
        focusOnSelect: true
    };

    return(
        <div className={`${style.featured_nfts_wrapper} flex direction-column`}>
            <span className="transparent-layer"></span>
            <figure>
                <Image src={bigBorders} alt="bigBorders" />
            </figure>
            <div className={`${style.featured_nfts_text}`}>
                <span className={style.layer}></span>
                <video className={style.slide_bg_video} loop muted autoPlay>
                    <source src="/assets/videos/featured-NFTs-bg.mp4" type="video/mp4" />
                </video>
                <div className="container">
                    <div className="main-title">
                        <h2>
                            <small>NFTs</small>
                            Featured <span>NFTs</span>
                        </h2>
                    </div>
                    <div className={`${style.featured_nfts_slider}`}>
                        <div className={`${style.featured_nfts_left}`}>
                            <Slider
                                {...settingsMain}
                                asNavFor={nav2}
                                ref={slider => (setSlider1(slider))}
                            >
                                {
                                    featuredList.map(({bigSlideImage,slideTime},index)=>{
                                        return(
                                            <div key={`index-${index}`}>
                                                <div className={style.featured_nfts_slider_content}>
                                                    <section className={`big_slide ${style.big_slide}`}>
                                                        <span className="time"><span className="flex direction-column justify-center items-center">{slideTime} <small>price</small></span></span>
                                                        <video className={style.slide_video} loop muted autoPlay>
                                                            <source src={bigSlideImage} type="video/mp4" />
                                                        </video>
                                                    </section>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                        <div className={`featured_nfts_right ${style.featured_nfts_right}`}>
                            <Slider
                                {...settingsThumbs}
                                asNavFor={nav1}
                                ref={slider => (setSlider2(slider))}
                            >
                                {
                                    featuredList.map(({bigSlideImage,smallSlideImage,slideTime,slideViews},index)=>{
                                        return(
                                            <div key={`index-${index}`}>
                                                <div className={style.featured_nfts_slider_content}>
                                                    <section className={`${style.small_slide}`}>
                                                        <figure>
                                                            <Image src={smallSlideImage} alt="smallSlideImage" width={240} height={160}/>
                                                            <figcaption className="flex items-center justify-center">
                                                                <Image src={eyeIcon} alt="eyeIcon"/> {slideViews} Views
                                                            </figcaption>
                                                        </figure>
                                                    </section>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <figure className={style.right_align}>
                <Image src={bigBorders} alt="bigBorders" />
            </figure>
        </div>
    )
}