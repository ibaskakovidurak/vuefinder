export const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

export const token = localStorage.getItem('token')

export default (url, { method = 'GET', params = {}, json = true, signal = null }) => {
    let urlFinder = 'https://sf-core.7de-dev.space/api/vuefinder'
    const init = { method: method }
    init.signal = signal
    init.headers = { }
    // init.mode = 'cors'
    init.headers['Content-Type'] = 'application/json';
    init.headers['Accept'] = 'application/json, */*';
    init.headers['Authorization'] = `Bearer ${token}`
    init.headers['Access-Control-Allow-Origin'] = '*';
    init.headers['Access-Control-Allow-Methods'] = '';
    init.headers['Access-Control-Allow-Headers'] = '*';

    if (method === 'GET') {
        urlFinder += '?' + new URLSearchParams(params)
    } else {
        // if (csrf) {
        //     init.headers['X-CSRF-Token'] = csrf;
        // }

        const formData = new FormData()

        for (const [key, value] of Object.entries(params)) {
            formData.append(key, value)
        }

        init.body = formData
    }

    return fetch(urlFinder, init).then((response) => {
        if (response.ok) {
            return json ? response.json() : response.text()
        }
        return response.json().then(Promise.reject.bind(Promise))
    })
}
