import { deleteSync } from 'del';
import { path as appPath } from '../config/path.js';

export const reset = (done) => {
    deleteSync(appPath.clean);
    done();
};