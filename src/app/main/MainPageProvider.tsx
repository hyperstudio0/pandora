import {createContext, useCallback, useContext, useEffect, useMemo, useState,} from 'react';

// ----------------------------------------------------------------------


type Props = {
    a: number;
    b: string;
    c: VoidFunction;

    selectTokens: any[];
    handleSetSelectTokens: (token: any) => void;
    handleRemoveTokens: (tokenId: string) => void;

    totalWeight: number;
};
const initialState: Props = {
    a: 0,
    b: '',
    c: () => {
    },

    selectTokens: [],
    handleSetSelectTokens: (token: any) => {
    },
    handleRemoveTokens: (tokenId: string) => {
    },

    totalWeight: 0,
};
export const MainPageContext = createContext(initialState);

export const useMainPageContext = () => {
    const context = useContext(MainPageContext);

    if (!context)
        throw new Error(
            'useMainPageContext must be use inside MainPageProvider'
        );

    return context;
};

type ManagerProviderProps = {
    children: React.ReactNode;
};

export function MainPageProvider({children}: ManagerProviderProps) {

    const a = 0;
    const b = '';
    const c = useCallback(() => {

    }, []);


    const [selectTokens, setSelectTokens] = useState<any[]>([]);
    const [totalWeight, setTotalWeight] = useState<number>(0);

// 토큰을 selectTokens에 추가하는 함수
    const handleSetSelectTokens = useCallback(
        (token: any) => {
            setSelectTokens(prevTokens => {
                const tokenId = token.id;
                // token.id가 selectTokens에 이미 존재하는지 검사
                const isTokenExist = prevTokens.some(t => t.id === tokenId);

                // 이미 존재하지 않는 경우에만 추가
                if (!isTokenExist) {
                    return [...prevTokens, token];
                }
                return prevTokens;
            });
        },
        [] // 의존성 배열, 여기서는 빈 배열을 사용하여 컴포넌트 마운트 시 한 번만 함수가 생성되도록 함
    );

// 토큰을 selectTokens에서 제거하는 함수
    const handleRemoveTokens = useCallback(
        (tokenId: string) => {
            setSelectTokens(prevTokens => prevTokens.filter(t => t.id !== tokenId));
        },
        [] // 의존성 배열, 여기서는 빈 배열을 사용하여 컴포넌트 마운트 시 한 번만 함수가 생성되도록 함
    );

// selectTokens 상태가 변경될 때마다 totalWeight 업데이트
    useEffect(() => {
        const newTotalWeight = selectTokens.reduce((total, token) => Number(total) + Number(token.weight), 0);
        setTotalWeight(newTotalWeight);
    }, [selectTokens]);

    const memoizedValue = useMemo(
        () => ({
            a,
            b,
            c,

            selectTokens,
            setSelectTokens,

            handleSetSelectTokens,
            handleRemoveTokens,

            totalWeight
        }),
        [
            a,
            b,
            c,

            selectTokens,
            setSelectTokens,

            handleSetSelectTokens,
            handleRemoveTokens,

            totalWeight]
    );

    return (
        <MainPageContext.Provider value={memoizedValue}>
            {children}
        </MainPageContext.Provider>
    );
}
