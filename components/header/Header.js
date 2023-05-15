import style from "./header.module.scss"
import Image from "next/image";
import logo from "@/public/assets/images/logo.svg"
import {useEffect, useState} from "react";
import { Link } from "react-scroll";
import OutsideClickHandler from "react-outside-click-handler";
import Modal from "@/components/modal/Modal";

export default function Header() {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [scroll, setScroll] = useState(false);
    const dropDownOpenFun = () => {
        setIsOpenDropDown(!isOpenDropDown)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpenModal]);
    return(
        <>
            {isOpenModal === true && <Modal closeModal={()=>setIsOpenModal(false)}/> }
            <header id="header" className={`${style.header_wrapper} ${scroll ? `${style.active}` : ""}`}>
            <div className="container flex justify-between items-center">
                <Link href="/" className={style.logo}><Image src={logo} alt="logo"/></Link>
                <div className="ml-auto">
                    <OutsideClickHandler
                        onOutsideClick={() => {
                            setIsOpenDropDown(false);
                        }}
                    >
                        <button
                            className={`ml-auto ${style.menu_button} ${isOpenDropDown ? `${style.active}` : ""}`}
                            onClick={()=>dropDownOpenFun()}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className={`ml-auto header_navigation ${style.header_navigation} ${isOpenDropDown ? `${style.menu_show}` : ""}`}>
                            <ul className="list-none flex items-center">
                                <li>
                                    <Link onClick={()=>
                                            {
                                                setIsOpenDropDown(false)
                                            }
                                        } to="game" activeClass="active" spy={true} smooth={true} offset={10} duration={500}>Game
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        onClick={()=>
                                        {
                                            setIsOpenDropDown(false)
                                        }
                                        }
                                        to="marketplace" activeClass="active" spy={true} smooth={true} offset={10} duration={500}>Marketplace
                                    </Link>
                                </li>
                                <li><Link onClick={()=>
                                {
                                    setIsOpenDropDown(false)
                                }
                                } to="roadmap" activeClass="active" spy={true} smooth={true} offset={10} duration={500}>Road Map</Link></li>
                                <li><Link onClick={()=>
                                {
                                    setIsOpenDropDown(false)
                                }
                                } to="audit" activeClass="active" spy={true} smooth={true} offset={10} duration={500}>Audit</Link></li>
                                {/*<li><Link onClick={()=> setIsOpenDropDown(false)} activeClass="active" smooth spy offset={0} to="team">Team</Link></li>*/}
                                <li>
                                    <button
                                        onClick={()=>
                                            {
                                                setIsOpenDropDown(false);
                                                setIsOpenModal(true)
                                            }
                                        }
                                        className={style.header_btn}
                                    >
                                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                                        Let's Partner
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </OutsideClickHandler>
                </div>
            </div>
        </header>
        </>
    )
}