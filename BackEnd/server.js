import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import bcrypt from "bcrypt";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import path from "path";
import multer from "multer";

const app = express();
const port = 5000;
const salt = 10;
const SECRET_KEY = "This is Rental App";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "UserLogin",
  password: "Raja@0102",
  port: 5432,
});
db.connect();

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "you are not authenticated" });
  } else {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.json({ Error: "Token is not correct" });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

app.get("/", verifyUser, (req, res) => {
  return res.json({ Status: "Success", name: req.name });
});


// admin register

app.post("/adminregister", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      return res.json({ Error: "Error for hashing password" });
    } else {
      console.log("Hashed Password:", hash);
      db.query(
        "INSERT INTO admin_login(name,email,password) VALUES ($1,$2,$3)",
        [name, email, hash],
        (err, result) => {
          if (err) {
            return res.json({ Error: "Inserting data error in server" });
          }
          return res.json({ Status: "Success" });
        }
      );
    }
  });
});

// admin login

app.post("/adminlogin", (req, res) => {
  const email = req.body.email;
  const loginPassword = req.body.password;
  db.query("SELECT * FROM admin_login WHERE email = $1", [email], (err, data) => {
    if (err) {
      return res.json({ Error: "Login error in server" });
    }
    if (data.rows.length > 0) {
      const user = data.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(loginPassword, storedHashedPassword, (err, response) => {
        if (err) {
          return res.json({ Error: "Password compare error" });
        }
        if (response) {
          const name = user.name;
          const token = jwt.sign({ name }, SECRET_KEY, {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          return res.json({ Status: "Success" });
        } else {
          return res.json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.json({ Error: "no email existed" });
    }
  });
});






// register for user login

app.post("/userregister", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  bcrypt.hash(password, salt, (err, hash) => {
    if (err) {
      return res.json({ Error: "Error for hashing password" });
    } else {
      console.log("Hashed Password:", hash);
      db.query(
        "INSERT INTO user_login(name,email,password) VALUES ($1,$2,$3)",
        [name, email, hash],
        (err, result) => {
          if (err) {
            return res.json({ Error: "Inserting data error in server" });
          }
          return res.json({ Status: "Success" });
        }
      );
    }
  });
});

// user login

app.post("/userlogin", (req, res) => {
  const email = req.body.email;
  const loginPassword = req.body.password;
  db.query("SELECT * FROM user_login WHERE email = $1", [email], (err, data) => {
    if (err) {
      return res.json({ Error: "Login error in server" });
    }
    if (data.rows.length > 0) {
      const user = data.rows[0];
      const storedHashedPassword = user.password;
      bcrypt.compare(loginPassword, storedHashedPassword, (err, response) => {
        if (err) {
          return res.json({ Error: "Password compare error" });
        }
        if (response) {
          const name = user.name;
          const token = jwt.sign({ name }, SECRET_KEY, {
            expiresIn: "1d",
          });
          res.cookie("token", token);
          return res.json({ Status: "Success" });
        } else {
          return res.json({ Error: "Password not matched" });
        }
      });
    } else {
      return res.json({ Error: "no email existed" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "Success" });
});

// backend code for adding product to the data base and fetching them back from the database

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadFile = multer({
  storage: storage,
});

// upload product data in data base.

app.post("/upload", uploadFile.single("image"), (req, res) => {
  const category = req.body.category;
  const name = req.body.name;
  const type = req.body.type;
  const brand = req.body.brand;
  const model = req.body.model;
  const seller = req.body.seller;
  const location = req.body.location;
  const year = req.body.year;
  const price = req.body.price;
  const desc = req.body.desc;
  const reviews = req.body.review;
  const comments = req.body.comments;
  const image = req.file.filename;
  db.query(
    "INSERT INTO product_data (p_category,p_name,p_type,p_brand,p_model,p_seller,p_location,p_year,p_price,p_description,p_reviews,p_comments,p_image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)",
    [
      category,
      name,
      type,
      brand,
      model,
      seller,
      location,
      year,
      price,
      desc,
      reviews,
      comments,
      image,
    ],
    (err, result) => {
      if (err) return res.json({ Message: "Error" });
      return res.json({ Status: "Success" });
    }
  );
});

// fetching data from the db for displaying
app.get("/display", (req, res) => {
  db.query("SELECT * FROM  product_data   order by id asc", (err, result) => {
    if (err) return res.json("Error");
    return res.json(result);
  });
});

// upload user_product listing in the db

app.post("/userproduct", uploadFile.single("image"), (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const category = req.body.category;
  const name = req.body.name;
  const type = req.body.type;
  const brand = req.body.brand;
  const model = req.body.model;
  const location = req.body.location;
  const year = req.body.year;
  const price = req.body.price;
  const desc = req.body.desc;
  const image = req.file.filename;

  db.query(
    "INSERT INTO user_product_data (s_username,s_email_id,s_phone,s_address,p_category,p_product_name,p_type,p_brand,p_model,p_location,p_year,p_price,p_description,p_image) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)",
    [
      username,
      email,
      phone,
      address,
      category,
      name,
      type,
      brand,
      model,
      location,
      year,
      price,
      desc,
      image,
    ],
    (err, result) => {
      if (err) return res.json({ Message: "Error" });
      return res.json({ Status: "Success" });
    }
  );
});

// upload user chat with the seller in db.

app.post("/userchat", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const name = req.body.name;
  const brand = req.body.brand;
  const model = req.body.model;
  const message = req.body.message;

  db.query(
    "INSERT INTO user_chat (u_username,u_email_id,u_phone,p_product_name,p_brand,p_model,u_message) VALUES ($1,$2,$3,$4,$5,$6,$7)",
    [username, email, phone, name, brand, model, message],
    (err, result) => {
      if (err) return res.json({ Message: "Error" });
      return res.json({ Status: "Success" });
    }
  );
});

// upload user comments and feedback in db

app.post("/feedback", (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const phone = req.body.phone;
  const comments = req.body.comments;

  db.query(
    "INSERT INTO user_feedback_queries (u_username,u_email_id,u_phone,comments) VALUES ($1,$2,$3,$4)",
    [username, email, phone, comments],
    (err, result) => {
      if (err) return res.json({ Message: "Error" });
      return res.json({ Status: "Success" });
    }
  );
});

//starting the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
