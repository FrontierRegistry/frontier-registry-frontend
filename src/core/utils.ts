import type { CertificateData } from "./stellar-core";

export const collapseAddress = (address: string | undefined): string => {
    if (address) return `${address.slice(0, 3)}...${address.slice(-4)}`;
    else return "";
};

export const makeHtmlContent = (certificateData: CertificateData): string => {
    let htmlContent: string =
        `Frontier Certification document



Transaction hash: 
${certificateData.hash.slice(0, 50)}
${certificateData.hash.slice(50, certificateData.hash.length)}

Frontier_address: 
${certificateData.frontier_address.slice(0, 50)}
${certificateData.frontier_address.slice(50, certificateData.frontier_address.length)}

user_address: 
${certificateData.user_address.slice(0, 50)}
${certificateData.user_address.slice(50, certificateData.user_address.length)}

nft_id: 
${certificateData.nft_id}

title: 
${certificateData.title.slice(0, 70)}
${certificateData.title.slice(70, 140)}
${certificateData.title.slice(140, 210)}
${certificateData.title.slice(210, certificateData.title.length)}

description: 
${certificateData.description.slice(0, 70)}
${certificateData.description.slice(70, 140)}
${certificateData.description.slice(140, 210)}
${certificateData.description.slice(210, 280)}
${certificateData.description.slice(280, 350)}
${certificateData.description.slice(350, certificateData.description.length)}

uri: 
${certificateData.uri.slice(0, 50)}
${certificateData.uri.slice(50, certificateData.uri.length)}

keywords: 
${certificateData.keywords}`

    return htmlContent;
}