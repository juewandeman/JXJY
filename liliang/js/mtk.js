function fun(){
	var zzc = document.getElementById("zzc");
	var li = document.getElementsByClassName('lis');
	var xinxi = document.getElementsByClassName('xinxi');
	zzc.style.display='none';
	for (var i=0;i<li.length;i++){
		li[i].a = i;
		li[i].onclick = function(){
			zzc.style.display='block';	
			xinxi[this.a].style.display='block';
		}
	}
}
	function hide(){
		var li = document.getElementsByClassName('lis');
		var xinxi = document.getElementsByClassName('xinxi');
		for (var i=0;i<xinxi.length;i++) {
			xinxi[i].style.display='none';
		}
		zzc.style.display='none';
	}



