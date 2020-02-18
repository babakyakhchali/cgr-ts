import { ApierV2, ApierV1 } from '../client';
import { config } from "dotenv";
import { expect } from 'chai';
config({ path: '.env.test' })
if (!process.env.URL) {
    throw 'No cgrates url specified. Please create .env.test and set URL there';
}
const clientV2 = new ApierV2(process.env.URL);
const clientV1 = new ApierV1(process.env.URL);
describe('Testing account rpc calls', async function () {
    this.timeout(60 * 1000);
    it('Should get accounts', async function () {
        let r = await clientV2.GetAccounts({ Tenant: 'cgrates.org', AccountIDs: [], Limit: 10, Offset: 0 });
        expect(r.error).to.be.null;
        expect(r.result).to.be.an('array');
    })
    it('Should test destinations CRUD', async function () {
        let id = 'TEST_DST';
        let s = await clientV1.SetDestination({ Id: id, Prefixes: ['1', '2'] });
        expect(s.result).to.be('OK');
        let r = await clientV2.GetDestinations({ DestinationIDs: [id] });
        expect(r.error).to.be.null;
        expect(r.result).to.be.an('array');
        s = await clientV1.RemoveDestination({ DestinationIDs: [id], Prefixes: [] });
        expect(s.result).to.be('OK');
    })    
})