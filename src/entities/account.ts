import { KeyFlagMap } from "..";

interface IBalance {
    Uuid: string;
    ID: string;
    Value: number;
    ExpirationDate: Date;
    Weight: number;
    DestinationIDs: KeyFlagMap;
    RatingSubject: string;
    Categories: KeyFlagMap;
    SharedGroups: KeyFlagMap;
    Timings?: any;
    TimingIDs: KeyFlagMap;
    Disabled: boolean;
    Factor?: any;
    Blocker: boolean;
}
export interface IAccount {
    ID: string;
    BalanceMap: { [key: string]: IBalance[] } | {};
    UnitCounters?: any;
    ActionTriggers?: any;
    AllowNegative: boolean;
    Disabled: boolean;
    UpdateTime: Date;
}