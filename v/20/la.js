//la/js
function jcymygnhs(c) {
	var j = false

	for (let i = 0; i < u3.length; i++) {
		if (isinStr(c, u3[i]) == true || isinStr(c, th(u3[i])) == true) {
			j = true
		}
	}
	return j
}
function hqjxj(jxs) {

	var rrr0 = ''

	console.log(jxs)
	if (jxs) {

	} else {
		return
	}

	var zhd = fth("'" + cljxs(jxs.replace(new RegExp('，', 'g'), ',')) + "'")
		.replace(new RegExp('，', 'g'), ',');

	var zhd = zhd.replace(new RegExp("\\+'\\+'\\+", 'g'), '啊这')

	var zhd = zhd.replace(new RegExp("'\\+'", 'g'), '')
	var zhd = zhd.replace(new RegExp("\\+''", 'g'), '')
	var zhd = zhd.replace(new RegExp("''\\+", 'g'), '')
	var zhd = zhd.replace(new RegExp("''\\+", 'g'), '')

	var zhd = zhd.replace(new RegExp("啊这", 'g'), "+'+'+")

	console.log(zhd)

	for (let i = 0; i < u3.length; i++) {
		const element = u3[i];
		zhd = zhd.replace(new RegExp(element, 'g'), hsdy(element) + '_w');
	}
	console.log(zhd)
	return zhd
}
function cljxs(jxs, jy) {
	console.log(jy)

	var zuokuohao = 0 //括号套了几层
	var diaoyongzifuchuang = th(jxs)
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('\\(', 'g'), '（');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('\\)', 'g'), '）');
	for (var i = 0; i < diaoyongzifuchuang.length; i++) {
		var gh = diaoyongzifuchuang.substring(i, i + 1)
		if (gh == "（") {
			zuokuohao++
		}
	}

	for (var gt = 0; gt < zuokuohao + 0; gt++) { //拆括号
		var qianmdkh = 0
		for (var i = 0; i < diaoyongzifuchuang.length; i++) {
			var gh = diaoyongzifuchuang.substring(i, i + 1)
			if (gh == "（") {
				var qianmdkh = i
			} else
				if (gh == "）") {
					var tj = diaoyongzifuchuang.substring(qianmdkh + 1, i)
					var jg = '(' + tj + ')'
					var hsmc = 0

					//console.log(tj)
					var hanshumc = diaoyongzifuchuang.substring(qianmdkh - 2, qianmdkh)
					if (isInArray(u3, fth(hanshumc)) == true) { //有多个变量

						console.log('ohh')
						var tj = tj.replace(new RegExp('x,', 'g'), '');
						//  var hanshumc = diaoyongzifuchuang.substring(qianmdkh - 2, qianmdkh)
						var zhscs = []
						for (var dp = 0; dp < tj.split(",")
							.length; dp++) {
							zhscs.push(zijisuan(tj.split(",")[dp]))
						}



						var zsdbls = 0
						for (let kq = zhscs.length - 1; kq >= 0; kq--) {
							const element = zhscs[kq];
							if (isrel(element) == true || element == 0) {
								zsdbls = kq + 1
								break
							}
						}
						//console.log(hanshumc,zsdbls)
						if (hanshumc == 'gc' || hanshumc == 'gd') {
							zsdbls--
							//var jg=''
						} else {
							// var jg=hanshumc+'('
						}
						var jg = "'+" + hanshumc + '('
						var thjg = true

						console.log(zsdbls)
						for (var kq = 0; kq < zsdbls; kq++) {
							console.log(kq, zsdbls, hanshumc, zhscs)
							const element = zhscs[kq];
							if (hanshumc == 'gs' || hanshumc == 'gp') {
								var lay = 'd'
							} else if (hanshumc == 'gw' || hanshumc == 'gg') {
								if (kq > 0) {
									var lay = 'd'
								} else {
									var lay = 'h'
								}

							} else {
								var lay = hsdxlx(hanshumc, kq)
							}

							var r = element

							var sfjy = true
							if (lay == 'd') {
								var sfjy = true
								if (hanshumc == 'gd') {
									if (zhscs[1] == 0) {
										var r = "'" + cljxs(l_az_to_zc(dlb[element].split('|')[0]), true) + "'"
									}
									if (zhscs[1] == 1) {
										var r = "'" + cljxs(l_az_to_zc(dlb[element].split('|')[1]), true) + "'"
									}
								} else {
									var r = '[' + "'" + cljxs(l_az_to_zc(dlb[element].split('|')[0]), true) + "'" + '，' + "'" + cljxs(l_az_to_zc(dlb[element].split('|')[1]), true) + "'" + ']'
								}

								var sfjy = false
							} else if (lay == 'h') {
								//if(yhsjx(hslb[element].split('|')[0])[0]==true){//手动圆函数
								var sfjy = true
								if (hanshumc == 'gj') {
									var r = "'" + cljxs(l_az_to_zc(hslb[element].split('|')[0]), true) + "'"
									if (kq < 2) {
										var r = r + ",'" + (hslb[element].split('|')[0]) + "'"
									}
								} else {
									var r = "'" + cljxs(l_az_to_zc(hslb[element].split('|')[0]), true) + "'"
								}

								var sfjy = false
								// }else{
								// var r=cljxs(hslb[element].split('|')[0],sfjy)
								// }

							} else if (lay == 'c') {
								if (jcymygnhs(cllb[element].split('|')[1]) == true) {
									var sfjy = true
									var r = "'" + cljxs(l_az_to_zc(cllb[element].split('|')[1]), true) + "'"
									var sfjy = false
								} else {
									var sfjy = true
									var r = "'" + cllb[element].split('|')[0] + "'"
									var sfjy = false

								}
							}
							if (thjg == false) {
								thjg = true
								//  jg=r
							} else {
								if (kq + 1 >= zsdbls) {
									var dh = ''
								} else {
									var dh = ','
								}
								jg = jg + r + dh
							}


						}



						jg = jg + ')'
						console.log(jg, jy)
						//  if(jy==true){
						jg = jg + "+'"
						// }
						console.log(jg)

						var hsmc = 2


					}
					//console.log(tj)
					diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh - hsmc) + jg + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)
					//console.log(diaoyongzifuchuang)
					break
				}
		}
	}
	console.log(diaoyongzifuchuang)

	return diaoyongzifuchuang
}
function zhuanhuanyuanjxs(jxs) {
	var kh = 0
	var yhk = 0
	var a = false
	var b = false
	var c = false
	if (jxs.substring(0, 2) == '0_' || jxs.substring(0, 2) == '0-') {
		var yjxs = jxs.substring(2, jxs.length)
	} else {
		var yjxs = jxs
	}
	for (let i = 0; i < yjxs.length; i++) {
		const element = yjxs.substring(i, i + 1);
		if (element == '(') {
			kh++
			if (kh == 2) {
				if (a == false) {
					var yhk = i + 1
				} else {
					if (b == false) {
						var yhk = i + 1
					}
				}
			}


		}
		if (element == ')') {
			kh--
			if (kh == 1) {
				if (a == false) {
					a = yjxs.substring(6, i);
				} else {
					if (b == false) {
						b = yjxs.substring(yhk, i);

					}
				}
			}
			if (kh == 0) {
				if (a == false) { } else {
					if (b == false) { } else {
						if (c == false) {
							c = yjxs.substring(i + 2, yjxs.length);
						}
					}
				}
			}
		}
	}
	return [b.substring(2, b.length), c, a]
}

