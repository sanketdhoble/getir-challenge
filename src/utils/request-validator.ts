import Moment = require('moment');
import { StatusType } from '../enums/status-type';
import { ApiResponseType } from './api-response-type';

export const validateRecordRequest = (req: any, res: any, next: any): any => {
    const recordRequest = req.body;
    var dateFormat = 'YYYY-MM-DD';
    const errors = [];

    if (recordRequest.startDate) {
        const isValidDate = Moment(Moment(recordRequest.startDate).format(dateFormat), dateFormat, true).isValid();
        if (!isValidDate) {
            errors.push(`startDate format should be: ${dateFormat}`);
        }
    } else {
        errors.push('startDate required');
    }

    if (recordRequest.endDate) {
        const isValidDate = Moment(Moment(recordRequest.endDate).format(dateFormat), dateFormat, true).isValid();
        if (!isValidDate) {
            errors.push(`endDate format should be: ${dateFormat}`);
        }
    } else {
        errors.push('endDate required');
    }

    // starDate should be older than endDate
    if (recordRequest.startDate && recordRequest.endDate && Moment(recordRequest.startDate).isAfter(Moment(recordRequest.endDate))) {
        errors.push('starDate should be older than endDate');
    }

    if (recordRequest.minCount === undefined) {
        errors.push("minCount required");
    }
    if (typeof recordRequest.minCount !== 'number') {
        errors.push("minCount should be a number");
    }

    if (recordRequest.maxCount === undefined) {
        errors.push("maxCount required");
    }
    if (typeof recordRequest.maxCount !== 'number') {
        errors.push("maxCount should be a number");
    }

    if (Number(recordRequest.maxCount) < Number(recordRequest.minCount)) {
        errors.push("maxCount should be greater than minCount");
    }

    if (errors.length === 0) {
        next();
    } else {
        const response = new ApiResponseType(StatusType.BAD_REQUEST).sendResponse([], errors);
        res.status(response.status).send(response.data);
        return response;
    }
};