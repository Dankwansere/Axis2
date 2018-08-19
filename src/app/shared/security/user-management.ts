import { SessionStorage } from './session-storage';
import { Constants } from '../../commons/constants';
/**
 * Handles all user management related tasks
 */
export class UserManagement {
    static invalidateUser() {
        SessionStorage.removeDataFromSession(Constants.USER_SESSION_KEY);
    }
}
