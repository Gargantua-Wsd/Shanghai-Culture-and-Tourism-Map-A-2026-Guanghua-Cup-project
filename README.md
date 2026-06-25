# Shanghai Culture and Tourism Map

沪上文化旅游地图是一个面向上海城市文化旅游场景的微信小程序项目，围绕上海历史建筑、文化街区、博物馆、园林、公园和城市地标，提供地图浏览、景点详情、人物故事、收藏、历史记录和行程规划等功能。

本项目源自 2026 光华杯相关作品整理版本，目前作为个人开源项目公开。项目主体功能已经完成，小程序端可作为完整原型运行；地图能力依托高德地图 API 服务。当前尚未完成正式线上部署，后端服务、数据库和生产环境配置仍需要自行部署与完善。

## 功能概览

- 基于地图的上海文旅景点浏览
- 景点详情页，包含简介、地址、开放时间、票价、诗词文案和相关人物故事
- 个人中心、登录态、本地 token 管理
- 收藏、浏览历史、我的评论等用户功能页面
- 行程规划相关页面
- 景点图片数据与本地图片资源
- Node.js + Express 后端代码框架
- MongoDB 数据模型与景点种子数据导入脚本
- 微信小程序登录接口预留，支持通过后端调用微信 code2session

## 项目状态

当前状态：

- 小程序前端：主体页面和交互功能已完成
- 地图服务：依托高德地图 API，需要在微信开发者工具和小程序后台配置合法域名与定位权限
- 后端服务：仓库内包含 Express 后端代码，但未作为正式生产服务上线
- 数据库：使用 MongoDB，需自行准备本地或云端数据库
- 上线状态：尚未正式发布上线

也就是说，这不是一个只有 AI 工作流文档的空项目；仓库中已经包含小程序端和后端目录。原 README 中的“AI 工作流框架搭建完成”是早期开发阶段遗留说明，现已替换为正式项目介绍。

## 目录结构

```text
.
├── miniprogram/          # 微信小程序端
│   ├── pages/            # 页面：地图、景点详情、人物、我的、收藏、历史、行程等
│   ├── utils/            # API 请求、登录鉴权、常量、图片数据
│   ├── images/           # 小程序图片资源
│   ├── scripts/          # 景点图片数据脚本
│   ├── app.js
│   ├── app.json
│   └── project.config.json
├── server/               # Node.js / Express 后端
│   ├── src/
│   │   ├── config/       # 环境变量与数据库连接
│   │   ├── middleware/   # 鉴权、日志、错误处理
│   │   ├── models/       # MongoDB / Mongoose 数据模型
│   │   ├── routes/       # API 路由
│   │   ├── seeds/        # 景点数据导入脚本
│   │   └── utils/        # JWT、微信登录、响应工具
│   ├── package.json
│   └── .env.example
├── 加载页.jpg
└── README.md
```

## 技术栈

### 小程序端

- 微信小程序原生开发
- JavaScript / WXML / WXSS
- 高德地图 API
- 微信登录能力

### 后端

- Node.js
- Express
- MongoDB / Mongoose
- JWT
- 微信 code2session 接口
- express-rate-limit

## 本地运行

### 1. 运行小程序端

1. 使用微信开发者工具导入 `miniprogram/` 目录。
2. 确认 `miniprogram/project.config.json` 中的 `appid` 是否需要替换成你自己的小程序 AppID。
3. 在微信开发者工具中编译运行。

注意：如果需要真实定位、地图或线上接口能力，还需要在微信小程序后台配置对应权限和合法域名。

### 2. 运行后端服务

进入后端目录：

```bash
cd server
npm install
```

复制环境变量示例：

```bash
cp .env.example .env
```

根据自己的环境修改 `.env`：

```env
MONGODB_URI=mongodb://localhost:27017/shanghai_tourism
JWT_SECRET=replace_with_a_strong_random_secret
WECHAT_APPID=your_wechat_appid
WECHAT_APPSECRET=your_wechat_appsecret
PORT=3000
NODE_ENV=development
```

启动服务：

```bash
npm run dev
```

健康检查地址：

```text
http://localhost:3000/api/health
```

导入景点种子数据：

```bash
npm run seed
```

## 环境变量与安全说明

请不要提交真实的 `.env` 文件。仓库已经通过 `.gitignore` 忽略以下敏感或本地文件：

- `server/.env`
- `server/node_modules/`
- `miniprogram/project.private.config.json`

开源前请确认：

- 不要公开微信小程序 AppSecret
- 不要公开数据库连接密码
- 不要公开服务器 SSH 密钥、云服务 AccessKey 或其他私钥
- 如曾经在本地明文保存过 AppSecret，建议在微信公众平台重置

`AppID` 通常是公开标识，不等同于 `AppSecret`。真正需要保密的是 `AppSecret`、数据库密码、JWT 密钥和云服务密钥。

## 接口地址配置

小程序端接口地址位于：

```text
miniprogram/utils/api.js
```

当前代码中 `API_BASE` 指向已有服务地址。若要部署到自己的后端，请将其替换为你的服务器地址，并在微信小程序后台配置合法请求域名。

## 尚待完善

- 正式部署后端服务
- 配置生产环境 MongoDB
- 替换生产环境 JWT 密钥和微信 AppSecret
- 配置微信小程序后台合法域名
- 完成线上发布前的安全检查
- 根据真实部署地址调整 `API_BASE`
- 补充项目截图、演示视频和正式开源许可证

## License

本项目暂未指定开源许可证。若希望他人可以合法复用、学习或二次开发，建议后续补充 MIT License 或其他合适的开源协议。
