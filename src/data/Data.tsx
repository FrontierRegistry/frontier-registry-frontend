import FrScImage1 from "../assets/images/article4.png";
import FrScImage2 from "../assets/images/article2.jpeg";
import FrScImage3 from "../assets/images/article5.png";
import Resource1 from "../assets/images/resource1.jpeg";

import { MdAccountBalanceWallet } from "react-icons/md";
import { MdScience } from "react-icons/md";
import { MdComputer } from "react-icons/md";
import { MdCampaign } from "react-icons/md";

const FrScData = [
    {
        title:"On-chain Science Publishing",
        imgUrl: FrScImage1,
        content:"On-chain Science Publishing first edition collection. The First 10 will be the o..."
    },
    {
        title:"Divide Chain",
        imgUrl: FrScImage2,
        content:"Experimental web3 platform put in the world to explore new models and concepts f..."
    },
    {
        title:"On-chain Science Publishing",
        imgUrl: FrScImage3,
        content:"REW Racing is the latest Play-to-Earn competitive racing metaverse from the REW ..."
    }
]

const FrSourceData = [
    {
        imgUrl: Resource1,
        content:"Keeping yourself safe when buying NFTsSp..."
    },
    {
        imgUrl: Resource1,
        content:"The beginner’s guide to creating & selli..."
    },
    {
        imgUrl: Resource1,
        content:"7 reasons to sell your NFTsSpace explora..."
    },
    {
        imgUrl: Resource1,
        content:"Good example to start blockchain...."
    }
]

const FrSetupData = [
    {
        title: 'Set up your wallet',
        icon: <MdAccountBalanceWallet />,
        description: 'Once you’ve set up your wallet of choice, connect it to FrontierRegistery by clicking the wallet \
        icon in the top right corner.Learn about the wallets we support.',
        color: 'rgb(24, 103, 182)',
    },
    {
        title: 'Publish Your Research',
        icon: <MdScience />,
        description: 'Click My Research and set up your collection of published papers. You as the author and IP \
        holder retain all copyright. Personalize by adding a description, profile & banner images.',
        color: 'rgb(43, 204, 228)',
    },
    {
        title: 'On-chain Peer Review',
        icon: <MdComputer />,
        description: 'Request on-chain peer reviews from your colleagues and community.  Tipping feature optional. \
        (Reviewers who like your work can leave a tip or readers who appreciate the review can tip the reviewer.)',
        color: 'rgb(24, 103, 182)',
    },
    {
        title: 'IP NFT = Mint as NFT',
        icon: <MdCampaign />,
        description: 'Mint as NFT.  (optional) When your research paper/ scientific or engineering IP is minted as a NFT \
        and posted for sale, this faciliates crowdfunding your further research. It also locks in your research IP on-chain \
        in an immutable, transparent and traceable way.',
        color: 'rgb(43, 204, 228)',
    }
];

export {
    FrScData,
    FrSetupData,
    FrSourceData
}