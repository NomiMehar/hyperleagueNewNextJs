import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

export default function Introduction() {
    return(
        <>
            <h2 className="faq-title">Introduction to Hyper League</h2>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is HyperLeague?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League is a Metaverse hover racing game to launch on BSC- Binance Smart Chain. Players on Hyper League can freely own vehicles, compete and win races to earn within an immersive ecosystem.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What Blockchain is Hyper League built on?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League is built on BSC- Binance Smart Chain.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Is Hyper League free to play?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            No, to race in a Hyper League game you have to buy or rent a vehicle.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the vision behind Hyper League?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Hyper League is the idea of individuals who are looking at revolutionizing the racing world and provide a lot of play to earn opportunities for the precious gaming Community.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the Target Community of Hyper League?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Passionate gaming community is the target of Hyper League P2E hover racing games. This game is specially designed for NFT lovers and racers who are passionate about using their NFTs within the gaming ecosystem.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            How can I access a Hyper League Game?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            You can access Hyper League Play-to-Earn game through web browsers also it has its own mobile version for Android and IOS.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}