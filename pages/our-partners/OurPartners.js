import style from "./ourPartners.module.scss";
import Image from "next/image";
import borderRight from "@/public/assets/images/right-line.svg"
import partner1 from "@/public/assets/images/partner1.png"
import partner2 from "@/public/assets/images/partner2.png"
import partner3 from "@/public/assets/images/partner3.png"
import avatarShape from "@/public/assets/images/shape.png"
import arrows from "@/public/assets/images/right-arrows.svg";
import Link from "next/link";

export default function OurPartners() {
    return(
        <div className={`${style.our_partner} flex direction-column flex-wrap`} id="team">
            <span className="transparent-layer"></span>
            <video className={style.banner_video} loop muted autoPlay>
                <source src="/assets/videos/featured-NFT-video.mp4" type="video/mp4" />
            </video>
            <div className="container">
                <div className={`${style.our_partner_wrap} flex items-center`}>
                    <div className={`main-title ${style.main_title}`}>
                        <h2>
                            <small>Global Partners <Image src={borderRight} alt="borderRight" /></small>
                            Our <span>Partners</span>
                        </h2>
                        <p>We are supported by many partners <br/>that we list on our site.</p>
                    </div>
                    <div className={`flex ${style.partner_list}`}>
                        <ul className="flex items-center flex-wrap justify-center list-none">
                            <li><figure><Image src={partner1} alt="partner1" /></figure></li>
                            <li><figure><Image src={partner2} alt="partner2" /></figure></li>
                            <li><figure><Image src={partner3} alt="partner3" /></figure></li>
                        </ul>
                    </div>
                </div>
                <div className={style.cal_to_action}>
                    <figure>
                        <Image src={avatarShape} alt="avatarShape"/>
                    </figure>
                    <section>
                        <h2>
                            <small>MAKING IT SAFE FOR EVERYONE <Image src={borderRight} alt="borderRight" /></small>
                            RULE OF LAW
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Proin <br/>quis phasellus sem quisque et. </p>
                        <Link href="/" className="simple-btn">Read More <Image src={arrows} alt="arrows" /></Link>
                    </section>
                </div>
            </div>
        </div>
    )
}