import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TaskStatus } from './project-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
