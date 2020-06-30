class Http {
    get (url, params) {
        return new Promise( (resolve, reject) => {
            console.log('get promise');
            debugger;
            const xhr = new XMLHttpRequest();
            const paramsStr = (params) ? this.getParamsStr(params) : '';

            xhr.withCredentials = true;

            xhr.open('GET', url + paramsStr, true);

            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            xhr.onload = function () {
                console.log('onload');
                debugger;
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(JSON.parse(this.response));
                }
            };

            xhr.onerror = function () {
                let error = new Error("Network Error");

                reject(error);
            };

            xhr.send();
        });
    }

    post (url, data) {
        return new Promise( (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const body = JSON.stringify(data);

            xhr.withCredentials = true;

            xhr.open('POST', url, true);

            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(JSON.parse(this.response));
                }
            };

            xhr.onerror = function () {
                let error = new Error("Network Error");

                reject(error);
            };

            xhr.send(body);
        });
    }

    delete (url, data) {
        return new Promise( (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const body = data ? JSON.stringify(data) : null;

            xhr.withCredentials = true;

            xhr.open('DELETE', url, true);

            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(JSON.parse(this.response));
                }
            };

            xhr.onerror = function () {
                let error = new Error("Network Error");

                reject(error);
            };

            xhr.send(body);
        });
    }

    put (url, data) {
        return new Promise( (resolve, reject) => {
            const xhr = new XMLHttpRequest();
            const body = JSON.stringify(data);

            xhr.withCredentials = true;

            xhr.open('PUT', url, true);

            xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            xhr.onload = function () {
                if (this.status === 200) {
                    resolve(JSON.parse(this.response));
                } else {
                    reject(JSON.parse(this.response));
                }
            };

            xhr.onerror = function () {
                let error = new Error("Network Error");

                reject(error);
            };

            xhr.send(body);
        });
    }

    getParamsStr (data) {
        let result = [];

        for (let key in data) {
            if ( typeof data[key] === "boolean" || data[key] || typeof data[key] === 'number' )
                result.push(`${key}=${data[key]}`);
        }

        return '?' + result.join('&');
    }
}

export default Http;