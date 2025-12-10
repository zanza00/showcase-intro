const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const certsDir = path.resolve(__dirname, "../certs");
const certFile = path.join(certsDir, "localhost.pem");
const keyFile = path.join(certsDir, "localhost-key.pem");

// Create certs directory if it doesn't exist
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
  console.log("✓ Created certs directory");
}

// Remove old certificates if they exist
if (fs.existsSync(certFile)) {
  fs.unlinkSync(certFile);
  console.log("✓ Removed old certificate");
}
if (fs.existsSync(keyFile)) {
  fs.unlinkSync(keyFile);
  console.log("✓ Removed old key");
}

// Install mkcert CA in system trust store (including NSS for Firefox)
try {
  console.log("Installing mkcert CA (including Firefox NSS)...");
  execSync("mkcert -install", { stdio: "inherit" });
  console.log("✓ mkcert CA installed successfully");
} catch (error) {
  console.warn("⚠ Failed to install mkcert CA. Certificates may not be trusted.");
}

// Generate new certificate
try {
  console.log("Generating new SSL certificate...");
  execSync(`mkcert -cert-file "${certFile}" -key-file "${keyFile}" localhost 127.0.0.1 ::1`, {
    stdio: "inherit",
    cwd: certsDir,
  });
  console.log("✓ SSL certificate generated successfully");
} catch (error) {
  console.error("Failed to generate SSL certificate.");
  console.error("Make sure mkcert is installed: https://github.com/FiloSottile/mkcert");
  process.exit(1);
}
