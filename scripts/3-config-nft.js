import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x780785ff700F61585257ae616D0b1224DB02cF90");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Controle Supremo",
        description: "Esse NFT vai te dar acesso ao GamerShareDAO!",
        image: readFileSync("scripts/assets/ataricontrole.jpg"),
      },
    ]);
    console.log("✅ Novo NFT criado com sucesso no !");
  } catch (error) {
    console.error("falha ao criar o novo NFT", error);
  }
})()