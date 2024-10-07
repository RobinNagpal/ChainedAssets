export type TreeNode = {
  type: 'node'
  value: number
  name: string
  icon?: string
  details?: string
  link?: string
  children: Tree[]
}

export type TreeLeaf = {
  type: 'leaf'
  name: string
  value: number
  icon: string
  details: string
  link: string
}

export type Tree = TreeNode | TreeLeaf

export const data: TreeNode = {
  type: 'node',
  name: 'Product Categories',
  value: 0,
  children: [
    {
      type: 'node',
      name: 'Treasuries & Bonds',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Maple Finance',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Maple Finance.png',
          details:
            'It offers institutional lending through uncollateralized loans which are managed by Pool delegates. Lenders can deposit assets to earn competitive interest rates. The borrowers on Maple Finance are only allowed to invest the money they borrow into U.S. Treasury bills and reverse repurchase agreements fully backed by U.S. Treasury bills.',
          link: 'https://maple.finance/',
        },
        {
          type: 'leaf',
          name: 'OpenEden',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Open Eden.avif',
          details:
            'OpenEden offers 24/7, on-chain access to tokenized US Treasury securities for institutional investors seeking low-risk investments. They invest in T-bills with a life span of 3 months. It is the first and only tokenized product to be awarded an A rating from Moody’s Rating Agency.',
          link: 'https://openeden.com/',
        },
        {
          type: 'leaf',
          name: 'Ondo Finance',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Ondo Finance.png',
          details:
            'Ondo tokenizes short term US treasuries and offers it to individual and institutional investors.',
          link: 'https://ondo.finance/',
        },
        {
          type: 'leaf',
          name: 'PV01',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/PV01.jpg',
          details:
            'PV01’s platform offers direct access to the $25 trillion US Treasury bond market through Digital Treasury Bills, which are ERC-20 tokens fully backed by US Treasury bonds. Investors can earn interest on their USDC holdings without needing traditional financial systems. ',
          link: 'https://www.pv0.one/',
        },
        {
          type: 'leaf',
          name: 'Backed',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Backed Finance.jpg',
          details:
            'It allows professional investors to purchase tokenized fixed income bonds and equities. Each token is 1:1 backed by the underlying asset. Backed also provides institutions with a flexible, efficient, and secure tokenization service tailored to their needs.',
          link: 'https://backed.fi/',
        },
        {
          type: 'leaf',
          name: 'Midas',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Midas.jpg',
          details:
            'Midas has a mTBILL product which is backed up by short-dated US Treasury Bills.  The mTBILL token tracks short-dated U.S. Treasury securities 1:1 via an ultra-liquid BlackRock Treasury Bond. It also has another product called mBASIS in which they do invest stablecoins to purchase Bitcoin, Ethereum, and altcoins when the market is strong, but they also adjust the strategy when the market is declining to continue earning profits by investing in US Treasuries.',
          link: 'https://docs.midas.app/',
        },
        {
          type: 'leaf',
          name: 'Matrixdock',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Matrixdock.png',
          details:
            'Short-term Treasury Bill Token (STBT) is designed for accredited investors seeking US treasury yields with their stablecoin holdings.',
          link: 'https://www.matrixdock.com/stbt',
        },
        {
          type: 'leaf',
          name: 'LibreCapital',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Libre Capital.jpg',
          details:
            'Libre brings yield generating money market products such as the Blackrock’s money market fund, on-chain, which can be accessed natively for users on Arbitrum (Accredited Investors).',
          link: 'https://www.librecapital.com/#hero',
        },
        {
          type: 'leaf',
          name: 'Securitize Markets',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Securitize.png',
          details:
            'It offers BUIDL (BlackRock USD Institutional Digital Liquidity Fund) which invests 100% of its total assets in cash, U.S. Treasury bills, notes, and other short-term obligations.',
          link: 'https://id.securitize.io/primary-market',
        },
        {
          type: 'leaf',
          name: 'Franklin Templeton',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Franklin Templeton.webp',
          details:
            'It has Franklin On-chain U.S. Government Money Fund which invests at least 99.5% of its total assets in U.S. government securities, cash and repurchase agreements.',
          link: 'https://www.franklintempleton.com/',
        },
        {
          type: 'leaf',
          name: 'Mountain Protocol',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Mountain Protocol.jpg',
          details:
            'It offers USDM tokens to its investors which are backed up by US treasuries with an average duration of 60 days or less.',
          link: 'https://mountainprotocol.com/',
        },
        {
          type: 'leaf',
          name: 'Hashnote',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Hashnote.jpg',
          details:
            'USYC (US Yield Coin) is the on-chain representation of Hashnote’s Short Duration Yield Fund (SDYF). SDYF invests in short-term US Treasury Bills and performs repo / reverse-repo activity as the underlying asset of the USYC token.',
          link: 'https://usyc.hashnote.com/',
        },
        {
          type: 'leaf',
          name: 'Superstate',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Superstate.webp',
          details:
            'The Superstate Short Duration US Government Securities Fund (the “Fund”) offers qualified purchasers access to short-duration Treasury Bills.',
          link: 'https://superstate.co/ustb',
        },
        {
          type: 'leaf',
          name: 'Arca Labs',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Arca.jpg',
          details:
            'It has Arca U.S. Treasury Fund which is a closed-end fund invested primarily in a portfolio of short and medium duration U.S. Treasury bills, bonds and notes.',
          link: 'https://www.arcalabs.com/fund-overview',
        },
        {
          type: 'leaf',
          name: 'DigiFT',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/DigiFT.jpg',
          details:
            'It offers security tokens backed up by US treasury bills, corporate bonds and money market funds . The yield generated ranges from 4.5%-12% depending on the underlying asset as well as the term.',
          link: 'https://www.digift.sg/index',
        },
        {
          type: 'leaf',
          name: 'WisdomTree',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Good Projects)/Wisdom Tree.jpg',
          details:
            'The WisdomTree Short-Term Treasury Digital Fund seeks to track the performance, before fees and expenses, of an Index designed to measure the performance of obligations of the U.S. Treasury, which include notes and bonds issued by the U.S. Treasury, all with maturities between one and three years. It is not a blockchain project.',
          link: 'https://www.wisdomtree.com/',
        },
        {
          type: 'leaf',
          name: 'Adapt3r',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Okay Projects)/Adapt3r.jpg',
          details:
            'It provides non-U.S. investors access to short-term U.S. Treasury Bill yields. It offers a yield of 5.32%.',
          link: 'https://www.adapt3r.com/',
        },
        {
          type: 'leaf',
          name: 'Swarm',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Okay Projects)/Swarm.jpg',
          details:
            'It allows users to invest in public stocks, gold, T-bills by acquiring tokenized versions of them.',
          link: 'https://swarm.com/',
        },
        {
          type: 'leaf',
          name: 'Fortunafi',
          value: 50,
          icon: '/icons/Treasuries & Bonds (Okay Projects)/Fortunafi.jpg',
          details:
            "It allows investors to buy shares in the Fund's Class T-Bill. These shares are represented by tokens: fBILL for the Onshore Fund and ifBILL for the Offshore Fund. This means investors can hold digital tokens that represent their investment in U.S. Treasury bills (T-Bills).",
          link: 'https://www.fortunafi.com/',
        },
      ],
    },

    {
      type: 'node',
      name: 'Token Issuance/ Securitization platforms',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Centrifuge',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Centrifuge.png',
          details:
            'Centrifuge allows businesses to borrow by using real-world assets (like invoices or real estate) as collateral, turning them into digital tokens. It also provides a platform through which builders can tokenize the real world assets.',
          link: 'https://centrifuge.io/',
        },
        {
          type: 'leaf',
          name: 'Tokeny',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Tokeny.png',
          details:
            'It enables seamless issuance, transfer, and management of tokenized securities.',
          link: 'https://tokeny.com/',
        },
        {
          type: 'leaf',
          name: 'Token City',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Token City.png',
          details: 'It facilitates token issuance to enable fundraising.',
          link: 'https://www.token-city.com/',
        },
        {
          type: 'leaf',
          name: 'Brickken',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Brickken.jpg',
          details:
            'It allows to tokenize real-world assets, equity, debt and securities.',
          link: 'https://www.brickken.com/en',
        },
        {
          type: 'leaf',
          name: 'InvestaX',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/InvestaX.jpg',
          details:
            'They tokenize a variety of assets including equity, credit, real estate, intellectual property, VC funds, employee stock option plan and ESG focused assets. ',
          link: 'https://www.investax.io/',
        },
        {
          type: 'leaf',
          name: 'Ondo Finance',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Ondo Finance.png',
          details:
            'Ondo tokenizes short term US treasuries and offers it to individual and institutional investors.',
          link: 'https://ondo.finance/',
        },
        {
          type: 'leaf',
          name: 'Nexera Foundation',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Nexera Foundation.jpg',
          details:
            'It provides the infrastructure to builders to manage digital, financial, and real-world assets together using blockchain.',
          link: 'https://www.nexera.foundation/',
        },
        {
          type: 'leaf',
          name: 'Mt Pelerin',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Mt Pelerin.png',
          details:
            'They allow builders to tokenize real estate properties using their platform.',
          link: 'https://www.mtpelerin.com/',
        },
        {
          type: 'leaf',
          name: 'Stobox',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Stobox.jpg',
          details:
            'It provides clients with a tokenization platform to leverage digital assets and tokenized securities.',
          link: 'https://www.stobox.io/',
        },
        {
          type: 'leaf',
          name: 'Nyala',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/NYALA.jpg',
          details:
            'It allows users to issue fully compliant tokenized securities such as bonds and shares on a blockchain of their choice and register them.',
          link: 'https://www.nyala.de/en/',
        },

        {
          type: 'leaf',
          name: 'Blocksquare',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Blocksquare.png',
          details:
            'It helps to digitize value of real estate properties, launch their investment platforms and connect people to tokenized real estate deals online.',
          link: 'https://blocksquare.io/',
        },
        {
          type: 'leaf',
          name: 'Polymath',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Polymath.jpg',
          details:
            'With the Polymath Capital Platform builders can digitize their real world assets and  mint tokens, manage investors and raise funds.',
          link: 'https://polymath.network/',
        },
        {
          type: 'leaf',
          name: 'Tokenforge',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Tokenforge.png',
          details:
            'They specialize in the tokenization of digital and real-world assets within the European Union.',
          link: 'https://token-forge.io/',
        },
        {
          type: 'leaf',
          name: 'DigiShares',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/DigiShares.png',
          details:
            'It allows builders to tokenize their properties, development projects, funds, companies, and assets to fund-raise.',
          link: 'https://digishares.io/',
        },
        {
          type: 'leaf',
          name: 'Finexity',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Good Projects)/Finexity.jpg',
          details:
            'It brings issuers and trading partners together, giving investors access to high-yield and tradable tokenized private market investments.',
          link: 'https://finexity.com/en',
        },
        {
          type: 'leaf',
          name: 'Bitbond',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Bitbond.jpg',
          details:
            'They offer asset tokenization services as well as custody technology to safekeep the assets.',
          link: 'https://www.bitbond.com/',
        },
        {
          type: 'leaf',
          name: 'Black Manta',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Black Manta_.jpg',
          details:
            'It provides assistance to structure the securities for tokenization.',
          link: 'https://blackmanta.capital/',
        },
        {
          type: 'leaf',
          name: 'Tokn1',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Tokn1.webp',
          details:
            'Businesses can tokenize their real-world assets using their platform. They can also gain access to a global network of retail and institutional investors.',
          link: 'https://tokn1.com/',
        },
        {
          type: 'leaf',
          name: 'Mattereum',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/Mattereum.jpg',
          details:
            'It works directly with owners to tokenize and fractionalize their assets.',
          link: 'https://mattereum.com/',
        },
        {
          type: 'leaf',
          name: 'RealBlocks',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/RealBlocks.jpg',
          details:
            'It allows builders to automate and digitize the full fund life-cycle experience for direct investors.',
          link: 'https://www.realblocks.com/',
        },
        {
          type: 'leaf',
          name: 'REINNO',
          value: 50,
          icon: '/icons/Token Issuance- Securitization platforms (Okay Projects)/REINNO.jpg',
          details:
            'It allows borrowers to tokenize commercial real estate for free with their Purchase or Refinance loan.',
          link: 'https://reinno.io/',
        },
      ],
    },
    {
      type: 'node',
      name: 'Private Credit',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Maple Finance',
          value: 50,
          icon: '/icons/Private Credit (Good Projects)/Maple Finance.png',
          details:
            'It offers institutional lending through uncollateralized loans which are managed by Pool delegates. Lenders can deposit assets to earn competitive interest rates. The borrowers on Maple Finance are only allowed to invest the money they borrow into U.S. Treasury bills and reverse repurchase agreements fully backed by U.S. Treasury bills.',
          link: 'https://maple.finance/',
        },
        {
          type: 'leaf',
          name: 'Centrifuge',
          value: 50,
          icon: '/icons/Private Credit (Good Projects)/Centrifuge.png',
          details:
            'Centrifuge allows businesses to borrow by using real-world assets (like invoices or real estate) as collateral, turning them into digital tokens. Investors can lend to these businesses through asset pools to earn interest.',
          link: 'https://centrifuge.io/',
        },
        {
          type: 'leaf',
          name: 'Goldfinch',
          value: 50,
          icon: '/icons/Private Credit (Good Projects)/Goldfinch.jpg',
          details:
            'Goldfinch protocol is a decentralized lending mechanism that doesn’t require the borrowers to show any kind of collateral. Instead, borrowers propose a loan to take and ask backers and auditors for approval. If a proposal collects enough support from them, the loan is issued. Liquidity providers, backers and auditors earn interest as a reward.',
          link: 'https://goldfinch.finance/',
        },
        {
          type: 'leaf',
          name: 'Credit Coop',
          value: 50,
          icon: '/icons/Private Credit (Good Projects)/Credit Coop.png',
          details:
            'It offers a new way for businesses to borrow money based on future earnings, making it easier to access capital without losing ownership. The Spigot smart contract automatically collects the business’s future earnings to repay the loan, so lenders don’t have to worry about getting paid back.',
          link: 'https://www.creditcoop.xyz/',
        },
        {
          type: 'leaf',
          name: 'Term Finance',
          value: 50,
          icon: '/icons/Private Credit (Good Projects)/Term Finance.jpg',
          details:
            'The Term Finance Protocol is a way to lend and borrow money on-chain using fixed rates and collateral. It works like traditional repo agreements, where borrowers and lenders are matched through auctions. Term’s architecture allows the protocol to onboard both permissioned and permissionless RWAs as collateral.',
          link: 'https://www.term.finance/',
        },
        {
          type: 'leaf',
          name: 'PolyTrade',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/PolyTrade.jpg',
          details:
            'Polytrade is the world’s first marketplace for tokenized real-world assets that brings together various tokenized assets from credit, real estate, commodities as well as collectibles, art, IP, creator royalties, luxury goods from all chains to a single platform.',
          link: 'https://www.polytrade.finance/',
        },
        {
          type: 'leaf',
          name: 'Open Trade',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/Open Trade.jpg',
          details:
            'It takes loans from institutional investors and then provides financing to businesses or other entities, using the funds secured by high-quality collateral like US Treasury Bills. This allows businesses to access capital while offering investors a stable yield on their loans.',
          link: 'https://www.opentrade.io/',
        },
        {
          type: 'leaf',
          name: 'ClearPool',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/Clearpool.png',
          details:
            'It helps institutional borrowers to borrow without needing to put up extra assets as collateral (over-collateralization). At the same time, retail investors can lend their money to these institutional borrowers and earn interest on it.',
          link: 'https://clearpool.finance/',
        },
        {
          type: 'leaf',
          name: 'Helix Finance',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/Helix Finance.jpg',
          details:
            'It connects investors with real-world private credit borrowers. The liquidity providers get to earn yields based on the tranche (senior/junior) they choose to invest in. (Can’t access platform so not sure about the quality)',
          link: 'https://helixfinance.io/',
        },
        {
          type: 'leaf',
          name: 'Tradable',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/Tradeable.jpg',
          details:
            'Originators can self-publish new investment opportunities on the Tradable application, detailing information about the deal, its investment terms and capital requirements. Permissioned investors review deal details and make an offer for allocation. (Can’t access platform so not sure about the quality)',
          link: 'https://www.tradable.xyz/',
        },
        {
          type: 'leaf',
          name: 'Credbull',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/Credbull.webp',
          details:
            'It offers a On-Chain Private Credit Fund with two options: a 6-month term with 8% APY or a 12-month term with 10% yield. It invests in SME loans, targeting strong returns with a low default rate. The fund serves institutions and aims to make private credit accessible to retail investors soon.',
          link: 'https://credbull.io/',
        },
        {
          type: 'leaf',
          name: 'TrueFi',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/TrueFi.jpg',
          details:
            'TrueFi is a platform where people can lend money and earn interest by putting their funds into different vaults. Portfolio managers run these vaults, negotiate loan terms with borrowers, and must be approved by TrueFi. Borrowers can get loans after agreeing to terms like providing ID and being in certain locations.',
          link: 'https://truefi.io/',
        },
        {
          type: 'leaf',
          name: 'Untangled',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/Untangled Finance.jpg',
          details:
            'Borrowers use Real-World Assets (RWAs) like SME loans or trade finance as collateral by tokenizing them into Non-Fungible Tokens (NFTs). These NFTs represent the real-world asset on the blockchain, and borrowers can use them to secure loans from a lending pool.',
          link: 'https://untangled.finance/',
        },
        {
          type: 'leaf',
          name: 'Bluejay',
          value: 50,
          icon: '/icons/Private Credit (Okay Projects)/BlueJay.webp',
          details:
            'Bluejay helps accredited investors get access to fixed income investments from multiple financial institutions.',
          link: 'https://bluejay.finance/',
        },
      ],
    },

    {
      type: 'node',
      name: 'Real Estate',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'RealT',
          value: 50,
          icon: '/icons/Real Estate (Good Projects)/RealT.jpg',
          details:
            'Investors around the globe can buy real estate property  through fully-compliant tokenized ownership. Investors get RealTokens that represent their ownership.',
          link: 'https://realt.co/',
        },
        {
          type: 'leaf',
          name: 'Parcl',
          value: 50,
          icon: '/icons/Real Estate (Good Projects)/Parcl.png',
          details:
            "Parcl is a platform that lets you trade based on real estate prices in different cities around the world, without having to buy actual properties. Instead of buying or selling a house, you can invest in what's called a city index. This index shows the average price of real estate in a city, usually measured by price per square foot or square meter.",
          link: 'https://www.parcl.co/',
        },
        {
          type: 'leaf',
          name: 'Reental',
          value: 50,
          icon: '/icons/Real Estate (Good Projects)/Reental.png',
          details:
            'Reental finds profitable real estate opportunities by acquiring properties at good prices and either renovating them or repurposing them effectively. Once a property is selected, Reental tokenizes the investment, making it easier for investors to participate.',
          link: 'https://www.reental.co/en',
        },
        {
          type: 'leaf',
          name: 'Exporo',
          value: 50,
          icon: '/icons/Real Estate (Good Projects)/Exporo.png',
          details:
            'Exporo offers private investors direct access to the attractive form of alternative investments in the areas of real estate development and renewable energies.',
          link: 'https://exporo.de/',
        },
        {
          type: 'leaf',
          name: 'Brick Wise',
          value: 50,
          icon: '/icons/Real Estate (Good Projects)/Brick Wise.png',
          details:
            'Brickwise makes real estate investing easy and accessible for everyone. They divide properties into affordable shares, allowing investments starting from just €100.',
          link: 'https://www.brickwise.at/',
        },
        {
          type: 'leaf',
          name: 'MetaWealth',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/MetaWealth.png',
          details:
            'MetaWealth offers investors the opportunity to own fractional shares of real estate by purchasing tokens that represent ownership of these assets.',
          link: 'https://www.metawealth.co/',
        },
        {
          type: 'leaf',
          name: 'CitaDAO',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/CitaDao.jpg',
          details:
            'They choose high-quality properties and tokenize them to allow investors to invest in these properties.',
          link: 'https://citadao.io/',
        },
        {
          type: 'leaf',
          name: 'Tangible',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/Tangible.jpg',
          details:
            'Tangible creates separate SPVs to manage real estate properties. When someone buys a TNFT, they indirectly own the property. These properties are rented out, and the rental income is paid to the TNFT holders in stablecoins.',
          link: 'https://www.tangible.store/',
        },
        {
          type: 'leaf',
          name: 'InvestBay',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/InvestBay.jpg',
          details:
            'InvestBay is an online platform that makes it easy for anyone to invest in real estate. You simply choose from the available properties and can invest online starting from as little as €100.',
          link: 'https://www.investbay.com/en',
        },
        {
          type: 'leaf',
          name: 'Landshare',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/Landshare.png',
          details:
            'With Landshare, you can own a share of a real-world property by simply holding Landshare RWA Tokens (LSRWA). Properties are managed on your behalf, and the income generated is reflected in the value of your tokens.',
          link: 'https://www.landshare.io/',
        },
        {
          type: 'leaf',
          name: 'Estate Protocol',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/Estate Protocol.jpg',
          details:
            'Through Estate Protocol, individuals from any corner of the globe can invest in and gain fractional ownership of properties located in stable economies starting at $50.',
          link: 'https://www.estateprotocol.com/',
        },
        {
          type: 'leaf',
          name: 'Propchain',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/Propchain.png',
          details:
            'It offers a platform for investing in real estate and managing properties in Dubai. Investors can easily access high-yield real estate, while property owners can use the platform to manage their portfolios, raise funds, and handle compliance.',
          link: 'https://www.propchain.com/',
        },
        {
          type: 'leaf',
          name: 'RealtyX',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/RealtyX.jpg',
          details:
            'They tokenize real estate assets and offer RWA tokens. RST owners earn rental income and gain voting rights.',
          link: 'https://realtyx.co/',
        },
        {
          type: 'leaf',
          name: 'Lofty',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/Lofty.png',
          details:
            'Lofty is a marketplace that lets you invest in U.S. rental properties against which you get tokens that represent your ownership. ',
          link: 'https://www.lofty.ai/',
        },
        {
          type: 'leaf',
          name: 'Propy',
          value: 50,
          icon: '/icons/Real Estate (Okay Projects)/Propy.png',
          details:
            'It is a real estate offer management and transaction platform that empowers buyers, sellers, their agents and deal partners to close real estate transactions entirely online.',
          link: 'https://propy.com/home/',
        },
      ],
    },

    {
      type: 'node',
      name: 'Oracles',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Chainlink',
          value: 50,
          icon: '/icons/Oracles (Good Projects)/Chainlink.jpg',
          details:
            "Chainlink's main goal is to support all blockchains by enabling the secure movement of data globally, making it easier for blockchains to work together and access off-chain information.",
          link: 'https://chain.link/',
        },
        {
          type: 'leaf',
          name: 'RWA.xyz',
          value: 50,
          icon: '/icons/Oracles (Good Projects)/RWA.xyz.jpg',
          details:
            'It is the leading analytics company for tokenized real-world assets.',
          link: 'https://www.rwa.xyz/',
        },
        {
          type: 'leaf',
          name: 'Security Token Market',
          value: 50,
          icon: '/icons/Oracles (Good Projects)/Security Token Market.jpg',
          details:
            'It is the largest repository of data and research on tokenized real-world asset securities, tracking over 600 on-chain equities, real estate properties, debt, and fund products.',
          link: 'https://stomarket.com/',
        },
        {
          type: 'leaf',
          name: 'Pyth',
          value: 50,
          icon: '/icons/Oracles (Good Projects)/Pyth.jpg',
          details:
            'Pyth is a protocol that allows market participants to publish pricing information on-chain for others to use.',
          link: 'https://www.pyth.network/',
        },
        {
          type: 'leaf',
          name: 'Tellor',
          value: 50,
          icon: '/icons/Oracles (Okay Projects)/Tellor.png',
          details:
            'Tellor is a decentralized oracle protocol that allows anyone to submit and validate data on the blockchain in a secure and transparent way.',
          link: 'https://tellor.io/',
        },
        {
          type: 'leaf',
          name: 'Nuklai',
          value: 50,
          icon: '/icons/Oracles (Okay Projects)/Nuklai.jpg',
          details:
            'Nuklai is a collaborative data marketplace that provides the infrastructure for data ecosystems. It allows different users and organizations to share, buy, and sell data easily.',
          link: 'https://www.nukl.ai/',
        },
      ],
    },
    {
      type: 'node',
      name: 'Wallets & Custodians',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Copper.co',
          value: 50,
          icon: '/icons/Wallets & Custodians (Good Projects)/Copper.co.jpg',
          details:
            'It offers a custody platform where they can safeguard more than 600+ digital assets across 50+ blockchains and interact with exchanges, DeFi and staking pools.',
          link: 'https://copper.co/en',
        },

        {
          type: 'leaf',
          name: 'Tangany',
          value: 50,
          icon: '/icons/Wallets & Custodians (Good Projects)/Tangany.jpg',
          details:
            'It provides custody services through which clients can compliantly on-board their end clients.',
          link: 'https://tangany.com/',
        },
        {
          type: 'leaf',
          name: 'Hex Trust',
          value: 50,
          icon: '/icons/Wallets & Custodians (Good Projects)/Hex Trust.jpg',
          details:
            'It is a fully-licensed digital asset custodian that provides solutions for protocols, foundations, financial institutions, and the Web3 ecosystem.',
          link: 'https://hextrust.com/',
        },
        {
          type: 'leaf',
          name: 'Fireblocks',
          value: 50,
          icon: '/icons/Wallets & Custodians (Good Projects)/Fireblocks.png',
          details:
            'Fireblocks provides a suite of applications to manage digital asset operations and a complete development platform to build your business on the blockchain.',
          link: 'https://www.fireblocks.com/',
        },
        {
          type: 'leaf',
          name: 'Custonomy',
          value: 50,
          icon: '/icons/Wallets & Custodians (Okay Projects)/Custonomy.png',
          details:
            'Enterprises can securely manage digital assets. It includes a specialized hot wallet system designed to allow multiple team members to easily access and manage wallets assigned to different teams or purposes.',
          link: 'https://www.custonomy.io/',
        },
        {
          type: 'leaf',
          name: 'Brillion',
          value: 50,
          icon: '/icons/Wallets & Custodians (Okay Projects)/Brillion.png',
          details:
            'Users can explore curated RWA offerings, transfer ownership between peers, and buy or sell assets directly from their wallet.',
          link: 'https://www.brillion.finance/',
        },
      ],
    },
    {
      type: 'node',
      name: 'Collectibles',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Watches.io',
          value: 50,
          icon: '/icons/Collectibles (Good Projects)/Watches.io.jpg',
          details:
            'Watches.io offers a secure platform for purchasing physical watches.',
          link: 'https://watches.io/',
        },
        {
          type: 'leaf',
          name: 'Blockapps',
          value: 50,
          icon: '/icons/Collectibles (Good Projects)/Blockapps.jpg',
          details:
            'They work with trusted partners to offer a range of assets for anyone to buy, including whiskey casks, precious metals, carbon offsets, and collectibles. This platform lets people invest in and own these real-world items securely using blockchain technology.',
          link: 'https://blockapps.net/',
        },

        {
          type: 'leaf',
          name: 'Galileo Protocol',
          value: 50,
          icon: '/icons/Collectibles (Okay Projects)/Galileo Protocol.png',
          details:
            'The Galileo Protocol is a platform that turns luxury goods and real-world assets into digital tokens called pNFTs, making it easier to prove ownership and track authenticity.',
          link: 'https://www.galileoprotocol.io/',
        },
        {
          type: 'leaf',
          name: 'OpenSea',
          value: 50,
          icon: '/icons/Collectibles (Good Projects)/OpenSea.jpg',
          details:
            'It is a digital marketplace for crypto collectibles, art pieces and non-fungible tokens (NFTs).',
          link: 'https://opensea.io/',
        },
        {
          type: 'leaf',
          name: 'Artrade',
          value: 50,
          icon: '/icons/Collectibles (Good Projects)/Artrade.png',
          details:
            'Buyers and sellers can trade art directly, knowing that each piece is verified and traceable.',
          link: 'https://artrade.app/',
        },
      ],
    },
    {
      type: 'node',
      name: 'Agriculture',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'LandX',
          value: 50,
          icon: '/icons/Agriculture (Okay Projects)/LandX.jpg',
          details:
            'LandX is a platform that helps real-world farmers get the money they need by offering investors a chance to earn a share of farm crops. Farmers can access capital by linking their farmland to the platform, while investors can buy a token that represents a share of the crops produced on that land.',
          link: 'https://landx.fi/',
        },
        {
          type: 'leaf',
          name: 'Farmsent',
          value: 50,
          icon: '/icons/Agriculture (Okay Projects)/Farmsent.jpg',
          details:
            'Farmsent connects farmers directly to businesses, allowing these tangible assets (such as crops) to be traced, validated, and traded via blockchain.',
          link: 'https://www.farmsent.io/',
        },
        {
          type: 'leaf',
          name: 'e-Grains',
          value: 50,
          icon: '/icons/Agriculture (Okay Projects)/e-Grains.png',
          details:
            '$ESOY is a digital asset fully backed by soybean futures contracts and warranties. This means the value of $ESOY is directly tied to real-world soybean commodities. They will be launching other products backed by sugar, coffee and corn as well.',
          link: 'https://e-grains.com/',
        },
        {
          type: 'leaf',
          name: 'AgriDigital',
          value: 50,
          icon: '/icons/Agriculture (Good Projects)/AgriDigital.jpg',
          details:
            'They provide access to a variety of grains which can be bought and sold easily using their platform',
          link: 'https://www.agridigital.io/',
        },
        {
          type: 'leaf',
          name: 'Agrotoken',
          value: 50,
          icon: '/icons/Agriculture (Good Projects)/Agrotoken.png',
          details:
            'Farmers can digitize their grains and use it as collateral to obtain financing.',
          link: 'https://www.agrotoken.com/en/home',
        },
        {
          type: 'leaf',
          name: 'Agrichainx',
          value: 50,
          icon: '/icons/Agriculture (Okay Projects)/Agrichainx.jpg',
          details:
            'It provides farmers with access to affordable funding to increase food production.',
          link: 'http://agrichainx.com/',
        },
      ],
    },
    {
      type: 'node',
      name: 'Commodities/ Precious metals',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Paxos Gold',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Good Projects)/Paxos Gold.png',
          details:
            'PAXG offers investors a way to own investment-grade physical gold.. Each Pax Gold (PAXG) token is backed by one fine troy ounce of gold. If you own PAXG, you own the underlying physical gold, held in custody by Paxos Trust Company.',
          link: 'https://paxos.com/paxgold/',
        },
        {
          type: 'leaf',
          name: 'Tether Gold',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Good Projects)/Tether Gold.png',
          details:
            'Tether Gold (XAUt) is a token that provides you ownership of real physical gold. If at any time, you want to redeem your tokens, for physical gold, you can. They deliver physical gold bars to any address in Switzerland.',
          link: 'https://gold.tether.to/',
        },
        {
          type: 'leaf',
          name: 'VeraOne',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Okay Projects)/VeraOne.jpg',
          details:
            'Each token is backed by 1 gram of LBMA gold, silver, platinum and palladium bullion stored in the Free Ports of Geneva.',
          link: 'https://veraone.io/en/home/',
        },
        {
          type: 'leaf',
          name: 'TVVIN',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Okay Projects)/TVVIN.png',
          details:
            'TVVIN delivers Real-World Assets, such as gold and silver, as easily tradable tokens with yield-generating potential.',
          link: 'https://www.tvvin.com/',
        },
        {
          type: 'leaf',
          name: 'Aurus',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Okay Projects)/Aurus.jpg',
          details:
            'By tokenizing gold, silver, and platinum, businesses can tap into new markets, offer innovative products, and earn passive rewards. They provide the technology, network, and blockchain infrastructure needed to tokenize precious metals.',
          link: 'https://aurus.io/',
        },
        {
          type: 'leaf',
          name: 'CACHE',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Okay Projects)/Cache Gold.jpg',
          details:
            'CACHE Gold tokens represent one gram of physical gold each. For every token issued, there is an equivalent amount of gold stored securely in a vault.',
          link: 'https://cache.gold/',
        },
        {
          type: 'leaf',
          name: 'Tiamonds',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Okay Projects)/Tiamonds.png',
          details:
            'Each Tiamond is backed 1-1 by a real-world natural diamond. All the physical diamonds are safely secured in a vault in Liechtenstein. With Tiamonds you can own your diamonds both digitally and physically.',
          link: 'https://tiamonds.com/',
        },
        {
          type: 'leaf',
          name: 'Denario',
          value: 50,
          icon: '/icons/Commodities- Precious metals (Okay Projects)/Denario.jpg',
          details:
            'Denario specializes in digital investments in precious metals through asset-backed real world asset tokens. Their platform offers a modern, reliable, and convenient way for both institutional and retail investors to invest in precious metals.',
          link: 'https://www.denario.swiss/',
        },
      ],
    },
    {
      type: 'node',
      name: 'Equity',
      value: 0,
      children: [
        {
          type: 'leaf',
          name: 'Backed',
          value: 50,
          icon: '/icons/Private Equity (Good Projects)/Backed Finance.jpg',
          details:
            'It allows professional investors to purchase tokenized fixed income bonds and equities. Each token is 1:1 backed by the underlying asset. Backed also provides institutions with a flexible, efficient, and secure tokenization service tailored to their needs.',
          link: 'https://backed.fi/',
        },
        {
          type: 'leaf',
          name: 'ADDX',
          value: 50,
          icon: '/icons/Private Equity (Good Projects)/ADDX.jpg',
          details:
            'ADADDX is a private market investment platform and not a blockchain project that enables you to invest in Private Equity, Hedge Funds, Real Estate, in fractions as low as $5,000. It is open to all non-US individual accredited, corporate accredited, and institutional investors.',
          link: 'https://addx.co/en/index.html',
        },
        {
          type: 'leaf',
          name: 'Securitize',
          value: 50,
          icon: '/icons/Private Equity (Good Projects)/Securitize.png',
          details:
            'Securitize is a member of FINRA and SIPC as well as an SEC-registered broker-dealer. It offers investors to invest in private equity and even VC funds. The open private equity offerings are intended for experienced investors who are looking to diversify their portfolios with alternative asset investments starting at $10k to $20k instead of $2M.',
          link: 'https://securitize.io/',
        },
        {
          type: 'leaf',
          name: 'Forge',
          value: 50,
          icon: '/icons/Private Equity (Good Projects)/Forge.jpg',
          details:
            'It provides a secure way for investors to access private securities. Forge Markets is a broker-dealer, and our ultimate parent organization, Forge Global Holdings, Inc. (NYSE: FRGE), is a publicly traded company. The vast majority of their deals are direct secondary transactions, where the purchaser is directly on the capital table of the company at the close of the transaction.',
          link: 'https://forgeglobal.com/',
        },
        {
          type: 'leaf',
          name: 'Dinari',
          value: 50,
          icon: '/icons/Private Equity (Good Projects)/Dinari.jpg',
          details:
            'Through dShares, users can trade traditional securities, like stocks and bonds, on the blockchain. It uses smart contracts to represent the securities as tokens and to automate the process of buying and selling them.',
          link: 'https://dinari.com/',
        },
        {
          type: 'leaf',
          name: 'Oasis Pro Markets',
          value: 50,
          icon: '/icons/Private Equity (Okay Projects)/Oasis Pro.png',
          details:
            'Oasis Pro provides a secure and regulated platform for buying, selling, and managing digital securities including debt and equity based assets. Accredited investors can invest in funds like Wine Capital Fund, Rise & Shine Fund etc.',
          link: 'https://www.oasispro.com/',
        },
        {
          type: 'leaf',
          name: 'Swarm',
          value: 50,
          icon: '/icons/Private Equity (Okay Projects)/Swarm.jpg',
          details:
            'It allows users to invest in public stocks on-chain which can be traded and invested by both retail and qualified investors. Tokens are issued by SwarmX GmbH, a subsidiary of Swarm Capital GmbH.',
          link: 'https://swarm.com/',
        },
        {
          type: 'leaf',
          name: 'Texture Capital',
          value: 50,
          icon: '/icons/Private Equity (Okay Projects)/Texture Capital.jpg',
          details:
            'It offers different types of funds like Solaris Renewable Energy Equity A, RevTech Capital Fund II, Bricxone etc. in which accredit investors can invest in. Texture Capital Inc. is a FINRA member broker-dealer and operator of an SEC-registered Alternative Trading System.',
          link: 'https://app.texture.capital/',
        },
      ],
    },
  ],
}
