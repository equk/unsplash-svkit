import { env as public_env } from '$env/dynamic/public';

const api_clientid = public_env.PUBLIC_API_CLIENTID;
const api_url = `https://api.unsplash.com/search/photos?page=1&per_page=12&client_id=${api_clientid}&query=neon`;

export const load = async ({ fetch }) => {

  const fetchImages = async () => {
    const imageReq = await fetch(api_url)
    const imageData = await imageReq.json()
    return imageData.results
  }

  return {
    images: fetchImages(),
  };
};
