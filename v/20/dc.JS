//dc.JS
var thisdate = "2025-?-?"
var wz = 'https://h.ssssssss.eu.org/'
const YXURL = ['http://h.ssssssss.eu.org/v/', 'https://h.ssssssss.eu.org/v/', 'https://h.ssssssss.eu.org/', 'http://h.ssssssss.eu.org/', 'http://localhost:88/v/17/', 'http://localhost:88/', 'http://192.168.1.9:88/', 'http://192.168.1.5:88/', 'http://192.168.1.7:88/', 'http://192.168.1.8:88/', 'http://192.168.1.6:88/', 'http://192.168.1.10:88/', 'http://192.168.1.2:88/', 'http://192.168.1.11:88/', 'http://192.168.1.3:88/', 'http://192.168.1.12:88/']
var name_zhcn = "啊这函数画板"
var name_en = "AZHSHB"
var serverIP = ''
/*
az v16
*/
var jlks = false
var jkxjj = []
var pagelanguage = 'zhcn'
var language_zhcn = [
	"啊这",
	"缩放:",
	"绘制精度:",
	"坐标系位置x:",
	"坐标系位置y:",
	"显示宽度:",
	"显示高度:",
	"鼠标x坐标",
	"鼠标y坐标",
	"新建曲线",
	"解析式",
	"颜色",
	"取值范围",
	"创建",
	"捐助",
	"更多",
	"同步信息",
	"设置",
	"模式：移动",
	"模式：批注",
	"模式：擦除",
	"模式：选择",
	"自动尺寸",
	"文档",
	"直",
	"极",
	"推荐使用啊这函数画板",
	"http://h.ssssssss.eu.org/",
	"用时",
	"构造交点",
	"构造解析交点",
	"",
	"构造过几点的函数",
	"构造过两点的线段",
	"以点为圆心，变量为半径构造圆",
	"过点构造直线垂线",
	"过点构造直线平行线",
	"构造角平分线线",
	"构造中点",
	"加入组",
	"度量坐标",
	"度量角度",
	"度量距离",
	"删除",
	"隐藏",
	"显示",
	"求导",
	"积分",
	"求极值点和驻点",
	"求零点",
	"执行操作",
	"重绘制",
	"",
	"设置",
	"全选",
	"反选",
	"清空缓存",
	"清空选择",
	"重复",
	"打开与保存",
	"在此粘贴保存码或从此复制保存码",
	"打开文件",
	"打开",
	"保存",
	"显示数学表达式",
	"输入要显示的数学表达式",
	"显示",
	"啊这计算器",
	"输入要计算的表达式",
	"计算",
	"计算解析解并化简",
	"将结果下载off",
	"将结果下载on",
	"化简",
	"计算结果",
	"点击啊这",
	"次",
	"啊这函数画板",
	"已加载完毕",
	"更新了",
	"个内容：",
	"新增：",
	"更改：",
	"修复：",
	"移除：",
	"清空日志",
	"已清空日志",
	"主页",
	"联机",
	"创建联机",
	"加入联机",
	"清空聊天",
	"加载聊天记录",
	"名字",
	"联机号",
	"发送",
	"设置",
	"清空设置",
	"导出设置",
	"导入设置",
	"主题颜色",
	"主题颜色-透明",
	"文字颜色",
	"文字颜色-透明",
	"背景颜色",
	"背景图片url",
	"修仙模式",
	"网格乘数",
	"选择容差",
	"选择（擦除）间隔",
	"批注间隔",
	"深色浅色主题切换",
	"动画",
	"文字批注尺寸",
	"全局缓存",
	"快捷键",
	"全局缓存上限",
	"计算交点",
	"完美绘制圆、一次函数",
	"以鼠标为中心缩放",
	"快速自然移动",
	"坐标系自然移动",
	"函数递归",
	"智能开关自然移动",
	"浮动面板",
	"滑块跳数",
	"启用坐标系内装饰",
	"自动",
	"黑白",
	"自动合理化",
	"色彩滤镜透明度",
	"加载时自动自动尺寸",
	"使用牛顿迭代法解方程",
	"减少不必要的函数绘制",
	"使用mathjs计算",
	"绘制的与实际画布比值",
	"语言",
	"请认真阅读文档后再进行设置",
	"撤销操作",
	"定积分计算器",
	"∫",
	"上限",
	"下限",
	"变量",
	"求和计算器",
	"∑",
	"动画与轨迹",
	"轨迹对象（详见文档）",
	"动画表达式（详见文档）",
	"密度",
	"起始",
	"结束",
	"变量",
	"轨迹",
	"动画",
	"账号管理",
	"已登录成功",
	"输入登录码",
	"新用户激活成功！",
	"登录失败",
	"账号到期时间：",
	"连接成功！",
	"你的联机码为 ",
	"成功！你的联机码为 ",
	"，可在日志里找到",
	"不成功'",
	"解析解计算成功",
	"新建点",
	"x坐标",
	"y坐标",
	"点的名字",
	"新建",
	"新建变量",
	"变量名",
	"值",
	"新建文字批注",
	"内容",
	"点击事件",
	"对象设置中心",
	"对象名称",
	"第几个值",
	"要改为的内容",
	"读取数据",
	"快捷创建圆函数",
	"半径",
	`<input id="ghwdvecd" type="radio" name="gender" value="s" checked />上半圆<input id="geaduytfwev" type="radio" name="gender" value="x" />下半圆`,
	"表达式转换",
	"输入表达式",
	"啊这转正常",
	"正常转啊这",
	"结果",
	"更多功能",
	"恢复未保存的内容",
	"确定恢复未保存内容？会覆盖现有内容,且不可逆。",
	"跟随鼠标移动 OFF",
	"跟随鼠标移动 ON",
	"全屏",
	"清空本地缓存",
	"白色背景",
	"兼容模式保存",
	"去除空项",
	"网格：显示",
	"网格：隐藏",
	"坐标轴：显示",
	"坐标轴：隐藏",
	"保存截图",
	"输入截图尺寸与当前画布大小倍数",
	"新建组",
	"输入要加入组的对象（用,隔开）",
	"登录",
	"注册",
	"退出登录",
	"确认执行操作？",
	"确认撤销？撤销不可逆",
	"已清空缓存，是否要重绘制？",
	"解析式有误，是否继续？",
	"这是适用于新版的还原码，确定要继续吗？",
	"这是适用于旧版的还原码，是否适配打开？",
	"是否动态更新？",
	'类型不匹配',
	"是否为函数形式？",
	"弧度:",
	"角度:",
	"是否添加到变量？",
	"是否动态更新？",
	"确定要清空设置？",
	'已清空设置',
	'不建议在此尺寸下使用！请调大尺寸',
	'已自动生成变量名',
	'输入设置码',
	'这不是一个设置！',
	'已导入设置',
	'开始计算解析解',
	'确定退出登录吗？操作不可逆，请保存好登录码',
	'刷新后生效',
	'无效输入',
	"请输入联机码",
	"请输入精确度(默认为0.01)",
	"设置的-url起始命令已被执行。",//238
	"请输入聊天记录条数",
	" 为 ",
	" 设置为",
	"做出更改，",
	"的第",
	"个值为",
	'请选对象！',
	'请选则同一类对象',
	"由于版本更新，已将",
	"项设置同步为默认设置。",
	"设置加载失败！请重置设置.",
	"显示",
	"同步结果到输入框",
	"标记函数上的点",
	"输入起始位置",
	"输入结束位置",
	'列项',
	'主元',
	'带入',
	'将主元替换为：',
	'页面缩放',
	'跑分',
	'跑分计算中，请稍候…',
	'得分：'
]
var language_en = [
	"AZ",
	"Scale:",
	"Accuracy:",
	"System x:",
	"System y:",
	"width:",
	"height:",
	"Mouse x",
	"Mouse y",
	"New Curve",
	"Analytical formula",
	"Color",
	"Value range",
	"Create",
	"Donation",
	"More",
	"Sync information",
	"Settings",
	"Mode: Move",
	"Mode: Draw",
	"Mode: Erase",
	"Mode: Selection",
	"Automatic Size",
	"Document",
	"Straight",
	"Extreme",
	"It's recommend to use AZHSHB",
	"http://h.ssssssss.eu.org/ ",
	"Take",
	"Constructing Intersections",
	"Construct analytical intersection points",
	"",
	"Construct a function with several points",
	"Construct a line segment that passes through two points",
	"Construct a circle with a point as the center and a variable as the radius",
	"Construct a straight line perpendicular to a point",
	"Construct straight lines and parallel lines through points",
	"Construct angle bisector lines",
	"Construction midpoint",
	"Join Group",
	"Measurement coordinates",
	"Measuring angles",
	"Measure distance",
	"Delete",
	"Hidden",
	"Display",
	"Seeking differentiation",
	"Integral",
	"Find extreme and stationary points",
	"Find Zero Point",
	"Execute operation",
	"Redraw",
	"",
	"Settings",
	"Select All",
	"Reverse selection",
	"Clear cache",
	"Clear Selection",
	"Repetitive",
	"Open and Save",
	"Paste save code here or copy save code from here",
	"Open file",
	"Open",
	"Save",
	"Display mathematical expressions",
	"Enter the mathematical expression to display",
	"Display",
	"AZ calculator",
	"Enter the expression to be calculated",
	"Calculation",
	"Compute analytical solutions and simplify them",
	"Download the results as' off '",
	"Download the results on",
	"Simplification",
	"Calculation results",
	"Click to AZ",
	"Times",
	"AZHSHB ",
	" Completed loading",
	"Updated ",
	" Content:",
	"New:",
	"Change:",
	"Fix:",
	"Remove:",
	"Clear logs",
	"The log has been cleared",
	"Home page",
	"Multiplayer",
	"Create Online",
	"Join Online",
	"Clear Chat",
	"Load chat history",
	"Name",
	"Online account",
	"Send",
	"Settings",
	"Clear Settings",
	"Export Settings",
	"Import Settings",
	"Theme colors",
	"Theme Color - Transparent",
	"Text color",
	"Text Color - Transparent",
	"Background color",
	"Background image URL",
	"Cultivation Mode",
	"Grid Multiplier",
	"Select tolerance",
	"Select (erase) interval",
	"Annotation interval",
	"Dark and light theme switching",
	"Animation",
	"Text annotation size",
	"Global cache",
	"Shortcut keys",
	"Global cache limit",
	"Calculate intersection points",
	"Perfectly drawing circles, linear functions",
	"Zoom around the mouse",
	"Fast and natural movement",
	"The coordinate system naturally moves",
	"Function recursion",
	"Intelligent switch moves naturally",
	"Floating Panel",
	"Number of slider jumps",
	"Enable coordinate system interior decoration",
	"Automatic",
	"Black and white",
	"Automatic rationalization",
	"Color filter transparency",
	"Automatically size during loading",
	"Using Newton's iterative method to solve equations",
	"Reduce unnecessary function drawing",
	"Calculate using mathjs",
	"The ratio of drawn to actual canvas",
	"Language",
	"Please read the document carefully before setting up",
	"Revoke operation",
	"Definite integral calculator",
	"∫",
	"Upper limit",
	"Lower limit",
	"Variable",
	"Summation Calculator",
	"∑",
	"Animation and Trajectories",
	"Trajectory object (see documentation)",
	"Animation expression (see documentation)",
	"Density",
	"Starting",
	"End",
	"Variable",
	"Trajectory",
	"Animation",
	"Account Management",
	"Successfully logged in",
	"Enter login code",
	"New user activation successful!",
	"Login failed",
	"Account expiration time:",
	"Connection successful!",
	"Your online code is",
	"Success! Your online code is",
	"Can be found in the log",
	"Unsuccessful",
	"Analytical solution calculation successful",
	"New Point",
	"X coordinate",
	"Y coordinate",
	"The name of the point",
	"New",
	"Create a new variable",
	"Variable name",
	"Value",
	"Create a new text annotation",
	"Content",
	"Click Event",
	"Object Settings Center",
	"Object Name",
	"Which value",
	"The content to be changed to",
	"Read data",
	"Quick Create Circle Function",
	"Radius",
	`<input id="ghwdvecd" type="radio" name="gender" value="s" checked/>Upper Half Circle<input id="geaduytfwev" type="radio" name="gender" value="x"/>Lower Half Circle `,
	"Expression conversion",
	"Input expression",
	"AZ to Normal",
	"Normal to AZ",
	"Results",
	"More features",
	"Restore Unsaved Content",
	"Are you sure you want to restore unsaved content? It will overwrite existing content and is irreversible.",
	"Follow mouse OFF",
	"Follow mouse ON",
	"Full screen",
	"Clear local cache",
	"White background",
	"Compatibility Mode Save",
	"Remove empty items",
	"Grid: Display",
	"Grid: Hidden",
	"Axis: Display",
	"Axis: Hidden",
	"Save screenshot",
	"Input screenshot size and current canvas size multiple",
	"New Group",
	"Enter the objects to join the group (separated by,)",
	"Login",
	"Registration",
	"Log out of login",
	"Confirm to execute the operation?",
	"Confirm revocation? Revocation is irreversible",
	"Cache cleared, do you want to redraw?",
	"There is an error in the parsing formula. Do you want to continue?",
	"This is the restoration code applicable to the new version. Are you sure you want to continue?",
	"This is the restoration code applicable to the old version. Is it compatible with opening it?",
	"Is it updated dynamically?",
	'Type mismatch',
	"Is it in functional form?",
	"Radians:",
	"Angle:",
	"Add to variable?",
	"Is it updated dynamically?",
	"Are you sure you want to clear the settings?",
	'Settings cleared',
	"Not recommended for use in this size! Please increase the size",
	'Variable names have been automatically generated',
	'Enter settings code',
	"This is not a setting",
	'Settings imported',
	'Start calculating analytical solution',
	"Are you sure you want to log out? The operation is irreversible, please save the login code",
	'Effective after refresh',
	'Invalid input',
	"Please enter the online code",
	"Please enter accuracy (default to 0.01)",
	"The set - URL start command has been executed.",//238
	"Please enter the number of chat records",
	" is ",
	" Set to ",
	"Make changes,",
	"The number of",
	"The values are",
	"Please select an object",
	"Please select the same type of object",
	"Due to version update, the ",
	"The item settings are synchronized to the default settings.",
	"Settings loading failed! Please reset the settings.",
	"Ddisplay",
	"Synchronize results to input box",
	"Mark points on the function",
	"Enter starting position",
	"Enter ending position",
	'telescoping series',
	'pivot',
	'subset',
	'Replace the main element with:',
	'Page Scaling',
	'Benchmark',
	'Benchmark running, please wait…',
	'Score: '
]
var language = []
const update = {
	new: [],
	change: [],
	delete: [],
	xiufu: []
}
const tips = ["tips!", "提示！", "啊这,啊这,啊这", "AZ,AZ,AZ", "「海内存知己，天涯若比邻。」", "「千门万户曈曈日，总把新桃换旧符。」", "你好世界 !", "Hello World !", "「青，取之于蓝，而青于蓝；冰，水为之，而寒于水。」", "「剑阁峥嵘而崔嵬，一夫当关，万夫莫开。」", "「休对故人思故国，且将新火试新茶。」", '「与君初相识，犹如故人归。」', '「有朋自远方来，不亦乐乎。」', '好东西就要来了', '嗨，别来无恙啊！', '「小荷才露尖尖角，早有蜻蜓立上头。」', '「一花独放不是春，百花齐放春满园。」', "It's recommend using AZHSHB!" /*,'噫嘘唏——有文采的感叹','噫薏憶臆镱億𫄷譩癔鐿嬑檍繶澺燱䗷䪰',*/ /*'「」','「」','「」','「」','「」','「」','「」','「」'*/]


var zdyset = []
//var zdyset=["#7c0a21","#7c0a2164","white","rgba(255, 255, 255, 0.5)","black","","false","1,2,5"]
const mrsz = ["#7c0a21", "#7c0a2164", "black", "rgba(128, 128, 128, 0.7)", "rgba(0,0,0,0)", "", "false", "1,2,5", "3", "3", "1", "false", "true", "30", "false", "true", "5000", 'true', 'true', 'true', 'false', 'true', 'true', 'true', 'false', '1', 'true', 'true', 'false', 'true', '0.1', 'false', 'true', 'false', 'false', '1', 'zhcn', '1']



var huizhiwangge = true

var u3 = ['getcl', 'getdzb', 'getjd', 'gethsz', 'getjxs', 'getmous', 'getjl', 'getds', 'getpfx', 'getcx', 'getpxx']
//能够参与解析解运算的函数


const v_i_p = []
var jiesuospeak = "无法使用这个功能"
var isnotjiesuo = ["检测到此环境不安全", "请前往" + wz + "使用正版！"]
const jiesuoset = [14, 12, 20, 24, 34]
const SXMSTS = '你正处于受限模式！'


var xrjqd = 100 //分成几份
var xsx = 300 //坐标系显示位置 x
var xsy = 400 //坐标系显示位置 y
var hxxianshi = 20 //横向显示多少
var xianshikuandu = 600 //坐标系显示宽度
var xianshigaodu = 800 //坐标系显示高度
var ydisX = 300
var ydisY = 400
var points = []
var hbck
var mouse_x = 0
var mouse_y = 0
var now_mouse_x = 0
var now_mouse_y = 0
var fq1 = 30 //网格间距
var hbtocks = 0
var gssbyd = false //是否跟随鼠标移动
var ydms = 0 //移动模式
var yywzdx = 60 //文字大小
var qsml = "console.log('默认起始命令')"
var qssscrz = true
var JZBmod = false
var drw = []
var dr = []
var prv
var hsxz = false
var lddzt = false
var zhijilddzk = false
var xzzzlb = []
var yidong = false
var zbzxs = true //坐标轴显示
var wsonopen = false
var xjzai = false
var xiezi = true //写字hbck.fillText('推荐使用啊这函数画板', 10, 30);
var hslb = [] //函数列表
var dlb = [] //点列表
var cllb = [] //变量列表
var clzlb = [] //变量值列表
var xzlb = [] //选中列表
var yclb = [] //选中列表
var zlb = [] //组列表
var zllb = []
var wzpzlb = [] //文字批注列表
var newgetjdn = [] //算过的交点
var newgetjdz = [] //算过的交点的各种值
var newgetjxsn = [] //算过的解析式
var newgetjxsz = [] //算过的解析式的各种值
var hanshuculiebiao = [] //函数簇列表
var newgetpfxn = []
var newgetpfxz = []
var newwzpzpx = []
var newwzpznr = []
var newjfc = []
var newbkjfc = []
var qjhcn = []
var qjhcz = []
var aztozcthn = [] //啊这表达式转正常缓存
var aztozcthz = []
var zqs = 0;
var dqs = 0
var zzd = xianshikuandu;
var dzd = xianshigaodu
var zbj = 20
var dbj = 100
var usetime = 0
var sjzj = 0 //与服务器的时间差
var kgzrydyz = 16 //开关自然移动阈值 ms
var azSUIJIZHONGZI = gettime() //随机种子
var SHOUXIANMOSHI = [false]
var xvanranCS = 0
var tsm = true
var FPSsx = 500 //fps刷新时间 ms
var wrp = 0
var huifu = ''
var fulscreen = false
var jltmod = false
var gaojilianjishiyongmiyue = ''
var useneme = ''
var dxf = true
var guiji = []
var shijixianshiguiji = []
var xzjg = false //下载结果
var pointerlist = []
var l
var ycys = "#00ff0080"
var u200b = '​'
var suofang = 1

var drawlj = []

//var xzbqyc="#00ff0080"

var pxtonum = hxxianshi / xianshikuandu
var numtopx = xianshikuandu / hxxianshi

var jsq = 0 //计时器
var cpmsgb = "m"
var cpmsgbcs = 0
var clsfbxz = false

var isshift = false
var isalt = false
var jianrongbaocun = false

var fgfywsgheohjvfsbghyfgbsuyjghfbsrgfbkrgbvrgdsf

function getx() {
	return fgfywsgheohjvfsbghyfgbsuyjghfbsrgfbkrgbvrgdsf
}

function ifrmwxjc() { //判读是否在iframe中
	if (self.frameElement && self.frameElement.tagName == "IFRAME") {
		return true
	}
	if (window.frames.length != parent.frames.length) {
		return true
	}
	if (self != top) {
		return true
	}
	return false
}


function windowonload() {
	/*

		var kjjzx=['beif()',"document.getElementById('zxczxz').value=1;zxcz()"," document.getElementById('zxczxz').value=2;zxcz()","document.getElementById('zxczxz').value=4;zxcz()","document.getElementById('zxczxz').value=3;zxcz()","document.getElementById('zxczxz').value=7;zxcz()",
		" document.getElementById('zxczxz').value=8;zxcz()"," document.getElementById('zxczxz').value=9;zxcz()","document.getElementById('gnxz').value='gn8';gnqh()","document.getElementById('gnxz').value='gn9';gnqh()","document.getElementById('gnxz').value='gn13';gnqh()","qhsbydzbxms()"
		]
		var kjjjw=['s','j','h',"y","x","d","q","w","p","l","m","o"]
	    
		for(var ytf=0;ytf<kjjjw.length;ytf++){
			//console.log(ytf,kjjjw[ytf],kjjzx[ytf])
			{window.addEventListener("keydown", function(e) {   
				if((e.key==eval(kjjjw[ytf]))&&(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)){
										e.preventDefault();
					setTimeout(() => {
					eval(kjjzx[ytf])
				}
			}, false);
		}}*/
	document.getElementById("title").innerHTML = name + "&emsp;v" + thisv
	document.getElementById("morebbxians").innerHTML = "* @version v" + thisv + "* @date " + thisdate
	document.getElementById("gndnz").innerHTML = name
	setTimeout(() => {
		tip()
	}, 50);


	if (zdyset[20] == 'true') {
		zqs = -1 * xianshikuandu;
		dqs = -1 * xianshigaodu
		zzd = 3 * xianshikuandu;
		dzd = 3 * xianshigaodu
	}

	if (qssscrz == true) {
		qssscrz = false
		addlog(language[77] + thisv + language[78])
		var gxsl = update.change.length +
			update.new.length +
			update.delete.length +
			update.xiufu.length
		var dayin = [language[81] + update.new.length, '']
		for (let i = 0; i < update.new.length; i++) {
			dayin.push(update.new[i])
		}
		dayin.push(language[82] + update.change.length, '')
		for (let i = 0; i < update.change.length; i++) {
			dayin.push(update.change[i])
		}
		dayin.push(language[83] + update.xiufu.length, '')
		for (let i = 0; i < update.xiufu.length; i++) {
			dayin.push(update.xiufu[i])
		}
		dayin.push(language[84] + update.delete.length, '')
		for (let i = 0; i < update.delete.length; i++) {
			dayin.push(update.delete[i])
		}
		addZD(dayin, language[79] + gxsl + language[80])

	}

	SXHS()

	/* 本地合并版：URL 传值统一由 az_url.js 安全解析（曲线 / 点 / 视图 / 标题 / 保存码），
	   不再对查询串做 eval（旧机制存在语法崩溃与注入风险） */

	if (tsm == true) {
		if (SHOUXIANMOSHI[0] == true) {/*
			alert( '因为校验错误，' + SXMSTS )
			var hfm = prompt( "请输入保存码" )
			if ( isrel( hfm ) == true ) {
				document.getElementById( 'klkl' ).value = hfm
				huif()
			}*/
		}
	}

	return
}

