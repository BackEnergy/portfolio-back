import { IsEnum } from 'class-validator';
import { TaskStatus } from '../project-status.enum';

export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
