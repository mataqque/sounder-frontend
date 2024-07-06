import { BehaviorSubject } from 'rxjs';
import { IFile } from '../cards/file.interface';

export const obsPlayer = new BehaviorSubject<IFile>({} as IFile);
