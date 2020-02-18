export interface IAddBalanceReq {
    Tenant: string;
    Account: string;
    BalanceType: string;
    value: number;
    Balance: {
        ID: string;
        UUID?: string;
        Value?:number;
        ExpiryTime?:string;
        Weight:number;
        RatingSubject?:string;
        SharedGroups?:string;
        TimingIDs?:string;
        Disabled?:boolean;
        Blocker?:boolean;
        Categories?: string;
        DestinationIDs?: string;
    };
    Overwrite: boolean;
}
