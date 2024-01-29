function convert() {
    // Get input values
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    // Perform conversion
    let result;
    if (fromUnit === "meters" && toUnit === "kilometers") {
        result = inputValue / 1000;
    } else if (fromUnit === "kilometers" && toUnit === "meters") {
        result = inputValue * 1000;
    } else {
        // Add more conversion options as needed
        result = inputValue; // Default: no conversion
    }

    // Display result
    document.getElementById("result").innerText = `Result: ${result} ${toUnit}`;
}
