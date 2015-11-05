/*
 * state: 0 错误，1 正确，2 说明 
 */

function showTime(date) { 
	var datetime = date.getFullYear() + "-"
	+ ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)) + "-"
	+ (date.getDate() < 10 ? "0" + date.getDate() : date .getDate()) + " " + (date.getHours() < 10 ? "0" + date.getHours() : date .getHours()) + ":" + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date .getMinutes()) + ":" + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date .getSeconds()); 
	return datetime; 
}
function show(id,state){
	if(state==0){
		$("#"+id+"_des").hide();
		$("#"+id+"_ok").hide();
		$("#"+id+"_false").show();
		$("#"+id).attr("class","false_input");
		return false;
	}else if(state==1){
		$("#"+id+"_des").hide();
		$("#"+id+"_false").hide();
		$("#"+id+"_ok").show();
		$("#"+id).attr("class","contentInput");
		return true;
	}else{
		$("#"+id+"_false").hide();
		$("#"+id+"_ok").hide();
		$("#"+id+"_des").show();
		$("#"+id).attr("class","contentInput");
		return true;
	}
}

function showfun(id,state){
	if(state==0){
		$("#"+id+"_des").hide();
		$("#"+id+"_ok").hide();
		$("#"+id+"_false").show();
		//$("#"+id).attr("class","false_input");
		return false;
	}else if(state==1){
		$("#"+id+"_des").hide();
		$("#"+id+"_false").hide();
		$("#"+id+"_ok").show();
		//$("#"+id).attr("class","registerInput");
		return true;
	}else{
		$("#"+id+"_false").hide();
		$("#"+id+"_ok").hide();
		$("#"+id+"_des").show();
		//$("#"+id).attr("class","registerInput");
		return true;
	}
}
function showpwd(id,state){
	if(state==1){
		$("#"+id+"_des").hide();
		$("#"+id+"_ok").hide();
		$("#"+id+"_false").show();
		$("#"+id).attr("class","false_input");
		return false;
	}
	if(state==0){
		$("#"+id+"_des").hide();
		$("#"+id+"_false").hide();
		$("#"+id+"_ok").show();
		$("#"+id).attr("class","type1");
		return true;
	}
	if(state==2){
		$("#"+id+"_false").hide();
		$("#"+id+"_ok").hide();
		$("#"+id+"_des").show();
		$("#"+id).attr("class","type1");
		return true;
	}
}

function checkemailformat(email){
	var e=jQuery.trim($("#"+email).val());
	if(e.length<1){
		return false;
	}
	
	if(!/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)){
		return false;
	}
	
	return true;
}

/*
 * 验证邮箱格式，可以为空
 */
function checkemail(email){
	var e=jQuery.trim($("#"+email).val());
	if(e.length<1){
		return true;
	}else if(!/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(e)){
		return false;
	}else return true;
}

function checkPassword(password){
	var pwd=$("#"+password).val();
	var len=getStringLength(pwd);
	if(len<6||len>32){
		return false;
	}
	if (!/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,32}$/.test(pwd)){
		return false;
	}
	else return true;
}

function checkPwd(password){
	var pwd=$("#"+password).val();
	var len=getStringLength(pwd);
	
	if(len==0){
		return 1;
	}
	
	if(len<6||len>32){
		return 2;
	}
	return 0;
}

function checkRepassword(password,repassword){
	var pwd=$("#"+password).val();
	var repwd=$("#"+repassword).val();
	if( (pwd==""||pwd==null) && pwd==repwd ) return true;
	var len=getStringLength(pwd);
	if(len<6 || len>32) return false;
	if(pwd==repwd)
		return true;
	return false;
}
function checkPhoneNumber(phoneNumber){
	var pNumber=$.trim($("#"+phoneNumber).val());
	if(/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})(\-[0-9]{1,4})?$/.test(pNumber)){
		return true;
	}else return false;
}
function checkMobile(mobile){
	var m=$.trim($("#"+mobile).val());
	if((/^13\d{9}$/.test( m )) |(/^15\d{9}$/.test( m ) )| (/^18\d{9}$/.test( m ))){
		return true;
	}
	return false;
}
function checkWebsite(url){
	var website=$.trim($("#"+url).val());
	if(website==""||website==null)return false;
	var len=getStringLength(website);
	if(len<4)return false;
	if((/^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\’:+!]*([^<>\"\"])*$/.test(website)) ){
		return true;
	}
	return false;
}
function checkNumber( num ,min,max){
	var n=$.trim($("#"+num).val());
    if( /^[0-9]+$/.test( n ) && n <=max && n >= min)
		return true;
	else return false;
}
/**
 * 
 * 允许格式：字母、数字、空格
 */
function checkString(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=str.length;
	if(len<minLen||len>maxLen){
		return false;
	}else if(!/[A-Za-z0-9\s]+/.test(str)){
		return false;
	}else return true;
}
/**
 * 
 * 允许格式：字母、数字、空格和汉字
 * 汉字算两个字符
 */
function checkCnString(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}else if(/^[a-zA-Z0-9\u4e00-\u9fa5\s\(\)]+$/.test(str)){
		return  true;
	}else return false;
}

/**
 * 
 * 允许格式：字母、数字、和汉字
 * 汉字算两个字符
 */
function checkCnAndEn(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}
	if(/^[a-zA-Z0-9\u4e00-\u9fa5]+$/.test(str)){
		return  true;
	}	
	return false;
}
/**
 * 验证真实名字
 * 允许格式：纯字母或者纯中文，不允许中英混合
 */
