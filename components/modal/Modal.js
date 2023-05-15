import style from "./modal.module.scss"
import crossIcon from "@/public/assets/images/cross.svg"
import arrows from "@/public/assets/images/right-arrows.svg"
import Image from "next/image";
import {useState} from "react";
import {Link} from "react-scroll";
import OutsideClickHandler from "react-outside-click-handler";

export default function Modal(props) {
    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [subjectValue, setSubjectValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    return(
        <>
            <div className={style.modal_wrapper}>
                <div className={style.modal_dialog}>
                    <div className={style.modal_content}>
                        <OutsideClickHandler
                            onOutsideClick={() => {
                                props.closeModal();
                            }}
                        >
                        <Image className={style.crossIcon} onClick={()=>props.closeModal()} src={crossIcon} alt="crossModal" />
                        <div className={style.modal_body}>
                            <div className={style.partner_form}>
                                <h2>Let’s <span>Partner</span> with us</h2>
                                <ul className="list-none flex flex-wrap">
                                    <li>
                                        <div className={`input-container ${nameValue && 'text_filled'}`}>
                                            <label className={nameValue && 'filled'} htmlFor="name">Name</label>
                                            <input type="text" value={nameValue} onChange={(e)=> setNameValue(e.target.value)} />
                                        </div>
                                    </li>
                                    <li>
                                        <div className={`input-container ${emailValue && 'text_filled'}`}>
                                            <label className={emailValue && 'filled'} htmlFor="email">Email</label>
                                            <input type="text" value={emailValue} onChange={(e)=> setEmailValue(e.target.value)} />
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className={`input-container ${subjectValue && 'text_filled'}`}>
                                            <label className={subjectValue && 'filled'} htmlFor="subject">Subject</label>
                                            <input type="text" value={subjectValue} onChange={(e)=> setSubjectValue(e.target.value)} />
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <div className={`input-container ${messageValue && 'text_filled'}`}>
                                            <label className={messageValue && 'filled'} htmlFor="message">Message</label>
                                            <textarea value={messageValue} onChange={(e)=> setMessageValue(e.target.value)} />
                                        </div>
                                    </li>
                                    <li className="w-100">
                                        <Link href="/" className="simple-btn">EXPLORE <Image src={arrows} alt="arrows" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </OutsideClickHandler>
                    </div>
                </div>
            </div>
        </>
    )
}