function NBjxy(jxs) {
	var jxs = th(jxs)
	var jxs = zc_to_az(jxs)
	if (jxs.substring(0, 4) == 'sqrt' || jxs.substring(0, 4) == '0_sq' || jxs.substring(0, 4) == '0-sq') {
		var a = zhuanhuanyuanjxs(jxs)[0]
		var b = zhuanhuanyuanjxs(jxs)[1]
		var r = zhuanhuanyuanjxs(jxs)[2]
	} else {
		var a = jxs.substring(2, jxs.length)
			.split(';')[0]
		var b = jxs.substring(2, jxs.length)
			.split(';')[1]
		var r = jxs.substring(2, jxs.length)
			.split(';')[2]
	}
	return [, eval(hqjxj(a)), eval(hqjxj(b)), eval(hqjxj(r))]
}

function NBjxychs(jxs) {

	var jxs = th(jxs)

	function abandon(jxs) {
		var kh = 0
		var yhk = 0
		var a = undefined
		var b = undefined

		var yjxs = jxs
		//console.log(yjxs)
		for (let i = 0; i < yjxs.length; i++) {
			const element = yjxs.substring(i, i + 1);
			if (element == '(') {
				kh++
			}
			if (element == ')') {
				kh--
				if (kh == 0) {
					if (!a) {
						a = yjxs.substring(1, i);
						b = yjxs.substring(i + 4, yjxs.length);
					}
				}

			}
		}
		//console.log(a,b)
		return [eval(hqjxj(a)), eval(hqjxj(b))]
	}
	return abandon(jxs)
}



