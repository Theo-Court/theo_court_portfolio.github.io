import { serve } from "https://deno.land/std@0.218.2/http/server.ts";
import { join, extname } from "https://deno.land/std/path/mod.ts";

// Function to load configuration settings from config.json
async function loadConfig() {
  const configFilePath = join(Deno.cwd(), 'server', 'json', 'config.json');
  const configFile = await Deno.readTextFile(configFilePath);
  const config = JSON.parse(configFile);
  return config;
}

// Load the configuration
const config = await loadConfig();
const PORT = config.port;

// Define paths for serving static files
const publicPath = join(Deno.cwd(), "public");
const cssPath = join(publicPath, "css");
const jsonPath = join(Deno.cwd(), "server", "json");
const jsPath = join(publicPath, "js");
const imagePath = join(publicPath, "img");

// Handler function to serve requests
const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  let filePath = "";
  let jsonFilePath = "";

  // Debugging: Log the requested URL and resolved file paths
  console.log("Requested URL:", url.pathname);

  if (url.pathname.startsWith("/json/niveau")) {
    const level = url.pathname.split("/").pop();
    jsonFilePath = join(jsonPath, `${level}.json`);
    console.log("Serving JSON from:", jsonFilePath); // Debugging log
    try {
      const fileContents = await Deno.readTextFile(jsonFilePath);
      return new Response(fileContents, { headers: { "Content-Type": "application/json" } });
    } catch (error) {
      console.error(error);
      return new Response('Not Found', { status: 404 });
    }
  }

  if (url.pathname.startsWith("/img/")) {
    const imageName = decodeURIComponent(url.pathname.substring(5));
    filePath = join(imagePath, imageName);
    const contentType = getContentType(filePath);
    console.log("Serving image from:", filePath); // Debugging log

    try {
      const fileContents = await Deno.readFile(filePath);
      return new Response(fileContents, { headers: { "Content-Type": contentType } });
    } catch (error) {
      console.error(`Failed to read ${filePath}:`, error);
      return new Response('Not Found', { status: 404 });
    }
  }

  if (url.pathname === '/') {
    filePath = join(publicPath, "html", "accueil.html");
  } else if (url.pathname.startsWith('/css/')) {
    filePath = join(cssPath, url.pathname.substring(5));
  } else if (url.pathname.startsWith('/js/')) {
    filePath = join(jsPath, url.pathname.substring(4));
  } else {
    filePath = join(publicPath, "html" + url.pathname);
  }

  console.log("Serving file from:", filePath); // Debugging log
  const contentType = getContentType(filePath);

  try {
    const fileContents = await Deno.readFile(filePath);
    return new Response(fileContents, { headers: { "Content-Type": contentType } });
  } catch (error) {
    console.error(`Failed to read ${filePath}:`, error);
    return new Response('Not Found', { status: 404 });
  }
};

// Function to determine the content type based on file extension
function getContentType(filePath: string): string {
  switch (extname(filePath).toLowerCase()) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'application/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    default:
      return 'text/plain';
  }
}

// Function to start the server
async function startServer() {
  const config = await loadConfig();
  const PORT = config.port;

  serve(handler, { port: PORT });
  console.log(`Server running on http://localhost:${PORT}`);
}

// Start the server
startServer();
