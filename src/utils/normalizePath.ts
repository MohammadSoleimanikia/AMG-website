export function normalizePath(path?: string) {
  if (!path) return '';

  // if have search params it remove it 
  const cleanPath = path.split('?')[0];
  
  if (cleanPath !== '/' && cleanPath.endsWith('/')) {
    return cleanPath.slice(0, -1);
  }

  return cleanPath;
}
