import  imageUrlBuilder  from '@sanity/image-url'
import client from '../sanity'

const useImage = () => {
  const builder = imageUrlBuilder(client);

  const urlFor = (source) => {
    return builder.image(source)
  }
  return urlFor;
}

export default useImage