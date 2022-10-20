<script>
  import { env as public_env } from '$env/dynamic/public';

  let searchTerm = '';

  const api_clientid = public_env.PUBLIC_API_CLIENTID;
  const api_url = `https://api.unsplash.com/search/photos?page=1&per_page=12&client_id=${api_clientid}`;

  let searchImages = fetchImages();

  async function fetchImages(searchTerm = 'neon') {
    const imageRes = await fetch(`${api_url}&query=${searchTerm}`);
    const imageData = await imageRes.json();
    console.log(imageData.results);
    return imageData.results;
  }

  function handleSubmit() {
    searchImages = fetchImages(searchTerm);
  }
</script>

<div class="flex w-full flex-col items-center justify-center rounded-lg p-8">
  <div class="mt-8 text-center">
    <h1 class="text-5xl">Unsplash Search</h1>
  </div>
  <div class="m-8 flex">
    <div class="mb-3 xl:w-96">
      <div class="input-group relative flex items-stretch w-full mb-4">
        <form on:submit|preventDefault={handleSubmit}>
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            bind:value={searchTerm}
          />
        </form>
        <button
          class="btn inline-block ml-3 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
          type="button"
          id="button-addon2"
          on:click|preventDefault={handleSubmit}
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="search"
            class="w-4"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <section class="overflow-hidden text-gray-700 ">
    <div class="container px-5 py-2 mx-auto lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <img src="640_400.png" alt="imageresult" />
      </div>
    </div>
  </section>
  <div class="mt-3">
    <p>
      Created by <a href="https://github.com/equk">equk</a>
    </p>
  </div>
</div>
