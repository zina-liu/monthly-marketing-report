# GitHub 部署指南 | GitHub Deployment Guide

## 中文版本

### 前置準備

#### 1. 安裝必要工具

**Git**
- Windows：下載 [Git for Windows](https://git-scm.com/download/win)
- Mac：執行 `brew install git`
- Linux：執行 `sudo apt-get install git`

**Node.js**
- 下載 [Node.js LTS](https://nodejs.org/)

驗證安裝：
```bash
git --version
node --version
npm --version
```

#### 2. 在 GitHub 上建立儲存庫

1. 前往 [GitHub.com](https://github.com) 並登入
2. 點擊右上角 **+** → **New repository**
3. 填寫資訊：
   - **Repository name**: `monthly-marketing-report`
   - **Description**: `GeoVision Monthly Marketing Report`
   - **Public** 或 **Private**（建議 Public）
   - 不勾選「Initialize this repository with a README」
4. 點擊 **Create repository**
5. 複製您的儲存庫 URL：`https://github.com/YOUR_USERNAME/monthly-marketing-report.git`

### 部署步驟

#### 第一次推送

在您的電腦終端機執行：

```bash
# 進入專案資料夾
cd /path/to/monthly-marketing-report

# 初始化 Git
git init

# 設定 Git 用戶名和信箱（全域，只需一次）
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# 新增所有檔案
git add .

# 建立提交
git commit -m "Initial commit: GeoVision Marketing Report"

# 新增遠端儲存庫（用您的 URL 替換）
git remote add origin https://github.com/YOUR_USERNAME/monthly-marketing-report.git

# 設定主分支並推送
git branch -M main
git push -u origin main
```

#### 啟用 GitHub Pages

1. 進入您的 GitHub 儲存庫
2. 點擊 **Settings**（設定）
3. 左側選單選擇 **Pages**
4. 在「Build and deployment」下：
   - **Source**: 選擇 **GitHub Actions**
5. 等待 1-2 分鐘，部署完成

您的網站 URL：`https://YOUR_USERNAME.github.io/monthly-marketing-report/`

### 日後更新

每次更新內容後：

```bash
# 進入專案資料夾
cd /path/to/monthly-marketing-report

# 檢查變更
git status

# 新增變更
git add .

# 建立提交
git commit -m "Update [Month] report"

# 推送到 GitHub
git push origin main
```

網站會在 1-2 分鐘內自動更新。

---

## English Version

### Prerequisites

#### 1. Install Required Tools

**Git**
- Windows: Download [Git for Windows](https://git-scm.com/download/win)
- Mac: Run `brew install git`
- Linux: Run `sudo apt-get install git`

**Node.js**
- Download [Node.js LTS](https://nodejs.org/)

Verify installation:
```bash
git --version
node --version
npm --version
```

#### 2. Create Repository on GitHub

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **+** in top right → **New repository**
3. Fill in:
   - **Repository name**: `monthly-marketing-report`
   - **Description**: `GeoVision Monthly Marketing Report`
   - **Public** or **Private** (Public recommended)
   - Don't check "Initialize this repository with a README"
4. Click **Create repository**
5. Copy your repository URL: `https://github.com/YOUR_USERNAME/monthly-marketing-report.git`

### Deployment Steps

#### First Push

Run in your terminal:

```bash
# Navigate to project folder
cd /path/to/monthly-marketing-report

# Initialize Git
git init

# Configure Git (global, one-time)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Add all files
git add .

# Create commit
git commit -m "Initial commit: GeoVision Marketing Report"

# Add remote repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/monthly-marketing-report.git

# Set main branch and push
git branch -M main
git push -u origin main
```

#### Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings**
3. Select **Pages** from left menu
4. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
5. Wait 1-2 minutes for deployment to complete

Your website URL: `https://YOUR_USERNAME.github.io/monthly-marketing-report/`

### Future Updates

After each content update:

```bash
# Navigate to project folder
cd /path/to/monthly-marketing-report

# Check changes
git status

# Add changes
git add .

# Create commit
git commit -m "Update [Month] report"

# Push to GitHub
git push origin main
```

Your website will update automatically in 1-2 minutes.

---

## 常見問題 | FAQ

**Q: 如果我忘記了儲存庫 URL？**
A: 進入 GitHub 上的儲存庫頁面，點擊綠色的 **Code** 按鈕，複製 HTTPS URL。

**Q: 推送時出現認證錯誤？**
A: 您可能需要使用 Personal Access Token 而不是密碼。詳見 [GitHub 文件](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)。

**Q: 網站沒有更新？**
A: 檢查 GitHub 儲存庫的 **Actions** 標籤，確認部署工作流程是否成功執行。

**Q: 我想刪除某個月的報告？**
A: 在 `data.ts` 中刪除相應的物件，然後推送即可。
