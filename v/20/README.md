# 网页文件整理

本文件夹包含根目录当前 v20 本地版网页及其本地依赖，保留原有相对路径。初始整理时保留原文件；本目录现已加入网页缓存和画笔性能优化，根目录旧版不变。

## 使用

- 双击 index.html 打开函数画板。
- welcome.html 提供入口、示例和分享链接生成器。
- 用户文档.html 为使用说明。
- simplifier (1).html 为独立化简器。
- 也可将本文件夹作为静态网站根目录。

## 缓存与画笔优化

- 首次联网访问后，Service Worker 预缓存 30 个网页和资源；后续访问优先读取本地缓存，URL 查询参数继续传给页面。
- 缓存仅在 HTTPS 或 localhost/127.0.0.1 下生效。双击文件仍可使用画板，但 file:// 不支持 Service Worker。
- 在项目根目录运行 `node tools/serve-web.cjs`，访问 http://127.0.0.1:8877 即可在本机启用缓存。
- 修改网页资源后，运行 `node web/build-cache.cjs` 重新生成缓存版本（排除 tests），并一起部署整个 web 目录。浏览器后台下载新版本后，关闭该站点所有页面再打开即可切换；安装失败时仍使用旧版本。
- 浏览器清理站点数据可能移除离线缓存；缓存减少网络下载，脚本在新页面中仍需解析和执行。
- 新笔画使用 8 档压感、1.25 像素距离采样和 requestAnimationFrame 批量绘制，保留落笔与抬笔端点；使用圆角折线连接采样点。
- 已完成笔迹缓存为独立图层；追加笔画只画新增内容，缩放、平移、擦除、清空和导入后按需重建。现有画板文件格式不变。
- 撤销历史最多 100 条，并按约 2 MiB 总大小裁剪最旧记录；大画板的可撤销步数会减少。当前笔迹不会因裁剪历史而被删除；超过存储配额时提示导出保存。
- “批注间隔”设置仍生效：现在控制采样距离倍率（1～8），值越大采样越稀疏、数据越少；默认值 1。
- 验证命令：`node tools/test-web-performance.cjs`。

## 整理范围

共复制 26 个网页及资源文件，包含运行时动态加载的 katex.min.js。历史版本 v、其他独立网页/工具、服务端程序、测试脚本和临时文件不属于当前网页依赖，未收录。

## 校验与已有问题

2026-09-12 旧版几何及联机更新：

- 按 `course.txt` 和历史实现兼容旧版参数顺序、圆/竖线记法与范围；修复连续导入的隐藏对象、批注和选择状态残留。无效文件不会先清空当前画板。
- 修复函数取值变量名错误、竖线与偏心圆求交、切点重复、圆交点缓存顺序，以及调整画布大小后的坐标比例。
- 新增本地几何解析引擎；复杂表达式用中间量定义保留精确结果和变量依赖，避免正十七边形展开时卡住。
- 已加载 `q/file/几何` 的 10 个和 `q/file/求解析解` 的 6 个旧版画板，259 个非空点的 518 项坐标解析式与数值坐标全部一致。浏览器逐点审计也通过 518 项，16 个画板导入及重绘无异常；完整图册的最后截图未完成，不能据此断言所有标签布局均无问题。
- `gl(2,8).txt` 的原始长表达式在 4 组参数下与构造长度一致。测试覆盖正十七边形等边、共圆、顶点互异及参数变化。
- 跑分入口在主工具栏；删除原说明副标题。“同步信息”移入联机面板。输入 `ws://` 或 `wss://` 地址并点击“开启联机”后才能创建、加入与同步；关闭或连接失败后回到本地模式，解析计算始终在本地运行。HTTPS 页面需使用 `wss://`。
- 联机沿用原服务器消息协议，不自动连接或重试；连接状态、超时、失败恢复和本地计算路由已用模拟 WebSocket 测试，尚未与实际服务器联调。
- 回归：`node --test web/tests/regression.cjs web/tests/geometry-regression.cjs web/tests/online-regression.cjs`。
- 全部坐标审计：`node web/tests/audit-geometry.cjs geometry-after.json`，逐点结果见 `tests/geometry-after.json`。
- 交互复查：`node web/tests/serve-geometry.cjs` 后打开 `http://127.0.0.1:8877/tests/geometry.html`，可加载全部旧作品、计算解析解并生成显示图册。该测试服务只用于本机，旧文件只读。

2026-09-12 修复：

- 主页面补齐 `az_pen.js` 和缓存注册脚本，画布按下事件显式传递 `event`，修复画笔与重绘报错。
- KaTeX 改为随其他脚本按序加载；删除旧的延迟加载、localStorage 脚本缓存分支及无用加载计数。
- 分享链接保留未指定的视图字段，忽略非有限数字与非正尺寸、缩放和精度；标题按纯文本设置，页面已加载时也能自动计算。
- 修复恢复默认设置时重复写入导致保存值变成 `undefined` 的问题，移除空 `eval()`。
- 在项目根目录运行 `node --test web/tests/regression.cjs`；测试覆盖上述路径、画笔端点及脚本语法。此轮使用模拟 DOM/Canvas 回归测试，未做真实浏览器交互验证。
- 已刷新 `sw.js` 缓存版本。已有缓存的用户需在新版本下载完成后关闭该站点所有页面再重新打开。

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
