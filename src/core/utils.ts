import type { CertificateData } from "./stellar-core";

export const collapseAddress = (address: string | undefined): string => {
    if (address) return `${address.slice(0, 3)}...${address.slice(-4)}`;
    else return "";
};

export const makeHtmlContent = (certificateData: CertificateData): string => {
    let htmlContent: string =
        `Frontier Certification document



Transaction hash: 
${certificateData.hash}

Frontier_address: 
${certificateData.frontier_address.slice(0, 50)}
${certificateData.frontier_address.slice(50, certificateData.frontier_address.length)}

user_address: 
${certificateData.user_address.slice(0, 50)}
${certificateData.user_address.slice(50, certificateData.user_address.length)}

nft_id: 
${certificateData.nft_id}

title: 
${certificateData.title}

description: 
${certificateData.description}

uri: 
${certificateData.uri}

keywords: 
${certificateData.keywords}`

    return htmlContent;
}