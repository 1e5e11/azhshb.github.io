/* az_server_jx.js —— 解析解引擎
 * 代码逐字移植自 serverdesktop\AZTXserver2.js 的 jsjxj（原服务端“计算解析解”实现）：
 *   hqjxj / cljxs / zijisuan / hsdy / NBjxy / NBjxychs / zhuanhuanyuanjxs /
 *   azgetjd_w / jiaodian_yy_w / jiaodian_hh_w / jiaodian_yh_w / azgethsz_w /
 *   azgetjl_w / azgetcx_w / azgetpxx_w / azgetcl_w / azgetdzb_w / azgetjzs_w /
 *   jiaodian_pt_w / thbl
 * 按要求，仅将化简部分 senpoly（原 pyhuajian2，调 Python）替换为本地化简器
 * （nerdamer 约分 + AZSimplify + Algebrite，见 az_local.js）。
 * 其余逻辑保持与原服务端一致：g* 调用被展开为含变量的符号表达式后 eval 求值。
 * 依赖客户端全局：th/fth/hsdxlx/l_az_to_zc/az_to_zc/zc_to_az/yhsjx/isgetjxsychs/
 *   jfc/isInArray/isrel/num/accAdd/accSub/accMul/accDiv/hslb/dlb/cllb/Algebrite
 */
