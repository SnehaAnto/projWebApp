import { Controller, Post, Body, Get } from '@nestjs/common';
import { TimesheetService } from './timesheet.service';
import { Timesheet } from './timesheet.schema';

@Controller('timesheet')
export class TimesheetController {
    constructor(private readonly timesheetService: TimesheetService) {}

    @Post()
    async create(@Body() createTimesheetDto: Partial<Timesheet>): Promise<Timesheet> {
        return this.timesheetService.create(createTimesheetDto);
    }

    @Get()
    async findAll(): Promise<Timesheet[]> {
        return this.timesheetService.findAll();
    }
}
