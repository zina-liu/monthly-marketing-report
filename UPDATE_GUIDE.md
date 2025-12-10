# 快速更新指南 | Quick Update Guide

## 中文版本

### 編輯檔案
只需編輯一個檔案：`client/src/lib/data.ts`

### 新增新月份
在 `reports` 陣列的**最上面**加入新物件：

```typescript
{
  id: 'jan-2026',           // 唯一識別碼（自訂）
  month: 'January',         // 月份名稱
  year: 2026,               // 年份
  title: 'Marketing Updates - January',  // 頁面標題
  items: [
    // 在這裡加入該月的所有內容
  ]
}
```

### 新增內容項目
在 `items` 陣列中新增物件。根據內容類型選擇 `category`：

#### 影片 (Video)
```typescript
{
  id: 'vid-1',
  title: '影片標題',
  category: 'Video',
  link: 'https://youtube.com/watch?v=...',
  thumbnail: '/images/video-thumbnail.jpg',  // 可選
  description: '影片描述'
}
```

#### 電子報 (Newsletter)
```typescript
{
  id: 'news-1',
  title: '電子報標題',
  category: 'Newsletter',
  link: 'https://example.com/newsletter',
  description: '電子報描述'
}
```

#### 社群媒體 (Social)
```typescript
{
  id: 'social-1',
  title: 'LinkedIn 更新',
  category: 'Social',
  link: 'https://linkedin.com/...',
  description: '社群媒體描述'
}
```

#### 活動/研討會 (Event)
```typescript
{
  id: 'event-1',
  title: '月度洞察研討會',
  category: 'Event',
  link: 'https://example.com/register',
  description: '活動描述'
}
```

### 上傳圖片
1. 將圖片放在 `client/public/images/` 資料夾
2. 在 `data.ts` 中引用：`thumbnail: '/images/filename.jpg'`

### 發佈更新
```bash
git add .
git commit -m "更新 [月份] 行銷報告"
git push origin main
```

GitHub Actions 會自動部署，約 1-2 分鐘後網站會更新。

---

## English Version

### File to Edit
Only edit one file: `client/src/lib/data.ts`

### Add New Month
Add a new object at the **top** of the `reports` array:

```typescript
{
  id: 'jan-2026',           // Unique identifier (custom)
  month: 'January',         // Month name
  year: 2026,               // Year
  title: 'Marketing Updates - January',  // Page title
  items: [
    // Add all content items for this month here
  ]
}
```

### Add Content Items
Add objects to the `items` array. Choose `category` based on content type:

#### Video
```typescript
{
  id: 'vid-1',
  title: 'Video Title',
  category: 'Video',
  link: 'https://youtube.com/watch?v=...',
  thumbnail: '/images/video-thumbnail.jpg',  // Optional
  description: 'Video description'
}
```

#### Newsletter
```typescript
{
  id: 'news-1',
  title: 'Newsletter Title',
  category: 'Newsletter',
  link: 'https://example.com/newsletter',
  description: 'Newsletter description'
}
```

#### Social Media
```typescript
{
  id: 'social-1',
  title: 'LinkedIn Update',
  category: 'Social',
  link: 'https://linkedin.com/...',
  description: 'Social media description'
}
```

#### Event
```typescript
{
  id: 'event-1',
  title: 'Monthly Insight Webinar',
  category: 'Event',
  link: 'https://example.com/register',
  description: 'Event description'
}
```

### Upload Images
1. Place images in `client/public/images/` folder
2. Reference in `data.ts`: `thumbnail: '/images/filename.jpg'`

### Publish Updates
```bash
git add .
git commit -m "Update [Month] marketing report"
git push origin main
```

GitHub Actions will automatically deploy. The website will update in 1-2 minutes.