function azgetjd_w(hs1, yhs1, hs2, yhs2, djg, xy, jqd) {
	/*
	函数1（解析解）
	函数1（原解析式）
	函数2（解析解）
	函数2（原解析式）




	*/
	//console.log()
	function jshsdymath(j) {
		for (let i = 0; i < u3.length; i++) {
			const element = u3[i];
			var j = j.replace(new RegExp(hsdy(element) + '_w', 'g'), th(element));
		}
		return j
	}
	var yhs1 = jshsdymath(yhs1)
	var yhs2 = jshsdymath(yhs2)
	console.log(hs1, yhs1, hs2, yhs2, djg, xy, jqd)
	if (yhs1.substring(0, 2) == "x:" || yhs2.substring(0, 2) == "x:") { //平行于y的直线
		// console.log('pxy')
		if (yhs1.substring(0, 2) == "x:") {
			if (yhs2.substring(0, 2) == "x:") {
				var scsz = [
					[]
				]
			} else {
				var ae = (hs1.substring(2, hs1.length))
				var jd_y = thx(hs2, '(' + ae + ')')
				var jd_x = ae
				var xys = [jd_x, jd_y]
				var scsz = [xys]
			}
		} else if (yhs2.substring(0, 2) == "x:") {
			if (yhs1.substring(0, 2) == "x:") {
				var scsz = [
					[]
				]
			} else {
				var ae = (hs2.substring(2, hs1.length))
				var jd_y = thx(hs1, '(' + ae + ')')
				var jd_x = ae
				var xys = [jd_x, jd_y]
				var scsz = [xys]
			}
		}
		//  console.log(scsz)
	} else

		if (yhsjx(yhs1)[0] == true || yhsjx(yhs2)[0] == true) { //有圆函数
			console.log('有圆函数')
			if (yhsjx(yhs1)[0] == true) {
				var h1jxs = hs1;
				var h2jxs = hs2
				var yh1jxs = yhs1;
				var yh2jxs = yhs2
			} else {
				var h1jxs = hs2;
				var h2jxs = hs1
				var yh1jxs = yhs2;
				var yh2jxs = yhs1
			}
			if (yhsjx(yh2jxs)[0] == true) { //双圆
				console.log('双圆')
				var yda = NBjxy(h1jxs)[1]
				var ydb = NBjxy(h1jxs)[2]
				var ydr = NBjxy(h1jxs)[3]

				var y2da = NBjxy(h2jxs)[1]
				var y2db = NBjxy(h2jxs)[2]
				var y2dr = NBjxy(h2jxs)[3]

				var yjdx = jiaodian_yy_w(yda, ydb, ydr, y2da, y2db, y2dr)

				var scsz = [
					[yjdx[0], yjdx[2]],
					[yjdx[1], yjdx[3]]
				]
			} else {
				if (isgetjxsychs(yh2jxs)[0] == true) { //一次函数-圆
					console.log('一次函数-圆')
					var yda = NBjxy(h1jxs)[1]
					var ydb = NBjxy(h1jxs)[2]
					var ydr = NBjxy(h1jxs)[3]
					var ydc = NBjxychs(h2jxs)[0]
					var ydd = NBjxychs(h2jxs)[1]
					console.log(yda, ydb, ydr, ydc, ydd)
					var yjdx = jiaodian_yh_w(yda, ydb, ydr, ydc, ydd)

					var scsz = [
						[yjdx[0], yjdx[1]],
						[yjdx[2], yjdx[3]]
					]


				} else { ///圆与普通函数
					var yda = NBjxy(h1jxs)[1]
					var ydb = NBjxy(h1jxs)[2]
					var ydr = NBjxy(h1jxs)[3]
					var scsz = jiaodian_pt_w('(x-(' + yda + '))^2+(y-(' + ydb + '))^2-(' + ydr + ')^2', yh2jxs, true)
					/*var dxf=jiaodian_pt_w("0-sqrt(("+ydr+")^2-(x-(" + yda + "))^2)+" + ydb,yh2jxs,true)
					for (let i = 0; i < dxf.length; i++) {
						const element = dxf[i];
						scsz.push(element)
					}*/
				}
			}
		} else if (isgetjxsychs(yhs1)[0] == true && isgetjxsychs(yhs2)[0] == true) { //双一次
			console.log('syc')
			var a = NBjxychs(hs1)[0]
			var b = NBjxychs(hs1)[1]
			var c = NBjxychs(hs2)[0]
			var d = NBjxychs(hs2)[1]
			console.log(a, b, c, d)

			var scsz = [jiaodian_hh_w(a, b, c, d)]
		} else {//普通函数
			var scsz = jiaodian_pt_w(yhs1, yhs2)
		}

	function jiaodian_yy_w(a, b, r, c, d, t) {

		var x = '-((d-b)*sqrt((-t^4)+(2*r^2+2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*t^2-r^4+(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*r^2-d^4+4*b*d^3+((-2*c^2)+4*a*c-6*b^2-2*a^2)*d^2+(4*b*c^2-8*a*b*c+4*b^3+4*a^2*b)*d-c^4+4*a*c^3+((-2*b^2)-6*a^2)*c^2+(4*a*b^2+4*a^3)*c-b^4-2*a^2*b^2-a^4)+(c-a)*t^2+(a-c)*r^2+((-c)-a)*d^2+(2*b*c+2*a*b)*d-c^3+a*c^2+(a^2-b^2)*c-a*b^2-a^3)/(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)'
		var x2 = '((c-a)*sqrt((-t^4)+(2*r^2+2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*t^2-r^4+(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*r^2-d^4+4*b*d^3+((-2*c^2)+4*a*c-6*b^2-2*a^2)*d^2+(4*b*c^2-8*a*b*c+4*b^3+4*a^2*b)*d-c^4+4*a*c^3+((-2*b^2)-6*a^2)*c^2+(4*a*b^2+4*a^3)*c-b^4-2*a^2*b^2-a^4)+(b-d)*t^2+(d-b)*r^2+d^3-b*d^2+(c^2-2*a*c-b^2+a^2)*d+b*c^2-2*a*b*c+b^3+a^2*b)/(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)'
		var y = '((d-b)*sqrt((-t^4)+(2*r^2+2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*t^2-r^4+(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*r^2-d^4+4*b*d^3+((-2*c^2)+4*a*c-6*b^2-2*a^2)*d^2+(4*b*c^2-8*a*b*c+4*b^3+4*a^2*b)*d-c^4+4*a*c^3+((-2*b^2)-6*a^2)*c^2+(4*a*b^2+4*a^3)*c-b^4-2*a^2*b^2-a^4)+(a-c)*t^2+(c-a)*r^2+(c+a)*d^2+((-2*b*c)-2*a*b)*d+c^3-a*c^2+(b^2-a^2)*c+a*b^2+a^3)/(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)'
		var y2 = '-((c-a)*sqrt((-t^4)+(2*r^2+2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*t^2-r^4+(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)*r^2-d^4+4*b*d^3+((-2*c^2)+4*a*c-6*b^2-2*a^2)*d^2+(4*b*c^2-8*a*b*c+4*b^3+4*a^2*b)*d-c^4+4*a*c^3+((-2*b^2)-6*a^2)*c^2+(4*a*b^2+4*a^3)*c-b^4-2*a^2*b^2-a^4)+(d-b)*t^2+(b-d)*r^2-d^3+b*d^2+((-c^2)+2*a*c+b^2-a^2)*d-b*c^2+2*a*b*c-b^3-a^2*b)/(2*d^2-4*b*d+2*c^2-4*a*c+2*b^2+2*a^2)'
		var x = thbl(['a', 'b', 'r', 'c', 'd', 't'], [a, b, r, c, d, t], x)
		var y = thbl(['a', 'b', 'r', 'c', 'd', 't'], [a, b, r, c, d, t], y)
		var x2 = thbl(['a', 'b', 'r', 'c', 'd', 't'], [a, b, r, c, d, t], x2)
		var y2 = thbl(['a', 'b', 'r', 'c', 'd', 't'], [a, b, r, c, d, t], y2)

		return [x, y, x2, y2]
	}

	function jiaodian_hh_w(a, b, c, d) {
		var x = '-(b-d)/(a-c)'
		var y = '-(b*c-a*d)/(a-c)'

		var x = thbl(['a', 'b', 'c', 'd'], [a, b, c, d], x)
		var y = thbl(['a', 'b', 'c', 'd'], [a, b, c, d], y)


		return [x, y]
	}

	function jiaodian_yh_w(a, b, r, k, c) {
		var x2 = '-(sqrt((k^2+1)*r^2-a^2*k^2+(2*a*b-2*a*c)*k-c^2+2*b*c-b^2)+(c-b)*k-a)/(k^2+1)'
		var y2 = '-(k*sqrt((k^2+1)*r^2-a^2*k^2+(2*a*b-2*a*c)*k-c^2+2*b*c-b^2)-b*k^2-a*k-c)/(k^2+1)'
		var x = '(sqrt((k^2+1)*r^2-a^2*k^2+(2*a*b-2*a*c)*k-c^2+2*b*c-b^2)+(b-c)*k+a)/(k^2+1)'
		var y = '(k*sqrt((k^2+1)*r^2-a^2*k^2+(2*a*b-2*a*c)*k-c^2+2*b*c-b^2)+b*k^2+a*k+c)/(k^2+1)'
		var x = thbl(['a', 'b', 'r', 'c', 'k'], [a, b, r, c, k], x)
		var y = thbl(['a', 'b', 'r', 'c', 'k'], [a, b, r, c, k], y)
		var x2 = thbl(['a', 'b', 'r', 'c', 'k'], [a, b, r, c, k], x2)
		var y2 = thbl(['a', 'b', 'r', 'c', 'k'], [a, b, r, c, k], y2)

		return [x, y, x2, y2]
	}

	console.log(scsz)
	if (scsz) {

	} else {
		return ''
	}
	var yret = false
	if (xy == 0) {
		if (scsz.length <= djg) { } else {
			var yret = scsz[djg][0]
		}
	} else if (xy == 1) {
		if (scsz.length <= djg) { } else {
			var yret = scsz[djg][1]
		}
	}
	var yret = az_to_zc(yret)
	console.log(yret)
	var _K = senpoly(yret)
	console.log(_K)
	return _K
}

