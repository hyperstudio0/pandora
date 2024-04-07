import {ConnectType, useLCDClient, useWallet, WalletStatus} from "@xpla/wallet-provider";
import React, {useEffect, useState} from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import EcommerceProductViewGridItem from "../_ecommerce/product/item/ecommerce-product-view-grid-item";
import Grid from "@mui/material/Unstable_Grid2";
import {useMainPageContext} from "../../app/main/MainPageProvider";

const contractAddress = "xpla10ass0huls9u5rctnyhzvh5jg48qsg7cdfxw34juxd3js05fahraq87c7c7";

type Props = {};
export default function XPLADataBody({}: Props) {

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
        {status === WalletStatus.WALLET_NOT_CONNECTED && (
            <>
                {availableConnectTypes.map((connectType) => (
                    connectType === ConnectType.EXTENSION && <Button
                        variant="contained"
                        color="primary"
                        key={"connect-" + connectType}
                        onClick={() => connect(connectType)}
                    >
                        Connect XPLA Wallet
                    </Button>
                ))}
            </>
        )}
        {status === WalletStatus.WALLET_CONNECTED && list.map((item, index) => (
            <Grid xs={12} sm={4} md={3} lg={2} key={index}>
                <EcommerceProductViewGridItem data={item}/>
            </Grid>
        ))}
    </Grid>;
}
