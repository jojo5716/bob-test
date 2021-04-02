const db = require('../../server/models');

const Card = db.card;

const MONGO_CONFIGURATION = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
const MONGO_URL = 'mongodb://localhost:27017/bob_test';
const MAX_CARDS = 3;

async function createUserTypes() {
    for (let i = 0; i <= MAX_CARDS; i += 1) {
        const card = new Card({
            name: `Card ${i}`,
            bags: i,
        });

        await card.save();
    }
}

async function init() {
    try {
        const config = await db.mongoose.connect(MONGO_URL, MONGO_CONFIGURATION);

        await createUserTypes();

        console.log('Finish');
    } catch (error) {
        console.log('[ERROR]');
        console.log(error);
    }
}


init();