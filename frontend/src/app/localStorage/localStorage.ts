import { LoginInfo } from '../object/LoginInfo';

export class LocalStorage {
    // Save the logged in user in local storage so that we can remember it
    LOCAL_STORAGE_LOGIN_INFO = 'currentLogin'
    constructor() {}

    load() {
        try {
            var info = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_LOGIN_INFO))
            if (info['login_id']) {
                // We loaded good LoginInfo from a logged in user
                return info
            }
        } catch {
        }

        // We could not load a logged in user
        return new LoginInfo()
    }

    save(loginInfo) {
        localStorage.setItem(this.LOCAL_STORAGE_LOGIN_INFO, JSON.stringify(loginInfo))
    }
}