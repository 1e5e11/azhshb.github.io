function xnsbaxqh(m) {
    if (m == "x") {
        document.getElementById('xnsb').style.backgroundColor = "var(--bjsdfz)"
    }
    if (m == "s") {
        document.getElementById('xnsb').style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
}

function wzpzyd(a, b) { //文字批注移动

    xsy = num_to_px(0, jxs_l_for_azhs(wzpzlb[a].split("|")[1]))[1] + dbj
    xsx = num_to_px(jxs_l_for_azhs(wzpzlb[a].split("|")[0]), 0)[0] + zbj
    var jlx = 0
    var jly = 0
    var isz = true
    var dx1 = NaN
    var dy1 = NaN

    document.onmousemove = function(h) {

        if (isz == true) {
            isz = false
            jlx = (h.clientX - Number(xsx))
            jly = (h.clientY - Number(xsy))
        }
        dx1 = (h.clientX - jlx) - zbj
        dy1 = (h.clientY - jly) - dbj
        dx = (dx1 - ((wztopx(wzpzlb[a].split("|")[2], yywzdx)[0] + zbj) / 2))
        dy = (dy1 - ((wztopx(wzpzlb[a].split("|")[2], yywzdx)[1] + 05) / 2))
        //console.log(h.clientX,h.clientY,xsx,xsy,jlx,jly,dx,dy)

        document.getElementById("pz" + a).style.left = dx + "px"
        document.getElementById("pz" + a).style.top = dy + "px"
    }
    document.onmouseup = function(m) {
        if (String(dx1) == "NaN" || String(dy1) == "NaN") {} else {
            wzpzlb.splice(a, 1, px_to_num(dx1, dy1, false)[0] + "|" + px_to_num(dx1, dy1, false)[1] + "|" + wzpzlb[a].split("|")[2] + "|" + wzpzlb[a].split("|")[3])
        }
        document.onmousemove = function(h) {
            fsdcds(h, 'm')
        };

    }
    document.ontouchmove = function(h) {
        xnsbaxqh("x")
        if (isz == true) {
            isz = false
            jlx = (h.touches[0].clientX - Number(xsx))
            jly = (h.touches[0].clientY - Number(xsy))
        }
        dx1 = (h.touches[0].clientX - jlx) - zbj
        dy1 = (h.touches[0].clientY - jly) - dbj
        dx = (dx1 - ((wztopx(wzpzlb[a].split("|")[2], yywzdx)[0] + 20) / 2))
        dy = (dy1 - ((wztopx(wzpzlb[a].split("|")[2], yywzdx)[1] + 05) / 2))

        document.getElementById("pz" + a).style.left = dx + "px"
        document.getElementById("pz" + a).style.top = dy + "px"
    }
    document.ontouchend = function(m) {
        if (String(dx1) == "NaN" || String(dy1) == "NaN") {} else {
            wzpzlb.splice(a, 1, px_to_num(dx1, dy1, false)[0] + "|" + px_to_num(dx1, dy1, false)[1] + "|" + wzpzlb[a].split("|")[2])
        }
        document.ontouchmove = function(h) {
            fsdcds(h, 't')
        };
        xnsbaxqh("s")
    }

}

function zhudbianhua() {
    ydisX = Number(document.getElementById("decsx").value)
    ydisY = Number(document.getElementById("decsy").value)

    hh = Number(document.getElementById("fvfrv").value)
    if (zdyset[19] == 'true') {
        var yx = Number(now_mouse_x) * numtopx - Number(now_mouse_x) * (xianshikuandu / hh)
        var yy = Number(now_mouse_y) * numtopx - Number(now_mouse_y) * (xianshikuandu / hh)
        ydisX = (ydisX - zqs) + yx //*((hh-hxxianshi)/hxxianshi)
        ydisY = (ydisY - dqs) - yy //*((hh-hxxianshi)/hxxianshi)
    }
    hxxianshi = hh


    pxtonum = accDiv(hxxianshi, xianshikuandu)
    numtopx = accDiv(xianshikuandu, hxxianshi)
    xrjqd = Number(document.getElementById("gdrft").value)

    xianshikuandu = Number(document.getElementById("bhcv").value)
    xianshigaodu = Number(document.getElementById("edsde").value)

    document.getElementById("yzhou").style.left = (ydisX - zqs) + "px"
    document.getElementById("xzhou").style.top = (ydisY - dqs) + "px"
    bianhau()
    cxjswgjj()
    huizhi()
}

function tianjiaxinhanshu() {
    var jxs = document.getElementById("grdgr").value
    var clorer = document.getElementById("wadwd").value
    var zuixiao = document.getElementById("hs-sm").value
    var zuida = document.getElementById("hs-zd").value
   // console.log(jxs, clorer, zuixiao, zuida)
    cjxhs(jxs, clorer, zuixiao, zuida)
    huizhi()
    TBxx()
}
function scdx(hsh, lx){
    delhs(hsh, lx)
    
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
function J_Z(){
    if(JZBmod==true){
        JZBmod=false
        document.getElementById('jzbqh').value='直'
    }else{
        JZBmod=true
        document.getElementById('jzbqh').value='极'
    }
    huizhi()
}
function qhsbydzbxms() {
    ydms++
    if (ydms > 3) {
        ydms = 0
    }
    if (ydms == 0) {
        document.getElementById("ydms").value = "模式：" + "移动"
    }
    if (ydms == 1) {
        document.getElementById("ydms").value = "模式：" + "画笔"
    }
    if (ydms == 2) {
        document.getElementById("ydms").value = "模式：" + "橡皮"
    }
    if (ydms == 3) {
        document.getElementById("ydms").value = "模式：" + "选择"
    }
}

function zidongchicun() { //自动尺寸
    xianshikuandu = document.body.clientWidth - 370
    xianshigaodu = document.body.clientHeight - 160
    document.getElementById('xzhou').style.top = (xianshigaodu / 2) + "px"
    document.getElementById('yzhou').style.left = (xianshikuandu / 2) + "px"
    ydisX = xianshikuandu / 2
    ydisY = xianshigaodu / 2
    bianhau()
    cxjswgjj()
    huizhi()
    ckccjc()
}

function dianmz(x) {
    var f = document.getElementById("diandemzi" + x).value
    var d = dlb[x].split("|")[0] + "|" + dlb[x].split("|")[1] + "|" + f
    dlb.splice(x, 1, d)
    document.getElementById("diandemzi" + x).setAttribute("value", f)
    huizhi()
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
    document.getElementById("clhk" + clh).setAttribute("value", jxs_l_for_azhs(m))
    document.getElementById("clsr" + clh).setAttribute("value", m)
    sxcl()
    huizhi()
}

function wzpzggnr(a) {
    var h = document.getElementById("wzpzsr" + a).value
    //console.log(h)
    document.getElementById("wzpzsr" + a).innerHTML = h
    chenchys("w" + a, 2, h)
    document.getElementById("pz" + a).innerHTML = wzpznrzh(wzpzlb[a].split("|")[2])
    huizhi()
}

function openjc(x) {
    window.open(x)
}

function zbxyd() { //坐标系操作

    clearInterval(prv)
    zllb=[]
    var disX
    var disY
    var ysf=0
    xsy = Number((document.getElementById("xzhou").style.top).split("px")[0]) //坐标系显示位置 x
    xsx = Number((document.getElementById("yzhou").style.left).split("px")[0]) //坐标系显示位置 y
    tip()
    zhintiaojiezryd()
    if (ydms == 0) { //移动


        xnsbaxqh("x")
        //l("开始移动",azm)
        var ydzbxcs = 1

        //document.getElementById("wanggexian").innerHTML=""
        if (zdyset[21] == "true") {} else {
            hbck.clearRect(0, 0, xianshikuandu, xianshigaodu)
            document.getElementById("wanggexian").style.display = "none"
        }

        document.ontouchmove = function (h) {
            

            if (ydzbxcs == 1) {
                ydzbxcs = 0
                disX = h.touches[0].clientX - xsx
                disY = h.touches[0].clientY - xsy
               // console.log(hbtocks)
               // alert(hbtocks)

                if(hbtocks==1){hbtocks++;return}
                if(hbtocks==0){hbtocks++}
                if (cpmsgbcs == 0) {
                    cpmsgb = "t"
                    cpmsgbcs = 1
                    document.getElementById("xnsb").style.display = "block"
                }
            } else {

                if (cpmsgb == "t") {
                    if(hbtocks>1&&ysf==0){
                     // alert(h.touches.length)
                     var tootx=h.touches[1].clientX
                     var tooty=h.touches[1].clientY
                    // var tootx=0
                    // var tooty=0
                        var c=Math.sqrt(Math.pow(h.touches[0].clientX-tootx,2)+Math.pow(h.touches[0].clientY-tooty,2))
                        //alert(c)
                       // console.log(c,hxxianshi,ysf)
                        ysf=c*hxxianshi
                        
                    }
                    var x = h.touches[0].clientX - disX
                    var y = h.touches[0].clientY - disY
                    ydisX = x
                    ydisY = y
                  //  tip(h.touches.length)
                    if(hbtocks>1&&ysf!==0){
               //         alert('az')
               var tootx=h.touches[1].clientX
              var tooty=h.touches[1].clientY
               //var tootx=0
              //var tooty=0
                var nc=Math.sqrt(Math.pow(h.touches[0].clientX-tootx,2)+Math.pow(h.touches[0].clientY-tooty,2))
                        hxxianshi=Math.floor(ysf/nc)+1
                        cxjswgjj()
                        tip(hxxianshi)
                        pxtonum = accDiv(hxxianshi, xianshikuandu)
                        numtopx = accDiv(xianshikuandu, hxxianshi)
                    }
                    document.getElementById("yzhou").style.left = x + "px"
                    document.getElementById("xzhou").style.top = y + "px"
                    if (zdyset[21] == "true") {
                        bianhau();
                        huizhi()
                    }
                    if (zdyset[20] == 'true') {
                        document.getElementById("divdis").style.top = -1 * xianshigaodu + (y - xsy) + "px"
                        document.getElementById("divdis").style.left = -1 * xianshikuandu + (x - xsx) + "px"
                    }
                }
            }
        }
        document.onmousemove = function(h) {
           
            if (ydzbxcs == 1) {
                ydzbxcs = 0
                disX = h.clientX - xsx
                disY = h.clientY - xsy
                //l(cpmsgbcs,cpmsgb)
                if (cpmsgbcs == 0) {
                    cpmsgb = "m"
                    cpmsgbcs = 1
                }
            } else {
                if (cpmsgb == "m") {
                    var x = h.clientX - disX
                    var y = h.clientY - disY
                    ydisX = x
                    ydisY = y
                    document.getElementById("yzhou").style.left = x + "px"
                    document.getElementById("xzhou").style.top = y + "px"
                    if (zdyset[21] == "true") {
                        bianhau();
                        huizhi()
                    }
                    if (zdyset[20] == 'true') {
                        document.getElementById("divdis").style.top = -1 * xianshigaodu + (y - xsy) + "px"
                        document.getElementById("divdis").style.left = -1 * xianshikuandu + (x - xsx) + "px"
                    }

                }
            }
        }
        document.onmouseup = function(m) {
            aa()
            document.onmousemove = function(h) {
                fsdcds(h, 'm')
            };
        }
        document.ontouchend =function (h) {yj(h)}

        function yj() {
            aa()
            hbtocks=0
            xnsbaxqh("s")
            document.ontouchmove = function(h) {
                fsdcds(h, 't')
            };
        }
    }
    if (ydms == 3) { //选择
        var c = Number(zdyset[9]) - 1
        document.onmousemove = function(h) {
            c++
            if (c % Number(zdyset[9]) == 0) {
                var x = h.clientX
                var y = h.clientY
                //console.log(x,y)
                find_hs_d(px_to_num(x, y))
            }
        }
        document.onmouseup = function() {
            c = 0
            document.onmousemove = function(h) {
                fsdcds(h, 'm')
            }
        }
        document.ontouchmove = function(h) {
            c++
            if (c % Number(zdyset[9]) == 0) {
                var x = h.touches[0].clientX
                var y = h.touches[0].clientY
                //console.log(x,y)
                find_hs_d(px_to_num(x, y))
            }
        }
        document.ontouchend = function() {
            xnsbaxqh("s")
            c = 0
            document.ontouchmove = function(h) {
                fsdcds(h, 't')
            }
        }
    }
    if (ydms == 1) { //画笔
        points = []
        first = true
        var dr = []
        hbck.lineWidth = 3
        hbck.strokeStyle = zdyset[0]
        var c = Number(zdyset[10]) - 1
        document.onmousemove = function(h) {
            c++
            if (c % Number(zdyset[10]) == 0) {
                dr.push([Number((px_to_num(h.clientX, h.clientY)[0]).toFixed(3)), Number((px_to_num(h.clientX, h.clientY)[1]).toFixed(3))])
                if (first == true) {
                    first = false
                    points.push(h.clientX - zbj, h.clientY - dbj)
                } else {
                    draw(h.clientX - zbj, h.clientY - dbj)
                }
            }

        }
        document.onmouseup = function() {
            document.onmousemove = function(h) {
                fsdcds(h, 'm')
            }
            if (dr.length < 3) {} else {
                drawlj.push(dr)
            }
            TBxx()
        }
        document.ontouchmove = function(h) {
            c++
            if (c % Number(zdyset[10]) == 0) {
                dr.push([Number((px_to_num(h.touches[0].clientX, h.touches[0].clientY)[0]).toFixed(3)), Number((px_to_num(h.touches[0].clientX, h.touches[0].clientY)[1]).toFixed(3))])
                if (first == true) {
                    first = false
                    points.push(h.touches[0].clientX - zbj, h.touches[0].clientY - dbj)
                } else {
                    draw(h.touches[0].clientX - zbj, h.touches[0].clientY - dbj)
                }
            }

        }
        document.ontouchend = function() {
            document.ontouchmove = function(h) {
                fsdcds(h, 't')
            }
            if (dr.length < 3) {} else {
                drawlj.push(dr)
            }
            TBxx()
            xnsbaxqh("s")
        }
    }
    if (ydms == 2) { //橡皮
       // console.log('az')
        var c = Number(zdyset[9]) - 1
        document.onmousemove = function(h) {
            //console.log('az')
            c++
            if (c % Number(zdyset[9]) == 0) {
                for (var r = 0; r < drawlj.length; r++) {
                    for (var i = 0; i < drawlj[r].length; i++) {
                        var op = drawlj[r][i]
                        if (Math.abs(px_to_num(h.clientX, h.clientY)[0] - op[0]) < Number(zdyset[8])) {
                            if (Math.abs(px_to_num(h.clientX, h.clientY)[1] - op[1]) < Number(zdyset[8])) {
                                drawlj.splice(r, 1)
                                r++
                                huizhi()
                                break
                            }
                        }
                    }
                }

            }

        }
        document.onmouseup = function() {
            document.onmousemove = function(h) {
                fsdcds(h, 'm')
            }
            TBxx()
        }

        document.ontouchmove =function(h){
            //console.log('az')
            c++
            if (c % Number(zdyset[9]) == 0) {
                for (var r = 0; r < drawlj.length; r++) {
                    for (var i = 0; i < drawlj[r].length; i++) {
                        var op = drawlj[r][i]
                        if (Math.abs(px_to_num(h.touches[0].clientX, h.touches[0].clientY)[0] - op[0]) < Number(zdyset[8])) {
                            if (Math.abs(px_to_num(h.touches[0].clientX, h.touches[0].clientY)[1] - op[1]) < Number(zdyset[8])) {
                                drawlj.splice(r, 1)
                                r++
                                huizhi()
                                break
                            }
                        }
                    }
                }

            }

        }

        document.ontouchend = function(){
            document.ontouchmove = function(h) {
                fsdcds(h, 't')
            }
            TBxx()
            xnsbaxqh("s")
        }
    }
}

function mousup(j) {
  //  console.log('setup')
    if (ydms == 0) {
        bianhau();
        huizhi()
    }else{
        
    }
}

function qrcz() {
    if (confirm("确认执行操作？") == true) {
        zxcz()
    }
    TBxx()
}
function B2(){
    if (confirm("确认撤销？撤销不可逆") == true) {
        BACK()
    }
}
function gxsbydqg() {
    if (gssbyd == false) {
        gssbyd = true
        document.getElementById('gssbydqhan').value = "跟随鼠标移动 ON"
    } else {
        gssbyd = false
        document.getElementById('gssbydqhan').value = "跟随鼠标移动 OFF"
    }

}

function sxcl(mod) { //刷新常量
    clearLB('all')
    for (var i = 0; i < cllb.length; i++) {
        if (cllb[i] == "") {
            clzlb.push(NaN)
        } else {
            clzlb.push(jxs_l_for_azhs(cllb[i].split("|")[1]))
        }
    }
    if (mod == 'zd-ts') {
        if (confirm("已清空缓存，是否要重绘制?") == true) {
            huizhi()
        }
    }
    return
    //alert("已清空缓存 请点击 刷新")
    //huizhi()
}

function hfqz() {
    huif()
}

function beif() { //导出
    var bc = output()
    document.getElementById("klkl").value = bc
    saveurl(bc, gettime() + '.azx')
}

function azfy(ms) {
    var jg = ""
    if (ms == "zyy") {
        var y = document.getElementById("uoppp").value
        document.getElementById("fyjg").value = az_cn_en(y)
    }
    if (ms == "yyz") {
        var y = document.getElementById("uoppp").value
        document.getElementById("fyjg").value = az_en_cn(y)
    }
    if (ms == "md5") {
        var y = document.getElementById("bgfgbbgfbgf").value
        document.getElementById("hbftggfhbfgbh").value = md5(y)
    }
    if (ms == "js") {
        var y = document.getElementById("cddddcdcdcdc").value
        document.getElementById("cdshhjshjdcshjchj").value = jxs_l_for_azhs(y)
    }
    if (ms == "djf") {
        var x = jxs_l_for_azhs(document.getElementById("xeeeeee").value)
        var s = jxs_l_for_azhs(document.getElementById("seeeeee").value)
        var jxs = document.getElementById("jxseeeeee").value
        //var jxs=jxs.replace(new RegExp('dx', 'g'), 'y');
        var dx = jxs_l_for_azhs(document.getElementById("dxeeeeee").value)
        var g = 0
        for (var h = Number(x); h <= Number(s); h = accAdd(h, dx)) {

            var po = jxs_l_for_azhs(jxs, h, Number(dx))
            //l(jxs, h, Number(dx), po, g)
            if (String(po) == "NaN") {} else {
                var g = accAdd(g, po)
            }
        }
        document.getElementById("wegyecsdbhnuieshn").value = g
    }
    if (ms == "azqd") {
        var y = document.getElementById("gergrggrgrvrdf").value
        document.getElementById("hnrcisbnhfcirufghbvisdr").value = qd_fqd(y, "qd")
    }
    if (ms == "azfqd") {
        var y = document.getElementById("gergrggrgrvrdf").value
        document.getElementById("hnrcisbnhfcirufghbvisdr").value = qd_fqd(y, "fqd")
    }
    if (ms == "lglr") {
        var y = document.getElementById("hyyjukuik").value
        document.getElementById("vfbghnhjnm").value = lglrcz(y)
    }
    if (ms == "huayuan") {
        var x = document.getElementById("tgtgtgtgtg").value
        var y = document.getElementById("frfrfrfrfr").value
        var r = document.getElementById("paoifrvohi").value
        if (document.getElementById("ghwdvecd").checked == true) {
            var jxs = "sqrt((" + r + ")^2_(x_" + x + ")^2)+" + y
        }
        if (document.getElementById("geaduytfwev").checked == true) {
            var jxs = "0_sqrt((" + r + ")^2_(x_" + x + ")^2)+" + y
        }


        //console.log(jxs)
        cjxhs(jxs, "black", "", "")
        huizhi
    }
    if (ms == "mathjs") {
        var y = document.getElementById("fsdrgvfrgfdrtgbdftgdgd").value
        document.getElementById("kgkrijiseoihui").value = math.evaluate(y)
    }
    if (ms == "xgm") {
        var s = document.getElementById("yyjytjtyuj").value
        var x = document.getElementById("jyjyjyjyjyjyj").value
        var jxs = document.getElementById("edrhgytr6").value
        document.getElementById("rghtftgnbgfty").value = xgm(x, s, jxs)
    }
    if (ms == "zctoaz") {
        var y = document.getElementById("xshygbyukhbku").value
        document.getElementById("sxjgybygujkghbu").value = zc_to_az(y)
    }
    if (ms == "aztozc") {
        var y = document.getElementById("xshygbyukhbku").value
        document.getElementById("sxjgybygujkghbu").value = az_to_zc(y)
    }
    if (ms == "xcdxnr") {
        var a = document.getElementById("ysughzeiurfuhbna").value
        var b = document.getElementById("ysughzeiurfuhbnb").value
        var c = document.getElementById("ysughzeiurfuhbnc").value
        chenchys(a, b, c)
        alert("做出更改，" + a + "的第" + b + "个值为" + c)
        huizhi()
    }
}
function jiarults(){
    var d=prompt("请输入联机码")
    if(isrel(d)==true&&d.length==5){
        jrqz(Number(d))
    }else{
        alert('无效输入')
    }
}
function cjlts(){
    var xy=''
    if (confirm("请阅读协议\n"+xy+"\n点击取消同意此协议") == false) {
        xjqz()
    }
}
function lt_send(){
   var nr= document.getElementById('fsltnr').value
   var mz= document.getElementById('fsltmz').value
   var dk= document.getElementById('fsltdk').value
   if(isrel(dk)==false){
    if(isrel(nr)==false){return}
    addXX('你',nr)
    document.getElementById('fsltnr').value=''
    return
   }
   if(isrel(nr)==false||isrel(mz)==false){return}
   ws.send(toCode("fx"+dk+mz+"|"+nr))
   document.getElementById('fsltnr').value=''
}
function xjdqz() {
    var x1 = document.getElementById("egfdgfbcujsx").value
    var y1 = document.getElementById("egfdgfbcujsy").value
    xjdian(x1, y1, document.getElementById("egfdgfbcujsz").value)
    huizhi()
    TBxx()
}

function xjclqz() {
    var x1 = document.getElementById("vffrrrrrrx").value
    var y1 = document.getElementById("vffrrrrrry").value
    xjcl(x1, y1)
    huizhi()
    sxcl()
    TBxx()
}

function tjwzpzqz() {
    var x = document.getElementById("gtrfetghbthbtrgx").value
    var y = document.getElementById("gtrfetghbthbtrgy").value
    var n = document.getElementById("gtrfetghbthbtrgz").value
    var u = document.getElementById("gtrfetghbthbtrgu").value
    if (x == "") {
        x = "0"
    };
    if (y == "") {
        y = "0"
    }
    tjwzpz(x, y, n, u)
    huizhi()
    TBxx()
}
function TB(){TBxx()}
function az() {

    azc++
    document.getElementById("azcs").innerHTML = jstext[3] + azc + "次！"
    document.getElementById("azcs").style.display = "block"
    setTimeout(function() {
        document.getElementById("azcs").style.display = "none";
    }, 800);
    localStorage.setItem("az", azc)
}

function hfccsz() { //清空设置
    if (confirm("确定要清空设置？") == true) {
        zdyset = mrsz
        localStorage.setItem("setting", sz_to_zfc(zdyset))
        //windowonload()
        zxcshsz()
        huizhi()
    }
}
function z2(){zl()}
function settingxunwen(j, num) {
    var g = prompt(j + " 为 " + setting(num) + " 设置为")
    if (String(g) == "NaN" || g == undefined) {} else {
        setting(num, g)
    }
}