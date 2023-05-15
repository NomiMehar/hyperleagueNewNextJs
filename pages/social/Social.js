import style from "./social.module.scss";
import Image from "next/image";
import leftBorders from "@/public/assets/images/borders-left.svg"
import social1 from "@/public/assets/images/medium.svg"
import social2 from "@/public/assets/images/insta.svg"
import social3 from "@/public/assets/images/twitter.svg"
import social4 from "@/public/assets/images/linkedin.svg"
import social5 from "@/public/assets/images/telegram.svg"
import social6 from "@/public/assets/images/discord.svg"
import Link from "next/link";

export default function Social() {
    return(
        <div className={`${style.social_wrap} flex direction-column flex-wrap`}>
            <span className="transparent-layer"></span>
            <div className="container">
                <div className={`main-title flex items-end justify-between ${style.main_title}`}>
                    <Image src={leftBorders} alt="leftBorders" />
                    <h2>Welcome to the <span>Community</span></h2>
                    <Image src={leftBorders} alt="leftBorders" />
                </div>
                <div className={`flex direction-column items-center social_list ${style.social_list}`}>
                    <ul className="list-none flex items-start justify-center">
                        <li>
                            <Link href="https://twitter.com/HyperLeagueIO" target="_blank"><Image src={social3} alt="twitter"/></Link>
                        </li>
                        <li>
                            <Link href="https://t.co/Mx7LZtOJAl" target="_blank"><Image src={social6} alt="discord"/></Link>
                        </li>
                        <li>
                            <Link href="https://t.me/hyperleagueioann" target="_blank"><Image src={social5} alt="telegram"/></Link>
                        </li>
                    </ul>
                    <ul className="list-none flex items-start justify-center">
                        <li>
                            <Link href="https://medium.com/@HyperLeague" target="_blank"><Image src={social1} alt="medium"/></Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com/company/hyperleagueio/" target="_blank"><Image src={social4} alt="linkedin"/></Link>
                        </li>
                    </ul>
                    <ul className="list-none flex items-start justify-center">
                        <li>
                            <Link href="https://www.instagram.com/hyperleagueio/" target="_blank"><Image src={social2} alt="insta"/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}