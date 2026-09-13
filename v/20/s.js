//s.js
/*AZ制造*/
//bug:显示表达式  1*1 = 11
console.log('%c啊这内核已加载完毕', "color:red")
console.log('%c     //\\\\              ==========\n    //  \\\\                    //\n   //    \\\\                 //\n  //======\\\\              //\n //        \\\\           //\n//          \\\\         ==========', "color:red")



var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var num = ["0", "9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "-"]

function jxs_l_for_azhs(jiexishi, x, dx) {
	//console.log(jiexishi)

	// console.log(jiexishi)

	if (zdyset[14] == "true") {
		var fc = jiexishi + "|" + x + "|" + dx
		if (qjhcn.length > Number(zdyset[16])) {
			qjhcn = [];
			qjhcz = []
			//   var ss=Math.floor(Number(zdyset[16])/10)
			//  qjhcn.splice(0,ss)
			//  qjhcz.splice(0,ss)

			addlog('全局缓存已达到上限，已自动清空。')
			tip('全局缓存已达到上限，已自动清空。')
		} else {
			var w = -1
			for (var i = 0; i < qjhcn.length; i++) {
				if (qjhcn[i] == fc) {
					w = i;
					break
				}
			}
		}
		if (w == -1) {
			var ret = z_jxs_l_for_azhs(jiexishi, x, dx)
			qjhcn.push(fc)
			qjhcz.push(ret)
		} else {
			var ret = qjhcz[w]
		}
	} else {
		var ret = z_jxs_l_for_azhs(jiexishi, x, dx)
	}
	if (jlks == true) {
		jkxjj.push([cc(), [jiexishi, x], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return ret
}

function fth(jiexishi) {
	var diaoyongzifuchuang = String(jiexishi).toLowerCase()
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gc/g, 'getcl');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gd/g, 'getdzb');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gj/g, 'getjd');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gz/g, 'gethsz');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gh/g, 'geths');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gs/g, 'getjxs');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/go/g, 'getmous');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gl/g, 'getjl');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gi/g, 'getds');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gp/g, 'getpfx');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gw/g, 'getcx');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gg/g, 'getpxx');
	// var diaoyongzifuchuang=diaoyongzifuchuang.replace('', ' ');
	return diaoyongzifuchuang
}

function th(jiexishi) {
	var diaoyongzifuchuang = String(jiexishi).toLowerCase()
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getcl/g, 'gc');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getdzb/g, 'gd');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getjd/g, 'gj');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/gethsz/g, 'gz');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/geths/g, 'gh');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getjxs/g, 'gs');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getmous/g, 'go');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getjl/g, 'gl');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getds/g, 'gi');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getpfx/g, 'gp');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getcx/g, 'gw');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/getpxx/g, 'gg');
	var diaoyongzifuchuang = diaoyongzifuchuang.replace(/ /g, '');
	return diaoyongzifuchuang
}

function jt(hanshumc, tj) {
	//console.log(hanshumc, tj)
	zhscs = []
	var jg = 0
	for (var dp = 0; dp < tj.split(",").length; dp++) {
		zhscs.push(zijisuan(tj.split(",")[dp]))
	}
	//console.log(zhscs)
	if (hanshumc == "rt") {
		jg = tetration(zhscs[0], zhscs[1])
	} else
		if (hanshumc == "gc") {
			jg = azgetcl(zhscs[0], zhscs[1])
		} else
			if (hanshumc == "gd") {
				jg = azgetdzb(zhscs[0], zhscs[1])
			} else
				if (hanshumc == "gj") {
					jg = azgetjd(zhscs[0], zhscs[1], zhscs[2], zhscs[3], zhscs[4])
				} else
					if (hanshumc == "gh") {
						jg = azgeths(zhscs[0], zhscs[1])
					} else
						if (hanshumc == "gs") {
							jg = azgetjzs(zhscs[0], [zhscs[1], zhscs[2], zhscs[3], zhscs[4], zhscs[5], zhscs[6], zhscs[7], zhscs[8], zhscs[9], zhscs[10], zhscs[11], zhscs[12], zhscs[13], zhscs[14], zhscs[15], zhscs[16]])
						} else
							if (hanshumc == "gl") {
								jg = azgetjl(zhscs[0], zhscs[1])
							} else
								if (hanshumc == "go") {
									jg = azgetmous(zhscs[0], zhscs[1])
								} else
									if (hanshumc == "wt") {
										jg = wt(zhscs[0], zhscs[1], zhscs[2])
									} else
										if (hanshumc == "gi") {
											jg = azgetjiaodu(zhscs[0], zhscs[1], zhscs[2])
										} else
											if (hanshumc == "gp") {
												jg = azgetpfx(zhscs[0], zhscs[1], zhscs[2], zhscs[3])
											} else
												if (hanshumc == "gz") {
													jg = azgethsz(zhscs[0], zhscs[1], zhscs[2])
												} else
													if (hanshumc == "gw") {
														jg = azgetcx(zhscs[0], zhscs[1], zhscs[2])
													} else
														if (hanshumc == "gg") {
															jg = azgetpxx(zhscs[0], zhscs[1], zhscs[2])
														} else
															if (hanshumc == "d") {
																jg = 0
															}
	return jg
}

function hsdxlx(functionName, xh) {
	var f2 = th(functionName)
	if (f2 == 'gc') {
		if (xh == 0) {
			return 'c'
		}
	}
	if (f2 == 'gd') {
		if (xh == 0) {
			return 'd'
		}
	}
	if (f2 == 'gj') {
		if (xh == 0) {
			return 'h'
		}
		if (xh == 1) {
			return 'h'
		}
	}
	if (f2 == 'gz') {
		if (xh == 1) {
			return 'h'
		}
		if (xh == 0) {
			return 'c'
		}
	}
	if (f2 == 'gh') {
		if (xh == 0) {
			return 'h'
		}
	}
	if (f2 == 'gs') {
		if (xh > 0) {
			return 'd'
		}
	}
	if (f2 == 'gl') {
		if (xh == 0) {
			return 'd'
		}
		if (xh == 1) {
			return 'd'
		}
	}
	if (f2 == 'gi') {
		if (xh == 0) {
			return 'd'
		}
		if (xh == 1) {
			return 'd'
		}
		if (xh == 2) {
			return 'd'
		}
	}
	if (f2 == 'gp') {
		if (xh == 3) {
			return 'd'
		}
		if (xh == 1) {
			return 'd'
		}
		if (xh == 2) {
			return 'd'
		}
	}
	if (f2 == 'gw') {
		if (xh == 0) {
			return 'h'
		}
		if (xh == 1) {
			return 'd'
		}
	}
	if (f2 == 'gg') {
		if (xh == 0) {
			return 'h'
		}
		if (xh == 1) {
			return 'd'
		}
	}
	return false
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
												} else
													if (hanshumc == "gw") {
														jg = 'azgetcx'
													} else
														if (hanshumc == "gg") {
															jg = 'azgetpxx'
														}
	return jg
}

function fdy(hsm) {
	var jg = false
	var hanshumc = th(hsm)
	if (hanshumc == "rt") {
		jg = 'rt'
	} else
		if (hanshumc == "azgetcl") {
			jg = 'gc'
		} else
			if (hanshumc == 'azgetdzb') {
				jg = "gd"
			} else
				if (hanshumc == 'azgetjd') {
					jg = "gj"
				} else
					if (hanshumc == 'azgeths') {
						jg = "gh"
					} else
						if (hanshumc == 'azgetjzs') {
							jg = "gs"
						} else
							if (hanshumc == 'azgetjl') {
								jg = "gl"
							} else
								if (hanshumc == 'azgetmous') {
									jg = "go"
								} else
									if (hanshumc == 'wt') {
										jg = "wt"
									} else
										if (hanshumc == 'azgetjiaodu') {
											jg = "gi"
										} else
											if (hanshumc == 'azgetpfx') {
												jg = "gp"
											} else
												if (hanshumc == 'azgethsz') {
													jg = "gz"
												} else
													if (hanshumc == 'azgetcx') {
														jg = "gw"
													} else
														if (hanshumc == 'azgetpxx') {
															jg = "gg"
														}
	return jg
}

function z_jxs_l_for_azhs(jiexishi, x, dx) {
	//console.log(jiexishi)
	// console.log(jiexishi)

	if (isrel(jiexishi) == false || jiexishi == 0) {
		return 0
	}
	if (String(jiexishi).substring(0, 4) == "math") {
		return (math.evaluate(jiexishi.substring(4, jiexishi.length)))
	}
	if (String(jiexishi).substring(0, 2) == "ts") {
		var tsznr = jiexishi.substring(2, jiexishi.length)
		alert(tsznr)
		if (tsznr.substring(0, 8) == 'openchat') {
			openChat(tsznr.substring(8, tsznr.length).split('|')[0], tsznr.substring(8, tsznr.length).split('|')[1], tsznr.substring(8, tsznr.length).split('|')[2])
		}
		if (tsznr.substring(0, 4) == '清空用户') {
			localStorage.setItem('m', '')
		}
		return
	}
	if (String(jiexishi).substring(0, 2) == "js") {
		fgfywsgheohjvfsbghyfgbsuyjghfbsrgfbkrgbvrgdsf = x
		return (eval(jiexishi.substring(2, jiexishi.length)))
	}


	var diaoyongzifuchuang = String(jiexishi)

	if (zdyset[34] == 'true') { //使用mathjs计算
		var diaoyongzifuchuang = az_to_zc(diaoyongzifuchuang, true)
		//console.log(diaoyongzifuchuang)
		return math.evaluate(diaoyongzifuchuang, {
			x: x,
			dx: dx
		})
	}


	var olhs = 0.577215664901532860606512090082402431042159335 //γ
	var hjfg = 0.61803398874989484820458683436563811 //φ
	var EmbreeTrefethen = 0.70258 //β*

	var cslb = ["pi", "e", "hj", "et"]


	var diaoyongzifuchuang = "(" + diaoyongzifuchuang + ")"
	var zshs = false //是否为函数括号

	var zuokuohao = 0 //括号套了几层
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
			if (gh == "(") {
				var qianmdkh = i
			} else
				if (gh == ")") {
					var tj = diaoyongzifuchuang.substring(qianmdkh + 1, i)
					//console.log(tj)
					var tj = tj.replace(/pi/g, String(Math.PI)); //替换常数
					var tj = tj.replace(/e/g, String(Math.E));
					var tj = tj.replace(/ol/g, String(olhs));
					var tj = tj.replace(/et/g, String(EmbreeTrefethen));
					var tj = tj.replace(/hj/g, String(hjfg));

					var tj = tj.replace(/dx/g, dx); //替换变量
					var tj = tj.replace(/x/g, x); //替换变量

					//console.log(tj)
					if (tj.split(",").length < 2) {
						if (tj.split(";").length > 1) { //有多个变量
							zshs = true
							hanshumc = diaoyongzifuchuang.substring(qianmdkh - 2, qianmdkh)
							jg = jt(hanshumc, tj)
							hscd = 2
						} else { //只有一个变量
							var jg = zijisuan(tj) //计算子解析式
							if (isInArray(abc, diaoyongzifuchuang.substring(qianmdkh - 1, qianmdkh)) == true) { //这是函数
								var zshs = true
								for (var rh = qianmdkh; rh > qianmdkh - 10; rh--) {
									if (isInArray(abc, diaoyongzifuchuang.substring(rh, rh - 1)) == false) {
										var hanshumc = diaoyongzifuchuang.substring(rh, qianmdkh)
										var hscd = qianmdkh - rh
										break
									}
								}
								//console.log(hscd,hanshumc,jg)
								if (hanshumc == "ln") {
									var jg = azln(jg)
								} else
									if (hanshumc == "log") {
										var jg = Math.log(jg)
									} else
										if (hanshumc == "sin") {
											var jg = Math.sin(jg)
										} else
											if (hanshumc == "cos") {
												var jg = Math.cos(jg)
											} else
												if (hanshumc == "sec") {
													var jg = 1 / Math.cos(jg)
												} else
													if (hanshumc == "cec") {
														var jg = 1 / Math.sin(jg)
													} else
														if (hanshumc == "tan") {
															var jg = Math.tan(jg)
														} else
															if (hanshumc == "arcsin") {
																var jg = Math.asin(jg)
															} else
																if (hanshumc == "arccos") {
																	var jg = Math.acos(jg)
																} else
																	if (hanshumc == "arctan") {
																		var jg = Math.atan(jg)
																	} else
																		if (hanshumc == "arctanh") {
																			var jg = Math.atanh(jg)
																		} else
																			if (hanshumc == "arccosh") {
																				var jg = Math.acosh(jg)
																			} else
																				if (hanshumc == "arcsinh") {
																					var jg = Math.asinh(jg)
																				} else
																					if (hanshumc == "tanh") {
																						var jg = Math.tanh(jg)
																					} else
																						if (hanshumc == "sinh") {
																							var jg = Math.sinh(jg)
																						} else
																							if (hanshumc == "cosh") {
																								var jg = Math.cosh(jg)
																							} else
																								if (hanshumc == "abs") {
																									var jg = Math.abs(jg)
																								} else
																									if (hanshumc == "sqrt") {
																										var jg = Math.sqrt(jg)
																									} else
																										if (hanshumc == "zete") {
																											var jg = zete(jg)
																										} else
																											if (hanshumc == "exp") {
																												var jg = Math.pow(Math.E, jg)
																											} else
																												if (hanshumc == "gamma") {
																													var jg = gamma(jg)
																												} else
																													if (hanshumc == "floor") {
																														var jg = Math.floor(jg)
																													} else
																														if (hanshumc == "lg") {
																															var jg = Math.log10(jg)
																														}

								//*/
								if (jg < 0.000001 && jg > -0.000001) {
									var jg = 0
								}
								if (jg > 100000000000000000000) {
									var jg = 100000000000000000000
								}
								if (jg < -100000000000000000000) {
									var jg = -100000000000000000000
								}
								//console.log(hscd,hanshumc,jg)
								jg = String(jg)
							}
						}

					} else { //有多个变量
						zshs = true
						hanshumc = diaoyongzifuchuang.substring(qianmdkh - 2, qianmdkh)
						jg = jt(hanshumc, tj)
						hscd = 2
					}
					//console.log(tj)

					if (zshs == true) { //替换计算的结果               (1+(3*5))  →  (1+15)
						var zshs = false
						//console.log(hscd,hanshumc,jg)
						diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh - hscd) + jg + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)
					} else {
						diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh) + jg + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)
					}
					//console.log(diaoyongzifuchuang)
					break
				}
		}
	}
	//console.log(x,Number(diaoyongzifuchuang))
	return Number(diaoyongzifuchuang)

}

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

function num_to_px(x, y) {
	return [x * numtopx + (ydisX), (ydisY) - y * numtopx]
}

