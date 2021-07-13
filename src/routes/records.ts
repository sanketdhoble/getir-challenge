import express = require('express');
const router = express.Router();
import { RecordService } from '../services/records-service';


// returns filters records based on min/max count and start/end Date
router.post('/', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const recordService = new RecordService();
        const apiResponse = await recordService.getFilteredRecords(req.body.minCount, req.body.maxCount, req.body.startDate, req.body.endDate);
        res.status(apiResponse.status).send(apiResponse.data);
    } catch (err) {
        return next(err);
    }
});
export const recordsRouter = router;