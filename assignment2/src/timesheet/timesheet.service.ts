import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Timesheet } from './timesheet.schema';

@Injectable()
export class TimesheetService {
    constructor(@InjectModel(Timesheet.name) private timesheetModel: Model<Timesheet>) {}

    async create(createTimesheetDto: Partial<Timesheet>): Promise<Timesheet> {
        const createdTimesheet = new this.timesheetModel(createTimesheetDto);
        return createdTimesheet.save();
    }

    async findAll(): Promise<Timesheet[]> {
        return this.timesheetModel.find().exec();
    }
}