function checkRealname(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}
	if(/^[\u4e00-\u9fa5]+$/.test(str)){
		return true;
	}
	if(/^[a-zA-Z\s\(\)]+$/.test(str)){
		return true;
	} 
	return false;
}

/**
 * 验证小数
 * 允许格式：数字或者小数
 */
function checkFloat(id ,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}
    if( /^[0-9]+(\.\d{1,2})?$/.test(str) ){
		return true;
	}
	return false;
}
/**
 * 验证长度
 * 允许格式：任意
 */
function checkTextarea(id, minLen, maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	} 
	return true;
}
/**
 * 
 * 允许格式：字母、数字
 * 
 */
function checkEnAndNum(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}else if(/^[a-zA-Z0-9]+$/.test(str)){
		return  true;
	}else return false;
}

/**
 * 
 * 允许格式：数字
 * 
 */
function checkNum(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}else if(/^[0-9]+$/.test(str)){
		return  true;
	}else return false;
}

function checkPostcode(postcode) {
	var code = $.trim($("#"+postcode).val());
	if(/^[1-9]\d{5}$/.test(code))
		return true;
	else return false;
}
function fixLength(str,maxLen){
	var len=str.lenth;
	if(len>maxLen)
		return false;
	else return true;
}
/**
 *检查该数字小数位是否少于2位
 */
function checkTwoPoint(num) {
	if(!isNaN(num)) {
		var numStr = num + "";
		var index = numStr.indexOf('.');
		if(index >= 0) {
			var last = numStr.substring(index+1, numStr.length);
			if(last.length <=2) {
				return true;
			}
		} else {
			return true;
		}
	}
	return false;
}
/**
 *检查该数字小数位是否为0
 */
function checkNoPoint(num) {
	if(!isNaN(num)) {
		var numStr = num + "";
		var index = numStr.indexOf('.');
		if(index >= 0) {
			var first = numStr.substring(0, index);
			if(first.length > 0) {
				var tmpFloat = parseFloat(first);
				var numFloat = parseFloat(num);
				if(numFloat == tmpFloat) {
					return true;
				}
			}
		} else {
			return true;
		}
	}
	return false;
}
/**
 *检查起始日期是否小于结束日期
 */
function checkDate(start,end){
	var startString=$.trim($("#"+start).val());
	var endString=$.trim($("#"+end).val());
	if ( (getStringLength(startString)==0) || (getStringLength(endString)==0) ){
		return true;
		}
	var startDate= startString.replace(/\-/g,"");
	var endDate  = endString.replace(/\-/g,"");
	if (endDate>=startDate)
		return true;
	return false;
}
/**
 *检查验证码是否填写正确
 */
function checkCaptcha(id){
	var v=$.trim($("#"+id).val());
	var NameOfCookie="randomString";
	begin = document.cookie.indexOf(NameOfCookie+"=");   
	if (begin != -1)      
	{
	begin += NameOfCookie.length+1;//cookie值的初始位置   
	end = document.cookie.indexOf(";", begin);//结束位置   
	if (end == -1) end = document.cookie.length;//没有;则end为字符串结束位置   
	var randomString=document.cookie.substring(begin, end);
	if (randomString.toLowerCase()==v.toLowerCase())
		return true;
	return false;
	}
}
/**
 *检查权限uri的合法性
 */
function checkPermissionUri(id,minLen,maxLen){
	var uri=$.trim($("#"+id).val());
	var len=getStringLength(uri);
	if(len<minLen||len>maxLen){
		return false;
	}
	if(/^[a-z]+(\.do)$/.test(uri))
		return true;
	return false;
}

/*
 * showerror
 */
function showerr(e, err) {
    var p = document.createElement("p");
    p.className = "error_one";
    p.innerHTML = '<img src="images/pic_1.jpg" style="vertical-align:middle" /><span>' + err + '</span>';
    $("#"+e).parent().append(p);
}
/*
 * removeerror
 */
