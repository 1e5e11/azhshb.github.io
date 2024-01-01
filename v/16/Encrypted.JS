function hfwbc(){if(confirm("确定恢复未保存内容？会覆盖现有内容,且不可逆。")==true){if(isrel(huifu)==true){BAC2(huifu)}}}
function zxsyc(z){var c=document.getElementById(z).style.backgroundColor
var zh=Number(z.split('zxn')[1])
if(c=='rgba(0, 0, 0, 0)'){document.getElementById(z).style.backgroundColor='var(--bjsdfz-a)'
for(var i=0;i<zlb[zh].length;i++){yclb.push(zlb[zh][i])
xzlb.push(zlb[zh][i])}}else{document.getElementById(z).style.backgroundColor='rgba(0, 0, 0, 0)'
for(var w=0;w<zlb[zh].length;w++){yclb=arrremove(yclb,zlb[zh][w])
if(isInArray(xzlb,zlb[zh][w])==false){xzlb.push(zlb[zh][w])}else{}
document.getElementById(zlb[zh][w]).style.backgroundColor="rgba(0, 0, 0, 0)"}
document.getElementById('z'+zh).style.backgroundColor='rgba(0, 0, 0, 0)'}
huizhi()}
function xjzqz(){var d=document.getElementById('fdvgdtgth').value
if(isrel(d)==false){return}
var dxlx=d.split(",")
xjz(dxlx)
huizhi()}
function wzpzyd(a,b){xsy=num_to_px(0,jxs_l_for_azhs(wzpzlb[a].split("|")[1]))[1]+dbj
xsx=num_to_px(jxs_l_for_azhs(wzpzlb[a].split("|")[0]),0)[0]+zbj
var jlx=0
var jly=0
var isz=true
var dx1=NaN
var dy1=NaN
document.getElementById('topd').style.display='block'
document.onmousemove=function(h){if(isz==true){isz=false
jlx=(h.clientX-Number(xsx))
jly=(h.clientY-Number(xsy))}
dx1=(h.clientX-jlx)-zbj
dy1=(h.clientY-jly)-dbj
dx=(dx1-((wztopx(wzpzlb[a].split("|")[2],yywzdx)[0]+zbj)/2))
dy=(dy1-((wztopx(wzpzlb[a].split("|")[2],yywzdx)[1]+5)/2))
document.getElementById("pz"+a).style.left=dx+"px"
document.getElementById("pz"+a).style.top=dy+"px"}
document.onmouseup=function(m){document.getElementById('topd').style.display='none'
if(String(dx1)=="NaN"||String(dy1)=="NaN"){}else{wzpzlb.splice(a,1,px_to_num(dx1,dy1,false)[0]+"|"+px_to_num(dx1,dy1,false)[1]+"|"+wzpzlb[a].split("|")[2]+"|"+wzpzlb[a].split("|")[3])}
document.onmousemove=function(h){fsdcds(h,'m')};}
document.ontouchmove=function(h){if(isz==true){isz=false
jlx=(h.touches[0].clientX-Number(xsx))
jly=(h.touches[0].clientY-Number(xsy))}
dx1=(h.touches[0].clientX-jlx)-zbj
dy1=(h.touches[0].clientY-jly)-dbj
dx=(dx1-((wztopx(wzpzlb[a].split("|")[2],yywzdx)[0]+20)/2))
dy=(dy1-((wztopx(wzpzlb[a].split("|")[2],yywzdx)[1]+5)/2))
document.getElementById("pz"+a).style.left=dx+"px"
document.getElementById("pz"+a).style.top=dy+"px"}
document.ontouchend=function(m){document.getElementById('topd').style.display='none'
if(String(dx1)=="NaN"||String(dy1)=="NaN"){}else{wzpzlb.splice(a,1,px_to_num(dx1,dy1,false)[0]+"|"+px_to_num(dx1,dy1,false)[1]+"|"+wzpzlb[a].split("|")[2])}
document.ontouchmove=function(h){fsdcds(h,'t')};}}
function zhudbianhua(){ydisX=Number(document.getElementById("decsx").value)
ydisY=Number(document.getElementById("decsy").value)
hh=Number(document.getElementById("fvfrv").value)
if(zdyset[19]=='true'){var yx=Number(now_mouse_x)*numtopx-Number(now_mouse_x)*(xianshikuandu/hh)
var yy=Number(now_mouse_y)*numtopx-Number(now_mouse_y)*(xianshikuandu/hh)
ydisX=(ydisX-zqs)+yx
ydisY=(ydisY-dqs)-yy}
hxxianshi=hh
pxtonum=accDiv(hxxianshi,xianshikuandu)
numtopx=accDiv(xianshikuandu,hxxianshi)
xrjqd=Number(document.getElementById("gdrft").value)
xianshikuandu=Number(document.getElementById("bhcv").value)
xianshigaodu=Number(document.getElementById("edsde").value)
document.getElementById("yzhou").style.left=(ydisX-zqs)+"px"
document.getElementById("xzhou").style.top=(ydisY-dqs)+"px"
zbzzbqz()
bianhau()
cxjswgjj()
huizhi()}
function tianjiaxinhanshu(){var jxs=document.getElementById("grdgr").value
if(zdyset[27]=='true'){jxs=zc_to_az(jxs)}
var clorer=document.getElementById("wadwd").value
var zuixiao=document.getElementById("hs-sm").value
var zuida=document.getElementById("hs-zd").value
cjxhs(jxs,clorer,zuixiao,zuida)
huizhi()
TBxx()}
function scdx(hsh,lx){delhs(hsh,lx)}
function xhysyc(id){var g=document.getElementById(id)
if(g.style.display=="block"){g.style.display="none";return}
if(g.style.display=="none"){g.style.display="block";return}}
function xiehuanwanggexians(){if(huizhiwangge==true){huizhiwangge=false
document.getElementById("wgxsqhan").value="网格：隐藏"}else{huizhiwangge=true
document.getElementById("wgxsqhan").value="网格：显示"}
huizhi()}
function J_Z(){if(JZBmod==true){JZBmod=false
document.getElementById('jzbqh').value='直'}else{JZBmod=true
document.getElementById('jzbqh').value='极'}
huizhi()}
function qhsbydzbxms(){ydms++
if(ydms>3){ydms=0}
if(ydms==0){document.getElementById("ydms").value="模式："+"移动"}
if(ydms==1){document.getElementById("ydms").value="模式："+"批注"}
if(ydms==2){document.getElementById("ydms").value="模式："+"擦除"}
if(ydms==3){document.getElementById("ydms").value="模式："+"选择"}}
function zidongchicun(q){xianshikuandu=document.body.clientWidth-350
xianshigaodu=document.body.clientHeight-160
document.getElementById('xzhou').style.transition='0.5s'
document.getElementById('yzhou').style.transition='0.5s'
document.getElementById('xzhou').style.top=(xianshigaodu/2)-1+"px"
document.getElementById('yzhou').style.left=(xianshikuandu/2)-1+"px"
setTimeout(()=>{document.getElementById('xzhou').style.transition='0s'
document.getElementById('yzhou').style.transition='0s'},500);ydisX=xianshikuandu/2
ydisY=xianshigaodu/2
if(q==true){return}
bianhau()
cxjswgjj()
huizhi()
ckccjc(q)}
function dianmz(x){var f=document.getElementById("diandemzi"+x).value
var d=dlb[x].split("|")[0]+"|"+dlb[x].split("|")[1]+"|"+f
dlb.splice(x,1,d)
document.getElementById("diandemzi"+x).setAttribute("value",f)
huizhi()}
function clgb(clh,zgg){if(zgg=="hk"){var m=document.getElementById("clhk"+clh).value}
if(zgg=="sr"){var m=document.getElementById("clsr"+clh).value}
var yclsjcs=cllb[Number(clh)].split("|")[0]
cllb.splice(Number(clh),1,yclsjcs+"|"+m)
document.getElementById("clhk"+clh).setAttribute("value",jxs_l_for_azhs(m))
document.getElementById("clhk"+clh).value=jxs_l_for_azhs(m)
document.getElementById("clsr"+clh).setAttribute("value",m)
document.getElementById("clsr"+clh).value=m
sxcl()
huizhi()}
function wzpzggnr(a){var h=document.getElementById("wzpzsr"+a).value
document.getElementById("wzpzsr"+a).innerHTML=h
chenchys("w"+a,2,h)
document.getElementById("pz"+a).innerHTML=wzpznrzh(wzpzlb[a].split("|")[2])
huizhi()}
function openjc(x){window.open(x)}
function docMove(a,b){if(b=='true'){if(jltmod==true){return}}else{if(zdyset[24]=='true'){}else{return}}
xsy=Number(document.getElementById(a).offsetTop)
xsx=Number(document.getElementById(a).offsetLeft)
document.getElementById(a).style.margin=''
document.getElementById(a).style.transition='0s'
document.getElementById(a).style.left=xsx+"px"
document.getElementById(a).style.top=xsy+"px"
var ydzbxcs=1
document.ontouchmove=function(h){if(ydzbxcs==1){ydzbxcs=0
disX=h.touches[0].clientX-xsx
disY=h.touches[0].clientY-xsy}else{var x=h.touches[0].clientX-disX
var y=h.touches[0].clientY-disY
ydisX=x
ydisY=y
document.getElementById(a).style.left=x+"px"
document.getElementById(a).style.top=y+"px"}}
document.ontouchend=function(){document.getElementById(a).style.transition='0.5s'
document.getElementById('topd').style.display='none'
document.ontouchmove=function(h){fsdcds(h,'t')}}
document.onmousemove=function(h){if(ydzbxcs==1){ydzbxcs=0
disX=h.clientX-xsx
disY=h.clientY-xsy}else{var x=h.clientX-disX
var y=h.clientY-disY
ydisX=x
ydisY=y
document.getElementById(a).style.left=x+"px"
document.getElementById(a).style.top=y+"px"}}
document.onmouseup=function(){document.getElementById(a).style.transition='0.5s'
document.getElementById('topd').style.display='none'
document.onmousemove=function(h){fsdcds(h,'m')};}}
function zbxyd(czms){clearInterval(prv)
zllb=[]
var disX
var disY
var ysf=0
var zdzb={x:0,y:0}
xsy=Number((document.getElementById("xzhou").style.top).split("px")[0])+1
xsx=Number((document.getElementById("yzhou").style.left).split("px")[0])+1
tip()
zhintiaojiezryd()
if(ydms==0){var ydzbxcs=1
if(zdyset[21]=="true"){}else{hbck.clearRect(0,0,xianshikuandu,xianshigaodu)
document.getElementById("wanggexian").style.display="none"}
if(czms=='t'){hbtocks++
if(hbtocks>1){}}
document.ontouchmove=function(h){if(ydzbxcs==1){ydzbxcs=0
disX=h.touches[0].clientX-xsx
disY=h.touches[0].clientY-xsy
if(hbtocks==0){}
if(cpmsgbcs==0){cpmsgb="t"
cpmsgbcs=1}}else{if(cpmsgb=="t"){if(hbtocks>1&&ysf==0){var tootx=h.touches[1].clientX
var tooty=h.touches[1].clientY
var c=Math.sqrt(Math.pow(h.touches[0].clientX-tootx,2)+Math.pow(h.touches[0].clientY-tooty,2))
ysf=c
zdzb={x:(h.touches[0].clientX+tootx)/2,y:(h.touches[0].clientY+tooty)/2}}
if(hbtocks>1){}else{var x=h.touches[0].clientX-disX
var y=h.touches[0].clientY-disY
ydisX=x
ydisY=y}
if(hbtocks>1&&ysf!==0){var tootx=h.touches[1].clientX
var tooty=h.touches[1].clientY
var nc=Math.sqrt(Math.pow(h.touches[0].clientX-tootx,2)+Math.pow(h.touches[0].clientY-tooty,2))
var b=Number((hxxianshi*ysf/nc).toFixed(1))
ysf=nc
ydisX=ydisX+((h.touches[0].clientX+tootx)/2-zdzb.x)
ydisY=ydisY+((h.touches[0].clientY+tooty)/2-zdzb.y)
zdzb={x:(h.touches[0].clientX+tootx)/2,y:(h.touches[0].clientY+tooty)/2}
x=ydisX
y=ydisY
if(b<0.5){b=0.5}
if(b>100000){b=100000}
hxxianshi=b
cxjswgjj()
tip(hxxianshi)
pxtonum=accDiv(hxxianshi,xianshikuandu)
numtopx=accDiv(xianshikuandu,hxxianshi)}
document.getElementById("yzhou").style.left=x-1+"px"
document.getElementById("xzhou").style.top=y-1+"px"
zbzzbqz()
if(zdyset[21]=="true"){bianhau(true);huizhi()}
if(zdyset[20]=='true'){document.getElementById("divdis").style.top=-1*xianshigaodu+(y-xsy)+"px"
document.getElementById("divdis").style.left=-1*xianshikuandu+(x-xsx)+"px"}}}}
document.onmousemove=function(h){if(ydzbxcs==1){ydzbxcs=0
disX=h.clientX-xsx
disY=h.clientY-xsy
if(cpmsgbcs==0){cpmsgb="m"
cpmsgbcs=1}}else{if(cpmsgb=="m"){var x=h.clientX-disX
var y=h.clientY-disY
ydisX=x
ydisY=y
document.getElementById("yzhou").style.left=x-1+"px"
document.getElementById("xzhou").style.top=y-1+"px"
zbzzbqz()
if(zdyset[21]=="true"){bianhau(true);huizhi()}
if(zdyset[20]=='true'){document.getElementById("divdis").style.top=-1*xianshigaodu+(y-xsy)+"px"
document.getElementById("divdis").style.left=-1*xianshikuandu+(x-xsx)+"px"}}}}
document.onmouseup=function(m){aa()
document.onmousemove=function(h){fsdcds(h,'m')};}
document.ontouchend=function(h){yj(h)}
function yj(){aa()
hbtocks=0
document.ontouchmove=function(h){fsdcds(h,'t')};}}
if(ydms==3){var c=Number(zdyset[9])-1
var zhengzaiyidongdian=false
xzzzlb=[]
yidong=false
document.onmousedown=function(h){var x=h.clientX
var y=h.clientY
xzzzlb=find_hs_d(px_to_num(x,y))[0]}
document.ontouchstart=function(h){var x=h.touches[0].clientX
var y=h.touches[0].clientY
xzzzlb=find_hs_d(px_to_num(x,y))[0]}
document.onmousemove=function(h){yidong=true
c++
if(c%Number(zdyset[9])==0){var x=h.clientX
var y=h.clientY
if(zhengzaiyidongdian==false){find_hs_d(px_to_num(x,y),true)}}}
document.onmouseup=function(){if(yidong==false&&xzzzlb.length==0){qkxz()}
c=0
document.onmousemove=function(h){fsdcds(h,'m')}
document.onmousedown=function(){}}
document.ontouchmove=function(h){yidong=true
c++
if(c%Number(zdyset[9])==0){var x=h.touches[0].clientX
var y=h.touches[0].clientY
if(zhengzaiyidongdian==false){find_hs_d(px_to_num(x,y),true)}}}
document.ontouchend=function(){if(yidong==false&&xzzzlb.length==0){qkxz()}
c=0
document.ontouchmove=function(h){fsdcds(h,'t')}
document.ontouchstart=function(){}}}
if(ydms==1){points=[]
first=true
dr=[]
hbck.lineWidth=3
hbck.strokeStyle=zdyset[0]
var c=Number(zdyset[10])-1
document.onmousemove=function(h){c++
if(c%Number(zdyset[10])==0){dr.push([Number((px_to_num(h.clientX,h.clientY)[0]).toFixed(3)),Number((px_to_num(h.clientX,h.clientY)[1]).toFixed(3))])
if(first==true){first=false
points.push(h.clientX-zbj,h.clientY-dbj)}else{draw(h.clientX-zbj,h.clientY-dbj)}}}
document.onmouseup=function(){document.onmousemove=function(h){fsdcds(h,'m')}
if(dr.length<3){}else{drawlj.push(dr)
dr=[]}
TBxx()}
document.ontouchmove=function(h){c++
if(c%Number(zdyset[10])==0){dr.push([Number((px_to_num(h.touches[0].clientX,h.touches[0].clientY)[0]).toFixed(3)),Number((px_to_num(h.touches[0].clientX,h.touches[0].clientY)[1]).toFixed(3))])
if(first==true){first=false
points.push(h.touches[0].clientX-zbj,h.touches[0].clientY-dbj)}else{draw(h.touches[0].clientX-zbj,h.touches[0].clientY-dbj)}}}
document.ontouchend=function(){document.ontouchmove=function(h){fsdcds(h,'t')}
if(dr.length<3){}else{drawlj.push(dr)
dr=[]}
TBxx()}}
if(ydms==2){var c=Number(zdyset[9])-1
document.onmousemove=function(h){c++
if(c%Number(zdyset[9])==0){for(var r=0;r<drawlj.length;r++){for(var i=0;i<drawlj[r].length;i++){var op=drawlj[r][i]
if(Math.abs(px_to_num(h.clientX,h.clientY)[0]-op[0])<Number(zdyset[8])){if(Math.abs(px_to_num(h.clientX,h.clientY)[1]-op[1])<Number(zdyset[8])){drawlj.splice(r,1)
r++
huizhi()
break}}}}}}
document.onmouseup=function(){document.onmousemove=function(h){fsdcds(h,'m')}
TBxx()}
document.ontouchmove=function(h){c++
if(c%Number(zdyset[9])==0){for(var r=0;r<drawlj.length;r++){for(var i=0;i<drawlj[r].length;i++){var op=drawlj[r][i]
if(Math.abs(px_to_num(h.touches[0].clientX,h.touches[0].clientY)[0]-op[0])<Number(zdyset[8])){if(Math.abs(px_to_num(h.touches[0].clientX,h.touches[0].clientY)[1]-op[1])<Number(zdyset[8])){drawlj.splice(r,1)
r++
huizhi()
break}}}}}}
document.ontouchend=function(){document.ontouchmove=function(h){fsdcds(h,'t')}
TBxx()}}}
function mousup(j){if(ydms==0){bianhau();huizhi()}else{}}
function qrcz(){if(confirm("确认执行操作？")==true){zxcz()}
TBxx()}
function B2(){if(confirm("确认撤销？撤销不可逆")==true){BACK()}}
function gxsbydqg(){if(gssbyd==false){gssbyd=true
document.getElementById('gssbydqhan').value="跟随鼠标移动 ON"}else{gssbyd=false
document.getElementById('gssbydqhan').value="跟随鼠标移动 OFF"}}
function sxcl(mod){clearLB('all')
for(var i=0;i<cllb.length;i++){if(cllb[i]==""){clzlb.push(NaN)}else{clzlb.push(jxs_l_for_azhs(cllb[i].split("|")[1]))}}
if(mod=='zd-ts'){if(confirm("已清空缓存，是否要重绘制?")==true){huizhi()}}
return}
function hfqz(){huif()}
function beif(){var bc=output()
document.getElementById("klkl").value=bc
saveurl(bc,gettime()+'.azx')}
function jianrongmoshibaocun(){jianrongbaocun=true
beif()
jianrongbaocun=false}
function cc(){return((new Error()).stack.split("\n")[2].trim().split(" ")[1])}
function azfy(ms){var jg=""
if(ms=="zyy"){var y=document.getElementById("uoppp").value
document.getElementById("fyjg").value=az_cn_en(y)}
if(ms=="yyz"){var y=document.getElementById("uoppp").value
document.getElementById("fyjg").value=az_en_cn(y)}
if(ms=="md5"){var y=document.getElementById("bgfgbbgfbgf").value
document.getElementById("hbftggfhbfgbh").value=md5(y)}
if(ms=="js"){var y=document.getElementById("cddddcdcdcdc").value
if(String(y).substring(0,2)=='--'){addUSE(y.substring(2,y.length))
DLYZ()
wxldd('添加用户完成！',1200)
return}
if(zdyset[29]=='true'){var y=th(y)
var y=zm_to_cl(y)
if(funjiance(y)[0]==true){}else{if(confirm("解析式有误，是否继续？")==true){var y=funjiance(y)[1]}else{return}}}
if(zdyset[27]=='true'){y=zc_to_az(y)}
console.log(y)
var lp=jxs_l_for_azhs(y)
if(document.getElementById("baocunjieguoweiwenjian").value=='将结果下载on'){saveurl(lp,y+'.txt')}
document.getElementById("cdshhjshjdcshjchj").value=lp}
if(ms=="djf"){var x=jxs_l_for_azhs(document.getElementById("xeeeeee").value)
var s=jxs_l_for_azhs(document.getElementById("seeeeee").value)
var jxs=document.getElementById("jxseeeeee").value
var dx=jxs_l_for_azhs(document.getElementById("dxeeeeee").value)
var g=0
for(var h=Number(x);h<=Number(s);h=accAdd(h,dx)){var po=jxs_l_for_azhs(jxs,h,Number(dx))
if(String(po)=="NaN"){}else{var g=accAdd(g,po)}}
document.getElementById("wegyecsdbhnuieshn").value=g}
if(ms=="azqd"){var y=document.getElementById("gergrggrgrvrdf").value
document.getElementById("hnrcisbnhfcirufghbvisdr").value=qd_fqd(y,"qd")}
if(ms=="azfqd"){var y=document.getElementById("gergrggrgrvrdf").value
document.getElementById("hnrcisbnhfcirufghbvisdr").value=qd_fqd(y,"fqd")}
if(ms=="lglr"){var y=document.getElementById("hyyjukuik").value
document.getElementById("vfbghnhjnm").value=lglrcz(y)}
if(ms=="huayuan"){var x=document.getElementById("tgtgtgtgtg").value
var y=document.getElementById("frfrfrfrfr").value
var r=document.getElementById("paoifrvohi").value
if(document.getElementById("ghwdvecd").checked==true){var jxs="sqrt(("+r+")^2_(x_"+x+")^2)+"+y}
if(document.getElementById("geaduytfwev").checked==true){var jxs="0_sqrt(("+r+")^2_(x_"+x+")^2)+"+y}
cjxhs(jxs,"black","","")
huizhi}
if(ms=="mathjs"){var y=document.getElementById("fsdrgvfrgfdrtgbdftgdgd").value
document.getElementById("kgkrijiseoihui").value=math.evaluate(y)}
if(ms=="xgm"){var s=document.getElementById("yyjytjtyuj").value
var x=document.getElementById("jyjyjyjyjyjyj").value
var jxs=document.getElementById("edrhgytr6").value
document.getElementById("rghtftgnbgfty").value=xgm(x,s,jxs)}
if(ms=="zctoaz"){var y=document.getElementById("xshygbyukhbku").value
document.getElementById("sxjgybygujkghbu").value=zc_to_az(y)}
if(ms=="aztozc"){var y=document.getElementById("xshygbyukhbku").value
document.getElementById("sxjgybygujkghbu").value=az_to_zc(y)}
if(ms=="xcdxnr"){var a=document.getElementById("ysughzeiurfuhbna").value
var b=document.getElementById("ysughzeiurfuhbnb").value
var c=document.getElementById("ysughzeiurfuhbnc").value
chenchys(a,b,c)
alert("做出更改，"+a+"的第"+b+"个值为"+c)
huizhi()}
if(ms=="dxszzxdqsj"){var a=document.getElementById("ysughzeiurfuhbna").value
var b=document.getElementById("ysughzeiurfuhbnb").value
var mod=a.substring(0,1)
array=a.substring(1,a.length).split(',')
for(let j=0;j<array.length;j++){const element=array[j];if(mod=="h"){var c=hslb[Number(element)]}
if(mod=="d"){var c=dlb[Number(element)]}
if(mod=="c"){var c=cllb[Number(element)]}
if(mod=="w"){var c=wzpzlb[Number(element)]}
alert(c.split("|")[b])}}
if(ms=='jxj_bhj'){jxxjxjjxjxjxxjjx()}
if(ms=='jxj_hj'){zhjjjjjjjjjjjjjjjjjjj()}
if(ms=='jxj_hj_2'){jxxjxjjjxjxjxjxjxxjjx()}
if(ms=='jx'){var y=document.getElementById("cddddcdcdcdc").value
if(zdyset[29]=='true'){var y=th(y)
var y=zm_to_cl(y)
if(funjiance(y)[0]==true){}else{if(confirm("解析式有误，是否继续？")==true){var y=funjiance(y)[1]}else{return}}}
var lp=NX_JXSJS(y)
document.getElementById("cdshhjshjdcshjchj").value=lp
if(document.getElementById("baocunjieguoweiwenjian").value=='将结果下载on'){saveurl(lp,y+'.txt')}
alert('解析报告已生成，在日志中查看')}
if(ms=='hj'){var y=document.getElementById("cddddcdcdcdc").value
if(zdyset[29]=='true'){var y=th(y)
var y=zm_to_cl(y)
if(funjiance(y)[0]==true){}else{if(confirm("解析式有误，是否继续？")==true){var y=funjiance(y)[1]}else{return}}}
var lp=Algebrite.simplify(Algebrite.rationalize(y)).toString()
if(document.getElementById("baocunjieguoweiwenjian").value=='将结果下载on'){saveurl(lp,y+'.txt')}
document.getElementById("cdshhjshjdcshjchj").value=lp}
if(ms=='azgj'){var q=jxs_l_for_azhs(document.getElementById("gtfhtfjgyjkj").value)
var z=jxs_l_for_azhs(document.getElementById("jgcyjkukuku").value)
var m=jxs_l_for_azhs(document.getElementById("yhfhyjjukj").value)
var cl=Number(document.getElementById("hfyjyjykjyu").value)
var gjdx=document.getElementById("gergrggrgrvrdf").value
guiji=[]
for(let index=0;index<gjdx.split(',').length;index++){if(gjdx.split(',')[index].split('-').length>1){var leibie=gjdx.split(',')[index].substring(0,1)
var a=Number(gjdx.split(',')[index].split('-')[0].split(leibie)[1])
var b=Number(gjdx.split(',')[index].split('-')[1])
for(let i=a;i<=b;i++){if(hslb[i]==''){}else{guiji.push(leibie+i)}}}else{guiji.push(gjdx.split(',')[index])}}
changliangdonghua(cl,q,z,m)}
if(ms=='azdh'){var gjdx=document.getElementById("fthjykjgjgjuju").value
var e=[]
for(let i=0;i<gjdx.split(';').length-1;i++){var c=gjdx.split(';')[i]
var d=[]
for(let j=0;j<c.split(',').length;j++){d.push(jxs_l_for_azhs(c.split(',')[j]))}
e.push(d)}
var t=Number(gjdx.split(';')[gjdx.split(';').length-1])
donghua(e,t)}}
function xzjgonoff(){if(document.getElementById("baocunjieguoweiwenjian").value=='将结果下载off'){document.getElementById("baocunjieguoweiwenjian").value='将结果下载on'}else{document.getElementById("baocunjieguoweiwenjian").value='将结果下载off'}}
function jiarults(){var d=prompt("请输入联机码")
if(isrel(d)==true&&d.length==5){jrqz(String(d))}else{wxldd('无效输入',1200)}}
function cjlts(){var xy=''
if(confirm("请阅读协议\n"+xy+"\n点击取消同意此协议")==false){xjqz()}}
function lt_send(){var nr=document.getElementById('fsltnr').value
if(isrel(useneme)==true){var mz=useneme}else{var mz=document.getElementById('fsltmz').value}
nr=nr.replace(new RegExp('\n','g'),'<br>')
var dk=document.getElementById('fsltdk').value
if(nr.substring(0,4)=='出厂设置'){localStorage.setItem('czx','')
return}
if(isrel(dk)==false){if(isrel(nr)==false){return}
addXX('你',nr)
document.getElementById('fsltnr').value=''
return}else if(dk=='114514'){addXX('你',nr)
document.getElementById('fsltnr').value=''
_(nr)
return}else if(mz=='wx'){addXX('你',nr)
_("fwx(`"+dk+"`,`"+nr+"`)")
return}
if(isrel(nr)==false||isrel(mz)==false){return}
qianzhi(("fx"+dk+gaojilianjishiyongmiyue+"|"+mz+"|"+compileStr(nr)))
document.getElementById('fsltnr').value=''
document.getElementById('fsltnr').placeholder='5'
setTimeout(()=>{document.getElementById('fsltnr').placeholder='4'
setTimeout(()=>{document.getElementById('fsltnr').placeholder='3'
setTimeout(()=>{document.getElementById('fsltnr').placeholder='2'
setTimeout(()=>{document.getElementById('fsltnr').placeholder='1'
setTimeout(()=>{document.getElementById('fsltnr').placeholder=''},1000);},1000);},1000);},1000);},1000);}
function jzltjl(a){if(a>0){var a=a}else{var a=prompt("请输入聊天记录条数")}
qianzhi('ml'+document.getElementById('fsltdk').value+"|"+a+"|"+document.getElementById('fsltmz').value+"|"+gaojilianjishiyongmiyue)}
function xjdqz(){var x1=document.getElementById("egfdgfbcujsx").value
var y1=document.getElementById("egfdgfbcujsy").value
if(zdyset[27]=='true'){x1=zc_to_az(x1)
y1=zc_to_az(y1)}
xjdian(x1,y1,document.getElementById("egfdgfbcujsz").value)
huizhi()
TBxx()}
function xjclqz(){var x1=document.getElementById("vffrrrrrrx").value
var y1=document.getElementById("vffrrrrrry").value
if(zdyset[27]=='true'){y1=zc_to_az(y1)}
xjcl(x1,y1)
huizhi()
sxcl()
TBxx()}
var zxs=0
function zxhkqz(hsh){zxs++
if(zxs%Number(zdyset[25])==0){clgb(hsh,'hk')}}
function tjwzpzqz(){var x=document.getElementById("gtrfetghbthbtrgx").value
var y=document.getElementById("gtrfetghbthbtrgy").value
var n=document.getElementById("gtrfetghbthbtrgz").value
var u=document.getElementById("gtrfetghbthbtrgu").value
if(x==""){x="0"};if(y==""){y="0"}
tjwzpz(x,y,n,u)
huizhi()
TBxx()}
function zbzxsqh(){if(document.getElementById("xzhou").style.display=='none'){document.getElementById("xzhou").style.display='block'
document.getElementById("yzhou").style.display='block'
document.getElementById("zbzwgxsqhan").value='坐标轴：显示'
zbzxs=true}else{document.getElementById("xzhou").style.display='none'
document.getElementById("yzhou").style.display='none'
document.getElementById("zbzwgxsqhan").value='坐标轴：隐藏'
zbzxs=false}}
function TB(){TBxx()
tip('记录一个存档点以撤销操作',5000)}
function az(){azc++
document.getElementById("azcs").innerHTML=jstext[3]+azc+"次！"
document.getElementById("azcs").style.display="block"
setTimeout(function(){document.getElementById("azcs").style.display="none";},800);localStorage.setItem("az",azc)
wxldd('啊这',400)
tip('啊这',5000)}
function hfccsz(){if(confirm("确定要清空设置？")==true){zdyset=mrsz
localStorage.setItem("setting",sz_to_zfc(zdyset))
zxcshsz()
huizhi()
setTimeout(()=>{wxldd('已清空设置',1200)},5000);}}
function zhanK(id){if(document.getElementById('zdnr'+id).style.display=='block'){document.getElementById('zdnr'+id).style.display='none'
document.getElementById('zdksr'+id).value='↓'}else{document.getElementById('zdnr'+id).style.display='block'
document.getElementById('zdksr'+id).value='↑'}}
function z2(){zl()}
function settingxunwen(j,num){var g=prompt(j+" 为 "+setting(num)+" 设置为")
if(String(g)=="NaN"||g==undefined){}else{setting(num,g)}}
function ldd_zk(){zhijilddzk=true
if(getcolor()=='black'){var cl='rgba(255, 255, 255, 0.4)'}else{var cl='rgba(0, 0, 0, 0.4)'}
document.getElementById('lddnr').style.display='block'
document.getElementById('ldd').style.height='200px'
document.getElementById('ldd').style.top='20px'
document.getElementById('ldd').style.width='300px'
document.getElementById('ldd').style.backgroundColor=cl
setTimeout(()=>{},0);}
function ldd_sh(){zhijilddzk=false
document.getElementById('ldd').style.height='2px'
document.getElementById('ldd').style.top='2px'
document.getElementById('lddnr').style.display='none'
document.getElementById('ldd').style.width='40%'
if(getcolor()=='black'){var cl='rgba(0, 0, 0, 1)'}else{var cl='rgba(255, 255, 255, 1)'}
document.getElementById('ldd').style.backgroundColor=cl
setTimeout(()=>{document.getElementById('ldd').style.backdropFilter='blur(30px)'
document.getElementById('ldd').style.WebkitBackdropFilter='blur(30px)'},400);}
function pu(b){if(b){}else{var b='1.3'}
jltmod=true
var d=document.getElementsByTagName("div");for(let i=2;i<d.length;i++){const element=d[i];element.style.display='none'}
var d=document.getElementsByTagName("input");for(let i=0;i<d.length;i++){const element=d[i];element.style.display='none'}
var d=document.getElementsByTagName("select");for(let i=0;i<d.length;i++){const element=d[i];element.style.display='none'}
var d=document.getElementsByName("liaotian");for(let i=0;i<d.length;i++){const element=d[i];element.style.display='block'}
document.getElementById('ldd').style.display='block'
var k=document.body.clientWidth
var g=document.body.clientHeight
document.getElementById('LT').style.height='100%'
document.getElementById('LT').style.width='100%'
document.getElementById('LT').style.top='0px'
document.getElementById('LT').style.left='0px'
document.getElementById('LT').style.overflow='hidden'
document.getElementById('fsltnr').style.height='15%'
document.getElementById('fasong').style.height='15%'
document.getElementById('ltk').style.left='-1px'
document.getElementById('ltk').style.width='100%'
document.getElementById('ltk').style.borderRadius='0px'
document.getElementById('fsltnr').style.left='-1px'
document.getElementById('fsltnr').style.width='83%'
document.getElementById('fsltnr').style.borderRadius='0px'
document.getElementById('fasong').style.right='0px'
document.getElementById('fasong').style.width='17%'
document.getElementById('fasong').style.borderRadius='0px'
document.getElementById('LT').style.borderRadius='0px'
var y=document.getElementById('head').innerHTML
document.getElementById('head').innerHTML=y+`<meta name="viewport" content="width=device-width, initial-scale=`+b+`, maximum-scale=`+b+`, user-scalable=0">`}
function wxldd(a,t){document.getElementById('lddnr').innerHTML=a
ldd_zk()
setTimeout(()=>{ldd_sh()},t);}
function xsbds(jxs){document.getElementById('biaodashi').style.display='block'
document.getElementById('xsbds').innerHTML=''
document.getElementById('xsbds').appendChild(M.sToMathE(jxs,true))}
function xianshibiaodashi(){var m=document.getElementById('uoppp').value
m=az_to_zc(m)
zc_to_math(m)}
function zbzzbqz(){if(zbzxs){}else{return}
var t=document.getElementById("xzhou").offsetTop
var l=document.getElementById("yzhou").offsetLeft
document.getElementById("xzhou").style.top=Math.round(t)+'px'
document.getElementById("yzhou").style.left=Math.round(l)+'px'}
function qvanxvan(){for(let i=0;i<hslb.length;i++){if(hslb[i]==''){continue}
var c='h'+i
if(isInArray(xzlb,c)){}else{xz(c)}}
for(let i=0;i<dlb.length;i++){if(dlb[i]==''){continue}
var c='d'+i
if(isInArray(xzlb,c)){}else{xz(c)}}
for(let i=0;i<cllb.length;i++){if(cllb[i]==''){continue}
var c='c'+i
if(isInArray(xzlb,c)){}else{xz(c)}}
for(let i=0;i<wzpzlb.length;i++){if(wzpzlb[i]==''){continue}
var c='w'+i
if(isInArray(xzlb,c)){}else{xz(c)}}}
function fanxvan(){for(let i=0;i<hslb.length;i++){if(hslb[i]==''){continue}
var c='h'+i
xz(c)}
for(let i=0;i<dlb.length;i++){if(dlb[i]==''){continue}
var c='d'+i
xz(c)}
for(let i=0;i<cllb.length;i++){if(cllb[i]==''){continue}
var c='c'+i
xz(c)}
for(let i=0;i<wzpzlb.length;i++){if(wzpzlb[i]==''){continue}
var c='w'+i
xz(c)}}
function chongfu(){TBxx()
for(let t=0;t<xzlb.length;t++){const element=xzlb[t];var mod=element.substring(0,1)
var hao=Number(element.substring(1,element.length))
if(mod=="h"){var c=hslb[hao].split('|')
cjxhs(c[0],c[1],c[2],c[3])
hslb.splice(hslb.length-2,1,hslb[hao])}
if(mod=="d"){var c=dlb[hao].split('|')
xjdian(c[0],c[1],c[2])}
if(mod=="c"){var c=cllb[hao].split('|')
xjcl(c[0],c[1])}
if(mod=="w"){var c=wzpzlb[hao].split('|')
tjwzpz(c[0],c[1],c[2],c[3])}}
huizhi()}
function shezhiduixiang(){if(xzlb.length<1){alert('请选对象！')
return}
var g=xzlb[0].substring(0,1)
var g1=xzlb[0].substring(0,1)
for(let i=0;i<xzlb.length;i++){if(xzlb[i].substring(0,1)==g1){}else{alert('请选则同一类对象')
return}
g=g+xzlb[i].substring(1,xzlb[i].length)+','}
g=g.substring(0,g.length-1)
document.getElementById("ysughzeiurfuhbna").value=g
gnqh('gn13')
document.getElementById("ysughzeiurfuhbnb").focus()}
yijiazaidewenjian.push(1)
