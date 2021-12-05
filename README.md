## Getting Started
Install the dependencies
```
npm install
#or
yarn install
```

Fill out the `.env_example` with values from `pscale`
Change the name of `.env_example` to `.env.local`
`.env.local` is already in the `.gitignore` file. Do not push this file to github because it has a token for the database in it.
```
mv .env_example .env.local
```
Next source the .env.local to your shell / terminal
```
source .env.local
```
Verify the values are in your `env`
```
env | grep PLANET
```


Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/events](http://localhost:3000/api/events). This endpoint can be edited in `pages/api/events.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
