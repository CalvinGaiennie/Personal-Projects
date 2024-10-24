"use strict";

let doc; // Declare a global variable to hold the jsPDF instance
const chart = document.getElementById("chart");
const preview = document.getElementById("preview");
// Function to generate PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  doc = new jsPDF(); // Create a new jsPDF instance

  // Get the content from the textarea
  const chartValue = document.getElementById("chart").value;

  // Add the content to the PDF
  doc.text(chartValue, 10, 10);
}

// Function to show a preview of the PDF
function generatePreview() {
  generatePDF(); // Generate the PDF

  // Convert the PDF to a Blob and create a preview URL
  const pdfBlob = doc.output("blob");
  const previewUrl = URL.createObjectURL(pdfBlob);

  // Display the PDF in the iframe
  document.getElementById("pdfPreview").src = previewUrl;
}

// Function to save the PDF
function savePDF() {
  generatePDF(); // Ensure the PDF is generated
  doc.save("user-input.pdf"); // Save the PDF
}

document.addEventListener("DOMContentLoaded", function () {
  generatePreview();
});
//////////////////////////////////////////
function formatString(str) {
  // add '|' every four charachters
  for (let i = 0; i <= str.length; i++) {
    let four = i * 5;
    if (str.length >= four) {
      str = str.slice(0, four) + "|" + str.slice(four);
    }
  }
  // add a new line after 4 bars
  for (let i = 0; i <= str.length; i++) {
    let line = i * 22;
    if (str.length >= line) {
      str = str.slice(0, line) + "\n" + "|" + str.slice(line);
    }
  }
  console.log(str);
  return str;
}

preview.addEventListener("click", function () {
  const chartV = chart.value;
  const newString = formatString(chartV);
  console.log(newString);
});