function azgethsz_w(x, h) {
	var hss = eval(hqjxj(h))
	var ret = senpoly(Algebrite.subst(x, 'x', hss)
		.toString())
		.toString()
	return ret
}

function azgetjl_w(d1, d2) { //两点距离
	var dx = '(' + d1[0] + '-(' + d2[0] + '))^2'
	var dy = '(' + d1[1] + '-(' + d2[1] + '))^2'
	var jl = '(' + dx + '+' + dy + ')^(1/2)'
	console.log(jl)
	return senpoly(jl)
		.toString()
}

function thbl(bllb, bl2lb, jxs) {
	var zh_cn = "啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版"
	var x = jxs.replace(new RegExp('sqrt', 'g'), '$')
	for (let i = 0; i < bllb.length; i++) {
		const element = bllb[i];
		var x = x.replace(new RegExp(element, 'g'), zh_cn[i])
	}
	//console.log(x)
	for (let i = 0; i < bllb.length; i++) {
		const element = bllb[i];
		var x = x.replace(new RegExp(zh_cn[i], 'g'), '(' + bl2lb[i] + ')')
	}
	var x = x.replace(new RegExp('\\$', 'g'), 'sqrt')
	return x
}

function azgetcx_w(h, d) {
	var ax = (NBjxychs(h)[0])
	var dx = (d[0])
	var dy = (d[1])
	console.log(ax, dx, dy)
	var hsjxs = '(' + senpoly('-1/(' + ax + ")")
		.toString() + ')*x+' + senpoly('' + dy + '-(' + dx + ')*(-1/(' + ax + '))')
			.toString()
	return hsjxs
}
function azgetpxx_w(h, d) {
	var ax = (NBjxychs(h)[0])
	var dx = (d[0])
	var dy = (d[1])
	// console.log(ax,dx,dy)
	var hsjxs = '(' + senpoly(ax)
		.toString() + ')*x+' + senpoly(dy + '-(' + dx + ')*(' + ax + ')')
			.toString()
	return hsjxs
}
function azgetcl_w(a) {
	return a
}

