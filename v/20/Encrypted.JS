//Encrypted.JS

function hfwbc() {
	if (confirm(language[193]) == true) {
		if (isrel(huifu) == true) {
			BAC2(huifu)
		}
	}
}

function zxsyc(z) {
	var c = document.getElementById(z).style.backgroundColor
	var zh = Number(z.split('zxn')[1])
	//console.log(zh,c)
	if (c == 'rgba(0, 0, 0, 0)') {
		document.getElementById(z).style.backgroundColor = 'var(--bjsdfz-a)'
		for (var i = 0; i < zlb[zh].length; i++) {
			yclb.push(zlb[zh][i])
			xzlb.push(zlb[zh][i])
			// eval( `setTimeout(function() {xzlb=arrremove(xzlb, '`+zlb[zh][i]+`');document.getElementById('`+zlb[zh][i]+`').style.backgroundColor=ycys;huizhi()}, 50);`)



		}

	} else {
		document.getElementById(z).style.backgroundColor = 'rgba(0, 0, 0, 0)'
		for (var w = 0; w < zlb[zh].length; w++) {
			yclb = arrremove(yclb, zlb[zh][w])
			if (isInArray(xzlb, zlb[zh][w]) == false) {
				xzlb.push(zlb[zh][w])
			} else {

			}
			document.getElementById(zlb[zh][w]).style.backgroundColor = "rgba(0, 0, 0, 0)"
		}
		document.getElementById('z' + zh).style.backgroundColor = 'rgba(0, 0, 0, 0)'
	}


	huizhi()
}

function xjzqz() {
	var d = document.getElementById('fdvgdtgth').value
	if (isrel(d) == false) {
		return
	}
	var dxlx = d.split(",")
	xjz(dxlx)
	huizhi()
}

function wzpzyd(a, b) { //文字批注移动

	xsy = num_to_px(0, jxs_l_for_azhs(wzpzlb[a].split("|")[1]))[1] + dbj
	xsx = num_to_px(jxs_l_for_azhs(wzpzlb[a].split("|")[0]), 0)[0] + zbj
	var jlx = 0
	var jly = 0
	var isz = true
	var dx1 = NaN
	var dy1 = NaN

	document.getElementById('topd').style.display = 'block'

	document.onpointermove = function (h) {

		if (isz == true) {
			isz = false
			jlx = (h.clientX * suofang - Number(xsx))
			jly = (h.clientY * suofang - Number(xsy))
		}
		dx1 = (h.clientX * suofang - jlx) - zbj
		dy1 = (h.clientY * suofang - jly) - dbj
		dx = (dx1 - ((wztopx(wzpzlb[a].split("|")[2], yywzdx)[0] + zbj) / 2))
		dy = (dy1 - ((wztopx(wzpzlb[a].split("|")[2], yywzdx)[1] + 5) / 2))
		//console.log(h.clientX*suofang,h.clientY*suofang,xsx,xsy,jlx,jly,dx,dy)

		document.getElementById("pz" + a).style.left = dx + "px"
		document.getElementById("pz" + a).style.top = dy + "px"
	}
	document.onpointerup = function (m) {
		document.getElementById('topd').style.display = 'none'
		if (String(dx1) == "NaN" || String(dy1) == "NaN") { } else {
			wzpzlb.splice(a, 1, px_to_num(dx1, dy1, false)[0] + "|" + px_to_num(dx1, dy1, false)[1] + "|" + wzpzlb[a].split("|")[2] + "|" + wzpzlb[a].split("|")[3])
		}
		document.onpointermove = function (h) {
			fsdcds(h, 'm')
		};
		document.onpointerup = function () { }
	}


}

function zhudbianhua() {
	ydisX = Number(document.getElementById("decsx").value)
	ydisY = Number(document.getElementById("decsy").value)

	hh = Number(document.getElementById("fvfrv").value)
	if (zdyset[19] == 'true') {
		var yx = Number(now_mouse_x) * numtopx - Number(now_mouse_x) * (xianshikuandu / hh)
		var yy = Number(now_mouse_y) * numtopx - Number(now_mouse_y) * (xianshikuandu / hh)
		ydisX = (ydisX) + yx //*((hh-hxxianshi)/hxxianshi)
		ydisY = (ydisY) - yy //*((hh-hxxianshi)/hxxianshi)
	}
	hxxianshi = hh

	xianshikuandu = Number(document.getElementById("bhcv").value)
	xianshigaodu = Number(document.getElementById("edsde").value)

	pxtonum = accDiv(hxxianshi, xianshikuandu)
	numtopx = accDiv(xianshikuandu, hxxianshi)
	xrjqd = Number(document.getElementById("gdrft").value)

	document.getElementById("yzhou").style.left = (ydisX) + "px"
	document.getElementById("xzhou").style.top = (ydisY) + "px"
	zbzzbqz()


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

function scdx(hsh, lx) {
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
		document.getElementById("wgxsqhan").value = language[202]
	} else {
		huizhiwangge = true
		document.getElementById("wgxsqhan").value = language[201]
	}
	huizhi()
}

