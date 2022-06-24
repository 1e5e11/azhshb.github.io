var thisv = 12
/*
az v12
更新日志
[增加]:太多了写不过来
[修复]:太多了写不过来
[更改]:太多了写不过来
[移除]:移除了him 太多了写不过来
*/
var update = ["新增修仙模式", "新增很多自定义功能", "新增坐标系网格"]




var zdyset = ["#7c0a21", "#7c0a2164", "white", "rgba(255, 255, 255, 0.5)", "black", "", "true"]



var huizhiwangge = true










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
var fq1 = 30 //网格间距
var gssbyd = false //是否跟随鼠标移动




var hslb = [] //函数列表
var dlb = [] //点列表
var cllb = [] //常量列表
var clzlb = [] //常量值列表
var xzlb = [] //选中列表
var yclb = [] //选中列表
var newgetjdn = [] //算过的交点
var newgetjdz = [] //算过的交点的各种值
var newgetjxsn = [] //算过的解析式
var newgetjxsz = [] //算过的解析式的各种值

var ycys = "#00ff0080"

//var xzbqyc="#00ff0080"

var pxtonum = hxxianshi / xianshikuandu
var numtopx = xianshikuandu / hxxianshi

var cpmsgb = "m"
var cpmsgbcs = 0


function windowonload() {





    jstext = ["啊这函数画板精简版已于第", "重天", "新法宝：", "善哉"]


    document.getElementById("szys").innerHTML = ":root {--bjsdfz: " + zdyset[0] + ";--bjsdfz-a:" + zdyset[1] + ";--wzys:" + zdyset[2] + ";--wzys-a:" + zdyset[3] + ";}"
    document.getElementById("azhshb").style.color = zdyset[2]
    document.getElementById("azhshb").style.backgroundColor = zdyset[4]
    document.getElementById("beijc").style.backgroundImage = "url(" + zdyset[5] + ")"












    addlog(jstext[0] + thisv + jstext[1])
    addlog(jstext[2])

    for (var f = 0; f < update.length; f++) {
        addlog(update[f])
    }
}

window.onload = function() {

    var oDiv = document.getElementById('zbx');
    addEvent(oDiv, 'mousewheel', hssf);
    addEvent(oDiv, 'DOMMouseScroll', hssf);

    var hy = document.getElementById("divdis");

    hbck = hy.getContext("2d");
    hbck.fillStyle = "#FF0000"
    hbck.lineWidth = 2
    cxjswgjj()
    bianhau()
    huizhi()
    var set = localStorage.getItem("setting")
    if (set == undefined) {
        zdyset = ["#7c0a21", "#7c0a2164", "black", "rgba(128, 128, 128, 0.7)", "white", ""]
    } else {
        zdyset = zfc_to_sz(set)
    }
    windowonload()
}
window.isCloseHint = true;
//初始化关闭
window.addEventListener("beforeunload", function(e) {
    if (window.isCloseHint) {
        var confirmationMessage = "要记得保存！你确定要离开我吗？";
        (e || window.event).returnValue = confirmationMessage; // 兼容 Gecko + IE
        return confirmationMessage; // 兼容 Gecko + Webkit, Safari, Chrome
    }
});

function zbxyd() {
    //l("开始移动",azm)
    var ydzbxcs = 1
    var disX
    var disY
    xsy = (document.getElementById("xzhou").style.top).split("px")[0] //坐标系显示位置 x
    xsx = (document.getElementById("yzhou").style.left).split("px")[0] //坐标系显示位置 y
    //document.getElementById("wanggexian").innerHTML=""
    hbck.clearRect(0, 0, xianshikuandu, xianshigaodu)
    document.ontouchmove = function(h) {
        fsdcds(h, 't')
        if (ydzbxcs == 1) {
            ydzbxcs = 0
            disX = h.touches[0].clientX - xsx
            disY = h.touches[0].clientY - xsy
            if (cpmsgbcs == 0) {
                cpmsgb = "t"
                cpmsgbcs = 1
            }
        } else {
            var x = h.touches[0].clientX - disX
            var y = h.touches[0].clientY - disY
            ydisX = x
            ydisY = y
            if (cpmsgb == "t") {
                document.getElementById("yzhou").style.left = x + "px"
                document.getElementById("xzhou").style.top = y + "px"
            }
        }
    }
    document.onmousemove = function(h) {
        fsdcds(h, 'm')
        if (ydzbxcs == 1) {
            ydzbxcs = 0
            disX = h.clientX - xsx
            disY = h.clientY - xsy
            if (cpmsgbcs == 0) {
                cpmsgb = "m"
                cpmsgbcs = 1
            }
        } else {
            var x = h.clientX - disX
            var y = h.clientY - disY
            ydisX = x
            ydisY = y
            if (cpmsgb == "m") {
                document.getElementById("yzhou").style.left = x + "px"
                document.getElementById("xzhou").style.top = y + "px"
            }
        }
    }
    document.onmouseup = function(m) {
        if (cpmsgb == "m") {
            bianhau()
            huizhi()
        }
        document.onmousemove = function(h) {
            fsdcds(h, 'm')
        };
    }
    document.ontouchend = function() {
        if (cpmsgb == "t") {
            bianhau()
            huizhi()
        }
        document.ontouchmove = function(h) {
            fsdcds(h, 't')
        };
    }
}

