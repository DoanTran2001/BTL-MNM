import http from 'utils/https'

const URL = 'categories'

const categoryApi = {
  getCategories() {
    return http.get(URL)
  }
}

export default categoryApi
