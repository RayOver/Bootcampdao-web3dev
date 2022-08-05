import sdk from "./1-initialize-sdk.js";

// Esse é o endereço do nosso contrato ERC-20 impresso no passo anterior.
const token = sdk.getToken("0x8C16dE536412B14B7CaA9377bc018A7aD6Be4DA8");

(async () => {
  try {
    // Qual o fornecimento máximo que você quer?
    const amount = 1000;
    // Interaja com o seu contrato ERC-20 e cunhe os tokens!
    await token.mintToSelf(amount);
    const totalSupply = await token.totalSupply();
    
    // Mostre quantos dos seus tokens existem agora!
    console.log("✅ Agora temos", totalSupply.displayValue, "$CTRL em circulação");
  } catch (error) {
    console.error("Falha ao imprimir o dinheiro", error);
  }
})();