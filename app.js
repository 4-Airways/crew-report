{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById("reportForm").addEventListener("submit", function(event) \{\
    event.preventDefault(); // Prevent the default form submission\
\
    // Get form values\
    const incidentType = document.getElementById("incidentType").value;\
    const description = document.getElementById("description").value;\
    const date = document.getElementById("date").value;\
    const time = document.getElementById("time").value;\
\
    // Log the data to the console (you can send it to your server here)\
    console.log("Incident Type:", incidentType);\
    console.log("Description:", description);\
    console.log("Date:", date);\
    console.log("Time:", time);\
\
    // Clear the form fields\
    document.getElementById("reportForm").reset();\
\});}