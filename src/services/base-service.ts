
import { StatusType } from '../enums/status-type';
import { ApiResponse } from '../models/api-response';
import { ApiResponseType } from '../utils/api-response-type';

// base service can be used to extend common logic for other services
export class BaseService {

    protected sendResponse(statusType: StatusType, records: any, errors?: any): ApiResponse {
        return new ApiResponseType(statusType).sendResponse(records, errors);
    }
}