export const uploadAadhaar = async (file) => {

    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post("/ocr", formData);

    return response.data;

};