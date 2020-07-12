import { v4 as uuidV4 } from 'uuid';
import { UUID } from '../types';

export const generateUUID = (): UUID => {
  return uuidV4();
};
