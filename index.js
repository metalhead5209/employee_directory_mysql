const express = require('express');
const app = express()


const PORT = process.env.PORT || 5252;

app.listen(PORT, () => {
    console.log(`ON PORT ${PORT}`);
});