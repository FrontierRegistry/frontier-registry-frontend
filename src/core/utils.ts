export const collapseAddress = (address: string | undefined): string => {
    if (address) return `${address.slice(0, 3)}...${address.slice(-4)}`;
    else return "";
};