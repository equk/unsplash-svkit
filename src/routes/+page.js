import { env as public_env } from '$env/dynamic/public';

export const load = async () => {
  console.log(public_env.PUBLIC_API_CLIENTID);
  return {};
};
