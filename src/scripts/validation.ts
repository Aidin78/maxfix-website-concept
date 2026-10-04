/** Field validators shared by the request form. Pure functions, no DOM. */

export const MAX_FILES = 5;
export const MAX_FILE_BYTES = 10 * 1024 * 1024;

/** Accepted upload types, mirroring the original maxfix.nu form. */
export const ALLOWED_EXTENSIONS = [
  'pdf',
  'jpg',
  'jpeg',
  'png',
  'gif',
  'bmp',
  'doc',
  'docx',
  'ppt',
  'pps',
  'pptx',
  'xls',
  'xlsx',
  'mdb',
  'odt',
  'odp',
  'ods',
  'odg',
  'odc',
  'odb',
  'odf',
  'rtf',
  'txt',
];

export function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
}

export function isPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!/^[+\d\s\-()]+$/.test(trimmed)) return false;
  const digits = trimmed.replace(/\D/g, '');
  return digits.length >= 7 && digits.length <= 15;
}

/**
 * Swedish personal identity number (personnummer / samordningsnummer).
 * Accepts YYYYMMDD-XXXX, YYMMDD-XXXX, with or without separator.
 */
export function isPersonnummer(value: string): boolean {
  const compact = value.trim().replace(/[\s\-+]/g, '');
  if (!/^\d{10}$|^\d{12}$/.test(compact)) return false;

  const ten = compact.length === 12 ? compact.slice(2) : compact;
  const month = Number(ten.slice(2, 4));
  const day = Number(ten.slice(4, 6));
  // Samordningsnummer add 60 to the day.
  const realDay = day > 60 ? day - 60 : day;
  if (month < 1 || month > 12 || realDay < 1 || realDay > 31) return false;

  // Luhn checksum over the last ten digits.
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    let n = Number(ten[i]);
    if (i % 2 === 0) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
  }
  return sum % 10 === 0;
}

export function fileExtension(name: string): string {
  const dot = name.lastIndexOf('.');
  return dot === -1 ? '' : name.slice(dot + 1).toLowerCase();
}

export function isAllowedFile(file: File): boolean {
  return ALLOWED_EXTENSIONS.includes(fileExtension(file.name));
}

export function formatBytes(bytes: number, locale: string): string {
  const fmt = new Intl.NumberFormat(locale, { maximumFractionDigits: 1 });
  if (bytes < 1024 * 1024) return `${fmt.format(Math.max(1, Math.round(bytes / 1024)))} kB`;
  return `${fmt.format(bytes / (1024 * 1024))} MB`;
}
