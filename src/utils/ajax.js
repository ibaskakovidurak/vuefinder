export const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

export const token = localStorage.getItem('token')

export default (url, { method = 'GET', params = {}, json = true, signal = null }) => {
    const init = { method: method }
    init.signal = signal
    init.headers = { }
    // init.mode = 'cors'
    init.headers['Content-Type'] = 'application/json';
    init.headers['Accept'] = 'application/json';
    init.headers['Authorization'] = `Bearer ${token}`
    init.headers['Cache-Control'] = 'no-cache';
    init.headers['Origin'] = window.location.origin;
    init.headers['Access-Control-Allow-Origin'] = window.location.origin;
    init.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
    init.headers['Access-Control-Allow-Headers'] = '*';
    init.headers['Access-Control-Allow-Credentials'] = true;

    if (method === 'GET') {
        url += '?' + new URLSearchParams(params)
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

    return fetch(url, init).then((response) => {
        if (response.ok) {
            return json ? response.json() : response.text()
        }
        return response.json().then(Promise.reject.bind(Promise))
    })
}
