import style from "./banner.module.scss"
import { Link } from "react-scroll";
import poster from "@/public/assets/images/poster.jpg";

export default function Banner() {
    return(
        <div id="banner" className={`${style.banner_wrapper} flex direction-column flex-wrap`}>
            <video className={style.app_banner_video} loop muted autoPlay poster={poster}>
                <source src="/assets/videos/banner-video.mp4" type="video/mp4" />
            </video>
            <div className={`${style.banner_content} flex direction-column justify-center`}>
                {/*<h1>JOIN <span>the race</span> for HYPER LEAGUE</h1>*/}
                {/*<p>Welcome to the world of Hyper league</p>*/}
                {/*<Link href="/" className="simple-btn">EXPLORE <Image src={arrows} alt="arrows" /></Link>*/}
            </div>
            <div className={`${style.banner_bottom_bar}`}>
                <div className="container flex justify-center">
                    <Link className="explore-btn" to="swipe_explore"  activeClass="active" spy={true} smooth={true} offset={10} duration={500}>Swipe to explore</Link>
                    <span>“We believe ownership of digital assets is the future of games.”</span>
                </div>
            </div>
        </div>
    )
}