function zxcshsz() {
	if (zdyset[15] == 'true') { //添加快捷键
		{
			window.addEventListener("keydown", function (e) { //ctrl+s
				if ((e.key == 's' || e.key == 'S') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {



						//console.log('az')
						beif()

					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+j
				if ((e.key == 'j' || e.key == 'J') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 1;
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+h
				if ((e.key == 'h' || e.key == 'H') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 2
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+y
				if ((e.key == 'y' || e.key == 'Y') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 4
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+n
				if ((e.key == 'n' || e.key == 'N') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 3
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+d
				if ((e.key == 'd' || e.key == 'D') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 7
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+q
				if ((e.key == 'q' || e.key == 'Q') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 8
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+w
				if ((e.key == 'w' || e.key == 'W') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('zxczxz').value = 9
						zxcz()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+p
				if ((e.key == 'p' || e.key == 'P') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('gnxz').value = 'gn8'
						gnqh()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+l
				if ((e.key == 'l' || e.key == 'L') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('gnxz').value = 'gn9'
						gnqh()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+m
				if ((e.key == 'm' || e.key == 'M') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById('gnxz').value = 'gn13'
						gnqh()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+o
				if ((e.key == 'o' || e.key == 'O') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						qhsbydzbxms()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+Z
				if ((e.key == 'z' || e.key == 'Z') && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						B2()
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //alt+q
				if ((e.key == 'q') && (e.altKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById("ydms").value = language[18]
						ydms = 0
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //alt+w
				if ((e.key == 'w') && (e.altKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById("ydms").value = language[19]
						ydms = 1
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //alt+e
				if ((e.key == 'e') && (e.altKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById("ydms").value = language[20]
						ydms = 2
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //alt+r
				if ((e.key == 'r') && (e.altKey)) {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						document.getElementById("ydms").value = language[21]
						ydms = 3
					}, 50);
				}
			}, false);
			window.addEventListener("keydown", function (e) { //ctrl+s
				//console.log(e.key)
				if (e.key == 'ScrollLock') {
					if (e.repeat) {
						return false;
					}
					e.preventDefault();
					setTimeout(() => {
						//console.log(e.key)
						dxf_qh()
					}, 50);
				}
			}, false);


			document.getElementById('fuck').addEventListener("contextmenu", function (e) {
				e.preventDefault()
				azd()
			});
		}
	}

	jstext = [name, "已加载完毕", "新增功能：", "啊这"]
	if (zdyset[6] == "true") {
		jstext = [name + "已于第", "重天", "新法宝：", "善哉"]
		var htmltext = ["超渡函数", "函数维度", "缩", "精益求精", "坐·X", "坐·Y", "坐·长", "坐·宽", "鼠·X", "鼠·Y", "功·出入", "功·渡劫点", "功·渡劫量", "功·渡劫圆", "功·翻洋过海", "功·渡劫点", "功·渡劫量", "功·渡劫圆", "大胆妖孽:", "工·算盘", "工·算盘"]
		var botton = ["渡劫", "行善", "更多"]
		var inputtishi = ["上", "下", "函数式", "五彩斑斓", "心·X", "心·Y", "圆的一半"]

		var yyc = [14, 18]
		for (var oh = 0; oh < htmltext.length; oh++) {
			if (isInArray(yyc, oh) == false) {
				document.getElementById('text-' + oh).innerHTML = htmltext[oh]
			}
		}
		for (var oh = 0; oh < botton.length; oh++) {
			document.getElementById('botton-' + oh).value = botton[oh]
		}
		var a = 0
		document.getElementById("hs-zd").placeholder = inputtishi[a];
		a++
		document.getElementById("hs-sm").placeholder = inputtishi[a];
		a++
		document.getElementById("grdgr").placeholder = inputtishi[a];
		a++
		document.getElementById("wadwd").placeholder = inputtishi[a];
		a++
		document.getElementById("tgtgtgtgtg").placeholder = inputtishi[a];
		a++
		document.getElementById("frfrfrfrfr").placeholder = inputtishi[a];
		a++
		document.getElementById("paoifrvohi").placeholder = inputtishi[a];
		a++



		document.getElementById("fuck").innerHTML = "善哉"

	}




	name = name_zhcn
	//加载语言
	if (zdyset[36] == 'zhcn') {
		language = language_zhcn

	}
	if (zdyset[36] == 'en') {
		language = language_en
		name = name_en
	}
	if (zdyset[36] == 'wy') {
		language = language_wy

	}
	loadevents()

	window.onpointermove = function (h) {
		fsdcds(h, 'm')
	}




	var ob = "*{-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;user-select: none;" //加载动画
	if (zdyset[12] == "true") {
		ob = ob + "transition: 0.5s cubic-bezier(0.5, 0, 0.5, 1);"
	}
	if (getcolor() == 'black') {
		var cl = 'rgba(255, 255, 255, ' + zdyset[30] + ')'
	} else {
		var cl = 'rgba(0, 0, 0, ' + zdyset[30] + ')'
	}
	ob = ob + "}"
	ob = ob + ":root {--bjsdfz: " + zdyset[0] + ";--bjsdfz-a:" + zdyset[1] + ";--wzys:" + zdyset[2] + ";--wzys-a:" + zdyset[3] + ";--hanbj:" + cl + ";"
	if (zdyset[28] == "true") {
		ob = ob + "filter: grayscale(1);"
	}
	ob = ob + "}"
	//console.log(ob)
	document.getElementById("szys").innerHTML = ob

	//ob = ob + "}"
	document.getElementById("azhshb").style.color = zdyset[2]
	document.getElementById("azhshb").style.backgroundColor = zdyset[4]
	document.getElementById("biaodashi").style.backgroundColor = zdyset[4]
	document.getElementById("beijc").style.backgroundImage = "url(" + zdyset[5] + ")"
	document.body.style.zoom = zdyset[37]
	suofang = 1 / Number(zdyset[37])
	yywzdx = Number(zdyset[13])





	//addlog("已加载设置项")
}



function window_onload() {
	xjzai = true
	if (wsonopen) {
		DLYZ()
	}



	var oDiv = document.getElementById('zbx');
	addEvent(oDiv, 'mousewheel', hssf);
	addEvent(oDiv, 'DOMMouseScroll', hssf);

	var hy = document.getElementById("divdis");

	hbck = hy.getContext("2d");
	hbck.fillStyle = "#FF0000"
	hbck.lineWidth = 2

	huifu = localStorage.getItem('ls')
	localStorage.setItem('ls', '')


	var set = localStorage.getItem("setting")

	if (set == undefined) {
		zdyset = mrsz //默认设置
	} else {
		if (zfc_to_sz(set).length < mrsz.length) {
			zdyset = zfc_to_sz(set)
			for (var i = zfc_to_sz(set).length; i < mrsz.length; i++) {
				zdyset.push(mrsz[i])
			}
			localStorage.setItem("setting", sz_to_zfc(zdyset))
			alert(language[247] + (mrsz.length - zfc_to_sz(set).length) + language[248])
		} else {
			if (zfc_to_sz(set).length > mrsz.length) {
				alert(language[249])
			} else {
				zdyset = zfc_to_sz(set)
			}
		}

	}


	document.getElementById('inputfile').addEventListener('change', function () {//打开文件
		var fr = new FileReader();
		fr.onload = function () {
			if (fr.result.split('Sketchpad').length > 1) {
				var d = fr.result
				var c = d.split('Construction VALUE="')[1].split('">')[0]
				huifuzijhhb(c)
				//console.log(c)
				//document.getElementById('i-frame').contentWindow.document.getElementsByName('Construction')[0].value
				//parent.window.frames[0].document.getElementsByName('Construction')[0].value
				return
			}
			//document.getElementById('klkl').value = fr.result;

			//console.log(LZString.decompressFromUTF16(fr.result))
			try {
				huif(LZString.decompressFromUTF16(fr.result))
			} catch (error) {
				huif(fromCode(fr.result))
			}


		}
		fr.readAsText(this.files[0]);

	})



	var windmd5 = SHA256(md5(document.getElementById('azhshb').innerHTML))
	var QyM = decodeURIComponent(window.location.href).split("?")[0]

	if (/*isInArray(YXURL, QyM) == false || */(ifrmwxjc() == true && QyM !== 'http://h.ssssssss.eu.org/v/')) {
		//alert('a')
		SHOUXIANMOSHI.splice(0, 1, true)
		SHOUXIANMOSHI.push('ifrqt')
	}
	//console.log(windmd5)
	/*
	if(windmd5=='8c95ec260c81424975544ce97063a499b516c0f3a34daa46b211115462e6f0ee'){}else{
		for(;1==1;){
			for(;1==1;){
				for(;1==1;){
					for(;1==1;){
						for(;1==1;){
							for(;1==1;){
								for(;1==1;){
									for(;1==1;){
											debugger
											SHOUXIANMOSHI.splice(0,1,true)
											SXHS()
											jfsurhiufhc()
									}
								}
							}
						}
					}
				}
			}
		}
	}*/
	//'QETUO12345wryip67890'
	setTimeout(() => {
		var jiazaijsliebiao = ['http://h.ssssssss.eu.org/q/p/AAAAA.js', 'math.js', 'algebrite.bundle-for-browser.js',]
		/* 本地合并版：移除远程脚本加载（离线可用，也更快更安全） */
		if (isusehuancun) {
			var js = document.createElement('script');
			js.innerHTML = localStorage.getItem('localJSkatex.min.js');
			document.getElementsByTagName('head')[0].appendChild(js);
		} else {
			var js = document.createElement('script');
			js.src = 'katex.min.js'
			document.getElementsByTagName('head')[0].appendChild(js);

		}


		//addlog('加载完全完毕')
	}, 600);

	setTimeout(() => {
		if (zdyset[26] == 'true') {
			setTimeout(() => {
				try {
					tianjianeirong()
				} catch (err) {
					//console.log(err)
				}
			}, 500);
		}
	}, 5000);

	function clution() {
		if (v_i_p[0] == true) {
			if (sj(0, 12) == 6) {

			}
		}
		setTimeout(() => {
			clution()
		}, 5000);
	}


	setTimeout(() => {
		var d = localStorage.getItem('czx')
		if (isrel(d) == true) {
			eval(d)

		}
	}, 0);

	zxcshsz()
	if (zdyset[31] == 'true') {
		zidongchicun(true)
	}
	clution()
	bianhau()
	cxjswgjj()

	//ckccjc()
	windowonload()
	setTimeout("ckccjc()", 1500)
	// setTimeout(`document.write('<script type="text/javascript" src="http://h.ssssssss.eu.org/q/p/AAAAA.js"></script>')`,200)
	huizhi()
}
setInterval('JIANCEfps()', FPSsx)

function JIANCEfps() {
	if (SHOUXIANMOSHI[1] == 'ifrqt') {
		document.getElementById('fpsxs').innerHTML = ''
	} else {
		document.getElementById('fpsxs').innerHTML = 'FPS:' + 1000 * xvanranCS / FPSsx
	}
	xvanranCS = 0
}

window.isCloseHint = true;
//初始化关闭
window.addEventListener("beforeunload", function (e) {
	if (window.isCloseHint) {
		var confirmationMessage = "工作未保存，确定要离开吗？";
		(e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
		return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
	}
});
window.addEventListener('resize', function () { //窗口尺寸变化

	SXMSJCCC()
})

function ckccjc(q) {
	if (q == true || jltmod == true) {
		return
	}
	if (document.getElementById("azhshb").clientWidth < 950 || document.getElementById("azhshb").clientHeight < 660) {
		wxldd(language[227], 800)
	}
}

function sj(min, max) { //随机
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function wzpzonclick(a) {
	if (isrel(wzpzlb[a].split("|")[3]) == true) {
		if (v_i_p[0] == true) {
			eval(wzpzlb[a].split("|")[3])
			//addlog( "文字批注" + a + "的点击事件已被执行" )
		} else {
			alert(jiesuospeak)
			//addlog( "文字批注" + a + "的点击事件没有被执行！ " )
		}
	}

}

if (localStorage.getItem("az") == undefined) {
	var azc = 0
} else {
	var azc = localStorage.getItem("az")
}

function yyqh() {
	if (zdyset[11] == "true") { //夜间模式
		setting(11, "false")
		setting(4, "white")
		setting(2, "black")
		//alert( "现在是深色，已切换至浅色。" )
	} else {
		setting(11, "true")
		setting(4, "black")
		setting(2, "white")
		//alert( "现在是浅色，已切换至深色。" )
	}
	huizhi()
}

function clearLB(mod) {
	clzlb = []
	newgetjdn = []
	newgetjdz = []
	newgetjxsn = []
	newgetjxsz = []
	newgetpfxn = []
	newgetpfxz = []
	newwzpznr = []
	newwzpzpx = []
	newjfc = []
	aztozcthn = []
	aztozcthz = []
	hanshuculiebiao = []
	for (let i = 0; i <= hslb.length; i++) {
		hanshuculiebiao.push([])
	}
	if (mod == 'all') {
		qjhcn = []
		qjhcz = []
	}
}

function output(t2) {
	var hs = sz_to_zfc(hslb)
	var d = sz_to_zfc(dlb)
	var cl = sz_to_zfc(cllb)
	var yc = sz_to_zfc(yclb)
	var wzpz = sz_to_zfc(wzpzlb)
	var ppp = ""
	for (var r = 0; r < drawlj.length; r++) {
		ppp = ppp + sz_to_zfc(drawlj[r]) + "*"
	}
	var qqq = ""
	for (var r = 0; r < zlb.length; r++) {
		if (zlb[r] == '') { } else {
			qqq = qqq + sz_to_zfc(zlb[r]) + "*"
		}

	}

	//var srartcmd=prompt("起始命令·JavaScript")
	var srartcmd = qsml
	var w = thisv + "و³" + hs + "و³" + d + "و³" + cl + "و³" + yc + "و³" + ppp + "و³" + srartcmd + "و³" + wzpz + "و³" + qqq
	if (jianrongbaocun == true) {
		w = fth(w)
	}
	if (t2 == 2) {
		var bc = toCode2(w)
		return bc
	}
	var bc = toCode2(w)
	return bc
}

function bianhau(w) {

	if (zdyset[20] == 'true') {
		zqs = -1 * xianshikuandu;
		dqs = -1 * xianshigaodu
		zzd = 3 * xianshikuandu;
		dzd = 3 * xianshigaodu
	} else {
		zqs = 0;
		dqs = 0
		zzd = xianshikuandu;
		dzd = xianshigaodu
	}
	if (w) {
		document.getElementById("decsx").value = (ydisX)
		document.getElementById("decsy").value = (ydisY)
		return
	}
	document.getElementById("zbx").style.width = xianshikuandu + "px"
	document.getElementById("zbx").style.height = xianshigaodu + "px"
	/*	document.getElementById("divdis").style.width = xianshikuandu + "px"
		document.getElementById("divdis").style.height = xianshigaodu + "px"
		document.getElementById("divdis").width = xianshikuandu
		document.getElementById("divdis").height = xianshigaodu*/
	kjc()
	if (zdyset[20] == 'true') {
		document.getElementById("divdis").width = 3 * xianshikuandu
		document.getElementById("divdis").height = 3 * xianshigaodu
		document.getElementById("divdis").style.width = 3 * xianshikuandu + "px"
		document.getElementById("divdis").style.height = 3 * xianshigaodu + "px"
		document.getElementById("divdis").style.top = -1 * xianshigaodu + "px"
		document.getElementById("divdis").style.left = -1 * xianshikuandu + "px"
	}
	document.getElementById("bhcv").value = xianshikuandu
	document.getElementById("edsde").value = xianshigaodu
	document.getElementById("decsx").value = (ydisX)
	document.getElementById("decsy").value = (ydisY)
	document.getElementById("gdrft").value = xrjqd
	document.getElementById("fvfrv").value = hxxianshi
	// document.getElementById("yzhou").style.left=(ydisX-zqs)+"px"
	// document.getElementById("xzhou").style.top=(ydisY-dqs)+"px"
	document.getElementById("hslbxs").style.left = xianshikuandu + 30 + "px"
	document.getElementById("drdrdr").style.left = xianshikuandu + 30 + "px"
	document.getElementById("qtgn").style.left = xianshikuandu + 30 + "px"
	document.getElementById("gnxz").style.left = xianshikuandu + 30 + "px"
	document.getElementById("caozuolan").style.left = xianshikuandu + 30 + 1 + "px"
	document.getElementById("fucc").style.left = xianshikuandu + 30 + "px"
	document.getElementById('xjhslan').style.left = (xianshikuandu + zbj - 10) + "px"


	document.getElementById("fucc").style.height = (xianshigaodu - 390 + 50) + "px"
	document.getElementById("hslbxs").style.height = (xianshigaodu - 390) + "px"
	document.getElementById("caozuolan").style.top = (xianshigaodu - 390 + dbj) + 1 + "px"
	document.getElementById("qtgn").style.top = (xianshigaodu - 330 + dbj) + "px"
	document.getElementById("gnxz").style.top = (xianshigaodu - 330 + 185 + dbj) + "px"
	document.getElementById("drdrdr").style.top = (xianshigaodu - 330 + 230 + dbj) + "px"

	document.getElementById("tips").style.top = (dbj + xianshigaodu + 15) + 'px'
	document.getElementById("tips").style.width = (260 + xianshikuandu) + 'px'
	document.getElementById("cxann").style.top = (dbj + xianshigaodu + 15) + 'px'
	document.getElementById("cxann").style.left = (20 + 260 + 10 + xianshikuandu) + 'px'

	document.getElementById("fucc").style.top = dbj + "px"
	document.getElementById("zbx").style.top = dbj + "px"
	//document.getElementById("wanggexian").innerHTML=""
	if (document.getElementById("ldd").style.height == '2px') {
		if (getcolor() == 'black') {
			var cl = 'rgba(0, 0, 0, 1)'
			var cl2 = 'rgba(0, 0, 0, .2)'
		} else {
			var cl = 'rgba(255, 255, 255, 1)'
		}
	} else {
		if (getcolor() == 'black') {
			var cl = 'rgba(255, 255, 255, 1)'
		} else {
			var cl = 'rgba(0, 0, 0, 1)'
		}
	}

	//document.getElementById("ldd").style.backgroundColor = cl
	document.getElementById("lddnr").style.color = getcolor()



}






function wzpznrzh(n) {
	var dn = n
	var s = 0
	for (var i = 0; i < n.length; i++) {
		if (n.substring(i, i + 1) == "%") {

			s++
		}
	}
	// console.log(s)
	for (var t = 0; t < (s / 2); t++) {
		var q = -1
		for (var i = 0; i < dn.length; i++) {
			// console.log(dn.substring(i,i+1),q,i)
			if (dn.substring(i, i + 1) == "%") {
				if (q == -1) {
					var q = i
				} else {
					var newnr = jxs_l_for_azhs(dn.substring(q + 1, i))
					dn = dn.substring(0, q) + newnr + dn.substring(i + 1, dn.length)
					break
				}
			}

		}
	}
	return dn

}

function chenchys(a, b, oj) {
	//TBxx()
	//console.log(a,b,oj)
	var mod = a.substring(0, 1)

	array = a.substring(1, a.length).split(',')
	for (let j = 0; j < array.length; j++) {
		const element = array[j];
		if (mod == "h") {
			var c = hslb[Number(element)]
		}
		if (mod == "d") {
			var c = dlb[Number(element)]
		}
		if (mod == "c") {
			var c = cllb[Number(element)]
		}
		if (mod == "w") {
			var c = wzpzlb[Number(element)]
		}
		var u = ""
		for (var i = 0; i < c.split("|").length; i++) {
			if (i == b) {
				u = u + "|" + oj
			} else {
				u = u + "|" + c.split("|")[i]
			}
		}
		var aft = u.substring(1, u.length)
		if (mod == "h") {
			hslb.splice(Number(element), 1, aft)
		}
		if (mod == "d") {
			dlb.splice(Number(element), 1, aft)
		}
		if (mod == "c") {
			cllb.splice(Number(element), 1, aft)
		}
		if (mod == "w") {
			wzpzlb.splice(Number(element), 1, aft)
		}
	}

}


function tjwzpz(x, y, n, u) {
	//文字批注的数据模型：  x坐标|y坐标|内容|点击事件

	wzpzlb.push(x + "|" + y + "|" + n + "|" + u)
	var hanshuhao = wzpzlb.length - 1
	var xy = wztopx(n, yywzdx)
	var uy = document.getElementById("wanggexian").innerHTML
	document.getElementById("wanggexian").innerHTML = uy + " <div οncοntextmenu='return false' onselectstart ='return false'     οnselect='document.selection.empty()'     οncοpy='document.selection.empty()'onbeforecopy='return false'      id='pz" + hanshuhao + "' class='wzpzdiv' style='width: " + (xy[0] + 20) + "px;height:" + (xy[1] + 5) + "px;    line-height: " + (yywzdx + 0) + "px;font-size: " + yywzdx + "px;' onmousedown='wzpzyd(" + hanshuhao + ",0)' ontouchstart='wzpzyd(" + hanshuhao + ",1)' onclick='wzpzonclick(" + hanshuhao + ")'>" + wzpznrzh(n) + "</div>"

	var uy = document.getElementById("hslbxs").innerHTML
	document.getElementById("hslbxs").innerHTML = uy + "<div id='w" + hanshuhao + "' class='hcxda' onclick=xz('w" + hanshuhao + "')> <input class='noneinp' style='left:3px;top:5px;height:20px;width: 70px;' value='w" + hanshuhao + "   " + x + "," + y + "'/> <input id='wzpzsr" + hanshuhao + "' class='vfr' style='top:5px;left:90px; width: 160px; height: 20px;' value='" + n + "' onchange='wzpzggnr(" + hanshuhao + ")'><div class='hsscan' onclick=delhs(" + hanshuhao + ",'wz')>" + language[43] + "</div></div>"
	//"<input id='wzpzsr" + hanshuhao + "' class='vfr' style='top:5px;left:70px; width: 160px; height: 20px;' value='"+n+"' wzpzggnr(' + hanshuhao + ')'>"


	return hanshuhao
}

function cjxhs(jxs, clorer, zuixiao, zuida, kuand) { //添加函数
	// console.log(jxs, clorer, zuixiao, zuida, kuand)
	if (isrel(clorer) == false) {
		clorer = "black"
	}
	if (isrel(kuand) == false) {
		kuand = 1
	}

	if (zdyset[29] == 'true') {
		jxs = th(jxs)
		//	console.log(jxs)
		if (isInArray(['p:', 'r:', 'x:'], jxs.substring(0, 2))) {
			//		console.log('2')
			if (jxs.substring(0, 2) == 'r:') {
				var jxs = 'r:' +
					zc_to_az(jxs.substring(2, jxs.length).split(';')[0]) +
					";" +
					zc_to_az(jxs.substring(2, jxs.length).split(';')[1]) +
					";" +
					zc_to_az(jxs.substring(2, jxs.length).split(';')[2])
			} else {
				var jxs = jxs.substring(0, 2) +
					zc_to_az(jxs.substring(2, jxs.length))
			}

		} else {
			var jxs = zc_to_az(jxs)
		}

		var zuixiao = th(zuixiao)
		var zuixiao = zc_to_az(zuixiao)
		var zuida = th(zuida)
		var zuida = zc_to_az(zuida)
		if (funjiance(jxs)[0] == true) { } else {
			if (confirm(language[215]) == true) {
				var jxs = funjiance(jxs)[1]
			} else {
				return
			}
		}
	}
	if (zuixiao == '') {
		zuixiao = '(_infinite;infinite)'
	}
	if (zuida == '') {
		zuida = '(_infinite;infinite)'
	}
	hslb.push(jxs + "|" + clorer + "|" + zuixiao + "|" + zuida + "|" + kuand)
	hanshuculiebiao.push([])
	/*  函数的数据模型：  解析式|颜色|取值下线|取自上限
	 */
	clorer = getcolor(clorer)

	var hanshuhao = hslb.length - 1


	var g = ("h" + hanshuhao + "   " + jxs + "   " + zuixiao + "," + zuida)



	var y = document.getElementById("hslbxs").innerHTML
	document.getElementById("hslbxs").innerHTML = y + "<div class='hcxda' onclick=xz('h" + hanshuhao + "') style='color: " + clorer + ";'  id='h" + hanshuhao + "'><input class='noneinp' style='left:3px;top:5px;height:20px;width: 240px;' value='" + g + "'/><div class='hsscan' onclick=delhs(" + hanshuhao + ",'h')>" + language[43] + "</div></div>"
	//TBxx()
	return hanshuhao
}

function xjdian(x, y, z) { //添加点
	/*  点的数据模型：  x坐标|y坐标|点的名字
	 */
	var z2 = ""
	if (isrel(z) == false) { } else {
		z2 = z
	}
	if (zdyset[29] == 'true') {
		var x = th(x)
		var x = zm_to_cl(x)
		if (funjiance(x)[0] == true) { } else {
			if (confirm(language[215]) == true) {
				var x = funjiance(x)[1]
			} else {
				return
			}
		}
		var y = th(y)
		var y = zm_to_cl(y)
		if (funjiance(y)[0] == true) { } else {
			if (confirm(language[215]) == true) {
				var y = funjiance(y)[1]
			} else {
				return
			}
		}
	}
	dlb.push(String(x) + "|" + String(y) + "|" + String(z2))
	var hanshuhao = dlb.length - 1
	var g = "d" + hanshuhao + "   " + x + "," + y
	var y = document.getElementById("hslbxs").innerHTML
	document.getElementById("hslbxs").innerHTML = y + "<div class='hcxda' onclick=xz('d" + hanshuhao + "') style='' id='d" + hanshuhao + "'><input class='noneinp' style='left:3px;top:5px;height:20px;width: 180px;' value='" + g + "'/><input id='diandemzi" + hanshuhao + "' class='vfr' style='top:5px;right:45px; width: 60px; height: 20px;' value='" + z2 + "' onchange=dianmz(" + hanshuhao + ") /><div class='hsscan' onclick=delhs(" + hanshuhao + ",'d');>" + language[43] + "</div></div>"
	//TBxx()
	return hanshuhao
}


function xjcl(m, z) { //添变量
	/*  变量的数据模型：  变量名|值
	 */
	function sjclm() {

		if (cllb.length > 23) {
			var scclm = abc[sj(0, 25)] + abc[sj(0, 25)]
		} else {
			var scclm = abc[sj(0, 25)]
		}

		if (jcblkxx(scclm) == false) {
			return sjclm()
		} else {
			return scclm
		}
	}

	function jcblkxx(scclm) {
		var t = true
		for (let i = 0; i < cllb.length; i++) {
			const element = cllb[i];
			if (scclm == element.split('|')[0]) {
				var t = false
			}
		}
		if (scclm == 'e' || scclm == 'pi' || scclm == 'hj' || scclm == 'ol' || scclm == 'et' || scclm == 'x') {
			var t = false
		}
		return t
	}
	if (zdyset[29] == 'true') {
		var z = th(z)
		var z = zm_to_cl(z)
		if (funjiance(z)[0] == true) { } else {
			if (confirm(language[215]) == true) {
				var z = funjiance(z)[1]
			} else {
				return
			}
		}
	}
	if (jcblkxx(m) == false) {
		var m = sjclm()
		wxldd(language[228], 1200)
	}
	if (isrel(m) == false) {


		var m = sjclm()
		wxldd(language[228], 1200)
	}
	cllb.push(String(m) + "|" + String(z))
	clzlb.push(jxs_l_for_azhs(z))


	var hanshuhao = cllb.length - 1
	var g = "c" + hanshuhao + "   " + m
	var gg = "c" + hanshuhao
	if (jxs_l_for_azhs(z) == z) {
		var hdk = `<input id='clhk` + hanshuhao + `' class='vfr' style='top:5px;left:140px; width: 100px; height: 20px;' type='range' min='-10' max='10' step='0.01' value='` + z + `' onpointermove=zxhkqz(` + hanshuhao + `,'hk') ontouchstart="zxs=0;clsfbxz=isInArray(xzlb,'` + gg + `');xcl(` + hanshuhao + `)" onmousedown="zxs=0;clsfbxz=isInArray(xzlb,'` + gg + `');xcl(` + hanshuhao + `)" ontouchmove=zxhkqz(` + hanshuhao + `,'hk') />`
	} else {
		var hdk = ''
	}
	var y = document.getElementById("hslbxs").innerHTML
	document.getElementById("hslbxs").innerHTML = y + "<div class='hcxda' onclick=xz('c" + hanshuhao + "') style='' id='c" + hanshuhao + "'><input class='noneinp' style='left:3px;top:5px;height:20px;width: 70px;' value='" + g + "'/><input id='clsr" + hanshuhao + "' class='vfr' style='top:5px;left:70px; width: 60px; height: 20px;' value='" + z + "' onchange=clgb(" + hanshuhao + ",'sr') />" + hdk + "<div class='hsscan' onclick=delhs(" + hanshuhao + ",'cl');>" + language[43] + "</div></div>"
	//TBxx()
	return hanshuhao
}

function xcl(h) {
	//console.log(xzlb);
	if (clsfbxz) {
		xzlb = arrremove(xzlb, 'c' + h)
	} else {
		if (isInArray(xzlb, 'c' + h) == true) {

		} else {
			xzlb.push('c' + h)
		}
	}
}

function xz(m) { //添加 移除选择
	//console.log(m,xzlb,isalt,isshift)
	if (m.substring(0, 1) == 'z') {
		var zh = Number(m.split('z')[1])
		for (let i = 0; i < zlb[zh].length; i++) {
			const element = zlb[zh][i];
			if (isInArray(xzlb, element) == true) {
				xzlb = arrremove(xzlb, element)
				if (isInArray(yclb, element) == true) {
					document.getElementById(element).style.backgroundColor = ycys
				} else {
					document.getElementById(element).style.backgroundColor = "rgba(0,0,0,0)"
				}
			} else {
				xzlb.push(element)
				document.getElementById(element).style.backgroundColor = zdyset[1]
			}
		}
		huizhi()
		return
	}
	if (isInArray(xzlb, m) == true) {
		xzlb = arrremove(xzlb, m)
		if (isInArray(yclb, m) == true) {
			document.getElementById(m).style.backgroundColor = ycys
		} else {
			document.getElementById(m).style.backgroundColor = "rgba(0,0,0,0)"
		}
	} else {
		xzlb.push(m)
		document.getElementById(m).style.backgroundColor = zdyset[1]
	}
	huizhi()
}

function qkxz() {
	for (var d = 0; d < xzlb.length; d++) {
		if (isInArray(yclb, xzlb[d]) == true) {
			document.getElementById(xzlb[d]).style.backgroundColor = ycys
		} else {
			document.getElementById(xzlb[d]).style.backgroundColor = "rgba(0,0,0,0)"
		}
	}
	xzlb = []
	huizhi()
}

function SXMSJCCC() {
	if (SHOUXIANMOSHI[0] == true || zdyset[31] == 'true') {
		zidongchicun(true)
		bianhau()
		huizhi()
	}
}

function SXHS() {
	if (SHOUXIANMOSHI[0] == true) { } else {
		return
	}
	document.getElementById('zbx').style.borderRadius = '0px'
	document.getElementById('zbx').style.left = '0px'
	document.getElementById('zbx').style.top = '0px'
	zbj = 0;
	dbj = 0
	var YYCLB = ['edafs', 'caozuolan', 'fucc', 'hslbxs', 'qtgn', 'gnxz', 'drdrdr', 'tips']
	for (var i = 0; i < YYCLB.length; i++) {
		document.getElementById(YYCLB[i]).style.display = 'none'
	}
	if (SHOUXIANMOSHI[1] == 'ifrqt' && v_i_p[0] == true) {
		document.getElementById('tjsy').innerHTML = ''
		document.getElementById('bzxnxswz').innerHTML = ''
		document.getElementById("yams").innerHTML = ''
		document.getElementById('fpsxs').innerHTML = ''
	}
	SXMSJCCC()
}

function delhs(hsh, lx) { //删除
	if (lx == "h") {
		hslb.splice(hsh, 1, "")
	}
	if (lx == "d") {
		dlb.splice(hsh, 1, "")
	}
	if (lx == "cl" || lx == "c") {
		cllb.splice(hsh, 1, "")
	}
	if (lx == "wz" || lx == "w") {
		wzpzlb.splice(hsh, 1, "")
	}
	if (lx == "z") {
		zlb.splice(hsh, 1, "")
	}
	setTimeout(() => {
		arrremove(xzlb, lx + hsh)
		arrremove(yclb, lx + hsh)
		for (let i = 0; i < zlb.length; i++) {
			arrremove(zlb[i], lx + hsh)
		}



		if (lx == 'wz') {
			lx = 'w'
			document.getElementById('pz' + hsh).remove()
		};
		if (lx == 'cl') {
			lx = 'c'
		}
		document.getElementById(lx + hsh).remove()
		TBxx()
	}, 100);
	//TBxx()
	//huizhi()
}

function addEvent(obj, xEvent, fn) {
	if (obj.attachEvent) {
		obj.attachEvent('on' + xEvent, fn);
	} else {
		obj.addEventListener(xEvent, fn, false);
	}
}

function huif(m, n) { //导入函数
	//console.log(m)
	var huifuma = fromCode2(m)


	hslb = []
	cllb = []
	dlb = []
	wzpzlb = []
	drawlj = []
	clearLB('all') /* 换画板时必须清空 gj/gz/gc 等解析缓存，否则会串用上一个画板的缓存值 */
	document.getElementById('wanggexian').innerHTML = ''
	document.getElementById('hslbxs').innerHTML = `<div style="position: absolute;;width: 100%;height:100%;top:0px;left:0px;z-index: 0;" onclick="qkxz()"></div>`

	//document.getElementById("hslbxs").innerHTML=""
	if (huifuma.substring(0, 3) == 'set') {
		inset(f)
		return
	}
	if (huifuma.split("و³")[0] == String(thisv)) {
		var pr = huifuma
	} else {
		if (Number(huifuma.split("و³")[0]) > thisv) {
			if (confirm(language[216]) == true) {
				var pr = huifuma
			} else {
				return false
			}
		} else {
			if (confirm(language[217]) == true) {
				if (Number(huifuma.split("و³")[0]) < 11) {
					var pr = "و³" + huifuma
				} else {
					var pr = huifuma
				}
				if (Number(huifuma.split("و³")[0]) < 17) {
					pr = pr.replace(new RegExp('r=', 'g'), 'r:')
					pr = pr.replace(new RegExp('x=', 'g'), 'x:')
					pr = pr.replace(new RegExp('p=', 'g'), 'p:')
					setTimeout(() => {
						for (let i = 0; i < hslb.length; i++) {
							const element = hslb[i].split('|');
							var zuo = element[2]
							var you = element[3]
							if (!isrel(zuo)) {
								var zuo = '-infinity'
							}
							if (!isrel(you)) {
								var you = 'infinity'
							}
							var xfw = "(" + zuo + ";" + you + ")"
							chenchys('h' + i, 2, xfw)
							chenchys('h' + i, 3, '(-infinity;infinity)')
						}
						sxcl();
						huizhi()
					}, 5000);
				}
			} else {
				return false
			}
		}
	}
	var start = new Date().getTime() // 开始时间

	//导入函数
	var hanshulb = pr.split("و³")[1]
	if (isrel(hanshulb) == false) {
		var hanshulb = []
	} else {
		var hanshulb = zfc_to_sz(hanshulb)
	}
	for (var d = 0; d < hanshulb.length; d++) {
		if (isrel(hanshulb[d]) == false) {
			hslb.push("")
		} else {
			var jxs = hanshulb[d].split("|")[0]
			var clorer = hanshulb[d].split("|")[1]
			var zuixiao = hanshulb[d].split("|")[2]
			var zuida = hanshulb[d].split("|")[3]
			var kuand = hanshulb[d].split("|")[4]
			//var kuand = hanshulb[d].split("|")[4]
			cjxhs(jxs, clorer, zuixiao, zuida, kuand)
		}
	}

	//导入点
	var hanshulb = pr.split("و³")[2]
	if (isrel(hanshulb) == false) {
		var hanshulb = []
	} else {
		var hanshulb = zfc_to_sz(hanshulb)
	}

	for (var d = 0; d < hanshulb.length; d++) {
		if (isrel(hanshulb[d]) == false) {
			dlb.push("")
		} else {
			xjdian(hanshulb[d].split("|")[0], hanshulb[d].split("|")[1], hanshulb[d].split("|")[2])
		}
	}
	//导入变量
	var hanshulb = pr.split("و³")[3]
	//console.log(hanshulb)
	if (isrel(hanshulb) == false) {
		var hanshulb = []
	} else {
		var hanshulb = zfc_to_sz(hanshulb)
	}
	for (var d = 0; d < hanshulb.length; d++) {
		if (isrel(hanshulb[d]) == false) {
			cllb.push("")
		} else {
			xjcl(hanshulb[d].split("|")[0], hanshulb[d].split("|")[1])
		}
	}
	var hanshulb = pr.split("و³")[7] //导入文字批注
	var wzpzlb = []
	if (isrel(hanshulb) == false) {
		var hanshulb = []
	} else {
		var hanshulb = zfc_to_sz(hanshulb)
	}
	for (var d = 0; d < hanshulb.length; d++) {
		if (isrel(hanshulb[d]) == false) {
			wzpzlb.push("")
		} else {
			tjwzpz(hanshulb[d].split("|")[0], hanshulb[d].split("|")[1], hanshulb[d].split("|")[2], hanshulb[d].split("|")[3])
		}
	}
	//导入组
	var hanshulb = pr.split("و³")[8]
	zlb = []
	if (isrel(hanshulb) == false) {
		var hanshulb = []
	} else {
		// console.log(hanshulb)
		for (var tgh = 0; tgh < hanshulb.split("*").length - 1; tgh++) {
			xjz(zfc_to_sz(hanshulb.split("*")[tgh]))

		}
	}

	//导入隐藏列表
	var hanshulb = pr.split("و³")[4]
	//console.log(hanshulb)
	if (isrel(hanshulb) == false) {
		var hanshulb = []
	} else {
		var hanshulb = zfc_to_sz(hanshulb)
	}
	for (var d = 0; d < hanshulb.length; d++) {
		if (isrel(hanshulb[d]) == false) { } else {
			yclb.push(hanshulb[d])
			document.getElementById(hanshulb[d]).style.backgroundColor = ycys
		}
	}
	//导入批注
	var hanshulb = pr.split("و³")[5]
	var yygls = []
	//console.log(hanshulb)
	if (isrel(hanshulb) == false || hanshulb == "") {

	} else {

		for (var tgh = 0; tgh < hanshulb.split("*").length - 1; tgh++) {
			yygls.push(hanshulb.split("*")[tgh])
		}
	}
	for (var g = 0; g < yygls.length; g++) {
		var tyty = []
		var yyyy = zfc_to_sz(yygls[g])
		for (var f = 0; f < yyyy.length; f++) {
			var num1 = yyyy[f].split(",")[0]
			var num2 = yyyy[f].split(",")[1]
			var num3 = yyyy[f].split(",")[2]
			tyty.push([Number(num1), Number(num2), Number(num3)])
		}
		//console.log(tyty)
		drawlj.push(tyty)
	}

	var hanshulb = pr.split("و³")[6]
	if (isrel(hanshulb) == false) { } else {
		eval(pr.split("و³")[6])
		addlog("设置的起始命令已被执行。")
	}

	huizhi()
	var end = new Date().getTime() // 结束时间
	document.getElementById("yams").innerHTML = language[28] + String(end - start) + "ms"
}


function gnqh(n) { //总功能
	var gn = 15
	if (isrel(n)) {
		var gnqh = n
	} else {
		var gnqh = document.getElementById("gnxz").value
	}

	document.getElementById(gnqh).style.display = "block"
	for (var c = 1; c <= gn; c++) {
		if ("gn" + c == gnqh) { } else {
			document.getElementById("gn" + c).style.display = "none"
		}
	}
}

window.onkeydown = function (event) { //空格判断
	var code = event.keyCode;
	//console.log(code)
	if (code == 32) {
		gssbyd = true
		document.getElementById('gssbydqhan').value = "跟随鼠标移动 ON"
	}
	if (code == 16) {
		isshift = true
	}
	if (code == 18) {
		isalt = true
	}
}
window.onkeyup = function (event) { //空格判断
	var code = event.keyCode;
	//console.log(code)
	if (code == 32) {
		gssbyd = false
		document.getElementById('gssbydqhan').value = language[194]
	}
	if (code == 16) {
		isshift = false
	}
	if (code == 18) {
		isalt = false
	}
}


function getcolor(color) {
	if (isrel(color) == true) {
		var zxcla = color
	} else {
		var zxcla = 'black'
	}
	if (zdyset[11] == "true") {
		if (zxcla == "black") {
			zxcla = "white"
		}
	} else {
		if (zxcla == "white") {
			zxcla = "black"
		}
	}
	return zxcla
}

function set2() {
	hfccsz();
	setting(21, "true");
	setting(14, "true");
	setting(10, "1");
	setting(17, "true");
	setting(18, "true");
	setting(0, '#609dbf');
	setting(1, '#609dbf80');
	setting(2, 'white');
	setting(5, 'http://localhost:88/q/img/bkg/07.jpg');
	location.reload();
}

function set1() {
	hfccsz();
	setting(21, "true");
	setting(14, "true");
	setting(10, "1");
	setting(17, "true");
	setting(18, "true");

	location.reload();
}

function zxcz() {
	var czbh = document.getElementById("zxczxz").value
	if (czbh == "1") {

		if (xzlb.length == 2) {
			if (xzlb[0].substring(0, 1) == "h") { } else {
				wxldd(language[219], 1200)
				return false
			}
			if (xzlb[1].substring(0, 1) == "h") { } else {
				wxldd(language[219], 1200)
				return false
			}
			var jdjqd = prompt(language[237]);
			if (jdjqd == null || jdjqd == "null") {
				var jdjqd = ""
			}
			var jdgs = azgetjd(Number(xzlb[0].substring(1, xzlb[0].length)), Number(xzlb[1].substring(1, xzlb[1].length)), 6, 2, jdjqd)
			for (var i = 0; i < jdgs; i++) {
				xjdian("getjd(" + xzlb[0].substring(1, xzlb[0].length) + "," + xzlb[1].substring(1, xzlb[1].length) + "," + i + ",0," + jdjqd + ")", "getjd(" + xzlb[0].substring(1, xzlb[0].length) + "," + xzlb[1].substring(1, xzlb[1].length) + "," + i + ",1," + jdjqd + ")")
			}
			huizhi()
			return true

		} else {
			wxldd(language[219], 1200)
			return false
		}
	}

	if (czbh == "2") {
		var c = ""
		var fsz = []
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "d") {
				c = c + xzlb[i].substring(1, xzlb[i].length) + ","
				fsz.push(Number(xzlb[i].substring(1, xzlb[i].length)))
			} else {
				wxldd(language[219], 1200)
				return false
			}
		}

		if (xzlb.length == 2) {
			var d1x = jxs_l_for_azhs(dlb[Number(xzlb[0].substring(1, xzlb[0].length))].split("|")[0])
			var d2x = jxs_l_for_azhs(dlb[Number(xzlb[1].substring(1, xzlb[1].length))].split("|")[0])
			if (d1x == d2x) {
				cjxhs("x:" + d1x, "black", "", "", 1)
			} else {
				if (confirm(language[218]) == false) {
					cjxhs(azgetjzs("x", fsz, 'h'), "black", "", "", 1)
				} else {
					cjxhs("getjxs(x," + c.substring(0, c.length - 1) + ")", "black", "", "", 1)
				}

			}
		} else {
			if (confirm(language[218]) == false) {
				cjxhs(azgetjzs("x", fsz, 'h'), "black", "", "", 1)
			} else {
				cjxhs("getjxs(x," + c.substring(0, c.length - 1) + ")", "black", "", "", 1)
			}
		}

		huizhi()
		return true
	}
	if (czbh == "3") {
		var c = ""
		var fsz = []
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "d") {
				c = c + xzlb[i].substring(1, xzlb[i].length) + ","
				fsz.push(Number(xzlb[i].substring(1, xzlb[i].length)))
			} else {
				wxldd(language[219], 1200)
				return false
			}
		}

		var d1x = jxs_l_for_azhs(dlb[Number(xzlb[0].substring(1, xzlb[0].length))].split("|")[0])
		var d2x = jxs_l_for_azhs(dlb[Number(xzlb[1].substring(1, xzlb[1].length))].split("|")[0])
		if (d1x == d2x) {
			var d1y = jxs_l_for_azhs(dlb[Number(xzlb[0].substring(1, xzlb[0].length))].split("|")[1])
			var d2y = jxs_l_for_azhs(dlb[Number(xzlb[1].substring(1, xzlb[1].length))].split("|")[1])
			if (d1y > d2y) {
				var q = d2y
				var z = d1y
			} else {
				var q = d1y
				var z = d2y
			}
			cjxhs("x:" + d1x, "black", q, z, 1)
		} else {
			if (jxs_l_for_azhs(String(azgetdzb(Number(xzlb[0].substring(1, xzlb[0].length)), 0))) < jxs_l_for_azhs(String(azgetdzb(Number(xzlb[1].substring(1, xzlb[1].length)), 0)))) {
				var x = "getdzb(" + xzlb[0].substring(1, xzlb[0].length) + ",0)"
				var s = "getdzb(" + xzlb[1].substring(1, xzlb[1].length) + ",0)"
			} else {
				var s = "getdzb(" + xzlb[0].substring(1, xzlb[0].length) + ",0)"
				var x = "getdzb(" + xzlb[1].substring(1, xzlb[1].length) + ",0)"
			}
			if (confirm(language[218]) == false) {
				cjxhs(azgetjzs("x", fsz, 'h'), "black", "", "", 1)
			} else {
				cjxhs("getjxs(x," + c.substring(0, c.length - 1) + ")", "black", '(' + x + ";" + s + ')', "(_infinite;infinite)", 1)
			}

		}

		huizhi()
		return true
	}
	if (czbh == "4") {
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d") {
			var d = Number(xzlb[0].substring(1, xzlb[0].length))
			var c = Number(xzlb[1].substring(1, xzlb[1].length))
			if (xzlb[1].substring(0, 1) == "c") { } else {
				wxldd(language[219], 1200)
				return false
			}
		} else if (xzlb[0].substring(0, 1) == "c") {
			var c = Number(xzlb[0].substring(1, xzlb[0].length))
			var d = Number(xzlb[1].substring(1, xzlb[1].length))
			if (xzlb[1].substring(0, 1) == "d") { } else {
				wxldd(language[219], 1200)
				return false
			}
		}
		//console.log(d,c)

		var x = "getdzb(" + d + ",0)"
		var y = "getdzb(" + d + ",1)"
		if (confirm(language[220]) == false) {
			cjxhs("r:" + x + ";" + y + ";" + "getcl(" + c + ",1)", "black", "", "", 1)
		} else {
			cjxhs("sqrt((getcl(" + c + ",1))^2_(x_(" + x + "))^2)+" + y, "black", "", "", 1)
			//addlog( "函数解析式为 " + "sqrt((getcl(" + c + ",1))^2_(x_(" + x + "))^2)+" + y )
			cjxhs("0_sqrt((getcl(" + c + ",1))^2_(x_(" + x + "))^2)+" + y, "black", "", "", 1)
			//addlog( "函数解析式为 " + "0_sqrt((getcl(" + c + ",1))^2_(x_(" + x + "))^2)+" + y )
		}

		huizhi()
		return true
	}
	if (czbh == "5") {
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "d") {
				var fh = confirm(xzlb[i] + "坐标：" + azgetdzb(Number(xzlb[i].substring(1, xzlb[i].length)), 0) + "," + azgetdzb(Number(xzlb[i].substring(1, xzlb[i].length)), 1) + "是否添加到变量？")
				if (fh == true) {
					xjcl("", "getdzb(" + xzlb[i].substring(1, xzlb[i].length) + ",0)")
					xjcl("", "getdzb(" + xzlb[i].substring(1, xzlb[i].length) + ",1)")
				}
			} else {
				wxldd(language[219], 1200)
				return false
			}
		}
		return true
	}
	if (czbh == "6") {
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[1].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		var fh = confirm(xzlb[0] + "," + xzlb[1] + "距离：" + azgetjl(Number(xzlb[0].substring(1, xzlb[0].length)), Number(xzlb[1].substring(1, xzlb[1].length))) + "是否添加到变量？")
		if (fh == true) {
			xjcl("", "getjl(" + xzlb[0].substring(1, xzlb[0].length) + "," + xzlb[1].substring(1, xzlb[1].length) + ")")
		}
		return true
	}
	if (czbh == "7") {
		for (var i = 0; i < xzlb.length; i++) {
			delhs(Number(xzlb[i].substring(1, xzlb[i].length)), xzlb[i].substring(0, 1))
		}
	}
	if (czbh == "8") {
		for (var i = 0; i < xzlb.length; i++) {
			yclb.push(xzlb[i])
			//document.getElementById(xzlb[i]).style.backgroundColor=ycys
		}
		huizhi()
	}
	if (czbh == "9") {
		for (var i = 0; i < xzlb.length; i++) {
			arrremove(yclb, xzlb[i])
			if (isInArray(xzlb, xzlb[i]) == true) {
				document.getElementById(xzlb[i]).style.backgroundColor = zdyset[1]
			} else {
				document.getElementById(xzlb[i]).style.backgroundColor = "rgba(0,0,0,0)"
			}
		}
	}
	if (czbh == "10") {
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[1].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		var x = "(getdzb(" + xzlb[0].substring(1, xzlb[0].length) + ",0)+getdzb(" + xzlb[1].substring(1, xzlb[1].length) + ",0))/2"
		var y = "(getdzb(" + xzlb[0].substring(1, xzlb[0].length) + ",1)+getdzb(" + xzlb[1].substring(1, xzlb[1].length) + ",1))/2"
		//addlog( "点坐标为 " + x + "," + y )
		xjdian(x, y)
		huizhi()
		return true
	}
	if (czbh == "11") {
		if (xzlb.length == 3) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[1].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[2].substring(0, 1) == "d") { } else {
			wxldd(language[219], 1200)
			return false
		}
		var a = dlb[Number(xzlb[0].substring(1, xzlb[0].length))].split("|")
		var b = dlb[Number(xzlb[1].substring(1, xzlb[1].length))].split("|")
		var c = dlb[Number(xzlb[2].substring(1, xzlb[2].length))].split("|")
		//console.log(a,b,c)
		var jd_h = jiaodu(a, b, c)
		var jd_j = hd_to_jd(jd_h)
		addlog(language[221] + jd_h + language[222] + jd_j)

		if (confirm(language[221] + jd_h + language[222] + jd_j + language[223]) == true) {
			xjcl("", "getds(" + xzlb[0].substring(1, xzlb[0].length) + "," + xzlb[1].substring(1, xzlb[1].length) + "," + xzlb[2].substring(1, xzlb[2].length) + ")")
		}
		huizhi()
		return true
	}
	if (czbh == "12") {
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d") {
			var d = Number(xzlb[0].substring(1, xzlb[0].length))
			var h = Number(xzlb[1].substring(1, xzlb[1].length))
			if (xzlb[1].substring(0, 1) == "h") { } else {
				wxldd(language[219], 1200)
				return false
			}
		} else if (xzlb[0].substring(0, 1) == "h") {
			var h = Number(xzlb[0].substring(1, xzlb[0].length))
			var d = Number(xzlb[1].substring(1, xzlb[1].length))
			if (xzlb[1].substring(0, 1) == "d") { } else {
				wxldd(language[219], 1200)
				return false
			}
		}
		//console.log(d,c)
		var uj = hslb[h].split("|")[0]
		if (isychs(uj) == true) {
			var ax = (uj.split("*")[0])
			var dx = (dlb[d].split("|")[0])
			var dy = (dlb[d].split("|")[1])
		} else {
			if (isgetjxsychs(uj)[0] == true) {
				var ax = isgetjxsychs(uj)[1]
				var dx = (dlb[d].split("|")[0])
				var dy = (dlb[d].split("|")[1])
			}
		}
		/*     var ax=(hslb[h].split("|")[0].split("*")[0])
		//var bx=(hslb[h].split("|")[0].split("+")[1])
var dx=(dlb[d].split("|")[0])
var dy=(dlb[d].split("|")[1])/*
function azgetcz(x,h,d){
	var ax=(hslb[h].split("|")[0].split("*")[0])
	var dx=(dlb[d].split("|")[0])
	var dy=(dlb[d].split("|")[1])
	(-1/ax)*x
}*/

		//  var a2x="-1/"+ax
		//  var b2x=dy+"_"+dx+"*("+a2x+")"


		if (confirm(language[224]) == true) {
			cjxhs("getcx(x," + h + "," + d + ")", "black", "", "", 1)
		} else {
			cjxhs(-1 / jxs_l_for_azhs(ax) + "*x+" + (jxs_l_for_azhs(dy) - jxs_l_for_azhs(dx) * (-1 / jxs_l_for_azhs(ax))), "black", "", "", 1)
		}
		//   cjxhs(-1/jxs_l_for_azhs(ax)+"*x+"+(jxs_l_for_azhs(dy)-jxs_l_for_azhs(dx)*(-1/jxs_l_for_azhs(ax))), "black", "", "",1)
		//addlog( "函数解析式为 " + -1 / jxs_l_for_azhs( ax ) + "*x+" + ( jxs_l_for_azhs( dy ) - jxs_l_for_azhs( dx ) * ( -1 / jxs_l_for_azhs( ax ) ) ) )


		huizhi()
		return true
	}
	if (czbh == "13") {
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d") {
			var d = Number(xzlb[0].substring(1, xzlb[0].length))
			var h = Number(xzlb[1].substring(1, xzlb[1].length))
			if (xzlb[1].substring(0, 1) == "h") { } else {
				wxldd(language[219], 1200)
				return false
			}
		} else if (xzlb[0].substring(0, 1) == "h") {
			var h = Number(xzlb[0].substring(1, xzlb[0].length))
			var d = Number(xzlb[1].substring(1, xzlb[1].length))
			if (xzlb[1].substring(0, 1) == "d") { } else {
				wxldd(language[219], 1200)
				return false
			}
		}
		//console.log(d,c)

		var ax = (hslb[h].split("|")[0].split("*")[0])
		var bx = (hslb[h].split("|")[0].split("+")[1])
		var dx = (dlb[d].split("|")[0])
		var dy = (dlb[d].split("|")[1])

		dx = Number(dx);
		dy = Number(dy);
		ax = Number(ax)

		if (confirm(language[224]) == true) {
			cjxhs("getpxx(x," + h + "," + d + ")", "black", "", "", 1)
		} else {
			cjxhs(jxs_l_for_azhs(ax) + "*x+" + (jxs_l_for_azhs(dy) - jxs_l_for_azhs(dx) * jxs_l_for_azhs(ax)), "black", "", "", 1)
		}
		//  var a2x=jxs_l_for_azhs(ax)
		//  var b2x=jxs_l_for_azhs(dy)-jxs_l_for_azhs(dx)*jxs_l_for_azhs(ax)
		//addlog( "函数解析式为 " + jxs_l_for_azhs( ax ) + "*x+" + ( jxs_l_for_azhs( dy ) - jxs_l_for_azhs( dx ) * jxs_l_for_azhs( ax ) ) )


		huizhi()
		return true
	}
	if (czbh == "14") {
		if (xzlb.length == 3) { } else {
			wxldd(language[219], 1200)
			return false
		}
		if (xzlb[0].substring(0, 1) == "d" && xzlb[1].substring(0, 1) == "d" && xzlb[2].substring(0, 1) == "d") {
			var d0 = Number(xzlb[0].substring(1, xzlb[0].length))
			var d1 = Number(xzlb[1].substring(1, xzlb[1].length))
			var d2 = Number(xzlb[2].substring(1, xzlb[2].length))
		} else {
			wxldd(language[219], 1200)
			return false
		}
		//console.log(d,c)
		var ebj = jiaodu([dlb[d0].split("|")[0], dlb[d0].split("|")[1]], [dlb[d1].split("|")[0], dlb[d1].split("|")[1]], [dlb[d2].split("|")[0], dlb[d2].split("|")[1]])
		ebj = ebj / 2
		var alfj = (jxs_l_for_azhs(dlb[d0].split("|")[1]) - jxs_l_for_azhs(dlb[d1].split("|")[1])) / (jxs_l_for_azhs(dlb[d0].split("|")[0]) - jxs_l_for_azhs(dlb[d1].split("|")[0]))
		alfj = Math.atan(alfj)
		var hk = Math.tan(alfj - ebj)
		var hb = jxs_l_for_azhs(dlb[d1].split("|")[1]) - hk * jxs_l_for_azhs(dlb[d1].split("|")[0])
		//addlog( "函数解析式为 " + hk + "*x+" + hb )
		var jpfxdjxs = hk + "*x+" + hb
		if (confirm(language[224]) == true) {
			cjxhs("getpfx(x," + d0 + "," + d1 + "," + d2 + ")", "black", "", "", 1)
		} else {
			cjxhs(jpfxdjxs, "black", "", "", 1)
		}

		huizhi()
		return true
	}
	if (czbh == "15") {
		xjz(xzlb)
		huizhi()
		return true
	}
	if (czbh == "16") {
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "h") {
				cjxhs(zc_to_az(Algebrite.derivative(az_to_zc(hslb[Number(xzlb[i].substring(1, xzlb[i].length))].split('|')[0])).toString().replace(/\.\.\./g, '')), "black", "", "", 1)
			} else {
				wxldd(language[219], 1200)
				return false
			}
		}
		huizhi()
		return true
	}
	if (czbh == "17") {
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "h") {
				cjxhs(zc_to_az(Algebrite.integral(az_to_zc(hslb[Number(xzlb[i].substring(1, xzlb[i].length))].split('|')[0])).toString().replace(/\.\.\./g, '')), "black", "", "", 1)
			} else {
				wxldd(language[219], 1200)
				return false
			}
		}
		huizhi()
		return true
	}
	if (czbh == "18") {
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "h") {
				var hs_jxs = hslb[Number(xzlb[i].substring(1, xzlb[i].length))].split('|')[0]
				var hs_jxs = az_to_zc(hs_jxs)
				var ddx = jfc(Algebrite.derivative(hs_jxs).toString().replace(/\.\.\./g, ''))
				//    console.log(ddx)

				for (let i = 0; i < ddx.length; i++) {
					const element = ddx[i];
					var ddy = Algebrite.run(Algebrite.subst(element, 'x', hs_jxs).toString().replace(/\.\.\./g, '')).toString().replace(/\.\.\./g, '')
					xjdian(zc_to_az(element), zc_to_az(ddy))
				}







			} else {
				wxldd(language[219], 1200)
				return false
			}
		}
		huizhi()
		return true
	}
	if (czbh == "19") {
		for (var i = 0; i < xzlb.length; i++) {
			if (xzlb[i].substring(0, 1) == "h") {
				var hs_jxs = hslb[Number(xzlb[i].substring(1, xzlb[i].length))].split('|')[0]
				var hs_jxs = az_to_zc(hs_jxs)
				var ddx = jfc(hs_jxs)
				//        console.log(ddx)
				for (let i = 0; i < ddx.length; i++) {
					const element = ddx[i];
					xjdian(zc_to_az(element), '0')
				}
			} else {
				wxldd(language[219], 1200)
				return false
			}
		}
		huizhi()
		return true
	}
	if (czbh == "20") {
		if (xzlb.length == 2) { } else {
			wxldd(language[219], 1200)
			return false
		}
		var hs_jxs1 = hslb[Number(xzlb[0].substring(1, xzlb[0].length))].split('|')[0]
		var hs_jxs1 = az_to_zc(hs_jxs1)
		var hs_jxs2 = hslb[Number(xzlb[1].substring(1, xzlb[1].length))].split('|')[0]
		var hs_jxs2 = az_to_zc(hs_jxs2)


		var ddx = jfc(hs_jxs1 + '-(' + hs_jxs2 + ')')
		//console.log(ddx)
		for (let i = 0; i < ddx.length; i++) {
			const element = ddx[i];
			var gtrgt = Algebrite.subst(element, 'x', hs_jxs1)
			//console.log(gtrgt.toString())
			var ddy = Algebrite.run(gtrgt.toString()).toString()
			xjdian(zc_to_az(element), zc_to_az(ddy))
		}


		huizhi()
		return true
	}
	if (czbh == "21") {//打点
		if (xzlb.length == 1) {
			for (let j = 0; j < xzlb.length; j++) {
				if (xzlb[j].substring(0, 1) == "h") {

				} else {
					wxldd(language[219], 1200)
					return false
				}
			}
		}
		var qs = prompt(language[253])
		var js = prompt(language[254])

		for (let j = 0; j < xzlb.length; j++) {
			var hsh = Number(xzlb[j].substring(1, xzlb[j].length))
			for (let i = qs; i <= js; i++) {
				xjdian(i, "gz(" + hsh + ",0," + i + ")")
			}
		}
		huizhi()
	}
}


function gettime(h) { //获取时间
	var xztiem = new Date();
	if (h == "sfm") {
		return (String(xztiem.getHours()) + ":" + String(xztiem.getMinutes()) + ":" + String(xztiem.getSeconds()))
	} else {
		return (String(xztiem.getFullYear()) + " " + String(xztiem.getMonth() + 1) + " " + String(xztiem.getDate()) + " " + String(xztiem.getHours()) + " " + String(xztiem.getMinutes()) + " " + String(xztiem.getSeconds()))
	}
}

function addlog(log) { //添加内部日志
	var f = document.getElementById("rizhi").innerHTML
	document.getElementById("rizhi").innerHTML = f + "<br>" + gettime('sfm') + "      " + log
}

function addZD(a, name, m) {
	wrp++
	var znr = ''
	for (let y = 0; y < a.length; y++) {
		znr = znr + gettime('sfm') + "      " + a[y] + '<br>'
	}
	var c = `<div style="width: 100%;height:auto;position: relative;"><div class="zkk">` + name + `<input class="vfr" type="button" style="right: 5px;top: 5px;width: 20px;height: 20px;border-radius: .15em;" id="zdksr` + wrp + `" value="↓" onclick="zhanK(` + wrp + `)"></div><div id="zdnr` + wrp + `"  style="display: none;webkit-user-select: text;-moz-user-select: text;-o-user-select: text;user-select: text;">` + znr + `<div class="zkk"><input class="vfr" type="button" style="left: 0px;margin: auto;right: 0px;top: 5px;width: 40px;height: 20px;border-radius: .15em;" value="↑" onclick="zhanK(` + wrp + `)"></div></div></div>`
	//console.log(c)
	if (m == true) {
		return c
	}
	var f = document.getElementById("rizhi").innerHTML
	document.getElementById("rizhi").innerHTML = f + '<br>' + c

	//addZD([addZD([1,addZD([1,2,3,4,5],3333,true),3,4,5],2222,true),2,3,4,5],1111)

}

function xgm(x, s, jxs, bl) { //西格玛
	var y = '0'
	for (var i = x; i <= s; i++) {
		y = Algebrite.run(y + '+' + Algebrite.subst(i, bl, jxs))
	}
	return y
}

function zhintiaojiezryd() { //智能调节自然移动
	if (zdyset[20] == 'true') {
		return
	}
	if (zdyset[23] == 'true') {
		if (usetime > kgzrydyz) {
			if (setting(21) == 'true') {
				setting(21, 'false')
			}
		} else {
			if (setting(21) == 'false') {
				setting(21, 'true')
			}
		}
	}
}

function setting(f, g) {
	//var jiesuoset=[14,17,12]
	//console.log(f,g)
	if (g == undefined) {
		return (zdyset[f])
	} else {
		if (isInArray(jiesuoset, f) == true) {
			if (v_i_p[0] == true) { } else {
				jznotcheshi()
				return
			}
		}
		zdyset.splice(f, 1, g)
		localStorage.setItem("setting", sz_to_zfc(zdyset))
		//  windowonload()
		zxcshsz()
	}
	var fo = jiesuochilk(f, g)
	//kjc ()
	if (f == 35) {
		kjc()
		huizhi()
	}
}

function jznotcheshi() {
	alert(jiesuospeak);
	return
}

function zhjjjjjjjjjjjjjjjjjjj() {
	if (v_i_p[0] == true) { } else {
		jznotcheshi()
		return
	}
	var y = document.getElementById("cddddcdcdcdc").value
	JXJ(y, 0, true, 'cdshhjshjdcshjchj')
}

function jfsurhiufhc() {
	for (; 1 == 1;) {
		debugger
		for (var t = 0; t < isnotjiesuo.length; t++) {
			debugger
			alert(isnotjiesuo[t])
			debugger
		}
		debugger
		location.href = wz
		debugger
	}
	debugger
	return
}

function jiesuochilk(cdrfg, stryh) {

	// console.log("jcjiesuo")
	if (v_i_p[0] == true) {
		return [true, true]
	} else {
		if (cdrfg == true) {
			if ((stryh !== cdrfg) && stryh < 38) {
				return false
			}
		} else {
			//  alert(null)
		}
		if ((zdyset[14] !== "false") || (zdyset[20] !== "false") || (zdyset[24] !== "false")) {
			zdyset = mrsz
			//localStorage.setItem("setting", sz_to_zfc(zdyset))
			localStorage.setItem('setting', localStorage.setItem("setting", sz_to_zfc(zdyset)))
			zxcshsz()
			if ((stryh !== cdrfg) && (stryh - 3) % 9 > 7) {
				return false
			}
			jfsurhiufhc()
			location.href = wz
		} else {
			return [false, true]
		}
	}
	return [false, false]
}

function xjz(l) {
	var hsh = zlb.length
	var f = ''
	for (let i = 0; i < l.length; i++) {
		f = f + l[i] + ','
	}
	zlb.push(l)

	var uy = document.getElementById("hslbxs").innerHTML
	document.getElementById("hslbxs").innerHTML = uy + `       <div class="hcxda" onclick="xz('z` + hsh + `')" id="z` + hsh + `"><input class="noneinp" style="left:3px;top:5px;height:20px;width: 50px;" value="z` + hsh + `"><div class="zycxsan" id="zxn` + hsh + `" style="background-color: rgba(0,0,0,0);" onclick="zxsyc(this.id)"></div><div class="hsscan" onclick="delhs(` + hsh + `,'z')">` + language[43] + `</div></div>`

}

function HENGJIA(a) {
	var b = String(a)
	var c = 0
	for (var i = 0; i < b.length; i++) {
		c = c + Number(b.substring(i, i + 1))
	}
	return c
}

function azSUIJI(zz) {
	if (isrel(zz) == true) {
		azSUIJIZHONGZI = zz
	}
	var c = SHA256(md5(azSUIJIZHONGZI));
	azSUIJIZHONGZI = c
	var d = eval('0x' + c.substring(0, 1))
	if (d > 9) {
		return azSUIJI()
	} else {
		return d
	}
}

function jiancha() {
	var g = String(new Date().getTime())
	qianzhi(('nj' + g))
	setTimeout(() => {
		var d = eval('fhaz666' + md5(g))
		if (d == md5(g + '1145141919810')) {
			var g = String(new Date().getTime())
			qianzhi(('nj' + g))
		} else {
			qianzhi(('lh'))
		}
	}, 5000);
}

function tip(a, t) {
	if (isrel(a) == true) {
		var rtip = a;
	} else {
		function cs() {
			var rtip = tips[sj(0, tips.length - 1)]
			if (rtip == document.getElementById("tips").innerHTML) {
				return cs()
			} else {
				return rtip
			}
		}
		var rtip = cs()
	}
	if (rtip == document.getElementById("tips").innerHTML) {
		return
	}
	document.getElementById("tips").style.color = 'rgba(0,0,0,0)'
	if (getcolor() == 'black') {
		var cl = 'rgba(0, 0, 0, ' + zdyset[30] + ')'
	} else {
		var cl = 'rgba(255, 255, 255, ' + zdyset[30] + ')'
	}
	//	document.getElementById("tips").style.backgroundColor=cl
	document.getElementById("tips").style.transition = '0.2s'
	setTimeout(() => {


	}, 50);
	setTimeout(() => {
		//document.getElementById("tips").style.backgroundColor='rgba(0,0,0,0)'
		document.getElementById("tips").style.color = 'var(--wzys)'
		document.getElementById("tips").innerHTML = rtip
	}, 250);
	if (t) {
		setTimeout(() => {
			tip()
		}, t);
	}
}


function find_hs_d(u, mmmm) {

	var yi = xianshikuandu / hxxianshi
	var xzuuujd = Number(zdyset[8]) / yi
	var xxzlb = []
	var xdsd = false
	for (var i = 0; i < dlb.length; i++) { //选择点
		var dy = jxs_l_for_azhs(dlb[i].split("|")[1])
		var dx = jxs_l_for_azhs(dlb[i].split("|")[0])
		if (Math.abs(dy - u[1]) < 2 * xzuuujd) {
			if (Math.abs(dx - u[0]) < 2 * xzuuujd) {
				if (isInArray(xzlb, "d" + i) == false) {
					if (isInArray(yclb, "d" + i) == false) {
						if (dlb[i] == "") { } else {
							if (xxzlb.length > 0 && !mmmm) {
								return [xxzlb, xdsd]
							}
							xz("d" + i)
							xxzlb.push("d" + i)
							var xdsd = true
						}
					}
				}
			}
		}
	}
	for (var i = 0; i < hslb.length; i++) { //选择函数
		var jxs = hslb[i].split("|")[0]
		for (let ju = u[0] - xzuuujd; ju < u[0] + xzuuujd; ju = ju + 0.1 * xzuuujd) {
			if (Math.abs(jxs_l_for_azhs(jxs, ju) - u[1]) < xzuuujd) {
				if (isInArray(xzlb, "h" + i) == false) {
					if (isInArray(yclb, "h" + i) == false) {
						if (hslb[i] == "") { } else {
							if (xxzlb.length > 0 && !mmmm) {
								return [xxzlb, xdsd]
							}
							xz("h" + i)
							xxzlb.push("h" + i)
						}
					}
				}
			}

		}

	}


	return [xxzlb, xdsd]
}

function saveurl(data, filename) { //下载文件
	if (!data) {
		console.error('Console.save: No data')
		return;
	}
	if (!filename) filename = 'az.txt'

	function stringToBinaryFile(str, filename) {
		// 使用 TextEncoder 将字符串编码为 Uint8Array
		const encoder = new TextEncoder();
		const data = encoder.encode(str);

		// 创建 Blob 对象
		const blob = new Blob([data], { type: 'application/octet-stream' });

		// 创建一个链接元素用于触发下载
		const link = document.createElement('a');
		link.href = URL.createObjectURL(blob);
		link.download = filename;

		// 触发下载
		document.body.appendChild(link);
		link.click();

		// 清理
		document.body.removeChild(link);
		URL.revokeObjectURL(link.href);
	}
	stringToBinaryFile(data, filename)
	/*if (typeof data === "object") {
		data = JSON.stringify(data, undefined, 4)
	}
	var blob = new Blob([data], {
		type: 'text/json'
	}),
		e = document.createEvent('MouseEvents'),
		a = document.createElement('a')
	a.download = filename
	a.href = window.URL.createObjectURL(blob)
	a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
	e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
	a.dispatchEvent(e)*/
}





function outset() { //导出设置

	saveurl(LZString.compressToUTF16('set' + sz_to_zfc(zdyset)), "type=set,time=" + gettime() + '.azx')
}

function inset(x) { //导入设置
	var t = x
	if (isrel(x) == false) {
		t = prompt(language[229])
	}
	t = fromCode(t)
	if (t.substring(0, 3) == 'set') { } else {
		wxldd(language[230], 1200);
		return
	}
	t = zfc_to_sz(t.substring(3, t.length))
	zdyset = t
	var v2ips = [12, 14, 17]
	if (v_i_p[0] == true) { } else {
		for (var d = 0; d < v2ips.length; d++) {
			zdyset.splice(d, 1, mrsz[d])
		}
	}

	localStorage.setItem("setting", sz_to_zfc(zdyset))
	setTimeout(() => {
		wxldd(language[231], 1200)
	}, 5000);


	zxcshsz()
	huizhi()
}



function qd_fqd(jxs, mod) { //对于最简整式的求导和反向求导
	var zfc = jxs
	var g = []
	for (var ht = 0; ht < zfc.split("+").length; ht++) {
		for (var ht2 = 0; ht2 < zfc.split("+")[ht].split("_").length; ht2++) {
			if (ht2 == 0) {
				var fh = "+"
			} else {
				var fh = "_"
			} //判断符号
			g.push(zfc.split("+")[ht].split("_")[ht2] + "|" + fh)
		}
	}
	for (var d = 0; d < g.length; d++) {
		if (g[d].indexOf("^") == -1) {
			if (g[d].indexOf("x") == -1) {
				/*常数项*/
			} else {
				var hou = g[d].substring(0, g[d].indexOf("x") + 1) + "^1" + g[d].substring(g[d].indexOf("x") + 1, g[d].length)
				g.splice(d, 1, hou)
			}
		}
		if (g[d].indexOf("x") == -1) {
			/*常数项*/
		} else {
			if (g[d].indexOf("*") == -1) {
				var hou = "1*" + g[d]
				g.splice(d, 1, hou)
			}
		}
	}
	var sc = "0"
	for (var jr = 0; jr < g.length; jr++) {
		var fh = g[jr].split("|")[1]
		if (g[jr].indexOf("x") == -1) {
			if (mod == "qd") {
				var zihx = ""
			}
			if (mod == "fqd") {
				var zihx = fh + "(" + g[jr].split("|")[0] + "*x)"
			}
			sc = sc + zihx
		} else {
			var xs = g[jr].split("|")[0].split("*")[0]
			var cs = g[jr].split("|")[0].split("^")[1]
			if (mod == "qd") {
				var zihx = fh + "(" + xs + "*" + cs + "*(x^(" + cs + "_1)))"
			}
			if (mod == "fqd") {
				var zihx = fh + "(" + xs + "*(x^(" + cs + "+1)/(" + cs + "+1)))"
			}
			sc = sc + zihx
		}
	}
	return sc
}

function zl() {
	if (v_i_p[0] == true) { } else {
		jznotcheshi()
		return false
	}
	beif()
	// console.log(hslb, dlb, cllb)

	function u(jxs, mod, xx, jx) {
		var noneTH = -1

		var o = th(jxs)
		var leftKH = -1
		var ZKHS = 0
		for (var i = 0; i < o.length; i++) {
			if (o.substring(i, i + 1) == '(') {
				ZKHS++
			}
		}
		for (var t = 0; t < ZKHS; t++) {
			for (var i = 0; i < o.length; i++) {
				if (o.substring(i, i + 1) == '(') {
					if (isInArray(abc, o.substring(i - 1, i)) == true) {
						leftKH = i
					}
				} else if (o.substring(i, i + 1) == ')') {
					var tj = o.substring(leftKH + 1, i)
					var q = tj.split(',')
					if (tj.split(",").length > 1 || tj.split(";").length > 1) {
						var hanshumc = o.substring(leftKH - 2, leftKH)
						for (var e = 0; e < q.length; e++) {
							var m = hsdxlx(hanshumc, e)
							//console.log(hanshumc,e,m)
							if (m == false) { } else {
								if (m == mod) {
									var yl = jxs_l_for_azhs(tj.split(',')[e])
									//console.log(yl,xx,jx)
									if (yl >= xx) {
										if (yl == xx) {
											if (noneTH < 0) {
												return ''
											}
											var newNUM = yl - jx
										} else {
											var newNUM = yl - jx
										}
										q.splice(e, 1, String(newNUM))
									}
								}
							}
						}
						var newHS = hanshumc + '('
						for (var e = 0; e < q.length; e++) {
							if (e == q.length - 1) {
								newHS = newHS + q[e]
							} else {
								newHS = newHS + q[e] + ','
							}
						}
						newHS = newHS + ')'
						o = o.substring(0, leftKH - 2) + newHS + o.substring(i + 1, o.length)
						//console.log(o)
						break
					}
				}
			}
		}
		return fth(o)
	}

	var hsqs = [];
	dqs = [];
	clqs = []
	for (var i = 0; i < hslb.length; i++) {
		if (hslb[i] == '') {
			hsqs.push(i)
		}
	}
	for (var i = 0; i < dlb.length; i++) {
		if (dlb[i] == '') {
			dqs.push(i)
		}
	}
	for (var i = 0; i < cllb.length; i++) {
		if (cllb[i] == '') {
			clqs.push(i)
		}
	}
	// console.log(hsqs, dqs, clqs)
	// console.log(hslb, dlb, cllb)
	//删除空项

	for (var i = 0; i < hslb.length; i++) {
		if (hslb[i] == '') {
			hslb.splice(i, 1)
			i = i - 1
		}
	}
	for (var i = 0; i < dlb.length; i++) {
		if (dlb[i] == '') {
			dlb.splice(i, 1)
			i = i - 1
		}
	}
	for (var i = 0; i < cllb.length; i++) {
		if (cllb[i] == '') {
			cllb.splice(i, 1)
			i = i - 1
		}
	}


	// console.log(hslb, dlb, cllb)


	//重置解析式

	for (var i = 0; i < hslb.length; i++) {
		if (hslb[i] == '') { } else {
			var NEWjxs = hslb[i].split("|")[0]
			for (var d = 0; d < dqs.length; d++) {
				NEWjxs = u(NEWjxs, 'd', dqs[d] - d, 1)
			}
			for (var d = 0; d < clqs.length; d++) {
				NEWjxs = u(NEWjxs, 'c', clqs[d] - d, 1)
			}
			chenchys("h" + i, 0, NEWjxs)
			var NEWjxs = hslb[i].split("|")[2]
			for (var d = 0; d < dqs.length; d++) {
				NEWjxs = u(NEWjxs, 'd', dqs[d] - d, 1)
			}
			for (var d = 0; d < clqs.length; d++) {
				NEWjxs = u(NEWjxs, 'c', clqs[d] - d, 1)
			}
			chenchys("h" + i, 2, NEWjxs)
			var NEWjxs = hslb[i].split("|")[3]
			for (var d = 0; d < dqs.length; d++) {
				NEWjxs = u(NEWjxs, 'd', dqs[d] - d, 1)
			}
			for (var d = 0; d < clqs.length; d++) {
				NEWjxs = u(NEWjxs, 'c', clqs[d] - d, 1)
			}
			chenchys("h" + i, 3, NEWjxs)
		}

	}
	for (var i = 0; i < dlb.length; i++) {
		if (dlb[i] == '') { } else {
			var NEWjxs = dlb[i].split("|")[0]
			for (var d = 0; d < hsqs.length; d++) {
				NEWjxs = u(NEWjxs, 'h', hsqs[d] - d, 1)
				// console.log(hsqs[d] - d, NEWjxs)
			}
			for (var d = 0; d < clqs.length; d++) {
				NEWjxs = u(NEWjxs, 'c', clqs[d] - d, 1)
			}
			chenchys("d" + i, 0, NEWjxs)
			var NEWjxs = dlb[i].split("|")[1]
			for (var d = 0; d < hsqs.length; d++) {
				NEWjxs = u(NEWjxs, 'h', hsqs[d] - d, 1)
			}
			for (var d = 0; d < clqs.length; d++) {
				NEWjxs = u(NEWjxs, 'c', clqs[d] - d, 1)
			}
			chenchys("d" + i, 1, NEWjxs)
		}
	}
	for (var i = 0; i < cllb.length; i++) {
		if (cllb[i] == '') { } else {
			var NEWjxs = cllb[i].split("|")[1]
			for (var d = 0; d < dqs.length; d++) {
				NEWjxs = u(NEWjxs, 'd', dqs[d] - d, 1)
			}
			for (var d = 0; d < hsqs.length; d++) {
				NEWjxs = u(NEWjxs, 'h', hsqs[d] - d, 1)
			}
			chenchys("c" + i, 1, NEWjxs)
		}
	}
	for (var i = 0; i < wzpzlb.length; i++) {
		if (wzpzlb[i] == '') { } else {
			var NEWjxs = wzpzlb[i].split("|")[2]
			for (var d = 0; d < dqs.length; d++) {
				NEWjxs = u(NEWjxs, 'd', dqs[d] - d, 1)
			}
			for (var d = 0; d < hsqs.length; d++) {
				NEWjxs = u(NEWjxs, 'h', hsqs[d] - d, 1)
			}
			for (var d = 0; d < clqs.length; d++) {
				NEWjxs = u(NEWjxs, 'c', clqs[d] - d, 1)
			}
			chenchys("w" + i, 2, NEWjxs)
		}
	}
	for (let i = 0; i < zlb.length; i++) {
		const element = zlb[i];
		var hs_ = 0
		var d_ = 0
		var cl_ = 0
		var w_ = 0
		for (let j = 0; j < element.length; j++) {
			var f = element[j]
			if (f.substring(0, 1) == 'h') {
				var hounumber = Number(f.substring(1, f.length))
				if (hslb[hounumber] == '') {
					element.splice(j, 1)
					hs_++
				} else {
					element.splice(j, 1, 'h' + (hounumber - hs_))
				}
			}
		}
		for (let j = 0; j < element.length; j++) {
			var f = element[j]
			if (f.substring(0, 1) == 'd') {
				var hounumber = Number(f.substring(1, f.length))
				if (dlb[hounumber] == '') {
					element.splice(j, 1)
					d_++
				} else {
					element.splice(j, 1, 'd' + (hounumber - d_))
				}
			}
		}
		for (let j = 0; j < element.length; j++) {
			var f = element[j]
			if (f.substring(0, 1) == 'c') {
				var hounumber = Number(f.substring(1, f.length))
				if (cllb[hounumber] == '') {
					element.splice(j, 1)
					cl_++
				} else {
					element.splice(j, 1, 'c' + (hounumber - cl_))
				}
			}
		}
		for (let j = 0; j < element.length; j++) {
			var f = element[j]
			if (f.substring(0, 1) == 'w') {
				var hounumber = Number(f.substring(1, f.length))
				if (wzpzlb[hounumber] == '') {
					element.splice(j, 1)
					w_++
				} else {
					element.splice(j, 1, 'w' + (hounumber - w_))
				}
			}
		}
	}

	// console.log(hslb, dlb, cllb)

	beif()

	location.reload()
}







function qvchuw(jxs) {
	var zhd = jxs

	for (let i = 0; i < u3.length; i++) {
		const element = u3[i];
		zhd = zhd.replace(new RegExp(element, 'g'), hsdy(element) + '_w');

	}
}

function schsjxj() {

}
var qiyhj = false
var hjdbds = ''

function JXJ(jxs, snp, tc, scn) {

	/*
	解析式
	是否化简
	0 全化简
	1 run化简
	2 全不化简
	是否用ldd提示
	true
	false
	生成的变量名
	*/

	/* 本地合并版：解析解与化简全部在浏览器内完成（az_local.js + az_simplify.js），
	   不再依赖远程服务器 / Python */
	var start = new Date()
	wxldd(language[232], 700)
	var jieguo = AZLocal.jxj(jxs, snp)
	xrjsqjg(jieguo)
	wxldd(language[166], 700)
	return
	if (v_i_p[0] == true) {
		qiyhj = [snp]
	} else {
		return false
	}
	var jjfh = ''
	if (tc == true) {
		wxldd('开始', 500)
		return setTimeout(() => {
			var g = hqjxj(jxs)
			wxldd('获取生成树成功', 500)
			return setTimeout(() => {
				var t = eval(g)
				wxldd('解析成功，开始化简', 500)
				return setTimeout(() => {
					var q = senpoly(t)
					wxldd('成功！', 500)
					var end = new Date().getTime() // 结束时间

					// console.log(end - start)
					if (xzjg) {
						saveurl(q, jxs + '.txt')
					}

					document.getElementById(scn).value = q
				}, 1000);
			}, 1000);
		}, 1000);
	} else {
		//console.log('开始')
		var g = hqjxj(jxs)
		//console.log('获取生成树成功')
		var t = eval(g)
		//console.log('解析成功，开始化简')
		var end = new Date().getTime() // 结束时间

		//console.log(end - start)
		return senpoly(t)
	}

}




print6 = function (x, y) {
	//console.log('az')

	if (isshift == true && isalt == true) {
		tip('恭喜你发现了彩蛋！')
		//   console.log(x,y)
		zllb.push([x - zbj, y - dbj, sj(-60, 60) / 10, sj(50, 150) / 10, sj(1, 3), sjcolor()])
		if (sj(0, 30) == sj(0, 30)) {
			a(sj(1000, 800), 0.5)
		}

	}
}


function sjcolor() {
	return 'rgba(' + sj(0, 255) + ',' + sj(0, 255) + ',' + sj(0, 255) + ',' + sj(0, 100) / 100 + ')'
}


function aa() {

	if (zllb.length == 0) {
		return
	}
	prv = setInterval(function () {
		hbck.clearRect(0, 0, zzd, dzd)
		for (var i = 0; i < zllb.length; i++) {
			var thisx = zllb[i][0]
			var thisy = zllb[i][1]
			var thisdx = zllb[i][2]
			var thisdy = zllb[i][3]

			//   console.log(i,thisx,thisy,thisdx,thisdy)
			var nl = zllb[i]
			// console.log
			//zllb[i].splice(2,1,thisdx*0.8)
			//if(thisdy<0){nl.splice(2,1,thisdy*0.8)}
			zllb[i].splice(3, 1, thisdy - 4)
			if (thisdy < 0) {
				nl.splice(3, 1, thisdy - 9.8)
			}

			zllb[i].splice(0, 1, thisx + thisdx)
			zllb[i].splice(1, 1, thisy - thisdy)
			hbck.fillStyle = zllb[i][5]
			hbck.strokeStyle = zllb[i][5]
			hbck.beginPath();
			hbck.arc(thisx + thisdx + zbj, thisy - thisdy + dbj, zllb[i][4], 0, 2 * Math.PI);
			hbck.fill()
			hbck.stroke();

			if (Math.abs(thisx) + Math.abs(thisy) > 2000) {
				zllb.splice(i, 1)
			}
			if (zllb.length == 0) {
				// console.log('cd')
				huizhi()
			}
		}
	}, 50)


}

function jietu() {
	var beishu = prompt(language[206])
	if (beishu) {
		beishu = String(beishu)
	} else {
		beishu = '8'
	}
	var e = setting(35)
	setting(35, beishu)
	bianhau()
	huizhi()
	exportCanvasAsPNG('divdis', gettime() + '.png')
	setting(35, e)
	bianhau()
	huizhi()
}

function exportCanvasAsPNG(id, fileName) {

	var canvasElement = document.getElementById(id);

	var MIME_TYPE = "image/png";

	var imgURL = canvasElement.toDataURL(MIME_TYPE);

	var dlLink = document.createElement('a');
	dlLink.download = fileName;
	dlLink.href = imgURL;
	dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');

	document.body.appendChild(dlLink);
	dlLink.click();
	document.body.removeChild(dlLink);
}



function a(f, t) {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var audioCtx = new AudioContext();
	var frequency = f

	var oscillator = audioCtx.createOscillator();
	var gainNode = audioCtx.createGain();
	oscillator.connect(gainNode);
	gainNode.connect(audioCtx.destination);
	oscillator.type = 'sine';
	oscillator.frequency.value = frequency;
	gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
	gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
	oscillator.start(audioCtx.currentTime);
	gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
	oscillator.stop(audioCtx.currentTime + t);
}




function lodin(username) {
	qianzhi(("dl" + username + "|" + localStorage.getItem('///////////////////////////') + '|' + String(new Date().getTime())))
}

function DLYZ() {
	var dlmm = localStorage.getItem('m')
	if (isrel(dlmm) == true) {
		lodin(dlmm)
	} else {

	}
}

function shoudaostr(a) {
	var isddjs = fromCode(a)
	//console.log(isddjs)
	// console.log(isddjs)
	if (isddjs == 'false') {
		wxldd(language[159], 800)
		//localStorage.setItem('///////////////////////////',undefined) 
		localStorage.setItem('m', undefined)
	} else if (isddjs.split('|')[0] == 'true') {
		localStorage.setItem('///////////////////////////', isddjs.split('|')[1])
		v_i_p.push(true)
		sjzj = Number(isddjs.split('|')[2])
		wxldd(language[156], 600)
		if (isddjs.split('|')[4] == "true") {
			setTimeout(() => {
				wxldd(language[158], 600)
			}, 1000);
		}
		document.getElementById('yhdqsj').style.display = 'block'
		document.getElementById('yhdqsj').innerHTML = language[160] + isddjs.split('|')[3]
		document.getElementById('denglmm').style.display = 'none'
		document.getElementById('xsydlcg').style.display = 'block'
	} else if (isddjs.substring(0, 2) == 'gl' || isddjs.substring(0, 2) == 'CG') {
		if (isddjs.substring(0, 2) == 'CG') {
			wxldd(language[161], 700)
		}
		if (jltmod == true) { } else {
			huif(true, isddjs.substring(2, isddjs.length))
		}

	} else if (isddjs.substring(0, 7) == 'yourQZ:') {
		var m = isddjs.substring(7, isddjs.length)
		// console.log(m)
		addlog(language[162] + m)
		alert(language[163] + m + language[164])
		document.getElementById('fsltdk').value = m
		hsxz = m
	} else if (isddjs.substring(0, 2) == 'sx') {
		addXX(isddjs.substring(2, isddjs.length).split("|")[0], unCompileStr(isddjs.substring(2, isddjs.length).split("|")[1]))
		if (document.getElementById('fsltmz').value == isddjs.substring(2, isddjs.length).split("|")[0]) { } else {
			wxldd('❗', 800)
		}

	} else if (isddjs.substring(0, 3) == 'BCG') {
		alert(language[165])
	} else if (isddjs.substring(0, 2) == 'dj') {
		//console.log('aaaaa')
		qianzhi('dd' + md5(isddjs.substring(2, isddjs.length) + '666'), true)
	} else if (unCompileStr(isddjs).substring(0, 2) == '%%') {
		console.log(unCompileStr(isddjs).substring(2, unCompileStr(isddjs).length)) //服务器日志
		addlog(unCompileStr(isddjs).substring(2, unCompileStr(isddjs).length))
		//addXX('server',unCompileStr(isddjs).substring(2,unCompileStr(isddjs).length))
		wxldd('$', 600)

	} else if (isddjs.substring(0, 2) == 'hl') {
		document.getElementById('ltk').innerHTML = ''
		var c = isddjs.substring(2, isddjs.length).split('锟斤拷')
		for (let i = 0; i < c.length - 1; i++) {
			const element = c[i];
			addXX(element.split("|")[0], unCompileStr(element.split("|")[1]))
		}
	} else if (isddjs.substring(0, 5) == 'jsjxj') {
		var q = isddjs.substring(5, isddjs.length)
		xrjsqjg(q)
		wxldd(language[166], 700)
		//解析解
	}
}

function compileStr(code) {
	var c = String.fromCharCode(code.charCodeAt(0) + code.length);
	for (var i = 1; i < code.length; i++) {
		c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
	}
	return escape(c)
}

function qianzhi(things, t) { //与服务器通信
	/* 本地合并版：所有消息直接进入本地总线（az_local.js），不再编码发送到远程服务器。
	   原协议中 dt 消息使用随时间/密码变化的动态密钥，本地模式下无此需要。 */
	if (typeof AZLocal !== 'undefined' && typeof AZLocal.receive === 'function') {
		AZLocal.receive(things)
		return
	}
	if (t == true) {

	} else {
		ws.send(toCode(things))
		return
	}

	var f = timestampToTime(new Date().getTime() + sjzj) + '666f' + localStorage.getItem('///////////////////////////')
	var key = "~`[-=?>:<./;]。，*()_+$‘“,}@{|!#^&%”’："
	var e = SHA256(f)
	//console.log(e)
	var list = []

	function md5_to_jmh(e, u) {

		var o = e[u];
		var hao = 'NaN'
		for (let i = 0; i < abc.length; i++) {
			const element = abc[i];
			if (element == o) {
				var hao = i
				break
			}
		}
		if (hao == 'NaN') {
			var hao = Number(o) + 26
		}
		if (isInArray(list, hao) == false) {
			return (hao)
		} else {
			for (let j = 0; j < 36; j++) {
				if (isInArray(list, j) == false) {
					return (j)
				}
			}
		}

	}
	for (let u = 0; u < 36; u++) {
		list.push(md5_to_jmh(e, u))
	}
	var nkey = ''
	for (let i = 0; i < list.length; i++) {
		const element = list[i];
		nkey = nkey + key[element]

	}
	//console.log(nkey)
	ws.send(toCode('dt' + compileStr(things), nkey))
	return
}

function unCompileStr(code) {
	code = unescape(code);
	var c = String.fromCharCode(code.charCodeAt(0) - code.length);
	for (var i = 1; i < code.length; i++) {
		c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
	}
	return c;
}

function addXX(mz, nr) {
	wztopx(nr, 20)[0] + 20
	var xx = `<div class="ltxx" style="height: ` + (wztopx(nr, 20)[1] + 30) + `px;"><div class="name">` + mz + `</div><div class="xxzt" style="width: ` + (wztopx(nr, 20)[0] + 20) + `px; height: ` + (wztopx(nr, 20)[1] + 5) + `px; line-height: 20px; font-size: 20px;webkit-user-select: text;-moz-user-select: text;-o-user-select: text;user-select: text; ">` + nr + `</div></div>`
	var f = document.getElementById("ltk").innerHTML
	document.getElementById("ltk").innerHTML = f + xx


	document.getElementById("ltk").scrollTop = document.getElementById("ltk").scrollHeight

}

function TBxx() {

	var o2 = output(2)
	if (isrel(localStorage.getItem('ls')) == true) {
		var y = zfc_to_sz(localStorage.getItem('ls'))
	} else {
		var y = []
	}
	if (y.length > 100) {
		y.shift()
	}
	y.push(o2)
	localStorage.setItem('ls', sz_to_zfc(y))
	if (hsxz == false) {
		return
	} else {
		qianzhi(("fb" + String(hsxz) + o2))
	}
}

function BAC2(m) {
	y = zfc_to_sz(m)
	if (y.length == 1) {
		//location.reload();
		//localStorage.setItem('ls', '')
		//return
	}
	var w = y[y.length - 1]
	huif(true, w)
	localStorage.setItem('ls', sz_to_zfc([w]))
	return
}

function BACK() {
	if (isrel(localStorage.getItem('ls')) == true) {
		var y = zfc_to_sz(localStorage.getItem('ls'))
		if (y.length == 1) {
			location.reload();
			localStorage.setItem('ls', '')
			return
		}
		y.splice(y.length - 1, 1)
		var m = y[y.length - 1]
		huif(true, m)
		localStorage.setItem('ls', sz_to_zfc(y))
	} else {
		return
	}
}

function jrqz(a) {
	qianzhi(("jo" + a + '|' + document.getElementById('fsltmz').value + '|' + gaojilianjishiyongmiyue))
	hsxz = a
	document.getElementById('fsltdk').value = a
}

function xjqz() {
	if (v_i_p[0] == true) { } else {
		jznotcheshi()
		return
	}
	qianzhi(("xj" + output(2)), true)
	setTimeout(() => {

	}, 1000);
}

function addUSE(n) {
	localStorage.setItem('m', n)
	localStorage.setItem('///////////////////////////', md5(n))
}

/* 客户端合并版：不再连接远程 WebSocket 服务器。
   本地环回总线 ws 由 az_local.js 提供（登录 / 房间 / 聊天 / 同步全部本地完成）。 */
wsonopen = true





function _(a) {
	qianzhi(("js" + localStorage.getItem('m') + a), true)
}




/*
var aibtret = '6'

function wwwwwwww ( nname, abs ) {
	if ( isrel( abs ) == true ) {
		aibtret = abs
	}
	const payload = {
		API_KEY: 'UIukBfpay9BMDHXQ0wX9XMxj',
		SECRET_KEY: 'uE3pkPGkCW2gWXztTqgULX8Z0TVyv930',
		API_URL: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/text_gen/key2idea',
		abstract: aibtret,
		with_prefix: false
	}


	const xhr = new XMLHttpRequest();
	xhr.open( "POST", "https://easydl.zzh.coderai.cn/text_gen", true );
	xhr.setRequestHeader( 'content-type', 'application/json' );
	xhr.responseType = "json";
	xhr.send( JSON.stringify( payload ) );
	xhr.onload = () => {
		const result = xhr.response;
		if ( xhr.status == 200 ) {
			aibtret = result.title
			//console.log(aibtret)
			_( "fwx('" + nname + "','" + aibtret + "')" )

		} else if ( xhr.status == 401 || xhr.status == 403 ) {
			alert( result.msg );
		} else {
			alert( "网络请求出现错误，请向网站管理员反馈" );
		}
	}
}
*/
var ltlb = []

function lt(a) {
	ltlb.push(a)
	eval()
}

function yzdc(lb, a) {

}
/*


sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.ssssssss.eu.org



*/


function zm_to_cl(tj) {
	var tj = "(" + tj + ")"
	var ythzmb = []
	for (let i = 0; i < cllb.length; i++) {
		const element = cllb[i];
		if (isrel(element.split('|')[0]) == true && element !== '') {
			ythzmb.push([element.split('|')[0], i])
		}
	}
	for (let p = 0; p < tj.length; p++) {
		const element = tj.substring(p, p + 1);
		//console.log(element)
		if (isInArray(["^", "*", "/", "+", "_", '('], element) == true) {
			for (let j = p + 1; j < tj.length; j++) {
				const element = tj.substring(j, j + 1);
				//console.log(element,isInArray(["^", "*", "/", "+", "_",')'],element))
				if (isInArray(["^", "*", "/", "+", "_", ')'], element) == true) {
					var a = tj.substring(p + 1, j)
					// console.log(a)
					for (let b = 0; b < ythzmb.length; b++) {
						const element = ythzmb[b];
						if (element[0] == a) {
							var r = 'gc(' + element[1] + ',1)'
							tj = tj.substring(0, p + 1) + r + tj.substring(j, tj.length)
							p = p + r.length
						}
					}
					break
				}
			}
		}
	}
	tj = tj.replace(new RegExp('）', 'g'), ')')
	tj = tj.replace(new RegExp('（', 'g'), '(')
	return tj.substring(1, tj.length - 1)

}

function cl_to_zm(jxs) {
	var ythzmb = []
	for (let i = 0; i < cllb.length; i++) {
		const element = cllb[i];
		if (isrel(element.split('|')[0]) == true && element !== '') {
			ythzmb.push([element.split('|')[0], i])
		}
	}
	var diaoyongzifuchuang = th(jxs)
	var diaoyongzifuchuang = "(" + diaoyongzifuchuang + ")"
	var zuokuohao = 0
	for (var i = 0; i < diaoyongzifuchuang.length; i++) {
		var gh = diaoyongzifuchuang.substring(i, i + 1)
		if (gh == "(") {
			zuokuohao++
		}
	}

	for (var gt = 0; gt < zuokuohao + 1; gt++) { //拆括号
		var qianmdkh = 0
		for (var i = 0; i < diaoyongzifuchuang.length; i++) {
			var gh = diaoyongzifuchuang.substring(i, i + 1)
			//  console.log(gh)
			if (gh == "(") {
				var qianmdkh = i
			} else
				if (gh == ")") {
					var tj = diaoyongzifuchuang.substring(qianmdkh + 1, i)
					//  console.log(tj)
					for (let rw = 0; rw < ythzmb.length; rw++) {
						const element = ythzmb[rw];
						tj = tj.replace(new RegExp('gc（' + element[1] + ',1）', 'g'), element[0])

					}
					diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh) + '（' + tj + '）' + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)

					break
				}
		}
	}
	diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('）', 'g'), ')')
	diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('（', 'g'), '(')
	return diaoyongzifuchuang.substring(1, diaoyongzifuchuang.length - 1)
}

