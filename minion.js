const InputString = document.getElementById("text-change");
const realAnswerDiv = document.getElementById("real_answer");

const Run = async () => {
  console.log(InputString.value);
  console.log(typeof(InputString.value));
  const inputValue = InputString.value.toLowerCase(); 
  const demoString = string_to_Array(inputValue);
  console.log(demoString);
   
  console.log(demoString);

  const final = await Change_Translator(demoString);

  if (realAnswerDiv) {
    let pElement = realAnswerDiv.querySelector('p');
    if (!pElement) {
      pElement = document.createElement('p');
      realAnswerDiv.appendChild(pElement);
    }
    pElement.textContent = final;
  } else {
    console.error("Element with ID 'real_answer' not found.");
  }
};

function string_to_Array(str) {
  return str.split(' ');
}

async function Change_Translator(arr) {
  try {
    const res = await fetch("./data.json");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    let translatedArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (data[arr[i]] !== undefined) {
        translatedArray[i] = data[arr[i]] + " ";
      } else {
        translatedArray[i] = arr[i] + " ";
      }
    }
    const finalString = translatedArray.join("");
    console.log(finalString);
    return finalString;
  } catch (err) {
    console.error("Error fetching data:", err);
    return "Error during translation.";
  }
}

