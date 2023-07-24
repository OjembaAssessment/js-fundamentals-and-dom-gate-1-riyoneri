console.log("Exercise 2 - Word Cloud");
const para = document.getElementById("myParagraph")
const wordCloud = document.getElementById("myWordCloud")

var wordCounts = {};
var words = para.innerHTML.split(" ");

for (var i = 0; i < words.length; i++) {
    if (!(/[ ,.]/.test(words[i]))) wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1
}

const sortedArr = [];

for (let word in wordCounts) sortedArr.push([word, wordCounts[word]])

sortedArr.sort((a, b) => b[1] - a[1])

sortedArr.splice(0, 1)

let wordArr = []

const fragment = new DocumentFragment()

let fontSize = 68;

wordCloud.innerHTML = ""
for (let i = 0; i < 12; i++) {
    let span = `<span style="font-size: ${fontSize -= 4}px; margin: 0 20px;">${sortedArr[i][0]}</span>`
    wordCloud.insertAdjacentHTML("beforeEnd", span)
}