function hzqx(jxs, q2, z2, m) {
	//
	//console.log(m)
	var m = false
	pxtonum = accDiv(hxxianshi, xianshikuandu)
	numtopx = accDiv(xianshikuandu, hxxianshi)
	points = []

	var yxfw = [q2, z2]
	var xfw = [jxs_l_for_azhs(q2), jxs_l_for_azhs(z2)]
	var qidianx
	var qidiany
	var zhongdianx
	var zhongdiany
	//计算xy起点终点
	//console.log(xfw)
	var yicizjia = xianshikuandu * pxtonum / xrjqd //num
	var sqd = -ydisX * pxtonum
	if ((xfw[0] < sqd || yxfw[0] == '_infinite') || !isrel(xfw[0])) {
		//console.log(sqd,yicizjia)
		var qidianx = Math.floor(sqd / yicizjia) * yicizjia
	} else {
		var qidianx = xfw[0]
	}
	//console.log(qidianx,zhongdianx)
	var sqd = (xianshikuandu - ydisX) * pxtonum
	if (xfw[1] > sqd || yxfw[1] == 'infinite' || !isrel(xfw[1])) {
		var zhongdianx = (Math.floor(sqd / yicizjia) + 1) * yicizjia
	} else {
		var zhongdianx = xfw[1]
	}
	//console.log(qidianx,zhongdianx)
	if (qidianx > zhongdianx) {
		var xsqd = zhongdianx;
		var xhzd = qidianx
	} else { //允许颠倒取值
		var xsqd = qidianx;
		var xhzd = zhongdianx
	}
	//console.log(xsqd,xhzd)
	//每次增加
	var dancizjia = accMul(accDiv(xianshikuandu, xrjqd), pxtonum)


	if (jxs.substring(0, 2) == "x:") { //对于竖向函数的优化

		if (jxs_l_for_azhs(q2) > jxs_l_for_azhs(z2)) {
			var q = z2;
			var z = q2
		} else { //允许颠倒取值
			var q = q2;
			var z = z2
		}
		var ghughughughguhguhguhgughu = (ydisY) * pxtonum
		if (q == undefined || q == "_infinite" || q > ghughughughguhguhguhgughu) {
			var xsqd = ghughughughguhguhguhgughu //循环起点
		} else {
			var xsqd = jxs_l_for_azhs(q)
		}
		if (z == undefined || z == "infinite" || z < ghughughughguhguhguhgughu - xianshigaodu * pxtonum) {
			var xhzd = ghughughughguhguhguhgughu - xianshigaodu * pxtonum //循环终点
		} else {
			var xhzd = jxs_l_for_azhs(z)
		}
		var reljxs = jxs_l_for_azhs(jxs.substring(2, jxs.length))
		//console.log(q,xsqd)
		hbck.beginPath();
		hbck.moveTo(num_to_px(reljxs, xsqd)[0], num_to_px(reljxs, xsqd)[1]);
		hbck.lineTo(num_to_px(reljxs, xhzd)[0], num_to_px(reljxs, xhzd)[1])
		hbck.closePath()
		hbck.stroke();
		//console.log(xsqd,xhzd,reljxs,num_to_px(reljxs,xsqd),num_to_px(reljxs,xhzd))

		return
	} else if (jxs.substring(0, 2) == "r:") { //对于圆的优化


		var y_x = jxs_l_for_azhs(jxs.substring(2, jxs.length).split(';')[0])
		var y_y = jxs_l_for_azhs(jxs.substring(2, jxs.length).split(';')[1])
		var y_r = jxs_l_for_azhs(jxs.substring(2, jxs.length).split(';')[2])
		hbck.beginPath();

		if (m) {
			var dxfa = "hbck.arc(" + (y_x * numtopx + (ydisX)) + "," + ((ydisY) - y_y * numtopx) + "," + (y_r * numtopx) + ", 0," + 2 * Math.PI + ");"
			tjgj(dxfa);
		}
		hbck.arc((y_x * numtopx + (ydisX)), ((ydisY) - y_y * numtopx), (y_r * numtopx), 0, 2 * Math.PI);
		//hbck.closePath()
		hbck.stroke();
		//console.log(xsqd,xhzd,reljxs,num_to_px(reljxs,xsqd),num_to_px(reljxs,xhzd))
		//
		return
	} else if (jxs.substring(0, 2) == "p:") { //极坐标
		//console.log('jzb')
		var dczj = jd_to_hd(360 / xrjqd)
		var jxs2 = jxs.substring(2, jxs.length)
		points = []
		if (m) {
			shijixianshiguiji.push('points = []')
		}
		var THEfirst = true
		for (var i = 0; i < 2 * Math.PI; i = i + dczj) {
			var r = jxs_l_for_azhs(jxs2, i)
			var x = r * Math.cos(i)
			var y = r * Math.sin(i)
			var xxx = (ydisX) + x * numtopx
			var yyy = (ydisY) - y * numtopx
			//    console.log(jxs2,xxx,yyy)
			if (THEfirst == true) {
				THEfirst = false

				if (m) {
					var dxfa = "points.push({x: " + xxx + ",y: " + yyy + "});"
					tjgj(dxfa);
				}
				points.push({
					x: xxx,
					y: yyy
				});
			} else {

				if (m) {
					var dxfa = "draw(" + xxx + ", " + yyy + ")"
					tjgj(dxfa);
				}
				draw(xxx, yyy)
			}

		}
		return
	} else if (zdyset[18] == 'true') {
		var d = isgetjxsychs(jxs)
		if (isychs(jxs, true) == true || d[0] == true) { //对一次函数的优化
			//console.log(jxs,d,xsqd,jxs_l_for_azhs(jxs, xsqd),jxs_l_for_azhs(jxs, xhzd))
			var qsd = (ydisX) + xsqd * numtopx
			var zd = (ydisX) + xhzd * numtopx
			//console.log(xsqd,xhzd,qsd,zd)
			hbck.beginPath();
			if (m) {
				var dxfa = "hbck.moveTo(" + qsd + ", " + ((ydisY) - (d[1] * xsqd + d[2]) * numtopx) + ");hbck.lineTo(" + zd + ", " + ((ydisY) - (d[1] * xhzd + d[2]) * numtopx) + ");"
				tjgj(dxfa);
			}
			hbck.moveTo(qsd, ((ydisY) - (d[1] * xsqd + d[2]) * numtopx));
			hbck.lineTo(zd, ((ydisY) - (d[1] * xhzd + d[2]) * numtopx))
			hbck.closePath()
			hbck.stroke();
			return
		} else if (yhsjx(jxs)[0] == true) { //对圆函数的优化
			var y_x = jxs_l_for_azhs(yhsjx(jxs)[1])
			var y_y = jxs_l_for_azhs(yhsjx(jxs)[2])
			var y_r = jxs_l_for_azhs(yhsjx(jxs)[3])
			// /console.log(y_x,y_y,y_r)
			if (y_r <= 0) {
				return
			}
			hbck.beginPath();
			if (yhsjx(jxs)[4] == "s") {
				if (m) {
					var dxfa = "hbck.arc(" + (y_x * numtopx + (ydisX)) + ", " + ((ydisY) - y_y * numtopx) + ", " + (y_r * numtopx) + ", Math.PI, 2 * Math.PI, false);"
				}
				hbck.arc((y_x * numtopx + (ydisX)), ((ydisY) - y_y * numtopx), (y_r * numtopx), Math.PI, 2 * Math.PI, false);
			} else {
				if (m) {
					var dxfa = "hbck.arc(" + (y_x * numtopx + (ydisX)) + ", " + ((ydisY) - y_y * numtopx) + ", " + (y_r * numtopx) + ", 0, Math.PI, false);"
				}
				hbck.arc((y_x * numtopx + (ydisX)), ((ydisY) - y_y * numtopx), (y_r * numtopx), 0, Math.PI, false);
			}

			if (m) {
				tjgj(dxfa);
			}

			//hbck.closePath()
			hbck.stroke();
			return
		}
	}

	//console.log(xsqd,xhzd)

	var last = true
	for (var jt = xsqd; jt <= xhzd + dancizjia; jt = accAdd(jt, dancizjia)) {
		if (jt < 0.00001 && jt > -0.00001) {
			var jt = 0
		}
		var xxx = (ydisX) + jt * numtopx
		var yyy = (ydisY) - jxs_l_for_azhs(jxs, jt) * numtopx
		//console.log(jxs,xxx,yyy,jt)
		if (String(yyy) == "NaN" || yyy > 1.5 * dzd || yyy < -0.5 * zzd) {
			if (zdyset[33] == 'true') {
				points = []
				var last = true
			} else {
				if (jt == xsqd) {
					points.push({
						x: xxx,
						y: yyy
					});
					if (m) {
						shijixianshiguiji.push("points.push({x: " + xxx + ",y: " + yyy + "});")
					}
				}
				if (last == true) {
					points.push({
						x: xxx,
						y: yyy
					});
					if (m) {
						shijixianshiguiji.push("points.push({x: " + xxx + ",y: " + yyy + "});")
					}
					var last = false
				} else {
					//console.log(jxs,xxx,yyy,jt)
					draw(xxx, yyy)
					if (m) {
						shijixianshiguiji.push("draw(" + xxx + ", " + yyy + ")")
					}

				}
			}
		} else {
			if (jt == xsqd) {
				points.push({
					x: xxx,
					y: yyy
				});
				if (m) {
					shijixianshiguiji.push("points.push({x: " + xxx + ",y: " + yyy + "});")
				}
			}
			if (last == true) {
				points.push({
					x: xxx,
					y: yyy
				});
				if (m) {
					shijixianshiguiji.push("points.push({x: " + xxx + ",y: " + yyy + "});")
				}
				var last = false
			} else {
				//console.log(jxs,xxx,yyy,jt)
				draw(xxx, yyy)
				if (m) {
					shijixianshiguiji.push("draw(" + xxx + ", " + yyy + ")")
				}
			}

		}
		//console.log(xxx,yyy,jt,last,points)

	}
}

function schzcByhsh(a) { //生成函数簇
	var jxs = hslb[a].split('|')[0]
	var lax = hslb[a].split('|')[2]
	var lay = hslb[a].split('|')[3]
	lax = lax.substring(1, lax.length - 1)
	lay = lay.substring(1, lay.length - 1)
	xfw = lax.split(';')
	xfy = lay.split(';')
	schzc(jxs, xfw, xfy)
	var whanshuculiebiao = hanshuculiebiao[a]

	function schzc(jxs, xfw, xfy) { //生成函数簇
		//解析式str,[a,b],[a,b]
		//var jxs=hslb[a].split('|')[0]

		var qidianx
		var qidiany
		var zhongdianx
		var zhongdiany
		//计算xy起点终点
		var yicizjia = xianshikuandu * pxtonum / xrjqd //num
		var sqd = -ydisX * pxtonum
		if (xfw[0] < sqd || xfw[0] == '_infinite') {
			var qidianx = Math.floor(sqd / yicizjia) * yicizjia
		} else {
			var qidianx = Math.floor(xfw[0] / yicizjia) * yicizjia
		}
		var sqd = (xianshikuandu - ydisX) * pxtonum
		if (xfw[1] > sqd || xfw[1] == 'infinite') {
			var zhongdianx = (Math.floor(sqd / yicizjia) + 1) * yicizjia
		} else {
			var zhongdianx = Math.floor(xfw[1] / yicizjia) * yicizjia
		}
		var sqd = (ydisY - xianshigaodu) * pxtonum
		if (xfy[0] < sqd || xfy[0] == '_infinite') {
			var qidiany = Math.floor(sqd / yicizjia) * yicizjia
		} else {
			var qidiany = Math.floor(xfy[0] / yicizjia) * yicizjia
		}
		var sqd = ydisY * pxtonum
		if (xfy[1] > sqd || xfy[1] == 'infinite') {
			var zhongdiany = (Math.floor(sqd / yicizjia) + 1) * yicizjia
		} else {
			var zhongdiany = Math.floor(xfy[1] / yicizjia) * yicizjia
		}

		//console.log(qidianx,qidiany,zhongdianx,zhongdiany)//dui




		function whscjd(whsc, zb) { //wei函数粗列表加点
			for (let i = 0; i < whsc.length; i++) {
				const element = whsc[i];
				for (let t = 0; t < element.length; t++) {
					if (
						Math.pow(element[t].x - zb.x, 2) + Math.pow(element[t].y - zb - y, 2) < 2.01 * yicizjia * yicizjia
					) {
						element.push(zb)
						//whsc[i]=element
						return element
					}
				}
			}
		}

		//注意此处没有一次函数圆函数
		if (jxs.split('=').length > 1) {
			//隐函数方程


		} else { //普通函数
			whanshuculiebiao = [
				[]
			]
			for (let i = qidianx; i <= zhongdianx; i += yicizjia) {
				var t = jxs_l_for_azhs(jxs, i)
				if ((t < xfy[1] || xfy[1] == 'infinite') && (t > xfy[0] || xfy[0] == '_infinite')) { //dui
					whscjd(whanshuculiebiao, {
						x: i,
						y: t
					})
				} else {
					//duandian
				}
			}
		}
		//hanshuculiebiao
	}
}

function tjgj(dxfa) {
	if (isInArray(shijixianshiguiji.splice(shijixianshiguiji.length - 10, shijixianshiguiji.length), dxfa)) {

	} else {
		shijixianshiguiji.push(dxfa)
	}

}
/*
function zhixinguiji(){
	for (let i = 0; i < shijixianshiguiji.length; i++) {
		const element = shijixianshiguiji[i];
		eval(element)
	}
}*/
function hzd(x, y, k, r, zi) {
	if (x < -ydisX * pxtonum || x > -ydisX * pxtonum + hxxianshi) {
		return
	}
	if (y > ydisY * pxtonum || y < ydisY * pxtonum - xianshigaodu * pxtonum) {
		return
	}
	pxtonum = accDiv(hxxianshi, xianshikuandu)
	numtopx = accDiv(xianshikuandu, hxxianshi)
	hbck.beginPath();
	hbck.arc(x * numtopx + ydisX, ydisY - y * numtopx, r, 0, 2 * Math.PI);
	hbck.fillStyle = k;
	hbck.fill();
	hbck.stroke();
	if (zi) {
		hbck.font = "italic " + yywzdx + "px 'Times New Roman',宋体,serif";
		hbck.fillStyle = getcolor()
		hbck.textAlign = "center";
		hbck.textBaseline = "middle";
		hbck.fillText(zi, x * numtopx + (ydisX) - yywzdx / 2, (ydisY) - y * numtopx - yywzdx / 2);
	}

}

function jc(x) { //阶乘（整数）
	if (x == 0) {
		return 1
	}
	var yscs = x
	for (var k = 1; k < x; k++) {
		var yscs = yscs * k
	}
	return yscs
}

