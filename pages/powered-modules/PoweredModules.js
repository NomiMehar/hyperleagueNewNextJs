import style from "./poweredModules.module.scss";
import poweredModuleList from "./PoweredModuleList.json"
import Image from "next/image";
import powerImg from "@/public/assets/images/power-ai.png"
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

export default function PoweredModules() {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
    return(
        <div className={`${style.modules_wrapper} flex direction-column flex-wrap`} id="swipe_explore">
            <span className={`circle_wrapper ${style.circle_wrapper}`}></span>
            <span className={`transparent-layer`}></span>
            <video className={style.modules_video} loop muted autoPlay>
                <source src="/assets/videos/powered-module-video.mp4" type="video/mp4" />
            </video>
            <div className={style.modules_title}>
                <div className="container">
                    <span>AI</span>
                    <h2>AI Powered Modules</h2>
                </div>
            </div>
            <div className={`${style.modules_list}`}>
                <div className="container">
                    <div className="flex justify-between items-center">
                        <ul className="list-none flex direction-column">
                            {
                                poweredModuleList.slice(0,3).map(({count,text},index)=>{
                                    return(
                                        <li key={`key-${index}`}>
                                            <span>{count}:</span>
                                            {text}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="list-none flex direction-column">
                            {
                                poweredModuleList.slice(3,6).map(({count,text},index)=>{
                                    return(
                                        <li key={`key-${index}`}>
                                            <span>{count}:</span>
                                            {text}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}