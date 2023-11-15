function SquP(side){
    return side*4;
}
function squarePerimeterCalculate(){
    const numberside=document.getElementById("squareInput");
    const result= parseInt(numberside.value);

    const perimeter = SquP(result);
    document.getElementById("SquP").innerText= "It's perimeter is " + perimeter + " cm";
}


function SquA(side){
    return side*side;
}
function squareAreaCalculate(){
    const numberside=document.getElementById("squareInput");
    const result=parseInt(numberside.value);
    
    const area =SquA(result);
    document.getElementById("SquA").innerText="The Area of the Square is "+area+" cm^2";
}


  
  function CiP(radio){
    return Math.PI*2*radio;
}

function circlePerimeterCalculate(){
    const numberside=document.getElementById("circleInput");
    const result= parseInt(numberside.value);

    const perimeter = CiP(result);
    document.getElementById("CiP").innerText= "It's perimeter is " + perimeter + " cm";
}


function CiA(radio){
    return Math.PI*Math.pow(radio,2);
}
function circleAreaCalculate(){
    const numberside=document.getElementById("circleInput");
    const result=parseInt(numberside.value);
    
    const area =CiA(result);
    document.getElementById("CiA").innerText="The Area of the circle is "+area+" cm^2";
}

function TrP (side1, side2, base) {
    return side1 + side2 + base;
}

function trianglePerimeterCalculate() {
    const side1 = parseInt(document.getElementById("triangleInput1").value);
    const side2 = parseInt(document.getElementById("triangleInput2").value);
    const base = parseInt(document.getElementById("triangleInputB").value);

    const perimeter = TrP(side1,side2,base);

    document.getElementById("TrP").innerText = "Its perimeter is: " + perimeter + " cm.";
}
function TrA (base, h) {
    return (base * h) / 2;
}
function triangleAreaCalculate() {
    const base = parseInt(document.getElementById("triangleInputB").value);
    const h = parseInt(document.getElementById("triangleInputH").value);

    const area = TrA(base, h);

    document.getElementById("TrA").innerText = "Its area is "+area+" cm^2";
}


function cleanSquare(){
    const cleanParagrahp1 = document.getElementById("SA");
    const cleanParagrahp2 = document.getElementById("SP");
    let display = document.getElementById("squareInput");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    display.value="";
}

function cleanCircle(){
    const cleanParagrahp1 = document.getElementById("CA");
    const cleanParagrahp2 = document.getElementById("CP");
    let display = document.getElementById("circleInput");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    display.value="";
}

function cleanTriangle(){
    const cleanParagrahp1 = document.getElementById("TrA");
    const cleanParagrahp2 = document.getElementById("TrP");
    const TRII = document.getElementById("triangleInput1");
    const TRI2 = document.getElementById("triangleInput2");
    const TRIB = document.getElementById("triangleInputB");
    const TRIH = document.getElementById("triangleInputH");

    cleanParagrahp1.innerText = "";
    cleanParagrahp2.innerText = "";
    TRII.value="";
    TRI2.value="";
    TRIB.value="";
    TRIH.value="";
}