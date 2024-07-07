import { IFile } from '@/store/slices/sounds.interface';
import { BehaviorSubject } from 'rxjs';

export const obsPlayer = new BehaviorSubject<IFile>({} as IFile);
