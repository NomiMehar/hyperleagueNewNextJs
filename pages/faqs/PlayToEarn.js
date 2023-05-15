import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function PlayToEarn() {
    return(
        <>
            <h2 className="faq-title">Play-to-Earn Mechanics of Hyper League</h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is Play-to-Earn?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Play-to-Earn refers to a blockchain enabled business model where players can earn tokens through skilled gameplay.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How does Play-to-Earn work within Hyper League?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League allows racers to earn either by winning racing competitions with other players in PvP modes or racing against AI-controlled vehicles within PvE (Player vs Environment) modes.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What can I do within the Hyper League ecosystem?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League allows its racers to own superpower vehicles, and race against each other in different battle modes to earn rewards.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Can I create my own NFTs in the game?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Yes, you can. Players will be able to create NFTs like vehicles, weapons, avatars etc in the game.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}