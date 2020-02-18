export interface RatingPlanActivation {
    ActivationTime: Date;
    RatingPlanId: string;
    FallbackKeys?: any;
}

export interface IGetRatingProfileRes {
    Id: string;
    RatingPlanActivations: RatingPlanActivation[];
}