# 短網址產生器 URL Shortener
### 網頁小工具，你將網址縮減為短網址 :)


## 功能
- 使用者可以在表單輸入原始網址後，網頁會回傳一個格式化後的短網址。
- 在伺服器啟動期間，使用者在瀏覽器的網址列輸入短網址後，瀏覽器會導向原本的網站。
- 使用者可以按 Copy 來複製縮短後的網址。

## 環境需求
- Node.js
- Express
- Express-handlebars
- Mongoose

## 開始使用
- clone專案至本機電腦
- 進入專案資料夾
- 專案下載完成後輸入npm install
- 安裝完成後接續安裝Express, express-handlebars, mongoose
- 新增.env檔案設定環境變數，並加入MONGODB_URI = mongodb-srv......
- 安裝完成後輸入npm run dev
- 成功啟動後會於終端機看到：Express app listening on port 3000.
- 於瀏覽器輸入localhost:3000 開始使用短網址產生器