const formatDate = (dateString) => {
  var dateParts = dateString.split('-')
  var year = dateParts[0]
  var month = dateParts[1]
  var day = dateParts[2]
  return day + '/' + month + '/' + year
}

export default formatDate
