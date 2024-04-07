import {ConnectType, useLCDClient, useWallet, WalletStatus} from "@xpla/wallet-provider";
import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EcommerceProductViewGridItem from "../_ecommerce/product/item/ecommerce-product-view-grid-item";
import Grid from "@mui/material/Unstable_Grid2";
import {useMainPageContext} from "../../app/main/MainPageProvider";
import {oasysChainInfo} from "../../app/main/OasysChainInfo";

const contractAddress = "";

type Props = {};
export default function OasysDataBody({}: Props) {

    const {
        status,
        network,
        wallets,
        availableConnectTypes,
        connect,
    } = useWallet();// XPLA Wallet Hook

    const {selectTokens, handleSetSelectTokens} = useMainPageContext();

    const {wasm} = useLCDClient();

    const [walletAddress, setWalletAddress] = useState<string>();
    const [list, setList] = useState<any[]>([]);

    const addOasysToMetaMask = async () => {
        const ethereum = (window as any).ethereum;
        if(ethereum) {
            const provider: any = ethereum;
            if (provider) {
                try {
                    await provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [oasysChainInfo],
                    });
                } catch (addError) {
                    console.error('Error adding Oasys to MetaMask', addError);
                }
            } else {
                console.error('Can not find Ethereum provider.');
            }
        }
    };

    const getNfts = async (userAddress: string) => {
        const userNFTs: any = await wasm.contractQuery(contractAddress, {
            tokens: {
                owner: userAddress
            }
        });
        console.log(userNFTs);
        const tokenIds = userNFTs?.tokens;
        const _list = [];
        for (const tokenId of tokenIds) {
            const nftInfoMsg = {
                nft_info: {
                    token_id: tokenId
                }
            }
            const nftInfo: any = await wasm.contractQuery(contractAddress, nftInfoMsg);
            console.log(JSON.stringify(nftInfo, null, 2), 'nftInfo');
            const attributes = (nftInfo.extension.attributes as any[]);
            const rarityAttribute = attributes.find(attribute => {
                return attribute.trait_type === "rarity";
            }) || null;

            const weightAttribute = attributes.find(attribute => {
                return attribute.trait_type === "price";
            }) || null;


            if (nftInfo.extension.image)
                _list.push({
                    id: tokenId,
                    label: rarityAttribute ? rarityAttribute.value : '',
                    thumbnail: nftInfo.extension.image,
                    title: nftInfo.extension.name,
                    gameName: tokenId,
                    weight: weightAttribute ? weightAttribute.value : 1,
                    gameLogo: '/assets/icons/sample/sample02.svg'
                })
        }
        setList(_list);
    }

    useEffect(() => {
        console.log(wallets, 'wallets');
        if (wallets && wallets.length > 0) {
            setWalletAddress(wallets[0].xplaAddress || undefined);
        }
    }, [wallets]);

    useEffect(() => {
        if (walletAddress) {
            getNfts(walletAddress).then(() => {
            });
        }
    }, [walletAddress]);

    return <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{minHeight: 200}}
    >
        <>
            <Button
                variant="contained"
                color="primary"
                onClick={() => addOasysToMetaMask()}
            >
                Connect Oasys Wallet
            </Button>
        </>
    </Grid>;
}