if (localStorage.getItem("az") == undefined) {
    var azc = 0
} else {
    var azc = localStorage.getItem("az")
}

function az() {
    azc++
    document.getElementById("azcs").innerHTML = jstext[3] + azc + "次！"
    document.getElementById("azcs").style.display = "block"
    setTimeout(function() {
        document.getElementById("azcs").style.display = "none";
    }, 800);
    localStorage.setItem("az", azc)
}

function draw(x1, y1) { //贝塞尔曲线绘制
    if (x1 == undefined) {
        var mousex = sbx
    } else {
        var mousex = x1
    }

    if (y1 == undefined) {
        var mousey = sby
    } else {
        var mousey = y1
    }
    points.push({
        x: mousex,
        y: mousey
    });
    hbck.beginPath();
    let x = (points[points.length - 2].x + points[points.length - 1].x) / 2,
        y = (points[points.length - 2].y + points[points.length - 1].y) / 2;
    if (points.length == 2) {
        hbck.moveTo(points[points.length - 2].x, points[points.length - 2].y);
        hbck.lineTo(x, y);
    } else {
        let lastX = (points[points.length - 3].x + points[points.length - 2].x) / 2,
            lastY = (points[points.length - 3].y + points[points.length - 2].y) / 2;
        hbck.moveTo(lastX, lastY);
        hbck.quadraticCurveTo(points[points.length - 2].x, points[points.length - 2].y, x, y);
    }
    hbck.stroke();
    points.slice(0, 1);

}



function hzqx(jxs, q, z) {
    pxtonum = accDiv(hxxianshi, xianshikuandu)
    numtopx = accDiv(xianshikuandu, hxxianshi)
    points = []

    //每次增加
    var dancizjia = accMul(accDiv(xianshikuandu, xrjqd), pxtonum)
    var ghughughughguhguhguhgughu = -1 * ydisX * pxtonum
    if (q == undefined || q == "" || q < ghughughughguhguhguhgughu) {
        var xsqd = ghughughughguhguhguhgughu //循环起点
    } else {
        var xsqd = jxs_l_for_azhs(q)
    }
    if (z == undefined || z == "" || z < ghughughughguhguhguhgughu + hxxianshi) {
        var xhzd = ghughughughguhguhguhgughu + hxxianshi //循环终点
    } else {
        var xhzd = jxs_l_for_azhs(z)
    }




    var last = true
    for (var jt = xsqd; jt <= xhzd + dancizjia; jt = accAdd(jt, dancizjia)) {
        var xxx = ydisX + jt * numtopx
        var yyy = ydisY - jxs_l_for_azhs(jxs, jt) * numtopx
        if (String(yyy) == "NaN" || yyy > 1.5 * xianshigaodu || yyy < -0.5 * xianshigaodu) {
            points = []
            var last = true
        } else {
            if (jt == xsqd) {
                points.push({
                    x: xxx,
                    y: yyy
                });
            }
            if (last == true) {
                points.push({
                    x: xxx,
                    y: yyy
                });
                var last = false
            } else {
                //console.log(xxx,yyy,jt,last,points)
                draw(xxx, yyy)
            }

        }
        //console.log(xxx,yyy,jt,last,points)

    }
}

function hzd(x, y, k, r) {
    pxtonum = accDiv(hxxianshi, xianshikuandu)
    numtopx = accDiv(xianshikuandu, hxxianshi)
    hbck.beginPath();
    hbck.arc(x * numtopx + ydisX, ydisY - y * numtopx, r, 0, 2 * Math.PI);
    hbck.fillStyle = k;
    hbck.fill();
    hbck.stroke();
}

function sxcl() { //刷新常量
    clzlb = []
    newgetjdn = []
    newgetjdz = []
    newgetjxsn = []
    newgetjxsz = []
    for (var i = 0; i < cllb.length; i++) {
        if (cllb[i] == "") {
            clzlb.push(NaN)
        } else {
            clzlb.push(jxs_l_for_azhs(cllb[i].split("|")[1]))
        }
    }
}

function bianhau() {

    document.getElementById("zbx").style.width = xianshikuandu + "px"
    document.getElementById("zbx").style.height = xianshigaodu + "px"
    document.getElementById("divdis").style.width = xianshikuandu
    document.getElementById("divdis").style.height = xianshigaodu
    document.getElementById("divdis").width = xianshikuandu
    document.getElementById("divdis").height = xianshigaodu
    document.getElementById("bhcv").value = xianshikuandu
    document.getElementById("edsde").value = xianshigaodu
    document.getElementById("decsx").value = ydisX
    document.getElementById("decsy").value = ydisY
    document.getElementById("gdrft").value = xrjqd
    document.getElementById("fvfrv").value = hxxianshi
    // document.getElementById("yzhou").style.left=ydisX+"px"
    // document.getElementById("xzhou").style.top=ydisY+"px"
    document.getElementById("hslbxs").style.left = xianshikuandu + 50 + "px"
    document.getElementById("drdrdr").style.left = xianshikuandu + 50 + "px"
    document.getElementById("qtgn").style.left = xianshikuandu + 50 + "px"
    document.getElementById("gnxz").style.left = xianshikuandu + 50 + "px"
    document.getElementById("caozuolan").style.left = xianshikuandu + 50 + "px"



    //document.getElementById("wanggexian").innerHTML=""

}

