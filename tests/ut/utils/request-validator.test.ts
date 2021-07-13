import { validateRecordRequest } from "../../../src/utils/request-validator";

const mockedRes = {
    send: function (data: any) { },
    status: function (responseStatus: any) {
        // This next line makes it chainable
        return this;
    }
}
describe('validateRecordRequest', () => {
    it('valid parameters', () => {
        const mockedNext = jest.fn();
        const mockedReq = {
            body: {
                minCount: 100,
                maxCount: 500,
                startDate: "2014-05-31T07:43:27.060Z",
                endDate: "2017-05-31T07:43:27.060Z"
            }
        };
        const result = validateRecordRequest(mockedReq, mockedRes, mockedNext);
        expect(mockedNext.mock.calls.length).toBe(1);
        // expect(mockedRes).toEqual(result);
    });

    it('should have startDate as required field', () => {
        const mockedNext = jest.fn();
        const mockedReq = {
            body: {
                minCount: 100,
                maxCount: 500,
                endDate: "2017-05-31T07:43:27.060Z"
            }
        };
        const mockData = {
            "code": 400,
            "error": ["startDate required",],
            "msg": "Bad Request",
        }
        const result = validateRecordRequest(mockedReq, mockedRes, mockedNext);
        expect(mockedNext.mock.calls.length).toBe(0);
        expect(result.data).toEqual(mockData);
    });

    it('should have starDate older than endDate', () => {
        const mockedNext = jest.fn();
        const mockedReq = {
            body: {
                minCount: 100,
                maxCount: 500,
                startDate: "2018-05-31T07:43:27.060Z",
                endDate: "2017-05-31T07:43:27.060Z"
            }
        };
        const mockData = {
            "code": 400,
            "error": ["starDate should be older than endDate"],
            "msg": "Bad Request",
        }
        const result = validateRecordRequest(mockedReq, mockedRes, mockedNext);
        expect(mockedNext.mock.calls.length).toBe(0);
        expect(result.data).toEqual(mockData);
    });

    it('should have starDate older than endDate, mackCount should be number', () => {
        const mockedNext = jest.fn();
        const mockedReq = {
            body: {
                minCount: 100,
                maxCount: "500",
                startDate: "2018-05-31T07:43:27.060Z",
                endDate: "2017-05-31T07:43:27.060Z"
            }
        };
        const mockData = {
            "code": 400,
            "error": ["starDate should be older than endDate", "maxCount should be a number"],
            "msg": "Bad Request",
        }
        const result = validateRecordRequest(mockedReq, mockedRes, mockedNext);
        expect(mockedNext.mock.calls.length).toBe(0);
        expect(result.data).toEqual(mockData);
    });
});