import manifest from './public-assets-manifest.json';

type PublicAssetManifest = Record<string, string>;

const manifestMap = manifest as PublicAssetManifest;

/** Resolve a local /public path to its Zata AVIF URL (falls back to local path if not uploaded). */
export function publicAsset(localPath: string): string {
  if (/^https?:\/\//i.test(localPath)) return localPath;
  const key = localPath.startsWith('/') ? localPath : `/${localPath}`;
  return manifestMap[key] ?? key;
}

export function mapPublicAssets(paths: readonly string[]): string[] {
  return paths.map(publicAsset);
}

export const DEFAULT_BLOG_IMAGE = publicAsset('/about_hero.png');
export const DEFAULT_LOGO = publicAsset('/logo.png');