function removeError(e) {
	$("#"+e).parent().children().each(function () {
        if (this.className == "error_one") {
            this.parentNode.removeChild(this);
            return;
        }
    });
}
/*
 * showok
 */
function showok(e) {
    var p = document.createElement("p");
    p.className = "error_one";
    p.innerHTML = '<img src="images/pic_2.jpg" style="vertical-align:middle" />';
    $("#"+e).parent().append(p);
}
/*
 * 以下为实时验证代码
 */
var XMLHttp = false; 
try { 
XMLHttp = new ActiveXObject("MsXML2.XMLHTTP"); 
} catch (e) { 
try { 
XMLHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
} catch (e2) { 
XMLHttp = false; 
} 
} 
if (!XMLHttp && typeof XMLHttpRequest != 'undefined') { 
XMLHttp = new XMLHttpRequest(); 
}
var check=true;
function callServer(e,id) { 
var name = document.getElementById(e).value; 
if ((name == null) || (name == "")) return; 
var url = "check"+e+".do?name=" + encodeURIComponent(encodeURIComponent(name));
if (id!=null)
url=url+"&id="+$.trim($("#"+id).val());
XMLHttp.open("GET", url, true); 
XMLHttp.onreadystatechange = function(){updatePage(e)};
; 
XMLHttp.send(null);
if (check==true)
	return true;
else
	return false;
} 
function updatePage(e) { 
if (XMLHttp.readyState < 4) { 
} 
if (XMLHttp.readyState == 4) { 
var response = XMLHttp.responseText; 
if (response=="true")
{
removeError(e);
		showerr(e,"用户名重复！");
check= false;		
} 
		else{
removeError(e);
		showok(e);	  
check= true;
		}
} }

/*
*实时验证
*/
/*
var XMLHttp = false; 
try { 
   XMLHttp = new ActiveXObject("MsXML2.XMLHTTP"); 
} catch (e) { 
   try { 
XMLHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
   } catch (e2) { 
XMLHttp = false; 
   } 
} 
if (!XMLHttp && typeof XMLHttpRequest != 'undefined') { 
   XMLHttp = new XMLHttpRequest(); 
} 
function callServer() { 
	   var channelname = document.getElementById("channelname").value; 
	   if ((channelname == null) || (channelname == "")) return; 
	   var url = "checkchannelname.do?name=" + encodeURIComponent(encodeURIComponent(channelname)); 
	   XMLHttp.open("GET", url, true); 
	   XMLHttp.onreadystatechange = updatePage; 
	   XMLHttp.send(null);
	   alert(XMLHttp.responseText);      
	} 
	function updatePage() { 
	   if (XMLHttp.readyState < 4) { 
	document.all.text1.innerHTML="loading..."; 
	   } 
	   if (XMLHttp.readyState == 4) { 
	var response = XMLHttp.responseText; 
	if (response=="true")
	document.all.text1.innerHTML="名称已存在！"; 
	   } 
	} 
*/

function checkQQ(num){
	var n=$.trim($("#"+num).val());
    if(/^[1-9]\d{4,15}$/.test(n)){
		return true;
    }
	return false;
}

function isZero(num){
	var n=$.trim($("#"+num).val());
	if(n==0){
		return true;
	}
	return false;
}

function checkcheckbox(e){
		var n=document.getElementsByName(e);
		var num=0;
		var flag=false;
		for(var i = 0; i < n.length; i++){
		if( n[i].checked ){
		flag=true;		
		}
		}		
	return flag;
}
/**
 * 验证小数
 * 允许格式：比例数字
 */
function checkRateNum(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}else if(/^[0-9]{1,2}$/.test(str)||(/^1[0]{1,2}$/.test(str))){
		return  true;
	}else return false;
}
/**
 * 验证小数
 * 允许格式：比例数字或者小数
 */
function checkRateFloat(id ,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}
    if( /^[0-9]{1,2}(\.\d{1,2})?$/.test(str)||(/^1[0]{1,2}(\.[0]{1,2})?$/.test(str))){
		return true;
	}
	return false;
}
/**
 * 验证长度
 */
function checkLength(id , slen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len!=slen){
		return false;
	}
   
	return true;
}

/**
 * 
 * 验证是否包含空格(可包含空格）
 */
function checkBlank(id,minLen,maxLen){
	var str=$.trim($("#"+id).val());
	var len=getStringLength(str);
	if(len<minLen||len>maxLen){
		return false;
	}
	//if(/^\S*$/.test(str)){//不包含空格
	//	return  true;
	//}	
	return true;
}

