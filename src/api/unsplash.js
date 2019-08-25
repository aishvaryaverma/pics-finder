import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 08ebcdba41a4da150921d5b5bfd776ba40296c05975d1ac25a39401ee9a44db2'
    },
    onDownloadProgress: (progressEvent) => {
        let percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
        document.querySelector('#requestProgress').setAttribute('value', percentCompleted)
        if(percentCompleted === 100) {
            setTimeout(() => { document.querySelector('#requestProgress').setAttribute('value', 0) }, 1000)
        }
    }
})