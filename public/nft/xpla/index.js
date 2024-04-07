import { LCDClient, MsgStoreCode, MnemonicKey, isTxError } from '@xpla/xpla.js';
import * as fs from 'fs';

const mk = new MnemonicKey({
    mnemonic: 'badge market digital gallery slot quantum earth ticket obtain apart where swing rate pioneer talk various fly leg buyer flat gift finger detect banana'
})

const xpla = new LCDClient({
    URL: 'https://cube-lcd.xpla.dev',
    chainID: 'cube_47-5'
});

const wallet = xpla.wallet(mk);



const storeCode = new MsgStoreCode(
    wallet.key.accAddress,
    fs.readFileSync('hyperx_pandora_nft_contract_bg.wasm').toString('base64')
);


const storeCodeTx = await wallet.createAndSignTx({
    msgs: [storeCode],
});
const storeCodeTxResult = await xpla.tx.broadcast(storeCodeTx);

console.log(storeCodeTxResult);
//
// if (isTxError(storeCodeTxResult)) {
//     throw new Error(
//         `store code failed. code: ${storeCodeTxResult.code}, codespace: ${storeCodeTxResult.codespace}, raw_log: ${storeCodeTxResult.raw_log}`
//     );
// }
//
// const {
//     store_code: { code_id },
// } = storeCodeTxResult.logs[0].eventsByType;
