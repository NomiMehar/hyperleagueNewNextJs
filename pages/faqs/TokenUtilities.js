import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function TokenUtilities() {
    return(
        <>
            <h2 className="faq-title">Hyper League Token Utilities</h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is Hyper League Token?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            The utility token of Hyper League game is HYPO that users can utilize to buy in-game assets.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are the utilities of Hyper League Token?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            $HYPO Token can be used for the upgradation of vehicles, purchasing in-game assets, buying fuel or power ups, stake to get better benefits or for NFT transaction fee.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Can I stake the Token?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes, you can. Players will be able to stake only Governance token (HYPO).
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Where and how can I stake HYPO tokens?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Our team is diligently working on this. We will be sharing the updates soon, stay tuned to our community channels.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}