const promiseMap: {[id: string]: Promise<any>} = {};

export function loadExternalScriptAsync(id: string, url: string) {
    if (promiseMap[id]) {
        return promiseMap[id];
    }

    promiseMap[id] = new Promise((resolve, reject) => {
        if (document.getElementById(id)) {
            return reject('sdk loading has been already started');
        }

        const scriptElement: HTMLScriptElement = document.createElement('script');
        scriptElement.id = id;
        scriptElement.src = url;
        scriptElement.onload = () => {
            resolve();
        };
        const firstScriptElement = document.getElementsByTagName('script')[0];
        if (!firstScriptElement || !firstScriptElement.parentNode) {
            return reject('cannot insert script');
        }
        firstScriptElement.parentNode.insertBefore(scriptElement, firstScriptElement);
    });

    return promiseMap[id];
}
