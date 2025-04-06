## 📂 File Upload API with Cloudinary

This project is a Node.js and Express-based API for uploading images and videos to Cloudinary with optional quality compression and file type validation.

---

### 🚀 Features

- Upload image/video files to Cloudinary  
- Compress images using Cloudinary's `quality` parameter  
- Validate supported file types (e.g., mp4, mov, jpg, png)  
- Save file metadata (name, email, tags, URL) to a database  
- Auto-create folders in Cloudinary  
- Built with `express-fileupload` and `cloudinary` SDK

---

### 🛠️ Tech Stack

- Node.js  
- Express.js  
- Cloudinary  
- express-fileupload  
- dotenv  
- MongoDB (optional for metadata storage)

---

### 📁 Project Structure

```
├── config/
│   ├── cloudinary.js
│   └── database.js
├── controllers/
│   └── file_upload.js
├── routes/
│   └── file_uploading_routes.js
├── uploads/ (optional temp storage)
├── .env
├── index.js
└── README.md
```

---

### 📦 Installation

```bash
git clone https://github.com/yourusername/cloudinary-upload-api.git
cd cloudinary-upload-api
npm install
```

---

### 🔑 Environment Variables (`.env`)

```env
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 📤 API Endpoint

**POST** `/api/v1/upload/video`

#### Form Data:

| Field       | Type    | Required | Description            |
|------------|---------|----------|------------------------|
| name       | string  | ✅        | Uploader's name        |
| email      | string  | ✅        | Uploader's email       |
| tags       | string  | ✅        | Optional tags          |
| videofile  | file    | ✅        | File to be uploaded    |

---

### ✅ Example Upload Controller Snippet

```js
async function uploadFileToCloudionary(file, folder, quality) {
    const options = { folder };
    options.resource_type = "auto";
    options.transformation = [{ quality }];
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}
```

---

### 📦 Run the Server

```bash
node index.js
```

> Server runs on `http://localhost:5000` or the port defined in your `.env`.

---

### 📸 Sample Response

```json
{
  "success": true,
  "imageUrl": "https://res.cloudinary.com/yourname/image/upload/v12345/sample.jpg",
  "message": "Image is successfully uploaded in Cloudinary"
}
```

---

### 🧪 Test with Postman or ThunderClient

- Set method to `POST`
- Use `form-data` body
- Select a file for `videofile`

