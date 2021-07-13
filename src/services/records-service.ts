import { recordSchema } from "../db/schema/records";
import { StatusType } from '../enums/status-type';
import { ApiResponse } from "../models/api-response";
import { BaseService } from "./base-service";

export class RecordService extends BaseService {

    /**
     * @param  {number} minCount
     * @param  {number} maxCount
     * @param  {Date} startDate
     * @param  {Date} endDate
     * @returns Promise
     * Get filtered records based on min/max count range and start/end date range 
     */
    public async getFilteredRecords(minCount: number, maxCount: number, startDate: Date, endDate: Date): Promise<ApiResponse> {
        let records = null;
        try {
            records = await recordSchema.aggregate([
                {
                    $project: {
                        totalCount: { $sum: "$counts" },
                        key: 1,
                        createdAt: 1,
                        _id: 0
                    }
                },
                {
                    $match: {
                        createdAt: { $gte: new Date(startDate), $lte: new Date(endDate) },
                        totalCount: { $gt: minCount, $lt: maxCount }
                    }
                }
            ]);
        } catch (err) {
            return this.sendResponse(StatusType.SERVER_ERROR, []);
        }
        return this.sendResponse(StatusType.SUCCESS, records);
    }
}