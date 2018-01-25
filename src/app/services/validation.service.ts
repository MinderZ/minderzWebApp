import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
  PHONE_NUMBER_REGX: string = "0[0-9]{9}";
  CHECK_NUMBER_REGX: string = "[0-9]+$";
  CHECK_CHARACTERS_REGX: string = "/^[a-zA-Zs]+$/";

  constructor() {}

  checkLength(valueToCheck: string, length: number) {
    return valueToCheck.length > length;
  }

  checkNum(valueToCheck: string) {
    return valueToCheck.match(this.CHECK_NUMBER_REGX);
  }

  checkLetters(valueToCheck: string) {
    return valueToCheck.match(this.CHECK_CHARACTERS_REGX);
  }

  checkCellphoneNum(value: string): boolean {
    if (value === undefined || !value.match(this.PHONE_NUMBER_REGX)) {
      return false;
    }
    return true;
  }

  // Validation of ID
  checkIdNumber(idNumber: string): boolean {
    if (!idNumber || idNumber.length !== 13 || !this.checkNum(idNumber)) {
      return false;
    }

    // get first 6 digits as a valid date
    const tempDate = new Date(
      Number.parseInt(idNumber.substring(0, 2)),
      Number.parseInt(idNumber.substring(2, 4)) - 1,
      Number.parseInt(idNumber.substring(4, 6))
    );

    const id_date = tempDate.getDate();
    const id_month = tempDate.getMonth();
    const id_year = tempDate.getFullYear();

    const fullDate = id_date + "-" + (id_month + 1) + "-" + id_year;

    const tempDateSec = (tempDate.getFullYear() + "").substring(2, 4);

    if (
      !(tempDateSec === idNumber.substring(0, 2)) &&
      !(id_month === Number.parseInt(idNumber.substring(2, 4)) - 1) &&
      !(id_date === Number.parseInt(idNumber.substring(5, 6)))
    ) {
      return false;
    }

    // get the gender
    const genderCode = idNumber.substring(6, 10);
    const gender = parseInt(genderCode, 10) < 5000 ? "Female" : "Male";

    // get country ID for citzenship
    const citzenship =
      parseInt(idNumber.substring(10, 11), 10) === 0 ? "Yes" : "No";

    // apply Luhn formula for check-digits
    let tempTotal = 0;
    let checkSum = 0;
    let multiplier = 1;
    for (let i = 0; i < 13; ++i) {
      tempTotal = parseInt(idNumber.charAt(i), 10) * multiplier;
      if (tempTotal > 9) {
        tempTotal =
          parseInt(tempTotal.toString().charAt(0), 10) +
          parseInt(tempTotal.toString().charAt(1), 10);
      }
      checkSum = checkSum + tempTotal;
      multiplier = multiplier % 2 === 0 ? 1 : 2;
    }
    if (checkSum % 10 !== 0) {
      return false;
    }
    return true;
  }
}
