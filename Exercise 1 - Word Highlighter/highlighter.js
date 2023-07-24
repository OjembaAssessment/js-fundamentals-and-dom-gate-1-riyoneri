console.log("Exercise 1 - Word Highlighter");
const para = document.getElementById("myParagraph")
var wordCounts = {};
var words = para.textContent.split(/\b/);

for (var i = 0; i < words.length; i++) {
    if (!(/[ ,.]/.test(words[i])))
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1
}

const sortedArr = [];

for (let word in wordCounts) sortedArr.push([word, wordCounts[word]])

sortedArr.sort((a, b) => b[1] - a[1])
console.table(sortedArr)
    // console.table(wordCounts)