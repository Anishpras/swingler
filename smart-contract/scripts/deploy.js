const { ethers } = require("hardhat");

const main = async () => {
  const swinglerFactory = await ethers.getContractFactory("SwinglerERC721");
  const SwinglerContract = await swinglerFactory.deploy();

  console.log("Swingler Contract Address: ", SwinglerContract.address);
};

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log("Error in deploying contract >>  ", e);
    process.exit(1);
  });

// Swingler Contract Address:  0x5bf68031Ac0de6cA231c8D33126fc5F1D53a5CAb