function azgetdzb_w(a) {
	return '(' + a + ')'
}
function azgetjzs_w(x, y) {

	var a = x[0]
	var b = x[1]
	var c = y[0]
	var d = y[1]
	var k = ' (b - d) / (a - c) '
	var bb = ' (c * b - a * d) / (c - a) '
	var k = thbl(['a', 'b', 'c', 'd'], [a, b, c, d], k)
	var bb = thbl(['a', 'b', 'c', 'd'], [a, b, c, d], bb)
	var scsz = '(' + senpoly(k) + ")*x+" + senpoly(bb)
	console.log(scsz)
	return scsz
}
function jiaodian_pt_w(jxs1, jxs2, ymod) {
	console.log(jxs1, jxs2)
	var jxs1 = az_to_zc((eval(hqjxj(jxs1))))
	var jxs2 = az_to_zc((eval(hqjxj(jxs2))))

	if (ymod) {
		var newjxs = Algebrite.subst(jxs2, 'y', jxs1).toString().replace(/\.\.\./g, '')
		var t = Algebrite.run(newjxs).toString()
		var f = t.split('.').length
		for (let l = 0; l < f - 1; l++) {
			console.log(t, l)
			var zb = -1
			for (let i = 0; i < t.length + 1; i++) {
				var j = t.substring(i, i + 1)
				console.log(t, zb, j)
				if (isInArray(num, j) == true) {
					if (zb == -1) {
						var zb = i
					}
				}
				if (isInArray(num, j) == false || j == '-') {
					if (zb !== -1) {
						var xiaoshu = t.substring(zb, i)

						if (xiaoshu.split('.').length == 2) {
							console.log(xiaoshu)
							t = t.substring(0, zb) + '(' + xioashu_to_fenshu(xiaoshu) + ')' + t.substring(i, t.length)
							break
						}
						zb = -1
					}
				}
			}
		}
		console.log(t)
		var jie = jfc(t, 'x')
		//var jie=jfc(jxs2,'x')
		//return
	} else {
		var jie = jfc(jxs1 + '-(' + jxs2 + ')', 'x')
	}

	console.log(jxs1, jxs2, jie)
	var ret = []
	for (let i = 0; i < jie.length; i++) {
		const element = jie[i];
		var ddy = Algebrite.run(Algebrite.subst(element, 'x', jxs2).toString().replace(/\.\.\./g, ''))
		ret.push([element, ddy])
	}
	return ret
}
function senpoly(f) {
	console.log(qiyhj, f)

	if (qiyhj[0] == 0) {

		if (f.length > 1000) {
			var r = Algebrite.run(f).toString()
			return Algebrite.run(huajianwanqvanpf(r)).toString()
		}
		var r = Algebrite.simplify(Algebrite.rationalize(f)).toString()
		return Algebrite.run(huajianwanqvanpf(r)).toString()

	}
	if (qiyhj[0] == 1) {
		var r = Algebrite.run(f).toString()
		return Algebrite.run(huajianwanqvanpf(r)).toString()
	}

	if (qiyhj[0] == 2) {
		return f
	}
	return f
}
var zh_cn_120 = "啊爱安千百十被本长朝曾乘城除传辞从达当道得度短多发方非复负故归国过何你后或来及即既假间见青天解进尽就我绝类临名末乃内期去寒却如若善稍少胜识使是书属数遂说通徒退望微闻相谢信兴行幸修许阳要易阴引右再造知不致酒治走左坐这月明上下海颜色江山往鸟噫力"
var zh_cn = zh_cn_120.split("")
function readTo(d) {
	//var d=dqwj('NeW.txt')
	d = d.split("")
	if (d.length !== 5) {//预处理d
		for (let i = 0; i < d.length; i++) {
			if (isInArray(zh_cn, d[i])) { } else {
				d.splice(i, 1)
			}
		}
	}
	var n = []
	for (let j = 0; j < 5; j++) {
		for (let i = 0; i < zh_cn.length; i++) {
			const element = zh_cn[i];
			if (element == d[j]) {
				n.push(i)
			}
		}
	}
	return n
}
function ysfj(ys) {
	var x = ''
	for (let i = 0; i < ys.length; i++) {

		if (isInArray(abc, ys.substring(i, i + 1)) == true) {
			var x = ys.substring(i, i + 1)
		}
	}
	var e = jfc(ys, x)

	if (ys.split('*' + x + '^2').length < 2) {
		var xishu = ''
	} else {
		var xishu = ys.split('*' + x + '^2')[0]
		for (let i = xishu.length - 1; i >= 0; i--) {
			//console.log(xishu.substring(i,i+1))
			if (isInArray(num, xishu.substring(i, i + 1)) == false && xishu.substring(i, i + 1) != '/') {
				var xishu = xishu.substring(i + 1, xishu.length)
				break
			}
		}

		//console.log(xishu)
	}

	//console.log(e)
	if (e.length == 1 && ys.split(x + '^2').length > 1) {
		return [xishu, x + '-(' + e[0] + ')']
	}
}
function thx(jxs, nr) {
	return fth(th(jxs)
		.replace(new RegExp('x', 'g'), nr))
}
function hjwqpf(jxs) {       //化简完全平方
	//console.log(jxs)
	//return jxs
	var d = jxs
	var pfgl = 0
	for (let i = 0; i < d.length; i++) {
		if (d.substring(i, i + 7) == ')^(1/2)') {
			pfgl++
		}

	}
	for (let l = 0; l < pfgl; l++) {

		for (let i = d.length; i >= 0; i--) {
			if (d.substring(i, i - 7) == ')^(1/2)') {
				var t = 0
				var z = 0
				var y = 0
				for (let j = 0; j < 10000; j++) {
					if (d.substring(i - 6 - j, i - 7 - j) == '(') {
						z++
					}
					if (d.substring(i - 6 - j, i - 7 - j) == ')') {
						y++
					}
					if (y == z) {
						var t = j
						break
					}
				}

				if (t == 0) {

				} else {
					var ys = d.substring(i - 7, i - 6 - t)
					//console.log(ys)

					var h = ysfj(ys)
					if (h) {
						var xishu = h[0]
						if (xishu && xishu != '1') {
							var xishu = '(' + xishu + ')^(1/2)*'
						} else {
							var xishu = ''
						}
						d = d.substring(0, i - 7 - t) + xishu + '(' + h[1] + d.substring(i - 1, d.length)
						break
					}
				}

			}

		}
	}
	console.log(jxs, d)
	return d
}



