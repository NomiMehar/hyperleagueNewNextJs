import style from "./exploreMetaverse.module.scss";
import Image from "next/image";
import avatarImage from "@/public/assets/images/avatar2.png"

export default function ExploreMetaverse() {
    return(
        <div className={`${style.explore_metaverse} flex direction-column flex-wrap`} id="marketplace">
            {/*<span className="transparent-layer metaverse"></span>*/}
            <div className={`${style.explore_metaverse_wrap}`}>
                <div className="container">
                    <div className={`flex items-center ${style.game_play_extra}`}>
                        <div className={`avatar_img ${style.avatar_wrap}`}>
                            <video className={style.metaverse_video} loop muted autoPlay>
                                <source src="/assets/videos/avatar.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div className={style.explore_metaverse_content}>
                            <h2>Explore Over AI Powered <span>Metaverse</span></h2>
                            <ul className="list-none">
                                <li>
                                    <h3>Customizable Avatar</h3>
                                    <p>Personalize your avatars in the AI-powered Metaverse with powerful abilities and synergies to win races.</p>
                                </li>
                                <li>
                                    <h3>PLay to earn</h3>
                                    <p>Play and earn by racing and bearing your opponents in intense AI-powered hover races</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}