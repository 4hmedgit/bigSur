import Hero from "./components/hero/hero";
import Card from "./components/sharedComponents/card";
import blockChainIcon from "../public/icons/blockChain.svg";
import computeIcon from "../public/icons/compute.svg";
import privacyIcon from "../public/icons/privacy.svg";
import storageIcon from "../public/icons/storage.svg";
import blockChainIntegrationIcon from "../public/icons/blockChainIntegration.svg";
import lightingFastTransactionsIcon from "../public/icons/lightingFastTransactions.svg";
import bigSurCloudIcon from "../public/icons/bigSurCloud.svg";
import distributedIcon from "../public/icons/distributed.svg";
import encryptedIcon from "../public/icons/encrypted.svg";
import decentralizedIcon from "../public/icons/decentralized.svg";
import Roadmap from "./components/Roadmap/roadMap";

export default function Home() {
  return (
    <main >
      <Hero/>
      <div className="container max-w-screen-xl mx-auto xl:px-44 lg:px-10 md:px-20  ">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 px-6">
          <Card
            icon={blockChainIcon}
            heading={"Blockchain"}
            bodyText={
              "BigSur Cloud’s unique layer 1 architecture enables developers to build and deploy high-performance decentralized applications with ease, without compromising on security or scalability. Our unique sharding architecture enables linear scalability, allowing the network to handle thousands of transactions per second without compromising on performance."
            }
          />
          <Card
            icon={computeIcon}
            heading={"Storage"}
            bodyText={
              "BigSur Cloud can be integrated with existing enterprise infrastructures for a distributed storage layer to establish immutable and transparent records of transactions and interactions within your IoT ecosystem. Our network lets you store anything from files to songs, ensuring optimal performance and cost-effectiveness.1"
            }
          />
          <Card
            icon={privacyIcon}
            heading={"Privacy"}
            bodyText={
              "Using a DeCC framework, our network ensures that sensitive data processed by IoT devices remains confidential and secure. Through decentralized computation and encryption techniques, we’re able to safeguard data privacy without compromising on performance or scalability."
            }
          />
          <Card
            icon={storageIcon}
            heading={"Storage"}
            bodyText={
              "Our encryption protocol goes beyond conventional methods by implementing Fully Harmonic Encryption (FHE), a state-of-the-art cryptographic technique that enables computations on encrypted data."
            }
          />
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto xl:px-44 lg:px-10 md:px-20 mt-20   ">
        <h1 className="text-center text-[48px] font-bold leading-[64px] py-16">
          Why Big Sur?
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6 px-6">
          <Card
            icon={blockChainIntegrationIcon}
            heading={"Blockchain Integration"}
            headingSize={'24px'}
            headingColor="#26BE69"
            bodyText={
              "Running on our native Layer 1 technology, we’re able to establish immutable and transparent records of transactions and interactions within your IoT ecosystem."
            }
          />
          <Card
            icon={lightingFastTransactionsIcon}
            heading={"Lightning Fast Transactions"}
            headingSize={'24px'}
            headingColor="#26BE69"
            bodyText={"A scalable network limited only by hardware"}
          />
          <Card
            icon={bigSurCloudIcon}
            headingSize={'24px'}
            headingColor="#26BE69"
            heading={"BigSur Cloud"}
            bodyText={
              "Our network lets you store anything from files to songs, ensuring optimal performance and cost-effectiveness."
            }
          />
          <Card
            icon={distributedIcon}
            headingSize={'24px'}
            headingColor="#26BE69"
            heading={"Decentralized Confidential Computing (DeCC)"}
            bodyText={
              "Using a DeCC framework, we’re able to ensure that sensitive data processed by IoT devices remains confidential and secure."
            }
          />
          <Card
            icon={encryptedIcon}
            headingSize='24px'
            headingColor="#26BE69"
            heading={"Fully Harmonic Encryption"}
            bodyText={
              "Our encryption protocol goes beyond conventional methods by implementing Fully Harmonic Encryption (FHE), a state-of-the-art cryptographic technique that enables computations on encrypted data."
            }
          />
          <Card
            icon={decentralizedIcon}
            headingSize={'24px'}
            headingColor="#26BE69"
            heading={"Truly Decentralized"}
            bodyText={
              "Our leaderless proof-of-stake architecture ensures there is no single point of failure, making BigSur a truly decentralized technology accessible to the masses"
            }
          />
        </div>
      </div>
      <Roadmap/>
    </main>
  )
}
