import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function GameplayInformation() {
    return(
        <>
            <h2 className="faq-title">Hyper League Gameplay Information</h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are my digital assets in Hyper League? / What are NFTs in Hyper League?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Your in-game vehicles and weapons are your NFTs within the Hyper League universe.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is Hyper League Avatar?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            A Hyper League Avatar is an NFT that represents your unique identity in the Hyper League ecosystem. This avatar will be your in-game asset that you own and can be tradeable.
                        </p>
                        <p>You can get a Hyper League Avatar on our NFT marketplace.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are Hover Vehicles?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            It is significant to note that every in-game hover vehicle is a non-fungible token. These are the assets that are minted on the blockchain, and can be used both in the game and as an independent asset.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are Game Modes in Hyper League?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League has two main game modes, the one is PvP where racers can compete against other players around the globe while the other is PvE that allow players to compete against AI controlled environments.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are racing tracks in Hyper League?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League currently features two main Racing Tracks and their NFTs, so players will have the opportunity to compete on different tracks. These tracks include:
                        </p>
                        <p>Drag Race: Drag race is a one way race with smooth path</p>
                        <p>Circuit Race: Circuit race is a circle race with different racing tracks within the circuit</p>
                        <p>More opportunities for racing lovers will be coming up with the passage of time.</p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What are Hyper League’s Racing tournaments?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League offers exciting and thrilling daily, weekly, and monthly tournaments to provide more earning facilities to the players.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}