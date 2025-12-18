cat > src/index.ts << 'EOF'
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response('LibreTV Worker is now working!', {
      headers: { 'content-type': 'text/html' }
    });
  }
};
EOF
