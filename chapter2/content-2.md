# script元素

浏览器在解析javascript代码时（包括下载文件），页面处理会暂时停止。

\<script type="text/javascript" src="example.js" /\> 适用于XHTML文档，不适用于HTML文档。

如果带src的script元素中包含脚本，则只会下载并执行src中的脚本文件，忽略script标签内的脚本。

现代网页应用一般把全部javascript引用放在body中页面内容的后面，来加快用户体验到的页面打开速度。

为什么使用外部文件来引入javascript：①可维护性②可缓存③适应未来

文档模式：标准模式/混杂模式，启动html5标准模式：<!DOCTYPE html>

\<noscript\>元素，在浏览器不支持或禁用脚本时显示noscript元素中的内容。

脚本文件可以跨域访问，但安全的外域一定是自己的或者值得信赖的域。

