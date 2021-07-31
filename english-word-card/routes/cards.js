const router = require('express').Router();
const Card = require('../models/Card');

router.post('/create', async (req, res) => {
    const { eng_word, rus_word, eng_part_of_speech, 
        rus_part_of_speech, front_img, back_img } = req.body;

    const card = new Card({
        eng_word,
        rus_word,
        eng_part_of_speech,
        rus_part_of_speech,
        front_img,
        back_img,
    });

    try {
        const savedCard = await card.save();
        res.json({
            message: 'Card was created'
        });
    } catch(err) {
        if(err) return res.json({
            message: err,
        });
    };
})

router.post('/createwithfile', async (req, res) => {
    const cards = [];
    
    for(let i = 0; i < cards.length; i++) {
        const card = new Card({
            eng_word: cards[i].match(/([a-zA-Z])+/gm).join(' '),
            rus_word: cards[i].match(/[а-яА-я]+/gm).join(' '),
            eng_part_of_speech: 'test',
            rus_part_of_speech: 'test',
            front_img: 'test',
            back_img: 'test',
        });
    
        try {
            const savedCard = await card.save();
            
        } catch(err) {
            if(err) return res.json({
                message: err,
            });
        };
    }

    res.json({
        message: 'Cards was created'
    });
    
})

router.post('/deletefromarr', async (req, res) => {
    let cards = [];

    for(let i = 0; i < cards.length; i++) {
        try {
            await Card.findOneAndDelete({ rus_word: cards[i].match(/[а-яА-я]+/gm).join(' ') });
            
        } catch(err) {
            if(err) return res.json({
                message: err,
            });
        };
    }

    res.json({
        message: 'Cards was deleted'
    });
})

router.put('/update/:id', async (req, res) => {
    const card = await Card.findOneAndUpdate({ card_id: req.params.id }, {
        eng_part_of_speech: req.body.eng_part_of_speech,
        rus_part_of_speech: req.body.rus_part_of_speech,
        front_img: req.body.front_img,
        back_img: req.body.back_img,
    });

    res.json({
        message: `The card with id: ${card.card_id} has been update`,
    });
})

router.post('/', async (req, res) => {
    const cards = await Card.find({});
    if(!cards.length) return res.status(404);

    res.json({
        cardsLength: cards.length,
    });
})

router.post('/:id', async (req, res) => {
    const card = await Card.findOne({ card_id: req.params.id });
    if(!card) return res.status(404)
    ;

    res.json({
        card,
    });
})

module.exports = router;