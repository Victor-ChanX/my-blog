const baseUrl = 'http://127.0.0.1:8000/';

const fetchWrapper = {
  get(endpoint, headers = {}) {
    return fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    }).then(handleResponse);
  },
  post(endpoint, body, headers = {}) {
    return fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers
      },
      body: JSON.stringify(body)
    }).then(handleResponse);
  }
};

function handleResponse(response) {
  return response.json().then(data => {
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export default fetchWrapper;