function madewg() { //绘制网格
	var tfx = Math.ceil(Math.log10(1 / fq1))
	if (tfx < 0) {
		tfx = 0
	}
	if (JZBmod == true) {
		var huankuan = 40
		hbck.fillStyle = zdyset[0];
		hbck.strokeStyle = zdyset[1];
		hbck.lineWidth = 1;
		if (xianshigaodu > xianshikuandu) {
			var jck = xianshikuandu
		} else {
			var jck = xianshigaodu
		}
		for (var i = 0; i < Math.floor(jck / huankuan) + 1; i++) {
			if (huizhiwangge == true) {
				hbck.beginPath();
				hbck.arc(0 * numtopx + (ydisX), (ydisY) - 0 * numtopx, (i + 1) * (fq1 * numtopx), 0, 2 * Math.PI);
				hbck.stroke();
			}
			if (Math.abs(i - (ydisX)) < 0.01 || zbzxs == false) { } else {
				hbck.font = "15px 'Times New Roman', 宋体,serif";
				hbck.fillStyle = zdyset[0];
				hbck.textAlign = "center";
				hbck.textBaseline = "middle";
				hbck.fillText(String((-1 * pxtonum * ((ydisX) - (i + 1) * (fq1 * numtopx) - (ydisX))).toFixed(tfx)), (ydisX) + (i + 1) * (fq1 * numtopx), (ydisY) + 10);
				hbck.fillText(String((pxtonum * ((ydisX) - (i + 1) * (fq1 * numtopx) - (ydisX))).toFixed(tfx)), (ydisX) - (i + 1) * (fq1 * numtopx), (ydisY) + 10);
			}
		}
		if (huizhiwangge == true) {
			var ghughughughguhguhguhgughu = -1 * (ydisX) * pxtonum
			var xsqd = ghughughughguhguhguhgughu
			var xszd = ghughughughguhguhguhgughu + zzd * pxtonum

			hbck.lineWidth = 0.5;
			for (var i = 0; i < 2 * Math.PI; i = i + (Math.PI / 12)) {
				//console.log(i)
				if (Math.tan(i) > 1000000 || Math.tan(i) < -1000000) {
					hbck.beginPath();
					hbck.moveTo((ydisX), 0);
					hbck.lineTo((ydisX), xianshigaodu);
					hbck.closePath()
					hbck.stroke();
				} else {
					var qsd = (ydisX) + xsqd * numtopx
					var zd = (ydisX) + xszd * numtopx
					hbck.beginPath();
					hbck.moveTo(qsd, (ydisY) - jyh(i, xsqd) * numtopx);
					hbck.lineTo(zd, (ydisY) - jyh(i, xszd) * numtopx);
					hbck.closePath()
					hbck.stroke();
				}
			}
		}
		function jyh(a, x) {
			return Math.tan(a) * x
		}
		return
	}

	var jzuo = ((ydisX)) % (fq1 * numtopx)
	for (var i = jzuo; i < zzd; i = i + (fq1 * numtopx)) {
		if (huizhiwangge == true) {
			hbck.lineWidth = 1;
			hbck.strokeStyle = zdyset[1];
			hbck.beginPath();
			hbck.moveTo(i, 0);
			hbck.lineTo(i, dzd)
			hbck.stroke();
		}
		if (Math.abs(i - (ydisX)) < 0.01 || zbzxs == false) { } else {
			hbck.font = "15px 'Times New Roman', 宋体,serif";
			hbck.fillStyle = zdyset[0];
			hbck.textAlign = "center";
			hbck.textBaseline = "middle";
			hbck.fillText(String((pxtonum * (i - (ydisX))).toFixed(tfx)), i, (ydisY) + 10);
		}

	}
	var jzuo = ((ydisY)) % (fq1 * numtopx)
	for (var i = jzuo; i < dzd; i = i + (fq1 * numtopx)) {
		if (huizhiwangge == true) {
			hbck.lineWidth = 1;
			hbck.strokeStyle = zdyset[1];
			hbck.beginPath();
			hbck.moveTo(0, i);
			hbck.lineTo(zzd, i)
			hbck.stroke();
		}

		if (Math.abs(i - (ydisY)) < 0.01 || zbzxs == false) { } else {
			hbck.font = "15px 'Times New Roman', 宋体,serif";
			hbck.fillStyle = zdyset[0];
			hbck.textAlign = "center";
			hbck.textBaseline = "middle";
			hbck.fillText(String((-1 * pxtonum * (i - (ydisY))).toFixed(tfx)), (ydisX) - 10, i);
		}
	}
	if (zbzxs == true) {
		hbck.font = "15px 'Times New Roman', 宋体,serif";
		hbck.fillStyle = zdyset[0];
		hbck.textAlign = "center";
		hbck.textBaseline = "middle";
		hbck.fillText('0', ydisX - 10, (ydisY) + 10);
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
		if (w.substring(i, i + 1) == "0" || w.substring(i, i + 1) == ".") { } else {
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

	fq1 = Math.pow(10, zs) * findCloseNum(zdyset[7].split(","), dernum) //允许出现的倍数：1 2 5

}

function timestampToTime(timestamp) { //时间戳转时间
	timestamp = timestamp ? timestamp : null;
	let date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	let Y = date.getFullYear() + ' ';
	let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + ' ';
	let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
	let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ' ';
	let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ' ';
	let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
	return Y + M + D + h + m + s;
}


function huizhi(chaoji_m, qk) {
	var start = new Date().getTime() // 开始时间
	//	console.log(start)
	if (zdyset[20] == 'true') {
		document.getElementById("divdis").style.top = -1 * xianshigaodu + "px"
		document.getElementById("divdis").style.left = -1 * xianshikuandu + "px"
	}
	if (v_i_p[0] == true) { }
	if (qk) {

	} else {
		hbck.clearRect(0, 0, zzd, dzd) //清空画板
	}


	if (sj(0, 100) == 14) {
		//v_i_p.splice(0,1,false)
	}

	//numtopx=accDiv(xianshikuandu,hxxianshi)
	document.getElementById("wanggexian").style.display = "block"

	if (!(huizhiwangge == false && zbzxs == false)) { //绘制网格
		madewg()
	}
	if (zbzxs == true) {
		hbck.lineWidth = 2;
		hbck.strokeStyle = zdyset[0];
		hbck.beginPath();
		hbck.moveTo(ydisX, 0);
		hbck.lineTo(ydisX, dzd)
		hbck.stroke();
		hbck.beginPath();
		hbck.moveTo(0, ydisY);
		hbck.lineTo(zzd, ydisY)
		hbck.stroke();
	}

	for (var jr = 0; jr < hslb.length; jr++) { //画函数
		if (hslb[jr] == "") { } else {
			var zxcla = ""
			if (hslb[jr].split("|")[1] == undefined || hslb[jr].split("|")[1] == "") {
				zxcla = getcolor()
			} else {
				zxcla = hslb[jr].split("|")[1]
			}
			zxcla = getcolor(zxcla)
			hbck.strokeStyle = zxcla
			if (isInArray(xzlb, "h" + jr) == true) {
				hbck.lineWidth = 3
				hbck.strokeStyle = "red"
			} else {
				hbck.lineWidth = Number(hslb[jr].split("|")[4])
			}
			var guijiz = isInArray(guiji, "h" + jr)

			var lax = hslb[jr].split('|')[2]
			lax = lax.substring(1, lax.length - 1)
			xfw = lax.split(';')
			//console.log(xfw)
			if (isInArray(yclb, "h" + jr) == true) {
				if (isInArray(xzlb, "h" + jr) == true) {
					// console.log(jr)
					hzqx(hslb[jr].split("|")[0], xfw[0], xfw[1], guijiz)
					if (guijiz) {
						shijixianshiguiji.push("hzqx('" + hslb[jr].split("|")[0] + "','" + xfw[0] + "','" + xfw[1] + "')")
					}
				}
			} else {
				// console.log(jr)
				hzqx(hslb[jr].split("|")[0], xfw[0], xfw[1], guijiz)
				if (guijiz) {
					shijixianshiguiji.push("hzqx('" + hslb[jr].split("|")[0] + "','" + xfw[0] + "','" + xfw[1] + "')")
				}
			}

		}
	}
	hbck.strokeStyle = getcolor()
	hbck.lineWidth = 1
	for (var wl = 0; wl < dlb.length; wl++) { //画点
		var x = dlb[wl].split("|")[0]
		var y = dlb[wl].split("|")[1]
		var zi = dlb[wl].split("|")[2]
		if (dlb[wl] == "") { } else {
			var cjd = isInArray(guiji, "d" + wl)
			if (isInArray(yclb, "d" + wl) == true) {
				if (isInArray(xzlb, "d" + wl) == true) {
					hzd(jxs_l_for_azhs(x), jxs_l_for_azhs(y), "green", 5, zi)
					if (cjd) {
						shijixianshiguiji.push("hzd('" + jxs_l_for_azhs(x) + "','" + jxs_l_for_azhs(y) + "','blue', 2)")
					}
				}
			} else {
				if (isInArray(xzlb, "d" + wl) == true) {
					hzd(jxs_l_for_azhs(x), jxs_l_for_azhs(y), "green", 5, zi)
					if (cjd) {
						shijixianshiguiji.push("hzd('" + jxs_l_for_azhs(x) + "','" + jxs_l_for_azhs(y) + "','blue', 2)")
					}

				} else {
					hzd(jxs_l_for_azhs(x), jxs_l_for_azhs(y), "red", 3, zi)
					if (cjd) {
						shijixianshiguiji.push("hzd('" + jxs_l_for_azhs(x) + "','" + jxs_l_for_azhs(y) + "','blue', 2)")
					}
				}
			}

		}
	}

	hbck.strokeStyle = zdyset[0]
	AZPen.paint(hbck);

	for (var t = 0; t < wzpzlb.length; t++) { //移动文字批注
		if (wzpzlb[t] == "") { } else {
			if (isInArray(yclb, "w" + t) == true) {
				if (isInArray(xzlb, "w" + t) == true) {
					document.getElementById("pz" + t).style.display = 'block'
					xr(t)
				} else {
					document.getElementById("pz" + t).style.display = 'none'
				}
			} else {
				document.getElementById("pz" + t).style.display = 'block'
				xr(t)
			}

			function xr(t) {
				var jx = Number(wzpzlb[t].split("|")[0])
				var jy = Number(wzpzlb[t].split("|")[1])
				document.getElementById("pz" + t).style.left = jx * numtopx + (ydisX) - ((wztopx(wzpzlb[t].split("|")[2], yywzdx)[0] + 20) / 2)
				document.getElementById("pz" + t).style.top = (ydisY) - jy * numtopx - ((wztopx(wzpzlb[t].split("|")[2], yywzdx)[1] + 5) / 2)
				document.getElementById("pz" + t).style.width = (wztopx(wzpzlb[t].split("|")[2], yywzdx)[0] + 20) + "px"
				document.getElementById("pz" + t).style.height = (wztopx(wzpzlb[t].split("|")[2], yywzdx)[1] + 5) + "px"

			}
		}
		//document.getElementById("pz" + t).innerHTML = wzpznrzh(wzpzlb[t].split("|")[2])

	}
	//写字
	if (xiezi) {
		hbck.font = "bolder 30px 'Times New Roman',宋体,serif,'Liberation Mono'";
		hbck.fillStyle = zdyset[0]
		hbck.textAlign = "left";
		//hbck.textBaseline = "middle";
		hbck.fillText(language[26], 10, 30);
		hbck.fillText(language[27], 10, 70);
	}


	//dhz()



	//结束
	var end = new Date().getTime() // 结束时间


	usetime = (end - start)
	if (SHOUXIANMOSHI[1] == 'ifrqt') {
		document.getElementById("yams").innerHTML = ''
		document.getElementById('fpsxs').innerHTML = ''
	} else {
		document.getElementById("yams").innerHTML = language[28] + String(end - start) + "ms"

	}


	xvanranCS++
	return
}

function fsdcds(h) { //鼠标移动
	//console.log(h.clientX*suofang,)

	var sbzbxx = h.clientX * suofang
	var sbzbxy = h.clientY * suofang

	var ysbzbxy = sbzbxy
	print6(sbzbxx, sbzbxy)
	var pxtonum = (hxxianshi / xianshikuandu)
	var sbzbxx = (sbzbxx - 20) - (ydisX)
	var sbzbxy = (ydisY) - (sbzbxy - 100)
	var sbzbxx = (sbzbxx * pxtonum).toFixed(3)
	var sbzbxy = (sbzbxy * pxtonum).toFixed(3)
	document.getElementById("gbftr").value = sbzbxx
	document.getElementById("oi9l").value = sbzbxy
	// print(Number(sbzbxx), Number(sbzbxy))
	now_mouse_x = Number(sbzbxx)
	now_mouse_y = Number(sbzbxy)


	if (gssbyd == true) {
		mouse_x = sbzbxx
		mouse_y = sbzbxy
		sxcl();
		huizhi()
	}
	if (ysbzbxy <= 5 && lddzt == false && zhijilddzk == false) {
		document.getElementById('lddnr').innerHTML = '！'
		lddzt = true
		//ldd_zk()
	}
	if (ysbzbxy > 5 && lddzt == true) {
		lddzt = false
		//ldd_sh()
	}
}



function px_to_num(x, y, fkm) { //将鼠标xy坐标转化为坐标系数字
	var pxtonum = (hxxianshi / xianshikuandu)
	if (fkm == false) {
		var sbzbxx = x - (ydisX)
		var sbzbxy = (ydisY) - y
	} else {
		var sbzbxx = (x - 20) - (ydisX)
		var sbzbxy = (ydisY) - (y - 100)
	}

	var sbzbxx = (sbzbxx * pxtonum)
	var sbzbxy = (sbzbxy * pxtonum)
	return ([sbzbxx, sbzbxy])
}

function hssf(ev) { //鼠标滚轮
	if (ev.wheelDelta < 0) {
		var hh = Number((hxxianshi * 1.1).toFixed(2))
	} else if (ev.wheelDelta > 0) {
		var hh = Number((hxxianshi * 0.9).toFixed(2))
	}
	if (hh < 0.02) {
		hh = 0.02
	}
	if (hh > 10000000) {
		hh = 10000000
	}
	document.getElementById("fvfrv").value = hh
	if (zdyset[19] == 'true') {
		var yx = Number(now_mouse_x) * numtopx - Number(now_mouse_x) * (xianshikuandu / hh)
		var yy = Number(now_mouse_y) * numtopx - Number(now_mouse_y) * (xianshikuandu / hh)
		ydisX = (ydisX) + yx //*((hh-hxxianshi)/hxxianshi)
		ydisY = (ydisY) - yy //*((hh-hxxianshi)/hxxianshi)
		document.getElementById("yzhou").style.left = (ydisX) - 1 + "px"
		document.getElementById("xzhou").style.top = (ydisY) - 1 + "px"
		zbzzbqz()
	}

	hxxianshi = hh
	pxtonum = accDiv(hxxianshi, xianshikuandu)
	numtopx = accDiv(xianshikuandu, hxxianshi)
	cxjswgjj()
	huizhi()
}

function azgetjiaodu(q, w, e) {
	var a = dlb[q].split("|")
	var b = dlb[w].split("|")
	var c = dlb[e].split("|")
	if (jlks == true) {
		var ret = jiaodu(a, b, c)
		azgetdzb(q, 0);
		azgetdzb(q, 1);
		azgetdzb(w, 0);
		azgetdzb(w, 1);
		azgetdzb(e, 0);
		azgetdzb(e, 1)
		jkxjj.push([cc(), [q, w, e], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return jiaodu(a, b, c)
}

function azgetcl(clh, xy) { //获取变量相关
	if (xy == 1) {
		if (jlks == true) {
			ret = clzlb[clh]
			jkxjj.push([cc(), [clh, xy], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
		}
		return (clzlb[clh])

	} else {
		return jxs_l_for_azhs(cllb[clh].split("|")[xy])
	}
}



function azgetdzb(dh, xy) { //获取点相关
	var ret = jxs_l_for_azhs(dlb[dh].split("|")[xy])
	if (jlks == true) {
		//@azgetdzb
		jkxjj.push([cc(), [dh, xy], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}

	return ret
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
		if (newgetjdn[i] == hs1 + "|" + hs2 + "|" + jqd) {
			var d = i
			break
		}
	}
	//console.log(d)
	if (d == -1) { //之前没算过!

		if (hslb[hs1].split('|')[0].startsWith('x:') || hslb[hs2].split('|')[0].startsWith('x:')) {
			var first = hslb[hs1].split('|')[0], second = hslb[hs2].split('|')[0];
			var vertical = first.startsWith('x:') ? first : second;
			var other = first.startsWith('x:') ? second : first;
			var scsz = [];
			if (!other.startsWith('x:')) {
				var ae = jxs_l_for_azhs(vertical.slice(2));
				if (other.startsWith('r:')) {
					var circle = other.slice(2).split(';').map(function (value) { return jxs_l_for_azhs(value); });
					var radicand = circle[2] * circle[2] - Math.pow(ae - circle[0], 2);
					var tolerance = 64 * Number.EPSILON * Math.max(1, circle[2] * circle[2]);
					if (radicand >= -tolerance) {
						var delta = Math.sqrt(Math.max(0, radicand));
						scsz = [[ae, circle[1] + delta], [ae, circle[1] - delta]];
					}
				} else scsz = [[ae, jxs_l_for_azhs(other, ae)]];
			}
		} else
			if (zdyset[17] == 'true') {
				if (yhsjx(hslb[hs1].split("|")[0])[0] == true || yhsjx(hslb[hs2].split("|")[0])[0] == true) { //有圆函数
					if (yhsjx(hslb[hs1].split("|")[0])[0] == true) {
						var h1jxs = hslb[hs1].split("|")[0];
						var h2jxs = hslb[hs2].split("|")[0]
					} else {
						var h1jxs = hslb[hs2].split("|")[0];
						var h2jxs = hslb[hs1].split("|")[0]
					}
					if (yhsjx(h2jxs)[0] == true) { //双圆
						var yda = yhsjx(h1jxs)[1]
						var ydb = yhsjx(h1jxs)[2]
						var ydr = yhsjx(h1jxs)[3]

						var y2da = yhsjx(h2jxs)[1]
						var y2db = yhsjx(h2jxs)[2]
						var y2dr = yhsjx(h2jxs)[3]

						var yjdx = jiaodian_yy(yda, ydb, ydr, y2dr, y2da, y2db)

						var scsz = [
							[yjdx[0], yjdx[2]],
							[yjdx[1], yjdx[3]]
						]
					} else {
						if (isgetjxsychs(h2jxs)[0] == true) { //一次函数-圆
							var yda = yhsjx(h1jxs)[1]
							var ydb = yhsjx(h1jxs)[2]
							var ydr = yhsjx(h1jxs)[3]
							var ydc = isgetjxsychs(h2jxs)[1]
							var ydd = isgetjxsychs(h2jxs)[2]
							//  console.log(yda, ydb, ydr, ydc, ydd)
							var yjdx = jiaodian_yh(yda, ydb, ydr, ydc, ydd)

							var scsz = [
								[yjdx[0], jxs_l_for_azhs(h2jxs, yjdx[0])],
								[yjdx[1], jxs_l_for_azhs(h2jxs, yjdx[1])]
							]


						} else { ///圆与普通函数
							var yda = yhsjx(h1jxs)[1]
							var ydb = yhsjx(h1jxs)[2]
							var ydr = yhsjx(h1jxs)[3]
							var y_jxs = "sqrt((" + ydr + ")^2_(x_" + yda + ")^2)+" + ydb
							var y_jxs_f = "0_sqrt((" + ydr + ")^2_(x_" + yda + ")^2)+" + ydb
							var scsz = jiaodian_zc(h2jxs, y_jxs, djg, xy, jqd)
							var scsz_f = jiaodian_zc(h2jxs, y_jxs_f, djg, xy, jqd)
							for (var q = 0; q < scsz_f.length; q++) {
								scsz.push(scsz_f[q])
							}

						}
					}
				} else if (isgetjxsychs(hslb[hs1].split("|")[0])[0] == true && isgetjxsychs(hslb[hs2].split("|")[0])[0] == true) { //双一次
					var a = isgetjxsychs(hslb[hs1].split("|")[0])[1]
					var b = isgetjxsychs(hslb[hs1].split("|")[0])[2]
					var c = isgetjxsychs(hslb[hs2].split("|")[0])[1]
					var d = isgetjxsychs(hslb[hs2].split("|")[0])[2]
					var jdx = jiaodian_hh(a, b, c, d)
					var scsz = [
						jdx
					]
				} else {
					var scsz = jiaodian_zc(hslb[hs1], hslb[hs2], djg, xy, jqd)
				}
			} else { //正常的函数
				var scsz = jiaodian_zc(hslb[hs1], hslb[hs2], djg, xy, jqd)
			}


		// Reject non-real intersections and count a tangent point only once.
		scsz = scsz.filter(function (point, index, all) {
			if (!point || !Number.isFinite(point[0]) || !Number.isFinite(point[1])) return false;
			return !all.slice(0, index).some(function (previous) {
				return previous && Math.hypot(point[0] - previous[0], point[1] - previous[1]) <= 64 * Number.EPSILON * Math.max(1, Math.abs(point[0]), Math.abs(point[1]));
			});
		});
		newgetjdn.push(hs1 + "|" + hs2 + "|" + jqd)

		newgetjdz.push(scsz)
		//console.log(scsz)
	} else {
		var scsz = newgetjdz[d]
	}
	//var end = new Date().getTime() // 结束时间
	// console.log(scsz)
	var yret = false
	if (xy == 0) {
		if (scsz.length <= djg) { } else {
			var yret = scsz[djg][0]
		}
	} else if (xy == 1) {
		if (scsz.length <= djg) { } else {
			var yret = scsz[djg][1]
		}
	} else if (xy == 2) {
		var yret = scsz.length
	}
	if (jlks == true) {
		var ret = yret
		jkxjj.push([cc(), [hs1, hs2, djg, xy, jqd], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return yret
}

function azgetpfx(x, d0, d1, d2, moooooood) { //构造角平分线
	// console.log(x)
	var zqsg = -1
	for (var i = 0; i < newgetpfxn.length; i++) {
		if (newgetpfxn[i] == d0 + "|" + d1 + "|" + d2) {
			zqsg = i;
			break
		}
	}
	//  console.log(zqsg)
	if (zqsg == -1) {

		var ebj = jiaodu([dlb[d0].split("|")[0], dlb[d0].split("|")[1]], [dlb[d1].split("|")[0], dlb[d1].split("|")[1]], [dlb[d2].split("|")[0], dlb[d2].split("|")[1]])
		ebj = ebj / 2
		var alfj = (jxs_l_for_azhs(dlb[d0].split("|")[1]) - jxs_l_for_azhs(dlb[d1].split("|")[1])) / (jxs_l_for_azhs(dlb[d0].split("|")[0]) - jxs_l_for_azhs(dlb[d1].split("|")[0]))
		//
		alfj = Math.atan(alfj)
		if (alfj < 0) {
			alfj = Math.PI - Math.abs(alfj)
		}
		//console.log(alfj, ebj, alfj - ebj)
		var hk = Math.tan(alfj - ebj)
		var hb = jxs_l_for_azhs(dlb[d1].split("|")[1]) - hk * jxs_l_for_azhs(dlb[d1].split("|")[0])
		addlog("函数解析式为 " + hk + "*x+" + hb)
		newgetpfxn.push(d0 + "|" + d1 + "|" + d2)
		newgetpfxz.push(hk + "*x+" + hb)
		var jpfxjxs = hk + "*x+" + hb

		/*
		 var x1 = jxs_l_for_azhs(dlb[d0].split("|")[0])
		 var y1 = jxs_l_for_azhs(dlb[d0].split("|")[1])
		 var x2 = jxs_l_for_azhs(dlb[d1].split("|")[0])
		 var y2 = jxs_l_for_azhs(dlb[d1].split("|")[1])
		 var k1 = (y1 - y2) / (x1 - x2)
		 var x1 = jxs_l_for_azhs(dlb[d1].split("|")[0])
		 var y1 = jxs_l_for_azhs(dlb[d1].split("|")[1])
		 var x2 = jxs_l_for_azhs(dlb[d2].split("|")[0])
		 var y2 = jxs_l_for_azhs(dlb[d2].split("|")[1])
		 var k2 = (y1 - y2) / (x1 - x2)
		 var k=(k1+k2)/2
		 var b=y1-k*x1


		 var jpfxjxs = k + "*x+" + b*/
	} else {
		var jpfxjxs = newgetpfxz[zqsg]
	}
	//console.log(jxs_l_for_azhs(jpfxjxs,x),jpfxjxs,x)
	if (moooooood == 'h') {
		return (jpfxjxs)
	}
	if (jlks == true) {
		var ret = (jxs_l_for_azhs(jpfxjxs, x))
		jkxjj.push([cc(), [x, d0, d1, d2, moooooood], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return (jxs_l_for_azhs(jpfxjxs, x))

	//cjxhs(hk+"*x+"+hb , "black", "", "",1)

}



function azgetjzs(x, ygzddlb, fhgs) { //过几点的函数曲线
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
			var x1 = azgetdzb(ygzddlb[0], 0)
			var y1 = azgetdzb(ygzddlb[0], 1)
			var x2 = azgetdzb(ygzddlb[1], 0)
			var y2 = azgetdzb(ygzddlb[1], 1)
			var k = (y1 - y2) / (x1 - x2)
			var b = (x2 * y1 - x1 * y2) / (x2 - x1)
			var scsz = k + "*x+" + b
			//addlog("函数解析式为 " + scsz)
			//console.log(scsz)
		} else {
			var y = ""
			//  console.log(ygzddlb)
			for (var i = 0; i < zc; i++) {
				if (dlb[ygzddlb[i]] == undefined) { } else {
					y = y + "(" + jxs_l_for_azhs(dlb[ygzddlb[i]].split("|")[0]) + "," + jxs_l_for_azhs(dlb[ygzddlb[i]].split("|")[1]) + ");"
				}

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
		//addlog("函数解析式为 " + scsz)
	} else {
		var scsz = newgetjxsz[d]
	}

	var zzsc = jxs_l_for_azhs(scsz, x)
	//console.log(new Date().getTime()-start)
	if (fhgs == "h") {
		if (jlks == true) {
			var ret = scsz
			jkxjj.push([cc(), [x, ygzddlb, fhgs], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
		}
		return scsz
	} else {
		if (jlks == true) {
			var ret = zzsc
			jkxjj.push([cc(), [x, ygzddlb, fhgs], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
		}
		return (zzsc)
	}

}

function azgetjl(d1, d2) { //两点距离
	var xc = Math.abs(jxs_l_for_azhs(dlb[d1].split("|")[0]) - jxs_l_for_azhs(dlb[d2].split("|")[0]))
	var yc = Math.abs(jxs_l_for_azhs(dlb[d1].split("|")[1]) - jxs_l_for_azhs(dlb[d2].split("|")[1]))
	var retjl = Math.sqrt(accAdd(accMul(xc, xc), accMul(yc, yc)))
	//addlog("距离为 "+retjl)
	if (jlks == true) {
		var ret = retjl
		jkxjj.push([cc(), [d1, d2], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return retjl
}

function azgetmous(xy, now) {
	if (now == 0) {
		if (xy == 0) {
			return mouse_x
		}
		if (xy == 1) {
			return mouse_y
		}
	} else if (now == 1) {
		if (xy == 0) {
			return now_mouse_x
		}
		if (xy == 1) {
			return now_mouse_y
		}
	}
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

function azgetcx(x, h, d, moooooood) {
	var uj = hslb[h].split("|")[0]

	if (isgetjxsychs(uj)[0] == true) {
		var ax = (isgetjxsychs(uj)[1])
		var dx = (dlb[d].split("|")[0])
		var dy = (dlb[d].split("|")[1])
	} else {
		var ax = (uj.split("*")[0])
		var dx = (dlb[d].split("|")[0])
		var dy = (dlb[d].split("|")[1])
	}


	// console.log(ax,dx,dy)
	var hsjxs = -1 / jxs_l_for_azhs(ax) + "*x+" + (jxs_l_for_azhs(dy) - jxs_l_for_azhs(dx) * (-1 / jxs_l_for_azhs(ax)))
	if (moooooood == 'h') {
		return (hsjxs)
	}
	if (jlks == true) {
		var ret = jxs_l_for_azhs(hsjxs, x)
		jkxjj.push([cc(), [x, h, d, moooooood], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return jxs_l_for_azhs(hsjxs, x)
}

function azgetpxx(x, h, d, moooooood) {
	var uj = hslb[h].split("|")[0]


	var ax = isgetjxsychs(uj)[1]
	var dx = (dlb[d].split("|")[0])
	var dy = (dlb[d].split("|")[1])


	var hsjxs = jxs_l_for_azhs(ax) + "*x+" + (jxs_l_for_azhs(dy) - jxs_l_for_azhs(dx) * jxs_l_for_azhs(ax))
	if (moooooood == 'h') {
		return (hsjxs)
	}
	if (jlks == true) {
		var ret = jxs_l_for_azhs(hsjxs, x)
		jkxjj.push([cc(), [x, h, d, moooooood], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return jxs_l_for_azhs(hsjxs, x)
}


function jiaodian_yh(fa2, fb2, fr2, fc5, fd2) { //一个圆与一个一次函数寻找交点
	var a = -1 * jxs_l_for_azhs(fa2);
	var b = jxs_l_for_azhs(fb2)
	var c = jxs_l_for_azhs(fc5)
	var d = jxs_l_for_azhs(fd2)
	var r = jxs_l_for_azhs(fr2)
	var g = (d - b)
	var ax = Math.pow(c, 2) + 1
	var bx = 2 * (g * c + a)
	var cx = Math.pow(g, 2) + Math.pow(a, 2) - Math.pow(r, 2)

	//   console.log(ax,bx,cx)

	var jx1 = (-1 * bx + Math.sqrt(Math.pow(bx, 2) - 4 * ax * cx)) / (2 * ax)
	var jx2 = (-1 * bx - Math.sqrt(Math.pow(bx, 2) - 4 * ax * cx)) / (2 * ax)

	return [jx1, jx2]
}

function jiaodian_yy(fa2, fb2, fr2, fr3, fc5, fd2) { //两个圆寻找交点
	var a = jxs_l_for_azhs(fa2);
	var b = jxs_l_for_azhs(fb2);
	var c = jxs_l_for_azhs(fc5);
	var d = jxs_l_for_azhs(fd2);
	var r = jxs_l_for_azhs(fr2);
	var t = jxs_l_for_azhs(fr3)
	/*

	var dl2=((Math.pow(r,2)+Math.pow(t,2)-Math.pow(a,2)-Math.pow(d-b,2))/2)

	var ax=-1
	var bx=2*c+2*a
	var cx=Math.pow(a*c,2)-((-t*t)-r*r+c*c+4*a*c+a*a)
	var dx=2*a*c*dl2-(2*a*t*t+2*c*r*r-2*a*c*c-2*a*a*c)
	var ex=Math.pow(dl2,2)-((r*r-a*a)*t*t-c*c*r*t+a*a*c*c )



	var m=(d-b)/(c-a)
	var n=(r*r-t*t-a*a-b*b+c*c+d*d)/2*(c-a)

	var ax=m*m+1
	var bx=((-2*m*n)+2*a*m-2*b)
	var cx=-1*r*r+n*n-2*a*n+b*b+a*a

	var jx1=(-1*bx+Math.sqrt(Math.pow(bx,2)-4*ax*cx))/(2*ax)
	var jx2=(-1*bx-Math.sqrt(Math.pow(bx,2)-4*ax*cx))/(2*ax)
	console.log(a,b,c,d,r,t,ax,bx,cx,jx1,jx2)*/

	var m = r * r - t * t - a * a - b * b + c * c + d * d

	var jx1 = -((d - b) * Math.sqrt((4 * Math.pow(d, 2) - 8 * b * d + 4 * Math.pow(c, 2) - 8 * a * c + 4 * Math.pow(b, 2) + 4 * Math.pow(a, 2)) * Math.pow(r, 2) - Math.pow(m, 2) + (4 * b * d + 4 * a * c - 4 * Math.pow(b, 2) - 4 * Math.pow(a, 2)) * m - 4 * Math.pow(b, 2) * Math.pow(d, 2) + ((-8 * a * b * c) + 8 * Math.pow(b, 3) + 8 * Math.pow(a, 2) * b) * d - 4 * Math.pow(a, 2) * Math.pow(c, 2) + (8 * a * Math.pow(b, 2) + 8 * Math.pow(a, 3)) * c - 4 * Math.pow(b, 4) - 8 * Math.pow(a, 2) * Math.pow(b, 2) - 4 * Math.pow(a, 4)) + (a - c) * m - 2 * a * Math.pow(d, 2) + (2 * b * c + 2 * a * b) * d - 2 * Math.pow(b, 2) * c) / (2 * Math.pow(d, 2) - 4 * b * d + 2 * Math.pow(c, 2) - 4 * a * c + 2 * Math.pow(b, 2) + 2 * Math.pow(a, 2))
	var jx1y = ((c - a) * Math.sqrt((4 * Math.pow(d, 2) - 8 * b * d + 4 * Math.pow(c, 2) - 8 * a * c + 4 * Math.pow(b, 2) + 4 * Math.pow(a, 2)) * Math.pow(r, 2) - Math.pow(m, 2) + (4 * b * d + 4 * a * c - 4 * Math.pow(b, 2) - 4 * Math.pow(a, 2)) * m - 4 * Math.pow(b, 2) * Math.pow(d, 2) + ((-8 * a * b * c) + 8 * Math.pow(b, 3) + 8 * Math.pow(a, 2) * b) * d - 4 * Math.pow(a, 2) * Math.pow(c, 2) + (8 * a * Math.pow(b, 2) + 8 * Math.pow(a, 3)) * c - 4 * Math.pow(b, 4) - 8 * Math.pow(a, 2) * Math.pow(b, 2) - 4 * Math.pow(a, 4)) + (d - b) * m + (2 * Math.pow(a, 2) - 2 * a * c) * d + 2 * b * Math.pow(c, 2) - 2 * a * b * c) / (2 * Math.pow(d, 2) - 4 * b * d + 2 * Math.pow(c, 2) - 4 * a * c + 2 * Math.pow(b, 2) + 2 * Math.pow(a, 2))
	var jx2 = ((d - b) * Math.sqrt((4 * Math.pow(d, 2) - 8 * b * d + 4 * Math.pow(c, 2) - 8 * a * c + 4 * Math.pow(b, 2) + 4 * Math.pow(a, 2)) * Math.pow(r, 2) - Math.pow(m, 2) + (4 * b * d + 4 * a * c - 4 * Math.pow(b, 2) - 4 * Math.pow(a, 2)) * m - 4 * Math.pow(b, 2) * Math.pow(d, 2) + ((-8 * a * b * c) + 8 * Math.pow(b, 3) + 8 * Math.pow(a, 2) * b) * d - 4 * Math.pow(a, 2) * Math.pow(c, 2) + (8 * a * Math.pow(b, 2) + 8 * Math.pow(a, 3)) * c - 4 * Math.pow(b, 4) - 8 * Math.pow(a, 2) * Math.pow(b, 2) - 4 * Math.pow(a, 4)) + (c - a) * m + 2 * a * Math.pow(d, 2) + ((-2 * b * c) - 2 * a * b) * d + 2 * Math.pow(b, 2) * c) / (2 * Math.pow(d, 2) - 4 * b * d + 2 * Math.pow(c, 2) - 4 * a * c + 2 * Math.pow(b, 2) + 2 * Math.pow(a, 2))
	var jx2y = -((c - a) * Math.sqrt((4 * Math.pow(d, 2) - 8 * b * d + 4 * Math.pow(c, 2) - 8 * a * c + 4 * Math.pow(b, 2) + 4 * Math.pow(a, 2)) * Math.pow(r, 2) - Math.pow(m, 2) + (4 * b * d + 4 * a * c - 4 * Math.pow(b, 2) - 4 * Math.pow(a, 2)) * m - 4 * Math.pow(b, 2) * Math.pow(d, 2) + ((-8 * a * b * c) + 8 * Math.pow(b, 3) + 8 * Math.pow(a, 2) * b) * d - 4 * Math.pow(a, 2) * Math.pow(c, 2) + (8 * a * Math.pow(b, 2) + 8 * Math.pow(a, 3)) * c - 4 * Math.pow(b, 4) - 8 * Math.pow(a, 2) * Math.pow(b, 2) - 4 * Math.pow(a, 4)) + (b - d) * m + (2 * a * c - 2 * Math.pow(a, 2)) * d - 2 * b * Math.pow(c, 2) + 2 * a * b * c) / (2 * Math.pow(d, 2) - 4 * b * d + 2 * Math.pow(c, 2) - 4 * a * c + 2 * Math.pow(b, 2) + 2 * Math.pow(a, 2))


	return [jx1, jx2, jx1y, jx2y]
}

function jiaodian_hh(fa2, fb2, fc5, fd2) { //两一次函数
	var a = (fa2);
	var b = (fb2);
	var c = (fc5);
	var d = (fd2);
	var x = (d - b) / (a - c)

	if (a == 0) {
		var y = b
	} else if (c == 0) {
		var y = d
	} else {
		var y = -(b * c - a * d) / (a - c)
	}
	if (y < 0.00001 && y > -0.000001) {
		var y = 0
	}
	// console.log(a, b, c, d,(d - b) / (a - c),y)
	return [x, y]
}

function jiaodian_zc(hs1, hs2, djg, xy, jqd) { //两普通函数
	//	console.log( hs1, hs2, djg, xy, jqd )
	var hh2 = hs1 + hs2

	function fth2(jiexishi) {
		var diaoyongzifuchuang = jiexishi

		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gd', 'g'), 'getdzb');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gj', 'g'), 'getjd');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gz', 'g'), 'gethsz');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gh', 'g'), 'geths');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gs', 'g'), 'getjxs');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('go', 'g'), 'getmous');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gl', 'g'), 'getjl');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gi', 'g'), 'getds');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gp', 'g'), 'getpfx');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gw', 'g'), 'getcx');
		var diaoyongzifuchuang = diaoyongzifuchuang.replace(new RegExp('gg', 'g'), 'getpxx');
		// var diaoyongzifuchuang=diaoyongzifuchuang.replace(new RegExp('', 'g'), ' ');
		return diaoyongzifuchuang
	}
	if (zdyset[32] == 'true' && fth2(hh2) == hh2) {
		if (jqd == "undefined" || jqd == undefined || jqd == "" || jqd == 0) {
			var jqd = 0.0001
		} else {
			var jqd = jqd
		}
		var c = jfc(hs1.split("|")[0] + '-(' + hs2.split("|")[0] + ')', undefined, jqd)
		//console.log(c)
		var scsz = []
		for (let i = 0; i < c.length; i++) {
			const element = c[i];
			var jiedex = jxs_l_for_azhs(zc_to_az(element))
			scsz.push([jiedex, jxs_l_for_azhs(hs1.split("|")[0], jiedex)])
		}
		return scsz
	}
	// console.log(jqd)
	var syc = []
	var sycx = []
	var xzjd = []
	for (var q = -25; q < 25; q = accAdd(q, 0.5)) {
		var c = Math.abs(jxs_l_for_azhs(hs1.split("|")[0], q) - jxs_l_for_azhs(hs2.split("|")[0], q))
		if (c > 1000 || String(c) == "NaN") { } else {
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

	if (jqd == "undefined" || jqd == undefined || jqd == "" || jqd == 0) {
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
			var c = Math.abs(jxs_l_for_azhs(hs1.split("|")[0], q) - jxs_l_for_azhs(hs2.split("|")[0], q))
			if (c > 100 || String(c) == "NaN") { } else {
				syc.push(c)
				sycx.push(q)
			}
		}
		var g = bubbleSort(syc, sycx)[1]
		//console.log(g)
		if (Math.abs(jxs_l_for_azhs(hs1.split("|")[0], g[0]) - jxs_l_for_azhs(hs2.split("|")[0], g[0])) < 2 * onceadd) {
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
	for (var t = 0; t < scsz.length; t++) {
		var x = scsz[t]
		scsz.splice(t, 1, [x, jxs_l_for_azhs(hs1.split("|")[0], x)])
	}
	//console.log( scsz)
	return scsz
}

function isychs(jxs, gyxy) {

	if ((jxs.split('x').length == 1 && jxs.split('=').length == 1)) {
		//if (jxs.split('x').length<3) {
		return true
		//}
		/*	if ((jxs.split('x^').length == 1) || (jxs.split('x^1').length == 2)) {
				if (gyxy == true) {
					//return true
				}
			}
			return false*/
	}
	if (jxs.split('x').length < 3) {
		if (jxs.split('x^1').length == 2) {
			return true
		}

		if (jxs.split('*x').length == 2 || jxs.split('x+').length == 2) {
			if (jxs.split('x^').length == 1) {
				if (isrel(jxs_l_for_azhs(jxs.split('*x')[0])) && isrel(jxs_l_for_azhs(jxs.split('x+')[1]))) {
					return true
				}
			} else {
				if (isrel(jxs_l_for_azhs(jxs.split('*x')[0])) && isrel(jxs_l_for_azhs(jxs.split('x+')[1])) && jxs_l_for_azhs(jxs.split('x^')[0].split('+')[0]) == 1) {
					return true
				}
			}

			/*	if (jxs.split('*')[0] + '*x+' + jxs.split('+')[1] == jxs) {
					if (jxs.split('x').length<3) {
						return true
					}

				} else {
					
				}*/
		}
	}


	//  console.log(jxs)



	return false
}

function isgetjxsychs(jxs) { //是不是套用一次函数
	if (zdyset[22] == 'true') { } else {
		return false
	}
	var jijiangret = false
	/*
	for (let i = 0; i < yicihanshu.length; i++) {
		if(yicihanshu[i]==jxs){
		   return yicihanshujg[i]
		}
	}*/
	if (isychs(jxs) == true) {
		if (jxs.split('x').length < 2) {
			return [true, 0, jxs_l_for_azhs(jxs)]
		}
		if (jxs == 'x') {
			return [true, 1, 0]
		}
		var k = jxs_l_for_azhs(jxs.split('*x')[0])
		var b = jxs_l_for_azhs(jxs.split('x+')[1])
		if (k || k == 0) {

		} else {
			k = 1
		}

		if (b || b == 0) {

		} else {
			b = 1
		}
		return [true, k, b]
	}
	var jxs = fth(jxs)
	//  console.log(jxs)
	var theJXShs = ['getjxs', 'getcx(', 'getpxx', 'getpfx']
	if (isInArray(theJXShs, jxs.substring(0, 6)) == true) {

		if (jxs.substring(0, 6) == 'getjxs') {
			if (jxs.substring(6, jxs.length).split(',').length == 3) { } else {
				return false
			}
			var d = azgetjzs("az", [jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[1]), jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[2].split(')')[0])], 'h')
			return [true, Number(d.split('*x+')[0]), Number(d.split('*x+')[1])]
		}
		if (jxs.substring(0, 6) == 'getcx(') {
			var d = azgetcx("az", jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[1]), jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[2].split(')')[0]), 'h')
			return [true, Number(d.split('*x+')[0]), Number(d.split('*x+')[1])]
		}
		if (jxs.substring(0, 6) == 'getpxx') {
			var d = azgetpxx("az", jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[1]), jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[2].split(')')[0]), 'h')
			return [true, Number(d.split('*x+')[0]), Number(d.split('*x+')[1])]
		}
		if (jxs.substring(0, 6) == 'getpfx') {
			var d = azgetpfx("az", jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[1]), jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[2]), jxs_l_for_azhs(jxs.substring(6, jxs.length).split(',')[3].split(')')[0]), 'h')
			return [true, Number(d.split('*x+')[0]), Number(d.split('*x+')[1])]
		}

	}
	return false
}

function azgethsz(h, x, y) {
	//console.log( x, h ,y)
	if (isrel(y)) {
		var ret = jxs_l_for_azhs(hslb[h].split('|')[0], y)
	} else {
		var ret = jxs_l_for_azhs(hslb[h].split('|')[0], clzlb[x])
	}

	if (jlks == true) {
		jkxjj.push([cc(), [x, h], ret, (new Error()).stack.split("\n")[2].trim().split(" ")[1]])
	}
	return ret
}

function yhsjx(jxs) { //判断是不是圆以及提取圆的内容
	//"sqrt(getcl(0,1)^2_(x_getdzb(0,0))^2)+getdzb(0,1)"
	if (jxs.substring(0, 2) == "r:") {
		var c = jxs.substring(2, jxs.length).split(';')
		return [true, c[0], c[1], c[2], "q"]
	} else {
		if (jxs.split('sqrt(').length !== 2 || jxs.split('^2').length !== 3) {
			return [false]
		}
		var yx_y = jxs.split('+')[jxs.split('+').length - 1]
		var yx_r = jxs.split('sqrt(')[1].split("^2")[0]
		if (jxs.split("_(x_").length > 1) {
			var yx_x = jxs.split("_(x_")[1].split(")^2)+")[0]
		} else {
			var yx_x = jxs.split("-(x-")[1].split(")^2)+")[0]
		}

		if (jxs.split('sqrt(')[0] == "0_" || jxs.split('sqrt(')[0] == "0-") {
			return [true, yx_x, yx_y, yx_r, "x"]
		} else {
			return [true, yx_x, yx_y, yx_r, "s"]
		}
	}

	//console.log([true,yx_y,yx_x,yx_r])
}

function jd_to_hd(x) { //角度转弧度
	return (x / 180) * Math.PI
}

function hd_to_jd(x) { //弧度转角度
	return (x / Math.PI) * 180
}

function wt(x, a, b) { //维尔斯特拉斯函数
	var d = 0
	for (var t = 0; t < 50; t++) {
		d = d + Math.pow(a, t) * Math.cos(Math.pow(b, t) * x * Math.PI)
	}
	return d
}

function azln(g) { //ln(x)
	return Math.log(g)
	/*
	var y = (g - 1) / (g + 1)
	var ds = 0
	for (var i = 1; i < 100; i = i + 2) {
		var b = (1 / i) * Math.pow(y, i - 1)
		var ds = ds + b
		//console.log(b)
	}
	var jg = 2 * y * ds
	return jg*/
}

function gamma(x) {
	const p = [
		0.99999999999980993,
		676.5203681218851,
		-1259.1392167224028,
		771.32342877765313,
		-176.61502916214059,
		12.507343278686905,
		-0.13857109526572012,
		9.9843695780195716e-6,
		1.5056327351493116e-7
	];
	let g = 7;
	if (x < 0.5) {
		return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
	}
	x -= 1;
	let a = p[0];
	const t = x + g + 0.5;
	for (let i = 1; i < p.length; i++) {
		a += p[i] / (x + i);
	}
	return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
}


function isinStr(str, value) { //字符串是否包含
	if (String(str).indexOf(String(value)) != -1) {
		return true
	} else {
		return false
	}
}

function isInArray(arr, value) { //数组是否包含
	for (var i = 0; i < arr.length; i++) {
		if (value === arr[i]) {
			return true;
		}
	}
	return false;
}

function arrCDX(arr) { //数组重定向
	var arr2 = []
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		arr2.push(element)
	}
	return arr2
}

function arrremove(arr, item) { //数组删除
	for (var i = arr.length - 1; i >= 0; i--) {
		if (arr[i] == item) {
			arr.splice(i, 1);
		}
	}
	return arr;
}


function gmu(x) { //伽马函数
	var ds = 0
	var dx = 0.01
	for (var n = 0.01; n < 100; n = n + dx) {

		//var c = Algebrite.run(n+'^('+(x - 1)+')*e^('+(-1 * n)+')*'+dx).replace(/\.\.\./g,'')
		var c = Math.pow(n, x - 1) * Math.pow(Math.E, -1 * n) * dx
		var ds = ds + Number(c)
	}
	return ds
}

function li(x) {

}




function lglrcz(src) { //拉格朗日插值 输入经过的点坐标 例:(1,1);(2,3);(4,5)...
	var x = []
	var y = []
	for (var g = 0; g < src.split(";").length; g++) {
		var x1 = src.split(";")[g].split(",")[0].split("(")[1]
		var y1 = src.split(";")[g].split(",")[1].split(")")[0]
		x.push(jxs_l_for_azhs(x1))
		y.push(jxs_l_for_azhs(y1))
	}
	//l(x,y)
	var zsc = ""
	for (var dijg = 0; dijg < src.split(";").length; dijg++) {
		var c = ""
		var cms = 1
		for (var d = 0; d < src.split(";").length; d++) {
			if (d == dijg) { } else {

				var c = c + "(x_" + x[d] + ")*"
				var cms = cms * (x[dijg] - x[d])
			}
		}
		var c = c.substring(0, c.length - 1)
		zsc = zsc + "(" + accDiv(y[dijg], cms) + ")*" + c + "+"
	}
	var zsc = zsc.substring(0, zsc.length - 1)
	return zsc
}

function hjzs(jiexishi) { //对于几个整式相乘的化简(未知数有且只有x)
	var diaoyongzifuchuang = "(" + String(jiexishi) + ")"
	var olhs = 0.577215664901532860606512090082402431042159335 //γ
	var hjfg = 0.61803398874989484820458683436563811 //φ
	var EmbreeTrefethen = 0.70258 //β*

	var zuokuohao = 0
	for (var i = 0; i < diaoyongzifuchuang.length; i++) {
		var gh = diaoyongzifuchuang.substring(i, i + 1)
		if (gh == "(") {
			zuokuohao++
		}
	}
	var sygxclb = []
	var sygdqkhwz = -1
	for (var gt = 0; gt < (zuokuohao - 1) * 2; gt++) { //拆括号
		var qianmdkh = 0
		for (var i = 0; i < diaoyongzifuchuang.length; i++) {
			var gh = diaoyongzifuchuang.substring(i, i + 1)
			if (gh == "(") {
				var qianmdkh = i
			}
			if (gh == ")") {

				var tj = diaoyongzifuchuang.substring(qianmdkh + 1, i)
				//console.log(tj)
				var tj = tj.replace(/pi/g, String(Math.PI)); //替换常数
				var tj = tj.replace(/e/g, String(Math.E));
				var tj = tj.replace(/ol/g, String(olhs));
				var tj = tj.replace(/et/g, String(EmbreeTrefethen));
				var tj = tj.replace(/hj/g, String(hjfg));
				var zfc = tj
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

				//l(g,sygdqkhwz,sygxclb)
				if (sygdqkhwz == -1) {
					var sygdqkhwz = qianmdkh
					var sygxclb = g
					diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh) + "1" + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)
					break
				} else {
					var yuan = ""
					for (var uy = 0; uy < sygxclb.length; uy++) {
						for (var ht = 0; ht < g.length; ht++) {
							var cs1 = sygxclb[uy]
							var cs2 = g[ht]
							if (cs1.indexOf("x") == -1) {
								var cs1 = cs1.split("|")[0] + "*x^0|" + cs1.split("|")[1]
							}
							if (cs2.indexOf("x") == -1) {
								var cs2 = cs2.split("|")[0] + "*x^0|" + cs2.split("|")[1]
							}
							//console.log(cs1,cs2)
							var xs = Number(cs1.split("*")[0]) * Number(cs2.split("*")[0])
							var zs = Number(cs1.split("|")[0].split("^")[1]) + Number(cs2.split("|")[0].split("^")[1])
							if (cs1.split("|")[1] == cs2.split("|")[1]) {
								var fh = "+"
							} else {
								var fh = "_"
							}
							var xiangggg = fh + String(xs) + "*x^" + String(zs)
							var yuan = yuan + xiangggg
						}
					}
					diaoyongzifuchuang = diaoyongzifuchuang.substring(0, qianmdkh - 2) + "(" + yuan + ")" + diaoyongzifuchuang.substring(i + 1, diaoyongzifuchuang.length)
					var sygdqkhwz = -1
					var sygxclb = []
					//console.log(diaoyongzifuchuang)
					break
				}

			}

		}
	}
	//console.log(diaoyongzifuchuang)
	var zfc = diaoyongzifuchuang.replace(new RegExp('[(]', 'g'), '');
	var zfc = zfc.replace(new RegExp('[)]', 'g'), '');
	//console.log(zfc)
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
	//console.log(g)
	var xslb = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	for (var csxh = 0; csxh < 10; csxh++) {
		for (var gxb = 0; gxb < g.length; gxb++) {
			if (g[gxb].split("|")[0].split("^")[1] == String(csxh)) {
				var ysxcsxs = xslb[csxh]
				if (g[gxb].split("|")[1] == "+") {
					xslb.splice(csxh, 1, ysxcsxs + Number(g[gxb].split("|")[0].split("*")[0]))
				} else {
					xslb.splice(csxh, 1, ysxcsxs - Number(g[gxb].split("|")[0].split("*")[0]))
				}

			}
		}
	}
	//l(xslb)
	var thtgf = ""
	for (var dw = 0; dw < xslb.length; dw++) {
		if (xslb[dw] == 0) {
			var jxxxx = ""
		} else {
			if (dw == 0) {
				if (xslb[dw] > 0) {
					var jxxxx = "+" + String(xslb[dw])
				} else {
					var jxxxx = "_" + String(xslb[dw]).substring(1, String(xslb[dw]).length)
				}
			}
			if (dw == 1) {
				if (xslb[dw] == 1) {
					var jxxxx = "+x"
				} else {
					if (xslb[dw] > 0) {
						var jxxxx = "+" + String(xslb[dw]) + "*x"
					} else {
						var jxxxx = "_" + String(xslb[dw]).substring(1, String(xslb[dw]).length) + "*x"
					}
				}
				if (xslb[dw] == -1) {
					var jxxxx = "_x"
				} else {
					if (xslb[dw] > 0) {
						var jxxxx = "+" + String(xslb[dw]) + "*x"
					} else {
						var jxxxx = "_" + String(xslb[dw]).substring(1, String(xslb[dw]).length) + "*x"
					}
				}
			}
			if (dw > 1) {
				if (xslb[dw] == 1) {
					var jxxxx = "x^" + dw
				} else {
					if (xslb[dw] > 0) {
						var jxxxx = "+" + String(xslb[dw]) + "*x^" + dw
					} else {
						var jxxxx = "_" + String(xslb[dw]).substring(1, String(xslb[dw]).length) + "*x^" + dw
					}
				}
				if (xslb[dw] == -1) {
					var jxxxx = "_x^" + dw
				} else {
					if (xslb[dw] > 0) {
						var jxxxx = "+" + String(xslb[dw]) + "*x^" + dw
					} else {
						var jxxxx = "_" + String(xslb[dw]).substring(1, String(xslb[dw]).length) + "*x^" + dw
					}

				}
			}
		}

		thtgf = thtgf + jxxxx
	}
	return thtgf
}

function getmima() {
	var min = new Date().getMinutes()
	return md5(toCode(String(min)))
}

function jfc(f, x) {
	//console.log(f)
	if (x) {

	} else {
		var x = 'x'
	}
	var f = az_to_zc(f)
	var roots = []
	for (let i = 0; i < newjfc.length; i++) {
		const element = newjfc[i];
		if (element[0] == f + '|' + x) {
			return element[1]
		}
	}

	function buyonghaoffjfc(f) {
		if (isInArray(newbkjfc, f) == false) {
			newbkjfc.push(f)
		}
		if (zdyset[32] == 'true') {
			var roots = NdddJfc(f)
		} else {
			var roots = jiaodian_zc(f, '0', 0, 0, '')
			//console.log(roots)
			for (let i = 0; i < roots.length; i++) {
				const element = roots[i][0];
				roots.splice(i, 1, String(element))
			}
			//console.log(roots)
		}
		return roots
	}
	if (isInArray(newbkjfc, f) == true) {
		roots = buyonghaoffjfc(f)
	} else {
		try {
			//console.log(f)
			var d = Algebrite.roots(f, x).toString().replace(/\.\.\./g, '')
			if (d.split(',').length > 1) {
				var d = d.substring(1, d.length - 1)
				var roots = d.split(',')
			} else {
				var roots = [d]
			}
		} catch (err) {
			try {
				var f = Algebrite.numerator(f).toString().replace(/\.\.\./g, '')
				//console.log(f.toString())
				var d = Algebrite.roots(f).toString().replace(/\.\.\./g, '')
				if (d.split(',').length > 1) {
					var d = d.substring(1, d.length - 1)
					var roots = d.split(',')
				} else {
					var roots = [d]
				}
			} catch (err) {
				roots = buyonghaoffjfc(f)
			}

		}
	}

	newjfc.push([f + '|' + x, roots])
	return roots
}

function NdddJfc(f, jqd) {
	//console.log( f )
	if (isrel(jqd)) {
		var jqd = jqd
	} else {
		var jqd = 0.0001
	}
	//var f=az_to_zc(f)
	var fd = Algebrite.derivative(f).toString()
	var f = zc_to_az(f)

	//console.log(f,fd)

	var Qg = 0
	var zi = 0
	var jie = []

	for (let i = -25; i < 25; i = i + 0.2) {
		i = Number(i.toFixed(3))
		var g = jxs_l_for_azhs(f, i)
		if (zi == 0) {
			zi = 1

		} else {
			//	console.log(i,Qg,g)
			if (g < 0 && Qg > 0) {
				jie.push(String(NiudunDiedai(f, fd, i, jqd)))
			} else if (g > 0 && Qg < 0) {
				jie.push(String(NiudunDiedai(f, fd, i, jqd)))
			} else if (g == 0) {
				jie.push(String(g))
			}

		}

		Qg = g

	}

	return jie
}

function NiudunDiedai(f, fd, TryX0, jqd) {

	var f = zc_to_az(f)
	var fd = zc_to_az(fd)
	if (jxs_l_for_azhs(fd, TryX0) == 0) {
		TryX0 = TryX0 + 0.114514
	}
	//console.log(f,fd)
	var Xn_1 = TryX0
	for (let i = 0; i < 100000; i++) {
		var Xn = Xn_1 - jxs_l_for_azhs(f, Xn_1) / jxs_l_for_azhs(fd, Xn_1)
		if (Math.abs(Xn_1 - Xn) < jqd) {
			break
			//Xn_1=Xn
		} else {
			Xn_1 = Xn
		}
	}
	var e = Number(Xn_1.toFixed(String(jqd).split('0').length - 1))
	if (e) {
		return e
	}
	return
}

function kjc() { //canvas比例
	var hy = document.getElementById("divdis");
	let width = xianshikuandu,
		height = xianshigaodu;
	var j = Number(zdyset[35])
	hy.style.width = width + "px";
	hy.style.height = height + "px";
	hy.height = height * j;
	hy.width = width * j;
	hbck.scale(j, j);
}

function jiaodu(a, b, c) { //三点度量角度
	//console.log(a,b,c)
	var j1 = Math.atan((jxs_l_for_azhs(a[1]) - jxs_l_for_azhs(b[1])) / (jxs_l_for_azhs(a[0]) - jxs_l_for_azhs(b[0])))
	var j2 = Math.atan((jxs_l_for_azhs(b[0]) - jxs_l_for_azhs(c[0])) / (jxs_l_for_azhs(b[1]) - jxs_l_for_azhs(c[1])))
	//console.log(j1,j2)
	var re = j1 + j2 + Math.PI / 2
	if (re > Math.PI) {
		re = re - Math.PI
	}

	return re
}
//(1/Math.pow(16,n))*runpi(n)

function wztopx(nsrc, cc) { //计算文字所占用的空间
	var src = wzpznrzh(nsrc)
	var f = -1
	for (var i = 0; i < newwzpznr.length; i++) {
		if (newwzpznr[i] == src) {
			var f = i
			break
		}
	}
	if (f == -1) {
		document.getElementById('zdcc').style.display = 'block'
		document.getElementById('zdcc').innerHTML = src
		var ck = [document.getElementById('zdcc').offsetWidth, document.getElementById('zdcc').offsetHeight]
		document.getElementById('zdcc').style.display = 'none'
		newwzpznr.push(src)
		newwzpzpx.push(ck)
		return ck
	} else {
		return newwzpzpx[f]
	}



	var hangshu = src.split("<br>").length
	var zch = -1

	for (var i = 0; i < hangshu; i++) {
		var c = src.split("<br>")[i]
		gt = computeFontSize(c, cc + "px").width
		//console.log(src.split("<br>")[i],zch)
		if (gt > zch) {
			zch = gt
		}
	}
	return [(zch), (hangshu * (cc))]
}

function computeFontSize(str, size, family) { //计算文字所占用的空间(span)
	let spanDom = document.createElement("span");
	spanDom.style.fontSize = size;
	spanDom.style.opacity = "0";
	// spanDom.style.fontFamily = family;
	spanDom.innerHTML = str;
	document.body.append(spanDom);
	let sizeD = {};
	sizeD.width = spanDom.offsetWidth;
	sizeD.height = spanDom.offsetHeight;
	spanDom.remove();
	return sizeD;
}

function findCloseNum(arr, num) { //寻找数组最接近的项
	var index = 0;
	var d_value = Number.MAX_VALUE;
	for (var i = 0; i < arr.length; i++) {
		var new_d_value = Math.abs(arr[i] - num);
		if (new_d_value <= d_value) {
			if (new_d_value === d_value && arr[i] < arr[index]) {
				continue;
			}
			index = i;
			d_value = new_d_value;
		}
	}
	return arr[index] // 返回最接近的数值
}

function accAdd(arg1, arg2) { //精确加法
	var r1, r2, m, c;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	c = Math.abs(r1 - r2);
	m = Math.pow(10, Math.max(r1, r2));
	if (c > 0) {
		var cm = Math.pow(10, c);
		if (r1 > r2) {
			arg1 = Number(arg1.toString().replace(".", ""));
			arg2 = Number(arg2.toString().replace(".", "")) * cm;
		} else {
			arg1 = Number(arg1.toString().replace(".", "")) * cm;
			arg2 = Number(arg2.toString().replace(".", ""));
		}
	} else {
		arg1 = Number(arg1.toString().replace(".", ""));
		arg2 = Number(arg2.toString().replace(".", ""));
	}
	return (arg1 + arg2) / m;
}

function accSub(arg1, arg2) { //精确减法
	var r1, r2, m, n;
	try {
		r1 = arg1.toString().split(".")[1].length;
	} catch (e) {
		r1 = 0;
	}
	try {
		r2 = arg2.toString().split(".")[1].length;
	} catch (e) {
		r2 = 0;
	}
	m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
	n = (r1 >= r2) ? r1 : r2;
	return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

function accMul(arg1, arg2) { //精确乘法
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString();
	try {
		m += s1.split(".")[1].length;
	} catch (e) { }
	try {
		m += s2.split(".")[1].length;
	} catch (e) { }
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}

function accDiv(arg1, arg2) { //精确除法
	var t1 = 0,
		t2 = 0,
		r1, r2;
	try {
		t1 = arg1.toString().split(".")[1].length;
	} catch (e) { }
	try {
		t2 = arg2.toString().split(".")[1].length;
	} catch (e) { }
	with (Math) {
		r1 = Number(arg1.toString().replace(".", ""));
		r2 = Number(arg2.toString().replace(".", ""));
		return (r1 / r2) * pow(10, t2 - t1);
	}
}

function toCode(str, k) { //加密字符串
	//定义密钥，36个字母和数字
	if (k && k.length == 36) {
		var key = k
	} else {
		var key = "~`!@#$%^&*()_+}{|?>:<,./;][-=。，‘“”’：";
	}
	var len = key.length;
	var a = key.split("");
	var s = "",
		b, b1, b2, b3;
	for (var i = 0; i < str.length; i++) {
		b = str.charCodeAt(i);
		b1 = b % len;
		b = (b - b1) / len;
		b2 = b % len;
		b = (b - b2) / len;
		b3 = b % len;
		s += a[b3] + a[b2] + a[b1];
	}
	return s;
}

function fromCode(str, k) { //解密字符串
	//定义密钥，36个字母和数字
	if (k && k.length == 36) {
		var key = k
	} else {
		var key = "~`!@#$%^&*()_+}{|?>:<,./;][-=。，‘“”’：";
	}
	var len = key.length;
	var b, b1, b2, b3, d = 0,
		s;
	s = new Array(Math.floor(str.length / 3));
	b = s.length;
	for (var i = 0; i < b; i++) {
		b1 = key.indexOf(str.charAt(d));
		d++;
		b2 = key.indexOf(str.charAt(d));
		d++;
		b3 = key.indexOf(str.charAt(d));
		d++;
		s[i] = b1 * len * len + b2 * len + b3
	}
	b = eval("String.fromCharCode(" + s.join(',') + ")");
	return b;
}

function zfc_to_sz(lb) { // Split once: history can contain many large board snapshots.
    return lb.split('ن');
}

function sz_to_zfc(sz) { //数组转字符串
	var lssz = "";
	for (var tgh = 0; tgh < sz.length - 1; tgh++) {
		var lssz = lssz + sz[tgh] + "ن"
	}
	var lssz = lssz + sz[sz.length - 1]
	return lssz
}

var md5 = function (string) { //md5
	function RotateLeft(lValue, iShiftBits) {
		return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
	}

	function AddUnsigned(lX, lY) {
		var lX4, lY4, lX8, lY8, lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
	}

	function F(x, y, z) {
		return (x & y) | ((~x) & z);
	}

	function G(x, y, z) {
		return (x & z) | (y & (~z));
	}

	function H(x, y, z) {
		return (x ^ y ^ z);
	}

	function I(x, y, z) {
		return (y ^ (x | (~z)));
	}

	function FF(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function GG(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function HH(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function II(a, b, c, d, x, s, ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};

	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1 = lMessageLength + 8;
		var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
		var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
		var lWordArray = Array(lNumberOfWords - 1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while (lByteCount < lMessageLength) {
			lWordCount = (lByteCount - (lByteCount % 4)) / 4;
			lBytePosition = (lByteCount % 4) * 8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
		lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
		lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
		return lWordArray;
	};

	function WordToHex(lValue) {
		var WordToHexValue = "",
			WordToHexValue_temp = "",
			lByte, lCount;
		for (lCount = 0; lCount <= 3; lCount++) {
			lByte = (lValue >>> (lCount * 8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
		}
		return WordToHexValue;
	};

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";
		for (var n = 0; n < string.length; n++) {
			var c = string.charCodeAt(n);
			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if ((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			} else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
		}
		return utftext;
	};
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11 = 7,
		S12 = 12,
		S13 = 17,
		S14 = 22;
	var S21 = 5,
		S22 = 9,
		S23 = 14,
		S24 = 20;
	var S31 = 4,
		S32 = 11,
		S33 = 16,
		S34 = 23;
	var S41 = 6,
		S42 = 10,
		S43 = 15,
		S44 = 21;
	string = Utf8Encode(string);
	x = ConvertToWordArray(string);
	a = 0x67452301;
	b = 0xEFCDAB89;
	c = 0x98BADCFE;
	d = 0x10325476;
	for (k = 0; k < x.length; k += 16) {
		AA = a;
		BB = b;
		CC = c;
		DD = d;
		a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
		b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
		b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
		a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
		d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
		c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
		c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
		a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
		d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
		c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
		a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
		a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
		b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
		d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
		a = AddUnsigned(a, AA);
		b = AddUnsigned(b, BB);
		c = AddUnsigned(c, CC);
		d = AddUnsigned(d, DD);
	}
	var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
	return temp.toLowerCase();
}

function SHA256(s) {
	const chrsz = 8
	const hexcase = 0

	function safe_add(x, y) {
		const lsw = (x & 0xFFFF) + (y & 0xFFFF)
		const msw = (x >> 16) + (y >> 16) + (lsw >> 16)
		return (msw << 16) | (lsw & 0xFFFF)
	}

	function S(X, n) {
		return (X >>> n) | (X << (32 - n))
	}

	function R(X, n) {
		return (X >>> n)
	}

	function Ch(x, y, z) {
		return ((x & y) ^ ((~x) & z))
	}

	function Maj(x, y, z) {
		return ((x & y) ^ (x & z) ^ (y & z))
	}

	function Sigma0256(x) {
		return (S(x, 2) ^ S(x, 13) ^ S(x, 22))
	}

	function Sigma1256(x) {
		return (S(x, 6) ^ S(x, 11) ^ S(x, 25))
	}

	function Gamma0256(x) {
		return (S(x, 7) ^ S(x, 18) ^ R(x, 3))
	}

	function Gamma1256(x) {
		return (S(x, 17) ^ S(x, 19) ^ R(x, 10))
	}

	function core_sha256(m, l) {
		const K = [0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2]
		const HASH = [0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19]
		const W = new Array(64)
		let a, b, c, d, e, f, g, h, i, j
		let T1, T2
		m[l >> 5] |= 0x80 << (24 - l % 32)
		m[((l + 64 >> 9) << 4) + 15] = l
		for (i = 0; i < m.length; i += 16) {
			a = HASH[0]
			b = HASH[1]
			c = HASH[2]
			d = HASH[3]
			e = HASH[4]
			f = HASH[5]
			g = HASH[6]
			h = HASH[7]
			for (j = 0; j < 64; j++) {
				if (j < 16) {
					W[j] = m[j + i]
				} else {
					W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16])
				}
				T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j])
				T2 = safe_add(Sigma0256(a), Maj(a, b, c))
				h = g
				g = f
				f = e
				e = safe_add(d, T1)
				d = c
				c = b
				b = a
				a = safe_add(T1, T2)
			}
			HASH[0] = safe_add(a, HASH[0])
			HASH[1] = safe_add(b, HASH[1])
			HASH[2] = safe_add(c, HASH[2])
			HASH[3] = safe_add(d, HASH[3])
			HASH[4] = safe_add(e, HASH[4])
			HASH[5] = safe_add(f, HASH[5])
			HASH[6] = safe_add(g, HASH[6])
			HASH[7] = safe_add(h, HASH[7])
		}
		return HASH
	}

	function str2binb(str) {
		const bin = []
		const mask = (1 << chrsz) - 1
		for (let i = 0; i < str.length * chrsz; i += chrsz) {
			bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32)
		}
		return bin
	}

	function Utf8Encode(string) {
		string = string.replace(/\r\n/g, '\n')
		let utfText = ''
		for (let n = 0; n < string.length; n++) {
			const c = string.charCodeAt(n)
			if (c < 128) {
				utfText += String.fromCharCode(c)
			} else if ((c > 127) && (c < 2048)) {
				utfText += String.fromCharCode((c >> 6) | 192)
				utfText += String.fromCharCode((c & 63) | 128)
			} else {
				utfText += String.fromCharCode((c >> 12) | 224)
				utfText += String.fromCharCode(((c >> 6) & 63) | 128)
				utfText += String.fromCharCode((c & 63) | 128)
			}
		}
		return utfText
	}

	function binb2hex(binarray) {
		const hex_tab = hexcase ? '0123456789ABCDEF' : '0123456789abcdef'
		let str = ''
		for (let i = 0; i < binarray.length * 4; i++) {
			str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
				hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF)
		}
		return str
	}

	s = Utf8Encode(s)
	return binb2hex(core_sha256(str2binb(s), s.length * chrsz))
}


function relebubbleSort(arr) {
	var len = arr.length;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}

function zete(s) {
	var j = 0
	for (var i = 1; i < 1000; i++) {
		j = j + 1 / Math.pow(i, s)
	}
	return j
}

function isrel(x) {
	if (String(x) == 'NaN' || x == undefined || x == "undefined") {
		return false
	} else {
		if (x == 0 && x + '6' == '06') {

			return true
		} else
			if (x == "") {
				return false
			}
		return true
	}
}


function byq_zc_to_JavaScript(jxs) { //标准解析式 转 js
	var qtjxs = jxs
	var zcfcs = 0
	for (var i = 0; i < jxs.length; i++) {
		if (jxs.substring(i, i + 1) == '^') {
			zcfcs++
		}
	}
	// console.log(zcfcs)
	for (var t = 0; t < zcfcs + 1; t++) {
		for (var i = 0; i < qtjxs.length; i++) {
			if (qtjxs.substring(i, i + 1) == '^') {
				var th_js = "Math.pow(" + qtjxs.substring(i - 1, i) + "," + qtjxs.substring(i + 1, i + 2) + ")"
				qtjxs = qtjxs.substring(0, i - 1) + th_js + qtjxs.substring(i + 2, qtjxs.length)
				// console.log(qtjxs)
				break
			}
		}
	}
	qtjxs = qtjxs.replace(new RegExp('sqrt', 'g'), "Math.sqrt")
	return qtjxs
}

function toCode2(str, k) { //加密字符串
	return str
	//定义密钥，36个字母和数字
	if (k && k.length == 36) {
		var key = k
	} else {
		var key = "abc5defg90hijkl34mno2pqr1stuv6w7x8yz";
	}

	var len = key.length;
	var a = key.split("");
	var s = "",
		b, b1, b2, b3;
	for (var i = 0; i < str.length; i++) {
		b = str.charCodeAt(i);
		b1 = b % len;
		b = (b - b1) / len;
		b2 = b % len;
		b = (b - b2) / len;
		b3 = b % len;
		s += a[b3] + a[b2] + a[b1];
	}
	return s;
}

function fromCode2(str, k) { //解密字符串
	return str
	//定义密钥，36个字母和数字
	if (k && k.length == 36) {
		var key = k
	} else {
		var key = "abc5defg90hijkl34mno2pqr1stuv6w7x8yz";
	}
	var len = key.length;
	var b, b1, b2, b3, d = 0,
		s;
	s = new Array(Math.floor(str.length / 3));
	b = s.length;
	for (var i = 0; i < b; i++) {
		b1 = key.indexOf(str.charAt(d));
		d++;
		b2 = key.indexOf(str.charAt(d));
		d++;
		b3 = key.indexOf(str.charAt(d));
		d++;
		s[i] = b1 * len * len + b2 * len + b3
	}
	b = eval("String.fromCharCode(" + s.join(',') + ")");
	return b;
}
/*卐卐卐卐卐卐卐卐卐卐卍卍卍卍卍卍卍卍卍卍*/
/*☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯☯*/
/*
第一打开垃圾清理大师一下垃圾。
第二下载电脑管家把无用的软件山删除掉。
第三关闭不常用的应用。 */







/*
Peoples come by wind, rain, cloud and fog. If a people said he has already believe the religion, but in fact, he is not an AZ man at all.In AZjiao,we call these people 'Unbelievers'.They even think the earth which we live on is a orb! oh, don't worry. AZgod's punishment will befall them.The real AZ man persist first the AZ at all times. They take overthrow the union government's power on them responsibility.

人们来自风、雨、云和雾。如果一个人说他已经信仰了这个宗教，但事实上，他根本不是一个啊这人。在啊这教，我们称这些人为“不信仰者”。他们甚至认为我们生活的地球是一个球体！哦，别担心。啊这之神的惩罚将降临到他们身上。真正的啊这人始终坚持啊这第一。他们把推翻联合政府的权力作为自己的责任。
*/



function l_az_to_zc(bds) {
	var s = bds.replace(new RegExp('_', 'g'), "-")
	var s = s.replace(new RegExp('--', 'g'), "+")

	return s
}

function az_to_zc(bds, m) { //啊这解析式转正常解析式
	for (let i = 0; i < aztozcthn.length; i++) {
		if (aztozcthn[i] == bds) {
			return aztozcthz[i]
		}
	}


	var s = bds.replace(new RegExp('_', 'g'), "-")
	var s = s.replace(new RegExp('--', 'g'), "+")
	var s = s.replace("\+-", "-")

	var diaoyongzifuchuang = s
	if (diaoyongzifuchuang == "undefined" || diaoyongzifuchuang == "nan" || diaoyongzifuchuang == "") {
		return ""
	}
	var diaoyongzifuchuang = th(diaoyongzifuchuang)



	var zdybl = ["gc", "gd", "gj", "gh", "gs", "gl", "go"]

	for (var gt = 0; gt < 1000; gt++) { //拆括号

		for (var i = 0; i < diaoyongzifuchuang.length; i++) {
			var gh = diaoyongzifuchuang.substring(i, i + 2)
			var hm = -1
			//console.log(gh)
			if (isInArray(zdybl, gh) == true) { //需化简
				for (var hc = i + 3; hc < i + 1000000000; hc++) {
					if (diaoyongzifuchuang.substring(hc, hc + 1) == ")") {
						var hm = hc
						break
					}
				}
				var tj = diaoyongzifuchuang.substring(i + 3, hm)
				var jg = tj
				//console.log(gh,hm,jg)
				var hanshumc = gh

				var zhscs = []
				for (var dp = 0; dp < tj.split(",").length; dp++) {
					zhscs.push(zijisuan(tj.split(",")[dp]))
				}

				if (hanshumc == "gc") {
					if (isrel(cllb[zhscs[0]][0]) == true) {
						if (m) {
							var jg = azgetcl(zhscs[0], zhscs[1])
						} else {
							var jg = cllb[zhscs[0]][0]
						}

					} else {
						var jg = azgetcl(zhscs[0], zhscs[1])
					}
				} else
					if (hanshumc == "gd") {
						var jg = azgetdzb(zhscs[0], zhscs[1])
					} else
						if (hanshumc == "gj") {
							var jg = azgetjd(zhscs[0], zhscs[1], zhscs[2], zhscs[3], zhscs[4])
						} else
							if (hanshumc == "gh") {
								var jg = azgeths(zhscs[0], zhscs[1])
							} else
								if (hanshumc == "gs") {
									var jg = azgetjzs(zhscs[0], [zhscs[1], zhscs[2], zhscs[3], zhscs[4], zhscs[5], zhscs[6], zhscs[7], zhscs[8], zhscs[9], zhscs[10], zhscs[11], zhscs[12], zhscs[13], zhscs[14], zhscs[15], zhscs[16]])
								} else
									if (hanshumc == "gl") {
										var jg = azgetjl(zhscs[0], zhscs[1])
									} else
										if (hanshumc == "go") {
											var jg = azgetmous(zhscs[0], zhscs[1])
										}
				if (hanshumc == "gp") {
					var jg = azgetpfx(zhscs[0], zhscs[1], zhscs[2], zhscs[3])
				}
				var jg = String(jg)

				diaoyongzifuchuang = diaoyongzifuchuang.substring(0, i) + jg + diaoyongzifuchuang.substring(hm + 1, diaoyongzifuchuang.length)

				break
			}
		}

	}

	aztozcthn.push(bds)
	aztozcthz.push(diaoyongzifuchuang)
	return diaoyongzifuchuang
}

function zc_to_az(bds) {
	var s = bds.replace(new RegExp('-', 'g'), "_")
	var s = s.replace(new RegExp('--', 'g'), "+")
	var s = s.replace(/\+-/g, "_")
	//var s = s.replace(/\(\_/g, "(0_")
	return zm_to_cl(s)
}




















function kf(x) { //开平方
	if (x < 0) {
		return NaN
	}
	if (x == 0) {
		return 0
	}
	var rt = String(x).length
	var a = 2
	if (rt % a > 0) { //补位
		var ljs = ""
		for (var po = 0; po < (Math.floor(rt / a) + 1) * a - rt; po++) {
			var ljs = ljs + "0"
		}
		var c = ljs + String(x)
	} else if (rt % a == 0) {
		var c = String(x)
	}
	var zzjg = 0
	var xsd = ""

	for (var fe = 0; fe < 1000; fe = fe + a) { //开始运算
		if (fe == 0) {
			var bjs = c.substring(0, a)
		}
		//console.log(bjs)
		for (var yp = 0; yp < 10; yp++) {
			var du = Number(String(zzjg * a) + String(yp))
			//console.log(du)
			if (du * yp > Number(bjs)) {
				break;
			}
		}
		//console.log((yp-1))
		var luo = Number(bjs) - (yp - 1) * Number(String(zzjg * a) + String(yp - 1))
		var zzjg = zzjg + String(yp - 1)
		if (fe + a >= c.length) {
			//var xsd=fe+a
			var ljs = ""
			for (var po = 0; po < a; po++) {
				var ljs = ljs + "0"
			}
			var bjs = String(luo) + ljs
			//console.log(bjs)
		} else {
			var bjs = String(luo) + c.substring(fe + a, fe + a * a)
		}
	}
	var xsd = (c.length / a) + 1 //添加小数点
	var sc = zzjg.substring(0, xsd) + "." + zzjg.substring(xsd, zzjg.length)
	return (sc)
}





function leijia(x) {
	var x = String(x)
	var t = '0'
	for (let i = 0; i < x.length; i++) {
		t = Algebrite.run(t + '+' + x.substring(i, i + 1)).toString()
	}
	return String(t)
}

function similar(s, t, f) {
	if (!s || !t) {
		return 0
	}
	var l = s.length > t.length ? s.length : t.length
	var n = s.length
	var m = t.length
	var d = []
	f = f || 3
	var min = function (a, b, c) {
		return a < b ? (a < c ? a : c) : (b < c ? b : c)
	}
	var i, j, si, tj, cost
	if (n === 0) return m
	if (m === 0) return n
	for (i = 0; i <= n; i++) {
		d[i] = []
		d[i][0] = i
	}
	for (j = 0; j <= m; j++) {
		d[0][j] = j
	}
	for (i = 1; i <= n; i++) {
		si = s.charAt(i - 1)
		for (j = 1; j <= m; j++) {
			tj = t.charAt(j - 1)
			if (si === tj) {
				cost = 0
			} else {
				cost = 1
			}
			d[i][j] = min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost)
		}
	}
	let res = (1 - d[n][m] / l)
	return Number(res.toFixed(f))
}

function funjiance(jxs) {
	var yret = [true, th(jxs)]
	var zuokuohao = 0
	for (var i = 0; i < yret[1].length; i++) {
		var gh = yret[1].substring(i, i + 1)
		if (gh == "(") {
			zuokuohao++
		}
	}
	var youkuohao = 0
	for (var i = 0; i < yret[1].length; i++) {
		var gh = yret[1].substring(i, i + 1)
		if (gh == ")") {
			youkuohao++
		}
	}
	if (zuokuohao == youkuohao) { } else {
		var kh = ''
		for (let i = 0; i < math.abs(zuokuohao - youkuohao); i++) {
			if (zuokuohao > youkuohao) {
				kh = kh + ')'
			} else {
				kh = kh + '('
			}
		}
		var yret = [false, yret[1] + kh]
	}
	return yret
}
// 将字符串格式化为UTF8编码的字节
var writeUTF = function (str, isGetBytes) {
	var back = [];
	var byteSize = 0;
	for (var i = 0; i < str.length; i++) {
		var code = str.charCodeAt(i);
		if (0x00 <= code && code <= 0x7f) {
			byteSize += 1;
			back.push(code);
		} else if (0x80 <= code && code <= 0x7ff) {
			byteSize += 2;
			back.push((192 | (31 & (code >> 6))));
			back.push((128 | (63 & code)))
		} else if ((0x800 <= code && code <= 0xd7ff) ||
			(0xe000 <= code && code <= 0xffff)) {
			byteSize += 3;
			back.push((224 | (15 & (code >> 12))));
			back.push((128 | (63 & (code >> 6))));
			back.push((128 | (63 & code)))
		}
	}
	for (i = 0; i < back.length; i++) {
		back[i] &= 0xff;
	}
	if (isGetBytes) {
		return back
	}
	if (byteSize <= 0xff) {
		return [0, byteSize].concat(back);
	} else {
		return [byteSize >> 8, byteSize & 0xff].concat(back);
	}
}
//writeUTF('中'); // =>  [0, 3, 228, 184, 173] 
// 前两位表示后面utf8字节的长度。因为长度为3，所以前两个字节为`0，3`
// 内容为`228, 184, 173`转成16进制就是`0xE4 0xB8 0xAD`
function str_to_color(str) {
	var f = writeUTF(str)
	f.splice(0, 2)
	//console.log(f)

	return arr_to_color(f)
}

function arr_to_color(f) {
	var c = ''
	for (let i = 0; i < f.length; i++) {
		if (i % 3 == 0) {
			c = c + '#'
		}
		const element = f[i];
		if (f[i].toString(16).length == 1) {
			c = c + '0' + f[i].toString(16)
		} else {
			c = c + f[i].toString(16)
		}
	}
	return c
}

function xioashu_to_fenshu(num) {
	var num = String(num)
	//console.log(num)
	if (num.split('.').length < 2) {
		return num
	}
	var q = '1'
	for (let i = 0; i < num.split('.')[1].length; i++) {
		q = q + '0'
	}
	var fenzi = num.split('.')[0] + num.split('.')[1]
	return Algebrite.rationalize(fenzi + '/' + q).toString()
}

function jxxjxjjxjxjxxjjx() {
	if (v_i_p[0] == true) { } else {
		return false
	}
	var y = document.getElementById("cddddcdcdcdc").value
	if (zdyset[29] == 'true') {
		var y = th(y)
		var y = l_az_to_zc(y)
		var y = cl_to_zm(y)
		if (funjiance(y)[0] == true) { } else {
			if (confirm(language[215]) == true) {
				var y = funjiance(y)[1]
			} else {
				return
			}
		}
	}
	JXJ(y, 2, true, 'cdshhjshjdcshjchj')

}

function jxxjxjjjxjxjxjxjxxjjx() {
	if (v_i_p[0] == true) { } else {
		return false
	}
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
	JXJ(y, 1, true, 'cdshhjshjdcshjchj')
}

function tetration(x, a) {
	var d = x
	for (let i = 1; i < a; i++) {
		d = Math.pow(x, d)
	}
	return d
}




























/*



∫((a^2-(x-b)^2)^(1/2)+c)=
(a^2*arcsin((x-b)/abs(a))+sqrt((-x)+b+a)*(x-b)*sqrt(x-b+a)+2*c*x)/2


∫(-(a^2-(x-b)^2)^(1/2)+c)=
-(a^2*asin((x-b)/abs(a))+sqrt((-x)+b+a)*(x-b)*sqrt(x-b+a)+2*c*x)/2





*/

//Algebrite.integral()  求积分（解析式）
//Algebrite.simplify() 化简
//Algebrite.roots()  求根（解析解）
//Algebrite.nroots()  求根（小数）
//Algebrite.derivative()   求导
//Algebrite.defint(f,x,a,b)    定积分（值）
//Algebrite.run()  执行
//Algebrite.factor()  因式分解
//Algebrite.taylor('sin(x)','x',30,0).toString()   泰勒展开
//Algebrite.roots(Algebrite.derivative(fx)).toString()    获取驻点
//Algebrite.numerator()           分子
//Algebrite.denominator()         分母
//Algebrite.rationalize()         通分





/*
x=2*(pi-0.549353) y=2*(pi-0.611375)
x=2*(pi-0.549353) y=2*(pi-0.611375)

4*cos(y)+2*cos(x+y)=0
3*cos(x)+2*cos(x+y)=0

a=0.820137,b=1.098706,c=1.222750

*/




//   (b+103*b*k^2+5253*b*k^4+176851*b*k^6+4421275*b*k^8+87541245*b*k^10+1429840335*b*k^12+19813501785*b*k^14+237762021420*b*k^16+2509710226100*b*k^18+23591276125340*b*k^20+199453516332420*b*k^22+1529143625215220*b*k^24+10704005376506540*b*k^26+68811463134684900*b*k^28+408281347932463740*b*k^30+2245547413628550570*b*k^32+11491919116804935270*b*k^34+54905835780290246290*b*k^36+245631370596035312350*b*k^38+1031651756503348311870*b*k^40+4077480751894186185010*b*k^42+15197882802514693962310*b*k^44+53522978565377835258570*b*k^46+178409928551259450861900*b*k^48+563775374221979864723604*b*k^50+1691326122665939594170812*b*k^52+4823411535010272175968612*b*k^54+13092117023599310191914804*b*k^56+33858923336894767737710700*b*k^58+83518677564340427086353060*b*k^60+196673014909575844429153980*b*k^62+442514283546545649965596455*b*k^64+952076185812264883259313585*b*k^66+1960156853142898289063292675*b*k^68+3864309224767428055581919845*b*k^70+7299250757894030771654737485*b*k^72+13217562183213515181104524635*b*k^74+22956818528739263209286805945*b*k^76+38261364214565438682144676575*b*k^78+61218182743304701891431482520*b*k^80+94066963727516980955126424360*b*k^82+138860755978715543314710435960*b*k^84+196988514295387166097612478920*b*k^86+268620701311891590133107925800*b*k^88+352191586164480084841185947160*b*k^90+444067652120431411321495324680*b*k^92+538550131294991286070749649080*b*k^94+628308486510823167082541257260*b*k^96+705244219552964779378362635700*b*k^98+761663757117201961728631646556*b*k^100+791532924062974587678774064068*b*k^102+791532924062974587678774064068*b*k^104+761663757117201961728631646556*b*k^106+705244219552964779378362635700*b*k^108+628308486510823167082541257260*b*k^110+538550131294991286070749649080*b*k^112+444067652120431411321495324680*b*k^114+352191586164480084841185947160*b*k^116+268620701311891590133107925800*b*k^118+196988514295387166097612478920*b*k^120+138860755978715543314710435960*b*k^122+94066963727516980955126424360*b*k^124+61218182743304701891431482520*b*k^126+38261364214565438682144676575*b*k^128+22956818528739263209286805945*b*k^130+13217562183213515181104524635*b*k^132+7299250757894030771654737485*b*k^134+3864309224767428055581919845*b*k^136+1960156853142898289063292675*b*k^138+952076185812264883259313585*b*k^140+442514283546545649965596455*b*k^142+196673014909575844429153980*b*k^144+83518677564340427086353060*b*k^146+33858923336894767737710700*b*k^148+13092117023599310191914804*b*k^150+4823411535010272175968612*b*k^152+1691326122665939594170812*b*k^154+563775374221979864723604*b*k^156+178409928551259450861900*b*k^158+53522978565377835258570*b*k^160+15197882802514693962310*b*k^162+4077480751894186185010*b*k^164+1031651756503348311870*b*k^166+245631370596035312350*b*k^168+54905835780290246290*b*k^170+11491919116804935270*b*k^172+2245547413628550570*b*k^174+408281347932463740*b*k^176+68811463134684900*b*k^178+10704005376506540*b*k^180+1529143625215220*b*k^182+199453516332420*b*k^184+23591276125340*b*k^186+2509710226100*b*k^188+237762021420*b*k^190+19813501785*b*k^192+1429840335*b*k^194+87541245*b*k^196+4421275*b*k^198+176851*b*k^200+5253*b*k^202+103*b*k^204+b*k^206+c*k+103*c*k^3+5253*c*k^5+176851*c*k^7+4421275*c*k^9+87541245*c*k^11+1429840335*c*k^13+19813501785*c*k^15+237762021420*c*k^17+2509710226100*c*k^19+23591276125340*c*k^21+199453516332420*c*k^23+1529143625215220*c*k^25+10704005376506540*c*k^27+68811463134684900*c*k^29+408281347932463740*c*k^31+2245547413628550570*c*k^33+11491919116804935270*c*k^35+54905835780290246290*c*k^37+245631370596035312350*c*k^39+1031651756503348311870*c*k^41+4077480751894186185010*c*k^43+15197882802514693962310*c*k^45+53522978565377835258570*c*k^47+178409928551259450861900*c*k^49+563775374221979864723604*c*k^51+1691326122665939594170812*c*k^53+4823411535010272175968612*c*k^55+13092117023599310191914804*c*k^57+33858923336894767737710700*c*k^59+83518677564340427086353060*c*k^61+196673014909575844429153980*c*k^63+442514283546545649965596455*c*k^65+952076185812264883259313585*c*k^67+1960156853142898289063292675*c*k^69+3864309224767428055581919845*c*k^71+7299250757894030771654737485*c*k^73+13217562183213515181104524635*c*k^75+22956818528739263209286805945*c*k^77+38261364214565438682144676575*c*k^79+61218182743304701891431482520*c*k^81+94066963727516980955126424360*c*k^83+138860755978715543314710435960*c*k^85+196988514295387166097612478920*c*k^87+268620701311891590133107925800*c*k^89+352191586164480084841185947160*c*k^91+444067652120431411321495324680*c*k^93+538550131294991286070749649080*c*k^95+628308486510823167082541257260*c*k^97+705244219552964779378362635700*c*k^99+761663757117201961728631646556*c*k^101+791532924062974587678774064068*c*k^103+791532924062974587678774064068*c*k^105+761663757117201961728631646556*c*k^107+705244219552964779378362635700*c*k^109+628308486510823167082541257260*c*k^111+538550131294991286070749649080*c*k^113+444067652120431411321495324680*c*k^115+352191586164480084841185947160*c*k^117+268620701311891590133107925800*c*k^119+196988514295387166097612478920*c*k^121+138860755978715543314710435960*c*k^123+94066963727516980955126424360*c*k^125+61218182743304701891431482520*c*k^127+38261364214565438682144676575*c*k^129+22956818528739263209286805945*c*k^131+13217562183213515181104524635*c*k^133+7299250757894030771654737485*c*k^135+3864309224767428055581919845*c*k^137+1960156853142898289063292675*c*k^139+952076185812264883259313585*c*k^141+442514283546545649965596455*c*k^143+196673014909575844429153980*c*k^145+83518677564340427086353060*c*k^147+33858923336894767737710700*c*k^149+13092117023599310191914804*c*k^151+4823411535010272175968612*c*k^153+1691326122665939594170812*c*k^155+563775374221979864723604*c*k^157+178409928551259450861900*c*k^159+53522978565377835258570*c*k^161+15197882802514693962310*c*k^163+4077480751894186185010*c*k^165+1031651756503348311870*c*k^167+245631370596035312350*c*k^169+54905835780290246290*c*k^171+11491919116804935270*c*k^173+2245547413628550570*c*k^175+408281347932463740*c*k^177+68811463134684900*c*k^179+10704005376506540*c*k^181+1529143625215220*c*k^183+199453516332420*c*k^185+23591276125340*c*k^187+2509710226100*c*k^189+237762021420*c*k^191+19813501785*c*k^193+1429840335*c*k^195+87541245*c*k^197+4421275*c*k^199+176851*c*k^201+5253*c*k^203+103*c*k^205+c*k^207+d*k^2+103*d*k^4+5253*d*k^6+176851*d*k^8+4421275*d*k^10+87541245*d*k^12+1429840335*d*k^14+19813501785*d*k^16+237762021420*d*k^18+2509710226100*d*k^20+23591276125340*d*k^22+199453516332420*d*k^24+1529143625215220*d*k^26+10704005376506540*d*k^28+68811463134684900*d*k^30+408281347932463740*d*k^32+2245547413628550570*d*k^34+11491919116804935270*d*k^36+54905835780290246290*d*k^38+245631370596035312350*d*k^40+1031651756503348311870*d*k^42+4077480751894186185010*d*k^44+15197882802514693962310*d*k^46+53522978565377835258570*d*k^48+178409928551259450861900*d*k^50+563775374221979864723604*d*k^52+1691326122665939594170812*d*k^54+4823411535010272175968612*d*k^56+13092117023599310191914804*d*k^58+33858923336894767737710700*d*k^60+83518677564340427086353060*d*k^62+196673014909575844429153980*d*k^64+442514283546545649965596455*d*k^66+952076185812264883259313585*d*k^68+1960156853142898289063292675*d*k^70+3864309224767428055581919845*d*k^72+7299250757894030771654737485*d*k^74+13217562183213515181104524635*d*k^76+22956818528739263209286805945*d*k^78+38261364214565438682144676575*d*k^80+61218182743304701891431482520*d*k^82+94066963727516980955126424360*d*k^84+138860755978715543314710435960*d*k^86+196988514295387166097612478920*d*k^88+268620701311891590133107925800*d*k^90+352191586164480084841185947160*d*k^92+444067652120431411321495324680*d*k^94+538550131294991286070749649080*d*k^96+628308486510823167082541257260*d*k^98+705244219552964779378362635700*d*k^100+761663757117201961728631646556*d*k^102+791532924062974587678774064068*d*k^104+791532924062974587678774064068*d*k^106+761663757117201961728631646556*d*k^108+705244219552964779378362635700*d*k^110+628308486510823167082541257260*d*k^112+538550131294991286070749649080*d*k^114+444067652120431411321495324680*d*k^116+352191586164480084841185947160*d*k^118+268620701311891590133107925800*d*k^120+196988514295387166097612478920*d*k^122+138860755978715543314710435960*d*k^124+94066963727516980955126424360*d*k^126+61218182743304701891431482520*d*k^128+38261364214565438682144676575*d*k^130+22956818528739263209286805945*d*k^132+13217562183213515181104524635*d*k^134+7299250757894030771654737485*d*k^136+3864309224767428055581919845*d*k^138+1960156853142898289063292675*d*k^140+952076185812264883259313585*d*k^142+442514283546545649965596455*d*k^144+196673014909575844429153980*d*k^146+83518677564340427086353060*d*k^148+33858923336894767737710700*d*k^150+13092117023599310191914804*d*k^152+4823411535010272175968612*d*k^154+1691326122665939594170812*d*k^156+563775374221979864723604*d*k^158+178409928551259450861900*d*k^160+53522978565377835258570*d*k^162+15197882802514693962310*d*k^164+4077480751894186185010*d*k^166+1031651756503348311870*d*k^168+245631370596035312350*d*k^170+54905835780290246290*d*k^172+11491919116804935270*d*k^174+2245547413628550570*d*k^176+408281347932463740*d*k^178+68811463134684900*d*k^180+10704005376506540*d*k^182+1529143625215220*d*k^184+199453516332420*d*k^186+23591276125340*d*k^188+2509710226100*d*k^190+237762021420*d*k^192+19813501785*d*k^194+1429840335*d*k^196+87541245*d*k^198+4421275*d*k^200+176851*d*k^202+5253*d*k^204+103*d*k^206+d*k^208)/(-1/((-1-k^2)^3)-107*k^2/((-1-k^2)^3)-5671*k^4/((-1-k^2)^3)-198485*k^6/((-1-k^2)^3)-5160610*k^8/((-1-k^2)^3)-106308566*k^10/((-1-k^2)^3)-1807245622*k^12/((-1-k^2)^3)-26075972546*k^14/((-1-k^2)^3)-325949656825*k^16/((-1-k^2)^3)-3585446225075*k^18/((-1-k^2)^3)-35137373005735*k^20/((-1-k^2)^3)-309847743777845*k^22/((-1-k^2)^3)-2478781950222760*k^24/((-1-k^2)^3)-18114175790089400*k^26/((-1-k^2)^3)-121623751733457400*k^28/((-1-k^2)^3)-754067260747435880*k^30/((-1-k^2)^3)-4335886749297756310*k^32/((-1-k^2)^3)-23209746716829166130*k^34/((-1-k^2)^3)-116048733584145830650*k^36/((-1-k^2)^3)-543596699420472575150*k^38/((-1-k^2)^3)-2391825477450079330660*k^40/((-1-k^2)^3)-9908991263721757227020*k^42/((-1-k^2)^3)-38735147667275960069260*k^44/((-1-k^2)^3)-143151632683411156777700*k^46/((-1-k^2)^3)-501030714391939048721950*k^48/((-1-k^2)^3)-1663421971781237641756874*k^50/((-1-k^2)^3)-5246176987925441793233218*k^52/((-1-k^2)^3)-15738530963776325379699654*k^54/((-1-k^2)^3)-44967231325075215370570440*k^56/((-1-k^2)^3)-122496940506239379802588440*k^58/((-1-k^2)^3)-318492045316222387486729944*k^60/((-1-k^2)^3)-791093144817713672144458248*k^62/((-1-k^2)^3)-1878846218942069971343088339*k^64/((-1-k^2)^3)-4270105043050159025779746225*k^66/((-1-k^2)^3)-9293758034873875526697094725*k^68/((-1-k^2)^3)-19384123901308368955682511855*k^70/((-1-k^2)^3)-38768247802616737911365023710*k^72/((-1-k^2)^3)-74393124161778064640727477930*k^74/((-1-k^2)^3)-137039965561170119075024301450*k^76/((-1-k^2)^3)-242455323685147133748119917950*k^78/((-1-k^2)^3)-412174050264750127371803860515*k^80/((-1-k^2)^3)-673552716286298988631972162305*k^82/((-1-k^2)^3)-1058439982735612696421670540765*k^84/((-1-k^2)^3)-1599967415763135471335083375575*k^86/((-1-k^2)^3)-2327225332019106140123757637200*k^88/((-1-k^2)^3)-3258115464826748596173260692080*k^90/((-1-k^2)^3)-4391373017809965499190047019760*k^92/((-1-k^2)^3)-5699441576306550967033890812880*k^94/((-1-k^2)^3)-7124301970383188708792363516100*k^96/((-1-k^2)^3)-8578241148012410894260192805100*k^98/((-1-k^2)^3)-9950759731694396637341823653916*k^100/((-1-k^2)^3)-11121437347187855065264391142612*k^102/((-1-k^2)^3)-11976932527740766993361651999736*k^104/((-1-k^2)^3)-12428892245768720464809261509160*k^106/((-1-k^2)^3)-12428892245768720464809261509160*k^108/((-1-k^2)^3)-11976932527740766993361651999736*k^110/((-1-k^2)^3)-11121437347187855065264391142612*k^112/((-1-k^2)^3)-9950759731694396637341823653916*k^114/((-1-k^2)^3)-8578241148012410894260192805100*k^116/((-1-k^2)^3)-7124301970383188708792363516100*k^118/((-1-k^2)^3)-5699441576306550967033890812880*k^120/((-1-k^2)^3)-4391373017809965499190047019760*k^122/((-1-k^2)^3)-3258115464826748596173260692080*k^124/((-1-k^2)^3)-2327225332019106140123757637200*k^126/((-1-k^2)^3)-1599967415763135471335083375575*k^128/((-1-k^2)^3)-1058439982735612696421670540765*k^130/((-1-k^2)^3)-673552716286298988631972162305*k^132/((-1-k^2)^3)-412174050264750127371803860515*k^134/((-1-k^2)^3)-242455323685147133748119917950*k^136/((-1-k^2)^3)-137039965561170119075024301450*k^138/((-1-k^2)^3)-74393124161778064640727477930*k^140/((-1-k^2)^3)-38768247802616737911365023710*k^142/((-1-k^2)^3)-19384123901308368955682511855*k^144/((-1-k^2)^3)-9293758034873875526697094725*k^146/((-1-k^2)^3)-4270105043050159025779746225*k^148/((-1-k^2)^3)-1878846218942069971343088339*k^150/((-1-k^2)^3)-791093144817713672144458248*k^152/((-1-k^2)^3)-318492045316222387486729944*k^154/((-1-k^2)^3)-122496940506239379802588440*k^156/((-1-k^2)^3)-44967231325075215370570440*k^158/((-1-k^2)^3)-15738530963776325379699654*k^160/((-1-k^2)^3)-5246176987925441793233218*k^162/((-1-k^2)^3)-1663421971781237641756874*k^164/((-1-k^2)^3)-501030714391939048721950*k^166/((-1-k^2)^3)-143151632683411156777700*k^168/((-1-k^2)^3)-38735147667275960069260*k^170/((-1-k^2)^3)-9908991263721757227020*k^172/((-1-k^2)^3)-2391825477450079330660*k^174/((-1-k^2)^3)-543596699420472575150*k^176/((-1-k^2)^3)-116048733584145830650*k^178/((-1-k^2)^3)-23209746716829166130*k^180/((-1-k^2)^3)-4335886749297756310*k^182/((-1-k^2)^3)-754067260747435880*k^184/((-1-k^2)^3)-121623751733457400*k^186/((-1-k^2)^3)-18114175790089400*k^188/((-1-k^2)^3)-2478781950222760*k^190/((-1-k^2)^3)-309847743777845*k^192/((-1-k^2)^3)-35137373005735*k^194/((-1-k^2)^3)-3585446225075*k^196/((-1-k^2)^3)-325949656825*k^198/((-1-k^2)^3)-26075972546*k^200/((-1-k^2)^3)-1807245622*k^202/((-1-k^2)^3)-106308566*k^204/((-1-k^2)^3)-5160610*k^206/((-1-k^2)^3)-198485*k^208/((-1-k^2)^3)-5671*k^210/((-1-k^2)^3)-107*k^212/((-1-k^2)^3)-k^214/((-1-k^2)^3))






function sleep(delay) {
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < delay) {
		// 使用  continue 实现；
		continue;
	}
}



function dxf() {
	sleep(1000);
	return 1
}









function _3nplus1(n) {

	var x = n
	var i = 0
	while (x > 1) {
		i++
		if (x % 2) {
			//odd
			xjdian(i, x)
			x = 3 * x + 1
		} else {
			//even
			xjdian(i, x)
			x = x / 2
		}
	}
	xjdian(i + 1, 1)









}







































/*

(-a*f*k*m/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*f*k*q/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*f*k*s^2/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*f*m*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*f*m/((-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+a*f*q*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*f*q/((-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-a*f*k^2*s/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*f*k^2/((-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+a*f*k^3/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*f*s^2/((-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+a*f*s^3/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*f/(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))-a*k*m*q/((-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*m*q/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*m*s^2/((-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*m*s^2/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*q*s^2/((-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*m^2/(2*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*m^2/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*q^2/(2*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k*s^4/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*m*q*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*m*s^3/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*q/(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))+a*k^2*m*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k^2*m*s/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*k^2*q*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*k^2*s^3/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*k^2/((-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+a*k^2/((-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+a*k^3*m/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*k^3*m/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*k^3*q/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*k^3*s^2/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*k^4*s/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a*m^2*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a*s^2/((-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-f*k*m*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f*k*m*s/((-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k*m/((-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+f*k*m/((-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-f*k*q*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k*q/((-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+f*k*s^2/((-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-f*k*s^3/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f*m*s/((-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+f*m*s^2/(2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f*q/(2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k^2*m/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k^2*m/(2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k^2*q/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f*k^2*s/((-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+f*k^2*s^2/((-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k^2/(2*(-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f*k^2/(2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f*k^3*s/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f*s^2/(2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k*m*q*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k*m*s^3/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k*m^2*s/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k*m^2*s/(2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2+f^2+q*s^2/(2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*f*k*s/((-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*f*k/((-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+a^2*f*s/((-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-a^2*f*k^2/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*f*s^2/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*f/(2*(-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*k*m*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*k*m*s/((-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*k*q*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*k*s^3/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*m*q/(2*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*m*s^2/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*m*s^2/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*q*s^2/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*q/(2*(-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*k^2*m/((-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*k^2*m/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*k^2*q/((-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-3*a^2*k^2*s^2/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*k^2/(2*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^2*k^2/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*k^3*s/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*k^4/(4*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*m^2/(4*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*q^2/(4*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*s^2/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^2*s^4/(4*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^3*k*m/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^3*k*q/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^3*k*s^2/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^3*m*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^3*q*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^3*k^2*s/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^3*k^3/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^3*s^3/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-a^3/((-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-a^4*k*s/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^4*k^2/(4*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^4*s^2/(4*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+a^4/(4*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-f^2*k*s/(2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f^2*k/((-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))-f^2*s/((-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q)))+f^2*k^2/(4*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f^2*s^2/(4*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+f^2/(4*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m*q/(2*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m*q/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m*s^2/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m*s^2/((-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*q*s^2/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^2*q/(2*(-f+m)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^2*q/(2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m^2/(4*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m^2/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*m^2/(4*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*q^2/(4*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^2*s^2/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^2*s^2/(2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^2*s^4/(4*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^3*m*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^3*m*s/(2*(-f+m)*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^3*q*s/(2*(-f+m)^2*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)-k^3*s^3/(2*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^4*s^2/(4*(-f+m)^2*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^4/(4*(-f+m)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^4/(2*(-f+m)*(-m+q)*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+k^4/(4*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+m^2*s^2/(4*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+q^2/(4*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2)+s^4/(4*(-m+q)^2*(s/(-m+q)+a/(-f+m)-k/(-f+m)-k/(-m+q))^2))^(1/2)

*/




// azgetdzb_w(azgetjd_w('sqrt('+azgetcl_w('a')+'^2-(x-azgetdzb_w(1,0))^2)+azgetdzb_w(1,1)','sqrt(azgetcl_w(0,1)^2_(x_azgetdzb_w(1,0))^2)+azgetdzb_w(1,1)','sqrt('+azgetcl_w('b')+'^2-(x-azgetdzb_w(0,0))^2)+azgetdzb_w(0,1)','sqrt(azgetcl_w(1,1)^2_(x_azgetdzb_w(0,0))^2)+azgetdzb_w(0,1)',1,0,0))









/*


-(b*sqrt((-x^2)+2*b*x-b^2-2*a*b+a^2+1)+sqrt(1-b)*sqrt(b+1)*((-x)+b+a))/(sqrt(1-b)*sqrt(b+1)*sqrt((-x^2)+2*b*x-b^2-2*a*b+a^2+1))
-(b*sqrt((-x^2)+2*b*x-b^2-2*a*b+a^2+1)+sqrt(1-b)*sqrt(b+1)*(x-b-a))/(sqrt(1-b)*sqrt(b+1)*sqrt((-x^2)+2*b*x-b^2-2*a*b+a^2+1))



12*x^3-20*x^2-x+6
(2*x-3)*(2*x+1)*(3*x-2)



(10*x^4-11*x^3-22*x^2+5*x+6)

(x-3/2)*(x+1/2)*(x-2/3)



x=-a*b^2+b+a+sqrt(a^2*b^4-2*a*b^3+b^2)

b1,2=((a-x±sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x)

sqrt(a^2-2*a*(((a-x+sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x))+1-x^2-(((a-x+sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x))^2+2*x*(((a-x+sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x)))+sqrt(1-(((a-x+sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x))^2)


x1,2=(-a*b^2+b+a±sqrt(a^2*b^4-2*a*b^3+b^2))


((sqrt((-2*a*x)+2*a^2+1)+1)*sqrt(sqrt((-2*a*x)+2*a^2+1)+a*x+a^2-1))/(sqrt(2)*a)
//(sqrt(sqrt((-2*a*x)+2*a^2+1)-a*x-a^2+1)*(sqrt(2*a*x-2*a^2-1)+i))/(sqrt(2)*a)


//sqrt(a^2-2*a*(((a-x-sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x))+1-x^2-(((a-x-sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x))^2+2*x*(((a-x-sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x)))+sqrt(1-(((a-x-sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x))^2)


sqrt(1-b)*sqrt(b+1)*(x-b-a)=-b*sqrt((-x^2)+2*b*x-b^2-2*a*b+a^2+1)
(1-b^2)*x^2+(2*b^3+2*a*b^2-2*b-2*a)*x-b^4-2*a*b^3+(1-a^2)*b^2+2*a*b+a^2=b^2*((-x^2)+2*b*x-b^2-2*a*b+a^2+1)
(1-b^2)*x^2+((-2*b^3)-2*a*b^2+2*b+2*a)*x-b^4-2*a*b^3+(1-a^2)*b^2+2*a*b+a^2=b^2*((-x^2)+2*b*x-b^2-2*a*b+a^2+1)

b1,2=((a-x±sqrt(-2*a*x^3+(6*a^2+1)*x^2+(-6*a^3-2*a)*x+2*a^4+a^2)))/(2*a^2-2*a*x)


sqrt(a^2-2*a*(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x))+1-x^2-(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x))^2+2*x*(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x)))+sqrt(1-(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x))^2)

(-1/2-1/(2*a^2)+a^2-x^2-(-2*a*x+1+2*a^2)^(1/2)-(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+3*x/(2*a)+x*(-2*a*x+1+2*a^2)^(1/2)/a)^(1/2)-(1/2-1/(2*a^2)-(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+x/(2*a))^(1/2)
(-1/2-1/(2*a^2)+a^2-x^2+(-2*a*x+1+2*a^2)^(1/2)+(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+3*x/(2*a)-x*(-2*a*x+1+2*a^2)^(1/2)/a)^(1/2)+(1/2-1/(2*a^2)+(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+x/(2*a))^(1/2)

sqrt(a^2-2*a*(-(sqrt((-2*a*x)+2*a^2+1)-1)/(2*a))+1-x^2-(-(sqrt((-2*a*x)+2*a^2+1)-1)/(2*a))^2+2*x*(-(sqrt((-2*a*x)+2*a^2+1)-1)/(2*a)))+sqrt(1-(-(sqrt((-2*a*x)+2*a^2+1)-1)/(2*a))^2)




(-1/2*a*x-1/6*a*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^4-1/2*x^2-1/6*a^2*x*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^2*x^2-1/6*a^3*x-1/3*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(2/3))/(x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3))

-sqrt(a^2-2*a*((((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x)))+1-x^2-((((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x)))^2+2*x*((((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x))))+sqrt(1-((((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)-((-(a+x)/(3*(2*x)))-((a^2+x*a)^2*x^-2)/36)/(((x+a)*sqrt((x+a)*(27*x^3+(9*a-2*a^3)*x^2+((-4*a^4)-19*a^2-8)*x-2*a^5-a^3)))/(8*3^(3/2)*x^2)+((3*(a^2+2*x*a+x^2))/(4*x)-((a^2+x*a)*(a+x))/((2*x)*(2*x)))/6-((a^2+x*a)^3*x^-3)/216)^(1/3)+((-1)*(a^2+x*a))/(3*(2*x)))^2)
(a^2-2*a*((-1/2*a*x-1/6*a*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^4-1/2*x^2-1/6*a^2*x*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^2*x^2-1/6*a^3*x-1/3*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(2/3))/(x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)))+1-x^2-((-1/2*a*x-1/6*a*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^4-1/2*x^2-1/6*a^2*x*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^2*x^2-1/6*a^3*x-1/3*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(2/3))/(x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)))^2+2*x*((-1/2*a*x-1/6*a*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^4-1/2*x^2-1/6*a^2*x*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^2*x^2-1/6*a^3*x-1/3*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(2/3))/(x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3))))^(1/2)-(1-((-1/2*a*x-1/6*a*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^4-1/2*x^2-1/6*a^2*x*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)-1/12*a^2*x^2-1/6*a^3*x-1/3*x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(2/3))/(x^2*(-45/8*a-27/8*x+1/8*a^3+1/2*(-27/2+1215/8*a*x-81*a/(2*x)+2403/16*a^2-135/8*a^4+729/16*x^2-81*a^2/(2*x^2)-27/8*a^3*x-27*a^3/(2*x^3)-27*a^3/(4*x)-1377*a^4/(16*x^2)-297*a^5/(8*x^3)-135*a^5/(4*x)-27*a^6/(16*x^4)-135*a^6/(4*x^2)-135*a^7/(8*x^3)-27*a^8/(8*x^4))^(1/2)-9*a^2/(8*x)+9*a^3/(8*x^2)+3*a^4/(8*x)+3*a^5/(8*x^2)+a^6/(8*x^3))^(1/3)))^2)^(1/2)













y=±((-1/2-1/(2*a^2)+a^2-x^2-(-2*a*x+1+2*a^2)^(1/2)-(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+3*x/(2*a)+x*(-2*a*x+1+2*a^2)^(1/2)/a)^(1/2)-(1/2-1/(2*a^2)-(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+x/(2*a))^(1/2))
y=±((-1/2-1/(2*a^2)+a^2-x^2+(-2*a*x+1+2*a^2)^(1/2)+(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+3*x/(2*a)-x*(-2*a*x+1+2*a^2)^(1/2)/a)^(1/2)+(1/2-1/(2*a^2)+(-2*a*x+1+2*a^2)^(1/2)/(2*a^2)+x/(2*a))^(1/2))


*/


































/*

(a-(a/sqrt(a^2))*(a^2/(4*a^2+9))^(1/2),(9+3*a^2)^(1/2)/3+((3*a^2+9)/(4*a^2+9))^(1/2))
((a*sqrt(4*a^2+9)-a)/sqrt(4*a^2+9),(sqrt(3)*sqrt(a^2+3)*sqrt(4*a^2+9)+3^(3/2)*sqrt(a^2+3))/(3*sqrt(4*a^2+9)))







16*a^6+36*a^4=(16*a^4+72*a^2+81)*b^4+((-32*a^6)-152*a^4-180*a^2)*b^2+16*a^8+80*a^6+100*a^4



(x-a)^2+(y-sqrt(4-a^2)-2)^2=1,y^2+x^2/3=1
y^2-4*y+sqrt(2-a)*sqrt(a+2)*(4-2*y)+x^2-2*a*x+8=1,y^2+x^2/3=1


y=+-sqrt(9+3*x^2)/2

(x-a)^2+(sqrt(9+3*x^2)/2-sqrt(4-a^2)-2)^2=1

*/
/*


*/



/*

x^2/(x-1)^2+y^2/(y-1)^2+z^2/(z-1)^2
((2*y^4-2*y^3+y^2)*z^4+((-2*y^4)-4*y^3+4*y^2-2*y)*z^3+(y^4+4*y^3+3*y^2-4*y+2)*z^2+((-2*y^3)-4*y^2+4*y-2)*z+2*y^2-2*y+1)/((y^4-2*y^3+y^2)*z^4+((-2*y^4)+2*y^3+2*y^2-2*y)*z^3+(y^4+2*y^3-6*y^2+2*y+1)*z^2+((-2*y^3)+2*y^2+2*y-2)*z+y^2-2*y+1)
1/(1-y*x)^2+y^2/(y-1)^2+x^2/(x-1)^2


(2*y^4*z^3-6*y^3*z^2+(2*y^3+6*y-2)*z-2*y)=0
(2*y^3*z^4+(2*y-6*y^2)*z^3+(6*y-2)*z-2*y)=0


x/(x-1)+y/(y-1)+z/(z-1)=
(x+y+z-2*x*y+3*x*y*z-2*x*z-2*y*z)/(-1+x*y*zx+y+z-x*y-x*z-y*z)


2*x*y*z+1=x*y*z+x*y+x*z+y*z

*/






/*

var shujv = [
	[ 0, 19 ],
	[ 1, 11.5 ],
	[ 2, 7.1 ],
	[ 3, 5 ],
	[ 3.5, 4.3 ],
	[ 4.5, 3.2 ],
	[ 5.5, 2.6 ],
	[ 7, 1.9 ],
	[ 9, 1.3 ],
	[ 11, 0.8 ],
	[ 19, 0 ]
]

function g () {
	for ( let i = 0; i < shujv.length - 1; i++ ) {
		const element = shujv[ i ];
		const element2 = shujv[ i + 1 ];
		var x1 = element[ 0 ]
		var x11 = element2[ 0 ]
		var x2 = element[ 1 ]
		var x21 = element2[ 1 ]

		var k, m, a, b
		/*	a=((0.19-x1*0.01)/x2)
			b=((0.19-x11*0.01)/x21)

			m = -((100*a-1)*x11*x11+(1-100*b)*x1*x1)/((100*x1*x1-100*x1)*x11*x11)
			k=(a-0.01-m*x1)/(x1*x1)
		//k=(((0.19-x1*0.01)/x2)-0.01)/x1
		//((a-0.01-m*x1)/x1^2)*x11^2+m*x11^2+0.01=b
		console.log( k, m )
	}
}
*/

/*
function yuekao15 ( u ) {
	var g = []
	var f = []

	function erjzzhuanzf ( e, z ) {
		if ( e == '0' ) {
			return z
		} else {
			return -1 * z
		}
	}

	function buwei ( u, s ) {
		var t = ''
		for ( let i = 0; i < u - s.length; i++ ) {
			t = t + '0'
		}
		return t + s
	}
	var g = []
	for ( let i = 0; i < Math.pow( 2, u ); i++ ) {
		var d = buwei( u, parseInt( i ).toString( 2 ) )
		var f = []
		for ( let t = 0; t < u; t++ ) {
			var e = erjzzhuanzf( d.substring( t, t + 1 ), t + 1 )
			f.push( e )
		}
		g.push( f )
	}
	console.log( g )
	var gg = []
	for ( let i = 0; i < g.length; i++ ) {
		const element = g[ i ];
		var w = 0
		for ( let t = 0; t < element.length; t++ ) {
			w = w + element[ t ]
		}
		gg.push( w )
	}
	console.log( gg )
	var ggg = []
	for ( let i = 0; i < gg.length; i++ ) {
		const element = gg[ i ];
		if ( isInArray( ggg, element ) ) {

		} else {
			ggg.push( element )
		}
	}
	console.log( ggg )
	console.log( ggg.length )
	return ggg.length
}*/




/*
function zhongkaopjf ( t ) {
	var c = 0,
		c1 = 0
	for ( let i = 0; i < t.length; i++ ) {
		if ( t[ i ].lqzf === '' || t[ i ].lqzf === '901' || t[ i ].lqzf === '*' ) {

		} else {
			c1++
			c = c + Number( t[ i ].lqzf )
		}
	}
	return [ c, c1 ]
}

function zhongkaopm ( t ) {
	var c = [],
		d = []
	for ( let i = 0; i < t.length; i++ ) {
		if ( t[ i ].lqzf === '' || t[ i ].lqzf === '901' || t[ i ].lqzf === '*' ) {
			d.push( t[ i ] )
		} else {
			c.push( t[ i ] )
		}
	}

	function bubbleSort1 ( arr ) {
		var len = arr.length;
		for ( var i = 0; i < len; i++ ) {
			for ( var j = 0; j < len - 1 - i; j++ ) {
				if ( ( Number( arr[ j ].lqzf ) > Number( arr[ j + 1 ].lqzf ) ) || ( arr[ j + 1 ].lqzf == '' ) || ( arr[ j + 1 ].lqzf == "901" ) || ( arr[ j + 1 ].lqzf == '*' ) ) { //相邻元素两两对比
					var temp = arr[ j + 1 ]; //元素交换
					arr[ j + 1 ] = arr[ j ];
					arr[ j ] = temp;
				}
			}
		}
		return arr;
	}

	return [ d, bubbleSort1( c ) ]
}
*/
/*
x=+-1/5^(1/4)
(sqrt(5)-1)/(2*5^(1/4))
-(sqrt(5)-1)/(2*5^(1/4))


x^2=1/sqrt(5)
y^2=-(sqrt(5)-3)/(2*sqrt(5))
-(sqrt(5)-3)/(2*sqrt(5))


(sqrt(5)-1)/2
*/
/*
a/c+((b*c-a*d)/c)*(((c*x-a+l)*l^(n-1)-(c*x-a+t)*t^(n-1))/((c*x-a+l)*l^(n)-(c*x-a+t)*t^(n)))

((t^n*(a*c*l*t+(b*c^2-a*c*d)*l)+l^n*((-a*c*l)+a*c*d-b*c^2)*t)*x+t^n*(a*l*t^2+((-a*d)+b*c-a^2)*l*t+(a^2*d-a*b*c)*l)+l^n*((-a*l^2)+(a*d-b*c+a^2)*l-a^2*d+a*b*c)*t)/((c^2*l*t^(n+1)-c^2*l^(n+1)*t)*x+t^n*(c*l*t^2-a*c*l*t)+l^n*(a*c*l-c*l^2)*t)

t=(a+d-sqrt((a-d)^2+4*b*c))/2
l=(a+d+sqrt((a-d)^2+4*b*c))/2























a*x^2+b*x*y+c*y^2+d*x+e*y+f=0
g*x^2+h*x*y+j*y^2+k*x+l*y+m=0

*/
