console.log("Exercise 1 - Word Highlighter");
const para = document.getElementById("myParagraph")
var wordCounts = {};
var words = para.innerHTML.split(" ");

for (var i = 0; i < words.length; i++) {
    if (!(/[ ,.]/.test(words[i])))
        wordCounts[words[i]] = (wordCounts[words[i]] || 0) + 1
}

const sortedArr = [];

for (let word in wordCounts) sortedArr.push([word, wordCounts[word]])

sortedArr.sort((a, b) => b[1] - a[1])

let wordArr = []

for (let i = 0; i < 5; i++) {
    const reg = new RegExp(`^${sortedArr[i][0]}$`, 'i')
    wordArr.push(sortedArr.filter(item => reg.test(item[0])))
}

wordArr = wordArr.flat()

words = words.map(word => {
    if (wordArr.find(newWord => newWord[0] == word || newWord[0] == word.toLowerCase())) {
        if (word == word.toLowerCase()) {
            return `<span style="background-color:yellow;">${word}</span>`
        }
        return `<span style="background-color:yellow;text-decoration: underline;">${word}</span>`
    }

    return word
})

para.innerHTML = words.join(" ")