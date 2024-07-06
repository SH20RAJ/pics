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
  const d = new Date(date);
  return d.toLocaleString();
};

export const viewParser = (view) => {
  // 1k 1m 1b etc
  if (view < 1000) {
    return view + "";
  }
  if (view < 1000000) {
    return (view / 1000).toFixed(1) + "k";
  }
  if (view < 1000000000) {
    return (view / 1000000).toFixed(1) + "m";
  }
  if (view >= 1000000000) {
    return (view / 1000000000).toFixed(1) + "b";
  }
  if (view === 0) {
    return "No ";
  }
  return view;
};

export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

export const convertToImageCDN = ({url , height, width, format, fit }) => {
  const baseurl = 'https://imagecdn.app/v1/images/';
  if(!url) return;
  if(!height && !width && !format && !fit) return baseurl + encodeURIComponent(url);
  let cdnurl = baseurl + encodeURIComponent(url) + '?height=' + height + '&width=' + width + '&format=' + format + '&fit=' + fit;
  return cdnurl;
}
