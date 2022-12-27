export const generateNameId = ({ name, _id }) => {
  // Phương thức encodeURIComponent() có chức năng mã hoá 1 chuỗi URI, mã hoá tất cả những kí tự đặc biệt có trong URI
  // /\s/: khoảng trắng
  // Thay thế kí tự ' ' trong tên sp thành '-', thay thế kí tự '%' thành ''
  return encodeURIComponent(`${name.replace(/\s/g, '-').replace(/%/g, '')}-i.${_id}`)
}
export const formatMoney = (price, character = '.') => {
  return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, character)
}

export const getIdFromNameId = (url) => {
  const arr = url.split('-i.')
  return arr[arr.length - 1]
}
