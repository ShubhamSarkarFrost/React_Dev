const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUM = '0123456789';
const SYM = '!@#$%^&*()_+[]{}|;:,.<>?~`-=';

export function generatePassword({ length, includeUpper, includeLower, includeNumbers, includeSymbols }) {
  let pool = '';
  if (includeUpper) pool += UPPER;
  if (includeLower) pool += LOWER;
  if (includeNumbers) pool += NUM;
  if (includeSymbols) pool += SYM;

  if (!pool) return '';

  // ensure at least one of each selected type is present for stronger passwords
  const required = [];
  if (includeUpper) required.push(randomChar(UPPER));
  if (includeLower) required.push(randomChar(LOWER));
  if (includeNumbers) required.push(randomChar(NUM));
  if (includeSymbols) required.push(randomChar(SYM));

  const remainingLength = Math.max(0, length - required.length);
  let result = '';
  for (let i = 0; i < remainingLength; i++) {
    result += randomChar(pool);
  }

  // insert required chars at random positions
  required.forEach((ch) => {
    const pos = Math.floor(Math.random() * (result.length + 1));
    result = result.slice(0, pos) + ch + result.slice(pos);
  });

  // final shuffle
  result = shuffleString(result);
  return result;
}

export function getStrength(password) {
  if (!password) return 'Empty';
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return 'Weak';
  if (score <= 4) return 'Fair';
  return 'Strong';
}

function randomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function shuffleString(s) {
  const arr = s.split('');
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.join('');
}