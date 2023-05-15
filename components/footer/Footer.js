import style from "./footer.module.scss"
import Image from "next/image";
import arrows from "@/public/assets/images/right-arrows.svg";
import { Link } from "react-scroll";
import {useEffect, useState} from "react";

export default function Footer() {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 1000);
        });
    }, []);

    return(
        <footer className={`footer_wrap ${style.footer_wrap}`}>
            <span className="transparent-layer"></span>
            <div className="container">
                <div className={`flex justify-between items-center ${style.footer_form}`}>
                    <h2>Subscribe to our <span>news letter</span> for latest updates</h2>
                    <form action="" className="flex items-center">
                        <input type="text" placeholder="Enter your email here"/>
                        <button type="submit" className="simple-btn">Submit <Image src={arrows} alt="arrows" /></button>
                    </form>
                </div>
                <div className={`flex justify-between items-center ${style.copyright}`}>
                    <h6>Copyright © 2023 Hyper League. All Rights Reserved.</h6>
                    <section>
                        <Link href="/faqs" target="_blank">FAQs</Link>
                        <Link href="/term-and-conditions" target="_blank">Terms & Conditions</Link>
                        <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>
                    </section>
                </div>
            </div>
            <Link className={`back_top ${style.back_top} ${scroll ? `${style.active}` : ""}`} to="banner" spy={true} smooth={true} offset={0} duration={500}><Image src={arrows} alt="arrows" /></Link>
        </footer>
    )
}