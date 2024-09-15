import {
    xBullModule,
    FreighterModule,
    FREIGHTER_ID,
    StellarWalletsKit,
    WalletNetwork,
} from "@creit.tech/stellar-wallets-kit";
import { setPublicKey } from "../features/userSlice";
import type { Dispatch, UnknownAction } from "@reduxjs/toolkit";

const kit: StellarWalletsKit = new StellarWalletsKit({
    modules: [
        new xBullModule(),
        new FreighterModule(),
    ],
    network: WalletNetwork.TESTNET,
    selectedWalletId: FREIGHTER_ID,
});

export const openWallet = async (dispatch: Dispatch<UnknownAction>) => {
    try {
        await kit.openModal({
            onWalletSelected: async (option) => {
                try {
                    kit.setWallet(option.id);
                    const { address } = await kit.getAddress();
                    dispatch(setPublicKey({ publicKey: address }));
                    localStorage.setItem("openwallet", "1");
                } catch (e) {
                    console.error(e);
                }
            },

        });
    } catch (e) {
        console.error(e);
    }
};

export default kit;