import { RecordService } from "../../../../src/services/records-service";
import { recordSchema } from "../../../../src/db/schema/records";

describe('Records Service', () => {
    it('should return records from service', async () => {
        const mockRecords = [{
            key: "TAKwGc6Jr4i8Z487",
            createdAt: "2017-01-28T01:22:14.398Z",
            totalCount: 310
        }];
        const mockResponseData = {
            code: 0,
            msg: "Success",
            records: mockRecords
        };
        jest.spyOn(recordSchema, 'aggregate').mockImplementation(() => <any>mockRecords);
        const res = await new RecordService().getFilteredRecords(100, 500, new Date("2014-05-31T07:43:27.060Z"), new Date("2017-05-31T07:43:27.060Z"));
        expect(res.data).toEqual(mockResponseData);
    });
});