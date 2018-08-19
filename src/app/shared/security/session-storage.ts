
export class SessionStorage {

    /**
     * @param key A DOMString containing the name of the key you want to create/update.
     * @param data A DOMString containing the value you want to give the key you are creating/updating.
     */
    static setDataInSession(key: string, data: string) {
         sessionStorage.setItem(key, data);
    }

    /**
     * @param key A DOMString containing the name of the key you want to remove
     */
    static removeDataFromSession(key: string) {
        sessionStorage.removeItem(key);
    }

    /**
     * @param key A DOMString contaning the name of the key you want to be returned
     */
    static returnDataFromSession(key: string) {
        return sessionStorage.getItem(key);
    }


}