function J_Z() {
	if (JZBmod == true) {
		JZBmod = false
		document.getElementById('jzbqh').value = language[24]
	} else {
		JZBmod = true
		document.getElementById('jzbqh').value = language[25]
	}
	huizhi()
}

function qhsbydzbxms() {
	ydms++
	if (ydms > 3) {
		ydms = 0
	}
	if (ydms == 0) {
		document.getElementById("ydms").value = language[18]
	}
	if (ydms == 1) {
		document.getElementById("ydms").value = language[19]
	}
	if (ydms == 2) {
		document.getElementById("ydms").value = language[20]
	}
	if (ydms == 3) {
		document.getElementById("ydms").value = language[21]
	}
}

function zidongchicun(q) { //自动尺寸
	xianshikuandu = document.getElementById("azhshb").clientWidth - 350
	xianshigaodu = document.getElementById("azhshb").clientHeight - 160
	document.getElementById('xzhou').style.transition = '0.5s cubic-bezier(0.5, 0, 0.5, 1)'
	document.getElementById('yzhou').style.transition = '0.5s cubic-bezier(0.5, 0, 0.5, 1)'
	document.getElementById('xzhou').style.top = (xianshigaodu / 2) - 1 + "px"
	document.getElementById('yzhou').style.left = (xianshikuandu / 2) - 1 + "px"
	setTimeout(() => {
		document.getElementById('xzhou').style.transition = '0s'
		document.getElementById('yzhou').style.transition = '0s'
	}, 500);
	ydisX = xianshikuandu / 2
	ydisY = xianshigaodu / 2
	if (q == true) {
		return
	}
	bianhau()
	cxjswgjj()
	huizhi()
	ckccjc(q)
}

function dianmz(x) {
	var f = document.getElementById("diandemzi" + x).value
	var d = dlb[x].split("|")[0] + "|" + dlb[x].split("|")[1] + "|" + f
	dlb.splice(x, 1, d)
	document.getElementById("diandemzi" + x).setAttribute("value", f)
	huizhi()
}

