import { useMediaQuery } from 'react-responsive';
import packageJson from 'package.json';

export const noop = () => {};

export const useIsMobile = () => useMediaQuery({ query: '(max-width: 640px)' });
export const useIsDesktop = () =>
  useMediaQuery({ query: '(max-width: 1280px)' });
export const getVersion = () => `v${packageJson.version}`;

export const base64ToArrayBuffer = (base64: string) => {
  const binaryString = window.atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i += 1) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes.buffer;
};