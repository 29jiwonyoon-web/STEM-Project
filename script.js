body{

background:black;
color:#e5e5e5;

font-family:'Roboto',sans-serif;

margin:0;

}



.navbar{

display:flex;
justify-content:space-between;
align-items:center;

padding:20px 40px;

background:black;

border-bottom:1px solid #800020;

}



.logo{

font-family:'Bebas Neue',sans-serif;
font-size:34px;
color:#800020;

}



.nav-links{

display:flex;
list-style:none;
gap:25px;

}



.nav-links a{

color:#ccc;
text-decoration:none;

transition:0.3s;

}



.nav-links a:hover{

color:#800020;

}



.hero{

text-align:center;
padding:80px 20px;

}



.profile-container{

display:inline-block;

padding:6px;

border-radius:50%;

animation:glow 3s infinite alternate;

}



.profile-img{

width:220px;
border-radius:50%;

}



@keyframes glow{

from{

box-shadow:0 0 10px #800020;

}

to{

box-shadow:0 0 30px #800020,
0 0 60px #800020;

}

}



.hero h2{

font-family:'Bebas Neue';
font-size:50px;

margin-top:20px;

}



.intro{

max-width:600px;
margin:auto;

line-height:1.6;

}



.section{

padding:70px 20px;
max-width:900px;

margin:auto;

}



.section h2{

font-family:'Bebas Neue';
font-size:40px;

color:#800020;

}



.card{

background:#0f0f0f;

border-radius:10px;

padding:40px;

margin-top:40px;

transform-style:preserve-3d;

transition:0.4s;

}



.card:hover{

transform:rotateX(6deg) rotateY(6deg) scale(1.02);

box-shadow:0 20px 40px rgba(128,0,32,0.5);

}



button{

background:#800020;

border:none;

padding:12px 18px;

color:white;

cursor:pointer;

margin-top:10px;

transition:0.3s;

}



button:hover{

box-shadow:0 0 15px #800020;

}



.email{

font-weight:bold;

font-size:18px;

color:#800020;

}



footer{

text-align:center;

padding:30px;

margin-top:60px;

border-top:1px solid #800020;

}
