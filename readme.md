# Minion Language Translator Using Fun Translations Minion API

You can use the [Fun Translations Minion API](https://funtranslations.com/api/minion) to translate text into Minion language. This API allows you to integrate Minion translation functionality into your website or application. Here are some details:

- **Endpoint:** `https://api.funtranslations.com/translate/minion.json`
- **Rate Limiting:** For public API calls, you get 60 API calls per day with a distribution of 5 calls per hour. For paid plans, this limit is increased.
- **Authentication:** For public calls, you don't need an API key. For paid subscriptions, you need to pass the API key in the request header.

## Example Usage
Here's an example of how to use the API with JavaScript:

```javascript
async function translateToMinion(text) {
  const response = await fetch(`https://api.funtranslations.com/translate/minion.json?text=${encodeURIComponent(text)}`);
  const data = await response.json();
  return data.contents.translated;
}

// Example usage:
translateToMinion("Hello, I am hungry!").then(translatedText => {
  console.log(translatedText); // Output: "Bello, ka am con a banana!"
});
#   M i n i o n _ T r a n s l a t o r  
 