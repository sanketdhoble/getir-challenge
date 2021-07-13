import { StatusType } from "../../../src/enums/status-type";
import { ApiResponseType } from "../../../src/utils/api-response-type";

describe('ApiResponseType', () => {
    it('should return badrequest error response', () => {
        const mockResponse = {
            status: 400,
            data: {
                code: 400,
                msg: StatusType.BAD_REQUEST,
                error: ["parameter missing"]
            }
        }
        const response = new ApiResponseType(StatusType.BAD_REQUEST).sendResponse([], ["parameter missing"]);
        expect(response).toEqual(mockResponse);
    });

    it('should return success response', () => {
        const mockResponse = {
            status: 200,
            data: {
                code: 0,
                msg: StatusType.SUCCESS,
                records: []
            }
        }
        const response = new ApiResponseType(StatusType.SUCCESS).sendResponse([]);
        expect(response).toEqual(mockResponse);
    });
});