function testFun() {
	var start = new Date().getTime() // 开始时间
	for (let i = 0; i < 100000000; i++) {
		//jxs_l_for_azhs('x^9+x^x+666',sj(0,1000))
		var a = Math.random() * 10000
		Math.floor(a / 0.2) * 0.2
	}
	var end = new Date().getTime() // 结束时间
	console.log(end - start)
}

/*
function NX_JXSJS ( jxs, x ) {
	sxcl()
	jkxjj = []
	jlks = true
	jxs_l_for_azhs( jxs, x )
	jlks = false
	var sc = ''
	var sc2 = []
	var uuuu2 = []
	for ( let i = jkxjj.length - 1; i >= 0; i-- ) {
		var element = jkxjj[ i ];
		element.splice( 3, 1, hsmyjz( element[ 3 ] ) )
		element.splice( 0, 1, gvgy( element[ 0 ], element[ 1 ] )[ 0 ] )
		element.splice( 1, 1, gvgy( element[ 3 ], element[ 1 ] )[ 1 ] )
		var sdl = '函数 ' + element[ 3 ] + ' 调用了函数 ' + element[ 0 ] + ' ，返回值为 ' + element[ 2 ] + ' （调用参数为' + element[ 1 ] + ')' + '\n'
		uuuu2.push( [ element[ 3 ], element[ 0 ], element[ 2 ], element[ 1 ] ] )
		sc = sc + sdl
		sc2.push( sdl )
	}
	//console.log(sc)
	addZD( sc2, "对于" + jxs + "的计算分析: " )



	function hsmyjz ( a ) {
		var b = a
		var b = b.replace( new RegExp( 'jt', 'g' ), 'jxs_l_for_azhs' );
		return b
	}

	function gvgy ( a, c ) {
		var b = hsmyjz( a )
		var d = c

		return [ b, d ]
	}

	//☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯
	//console.log(uuuu2)
	var cf = uuuu2
	const yhui = cf

	function jianshu ( uuuu2, m ) {
		//console.log(uuuu2)
		var shu = []

		for ( let i = 0; i < uuuu2.length; i++ ) {
			const element = uuuu2[ i ];

			if ( i + 1 >= uuuu2.length ) {
				shu.push( element[ 0 ], element[ 1 ] )
				break
			}
			//  console.log(uuuu2[i],i)
			if ( yhui[ i ][ 1 ] == yhui[ i + 1 ][ 0 ] ) {

				shu.push( yhui[ i ][ 1 ] )
			} else {
				//console.log('z2')
				if ( m == true ) {
					return i + 1
				}
				//console.log('rz2')
				var lldxf = []
				for ( var p = 0; p < 1000; p++ ) {


					//console.log(uuuu2,yhui)
					var uc = []
					uc = arrCDX( yhui )

					uc.splice( 0, i )
					//console.log(uc,i)
					//console.log(uuuu2,yhui)
					var rg = uc.length
					//console.log(uc.length, uc)
					var duandianqishi = jianshu( uc, true )
					//console.log(duandianqishi)
					//console.log(uuuu2,yhui)
					uc.splice( duandianqishi, uc.length - duandianqishi )
					//console.log(uc.length,uc)

					//console.log(uuuu2,yhui)
					i = i + duandianqishi
					lldxf.push( jianshu( uc ) )
					//console.log(rg,duandianqishi,i)
					//console.log(uuuu2,yhui)
					if ( duandianqishi >= rg ) {
						break
					}
				}
				shu.push( lldxf )
				break
			}

		}
		if ( m == true ) {
			return uuuu2.length + 1
		}
		return shu
	}
	var shu = jianshu( uuuu2 )
	//console.log(shu)
}
*/
function p(x) { //质数
	var h = 0
	for (let i = 2; i <= Math.pow(2, x); i++) {
		var g = 0
		for (let j = 2; j <= i; j++) {
			g = g + Math.floor(cos2(Math.PI * ((jc(j - 1) + 1) / j)))
		}
		h = h + Math.floor(Math.pow(1 + g, -1 / x) * Math.pow(x, 1 / x))
	}
	return 2 + h
}

