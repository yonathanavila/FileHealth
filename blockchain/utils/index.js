const {
    CoinType,
    ethAddressFromDelegated,
    newDelegatedEthAddress,
} = require("@glif/filecoin-address");
const RpcEngine = require("@glif/filecoin-rpc-client");
const { SECP256K1KeyProvider } = require("@glif/filecoin-wallet-provider");

function toEthAddr(addr) {
    try {
        const address = ethAddressFromDelegated(addr);
        return address;
    } catch {
        return addr;
    }
};

async function deriveAddrsFromPk(
    pk,
    apiAddress,
    ethAddress
) {
    const provider = new SECP256K1KeyProvider(pk.slice(2), "hex");
    const [secpActor] = await provider.getAccounts(0, 1, CoinType.TEST);
    const delegatedActor = newDelegatedEthAddress(
        ethAddress,
        CoinType.TEST
    ).toString();

    let idActor = "";
    let idActorHex = "";
    try {
        const filRpc = new RpcEngine({ apiAddress });
        idActor = await filRpc.request("StateLookupID", delegatedActor, null);
        idActorHex = hexlify(idActor);
    } catch (err) {
        console.log(
            `Actor ${delegatedActor} does not yet exist on chain. Try sending it some funds first. Error: ${err}`
        );
    }

    return { secpActor, idActor, idActorHex, delegatedActor };
};

module.exports = {
    deriveAddrsFromPk,
    toEthAddr
}