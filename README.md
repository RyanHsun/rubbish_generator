# 幹話產生器 - Rubbish Generator
一個使用 Node.js 的框架 Express 打造的幹話產生器網站專案

## 功能描述 - Features
* 選擇其中一個職業後按下產生幹話的按鈕，會隨機顯示惹怒該職業對象的一句話。

## 專案畫面
![RestaurantList-Demo](https://raw.githubusercontent.com/RyanHsun/rubbish_generator/master/app-demo.png "Restaurant List - Demo") 

## 環境建置與需求 - Prerequisites
* 開發環境：Node.js v10.15.0
* 開發框架：Express v4.17.1
* 框架模板：handlebars v5.3.0
* 模板套件：handlebars-helpers v0.10.0
* 中介軟體：body-parser v1.19.0

## 安裝與執行步驟 - Installation and execution
1. 打開終端機(Terminal)，使用 git clone 將專案下載至本機電腦，或是直接在 github 下載專案壓縮檔(Download ZIP)。
```
git clone https://github.com/RyanHsun/rubbish_generator.git
```

2. 在終端機輸入以下指令，進入專案資料夾
```
cd rubbish_generator
```

3. 安裝執行專案需要的相關套件
```
npm install
npm install nodemon express-handlebars handlebars-helpers body-parser
```

4. 接著就可以啟動伺服器來執行專案。
```
npm run dev
``` 

5. 當終端機顯示以下訊息即成功啟動，使用瀏覽器於網址列中輸入 http://localhost:3000 即可開始操作專案～
```
Server is listening on http://localhost:3000
```

6. 在伺服器啟動狀態下於鍵盤按下 Ctrl + C ，即可關閉伺服器停止執行專案


## 專案開發人員 - Contributor
[RyanHsun](https://github.com/RyanHsun)