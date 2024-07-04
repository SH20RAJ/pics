# Pics Shade

Welcome to Pics Shade, the ultimate image hosting solution for your website! With Pics Shade, you can easily upload, manage, and deliver images with high performance and reliability.

## Features

- **Freemium Model**: Host up to 10,000 images for free. For additional storage, it's just $10 per 10,000 images.
- **API Key Access**: Securely upload and manage your images using API keys.
- **CDN Delivery**: Fast and efficient image delivery using a Content Delivery Network (CDN).
- **Tag Management**: Easily organize and manage your images using tags.
- **S3 Storage**: Robust and scalable image storage using Amazon S3.
- **Cloudinary CDN**: Leverage Cloudinary for enhanced CDN services.
- **Free Image Resizing**: Automatically resize images to meet your needs without extra cost.
- **More Features**: Continuously adding more features to enhance your image hosting experience.

## Getting Started

### 1. Sign Up

Create an account on [Pics Shade](https://pics.shade.cool/) and get started with your free tier.

### 2. Obtain API Key

After signing up, navigate to your account dashboard to generate your API key. This key will be used to authenticate your requests.

### 3. Upload Images

Use the API to upload your images. Here’s a quick example using `curl`:

```sh
curl -X POST https://api.pics.shade.cool/upload \
     -H "Authorization: Bearer YOUR_API_KEY" \
     -F "image=@/path/to/your/image.jpg" \
     -F "tags=example,tag"
```

### 4. Manage Images

Organize and manage your images by assigning tags during the upload process or via the management dashboard.

### 5. Deliver Images

Access your images via the CDN. Simply use the provided URL:

```
https://cdn.pics.shade.cool/your-image-id
```

### 6. Resize Images

Resize your images on the fly by adding parameters to the URL:

```
https://cdn.pics.shade.cool/your-image-id?width=300&height=200
```

## Pricing

- **Free**: Up to 10,000 images.
- **Premium**: $10 for every additional 10,000 images.

## Documentation

For detailed API documentation and more advanced usage, visit our [Docs](https://pics.shade.cool/docs).

## Support

If you need any help, feel free to contact our support team at [support@shade.cool](mailto:support@shade.cool).

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for choosing Pics Shade for your image hosting needs!