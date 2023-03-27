const registerPage = (req, res) => {
  res.render("content", { title: "register" });
};

const loginPage = (req, res) => {
  res.render("content", { title: "login" });
};

const uploadPage = (req, res) => {
  res.render("content", { title: "upload" });
};

const indexPage = (req, res) => {
  res.render("content", { title: "index" });
};

const cartInventoryPage = (req, res) => {
  res.render("content", { title: "cartInventory" });
};

export { loginPage, registerPage, uploadPage, indexPage, cartInventoryPage };
