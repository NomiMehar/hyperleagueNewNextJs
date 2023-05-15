import style from "./roadMap.module.scss";
import roadMapList from "./roadMapList.json";
import Image from "next/image";
import leftBorders from "@/public/assets/images/borders-left.svg";
import { Link } from "react-scroll";

export default function RoadMap() {
    return(
        <div className={`${style.road_map} flex direction-column flex-wrap`} id="roadmap">
            <span className="transparent-layer"></span>
            <div className="container">
                <div className="main-title flex items-end justify-between">
                    <Image src={leftBorders} alt="leftBorders" />
                    <h2><small>GOALs</small>ROAD <span>MAP</span></h2>
                    <Image src={leftBorders} alt="leftBorders" />
                </div>
                <div className={`road_map_list ${style.road_map_list}`}>
                    <ul className="list-none flex flex-wrap">
                        {
                            roadMapList.map(({title,listDes},index)=>{
                                return(
                                    <>
                                        <li key={`in-${index}`} id={`active-${index}`}>
                                            <Link activeClass="active" smooth spy offset={-300} to={`active-${index}`}></Link>
                                            <div className={`road_map_content ${style.road_map_content}`}>
                                                <span>{title}</span>
                                                <section>
                                                    <ul className="list-none">
                                                        {
                                                            listDes.map(({listTile,list}, index)=>{
                                                                return(
                                                                    <li key={`ind-${index}`}>
                                                                        <h6>{listTile}</h6>
                                                                        {
                                                                            list.map((list,index)=>{
                                                                                return(
                                                                                    <span key={`sp-${index}`}>{list}</span>
                                                                                )
                                                                            })
                                                                        }
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </section>
                                            </div>
                                            <div className={`road_map_borders ${style.road_map_borders}`}>
                                                <span className={`circle ${style.circle}`}></span>
                                                <span className={`circle_border ${style.circle_border}`}></span>
                                            </div>
                                            <div className={`vertical_border ${style.vertical_border}`}></div>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}