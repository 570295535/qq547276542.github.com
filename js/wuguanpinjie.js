
//beforeDo参数: 用户的操作类型 -1:变成原图  0:未使用 1:换了眼睛 2:换了嘴巴
function addeye(srcstr){  
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");	
	var img = new Image();
	img.src=srcstr+"_left.png";  //先加载左眼
	
	img.onload = function () //确保图片已经加载完毕  
    {   
	
	   beforeDo(1);
       ctx.save(); 
	   var scalesize=(facewidth[curFace]*0.3)/img.width;
	   ctx.scale(scalesize,scalesize);
       ctx.drawImage(img,(lefteyeX[curFace])/scalesize-img.width*0.5,(lefteyeY[curFace])/scalesize-img.height*0.5);
	   img.src=srcstr+"_right.png";  //再加载右眼
	   img.onload = function () //确保图片已经加载完毕  
		{
             ctx.drawImage(img,(righteyeX[curFace])/scalesize-img.width*0.5,(righteyeY[curFace])/scalesize-img.height*0.5);
	         ctx.restore();
             afterDo();
		}
		 
     }  
 }
 

 /*
	   var scalesize=img.width/30;
	   var minn=99999;
	   for(var i=0;i<eyenum;i++){   //防止眼睛距离过近
		for(var j=i+1;j<eyenum;j++){
		   if(Math.abs(eyex[i]-eyex[j])<minn)
		     minn=Math.abs(eyex[i]-eyex[j]);
		   if(Math.abs(eyey[i]-eyey[j])<minn)
		     minn=Math.abs(eyey[i]-eyey[j]); 
		 }
	   }
	    scalesize=Math.min(scalesize,minn/11);
	    ctx.save(); 
	    ctx.scale(scalesize,scalesize);
		for(var i=0;i<eyenum;i++){
		  ctx.drawImage(img,eyex[i]/scalesize,eyey[i]/scalesize); 
        }
	     ctx.restore();	
		 */
		 