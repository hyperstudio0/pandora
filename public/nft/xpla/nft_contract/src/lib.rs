use cosmwasm_std::{
    entry_point, DepsMut, Env, MessageInfo, Response, StdResult,
};
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
pub struct InstantiateMsg {
    pub name: String, // 컨트랙트의 이름을 저장하는 필드입니다.
}

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    TransferNFT { recipient: String, token_id: String }, // NFT를 전송하는 메시지입니다.
}

#[entry_point]
pub fn instantiate(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: InstantiateMsg,
) -> StdResult<Response> {
    // 초기화 로직 구현
    Ok(Response::new().add_attribute("method", "instantiate"))
}

#[entry_point]
pub fn execute(
    deps: DepsMut,
    env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> StdResult<Response> {
    match msg {
        ExecuteMsg::TransferNFT { recipient, token_id } => {
            // NFT 전송 로직 구현
            Ok(Response::new().add_attribute("method", "transfer_nft"))
        },
    }
}