function madewg() { //绘制网格

    var jzuo = (ydisX) % (fq1 * numtopx)
    for (var i = jzuo; i < xianshikuandu; i = i + (fq1 * numtopx)) {
        hbck.lineWidth = 1;
        hbck.beginPath();
        hbck.strokeStyle = zdyset[1];
        hbck.moveTo(i, 0);
        hbck.lineTo(i, xianshigaodu)
        hbck.stroke();
        if (Math.abs(i - ydisX) < 0.01) {} else {
            hbck.font = "10px bold 黑体";
            hbck.fillStyle = zdyset[0];
            hbck.textAlign = "center";
            hbck.textBaseline = "middle";
            hbck.fillText(String((pxtonum * (i - ydisX)).toFixed(1)), i, ydisY + 10);
        }

    }
    var jzuo = (ydisY) % (fq1 * numtopx)
    for (var i = jzuo; i < xianshigaodu; i = i + (fq1 * numtopx)) {
        hbck.lineWidth = 0;
        hbck.beginPath();
        hbck.strokeStyle = zdyset[1];
        hbck.moveTo(0, i);
        hbck.lineTo(xianshikuandu, i)
        hbck.stroke();
        if (Math.abs(i - ydisY) < 0.01) {} else {
            hbck.font = "10px bold 黑体";
            hbck.fillStyle = zdyset[0];
            hbck.textAlign = "center";
            hbck.textBaseline = "middle";
            hbck.fillText(String((-1 * pxtonum * (i - ydisY)).toFixed(1)), ydisX - 10, i);
        }
    }

}

function cxjswgjj() { //网格间距重新计算

    pxtonum = accDiv(hxxianshi, xianshikuandu)
    numtopx = accDiv(xianshikuandu, hxxianshi)


    var t = String(60 * pxtonum).replace(".", '');

    if (t == String(60 * pxtonum)) {
        var xiaoshudianwei = t.length
    } else {
        var xiaoshudianwei = -1
    }

    var youxiaowei = -1
    var w = String(60 * pxtonum)
    for (var i = 0; i < w.length; i++) {
        if (w.substring(i, i + 1) == ".") {
            xiaoshudianwei = i
        }
        if (w.substring(i, i + 1) == "0" || w.substring(i, i + 1) == ".") {} else {
            if (youxiaowei == -1) {
                youxiaowei = i
            }
        }
    }
    if ((xiaoshudianwei - youxiaowei) > 0) {
        var zs = (xiaoshudianwei - youxiaowei - 1)
    } else {
        var zs = (xiaoshudianwei - youxiaowei)
    }
    var dernum = Number(w.substring(youxiaowei, youxiaowei + 1))

    fq1 = Math.pow(10, zs) * findCloseNum([1, 2, 5], dernum) //允许出现的倍数：1 2 5

}

function zhudbianhua() {
    hxxianshi = Number(document.getElementById("fvfrv").value)
    xrjqd = Number(document.getElementById("gdrft").value)
    ydisX = Number(document.getElementById("decsx").value)
    ydisY = Number(document.getElementById("decsy").value)
    xianshikuandu = Number(document.getElementById("bhcv").value)
    xianshigaodu = Number(document.getElementById("edsde").value)
    bianhau()
    cxjswgjj()
    huizhi()
}

function huizhi() {
    var start = new Date().getTime() // 开始时间
    hbck.clearRect(0, 0, xianshikuandu, xianshigaodu)
    for (var jr = 0; jr < hslb.length; jr++) { //画函数
        if (hslb[jr] == "") {} else {
            if (hslb[jr].split("|")[1] == undefined || hslb[jr].split("|")[1] == "") {
                hbck.strokeStyle = "black"
            } else {
                hbck.strokeStyle = hslb[jr].split("|")[1]
            }

            if (isInArray(xzlb, "h" + jr) == true) {
                hbck.lineWidth = 3
                hbck.strokeStyle = "red"
            } else {
                hbck.lineWidth = 1
            }
            if (isInArray(yclb, "h" + jr) == true) {
                if (isInArray(xzlb, "h" + jr) == true) {
                    hzqx(hslb[jr].split("|")[0], hslb[jr].split("|")[2], hslb[jr].split("|")[3])
                }
            } else {
                hzqx(hslb[jr].split("|")[0], hslb[jr].split("|")[2], hslb[jr].split("|")[3])
            }

        }
    }
    hbck.strokeStyle = "black"
    hbck.lineWidth = 1
    for (var wl = 0; wl < dlb.length; wl++) { //画点
        var x = dlb[wl].split("|")[0]
        var y = dlb[wl].split("|")[1]
        if (dlb[wl] == "") {} else {

            if (isInArray(yclb, "h" + jr) == true) {
                if (isInArray(xzlb, "d" + wl) == true) {
                    hzd(jxs_l_for_azhs(x), jxs_l_for_azhs(y), "green", 5)
                }
            } else {
                if (isInArray(xzlb, "d" + wl) == true) {
                    hzd(jxs_l_for_azhs(x), jxs_l_for_azhs(y), "green", 5)
                } else {
                    hzd(jxs_l_for_azhs(x), jxs_l_for_azhs(y), "red", 3)
                }
            }

        }
    }

    if (huizhiwangge == true) {
        madewg()
    }
    var end = new Date().getTime() // 结束时间
    document.getElementById("yams").innerHTML = "用时" + String(end - start) + "ms"

}
window.onmousemove = function(h) {
    fsdcds(h, 'm')
}
window.ontouchmove = function(h) {
    fsdcds(h, 't')
}