function cos2(x) {
	return (Math.pow(Math.cos(x), 2))
}

function zs(j) {
	return Math.floor(cos2(Math.PI * ((jc(j - 1) + 1) / j)))
}

function off() {
	_('dxf=false')
	dxf = false
	console.log('已关闭输出')
	setTimeout(() => {
		wxldd('🔴', 1000)
	}, 1500);

}

function on() {
	_('dxf=true')
	dxf = true
	console.log('已开启输出')
	setTimeout(() => {
		wxldd('🟢', 1000)
	}, 1500);

}

function dxf_qh() {
	if (dxf == true) {
		off()
	} else {
		on()
	}
}

function openChat(a, b, c, mod) {
	/*
	a:聊天室号
	b:用户名
	c:密钥
	*/
	if (c) { } else {
		var c = SHA256(String(sj(0, 1145141919810)))
	}

	_(`ZcUser('` + a + `','` + b + `','` + c + `')`)

	//var f=`pu();gaojilianjishiyongmiyue='`+c+`';setTimeout(() => {jrqz('`+a+`');jzltjl(25)}, 300);document.getElementById('fsltmz').value='`+b+`';useneme='`+b+`'`
	console.log(a, b, c)
}




function changliangdonghua(cl, a, b, c) {
	shijixianshiguiji = []
	var cl2lb = cllb
	var ri = 0
	for (let i = a; i <= b; i = i + c) {
		sxcl()
		var yclsjcs = cllb[cl].split("|")[0]
		cllb.splice(cl, 1, yclsjcs + "|" + i)
		huizhi()
	}
	sxcl()
	cllb = cl2lb

	huizhi()
	hbck.strokeStyle = 'blue'
	hbck.lineWidth = 2
	for (let i = a; i <= b; i = i + c) {
		sxcl()
		var yclsjcs = cllb[cl].split("|")[0]
		cllb.splice(cl, 1, yclsjcs + "|" + i)
		for (let j = 0; j < guiji.length; j++) {
			ri++
			eval(shijixianshiguiji[ri])
		}

	}
	cllb = cl2lb
	guiji = []
	shijixianshiguiji = []
}

