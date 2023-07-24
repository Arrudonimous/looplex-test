import PocketBase from 'pocketbase';
require('dotenv').config();

const pb = new PocketBase(process.env.PB_URL);

export default pb;