// azgetdzb_w(azgetjd_w('sqrt('+azgetcl_w('a')+'^2-(x-azgetdzb_w(1,0))^2)+azgetdzb_w(1,1)','sqrt(azgetcl_w(0,1)^2_(x_azgetdzb_w(1,0))^2)+azgetdzb_w(1,1)','sqrt('+azgetcl_w('b')+'^2-(x-azgetdzb_w(0,0))^2)+azgetdzb_w(0,1)','sqrt(azgetcl_w(1,1)^2_(x_azgetdzb_w(0,0))^2)+azgetdzb_w(0,1)',1,0,0))



/*



(2*c*d*gc(0,1)/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+2*c*d*gc(0,1)^3/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)-2*c*gc(0,1)*gc(1,1)/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)-2*c*gc(0,1)^3*gc(1,1)/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)-2*c*gc(0,1)*gc(1,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))+2*c*gc(0,1)*gc(3,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))+2*c*gc(2,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-2*d*gc(0,1)^2*gc(1,1)/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)-2*d*gc(0,1)^4*gc(1,1)/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+2*d*gc(0,1)*gc(2,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-2*d*gc(0,1)^2*gc(1,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))+2*d*gc(0,1)^2*gc(3,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))+gc(1,1)^2+gc(2,1)^2+gc(3,1)^2-2*gc(1,1)*gc(3,1)+c^2/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+c^2*gc(0,1)^2/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+d^2*gc(0,1)^2/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+d^2*gc(0,1)^4/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+gc(0,1)^2*gc(1,1)^2/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)+gc(0,1)^4*gc(1,1)^2/((-1-k^2)^2*(-1/(-1-k^2)-k^2/(-1-k^2))^2)-2*gc(0,1)*gc(1,1)*gc(2,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-2*gc(0,1)^2*gc(1,1)*gc(3,1)/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))+2*gc(0,1)^2*gc(1,1)^2/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2))))^(1/2)
((b*k/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-c/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-d*k/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-(c))^2+(b+b*k^2/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-c*k/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-d*k^2/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-(d))^2)^(1/2)




*/



