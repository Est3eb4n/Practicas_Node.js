import {client, main} from './helpers/db.js';
import {TechnologyCategory} from './collections/technilogyCategories.js';

const db = await main();

const categoryCollection = new TechnologyCategory(db);


 await categoryCollection.create();


 client.close()