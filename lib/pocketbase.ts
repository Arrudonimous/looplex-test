import PocketBase from 'pocketbase';
require('dotenv').config();

const pb = new PocketBase('https://pocketbase-looplex.fly.dev');

export default pb;
