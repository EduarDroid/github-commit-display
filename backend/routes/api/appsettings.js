const express = require('express');
const router = express();

// Load AppSetting model
const AppSetting = require('../../models/Appsetting');


router.get('/test', (req, res) => 
    res.send('settings route testing!')
  );

// @route GET api/appsettings
// @description Get all appsettings
// @access Public
router.get('/', (req, res) => {
  AppSetting.find()
    .then(appsettings => 
      {
        res.json(appsettings);
      })
    .catch(err => res.status(404).json({ nosettingsfound: 'No settings found' }));
});


module.exports = router;