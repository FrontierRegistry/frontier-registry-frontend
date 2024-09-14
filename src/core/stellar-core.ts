import * as StellarSdk from "@stellar/stellar-sdk";
import { Address } from "@stellar/stellar-sdk";
import { xdr } from "@stellar/stellar-sdk";

import {
    StellarWalletsKit,
} from "@creit.tech/stellar-wallets-kit";

export type CertificateData = {
    frontier_address: string,
    user_address: string,
    nft_id: number,
    title: string,
    description: string,
    uri: string,
    keywords: string,
    hash: string
}
// frontier registry contract
const contract = new StellarSdk.Contract(import.meta.env.VITE_FRONTIER_REGISTRY_CONTRACT_ID);
// stellar base fee
const fee = StellarSdk.BASE_FEE;
// transaction status
const SendTxStatus: {
    [index: string]: StellarSdk.SorobanRpc.Api.SendTransactionStatus;
} = {
    Pending: "PENDING",
    Duplicate: "DUPLICATE",
    Retry: "TRY_AGAIN_LATER",
    Error: "ERROR",
};

export const initialize = async (kit: StellarWalletsKit, publicKey: string) => {
    // creeate server
    const server = new StellarSdk.SorobanRpc.Server(import.meta.env.VITE_TEST_SOROBAN_RPC_URL);
    // load account
    let account = await server.getAccount(publicKey);
    // build transaction
    let adminAddress: Address = new StellarSdk.Address(publicKey);
    let frontierNFTAddress: Address = new StellarSdk.Address(import.meta.env.VITE_FRONTIER_NFT_CONTRACT_ID)

    const transaction = new StellarSdk.TransactionBuilder(account, { fee })
        .setNetworkPassphrase(StellarSdk.Networks.TESTNET)
        .setTimeout(30) // valid for the next 30s
        .addOperation(contract.call("initialize", adminAddress.toScVal(), frontierNFTAddress.toScVal()))
        .build()
        .toEnvelope()
        .toXDR("base64");
    // sign transaction with wallet
    const { signedTxXdr } = await kit.signTransaction(transaction, {
        address: publicKey,
    });
    // build transaction from xdr
    const tx = StellarSdk.TransactionBuilder.fromXDR(signedTxXdr, import.meta.env.VITE_TEST_SOROBAN_NETWORK_PASSPHRASE);
    // send transaction
    server.sendTransaction(tx).then((result: any) => {
        console.log("hash:", result.hash);
        console.log("status:", result.status);
        console.log("errorResultXdr:", result.errorResultXdr);
    });
}

export const registerNFT = async (kit: StellarWalletsKit, publicKey: string, title: string, description: string, Keywords: string, IpfsHash: string) => {
    // create server
    const server = new StellarSdk.SorobanRpc.Server(import.meta.env.VITE_TEST_SOROBAN_RPC_URL);
    // load account
    let account = await server.getAccount(publicKey);
    // build transaction
    let frontierNFTAddress: Address = new StellarSdk.Address(import.meta.env.VITE_FRONTIER_NFT_CONTRACT_ID)
    let toAddress: Address = new StellarSdk.Address(publicKey);
    let xdrTitle: xdr.ScVal = StellarSdk.nativeToScVal(title);
    let xdrDescription: xdr.ScVal = StellarSdk.nativeToScVal(description);
    let xdrKeywords: xdr.ScVal = StellarSdk.nativeToScVal(Keywords);
    let xdrIpfsHash: xdr.ScVal = StellarSdk.nativeToScVal(IpfsHash);

    const transaction = new StellarSdk.TransactionBuilder(account, { fee })
        .setNetworkPassphrase(StellarSdk.Networks.TESTNET)
        .addOperation(contract.call("register", ...[frontierNFTAddress.toScVal(), toAddress.toScVal(), xdrTitle, xdrDescription, xdrIpfsHash, xdrKeywords]))
        .setTimeout(30) // valid for the next 30s
        .build();

    const preparedTransaction = await server.prepareTransaction(transaction);
    // sign transaction with wallet
    const { signedTxXdr } = await kit.signTransaction(preparedTransaction.toXDR(), {
        address: publicKey,
    });
    // build transaction from xdr
    const tx = StellarSdk.TransactionBuilder.fromXDR(signedTxXdr, import.meta.env.VITE_TEST_SOROBAN_NETWORK_PASSPHRASE);

    // send transaction
    const sendResponse = await server.sendTransaction(tx);
    console.log(sendResponse)

    if (sendResponse.errorResult) {
        throw new Error("Transaction error");
    }

    if (sendResponse.status === SendTxStatus.Pending) {
        let txResponse = await server.getTransaction(sendResponse.hash);

        // Poll this until the status is not "NOT_FOUND"
        while (
            txResponse.status === StellarSdk.SorobanRpc.Api.GetTransactionStatus.NOT_FOUND
        ) {
            txResponse = await server.getTransaction(sendResponse.hash);

            await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        if (txResponse.status === StellarSdk.SorobanRpc.Api.GetTransactionStatus.SUCCESS) {
            let xdrArr = txResponse.returnValue?.value();

            if (xdrArr) {
                let certificate: CertificateData = {
                    description: StellarSdk.scValToNative(xdrArr[0]._attributes.val),
                    frontier_address: StellarSdk.scValToNative(xdrArr[1]._attributes.val),
                    keywords: StellarSdk.scValToNative(xdrArr[2]._attributes.val),
                    nft_id: StellarSdk.scValToNative(xdrArr[3]._attributes.val),
                    title: StellarSdk.scValToNative(xdrArr[4]._attributes.val),
                    uri: StellarSdk.scValToNative(xdrArr[5]._attributes.val),
                    user_address: StellarSdk.scValToNative(xdrArr[6]._attributes.val),
                    hash: sendResponse.hash
                };

                return certificate;
            }

            throw new Error(
                `Unabled to submit transaction, status: ${sendResponse.status}`,
            );
        }

        throw new Error(
            `Unabled to submit transaction, status: ${sendResponse.status}`,
        );
    }
    throw new Error(
        `Unabled to submit transaction, status: ${sendResponse.status}`,
    );



}