function yinshifenjie(jxs) { //因式分解
	ys = jxs
	var x = ''
	for (let i = 0; i < ys.length; i++) {

		if (isInArray(abc, ys.substring(i, i + 1)) == true) {
			var x = ys.substring(i, i + 1)
			break
		}
	}
	var e = jfc(ys, x)

	if (ys.split('*' + x + '^2').length < 2) {
		var xishu = ''
	} else {
		var xishu = ys.split('*' + x + '^2')[0]
		for (let i = xishu.length - 1; i >= 0; i--) {
			//console.log(xishu.substring(i,i+1))
			if (isInArray(num, xishu.substring(i, i + 1)) == false && xishu.substring(i, i + 1) != '/') {
				var xishu = xishu.substring(i + 1, xishu.length)
				break
			}
		}

		//console.log(xishu)
	}

	console.log(e)
	var yinshi = []
	for (let i = 0; i < e.length; i++) {
		var g = Algebrite.simplify(x + '-(' + e[0] + ')').toString()
		yinshi.push(g)
	}
	return yinshi
	if (e.length == 1 && ys.split(x + '^2').length > 1) {
		return [xishu, x + '-(' + e[0] + ')']
	}

}
function huajianwanqvanpf(jxs) {
	var jxs = tihuangenghao(jxs)
	var pfgl = 0
	for (let i = 0; i < jxs.length; i++) {
		if (jxs.substring(i, i + 1) == '{') {
			pfgl++
		}
	}
	for (let i = 0; i < pfgl; i++) {
		var zuo = -1
		for (let j = 0; j < jxs.length; j++) {
			var c = jxs.substring(j, j + 1)
			//console.log(c)
			if (c == '{') {
				zuo = j
			}
			if (c == '}') {
				var neibu = jxs.substring(zuo + 1, j)
				var t = yinshifenjie(neibu)
				if (t.length == 1) {
					jxs = jxs.substring(0, zuo) + '(' + t[0] + ')' + jxs.substring(j + 1, jxs.length)
				} else {
					jxs = jxs.substring(0, zuo) + 'sqrt(' + neibu + ')' + jxs.substring(j + 1, jxs.length)
				}
				break
			}
		}
	}
	return jxs
}
/*
02230451902
02230451903
02230451904
02230451907
02230451913
02230451914
02230451915
02230451922
02230451924
02230451925
02230451926
02230451928
02230451929
02230451932

(f(x)^(g(x)))'=f(x)^(g(x))*((g(x))/(f(x))*f(x)'+ln(f(x))*g(x)')

(a*x^b)'=a*b*x^(b-1)
(a^x)'=a^x*ln(a)
(logₐ(x))'=1/(x*ln(a))
sin(x)'=cos(x)
cos(x)'=-sin(x)

(f(x)±g(x))'=f(x)'±g(x)'
(f(x)*g(x))'=f(x)'*g(x)+f(x)*g(x)'
((f(x))/(g(x)))'=(f(x)'*g(x)-f(x)*g(x)')/(g(x)^2)
f'(x)=[lim]↙[Δx→0](f(x+Δx)-f(x))/(Δx)
cos^2(α)=(1+cos(2*α))/2
sin^2(α)=(1-cos(2*α))/2

*/
/*
 

b+b*k^2/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-c*k/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))-d*k^2/((-1-k^2)*(-1/(-1-k^2)-k^2/(-1-k^2)))
(-b-10*b*k^2-45*b*k^4-120*b*k^6-210*b*k^8-252*b*k^10-210*b*k^12-120*b*k^14-45*b*k^16-10*b*k^18-b*k^20-c*k-10*c*k^3-45*c*k^5-120*c*k^7-210*c*k^9-252*c*k^11-210*c*k^13-120*c*k^15-45*c*k^17-10*c*k^19-c*k^21-d*k^2-10*d*k^4-45*d*k^6-120*d*k^8-210*d*k^10-252*d*k^12-210*d*k^14-120*d*k^16-45*d*k^18-10*d*k^20-d*k^22)/((-1-k^2)^11*(-1/(-1-k^2)-k^2/(-1-k^2))^3)

-1-11*k^2-55*k^4-165*k^6-330*k^8-462*k^10-462*k^12-330*k^14-165*k^16-55*k^18-11*k^20-k^22



(1-(3))^2/(1+3+(3)^2)
(1-(2))^2/(1+2+(2)^2)

52/243

*/