function donghua(array, t) {
	//console.log(array,t)
	// dh([[变量号，起始，终止],[变量号，起始，终止],[变量号，起始，终止]....],用时)
	var start = new Date()

	var r = setInterval(() => {
		sxcl()

		for (let i = 0; i < array.length; i++) {
			const element = array[i];
			var c = element[0]
			var f = element[1]
			var to = element[2]

			if (to < f) {
				var i2 = f - ((new Date() - start) / t) * (f - to)
			} else {
				var i2 = ((new Date() - start) / t) * (to - f) + f
			}
			gcl(c, i2)
		}

		huizhi()
		if (new Date() - start >= t) {
			clearInterval(r)
		}

	}, 1);
}

function gcl(cl, i) {
	var yclsjcs = cllb[cl].split("|")[0]
	cllb.splice(cl, 1, yclsjcs + "|" + i)
}


/*

噫薏憶臆镱億𫄷譩癔鐿嬑檍繶澺燱䗷䪰醷䖁
滴鹂犁利离里力，砥砺礼利鲤，还有那会唱歌的小黄鹂

*/



function huifuzijhhb(a) { //从几何画板打开文件
	var a = a.replace(new RegExp('\r\n', 'g'), '')
	var a = a.replace(new RegExp(' ', 'g'), '')
	var a = a.split(';')
	//console.log(a)
	var ys = []
	for (let i = 0; i < a.length; i++) {
		const element = a[i];
		var f = ''
		for (let j = 0; j < element.length; j++) {
			if (element.substring(j, j + 1) == '}') {
				var f = element.substring(j + 1, element.length)
			}
		}
		ys.push([i + 1, f])
	}
	//console.log(ys)
	for (let i = 0; i < ys.length - 1; i++) {
		const element = ys[i];

		function gdzx(z) {
			var h = 0
			var llll = ''

			function zget(z) {
				var qs = 0
				for (let i = 0; i < z.length; i++) {
					const element = z.substring(i, i + 1);
					if (element == '(') {
						var qs = i
					}
					if (element == ')') {
						return z.substring(qs + 1, i).split(',')
					}
				}
			}

			function xget(z) {
				var qs = 0
				//console.log(z)
				for (let i = 0; i < z.length; i++) {
					const element = z.substring(i, i + 1);
					if (element == '[') {
						var qs = i
					}
					if (element == ']') {
						return z.substring(qs + 1, i).split(',')
					}
				}
			}
			if (z.split('(')[0] == 'Point') {

				var d = zget(z)
				var r = xget(z)[0]
				var mz = ''
				if (r.split('label').length > 1) {
					var mz = (zget(r)[0]).replace(new RegExp("'", 'g'), '')
				}
				var x = 'gc(' + xjcl('', Number(d[0]) / 100) + ',1)'
				var y = 'gc(' + xjcl('', -1 * Number(d[1]) / 100) + ',1)'
				var h = xjdian(x, y, mz)
				var llll = 'd'
			}
			/*if (z.split('(')[0]=='Point') {
			var d=zget(z)
			}*/
			if (z.split('(')[0] == 'Circle') {
				var d = zget(z)
				var x = 'gd(' + ys[Number(d[0]) - 1][2] + ',0)'
				var y = 'gd(' + ys[Number(d[0]) - 1][2] + ',1)'
				var r = 'gl(' + ys[Number(d[0]) - 1][2] + ',' + ys[Number(d[1]) - 1][2] + ')'

				var h = cjxhs("sqrt((" + r + ")^2_(x_(" + x + "))^2)+" + y, "black", "", "", 1)
				cjxhs("0_sqrt((" + r + ")^2_(x_(" + x + "))^2)+" + y, "black", "", "", 1)
				var llll = '2h'
			}
			if (z.split('(')[0] == 'Line' || z.split('(')[0] == 'Ray') {
				var d = zget(z)
				var h = cjxhs("getjxs(x," + ys[Number(d[0]) - 1][2] + ',' + ys[Number(d[1]) - 1][2] + ")", "black", "", "", 1)
				var llll = 'h'
			}
			if (z.split('(')[0] == 'Segment') {
				var d = zget(z)
				var s = "getdzb(" + ys[Number(d[0]) - 1][2] + ",0)"
				var x = "getdzb(" + ys[Number(d[1]) - 1][2] + ",0)"
				var h = cjxhs("getjxs(x," + ys[Number(d[0]) - 1][2] + ',' + ys[Number(d[1]) - 1][2] + ")", "black", "(" + x + ";" + s + ")", "", 1)
				var llll = 'h'
			}
			if (z.split('(')[0] == 'Intersect' || z.split('(')[0] == 'Intersect1' || z.split('(')[0] == 'Intersect2') {
				var d = zget(z)
				var r = xget(z)[0]
				var ds = 0
				if (z.split('(')[0] == 'Intersect2') {
					var ds = 1
				}
				var x = 'gj(' + ys[Number(d[0]) - 1][2] + ',' + ys[Number(d[1]) - 1][2] + ',' + ds + ',0,)'
				var y = 'gj(' + ys[Number(d[0]) - 1][2] + ',' + ys[Number(d[1]) - 1][2] + ',' + ds + ',1,)'
				var mz = ''
				if (r.split('label').length > 1) {
					var mz = (zget(r)[0]).replace(new RegExp("'", 'g'), '')
				}
				var h = xjdian(x, y, mz)
				var llll = 'd'
			}
			if (z.split('(')[0] == 'Pointonobject') {
				var d = zget(z)
				var r = xget(z)[0]
				var c = xjcl('', Number(d[1]))
				var y = 'gethsz(' + c + ',' + ys[Number(d[0]) - 1][2] + ')'
				var x = 'gc(' + c + ',1)'
				var mz = ''
				if (r.split('label').length > 1) {
					var mz = (zget(r)[0]).replace(new RegExp("'", 'g'), '')
				}
				var h = xjdian(x, y, mz)
				var llll = 'd'
			}
			if (z.split('(')[0] == 'Perpendicular') {
				var d = zget(z)
				var h = cjxhs("getcx(x," + ys[Number(d[0]) - 1][2] + "," + ys[Number(d[1]) - 1][2] + ")", "black", "", "", 1)
				var llll = 'h'
			}
			if (z.split('(')[0] == 'Parallel') {
				var d = zget(z)
				var h = cjxhs("getpxx(x," + ys[Number(d[0]) - 1][2] + "," + ys[Number(d[1]) - 1][2] + ")", "black", "", "", 1)
				var llll = 'h'
			}
			if (z.split('(')[0] == 'Bisector') {
				var d = zget(z)
				var h = cjxhs("getpfx(x," + ys[Number(d[0]) - 1][2] + "," + ys[Number(d[1]) - 1][2] + "," + ys[Number(d[2]) - 1][2] + ")", "black", "", "", 1)
				var llll = 'h'
			}
			if (z.split('(')[0] == 'Midpoint') {
				var d = zget(z)
				var r = xget(z)[0]
				var t = zget(hslb[ys[Number(d[0]) - 1][2]].split('|')[0])
				var mz = ''
				if (r.split('label').length > 1) {
					var mz = (zget(r)[0]).replace(new RegExp("'", 'g'), '')
				}
				var x = "(getdzb(" + t[1] + ",0)+getdzb(" + t[2] + ",0))/2"
				var y = "(getdzb(" + t[1] + ",1)+getdzb(" + t[2] + ",1))/2"

				var h = xjdian(x, y, mz)
				var llll = 'd'
			}
			if (z.split('(')[0] == 'Circlebyradius') {
				var d = zget(z)
				var t = zget(hslb[ys[Number(d[1]) - 1][2]].split('|')[0])
				var r = "gl(" + t[1] + "," + t[2] + ")"
				var x = 'gd(' + ys[Number(d[0]) - 1][2] + ',0)'
				var y = 'gd(' + ys[Number(d[0]) - 1][2] + ',1)'


				var h = cjxhs("sqrt((" + r + ")^2_(x_(" + x + "))^2)+" + y, "black", "", "", 1)
				cjxhs("0_sqrt((" + r + ")^2_(x_(" + x + "))^2)+" + y, "black", "", "", 1)
				var llll = '2h'
			}
			if (z.split('(')[0] == 'Function') {
				var d = zget(z.split('=')[1])
				//console.log(d)
				var h = cjxhs(d[0], "black", '', '', 1)
				var llll = 'h'
			}



			if (xget(z)[0] == 'hidden') {
				if (llll == '2h') {
					yclb.push('h' + h)
					yclb.push('h' + (h + 1))
				}
				yclb.push(llll + h)
			}
			return h
		}

		var q = gdzx(element[1])
		ys[i].splice(2, 1, q)
	}
	huizhi()
	//console.log(ys)
}

