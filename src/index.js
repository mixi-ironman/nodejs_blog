const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;

//handle static file
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("combined")); //http logger

//template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views")); //__dirname nó trả về đúng cái file ứng dụng của chúng ta đang chạy
// ở đây là index.js == src nên muốn vào view thì qua resources

app.get("/", (reg, res) => {
  res.render("home");
  //đoạn này thì thư viện nó bắt tạo ra 1 layout của nó như trên doc
  //Mặc định nó luôn có cái layout gôm header và footer đó
  // CÒn nội dung thì nó lấy từ đoạn này chính là home nó
  //chuyền vào trong layout mặc định kia
});
app.get("/news", (reg, res) => {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*
Cụ thể, đoạn code này sử dụng middleware express.static() để cung cấp
 truy cập tĩnh đến các tệp tin trong thư mục public của ứng dụng.

app.use() là phương thức của đối tượng app của Express để đăng ký 
middleware.
express.static() là một middleware tích hợp sẵn của Express để phục
 vụ các tệp tĩnh (như hình ảnh, tài liệu CSS, JavaScript, vv...) cho client.
path.join() là một phương thức tích hợp sẵn của Node.js để nối các
 phần của đường dẫn với nhau, sử dụng kí tự / trên Unix và Linux, 
 hoặc \ trên Windows.
__dirname là biến định nghĩa trong Node.js, đại diện cho thư mục 
hiện tại của file đang chạy.
Vì vậy, đoạn code trên có nghĩa là đăng ký middleware express.static()
 để cung cấp các tệp tĩnh trong thư mục public của ứng dụng, và đường
  dẫn đến thư mục public được xác định bằng cách kết hợp đường dẫn hiện
   tại của file với "public".
*/
