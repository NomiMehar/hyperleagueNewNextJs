import style from "./ourAuditors.module.scss";
import Image from "next/image";
import borderRight from "@/public/assets/images/right-line.svg"
import auditor1 from "@/public/assets/images/auditor1.svg"
import auditor2 from "@/public/assets/images/auditor2.svg"

export default function OurAuditors() {
    return(
        <div className={`${style.our_auditors} flex direction-column flex-wrap`} id="audit">
            <span className="transparent-layer"></span>
            <div className="container flex items-center">
                <div className={`main-title ${style.main_title}`}>
                    <h2>
                        <small>Audit <Image src={borderRight} alt="borderRight" /></small>
                        Our <span>Auditors</span>
                    </h2>
                </div>
                <div className={`flex ${style.auditors_list}`}>
                    <ul className="flex items-center list-none">
                        <li><Image src={auditor1} alt="auditor1" /></li>
                        <li><Image src={auditor2} alt="auditor2" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}