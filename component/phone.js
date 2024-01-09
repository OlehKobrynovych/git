export const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber?.length) {
        const strippedPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
        if (strippedPhoneNumber.length === 12) {
            let formattedPhoneNumber = '+380';
            if (strippedPhoneNumber.startsWith('380')) {
                formattedPhoneNumber += ` (${strippedPhoneNumber.substring(3, 5)}) ${strippedPhoneNumber.substring(5, 8)}-${strippedPhoneNumber.substring(8, 10)}-${strippedPhoneNumber.substring(10, 12)}`;
            } else if (strippedPhoneNumber.startsWith('0')) {
                formattedPhoneNumber += ` (${strippedPhoneNumber.substring(1, 3)}) ${strippedPhoneNumber.substring(3, 6)}-${strippedPhoneNumber.substring(6, 8)}-${strippedPhoneNumber.substring(8, 10)}`;
            } else {
                formattedPhoneNumber += ` (${strippedPhoneNumber.substring(0, 2)}) ${strippedPhoneNumber.substring(2, 5)}-${strippedPhoneNumber.substring(5, 7)}-${strippedPhoneNumber.substring(7, 9)}`;
            }
            return formattedPhoneNumber;
        } else {
            return phoneNumber
        }
    }
  }