export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // 主页
    if (url.pathname === '/') {
      return new Response(
        `<!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>LibreTV</title>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                margin: 0;
                padding: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                min-height: 100vh;
              }
              .container {
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
              }
              h1 {
                font-size: 3em;
                margin-bottom: 20px;
              }
              .status {
                background: rgba(255,255,255,0.1);
                padding: 20px;
                border-radius: 10px;
                margin: 30px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>📺 LibreTV</h1>
              <div class="status">
                <p>Worker is running successfully!</p>
                <p>🟢 Status: Online</p>
                <p>📅 Date: ${new Date().toLocaleString()}</p>
              </div>
              <p>Welcome to LibreTV streaming service</p>
            </div>
          </body>
        </html>`,
        {
          headers: {
            'content-type': 'text/html; charset=utf-8',
          }
        }
      );
    }
    
    // API 端点
    if (url.pathname === '/api/status') {
      return Response.json({
        status: 'online',
        service: 'LibreTV',
        timestamp: new Date().toISOString(),
        version: '1.0.0'
      });
    }
    
    // 404 页面
    return new Response('Page not found', {
      status: 404,
      headers: { 'content-type': 'text/plain' }
    });
  }
};
