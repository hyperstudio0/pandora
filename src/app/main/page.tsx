'use client';

import React, {useEffect, useState} from 'react';
import MainView from '../../sections/main/view/mainView';
import {
    WalletProvider as XPLAProvider,
    getChainOptions,
} from '@xpla/wallet-provider';
import {MainPageProvider} from "./MainPageProvider";
import { oasysChainInfo } from './OasysChainInfo';
// ----------------------------------------------------------------------

// export const metadata = {
//   title: 'pandora',
// };

export default function MainPage() {
    const [chainOptions, setChainOptions] = useState<any>(null);

    useEffect(() => {
        getChainOptions().then((options) => {
            setChainOptions(options);
        });
    }, []);

    // 체인 옵션이 로드되지 않았다면 로딩 표시 (또는 다른 로딩 컴포넌트 사용)
    if (!chainOptions) {
        return <div>Loading...</div>;
    }

    return (
        <MainPageProvider>
            <XPLAProvider {...chainOptions}>
                <MainView/>
            </XPLAProvider>
        </MainPageProvider>
    );
}
