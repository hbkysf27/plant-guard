export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]); // Base64 content
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
};
