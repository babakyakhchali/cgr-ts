export interface IAction {
    Identifier: string;   // Identifier mapped in the code
    BalanceId: string;   // Balance identification string (account scope)
    BalanceUuid: string;   // Balance identification string (global scope)
    BalanceType: string;   // Type of balance the action will operate on
    Units: number; // Number of units to add/deduct
    ExpiryTime: string;  // Time when the units will expire
    Filter: string;// The condition on balances that is checked before the action
    TimingTags: string;  // Timing when balance is active
    DestinationIds: string;  // Destination profile id
    RatingSubject: string; // Reference a rate subject defined in RatingProfiles
    Categories: string;// category filter for balances
    SharedGroups: string; // Reference to a shared group
    BalanceWeight: number;// Balance weight
    ExtraParameters: string;
    BalanceBlocker: string;
    BalanceDisabled: string;
    Weight: number; // Action's weight
}