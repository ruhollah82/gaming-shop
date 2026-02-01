# 🚀 Quick Start Guide

## ⚠️ IMPORTANT: Start JSON Server First!

Before running your Next.js app, you **must** start the JSON server.

### Option 1: Run Both Servers Together (Recommended)
```bash
npm run dev:all
```
This starts both JSON server (port 3001) and Next.js (port 3000) simultaneously.

### Option 2: Run Servers Separately

**Terminal 1 - Start JSON Server:**
```bash
npm run json-server
```
You should see:
```
\{^_^}/ hi!

Loading db/db.json
Done

Resources
http://localhost:3001/products
http://localhost:3001/categories
...

Type s + enter at any time to create a snapshot of the database
```

**Terminal 2 - Start Next.js:**
```bash
npm run dev
```

## ✅ Verify JSON Server is Running

Open in browser: `http://localhost:3001/products`

You should see JSON data. If you get a connection error, the server isn't running.

## 🐛 Troubleshooting

### Error: "Network error. Please check your connection."
**Solution:** JSON server is not running. Start it with `npm run json-server`

### Error: "ECONNREFUSED"
**Solution:** JSON server is not running or port 3001 is blocked.

### Port 3001 Already in Use
**Solution:** 
1. Find what's using port 3001: `netstat -ano | findstr :3001` (Windows)
2. Kill the process or change port in `package.json`:
   ```json
   "json-server": "json-server --watch db/db.json --port 3002"
   ```
3. Update `NEXT_PUBLIC_API_URL` in `.env.local` to match

## 📝 Environment Variables

Create `.env.local` in project root:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🎯 Next Steps

1. ✅ Start JSON server
2. ✅ Start Next.js dev server
3. ✅ Open `http://localhost:3000`
4. ✅ Test API endpoints at `http://localhost:3001`

---

**Remember:** Always start JSON server before Next.js, or use `npm run dev:all` to run both!

