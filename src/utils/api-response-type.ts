import { StatusCode, StatusType } from "../enums/status-type"
import { ApiResponse } from "../models/api-response";

export class ApiResponseType {
    private statusType: StatusType;

    constructor(statusType: StatusType) {
        this.statusType = statusType;
    }

    public sendResponse(records: any, errors?: any): ApiResponse {
        switch (this.statusType) {
            case StatusType.SUCCESS:
                return this.sendResponseHelper(StatusCode.SUCCESS, 0, this.statusType, records);
            case StatusType.BAD_REQUEST:
                return this.sendResponseHelper(StatusCode.BAD_REQUEST, StatusCode.BAD_REQUEST, this.statusType, records, errors);
            case StatusType.NOT_FOUND:
                return this.sendResponseHelper(StatusCode.NOT_FOUND, StatusCode.NOT_FOUND, this.statusType, records, errors);
            default:
                return this.sendResponseHelper(StatusCode.SERVER_ERROR, StatusCode.SERVER_ERROR, StatusType.SERVER_ERROR, records, errors);
        }
    }

    private sendResponseHelper(statusCode: number, code: number, statusType: StatusType, records: any, errors?: any): ApiResponse {

        if (errors) {
            return {
                status: statusCode,
                data: {
                    code: code,
                    msg: statusType,
                    error: errors
                }
            }
        } else {
            return {
                status: statusCode,
                data: {
                    code: code,
                    msg: statusType,
                    records: records
                }
            }
        }
    }
}