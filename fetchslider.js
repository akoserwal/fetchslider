
/*===================================================
 fetchslider.js v0.1
 * https://github.com/Abhikos/fetchslider.git
 * ===================================================
*Copyright [2013] [Abhishek koserwal]
*
*Licensed under the Apache License, Version 2.0 (the "License");
*you may not use this file except in compliance with the License.
*You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
*Unless required by applicable law or agreed to in writing, software
*distributed under the License is distributed on an "AS IS" BASIS,
*WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*See the License for the specific language governing permissions and
*limitations under the License.
*
* ==========================================================*/






window.onload=initAll;


function initAll(){


window.onhashchange=function(){
var curHashUrl=window.location.hash;
var rmHash=curHashUrl.replace("#",'');

slideTime=800;
flipboxPositionValue="-=640px";


fetchSlider(rmHash,slideTime,flipboxPositionValue);


};


}



function fetchSlider(fetchUrl,slideTime,flipboxPositionValue){

$.get(fetchUrl,function(data){



 <!-- flipbox slide -->
$("#flipbox" ).show().animate({

	left:flipboxPositionValue

},slideTime);

      setTimeout(function(){

	  $("#mainbox").remove();
	  $("#flipbox").attr("id","mainbox");
	  $("#mainbox").append(data);
	  $('body').append('<div id="flipbox"></div>');

	  },slideTime);
 

});

}


