interface IRatingPlanActivations {
    ActivationTime: string; // Time when this profile will become active, defined as unix epoch time
    RatingPlanId: string; // Id of RatingPlan profile
    FallbackSubjects: string; // So we follow the api
}
export interface ISetRatingProfileReq {
    Tenant: string;     // Tenant's Id
    Category: string;                // TypeOfRecord
    Subject: string;               // Rating subject, usually the same as account
    Overwrite: boolean;                  // Overwrite if exists
    RatingPlanActivations: IRatingPlanActivations[];
}