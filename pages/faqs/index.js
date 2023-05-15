import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg";
import {useState} from "react";
import Introduction from "@/pages/faqs/introduction";
import PlayToEarn from "@/pages/faqs/PlayToEarn";
import TokenUtilities from "@/pages/faqs/TokenUtilities";
import GameplayInformation from "@/pages/faqs/GameplayInformation";
import SupportTeam from "@/pages/faqs/SupportTeam";

export default function Faqs() {
    const [tabs, setTabs] = useState(0);
    const tabSidebar = [
        {
            "list" : [
                "Introduction",
                "Play-to-Earn",
                "Token Utilities",
                "Gameplay Information",
                "Support Team"
            ]
        }
    ]

    return(
        <>
            <div className="faq-wrapper">
                <span className="transparent-layer"></span>
                <Link href="/" className="privacy-logo">
                    <Image src={logo} alt="logo"/>
                </Link>
                <div className="container">
                    <div className="main-title">
                        <h2>FREQUENTLY ASKED <span>QUESTIONS</span></h2>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <p>Welcome to Hyper League's FAQs! Here you'll find everything you need to know about our hover racing game’s economics, gameplay and tokens. Click through the following sections to learn more.</p>
                    </div>
                    <div className="faq-accordion-wrap flex">
                        <div className="sidebar">
                            <ul className="list-none">
                                {
                                    tabSidebar.map(({list},index)=>{
                                        return (
                                            <>
                                                {
                                                    list.map((list,index)=>{
                                                        return(
                                                            <li key={`image-${index}`}>
                                                                <button onClick={() => setTabs(index)} className={`${ tabs === index ? `active` : ""}`}>{list}</button>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="right-faq-content">
                            {tabs == "0" && <Introduction/>}
                            {tabs == "1" && <PlayToEarn/>}
                            {tabs == "2" && <TokenUtilities/>}
                            {tabs == "3" && <GameplayInformation/>}
                            {tabs == "4" && <SupportTeam/>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}