export interface ITenantWithPagingReq {
    Tenant: string;    
    Offset: number; // Set the item offset
    Limit: number; // Limit number of items retrieved    
}