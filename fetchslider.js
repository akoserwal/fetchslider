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





$(document).ready(function() {
<!-- fetch the current url -->
	var url=window.location
<!-- on hash change -->
	window.onhashchange=function(){
		
		 var hash1=window.location.hash;
		 var hash2=hash1.replace("#",'');
<!-- get request -->
		 $.get( hash2, function( data ) {
         $("#result").append(data);
  <!-- flipbox slide -->
  $("#flipbox" ).show().animate({"left":"-=640px"},500);
      setTimeout(function(){
	  $("#mainbox").remove();
	  $("#flipbox").attr("id","mainbox");
	   
	  },500);
 
  
  });
  
		 
		 };
	  
});
