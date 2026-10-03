import { hasStudioSession, privateHeaders, studioConfig, studioFile, STUDIO_PATH } from '@/lib/formation-studio/auth';

export const dynamic = 'force-dynamic';

// GET /formation-studio — the Drone Formation Studio when signed in, otherwise the sign-in page.
export async function GET(request: Request) {
  if (!studioConfig()) {
    return html(page('Not set up yet',
      `<p class="msg">The studio login is not configured on this server. Set <code>FORMATION_STUDIO_USER</code>,
       <code>FORMATION_STUDIO_PASSWORD</code> and <code>FORMATION_STUDIO_SECRET</code> (32+ characters) in the
       hosting environment variables, then redeploy.</p>`), 503);
  }

  if (await hasStudioSession()) {
    const studio = (await studioFile('index.html')).toString('utf8');
    // small sign-out control on top of the studio page
    const signOut = `<form method="post" action="${STUDIO_PATH}/logout" style="position:fixed;right:12px;bottom:44px;z-index:50;margin:0">
  <button type="submit" style="background:rgba(18,24,41,.9);color:#e6eaf5;border:1px solid #26304d;border-radius:7px;padding:6px 10px;font:12px system-ui;cursor:pointer">Sign out</button>
</form>`;
    return html(studio.replace('</body>', `${signOut}\n</body>`));
  }

  const failed = new URL(request.url).searchParams.has('error');
  return html(page('Sign in', `
    <form method="post" action="${STUDIO_PATH}/login" autocomplete="on">
      <label>ID<input name="user" autocomplete="username" required autofocus></label>
      <label>Password<input name="password" type="password" autocomplete="current-password" required></label>
      ${failed ? '<p class="err">Wrong ID or password.</p>' : ''}
      <button type="submit">Sign in</button>
    </form>`), failed ? 401 : 200);
}

function html(body: string, status = 200) {
  return new Response(body, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', ...privateHeaders } });
}

function page(title: string, inner: string) {
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow">
<title>${title} · Drone Formation Studio</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px;
    background: radial-gradient(ellipse at top, #16213f, #02040b 70%); color: #e6eaf5; font: 15px/1.5 system-ui, sans-serif; }
  .card { width: 100%; max-width: 360px; background: #121829; border: 1px solid #26304d; border-radius: 14px; padding: 26px 24px; }
  .logo { display: block; height: 34px; margin: 0 auto 14px; }
  h1 { font-size: 18px; text-align: center; margin: 0 0 4px; }
  .sub { text-align: center; color: #8b95b3; font-size: 13px; margin: 0 0 18px; }
  label { display: block; font-size: 13px; color: #c5cbe0; margin-bottom: 12px; }
  input { display: block; width: 100%; margin-top: 5px; padding: 10px 11px; border-radius: 8px; border: 1px solid #26304d;
    background: #182038; color: #e6eaf5; font: inherit; }
  input:focus { outline: 2px solid #5ad1ff; outline-offset: 0; }
  button { width: 100%; padding: 11px; border: 0; border-radius: 8px; background: #5ad1ff; color: #04121b; font: 600 15px system-ui; cursor: pointer; margin-top: 4px; }
  .err { color: #ff5d6c; font-size: 13px; margin: 0 0 10px; }
  .msg { color: #c5cbe0; font-size: 14px; }
  code { color: #5ad1ff; }
</style></head>
<body><main class="card">
  <img class="logo" src="/logo.png" alt="FLYBIT Dynamics">
  <h1>Drone Formation Studio</h1>
  <p class="sub">${title === 'Sign in' ? 'Internal tool — sign in to continue' : title}</p>
  ${inner}
</main></body></html>`;
}
