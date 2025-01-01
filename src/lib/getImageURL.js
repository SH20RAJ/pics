// its working fine
export async function uploadImageToGitHub(imageUrl, filePath) {
  try {
    // Fetch the image data from the URL
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image from URL: ${response.statusText}`);
    }

    // Convert the response to an ArrayBuffer and then to a Base64 string
    const arrayBuffer = await response.arrayBuffer();
    const base64Content = Buffer.from(arrayBuffer).toString("base64");

    // GitHub API URL for creating/updating a file
    const url = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${filePath}`;

    // Check if the file already exists to get its SHA
    let sha = null;
    const checkFileResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    if (checkFileResponse.ok) {
      const fileData = await checkFileResponse.json();
      sha = fileData.sha; // Get the SHA of the existing file
    }

    // Prepare the request payload
    const payload = {
      message: `Upload ${filePath}`,
      content: base64Content,
      ...(sha && { sha }), // Include SHA if the file already exists
    };

    // Send the request to GitHub
    const uploadResponse = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json();
      throw new Error(`GitHub API error: ${errorData.message}`);
    }

    const responseData = await uploadResponse.json();

    // Construct the desired URL
    const commitSha = responseData.commit.sha;
    const githubUrl = `https://github.com/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/blob/${commitSha}/${filePath}`;
    const jsDelivrUrl = `https://cdn.jsdelivr.net/gh/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}@${commitSha}/${filePath}`;

    console.log("Image uploaded successfully:", githubUrl);
    console.log("jsDelivr URL:", jsDelivrUrl);

    return jsDelivrUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

export async function ImageUpload(formData) {
  try {
    // Extract file, path, and tags from FormData
    const file = formData.get("file"); // The file blob
    const path = formData?.get("path") || "uploads/sample.png"; // Desired file path
    const tags = formData?.get("tags"); // Optional tags (unused but can be logged)

    if (!file) {
      throw new Error("File are required.");
    }

    console.log(`Uploading file to: ${path}, with tags: ${tags}`);

    // Read the file and convert it to a Base64 string
    const arrayBuffer = await file.arrayBuffer();
    const base64Content = Buffer.from(arrayBuffer).toString("base64");

    // GitHub API URL for creating/updating a file
    const url = `https://api.github.com/repos/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}/contents/${path}`;

    // Check if the file already exists to get its SHA
    let sha = null;
    const checkFileResponse = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });
    if (checkFileResponse.ok) {
      const fileData = await checkFileResponse.json();
      sha = fileData.sha; // Get the SHA of the existing file
    }

    // Prepare the request payload
    const payload = {
      message: `Upload ${path}`,
      content: base64Content,
      ...(sha && { sha }), // Include SHA if the file already exists
    };

    // Send the request to GitHub
    const uploadResponse = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!uploadResponse.ok) {
      const errorData = await uploadResponse.json();
      throw new Error(`GitHub API error: ${errorData.message}`);
    }

    const responseData = await uploadResponse.json();

    // Construct the desired jsDelivr URL
    const commitSha = responseData.commit.sha;
    const jsDelivrUrl = `https://cdn.jsdelivr.net/gh/${process.env.GITHUB_OWNER}/${process.env.GITHUB_REPO}@${commitSha}/${path}`;

    console.log("Image uploaded successfully. jsDelivr URL:", jsDelivrUrl);
    return jsDelivrUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}
