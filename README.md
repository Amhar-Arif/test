# Serendib · Sri Lanka — Static Travel Website (AWS Ready)

A zero-dependency static travel portal for **Sri Lanka**, built with pure HTML5, CSS3, SVG, Vanilla JavaScript, and locally bundled high-resolution photography—ready for instant hosting on **AWS Amplify**, **Amazon S3 Static Website Hosting**, or **Amazon S3 + CloudFront**.

## Project Structure

```text
testAWS/
├── index.html                  # Main entry document (AWS S3 Index document)
├── 404.html                    # Custom error page (AWS S3 / CloudFront Error document)
├── styles.css                  # Responsive editorial stylesheet
├── app.js                      # Interactive route map, monsoon compass & budget calculator
├── favicon.svg                 # Ceylon lotus vector icon
├── robots.txt                  # Search crawler rules
└── assets/
    └── images/                 # Self-contained local destination photography
        ├── sigiriya-hero.jpg
        ├── ella-train.jpg
        ├── mirissa-beach.jpg
        ├── galle-fort.jpg
        ├── yala-leopard.jpg
        └── kandy-temple.jpg
```

---

## Option 1: Fastest Drag-and-Drop Hosting with AWS Amplify (HTTPS Included)

1. Zip the contents of this folder (`index.html`, `404.html`, `styles.css`, `app.js`, `favicon.svg`, `robots.txt`, and `assets/`).
   - **Important:** Zip the *files inside* `testAWS` directly so `index.html` is at the root of the `.zip` archive.
2. Open the **AWS Management Console** → **AWS Amplify** → **Create new app** → **Deploy without Git**.
3. Drag and drop the `.zip` file and click **Save and deploy**. Amplify immediately gives you a global `https://...amplifyapp.com` URL.

---

## Option 2: Amazon S3 Static Website Hosting

### Via AWS Console
1. Open **Amazon S3** → **Create bucket** (choose a globally unique name, e.g., `sri-lanka-travel-guide-2026`).
2. Uncheck **Block all public access** (if using direct S3 website endpoint; keep it checked if using CloudFront Origin Access Control).
3. Upload all files and the `assets/` folder to the root of your bucket.
4. Go to the **Properties** tab → scroll down to **Static website hosting** → **Edit** → **Enable**:
   - **Index document:** `index.html`
   - **Error document:** `404.html`
5. Go to the **Permissions** tab → **Bucket policy** and add public read access (replace `YOUR-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

### Via AWS CLI (One Command Sync)

```powershell
# Upload all static files with clean cache headers
aws s3 sync . s3://YOUR-BUCKET-NAME --exclude "README.md" --delete
```

---

## Option 3: Production HTTPS CDN with Amazon S3 + CloudFront (Recommended)

1. Keep your S3 bucket **private** (*Block all public access: ON*) and upload all files above.
2. Open **Amazon CloudFront** → **Create distribution**:
   - **Origin domain:** Select your S3 bucket.
   - **Origin access:** Choose **Origin access control settings (recommended)** and let CloudFront copy the bucket policy for you.
   - **Viewer protocol policy:** **Redirect HTTP to HTTPS**.
   - **Default root object:** `index.html`
3. Under **Error pages** in your CloudFront distribution, add a custom error response mapping `403` / `404` to `/404.html` with HTTP response code `404`.
