// Helper to get correct asset paths for GitHub Pages deployment
export function getAssetPath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/Portfolio' : '';
  return `${basePath}${path}`;
}
