import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.Pb_URL);

export default pb;