import style from "./gamePlay.module.scss";
import Image from "next/image";
import playBtn from "@/public/assets/images/play-button.svg"
import leftBorders from "@/public/assets/images/borders-left.svg"
import avatar1 from "@/public/assets/images/avatar1.svg"
import poster from "@/public/assets/images/poster.jpg"
import 'node_modules/react-modal-video/scss/modal-video.scss';
import ModalVideo from 'react-modal-video'
import {useState} from "react";

export default function GamePlay() {
    const [isOpen, setOpen] = useState(false)
    return(
        <>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="-R8h9RUv67s" onClose={() => setOpen(false)} />
            <div className={`${style.game_play} flex direction-column flex-wrap`} id="game">
                <span className="transparent-layer"></span>
                <div className="container">
                    <div className={`main-title flex items-end justify-between ${style.main_title}`}>
                        <Image src={leftBorders} alt="leftBorders" />
                        <h2><small>Trailer</small>GAME <span>PLAY</span></h2>
                        <Image src={leftBorders} alt="leftBorders" />
                    </div>
                    <div className={`flex items-center ${style.game_play_extra}`}>
                        <div className={style.video_wrap}>
                            <button className="playbtn" onClick={()=> setOpen(true)}><Image src={playBtn} alt="playBtn"/></button>
                            <video className={style.app_video} loop muted autoPlay poster={poster}>
                                <source src="/assets/videos/gameplay-video.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className={`avatar_wrap ${style.avatar_wrap}`}>
                            <figure>
                                <Image src={avatar1} alt="avatar1"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}