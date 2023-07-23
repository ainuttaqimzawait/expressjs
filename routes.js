const router = require('express').Router();

router.get('/', (req, res) => {
    const { page, total } = req.query
    res.send({
        status: 'successfully',
        message: 'welcome to express js tutorial',
        study: 'express js',
        page,
        total
    });
});

router.get('/product/:id', (req, res) => {
    res.send({
        id: req.params.id
    });
});

module.exports = router;