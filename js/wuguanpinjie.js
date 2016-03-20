
//beforeDo����: �û��Ĳ������� -1:���ԭͼ  0:δʹ�� 1:�����۾� 2:������� 3:���˱���
function addeye(srcstr){  
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");	
	var img = new Image();
	img.src=srcstr+"_left.png";  //�ȼ�������
	img.onload = function () //ȷ��ͼƬ�Ѿ��������  
    {   
	   beforeDo(1);
       ctx.save(); 
	   var scalesize=(facewidth[curFace]*0.3)/img.width;
	   ctx.scale(scalesize,scalesize);
       ctx.drawImage(img,(lefteyeX[curFace])/scalesize-img.width*0.5,(lefteyeY[curFace])/scalesize-img.height*0.5);
	   img.src=srcstr+"_right.png";  //�ټ�������
	   img.onload = function () //ȷ��ͼƬ�Ѿ��������  
		{
             ctx.drawImage(img,(righteyeX[curFace])/scalesize-img.width*0.5,(righteyeY[curFace])/scalesize-img.height*0.5);
	         ctx.restore();
             afterDo();
		}
		 
     }  
 }
 
 function addmouth(srcstr){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");	
	var img = new Image();
	img.src=srcstr;
	img.onload = function ()
	{
         beforeDo(2);
         ctx.save();
         var scalesize=(facewidth[curFace]*0.5)/img.width;
		 var angel=Math.atan((rightmouthY[curFace]-leftmouthY[curFace])/(rightmouthX[curFace]-leftmouthX[curFace]));
		 ctx.translate((leftmouthX[curFace]+rightmouthX[curFace])*0.5,(leftmouthY[curFace]+rightmouthY[curFace])*0.5);
		 ctx.rotate(angel);
		  ctx.translate(-(leftmouthX[curFace]+rightmouthX[curFace])*0.5,-(leftmouthY[curFace]+rightmouthY[curFace])*0.5);
         ctx.scale(scalesize,scalesize);	 
		 ctx.drawImage(img,(leftmouthX[curFace]+rightmouthX[curFace])*0.5/scalesize-img.width*0.5,(leftmouthY[curFace]+rightmouthY[curFace])*0.5/scalesize-img.height*0.5);
		 ctx.restore();
		 afterDo();
    }
 }

 function addnose(srcstr){
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");	
	var img = new Image();
	img.src=srcstr;
	img.onload = function ()
	{
         beforeDo(3);
         ctx.save();
         var scalesize=(facewidth[curFace]*0.4)/img.width;
		 var eyeaverX=(lefteyeX[curFace]+righteyeX[curFace])*0.5;
		 var eyeaverY=(lefteyeY[curFace]+righteyeY[curFace])*0.5;
         var mouthaverX=(rightmouthX[curFace]+leftmouthX[curFace])*0.5;
	     var mouthaverY=(rightmouthY[curFace]+leftmouthY[curFace])*0.5;
		 var angel=Math.atan((mouthaverX-eyeaverX)/(eyeaverY-mouthaverY));
		 ctx.translate(noseX[curFace],noseY[curFace]);
		 ctx.rotate(angel);
		  ctx.translate(-noseX[curFace],-noseY[curFace]);
         ctx.scale(scalesize,scalesize);	 
		 ctx.drawImage(img,noseX[curFace]/scalesize-img.width*0.5,noseY[curFace]/scalesize-img.height*0.5);
		 ctx.restore();
		 afterDo();
    }
 }
/*
var facenum;
var facecenterX=new Array();
var facecenterY=new Array();
var facewidth=new Array();
var faceheight=new Array();
var lefteyeX=new Array();
var lefteyeY=new Array();
var righteyeX=new Array();
var righteyeY=new Array();
var noseX=new Array();
var noseY=new Array();
var leftmouthX=new Array();
var leftmouthY=new Array();
var rightmouthX=new Array();
var rightmouthY=new Array();
*/