const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const course = require("./Data/course.json");
const cors = require("cors");
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/course", (req, res) => {
    res.send(course);
});
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.find(c => c.id === id);
    console.log(selectedCourse)
    res.send(selectedCourse);
})
app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const selectedCourse = course.filter(c => c.category_id === id);
    console.log(selectedCourse)
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})