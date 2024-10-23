"use strict";

let doc; // Declare a global variable to hold the jsPDF instance

// Function to generate PDF
function generatePDF() {
  const { jsPDF } = window.jspdf;
  doc = new jsPDF(); // Create a new jsPDF instance

  // Get the content from the textarea
  const chart = document.getElementById("chart").value;

  // Add the content to the PDF
  doc.text(chart, 10, 10);
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
