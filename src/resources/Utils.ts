interface QueryObject {
  [key: string]: any;
}

const objectToQueryString = (obj: QueryObject) => {
  const str = ['?']
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(p + '=' + obj[p])
    }
  return str.join('&')
}

const parceJSON = (jsonString: string): any => {
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (err) {
    console.error(`Error parsing JSON string: ${jsonString}`);
    return null;
  }
}

const isValidEmail = (email: string) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex.test(email);
}

const createUrlForSrc = (imgSrc: any, format: any) => {
  const blob = new Blob([imgSrc], { type: format });
  const urlCreator = window.URL || window.webkitURL;
  const node = {
    imageUrl: urlCreator.createObjectURL(blob),
  };
  return node;
}

const arrayBufferToBase64 = (buffer: ArrayBuffer, type: string) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return `data:${type};base64,${window.btoa(binary)}`;
}

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
  parceJSON,
  generateId,
  isValidEmail,
  createUrlForSrc,
  inputTypesAllowed,
  arrayBufferToBase64,
  objectToQueryString
}