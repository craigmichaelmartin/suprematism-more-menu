import { AlignType } from './align.type';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export interface StateInterface {
  alignSubject: Subject<AlignType>;
  align$: Observable<AlignType>;
  vividSubject: Subject<boolean>;
  vivid$: Observable<boolean>;
  visibleSubject: Subject<boolean>;
  visible$: Observable<boolean>;
  label?: string;
  clickOpen: boolean;
  hoverOpen: boolean;
  disableHoverAfterClickTimeout: number;
  disableClickAfterHoverTimeout: number;
  fillHeight: boolean;
  delayClose: number;

  // hack: see note in itemUpdated fn
  visibleOriginal?: boolean;
  vividOriginal?: boolean;
}
