import './Faq.css';

import {Section, Color} from './components/Section/Section';

const FAQ_ENTRIES = [
  {
    title: "WHAT IS PANTHEON NFT?",
    value: "Pantheon NFT is a community building project intended to encourage, empower and support its participants as we all grow and evolve in this ever changing DeFi landscape."
  },
  {
    title: "HOW MANY PANTHEON NFTs WILL THERE BE?",
    value: "We are releasing 11,111 unique NFTs on January 15th.Their scarcity is insured by the Ethereum Blockchain."
  },
  {
    title: "DO YOU HAVE A ROADMAP?",
    value: "Yes, the Roadmap can be seen under the Roadmap section."
  },
  {
    title: "HOW DO I OBTAIN A PANTHEON NFT?",
    value: "The public will be able to mint their Pantheon NFT on our website <a href=\"https://pantheonnft.com\">pantheonnft.com</a> on January 15th, 2022. Members can earn whitelist spots in either our Council WL or our Public WL by actively participating in our community."
  },
  {
    title: "HOW DO I GET A HIGH RESOLUTION VERSION OF MY NFT?",
    value: "Get your token ID from Etherscan (You can find it by looking up your TXN). Once you have your token ID search for the Pantheon NFT smart contract address on Etherscan. Navigate to read the contract and connect your wallet to Etherscan. Now scroll down to token URI and look up your token ID. You will query a string that will show you the URI where your pantheon NFT is hosted. Copy and paste the URI in a new browser tab and you will get your Pantheon NFT metadata in plain text. In the plain text file you will see a URL to see where the high-resolution image is hosted. Copy and paste it into a new browser tab and you will see the high resolution version of your Pantheon NFT."
  },
  {
    title: "WHAT CAN I DO TO AVOID GETTING SCAMMED?",
    value: "Never give your seed phrase to anyone EVER. Never sign any suspicious wallet transactions. Assume anyone who is DMing you is more than likely a scammer and act accordingly. Please repost suspicious activity on our discord report channel."
  },
];

const faqToEntries = () => {
  return FAQ_ENTRIES.map(faq => {
    return (
      <div className="faq-entry">
        <h3>{faq.title}</h3>
        <div dangerouslySetInnerHTML={{__html: faq.value}} />
      </div>
    );
  })
}

const FaqBox = () => {
  return (
    <div className="faq-box">
      <h1>FAQ</h1>
      {faqToEntries()}
    </div>

  );
}

const Faq = () => {
  return (
    <Section color={Color["Cream"]} pad={true}>
      <FaqBox />
    </Section>
  );
}

export default Faq;
