// clickD1 is to upgrade div1 
function clickD1(){
	// console.log(1);
	// to decide the type of the picture in div1. Picture types include tree, stone, ore and level.
	if($("#d1").hasClass("tree")){
		// to decide whether the picture in div2 is of the same type. If so, div1 will be upgraded while div2 will become empty. 
		if($("#d2").hasClass("tree")&&(!$("#d2").hasClass("che")))
		{
			// to ensure that the check between div1 and div2 is one-way. If in clickD1 we have already known that div1 and div2 have pictures of the same type, in clickD2 we do not need to check it any more. 
			$("#d1").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("tree");
			upgradeTree("#d1");
		};
		if($("#d5").hasClass("tree")&&(!$("#d5").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("tree");
			upgradeTree("#d1");
		};
	}
	else if($("#d1").hasClass("stone")){
		if($("#d2").hasClass("stone")&&(!$("#d2").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("stone");
			upgradeStone("#d1");
		};
		if($("#d5").hasClass("stone")&&(!$("#d5").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("stone");
			upgradeStone("#d1");
		};
	}
	else if($("#d1").hasClass("ore")){
		if($("#d2").hasClass("ore")&&(!$("#d2").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("ore");
			upgradeOre("#d1");
		};
		if($("#d5").hasClass("ore")&&(!$("#d5").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("ore");
			upgradeOre("#d1");
		};
	}
	else if($("#d1").hasClass("level")){
		if($("#d2").hasClass("level")&&(!$("#d2").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("level");
			upgradeLevel("#d1");
		};
		if($("#d5").hasClass("level")&&(!$("#d5").hasClass("che")))
		{
			$("#d1").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("level");
			upgradeLevel("#d1");
		};
	}
}
function clickD2(){
	// console.log(2);
	if($("#d2").hasClass("tree")){	
		if($("#d3").hasClass("tree")&&(!$("#d3").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("tree");
			upgradeTree("#d2");
		};
		if($("#d6").hasClass("tree")&&(!$("#d6").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("tree");
			upgradeTree("#d2");
		};
		if($("#d1").hasClass("tree")&&(!$("#d1").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("tree");
			upgradeTree("#d2");
		};
	}
	else if($("#d2").hasClass("stone")){
		if($("#d3").hasClass("stone")&&(!$("#d3").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("stone");
			upgradeStone("#d2");
		};
		if($("#d6").hasClass("stone")&&(!$("#d6").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("stone");
			upgradeStone("#d2");
		};
		if($("#d1").hasClass("stone")&&(!$("#d1").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("stone");
			upgradeStone("#d2");
		};
	}
	else if($("#d2").hasClass("ore")){
		if($("#d3").hasClass("ore")&&(!$("#d3").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("ore");
			upgradeOre("#d2");
		};
		if($("#d6").hasClass("ore")&&(!$("#d6").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("ore");
			upgradeOre("#d2");
		};
		if($("#d1").hasClass("ore")&&(!$("#d1").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("ore");
			upgradeOre("#d2");
		};
	}
	else if($("#d2").hasClass("level")){
		if($("#d3").hasClass("level")&&(!$("#d3").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("level");
			upgradeLevel("#d2");
		};
		if($("#d6").hasClass("level")&&(!$("#d6").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("level");
			upgradeLevel("#d2");
		};
		if($("#d1").hasClass("level")&&(!$("#d1").hasClass("che")))
		{
			$("#d2").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("level");
			upgradeLevel("#d2");
		};
	}
}
function clickD3(){
	// console.log(3);
	if($("#d3").hasClass("tree")){
		if($("#d4").hasClass("tree")&&(!$("#d4").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("tree");
			upgradeTree("#d3");
		};
		if($("#d7").hasClass("tree")&&(!$("#d7").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("tree");
			upgradeTree("#d3");
		};
		if($("#d2").hasClass("tree")&&(!$("#d2").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("tree");
			upgradeTree("#d3");
		};
	}
	else if($("#d3").hasClass("stone")){
		if($("#d4").hasClass("stone")&&(!$("#d4").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("stone");
			upgradeStone("#d3");
		};
		if($("#d7").hasClass("stone")&&(!$("#d7").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("stone");
			upgradeStone("#d3");
		};
		if($("#d2").hasClass("stone")&&(!$("#d2").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("stone");
			upgradeStone("#d3");
		};
	}
	else if($("#d3").hasClass("ore")){
		if($("#d4").hasClass("ore")&&(!$("#d4").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("ore");
			upgradeOre("#d3");
		};
		if($("#d7").hasClass("ore")&&(!$("#d7").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("ore");
			upgradeOre("#d3");
		};
		if($("#d2").hasClass("ore")&&(!$("#d2").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("ore");
			upgradeOre("#d3");
		};
	}
	else if($("#d3").hasClass("level")){
		if($("#d4").hasClass("level")&&(!$("#d4").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("level");
			upgradeLevel("#d3");
		};
		if($("#d7").hasClass("level")&&(!$("#d7").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("level");
			upgradeLevel("#d3");
		};
		if($("#d2").hasClass("level")&&(!$("#d2").hasClass("che")))
		{
			$("#d3").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("level");
			upgradeLevel("#d3");
		};
	}
}
function clickD4(){
	// console.log(4);
	if($("#d4").hasClass("tree")){
		if($("#d8").hasClass("tree")&&(!$("#d8").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("tree");
			upgradeTree("#d4");
		};
		if($("#d3").hasClass("tree")&&(!$("#d3").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("tree");
			upgradeTree("#d4");
		};
	}
	else if($("#d4").hasClass("stone")){
		if($("#d8").hasClass("stone")&&(!$("#d8").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("stone");
			upgradeStone("#d4");
		};
		if($("#d3").hasClass("stone")&&(!$("#d3").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("stone");
			upgradeStone("#d4");
		};
	}
	else if($("#d4").hasClass("ore")){
		if($("#d8").hasClass("ore")&&(!$("#d8").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("ore");
			upgradeOre("#d4");
		};
		if($("#d3").hasClass("ore")&&(!$("#d3").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("ore");
			upgradeOre("#d4");
		};
	}
	else if($("#d4").hasClass("level")){
		if($("#d8").hasClass("level")&&(!$("#d8").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("level");
			upgradeLevel("#d4");
		};
		if($("#d3").hasClass("level")&&(!$("#d3").hasClass("che")))
		{
			$("#d4").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("level");
			upgradeLevel("#d4");
		};
	}
}
function clickD5(){
	// console.log(5);
	if($("#d5").hasClass("tree")){
		if($("#d1").hasClass("tree")&&(!$("#d1").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("tree");
			upgradeTree("#d5");
		};
		if($("#d6").hasClass("tree")&&(!$("#d6").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("tree");
			upgradeTree("#d5");
		};
		if($("#d9").hasClass("tree")&&(!$("#d9").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("tree");
			upgradeTree("#d5");
		};
	}
	else if($("#d5").hasClass("stone")){
		if($("#d1").hasClass("stone")&&(!$("#d1").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("stone");
			upgradeStone("#d5");
		};
		if($("#d6").hasClass("stone")&&(!$("#d6").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("stone");
			upgradeStone("#d5");
		};
		if($("#d9").hasClass("stone")&&(!$("#d9").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("stone");
			upgradeStone("#d5");
		};
	}
	else if($("#d5").hasClass("ore")){
		if($("#d1").hasClass("ore")&&(!$("#d1").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("ore");
			upgradeOre("#d5");
		};
		if($("#d6").hasClass("ore")&&(!$("#d6").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("ore");
			upgradeOre("#d5");
		};
		if($("#d9").hasClass("ore")&&(!$("#d9").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("ore");
			upgradeOre("#d5");
		};
	}
	else if($("#d5").hasClass("level")){
		if($("#d1").hasClass("level")&&(!$("#d1").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD1();
			$("#d1").addClass("emp").removeClass("level");
			upgradeLevel("#d5");
		};
		if($("#d6").hasClass("level")&&(!$("#d6").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("level");
			upgradeLevel("#d5");
		};
		if($("#d9").hasClass("level")&&(!$("#d9").hasClass("che")))
		{
			$("#d5").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("level");
			upgradeLevel("#d5");
		};
	}
}
function clickD6(){
	// console.log(6);
	if($("#d6").hasClass("tree")){
		if($("#d2").hasClass("tree")&&(!$("#d2").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("tree");
			upgradeTree("#d6");
		};
		if($("#d7").hasClass("tree")&&(!$("#d7").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("tree");
			upgradeTree("#d6");
		};
		if($("#d10").hasClass("tree")&&(!$("#d10").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("tree");
			upgradeTree("#d6");
		};
		if($("#d5").hasClass("tree")&&(!$("#d5").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("tree");
			upgradeTree("#d6");
		};
	}
	else if($("#d6").hasClass("stone")){
		if($("#d2").hasClass("stone")&&(!$("#d2").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("stone");
			upgradeStone("#d6");
		};
		if($("#d7").hasClass("stone")&&(!$("#d7").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("stone");
			upgradeStone("#d6");
		};
		if($("#d10").hasClass("stone")&&(!$("#d10").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeStone("#d6");
		};
			if($("#d5").hasClass("stone")&&(!$("#d5").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("stone");
			upgradeStone("#d6");
		};
	}
	else if($("#d6").hasClass("ore")){
		if($("#d2").hasClass("ore")&&(!$("#d2").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("ore");
			upgradeOre("#d6");
		};
		if($("#d7").hasClass("ore")&&(!$("#d7").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("ore");
			upgradeOre("#d6");
		};
		if($("#d10").hasClass("ore")&&(!$("#d10").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeOre("#d6");
		};
		if($("#d5").hasClass("ore")&&(!$("#d5").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("ore");
			upgradeOre("#d6");
		};
	}
	else if($("#d6").hasClass("level")){
		if($("#d2").hasClass("level")&&(!$("#d2").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD2();
			$("#d2").addClass("emp").removeClass("level");
			upgradeLevel("#d6");
		};
		if($("#d7").hasClass("level")&&(!$("#d7").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("level");
			upgradeLevel("#d6");
		};
		if($("#d10").hasClass("level")&&(!$("#d10").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeLevel("#d6");
		};
		if($("#d5").hasClass("level")&&(!$("#d5").hasClass("che")))
		{
			$("#d6").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("level");
			upgradeLevel("#d6");
		};
	}
}
function clickD7(){
	// console.log(7);
	if($("#d7").hasClass("tree")){
		if($("#d3").hasClass("tree")&&(!$("#d3").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("tree");
			upgradeTree("#d7");
		};
		if($("#d8").hasClass("tree")&&(!$("#d8").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("tree");
			upgradeTree("#d7");
		};
		if($("#d11").hasClass("tree")&&(!$("#d11").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("tree");
			upgradeTree("#d7");
		};
		if($("#d6").hasClass("tree")&&(!$("#d6").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("tree");
			upgradeTree("#d7");
		};
	}
	else if($("#d7").hasClass("stone")){	
		if($("#d3").hasClass("stone")&&(!$("#d3").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("stone");
			upgradeStone("#d7");
		};
		if($("#d8").hasClass("stone")&&(!$("#d8").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("stone");
			upgradeStone("#d7");
		};
		if($("#d11").hasClass("stone")&&(!$("#d11").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("stone");
			upgradeStone("#d7");
		};
		if($("#d6").hasClass("stone")&&(!$("#d6").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("stone");
			upgradeStone("#d7");
		};
	}
	else if($("#d7").hasClass("ore")){
		if($("#d3").hasClass("ore")&&(!$("#d3").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("ore");
			upgradeOre("#d7");
		};
		if($("#d8").hasClass("ore")&&(!$("#d8").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("ore");
			upgradeOre("#d7");
		};
		if($("#d11").hasClass("ore")&&(!$("#d11").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("ore");
			upgradeOre("#d7");
		};
			if($("#d6").hasClass("ore")&&(!$("#d6").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("ore");
			upgradeOre("#d7");
		};
	}
	else if($("#d7").hasClass("level")){
		if($("#d3").hasClass("level")&&(!$("#d3").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD3();
			$("#d3").addClass("emp").removeClass("level");
			upgradeLevel("#d7");
		};
		if($("#d8").hasClass("level")&&(!$("#d8").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("level");
			upgradeLevel("#d7");
		};	
		if($("#d11").hasClass("level")&&(!$("#d11").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("level");
			upgradeLevel("#d7");
		};
		if($("#d6").hasClass("level")&&(!$("#d6").hasClass("che")))
		{
			$("#d7").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("level");
			upgradeLevel("#d7");
		};
	}
}
function clickD8(){
	// console.log(8);
	if($("#d8").hasClass("tree")){
		if($("#d4").hasClass("tree")&&(!$("#d4").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("tree");
			upgradeTree("#d8");
		};
		if($("#d12").hasClass("tree")&&(!$("#d12").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("tree");
			upgradeTree("#d8");
		};
		if($("#d7").hasClass("tree")&&(!$("#d7").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("tree");
			upgradeTree("#d8");
		};
	}
	else if($("#d8").hasClass("stone")){
		if($("#d4").hasClass("stone")&&(!$("#d4").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("stone");
			upgradeStone("#d8");
		};
		if($("#d12").hasClass("stone")&&(!$("#d12").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("stone");
			upgradeStone("#d8");
		};
		if($("#d7").hasClass("stone")&&(!$("#d7").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("stone");
			upgradeStone("#d8");
		};
	}
	else if($("#d8").hasClass("ore")){
		if($("#d4").hasClass("ore")&&(!$("#d4").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("ore");
			upgradeOre("#d8");
		};
		if($("#d12").hasClass("ore")&&(!$("#d12").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("ore");
			upgradeOre("#d8");
		};
		if($("#d7").hasClass("ore")&&(!$("#d7").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("ore");
			upgradeOre("#d8");
		};
	}
	else if($("#d8").hasClass("level")){
		if($("#d4").hasClass("level")&&(!$("#d4").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD4();
			$("#d4").addClass("emp").removeClass("level");
			upgradeLevel("#d8");
		};
		if($("#d12").hasClass("level")&&(!$("#d12").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("level");
			upgradeLevel("#d8");
		};
		if($("#d7").hasClass("level")&&(!$("#d7").hasClass("che")))
		{
			$("#d8").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("level");
			upgradeLevel("#d8");
		};
	}
}
function clickD9(){
	// console.log(9);
	if($("#d9").hasClass("tree")){
		if($("#d5").hasClass("tree")&&(!$("#d5").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("tree");
			upgradeTree("#d9");
		};
		if($("#d10").hasClass("tree")&&(!$("#d10").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("tree");
			upgradeTree("#d9");
		};
		if($("#d13").hasClass("tree")&&(!$("#d13").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("tree");
			upgradeTree("#d9");
		};
	}
	else if($("#d9").hasClass("stone")){
		if($("#d5").hasClass("stone")&&(!$("#d5").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("stone");
			upgradeStone("#d9");
		};
		if($("#d10").hasClass("stone")&&(!$("#d10").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeStone("#d9");
		};
		if($("#d13").hasClass("stone")&&(!$("#d13").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("stone");
			upgradeStone("#d9");
		};
	}
	else if($("#d9").hasClass("ore")){
		if($("#d5").hasClass("ore")&&(!$("#d5").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("ore");
			upgradeOre("#d9");
		};
		if($("#d10").hasClass("ore")&&(!$("#d10").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeOre("#d9");
		};
		if($("#d13").hasClass("ore")&&(!$("#d13").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("ore");
			upgradeOre("#d9");
		};
	}
	else if($("#d9").hasClass("level")){
		if($("#d5").hasClass("level")&&(!$("#d5").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD5();
			$("#d5").addClass("emp").removeClass("level");
			upgradeLevel("#d9");
		};
		if($("#d10").hasClass("level")&&(!$("#d10").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeLevel("#d9");
		};
		if($("#d13").hasClass("level")&&(!$("#d13").hasClass("che")))
		{
			$("#d9").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("level");
			upgradeLevel("#d9");
		};
	}
}
function clickD10(){
	// console.log(10);
	if($("#d10").hasClass("tree")){
		if($("#d6").hasClass("tree")&&(!$("#d6").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("tree");
			upgradeTree("#d10");
		};
		if($("#d11").hasClass("tree")&&(!$("#d11").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("tree");
			upgradeTree("#d10");
		};
		if($("#d14").hasClass("tree")&&(!$("#d14").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("tree");
			upgradeTree("#d10");
		};
		if($("#d9").hasClass("tree")&&(!$("#d9").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("tree");
			upgradeTree("#d10");
		};
	}
	else if($("#d10").hasClass("stone")){
		if($("#d6").hasClass("stone")&&(!$("#d6").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("stone");
			upgradeStone("#d10");
		};
		if($("#d11").hasClass("stone")&&(!$("#d11").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("stone");
			upgradeStone("#d10");
		};
		if($("#d14").hasClass("stone")&&(!$("#d14").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("stone");
			upgradeStone("#d10");
		};
		if($("#d9").hasClass("stone")&&(!$("#d9").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("stone");
			upgradeStone("#d10");
		};
	}
	else if($("#d10").hasClass("ore")){
		if($("#d6").hasClass("ore")&&(!$("#d6").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("ore");
			upgradeOre("#d10");
		};
		if($("#d11").hasClass("ore")&&(!$("#d11").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("ore");
			upgradeOre("#d10");
		};
		if($("#d14").hasClass("ore")&&(!$("#d14").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("ore");
			upgradeOre("#d10");
		};
		if($("#d9").hasClass("ore")&&(!$("#d9").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("ore");
			upgradeOre("#d10");
		};
	}
	else if($("#d10").hasClass("level")){
		if($("#d6").hasClass("level")&&(!$("#d6").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD6();
			$("#d6").addClass("emp").removeClass("level");
			upgradeLevel("#d10");
		};
		if($("#d11").hasClass("level")&&(!$("#d11").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("level");
			upgradeLevel("#d10");
		};
		if($("#d14").hasClass("level")&&(!$("#d14").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("level");
			upgradeLevel("#d10");
		};
		if($("#d9").hasClass("level")&&(!$("#d9").hasClass("che")))
		{
			$("#d10").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("level");
			upgradeLevel("#d10");
		};
	}
}
function clickD11(){
	// console.log(11);
	if($("#d11").hasClass("tree")){
		if($("#d7").hasClass("tree")&&(!$("#d7").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("tree");
			upgradeTree("#d11");
		};
		if($("#d12").hasClass("tree")&&(!$("#d12").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("tree");
			upgradeTree("#d11");
		};
		if($("#d15").hasClass("tree")&&(!$("#d15").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("tree");
			upgradeTree("#d11");
		};
		if($("#d10").hasClass("tree")&&(!$("#d10").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("tree");
			upgradeTree("#d11");
		};
	}
	else if($("#d11").hasClass("stone")){
		if($("#d7").hasClass("stone")&&(!$("#d7").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("stone");
			upgradeStone("#d11");
		};
		if($("#d12").hasClass("stone")&&(!$("#d12").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("stone");
			upgradeStone("#d11");
		};
		if($("#d15").hasClass("stone")&&(!$("#d15").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("stone");
			upgradeStone("#d11");
		};
		if($("#d10").hasClass("stone")&&(!$("#d10").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeStone("#d11");
		};
	}
	else if($("#d11").hasClass("ore")){
		if($("#d7").hasClass("ore")&&(!$("#d7").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("ore");
			upgradeOre("#d11");
		};
		if($("#d12").hasClass("ore")&&(!$("#d12").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("ore");
			upgradeOre("#d11");
		};
		if($("#d15").hasClass("ore")&&(!$("#d15").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("ore");
			upgradeOre("#d11");
		};
		if($("#d10").hasClass("ore")&&(!$("#d10").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeOre("#d11");
		};
	}
	else if($("#d11").hasClass("level")){
		if($("#d7").hasClass("level")&&(!$("#d7").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD7();
			$("#d7").addClass("emp").removeClass("level");
			upgradeLevel("#d11");
		};
		if($("#d12").hasClass("level")&&(!$("#d12").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("level");
			upgradeLevel("#d11");
		};
		if($("#d15").hasClass("level")&&(!$("#d15").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("level");
			upgradeLevel("#d11");
		};
		if($("#d10").hasClass("level")&&(!$("#d10").hasClass("che")))
		{
			$("#d11").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeLevel("#d11");
		};
	}
}
function clickD12(){
	// console.log(12);
	if($("#d12").hasClass("tree")){
		if($("#d8").hasClass("tree")&&(!$("#d8").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("tree");
			upgradeTree("#d12");
		};
		if($("#d16").hasClass("tree")&&(!$("#d16").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("tree");
			upgradeTree("#d12");
		};
		if($("#d11").hasClass("tree")&&(!$("#d11").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("tree");
			upgradeTree("#d12");
		};
	}
	else if($("#d12").hasClass("stone")){
		if($("#d8").hasClass("stone")&&(!$("#d8").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("stone");
			upgradeStone("#d12");
		};
		if($("#d16").hasClass("stone")&&(!$("#d16").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("stone");
			upgradeStone("#d12");
		};
		if($("#d11").hasClass("stone")&&(!$("#d11").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("stone");
			upgradeStone("#d12");
		};
	}
	else if($("#d12").hasClass("ore")){
		if($("#d8").hasClass("ore")&&(!$("#d8").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("ore");
			upgradeOre("#d12");
		};
		if($("#d16").hasClass("ore")&&(!$("#d16").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("ore");
			upgradeOre("#d12");
		};
		if($("#d11").hasClass("ore")&&(!$("#d11").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("ore");
			upgradeOre("#d12");
		};
	}
	else if($("#d12").hasClass("level")){
		if($("#d8").hasClass("level")&&(!$("#d8").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD8();
			$("#d8").addClass("emp").removeClass("level");
			upgradeLevel("#d12");
		};
		if($("#d16").hasClass("level")&&(!$("#d16").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("level");
			upgradeLevel("#d12");
		};
		if($("#d11").hasClass("level")&&(!$("#d11").hasClass("che")))
		{
			$("#d12").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("level");
			upgradeLevel("#d12");
		};
	}
}
function clickD13(){
	// console.log(13);
	if($("#d13").hasClass("tree")){
		if($("#d9").hasClass("tree")&&(!$("#d9").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("tree");
			upgradeTree("#d13");
		};
		if($("#d14").hasClass("tree")&&(!$("#d14").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("tree");
			upgradeTree("#d13");
		};
	}
	else if($("#d13").hasClass("stone")){
		if($("#d9").hasClass("stone")&&(!$("#d9").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("stone");
			upgradeStone("#d13");
		};
		if($("#d14").hasClass("stone")&&(!$("#d14").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("stone");
			upgradeStone("#d13");
		};
	}
	else if($("#d13").hasClass("ore")){
		if($("#d9").hasClass("ore")&&(!$("#d9").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("ore");
			upgradeOre("#d13");
		};
		if($("#d14").hasClass("ore")&&(!$("#d14").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("ore");
			upgradeOre("#d13");
		};
	}
	else if($("#d13").hasClass("level")){
		if($("#d9").hasClass("level")&&(!$("#d9").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD9();
			$("#d9").addClass("emp").removeClass("level");
			upgradeLevel("#d13");
		};
		if($("#d14").hasClass("level")&&(!$("#d14").hasClass("che")))
		{
			$("#d13").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("level");
			upgradeLevel("#d13");
		};
	}
}
function clickD14(){
	// console.log(14);
	if($("#d14").hasClass("tree")){
		if($("#d10").hasClass("tree")&&(!$("#d10").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("tree");
			upgradeTree("#d14");
		};
		if($("#d15").hasClass("tree")&&(!$("#d15").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("tree");
			upgradeTree("#d14");
		};
		if($("#d13").hasClass("tree")&&(!$("#d13").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("tree");
			upgradeTree("#d14");
		};	
	}
	else if($("#d14").hasClass("stone")){
		if($("#d10").hasClass("stone")&&(!$("#d10").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeStone("#d14");
		};
		if($("#d15").hasClass("stone")&&(!$("#d15").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("stone");
			upgradeStone("#d14");
		};
		if($("#d13").hasClass("stone")&&(!$("#d13").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("stone");
			upgradeStone("#d14");
		};
		
	}
	else if($("#d14").hasClass("ore")){
		if($("#d10").hasClass("ore")&&(!$("#d10").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeOre("#d14");
		};
		if($("#d15").hasClass("ore")&&(!$("#d15").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("ore");
			upgradeOre("#d14");
		};
		if($("#d13").hasClass("ore")&&(!$("#d13").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("ore");
			upgradeOre("#d14");
		};	
	}
	else if($("#d14").hasClass("level")){
		if($("#d10").hasClass("level")&&(!$("#d10").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD10();
			$("#d10").addClass("emp").removeClass("stone");
			upgradeLevel("#d14");
		};
		if($("#d15").hasClass("level")&&(!$("#d15").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("level");
			upgradeLevel("#d14");
		};
		if($("#d13").hasClass("level")&&(!$("#d13").hasClass("che")))
		{
			$("#d14").addClass("che");
			clickD13();
			$("#d13").addClass("emp").removeClass("level");
			upgradeLevel("#d14");
		};	
	}
}
function clickD15(){
	// console.log(15);
	if($("#d15").hasClass("tree")){
		if($("#d11").hasClass("tree")&&(!$("#d11").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("tree");
			upgradeTree("#d15");
		};
		if($("#d16").hasClass("tree")&&(!$("#d16").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("tree");
			upgradeTree("#d15");
		};
		if($("#d14").hasClass("tree")&&(!$("#d14").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("tree");
			upgradeTree("#d15");
		};		
	}
	else if($("#d15").hasClass("stone")){
			if($("#d11").hasClass("stone")&&(!$("#d11").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("stone");
			upgradeStone("#d15");
		};	
		if($("#d16").hasClass("stone")&&(!$("#d16").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("stone");
			upgradeStone("#d15");
		};
		if($("#d14").hasClass("stone")&&(!$("#d14").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("stone");
			upgradeStone("#d15");
		};	
	}
	else if($("#d15").hasClass("ore")){
		if($("#d11").hasClass("ore")&&(!$("#d11").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("ore");
			upgradeOre("#d15");
		};
		if($("#d16").hasClass("ore")&&(!$("#d16").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("ore");
			upgradeOre("#d15");
		};
		if($("#d14").hasClass("ore")&&(!$("#d14").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("ore");
			upgradeOre("#d15");
		};		
	}
	else if($("#d15").hasClass("level")){
		if($("#d11").hasClass("level")&&(!$("#d11").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD11();
			$("#d11").addClass("emp").removeClass("level");
			upgradeLevel("#d15");
		};
		if($("#d16").hasClass("level")&&(!$("#d16").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD16();
			$("#d16").addClass("emp").removeClass("level");
			upgradeLevel("#d15");
		};
		if($("#d14").hasClass("level")&&(!$("#d14").hasClass("che")))
		{
			$("#d15").addClass("che");
			clickD14();
			$("#d14").addClass("emp").removeClass("level");
			upgradeLevel("#d15");
		};		
	}
}
function clickD16(){
	// console.log(16);
	if($("#d16").hasClass("tree")){
		if($("#d12").hasClass("tree")&&(!$("#d12").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("tree");
			upgradeTree("#d16");
		};
		if($("#d15").hasClass("tree")&&(!$("#d15").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("tree");
			upgradeTree("#d16");
		};
	}
	else if($("#d16").hasClass("stone")){
		if($("#d12").hasClass("stone")&&(!$("#d12").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("stone");
			upgradeStone("#d16");
		};
		if($("#d15").hasClass("stone")&&(!$("#d15").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("stone");
			upgradeStone("#d16");
		};
	}
	else if($("#d16").hasClass("ore")){
		if($("#d12").hasClass("ore")&&(!$("#d12").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("ore");
			upgradeOre("#d16");
		};
		if($("#d15").hasClass("ore")&&(!$("#d15").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("ore");
			upgradeOre("#d16");
		};
	}
	else if($("#d16").hasClass("level")){
		if($("#d12").hasClass("level")&&(!$("#d12").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD12();
			$("#d12").addClass("emp").removeClass("level");
			upgradeLevel("#d16");
		};
		if($("#d15").hasClass("level")&&(!$("#d15").hasClass("che")))
		{
			$("#d16").addClass("che");
			clickD15();
			$("#d15").addClass("emp").removeClass("level");
			upgradeLevel("#d16");
		};
	}
}
function upgradeTree(divId){
	if($(divId).hasClass("tree1")){
		$(divId).addClass("tree2").removeClass("tree1");
	}
	else if($(divId).hasClass("tree2")){
		$(divId).addClass("tree3").removeClass("tree2");
	}
	else if($(divId).hasClass("tree3")){
		$(divId).addClass("tree4").removeClass("tree3");
	}
	else if($(divId).hasClass("tree4")){
		$(divId).addClass("tree5").removeClass("tree4");
	}
	else if($(divId).hasClass("tree5")){
		$(divId).addClass("tree6").removeClass("tree5");
	}
	else if($(divId).hasClass("tree6")){
		$(divId).addClass("tree7").removeClass("tree6");
	}
	else if($(divId).hasClass("tree7")){
		$(divId).addClass("tree8").removeClass("tree7");
	}
	else if($(divId).hasClass("tree8")){
		$(divId).addClass("tree9").removeClass("tree8");
	}
	else if($(divId).hasClass("tree9")){
		$(divId).addClass("level1 level").removeClass("tree9 tree");
	}
}
function upgradeStone(divId){
	if($(divId).hasClass("stone1")){
		$(divId).addClass("stone2").removeClass("stone1");
	}
	else if($(divId).hasClass("stone2")){
		$(divId).addClass("stone3").removeClass("stone2");
	}
	else if($(divId).hasClass("stone3")){
		$(divId).addClass("stone4").removeClass("stone3");
	}
	else if($(divId).hasClass("stone4")){
		$(divId).addClass("stone5").removeClass("stone4");
	}
	else if($(divId).hasClass("stone5")){
		$(divId).addClass("stone6").removeClass("stone5");
	}
	else if($(divId).hasClass("stone6")){
		$(divId).addClass("stone7").removeClass("stone6");
	}
	else if($(divId).hasClass("stone7")){
		$(divId).addClass("stone8").removeClass("stone7");
	}
	else if($(divId).hasClass("stone8")){
		$(divId).addClass("stone9").removeClass("stone8");
	}
	else if($(divId).hasClass("stone9")){
		$(divId).addClass("level1 level").removeClass("stone9 stone");
	}
}
function upgradeOre(divId){
	if($(divId).hasClass("ore1")){
		$(divId).addClass("ore2").removeClass("ore1");
	}
	else if($(divId).hasClass("ore2")){
		$(divId).addClass("ore3").removeClass("ore2");
	}
	else if($(divId).hasClass("ore3")){
		$(divId).addClass("ore4").removeClass("ore3");
	}
	else if($(divId).hasClass("ore4")){
		$(divId).addClass("ore5").removeClass("ore4");
	}
	else if($(divId).hasClass("ore5")){
		$(divId).addClass("ore6").removeClass("ore5");
	}
	else if($(divId).hasClass("ore6")){
		$(divId).addClass("ore7").removeClass("ore6");
	}
	else if($(divId).hasClass("ore7")){
		$(divId).addClass("ore8").removeClass("ore7");
	}
	else if($(divId).hasClass("ore8")){
		$(divId).addClass("ore9").removeClass("ore8");
	}
	else if($(divId).hasClass("ore9")){
		$(divId).addClass("level1 level").removeClass("ore9 ore");
	}
}
function upgradeLevel(divId){
	if($(divId).hasClass("level1")){
		$(divId).addClass("level2").removeClass("level1");
	}
	else if($(divId).hasClass("level2")){
		$(divId).addClass("level3").removeClass("level2");
	}
	else if($(divId).hasClass("level3")){
		$(divId).addClass("level4").removeClass("level3");
	}
	else if($(divId).hasClass("level4")){
		$(divId).addClass("level5").removeClass("level4");
	}
	else if($(divId).hasClass("level5")){
		$(divId).addClass("level6").removeClass("level5");
	}
	else if($(divId).hasClass("level6")){
		$(divId).addClass("level7").removeClass("levele6");
	}
	else if($(divId).hasClass("level7")){
		$(divId).addClass("level8").removeClass("level7");
	}
	else if($(divId).hasClass("level8")){
		$(divId).addClass("level9").removeClass("level8");
	}
	else if($(divId).hasClass("level9")){
		$(divId).addClass("level10").removeClass("level9");
	}
}
// ale is to decide whether to alert, if a div is upgraded to level9, or no areas could be integrated or upgraded.
function ale(){
	if($("#d1").hasClass("level9")||$("#d2").hasClass("level9")||$("#d3").hasClass("level9")||$("#d4").hasClass("level9")||$("#d5").hasClass("level9")||$("#d6").hasClass("level9")||$("#d7").hasClass("level9")||$("#d8").hasClass("level9")||$("#d9").hasClass("level9")||$("#d10").hasClass("level9")||$("#d11").hasClass("level9")||$("#d12").hasClass("level9")||$("#d13").hasClass("level9")||$("#d14").hasClass("level9")||$("#d15").hasClass("level9")||$("#d16").hasClass("level9")){alert("Congratulations! You have built your city to the highest level! If you want to play for another time, please refresh the web page.");}
	else if(!(($("#d1").hasClass("tree")&&$("#d2").hasClass("tree"))||($("#d1").hasClass("stone")&&$("#d2").hasClass("stone"))||($("#d1").hasClass("ore")&&$("#d2").hasClass("ore"))||($("#d1").hasClass("level")&&$("#d2").hasClass("level"))||($("#d3").hasClass("tree")&&$("#d2").hasClass("tree"))||($("#d3").hasClass("stone")&&$("#d2").hasClass("stone"))||($("#d3").hasClass("ore")&&$("#d2").hasClass("ore"))||($("#d3").hasClass("level")&&$("#d2").hasClass("level"))||($("#d3").hasClass("tree")&&$("#d4").hasClass("tree"))||($("#d3").hasClass("stone")&&$("#d4").hasClass("stone"))||($("#d3").hasClass("ore")&&$("#d4").hasClass("ore"))||($("#d3").hasClass("level")&&$("#d4").hasClass("level"))||($("#d5").hasClass("tree")&&$("#d6").hasClass("tree"))||($("#d5").hasClass("stone")&&$("#d6").hasClass("stone"))||($("#d5").hasClass("ore")&&$("#d6").hasClass("ore"))||($("#d5").hasClass("level")&&$("#d6").hasClass("level"))||($("#d7").hasClass("tree")&&$("#d6").hasClass("tree"))||($("#d7").hasClass("stone")&&$("#d6").hasClass("stone"))||($("#d7").hasClass("ore")&&$("#d6").hasClass("ore"))||($("#d7").hasClass("level")&&$("#d6").hasClass("level"))||($("#d7").hasClass("tree")&&$("#d8").hasClass("tree"))||($("#d7").hasClass("stone")&&$("#d8").hasClass("stone"))||($("#d7").hasClass("ore")&&$("#d8").hasClass("ore"))||($("#d7").hasClass("level")&&$("#d8").hasClass("level"))||($("#d9").hasClass("tree")&&$("#d10").hasClass("tree"))||($("#d9").hasClass("stone")&&$("#d10").hasClass("stone"))||($("#d9").hasClass("ore")&&$("#d10").hasClass("ore"))||($("#d9").hasClass("level")&&$("#d10").hasClass("level"))||($("#d11").hasClass("tree")&&$("#d10").hasClass("tree"))||($("#d11").hasClass("stone")&&$("#d10").hasClass("stone"))||($("#d11").hasClass("ore")&&$("#d10").hasClass("ore"))||($("#d11").hasClass("level")&&$("#d10").hasClass("level"))||($("#d11").hasClass("tree")&&$("#d12").hasClass("tree"))||($("#d11").hasClass("stone")&&$("#d12").hasClass("stone"))||($("#d11").hasClass("ore")&&$("#d12").hasClass("ore"))||($("#d11").hasClass("level")&&$("#d12").hasClass("level"))||($("#d13").hasClass("tree")&&$("#d14").hasClass("tree"))||($("#d13").hasClass("stone")&&$("#d14").hasClass("stone"))||($("#d13").hasClass("ore")&&$("#d14").hasClass("ore"))||($("#d13").hasClass("level")&&$("#d14").hasClass("level"))||($("#d15").hasClass("tree")&&$("#d14").hasClass("tree"))||($("#d15").hasClass("stone")&&$("#d14").hasClass("stone"))||($("#d15").hasClass("ore")&&$("#d14").hasClass("ore"))||($("#d15").hasClass("level")&&$("#d14").hasClass("level"))||($("#d15").hasClass("tree")&&$("#d16").hasClass("tree"))||($("#d15").hasClass("stone")&&$("#d16").hasClass("stone"))||($("#d15").hasClass("ore")&&$("#d16").hasClass("ore"))||($("#d15").hasClass("level")&&$("#d16").hasClass("level"))||($("#d1").hasClass("tree")&&$("#d5").hasClass("tree"))||($("#d1").hasClass("stone")&&$("#d5").hasClass("stone"))||($("#d1").hasClass("ore")&&$("#d5").hasClass("ore"))||($("#d1").hasClass("level")&&$("#d5").hasClass("level"))||($("#d9").hasClass("tree")&&$("#d5").hasClass("tree"))||($("#d9").hasClass("stone")&&$("#d5").hasClass("stone"))||($("#d9").hasClass("ore")&&$("#d5").hasClass("ore"))||($("#d9").hasClass("level")&&$("#d5").hasClass("level"))||($("#d9").hasClass("tree")&&$("#d13").hasClass("tree"))||($("#d9").hasClass("stone")&&$("#d13").hasClass("stone"))||($("#d9").hasClass("ore")&&$("#d13").hasClass("ore"))||($("#d9").hasClass("level")&&$("#d13").hasClass("level"))||($("#d2").hasClass("tree")&&$("#d6").hasClass("tree"))||($("#d2").hasClass("stone")&&$("#d6").hasClass("stone"))||($("#d2").hasClass("ore")&&$("#d6").hasClass("ore"))||($("#d2").hasClass("level")&&$("#d6").hasClass("level"))||($("#d10").hasClass("tree")&&$("#d6").hasClass("tree"))||($("#d10").hasClass("stone")&&$("#d6").hasClass("stone"))||($("#d10").hasClass("ore")&&$("#d6").hasClass("ore"))||($("#d10").hasClass("level")&&$("#d6").hasClass("level"))||($("#d10").hasClass("tree")&&$("#d14").hasClass("tree"))||($("#d10").hasClass("stone")&&$("#d14").hasClass("stone"))||($("#d10").hasClass("ore")&&$("#d14").hasClass("ore"))||($("#d10").hasClass("level")&&$("#d14").hasClass("level"))||($("#d3").hasClass("tree")&&$("#d7").hasClass("tree"))||($("#d3").hasClass("stone")&&$("#d7").hasClass("stone"))||($("#d3").hasClass("ore")&&$("#d7").hasClass("ore"))||($("#d3").hasClass("level")&&$("#d7").hasClass("level"))||($("#d11").hasClass("tree")&&$("#d7").hasClass("tree"))||($("#d11").hasClass("stone")&&$("#d7").hasClass("stone"))||($("#d11").hasClass("ore")&&$("#d7").hasClass("ore"))||($("#d11").hasClass("level")&&$("#d7").hasClass("level"))||($("#d11").hasClass("tree")&&$("#d15").hasClass("tree"))||($("#d11").hasClass("stone")&&$("#d15").hasClass("stone"))||($("#d11").hasClass("ore")&&$("#d15").hasClass("ore"))||($("#d11").hasClass("level")&&$("#d15").hasClass("level"))||($("#d4").hasClass("tree")&&$("#d8").hasClass("tree"))||($("#d4").hasClass("stone")&&$("#d8").hasClass("stone"))||($("#d4").hasClass("ore")&&$("#d8").hasClass("ore"))||($("#d4").hasClass("level")&&$("#d8").hasClass("level"))||($("#d12").hasClass("tree")&&$("#d8").hasClass("tree"))||($("#d12").hasClass("stone")&&$("#d8").hasClass("stone"))||($("#d12").hasClass("ore")&&$("#d8").hasClass("ore"))||($("#d12").hasClass("level")&&$("#d8").hasClass("level"))||($("#d12").hasClass("tree")&&$("#d16").hasClass("tree"))||($("#d12").hasClass("stone")&&$("#d16").hasClass("stone"))||($("#d12").hasClass("ore")&&$("#d16").hasClass("ore"))||($("#d12").hasClass("level")&&$("#d16").hasClass("level")))){alert("No areas could be integrated or upgraded. If you want to play for another time, please refresh the web page.");}
}
// rem is to remove the class of che
function rem(){
	if($("#d1").hasClass("che")){$("#d1").removeClass("che");}
	if($("#d2").hasClass("che")){$("#d2").removeClass("che");}
	if($("#d3").hasClass("che")){$("#d3").removeClass("che");}
	if($("#d4").hasClass("che")){$("#d4").removeClass("che");}
	if($("#d5").hasClass("che")){$("#d5").removeClass("che");}
	if($("#d6").hasClass("che")){$("#d6").removeClass("che");}
	if($("#d7").hasClass("che")){$("#d7").removeClass("che");}
	if($("#d8").hasClass("che")){$("#d8").removeClass("che");}
	if($("#d9").hasClass("che")){$("#d9").removeClass("che");}
	if($("#d10").hasClass("che")){$("#d10").removeClass("che");}
	if($("#d11").hasClass("che")){$("#d11").removeClass("che");}
	if($("#d12").hasClass("che")){$("#d12").removeClass("che");}
	if($("#d13").hasClass("che")){$("#d13").removeClass("che");}
	if($("#d14").hasClass("che")){$("#d14").removeClass("che");}
	if($("#d15").hasClass("che")){$("#d15").removeClass("che");}
	if($("#d16").hasClass("che")){$("#d16").removeClass("che");}
	if($("#d1").hasClass("animated bounceInDown")){$("#d1").removeClass("animated bounceInDown");}
	if($("#d2").hasClass("animated bounceInDown")){$("#d2").removeClass("animated bounceInDown");}
	if($("#d3").hasClass("animated bounceInDown")){$("#d3").removeClass("animated bounceInDown");}
	if($("#d4").hasClass("animated bounceInDown")){$("#d4").removeClass("animated bounceInDown");}
	if($("#d5").hasClass("animated bounceInDown")){$("#d5").removeClass("animated bounceInDown");}
	if($("#d6").hasClass("animated bounceInDown")){$("#d6").removeClass("animated bounceInDown");}
	if($("#d7").hasClass("animated bounceInDown")){$("#d7").removeClass("animated bounceInDown");}
	if($("#d8").hasClass("animated bounceInDown")){$("#d8").removeClass("animated bounceInDown");}
	if($("#d9").hasClass("animated bounceInDown")){$("#d9").removeClass("animated bounceInDown");}
	if($("#d10").hasClass("animated bounceInDown")){$("#d10").removeClass("animated bounceInDown");}
	if($("#d11").hasClass("animated bounceInDown")){$("#d11").removeClass("animated bounceInDown");}
	if($("#d12").hasClass("animated bounceInDown")){$("#d12").removeClass("animated bounceInDown");}
	if($("#d13").hasClass("animated bounceInDown")){$("#d13").removeClass("animated bounceInDown");}
	if($("#d14").hasClass("animated bounceInDown")){$("#d14").removeClass("animated bounceInDown");}
	if($("#d15").hasClass("animated bounceInDown")){$("#d15").removeClass("animated bounceInDown");}
	if($("#d16").hasClass("animated bounceInDown")){$("#d16").removeClass("animated bounceInDown");}
	if($("#d1").hasClass("animated slideInDown")){$("#d1").removeClass("animated slideInDown");}
	if($("#d2").hasClass("animated slideInDown")){$("#d2").removeClass("animated slideInDown");}
	if($("#d3").hasClass("animated slideInDown")){$("#d3").removeClass("animated slideInDown");}
	if($("#d4").hasClass("animated slideInDown")){$("#d4").removeClass("animated slideInDown");}
	if($("#d5").hasClass("animated slideInDown")){$("#d5").removeClass("animated slideInDown");}
	if($("#d6").hasClass("animated slideInDown")){$("#d6").removeClass("animated slideInDown");}
	if($("#d7").hasClass("animated slideInDown")){$("#d7").removeClass("animated slideInDown");}
	if($("#d8").hasClass("animated slideInDown")){$("#d8").removeClass("animated slideInDown");}
	if($("#d9").hasClass("animated slideInDown")){$("#d9").removeClass("animated slideInDown");}
	if($("#d10").hasClass("animated slideInDown")){$("#d10").removeClass("animated slideInDown");}
	if($("#d11").hasClass("animated slideInDown")){$("#d11").removeClass("animated slideInDown");}
	if($("#d12").hasClass("animated slideInDown")){$("#d12").removeClass("animated slideInDown");}
	if($("#d13").hasClass("animated slideInDown")){$("#d13").removeClass("animated slideInDown");}
	if($("#d14").hasClass("animated slideInDown")){$("#d14").removeClass("animated slideInDown");}
	if($("#d15").hasClass("animated slideInDown")){$("#d15").removeClass("animated slideInDown");}
	if($("#d16").hasClass("animated slideInDown")){$("#d16").removeClass("animated slideInDown");}
}
// drop is to drop pictures from upper div(s) to lower div(s); if upper div(s) are empty, new pictures will be produced randomly and fall in upper div(s). animate.min.css is used to provide slideInDown and bounceInDown animations.
function drop(){
	setTimeout(function (){	
		if($("#d13").hasClass("emp")){
			if(!$("#d9").hasClass("emp")){
				$("#d13").attr("class",$("#d9").attr("class")).addClass("animated slideInDown");
				$("#d9").addClass("emp");
			}
			else{
				if(!$("#d5").hasClass("emp")){
					$("#d13").attr("class",$("#d5").attr("class")).addClass("animated slideInDown");
					$("#d5").addClass("emp");
				}
				else{
					if(!$("#d1").hasClass("emp")){
						$("#d13").attr("class",$("#d1").attr("class")).addClass("animated slideInDown");
						$("#d1").addClass("emp");
					}
					else{ran("#d13");}
				}
			}
		}
		if($("#d9").hasClass("emp")){
			if(!$("#d5").hasClass("emp")){
				$("#d9").attr("class",$("#d5").attr("class")).addClass("animated slideInDown");
				$("#d5").addClass("emp");
			}
			else{
				if(!$("#d1").hasClass("emp")){
					$("#d9").attr("class",$("#d1").attr("class")).addClass("animated slideInDown");
					$("#d1").addClass("emp");
				}
				else{ran("#d9");}
			}
		}
		if($("#d5").hasClass("emp")){
			if(!$("#d1").hasClass("emp")){
				$("#d5").attr("class",$("#d1").attr("class")).addClass("animated slideInDown");
				$("#d1").addClass("emp");
			}
			else{ran("#d5");}
		}
		if($("#d1").hasClass("emp")){ran("#d1");}
		if($("#d14").hasClass("emp")){
			if(!$("#d10").hasClass("emp")){
				$("#d14").attr("class",$("#d10").attr("class")).addClass("animated slideInDown");
				$("#d10").addClass("emp");
			}
			else{
				if(!$("#d6").hasClass("emp")){
					$("#d14").attr("class",$("#d6").attr("class")).addClass("animated slideInDown");
					$("#d6").addClass("emp");
				}
				else{
					if(!$("#d2").hasClass("emp")){
						$("#d14").attr("class",$("#d2").attr("class")).addClass("animated slideInDown");
						$("#d2").addClass("emp");
					}
					else{ran("#d14");}
				}
			}
		}
		if($("#d10").hasClass("emp")){
			if(!$("#d6").hasClass("emp")){
				$("#d10").attr("class",$("#d6").attr("class")).addClass("animated slideInDown");
				$("#d6").addClass("emp");
			}
			else{
				if(!$("#d2").hasClass("emp")){
					$("#d10").attr("class",$("#d2").attr("class")).addClass("animated slideInDown");
					$("#d2").addClass("emp");
				}
				else{ran("#d10");}
			}
		}
		if($("#d6").hasClass("emp")){
			if(!$("#d2").hasClass("emp")){
				$("#d6").attr("class",$("#d2").attr("class")).addClass("animated slideInDown");
				$("#d2").addClass("emp");
			}
			else{ran("#d6");}
		}
		if($("#d2").hasClass("emp")){ran("#d2");}
		if($("#d15").hasClass("emp")){
			if(!$("#d11").hasClass("emp")){
				$("#d15").attr("class",$("#d11").attr("class")).addClass("animated slideInDown");
				$("#d11").addClass("emp");
			}
			else{
				if(!$("#d7").hasClass("emp")){
					$("#d15").attr("class",$("#d7").attr("class")).addClass("animated slideInDown");
					$("#d7").addClass("emp");
				}
				else{
					if(!$("#d3").hasClass("emp")){
						$("#d15").attr("class",$("#d3").attr("class")).addClass("animated slideInDown");
						$("#d3").addClass("emp");
					}
					else{ran("#d15");}
				}
			}
		}
		if($("#d11").hasClass("emp")){
			if(!$("#d7").hasClass("emp")){
				$("#d11").attr("class",$("#d7").attr("class")).addClass("animated slideInDown");
				$("#d7").addClass("emp");
			}
			else{
				if(!$("#d3").hasClass("emp")){
					$("#d11").attr("class",$("#d3").attr("class")).addClass("animated slideInDown");
					$("#d3").addClass("emp");
				}
				else{ran("#d11");}
			}
		}
		if($("#d7").hasClass("emp")){
			if(!$("#d3").hasClass("emp")){
				$("#d7").attr("class",$("#d3").attr("class")).addClass("animated slideInDown");
				$("#d3").addClass("emp");
			}
			else{ran("#d7");}
		}
		if($("#d3").hasClass("emp")){ran("#d3");}
		if($("#d16").hasClass("emp")){
			if(!$("#d12").hasClass("emp")){
				$("#d16").attr("class",$("#d12").attr("class")).addClass("animated slideInDown");
				$("#d12").addClass("emp");
			}
			else{
				if(!$("#d8").hasClass("emp")){
					$("#d16").attr("class",$("#d8").attr("class")).addClass("animated slideInDown");
					$("#d8").addClass("emp");
				}
				else{
					if(!$("#d4").hasClass("emp")){
						$("#d16").attr("class",$("#d4").attr("class")).addClass("animated slideInDown");
						$("#d4").addClass("emp");
					}
					else{ran("#d16");}
				}
			}
		}
		if($("#d12").hasClass("emp")){
			if(!$("#d8").hasClass("emp")){
				$("#d12").attr("class",$("#d8").attr("class")).addClass("animated slideInDown");
				$("#d8").addClass("emp");
			}
			else{
				if(!$("#d4").hasClass("emp")){
					$("#d12").attr("class",$("#d4").attr("class")).addClass("animated slideInDown");
					$("#d4").addClass("emp");
				}
				else{ran("#d12");}
			}
		}
		if($("#d8").hasClass("emp")){
			if(!$("#d4").hasClass("emp")){
				$("#d8").attr("class",$("#d4").attr("class")).addClass("animated slideInDown");
				$("#d4").addClass("emp");
			}
			else{ran("#d8");}
		}
		if($("#d4").hasClass("emp")){ran("#d4");}
	},700);
}
// ran is to decide the type of each produced picture, according to the random number. 
function ran(divId){
	if($("#d1").hasClass("level")||$("#d2").hasClass("level")||$("#d3").hasClass("level")||$("#d4").hasClass("level")||$("#d5").hasClass("level")||$("#d6").hasClass("level")||$("#d7").hasClass("level")||$("#d8").hasClass("level")||$("#d9").hasClass("level")||$("#d10").hasClass("level")||$("#d11").hasClass("level")||$("#d12").hasClass("level")||$("#d13").hasClass("level")||$("#d14").hasClass("level")||$("#d15").hasClass("level")||$("#d16").hasClass("level"))
	{
		var num=Math.floor(Math.random()*3);
		if(num<1){$(divId).attr("class","tree1 tree").addClass("animated bounceInDown");}
		else if(num<2){$(divId).attr("class","stone1 stone").addClass("animated bounceInDown");}
		else{$(divId).attr("class","ore1 ore").addClass("animated bounceInDown");}
	}
	else{
		var num=Math.floor(Math.random()*2);
		if(num<1){$(divId).attr("class","tree1 tree").addClass("animated bounceInDown");}
		else{$(divId).attr("class","stone1 stone").addClass("animated bounceInDown");}
	}
}
// bac is to set the background image to represent the highest level of pictures in the current page.
function bac(){
	if($("#d1").hasClass("level9")||$("#d2").hasClass("level9")||$("#d3").hasClass("level9")||$("#d4").hasClass("level9")||$("#d5").hasClass("level9")||$("#d6").hasClass("level9")||$("#d7").hasClass("level9")||$("#d8").hasClass("level9")||$("#d9").hasClass("level9")||$("#d10").hasClass("level9")||$("#d11").hasClass("level9")||$("#d12").hasClass("level9")||$("#d13").hasClass("level9")||$("#d14").hasClass("level9")||$("#d15").hasClass("level9")||$("#d16").hasClass("level9")){$(document.body).css("background","url(img/victory.jpg) 0 -270px");}
	else if($("#d1").hasClass("level8")||$("#d2").hasClass("level8")||$("#d3").hasClass("level8")||$("#d4").hasClass("level8")||$("#d5").hasClass("level8")||$("#d6").hasClass("level8")||$("#d7").hasClass("level8")||$("#d8").hasClass("level8")||$("#d9").hasClass("level8")||$("#d10").hasClass("level8")||$("#d11").hasClass("level8")||$("#d12").hasClass("level8")||$("#d13").hasClass("level8")||$("#d14").hasClass("level8")||$("#d15").hasClass("level8")||$("#d16").hasClass("level8")){$(document.body).css("background","url(img/eight.jpg) 0 -270px");}
	else if($("#d1").hasClass("level7")||$("#d2").hasClass("level7")||$("#d3").hasClass("level7")||$("#d4").hasClass("level7")||$("#d5").hasClass("level7")||$("#d6").hasClass("level7")||$("#d7").hasClass("level7")||$("#d8").hasClass("level7")||$("#d9").hasClass("level7")||$("#d10").hasClass("level7")||$("#d11").hasClass("level7")||$("#d12").hasClass("level7")||$("#d13").hasClass("level7")||$("#d14").hasClass("level7")||$("#d15").hasClass("level7")||$("#d16").hasClass("level7")){$(document.body).css("background","url(img/seven.jpg) 0 -270px");}
	else if($("#d1").hasClass("level6")||$("#d2").hasClass("level6")||$("#d3").hasClass("level6")||$("#d4").hasClass("level6")||$("#d5").hasClass("level6")||$("#d6").hasClass("level6")||$("#d7").hasClass("level6")||$("#d8").hasClass("level6")||$("#d9").hasClass("level6")||$("#d10").hasClass("level6")||$("#d11").hasClass("level6")||$("#d12").hasClass("level6")||$("#d13").hasClass("level6")||$("#d14").hasClass("level6")||$("#d15").hasClass("level6")||$("#d16").hasClass("level6")){$(document.body).css("background","url(img/six.jpg) 0 -270px");}
	else if($("#d1").hasClass("level5")||$("#d2").hasClass("level5")||$("#d3").hasClass("level5")||$("#d4").hasClass("level5")||$("#d5").hasClass("level5")||$("#d6").hasClass("level5")||$("#d7").hasClass("level5")||$("#d8").hasClass("level5")||$("#d9").hasClass("level5")||$("#d10").hasClass("level5")||$("#d11").hasClass("level5")||$("#d12").hasClass("level5")||$("#d13").hasClass("level5")||$("#d14").hasClass("level5")||$("#d15").hasClass("level5")||$("#d16").hasClass("level5")){$(document.body).css("background","url(img/five.jpg) 0 -270px");}
	else if($("#d1").hasClass("level4")||$("#d2").hasClass("level4")||$("#d3").hasClass("level4")||$("#d4").hasClass("level4")||$("#d5").hasClass("level4")||$("#d6").hasClass("level4")||$("#d7").hasClass("level4")||$("#d8").hasClass("level4")||$("#d9").hasClass("level4")||$("#d10").hasClass("level4")||$("#d11").hasClass("level4")||$("#d12").hasClass("level4")||$("#d13").hasClass("level4")||$("#d14").hasClass("level4")||$("#d15").hasClass("level4")||$("#d16").hasClass("level4")){$(document.body).css("background","url(img/four.jpg) 0 -270px");}
	else if($("#d1").hasClass("level3")||$("#d2").hasClass("level3")||$("#d3").hasClass("level3")||$("#d4").hasClass("level3")||$("#d5").hasClass("level3")||$("#d6").hasClass("level3")||$("#d7").hasClass("level3")||$("#d8").hasClass("level3")||$("#d9").hasClass("level3")||$("#d10").hasClass("level3")||$("#d11").hasClass("level3")||$("#d12").hasClass("level3")||$("#d13").hasClass("level3")||$("#d14").hasClass("level3")||$("#d15").hasClass("level3")||$("#d16").hasClass("level3")){$(document.body).css("background","url(img/three.jpg) 0 -270px");}
	else if($("#d1").hasClass("level2")||$("#d2").hasClass("level2")||$("#d3").hasClass("level2")||$("#d4").hasClass("level2")||$("#d5").hasClass("level2")||$("#d6").hasClass("level2")||$("#d7").hasClass("level2")||$("#d8").hasClass("level2")||$("#d9").hasClass("level2")||$("#d10").hasClass("level2")||$("#d11").hasClass("level2")||$("#d12").hasClass("level2")||$("#d13").hasClass("level2")||$("#d14").hasClass("level2")||$("#d15").hasClass("level2")||$("#d16").hasClass("level2")){$(document.body).css("background","url(img/two.jpg) 0 -270px");}
	else if($("#d1").hasClass("level1")||$("#d2").hasClass("level1")||$("#d3").hasClass("level1")||$("#d4").hasClass("level1")||$("#d5").hasClass("level1")||$("#d6").hasClass("level1")||$("#d7").hasClass("level1")||$("#d8").hasClass("level1")||$("#d9").hasClass("level1")||$("#d10").hasClass("level1")||$("#d11").hasClass("level1")||$("#d12").hasClass("level1")||$("#d13").hasClass("level1")||$("#d14").hasClass("level1")||$("#d15").hasClass("level1")||$("#d16").hasClass("level1")){$(document.body).css("background","url(img/one.jpg) 0 -270px");}
	else{$(document.body).css("background","url(img/zero.jpg) 0 -270px");}
}
// For each click, functions happen successively.
function clickDropD1(){
	ale();
	clickD1();
	rem();
	drop();
	bac();
}
function clickDropD2(){
	ale();
	clickD2();
	rem();
	drop();
	bac();
}
function clickDropD3(){
	ale();
	clickD3();
	rem();
	drop();
	bac();
}
function clickDropD4(){
	ale();
	clickD4();
	rem();
	drop();
	bac();
}
function clickDropD5(){
	ale();
	clickD5();
	rem();
	drop();
	bac();
}
function clickDropD6(){
	ale();
	clickD6();
	rem();
	drop();
	bac();
}
function clickDropD7(){
	ale();
	clickD7();
	rem();
	drop();
	bac();
}
function clickDropD8(){
	ale();
	clickD8();
	rem();
	drop();
	bac();
}
function clickDropD9(){
	ale();
	clickD9();
	rem();
	drop();
	bac();
}
function clickDropD10(){
	ale();
	clickD10();
	rem();
	drop();
	bac();
}
function clickDropD11(){
	ale();
	clickD11();
	rem();
	drop();
	bac();
}
function clickDropD12(){
	ale();
	clickD12();
	rem();
	drop();
	bac();
}
function clickDropD13(){
	ale();
	clickD13();
	rem();
	drop();
	bac();
}
function clickDropD14(){
	ale();
	clickD14();
	rem();
	drop();
	bac();
}
function clickDropD15(){
	ale();
	clickD15();
	rem();
	drop();
	bac();
}
function clickDropD16(){
	ale();
	clickD16();
	rem();
	drop();
	bac();
}
$("#d1").click(clickDropD1);
$("#d2").click(clickDropD2);
$("#d3").click(clickDropD3);
$("#d4").click(clickDropD4);
$("#d5").click(clickDropD5);
$("#d6").click(clickDropD6);
$("#d7").click(clickDropD7);
$("#d8").click(clickDropD8);
$("#d9").click(clickDropD9);
$("#d10").click(clickDropD10);
$("#d11").click(clickDropD11);
$("#d12").click(clickDropD12);
$("#d13").click(clickDropD13);
$("#d14").click(clickDropD14);
$("#d15").click(clickDropD15);
$("#d16").click(clickDropD16);








		
