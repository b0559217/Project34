
/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Britney Amaro
      Date:   03/30/2025

      Filename: project03-04.js
*/

// Arrays containing review data
let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewTypes = ["P", "N", "N", "P"]; // Updated to include valid types for all reviews

let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
    "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing!",
    "As a solo release of this well-established game, there were too many flaws in the choreography. Many of the moves were buggy and didn't match up with the music.",
    "The installation was buggy and kept crashing my gaming system. When I tried to contact tech support, no one responded to my emails or phone calls. I want my money back; I wish I could give it a zero-star rating.",
    "The latest version of Dance Off improves upon the 8th Edition only slightly, still is one of the best dance-style games on the market."
];
let reviewTitles = [
    "My Favorite Workout Game",
    "Poor Choreography",
    "Buggy with Poor Tech Support",
    "Nice Improvement"
];

// Function to generate star images
function starImages(rating) {
    let imageText = ""; // Initialize an empty string
    for (let i = 1; i <= rating; i++) {
        imageText += "<img src='star.png' alt='star'>"; // Add star image HTML
    }
    return imageText; // Return the completed string
}

// Function to generate and display review tables
function generateReviewsTable(reviewTitles, reviewers, reviewDates, reviews, reviewTypes, stars) {
    // Initialize an empty string for the complete table structure
    let tableHTML = "";

    // Loop through each reviewer to generate individual review tables
    for (let i = 0; i < reviewers.length; i++) {
        let reviewCode = "";

        // Determine the table class based on the review type
if (reviewTypes[i] === "P") {
    reviewCode += "<table class='prime'>";
}   else if (reviewTypes[i] === "N") {
    reviewCode += "<table class='new'>";
}   else {
    reviewCode += "<table class='default'>"; // Added default class for unrecognized types
}
        // Add the review details including the star images
        reviewCode += `
            <tr>
                <td>${reviewTitles[i]}</td>
                <td>${reviewers[i]}</td>
                <td>${reviewDates[i]}</td>
                <td>${reviews[i]}</td>
                <td>${starImages(stars[i])}</td>
            </tr>
        `;

        // Close the individual review table
        reviewCode += "</table>";

        // Append the review table to the overall table HTML
        tableHTML += reviewCode;
    }

    // Insert the generated review table into the first article tag in the document
    let articleTag = document.getElementsByTagName("article")[0];
    if (articleTag) {
        articleTag.insertAdjacentHTML("beforeend", tableHTML);
    } else {
        console.error("No <article> tag found in the document.");
    }
}

// Call the function to generate review tables
generateReviewsTable(reviewTitles, reviewers, reviewDates, reviews, reviewTypes, stars);
