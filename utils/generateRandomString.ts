export function generateRandomString(length: number): string {
    const charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result: string = "";
  
    for (let i: number = 0; i < length; i++) {
      const randomIndex: number = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }