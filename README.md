# 🍙 胖胖战士 · 胖胖军团出击！

原创竖屏出兵对推 PWA 小游戏，为 Pietro 制作。灵感来自该游戏类型，但使用原创名称、角色和代码。

## 🕹️ 在线试玩

https://gewuerzei.github.io/pangpang-warriors/

> 如遇 404：在此仓库 **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: main → /(root) → Save**。GitHub Pages 首次发布完成后才可访问。

## 玩法

- 🍙 饭团持续增长，消耗饭团派出肉盾胖、冲冲胖、远射胖。
- ⚔️ 自动行军、对战，推掉敌人营地获胜。
- 📯 冲锋号角会短暂加强己方军团。
- 🌿 四个时代：青草部落、小胖王朝、蒸汽小镇、星际胖胖。
- 🪙 研究所提供金币永久升级，浏览器本地保存进度。
- 📱 iPhone Safari 打开网页，分享 → 添加到主屏幕；初次联网加载后支持离线。

## 技术说明

纯静态 HTML + JavaScript，无后端、账号、分析工具或远程依赖。为了便于静态部署，游戏 CSS 和 JavaScript 集成在 `index.html` 内，另有 `manifest.webmanifest`、`service-worker.js` 和原创 SVG 图标。所有游戏运算在设备本地执行。

该仓库为独立小游戏，和《大周》及其他项目无关联。存档位于浏览器 localStorage，清理 Safari 网站数据可能删除进度。

开源仓库公开可见，软件仍为原创演示版本，未声明特定开源许可证。