function shoushi() {
	_("log(gettime())")
	setTimeout(() => {
		shoushi()
	}, 1);
}

function dengluzhanghao() {
	if (v_i_p[0] == true) {
		wxldd(language[156], 800)
		return
	}
	if (!document.getElementById('denglmm').value) {
		return
	}

	addUSE(document.getElementById('denglmm').value)
	DLYZ()
	//wxldd( language[156], 1200 )
}

function dunengluzhanghao() {
	if (confirm(language[233])) {
		addUSE('')
		wxldd(language[234], 1200)
		//location.reload()
	}
}

function mathhhj(jxs) {

	const rules = [{
		l: '(n1^2+2*n2*n1+n2^2)^(1/2)',
		r: 'n1+n2'
	},
	{
		l: '(n1^2+n2*n1+n2^2/4)^(1/2)',
		r: 'n1+n2'
	}
	];
	let newRules = rules.concat(math.simplify.rules);
	const result = math.simplify(jxs, newRules);
	//console.log(result.toString()); 
}

var settingonclick = []
function l(e, a, b, c, d, f) { //元素，innerHTML，value，placeholder
	//onload="l(this,)"
	if (a) {
		e.innerHTML = language[a]
	}
	if (b) {
		e.value = language[b]
	}
	if (c) {
		e.placeholder = language[c]
	}
	if (d) {
		e.innerHTML = language[d]
		var click = e.onclick.toString()
		var sth = Number(click.split(',')[1].split(')')[0])
		if (!settingonclick[d]) {
			settingonclick[d] = sth
		}
		//console.log(click.split(',')[1].split(')')[0])
		e.onclick = () => { settingxunwen(language[d], settingonclick[d]) }

	}
	if (f) {
		e.title = language[f]
	}
}

function loadevents() {
	var r = document.getElementsByTagName("*")
	var f = true
	for (let i = 0; i < r.length; i++) {
		if (r[i].onload) {
			if (f) {
				var f = false
			} else {
				//console.log(r[i].onload)
				r[i].onload()
			}
		}
		//r[i].onload()
	}
}





function meijv(params) {

	for (let i = 1; i < 2027; i++) {
		var c = ''
		for (let j = 0; j < i; j++) {
			c = c + '6'
		}
		//console.log(c,Algebrite.run(c+'/2026').toString())
		if (Algebrite.run(c + '/2026').toString().split('/').length == 1) {
			console.log(c)
		}
	}
	return
}

//"1234".split('/').length

/*

function lifang() {
	for (let a = -10000; a < 10000; a++) {
		//console.log(a)
		for (let b = -10000; b < 10000; b++) {
			var e=1141*a*a*a-b*b*b
			var c=Number(Math.pow(e,1/3).toFixed(10))
			if (c&&String(c).split('.').length<2&&(a!==0&&b!==0)) {
				return([a,b])
			}
		}
		
	}
}

x^3+y^3=1141

求正有理数 x y

1:-(-19)^2/((-(-19)^3+1141)^(2/3))*x+1141/400


x=57893/4953 y=-38120/4953

(41167/4953)/(55987/4953)

2:-41167/55987*x+337567/55987

x = 74451906469/7115358260  y=-11842954469/7115358260


3:-(1739878429/3162791089)*x+30198131629/3162791089

x = 12681563775265601680/1235415052524024021   y = 4819429005921295601/1235415052524024021




-19*k+b=20








*/

function makeafsm(jxs, snp) { //jsjxj
	var r = sz_to_zfc(hslb, "ن") + "و³" + sz_to_zfc(dlb, "ن") + "و³" + sz_to_zfc(cllb, "ن") + "و³" + jxs + "و³" + snp
	return r.replace(new RegExp('undefined', 'g'), '')
}


/*
function gaokaoti ( k ) {
	var f0 = 0
	var f0y = []
	var f0yy = []
	for ( let u = 0; u < 20000000; u++ ) {
		var d = []
		for ( let i = 1; i <= k; i++ ) {
			function f0sj () {
				var c = sj( -10, 10 )
				if ( c == 0 || isInArray( d, c ) || isInArray( d, -c ) ) {
					return f0sj()
				}
				return c
			}
			d.push( f0sj() )
		}
		var ff = uuu( d )
		var f = ff.length
		if ( f > f0 ) {
			f0 = f
			f0y = d
			f0yy = ff
		}
	}
	return [ f0, f0y, f0yy ]
}

function uuu ( d ) {
	var g = []
	for ( let i = 0; i < d.length; i++ ) {
		for ( let j = 0; j < d.length; j++ ) {
			if ( j == i ) {

			} else {
				if ( isInArray( g, d[ i ] + d[ j ] ) == false ) {
					g.push( d[ i ] + d[ j ] )
				}
			}
		}
	}
	return g
}*/

function yinshufengjie(num) {
	var yinshu = [1, num]
	for (let i = 2; i < num / 2 + 1; i++) {
		if (num % i == 0) {
			yinshu.push(i)
		}
	}
	return yinshu
}
/*
var zys=[]
for (let i = 0; i <100; i++) {
	
	var c=yinshufengjie(i*i+i+1)
	for (let j = 0; j < c.length; j++) {
		const element = c[j];
		if (isInArray(zys,element)) {
			
		}else{
			zys.push(element)
		}
	}
}
console.log(zys)
var e=relebubbleSort(zys)
var f=''
for (let i = 0; i < e.length; i++) {
	const element = e[i];
	f=f+element+','
}
for (let i = 1; i < e.length; i++) {
	xjdian(i,e[i])
}*/




/*
y+z+l*(y^2-x^4+x^2-1)+k*(z^2-x^4+3*x^2+6*x-13)

x'=((-4*l)-4*k)*x^3+(2*l+6*k)*x+6*k
y'=2*l*y+1
z'=2*k*z+1
l'=y^2-x^4+x^2-1
k'=z^2-x^4+3*x^2+6*x-13

0=((-4*l)-4*k)*x^3+(2*l+6*k)*x+6*k,0=2*l*y+1,0=2*k*z+1,0=y^2-x^4+x^2-1,0=z^2-x^4+3*x^2+6*x-13

*/


/*
function tihuangenghao(jxs) { //替换根号

	var d = jxs.replace(new RegExp('[)][^][(]1[/]2[)]', 'g'), '}')
	var pfgl = 0
	for (let i = 0; i < d.length; i++) {
		if (d.substring(i, i + 1) == '}') {
			pfgl++
		}

	}
	//for (let l = 0; l < pfgl; l++) {

	for (let i = d.length; i > 0; i--) {
		if (d.substring(i, i - 1) == '}') {
			var t = 0
			var z = 0
			var y = 1

			for (let j = 0; j < 1000000; j++) {
				var m = d.substring(i - 1 - j, i - 2 - j)
				if (m == '(' || m == '{') {
					z++
				}
				if (m == ')' || m == '}') {
					y++
				}
				if (y == z) {
					var t = j
					break
				}
			}
			d = d.substring(0, i - 2 - t) + '{' + d.substring(i - 1 - t, d.length)

		}

	}
	//}
	//console.log(jxs,d)
	return d
}

function zc_to_math(jxs) {
	jxs = tihuangenghao(jxs).replace(new RegExp('[{]', 'g'), '√{')
	jxs = jxs.replace(new RegExp('sqrt[(]', 'g'), '√(')
	jxs = jxs.replace(new RegExp('[*]', 'g'), '')


	function abandon(jxs) {
		var kh = 0
		var yhk = 0
		var a = false
		var b = false
		var faxianjibie = []
		var j = false



		var yjxs = jxs

		for (let i = 0; i < yjxs.length; i++) {
			const element = yjxs.substring(i, i + 1);
			if (element == '√' || element == '/' || element == '^') {

				j = true
				if (yjxs.substring(i + 1, i + 2) == '(') {
					faxianjibie.push(kh)
					var yjxs = yjxs.substring(0, i + 1) + '{' + yjxs.substring(i + 2, yjxs.length)
				}
			}
			if (element == '(' || element == '{') {
				kh++
			}
			if (element == ')' || element == '}') {
				kh--
				//console.log(yjxs,kh,faxianjibie)
				if (isInArray(faxianjibie, kh) == true) {
					if (1) {
						var yjxs = yjxs.substring(0, i) + '}' + yjxs.substring(i + 1, yjxs.length)
						j = false
						arrremove(faxianjibie, kh)
					}
				}

			}
		}
		var kh = 0
		var yhk = 0
		var a = false
		var b = false
		var faxianjibie = []
		var genghao = []
		var j = false
		for (let i = yjxs.length; i > 0; i--) {
			const element = yjxs.substring(i, i - 1);
			if (element == '/') {
				if (yjxs.substring(i - 1, i - 2) == ')') {
					faxianjibie.push(kh)
					var yjxs = yjxs.substring(0, i - 2) + '}' + yjxs.substring(i - 1, yjxs.length)
				}
			}
			if (element == ')' || element == '}') {
				kh++
			}
			if (element == '(' || element == '{') {
				kh--
				//console.log(yjxs,kh,faxianjibie)
				if (isInArray(faxianjibie, kh)) {
					if (isInArray(abc, yjxs.substring(i - 1, i - 2)) == false) {
						var yjxs = yjxs.substring(0, i - 1) + '{' + yjxs.substring(i, yjxs.length)
						j = false
						arrremove(faxianjibie, kh)
					} else {
						for (let u = 1; u < yjxs.length; u++) {
							var qwq = yjxs.substring(i + u, i - 1 + u)
							var kuoh = 1
							//console.log(qwq)
							if (qwq == '(' || qwq == '{') {
								kuoh++
							}
							if (qwq == ')' || qwq == '}') {
								kuoh--
								if (kuoh == 0) {
									yjxs = yjxs.substring(0, i - 1 + u) + ')' + yjxs.substring(i + u, yjxs.length)
									break
								}
							}
						}
					}
				}
			}
		}
		return yjxs
	}
	var c = abandon(jxs)
	c = c.replace(new RegExp('\\[', 'g'), '{')
	c = c.replace(new RegExp('\\]', 'g'), '}')
	//
	xsbds(c)
	return c

}*/

function utf8_to_b64(str) {
	return window.btoa(unescape(encodeURIComponent(str)));
}



// 示例
//console.log(utf8_to_b64("你好")); // 输出: "JUU0JUJEJUEwJUU1JUE1JUJE"



function b64_to_utf8(str) {
	return decodeURIComponent(escape(window.atob(str)));
}

// 示例
//console.log(b64_to_utf8("5L2g5aW9")); // 输出: "你好"