function fsdcds(h, m) { //鼠标移动
    //console.log(h.clientX,)
    if (m == "m") {
        var sbzbxx = (h.clientX - 20) - ydisX
        var sbzbxy = ydisY - (h.clientY - 100)
    } else if (m == "t") {
        var sbzbxx = (h.touches[0].clientX - 20) - ydisX
        var sbzbxy = ydisY - (h.touches[0].clientY - 100)
    }
    var pxtonum = (hxxianshi / xianshikuandu)
    var sbzbxx = (sbzbxx * pxtonum).toFixed(3)
    var sbzbxy = (sbzbxy * pxtonum).toFixed(3)
    document.getElementById("gbftr").value = sbzbxx
    document.getElementById("oi9l").value = sbzbxy
    if (gssbyd == true) {
        huizhi()
    }
}

function cjxhs(jxs, clorer, zuixiao, zuida) { //添加函数
    if (clorer == "" || clorer == undefined) {
        clorer = "black"
    }
    if (zuixiao == "") {} else {
        var zuixiao = jxs_l_for_azhs(zuixiao)
    }
    if (zuida == "") {} else {
        var zuida = jxs_l_for_azhs(zuida)
    }
    hslb.push(jxs + "|" + clorer + "|" + zuixiao + "|" + zuida)
    /*  函数的数据模型：  解析式|颜色|取值下线|取自上限
     */
    var hanshuhao = hslb.length - 1
    if (zuixiao == "") {
        var zuixiao = "-∞"
    }
    if (zuida == "") {
        var zuida = "∞"
    }
    if ((jxs + "&emsp;&emsp;" + zuixiao + "," + zuida).length > 18) {
        var g = ("h" + hanshuhao + "&emsp;" + jxs + "&emsp;" + zuixiao + "," + zuida).substring(0, 18) + "..."
    } else {
        var g = ("h" + hanshuhao + "&emsp;" + jxs + "&emsp;" + zuixiao + "," + zuida)
    }
    var y = document.getElementById("hslbxs").innerHTML
    document.getElementById("hslbxs").innerHTML = y + "<div class='hcxda' onclick=xz('h" + hanshuhao + "') style='color: " + clorer + ";'  id='h" + hanshuhao + "'>" + g + "<div class='hsscan' onclick=delhs(" + hanshuhao + ",'h')>删除</div></div>"
    return hanshuhao
}

function xjdqz() {
    var x1 = document.getElementById("egfdgfbcujsx").value
    var y1 = document.getElementById("egfdgfbcujsy").value
    xjdian(x1, y1)
    huizhi()
}

function xjdian(x, y) { //添加点
    /*  点的数据模型：  x坐标|y坐标
     */
    dlb.push(String(x) + "|" + String(y))
    var hanshuhao = dlb.length - 1
    var g = "d" + hanshuhao + "&emsp;" + x + "," + y
    var y = document.getElementById("hslbxs").innerHTML
    document.getElementById("hslbxs").innerHTML = y + "<div class='hcxda' onclick=xz('d" + hanshuhao + "') style='color: black;' id='d" + hanshuhao + "'>" + g + "<div class='hsscan' onclick=delhs(" + hanshuhao + ",'d');>删除</div></div>"
    return hanshuhao
}

function xjclqz() {
    var x1 = document.getElementById("vffrrrrrrx").value
    var y1 = document.getElementById("vffrrrrrry").value
    xjcl(x1, y1)
    huizhi()
}

function xjcl(m, z) { //添常量
    /*  常量的数据模型：  常量名|值
     */
    cllb.push(String(m) + "|" + String(z))
    clzlb.push(jxs_l_for_azhs(z))
    var hanshuhao = cllb.length - 1
    var g = "c" + hanshuhao + "&emsp;" + m
    var y = document.getElementById("hslbxs").innerHTML
    document.getElementById("hslbxs").innerHTML = y + "<div class='hcxda' onclick=xz('c" + hanshuhao + "') style='color: black;' id='c" + hanshuhao + "'>" + g + "<input id='clsr" + hanshuhao + "' class='vfr' style='top:5px;left:70px; width: 60px; height: 20px;' value='" + z + "' onchange=clgb(" + hanshuhao + ",'sr') /><input id='clhk" + hanshuhao + "' class='vfr' style='top:5px;left:140px; width: 100px; height: 20px;' type='range' min='-10' max='10' step='0' value='" + z + "' onchange=clgb(" + hanshuhao + ",'hk') /><div class='hsscan' onclick='delhs(" + hanshuhao + ",'cl');'>删除</div></div>"
    return hanshuhao
}

function clgb(clh, zgg) { //常量输入
    if (zgg == "hk") {
        var m = document.getElementById("clhk" + clh).value
    }
    if (zgg == "sr") {
        var m = document.getElementById("clsr" + clh).value
    }
    var yclsjcs = cllb[Number(clh)].split("|")[0]
    cllb.splice(Number(clh), 1, yclsjcs + "|" + m)
    //console.log(yclsjcs,m,cllb,Number(clh))
    document.getElementById("clhk" + clh).value = jxs_l_for_azhs(m)
    document.getElementById("clsr" + clh).value = m
    sxcl()
    huizhi()
}

