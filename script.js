const userInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const inputValue = userInput.value.trim();
    if (inputValue === "") {
        alert("Please input a value");
        return;
    }
    const cleaned = inputValue.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    if (cleaned === reversed) {
        result.textContent = `${inputValue} is a palindrome.`;
    } else {
        result.textContent = `${inputValue} is not a palindrome.`;
    };

    userInput.value = "";
});