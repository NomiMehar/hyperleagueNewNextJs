import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";
import Link from "next/link";

export default function SupportTeam() {
    return(
        <>
            <h2 className="faq-title">Hyper League Support Team</h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Where can I find help?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            You can connect with us on our social media links. Our support team is 24/7 available to listen to your queries. <Link href="https://linktr.ee/hyperleagueio" target="_blank">https://linktr.ee/hyperleagueio</Link>
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}