function clgb(clh, zgg) { //变量输入

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
	document.getElementById("clhk" + clh).value = jxs_l_for_azhs(m)
	document.getElementById("clsr" + clh).setAttribute("value", m)
	document.getElementById("clsr" + clh).value = m

	sxcl()
	huizhi()
	//TBxx()
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

function docMove(a, b) {
	if (b == 'true') {
		if (jltmod == true) {
			return
		}
	} else {
		if (zdyset[24] == 'true') {

		} else {
			return
		}
	}

	xsy = Number(document.getElementById(a).offsetTop)
	xsx = Number(document.getElementById(a).offsetLeft)
	document.getElementById(a).style.margin = ''
	document.getElementById(a).style.transition = '0s'
	document.getElementById(a).style.left = xsx + "px"
	document.getElementById(a).style.top = xsy + "px"

	// document.getElementById('topd').style.display='block'
	// document.getElementById('topd2').style.display='block'

	var ydzbxcs = 1

	document.onpointermove = function (h) {
		if (ydzbxcs == 1) {
			ydzbxcs = 0
			disX = h.clientX * suofang - xsx
			disY = h.clientY * suofang - xsy
		} else {
			var x = h.clientX * suofang - disX
			var y = h.clientY * suofang - disY
			ydisX = x
			ydisY = y
			document.getElementById(a).style.left = x + "px"
			document.getElementById(a).style.top = y + "px"

		}
	}
	document.onpointerup = function () {
		document.getElementById(a).style.transition = '0.5s'
		document.getElementById('topd').style.display = 'none'
		// document.getElementById('topd2').style.display='none'
		document.onpointermove = function (h) {

		};
		document.onpointerup = function () { }
	}
}

function zbxyd(event) { //坐标系操作

	clearInterval(prv)
	zllb = []
	var disX
	var disY
	var ysf = 0
	var zdzb = {
		x: 0,
		y: 0
	}
	var zdzbnum = {
		x: 0,
		y: 0
	}
	xsy = Number((document.getElementById("xzhou").style.top).split("px")[0]) + 1 //坐标系显示位置 x
	xsx = Number((document.getElementById("yzhou").style.left).split("px")[0]) + 1 //坐标系显示位置 y
	tip()
	zhintiaojiezryd()
	if (ydms == 0) { //移动

		//l("开始移动",azm)
		var ydzbxcs = 1

		//document.getElementById("wanggexian").innerHTML=""
		if (zdyset[21] == "true") { } else {
			hbck.clearRect(0, 0, xianshikuandu, xianshigaodu)
			document.getElementById("wanggexian").style.display = "none"
		}
		document.onpointermove = function (h) {
			//tip(h.tiltX)
			if (pointerlist[0] && pointerlist[0].pointerId !== h.pointerId) {
				pointerlist[1] = h
			} else {
				pointerlist[0] = h
			}


			//console.log(pointerlist,pointerlist.length)
			//l=pointerlist
			//console.log(ydzbxcs)
			if (ydzbxcs == 1) {//第一次
				ydzbxcs = 0
				disX = pointerlist[0].clientX * suofang - xsx
				disY = pointerlist[0].clientY * suofang - xsy
			} else {
				if (pointerlist.length > 1 && ysf == 0) {//第一次

					var tootx = pointerlist[1].clientX * suofang
					var tooty = pointerlist[1].clientY * suofang

					var c = Math.sqrt(Math.pow(pointerlist[0].clientX * suofang - tootx, 2) + Math.pow(pointerlist[0].clientY * suofang - tooty, 2))

					ysf = c
					zdzb = {
						x: (pointerlist[0].clientX * suofang + tootx) / 2 - xsx,
						y: (pointerlist[0].clientY * suofang + tooty) / 2 - xsy
					}
					zdzbnum = {
						x: ((pointerlist[0].clientX * suofang + tootx) / 2 - xsx - 20) * pxtonum,
						y: ((pointerlist[0].clientY * suofang + tooty) / 2 - xsy - 100) * pxtonum//-y
					}
				}

				if (pointerlist.length == 1) {
					var x = h.clientX * suofang - disX
					var y = h.clientY * suofang - disY
					ydisX = x
					ydisY = y
				}

				if (pointerlist.length > 1 && ysf !== 0) {

					var tootx = pointerlist[1].clientX * suofang
					var tooty = pointerlist[1].clientY * suofang

					var nc = Math.sqrt(Math.pow(pointerlist[0].clientX * suofang - tootx, 2) + Math.pow(pointerlist[0].clientY * suofang - tooty, 2))
					var b = Number((hxxianshi * ysf / nc).toFixed(2))
					ysf = nc

					if (b < 0.5) {
						b = 0.5
					}
					if (b > 100000) {
						b = 100000
					}
					//var sfbs=b/hxxianshi
					hxxianshi = b
					cxjswgjj()

					tip(hxxianshi)

					ydisX = ((pointerlist[0].clientX * suofang + tootx) / 2 - zdzb.x)
					ydisY = ((pointerlist[0].clientY * suofang + tooty) / 2 - zdzb.y)
					//wxldd(zdzb.x+'-'+zdzb.y,100)
					//wxldd(zdzbnum.x+'+'+zdzbnum.y,100)
					var yx = ((pointerlist[0].clientX * suofang + tootx) / 2 - ydisX - 20) - zdzbnum.x * numtopx
					var yy = ((pointerlist[0].clientY * suofang + tooty) / 2 - ydisY - 100) - zdzbnum.y * numtopx
					ydisX = ydisX + yx //*((hh-hxxianshi)/hxxianshi)
					ydisY = ydisY + yy //*((hh-hxxianshi)/hxxianshi)


					x = ydisX
					y = ydisY

				}
				document.getElementById("yzhou").style.left = x - 1 + "px"
				document.getElementById("xzhou").style.top = y - 1 + "px"
				zbzzbqz()


				if (zdyset[21] == "true") {
					bianhau(true);
					huizhi()
				}


			}

		}
		document.onpointerup = function (h) {
			ydzbxcs = 1; ysf = 0
			for (let i = 0; i < pointerlist.length; i++) {
				if (pointerlist[i].pointerId == h.pointerId) {
					pointerlist.splice(i, 1)
					continue
				}
			}
			if (pointerlist.length == 0) {
				fsdcds(h, 't')
				yj()
			}
		}

		function yj() {
			aa()
			hbtocks = 0
			huizhi()
			document.onpointermove = function (h) {
				fsdcds(h, 't')
			};
			document.onpointerup = function () { }
		}
	}
	if (ydms == 3) { //选择
		var c = Number(zdyset[9]) - 1
		var zhengzaiyidongdian = false
		xzzzlb = []
		yidong = false

		document.onpointerdown = function (h) {
			var x = h.clientX * suofang
			var y = h.clientY * suofang
			xzzzlb = find_hs_d(px_to_num(x, y))[0]
		}
		document.onpointermove = function (h) {
			yidong = true
			c++
			if (c % Number(zdyset[9]) == 0) {
				var x = h.clientX * suofang
				var y = h.clientY * suofang
				//console.log(x,y)
				if (zhengzaiyidongdian == false) {
					find_hs_d(px_to_num(x, y), true)
				}

			}
		}
		document.onpointerup = function () {
			if (yidong == false && xzzzlb.length == 0) {
				qkxz()
			}
			c = 0
			document.onpointermove = function (h) {
				fsdcds(h, 'm')
			}
			document.onpointerdown = function () { }
			document.onpointerup = function () { }
		}

	}
	if (ydms == 1) { //批注
		AZPen.begin(event);
	}
	if (ydms == 2) { //擦除
		// console.log('az')
		var c = Number(zdyset[9]) - 1
		document.onpointermove = function (h) {
			//console.log('az')
			c++
			if (c % Number(zdyset[9]) == 0) {
                var pos = px_to_num(h.clientX * suofang, h.clientY * suofang);
                var radius = Number(zdyset[8]), changed = false;
                for (var r = drawlj.length - 1; r >= 0; r--) {
                    if (drawlj[r].some(function (op) { return Math.abs(pos[0] - op[0]) < radius && Math.abs(pos[1] - op[1]) < radius; })) {
                        drawlj.splice(r, 1); changed = true;
                    }
                }
                if (changed) huizhi();

			}

		}
		document.onpointerup = function () {
			document.onpointermove = function (h) {
				fsdcds(h, 'm')
			}
			TBxx()
			document.onpointerup = function () { }
		}

	}
}

function mousup(j) {
	//  console.log('setup')
	if (ydms == 0) {
		bianhau();
		huizhi()
	} else {

	}
}

function qrcz() {
	if (confirm(language[212]) == true) {
		zxcz()
	}
	TBxx()
}

function B2() {
	if (confirm(language[213]) == true) {
		BACK()
	}
}

function gxsbydqg() {
	if (gssbyd == false) {
		gssbyd = true
		document.getElementById('gssbydqhan').value = language[195]
	} else {
		gssbyd = false
		document.getElementById('gssbydqhan').value = language[194]
	}

}



function sxcl(mod) { //刷新变量
	clearLB('all')
	//clzlb = []
	for (var i = 0; i < cllb.length; i++) {
		if (cllb[i] == "") {
			clzlb.push(NaN)
		} else {
			clzlb.push(jxs_l_for_azhs(cllb[i].split("|")[1]))
		}
	}
	if (mod == 'zd-ts') {
		if (confirm(language[214]) == true) {
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
	//document.getElementById("klkl").value = bc
	saveurl(LZString.compressToUTF16(bc), gettime() + '.azx', 2)
}

function jianrongmoshibaocun() {
	jianrongbaocun = true
	beif()
	jianrongbaocun = false
}

function cc() {
	return ((new Error()).stack.split("\n")[2].trim().split(" ")[1])
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

		if (zdyset[29] == 'true') {
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
		if (zdyset[27] == 'true') {
			y = zc_to_az(y)
		}
			console.log(y)
		var lp = jxs_l_for_azhs(y)
		xrjsqjg(lp)
	}
	if (ms == "djf") {
		var x = document.getElementById("xeeeeee").value
		x = az_to_zc(x)
		var s = document.getElementById("seeeeee").value
		s = az_to_zc(s)
		var jxs = document.getElementById("jxseeeeee").value
		jxs = az_to_zc(jxs)
		//var jxs=jxs.replace('dx', 'y');
		var dx = document.getElementById("dxeeeeee").value

		/*
		var g = 0
		for (var h = Number(x); h <= Number(s); h = accAdd(h, dx)) {

			var po = jxs_l_for_azhs(jxs, h, Number(dx))
			//l(jxs, h, Number(dx), po, g)
			if (String(po) == "NaN") {} else {
				var g = accAdd(g, po)
			}
		}
		document.getElementById("wegyecsdbhnuieshn").value = g*/
		//	console.log(jxs,dx,x,s)
		document.getElementById("wegyecsdbhnuieshn").value = Algebrite.defint(jxs, dx, x, s).toString()


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

		var bl = document.getElementById("dxeeeefee").value

		document.getElementById("rghtftgnbgfty").value = xgm(x, s, jxs, bl)
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
		alert(language[242] + a + language[243] + b + language[244] + c)
		huizhi()
	}
	if (ms == "dxszzxdqsj") {
		var a = document.getElementById("ysughzeiurfuhbna").value
		var b = document.getElementById("ysughzeiurfuhbnb").value
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
			//var u = ""
			alert(c.split("|")[b])
		}
		//chenchys(a, b, c)
		//alert("做出更改，" + a + "的第" + b + "个值为" + c)
		//huizhi()
	}
	if (ms == 'jxj_bhj') {
		jxxjxjjxjxjxxjjx()
	}
	if (ms == 'jxj_hj') {
		zhjjjjjjjjjjjjjjjjjjj()
	}
	if (ms == 'jxj_hj_2') {
		jxxjxjjjxjxjxjxjxxjjx()
	}/*
	if ( ms == 'jx' ) {
		var y = document.getElementById( "cddddcdcdcdc" ).value
		if ( zdyset[ 29 ] == 'true' ) {
			var y = th( y )
			var y = az_to_zc( y )
			if ( funjiance( y )[ 0 ] == true ) {} else {
				if ( confirm( language[215] ) == true ) {
					var y = funjiance( y )[ 1 ]
				} else {
					return
				}
			}
		}
		var lp = NX_JXSJS( y )
		document.getElementById( "cdshhjshjdcshjchj" ).value = lp
		if ( xzjg ) {
			saveurl( lp, y + '.txt' )
		}
		//alert( '解析报告已生成，在日志中查看' )
	}*/
	if (ms == 'hj') {
		var y = document.getElementById("cddddcdcdcdc").value
		/* 本地合并版：优先走本地符号引擎（画板函数 g* 会展开成含变量的解析式），
		   仅在本地引擎不可用时退回旧转换+Algebrite 路径 */
		if (typeof AZLocal !== 'undefined') {
			var lp = AZLocal.simplify(y)
			xrjsqjg(lp)
			return
		} else if (zdyset[29] == 'true') {
			var y = th(y)
			var y = az_to_zc(y)
			if (funjiance(y)[0] == true) { } else {
				if (confirm(language[215]) == true) {
					var y = funjiance(y)[1]
				} else {
					return
				}
			}
		}
		/* 本地合并版：优先使用精确有理数化简（AZSimplify），失败时回退 Algebrite */
		var lp = (typeof AZLocal !== 'undefined') ? AZLocal.simplify(y)
			: Algebrite.simplify(Algebrite.rationalize(y)).toString()
		xrjsqjg(lp)

	}
	if (ms == 'azgj') {
		var q = jxs_l_for_azhs(document.getElementById("gtfhtfjgyjkj").value)
		var z = jxs_l_for_azhs(document.getElementById("jgcyjkukuku").value)
		var m = jxs_l_for_azhs(document.getElementById("yhfhyjjukj").value)
		var cl = Number(document.getElementById("hfyjyjykjyu").value)
		var gjdx = document.getElementById("gergrggrgrvrdf").value
		guiji = []
		for (let index = 0; index < gjdx.split(',').length; index++) {
			if (gjdx.split(',')[index].split('-').length > 1) {
				var leibie = gjdx.split(',')[index].substring(0, 1)
				var a = Number(gjdx.split(',')[index].split('-')[0].split(leibie)[1])
				var b = Number(gjdx.split(',')[index].split('-')[1])


				//console.log(a,b,leibie)
				for (let i = a; i <= b; i++) {
					if (hslb[i] == '') {

					} else {
						guiji.push(leibie + i)
					}

				}
			} else {
				guiji.push(gjdx.split(',')[index])
			}
		}
		changliangdonghua(cl, q, z, m)
		//var q=jxs_l_for_azhs(document.getElementById("").value)
	}
	if (ms == 'azdh') {
		var gjdx = document.getElementById("fthjykjgjgjuju").value
		//console.log(gjdx)
		var e = []
		for (let i = 0; i < gjdx.split(';').length - 1; i++) {
			var c = gjdx.split(';')[i]
			var d = []
			for (let j = 0; j < c.split(',').length; j++) {
				d.push(jxs_l_for_azhs(c.split(',')[j]))
			}
			e.push(d)
		}
		var t = Number(gjdx.split(';')[gjdx.split(';').length - 1])
		donghua(e, t)
	}
}

function xzjgonoff() {
	if (!xzjg) {
		xzjg = true
		document.getElementById("baocunjieguoweiwenjian").value = language[72]
	} else {
		xzjg = false
		document.getElementById("baocunjieguoweiwenjian").value = language[71]
	}
}

function jiarults() {
	var d = prompt(language[236])
	if (isrel(d) == true && d.length == 5) {
		jrqz(String(d))
	} else {
		wxldd(language[235], 1200)
	}
}

function cjlts() {
	var xy = ''
	/*	if ( confirm( "请阅读协议\n" + xy + "\n点击取消同意此协议" ) == false ) {
			xjqz()
		}*/
	xjqz()
}

function lt_send() {
	var nr = document.getElementById('fsltnr').value
	if (isrel(useneme) == true) {
		var mz = useneme
	} else {
		var mz = document.getElementById('fsltmz').value
	}
	//console.log(nr)
	nr = nr.replace(/\n/g, '<br>')
	//console.log(nr)
	var dk = document.getElementById('fsltdk').value
	if (nr.substring(0, 4) == '出厂设置') {
		localStorage.setItem('czx', '')
		return
	}
	if (isrel(dk) == false) {
		if (isrel(nr) == false) {
			return
		}
		addXX('你', nr)
		document.getElementById('fsltnr').value = ''
		return
	} else if (dk == '114514') {
		addXX('你', nr)
		document.getElementById('fsltnr').value = ''
		_(nr)
		return
	} else if (mz == 'wx') {
		addXX('你', nr)
		_("fwx(`" + dk + "`,`" + nr + "`)")
		return
	}
	if (isrel(nr) == false || isrel(mz) == false) {
		return
	}
	qianzhi(("fx" + dk + gaojilianjishiyongmiyue + "|" + mz + "|" + compileStr(nr)))
	document.getElementById('fsltnr').value = ''

	document.getElementById('fsltnr').placeholder = '5'
	setTimeout(() => {
		document.getElementById('fsltnr').placeholder = '4'
		setTimeout(() => {
			document.getElementById('fsltnr').placeholder = '3'
			setTimeout(() => {
				document.getElementById('fsltnr').placeholder = '2'
				setTimeout(() => {
					document.getElementById('fsltnr').placeholder = '1'
					setTimeout(() => {
						document.getElementById('fsltnr').placeholder = ''
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}

function jzltjl(a) {
	if (a > 0) {
		var a = a
	} else {
		var a = prompt(language[239])
	}
	qianzhi('ml' + document.getElementById('fsltdk').value + "|" + a + "|" + document.getElementById('fsltmz').value + "|" + gaojilianjishiyongmiyue)
}

function xjdqz() {
	var x1 = document.getElementById("egfdgfbcujsx").value
	var y1 = document.getElementById("egfdgfbcujsy").value
	if (zdyset[27] == 'true') {
		x1 = zc_to_az(x1)
		y1 = zc_to_az(y1)
	}
	xjdian(x1, y1, document.getElementById("egfdgfbcujsz").value)
	huizhi()
	TBxx()
}

function xjclqz() {
	var x1 = document.getElementById("vffrrrrrrx").value
	var y1 = document.getElementById("vffrrrrrry").value
	if (zdyset[27] == 'true') {
		y1 = zc_to_az(y1)
	}
	xjcl(x1, y1)
	huizhi()
	sxcl()
	TBxx()
}
var zxs = 0

function zxhkqz(hsh) {
	zxs++
	if (zxs % Number(zdyset[25]) == 0) {
		clgb(hsh, 'hk')
	}
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

function zbzxsqh() {
	if (document.getElementById("xzhou").style.display == 'none') {
		document.getElementById("xzhou").style.display = 'block'
		document.getElementById("yzhou").style.display = 'block'
		document.getElementById("zbzwgxsqhan").value = language[203]
		zbzxs = true
	} else {
		document.getElementById("xzhou").style.display = 'none'
		document.getElementById("yzhou").style.display = 'none'
		document.getElementById("zbzwgxsqhan").value = language[204]
		zbzxs = false
	}
	huizhi()
}

function TB() {
	TBxx()
	//tip('记录一个存档点以撤销操作',5000)
}

function az() {

	azc++
	//document.getElementById('ldd').style.left = (document.getElementById("azhshb").clientWidth) / 2  + 'px'
	document.getElementById("azcs").innerHTML = language[0] + azc + language[76]
	document.getElementById("azcs").style.display = "block"
	setTimeout(function () {
		document.getElementById("azcs").style.display = "none";
	}, 800);
	localStorage.setItem("az", azc)
	//_('zyd()')
	wxldd(language[0], 400)
	tip(language[0], 5000)
}
var lddcd = 0
var allowldddrag = 0


function lddcdsh() {
	allowldddrag = 0
	document.getElementById('ldd').style.left = (document.getElementById("azhshb").clientWidth) / 2 - 150 + 'px'
	setTimeout(() => {
		document.getElementById('ldd').style.transition = '0s'
		document.getElementById('ldd').style.right = '0px'
		document.getElementById('ldd').style.left = '0px'
		document.getElementById('ldd').style.transition = '0.5s'
		document.getElementById('ldd').style.top = '0px'
	}, 500);
	ldd_sh()
}
function azd() {
	if (lddcd) {
		lddcd = 0
		lddcdsh()
	} else {
		lddcd = 1
		azc++
		document.getElementById("azcs").innerHTML = language[0] + azc + language[76]
		document.getElementById("azcs").style.display = "block"
		setTimeout(function () {
			document.getElementById("azcs").style.display = "none";
		}, 800);
		localStorage.setItem("az", azc)
		//_('zyd()')
		//wxldd(language[0], 400)
		tip(language[0], 5000)

		document.getElementById('lddnr').innerHTML = ''

		//onpointerdown="docMove(this.id)"
		//document.getElementById('ldd').style.margin=''

		ldd_zk()

		setTimeout(() => {
			document.getElementById('ldd').style.transition = '0s'
			document.getElementById('ldd').style.right = 'auto'
			document.getElementById('ldd').style.left = (document.getElementById("azhshb").clientWidth) / 2 - 150 + 'px'
			allowldddrag = 1
		}, 500);

	}
	//console.log('cd')


}





function dragldd() {
	if (allowldddrag) {
		docMove('ldd', 'true')
	}
}





function hfccsz() { //清空设置
	if (confirm(language[225]) == true) {
		zdyset = mrsz
		localStorage.setItem("setting", sz_to_zfc(zdyset))
		//windowonload()
		zxcshsz()
		huizhi()
		setTimeout(() => {
			wxldd(language[226], 1200)
		}, 5000);
	}


}

function zhanK(id) {
	if (document.getElementById('zdnr' + id).style.display == 'block') {
		document.getElementById('zdnr' + id).style.display = 'none'
		document.getElementById('zdksr' + id).value = '↓'
	} else {
		document.getElementById('zdnr' + id).style.display = 'block'
		document.getElementById('zdksr' + id).value = '↑'
	}
}

function z2() {
	zl()
}

function settingxunwen(j, num) {
	var g = prompt(j + language[240] + setting(num) + language[241])
	if (String(g) == "NaN" || g == undefined) { } else {
		setting(num, g)
	}
}

function ldd_zk() {
	zhijilddzk = true
	if (getcolor() == 'black') {
		var cl = 'rgba(255, 255, 255, 0.4)'
	} else {
		var cl = 'rgba(0, 0, 0, 0.4)'
	}
	document.getElementById('lddnr').style.display = 'block'
	document.getElementById('lddnr').style.width = '300px'
	document.getElementById('ldd').style.height = '300px'
	document.getElementById('ldd').style.top = '20px'
	document.getElementById('ldd').style.width = '300px'
	//document.getElementById('ldd').style.backgroundColor = cl

	setTimeout(() => {
		//  document.getElementById('ldd').style.transition= '0s'



	}, 400);

}

function ldd_sh() {
	zhijilddzk = false
	document.getElementById('ldd').style.height = '2px'
	document.getElementById('ldd').style.top = '2px'
	//  document.getElementById('ldd').style. backdropFilter='blur(00px)'
	//  document.getElementById('ldd').style. WebkitBackdropFilter='blur(00px)'
	document.getElementById('lddnr').style.display = 'none'
	document.getElementById('lddnr').style.width = '120px'
	document.getElementById('ldd').style.width = '120px'
	if (getcolor() == 'black') {
		var cl = 'rgba(0, 0, 0, 1)'
	} else {
		var cl = 'rgba(255, 255, 255, 1)'
	}
	//document.getElementById('ldd').style.border=" 1px solid "+cl;
	setTimeout(() => {

		//document.getElementById('ldd').style.backdropFilter = 'blur(30px)'
		//document.getElementById('ldd').style.WebkitBackdropFilter = 'blur(30px)'

		//  document.getElementById('ldd').style.transition= '0.4s'
	}, 400);
}

function pu(b) {
	if (b) { } else {
		var b = '1.3'
	}
	jltmod = true
	var d = document.getElementsByTagName("div");
	for (let i = 2; i < d.length; i++) {
		const element = d[i];
		element.style.display = 'none'
	}
	var d = document.getElementsByTagName("input");
	for (let i = 0; i < d.length; i++) {
		const element = d[i];
		element.style.display = 'none'
	}
	var d = document.getElementsByTagName("select");
	for (let i = 0; i < d.length; i++) {
		const element = d[i];
		element.style.display = 'none'
	}
	var d = document.getElementsByName("liaotian");
	for (let i = 0; i < d.length; i++) {
		const element = d[i];
		element.style.display = 'block'
	}
	document.getElementById('ldd').style.display = 'block'
	var k = document.body.clientWidth
	var g = document.body.clientHeight
	document.getElementById('LT').style.height = '100%'
	document.getElementById('LT').style.width = '100%'
	document.getElementById('LT').style.top = '0px'
	document.getElementById('LT').style.left = '0px'
	document.getElementById('LT').style.overflow = 'hidden'
	document.getElementById('fsltnr').style.height = '15%'
	document.getElementById('fasong').style.height = '15%'
	document.getElementById('ltk').style.left = '-1px'
	document.getElementById('ltk').style.width = '100%'
	document.getElementById('ltk').style.borderRadius = '0px'
	document.getElementById('fsltnr').style.left = '-1px'
	document.getElementById('fsltnr').style.width = '83%'
	document.getElementById('fsltnr').style.borderRadius = '0px'
	document.getElementById('fasong').style.right = '0px'
	document.getElementById('fasong').style.width = '17%'
	document.getElementById('fasong').style.borderRadius = '0px'
	document.getElementById('LT').style.borderRadius = '0px'
	var y = document.getElementById('head').innerHTML
	document.getElementById('head').innerHTML = y + `<meta name="viewport" content="width=device-width, initial-scale=` + b + `, maximum-scale=` + b + `, user-scalable=0">`
}

function wxldd(a, t) {
	if (lddcd) {
		lddcd=0
		lddcdsh()
		setTimeout(() => {
			h()
		}, 1000);
	} else {
		h()
	}
	function h() {
		document.getElementById('lddnr').innerHTML = a
		ldd_zk()
		setTimeout(() => {
			ldd_sh()
		}, t);
	}

}

function xsbds(jxs) {

	document.getElementById('biaodashi').style.display = 'block'
	document.getElementById('xsbds').innerHTML = ''
	katex.render(jxs, document.getElementById('xsbds'), {
		throwOnError: false
	});
}

function xianshibiaodashi() {
	var m = document.getElementById('cddddcdcdcdc').value
	m = az_to_zc(m)
	//pch
	/*
	zc_to_math( m )*/
	//var jxslatex = Algebrite.run("printlatex(" + m + ")").toString()
	var jxslatex = convertToLaTeX(m).replace(/\\cdot/g, '')
	xrjsqjg(jxslatex)
	xsbds(jxslatex)
}

function zbzzbqz() {
	if (zbzxs) {

	} else {
		return
	}
	var t = document.getElementById("xzhou").offsetTop
	var l = document.getElementById("yzhou").offsetLeft
	document.getElementById("xzhou").style.top = Math.round(t) + 'px'
	document.getElementById("yzhou").style.left = Math.round(l) + 'px'
}

function qvanxvan() {
	for (let i = 0; i < hslb.length; i++) {
		if (hslb[i] == '') {
			continue
		}
		var c = 'h' + i
		if (isInArray(xzlb, c)) {

		} else {
			xz(c)
		}
	}
	for (let i = 0; i < dlb.length; i++) {
		if (dlb[i] == '') {
			continue
		}
		var c = 'd' + i
		if (isInArray(xzlb, c)) {

		} else {
			xz(c)
		}
	}
	for (let i = 0; i < cllb.length; i++) {
		if (cllb[i] == '') {
			continue
		}
		var c = 'c' + i
		if (isInArray(xzlb, c)) {

		} else {
			xz(c)
		}
	}
	for (let i = 0; i < wzpzlb.length; i++) {
		if (wzpzlb[i] == '') {
			continue
		}
		var c = 'w' + i
		if (isInArray(xzlb, c)) {

		} else {
			xz(c)
		}
	}
}

function fanxvan() {
	for (let i = 0; i < hslb.length; i++) {
		if (hslb[i] == '') {
			continue
		}
		var c = 'h' + i
		xz(c)
	}
	for (let i = 0; i < dlb.length; i++) {
		if (dlb[i] == '') {
			continue
		}
		var c = 'd' + i
		xz(c)
	}
	for (let i = 0; i < cllb.length; i++) {
		if (cllb[i] == '') {
			continue
		}
		var c = 'c' + i
		xz(c)
	}
	for (let i = 0; i < wzpzlb.length; i++) {
		if (wzpzlb[i] == '') {
			continue
		}
		var c = 'w' + i
		xz(c)
	}
}

function chongfu() {
	TBxx()
	for (let t = 0; t < xzlb.length; t++) {
		const element = xzlb[t];
		var mod = element.substring(0, 1)
		var hao = Number(element.substring(1, element.length))
		if (mod == "h") {
			var c = hslb[hao].split('|')
			cjxhs(c[0], c[1], c[2], c[3])
			hslb.splice(hslb.length - 2, 1, hslb[hao])
		}
		if (mod == "d") {
			var c = dlb[hao].split('|')
			xjdian(c[0], c[1], c[2])
		}
		if (mod == "c") {
			var c = cllb[hao].split('|')
			xjcl(c[0], c[1])
		}
		if (mod == "w") {
			var c = wzpzlb[hao].split('|')
			tjwzpz(c[0], c[1], c[2], c[3])
		}
	}
	huizhi()

}

function shezhiduixiang() {
	if (xzlb.length < 1) {
		alert(language[245])
		return
	}
	var g = xzlb[0].substring(0, 1)
	var g1 = xzlb[0].substring(0, 1)
	for (let i = 0; i < xzlb.length; i++) {
		//console.log(g1,xzlb[i].substring(0,1))
		if (xzlb[i].substring(0, 1) == g1) {

		} else {
			alert(language[246])
			return
		}
		g = g + xzlb[i].substring(1, xzlb[i].length) + ','
	}
	g = g.substring(0, g.length - 1)
	document.getElementById("ysughzeiurfuhbna").value = g
	gnqh('gn13')
	document.getElementById("ysughzeiurfuhbnb").focus()
}
