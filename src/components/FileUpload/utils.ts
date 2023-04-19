const inputTypesAllowed = (typesAccepted: string[]) => {
  let types = ''

  typesAccepted && typesAccepted.forEach((type: any) => {
    switch (type) {
      case 'images':
        types += 'image/apng, image/bmp, image/gif, image/jpeg, image/pjpeg, image/png, image/svg+xml, image/tiff, image/webp, image/x-icon, '
        break
      case 'svg':
        types += 'image/svg+xml, '
        break
      case 'png':
        types += 'image/png, '
        break
      case 'webp':
        types += 'image/webp, '
        break
      case 'jpeg':
        types += 'image/jpeg, '
        break
      case 'gif':
        types += 'image/gif, '
        break
      case 'pdf':
        types += 'application/pdf, '
        break
      case 'excel':
        types += 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, '
        break
      case 'word':
        types += 'application/vnd.openxmlformats-officedocument.wordprocessingml.document, '
        break
      case 'powerpoint':
        types += 'application/vnd.openxmlformats-officedocument.presentationml.presentation, '
        break
      default:
        break
    }
  })

  return types
}

const generateId = () => {
  const date = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2);
  return random + date;
}

export default {
  generateId,
  inputTypesAllowed
}