/*


x=2^(2^(n+1)*(2^n-n-1)+2n)*(2^n-1)^(2*(2^n-1))
y=2^(2^(n+1)*(2^n-n-1))*(2^n-1)^(2*(2^n-1)+2)
z=2^(2^(n+1)*(2^n-n-1)+n+1)*(2^n-1)^(2*(2^n-1)+1)

Algebrite.subst(1, 'n', '2^(2^(n+1)*(2^n-n-1)+n+1)*(2^n-1)^(2*(2^n-1)+1)').toString()

*/

yijiazaidewenjian.push(4)


//(sqrt(((a)^2+1)*(a)^2-(((-((2*a)-(0))/((a)-(1)))))^2*(a)^2+(2*(((-((2*a)-(0))/((a)-(1)))))*((-((2*a)*(1)-(a)*(0))/((a)-(1))))-2*(((-((2*a)-(0))/((a)-(1)))))*(0))*(a)-(0)^2+2*((-((2*a)*(1)-(a)*(0))/((a)-(1))))*(0)-((-((2*a)*(1)-(a)*(0))/((a)-(1))))^2)+(((-((2*a)*(1)-(a)*(0))/((a)-(1))))-(0))*(a)+(((-((2*a)-(0))/((a)-(1))))))/((a)^2+1)
//(sqrt(((a)^2+1)*(a)^2-((-((2*a)-(0))/((a)-(1))))^2*(a)^2+(2*((-((2*a)-(0))/((a)-(1))))*(-((2*a)*(1)-(a)*(0))/((a)-(1)))-2*((-((2*a)-(0))/((a)-(1))))*(0))*(a)-(0)^2+2*(-((2*a)*(1)-(a)*(0))/((a)-(1)))*(0)-(-((2*a)*(1)-(a)*(0))/((a)-(1)))^2)+((-((2*a)*(1)-(a)*(0))/((a)-(1)))-(0))*(a)+((-((2*a)-(0))/((a)-(1)))))/((a)^2+1)

//"_2*gc(0,1)/((_1+gc(0,1))*(1+gc(0,1)^2))_2*gc(0,1)^2/((_1+gc(0,1))*(1+gc(0,1)^2))+(gc(0,1)^2+gc(0,1)^4_4*gc(0,1)^2/((_1+gc(0,1))^2)+8*gc(0,1)^3/((_1+gc(0,1))^2)_4*gc(0,1)^4/((_1+gc(0,1))^2))^(1/2)/(1+gc(0,1)^2)"
//"(_2*gc(0,1)/(_1+gc(0,1))_(gc(0,1)^2+gc(0,1)^4_4*gc(0,1)^2/((_1+gc(0,1))^2)+8*gc(0,1)^3/((_1+gc(0,1))^2)_4*gc(0,1)^4/((_1+gc(0,1))^2))^(1/2)_2*gc(0,1)^2/(_1+gc(0,1)))/(1+gc(0,1)^2)"
//azgetjd_w('sqrt(('+azgetcl_w(azgetcl_w('a'))+')^2-(x-('+azgetdzb_w(azgetjd_w('('+azgetcl_w('a')+')*x+2*'+azgetcl_w('a'),'(azgetcl_w(0,1))*x+2*azgetcl_w(0,1)','(1)*x+0','(1)*x+0',0,0,0))+'))^2)+'+azgetdzb_w(azgetjd_w('('+azgetcl_w('a')+')*x+2*'+azgetcl_w('a'),'(azgetcl_w(0,1))*x+2*azgetcl_w(0,1)','(1)*x+0','(1)*x+0',0,1,0)),'sqrt((azgetcl_w(1,1))^2_(x_(azgetdzb_w(0,0)))^2)+azgetdzb_w(0,1)','('+azgetcl_w('a')+')*x+0','(azgetcl_w(0,1))*x+0',1,0,0)

//azgetjd_w('sqrt(('+azgetcl_w(azgetcl_w('a'))+')^2-(x-('+azgetdzb_w(azgetjd_w('('+azgetcl_w('a')+')*x+2*'+azgetcl_w('a'),'(azgetcl_w(0,1))*x+2*azgetcl_w(0,1)','(1)*x+0','(1)*x+0',0,0,0))+'))^2)+'+azgetdzb_w(azgetjd_w('('+azgetcl_w('a')+')*x+2*'+azgetcl_w('a'),'(azgetcl_w(0,1))*x+2*azgetcl_w(0,1)','(1)*x+0','(1)*x+0',0,1,0)),'sqrt((azgetcl_w(1,1))^2_(x_(azgetdzb_w(0,0)))^2)+azgetdzb_w(0,1)','('+azgetcl_w('a')+')*x+0','(azgetcl_w(0,1))*x+0',1,0,0)