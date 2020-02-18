import { } from "module";
import { post } from "request-promise";
import { IGetAccountsReq } from './reqs/GetAccounts';
import { IAccount } from './entities/account';
import { IGetDestinationsReq } from './reqs/GetDestinations';
import { IDestination } from './entities/destination';
import { IAddBalanceReq } from './reqs/AddBalance';
import { ITenantWithPagingReq } from './reqs/index';
import { IGetRatingProfileRes } from './res/GetRatingProfile';
import { ISetRatingProfileReq } from './reqs/SetRatingProfile';
class RpcReq {
    id: number;
    jsonrpc = "2.0";
    method: string;
    params: any;

    constructor(id: number, method: string, params: any) {
        this.id = id;
        this.method = method;
        this.params = params;
    }

}

interface RpcRes<T> {
    id: number;
    result: T;
    error: string | null;
}

class CgratesRpcClient {
    /**
     *
     */
    constructor(private url: string) {
    }
    protected doreq<T>(r: RpcReq) {
        var options = {
            body: r,
            json: true,
            timeout: 3000
        };
        return post(this.url, options).promise() as Promise<RpcRes<T>>;
    }
}

export class ApierV2 extends CgratesRpcClient {
    GetAccounts(req: IGetAccountsReq) {
        return this.doreq<IAccount[]>(new RpcReq(1, 'ApierV2.GetAccounts', [req]));
    }
    GetDestinations(req: IGetDestinationsReq) {
        return this.doreq<IDestination[]>(new RpcReq(1, 'ApierV2.GetDestinations', [req]));
    }
}

export class ApierV1 extends CgratesRpcClient {
    SetDestination(req: IDestination & {Overwrite? :boolean}) {
        return this.doreq<string>(new RpcReq(1, 'ApierV1.SetDestination', [req]));
    }
    RemoveDestination(req: {
        DestinationIDs: string[];
        Prefixes: string[];
    }) {
        return this.doreq<string>(new RpcReq(1, 'ApierV1.RemoveDestination', [req]));
    }
    AddBalance(req: IAddBalanceReq) {
        return this.doreq<string>(new RpcReq(1, 'ApierV1.AddBalance', [req]));
    }
    RemoveBalances(req: IAddBalanceReq) {
        return this.doreq<string>(new RpcReq(1, 'ApierV1.AddBalance', [req]));
    }
    GetRatingProfileIDs(req: ITenantWithPagingReq) {
        return this.doreq<string[]>(new RpcReq(1, 'ApierV1.GetRatingProfileIDs', [req]));
    }
    GetRatingProfile(req: {
        Tenant: string;
        Category: string;
        Subject: string;//*any
    }) {
        return this.doreq<IGetRatingProfileRes>(new RpcReq(1, 'ApierV1.GetRatingProfile', [req]));
    }

    GetRatingPlanIDs(req: ITenantWithPagingReq) {
        return this.doreq<string[]>(new RpcReq(1, 'ApierV1.GetRatingPlanIDs', [req]));
    }

    GetDestination(req: string) {
        return this.doreq<IDestination>(new RpcReq(1, 'ApierV1.GetDestination', [req]));
    }

    SetRatingProfile(req: ISetRatingProfileReq) {
        return this.doreq<string>(new RpcReq(1, 'ApierV1.SetRatingProfile', [req]));
    }

    RemoveRatingProfile(req: {
        Tenant: string
        Category: string
        Subject: string
    }) {
        return this.doreq<string>(new RpcReq(1, 'ApierV1.RemoveRatingProfile', [req]));
    }
}

export class Apier {
    v1:ApierV1;
    v2:ApierV2;
    constructor(url:string){
        this.v1 = new ApierV1(url);
        this.v2 = new ApierV2(url);
    }
}