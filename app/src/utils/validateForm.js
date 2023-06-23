const validateForm = (value) => {
  const lettersAndSpacesRegex = /^[a-zA-Z\s]+$/
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/

  if (!value) {
    return 'Campo obrigatório'
  }

  if (value.match(dateRegex)) {
    return ''
  }

  if (!value.match(lettersAndSpacesRegex)) {
    return 'Campo deve conter apenas letras'
  }

  if (value.length < 3) {
    return 'Campo deve ter no mínimo 3 caracteres'
  }

  return ''
}

export default validateForm
