export interface ITiming {
    Years: any[];
    Months: any[];
    MonthDays: any[];
    WeekDays: any[];
    StartTime: string;
    EndTime: string;
}

export interface IRate {
    GroupIntervalStart: number;
    Value: number;
    RateIncrement: number;
    RateUnit: number;
}

export interface IRating {
    ConnectFee: number;
    RoundingMethod: string;
    RoundingDecimals: number;
    MaxCost: number;
    MaxCostStrategy: string;
    Rates: IRate[];
}


export interface IRatingPlan {
    Id: string;
    Timings: {
        [key: string]: ITiming;
    },
    Ratings: {
        [key: string]: IRating;
    },
    DestinationRates: {
        [key: string]: {    //key is DestinationId
            Timing: string, //id from Timings
            Rating: string, //id from Ratings
            Weight: number
        }[];
    }
}