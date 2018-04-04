class UrlBuilder {
    constructor(url, params) {
        this.url = null;
        this.params = new Map();

        this.addUrl(url);
        this.addParams(params);
    }

    addUrl(url) {
        if (url == null) {
            throw new Error('invalidParamUrl');
        }

        this.url = url;

        return this;
    }

    addParam(key, value) {
        if (key == null) {
            throw new Error('invalidParamKey');
        }

        this.params.set(key, value);

        return this;
    }

    addParams(params) {
        params = params || new Map();

        if (!(params instanceof Map)) {
            throw new Error('invalidParameterType');
        }

        params.forEach((value, key) => {
            this.addParam(key, value);
        });

        return this;
    }

    toString() {
        return `${this.url}${this.toSearchString()}`;
    }

    toSearchString() {
        let paramsString = [];

        this.params.forEach((value, key) => {
            paramsString.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
        });

        return `?${paramsString.join('&')}`;
    }

    static getLocationParam(key) {
        return (new URLSearchParams(window.location.search)).get(key);
    }
}

export default UrlBuilder;
