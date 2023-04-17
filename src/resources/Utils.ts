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
};

export default {
  parceJSON,
  isValidEmail,
  objectToQueryString
}