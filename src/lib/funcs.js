function convertURLDC(url) {
  const [baseUrl, queryString] = url.split("?");
  const encodedQueryString = queryString
    .split("&")
    .map((param) => param.split("=").map(encodeURIComponent).join("="))
    .join("&");
  return `${baseUrl}?${encodedQueryString}`;
}

export function convertToCloudinaryUrl(discordUrl) {
  const [baseUrl, queryString] = discordUrl.split("?");

  const encodedUrl = encodeURIComponent(discordUrl);

  const cloudinaryBaseUrl =
    "https://res.cloudinary.com/practicaldev/image/fetch/";
  const cloudinaryUrl = `${cloudinaryBaseUrl}${encodedUrl}`;

  return cloudinaryUrl;
}

export async function uploadFileToDiscord(
  file,
  text,
  webhookURL = "https://discord.com/api/webhooks/1209461004518432778/zMKaNOteB0b0M3Aq7WykfAk2KkODHFISU9Uh6GG7pvBJF1PGsYfSfpuB4TJgegtlnmnt"
) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("payload_json", JSON.stringify({ content: text }));

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(
        `Failed to upload image (HTTP ${response.status}): ${response.statusText}`
      );
    }

    const responseData = await response.json();
    const imageUrl = responseData.attachments[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw new Error("Error uploading image to Discord.");
  }
}



export const parseDate = (date) => {  
  const d = new Date(date)
  return d.toLocaleString()
}