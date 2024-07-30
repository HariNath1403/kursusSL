export const postToGoogleSheets = async function (postUrl, arrExport) {
  try {
    const formData = new FormData();
    arrExport.forEach((val, index) => {
      formData.append(index, val);
    });

    const response = await fetch(postUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const jsonResp = await response.json();
      console.log("Response from Google Sheets:", jsonResp);
    } else {
      throw new Error("Failed to post data to Google Sheets");
    }
  } catch (err) {
    console.error("Error: ", err);
  }
};
