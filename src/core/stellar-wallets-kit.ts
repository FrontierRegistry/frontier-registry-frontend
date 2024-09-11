import {
    xBullModule,
    FreighterModule,
    FREIGHTER_ID,
    StellarWalletsKit,
    WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";

const kit: StellarWalletsKit = new StellarWalletsKit({
    modules: [
        new xBullModule(),
        new FreighterModule(),
    ],
    network: WalletNetwork.TESTNET,
    selectedWalletId: FREIGHTER_ID,
});

export default kit;