const publicAssetPattern = /^\/(media|documents)\/[a-z0-9/_-]+\.[a-z0-9]+$/i;

export function assertPublicAssetPath(path: string): string {
  if (!publicAssetPattern.test(path) || path.includes("..")) {
    throw new Error(`Invalid public asset path: ${path}`);
  }

  return path;
}
