<!-- import { URL } from "url"; -->

//export const **filename = new URL("..", import.meta.url).pathname; // use periods to go up in file/directory path
// export const **dirname = new URL(".", import.meta.url).pathname;

////////////experimental to try uploading base64
// app.get("/image", (req, res) => {
// try {
// Post.find().then((data) => {
// res.json(data);
// });
// } catch (error) {
// res.status(408).json({ message: error.message });
// }
// });
// app.post("/image/uploads", async (req, res) => {
// const body = req.body;
// console.log(body);
// try {
// const newImage = await Post.create(body);

// newImage.save();
// res.status(201).json({ message: "new image uploaded" });
// } catch (error) {
// res.status(409).json({ message: error.message });
// }
// });
///////////////////

/////////////////////
// const users = [];

// app.get("/loginPage", (req, res) => {
// console.log(req.headers);
// res.render("login", { title: "LOGIN system" });
// });

// app.get("/registerPage", (req, res) => {
// res.render("register", { title: "registration" });
// });

// app.post("/registerPage", async (req, res) => {
// const { username, email, password } = req.body;
// try {
// const hashedPassword = await bcrypt.hash(password, 10);
// users.push({
// id: Date.now().toString(),
// username,
// email,
// password: hashedPassword,
// });
// res.redirect("/loginPage");
// } catch (error) {
// console.log(error);
// res.redirect("/registrationPage");
// }
// res.send(users);
// console.log(users);
// });
/////////////////////

// const imgPath = `${new URL("..", import.meta.url).pathname}images/cereal/dgrerg.7334483.jpg`;
// console.log(imgPath);
// fs.readFile(imgPath, (err, content) => {
// if (err) {
// res.writeHead(404, { "Content-type": "text/html" });
// res.end("<h1>No such image in server</h1>");
// } else {
// res.writeHead(200, { "Content-type": "image/apng" });
// res.end(content);
// }
// });