function xz(m) { //添加 移除选择
    //console.log(m,xzlb,isalt,isshift)
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

function tianjiaxinhanshu() {
    var jxs = document.getElementById("grdgr").value
    var clorer = document.getElementById("wadwd").value
    var zuixiao = document.getElementById("hs-sm").value
    var zuida = document.getElementById("hs-zd").value
    cjxhs(jxs, clorer, zuixiao, zuida)
    huizhi()
}

function delhs(hsh, lx) { //删除
    setTimeout(() => {
        arrremove(xzlb, lx + hsh)
        arrremove(yclb, lx + hsh)
        document.getElementById(lx + hsh).remove()
    }, 100);
    if (lx == "h") {
        hslb.splice(hsh, 1, "")
    }
    if (lx == "d") {
        dlb.splice(hsh, 1, "")
    }
    if (lx == "cl") {
        cllb.splice(hsh, 1, "")
    }
    huizhi()
}

function hssf(ev) { //鼠标滚轮
    if (ev.wheelDelta < 0) {
        hxxianshi = hxxianshi + 1
    } else if (ev.wheelDelta > 0) {
        hxxianshi = hxxianshi - 1
    }
    if (hxxianshi < 1) {
        hxxianshi = 1
    }
    if (hxxianshi > 1000) {
        hxxianshi = 1000
    }
    document.getElementById("fvfrv").value = hxxianshi
    cxjswgjj()
    huizhi()
}

function addEvent(obj, xEvent, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + xEvent, fn);
    } else {
        obj.addEventListener(xEvent, fn, false);
    }
}

function beif() { //导出
    var hs = sz_to_zfc(hslb)
    var d = sz_to_zfc(dlb)
    var cl = sz_to_zfc(cllb)
    var yc = sz_to_zfc(yclb)
    document.getElementById("klkl").value = toCode(thisv + "و³" + hs + "و³" + d + "و³" + cl + "و³" + yc)
}

function huif() { //恢复函数
    var f = document.getElementById("klkl").value


    hslb = []
    cllb = []
    dlb = []

    //document.getElementById("hslbxs").innerHTML=""

    if (fromCode(f).split("و³")[0] == String(thisv)) {
        var pr = fromCode(f)
    } else {
        if (Number(fromCode(f).split("و³")[0]) < thisv) {
            if (confirm("这是适用于新版的还原码，确定要继续吗？") == true) {
                var pr = fromCode(f)
            } else {
                return false
            }
        } else {
            if (confirm("这是适用于旧版的还原码，是否要以兼容模式打开？") == true) {
                if (Number(fromCode(f).split("و³")[0]) < 11) {
                    var pr = "و³" + fromCode(f)
                } else {
                    var pr = fromCode(f)
                }
            } else {
                return false
            }
        }
    }


    //恢复函数
    var hanshulb = pr.split("و³")[1]
    if (hanshulb == "undefined" || hanshulb == undefined) {
        var hanshulb = []
    } else {
        var hanshulb = zfc_to_sz(hanshulb)
    }
    for (var d = 0; d < hanshulb.length; d++) {
        if (hanshulb[d] == "undefined" || hanshulb == undefined) {
            hslb.push("")
        } else {
            var jxs = hanshulb[d].split("|")[0]
            var clorer = hanshulb[d].split("|")[1]
            var zuixiao = hanshulb[d].split("|")[2]
            var zuida = hanshulb[d].split("|")[3]
            cjxhs(jxs, clorer, zuixiao, zuida)
        }
    }

    //恢复点
    var hanshulb = pr.split("و³")[2]
    if (hanshulb == "undefined" || hanshulb == undefined) {
        var hanshulb = []
    } else {
        var hanshulb = zfc_to_sz(hanshulb)
    }

    for (var d = 0; d < hanshulb.length; d++) {
        if (hanshulb[d] == "") {
            dlb.push("")
        } else {
            xjdian(hanshulb[d].split("|")[0], hanshulb[d].split("|")[1])
        }
    }
    //恢复常量
    var hanshulb = pr.split("و³")[3]
    //console.log(hanshulb)
    if (hanshulb == "undefined" || hanshulb == undefined) {
        var hanshulb = []
    } else {
        var hanshulb = zfc_to_sz(hanshulb)
    }
    for (var d = 0; d < hanshulb.length; d++) {
        if (hanshulb[d] == "") {
            cllb.push("")
        } else {
            xjcl(hanshulb[d].split("|")[0], hanshulb[d].split("|")[1])
        }
    }
    //恢复隐藏列表
    var hanshulb = pr.split("و³")[4]
    //console.log(hanshulb)
    if (hanshulb == "undefined" || hanshulb == undefined) {
        var hanshulb = []
    } else {
        var hanshulb = zfc_to_sz(hanshulb)
    }
    for (var d = 0; d < hanshulb.length; d++) {
        if (hanshulb[d] == "") {} else {
            yclb.push(hanshulb[d])
            document.getElementById(hanshulb[d]).style.backgroundColor = ycys
        }
    }



    huizhi()

}