(function () {

	var u3 = ['getcl', 'getdzb', 'getjd', 'gethsz', 'getjxs', 'getmous', 'getjl', 'getds', 'getpfx', 'getcx', 'getpxx']


	function zijisuan(ho) { //计算字符串
		var jo = ho
		var ysfh = [
			["^"],
			["/", "*"],
			["+", "_"]
		] //运算顺序
		var ysfh2 = ["^", "/", "*", "+", "_"]
		var jsshuzi1 = 0
		var jsshuzi2 = 0

		var jiscs = 0
		for (var i = 0; i < jo.length; i++) { //获取运算次数
			var gh = jo.substring(i, i + 1)
			if (isInArray(ysfh2, gh) == true) { //运算符号
				jiscs++
			}
		}


		for (var lj = 0; lj < ysfh.length; lj++) {

			for (var p = 0; p < jiscs; p++) {

				for (var i = 0; i < jo.length; i++) {
					var gh = jo.substring(i, i + 1) //获取运算符

					if (isInArray(ysfh[lj], gh) == true) { //运算
						//console.log( gh)
						for (var t = 1; t < 1000; t++) { //获取运算数字1
							var de = jo.substring(i - t, i - t + 1)
							if (isInArray(num, de) == false) {
								var jsshuzi1 = Number(jo.substring(i - t + 1, i))
								//console.log(jo.substring(i-t+1,i))
								var txqz = i - t + 1
								break
							}
						}
						for (var t = 1; t < 1000; t++) { //获取运算数字2
							var de = jo.substring(i + t, i + t + 1)
							if (isInArray(num, de) == false) {
								//    //console.log(jo.substring(i+1,i+t))
								var jsshuzi2 = Number(jo.substring(i + 1, i + t))
								var txhz = i + t
								break
							}
						}
						//console.log(jsshuzi1, jsshuzi2)


						if (gh == "^") {
							var jsjg = Math.pow(jsshuzi1, jsshuzi2)
						} //计算 
						if (gh == "/") {
							var jsjg = accDiv(jsshuzi1, jsshuzi2)
						}
						if (gh == "*") {
							var jsjg = accMul(jsshuzi1, jsshuzi2)
						}
						if (gh == "+") {
							var jsjg = accAdd(jsshuzi1, jsshuzi2)
						}
						if (gh == "_") {
							var jsjg = accSub(jsshuzi1, jsshuzi2)
						}
						if (jsjg < 0.00001 && jsjg > -0.00001) {
							jsjg = 0
						}
						if (jsjg > 100000000000000000000) {
							var jsjg = 100000000000000000000
						}
						if (jsjg < -100000000000000000000) {
							var jsjg = -100000000000000000000
						}
						jo = jo.substring(0, txqz) + jsjg + jo.substring(txhz, jo.length)
						//console.log(jo)
						break
					}
					//console.log(jo)
				}
			}
		}
		//console.log(jo)
		var d = Number(jo)
		if (d < 0.00001 && d > -0.00001) {
			d = 0
		}
		return d
	}


	function jcymygnhs(c) {
		var j = false

		for (let i = 0; i < u3.length; i++) {
			if (isinStr(c, u3[i]) == true || isinStr(c, th(u3[i])) == true) {
				j = true
			}
		}
		return j
	}


	function hsdy(hsm) {
		var jg = false
		var hanshumc = th(hsm)
		if (hanshumc == "rt") {
			jg = 'rt'
		} else
			if (hanshumc == "gc") {
				jg = 'azgetcl'
			} else
				if (hanshumc == "gd") {
					jg = 'azgetdzb'
				} else
					if (hanshumc == "gj") {
						jg = 'azgetjd'
					} else
						if (hanshumc == "gh") {
							jg = 'azgeths'
						} else
							if (hanshumc == "gs") {
								jg = 'azgetjzs'
							} else
								if (hanshumc == "gl") {
									jg = 'azgetjl'
								} else
									if (hanshumc == "go") {
										jg = 'azgetmous'
									} else
										if (hanshumc == "wt") {
											jg = 'wt'
										} else
											if (hanshumc == "gi") {
												jg = 'azgetjiaodu'
											} else
												if (hanshumc == "gp") {
													jg = 'azgetpfx'
												} else
													if (hanshumc == "gz") {
														jg = 'azgethsz'
													} else;
		if (hanshumc == "gw") {
			jg = 'azgetcx'
		} else
			if (hanshumc == "gg") {
				jg = 'azgetpxx'
			}
		return jg
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
			var a = jxs.substring(2, jxs.length).split(';')[0]
			var b = jxs.substring(2, jxs.length).split(';')[1]
			var r = jxs.substring(2, jxs.length).split(';')[2]
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
		/* 本地合并版修复：常量曲线（如 '1'）没有 '(K)*x+(B)' 结构，
		   原版会返回 [undefined, undefined] 导致交点公式含 undefined。
		   与 isgetjxsychs 的常量分支（[true, 0, 值]）保持一致：斜率 0 */
		if (String(jxs).indexOf('x') === -1) {
			var v = eval(hqjxj(jxs));
			return [0, v];
		}
		return abandon(jxs)
	}


	function cljxs(jxs, jy) {
		//console.log(jy)

		var zuokuohao = 0 //括号套了几层
		var diaoyongzifuchuang = th(jxs)
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(/\(/g, '（');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(/\)/g, '）');
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

							//console.log('ohh')
							var tj = tj.replace('x,', '');
							//  var hanshumc = diaoyongzifuchuang.substring(qianmdkh - 2, qianmdkh)
							var zhscs = []
							for (var dp = 0; dp < tj.split(",").length; dp++) {
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

							//console.log(zsdbls)
							for (var kq = 0; kq < zsdbls; kq++) {
								//console.log(kq, zsdbls, hanshumc, zhscs)
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
							//console.log(jg, jy)
							//  if(jy==true){
							jg = jg + "+'"
							// }
							//console.log(jg)

							var hsmc = 2


						}
						//console.log(tj)
						diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh - hsmc) + jg + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)
						//console.log(diaoyongzifuchuang)
						break
					}
			}
		}
		//console.log(diaoyongzifuchuang)

		return diaoyongzifuchuang
	}

	function hqjxj(jxs) {

		var rrr0 = ''

		//console.log(jxs)
		if (jxs) {

		} else {
			return
		}

		var zhd = fth("'" + cljxs(jxs.replace(/，/g, ',')) + "'").replace(/，/g, ',');

		var zhd = zhd.replace(/\+\'\+\'\+/g, '啊这')

		var zhd = zhd.replace(/\'\+\'/g, '')
		var zhd = zhd.replace(/\+\'\'/g, '')
		var zhd = zhd.replace(/\'\'\+/g, '')
		var zhd = zhd.replace(/\'\'\+/g, '')

		var zhd = zhd.replace(/啊这/g, "+'+'+")

		//console.log(zhd)

		for (let i = 0; i < u3.length; i++) {
			const element = u3[i];
			zhd = zhd.replace(new RegExp(element, 'g'), hsdy(element) + '_w');
		}
		//console.log('aaaz'+zhd)
		return zhd
	}

	function thx(jxs, nr) {
		return fth(th(jxs).replace(/x/g, nr))
	}


	function azgetjd_w(hs1, yhs1, hs2, yhs2, djg, xy, jqd) {
		/*
		函数1（解析解）
		函数1（原解析式）
		函数2（解析解）
		函数2（原解析式）
	
	
	
	
		*/
		function jshsdymath(j) {
			for (let i = 0; i < u3.length; i++) {
				const element = u3[i];
				var j = j.replace(new RegExp(hsdy(element) + '_w', 'g'), th(element));
			}
			return j
		}
		var yhs1 = jshsdymath(yhs1)
		var yhs2 = jshsdymath(yhs2)
		//console.log(hs1, yhs1, hs2, yhs2, djg, xy, jqd)
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
				//console.log('有圆函数')
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
					//console.log('双圆')
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
						//console.log('一次函数-圆')
						var yda = NBjxy(h1jxs)[1]
						var ydb = NBjxy(h1jxs)[2]
						var ydr = NBjxy(h1jxs)[3]
						var ydc = NBjxychs(h2jxs)[0]
						var ydd = NBjxychs(h2jxs)[1]
						//	 console.log(yda, ydb, ydr, ydc, ydd)
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
				//	console.log('syc')
				var a = NBjxychs(hs1)[0]
				var b = NBjxychs(hs1)[1]
				var c = NBjxychs(hs2)[0]
				var d = NBjxychs(hs2)[1]
				//	console.log(a, b, c, d)

				var scsz = [jiaodian_hh_w(a, b, c, d)]
			} else { //普通函数
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
			console.log(a, b, c, d, x, y)

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

		//console.log(scsz)
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
		//console.log(yret)
		var _K = senpoly(yret)
		//console.log(_K)
		return _K
	}

	function azgethsz_w(h, x, y) {
		var hss = eval(hqjxj(h))
		if (isrel(y)) {
			var ret = senpoly(Algebrite.subst(y, 'x', hss).toString()).toString()
		} else {
			var ret = senpoly(Algebrite.subst(x, 'x', hss).toString()).toString()
		}

		return ret
	}

	function azgetjl_w(d1, d2) { //两点距离
		var dx = '(' + d1[0] + '-(' + d2[0] + '))^2'
		var dy = '(' + d1[1] + '-(' + d2[1] + '))^2'
		var jl = '(' + dx + '+' + dy + ')^(1/2)'
		//	console.log(jl)
		return senpoly(jl).toString()
	}

	function thbl(bllb, bl2lb, jxs) {
		var zh_cn = "啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版"
		var x = jxs.replace(/sqrt/g, '$')
		for (let i = 0; i < bllb.length; i++) {
			const element = bllb[i];
			var x = x.replace(new RegExp(element, 'g'), zh_cn[i])
		}
		//console.log(x)
		for (let i = 0; i < bllb.length; i++) {
			const element = bllb[i];
			var x = x.replace(new RegExp(zh_cn[i], 'g'), '(' + bl2lb[i] + ')')
		}
		var x = x.replace(/\$/g, 'sqrt')
		return x
	}

	function azgetcx_w(h, d) {
		var ax = (NBjxychs(h)[0])
		var dx = (d[0])
		var dy = (d[1])
		// console.log(ax,dx,dy)
		var hsjxs = '(' + senpoly('-1/(' + ax + ")").toString() + ')*x+' + senpoly('' + dy + '-(' + dx + ')*(-1/(' + ax + '))').toString()
		return hsjxs
	}

	function azgetpxx_w(h, d) {
		var ax = (NBjxychs(h)[0])
		var dx = (d[0])
		var dy = (d[1])
		// console.log(ax,dx,dy)
		var hsjxs = '(' + senpoly(ax).toString() + ')*x+' + senpoly(dy + '-(' + dx + ')*(' + ax + ')').toString()
		return hsjxs
	}

	function azgetcl_w(a) {
		return a
	}

	function azgetcl(clh, xy) { //获取变量相关

		return jxs_l_for_azhs(cllb[clh].split("|")[xy])

	}

	function azgetdzb_w(a) {
		return a
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
		//	console.log(scsz)
		return scsz
	}

	function jiaodian_pt_w(jxs1, jxs2, ymod) {
		//	console.log(jxs1,jxs2)
		var jxs1 = az_to_zc((eval(hqjxj(jxs1))))
		var jxs2 = az_to_zc((eval(hqjxj(jxs2))))

		if (ymod) {
			var newjxs = Algebrite.subst(jxs2, 'y', jxs1).toString().replace(/\.\.\./g, '')
			var t = Algebrite.run(newjxs).toString()
			var f = t.split('.').length
			for (let l = 0; l < f - 1; l++) {
				//	console.log(t,l)
				var zb = -1
				for (let i = 0; i < t.length + 1; i++) {
					var j = t.substring(i, i + 1)
					//	console.log(t,zb,j)
					if (isInArray(num, j) == true) {
						if (zb == -1) {
							var zb = i
						}
					}
					if (isInArray(num, j) == false || j == '-') {
						if (zb !== -1) {
							var xiaoshu = t.substring(zb, i)

							if (xiaoshu.split('.').length == 2) {
								//	console.log(xiaoshu)
								t = t.substring(0, zb) + '(' + xioashu_to_fenshu(xiaoshu) + ')' + t.substring(i, t.length)
								break
							}
							zb = -1
						}
					}
				}
			}
			//	console.log(t)
			var jie = jfc(t, 'x')
			//var jie=jfc(jxs2,'x')
			//return
		} else {
			var jie = jfc(jxs1 + '-(' + jxs2 + ')', 'x')
		}

		//	console.log(jxs1,jxs2,jie)
		var ret = []
		for (let i = 0; i < jie.length; i++) {
			const element = jie[i];
			var ddy = Algebrite.run(Algebrite.subst(element, 'x', jxs2).toString().replace(/\.\.\./g, ''))
			ret.push([element, ddy])
		}
		return ret
	}



/* ===================== senpoly：唯一的改动 =====================
 * 原版：function senpoly(f) { return pyhuajian2(f) }（调用 Python 化简）
 * 本地合并版：改用现在的本地化简器（nerdamer 约分 / AZSimplify / Algebrite）
 * ================================================================ */
/* 分式约简（等价 sympy.cancel，默认分母不为 0）：
   取分子/分母 → 多项式展开 → 最大公因式 → 约去。非纯多项式分式返回 null */
function cancelFraction(f) {
	try {
		var run = Algebrite.run("(" + f + ")");
		var n = Algebrite.numerator(run).toString();
		var d = Algebrite.denominator(run).toString();
		if (n === "" || d === "" || d === "1") return null;
		var ne = nerdamer(n).expand().toString();
		var de = nerdamer(d).expand().toString();
		if (/sqrt|sin|cos|tan|asin|acos|atan|sinh|cosh|tanh|log|ln|exp|abs|undefined|NaN/i.test(ne + de)) return null;
		var g = nerdamer.gcd(ne, de).toString();
		if (g === "" || g === "1" || g === "-1") return null;
		var n2 = nerdamer.divide(ne, g).toString();
		var d2 = nerdamer.divide(de, g).toString();
		if (/undefined|NaN|Infinity/.test(n2 + d2)) return null;
		/* 符号归一化：分母代入大正值后为负 → 分子分母同乘 -1，
		   得到 (5*a^2+2*a-2)/(5*a+1) 这样的标准形式 */
		var dv = polyEvalSign("(" + d2 + ")");
		if (dv !== null && dv < 0) {
			n2 = "-(" + n2 + ")";
			d2 = "-(" + d2 + ")";
		}
		var R = "(" + n2 + ")/(" + d2 + ")";
		try {
			if (window.AZSimplify && !/undefined|NaN/.test(R)) {
				var rz = window.AZSimplify.simplify(R);
				if (typeof rz === "string" && rz !== "" && !/undefined|NaN|Infinity/.test(rz)) R = rz;
			}
		} catch (e2) { }
		return R;
	} catch (e) { return null; }
}

/* 多项式在所有变量取大正值时的符号（用于判断首项符号） */
function polyEvalSign(s) {
	try {
		var e = Algebrite.run("(" + s + ")");
		var vars = {}, m;
		var str = e.toString();
		var re = /[a-zA-Z]+/g;
		while ((m = re.exec(str)) !== null) vars[m[0]] = 1000;
		var names = Object.keys(vars);
		/* 注意参数顺序：subst(替换值, 变量, 表达式) */
		for (var i = 0; i < names.length; i++) e = Algebrite.subst(1000, names[i], e);
		var v = Number(e.toString());
		return isNaN(v) ? null : v;
	} catch (e2) { return null; }
}

function senpoly(f) { //huajian化简
	if (f === undefined || f === null) return f;
	f = String(f);
	if (f === "") return f;
	/* 含 'undefined' 说明上游（如 NBjxychs 对常量的旧缺陷）产生了无效式子，
	   原样透传，绝不能送入化简器（'undefined' 会被拆成 u*n*d*e*f*i*n*e*d 变量） */
	if (f.indexOf("undefined") !== -1) return f;
	if (f.indexOf("=") !== -1) return f;
	/* 先尝试分式约简（通分 + 约去公因式），失败走通用本地化简链 */
	var cf = cancelFraction(f);
	if (cf !== null) return cf;
	try {
		if (window.AZLocal && typeof window.AZLocal.simplify === "function") {
			var r = window.AZLocal.simplify(f);
			if (typeof r === "string" && r !== "" && r.indexOf("无法计算") !== 0) return r;
		}
	} catch (e) { }
	try {
		var a = Algebrite.simplify(Algebrite.rationalize(f)).toString().replace(/\.\.\./g, '');
		if (a !== "") return a;
	} catch (e) { }
	try { return Algebrite.run(f).toString().replace(/\.\.\./g, ''); } catch (e) { return f; }
}

/* 原服务端 jiaodian_pt_w 引用了 xioashu_to_fenshu 但未定义（小数转分数），此处补上 */
function xioashu_to_fenshu(s) {
	var p = String(s).split('.');
	if (p.length < 2) return s;
	var d = Math.pow(10, p[1].length);
	var n = Math.round(Math.abs(Number(p[0] + p[1])));
	function g2(a, b) { while (b) { var t = a % b; a = b; b = t; } return a || 1; }
	var sign = Number(s) < 0 ? '-' : '';
	var g = g2(n, d);
	return sign + (n / g) + '/' + (d / g);
}

/* ===================== jsjxj 主流程（原服务端 1918-1921 行） =====================
 * 原版从消息负载里拆出 hslb/dlb/cllb；客户端合并版直接使用当前画板的同名全局数据 */
function jxj(jxs, snp) {
	var g = hqjxj(jxs)
	var t = eval(g)
	var q = senpoly(t)
	return q
}

window.AZServerJX = { jxj: jxj, cancelFraction: cancelFraction };
})();