var LZString = function () {
	function o(o, r) {
		if (!t[o]) {
			t[o] = {};
			for (var n = 0; n < o.length; n++) t[o][o.charAt(n)] = n
		}
		return t[o][r]
	}
	var r = String.fromCharCode,
		n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
		e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
		t = {},
		i = {
			compressToBase64: function (o) {
				if (null == o) return "";
				var r = i._compress(o, 6, function (o) {
					return n.charAt(o)
				});
				switch (r.length % 4) {
					default:
					case 0:
						return r;
					case 1:
						return r + "===";
					case 2:
						return r + "==";
					case 3:
						return r + "="
				}
			},
			decompressFromBase64: function (r) {
				return null == r ? "" : "" == r ? null : i._decompress(r.length, 32, function (e) {
					return o(n, r.charAt(e))
				})
			},
			compressToUTF16: function (o) {
				return null == o ? "" : i._compress(o, 15, function (o) {
					return r(o + 32)
				}) + " "
			},
			decompressFromUTF16: function (o) {
				return null == o ? "" : "" == o ? null : i._decompress(o.length, 16384, function (r) {
					return o.charCodeAt(r) - 32
				})
			},
			compressToUint8Array: function (o) {
				for (var r = i.compress(o), n = new Uint8Array(2 * r.length), e = 0, t = r.length; t > e; e++) {
					var s = r.charCodeAt(e);
					n[2 * e] = s >>> 8, n[2 * e + 1] = s % 256
				}
				return n
			},
			decompressFromUint8Array: function (o) {
				if (null === o || void 0 === o) return i.decompress(o);
				for (var n = new Array(o.length / 2), e = 0, t = n.length; t > e; e++) n[e] = 256 * o[2 * e] + o[2 * e + 1];
				var s = [];
				return n.forEach(function (o) {
					s.push(r(o))
				}), i.decompress(s.join(""))
			},
			compressToEncodedURIComponent: function (o) {
				return null == o ? "" : i._compress(o, 6, function (o) {
					return e.charAt(o)
				})
			},
			decompressFromEncodedURIComponent: function (r) {
				return null == r ? "" : "" == r ? null : (r = r.replace(/ /g, "+"), i._decompress(r.length, 32, function (n) {
					return o(e, r.charAt(n))
				}))
			},
			compress: function (o) {
				return i._compress(o, 16, function (o) {
					return r(o)
				})
			},
			_compress: function (o, r, n) {
				if (null == o) return "";
				var e, t, i, s = {},
					p = {},
					u = "",
					c = "",
					a = "",
					l = 2,
					f = 3,
					h = 2,
					d = [],
					m = 0,
					v = 0;
				for (i = 0; i < o.length; i += 1)
					if (u = o.charAt(i), Object.prototype.hasOwnProperty.call(s, u) || (s[u] = f++, p[u] = !0), c = a + u, Object.prototype.hasOwnProperty.call(s, c)) a = c;
					else {
						if (Object.prototype.hasOwnProperty.call(p, a)) {
							if (a.charCodeAt(0) < 256) {
								for (e = 0; h > e; e++) m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
								for (t = a.charCodeAt(0), e = 0; 8 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
							} else {
								for (t = 1, e = 0; h > e; e++) m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
								for (t = a.charCodeAt(0), e = 0; 16 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
							}
							l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a]
						} else
							for (t = s[a], e = 0; h > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
						l--, 0 == l && (l = Math.pow(2, h), h++), s[c] = f++, a = String(u)
					} if ("" !== a) {
						if (Object.prototype.hasOwnProperty.call(p, a)) {
							if (a.charCodeAt(0) < 256) {
								for (e = 0; h > e; e++) m <<= 1, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++;
								for (t = a.charCodeAt(0), e = 0; 8 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
							} else {
								for (t = 1, e = 0; h > e; e++) m = m << 1 | t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t = 0;
								for (t = a.charCodeAt(0), e = 0; 16 > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1
							}
							l--, 0 == l && (l = Math.pow(2, h), h++), delete p[a]
						} else
							for (t = s[a], e = 0; h > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
						l--, 0 == l && (l = Math.pow(2, h), h++)
					}
				for (t = 2, e = 0; h > e; e++) m = m << 1 | 1 & t, v == r - 1 ? (v = 0, d.push(n(m)), m = 0) : v++, t >>= 1;
				for (; ;) {
					if (m <<= 1, v == r - 1) {
						d.push(n(m));
						break
					}
					v++
				}
				return d.join("")
			},
			decompress: function (o) {
				return null == o ? "" : "" == o ? null : i._decompress(o.length, 32768, function (r) {
					return o.charCodeAt(r)
				})
			},
			_decompress: function (o, n, e) {
				var t, i, s, p, u, c, a, l, f = [],
					h = 4,
					d = 4,
					m = 3,
					v = "",
					w = [],
					A = {
						val: e(0),
						position: n,
						index: 1
					};
				for (i = 0; 3 > i; i += 1) f[i] = i;
				for (p = 0, c = Math.pow(2, 2), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
				switch (t = p) {
					case 0:
						for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
						l = r(p);
						break;
					case 1:
						for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
						l = r(p);
						break;
					case 2:
						return ""
				}
				for (f[3] = l, s = l, w.push(l); ;) {
					if (A.index > o) return "";
					for (p = 0, c = Math.pow(2, m), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
					switch (l = p) {
						case 0:
							for (p = 0, c = Math.pow(2, 8), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
							f[d++] = r(p), l = d - 1, h--;
							break;
						case 1:
							for (p = 0, c = Math.pow(2, 16), a = 1; a != c;) u = A.val & A.position, A.position >>= 1, 0 == A.position && (A.position = n, A.val = e(A.index++)), p |= (u > 0 ? 1 : 0) * a, a <<= 1;
							f[d++] = r(p), l = d - 1, h--;
							break;
						case 2:
							return w.join("")
					}
					if (0 == h && (h = Math.pow(2, m), m++), f[l]) v = f[l];
					else {
						if (l !== d) return null;
						v = s + s.charAt(0)
					}
					w.push(v), f[d++] = s + v.charAt(0), h--, s = v, 0 == h && (h = Math.pow(2, m), m++)
				}
			}
		};
	return i
}();
"function" == typeof define && define.amd ? define(function () {
	return LZString
}) : "undefined" != typeof module && null != module && (module.exports = LZString);


function subset() {
	var y = document.getElementById("cddddcdcdcdc").value
	var x = document.getElementById("fkdjuzhbckjzhbugb").value
	if (!x) { var x = 'x' }
	var q = prompt(language[258])
	var a = Algebrite.subst(q, x, y).toString()
	xrjsqjg(a)
}
function xrjsqjg(a) {
	if (xzjg) {
		saveurl(a, document.getElementById("cddddcdcdcdc").value + '.txt')
	}
	document.getElementById("cdshhjshjdcshjchj").value = a

}

function liex() {
	var y = document.getElementById("cddddcdcdcdc").value
	if (!y) { return }
	var x = document.getElementById("fkdjuzhbckjzhbugb").value
	if (!x) { var x = 'x' }
	xrjsqjg(liexiang(y, x))
}
function liexiang(p, x) {
	var xsb = []
	var cs = Number(Algebrite.deg(p, x).toString())
	for (let i = 0; i <= cs; i++) {
		xsb.push(Algebrite.coeff(p, x, i).toString())
	}
	var c0 = '0'
	for (let i = 0; i <= cs + 1; i++) {
		c0 = c0 + '+a' + i + '*x^' + i
	}
	//c0=c0+'+x^'+(cs+1)
	c0 = Algebrite.run(c0).toString()
	var c1 = Algebrite.subst('x-1', 'x', c0).toString()


	//console.log(c0,c1,xsb)


	var c = Algebrite.run(c0 + '-(' + c1 + ')').toString()


	//console.log(c)

	var xxsb = []
	for (let i = 0; i <= cs + 1; i++) {
		xxsb.push(Algebrite.coeff(c, 'x', i).toString())
	}

	//console.log(xxsb,xsb)
	var yijie = []
	for (let i = 0; i <= cs; i++) {
		var d = xxsb[cs - i]
		for (let j = 0; j < yijie.length; j++) {
			if (yijie[j]) {
				var d = Algebrite.subst(yijie[j], 'a' + j, d).toString()
			}

		}


		yijie[cs - i + 1] = Algebrite.roots(d + '-(' + xsb[cs - i] + ')', 'a' + (cs - i + 1)).toString()



	}
	//yijie[0]=0
	//console.log(yijie)
	var c0 = '0'
	for (let i = 1; i <= cs + 1; i++) {
		c0 = c0 + '+(' + yijie[i] + ')*' + x + '^' + i
	}
	return Algebrite.run(c0).toString() + '-(' + Algebrite.run(c0).toString().replace(new RegExp(x, 'g'), '(' + x + '-1)') + ')'
}



function convertToLaTeX(expression) {
	try {
		const node = math.parse(expression);
		return node.toTex();
	} catch (error) {
		return;
	}
}

//Algebrite.coeff('x^2+2*x+2','x','2')


function tp(n) {
	var c = 0
	for (let i = 1; i <= n; i++) {
		c = c + 1 / Math.sqrt(i)
	}
	return c - 2 * Math.sqrt(n + 1) + Math.sqrt(2)

}

/*
function wgmhs ( x ) {
	if ( x <= 1 ) {
		return 1
	} else {
		return wgmhs( x - 1 ) * x
	}
}


function dhz() {
	return

	hbck.font = "15px 'Times New Roman',宋体,serif,'Liberation Mono'";
		hbck.fillStyle = "black"
		hbck.textAlign = "left";
		//hbck.textBaseline = "middle";
		
		
	for (let i = 0; i < 140; i++) {
		var cj=t[i].sxlqcj
		var xm=t[i].xm
		hbck.fillText(i+1+'    '+ xm+'    ' +cj, 10, 120+16*i );
	}
}*/


/*
function qj(){
var shujv=[
{"time":1,"x":0.8,"y":-3,"z":2.1,"a":220.10000000000002,"b":-8.8,"g":-0.4},{"time":2,"x":0.2,"y":0.1,"z":-1.4000000000000001,"a":220.10000000000002,"b":-8.8,"g":-0.4},{"time":3,"x":0.2,"y":0.1,"z":-1.4000000000000001,"a":220.10000000000002,"b":-8.8,"g":-0.4},{"time":4,"x":0.2,"y":0.1,"z":-1.4000000000000001,"a":220.10000000000002,"b":-8.8,"g":-0.4},{"time":8,"x":0.2,"y":0.1,"z":-1.4000000000000001,"a":220.10000000000002,"b":-8.8,"g":-0.4},{"time":12,"x":0.2,"y":0.1,"z":-1.4000000000000001,"a":220.10000000000002,"b":-8.8,"g":-0.4},{"time":16,"x":0.2,"y":0.1,"z":-1.4000000000000001,"a":222.20000000000002,"b":-12.700000000000001,"g":-0.4},{"time":20,"x":0.5,"y":1.6,"z":0.2,"a":222.20000000000002,"b":-12.700000000000001,"g":-0.4},{"time":24,"x":0.5,"y":1.6,"z":0.2,"a":222.20000000000002,"b":-12.700000000000001,"g":-0.4},{"time":28,"x":0.5,"y":1.6,"z":0.2,"a":222.20000000000002,"b":-12.700000000000001,"g":-0.4},{"time":32,"x":0.5,"y":1.6,"z":0.2,"a":224.4,"b":-16,"g":-0.4},{"time":36,"x":0.2,"y":2.4000000000000004,"z":-0.6000000000000001,"a":224.4,"b":-16,"g":-0.4},{"time":40,"x":0.2,"y":2.4000000000000004,"z":-0.6000000000000001,"a":224.4,"b":-16,"g":-0.4},{"time":44,"x":0.2,"y":2.4000000000000004,"z":-0.6000000000000001,"a":224.4,"b":-16,"g":-0.4},{"time":48,"x":0.2,"y":2.4000000000000004,"z":-0.6000000000000001,"a":225.8,"b":-17.7,"g":-0.6000000000000001},{"time":52,"x":0.2,"y":2.4000000000000004,"z":-0.6000000000000001,"a":225.8,"b":-17.7,"g":-0.6000000000000001},{"time":56,"x":0.30000000000000004,"y":2.7,"z":0.4,"a":225.8,"b":-17.7,"g":-0.6000000000000001},{"time":60,"x":0.30000000000000004,"y":2.7,"z":0.4,"a":225.8,"b":-17.7,"g":-0.6000000000000001},{"time":64,"x":0.30000000000000004,"y":2.7,"z":0.4,"a":226.4,"b":-18.7,"g":-0.7000000000000001},{"time":68,"x":0.30000000000000004,"y":2.7,"z":0.4,"a":226.4,"b":-18.7,"g":-0.7000000000000001},{"time":72,"x":0,"y":2.6,"z":-1.1,"a":226.4,"b":-18.7,"g":-0.7000000000000001},{"time":76,"x":0,"y":2.6,"z":-1.1,"a":226.4,"b":-18.7,"g":-0.7000000000000001},{"time":80,"x":0,"y":2.6,"z":-1.1,"a":226.4,"b":-18.7,"g":-0.7000000000000001},{"time":84,"x":0,"y":2.6,"z":-1.1,"a":226.5,"b":-18.7,"g":-0.9},{"time":88,"x":-0.1,"y":3.4000000000000004,"z":0.5,"a":226.5,"b":-18.7,"g":-0.9},{"time":92,"x":-0.1,"y":3.4000000000000004,"z":0.5,"a":226.5,"b":-18.7,"g":-0.9},{"time":96,"x":-0.1,"y":3.4000000000000004,"z":0.5,"a":226.5,"b":-18.7,"g":-0.9},{"time":100,"x":-0.1,"y":3.4000000000000004,"z":0.5,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":104,"x":-0.1,"y":2.9000000000000004,"z":1,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":108,"x":-0.1,"y":2.9000000000000004,"z":1,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":112,"x":-0.1,"y":2.9000000000000004,"z":1,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":116,"x":-0.1,"y":2.9000000000000004,"z":1,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":120,"x":0.2,"y":1.8,"z":0,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":124,"x":0.2,"y":1.8,"z":0,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":128,"x":0.2,"y":1.8,"z":0,"a":224.70000000000002,"b":-15.9,"g":-1.1},{"time":132,"x":0.2,"y":1.8,"z":0,"a":223.3,"b":-13.5,"g":-1.1},{"time":136,"x":-0.1,"y":1.1,"z":-0.6000000000000001,"a":223.3,"b":-13.5,"g":-1.1},{"time":140,"x":-0.1,"y":1.1,"z":-0.6000000000000001,"a":223.3,"b":-13.5,"g":-1.1},{"time":144,"x":-0.1,"y":1.1,"z":-0.6000000000000001,"a":223.3,"b":-13.5,"g":-1.1},{"time":148,"x":-0.1,"y":1.1,"z":-0.6000000000000001,"a":220.9,"b":-8.8,"g":-1.3},{"time":152,"x":-0.1,"y":1.1,"z":-0.6000000000000001,"a":220.9,"b":-8.8,"g":-1.3},{"time":156,"x":0,"y":0.5,"z":-0.4,"a":220.9,"b":-8.8,"g":-1.3},{"time":160,"x":0,"y":0.5,"z":-0.4,"a":220.9,"b":-8.8,"g":-1.3},{"time":164,"x":0,"y":0.5,"z":-0.4,"a":220.9,"b":-8.8,"g":-1.3},{"time":168,"x":0,"y":0.5,"z":-0.4,"a":220.9,"b":-8.8,"g":-1.3},{"time":172,"x":0,"y":0.1,"z":-0.1,"a":220.9,"b":-8.8,"g":-1.3},{"time":176,"x":0,"y":0.1,"z":-0.1,"a":220.9,"b":-8.8,"g":-1.3},{"time":180,"x":0,"y":0.1,"z":-0.1,"a":220.9,"b":-8.8,"g":-1.3},{"time":184,"x":0,"y":0.1,"z":-0.1,"a":219,"b":-4.6000000000000005,"g":-1.5},{"time":188,"x":0,"y":0,"z":0,"a":219,"b":-4.6000000000000005,"g":-1.5},{"time":192,"x":0,"y":0,"z":0,"a":219,"b":-4.6000000000000005,"g":-1.5},{"time":196,"x":0,"y":0,"z":0,"a":219,"b":-4.6000000000000005,"g":-1.5},{"time":200,"x":0,"y":0,"z":0,"a":218.10000000000002,"b":-2.8000000000000003,"g":-1.6},{"time":204,"x":-0.1,"y":-0.2,"z":0,"a":218.10000000000002,"b":-2.8000000000000003,"g":-1.6},{"time":208,"x":-0.1,"y":-0.2,"z":0,"a":218.10000000000002,"b":-2.8000000000000003,"g":-1.6},{"time":212,"x":-0.1,"y":-0.2,"z":0,"a":218.10000000000002,"b":-2.8000000000000003,"g":-1.6},{"time":216,"x":-0.1,"y":-0.2,"z":0,"a":217.20000000000002,"b":-1.2000000000000002,"g":-1.6},{"time":220,"x":0,"y":0,"z":0,"a":217.20000000000002,"b":-1.2000000000000002,"g":-1.6},{"time":224,"x":0,"y":0,"z":0,"a":217.20000000000002,"b":-1.2000000000000002,"g":-1.6},{"time":228,"x":0,"y":0,"z":0,"a":217.20000000000002,"b":-1.2000000000000002,"g":-1.6},{"time":232,"x":0,"y":0,"z":0,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":236,"x":0.1,"y":0.30000000000000004,"z":0.1,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":240,"x":0.1,"y":0.30000000000000004,"z":0.1,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":244,"x":0.1,"y":0.30000000000000004,"z":0.1,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":248,"x":0.1,"y":0.30000000000000004,"z":0.1,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":252,"x":0.1,"y":0.30000000000000004,"z":0.1,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":256,"x":-0.6000000000000001,"y":1.2000000000000002,"z":-4.800000000000001,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":260,"x":-0.6000000000000001,"y":1.2000000000000002,"z":-4.800000000000001,"a":216.5,"b":0.6000000000000001,"g":-1.8},{"time":264,"x":-0.6000000000000001,"y":1.2000000000000002,"z":-4.800000000000001,"a":215.60000000000002,"b":2.5,"g":-1.9000000000000001},{"time":268,"x":-0.6000000000000001,"y":1.2000000000000002,"z":-4.800000000000001,"a":215.60000000000002,"b":2.5,"g":-1.9000000000000001},{"time":272,"x":1.1,"y":-1.3,"z":9.9,"a":215.60000000000002,"b":2.5,"g":-1.9000000000000001},{"time":276,"x":1.1,"y":-1.3,"z":9.9,"a":215.60000000000002,"b":2.5,"g":-1.9000000000000001},{"time":280,"x":1.1,"y":-1.3,"z":9.9,"a":215.60000000000002,"b":2.5,"g":-1.9000000000000001},{"time":284,"x":1.1,"y":-1.3,"z":9.9,"a":214.3,"b":5.300000000000001,"g":-2.1},{"time":288,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":214.3,"b":5.300000000000001,"g":-2.1},{"time":292,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":214.3,"b":5.300000000000001,"g":-2.1},{"time":296,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":214.3,"b":5.300000000000001,"g":-2.1},{"time":300,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":212.8,"b":8.700000000000001,"g":-1.6},{"time":304,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":212.8,"b":8.700000000000001,"g":-1.6},{"time":308,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":212.8,"b":8.700000000000001,"g":-1.6},{"time":312,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":212.8,"b":8.700000000000001,"g":-1.6},{"time":316,"x":-0.9,"y":-1.8,"z":-0.6000000000000001,"a":211.9,"b":13.200000000000001,"g":-1.7000000000000002},{"time":320,"x":1.2000000000000002,"y":-1.8,"z":-0.30000000000000004,"a":211.9,"b":13.200000000000001,"g":-1.7000000000000002},{"time":324,"x":1.2000000000000002,"y":-1.8,"z":-0.30000000000000004,"a":211.9,"b":13.200000000000001,"g":-1.7000000000000002},{"time":328,"x":1.2000000000000002,"y":-1.8,"z":-0.30000000000000004,"a":211.9,"b":13.200000000000001,"g":-1.7000000000000002},{"time":332,"x":1.2000000000000002,"y":-1.8,"z":-0.30000000000000004,"a":211.9,"b":14.200000000000001,"g":-2.4000000000000004},{"time":336,"x":0,"y":-3.5,"z":0.5,"a":211.9,"b":14.200000000000001,"g":-2.4000000000000004},{"time":340,"x":0,"y":-3.5,"z":0.5,"a":211.9,"b":14.200000000000001,"g":-2.4000000000000004},{"time":344,"x":0,"y":-3.5,"z":0.5,"a":211.9,"b":14.200000000000001,"g":-2.4000000000000004},{"time":348,"x":0,"y":-3.5,"z":0.5,"a":211.70000000000002,"b":14,"g":-2.6},{"time":352,"x":0,"y":-3.5,"z":0.5,"a":211.70000000000002,"b":14,"g":-2.6},{"time":356,"x":-1.4000000000000001,"y":-1.9000000000000001,"z":-2.5,"a":211.70000000000002,"b":14,"g":-2.6},{"time":360,"x":-1.4000000000000001,"y":-1.9000000000000001,"z":-2.5,"a":211.70000000000002,"b":14,"g":-2.6},{"time":364,"x":-1.4000000000000001,"y":-1.9000000000000001,"z":-2.5,"a":211.9,"b":12.3,"g":-2.7},{"time":368,"x":-1.4000000000000001,"y":-1.9000000000000001,"z":-2.5,"a":211.9,"b":12.3,"g":-2.7},{"time":372,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":12.3,"g":-2.7},{"time":376,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":12.3,"g":-2.7},{"time":380,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":12.3,"g":-2.7},{"time":384,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":11.4,"g":-2.7},{"time":388,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":11.4,"g":-2.7},{"time":392,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":11.4,"g":-2.7},{"time":396,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.9,"b":11.4,"g":-2.7},{"time":400,"x":0.7000000000000001,"y":-1,"z":1.6,"a":211.60000000000002,"b":10.8,"g":-2.5},{"time":404,"x":-0.8,"y":-0.30000000000000004,"z":-0.1,"a":211.60000000000002,"b":10.8,"g":-2.5},{"time":408,"x":-0.8,"y":-0.30000000000000004,"z":-0.1,"a":211.60000000000002,"b":10.8,"g":-2.5},{"time":412,"x":-0.8,"y":-0.30000000000000004,"z":-0.1,"a":211.60000000000002,"b":10.8,"g":-2.5},{"time":416,"x":-0.8,"y":-0.30000000000000004,"z":-0.1,"a":211.70000000000002,"b":9.700000000000001,"g":-2.6},{"time":420,"x":0.1,"y":0.2,"z":0,"a":211.70000000000002,"b":9.700000000000001,"g":-2.6},{"time":424,"x":0.1,"y":0.2,"z":0,"a":211.70000000000002,"b":9.700000000000001,"g":-2.6},{"time":428,"x":0.1,"y":0.2,"z":0,"a":211.70000000000002,"b":9.700000000000001,"g":-2.6},{"time":432,"x":0.1,"y":0.2,"z":0,"a":211.5,"b":9.200000000000001,"g":-2.4000000000000004},{"time":436,"x":0.1,"y":0.2,"z":0,"a":211.5,"b":9.200000000000001,"g":-2.4000000000000004},{"time":440,"x":0.1,"y":0.2,"z":0,"a":211.5,"b":9.200000000000001,"g":-2.4000000000000004},{"time":444,"x":0.1,"y":0.2,"z":0,"a":211.5,"b":9.200000000000001,"g":-2.4000000000000004},{"time":448,"x":0.1,"y":0.2,"z":0,"a":211.4,"b":8.8,"g":-2.2},{"time":452,"x":0.1,"y":0.2,"z":0,"a":211.4,"b":8.8,"g":-2.2},{"time":456,"x":0,"y":0.1,"z":-0.1,"a":211.4,"b":8.8,"g":-2.2},{"time":460,"x":0,"y":0.1,"z":-0.1,"a":211.4,"b":8.8,"g":-2.2},{"time":464,"x":0,"y":0.1,"z":-0.1,"a":211.4,"b":8.3,"g":-2.1},{"time":468,"x":0,"y":0.1,"z":-0.1,"a":211.4,"b":8.3,"g":-2.1},{"time":472,"x":0,"y":0,"z":0,"a":211.4,"b":8.3,"g":-2.1},{"time":476,"x":0,"y":0,"z":0,"a":211.4,"b":8.3,"g":-2.1},{"time":480,"x":0,"y":0,"z":0,"a":211.4,"b":8.3,"g":-2.1},{"time":484,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.9,"g":-2.1},{"time":488,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.9,"g":-2.1},{"time":492,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.9,"g":-2.1},{"time":496,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.9,"g":-2.1},{"time":500,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.5,"g":-2},{"time":504,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.5,"g":-2},{"time":508,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.5,"g":-2},{"time":512,"x":0,"y":0,"z":0,"a":211.20000000000002,"b":7.5,"g":-2},{"time":516,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":7.2,"g":-2},{"time":520,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":7.2,"g":-2},{"time":524,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":7.2,"g":-2},{"time":528,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":7.2,"g":-2},{"time":532,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.800000000000001,"g":-2},{"time":536,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.800000000000001,"g":-2},{"time":540,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.800000000000001,"g":-2},{"time":544,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.800000000000001,"g":-2},{"time":548,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.5,"g":-1.9000000000000001},{"time":552,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.5,"g":-1.9000000000000001},{"time":556,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.5,"g":-1.9000000000000001},{"time":560,"x":0,"y":0,"z":0,"a":211.10000000000002,"b":6.5,"g":-1.9000000000000001},{"time":564,"x":0,"y":0,"z":0,"a":211,"b":6.2,"g":-1.9000000000000001},{"time":568,"x":0,"y":0,"z":0,"a":211,"b":6.2,"g":-1.9000000000000001},{"time":572,"x":0,"y":0,"z":0,"a":211,"b":6.2,"g":-1.9000000000000001},{"time":576,"x":0,"y":0,"z":0,"a":211,"b":6.2,"g":-1.9000000000000001},{"time":580,"x":0,"y":0,"z":0,"a":211,"b":6.2,"g":-1.9000000000000001},{"time":584,"x":0,"y":0,"z":0,"a":211,"b":5.9,"g":-1.9000000000000001},{"time":588,"x":0,"y":0,"z":0,"a":211,"b":5.9,"g":-1.9000000000000001},{"time":592,"x":0,"y":0,"z":0,"a":211,"b":5.9,"g":-1.9000000000000001},{"time":596,"x":0,"y":0,"z":0,"a":211,"b":5.9,"g":-1.9000000000000001},{"time":600,"x":0,"y":0,"z":0,"a":211,"b":5.6000000000000005,"g":-1.8},{"time":604,"x":0,"y":0,"z":0,"a":211,"b":5.6000000000000005,"g":-1.8},{"time":608,"x":0,"y":0,"z":0,"a":211,"b":5.6000000000000005,"g":-1.8},{"time":612,"x":0,"y":0,"z":0,"a":211,"b":5.6000000000000005,"g":-1.8},{"time":616,"x":0,"y":0,"z":0,"a":210.9,"b":5.300000000000001,"g":-1.8},{"time":620,"x":0,"y":0,"z":0,"a":210.9,"b":5.300000000000001,"g":-1.8},{"time":624,"x":0,"y":0,"z":0,"a":210.9,"b":5.300000000000001,"g":-1.8},{"time":628,"x":0,"y":0,"z":0,"a":210.9,"b":5.300000000000001,"g":-1.8},{"time":632,"x":0,"y":0,"z":0,"a":210.9,"b":5.1000000000000005,"g":-1.8},{"time":636,"x":0,"y":0,"z":0,"a":210.9,"b":5.1000000000000005,"g":-1.8},{"time":640,"x":0,"y":0,"z":0,"a":210.9,"b":5.1000000000000005,"g":-1.8},{"time":644,"x":0,"y":0,"z":0,"a":210.9,"b":5.1000000000000005,"g":-1.8},{"time":648,"x":0,"y":0,"z":0,"a":211,"b":4.9,"g":-1.8},{"time":652,"x":0,"y":0,"z":0,"a":211,"b":4.9,"g":-1.8},{"time":656,"x":0,"y":0,"z":0,"a":211,"b":4.9,"g":-1.8},{"time":660,"x":0,"y":0,"z":0,"a":211,"b":4.9,"g":-1.8},{"time":664,"x":0,"y":0,"z":0,"a":211,"b":4.6000000000000005,"g":-1.7000000000000002},{"time":668,"x":0,"y":0,"z":0,"a":211,"b":4.6000000000000005,"g":-1.7000000000000002},{"time":672,"x":0,"y":0,"z":0,"a":211,"b":4.6000000000000005,"g":-1.7000000000000002},{"time":676,"x":0,"y":0,"z":0,"a":211,"b":4.6000000000000005,"g":-1.7000000000000002},{"time":680,"x":0,"y":0,"z":0,"a":211,"b":4.6000000000000005,"g":-1.7000000000000002},{"time":684,"x":0,"y":0,"z":0,"a":210.9,"b":4.4,"g":-1.7000000000000002},{"time":688,"x":0,"y":0,"z":0,"a":210.9,"b":4.4,"g":-1.7000000000000002},{"time":692,"x":0,"y":0,"z":0,"a":210.9,"b":4.4,"g":-1.7000000000000002},{"time":696,"x":0,"y":0,"z":0,"a":210.9,"b":4.4,"g":-1.7000000000000002},{"time":700,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":704,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":708,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":712,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":716,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":720,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":724,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":728,"x":0,"y":0,"z":0,"a":211,"b":4.2,"g":-1.7000000000000002},{"time":732,"x":0,"y":0,"z":0,"a":211,"b":3.9000000000000004,"g":-1.7000000000000002},{"time":736,"x":0,"y":0,"z":0,"a":211,"b":3.9000000000000004,"g":-1.7000000000000002},{"time":740,"x":0,"y":0,"z":0,"a":211,"b":3.9000000000000004,"g":-1.7000000000000002},{"time":744,"x":0,"y":0,"z":0,"a":211,"b":3.9000000000000004,"g":-1.7000000000000002},{"time":748,"x":0,"y":0,"z":0,"a":211,"b":3.7,"g":-1.7000000000000002},{"time":752,"x":0,"y":0,"z":0,"a":211,"b":3.7,"g":-1.7000000000000002},{"time":756,"x":0,"y":0,"z":0,"a":211,"b":3.7,"g":-1.7000000000000002},{"time":760,"x":0,"y":0,"z":0,"a":211,"b":3.7,"g":-1.7000000000000002},{"time":764,"x":0,"y":0,"z":0,"a":211,"b":3.6,"g":-1.6},{"time":768,"x":0,"y":0,"z":0,"a":211,"b":3.6,"g":-1.6},{"time":772,"x":0,"y":0,"z":0,"a":211,"b":3.6,"g":-1.6},{"time":776,"x":0,"y":0,"z":0,"a":211,"b":3.6,"g":-1.6},{"time":780,"x":0,"y":0,"z":0,"a":211,"b":3.6,"g":-1.6},{"time":784,"x":0,"y":0,"z":0,"a":211,"b":3.4000000000000004,"g":-1.6},{"time":788,"x":0,"y":0,"z":0,"a":211,"b":3.4000000000000004,"g":-1.6},{"time":792,"x":0,"y":0,"z":0,"a":211,"b":3.4000000000000004,"g":-1.6},{"time":796,"x":0,"y":0,"z":0,"a":211,"b":3.4000000000000004,"g":-1.6},{"time":800,"x":0,"y":0,"z":0,"a":211,"b":3.3000000000000003,"g":-1.6},{"time":804,"x":0,"y":0,"z":0,"a":211,"b":3.3000000000000003,"g":-1.6},{"time":808,"x":0,"y":0,"z":0,"a":211,"b":3.3000000000000003,"g":-1.6},{"time":812,"x":0,"y":0,"z":0,"a":211,"b":3.3000000000000003,"g":-1.6},{"time":816,"x":0,"y":0,"z":0,"a":211,"b":3.1,"g":-1.6},{"time":820,"x":0.1,"y":0.1,"z":0,"a":211,"b":3.1,"g":-1.6},{"time":824,"x":0.1,"y":0.1,"z":0,"a":211,"b":3.1,"g":-1.6},{"time":828,"x":0.1,"y":0.1,"z":0,"a":211,"b":3.1,"g":-1.6},{"time":832,"x":0.1,"y":0.1,"z":0,"a":211,"b":3,"g":-1.6},{"time":836,"x":0,"y":0,"z":0,"a":211,"b":3,"g":-1.6},{"time":840,"x":0,"y":0,"z":0,"a":211,"b":3,"g":-1.6},{"time":844,"x":0,"y":0,"z":0,"a":211,"b":3,"g":-1.6},{"time":848,"x":0,"y":0,"z":0,"a":211,"b":3,"g":-1.6},{"time":852,"x":0,"y":0,"z":0,"a":211,"b":3,"g":-1.6},{"time":856,"x":-0.30000000000000004,"y":-0.1,"z":-0.2,"a":211,"b":3,"g":-1.6},{"time":860,"x":-0.30000000000000004,"y":-0.1,"z":-0.2,"a":211,"b":3,"g":-1.6},{"time":864,"x":-0.30000000000000004,"y":-0.1,"z":-0.2,"a":210.9,"b":2.8000000000000003,"g":-1.6},{"time":868,"x":-0.30000000000000004,"y":-0.1,"z":-0.2,"a":210.9,"b":2.8000000000000003,"g":-1.6},{"time":872,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.8000000000000003,"g":-1.6},{"time":876,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.8000000000000003,"g":-1.6},{"time":880,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.8000000000000003,"g":-1.6},{"time":884,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.6,"g":-1.5},{"time":888,"x":0.1,"y":0,"z":0.5,"a":210.9,"b":2.6,"g":-1.5},{"time":892,"x":0.1,"y":0,"z":0.5,"a":210.9,"b":2.6,"g":-1.5},{"time":896,"x":0.1,"y":0,"z":0.5,"a":210.9,"b":2.6,"g":-1.5},{"time":900,"x":0.1,"y":0,"z":0.5,"a":210.9,"b":2.5,"g":-1.5},{"time":904,"x":0,"y":0.2,"z":-0.6000000000000001,"a":210.9,"b":2.5,"g":-1.5},{"time":908,"x":0,"y":0.2,"z":-0.6000000000000001,"a":210.9,"b":2.5,"g":-1.5},{"time":912,"x":0,"y":0.2,"z":-0.6000000000000001,"a":210.9,"b":2.5,"g":-1.5},{"time":916,"x":0,"y":0.2,"z":-0.6000000000000001,"a":210.9,"b":2.5,"g":-1.5},{"time":920,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.5,"g":-1.5},{"time":924,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.5,"g":-1.5},{"time":928,"x":0,"y":0,"z":0.1,"a":210.9,"b":2.5,"g":-1.5},{"time":932,"x":0,"y":0,"z":0.1,"a":210.8,"b":2.3000000000000003,"g":-1.5},{"time":936,"x":0.1,"y":0,"z":0.1,"a":210.8,"b":2.3000000000000003,"g":-1.5},{"time":940,"x":0.1,"y":0,"z":0.1,"a":210.8,"b":2.3000000000000003,"g":-1.5},{"time":944,"x":0.1,"y":0,"z":0.1,"a":210.8,"b":2.3000000000000003,"g":-1.5},{"time":948,"x":0.1,"y":0,"z":0.1,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":952,"x":0.1,"y":0,"z":0.1,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":956,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":960,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":964,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":968,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":972,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":976,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":980,"x":0,"y":0,"z":0,"a":210.70000000000002,"b":2.2,"g":-1.5},{"time":984,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":988,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":992,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":996,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1000,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1004,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1008,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1012,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1016,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1020,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1024,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1028,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1032,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1036,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1040,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1044,"x":0,"y":0,"z":0,"a":210.8,"b":2,"g":-1.4000000000000001},{"time":1048,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1052,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1056,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1060,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1064,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1068,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1072,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1076,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1080,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1084,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1088,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1092,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1096,"x":0,"y":0,"z":0,"a":210.8,"b":1.8,"g":-1.4000000000000001},{"time":1100,"x":0,"y":0,"z":0,"a":210.9,"b":1.6,"g":-1.4000000000000001},{"time":1104,"x":0,"y":0,"z":0,"a":210.9,"b":1.6,"g":-1.4000000000000001},{"time":1108,"x":0,"y":0,"z":0,"a":210.9,"b":1.6,"g":-1.4000000000000001},{"time":1112,"x":0,"y":0,"z":0,"a":210.9,"b":1.6,"g":-1.4000000000000001},{"time":1116,"x":0,"y":0,"z":0,"a":210.9,"b":1.6,"g":-1.4000000000000001}
]

	for (let i = 0; i < shujv.length; i++) {
	var x= shujv[i].time/10
	var y=shujv[i].y
	xjdian(x,y)
}

}
function C(r){
	function a(n,i,r){
		return i*Math.pow(r,n-1)
	}

var cc=0
var jj=[]
i=1/3
	//for (let i = 0; i < 1; i+=0.01) {
		var c=s(i)
		var j=[]
		for (let n = 1; n < 30; n++) {
			//console.log(a(n,i,r))
			var c1=s(a(n,i,r))
			if (c1<c) {
				c=c1
				var j=[n,i]
			}
		}
		console.log([c,j])
		if (cc<c) {
			cc=c
			var jj=j
		}
	//}
	return [cc,jj]
}
function s(x) {
	var s1=x-Math.floor(x)
	var s2=1+Math.floor(x)-x
	if (s1<=s2) {
		return s1
	}else{
		return s2
	}
}*/

function sousuo(a) {
	//3*4

	/*
	var r=[
		[1,2,3],[2,1,3],[3,2,1],
		[4,2,3],[5,2,3],[6,2,3],
		[7,2,3],[8,2,3],[9,2,3],
		[10,2,3],[11,2,3],[12,2,3]
	]*/

	var r = [
		{ a: 1 }, { a: 2 }, { a: 3 },
		{ a: 4 }, { a: 5 }, { a: 6 },
		{ a: 7 }, { a: 8 }, { a: 9 },
		{ a: 10 }, { a: 11 }, { a: 12 }
	]



	/*
	for (let i = 1; i <= 12; i++) {
		for (let j = 1; j <= 12; j++) {
			for (let k = 1; k <= 12; k++) {
				if (j==k||k==i) {
					
				}else{
					r[k]=[i,j]
				}
			}
			console.log(r)
		}
	}*/



	let func = (arr) => {
		let len = arr.length
		let res = [] // 所有排列结果
		/**
		 * 【全排列算法】
		 * 说明：arrange用来对arr中的元素进行排列组合，将排列好的各个结果存在新数组中
		 * @param tempArr：排列好的元素
		 * @param leftArr：待排列元素
		 */
		let arrange = (tempArr, leftArr) => {
			if (tempArr.length === len) { // 这里就是递归结束的地方
				// res.push(tempArr) // 得到全排列的每个元素都是数组
				res.push(tempArr) // 得到全排列的每个元素都是字符串
			} else {
				leftArr.forEach((item, index) => {
					let temp = [].concat(leftArr)
					temp.splice(index, 1)
					// 此时，第一个参数是当前分离出的元素所在数组；第二个参数temp是传入的leftArr去掉第一个后的结果
					arrange(tempArr.concat(item), temp) // 这里使用了递归
				})
			}
		}
		arrange([], arr)
		return res
	}

	console.log(func(r))
}



/*
function bilibili_auto_like(){
	if (document.getElementsByClassName('video-like video-toolbar-left-item on').length==0) {
		document.getElementsByClassName('video-like video-toolbar-left-item')[0].click()
	}
	setTimeout(() => {
		bilibili_auto_like()
	}, 500);
}
bilibili_auto_like()
*/


function meijvgaolian() {
	var a = [0, 1, 2, 3]
	var r = []
	function scpailie() {
		for (let i = 0; i < a.length; i++) {
			for (let j = 0; j < a.length; j++) {
				for (let k = 0; k < a.length; k++) {
					for (let l = 0; l < a.length; l++) {
						for (let m = 0; m < a.length; m++) {
							for (let n = 0; n < a.length; n++) {
								r.push([a[i], a[j], a[k], a[l], a[m], a[n]])
							}
						}
					}
				}
			}
		}
	}
	scpailie()
	console.log(r)
	var q = []
	for (let i = 0; i < r.length; i++) {
		if (ishege(r[i])) {
			q.push(r[i])
		}
	}
	console.log(q)
	function ishege(a) {
		if (a[a.length - 1] == a[0]) {
			return false
		}
		for (let i = 0; i < a.length - 1; i++) {
			if (a[i] == a[i + 1]) {
				return false
			}
		}
		return true
	}
	//4 6 12 84 240 732
}
var s1 = ''
function qjywdc() {
	var szdc = []

	for (let i = 0; i < abc.length; i++) {

		for (let j = 0; j < abc.length; j++) {

			for (let k = 0; k < abc.length; k++) {

				for (let l = 0; l < abc.length; l++) {
					szdc.push(
						abc[i] + abc[j] + abc[k] + abc[l])
					s1 = s1 + abc[i] + abc[j] + abc[k] + abc[l]

				}
			}
		}
	}

	return s1
}
// 检查浏览器是否支持气压传感器API
/*
if ('Barometer' in window) {
	try {
		// 创建气压传感器实例，设置频率为每秒1次
		const barometer = new Barometer({ frequency: 1 });
		alert('1')
		// 监听数据变化
		barometer.addEventListener('reading', () => {
			tip(`当前气压: ${barometer.pressure} kPa`);
			// 可选：转换为百帕(hPa) 1 kPa = 10 hPa
			const pressureHpa = barometer.pressure * 10;
			console.log(`转换后气压: ${pressureHpa} hPa`);
		});

		// 处理错误事件
		barometer.addEventListener('error', (error) => {
			console.error(`传感器错误: ${error.message}`);
		});

		// 启动传感器
		barometer.start();

	} catch (error) {
		console.error('无法访问气压传感器:', error);
	}
} else {
	console.warn('您的浏览器不支持气压传感器接口(Barometer)');
}


*/




var benchmarkState = {
	running: false,
	storageKey: 'azhshb_benchmark_history_v3',
	maxHistory: 30,
	/* 每项基准值对应 1000 分；综合分使用加权几何平均，避免单项掩盖短板。 */
	baseline: {
		calculation: 8000000,
		expression: 45000,
		drawing: 2000000,
		storage: 100000
	}
}

function benchmarkI18n() {
	var english = typeof zdyset != 'undefined' && zdyset[36] == 'en'
	return english ? {
		title: 'Performance benchmark',
		subtitle: 'Calculation, expression, Canvas and browser storage performance test',
		overall: 'Overall score',
		idle: 'Not benchmarked yet',
		ready: 'Last result loaded',
		preparing: 'Preparing…',
		calculation: 'Numeric calculation',
		expression: 'Expression parsing',
		drawing: 'Canvas drawing',
		storage: 'Browser storage',
		testingCalculation: 'Testing numeric calculation…',
		testingExpression: 'Testing expression parsing…',
		testingDrawing: 'Testing Canvas drawing…',
		testingStorage: 'Testing localStorage reads and writes…',
		finishing: 'Calculating and saving score…',
		complete: 'Completed in {time} s · saved locally',
		failed: 'Benchmark failed: ',
		history: 'Score history',
		localOnly: 'Results are stored on this device only',
		noHistory: 'No benchmark history',
		runs: '{count} saved runs · latest {date}',
		start: 'Start benchmark',
		again: 'Run again',
		export: 'Export results',
		clear: 'Clear history',
		confirmClear: 'Clear all locally saved benchmark results?',
		cleared: 'Benchmark history cleared',
		nothingToExport: 'There are no benchmark results to export.',
		exported: 'Benchmark results exported',
		note: 'Baseline score is 1000; keep this page in the foreground while running.',
		millionPerSecond: '{value}M iterations/s',
		perSecond: '{value} evals/s',
		tenThousandPerSecond: '{value}0K segments/s',
		storagePerSecond: 'R {read}K / W {write}K ops/s',
		scoreSuffix: ' pts'
	} : {
		title: '性能跑分',
		subtitle: '综合测试计算、表达式、Canvas 与浏览器存储性能',
		overall: '综合得分',
		idle: '尚未跑分',
		ready: '已载入最近一次结果',
		preparing: '正在准备…',
		calculation: '数值计算',
		expression: '表达式解析',
		drawing: 'Canvas 绘制',
		storage: '浏览器存储',
		testingCalculation: '正在测试数值计算…',
		testingExpression: '正在测试表达式解析…',
		testingDrawing: '正在测试 Canvas 绘制…',
		testingStorage: '正在测试 localStorage 读写…',
		finishing: '正在计算并保存得分…',
		complete: '用时 {time} 秒 · 结果已保存到本机',
		failed: '跑分失败：',
		history: '得分历史趋势',
		localOnly: '结果仅存储在本机',
		noHistory: '暂无跑分历史',
		runs: '已保存 {count} 次 · 最近 {date}',
		start: '开始跑分',
		again: '再次跑分',
		export: '导出结果',
		clear: '清空历史',
		confirmClear: '确定清空保存在本机的全部跑分结果？',
		cleared: '跑分历史已清空',
		nothingToExport: '暂无可导出的跑分结果。',
		exported: '跑分结果已导出',
		note: '基准得分为 1000；跑分时请保持当前页面在前台。',
		millionPerSecond: '{value} 百万次/秒',
		perSecond: '{value} 次/秒',
		tenThousandPerSecond: '{value} 万线段/秒',
		storagePerSecond: '读 {read}K / 写 {write}K 次/秒',
		scoreSuffix: ' 分'
	}
}

function benchmarkFormat(text, values) {
	return String(text).replace(/\{(\w+)\}/g, function (_, key) {
		return values[key] == undefined ? '' : values[key]
	})
}

function benchmarkNow() {
	return window.performance && performance.now ? performance.now() : new Date().getTime()
}

function benchmarkNextPaint() {
	return new Promise(function (resolve) {
		var next = window.requestAnimationFrame || function (callback) { return setTimeout(callback, 16) }
		next(function () { setTimeout(resolve, 0) })
	})
}

function readBenchmarkHistory() {
	try {
		var history = JSON.parse(localStorage.getItem(benchmarkState.storageKey) || '[]')
		if (!Array.isArray(history)) return []
		return history.filter(function (item) {
			return item && isFinite(Number(item.score)) && item.createdAt
		}).slice(-benchmarkState.maxHistory)
	} catch (error) {
		console.warn('无法读取跑分历史:', error)
		return []
	}
}

function saveBenchmarkResult(result) {
	var history = readBenchmarkHistory()
	history.push(result)
	history = history.slice(-benchmarkState.maxHistory)
	try {
		localStorage.setItem(benchmarkState.storageKey, JSON.stringify(history))
	} catch (error) {
		console.warn('无法保存跑分历史:', error)
		throw error
	}
	return history
}

function setBenchmarkProgress(percent, status) {
	var bar = document.getElementById('benchmark-progress-bar')
	var statusElement = document.getElementById('benchmark-status')
	if (bar) bar.style.width = Math.max(0, Math.min(100, percent)) + '%'
	if (statusElement && status) statusElement.innerHTML = status
}

function benchmarkMeasure(batch, minimumDuration) {
	var started = benchmarkNow()
	var elapsed = 0
	var units = 0
	var checksum = 0
	do {
		var batchResult = batch()
		units += batchResult.units
		checksum += Number(batchResult.checksum) || 0
		elapsed = benchmarkNow() - started
	} while (elapsed < minimumDuration)
	return {
		rate: units / (elapsed / 1000),
		durationMs: elapsed,
		units: units,
		checksum: checksum
	}
}

function benchmarkCalculationStage() {
	var seed = 1.23456789
	return benchmarkMeasure(function () {
		var value = seed
		for (var i = 0; i < 10000; i++) {
			value = (value * 1.000000119 + i % 97) / 1.000003
			value = Math.sqrt(Math.abs(value)) + Math.sin(value) * .25 + .5
		}
		seed = value
		return { units: 10000, checksum: value }
	}, 360)
}

function benchmarkExpressionStage() {
	var expressions = [
		'((1.25+2.5)*3.75)/(4.5+1)',
		'(3.5^2+4.5^2)^(1/2)',
		'(12.75/3.4)+(8.2*1.6)-2.1',
		'((9.1+3.7)/(2.2+1.3))^2',
		'(1.2+2.3+3.4+4.5)/(5.6+0.7)',
		'((7.25*8.5)-(3.75*2.1))/4.2'
	]
	var index = 0
	var evaluator = typeof z_jxs_l_for_azhs == 'function' ? z_jxs_l_for_azhs : jxs_l_for_azhs
	return benchmarkMeasure(function () {
		var checksum = 0
		for (var i = 0; i < 20; i++) {
			checksum += Number(evaluator(expressions[index++ % expressions.length])) || 0
		}
		return { units: 20, checksum: checksum }
	}, 360)
}

function benchmarkDrawingStage() {
	var canvas = document.getElementById('benchmark-draw-surface')
	var context = canvas && canvas.getContext ? canvas.getContext('2d') : null
	if (!context) throw new Error('Canvas 2D is unavailable')
	var phase = 0
	context.clearRect(0, 0, canvas.width, canvas.height)
	context.lineWidth = 1
	context.strokeStyle = '#7c0a21'
	return benchmarkMeasure(function () {
		context.beginPath()
		for (var i = 0; i < 2000; i++) {
			var x = (i * 13 + phase) % canvas.width
			var y = canvas.height / 2 + Math.sin((i + phase) * .035) * canvas.height * .42
			if (i % 40 == 0) context.moveTo(x, y)
			else context.lineTo(x, y)
		}
		context.stroke()
		phase = (phase + 17) % canvas.width
		return { units: 2000, checksum: phase }
	}, 360)
}

function benchmarkStorageStage() {
	/* 使用唯一临时键，避免覆盖应用或用户已有的 localStorage 数据。 */
	var key = '__azhshb_benchmark_probe_' + new Date().getTime() + '_' + Math.random().toString(36).slice(2)
	var payloadBase = new Array(1025).join('a')
	var writeResult
	var readResult
	try {
		writeResult = benchmarkMeasure(function () {
			var checksum = 0
			for (var i = 0; i < 50; i++) {
				var payload = payloadBase + String(i)
				localStorage.setItem(key, payload)
				checksum += payload.length
			}
			return { units: 50, checksum: checksum }
		}, 260)

		readResult = benchmarkMeasure(function () {
			var checksum = 0
			for (var i = 0; i < 100; i++) {
				var value = localStorage.getItem(key)
				checksum += value ? value.length : 0
			}
			return { units: 100, checksum: checksum }
		}, 260)
	} finally {
		try { localStorage.removeItem(key) } catch (cleanupError) {
			console.warn('无法清理跑分临时存储:', cleanupError)
		}
	}
	return {
		rate: Math.sqrt(writeResult.rate * readResult.rate),
		readRate: readResult.rate,
		writeRate: writeResult.rate,
		durationMs: writeResult.durationMs + readResult.durationMs,
		units: writeResult.units + readResult.units,
		checksum: writeResult.checksum + readResult.checksum
	}
}

function benchmarkComponentScore(rate, baseline) {
	return Math.max(1, Math.round(1000 * rate / baseline))
}

function calculateBenchmarkScore(stages) {
	var calculationRatio = Math.max(stages.calculation.rate / benchmarkState.baseline.calculation, .001)
	var expressionRatio = Math.max(stages.expression.rate / benchmarkState.baseline.expression, .001)
	var drawingRatio = Math.max(stages.drawing.rate / benchmarkState.baseline.drawing, .001)
	var storageRatio = Math.max(stages.storage.rate / benchmarkState.baseline.storage, .001)
	return Math.round(1000 * Math.pow(calculationRatio, .3) * Math.pow(expressionRatio, .25) * Math.pow(drawingRatio, .2) * Math.pow(storageRatio, .25))
}

function formatBenchmarkRate(type, rate) {
	var text = benchmarkI18n()
	if (type == 'calculation') {
		return benchmarkFormat(text.millionPerSecond, { value: (rate / 1000000).toFixed(2) })
	}
	if (type == 'drawing') {
		return benchmarkFormat(text.tenThousandPerSecond, { value: (rate / 10000).toFixed(1) })
	}
	return benchmarkFormat(text.perSecond, { value: Math.round(rate).toLocaleString() })
}

function showBenchmarkResult(result, fromHistory) {
	if (!result || !result.stages) return
	var text = benchmarkI18n()
	document.getElementById('benchmark-score').innerHTML = Math.round(result.score).toLocaleString()
	;['calculation', 'expression', 'drawing', 'storage'].forEach(function (type) {
		var stage = result.stages[type]
		if (!stage) return
		document.getElementById('benchmark-' + type + '-value').innerHTML = Math.round(stage.score).toLocaleString() + text.scoreSuffix
		if (type == 'storage') {
			document.getElementById('benchmark-storage-rate').innerHTML = benchmarkFormat(text.storagePerSecond, {
				read: (stage.readRate / 1000).toFixed(1),
				write: (stage.writeRate / 1000).toFixed(1)
			})
		} else {
			document.getElementById('benchmark-' + type + '-rate').innerHTML = formatBenchmarkRate(type, stage.rate)
		}
	})
	document.getElementById('benchmark-run').value = text.again
	if (fromHistory) setBenchmarkProgress(100, text.ready)
}

function applyBenchmarkLanguage() {
	var text = benchmarkI18n()
	var labels = {
		'benchmark-title': text.title,
		'benchmark-subtitle': text.subtitle,
		'benchmark-score-label': text.overall,
		'benchmark-calculation-label': text.calculation,
		'benchmark-expression-label': text.expression,
		'benchmark-drawing-label': text.drawing,
		'benchmark-storage-label': text.storage,
		'benchmark-history-title': text.history,
		'benchmark-export': text.export,
		'benchmark-clear': text.clear,
		'benchmark-note': text.note
	}
	Object.keys(labels).forEach(function (id) {
		var element = document.getElementById(id)
		if (!element) return
		if (element.tagName == 'INPUT') element.value = labels[id]
		else element.innerHTML = labels[id]
	})
}

function formatBenchmarkDate(dateValue) {
	var date = new Date(dateValue)
	if (isNaN(date.getTime())) return '--'
	try {
		return date.toLocaleString(typeof zdyset != 'undefined' && zdyset[36] == 'en' ? 'en' : 'zh-CN', {
			month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit'
		})
	} catch (error) {
		return date.toLocaleString()
	}
}

function drawBenchmarkHistory(history) {
	var canvas = document.getElementById('benchmark-history-chart')
	if (!canvas || !canvas.getContext) return
	var width = canvas.clientWidth || 620
	var height = canvas.clientHeight || 185
	var pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
	canvas.width = Math.round(width * pixelRatio)
	canvas.height = Math.round(height * pixelRatio)
	var context = canvas.getContext('2d')
	context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
	context.clearRect(0, 0, width, height)
	var styles = getComputedStyle(document.documentElement)
	var accent = styles.getPropertyValue('--bjsdfz').trim() || '#7c0a21'
	var textColor = styles.getPropertyValue('--wzys').trim() || '#222'
	var text = benchmarkI18n()
	var values = history.slice(-20)
	if (!values.length) {
		context.fillStyle = textColor
		context.globalAlpha = .55
		context.font = '14px sans-serif'
		context.textAlign = 'center'
		context.fillText(text.noHistory, width / 2, height / 2)
		context.globalAlpha = 1
		document.getElementById('benchmark-history-meta').innerHTML = text.localOnly
		return
	}

	var scores = values.map(function (item) { return Number(item.score) })
	var minimum = Math.min.apply(null, scores)
	var maximum = Math.max.apply(null, scores)
	var padding = Math.max((maximum - minimum) * .18, maximum * .08, 10)
	minimum = Math.max(0, minimum - padding)
	maximum += padding
	var left = 46
	var right = width - 16
	var top = 18
	var bottom = height - 30
	var range = maximum - minimum || 1

	context.font = '11px sans-serif'
	context.strokeStyle = textColor
	context.fillStyle = textColor
	context.globalAlpha = .18
	for (var line = 0; line < 4; line++) {
		var gridY = top + (bottom - top) * line / 3
		context.beginPath()
		context.moveTo(left, gridY)
		context.lineTo(right, gridY)
		context.stroke()
		context.globalAlpha = .6
		context.textAlign = 'right'
		context.fillText(Math.round(maximum - range * line / 3), left - 7, gridY + 4)
		context.globalAlpha = .18
	}

	function pointX(index) {
		return values.length == 1 ? (left + right) / 2 : left + (right - left) * index / (values.length - 1)
	}
	function pointY(score) {
		return bottom - (score - minimum) / range * (bottom - top)
	}

	var gradient = context.createLinearGradient(0, top, 0, bottom)
	gradient.addColorStop(0, accent)
	gradient.addColorStop(1, 'rgba(0,0,0,0)')
	context.beginPath()
	context.moveTo(pointX(0), bottom)
	values.forEach(function (item, index) { context.lineTo(pointX(index), pointY(item.score)) })
	context.lineTo(pointX(values.length - 1), bottom)
	context.closePath()
	context.globalAlpha = .18
	context.fillStyle = gradient
	context.fill()

	context.beginPath()
	values.forEach(function (item, index) {
		var x = pointX(index)
		var y = pointY(item.score)
		if (index == 0) context.moveTo(x, y)
		else context.lineTo(x, y)
	})
	context.globalAlpha = 1
	context.lineWidth = 2
	context.strokeStyle = accent
	context.stroke()
	values.forEach(function (item, index) {
		context.beginPath()
		context.arc(pointX(index), pointY(item.score), index == values.length - 1 ? 4 : 2.5, 0, Math.PI * 2)
		context.fillStyle = accent
		context.fill()
	})

	context.fillStyle = textColor
	context.globalAlpha = .65
	context.font = '11px sans-serif'
	if (values.length == 1) {
		context.textAlign = 'center'
		context.fillText(formatBenchmarkDate(values[0].createdAt), (left + right) / 2, height - 10)
	} else {
		context.textAlign = 'left'
		context.fillText(formatBenchmarkDate(values[0].createdAt), left, height - 10)
		context.textAlign = 'right'
		context.fillText(formatBenchmarkDate(values[values.length - 1].createdAt), right, height - 10)
	}
	context.globalAlpha = 1
	document.getElementById('benchmark-history-meta').innerHTML = benchmarkFormat(text.runs, {
		count: history.length,
		date: formatBenchmarkDate(history[history.length - 1].createdAt)
	})
}

function renderBenchmarkHistory() {
	var history = readBenchmarkHistory()
	drawBenchmarkHistory(history)
	if (history.length) showBenchmarkResult(history[history.length - 1], true)
	else {
		var text = benchmarkI18n()
		document.getElementById('benchmark-score').innerHTML = '--'
		document.getElementById('benchmark-status').innerHTML = text.idle
		document.getElementById('benchmark-run').value = text.start
		;['calculation', 'expression', 'drawing', 'storage'].forEach(function (type) {
			document.getElementById('benchmark-' + type + '-value').innerHTML = '--'
			document.getElementById('benchmark-' + type + '-rate').innerHTML = '--'
		})
		setBenchmarkProgress(0)
	}
}

function openBenchmarkPanel() {
	var more = document.getElementById('more')
	if (more) more.style.display = 'none'
	document.getElementById('benchmark-panel').style.display = 'block'
	applyBenchmarkLanguage()
	renderBenchmarkHistory()
}

function closeBenchmarkPanel() {
	document.getElementById('benchmark-panel').style.display = 'none'
}

async function Benchmark() {
	if (benchmarkState.running) return
	benchmarkState.running = true
	var text = benchmarkI18n()
	var buttons = ['benchmark-run', 'benchmark-export', 'benchmark-clear']
	buttons.forEach(function (id) { document.getElementById(id).disabled = true })
	document.getElementById('benchmark-score').innerHTML = '--'
	setBenchmarkProgress(4, text.preparing)
	addlog(language[260] + '：' + language[261])
	var totalStarted = benchmarkNow()

	try {
		await benchmarkNextPaint()
		setBenchmarkProgress(12, text.testingCalculation)
		await benchmarkNextPaint()
		var calculation = benchmarkCalculationStage()
		calculation.score = benchmarkComponentScore(calculation.rate, benchmarkState.baseline.calculation)
		document.getElementById('benchmark-calculation-value').innerHTML = calculation.score.toLocaleString() + text.scoreSuffix
		document.getElementById('benchmark-calculation-rate').innerHTML = formatBenchmarkRate('calculation', calculation.rate)

		setBenchmarkProgress(42, text.testingExpression)
		await benchmarkNextPaint()
		var expression = benchmarkExpressionStage()
		expression.score = benchmarkComponentScore(expression.rate, benchmarkState.baseline.expression)
		document.getElementById('benchmark-expression-value').innerHTML = expression.score.toLocaleString() + text.scoreSuffix
		document.getElementById('benchmark-expression-rate').innerHTML = formatBenchmarkRate('expression', expression.rate)

		setBenchmarkProgress(60, text.testingDrawing)
		await benchmarkNextPaint()
		var drawing = benchmarkDrawingStage()
		drawing.score = benchmarkComponentScore(drawing.rate, benchmarkState.baseline.drawing)
		document.getElementById('benchmark-drawing-value').innerHTML = drawing.score.toLocaleString() + text.scoreSuffix
		document.getElementById('benchmark-drawing-rate').innerHTML = formatBenchmarkRate('drawing', drawing.rate)

		setBenchmarkProgress(78, text.testingStorage)
		await benchmarkNextPaint()
		var storage = benchmarkStorageStage()
		storage.score = benchmarkComponentScore(storage.rate, benchmarkState.baseline.storage)
		document.getElementById('benchmark-storage-value').innerHTML = storage.score.toLocaleString() + text.scoreSuffix
		document.getElementById('benchmark-storage-rate').innerHTML = benchmarkFormat(text.storagePerSecond, {
			read: (storage.readRate / 1000).toFixed(1),
			write: (storage.writeRate / 1000).toFixed(1)
		})

		setBenchmarkProgress(95, text.finishing)
		await benchmarkNextPaint()
		var stages = { calculation: calculation, expression: expression, drawing: drawing, storage: storage }
		var score = calculateBenchmarkScore(stages)
		var result = {
			schemaVersion: 3,
			createdAt: new Date().toISOString(),
			appVersion: typeof thisv == 'undefined' ? '' : String(thisv),
			score: score,
			durationMs: benchmarkNow() - totalStarted,
			stages: stages,
			environment: {
				hardwareConcurrency: navigator.hardwareConcurrency || null,
				devicePixelRatio: window.devicePixelRatio || 1
			}
		}
		var history = saveBenchmarkResult(result)
		showBenchmarkResult(result, false)
		drawBenchmarkHistory(history)
		setBenchmarkProgress(100, benchmarkFormat(text.complete, { time: (result.durationMs / 1000).toFixed(2) }))
		addlog(language[260] + ' ' + language[262] + score)
		wxldd(language[260] + ' ' + language[262] + score, 2500)
	} catch (error) {
		console.error('跑分失败:', error)
		setBenchmarkProgress(0, text.failed + (error && error.message ? error.message : error))
	} finally {
		benchmarkState.running = false
		buttons.forEach(function (id) { document.getElementById(id).disabled = false })
	}
}

function clearBenchmarkHistory() {
	var text = benchmarkI18n()
	if (!confirm(text.confirmClear)) return
	try {
		localStorage.removeItem(benchmarkState.storageKey)
	} catch (error) {
		console.warn('无法清空跑分历史:', error)
	}
	renderBenchmarkHistory()
	wxldd(text.cleared, 1800)
}

function exportBenchmarkHistory() {
	var text = benchmarkI18n()
	var history = readBenchmarkHistory()
	if (!history.length) {
		wxldd(text.nothingToExport, 1800)
		return
	}
	var exportData = {
		exportedAt: new Date().toISOString(),
		application: typeof name == 'undefined' ? 'AZHSHB' : name,
		version: typeof thisv == 'undefined' ? '' : String(thisv),
		benchmarkSchemaVersion: 3,
		results: history
	}
	var blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json;charset=utf-8' })
	var link = document.createElement('a')
	link.href = URL.createObjectURL(blob)
	link.download = 'azhshb-benchmark-' + new Date().toISOString().replace(/[:.]/g, '-') + '.json'
	document.body.appendChild(link)
	link.click()
	document.body.removeChild(link)
	setTimeout(function () { URL.revokeObjectURL(link.href) }, 0)
	wxldd(text.exported, 1800)
}








/*
function uu(x) {
	var c = 1
	for (let i = 0; i <= x; i++) {
		c = c * ((4 * i + 1) / (4 * i + 3))
	}
	return Math.log(c) / Math.log(2)
}
function fe(p) {
	var c = 0
	for (let i = 0; Math.pow(2, i) <= p; i++) {
		if (p % Math.pow(2, i) == 0) {
			c = i
		}
	}
	return p / Math.pow(2, c)
}
function gsl(x) {
	var t = []
	var s = 0
	for (let i = 1; i <= x; i++) {
		if (fe(i) % 4 == 1) {
			t[i] = -1
		} else {
			t[i] = 1
		}
		s = s + t[i]
	}
	return [t, s]
}
function c1(n) {
	var c = 1
	for (let i = 0; 4 * i + 3 <= n; i++) {
		c = c * n / (4 * i + 3)
	}
	return Math.log(c) / Math.log(2)
}


function dbsnandhz(p) {
	for (let i = 1; i <= p; i++) {
		xjdian(i, gsl(i)[1])

	}
}

function io() {
	var c = ''
	function z() {
		var a = String(sj(0, 100))
		var b = String(sj(0, 100))
		if (sj(0, 1)) {
			var f = '+'
		} else {
			var f = '-'
		}
		var t = a + f + b
		if (eval(t) < 0 || eval(t) > 100) {
			return z()
		} else {
			return t
		}

	}
	for (let i = 0; i < 200; i++) {
		c = c + z() + '=\n'

	}
	return c
}
*/
function generatePrimes(n) {
	// 创建布尔数组，初始标记所有数为素数（true）
	const isPrime = new Array(n + 1).fill(true);

	// 0 和 1 不是素数
	isPrime[0] = false;
	isPrime[1] = false;

	// 筛法核心：从 2 开始遍历到 sqrt(n)
	for (let i = 2; i * i <= n; i++) {
		if (isPrime[i]) {
			// 标记 i 的所有倍数为非素数（从 i*i 开始）
			for (let j = i * i; j <= n; j += i) {
				isPrime[j] = false;
			}
		}
	}

	// 收集所有仍标记为素数的数
	const primes = [];
	for (let i = 2; i <= n; i++) {
		if (isPrime[i]) {
			primes.push(i);
		}
	}

	return primes;
}
function cpfyz(x) {
	var c = []
	for (let i = 0; i < Math.sqrt(x); i++) {
		if (x % Math.pow(primesUpTo1Million[i], 2) == 0) {
			return false
		}
		if (x % primesUpTo1Million[i] == 0) {
			c.push(primesUpTo1Million[i])
		}
	}
	return c
}
/*


(-x*(a^2-a*sqrt(a^2+1)-2*a*sqrt(a^2)+a-sqrt(a^2+1)+1)+(a-sqrt(a^2+1)+1)*(2*a^2-a*sqrt(a^2)+sqrt(a^2+1)*sqrt(a^2)-sqrt(a^2+1)-sqrt(a^2)+1)/2)/(2*a^2-a*sqrt(a^2)+sqrt(a^2+1)*sqrt(a^2)-sqrt(a^2+1)-sqrt(a^2)+1)
4*a*(1-x)*(a+sqrt(a^2))*(a-sqrt(a^2+1)+1)/(8*a^2-(2*a*(a+sqrt(a^2+1)-1)+(a-sqrt(a^2+1)+1)*(a-sqrt(a^2+1)-2*sqrt(a^2)+1))*(a-sqrt(a^2+1)+1)+2*(a-sqrt(a^2+1)+1)^2)



-(a^2-a*sqrt(a^2+1)-2*a*sqrt(a^2)+a-sqrt(a^2+1)+1)/(2*a^2-a*sqrt(a^2)+sqrt(a^2+1)*sqrt(a^2)-sqrt(a^2+1)-sqrt(a^2)+1)*  (-4*a)*(a+sqrt(a^2))*(a-sqrt(a^2+1)+1)/(8*a^2-(2*a*(a+sqrt(a^2+1)-1)+(a-sqrt(a^2+1)+1)*(a-sqrt(a^2+1)-2*sqrt(a^2)+1))*(a-sqrt(a^2+1)+1)+2*(a-sqrt(a^2+1)+1)^2)




*/

function permute(arr) {
	if (arr.length === 1) return [arr]; // 基线条件：单元素直接返回
	const result = [];
	for (let i = 0; i < arr.length; i++) {
		const current = arr[i];
		const rest = [...arr.slice(0, i), ...arr.slice(i + 1)]; // 排除当前元素
		const subPermutations = permute(rest); // 递归剩余元素
		for (const p of subPermutations) {
			result.push([current, ...p]); // 组合当前元素与子排列
		}
	}
	return result;
}
// 示例
/*
var aaa=permute([1, 2, 3,4,5])
console.log(permute([1, 2, 3])); // 输出6种排列 [2,3,4](@ref)
var x=[1,-1/2,1/4,1/6,1/8]
for (let i = 0; i < aaa.length; i++) {
	var c=aaa[i]
	var pen=0
	for (let j = 0; j < c.length-1; j++) {
		pen=pen+c[j]*x[j]
	}
	console.log(pen+c[c.length-1]*x[x.length-1],c)
}
*/
yijiazaidewenjian.push(3)
