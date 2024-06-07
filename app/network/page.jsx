import Image from "next/image";
import React from "react";
import Card from "../components/sharedComponents/card";
import blockChainIcon from "../../public/icons/blockChain.svg";
import computeIcon from "../../public/icons/compute.svg";
import privacyIcon from "../../public/icons/privacy.svg";
import storageIcon from "../../public/icons/storage.svg";
import networkHeroImage from '../../public/networkHero.svg'
import Button from "../components/sharedComponents/button";
import Herobody from "../components/hero/heroBody";

function NetworkPage() {
  return (
    <main>
      <div className="max-w-screen-xl mx-auto xl:px-44 lg:px-10 md:px-20 sm:mx-6 xs:mx-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8 py-20 sm:py-10 xs:py-6 items-center lg:justify-items-end md:justify-items-end sm:justify-items-center xs:justify-items-center">
          <div className="text-center lg:text-left">
            <h1 className="lg:text-[28px] md:text-[28px] sm:text-[24px] xs:text-[18px] text-left  lg:leading-[48px] md:leading-[48px] sm:leading-[28px] font-normal">
              BigSur&apos;s DEPIN Network leads in IoT and Industrial Security,
              providing advanced solutions that leverage blockchain technology,
              Decentralized Confidential Computing (DeCC), and Fully Harmonic
              Encryption.
            </h1>
          </div>
          <div className="text-center">
            <Image src={networkHeroImage} alt="" className="max-w-full" />
          </div>
        </div>
        <div className="absolute top-20 left-[-5%] lg:p-40 md:p-40 sm:p-20 xs:p-20 bg-green-500 rounded-full opacity-20 z-10 transform translate-x-1/4 translate-y-[-1/4] blur-2xl"></div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6  mt-20">
          <Card
            icon={blockChainIcon}
            heading={"Blockchain"}
            bodyText={
              "Guided by mathematics and enabled by cutting-edge computer science, BigSur’s unique layer 1 architecture enables developers to build and deploy high-performance decentralized applications with ease, without compromising on security or scalability. Because the smart contract language is based on rho calculus, a reflective extension of the Pi Calculus formalism, the integrity and correctness of smart contracts is ensured, mitigating the risk of vulnerabilities and exploits. BigSur network's unique sharding architecture enables linear scalability, allowing the network to handle thousands of transactions per second without compromising on performance."
            }
          />
          <Card
            icon={storageIcon}
            heading={"Storage"}
            bodyText={
              "Harness the power of data in previously unimaginable ways with BigSur Cloud. BigSur Cloud can be integrated with existing enterprise infrastructures for a distributed storage layer to establish immutable and transparent records of transactions and interactions within your IoT ecosystem. By utilizing distributed ledger technology, we enhance data integrity and provide a decentralized architecture that is resilient to cyber attacks and tampering. BigSur Cloud lets you store anything from files to songs. BigSur Cloud lets you store more for less."
            }
          />
          <Card
            icon={computeIcon}
            heading={"Compute"}
            bodyText={
              "Running on our native Layer 1 technology, we’re able to establish immutable and transparent records of transactions and interactions within your IoT ecosystem. By utilizing distributed ledger technology, we enhance data integrity and provide a decentralized architecture that is resilient to cyber-attacks and tampering. BigSur network is able to handle the full data set online and subject it to consensus, privacy and security. BigSur has a streamlined and secure compilation process, ensuring optimal performance and cost-effectiveness. You can deploy your applications effortlessly and efficiently, knowing that your work is safeguarded by top-tier security measures. The BigSur network has unique data loading and search capabilities, opening up a new realm of possibilities for developers and enterprises. Using a DeCC framework, we’re able to ensure that sensitive data processed by IoT devices remains confidential and secure. Through decentralized computation and encryption techniques, we’re able to safeguard data privacy without compromising on performance or scalability."
            }
          />
          <Card
            icon={privacyIcon}
            heading={"Privacy"}
            bodyText={
              "Our encryption protocol goes beyond conventional methods by implementing Fully Harmonic Encryption (FHE), a state-of-the-art cryptographic technique that enables computations on encrypted data. With FHE, organizations can perform complex analytics and computations on sensitive data without exposing it to potential adversaries. This ground-breaking approach ensures end-to-end security while preserving data utility and accessibility. By leveraging our native layer 1 network, DeCC, and Fully Harmonic Encryption, our Privacy-enhancing technologies will bolster your security and fortify defences against evolving cyber threats. BigSur prioritize the confidentiality of your data through robust encryption and decentralized computing, ensuring that sensitive information remains shielded from unauthorized access and exploitation."
            }
          />
        </div>
        <div className="w-full flex items-center justify-center py-14">
          <Button text={"Explore Our Whitepaper Here"} />
        </div>
        <Herobody />
      </div>
    </main>
  );
}

export default NetworkPage;
