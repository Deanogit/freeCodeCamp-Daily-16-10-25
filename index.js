// Email Validator
// Given a string, determine if it is a valid email address using the following constraints:

// It must contain exactly one @ symbol.
// The local part (before the @):
// Can only contain letters (a-z, A-Z), digits (0-9), dots (.), underscores (_), or hyphens (-).
// Cannot start or end with a dot.
// The domain part (after the @):
// Must contain at least one dot.
// Must end with a dot followed by at least two letters.
// Neither the local or domain part can have two dots in a row.

function validate(email) {
  console.log(email);

  // split email by @
  const arr = email.split('@');

  // contain exactly one @ symbol
  const hasExactlyOneAt = arr.length === 2;
  console.log(hasExactlyOneAt);
  if (!hasExactlyOneAt) return false;

  // The local part (before the @)
  console.log(arr[0]);
  // can only contain letters (a-z), digits (0-9), dots (.), underscores (_), or hyphens (-)
  // cannot start or end with a dot.
  // const localRegex = /^[^\.][a-z0-9._]*[^\.]$/
  // const localTest = localRegex.test(arr[0])
  // console.log(localTest)

  function validateLocal(local) {
    // 1. Check for double dots
    if (local.includes('..')) return false;

    // 2. Check for starting or ending with a dot
    if (local.startsWith('.') || local.endsWith('.')) return false;

    // 3. Check for allowed characters only
    const allowedCharsRegex = /^[a-zA-Z0-9._-]+$/;
    if (!allowedCharsRegex.test(local)) return false;

    return true;
  }

  if (validateLocal(arr[0]) === false) return false;

  // domain
  console.log(arr[1]);
  // does NOT contain two dots in a row
  if (arr[1].includes('..')) return false;

  // contains at least one dot
  const domainDot = arr[1].includes('.');
  if (!domainDot) return false;
  console.log(domainDot);
  // must end with a dot followed by two letters
  const domainRegex = /[.][a-zA-Z]{2,}$/;
  if (!domainRegex.test(arr[1])) return false;

  return true;

  // return email;
}
