class LocalStorage {
    static _key = '__redmart';

    static _getData() {
        const data = localStorage.getItem(LocalStorage._key);

        return (data ? JSON.parse(data) : {});
    }

    static _setData(data) {
        data = data || {};

        localStorage.setItem(LocalStorage._key, JSON.stringify(data));
    }

    static get(key) {
        const data = LocalStorage._getData();

        return data[key];
    }

    static set(key, value) {
        const data = LocalStorage._getData();

        data[key] = value;
        LocalStorage._setData(data);
    }

    static clear() {
        localStorage.clear();
    }
}

export default LocalStorage;
