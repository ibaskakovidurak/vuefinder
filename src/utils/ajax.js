export const csrf = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content')

export const token = localStorage.getItem('token')

export default (url, { method = 'GET', params = {}, json = true, signal = null }) => {
    const init = { method: method }
    init.signal = signal
    init.headers = { }
    // init.headers['Content-Type'] = config.isFileUpload ? 'multipart/form-data' : 'application/json';
    init.mode = 'cors'
    // init.headers['Access-Control-Allow-Origin'] = '*';
    // init.headers['Access-Control-Allow-Methods'] = '';
    // init.headers['Access-Control-Allow-Headers'] = '*';
    init.headers.Authorization = `Bearer ${token}`

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
