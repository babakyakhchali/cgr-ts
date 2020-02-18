export interface IGetAccountsReq {
    Tenant: string;
    AccountIDs: string[];
    Offset: number; // Set the item offset
    Limit: number; // Limit number of items retrieved
    Filter?: Map<string, boolean>;
}