function azfy(ms) {
    if (ms == "js") {
        var y = document.getElementById("cddddcdcdcdc").value
        document.getElementById("cdshhjshjdcshjchj").value = jxs_l_for_azhs(y)
    }
    if (ms == "huayuan") {
        var x = document.getElementById("tgtgtgtgtg").value
        var y = document.getElementById("frfrfrfrfr").value
        var r = document.getElementById("paoifrvohi").value
        if (document.getElementById("ghwdvecd").checked == true) {
            var jxs = "sqrt((" + r + ")^2_(x_" + x + ")^2)+" + y
        }
        if (document.getElementById("geaduytfwev").checked == true) {
            var jxs = "0_sqrt((" + r + "^2_(x_" + x + ")^2)+" + y
        }
        cjxhs(jxs, "black", "", "")
        huizhi
    }
}


function gnqh() {
    var gn = 5 //总功能
    var gnqh = document.getElementById("gnxz").value
    document.getElementById(gnqh).style.display = "block"
    for (var c = 1; c <= gn; c++) {
        if ("gn" + c == gnqh) {} else {
            document.getElementById("gn" + c).style.display = "none"
        }
    }
}

function qrcz() {
    if (confirm("确认执行操作？") == true) {
        zxcz()
    }
}

function zxcz() {
    var czbh = document.getElementById("zxczxz").value
    if (czbh == "1") {
        var jdjqd = prompt("请输入精确度(默认为0.01)");
        if (jdjqd == null || jdjqd == "null") {
            var jdjqd = ""
        }
        if (xzlb.length == 2) {
            if (xzlb[0].substring(0, 1) == "h") {} else {
                alert("类型不匹配");
                return false
            }
            if (xzlb[1].substring(0, 1) == "h") {} else {
                alert("类型不匹配");
                return false
            }
            var jdgs = azgetjd(Number(xzlb[0].substring(1, 2)), Number(xzlb[1].substring(1, 2)), 6, 2, jdjqd)
            for (var i = 0; i < jdgs; i++) {
                xjdian("getjd(" + xzlb[0].substring(1, 2) + "," + xzlb[1].substring(1, 2) + "," + i + ",0," + jdjqd + ")", "getjd(" + xzlb[0].substring(1, 2) + "," + xzlb[1].substring(1, 2) + "," + i + ",1," + jdjqd + ")")
            }
            huizhi()
            return true

        } else {
            alert("类型不匹配");
            return false
        }
    }
    if (czbh == "2") {
        var c = ""
        for (var i = 0; i < xzlb.length; i++) {
            if (xzlb[i].substring(0, 1) == "d") {
                c = c + xzlb[i].substring(1, 2) + ","
            } else {
                alert("类型不匹配");
                return false
            }
        }
        cjxhs("getjxs(x," + c.substring(0, c.length - 1) + ")", "black", "", "")
        huizhi()
        return true
    }
    if (czbh == "3") {
        var c = ""
        if (xzlb.length == 2) {} else {
            alert("类型不匹配");
            return false
        }
        for (var i = 0; i < xzlb.length; i++) {
            if (xzlb[i].substring(0, 1) == "d") {
                c = c + xzlb[i].substring(1, 2) + ","
            } else {
                alert("类型不匹配");
                return false
            }
        }
        if (azgetdzb(Number(xzlb[0].substring(1, 2)), 0) < azgetdzb(Number(xzlb[1].substring(1, 2)), 0)) {
            var x = "getdzb(" + Number(xzlb[0].substring(1, 2)) + ",0)"
            var s = "getdzb(" + Number(xzlb[0].substring(1, 2)) + ",1)"
        } else {
            var s = azgetdzb(Number(xzlb[0].substring(1, 2)), 0)
            var x = azgetdzb(Number(xzlb[1].substring(1, 2)), 0)
        }
        cjxhs("getjxs(x," + c.substring(0, c.length - 1) + ")", "black", x, s)
        huizhi()
        return true
    }
    if (czbh == "4") {
        if (xzlb.length == 2) {} else {
            alert("类型不匹配");
            return false
        }
        if (xzlb[0].substring(0, 1) == "d") {
            var d = Number(xzlb[0].substring(1, 2))
            var c = Number(xzlb[1].substring(1, 2))
            if (xzlb[1].substring(0, 1) == "c") {} else {
                alert("类型不匹配");
                return false
            }
        } else if (xzlb[0].substring(0, 1) == "c") {
            var c = Number(xzlb[0].substring(1, 2))
            var d = Number(xzlb[1].substring(1, 2))
            if (xzlb[1].substring(0, 1) == "d") {} else {
                alert("类型不匹配");
                return false
            }
        }
        //console.log(d,c)
        var x = "getdzb(" + d + ",0)"
        var y = "getdzb(" + d + ",1)"
        cjxhs("sqrt((getcl(" + c + ",1))^2_(x_" + x + ")^2)+" + y, "black", "", "")
        addlog("函数解析式为 " + "sqrt((getcl(" + c + ",1))^2_(x_" + x + ")^2)+" + y)
        cjxhs("0_sqrt((getcl(" + c + ",1))^2_(x_" + x + ")^2)+" + y, "black", "", "")
        addlog("函数解析式为 " + "0_sqrt((getcl(" + c + ",1))^2_(x_" + x + ")^2)+" + y)
        huizhi()
        return true
    }
    if (czbh == "5") {
        for (var i = 0; i < xzlb.length; i++) {
            if (xzlb[i].substring(0, 1) == "d") {
                var fh = confirm(xzlb[i] + "坐标：" + azgetdzb(Number(xzlb[i].substring(1, 2)), 0) + "," + azgetdzb(Number(xzlb[i].substring(1, 2)), 1) + "是否添加到常量？")
                if (fh == true) {
                    xjcl("", "getdzb(" + xzlb[i].substring(1, 2) + ",0)")
                    xjcl("", "getdzb(" + xzlb[i].substring(1, 2) + ",1)")
                }
            } else {
                alert("类型不匹配");
                return false
            }
        }
        return true
    }
    if (czbh == "6") {
        if (xzlb.length == 2) {} else {
            alert("类型不匹配");
            return false
        }
        if (xzlb[0].substring(0, 1) == "d") {} else {
            alert("类型不匹配");
            return false
        }
        if (xzlb[1].substring(0, 1) == "d") {} else {
            alert("类型不匹配");
            return false
        }
        var fh = confirm(xzlb[0] + "," + xzlb[1] + "距离：" + azgetjl(Number(xzlb[0].substring(1, 2)), Number(xzlb[1].substring(1, 2))) + "是否添加到常量？")
        if (fh == true) {
            xjcl("", "getjl(" + xzlb[0].substring(1, 2) + "," + xzlb[1].substring(1, 2) + ")")
        }
        return true
    }
    if (czbh == "7") {
        for (var i = 0; i < xzlb.length; i++) {
            delhs(Number(xzlb[i].substring(1, 2)), xzlb[i].substring(0, 1))
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
        if (xzlb.length == 2) {} else {
            alert("类型不匹配");
            return false
        }
        if (xzlb[0].substring(0, 1) == "d") {} else {
            alert("类型不匹配");
            return false
        }
        if (xzlb[1].substring(0, 1) == "d") {} else {
            alert("类型不匹配");
            return false
        }
        var x = "(getdzb(" + xzlb[0].substring(1, 2) + ",0)+getdzb(" + xzlb[1].substring(1, 2) + ",0))/2"
        var y = "(getdzb(" + xzlb[0].substring(1, 2) + ",1)+getdzb(" + xzlb[1].substring(1, 2) + ",1))/2"
        addlog("点坐标为 " + x + "," + y)
        xjdian(x, y)
        huizhi()
        return true
    }
}

function openjc(x) {
    window.open(x)
}

function xhysyc(id) {
    var g = document.getElementById(id)
    if (g.style.display == "block") {
        g.style.display = "none";
        return
    }
    if (g.style.display == "none") {
        g.style.display = "block";
        return
    }
}

function addlog(log) { //添加内部日志
    var f = document.getElementById("rizhi").innerHTML
    document.getElementById("rizhi").innerHTML = f + "<br>" + log
}

function xiehuanwanggexians() {
    if (huizhiwangge == true) {
        huizhiwangge = false
        document.getElementById("wgxsqhan").value = "网格：隐藏"
    } else {
        huizhiwangge = true
        document.getElementById("wgxsqhan").value = "网格：显示"
    }
    huizhi()
}

function setting(f, g) {
    console.log(f, g)
    if (g == undefined) {
        return (zdyset[f])
    } else {
        zdyset.splice(f, 1, g)
        localStorage.setItem("setting", sz_to_zfc(zdyset))
        windowonload()
    }
}

function settingxunwen(j, num) {
    var g = prompt(j + " 为 " + setting(num) + " 设置为")
    if (String(g) == "NaN" || g == undefined) {} else {
        setting(num, g)
    }
}

function hfccsz() { //清空设置
    if (confirm("确定要清空设置？") == true) {
        zdyset = zdyset = ["#7c0a21", "#7c0a2164", "black", "rgba(128, 128, 128, 0.7)", "white", ""]
        localStorage.setItem("setting", sz_to_zfc(zdyset))
        windowonload()

    }
}

function azgetcl(clh, xy) { //获取常量相关
    if (xy == 1) {
        return clzlb[clh]
    } else {
        return jxs_l_for_azhs(cllb[clh].split("|")[xy])
    }
}

function azgetdzb(dh, xy) { //获取点相关
    return jxs_l_for_azhs(dlb[dh].split("|")[xy])
}

function azgeths(hsh, xy) { //获取函数相关
    return jxs_l_for_azhs(hslb[hsh].split("|")[xy])
}

function azgetjd(hs1, hs2, djg, xy, jqd) { //寻找交点
    //var start = new Date().getTime() // 开始时间
    //之前算过!
    var d = -1
    //console.log(newgetjdn,hs1+"|"+hs2+"|"+jqd)
    for (var i = 0; i < newgetjdn.length; i++) {
        if (newgetjdn[i] == hs1 + "|" + hs2 + "|" + jqd || newgetjdn[i] == hs2 + "|" + hs1 + "|" + jqd) {
            var d = i
            break
        }
    }
    //console.log(d)
    if (d == -1) { //之前没算过!
        var syc = []
        var sycx = []
        var xzjd = []
        for (var q = -25; q < 25; q = accAdd(q, 0.5)) {
            var c = Math.abs(jxs_l_for_azhs(hslb[hs1].split("|")[0], q) - jxs_l_for_azhs(hslb[hs2].split("|")[0], q))
            if (c > 1000 || String(c) == "NaN") {} else {
                syc.push(c)
                sycx.push(q)
            }
        }
        var g = bubbleSort(syc, sycx)[1]
        if (djg > 5) {
            var pu = g.length
        } else {
            var pu = 5
        }

        if (jqd == "undefined" || jqd == undefined || jqd == "") {
            var onceadd = 0.01
        } else {
            var onceadd = jqd
        }
        //console.log(jqd,onceadd)
        var gg = g
        for (var t = 0; t < pu; t++) {
            var syc = []
            var sycx = []
            var g = gg
            for (var q = g[t] - 0.25; q < g[t] + 0.25; q = accAdd(q, onceadd)) {
                var c = Math.abs(jxs_l_for_azhs(hslb[hs1].split("|")[0], q) - jxs_l_for_azhs(hslb[hs2].split("|")[0], q))
                if (c > 100 || String(c) == "NaN") {} else {
                    syc.push(c)
                    sycx.push(q)
                }
            }
            var g = bubbleSort(syc, sycx)[1]
            //console.log(g)
            if (Math.abs(jxs_l_for_azhs(hslb[hs1].split("|")[0], g[0]) - jxs_l_for_azhs(hslb[hs2].split("|")[0], g[0])) < 2 * onceadd) {
                var ky = true
                for (var lm = 0; lm < xzjd.length; lm++) {
                    if (Math.abs(g[0] - xzjd[lm]) < 0.1) {
                        var ky = false
                    }
                }
                if (ky == true) {
                    xzjd.push(g[0])
                }
            }
        }
        var scsz = relebubbleSort(xzjd)
        newgetjdn.push(hs1 + "|" + hs2 + "|" + jqd)
        newgetjdz.push(scsz)
        //console.log(scsz)
    } else {
        var scsz = newgetjdz[d]
    }
    //var end = new Date().getTime() // 结束时间

    if (xy == 0) {
        return scsz[djg]
    } else if (xy == 1) {
        return jxs_l_for_azhs(hslb[hs1].split("|")[0], scsz[djg])
    } else if (xy == 2) {
        return scsz.length
    }

}

function azgetjzs(x, ygzddlb) { //过几点的函数曲线
    //var start = new Date().getTime()
    var d = -1
    for (var i = 0; i < newgetjxsn.length; i++) {
        if (newgetjxsn[i] == ygzddlb.toString()) {
            var d = i
            break
        }
    }
    //console.log(newgetjxsn,sz_to_zfc(ygzddlb),d)
    if (d == -1) {
        var zc = 0
        for (var i = 0; i < ygzddlb.length + 1; i++) {
            if (ygzddlb[i] == undefined) {
                var zc = i;
                break
            }
        }
        if (zc == 2) { //一次函数！
            var x1 = jxs_l_for_azhs(dlb[ygzddlb[0]].split("|")[0])
            var y1 = jxs_l_for_azhs(dlb[ygzddlb[0]].split("|")[1])
            var x2 = jxs_l_for_azhs(dlb[ygzddlb[1]].split("|")[0])
            var y2 = jxs_l_for_azhs(dlb[ygzddlb[1]].split("|")[1])
            var k = (y1 - y2) / (x1 - x2)
            var b = (x2 * y1 - x2 * y2 - x1 * y2 + x2 * y2) / (x2 - x1)
            var scsz = k + "*x+" + b
            addlog("函数解析式为 " + scsz)
            //console.log(scsz)
        } else {
            var y = ""
            for (var i = 0; i < zc; i++) {
                y = y + "(" + jxs_l_for_azhs(dlb[ygzddlb[i]].split("|")[0]) + "," + jxs_l_for_azhs(dlb[ygzddlb[i]].split("|")[1]) + ");"
            }
            var scsz = y.substring(0, y.length - 1)
            //console.log(scsz,ygzddlb,zc)
            var scsz = lglrcz(scsz)
            var u = ""
            for (var dm = 0; dm < scsz.split("+").length; dm++) {
                u = u + hjzs(scsz.split("+")[dm]) + "+"
            }
            var scsz = hjzs("(" + u + ")*(1)")
            //  //console.log(scsz,u)
        }
        newgetjxsn.push(ygzddlb.toString())
        newgetjxsz.push(scsz)
        addlog("函数解析式为 " + scsz)
    } else {
        var scsz = newgetjxsz[d]
    }

    var zzsc = jxs_l_for_azhs(scsz, x)
    //console.log(new Date().getTime()-start)
    return (zzsc)
}

function azgetjl(d1, d2) {
    var xc = Math.abs(jxs_l_for_azhs(dlb[d1].split("|")[0]) - jxs_l_for_azhs(dlb[d2].split("|")[0]))
    var yc = Math.abs(jxs_l_for_azhs(dlb[d1].split("|")[1]) - jxs_l_for_azhs(dlb[d2].split("|")[1]))
    var retjl = Math.sqrt(accAdd(accMul(xc, xc), accMul(yc, yc)))
    //addlog("距离为 "+retjl)
    return retjl
}

function bubbleSort(arr, raa) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) { //相邻元素两两对比
                var temp = arr[j + 1]; //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
                var pmet = raa[j + 1]; //元素交换
                raa[j + 1] = raa[j];
                raa[j] = pmet;
            }
        }
    }
    return [arr, raa];
}