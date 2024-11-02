import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimesheetModule } from './timesheet/timesheet.module';

@Module({
  imports: [TimesheetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
