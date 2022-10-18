var canvas=document.getElementById("canvas");
var contexto=canvas.getContext("2d");
var cor="red";

contexto.beginPath();
contexto.strokeStyle="grey";
contexto.lineWidth=2;
contexto.rect(150, 143, 430, 200);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="blue";
contexto.lineWidth=5;
contexto.arc(250, 210, 40, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="black";
contexto.lineWidth=5;
contexto.arc(350, 210, 40, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="red";
contexto.lineWidth=5;
contexto.arc(450, 210, 40, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="orange";
contexto.lineWidth=5;
contexto.arc(250+50, 250, 40, 0, 360);
contexto.stroke();

contexto.beginPath();
contexto.strokeStyle="green";
contexto.lineWidth=5;
contexto.arc(400, 210+40, 40, 0, 360);
contexto.stroke();