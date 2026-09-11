# 网页文件整理

本文件夹包含根目录当前 v20 本地版网页及其本地依赖，保留原有相对路径。初始整理时保留原文件；本目录现已加入网页缓存和画笔性能优化，根目录旧版不变。

## 使用

- 双击 index.html 打开函数画板。
- welcome.html 提供入口、示例和分享链接生成器。
- 用户文档.html 为使用说明。
- simplifier (1).html 为独立化简器。
- 也可将本文件夹作为静态网站根目录。

## 缓存与画笔优化

- 首次联网访问后，Service Worker 预缓存 28 个网页和资源；后续访问优先读取本地缓存，URL 查询参数继续传给页面。
- 缓存仅在 HTTPS 或 localhost/127.0.0.1 下生效。双击文件仍可使用画板，但 file:// 不支持 Service Worker。
- 在项目根目录运行 `node tools/serve-web.cjs`，访问 http://127.0.0.1:8877 即可在本机启用缓存。
- 修改网页资源后，运行 `node tools/build-web-cache.cjs` 重新生成缓存版本，并一起部署整个 web 目录。浏览器后台下载新版本后，关闭该站点所有页面再打开即可切换；安装失败时仍使用旧版本。
- 浏览器清理站点数据可能移除离线缓存；缓存减少网络下载，脚本在新页面中仍需解析和执行。
- 新笔画使用 8 档压感、1.25 像素距离采样和 requestAnimationFrame 批量绘制，保留落笔与抬笔端点；使用圆角折线连接采样点。
- 已完成笔迹缓存为独立图层；追加笔画只画新增内容，缩放、平移、擦除、清空和导入后按需重建。现有画板文件格式不变。
- 撤销历史最多 100 条，并按约 2 MiB 总大小裁剪最旧记录；大画板的可撤销步数会减少。当前笔迹不会因裁剪历史而被删除；超过存储配额时提示导出保存。
- “批注间隔”设置仍生效：现在控制采样距离倍率（1～8），值越大采样越稀疏、数据越少；默认值 1。
- 验证命令：`node tools/test-web-performance.cjs`。

## 整理范围

共复制 26 个网页及资源文件，包含运行时动态加载的 katex.min.js。历史版本 v、其他独立网页/工具、服务端程序、测试脚本和临时文件不属于当前网页依赖，未收录。

## 校验与已有问题

初始复制已校验 SHA-256 和页面依赖。优化后通过脚本语法检查、10 万笔迹点的缓存复用测试、输入端点和取消事件测试；浏览器已验证实际书写、重绘，以及停止本地服务器后的离线重载。

原项目仅提供两种 KaTeX 字体；katex.min.css 中还有 58 个字体文件路径在原项目中不存在，整理时保持原样。部分公式可能出现字体回退或字体请求失败。页面原有的官网/注册外链及设置中的 localhost 背景图片地址也保持原样，其可用性取决于对应服务。

缺少的字体路径：

- KaTeX_AMS-Regular.woff2
- KaTeX_AMS-Regular.woff
- KaTeX_AMS-Regular.ttf
- KaTeX_Caligraphic-Bold.woff2
- KaTeX_Caligraphic-Bold.woff
- KaTeX_Caligraphic-Bold.ttf
- KaTeX_Caligraphic-Regular.woff2
- KaTeX_Caligraphic-Regular.woff
- KaTeX_Caligraphic-Regular.ttf
- KaTeX_Fraktur-Bold.woff2
- KaTeX_Fraktur-Bold.woff
- KaTeX_Fraktur-Bold.ttf
- KaTeX_Fraktur-Regular.woff2
- KaTeX_Fraktur-Regular.woff
- KaTeX_Fraktur-Regular.ttf
- KaTeX_Main-Bold.woff2
- KaTeX_Main-Bold.woff
- KaTeX_Main-Bold.ttf
- KaTeX_Main-BoldItalic.woff2
- KaTeX_Main-BoldItalic.woff
- KaTeX_Main-BoldItalic.ttf
- KaTeX_Main-Italic.woff2
- KaTeX_Main-Italic.woff
- KaTeX_Main-Italic.ttf
- KaTeX_Main-Regular.woff
- KaTeX_Main-Regular.ttf
- KaTeX_Math-BoldItalic.woff2
- KaTeX_Math-BoldItalic.woff
- KaTeX_Math-BoldItalic.ttf
- KaTeX_Math-Italic.woff
- KaTeX_Math-Italic.ttf
- KaTeX_SansSerif-Bold.woff2
- KaTeX_SansSerif-Bold.woff
- KaTeX_SansSerif-Bold.ttf
- KaTeX_SansSerif-Italic.woff2
- KaTeX_SansSerif-Italic.woff
- KaTeX_SansSerif-Italic.ttf
- KaTeX_SansSerif-Regular.woff2
- KaTeX_SansSerif-Regular.woff
- KaTeX_SansSerif-Regular.ttf
- KaTeX_Script-Regular.woff2
- KaTeX_Script-Regular.woff
- KaTeX_Script-Regular.ttf
- KaTeX_Size1-Regular.woff2
- KaTeX_Size1-Regular.woff
- KaTeX_Size1-Regular.ttf
- KaTeX_Size2-Regular.woff2
- KaTeX_Size2-Regular.woff
- KaTeX_Size2-Regular.ttf
- KaTeX_Size3-Regular.woff2
- KaTeX_Size3-Regular.woff
- KaTeX_Size3-Regular.ttf
- KaTeX_Size4-Regular.woff2
- KaTeX_Size4-Regular.woff
- KaTeX_Size4-Regular.ttf
- KaTeX_Typewriter-Regular.woff2
- KaTeX_Typewriter-Regular.woff
- KaTeX_Typewriter-Regular.ttf

## 文件清单

- index.html
- welcome.html
- 用户文档.html
- simplifier (1).html
- az-128.ico
- fx.png
- gi.CSS
- q/mathscribe/jqmath-0.4.3.css
- Encrypted.JS
- s.js
- dc.JS
- la.js
- math.js
- algebrite.bundle-for-browser.js
- nerdamer.core.js
- nerdamer.calculus.js
- nerdamer.algebra.js
- nerdamer.solve.js
- az_simplify.js
- az_local.js
- az_server_jx.js
- az_url.js
- katex.min.js
- katex.min.css
- KaTeX_Main-Regular.woff2
- KaTeX_Math-Italic.woff2
